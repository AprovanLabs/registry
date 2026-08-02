/**
 * Isolate runtime interface for tool execution.
 *
 * The gateway calls this module to execute @utdk/* tool operations. Provider
 * modules are executed directly, in-process.
 *
 * Credentials are injected at call time — never passed through process.env.
 *
 * Provider modules are imported on first use and kept in an LRU cache at
 * module scope so high-use providers stay hot across warm invocations while
 * rarely-used ones are evicted. Cache size is configurable via
 * `PROVIDER_CACHE_SIZE` (default: 20).
 */

import type { CredentialPayload } from "./credentials.js";
import { getRegistryProviders } from "./toolCache.js";

// ---------------------------------------------------------------------------
// Public interface
// ---------------------------------------------------------------------------

export interface IsolateExecuteOptions {
  /** @utdk provider name, e.g. "github" or "google/books". Also decides the
   *  client-factory export name (`createGithubClient`). */
  provider: string;
  /**
   * Import specifier, when the implementation does not live in the UTDK
   * catalogue. Defaults to `utdk/<provider>`.
   *
   * First-party providers are the reason this exists: a registered machine
   * (`@aprovan/sandbox-host`) implements the public `@utdk/sandbox` contract
   * but is not a vendor, so it has no business in the vendor namespace. The
   * factory name still comes from `provider`, so `{ provider: "machine",
   * module: "@aprovan/sandbox-host" }` imports that package and calls
   * `createMachineClient`.
   */
  module?: string;
  /** Dot-separated operation path, e.g. "repos.list" or "users.getByUsername" */
  operation: string;
  /** Arguments for the operation */
  args: Record<string, unknown>;
  /** Credential payload to inject at call time (not via process.env) */
  credentials: CredentialPayload | undefined;
  /**
   * API root override (OpenAI-SDK `baseURL` semantics). Used by LLM chat
   * provider aliases that ride an OpenAI-compatible module against a
   * different upstream (see src/llm.ts).
   */
  baseUrl?: string;
  /** Execution timeout in ms (default: 30_000) */
  timeout?: number;
}

export interface IsolateResult {
  success: boolean;
  data?: unknown;
  error?: string;
  /** Duration of the isolated execution in ms */
  durationMs: number;
}

export interface IsolateExecutor {
  execute(options: IsolateExecuteOptions): Promise<IsolateResult>;
}

// ---------------------------------------------------------------------------
// LRU provider module cache
// ---------------------------------------------------------------------------
//
// Providers are imported on first use and kept in a small LRU cache at module
// scope so the cache survives across warm invocations. Map preserves insertion
// order, so recency is maintained by delete + re-set on access; the oldest
// entry is evicted when the cache exceeds `maxSize`.

export interface ProviderModule {
  [key: string]: unknown;
}

const DEFAULT_PROVIDER_CACHE_SIZE = 20;

function getProviderCacheMaxSize(): number {
  const raw = Number(process.env["PROVIDER_CACHE_SIZE"]);
  return Number.isFinite(raw) && raw > 0 ? raw : DEFAULT_PROVIDER_CACHE_SIZE;
}

const providerCache = new Map<string, ProviderModule>();

/**
 * Refuse to reach the module loader with a namespace the catalogue does not
 * contain. Without this, a core-service name that missed its in-process
 * short-circuit (a stale build, a typo'd namespace) surfaces as the loader's
 * own error — `Package subpath './sandboxes' is not defined by "exports"` —
 * which names nothing the caller can act on.
 *
 * When the registry manifest is unresolvable (utdk not built, as in unit
 * tests), the guard stands down rather than rejecting everything.
 */
let catalogueProviders: Set<string> | undefined;

function assertCatalogueProvider(provider: string): void {
  catalogueProviders ??= new Set(getRegistryProviders());
  if (catalogueProviders.size === 0 || catalogueProviders.has(provider)) return;
  throw new Error(
    `Unknown tool namespace "${provider}": not a provider in the UTDK catalogue, ` +
      `and not a core service or interface this gateway build recognizes. ` +
      `If it is a newer core service, the gateway needs redeploying.`,
  );
}

/**
 * Load a `@utdk/*` provider module by name, caching it in the LRU cache.
 * On a cache hit the cached module reference is reused (no dynamic import).
 * On a miss the module is imported, cached, and the oldest entry is evicted
 * if the cache exceeds its configured max size.
 */
export async function getProviderModule(
  provider: string,
  moduleSpecifier?: string,
): Promise<ProviderModule> {
  const cached = providerCache.get(provider);
  if (cached) {
    // Move to most-recently-used position.
    providerCache.delete(provider);
    providerCache.set(provider, cached);
    return cached;
  }

  // Two import forms, one cache. The template-literal form is what keeps the
  // 49-provider catalogue out of every consumer's type graph (see the utdk
  // build notes); a first-party module is imported by its own name.
  if (!moduleSpecifier) assertCatalogueProvider(provider);
  const mod = (
    moduleSpecifier
      ? ((await import(/* @vite-ignore */ moduleSpecifier)) as ProviderModule)
      : ((await import(`utdk/${provider}`)) as ProviderModule)
  );
  putProviderModule(provider, mod);
  return mod;
}

/**
 * Insert (or replace) a provider module in the cache, evicting the
 * least-recently-used entry when over the configured size.
 */
function putProviderModule(provider: string, mod: ProviderModule): void {
  providerCache.delete(provider);
  providerCache.set(provider, mod);
  const maxSize = getProviderCacheMaxSize();
  while (providerCache.size > maxSize) {
    const oldest = providerCache.keys().next().value;
    if (oldest === undefined) break;
    providerCache.delete(oldest);
  }
}

/**
 * Inject a provider module directly into the cache (test seam). Lets tests
 * avoid the real dynamic import (`utdk/<provider>` is only resolvable after
 * the utdk workspace package is built).
 */
export function setProviderModuleForTesting(provider: string, mod: ProviderModule): void {
  putProviderModule(provider, mod);
}

/** Whether a provider module is currently cached. */
export function isProviderCached(provider: string): boolean {
  return providerCache.has(provider);
}

/** Drop a single provider from the cache. */
export function invalidateProvider(provider: string): void {
  providerCache.delete(provider);
}

/** Clear every cached provider module (used in tests). */
export function resetProviderCache(): void {
  providerCache.clear();
}

// ---------------------------------------------------------------------------
// Direct executor — in-process execution
// ---------------------------------------------------------------------------

/**
 * Build an Authorization header value from a credential payload.
 */
function buildAuthHeaders(
  payload: CredentialPayload | undefined,
): Record<string, string> {
  if (!payload) return {};

  switch (payload.type) {
    case "bearer_token":
      return { Authorization: `Bearer ${payload.token}` };
    case "api_key":
      return { [payload.headerName ?? "X-Api-Key"]: payload.value };
    case "oauth2_client":
    case "oauth2_authcode":
      // Full OAuth2 token refresh is handled by @utdk/common auth providers.
      // We cannot re-hydrate the full OAuth2 flow without more context, so we
      // return an empty object and let the SDK use env var fallback.
      return {};
  }
}

/**
 * Convert a provider name (e.g. "github", "google-cloud") to a PascalCase
 * client factory name (e.g. "createGithubClient", "createGoogleCloudClient").
 */
function toClientFactoryName(provider: string): string {
  // Split on "/" and "." too — suite providers ("google/books") pascal-case
  // per segment, matching the bundler's generated createGoogleBooksClient.
  const pascalCase = provider
    .split(/[-_/.]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join("");
  return `create${pascalCase}Client`;
}

class DirectExecutor implements IsolateExecutor {
  async execute(options: IsolateExecuteOptions): Promise<IsolateResult> {
    const start = Date.now();

    try {
      // Load the provider module via the LRU cache. On a cache hit this skips
      // the dynamic import entirely; on a miss the module is imported once
      // and cached for subsequent calls.
      const mod = await getProviderModule(options.provider, options.module);

      // Get the named client factory export (e.g. createGithubClient)
      // This allows us to inject credentials at construction time
      const factoryName = toClientFactoryName(options.provider);
      const factory = mod[factoryName] as
        | ((opts?: { headers?: Record<string, string>; baseUrl?: string }) => Promise<unknown>)
        | undefined;

      if (typeof factory !== "function") {
        throw new Error(
          `Provider "${options.provider}" does not export "${factoryName}"`,
        );
      }

      // Build auth headers for injection
      const authHeaders = buildAuthHeaders(options.credentials);

      // Create the client with credential injection and await it
      const client = (await factory({
        headers: authHeaders,
        ...(options.baseUrl ? { baseUrl: options.baseUrl } : {}),
      })) as Record<string, unknown>;

      // Debug: log available top-level keys on the client
      const clientKeys = Object.keys(client);

      // Resolve the operation path (e.g. "orgs.listForUser" → client.orgs.listForUser)
      const parts = options.operation.split(".");
      let current: unknown = client;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i]!;
        if (current == null || typeof current !== "object") {
          const resolvedPath = parts.slice(0, i).join(".");
          throw new Error(
            `Operation path "${options.operation}" not found on provider "${options.provider}": ` +
              `"${part}" is not accessible after "${resolvedPath || "(root)"}". ` +
              `Available keys at root: [${clientKeys.slice(0, 10).join(", ")}${clientKeys.length > 10 ? "..." : ""}]`,
          );
        }
        current = (current as Record<string, unknown>)[part];
      }

      if (typeof current !== "function") {
        throw new Error(
          `Operation "${options.operation}" is not a function on provider "${options.provider}"`,
        );
      }

      const result = await (
        current as (...args: unknown[]) => Promise<unknown>
      )(options.args);

      return {
        success: true,
        data: result,
        durationMs: Date.now() - start,
      };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : String(err),
        durationMs: Date.now() - start,
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Public factory
// ---------------------------------------------------------------------------

let _executor: IsolateExecutor | undefined;

export async function getExecutor(): Promise<IsolateExecutor> {
  if (_executor) return _executor;

  _executor = new DirectExecutor();
  return _executor;
}

/** Override the executor (used in tests). */
export function setExecutor(executor: IsolateExecutor): void {
  _executor = executor;
}

export function resetExecutor(): void {
  _executor = undefined;
}

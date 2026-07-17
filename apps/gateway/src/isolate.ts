/**
 * Isolate runtime interface for sandboxed tool execution.
 *
 * The gateway calls this module to execute @utdk/* tool operations.
 * When `packages/utdk-isolate` (APR-15) is available, it is loaded dynamically
 * and used for sandboxed execution. Until then, a direct execution fallback
 * is provided for development purposes.
 *
 * Credentials are injected at call time — never passed through process.env.
 *
 * Provider modules are imported on first use and kept in an LRU cache at
 * module scope so high-use providers stay hot across warm invocations while
 * rarely-used ones are evicted. Cache size is configurable via
 * `PROVIDER_CACHE_SIZE` (default: 20).
 */

import type { CredentialPayload } from "./credentials.js";

// ---------------------------------------------------------------------------
// Public interface
// ---------------------------------------------------------------------------

export interface IsolateExecuteOptions {
  /** @utdk provider name, e.g. "github" */
  provider: string;
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
 * Load a `@utdk/*` provider module by name, caching it in the LRU cache.
 * On a cache hit the cached module reference is reused (no dynamic import).
 * On a miss the module is imported, cached, and the oldest entry is evicted
 * if the cache exceeds its configured max size.
 */
export async function getProviderModule(provider: string): Promise<ProviderModule> {
  const cached = providerCache.get(provider);
  if (cached) {
    // Move to most-recently-used position.
    providerCache.delete(provider);
    providerCache.set(provider, cached);
    return cached;
  }

  const mod = (await import(`utdk/${provider}`)) as ProviderModule;
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
// Dynamic loader — tries to use packages/utdk-isolate when available
// ---------------------------------------------------------------------------

let _executor: IsolateExecutor | undefined;

async function tryLoadIsolate(): Promise<IsolateExecutor | undefined> {
  try {
    // Attempt to import the real isolate runtime (APR-15).
    // The package does not exist yet; the dynamic import will throw at runtime
    // and the fallback executor will be used instead.
     
    // @ts-ignore — @utdk/isolate is not yet published (APR-15)
    const mod = (await import("@utdk/isolate")) as {
      Isolate: new () => IsolateExecutor;
    };
    return new mod.Isolate();
  } catch {
    return undefined;
  }
}

// ---------------------------------------------------------------------------
// Fallback executor — direct execution for development (no sandboxing)
// ---------------------------------------------------------------------------

/**
 * Build an Authorization header value from a credential payload.
 * Used by the direct executor when the real isolate is not available.
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
      // In direct mode, we cannot re-hydrate the full OAuth2 flow without more context,
      // so we return an empty object and let the SDK use env var fallback.
      return {};
  }
}

/**
 * Convert a provider name (e.g. "github", "google-cloud") to a PascalCase
 * client factory name (e.g. "createGithubClient", "createGoogleCloudClient").
 */
function toClientFactoryName(provider: string): string {
  const pascalCase = provider
    .split(/[-_]/)
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
      const mod = await getProviderModule(options.provider);

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

export async function getExecutor(): Promise<IsolateExecutor> {
  if (_executor) return _executor;

  const sandboxed = await tryLoadIsolate();
  if (sandboxed) {
    _executor = sandboxed;
    return _executor;
  }

  // Fall back to direct executor in development
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

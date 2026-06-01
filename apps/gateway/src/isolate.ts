/**
 * Isolate runtime interface for sandboxed tool execution.
 *
 * The gateway calls this module to execute @utdk/* tool operations.
 * When `packages/utdk-isolate` (APR-15) is available, it is loaded dynamically
 * and used for sandboxed execution. Until then, a direct execution fallback
 * is provided for development purposes.
 *
 * Credentials are injected at call time — never passed through process.env.
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
// Dynamic loader — tries to use packages/utdk-isolate when available
// ---------------------------------------------------------------------------

let _executor: IsolateExecutor | undefined;

async function tryLoadIsolate(): Promise<IsolateExecutor | undefined> {
  try {
    // Attempt to import the real isolate runtime (APR-15).
    // The package does not exist yet; the dynamic import will throw at runtime
    // and the fallback executor will be used instead.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
      // Dynamically import the provider package
      const mod = (await import(`utdk/${options.provider}`)) as Record<
        string,
        unknown
      >;

      // Get the named client factory export (e.g. createGithubClient)
      // This allows us to inject credentials at construction time
      const factoryName = toClientFactoryName(options.provider);
      const factory = mod[factoryName] as
        | ((opts?: { headers?: Record<string, string> }) => Promise<unknown>)
        | undefined;

      if (typeof factory !== "function") {
        throw new Error(
          `Provider "${options.provider}" does not export "${factoryName}"`,
        );
      }

      // Build auth headers for injection
      const authHeaders = buildAuthHeaders(options.credentials);

      // Create the client with credential injection and await it
      const client = (await factory({ headers: authHeaders })) as Record<
        string,
        unknown
      >;

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

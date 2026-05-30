/**
 * Options for a single sandboxed tool call.
 */
export interface ExecuteOptions {
  /**
   * Provider module specifier, e.g. `@utdk/github`.
   * Resolved from the host Node.js module system, not from inside the sandbox.
   */
  module: string;

  /**
   * Dot-notation path to the operation on the client object, e.g. `users.getByUsername`.
   */
  operation: string;

  /**
   * Arguments passed to the operation.
   */
  args?: Record<string, unknown>;

  /**
   * Credentials injected by the gateway at call time.
   * Keys are environment-variable-style names (e.g. `GITHUB_TOKEN`).
   * These are NEVER written to `process.env`; the sandbox context has no
   * access to `process` at all.
   */
  credentials?: Record<string, string>;

  /**
   * Execution timeout in milliseconds (default: 30 000).
   * Once exceeded, the isolate rejects with a `TimeoutError`.
   */
  timeout?: number;
}

/**
 * Result of a sandboxed execution.
 */
export interface ExecuteResult {
  /** The value returned by the operation. */
  data: unknown;
  /** Wall-clock duration of the execution in milliseconds. */
  durationMs: number;
}

/**
 * A single entry from a provider's `utdk.auth` config array in `package.json`.
 */
export interface UtdkAuthConfig {
  auth_type: "api_key" | "oauth2" | "basic" | "none";
  /** For api_key: the header value pattern, e.g. "Bearer ${GITHUB_TOKEN}" */
  api_key?: string;
  /** For api_key: the header name, e.g. "Authorization" */
  var_name?: string;
  /** For oauth2: client id pattern, e.g. "${SPOTIFY_CLIENT_ID}" */
  client_id?: string;
  /** For oauth2: client secret pattern, e.g. "${SPOTIFY_CLIENT_SECRET}" */
  client_secret?: string;
  /** For oauth2: token URL */
  token_url?: string;
  /** For oauth2: flow type */
  flow?: string;
}

/**
 * Error thrown when an execution exceeds its timeout.
 */
export class TimeoutError extends Error {
  constructor(timeoutMs: number) {
    super(`Isolate execution timed out after ${timeoutMs}ms`);
    this.name = "TimeoutError";
  }
}

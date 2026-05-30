/**
 * Credential bridge for the Isolate runtime.
 *
 * The bridge is the ONLY channel through which credentials and provider
 * operations enter the sandboxed vm context. It is created in the host context
 * (where Node.js module loading works normally) and exposed as `__bridge__`
 * inside the sandbox.
 *
 * Design:
 *   - The provider module is dynamically imported in the HOST context, so it
 *     can resolve its own dependencies normally.
 *   - Credentials are mapped to an `AuthProvider` from `@utdk/common`, which
 *     injects them into HTTP request headers at call time.
 *   - The operation function is resolved via dot-notation path on the client.
 *   - The sandbox script calls `await __bridge__.call(args)` — it never
 *     touches `process.env` or any host filesystem API.
 */

import { ApiKey, BearerToken, type AuthProvider } from "@utdk/common";
import type { UtdkAuthConfig } from "./types.js";

// ---------------------------------------------------------------------------
// Credential resolution
// ---------------------------------------------------------------------------

/**
 * Resolves an `AuthProvider` from a flat credentials map and the provider's
 * `utdk.auth` config array (from its `package.json`).
 *
 * Supported patterns:
 *   api_key   – Bearer header:  `api_key: "Bearer ${TOKEN_NAME}"`
 *   api_key   – Raw header:     `api_key: "${TOKEN_NAME}"`
 *   oauth2    – Pre-resolved:   looks for `PROVIDER_ACCESS_TOKEN` key
 *
 * Falls back to `BearerToken(firstValue)` when the auth config is absent or
 * the pattern is not recognised.
 */
export function resolveAuthProvider(
  credentials: Record<string, string>,
  authConfigs: UtdkAuthConfig[] = [],
): AuthProvider | undefined {
  if (Object.keys(credentials).length === 0) {
    return undefined;
  }

  for (const config of authConfigs) {
    if (config.auth_type === "api_key" && config.api_key) {
      // Pattern: "Bearer ${TOKEN_NAME}"
      const bearerMatch = config.api_key.match(/^Bearer \$\{([^}]+)\}$/);
      if (bearerMatch) {
        const varName = bearerMatch[1];
        if (varName && credentials[varName]) {
          return new BearerToken(credentials[varName]);
        }
      }

      // Pattern: "${TOKEN_NAME}"  (raw header value)
      const rawMatch = config.api_key.match(/^\$\{([^}]+)\}$/);
      if (rawMatch) {
        const varName = rawMatch[1];
        if (varName && credentials[varName]) {
          return new ApiKey({
            headerName: config.var_name ?? "X-Api-Key",
            value: credentials[varName],
          });
        }
      }
    }

    if (config.auth_type === "oauth2") {
      // Gateway pre-resolves OAuth2 tokens and passes them as ACCESS_TOKEN
      // e.g. credentials = { SPOTIFY_ACCESS_TOKEN: 'eyJ...' }
      const tokenKey = Object.keys(credentials).find(
        (k) =>
          k.endsWith("_ACCESS_TOKEN") ||
          k.endsWith("_TOKEN"),
      );
      const tokenValue = tokenKey ? credentials[tokenKey] : undefined;
      if (tokenKey && tokenValue) {
        return new BearerToken(tokenValue);
      }
    }
  }

  // Fallback: treat the first credential value as a Bearer token
  const firstValue = Object.values(credentials)[0];
  if (firstValue !== undefined) {
    return new BearerToken(firstValue);
  }

  return undefined;
}

// ---------------------------------------------------------------------------
// Auth config extraction
// ---------------------------------------------------------------------------

/** Shape of the `utdk` field in a provider's package.json. */
interface UtdkField {
  auth?: UtdkAuthConfig[];
  [key: string]: unknown;
}

/** Shape of a provider's package.json. */
interface ProviderPackageJson {
  utdk?: UtdkField;
  [key: string]: unknown;
}

/**
 * Extracts the `utdk.auth` array from a provider module's package.json.
 * Returns an empty array if the module does not export a `packageJson`
 * property or if the config is absent.
 */
export function extractAuthConfigs(providerModule: Record<string, unknown>): UtdkAuthConfig[] {
  const pkg = providerModule["packageJson"] as ProviderPackageJson | undefined;
  return pkg?.utdk?.auth ?? [];
}

// ---------------------------------------------------------------------------
// Operation resolution
// ---------------------------------------------------------------------------

/**
 * Resolves a dot-notation operation path on a client object.
 *
 * @example
 * resolveOperation(client, 'users.getByUsername')
 * // → client.users.getByUsername (as a bound function)
 */
export function resolveOperation(
  client: unknown,
  operationPath: string,
): (...args: unknown[]) => Promise<unknown> {
  const segments = operationPath.split(".");
  let current: unknown = client;

  for (const segment of segments) {
    if (current === null || current === undefined || typeof current !== "object") {
      throw new TypeError(
        `Cannot resolve operation path "${operationPath}": "${segment}" is not an object`,
      );
    }
    current = (current as Record<string, unknown>)[segment];
  }

  if (typeof current !== "function") {
    throw new TypeError(
      `Operation "${operationPath}" resolved to ${typeof current}, expected a function`,
    );
  }

  return current as (...args: unknown[]) => Promise<unknown>;
}

// ---------------------------------------------------------------------------
// Bridge creation
// ---------------------------------------------------------------------------

export interface BridgeOptions {
  /** The resolved operation function (from host context) */
  operation: (...args: unknown[]) => Promise<unknown>;
}

/**
 * Creates a bridge object that is safe to expose inside a vm context.
 *
 * The bridge has a single method, `call(args)`, which invokes the pre-resolved
 * provider operation with the given arguments. Credentials are already baked
 * into the operation via the auth provider — the sandbox script never sees
 * them.
 */
export function createBridge(options: BridgeOptions): { call: (args: Record<string, unknown>) => Promise<unknown> } {
  return {
    async call(args: Record<string, unknown>): Promise<unknown> {
      return options.operation(args);
    },
  };
}

// ---------------------------------------------------------------------------
// Provider loading
// ---------------------------------------------------------------------------

/** Name of the factory function pattern in provider modules. */
const CREATE_CLIENT_PATTERN = /^create[A-Z].+Client$/;

/**
 * Locates and invokes the `create*Client` factory in a provider module.
 *
 * Provider modules export a `create<Name>Client(options?)` function that
 * returns a `Promise<Client>`. This helper finds it and calls it with the
 * supplied auth provider.
 *
 * @throws if no factory function matching `create*Client` is found.
 */
export async function loadProviderClient(
  providerModule: Record<string, unknown>,
  auth: AuthProvider | undefined,
): Promise<unknown> {
  // Find the first create*Client export
  const factoryEntry = Object.entries(providerModule).find(([name, value]) =>
    CREATE_CLIENT_PATTERN.test(name) && typeof value === "function",
  );

  if (!factoryEntry) {
    throw new Error(
      "Provider module does not export a create*Client function. " +
      `Exports found: ${Object.keys(providerModule).join(", ")}`,
    );
  }

  const [, factory] = factoryEntry;
  const client = await (factory as (options?: unknown) => Promise<unknown>)(
    auth ? { auth } : {},
  );

  return client;
}

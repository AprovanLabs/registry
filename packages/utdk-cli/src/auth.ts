/**
 * Auth resolution for @utdk/cli.
 *
 * Resolution order for gateway proxy mode:
 *   1. UTDK_GATEWAY_TOKEN env var — "paste your access token" for CI/scripting
 *   2. Cached Cognito session (from `utdk login`) — transparently refreshed
 *
 * When no UTDK_GATEWAY_URL is set, falls back to per-provider auth:
 *   3. api_key template env var (e.g. GITHUB_TOKEN from "Bearer ${GITHUB_TOKEN}")
 *   4. ${PROVIDER_NAME}_TOKEN generic bearer fallback
 */

import type { AuthConfig } from "./providers.js";
import { getCognitoConfig, refreshAccessToken } from "./cognito.js";
import { isExpired, readTokens, writeTokens } from "./token-cache.js";

/** Minimal interface matching AuthProvider in @utdk/common/auth */
export type AuthProvider = {
  authenticate(headers: Record<string, string>): Promise<void>;
};

function bearerAuth(token: string): AuthProvider {
  return {
    async authenticate(headers: Record<string, string>): Promise<void> {
      headers["Authorization"] = `Bearer ${token}`;
    },
  };
}

function apiKeyAuth(headerName: string, value: string): AuthProvider {
  return {
    async authenticate(headers: Record<string, string>): Promise<void> {
      headers[headerName] = value;
    },
  };
}

/** Extract the first `${VAR_NAME}` placeholder from a template string. */
function extractEnvVar(template: string): string | undefined {
  const m = /\$\{([^}]+)\}/.exec(template);
  return m?.[1];
}

/** Substitute `${VAR_NAME}` placeholders in a template with their env values. */
function resolveTemplate(template: string): string | undefined {
  return template.replace(/\$\{([^}]+)\}/g, (_, varName: string) => {
    const val = process.env[varName];
    if (!val) throw new Error(`missing`);
    return val;
  });
}

/**
 * AuthProvider that reads the Cognito token cache and refreshes transparently.
 * Used when UTDK_GATEWAY_URL is set but UTDK_GATEWAY_TOKEN is not.
 */
function cachedCognitoAuth(): AuthProvider {
  return {
    async authenticate(headers: Record<string, string>): Promise<void> {
      let cached = readTokens();
      if (!cached) {
        throw new Error(
          "Not logged in. Run: utdk login\n" +
            "Or set UTDK_GATEWAY_TOKEN for CI/scripting.",
        );
      }

      if (isExpired(cached)) {
        const config = getCognitoConfig();
        if (!config) {
          throw new Error(
            "Access token expired and UTDK_COGNITO_DOMAIN / UTDK_COGNITO_CLIENT_ID are not set.\n" +
              "Run: utdk login",
          );
        }
        try {
          cached = await refreshAccessToken(config, cached.refreshToken);
        } catch (err) {
          throw new Error(
            `Failed to refresh access token: ${err instanceof Error ? err.message : String(err)}\n` +
              "Run: utdk login",
          );
        }
      }

      headers["Authorization"] = `Bearer ${cached.accessToken}`;
    },
  };
}

/**
 * Build an AuthProvider from the provider's auth configs and env vars.
 * Returns undefined if no credentials are available (unauthenticated request).
 */
export function resolveAuth(
  providerName: string,
  authConfigs: AuthConfig[],
): AuthProvider | undefined {
  const gatewayUrl = process.env["UTDK_GATEWAY_URL"];

  // 1. Gateway proxy mode — static token (CI/scripting)
  const gatewayToken = process.env["UTDK_GATEWAY_TOKEN"];
  if (gatewayUrl && gatewayToken) {
    return bearerAuth(gatewayToken);
  }

  // 2. Gateway proxy mode — cached Cognito session
  if (gatewayUrl) {
    const cached = readTokens();
    if (cached) {
      return cachedCognitoAuth();
    }
  }

  // 3. Per-config resolution
  for (const config of authConfigs) {
    if (config.auth_type === "api_key") {
      const template = config.api_key ?? "";
      const varName = config.var_name ?? "Authorization";

      try {
        const resolved = resolveTemplate(template);
        if (resolved) {
          if (resolved.startsWith("Bearer ")) {
            return bearerAuth(resolved.slice(7));
          }
          return apiKeyAuth(varName, resolved);
        }
      } catch {
        // env var not set — try next config
      }
    } else if (config.auth_type === "oauth2") {
      // CLI can't drive an interactive OAuth flow; accept a pre-issued token.
      const clientIdEnv = config.client_id ? extractEnvVar(config.client_id) : undefined;
      const prefix = clientIdEnv
        ? clientIdEnv.replace(/_CLIENT_ID$/i, "")
        : providerName.toUpperCase().replace(/-/g, "_");
      const token = process.env[`${prefix}_TOKEN`] ?? process.env[`${prefix}_ACCESS_TOKEN`];
      if (token) return bearerAuth(token);
    }
  }

  // 4. Generic fallback: ${PROVIDER}_TOKEN
  const upperProvider = providerName.toUpperCase().replace(/-/g, "_");
  const fallback =
    process.env[`${upperProvider}_TOKEN`] ??
    process.env[`${upperProvider}_ACCESS_TOKEN`] ??
    process.env[`${upperProvider}_API_KEY`];
  if (fallback) return bearerAuth(fallback);

  return undefined;
}

/**
 * Returns the list of env var names a user should set for this provider.
 * Used in the --help output.
 */
export function authEnvVars(providerName: string, authConfigs: AuthConfig[]): string[] {
  const vars: string[] = [];
  for (const config of authConfigs) {
    if (config.auth_type === "api_key" && config.api_key) {
      const v = extractEnvVar(config.api_key);
      if (v) vars.push(v);
    } else if (config.auth_type === "oauth2") {
      const upper = providerName.toUpperCase().replace(/-/g, "_");
      vars.push(`${upper}_TOKEN`);
    }
  }
  // Also add the generic fallback so help is always useful even for unknown configs
  const upper = providerName.toUpperCase().replace(/-/g, "_");
  const generic = `${upper}_TOKEN`;
  if (!vars.includes(generic)) vars.push(generic);
  return [...new Set(vars)];
}

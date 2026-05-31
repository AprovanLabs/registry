/**
 * Auth resolution for @utdk/cli.
 *
 * Reads a provider's `utdk.auth` config from its package.json and resolves
 * credentials from environment variables.  Resolution order:
 *   1. UTDK_GATEWAY_URL + UTDK_GATEWAY_TOKEN  (gateway proxy mode)
 *   2. api_key template env var  (e.g. GITHUB_TOKEN from "Bearer ${GITHUB_TOKEN}")
 *   3. ${PROVIDER_NAME}_TOKEN   (generic bearer fallback, also covers oauth2 flows)
 */

import type { AuthConfig } from "./providers.js";

/** Minimal interface matching AuthProvider in @utdk/common/auth */
export type AuthProvider = {
  applyToRequest(headers: Record<string, string>): Promise<void>;
};

function bearerAuth(token: string): AuthProvider {
  return {
    async applyToRequest(headers: Record<string, string>): Promise<void> {
      headers["Authorization"] = `Bearer ${token}`;
    },
  };
}

function apiKeyAuth(headerName: string, value: string): AuthProvider {
  return {
    async applyToRequest(headers: Record<string, string>): Promise<void> {
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
 * Build an AuthProvider from the provider's auth configs and env vars.
 * Returns undefined if no credentials are available (unauthenticated request).
 */
export function resolveAuth(
  providerName: string,
  authConfigs: AuthConfig[],
): AuthProvider | undefined {
  // 1. Gateway proxy mode
  const gatewayUrl = process.env["UTDK_GATEWAY_URL"];
  const gatewayToken = process.env["UTDK_GATEWAY_TOKEN"];
  if (gatewayUrl && gatewayToken) {
    return bearerAuth(gatewayToken);
  }

  // 2. Per-config resolution
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

  // 3. Generic fallback: ${PROVIDER}_TOKEN
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

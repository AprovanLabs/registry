/**
 * Auth chain for @utdk/mcp-server.
 *
 * Resolves credentials in priority order: environment variables → gateway proxy.
 * Auth configuration is read from the provider package's `utdk.auth` field.
 */

import { ApiKey, BearerToken, OAuth2ClientCredentials } from "@utdk/common";
import type { AuthProvider } from "@utdk/common";

export type { AuthProvider };

export interface UtdkAuthConfig {
  auth_type: string;
  api_key?: string;
  var_name?: string;
  location?: string;
  token_url?: string;
  client_id?: string;
  client_secret?: string;
  scope?: string;
}

/**
 * Interpolate `${ENV_VAR}` placeholders in a string with actual environment values.
 * Returns null if any placeholder resolved to an empty or missing env var.
 */
function interpolateEnv(value: string): string | null {
  let hasEmpty = false;
  const result = value.replace(/\$\{([^}]+)\}/g, (_match, varName: string) => {
    const envValue = process.env[varName];
    if (!envValue) {
      hasEmpty = true;
    }
    return envValue ?? "";
  });
  return hasEmpty ? null : result;
}

/**
 * Build an AuthProvider from a provider's `utdk.auth` config entry and env vars.
 * Returns undefined if no credentials are found in the environment.
 */
function authFromConfig(config: UtdkAuthConfig): AuthProvider | undefined {
  const authType = config.auth_type;

  if (authType === "api_key" && config.api_key) {
    const resolved = interpolateEnv(config.api_key);
    if (resolved === null) return undefined;

    const trimmed = resolved.trim();
    if (!trimmed) return undefined;

    const varName = config.var_name ?? "Authorization";
    const location = config.location ?? "header";

    if (location !== "header") {
      // Query/cookie auth not yet supported in this chain
      return undefined;
    }

    // If the value looks like "Bearer <token>", use BearerToken; otherwise ApiKey
    const bearerMatch = /^Bearer\s+(\S.*)$/.exec(trimmed);
    if (bearerMatch) {
      return new BearerToken((bearerMatch[1] as string).trim());
    }

    return new ApiKey({ headerName: varName, value: trimmed });
  }

  if (authType === "oauth2") {
    const clientId = config.client_id ? interpolateEnv(config.client_id) : null;
    const clientSecret = config.client_secret ? interpolateEnv(config.client_secret) : null;

    if (clientId && clientSecret && config.token_url) {
      return new OAuth2ClientCredentials({
        clientId,
        clientSecret,
        tokenUrl: config.token_url,
        scopes: config.scope?.split(/\s+/) ?? [],
      });
    }

    return undefined;
  }

  return undefined;
}

/**
 * Build an AuthProvider for a provider from its utdk auth config array.
 * Tries each config entry in order; returns the first that resolves from env.
 * Returns undefined if no credentials are available (unauthenticated or gateway-delegated).
 */
export function buildAuthProvider(
  providerName: string,
  authConfigs: UtdkAuthConfig[],
): AuthProvider | undefined {
  // First try the explicit provider TOKEN env var (e.g. GITHUB_TOKEN, SLACK_TOKEN)
  const providerToken = process.env[`${providerName.toUpperCase()}_TOKEN`];
  if (providerToken) {
    return new BearerToken(providerToken);
  }

  for (const config of authConfigs) {
    const provider = authFromConfig(config);
    if (provider) return provider;
  }

  return undefined;
}

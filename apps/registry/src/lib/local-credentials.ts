/**
 * Browser-local credential storage for the Try It console.
 *
 * Stores credentials in localStorage on a per-provider basis.
 * Supports:
 *   - Bearer tokens
 *   - API keys (with custom header name)
 *   - OAuth2 tokens (managed via OAuth flow)
 *   - Custom headers
 *
 * This is separate from the gateway's server-side credential storage,
 * providing a simpler flow for local development and testing.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LocalCredentialType = "bearer" | "api_key" | "oauth2" | "none";

export interface BearerCredential {
  type: "bearer";
  token: string;
}

export interface ApiKeyCredential {
  type: "api_key";
  value: string;
  headerName: string; // e.g., "X-Api-Key", "Authorization"
  headerPrefix?: string; // e.g., "Api-Key " — appended before value
}

export interface OAuth2Credential {
  type: "oauth2";
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number; // Unix timestamp
  tokenType?: string; // Usually "Bearer"
  scopes?: string[];
}

export interface NoCredential {
  type: "none";
}

export type LocalCredential =
  | BearerCredential
  | ApiKeyCredential
  | OAuth2Credential
  | NoCredential;

export interface ProviderCredentialConfig {
  provider: string;
  credential: LocalCredential;
  customHeaders?: Record<string, string>;
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Storage keys
// ---------------------------------------------------------------------------

const STORAGE_KEY = "utdk_local_credentials";
const GATEWAY_URL_KEY = "utdk_gateway_url";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadAllConfigs(): Record<string, ProviderCredentialConfig> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, ProviderCredentialConfig>;
  } catch {
    return {};
  }
}

function saveAllConfigs(configs: Record<string, ProviderCredentialConfig>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Get credential config for a specific provider.
 */
export function getProviderCredential(provider: string): ProviderCredentialConfig | null {
  const configs = loadAllConfigs();
  return configs[provider] ?? null;
}

/**
 * Save credential config for a provider.
 */
export function saveProviderCredential(config: ProviderCredentialConfig): void {
  const configs = loadAllConfigs();
  configs[config.provider] = {
    ...config,
    updatedAt: new Date().toISOString(),
  };
  saveAllConfigs(configs);
}

/**
 * Remove credential config for a provider.
 */
export function removeProviderCredential(provider: string): void {
  const configs = loadAllConfigs();
  delete configs[provider];
  saveAllConfigs(configs);
}

/**
 * List all stored provider credentials.
 */
export function listProviderCredentials(): ProviderCredentialConfig[] {
  const configs = loadAllConfigs();
  return Object.values(configs);
}

/**
 * Build HTTP headers from a credential config.
 * Returns headers to be merged with the fetch request.
 */
export function buildAuthHeaders(config: ProviderCredentialConfig | null): Record<string, string> {
  const headers: Record<string, string> = {};

  if (!config) return headers;

  // Add custom headers first
  if (config.customHeaders) {
    Object.assign(headers, config.customHeaders);
  }

  const cred = config.credential;

  switch (cred.type) {
    case "bearer":
      headers["Authorization"] = `Bearer ${cred.token}`;
      break;

    case "api_key": {
      const value = cred.headerPrefix ? `${cred.headerPrefix}${cred.value}` : cred.value;
      headers[cred.headerName] = value;
      break;
    }

    case "oauth2": {
      const tokenType = cred.tokenType ?? "Bearer";
      headers["Authorization"] = `${tokenType} ${cred.accessToken}`;
      break;
    }

    case "none":
    default:
      // No auth headers
      break;
  }

  return headers;
}

/**
 * Check if an OAuth2 credential is expired (with 5-minute buffer).
 */
export function isOAuth2Expired(cred: OAuth2Credential): boolean {
  if (!cred.expiresAt) return false;
  const bufferMs = 5 * 60 * 1000; // 5 minutes
  return Date.now() > cred.expiresAt - bufferMs;
}

// ---------------------------------------------------------------------------
// Gateway URL persistence
// ---------------------------------------------------------------------------

/**
 * Get saved gateway URL.
 */
export function getGatewayUrl(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(GATEWAY_URL_KEY) ?? "";
}

/**
 * Save gateway URL.
 */
export function saveGatewayUrl(url: string): void {
  if (typeof window === "undefined") return;
  if (url) {
    localStorage.setItem(GATEWAY_URL_KEY, url);
  } else {
    localStorage.removeItem(GATEWAY_URL_KEY);
  }
}

// ---------------------------------------------------------------------------
// Known provider auth configurations
// ---------------------------------------------------------------------------

export interface KnownProviderAuth {
  defaultType: LocalCredentialType;
  headerName?: string;
  headerPrefix?: string;
  description: string;
  oauthConfig?: {
    authUrl: string;
    tokenUrl: string;
    defaultScopes?: string[];
  };
}

export const KNOWN_PROVIDER_AUTH: Record<string, KnownProviderAuth> = {
  github: {
    defaultType: "bearer",
    description: "Personal access token (classic or fine-grained)",
    oauthConfig: {
      authUrl: "https://github.com/login/oauth/authorize",
      tokenUrl: "https://github.com/login/oauth/access_token",
      defaultScopes: ["repo", "read:user"],
    },
  },
  openai: {
    defaultType: "bearer",
    description: "API key from platform.openai.com",
  },
  anthropic: {
    defaultType: "api_key",
    headerName: "x-api-key",
    description: "API key from console.anthropic.com",
  },
  stripe: {
    defaultType: "bearer",
    description: "Secret key (sk_test_... or sk_live_...)",
  },
  spotify: {
    defaultType: "oauth2",
    description: "OAuth2 access token",
    oauthConfig: {
      authUrl: "https://accounts.spotify.com/authorize",
      tokenUrl: "https://accounts.spotify.com/api/token",
      defaultScopes: ["user-read-private", "user-read-email"],
    },
  },
  slack: {
    defaultType: "bearer",
    description: "Bot or user OAuth token (xoxb-... or xoxp-...)",
    oauthConfig: {
      authUrl: "https://slack.com/oauth/v2/authorize",
      tokenUrl: "https://slack.com/api/oauth.v2.access",
    },
  },
  figma: {
    defaultType: "bearer",
    description: "Personal access token or OAuth token",
    oauthConfig: {
      authUrl: "https://www.figma.com/oauth",
      tokenUrl: "https://www.figma.com/api/oauth/token",
    },
  },
  datadog: {
    defaultType: "api_key",
    headerName: "DD-API-KEY",
    description: "Datadog API key",
  },
  twilio: {
    defaultType: "bearer",
    description: "Account SID:Auth Token (Basic auth)",
  },
  sendgrid: {
    defaultType: "bearer",
    description: "API key from app.sendgrid.com",
  },
};

/**
 * Get known auth config for a provider, or a generic default.
 */
export function getKnownProviderAuth(provider: string): KnownProviderAuth {
  // Extract base provider name (e.g., "github" from "github/repos")
  const baseName = provider.split("/")[0];
  return (
    KNOWN_PROVIDER_AUTH[baseName] ?? {
      defaultType: "bearer",
      description: "Bearer token or API key",
    }
  );
}

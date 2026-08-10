/**
 * Credential payload shapes — the decrypted contents of a credential row.
 * The type vocabulary is the shared WS-2 tuple (@utdk/common/auth).
 */

export type { CredentialType } from "@utdk/common/auth";
import type { CredentialType } from "@utdk/common/auth";

/** IW-9 invariant 1 — identity follows the credential. */
export type CredentialLevel = "workspace-token" | "workspace-oauth" | "user-oauth";

const CREDENTIAL_LEVELS: readonly CredentialLevel[] = [
  "workspace-token",
  "workspace-oauth",
  "user-oauth",
];

export function isCredentialLevel(value: unknown): value is CredentialLevel {
  return (
    typeof value === "string" &&
    (CREDENTIAL_LEVELS as readonly string[]).includes(value)
  );
}

export function credentialLevelValues(): readonly CredentialLevel[] {
  return CREDENTIAL_LEVELS;
}

/**
 * NULL-tolerant backfill: the ONLY place a missing stored level is interpreted.
 * Legacy oauth2_authcode stays workspace-shared — never user-oauth (tech-plan D2).
 */
export function effectiveLevel(
  type: CredentialType,
  stored?: CredentialLevel,
): CredentialLevel {
  if (stored !== undefined) return stored;
  switch (type) {
    case "bearer_token":
    case "api_key":
      return "workspace-token";
    case "oauth2_client":
    case "oauth2_authcode":
      return "workspace-oauth";
    default: {
      const _exhaustive: never = type;
      throw new Error(`Unsupported credential type: ${String(_exhaustive)}`);
    }
  }
}

/** Create-time default when the caller omits `level` (differs from legacy backfill for authcode). */
export function defaultLevelForType(type: CredentialType): CredentialLevel {
  switch (type) {
    case "bearer_token":
    case "api_key":
      return "workspace-token";
    case "oauth2_client":
      return "workspace-oauth";
    case "oauth2_authcode":
      return "user-oauth";
    default: {
      const _exhaustive: never = type;
      throw new Error(`Unsupported credential type: ${String(_exhaustive)}`);
    }
  }
}

export interface BearerTokenPayload {
  type: "bearer_token";
  token: string;
}

export interface ApiKeyPayload {
  type: "api_key";
  value: string;
  /** Header to inject (default: X-Api-Key) */
  headerName?: string;
}

export type OAuthClientOrigin = "tenant" | "platform";

export interface OAuth2ClientPayload {
  type: "oauth2_client";
  clientId?: string;
  clientSecret?: string;
  /** Set when credentials were resolved from the platform app (secret not stored). */
  clientOrigin?: OAuthClientOrigin;
  tokenUrl: string;
  scopes?: string[];
}

export interface OAuth2AuthCodePayload {
  type: "oauth2_authcode";
  clientId?: string;
  clientSecret?: string;
  /** Set when credentials were resolved from the platform app (secret not stored). */
  clientOrigin?: OAuthClientOrigin;
  tokenUrl: string;
  code: string;
  redirectUri: string;
  codeVerifier?: string;
  scopes?: string[];
  /** Resolved tokens, written after the authorization-code exchange. */
  accessToken?: string;
  refreshToken?: string;
  /** Epoch ms when the access token expires. */
  expiresAt?: number;
}

export type CredentialPayload =
  | BearerTokenPayload
  | ApiKeyPayload
  | OAuth2ClientPayload
  | OAuth2AuthCodePayload;

/**
 * What the executor may receive: bearer token or api key ONLY. OAuth payloads
 * are pre-resolved to injectable bearer tokens in the dispatch pipeline
 * (provider-execution spec "OAuth pre-resolution").
 */
export type InjectableCredential = BearerTokenPayload | ApiKeyPayload;

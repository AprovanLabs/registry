/**
 * Gateway API client for the registry UI.
 *
 * Session/workspace calls, error handling, and session persistence come from
 * the shared `@aprovan/ui/gateway` client so registry and patchwork share one
 * implementation. Credential and OAuth-PKCE helpers below are registry-specific
 * and stay local.
 *
 * The gateway base URL is read from `PUBLIC_GATEWAY_URL` (default
 * http://localhost:4000 for local development).
 */

import {
  createGatewayClient,
  clearStoredSession,
  GatewayError,
  loadStoredSession,
  saveStoredSession,
  type GatewayClient,
  type SessionInfo,
  type WorkspaceSummary,
} from "@aprovan/ui/gateway";
import { gatewayBaseUrl } from "@/lib/site";

export { GatewayError };
export { gatewayBaseUrl };
export type { SessionInfo, WorkspaceSummary };

/** A shared gateway client bound to an explicit access token. */
function withToken(token: string): GatewayClient {
  return createGatewayClient({ baseUrl: gatewayBaseUrl(), getToken: () => token });
}

// ---------------------------------------------------------------------------
// Credential types (mirrors apps/gateway/src/credentials.ts)
// ---------------------------------------------------------------------------

export type CredentialType =
  | "bearer_token"
  | "api_key"
  | "oauth2_client"
  | "oauth2_authcode";

export interface BearerTokenPayload {
  type: "bearer_token";
  token: string;
}

export interface ApiKeyPayload {
  type: "api_key";
  value: string;
  headerName?: string;
}

export interface OAuth2ClientPayload {
  type: "oauth2_client";
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  scopes?: string[];
}

export interface OAuth2AuthCodePayload {
  type: "oauth2_authcode";
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  code: string;
  redirectUri: string;
  codeVerifier?: string;
  scopes?: string[];
}

export type CredentialPayload =
  | BearerTokenPayload
  | ApiKeyPayload
  | OAuth2ClientPayload
  | OAuth2AuthCodePayload;

export interface CredentialInput {
  provider: string;
  label?: string;
  payload: CredentialPayload;
}

export interface CredentialRecord {
  id: string;
  workspaceId: string;
  provider: string;
  label?: string;
  type: CredentialType;
  createdAt: string;
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Credentials
// ---------------------------------------------------------------------------

/** List all credentials for the workspace encoded in the JWT. */
export async function listCredentials(token: string): Promise<CredentialRecord[]> {
  const data = await withToken(token).request<{ credentials: CredentialRecord[] }>(
    "/credentials",
  );
  return data.credentials;
}

/** Register a new credential. */
export async function addCredential(
  token: string,
  input: CredentialInput,
): Promise<CredentialRecord> {
  return withToken(token).request<CredentialRecord>("/credentials", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
}

/** Delete a credential by ID. */
export async function deleteCredential(token: string, id: string): Promise<void> {
  await withToken(token).request<void>(`/credentials/${id}`, { method: "DELETE" });
}

// ---------------------------------------------------------------------------
// Session — active workspace + workspace picker (APR-281)
// ---------------------------------------------------------------------------

/**
 * Fetch the caller's session: their active workspace (if any) and every
 * workspace they are a member of. Used by the workspace picker.
 */
export async function getSession(token: string): Promise<SessionInfo> {
  return withToken(token).getSession();
}

/**
 * Select the active workspace. Validates membership server-side and persists
 * the choice as `Sessions[sub].currentWorkspaceId`.
 */
export async function selectWorkspace(
  token: string,
  workspaceId: string,
): Promise<string> {
  return withToken(token).selectWorkspace(workspaceId);
}

// ---------------------------------------------------------------------------
// Session helpers (sessionStorage-backed JWT)
// ---------------------------------------------------------------------------

const SESSION_KEYS = {
  token: "utdk_gateway_token",
  workspace: "utdk_gateway_workspace",
} as const;

export function saveSession(token: string, workspaceId: string): void {
  saveStoredSession(SESSION_KEYS, { token, workspaceId });
}

export function loadSession(): { token: string; workspaceId: string } | null {
  return loadStoredSession(SESSION_KEYS);
}

export function clearSession(): void {
  clearStoredSession(SESSION_KEYS);
}

// ---------------------------------------------------------------------------
// OAuth2 PKCE / auth-code helpers (registry-specific)
// ---------------------------------------------------------------------------

const OAUTH_PENDING_KEY = "utdk_oauth_pending";

export interface OAuthPendingState {
  provider: string;
  label?: string;
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  redirectUri: string;
  scopes?: string[];
  state: string;
}

export function saveOAuthPending(pending: OAuthPendingState): void {
  sessionStorage.setItem(OAUTH_PENDING_KEY, JSON.stringify(pending));
}

export function loadOAuthPending(): OAuthPendingState | null {
  const raw = sessionStorage.getItem(OAUTH_PENDING_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as OAuthPendingState;
  } catch {
    return null;
  }
}

export function clearOAuthPending(): void {
  sessionStorage.removeItem(OAUTH_PENDING_KEY);
}

/** Build the OAuth2 authorization URL and redirect the browser. */
export function initiateOAuthFlow(
  authorizationUrl: string,
  pending: OAuthPendingState,
): void {
  saveOAuthPending(pending);
  const url = new URL(authorizationUrl);
  url.searchParams.set("client_id", pending.clientId);
  url.searchParams.set("redirect_uri", pending.redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("state", pending.state);
  if (pending.scopes && pending.scopes.length > 0) {
    url.searchParams.set("scope", pending.scopes.join(" "));
  }
  window.location.href = url.toString();
}

/** Generate a random state string. */
export function generateState(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

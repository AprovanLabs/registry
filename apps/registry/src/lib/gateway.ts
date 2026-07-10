/**
 * Gateway API client.
 *
 * Wraps the REST API exposed by apps/gateway.
 * The gateway base URL is read from the PUBLIC_GATEWAY_URL environment variable
 * (default: http://localhost:4000 for local development).
 */

// ---------------------------------------------------------------------------
// Types (mirrors apps/gateway/src/credentials.ts)
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
// Gateway client
// ---------------------------------------------------------------------------

function gatewayUrl(path: string): string {
  const base =
    (import.meta.env.PUBLIC_GATEWAY_URL as string | undefined)?.replace(/\/$/, "") ??
    "http://localhost:4000";
  return `${base}${path}`;
}

export class GatewayError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "GatewayError";
  }
}

async function parseError(res: Response): Promise<GatewayError> {
  let message = res.statusText;
  try {
    const body = (await res.json()) as { error?: string };
    if (typeof body.error === "string") message = body.error;
  } catch {
    // ignore
  }
  return new GatewayError(res.status, message);
}

/**
 * List all credentials for the workspace encoded in the JWT.
 */
export async function listCredentials(token: string): Promise<CredentialRecord[]> {
  const res = await fetch(gatewayUrl("/credentials"), {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw await parseError(res);
  const data = (await res.json()) as { credentials: CredentialRecord[] };
  return data.credentials;
}

/**
 * Register a new credential.
 */
export async function addCredential(
  token: string,
  input: CredentialInput,
): Promise<CredentialRecord> {
  const res = await fetch(gatewayUrl("/credentials"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw await parseError(res);
  return (await res.json()) as CredentialRecord;
}

/**
 * Delete a credential by ID.
 */
export async function deleteCredential(token: string, id: string): Promise<void> {
  const res = await fetch(gatewayUrl(`/credentials/${id}`), {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw await parseError(res);
}

// ---------------------------------------------------------------------------
// Session — active workspace + workspace picker (APR-281)
// ---------------------------------------------------------------------------

export interface WorkspaceSummary {
  id: string;
  name: string;
  role: string;
}

export interface SessionInfo {
  activeWorkspaceId: string | null;
  workspaces: WorkspaceSummary[];
}

/**
 * Fetch the caller's session: their active workspace (if any) and every
 * workspace they are a member of. Used by the workspace picker.
 */
export async function getSession(token: string): Promise<SessionInfo> {
  const res = await fetch(gatewayUrl("/session"), {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw await parseError(res);
  return (await res.json()) as SessionInfo;
}

/**
 * Select the active workspace. Validates membership server-side and persists
 * the choice as `Sessions[sub].currentWorkspaceId`.
 */
export async function selectWorkspace(
  token: string,
  workspaceId: string,
): Promise<string> {
  const res = await fetch(gatewayUrl("/session/workspace"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ workspaceId }),
  });
  if (!res.ok) throw await parseError(res);
  const body = (await res.json()) as { activeWorkspaceId: string };
  return body.activeWorkspaceId;
}

// ---------------------------------------------------------------------------
// Session helpers (sessionStorage-backed JWT)
// ---------------------------------------------------------------------------

const TOKEN_KEY = "utdk_gateway_token";
const WORKSPACE_KEY = "utdk_gateway_workspace";

export function saveSession(token: string, workspaceId: string): void {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(WORKSPACE_KEY, workspaceId);
}

export function loadSession(): { token: string; workspaceId: string } | null {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const workspaceId = sessionStorage.getItem(WORKSPACE_KEY);
  if (!token || !workspaceId) return null;
  return { token, workspaceId };
}

export function clearSession(): void {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(WORKSPACE_KEY);
}

// ---------------------------------------------------------------------------
// OAuth2 PKCE / auth-code helpers
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

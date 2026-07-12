/**
 * Cognito PKCE authentication for the registry UI.
 *
 * Every gateway call is authorized with a Cognito **access token** acquired
 * here via the authorization-code + PKCE flow (`oidc-client-ts`).
 * 
 * The refresh token is persisted in browser storage so silent renewal can
 * refresh the access token before it expires.
 *
 * Config (public, build-time):
 *   PUBLIC_COGNITO_AUTHORITY  — Cognito hosted-UI domain, e.g.
 *                                https://aprovan.auth.us-east-1.amazoncognito.com
 *   PUBLIC_COGNITO_CLIENT_ID — Cognito app client id (same client the gateway
 *                                verifies access tokens for)
 *
 * The redirect target is `${origin}${base}/auth/callback` (see
 * `pages/auth/callback.astro`); configure it as a permitted redirect URI on
 * the Cognito app client.
 */

import { UserManager, WebStorageStateStore, type User } from "oidc-client-ts";
import { withBasePath } from "@/lib/site";

const AUTHORITY = import.meta.env.PUBLIC_COGNITO_AUTHORITY as string | undefined;
const CLIENT_ID = import.meta.env.PUBLIC_COGNITO_CLIENT_ID as string | undefined;

/** Whether the public Cognito env vars are present. */
export function isAuthConfigured(): boolean {
  return Boolean(AUTHORITY && CLIENT_ID);
}

let _userManager: UserManager | null = null;

function redirectUri(): string {
  return `${window.location.origin}${withBasePath("/auth/callback")}`;
}

function postLogoutUri(): string {
  return `${window.location.origin}${withBasePath("/")}`;
}

/**
 * Lazily build the singleton `UserManager`. Tokens/state are kept in
 * `localStorage` (not `sessionStorage`) so silent renewal survives reloads
 * and the refresh token persists for the configured lifetime.
 */
export function getUserManager(): UserManager {
  if (_userManager) return _userManager;
  if (!AUTHORITY || !CLIENT_ID) {
    throw new Error(
      "Cognito not configured: set PUBLIC_COGNITO_AUTHORITY and PUBLIC_COGNITO_CLIENT_ID",
    );
  }
  _userManager = new UserManager({
    authority: AUTHORITY,
    client_id: CLIENT_ID,
    redirect_uri: redirectUri(),
    post_logout_redirect_uri: postLogoutUri(),
    response_type: "code",
    scope: "openid email profile",
    response_mode: "query",
    automaticSilentRenew: true,
    // Refresh ~60s before the access token expires.
    accessTokenExpiringNotificationTimeInSeconds: 60,
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    stateStore: new WebStorageStateStore({ store: window.localStorage }),
  });
  return _userManager;
}

// ---------------------------------------------------------------------------
// Sign-in flow
// ---------------------------------------------------------------------------

const RETURN_PATH_KEY = "utdk_auth_return_path";

/** Kick off the Cognito PKCE redirect, remembering where to return to. */
export async function signIn(returnPath?: string): Promise<void> {
  const mgr = getUserManager();
  if (returnPath) sessionStorage.setItem(RETURN_PATH_KEY, returnPath);
  await mgr.signinRedirect();
}

/** Complete the redirect on /auth/callback; returns the signed-in user. */
export async function completeSignIn(): Promise<User> {
  return getUserManager().signinRedirectCallback();
}

/** Read (and clear) the stored return path after a successful sign-in. */
export function consumeReturnPath(): string | null {
  const p = sessionStorage.getItem(RETURN_PATH_KEY);
  sessionStorage.removeItem(RETURN_PATH_KEY);
  return p;
}

/** The current Cognito user, or null when signed out / expired. */
export async function getAuthenticatedUser(): Promise<User | null> {
  return getUserManager().getUser();
}

/** Current access token for gateway `Authorization` headers, or null. */
export async function getAccessToken(): Promise<string | null> {
  const user = await getAuthenticatedUser();
  return user?.access_token ?? null;
}

// ---------------------------------------------------------------------------
// Sign-out
// ---------------------------------------------------------------------------

/**
 * Sign out locally: drop the cached user (and its refresh token) from
 * browser storage. The Cognito SSO session itself is not ended, so a later
 * sign-in is silent if the IdP session is still alive.
 */
export async function signOut(): Promise<void> {
  await getUserManager().removeUser();
}

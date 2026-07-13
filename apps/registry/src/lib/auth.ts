/**
 * Cognito PKCE authentication for the registry UI.
 *
 * Thin wrapper over the shared `@aprovan/ui/auth` client: the actual PKCE flow,
 * silent renewal, and return-path handling live in the core library so registry
 * and patchwork share one implementation. This module only registers the client
 * from registry's build-time env and re-exposes the functions existing call
 * sites (`AuthGate`, `AuthCallback`, `OAuthCallback`) already import.
 *
 * Config (public, build-time):
 *   PUBLIC_COGNITO_AUTHORITY  — Cognito OIDC issuer, e.g.
 *                                https://cognito-idp.<region>.amazonaws.com/<poolId>
 *   PUBLIC_COGNITO_CLIENT_ID  — Cognito app client id (the access-token audience
 *                                the gateway verifies)
 *
 * The redirect target is `${origin}${base}/auth/callback` (see
 * `pages/auth/callback.astro`); configure it as a permitted redirect URI on the
 * Cognito app client.
 */

import { configureAuth, resolveAuthConfig } from "@aprovan/ui/auth";
import type { User, UserManager } from "oidc-client-ts";

const config = resolveAuthConfig(import.meta.env, {
  basePath: import.meta.env.BASE_URL,
  redirectPath: "/auth/callback",
});

const client = configureAuth(config);

/** Whether the public Cognito env vars are present. */
export function isAuthConfigured(): boolean {
  return client !== null;
}

function requireClient(): NonNullable<typeof client> {
  if (!client) {
    throw new Error(
      "Cognito not configured: set PUBLIC_COGNITO_AUTHORITY and PUBLIC_COGNITO_CLIENT_ID",
    );
  }
  return client;
}

/** The underlying oidc-client-ts manager (advanced call sites). */
export function getUserManager(): UserManager {
  return requireClient().manager;
}

/** Kick off the Cognito PKCE redirect, remembering where to return to. */
export async function signIn(returnPath?: string): Promise<void> {
  await requireClient().signIn(returnPath);
}

/** Complete the redirect on /auth/callback; returns the signed-in user. */
export async function completeSignIn(): Promise<User> {
  return requireClient().manager.signinRedirectCallback();
}

/** Read (and clear) the stored return path after a successful sign-in. */
export function consumeReturnPath(): string | null {
  return client?.consumeReturnPath() ?? null;
}

/** The current Cognito user, or null when signed out / expired. */
export async function getAuthenticatedUser(): Promise<User | null> {
  return client ? client.manager.getUser() : null;
}

/** Current access token for gateway `Authorization` headers, or null. */
export async function getAccessToken(): Promise<string | null> {
  return client ? client.getAccessToken() : null;
}

/**
 * Sign out locally: drop the cached user (and its refresh token) from browser
 * storage. The Cognito SSO session itself is not ended, so a later sign-in is
 * silent if the IdP session is still alive.
 */
export async function signOut(): Promise<void> {
  await client?.signOut();
}

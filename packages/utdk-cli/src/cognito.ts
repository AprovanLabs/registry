/**
 * Cognito PKCE authentication flow for @utdk/cli.
 *
 * Implements the OAuth 2.0 Authorization Code + PKCE flow with a localhost
 * redirect.  On success, tokens are persisted to the XDG state cache and the
 * resolved CachedTokens object is returned.
 *
 * Required env vars:
 *   UTDK_COGNITO_DOMAIN     — Cognito hosted-UI domain, e.g. https://myapp.auth.us-east-1.amazoncognito.com
 *   UTDK_COGNITO_CLIENT_ID  — Cognito app client id (public client, no secret)
 *
 * Optional env vars:
 *   UTDK_COGNITO_REDIRECT_PORT — Local TCP port for the callback (default: 50321)
 */

import { createHash, randomBytes } from "crypto";
import { createServer } from "http";
import type { AddressInfo } from "net";
import { writeTokens, type CachedTokens } from "./token-cache.js";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

export interface CognitoConfig {
  /** e.g. https://myapp.auth.us-east-1.amazoncognito.com */
  domain: string;
  clientId: string;
  redirectPort: number;
}

export function getCognitoConfig(): CognitoConfig | undefined {
  const domain = process.env["UTDK_COGNITO_DOMAIN"];
  const clientId = process.env["UTDK_COGNITO_CLIENT_ID"];
  if (!domain || !clientId) return undefined;
  const portRaw = process.env["UTDK_COGNITO_REDIRECT_PORT"];
  const redirectPort = portRaw ? parseInt(portRaw, 10) : 50321;
  return { domain, clientId, redirectPort };
}

// ---------------------------------------------------------------------------
// PKCE helpers
// ---------------------------------------------------------------------------

function base64url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function generatePKCE(): { verifier: string; challenge: string } {
  const verifier = base64url(randomBytes(32));
  const challenge = base64url(
    createHash("sha256").update(verifier).digest(),
  );
  return { verifier, challenge };
}

// ---------------------------------------------------------------------------
// Token refresh
// ---------------------------------------------------------------------------

/**
 * Use the cached refresh token to obtain a new access token.
 * On success, overwrites the cache and returns the updated CachedTokens.
 * Throws on network or protocol error.
 */
export async function refreshAccessToken(
  config: CognitoConfig,
  refreshToken: string,
): Promise<CachedTokens> {
  const tokenUrl = `${config.domain}/oauth2/token`;
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: config.clientId,
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Token refresh failed (${response.status}): ${text}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    refresh_token?: string;
    id_token?: string;
    expires_in: number;
  };

  const tokens: CachedTokens = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? refreshToken,
    idToken: data.id_token,
    expiresAt: Math.floor(Date.now() / 1000) + data.expires_in,
  };

  writeTokens(tokens);
  return tokens;
}

// ---------------------------------------------------------------------------
// Authorization code + PKCE flow
// ---------------------------------------------------------------------------

/**
 * Wait for Cognito to redirect the browser to `http://localhost:{port}/callback`.
 * Returns the `code` query parameter on success; throws on timeout or error.
 */
function waitForCallback(
  port: number,
  expectedState: string,
  timeoutMs = 120_000,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url ?? "/", `http://localhost:${port}`);
      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");
      const error = url.searchParams.get("error");

      if (error) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(
          `<html><body><p>Login failed: ${error}. You may close this window.</p></body></html>`,
        );
        server.close();
        reject(new Error(`Cognito auth error: ${error}`));
        return;
      }

      if (!code || state !== expectedState) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(
          `<html><body><p>Invalid callback. You may close this window.</p></body></html>`,
        );
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<html><body><p>Login successful! You may close this window.</p></body></html>`,
      );
      server.close();
      resolve(code);
    });

    server.listen(port, "127.0.0.1", () => {
      const address = server.address() as AddressInfo;
      if (!address) {
        reject(new Error("Failed to start local callback server"));
        server.close();
      }
    });

    server.on("error", (err) => {
      reject(new Error(`Callback server error: ${err.message}`));
    });

    setTimeout(() => {
      server.close();
      reject(new Error("Login timed out (120s). Please try again."));
    }, timeoutMs);
  });
}

/**
 * Run the full PKCE authorization-code flow:
 *   1. Open the browser to the Cognito authorize endpoint.
 *   2. Listen on localhost for the callback.
 *   3. Exchange the authorization code for tokens.
 *   4. Persist to the token cache.
 *
 * Prints the authorization URL to stderr if `openUrl` is not provided.
 */
export async function runAuthCodeFlow(
  config: CognitoConfig,
  openUrl?: (url: string) => void,
): Promise<CachedTokens> {
  const { verifier, challenge } = generatePKCE();
  const state = base64url(randomBytes(16));
  const redirectUri = `http://localhost:${config.redirectPort}/callback`;

  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.clientId,
    redirect_uri: redirectUri,
    scope: "openid email profile",
    code_challenge: challenge,
    code_challenge_method: "S256",
    state,
  });
  const authUrl = `${config.domain}/oauth2/authorize?${params.toString()}`;

  if (openUrl) {
    openUrl(authUrl);
  } else {
    process.stderr.write(
      `\nOpen this URL in your browser to log in:\n\n  ${authUrl}\n\n`,
    );
  }

  // Wait for the browser callback
  const code = await waitForCallback(config.redirectPort, state);

  // Exchange code for tokens
  const tokenUrl = `${config.domain}/oauth2/token`;
  const tokenBody = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: config.clientId,
    code_verifier: verifier,
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: tokenBody.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Token exchange failed (${response.status}): ${text}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    refresh_token: string;
    id_token?: string;
    expires_in: number;
  };

  const tokens: CachedTokens = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    idToken: data.id_token,
    expiresAt: Math.floor(Date.now() / 1000) + data.expires_in,
  };

  writeTokens(tokens);
  return tokens;
}

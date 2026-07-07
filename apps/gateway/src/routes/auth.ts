/**
 * Token issuance routes.
 *
 * POST /auth/token          — shared-secret → JWT (internal callers)
 * POST /auth/token/apikey   — API key secret → JWT
 * POST /auth/sessions       — Cognito access token → short-lived gateway JWT
 */

import { Hono } from "hono";
import { getApiKeyStore } from "../apikeys.js";
import { signToken } from "../middleware/auth.js";
import { resolveWorkspaceForUser, putSession } from "../sessions.js";

export const authRouter = new Hono();

const GATEWAY_ADMIN_SECRET = () =>
  process.env["GATEWAY_ADMIN_SECRET"] ?? "dev-insecure-admin-secret";

// ---------------------------------------------------------------------------
// POST /auth/token
// ---------------------------------------------------------------------------

authRouter.post("/token", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isTokenRequest(body)) {
    return c.json(
      { error: "Invalid request. Required: callerId, workspaceId, role, secret" },
      400,
    );
  }

  if (body.secret !== GATEWAY_ADMIN_SECRET()) {
    return c.json({ error: "Invalid secret" }, 401);
  }

  if (body.role !== "caller" && body.role !== "admin") {
    return c.json({ error: "role must be 'caller' or 'admin'" }, 400);
  }

  const expiresIn = typeof body.expiresIn === "number" ? body.expiresIn : 3600;
  const token = await signToken(body.callerId, body.workspaceId, body.role, expiresIn);

  return c.json({ token, expiresIn });
});

// ---------------------------------------------------------------------------
// POST /auth/token/apikey  — exchange an API key secret for a JWT
// ---------------------------------------------------------------------------

authRouter.post("/token/apikey", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isApiKeyRequest(body)) {
    return c.json({ error: "Invalid request. Required: workspaceId, secret" }, 400);
  }

  const store = getApiKeyStore();
  const key = await store.verify(body.workspaceId, body.secret);
  if (!key) {
    return c.json({ error: "Invalid or expired API key" }, 401);
  }

  const expiresIn = 3600;
  const token = await signToken(key.callerId, key.workspaceId, "caller", expiresIn);
  return c.json({ token, expiresIn, callerId: key.callerId });
});

// ---------------------------------------------------------------------------
// POST /auth/sessions  — Cognito access token → gateway session JWT
// ---------------------------------------------------------------------------

const SESSION_TTL_SECONDS = 900;

/**
 * Lazily-initialised Cognito verifier. Module-level so the JWKS cache persists
 * across warm Lambda invocations. Returns null when env vars are not set (dev/test).
 */
let _cognitoVerifier: CognitoVerifierLike | undefined | null;

interface CognitoVerifierLike {
  verify(token: string): Promise<{ sub: string }>;
}

function getCognitoVerifier(): CognitoVerifierLike | null {
  if (_cognitoVerifier !== undefined) return _cognitoVerifier;

  const userPoolId = process.env["COGNITO_USER_POOL_ID"];
  const clientId = process.env["COGNITO_CLIENT_ID"];

  if (!userPoolId || !clientId) {
    _cognitoVerifier = null;
    return null;
  }

  // Import lazily so tests can mock `aws-jwt-verify` at the module level.
  // We use a sync setter (setCognitoVerifier) in tests rather than dynamic import
  // to keep test setup deterministic.
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { CognitoJwtVerifier } = require("aws-jwt-verify");
    _cognitoVerifier = CognitoJwtVerifier.create({
      userPoolId,
      tokenUse: "access",
      clientId,
    }) as CognitoVerifierLike;
  } catch {
    _cognitoVerifier = null;
  }

  return _cognitoVerifier ?? null;
}

/** Override for tests. */
export function setCognitoVerifier(v: CognitoVerifierLike | null): void {
  _cognitoVerifier = v;
}

export function resetCognitoVerifier(): void {
  _cognitoVerifier = undefined;
}

authRouter.post("/sessions", async (c) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return c.json({ error: "Missing or invalid Authorization header" }, 401);
  }
  const accessToken = authHeader.slice("Bearer ".length);

  // Parse optional workspace_id from body.
  let preferredWorkspaceId: string | undefined;
  try {
    const body = await c.req.json<{ workspace_id?: string }>();
    if (typeof body?.workspace_id === "string" && body.workspace_id.length > 0) {
      preferredWorkspaceId = body.workspace_id;
    }
  } catch {
    // empty body is fine
  }

  // Verify Cognito access token.
  const verifier = getCognitoVerifier();
  let userSub: string;
  if (verifier) {
    try {
      const payload = await verifier.verify(accessToken);
      userSub = payload.sub;
    } catch {
      return c.json({ error: "Invalid or expired Cognito token" }, 401);
    }
  } else {
    // Dev/test: accept a plain sub value when verifier is not configured.
    // In production COGNITO_USER_POOL_ID + COGNITO_CLIENT_ID must be set.
    if (!process.env["COGNITO_USER_POOL_ID"]) {
      return c.json({ error: "COGNITO_USER_POOL_ID not configured" }, 500);
    }
    return c.json({ error: "Cognito verifier unavailable" }, 500);
  }

  // Resolve workspace membership.
  let workspaceId: string;
  try {
    const resolved = await resolveWorkspaceForUser(userSub, preferredWorkspaceId);
    if (!resolved) {
      return c.json({ error: "No workspace membership found" }, 403);
    }
    workspaceId = resolved;
  } catch {
    return c.json({ error: "Failed to resolve workspace membership" }, 500);
  }

  // Issue gateway JWT (same shape as existing tokens).
  const expiresIn = SESSION_TTL_SECONDS;
  const token = await signToken(userSub, workspaceId, "caller", expiresIn);

  // Persist session record (best-effort; errors logged but not surfaced).
  const sessionId = crypto.randomUUID();
  const nowSecs = Math.floor(Date.now() / 1000);
  try {
    await putSession({
      userSub,
      sessionId,
      workspaceId,
      createdAt: new Date().toISOString(),
      expiresAt: nowSecs + expiresIn,
    });
  } catch (err) {
    process.stderr.write(
      JSON.stringify({ ts: new Date().toISOString(), type: "session_persist_error", error: String(err) }) + "\n",
    );
  }

  const expiresAt = new Date((nowSecs + expiresIn) * 1000).toISOString();
  return c.json({ token, expires_at: expiresAt, workspace_id: workspaceId, expires_in: expiresIn });
});

// ---------------------------------------------------------------------------
// Type guard
// ---------------------------------------------------------------------------

interface ApiKeyRequest {
  workspaceId: string;
  secret: string;
}

function isApiKeyRequest(value: unknown): value is ApiKeyRequest {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return typeof v["workspaceId"] === "string" && typeof v["secret"] === "string";
}


interface TokenRequest {
  callerId: string;
  workspaceId: string;
  role: string;
  secret: string;
  expiresIn?: number;
}

function isTokenRequest(value: unknown): value is TokenRequest {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v["callerId"] === "string" &&
    typeof v["workspaceId"] === "string" &&
    typeof v["role"] === "string" &&
    typeof v["secret"] === "string"
  );
}

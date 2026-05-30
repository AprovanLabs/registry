/**
 * Token issuance route.
 *
 * POST /auth/token
 *
 * Issues a JWT for callers (MCP server, CLI tools, etc.) using a shared secret.
 * In production, this should be replaced with a proper identity provider integration.
 */

import { Hono } from "hono";
import { signToken } from "../middleware/auth.js";
import { getApiKeyStore } from "../apikeys.js";

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
  const key = store.verify(body.workspaceId, body.secret);
  if (!key) {
    return c.json({ error: "Invalid or expired API key" }, 401);
  }

  const expiresIn = 3600;
  const token = await signToken(key.callerId, key.workspaceId, "caller", expiresIn);
  return c.json({ token, expiresIn, callerId: key.callerId });
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

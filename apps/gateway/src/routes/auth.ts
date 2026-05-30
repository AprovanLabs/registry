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
// Type guard
// ---------------------------------------------------------------------------

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

/**
 * JWT authentication middleware for the gateway.
 *
 * Callers (e.g. the MCP server) present a JWT signed with GATEWAY_JWT_SECRET.
 * The JWT payload must contain:
 *   - sub: callerId (string)
 *   - wid: workspaceId (string)
 *   - role: "caller" | "admin" (admin may manage credentials and permissions)
 *
 * Token issuance: POST /auth/token  (accepts {callerId, workspaceId, role, secret})
 *   Validates the shared secret and issues a short-lived JWT.
 */

import type { Context, Next } from "hono";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GatewayJWTPayload extends JWTPayload {
  sub: string;  // callerId
  wid: string;  // workspaceId
  role: "caller" | "admin";
}

declare module "hono" {
  interface ContextVariableMap {
    jwtPayload: GatewayJWTPayload;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSecret(): Uint8Array {
  const secret = process.env["GATEWAY_JWT_SECRET"] ?? "dev-insecure-jwt-secret";
  return new TextEncoder().encode(secret);
}

export async function signToken(
  callerId: string,
  workspaceId: string,
  role: "caller" | "admin",
  expiresInSeconds = 3600,
): Promise<string> {
  return new SignJWT({ wid: workspaceId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(callerId)
    .setIssuedAt()
    .setExpirationTime(`${expiresInSeconds}s`)
    .sign(getSecret());
}

export async function verifyToken(token: string): Promise<GatewayJWTPayload> {
  const { payload } = await jwtVerify(token, getSecret());
  return payload as GatewayJWTPayload;
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

/**
 * Require a valid JWT in the Authorization header.
 * Sets `c.var.jwtPayload` on success; returns 401 on failure.
 */
export async function requireAuth(c: Context, next: Next): Promise<Response | void> {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Missing or invalid Authorization header" }, 401);
  }

  const token = authHeader.slice("Bearer ".length);
  try {
    const payload = await verifyToken(token);
    c.set("jwtPayload", payload);
  } catch {
    return c.json({ error: "Invalid or expired token" }, 401);
  }

  await next();
}

/**
 * Require admin role. Must be used after requireAuth.
 */
export async function requireAdmin(c: Context, next: Next): Promise<Response | void> {
  const payload = c.get("jwtPayload");
  if (!payload || payload.role !== "admin") {
    return c.json({ error: "Admin role required" }, 403);
  }
  await next();
}

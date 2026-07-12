/**
 * Cognito access-token authentication middleware.
 *
 * This is the gateway's single authentication scheme. Callers present a
 * Cognito **access token** in `Authorization: Bearer <jwt>`. On every request
 * the middleware:
 *
 *   1. Verifies the token against the Cognito user pool (JWKS, `aws-jwt-verify`)
 *      and extracts the user `sub`.
 *   2. Reads the user's active workspace from `Sessions[sub].currentWorkspaceId`.
 *      Returns 400 (`workspace_not_selected`) if unset — the client must send
 *      the user through the workspace picker (`POST /auth/sessions`).
 *   3. Resolves `Memberships[workspaceId, sub]` — 403 if the user is not a
 *      member of the active workspace.
 *   4. Loads `UserGroups[workspaceId#sub]` and sets `c.var.principal` to
 *      `{ sub, workspaceId, role, groupIds[] }`.
 *
 * `requireAdmin` gates workspace-admin routes on `principal.role === "admin"`.
 * There is no instance admin, no `gateway-admin` group, no fallback issuer.
 */

import { CognitoJwtVerifier } from "aws-jwt-verify";
import { getMembership } from "../memberships.js";
import { getCurrentWorkspace } from "../sessions.js";
import { listUserGroupIds } from "../userGroups.js";
import type { Context, Next } from "hono";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Principal {
  /** Cognito user sub. */
  sub: string;
  /** Active workspace id (from `Sessions[sub].currentWorkspaceId`). */
  workspaceId: string;
  /** Workspace-scoped role from `Memberships`, e.g. "admin" | "member". */
  role: string;
  /** Group ids the user belongs to in the active workspace. */
  groupIds: string[];
}

/** Minimal shape of the Cognito verifier (real instance + test double). */
interface CognitoVerifier {
  verify(token: string): Promise<Record<string, unknown>>;
  hydrate(): Promise<void>;
}

declare module "hono" {
  interface ContextVariableMap {
    principal: Principal;
  }
}

// ---------------------------------------------------------------------------
// Verifier singleton
// ---------------------------------------------------------------------------

let _verifier: CognitoVerifier | null | undefined;

/**
 * Lazily build the Cognito access-token verifier from
 * `COGNITO_USER_POOL_ID` / `COGNITO_CLIENT_ID`. Returns null
 * when the env vars are not set (dev/test); tests inject a double via
 * `setCognitoVerifier`.
 */
function getCognitoVerifier(): CognitoVerifier | null {
  if (_verifier !== undefined) return _verifier;

  const userPoolId = process.env["COGNITO_USER_POOL_ID"];
  const clientId = process.env["COGNITO_CLIENT_ID"];
  if (!userPoolId || !clientId) {
    _verifier = null;
    return null;
  }

  try {
    _verifier = CognitoJwtVerifier.create({
      userPoolId,
      tokenUse: "access",
      clientId,
    }) as unknown as CognitoVerifier;
  } catch (err) {
    process.stderr.write(
      `[gateway] failed to create Cognito verifier: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    _verifier = null;
  }

  return _verifier;
}

/** Thrown when the Cognito env vars are not configured. */
export class CognitoNotConfiguredError extends Error {
  constructor() {
    super("Cognito verifier not configured");
    this.name = "CognitoNotConfiguredError";
  }
}

/**
 * Verify a Cognito access token and return the user `sub`. Throws
 * `CognitoNotConfiguredError` when the verifier is not configured (→ 500) and
 * a generic `Error` for any verification failure (→ 401). Shared by
 * `requireAuth` and the workspace picker (`POST /auth/sessions`).
 */
export async function verifyAccessToken(token: string): Promise<string> {
  const verifier = getCognitoVerifier();
  if (!verifier) throw new CognitoNotConfiguredError();
  const payload = await verifier.verify(token);
  const sub = payload["sub"];
  if (typeof sub !== "string" || sub.length === 0) {
    throw new Error("Invalid or expired token");
  }
  return sub;
}

/** Inject a verifier double (tests). */
export function setCognitoVerifier(v: CognitoVerifier | null): void {
  _verifier = v;
}

/** Reset the cached verifier (tests). */
export function resetCognitoVerifier(): void {
  _verifier = undefined;
}

/**
 * Boot hook: create the verifier (if configured) and prefetch the JWKS so the
 * first request does not pay the latency. Call from the server entry point
 * before `serve()`. A hydrate failure is non-fatal — verify falls back to a
 * lazy fetch on first use.
 */
export async function initAuth(): Promise<void> {
  const verifier = getCognitoVerifier();
  if (!verifier) return;
  try {
    await verifier.hydrate();
  } catch (err) {
    process.stderr.write(
      `[gateway] Cognito JWKS hydrate failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
  }
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------

/**
 * Require a valid Cognito access token. Resolves the active workspace and
 * membership, loads group ids, and sets `c.var.principal`.
 */
export async function requireAuth(c: Context, next: Next): Promise<Response | void> {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Missing or invalid Authorization header" }, 401);
  }
  const token = authHeader.slice("Bearer ".length);

  let sub: string;
  try {
    sub = await verifyAccessToken(token);
  } catch (err) {
    if (err instanceof CognitoNotConfiguredError) {
      return c.json({ error: "Cognito verifier not configured" }, 500);
    }
    return c.json({ error: "Invalid or expired token" }, 401);
  }

  // Active workspace from the session row.
  let workspaceId: string | undefined;
  try {
    workspaceId = await getCurrentWorkspace(sub);
  } catch (err) {
    process.stderr.write(
      `[gateway] session read failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to read session" }, 500);
  }
  if (!workspaceId) {
    return c.json(
      { error: "No active workspace selected", code: "workspace_not_selected" },
      400,
    );
  }

  // Membership in the active workspace.
  let membership;
  try {
    membership = await getMembership(workspaceId, sub);
  } catch (err) {
    process.stderr.write(
      `[gateway] membership read failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to resolve membership" }, 500);
  }
  if (!membership) {
    return c.json({ error: "No membership in active workspace" }, 403);
  }

  // Group ids for the active workspace.
  let groupIds: string[];
  try {
    groupIds = await listUserGroupIds(workspaceId, sub);
  } catch (err) {
    process.stderr.write(
      `[gateway] user groups read failed: ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return c.json({ error: "Failed to load groups" }, 500);
  }

  c.set("principal", {
    sub,
    workspaceId,
    role: membership.role ?? "member",
    groupIds,
  });
  await next();
}

/**
 * Require the active-workspace admin role. Must run after `requireAuth`.
 */
export async function requireAdmin(c: Context, next: Next): Promise<Response | void> {
  const principal = c.get("principal");
  if (!principal || principal.role !== "admin") {
    return c.json({ error: "Admin role required" }, 403);
  }
  await next();
}

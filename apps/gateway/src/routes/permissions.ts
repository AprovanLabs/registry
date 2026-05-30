/**
 * Permission management routes.
 *
 * Only workspace admins may manage permissions.
 *
 * POST   /permissions          — grant a permission
 * GET    /permissions          — list permissions (optionally filter by callerId)
 * DELETE /permissions/:id      — revoke a permission
 */

import { Hono } from "hono";
import { requireAuth, requireAdmin } from "../middleware/auth.js";
import { getPermissionStore, type GrantInput } from "../permissions.js";

export const permissionsRouter = new Hono();

permissionsRouter.use("*", requireAuth, requireAdmin);

// ---------------------------------------------------------------------------
// POST /permissions
// ---------------------------------------------------------------------------

permissionsRouter.post("/", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isGrantInput(body)) {
    return c.json(
      { error: "Invalid grant input. Required: callerId, provider, operation (string)" },
      400,
    );
  }

  const input: GrantInput = {
    ...(body as { callerId: string; provider: string; operation: string }),
    grantedBy: payload.sub,
  };

  const store = getPermissionStore();
  const perm = store.grant(workspaceId, input);
  return c.json(perm, 201);
});

// ---------------------------------------------------------------------------
// GET /permissions
// ---------------------------------------------------------------------------

permissionsRouter.get("/", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const callerId = c.req.query("callerId");

  const store = getPermissionStore();
  const perms = store.list(workspaceId, callerId);
  return c.json({ permissions: perms });
});

// ---------------------------------------------------------------------------
// DELETE /permissions/:id
// ---------------------------------------------------------------------------

permissionsRouter.delete("/:id", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const id = c.req.param("id") ?? "";

  if (!id) {
    return c.json({ error: "Missing permission id" }, 400);
  }

  const store = getPermissionStore();
  const revoked = store.revoke(workspaceId, id);

  if (!revoked) {
    return c.json({ error: "Permission not found" }, 404);
  }
  return c.json({ revoked: true });
});

// ---------------------------------------------------------------------------
// Type guard
// ---------------------------------------------------------------------------

function isGrantInput(value: unknown): value is { callerId: string; provider: string; operation: string } {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v["callerId"] === "string" &&
    typeof v["provider"] === "string" &&
    typeof v["operation"] === "string"
  );
}

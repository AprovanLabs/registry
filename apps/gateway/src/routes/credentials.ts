/**
 * Credential CRUD routes.
 *
 * All routes require JWT authentication (requireAuth middleware).
 * Admin role required for credential management.
 *
 * POST   /credentials          — store a new credential
 * GET    /credentials          — list credentials for the workspace
 * DELETE /credentials/:id      — delete a credential
 */

import { Hono } from "hono";
import { getCredentialStore, type CredentialInput } from "../credentials.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";
import { invalidateToolListCache } from "./tools.js";

export const credentialsRouter = new Hono();

// All credential routes require auth
credentialsRouter.use("*", requireAuth);
// Credential write operations require admin role
credentialsRouter.use("POST", requireAdmin);
credentialsRouter.use("DELETE", requireAdmin);

// ---------------------------------------------------------------------------
// POST /credentials
// ---------------------------------------------------------------------------

credentialsRouter.post("/", requireAdmin, async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isCredentialInput(body)) {
    return c.json(
      { error: "Invalid credential input. Required: provider (string), payload (object with type)" },
      400,
    );
  }

  const store = getCredentialStore();
  const record = await store.create(workspaceId, body);
  // A new credential may unlock a provider's tools for this workspace.
  invalidateToolListCache(workspaceId);
  return c.json(record, 201);
});

// ---------------------------------------------------------------------------
// GET /credentials
// ---------------------------------------------------------------------------

credentialsRouter.get("/", async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;

  const store = getCredentialStore();
  const records = await store.list(workspaceId);
  return c.json({ credentials: records });
});

// ---------------------------------------------------------------------------
// DELETE /credentials/:id
// ---------------------------------------------------------------------------

credentialsRouter.delete("/:id", requireAdmin, async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const id = c.req.param("id") ?? "";

  if (!id) {
    return c.json({ error: "Missing credential id" }, 400);
  }

  const store = getCredentialStore();
  const deleted = await store.delete(workspaceId, id);

  if (!deleted) {
    return c.json({ error: "Credential not found" }, 404);
  }
  // A removed credential may remove a provider's tools from this workspace.
  invalidateToolListCache(workspaceId);
  return c.json({ deleted: true });
});

// ---------------------------------------------------------------------------
// Type guard
// ---------------------------------------------------------------------------

function isCredentialInput(value: unknown): value is CredentialInput {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  if (typeof v["provider"] !== "string") return false;
  if (!v["payload"] || typeof v["payload"] !== "object") return false;
  const p = v["payload"] as Record<string, unknown>;
  if (!["bearer_token", "api_key", "oauth2_client", "oauth2_authcode"].includes(p["type"] as string)) {
    return false;
  }
  return true;
}

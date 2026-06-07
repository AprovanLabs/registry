/**
 * API key management routes.
 *
 * POST   /api-keys          — create a named API key (admin only)
 * GET    /api-keys          — list API keys for the workspace (admin only)
 * DELETE /api-keys/:id      — revoke an API key (admin only)
 */

import { Hono } from "hono";
import { getApiKeyStore, type CreateApiKeyInput } from "../apikeys.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

export const apiKeysRouter = new Hono();

apiKeysRouter.use("*", requireAuth, requireAdmin);

// ---------------------------------------------------------------------------
// POST /api-keys
// ---------------------------------------------------------------------------

apiKeysRouter.post("/", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isCreateInput(body)) {
    return c.json({ error: "Invalid input. Required: name (string)" }, 400);
  }

  const input: CreateApiKeyInput = {
    name: (body as { name: string }).name,
    createdBy: payload.sub,
    expiresInSeconds:
      typeof (body as { expiresInSeconds?: number }).expiresInSeconds === "number"
        ? (body as { expiresInSeconds: number }).expiresInSeconds
        : undefined,
  };

  const store = getApiKeyStore();
  const keyWithSecret = store.create(workspaceId, input);

  // secret is returned here and never again
  return c.json(keyWithSecret, 201);
});

// ---------------------------------------------------------------------------
// GET /api-keys
// ---------------------------------------------------------------------------

apiKeysRouter.get("/", (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;

  const store = getApiKeyStore();
  const keys = store.list(workspaceId);

  // Never expose secretHash in the list response
  return c.json({
    keys: keys.map(({ secretHash: _secretHash, ...rest }) => rest),
  });
});

// ---------------------------------------------------------------------------
// DELETE /api-keys/:id
// ---------------------------------------------------------------------------

apiKeysRouter.delete("/:id", (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const id = c.req.param("id") ?? "";

  if (!id) {
    return c.json({ error: "Missing api key id" }, 400);
  }

  const store = getApiKeyStore();
  const revoked = store.revoke(workspaceId, id);

  if (!revoked) {
    return c.json({ error: "API key not found" }, 404);
  }
  return c.json({ revoked: true });
});

// ---------------------------------------------------------------------------
// Type guard
// ---------------------------------------------------------------------------

function isCreateInput(value: unknown): value is { name: string; expiresInSeconds?: number } {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return typeof v["name"] === "string" && v["name"].trim().length > 0;
}

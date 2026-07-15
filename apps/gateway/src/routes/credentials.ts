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
import { z } from "zod";
import { getCredentialStore } from "../credentials.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";
import { invalidateToolListCache } from "./tools.js";

export const credentialsRouter = new Hono();

const credentialSchema = z.object({
  provider: z.string().min(1),
  label: z.string().optional(),
  payload: z.discriminatedUnion("type", [
    z.object({ type: z.literal("bearer_token"), token: z.string() }),
    z.object({ type: z.literal("api_key"), value: z.string(), headerName: z.string().optional() }),
    z.object({
      type: z.literal("oauth2_client"),
      clientId: z.string(),
      clientSecret: z.string(),
      tokenUrl: z.string(),
      scopes: z.array(z.string()).optional(),
    }),
    z.object({
      type: z.literal("oauth2_authcode"),
      clientId: z.string(),
      clientSecret: z.string(),
      tokenUrl: z.string(),
      code: z.string(),
      redirectUri: z.string(),
      codeVerifier: z.string().optional(),
      scopes: z.array(z.string()).optional(),
    }),
  ]),
});

// All credential routes require auth
credentialsRouter.use("*", requireAuth);
// Credential write operations require admin role
credentialsRouter.use("POST", requireAdmin);
credentialsRouter.use("DELETE", requireAdmin);

// ---------------------------------------------------------------------------
// POST /credentials
// ---------------------------------------------------------------------------

credentialsRouter.post("/", requireAdmin, validateBody(credentialSchema), async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;

  const store = getCredentialStore();
  const record = await store.create(workspaceId, c.req.valid("json"));
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

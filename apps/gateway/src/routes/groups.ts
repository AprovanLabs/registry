/**
 * Groups + grants admin routes.
 *
 * All routes require admin role (requireAuth + requireAdmin).
 * No response ever includes a credential payload.
 *
 * POST   /groups                         — create a workspace group
 * GET    /groups                         — list workspace groups
 * PATCH  /groups/:id                     — update group name / description
 * DELETE /groups/:id                     — delete group (cascades grants)
 *
 * POST   /groups/:id/users               — add a user to a group
 * DELETE /groups/:id/users               — remove a user from a group
 *
 * POST   /groups/:id/prefix-grants       — add a path-prefix grant
 * DELETE /groups/:id/prefix-grants       — remove a path-prefix grant
 *
 * POST   /groups/:id/tool-grants         — add a tool grant
 * DELETE /groups/:id/tool-grants         — remove a tool grant
 */

import { Hono } from "hono";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
import {
  addPrefixGrant,
  addToolGrant,
  addUserToGroup,
  createGroup,
  deleteGroup,
  getGroup,
  listGroups,
  removePrefixGrant,
  removeToolGrant,
  removeUserFromGroup,
  updateGroup,
} from "../groups.js";

export const groupsRouter = new Hono();

groupsRouter.use("*", requireAuth, requireAdmin);

// ---------------------------------------------------------------------------
// POST /groups
// ---------------------------------------------------------------------------

groupsRouter.post("/", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isCreateGroupInput(body)) {
    return c.json({ error: "Invalid input. Required: name (string). Optional: description (string)" }, 400);
  }

  const { name, description } = body as { name: string; description?: string };
  const group = await createGroup(workspaceId, name, description);
  return c.json(group, 201);
});

// ---------------------------------------------------------------------------
// GET /groups
// ---------------------------------------------------------------------------

groupsRouter.get("/", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;

  const groups = await listGroups(workspaceId);
  return c.json({ groups });
});

// ---------------------------------------------------------------------------
// PATCH /groups/:id
// ---------------------------------------------------------------------------

groupsRouter.patch("/:id", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isPatchGroupInput(body)) {
    return c.json({ error: "Invalid input. Accepted fields: name (string), description (string)" }, 400);
  }

  const { name, description } = body as { name?: string; description?: string };
  const updated = await updateGroup(workspaceId, groupId, { name, description });
  if (!updated) {
    return c.json({ error: "Group not found" }, 404);
  }
  return c.json(updated);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  const deleted = await deleteGroup(workspaceId, groupId);
  if (!deleted) {
    return c.json({ error: "Group not found" }, 404);
  }
  return c.json({ deleted: true });
});

// ---------------------------------------------------------------------------
// POST /groups/:id/users
// ---------------------------------------------------------------------------

groupsRouter.post("/:id/users", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isUserSubInput(body)) {
    return c.json({ error: "Invalid input. Required: userSub (string)" }, 400);
  }

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const { userSub } = body as { userSub: string };
  await addUserToGroup(workspaceId, groupId, userSub);
  return c.json({ workspaceId, groupId, userSub }, 201);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id/users
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id/users", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isUserSubInput(body)) {
    return c.json({ error: "Invalid input. Required: userSub (string)" }, 400);
  }

  const { userSub } = body as { userSub: string };
  const removed = await removeUserFromGroup(workspaceId, groupId, userSub);
  if (!removed) {
    return c.json({ error: "User not found in group" }, 404);
  }
  return c.json({ removed: true });
});

// ---------------------------------------------------------------------------
// POST /groups/:id/prefix-grants
// ---------------------------------------------------------------------------

groupsRouter.post("/:id/prefix-grants", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isPrefixGrantInput(body)) {
    return c.json({ error: "Invalid input. Required: pathPrefix (string starting with /)" }, 400);
  }

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const { pathPrefix } = body as { pathPrefix: string };
  const grant = await addPrefixGrant(workspaceId, groupId, pathPrefix);
  return c.json(grant, 201);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id/prefix-grants
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id/prefix-grants", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isPrefixGrantInput(body)) {
    return c.json({ error: "Invalid input. Required: pathPrefix (string)" }, 400);
  }

  const { pathPrefix } = body as { pathPrefix: string };
  const removed = await removePrefixGrant(workspaceId, groupId, pathPrefix);
  if (!removed) {
    return c.json({ error: "Prefix grant not found" }, 404);
  }
  return c.json({ removed: true });
});

// ---------------------------------------------------------------------------
// POST /groups/:id/tool-grants
// ---------------------------------------------------------------------------

groupsRouter.post("/:id/tool-grants", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isToolGrantInput(body)) {
    return c.json(
      { error: "Invalid input. Required: provider (string), operation (string, may be *)" },
      400,
    );
  }

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const { provider, operation } = body as { provider: string; operation: string };
  const grant = await addToolGrant(workspaceId, groupId, provider, operation);
  return c.json(grant, 201);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id/tool-grants
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id/tool-grants", async (c) => {
  const payload = c.get("jwtPayload");
  const workspaceId = payload.wid;
  const groupId = c.req.param("id");

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  if (!isToolGrantInput(body)) {
    return c.json(
      { error: "Invalid input. Required: provider (string), operation (string)" },
      400,
    );
  }

  const { provider, operation } = body as { provider: string; operation: string };
  const removed = await removeToolGrant(workspaceId, groupId, provider, operation);
  if (!removed) {
    return c.json({ error: "Tool grant not found" }, 404);
  }
  return c.json({ removed: true });
});

// ---------------------------------------------------------------------------
// Type guards
// ---------------------------------------------------------------------------

function isCreateGroupInput(v: unknown): v is { name: string; description?: string } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (typeof o["name"] !== "string" || o["name"].trim() === "") return false;
  if (o["description"] !== undefined && typeof o["description"] !== "string") return false;
  return true;
}

function isPatchGroupInput(v: unknown): v is { name?: string; description?: string } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  if (o["name"] !== undefined && (typeof o["name"] !== "string" || o["name"].trim() === "")) return false;
  if (o["description"] !== undefined && typeof o["description"] !== "string") return false;
  return true;
}

function isUserSubInput(v: unknown): v is { userSub: string } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return typeof o["userSub"] === "string" && o["userSub"].length > 0;
}

function isPrefixGrantInput(v: unknown): v is { pathPrefix: string } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return typeof o["pathPrefix"] === "string" && o["pathPrefix"].startsWith("/");
}

function isToolGrantInput(v: unknown): v is { provider: string; operation: string } {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return typeof o["provider"] === "string" && o["provider"].length > 0 &&
    typeof o["operation"] === "string" && o["operation"].length > 0;
}

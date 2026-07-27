/**
 * Groups + grants admin routes.
 *
 * All routes require admin role (requireAuth + requireAdmin).
 * No response ever includes a credential payload.
 *
 * POST   /groups                         — create a workspace group
 * GET    /groups                         — list workspace groups
 * GET    /groups/:id                     — get a single group
 * PATCH  /groups/:id                     — update group name / description
 * DELETE /groups/:id                     — delete group (cascades grants)
 *
 * GET    /groups/:id/users               — list users in a group
 * POST   /groups/:id/users               — add a user to a group
 * DELETE /groups/:id/users               — remove a user from a group
 *
 * GET    /groups/:id/prefix-grants       — list prefix grants for a group
 * POST   /groups/:id/prefix-grants       — add a path-prefix grant
 * DELETE /groups/:id/prefix-grants       — remove a path-prefix grant
 *
 * GET    /groups/:id/tool-grants         — list tool grants for a group
 * POST   /groups/:id/tool-grants         — add a tool grant
 * DELETE /groups/:id/tool-grants         — remove a tool grant
 */

import { Hono } from "hono";
import { z } from "zod";
import { dynamo } from "../db/client.js";
import {
  addPrefixGrant,
  addToolGrant,
  addUserToGroup,
  createGroup,
  deleteGroup,
  getGroup,
  listGroups,
  listPrefixGrants,
  listToolGrants,
  removePrefixGrant,
  removeToolGrant,
  removeUserFromGroup,
  updateGroup,
} from "../groups.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";

export const groupsRouter = new Hono();

groupsRouter.use("*", requireAuth, requireAdmin);

// ---------------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------------

const createGroupSchema = z.object({
  name: z.string().trim().min(1),
  description: z.string().optional(),
});

const patchGroupSchema = z.object({
  name: z.string().trim().min(1).optional(),
  description: z.string().optional(),
});

const userSubSchema = z.object({ userId: z.string().min(1) });

const prefixGrantSchema = z.object({ pathPrefix: z.string().startsWith("/") });

const toolGrantSchema = z.object({
  provider: z.string().min(1),
  operation: z.string().min(1),
});

// ---------------------------------------------------------------------------
// POST /groups
// ---------------------------------------------------------------------------

groupsRouter.post("/", validateBody(createGroupSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const { name, description } = c.req.valid("json");
  const group = await createGroup(workspaceId, name, description);
  return c.json(group, 201);
});

// ---------------------------------------------------------------------------
// GET /groups
// ---------------------------------------------------------------------------

groupsRouter.get("/", async (c) => {
  const { workspaceId } = c.get("principal");

  const groups = await listGroups(workspaceId);
  return c.json({ groups });
});

// ---------------------------------------------------------------------------
// GET /groups/:id
// ---------------------------------------------------------------------------

groupsRouter.get("/:id", async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const groupId = c.req.param("id");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);
  return c.json(group);
});

// ---------------------------------------------------------------------------
// PATCH /groups/:id
// ---------------------------------------------------------------------------

groupsRouter.patch("/:id", validateBody(patchGroupSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { name, description } = c.req.valid("json");
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
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");

  const deleted = await deleteGroup(workspaceId, groupId);
  if (!deleted) {
    return c.json({ error: "Group not found" }, 404);
  }
  return c.json({ deleted: true });
});

// ---------------------------------------------------------------------------
// GET /groups/:id/users — list members of a group
// ---------------------------------------------------------------------------

groupsRouter.get("/:id/users", async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const groupId = c.req.param("id");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const userGroupsTable = process.env["USERGROUPS_TABLE"] ?? "UserGroups";
  const { client, ScanCommand } = await dynamo();
  const result = await client.send(
    new ScanCommand({
      TableName: userGroupsTable,
      FilterExpression: "workspaceId = :ws AND groupId = :gid",
      ExpressionAttributeValues: { ":ws": workspaceId, ":gid": groupId },
      ProjectionExpression: "userId",
    }),
  );
  const userIds = ((result.Items ?? []) as Array<{ userId?: string }>)
    .map((i) => i.userId)
    .filter((s): s is string => typeof s === "string");

  return c.json({ groupId, userIds });
});

// ---------------------------------------------------------------------------
// POST /groups/:id/users
// ---------------------------------------------------------------------------

groupsRouter.post("/:id/users", validateBody(userSubSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { userId } = c.req.valid("json");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  await addUserToGroup(workspaceId, groupId, userId);
  return c.json({ workspaceId, groupId, userId }, 201);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id/users
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id/users", validateBody(userSubSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { userId } = c.req.valid("json");
  const removed = await removeUserFromGroup(workspaceId, groupId, userId);
  if (!removed) {
    return c.json({ error: "User not found in group" }, 404);
  }
  return c.json({ removed: true });
});

// ---------------------------------------------------------------------------
// GET /groups/:id/prefix-grants
// ---------------------------------------------------------------------------

groupsRouter.get("/:id/prefix-grants", async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const groupId = c.req.param("id");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const grants = await listPrefixGrants(workspaceId, groupId);
  return c.json({ grants });
});

// ---------------------------------------------------------------------------
// POST /groups/:id/prefix-grants
// ---------------------------------------------------------------------------

groupsRouter.post("/:id/prefix-grants", validateBody(prefixGrantSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { pathPrefix } = c.req.valid("json");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const grant = await addPrefixGrant(workspaceId, groupId, pathPrefix);
  return c.json(grant, 201);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id/prefix-grants
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id/prefix-grants", validateBody(prefixGrantSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { pathPrefix } = c.req.valid("json");
  const removed = await removePrefixGrant(workspaceId, groupId, pathPrefix);
  if (!removed) {
    return c.json({ error: "Prefix grant not found" }, 404);
  }
  return c.json({ removed: true });
});

// ---------------------------------------------------------------------------
// GET /groups/:id/tool-grants
// ---------------------------------------------------------------------------

groupsRouter.get("/:id/tool-grants", async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;
  const groupId = c.req.param("id");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const grants = await listToolGrants(workspaceId, groupId);
  return c.json({ grants });
});

// ---------------------------------------------------------------------------
// POST /groups/:id/tool-grants
// ---------------------------------------------------------------------------

groupsRouter.post("/:id/tool-grants", validateBody(toolGrantSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { provider, operation } = c.req.valid("json");

  const group = await getGroup(workspaceId, groupId);
  if (!group) return c.json({ error: "Group not found" }, 404);

  const grant = await addToolGrant(workspaceId, groupId, provider, operation);
  return c.json(grant, 201);
});

// ---------------------------------------------------------------------------
// DELETE /groups/:id/tool-grants
// ---------------------------------------------------------------------------

groupsRouter.delete("/:id/tool-grants", validateBody(toolGrantSchema), async (c) => {
  const { workspaceId } = c.get("principal");
  const groupId = c.req.param("id");
  const { provider, operation } = c.req.valid("json");
  const removed = await removeToolGrant(workspaceId, groupId, provider, operation);
  if (!removed) {
    return c.json({ error: "Tool grant not found" }, 404);
  }
  return c.json({ removed: true });
});

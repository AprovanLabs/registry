/**
 * Workspace filesystem routes — the HTTP face of {@link IFsStore}.
 *
 *   GET    /fs?prefix=widgets       list a subtree (metadata only)
 *   GET    /fs/*path[?hash=]        read a file (latest, or a pinned version)
 *   PUT    /fs/*path                write { content, mimeType? }
 *   DELETE /fs/*path[?recursive=]   delete a file, or a subtree with recursive=1
 *   POST   /fs-uploads              presigned direct-to-S3 blob upload
 *   POST   /fs-uploads/complete     register an uploaded blob under a path
 *
 * All routes are workspace-scoped through the authenticated principal, same
 * as /prompts and /artifacts (which these paths will eventually absorb).
 * The upload routes exist only on backends with object storage (S3/MinIO);
 * elsewhere they answer 501 — inline `PUT /fs/*path` always works.
 */

import { Hono } from "hono";
import { hiddenDataPrefixes, isHiddenDataPath } from "../apps/store.js";
import { getFsStore, isServicePath, normalizeFsPath } from "../fs-store.js";
import { requireAuth } from "../middleware/auth.js";

export const fsRouter = new Hono();

fsRouter.use("*", requireAuth);

fsRouter.get("/", async (c) => {
  const prefix = c.req.query("prefix") ?? "";
  const normalized = prefix ? normalizeFsPath(prefix) : "";
  if (normalized === null) return c.json({ error: "Invalid prefix" }, 400);
  if (normalized && isServicePath(normalized)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  const workspaceId = c.get("principal").workspaceId;
  const entries = await getFsStore().list(workspaceId, normalized);
  // Root listings (and the chat file tree, which calls this same route)
  // hide the service subtree entirely, plus every app/personal data
  // partition — see docs/app-data.md "The file plane forgets app data".
  const hidden = await hiddenDataPrefixes(workspaceId);
  return c.json({
    entries: entries.filter(
      (entry) => !isServicePath(entry.path) && !isHiddenDataPath(entry.path, hidden),
    ),
  });
});

fsRouter.get("/:path{.+}", async (c) => {
  const path = normalizeFsPath(c.req.param("path"));
  if (!path) return c.json({ error: "Invalid path" }, 400);
  if (isServicePath(path)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  const file = await getFsStore().read(
    c.get("principal").workspaceId,
    path,
    c.req.query("hash"),
  );
  return file ? c.json(file) : c.json({ error: "Not found" }, 404);
});

fsRouter.put("/:path{.+}", async (c) => {
  const path = normalizeFsPath(c.req.param("path"));
  if (!path) return c.json({ error: "Invalid path" }, 400);
  if (isServicePath(path)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  const body = await c.req.json<{ content?: string; mimeType?: string }>();
  if (typeof body.content !== "string") {
    return c.json({ error: "content must be a string" }, 400);
  }
  const file = await getFsStore().write(
    c.get("principal").workspaceId,
    path,
    body.content,
    body.mimeType,
  );
  return c.json(file, 201);
});

fsRouter.delete("/:path{.+}", async (c) => {
  const path = normalizeFsPath(c.req.param("path"));
  if (!path) return c.json({ error: "Invalid path" }, 400);
  if (isServicePath(path)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  const workspaceId = c.get("principal").workspaceId;
  const store = getFsStore();
  const removed =
    c.req.query("recursive") === "1"
      ? (await store.removePrefix(workspaceId, path)) > 0
      : await store.remove(workspaceId, path);
  return removed
    ? c.body(null, 204)
    : c.json({ error: "Not found" }, 404);
});

// ---------------------------------------------------------------------------
// Direct-to-S3 uploads (mounted as /fs-uploads to stay clear of /fs/*path)
// ---------------------------------------------------------------------------

const HASH_PATTERN = /^[0-9a-f]{64}$/u;

export const fsUploadsRouter = new Hono();

fsUploadsRouter.use("*", requireAuth);

fsUploadsRouter.post("/", async (c) => {
  const store = getFsStore();
  if (!store.createUpload) {
    return c.json({ error: "Direct uploads need the S3 backend" }, 501);
  }
  const body = await c.req.json<{ hash?: string; mimeType?: string }>();
  if (!body.hash || !HASH_PATTERN.test(body.hash)) {
    return c.json({ error: "hash must be the hex SHA-256 of the content" }, 400);
  }
  const ticket = await store.createUpload(
    c.get("principal").workspaceId,
    body.hash,
    body.mimeType ?? "application/octet-stream",
  );
  return c.json(ticket, 201);
});

fsUploadsRouter.post("/complete", async (c) => {
  const store = getFsStore();
  if (!store.completeUpload) {
    return c.json({ error: "Direct uploads need the S3 backend" }, 501);
  }
  const body = await c.req.json<{ path?: string; hash?: string; mimeType?: string }>();
  const path = body.path ? normalizeFsPath(body.path) : null;
  if (!path) return c.json({ error: "Invalid path" }, 400);
  if (isServicePath(path)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  if (!body.hash || !HASH_PATTERN.test(body.hash)) {
    return c.json({ error: "hash must be the hex SHA-256 of the content" }, 400);
  }
  const entry = await store.completeUpload(
    c.get("principal").workspaceId,
    path,
    body.hash,
    body.mimeType ?? "application/octet-stream",
  );
  return entry
    ? c.json(entry, 201)
    : c.json({ error: "No uploaded blob for that hash" }, 404);
});

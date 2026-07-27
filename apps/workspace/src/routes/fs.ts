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

import { Hono, type Context } from "hono";
import { hiddenDataPrefixes, isHiddenDataPath } from "../apps/store.js";
import { getFsStore, isServicePath, normalizeFsPath } from "../fs-store.js";
import { requireAuth } from "../middleware/auth.js";
import { ServiceError } from "../service-kernel.js";
import {
  requireSession,
  sessionDelete,
  sessionList,
  sessionRead,
  sessionWrite,
  type ChatSessionRecord,
} from "../vcs/chat-sessions.js";
import { assertNotMounted, mountEntries, mountRead } from "../vcs/mounts.js";

export const fsRouter = new Hono();

fsRouter.use("*", requireAuth);

/**
 * `?session=<id>` scopes the operation to a *staged* chat session's overlay
 * view (docs/vcs-and-sessions.md). Auto-mode sessions resolve to undefined —
 * they write through to the live tree by contract. Closed staged sessions
 * stay readable (peek) but reject writes.
 */
async function stagedSessionParam(
  c: Context,
  write: boolean,
): Promise<ChatSessionRecord | undefined> {
  const id = c.req.query("session");
  if (!id) return undefined;
  const session = await requireSession(c.get("principal").workspaceId, id);
  if (session.mode !== "staged") return undefined;
  if (write && session.status !== "open") {
    throw new ServiceError("Session is not open", 400);
  }
  return session;
}

function serviceErrorResponse(c: Context, err: unknown): Response {
  if (err instanceof ServiceError) {
    return c.json({ error: err.message }, err.status as 400);
  }
  throw err;
}

fsRouter.get("/", async (c) => {
  const prefix = c.req.query("prefix") ?? "";
  const normalized = prefix ? normalizeFsPath(prefix) : "";
  if (normalized === null) return c.json({ error: "Invalid prefix" }, 400);
  if (normalized && isServicePath(normalized)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  const workspaceId = c.get("principal").workspaceId;
  try {
    const session = await stagedSessionParam(c, false);
    if (session) {
      return c.json({
        session: session.id,
        entries: await sessionList(workspaceId, session, normalized),
      });
    }
  } catch (err) {
    return serviceErrorResponse(c, err);
  }
  const entries = await getFsStore().list(workspaceId, normalized);
  // Root listings (and the chat file tree, which calls this same route)
  // hide the service subtree entirely, plus every app/personal data
  // partition — see docs/app-data.md "The file plane forgets app data".
  const hidden = await hiddenDataPrefixes(workspaceId);
  const mounted = await mountEntries(workspaceId, normalized);
  return c.json({
    entries: [
      ...entries.filter(
        (entry) => !isServicePath(entry.path) && !isHiddenDataPath(entry.path, hidden),
      ),
      ...mounted,
    ].sort((a, b) => a.path.localeCompare(b.path)),
  });
});

fsRouter.get("/:path{.+}", async (c) => {
  const path = normalizeFsPath(c.req.param("path"));
  if (!path) return c.json({ error: "Invalid path" }, 400);
  if (isServicePath(path)) {
    return c.json({ error: "Service state is managed through its tool namespaces" }, 403);
  }
  const workspaceId = c.get("principal").workspaceId;
  try {
    const session = await stagedSessionParam(c, false);
    if (session) {
      const file = await sessionRead(workspaceId, session, path);
      return file ? c.json(file) : c.json({ error: "Not found" }, 404);
    }
    const viaMount = await mountRead(workspaceId, path);
    if (viaMount !== "not-mounted") {
      return viaMount ? c.json(viaMount) : c.json({ error: "Not found" }, 404);
    }
  } catch (err) {
    return serviceErrorResponse(c, err);
  }
  const file = await getFsStore().read(workspaceId, path, c.req.query("hash"));
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
  const workspaceId = c.get("principal").workspaceId;
  try {
    await assertNotMounted(workspaceId, path);
    const session = await stagedSessionParam(c, true);
    if (session) {
      const meta = await sessionWrite(workspaceId, session, path, body.content, body.mimeType);
      return c.json(meta, 201);
    }
  } catch (err) {
    return serviceErrorResponse(c, err);
  }
  const file = await getFsStore().write(workspaceId, path, body.content, body.mimeType);
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
  try {
    await assertNotMounted(workspaceId, path);
    const session = await stagedSessionParam(c, true);
    if (session) {
      await sessionDelete(workspaceId, session, path, c.req.query("recursive") === "1");
      return c.body(null, 204);
    }
  } catch (err) {
    return serviceErrorResponse(c, err);
  }
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

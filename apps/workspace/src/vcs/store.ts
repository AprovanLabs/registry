/**
 * VCS over the workspace FS — the Git-shaped layer described in
 * docs/vcs-and-sessions.md.
 *
 * The FS already content-addresses every write (`(path, sha256)` version
 * rows, shared blobs), so this module only adds the cheap parts:
 *
 *   snapshot  .services/vcs/snapshots/<id>.json   {path → hash} manifest
 *   commit    .services/vcs/commits/<id>.json     snapshot + parents + message
 *   ref       .services/vcs/refs/<name>.json      named pointer (main, …)
 *
 * Identities are sha256 of canonical forms, so snapshots and commits are
 * idempotent to re-write. Snapshots always exclude `.services/**` and the
 * hidden app-data partitions — what a member can see is what gets versioned.
 *
 * Ref advances are read-modify-write without CAS: workspaces are effectively
 * single-writer today, and the worst case is a lost auto-snapshot pointer,
 * never lost content (every version row survives).
 *
 * Known v1 limitation: `remove()` on the FS deletes all version rows for a
 * path, so a hard delete makes that path's older snapshot entries listable
 * but not readable. Restores and reads of live paths are unaffected.
 */

import { createHash } from "node:crypto";
import { hiddenDataPrefixes, isHiddenDataPath } from "../apps/store.js";
import { getFsStore, isServicePath, type FsEntry } from "../fs-store.js";
import { ServiceError } from "../service-kernel.js";

const SNAPSHOTS_PREFIX = ".services/vcs/snapshots";
const COMMITS_PREFIX = ".services/vcs/commits";
const REFS_PREFIX = ".services/vcs/refs";

export const MAIN_REF = "main";

/** Ref names: `main`, `session/<id>`, or other simple segmented names. */
const REF_RE = /^[a-z][a-z0-9-]*(\/[A-Za-z0-9_-]+)*$/u;

export interface SnapshotEntry {
  path: string;
  hash: string;
  mimeType: string;
  size: number;
}

export interface VcsSnapshot {
  id: string;
  /** Subtree this snapshot covers ("" = whole visible workspace). */
  prefix: string;
  entries: SnapshotEntry[];
}

export interface CommitStats {
  added: number;
  modified: number;
  removed: number;
}

export interface VcsCommit {
  id: string;
  snapshot: string;
  prefix: string;
  parents: string[];
  message: string;
  author: string;
  /** Chat session this commit came from (merge commits carry it). */
  sessionId?: string;
  createdAt: string;
  /** Change counts vs the first parent (all-added for root commits). */
  stats: CommitStats;
}

export interface VcsRef {
  name: string;
  commit: string;
  updatedAt: string;
  updatedBy: string;
}

export interface VcsDiff {
  added: Array<{ path: string; hash: string }>;
  modified: Array<{ path: string; from: string; to: string }>;
  removed: Array<{ path: string; hash: string }>;
}

export function refName(value: unknown, fallback = MAIN_REF): string {
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value !== "string" || !REF_RE.test(value)) {
    throw new ServiceError(`ref must match ${REF_RE}`, 400);
  }
  return value;
}

// ---------------------------------------------------------------------------
// Snapshots
// ---------------------------------------------------------------------------

/**
 * The current visible tree: latest version of every file a member can see
 * (no `.services/**`, no app/personal data partitions).
 */
export async function visibleEntries(
  workspaceId: string,
  prefix = "",
): Promise<FsEntry[]> {
  const entries = await getFsStore().list(workspaceId, prefix);
  const hidden = await hiddenDataPrefixes(workspaceId);
  return entries.filter(
    (entry) => !isServicePath(entry.path) && !isHiddenDataPath(entry.path, hidden),
  );
}

/** Identity: sha256 over the sorted `<hash> <path>` lines — content only. */
function snapshotId(entries: SnapshotEntry[]): string {
  const canonical = entries.map((entry) => `${entry.hash} ${entry.path}`).join("\n");
  return createHash("sha256").update(canonical).digest("hex");
}

export function buildSnapshot(entries: FsEntry[], prefix = ""): VcsSnapshot {
  const sorted = [...entries]
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ path, hash, mimeType, size }) => ({ path, hash, mimeType, size }));
  return { id: snapshotId(sorted), prefix, entries: sorted };
}

/**
 * Persist a snapshot. Stored JSON carries no timestamps, so identical trees
 * produce byte-identical files and the FS's content addressing dedupes the
 * write for free.
 */
export async function saveSnapshot(
  workspaceId: string,
  snapshot: VcsSnapshot,
): Promise<void> {
  await getFsStore().write(
    workspaceId,
    `${SNAPSHOTS_PREFIX}/${snapshot.id}.json`,
    JSON.stringify(snapshot),
    "application/json",
  );
}

export async function readSnapshot(
  workspaceId: string,
  id: string,
): Promise<VcsSnapshot | undefined> {
  const file = await getFsStore()
    .read(workspaceId, `${SNAPSHOTS_PREFIX}/${id}.json`)
    .catch(() => undefined);
  return file ? (JSON.parse(file.content) as VcsSnapshot) : undefined;
}

export function diffSnapshots(
  from: VcsSnapshot | undefined,
  to: VcsSnapshot,
): VcsDiff {
  const before = new Map((from?.entries ?? []).map((entry) => [entry.path, entry.hash]));
  const added: VcsDiff["added"] = [];
  const modified: VcsDiff["modified"] = [];
  const removed: VcsDiff["removed"] = [];
  const seen = new Set<string>();
  for (const entry of to.entries) {
    seen.add(entry.path);
    const prior = before.get(entry.path);
    if (prior === undefined) added.push({ path: entry.path, hash: entry.hash });
    else if (prior !== entry.hash) modified.push({ path: entry.path, from: prior, to: entry.hash });
  }
  for (const [path, hash] of before) {
    if (!seen.has(path)) removed.push({ path, hash });
  }
  return { added, modified, removed };
}

// ---------------------------------------------------------------------------
// Commits
// ---------------------------------------------------------------------------

function commitPath(id: string): string {
  return `${COMMITS_PREFIX}/${id}.json`;
}

export async function readCommit(
  workspaceId: string,
  id: string,
): Promise<VcsCommit | undefined> {
  if (!id) return undefined;
  const file = await getFsStore()
    .read(workspaceId, commitPath(id))
    .catch(() => undefined);
  return file ? (JSON.parse(file.content) as VcsCommit) : undefined;
}

async function writeCommit(workspaceId: string, commit: VcsCommit): Promise<void> {
  await getFsStore().write(
    workspaceId,
    commitPath(commit.id),
    JSON.stringify(commit, null, 2),
    "application/json",
  );
}

/**
 * Create + persist a commit for an already-saved snapshot. Stats are
 * computed against the first parent's snapshot.
 */
export async function createCommit(
  workspaceId: string,
  options: {
    snapshot: VcsSnapshot;
    parents: string[];
    message: string;
    author: string;
    sessionId?: string;
  },
): Promise<VcsCommit> {
  const parentCommit = options.parents[0]
    ? await readCommit(workspaceId, options.parents[0])
    : undefined;
  const parentSnapshot = parentCommit
    ? await readSnapshot(workspaceId, parentCommit.snapshot)
    : undefined;
  const diff = diffSnapshots(parentSnapshot, options.snapshot);

  const body = {
    snapshot: options.snapshot.id,
    prefix: options.snapshot.prefix,
    parents: options.parents,
    message: options.message,
    author: options.author,
    ...(options.sessionId ? { sessionId: options.sessionId } : {}),
    createdAt: new Date().toISOString(),
    stats: {
      added: diff.added.length,
      modified: diff.modified.length,
      removed: diff.removed.length,
    },
  };
  const id = createHash("sha256").update(JSON.stringify(body)).digest("hex");
  const commit: VcsCommit = { id, ...body };
  await writeCommit(workspaceId, commit);
  return commit;
}

/** Walk first parents from a commit, newest first. */
export async function logCommits(
  workspaceId: string,
  fromCommitId: string,
  limit = 50,
): Promise<VcsCommit[]> {
  const commits: VcsCommit[] = [];
  let cursor: string | undefined = fromCommitId;
  while (cursor && commits.length < limit) {
    const commit: VcsCommit | undefined = await readCommit(workspaceId, cursor);
    if (!commit) break;
    commits.push(commit);
    cursor = commit.parents[0];
  }
  return commits;
}

// ---------------------------------------------------------------------------
// Refs
// ---------------------------------------------------------------------------

function refPath(name: string): string {
  return `${REFS_PREFIX}/${name}.json`;
}

export async function readRef(
  workspaceId: string,
  name: string,
): Promise<VcsRef | undefined> {
  const file = await getFsStore()
    .read(workspaceId, refPath(name))
    .catch(() => undefined);
  return file ? (JSON.parse(file.content) as VcsRef) : undefined;
}

export async function writeRef(
  workspaceId: string,
  name: string,
  commit: string,
  updatedBy: string,
): Promise<VcsRef> {
  const ref: VcsRef = { name, commit, updatedAt: new Date().toISOString(), updatedBy };
  await getFsStore().write(
    workspaceId,
    refPath(name),
    JSON.stringify(ref, null, 2),
    "application/json",
  );
  return ref;
}

export async function listRefs(workspaceId: string): Promise<VcsRef[]> {
  const entries = await getFsStore()
    .list(workspaceId, REFS_PREFIX)
    .catch(() => []);
  const refs: VcsRef[] = [];
  for (const entry of entries) {
    if (!entry.path.endsWith(".json")) continue;
    const file = await getFsStore()
      .read(workspaceId, entry.path)
      .catch(() => undefined);
    if (file) refs.push(JSON.parse(file.content) as VcsRef);
  }
  return refs.sort((a, b) => a.name.localeCompare(b.name));
}

/** A commit id (full or unambiguous prefix ≥ 8 chars) or a ref name. */
export async function resolveCommitish(
  workspaceId: string,
  value: string,
): Promise<VcsCommit> {
  const direct = await readCommit(workspaceId, value);
  if (direct) return direct;
  if (REF_RE.test(value)) {
    const ref = await readRef(workspaceId, value);
    if (ref) {
      const head = await readCommit(workspaceId, ref.commit);
      if (head) return head;
    }
  }
  if (/^[0-9a-f]{8,63}$/u.test(value)) {
    const entries = await getFsStore()
      .list(workspaceId, COMMITS_PREFIX)
      .catch(() => []);
    const matches = entries
      .map((entry) => entry.path.split("/").pop() ?? "")
      .filter((file) => file.startsWith(value) && file.endsWith(".json"));
    if (matches.length === 1) {
      const commit = await readCommit(workspaceId, matches[0]!.slice(0, -".json".length));
      if (commit) return commit;
    }
    if (matches.length > 1) {
      throw new ServiceError(`Ambiguous commit prefix: ${value}`, 400);
    }
  }
  throw new ServiceError(`Unknown commit or ref: ${value}`, 404);
}

// ---------------------------------------------------------------------------
// High-level operations
// ---------------------------------------------------------------------------

/**
 * Snapshot the current visible tree and advance `main` — unless the head
 * already matches, in which case the existing head comes back untouched.
 * Used both by explicit `vfs.commit` and as the auto-snapshot a session
 * takes at creation, so a session's base is always exactly what the user
 * was looking at.
 */
export async function commitTree(
  workspaceId: string,
  options: { message: string; author: string; sessionId?: string },
): Promise<{ commit: VcsCommit; created: boolean }> {
  const snapshot = buildSnapshot(await visibleEntries(workspaceId));
  const ref = await readRef(workspaceId, MAIN_REF);
  const head = ref ? await readCommit(workspaceId, ref.commit) : undefined;
  if (head && head.snapshot === snapshot.id) {
    return { commit: head, created: false };
  }
  await saveSnapshot(workspaceId, snapshot);
  const commit = await createCommit(workspaceId, {
    snapshot,
    parents: head ? [head.id] : [],
    message: options.message,
    author: options.author,
    sessionId: options.sessionId,
  });
  await writeRef(workspaceId, MAIN_REF, commit.id, options.author);
  return { commit, created: true };
}

/**
 * Non-destructive restore: re-write the snapshot's content as the new
 * latest for every entry under `path`/`prefix` (or the whole snapshot).
 * Files that exist now but not in the snapshot are left alone.
 */
export async function restoreCommit(
  workspaceId: string,
  commit: VcsCommit,
  filter?: { path?: string; prefix?: string },
): Promise<{ restored: string[]; missing: string[] }> {
  const snapshot = await readSnapshot(workspaceId, commit.snapshot);
  if (!snapshot) throw new ServiceError(`Snapshot missing for commit ${commit.id}`, 404);
  const store = getFsStore();
  const within = (path: string): boolean => {
    if (filter?.path) return path === filter.path;
    if (filter?.prefix) {
      return path === filter.prefix || path.startsWith(`${filter.prefix}/`);
    }
    return true;
  };
  const restored: string[] = [];
  const missing: string[] = [];
  for (const entry of snapshot.entries) {
    if (!within(entry.path)) continue;
    const current = await store.read(workspaceId, entry.path).catch(() => undefined);
    if (current && current.hash === entry.hash) continue; // Already this content.
    const pinned = await store.read(workspaceId, entry.path, entry.hash).catch(() => undefined);
    if (!pinned) {
      missing.push(entry.path); // Hard-deleted path — history gone (v1 limitation).
      continue;
    }
    await store.write(workspaceId, entry.path, pinned.content, pinned.mimeType);
    restored.push(entry.path);
  }
  return { restored, missing };
}

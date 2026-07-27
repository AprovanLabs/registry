/**
 * VFS mounts — a path prefix backed by an external store
 * (docs/vcs-and-sessions.md). The same read semantics, other backing:
 *
 *   .services/vcs/mounts.json
 *   [{ prefix: "vendor/charts", type: "git",
 *      config: { repo: "org/charts", ref: "main", path: "src" }, mode: "read" }]
 *
 * v1 scope, deliberately narrow:
 * - `git` — read-through to a GitHub repo at a pinned ref (branch, tag, or
 *   commit) using the workspace's `github` credential (or anonymously for
 *   public repos). The git blob sha serves as the entry hash: not sha256,
 *   but a stable version token for the mounted view.
 * - `s3` — read-through to an S3 bucket/prefix using the gateway's own AWS
 *   credentials (grant the gateway role access via bucket policy).
 *   Workspace-credential-backed S3 access comes with the credential-grant
 *   workstream.
 * - `crdt` — reserved: the type is modeled (a CRDT-backed prefix is live and
 *   unversioned-by-us) but mounting one is rejected until a provider exists.
 * - All mounts are read-only in v1: writes and deletes under a mounted
 *   prefix fail with 403 whatever `mode` says; `mode` is stored so
 *   `readwrite` s3 can light up without a schema change.
 * - Mounted content never enters the FS store, so snapshots/commits keep
 *   covering exactly the native tree (a commit can't pin what it doesn't
 *   own — recording mount version tokens in snapshots is the v2 follow-up).
 */

import { getCredentialStore } from "../credentials.js";
import { getFsStore, normalizeFsPath, type FsEntry, type FsFile, type S3 } from "../fs-store.js";
import { ServiceError } from "../service-kernel.js";
import type { S3Client } from "@aws-sdk/client-s3";

const MOUNTS_PATH = ".services/vcs/mounts.json";

export type MountType = "git" | "s3" | "crdt";

export interface VfsMount {
  prefix: string;
  type: MountType;
  mode: "read" | "readwrite";
  config: Record<string, unknown>;
  createdBy: string;
  createdAt: string;
}

export async function readMounts(workspaceId: string): Promise<VfsMount[]> {
  const file = await getFsStore()
    .read(workspaceId, MOUNTS_PATH)
    .catch(() => undefined);
  if (!file) return [];
  const parsed = JSON.parse(file.content) as unknown;
  return Array.isArray(parsed) ? (parsed as VfsMount[]) : [];
}

async function saveMounts(workspaceId: string, mounts: VfsMount[]): Promise<void> {
  await getFsStore().write(
    workspaceId,
    MOUNTS_PATH,
    JSON.stringify(mounts, null, 2),
    "application/json",
  );
}

export async function addMount(
  workspaceId: string,
  userId: string,
  options: {
    prefix: string;
    type: string;
    config: Record<string, unknown>;
    mode?: string;
  },
): Promise<VfsMount> {
  const prefix = normalizeFsPath(options.prefix);
  if (!prefix) throw new ServiceError("prefix must be a workspace-relative path", 400);
  if (prefix.startsWith(".")) throw new ServiceError("prefix must not be hidden", 400);

  if (options.type === "crdt") {
    throw new ServiceError(
      'Mount type "crdt" is reserved — no provider is implemented yet (see docs/vcs-and-sessions.md)',
      501,
    );
  }
  if (options.type !== "git" && options.type !== "s3") {
    throw new ServiceError('type must be "git" or "s3"', 400);
  }
  if (options.type === "git" && typeof options.config["repo"] !== "string") {
    throw new ServiceError('git mounts need config.repo ("owner/name")', 400);
  }
  if (options.type === "s3" && typeof options.config["bucket"] !== "string") {
    throw new ServiceError("s3 mounts need config.bucket", 400);
  }

  const mounts = await readMounts(workspaceId);
  const overlaps = (a: string, b: string): boolean =>
    a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`);
  if (mounts.some((mount) => overlaps(mount.prefix, prefix))) {
    throw new ServiceError(`A mount already covers ${prefix}`, 409);
  }
  // The mount shadows nothing: native files under the prefix would become
  // unreachable, so refuse while any exist.
  const native = await getFsStore().list(workspaceId, prefix);
  if (native.length > 0) {
    throw new ServiceError(
      `${prefix} has ${native.length} workspace file(s) — move or delete them before mounting over it`,
      409,
    );
  }

  const mount: VfsMount = {
    prefix,
    type: options.type,
    mode: options.mode === "readwrite" ? "readwrite" : "read",
    config: options.config,
    createdBy: userId,
    createdAt: new Date().toISOString(),
  };
  await saveMounts(workspaceId, [...mounts, mount]);
  return mount;
}

export async function removeMount(workspaceId: string, prefix: string): Promise<boolean> {
  const normalized = normalizeFsPath(prefix);
  const mounts = await readMounts(workspaceId);
  const next = mounts.filter((mount) => mount.prefix !== normalized);
  if (next.length === mounts.length) return false;
  await saveMounts(workspaceId, next);
  return true;
}

/** The mount covering `path`, if any. */
export function mountFor(mounts: VfsMount[], path: string): VfsMount | undefined {
  return mounts.find(
    (mount) => path === mount.prefix || path.startsWith(`${mount.prefix}/`),
  );
}

/** Throw when `path` sits under a mount (writes/deletes — v1 is read-only). */
export async function assertNotMounted(workspaceId: string, path: string): Promise<void> {
  const mounts = await readMounts(workspaceId).catch(() => []);
  const mount = mountFor(mounts, path);
  if (mount) {
    throw new ServiceError(
      `${mount.prefix} is a read-only ${mount.type} mount`,
      403,
    );
  }
}

// ---------------------------------------------------------------------------
// git (GitHub) read-through
// ---------------------------------------------------------------------------

const GIT_TREE_TTL_MS = 60_000;
const gitTreeCache = new Map<
  string,
  { entries: Array<{ path: string; sha: string; size: number }>; expiresAt: number }
>();

async function githubToken(workspaceId: string): Promise<string | undefined> {
  const record = await getCredentialStore()
    .resolveRecordForProvider(workspaceId, "github")
    .catch(() => undefined);
  const payload = record?.payload as
    | { token?: string; value?: string }
    | undefined;
  return payload?.token ?? payload?.value;
}

async function githubFetch(
  workspaceId: string,
  url: string,
): Promise<Response> {
  const token = await githubToken(workspaceId);
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "aprovan-gateway",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok) {
    throw new ServiceError(`GitHub mount fetch failed (${response.status})`, 502);
  }
  return response;
}

interface GitConfig {
  repo: string;
  ref?: string;
  path?: string;
}

async function gitTree(
  workspaceId: string,
  config: GitConfig,
): Promise<Array<{ path: string; sha: string; size: number }>> {
  const ref = config.ref || "main";
  const key = `${workspaceId}:${config.repo}@${ref}`;
  const cached = gitTreeCache.get(key);
  if (cached && cached.expiresAt > Date.now()) return cached.entries;
  const response = await githubFetch(
    workspaceId,
    `https://api.github.com/repos/${config.repo}/git/trees/${encodeURIComponent(ref)}?recursive=1`,
  );
  const body = (await response.json()) as {
    tree?: Array<{ path?: string; type?: string; sha?: string; size?: number }>;
  };
  const entries = (body.tree ?? [])
    .filter((node) => node.type === "blob" && node.path && node.sha)
    .map((node) => ({ path: node.path!, sha: node.sha!, size: node.size ?? 0 }));
  gitTreeCache.set(key, { entries, expiresAt: Date.now() + GIT_TREE_TTL_MS });
  return entries;
}

const MOUNT_MIME: Record<string, string> = {
  ts: "text/typescript",
  tsx: "text/typescript",
  js: "text/javascript",
  jsx: "text/javascript",
  json: "application/json",
  md: "text/markdown",
  css: "text/css",
  html: "text/html",
};

const mountMime = (path: string): string =>
  MOUNT_MIME[path.split(".").pop() ?? ""] ?? "text/plain";

async function gitList(
  workspaceId: string,
  mount: VfsMount,
  prefix: string,
): Promise<FsEntry[]> {
  const config = mount.config as unknown as GitConfig;
  const root = config.path ? `${config.path.replace(/\/+$/u, "")}/` : "";
  const tree = await gitTree(workspaceId, config);
  return tree
    .filter((node) => node.path.startsWith(root))
    .map((node) => ({
      path: `${mount.prefix}/${node.path.slice(root.length)}`,
      hash: node.sha,
      mimeType: mountMime(node.path),
      size: node.size,
      updatedAt: mount.createdAt,
    }))
    .filter(
      (entry) =>
        !prefix || entry.path === prefix || entry.path.startsWith(`${prefix}/`),
    );
}

async function gitRead(
  workspaceId: string,
  mount: VfsMount,
  path: string,
): Promise<FsFile | undefined> {
  const config = mount.config as unknown as GitConfig;
  const relative = path.slice(mount.prefix.length + 1);
  const repoPath = config.path
    ? `${config.path.replace(/\/+$/u, "")}/${relative}`
    : relative;
  const ref = config.ref || "main";
  let body: { content?: string; encoding?: string; sha?: string; size?: number };
  try {
    const response = await githubFetch(
      workspaceId,
      `https://api.github.com/repos/${config.repo}/contents/${repoPath
        .split("/")
        .map(encodeURIComponent)
        .join("/")}?ref=${encodeURIComponent(ref)}`,
    );
    body = (await response.json()) as typeof body;
  } catch {
    return undefined;
  }
  if (typeof body.content !== "string") return undefined;
  const content =
    body.encoding === "base64"
      ? Buffer.from(body.content, "base64").toString("utf8")
      : body.content;
  return {
    path,
    hash: body.sha ?? "",
    mimeType: mountMime(path),
    size: body.size ?? Buffer.byteLength(content),
    updatedAt: mount.createdAt,
    content,
  };
}

// ---------------------------------------------------------------------------
// s3 read-through (gateway credentials)
// ---------------------------------------------------------------------------

interface S3Config {
  bucket: string;
  prefix?: string;
  region?: string;
}

const s3Clients = new Map<string, S3Client>();

/**
 * A client for the mount's region plus the command classes. Loaded on demand
 * (see ../db/client.ts): an s3 mount is the only thing in this module that
 * needs the AWS SDK, and local mode must not pay for it. Repeat calls hit the
 * module cache, so only the first one resolves anything.
 */
async function mountS3(config: S3Config): Promise<S3> {
  const mod = await import("@aws-sdk/client-s3");
  const region = config.region ?? process.env["AWS_REGION"] ?? "us-east-1";
  let client = s3Clients.get(region);
  if (!client) {
    client = new mod.S3Client({ region });
    s3Clients.set(region, client);
  }
  return { ...mod, client };
}

async function s3List(mount: VfsMount, prefix: string): Promise<FsEntry[]> {
  const config = mount.config as unknown as S3Config;
  const root = config.prefix ? `${config.prefix.replace(/\/+$/u, "")}/` : "";
  const entries: FsEntry[] = [];
  let token: string | undefined;
  const { client, ListObjectsV2Command } = await mountS3(config);
  do {
    const page = await client.send(
      new ListObjectsV2Command({
        Bucket: config.bucket,
        Prefix: root,
        ContinuationToken: token,
      }),
    );
    for (const object of page.Contents ?? []) {
      if (!object.Key || object.Key.endsWith("/")) continue;
      const path = `${mount.prefix}/${object.Key.slice(root.length)}`;
      if (prefix && path !== prefix && !path.startsWith(`${prefix}/`)) continue;
      entries.push({
        path,
        hash: (object.ETag ?? "").replaceAll('"', ""),
        mimeType: mountMime(path),
        size: object.Size ?? 0,
        updatedAt: object.LastModified?.toISOString() ?? mount.createdAt,
      });
    }
    token = page.NextContinuationToken;
  } while (token);
  return entries;
}

async function s3Read(mount: VfsMount, path: string): Promise<FsFile | undefined> {
  const config = mount.config as unknown as S3Config;
  const root = config.prefix ? `${config.prefix.replace(/\/+$/u, "")}/` : "";
  const key = root + path.slice(mount.prefix.length + 1);
  try {
    const { client, GetObjectCommand } = await mountS3(config);
    const object = await client.send(
      new GetObjectCommand({ Bucket: config.bucket, Key: key }),
    );
    const content = (await object.Body?.transformToString("utf8")) ?? "";
    return {
      path,
      hash: (object.ETag ?? "").replaceAll('"', ""),
      mimeType: object.ContentType ?? mountMime(path),
      size: Number(object.ContentLength ?? Buffer.byteLength(content)),
      updatedAt: object.LastModified?.toISOString() ?? mount.createdAt,
      content,
    };
  } catch {
    return undefined;
  }
}

// ---------------------------------------------------------------------------
// Dispatch
// ---------------------------------------------------------------------------

/** Entries for every mount intersecting `prefix` (best-effort per mount). */
export async function mountEntries(
  workspaceId: string,
  prefix = "",
): Promise<FsEntry[]> {
  const mounts = await readMounts(workspaceId).catch(() => []);
  const relevant = mounts.filter(
    (mount) =>
      !prefix ||
      mount.prefix === prefix ||
      mount.prefix.startsWith(`${prefix}/`) ||
      prefix.startsWith(`${mount.prefix}/`),
  );
  const listings = await Promise.all(
    relevant.map((mount) =>
      (mount.type === "git" ? gitList(workspaceId, mount, prefix) : s3List(mount, prefix)).catch(
        () => [] as FsEntry[],
      ),
    ),
  );
  return listings.flat();
}

/** Read `path` when it sits under a mount; undefined when it doesn't. */
export async function mountRead(
  workspaceId: string,
  path: string,
): Promise<FsFile | undefined | "not-mounted"> {
  const mounts = await readMounts(workspaceId).catch(() => []);
  const mount = mountFor(mounts, path);
  if (!mount) return "not-mounted";
  return mount.type === "git" ? gitRead(workspaceId, mount, path) : s3Read(mount, path);
}

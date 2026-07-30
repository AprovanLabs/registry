/**
 * Sandbox records and host registrations — the durable half of
 * docs/sandboxes.md.
 *
 * Both live on the workspace FS beside every other service's state, so they
 * inherit tenancy, the SQLite/S3 backend split, and the `.services/**` write
 * fence for free:
 *
 *   .services/sandboxes/<id>.json          one live environment
 *   .services/sandboxes/hosts/<id>.json    one registered execution endpoint
 *
 * A sandbox record is *durable* rather than request-scoped because the hosts
 * worth using are: a Sprite keeps its filesystem across hibernation, and a
 * registered laptop keeps a directory on a real disk. The record is what makes
 * "the changes in that sandbox" answerable after the process that created it
 * is gone — it carries the base manifest of everything the workspace handed
 * over, which is the other side of every diff.
 */

import { createHash, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../service-kernel.js";

const SANDBOXES_PREFIX = ".services/sandboxes";
const HOSTS_PREFIX = `${SANDBOXES_PREFIX}/hosts`;

export type SandboxRecordStatus = "running" | "stopped" | "destroyed";

/**
 * A directory inside the sandbox backed by a workspace prefix.
 *
 * `source: null` is a scratch mount: real inside the box, invisible to the
 * workspace, never committed. That is the "outside VCS" case in its purest
 * form and it costs nothing to support — a mount with no source is simply
 * skipped by every sync and commit pass.
 */
export interface SandboxMount {
  /** Path inside the sandbox, relative to the image workdir. */
  path: string;
  /** Workspace VFS prefix, or null for untracked scratch space. */
  source: string | null;
  mode: "ro" | "rw";
  /** Whether changes come back to the workspace at all. */
  track: boolean;
  /** `{relative path → sha256}` of what was materialized into the sandbox. */
  base: Record<string, string>;
  /** When `base` was last (re)established. */
  syncedAt: string;
}

export interface SandboxRecord {
  id: string;
  /**
   * The registered host this sandbox lives on, when the provider addresses
   * hosts individually. Pinned at create: a workspace with two laptops must
   * keep talking to the one holding the files.
   */
  hostId?: string;
  name: string;
  /** Concrete provider the `sandbox` interface resolved to at create time. */
  provider: string;
  /** The driver's own id for this environment. */
  externalId: string;
  /** Image spec, when one was named. */
  image?: string;
  workdir: string;
  status: SandboxRecordStatus;
  mounts: SandboxMount[];
  /** Chat session whose overlay receives commits (staged sessions only). */
  sessionId?: string;
  /** Agent profile whose grants bounded this sandbox. */
  agent?: string;
  url?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
}

/**
 * A registered execution endpoint. For the `machine` provider this is one
 * computer running `aprovan sandbox host run`; the two tokens are
 * deliberately distinct principals:
 *
 *   - `hostToken`   — the agent's. Leases work and answers it.
 *   - `clientToken` — the workspace's, stored as the `machine` credential.
 *     Enqueues work. It cannot lease or answer, so a leaked workspace
 *     credential cannot impersonate the machine.
 *
 * Only digests are stored; the plaintext is shown once at registration.
 */
export interface SandboxHostRecord {
  id: string;
  name: string;
  provider: string;
  /** Root directory the agent confines every working directory to. */
  root?: string;
  /**
   * Sandbox images this host offers to run — the match key for scheduled
   * runs (see queue.ts). Declared at registration.
   */
  images?: string[];
  /**
   * Images whose requirements the agent actually verified on the machine.
   * Set by the capability handshake; until it runs, `images` is taken on
   * trust. A declared-but-unverified image is the difference between "I was
   * told this box has Node" and "I watched it answer `node --version`".
   */
  verifiedImages?: string[];
  /** Binaries the agent found on PATH during the handshake. */
  tools?: string[];
  /** `darwin/arm64`, `linux/x64`, … as reported by the agent. */
  platform?: string;
  hostTokenHash: string;
  clientTokenHash: string;
  createdBy: string;
  createdAt: string;
  lastSeenAt?: string;
}

const ID_RE = /^[A-Za-z0-9][\w-]{0,63}$/u;

export function sandboxIdent(value: unknown, label: string): string {
  if (typeof value !== "string" || !ID_RE.test(value)) {
    throw new ServiceError(`${label} must match ${ID_RE}`, 400);
  }
  return value;
}

export function newSandboxId(): string {
  return `sbx_${randomUUID().replaceAll("-", "").slice(0, 20)}`;
}

export function newHostId(): string {
  return `sbh_${randomUUID().replaceAll("-", "").slice(0, 20)}`;
}

export function mintToken(prefix: string): string {
  return `${prefix}_${randomBytes(24).toString("base64url")}`;
}

export function tokenDigest(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/** Constant-time digest comparison — tokens are secrets, not identifiers. */
export function tokenMatches(token: string, digest: string): boolean {
  const candidate = Buffer.from(tokenDigest(token), "hex");
  const expected = Buffer.from(digest, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

// ---------------------------------------------------------------------------
// Sandboxes
// ---------------------------------------------------------------------------

const sandboxPath = (id: string): string => `${SANDBOXES_PREFIX}/${id}.json`;

export async function readSandbox(
  workspaceId: string,
  id: string,
): Promise<SandboxRecord | undefined> {
  const file = await getFsStore()
    .read(workspaceId, sandboxPath(sandboxIdent(id, "id")))
    .catch(() => undefined);
  return file ? (JSON.parse(file.content) as SandboxRecord) : undefined;
}

export async function requireSandbox(
  workspaceId: string,
  id: unknown,
): Promise<SandboxRecord> {
  const record = await readSandbox(workspaceId, sandboxIdent(id, "id"));
  if (!record) throw new ServiceError(`Unknown sandbox: ${String(id)}`, 404);
  if (record.status === "destroyed") {
    throw new ServiceError(`Sandbox ${record.id} was destroyed`, 410);
  }
  return record;
}

export async function saveSandbox(
  workspaceId: string,
  record: SandboxRecord,
): Promise<SandboxRecord> {
  record.updatedAt = new Date().toISOString();
  await getFsStore().write(
    workspaceId,
    sandboxPath(record.id),
    JSON.stringify(record, null, 2),
    "application/json",
  );
  return record;
}

export async function listSandboxes(workspaceId: string): Promise<SandboxRecord[]> {
  const entries = await getFsStore()
    .list(workspaceId, SANDBOXES_PREFIX)
    .catch(() => []);
  const records: SandboxRecord[] = [];
  for (const entry of entries) {
    // Only direct children are sandboxes: host registrations and run history
    // live one level down under the same prefix.
    if (!entry.path.endsWith(".json")) continue;
    if (entry.path.slice(SANDBOXES_PREFIX.length + 1).includes("/")) continue;
    const file = await getFsStore().read(workspaceId, entry.path).catch(() => undefined);
    if (file) records.push(JSON.parse(file.content) as SandboxRecord);
  }
  return records.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function deleteSandbox(workspaceId: string, id: string): Promise<void> {
  await getFsStore().remove(workspaceId, sandboxPath(id));
}

// ---------------------------------------------------------------------------
// Hosts
// ---------------------------------------------------------------------------

const hostPath = (id: string): string => `${HOSTS_PREFIX}/${id}.json`;

export async function readHost(
  workspaceId: string,
  id: string,
): Promise<SandboxHostRecord | undefined> {
  const file = await getFsStore()
    .read(workspaceId, hostPath(sandboxIdent(id, "host")))
    .catch(() => undefined);
  return file ? (JSON.parse(file.content) as SandboxHostRecord) : undefined;
}

export async function saveHost(
  workspaceId: string,
  record: SandboxHostRecord,
): Promise<SandboxHostRecord> {
  await getFsStore().write(
    workspaceId,
    hostPath(record.id),
    JSON.stringify(record, null, 2),
    "application/json",
  );
  return record;
}

export async function listHosts(workspaceId: string): Promise<SandboxHostRecord[]> {
  const entries = await getFsStore()
    .list(workspaceId, HOSTS_PREFIX)
    .catch(() => []);
  const records: SandboxHostRecord[] = [];
  for (const entry of entries) {
    if (!entry.path.endsWith(".json")) continue;
    const file = await getFsStore().read(workspaceId, entry.path).catch(() => undefined);
    if (file) records.push(JSON.parse(file.content) as SandboxHostRecord);
  }
  return records.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export async function deleteHost(workspaceId: string, id: string): Promise<boolean> {
  return getFsStore().remove(workspaceId, hostPath(sandboxIdent(id, "host")));
}

/** Public view of a host — never the digests. */
export function hostSummary(host: SandboxHostRecord): Omit<
  SandboxHostRecord,
  "hostTokenHash" | "clientTokenHash"
> {
  const { hostTokenHash: _h, clientTokenHash: _c, ...summary } = host;
  return summary;
}

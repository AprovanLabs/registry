/**
 * Workflow registrations + run records, stored on the workspace FS store so
 * they inherit workspace tenancy, versioning, and every existing authz path.
 *
 * Layout:
 *   .services/workflows/<name>.json           — registration
 *   .services/workflows/<name>/runs/<id>.json — run record (spans, logs, result)
 *
 * A workflow is a workspace script (a VFS path) plus its triggers. The script
 * itself lives wherever the user keeps it (e.g. `workflows/daily-report.js`) —
 * the registration only points at it, so editing the script in chat or the
 * playground immediately affects the next run.
 */

import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../services.js";

const WF_PREFIX = ".services/workflows/";
const RUNS_MAX_RETAINED = 100;

export interface WorkflowTriggers {
  /** Runnable on demand (always true today; recorded for clarity). */
  manual?: boolean;
  /** 5-field cron expression (UTC), e.g. every 5 minutes. */
  cron?: string;
  /** Expose an unauthenticated-but-tokened webhook endpoint. */
  webhook?: boolean;
  /** Event channels whose emissions trigger a run. */
  events?: string[];
}

export interface WorkflowRegistration {
  name: string;
  description?: string;
  /** Workspace VFS path of the script to run. */
  scriptPath: string;
  triggers: WorkflowTriggers;
  /** Bearer token external webhook callers must present. */
  hookToken?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowSpan {
  namespace: string;
  procedure: string;
  startedAt: string;
  durationMs: number;
  ok: boolean;
  error?: string;
}

export interface WorkflowLogLine {
  level: "log" | "info" | "warn" | "error" | "debug";
  message: string;
  ts: string;
}

export interface WorkflowRun {
  id: string;
  workflow: string;
  /** What started the run. */
  trigger: "manual" | "cron" | "webhook" | "event";
  /** Trigger detail: event channel, cron expression, caller id. */
  triggerDetail?: string;
  status: "running" | "succeeded" | "failed";
  startedAt: string;
  durationMs?: number;
  input?: unknown;
  result?: unknown;
  error?: string;
  logs: WorkflowLogLine[];
  spans: WorkflowSpan[];
}

const NAME_RE = /^[a-z0-9][a-z0-9-]{0,63}$/u;

export function workflowName(value: unknown): string {
  if (typeof value !== "string" || !NAME_RE.test(value)) {
    throw new ServiceError(`workflow name must match ${NAME_RE}`, 400);
  }
  return value;
}

function regPath(name: string): string {
  return `${WF_PREFIX}${name}.json`;
}

function runPath(name: string, runId: string): string {
  return `${WF_PREFIX}${name}/runs/${runId}.json`;
}

export async function saveRegistration(
  workspaceId: string,
  registration: WorkflowRegistration,
): Promise<void> {
  await getFsStore().write(
    workspaceId,
    regPath(registration.name),
    JSON.stringify(registration, null, 2),
    "application/json",
  );
}

export async function readRegistration(
  workspaceId: string,
  name: string,
): Promise<WorkflowRegistration | undefined> {
  const file = await getFsStore().read(workspaceId, regPath(name));
  return file ? (JSON.parse(file.content) as WorkflowRegistration) : undefined;
}

export async function listRegistrations(
  workspaceId: string,
): Promise<WorkflowRegistration[]> {
  const entries = await getFsStore().list(workspaceId, WF_PREFIX.slice(0, -1));
  const names = entries
    .map((entry) => entry.path)
    .filter((path) => path.startsWith(WF_PREFIX) && path.endsWith(".json") && !path.includes("/runs/"))
    .map((path) => path.slice(WF_PREFIX.length, -".json".length))
    .filter((name) => !name.includes("/"));
  const registrations = await Promise.all(
    names.map((name) => readRegistration(workspaceId, name)),
  );
  return registrations.filter((r): r is WorkflowRegistration => Boolean(r));
}

export async function removeRegistration(
  workspaceId: string,
  name: string,
): Promise<boolean> {
  const store = getFsStore();
  const removed = await store.remove(workspaceId, regPath(name));
  await store.removePrefix(workspaceId, `${WF_PREFIX}${name}/`);
  return removed;
}

export async function saveRun(workspaceId: string, run: WorkflowRun): Promise<void> {
  await getFsStore().write(
    workspaceId,
    runPath(run.workflow, run.id),
    JSON.stringify(run),
    "application/json",
  );
}

export async function readRun(
  workspaceId: string,
  name: string,
  runId: string,
): Promise<WorkflowRun | undefined> {
  const file = await getFsStore().read(workspaceId, runPath(name, runId));
  return file ? (JSON.parse(file.content) as WorkflowRun) : undefined;
}

export async function listRuns(
  workspaceId: string,
  name: string,
  limit = 20,
): Promise<WorkflowRun[]> {
  const store = getFsStore();
  const entries = await store.list(workspaceId, `${WF_PREFIX}${name}/runs`);
  const ids = entries
    .map((entry) => entry.path.split("/").pop() ?? "")
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.slice(0, -".json".length))
    // Run ids are time-prefixed, so a lexical sort is chronological.
    .sort()
    .reverse();

  // Retention: prune old runs past the cap (best-effort).
  for (const stale of ids.slice(RUNS_MAX_RETAINED)) {
    void store.remove(workspaceId, runPath(name, stale));
  }

  const runs = await Promise.all(
    ids.slice(0, limit).map((id) => readRun(workspaceId, name, id)),
  );
  return runs.filter((r): r is WorkflowRun => Boolean(r));
}

/** Time-prefixed id: sortable, unique. */
export function newRunId(): string {
  return `${Date.now().toString(36)}-${crypto.randomUUID().slice(0, 8)}`;
}

// ---------------------------------------------------------------------------
// Cron index — which workspaces have cron workflows. The scheduler tick reads
// this instead of scanning every workspace. Lives in a synthetic "_system"
// workspace of the same FS store.
// ---------------------------------------------------------------------------

const CRON_INDEX_WORKSPACE = "_system";
const CRON_INDEX_PATH = ".services/workflows/cron-workspaces.json";

export async function workspacesWithCronWorkflows(): Promise<string[]> {
  const file = await getFsStore().read(CRON_INDEX_WORKSPACE, CRON_INDEX_PATH);
  if (!file) return [];
  try {
    const parsed = JSON.parse(file.content) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((w): w is string => typeof w === "string")
      : [];
  } catch {
    return [];
  }
}

/** Keep the cron index in sync after a registration change. */
export async function updateCronIndex(workspaceId: string): Promise<void> {
  const hasCron = (await listRegistrations(workspaceId)).some((r) => r.triggers.cron);
  const workspaces = await workspacesWithCronWorkflows();
  const has = workspaces.includes(workspaceId);
  if (hasCron === has) return;
  const next = hasCron
    ? [...workspaces, workspaceId]
    : workspaces.filter((w) => w !== workspaceId);
  await getFsStore().write(
    CRON_INDEX_WORKSPACE,
    CRON_INDEX_PATH,
    JSON.stringify(next),
    "application/json",
  );
}

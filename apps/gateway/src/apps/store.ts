/**
 * App manifests — published bundles of workflows, a widget UI, a tool
 * allow-list, roles, and rate limits, owned by a workspace.
 *
 * The owning workspace is the app's "account": its credentials execute the
 * app's workflows, its FS stores the app's data, and its members administer
 * the bundle. Consumers are any authenticated users — membership NOT
 * required — mediated exclusively through the app surface (allow-listed
 * tools, per-user data partitions, per-user rate limits).
 *
 * Stored at `.services/apps/<name>.json` in the owner workspace FS.
 */

import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../services.js";

const APPS_PREFIX = ".services/apps/";

export interface AppRoles {
  /** Cognito subs with the app's admin role. */
  admins?: string[];
  /**
   * Who may use the app: "any" (any authenticated user, the default) or
   * "listed" (only subs present in `users`).
   */
  access?: "any" | "listed";
  users?: string[];
}

export interface AppRateLimit {
  /** Requests per second per user (default 5). */
  rps?: number;
  /** Burst capacity per user (default 10). */
  burst?: number;
}

export interface AppManifest {
  name: string;
  title?: string;
  description?: string;
  /** Workspace VFS path of the app's widget UI (patchwork widget source). */
  widgetPath?: string;
  /** Workflow names (owner workspace) the app exposes as runnable endpoints. */
  workflows?: string[];
  /**
   * Tool allow-list for app callers: exact `namespace.procedure` entries or
   * `namespace.*` wildcards. Everything not listed is denied for app
   * sessions — this is the blast-radius boundary for published apps.
   */
  allowedTools: string[];
  roles?: AppRoles;
  rateLimit?: AppRateLimit;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

const NAME_RE = /^[a-z0-9][a-z0-9-]{0,63}$/u;

export function appName(value: unknown): string {
  if (typeof value !== "string" || !NAME_RE.test(value)) {
    throw new ServiceError(`app name must match ${NAME_RE}`, 400);
  }
  return value;
}

function manifestPath(name: string): string {
  return `${APPS_PREFIX}${name}.json`;
}

export async function saveApp(workspaceId: string, manifest: AppManifest): Promise<void> {
  await getFsStore().write(
    workspaceId,
    manifestPath(manifest.name),
    JSON.stringify(manifest, null, 2),
    "application/json",
  );
}

export async function readApp(
  workspaceId: string,
  name: string,
): Promise<AppManifest | undefined> {
  const file = await getFsStore().read(workspaceId, manifestPath(name));
  return file ? (JSON.parse(file.content) as AppManifest) : undefined;
}

export async function listApps(workspaceId: string): Promise<AppManifest[]> {
  const entries = await getFsStore().list(workspaceId, APPS_PREFIX.slice(0, -1));
  const names = entries
    .map((entry) => entry.path)
    .filter((path) => path.startsWith(APPS_PREFIX) && path.endsWith(".json"))
    .map((path) => path.slice(APPS_PREFIX.length, -".json".length))
    .filter((name) => !name.includes("/"));
  const manifests = await Promise.all(names.map((name) => readApp(workspaceId, name)));
  return manifests.filter((m): m is AppManifest => Boolean(m));
}

export async function removeApp(workspaceId: string, name: string): Promise<boolean> {
  return getFsStore().remove(workspaceId, manifestPath(name));
}

/** Does the allow-list permit `namespace.procedure`? */
export function toolAllowed(manifest: AppManifest, namespace: string, procedure: string): boolean {
  const exact = `${namespace}.${procedure}`;
  return manifest.allowedTools.some(
    (entry) => entry === exact || entry === `${namespace}.*`,
  );
}

/** Resolve the caller's role within the app; null when access is denied. */
export function callerRole(manifest: AppManifest, sub: string): "admin" | "user" | null {
  const roles = manifest.roles ?? {};
  if (roles.admins?.includes(sub)) return "admin";
  if ((roles.access ?? "any") === "listed") {
    return roles.users?.includes(sub) ? "user" : null;
  }
  return "user";
}

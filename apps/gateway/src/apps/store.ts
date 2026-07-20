/**
 * App manifests — published bundles of workflows, a UI, a tool allow-list,
 * roles, and rate limits, owned by a workspace.
 *
 * An app is a *folder* in the owner workspace (e.g. `apps/liift4`) following
 * Node conventions: `index.tsx` is the UI entrypoint, and everything the app
 * stores lives next to it under `<dir>/data/` (per-user partitions). The
 * owning workspace is the app's "account": its credentials execute the app's
 * workflows, its FS stores the app's data, and its members administer the
 * bundle. Consumers are any authenticated users — membership NOT required —
 * mediated exclusively through the app surface (allow-listed tools, per-user
 * data partitions, per-user rate limits).
 *
 * Manifests are stored at `.services/apps/<name>.json` in the owner
 * workspace FS. Workspace-level sharing of paths *outside* an app's folder
 * is declared in `.services/workspace.json` (see WorkspaceConfig).
 */

import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../services.js";

const APPS_PREFIX = ".services/apps/";
const WORKSPACE_CONFIG_PATH = ".services/workspace.json";

/** The app UI entrypoint inside the app folder (Node convention). */
export const APP_ENTRY_FILE = "index.tsx";

export interface AppRoles {
  /** Cognito subs with the app's admin role. */
  admins?: string[];
  /**
   * Which authenticated users may use the app: "any" (any Aprovan account,
   * the default) or "listed" (only subs present in `users`).
   */
  access?: "any" | "listed";
  users?: string[];
}

export interface AppRateLimit {
  /** Requests per second per user (default 5). */
  rps?: number;
  /** Burst capacity per user (default 10). */
  burst?: number;
  /** Calls per user per UTC day (default 1000); durable across instances. */
  daily?: number;
}

export interface AppManifest {
  name: string;
  title?: string;
  description?: string;
  /**
   * Workspace VFS folder the app lives in (e.g. "apps/liift4"). The UI
   * entrypoint is `<dir>/index.tsx`; app data lives under `<dir>/data/`.
   */
  dir?: string;
  /**
   * Who can open the live app page (aprovan.com/apps/<workspace>/<name>):
   * "public" — anyone, no Aprovan account needed to view the page;
   * "private" — a signed-in Aprovan account passing the role model.
   * Defaults to "private". Tool/workflow calls always require a valid
   * account regardless of visibility.
   */
  visibility?: "public" | "private";
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

/**
 * Workspace-level configuration (`.services/workspace.json`). `shares`
 * exposes workspace paths outside an app's own folder to app sessions —
 * apps always have automatic access to their own folder, so this is only
 * for deliberately shared data.
 */
export interface WorkspaceShare {
  /** Workspace path prefix being exposed (e.g. "shared/recipes"). */
  prefix: string;
  /** App names granted access, or "*" for every published app. */
  apps: string[] | "*";
  /** "read" (default) or "readwrite". */
  mode?: "read" | "readwrite";
}

export interface WorkspaceConfig {
  shares?: WorkspaceShare[];
}

const NAME_RE = /^[a-z0-9][a-z0-9-]{0,63}$/u;

export function appName(value: unknown): string {
  if (typeof value !== "string" || !NAME_RE.test(value)) {
    throw new ServiceError(`app name must match ${NAME_RE}`, 400);
  }
  return value;
}

/** The app folder, normalized without trailing slash. Throws on `.services` paths. */
export function appDir(value: unknown): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new ServiceError("dir must be a workspace folder path (e.g. apps/liift4)", 400);
  }
  const dir = value.replace(/^\/+|\/+$/g, "");
  if (dir === "" || dir.split("/").some((seg) => seg === "." || seg === "..")) {
    throw new ServiceError(`Invalid app dir: ${value}`, 400);
  }
  if (dir === ".services" || dir.startsWith(".services/")) {
    throw new ServiceError("app dir cannot live under .services/", 400);
  }
  return dir;
}

/** The per-(app, user) data folder inside the app's own directory. */
export function appDataDir(manifest: AppManifest, userId: string): string {
  if (!manifest.dir) {
    throw new ServiceError(`App ${manifest.name} has no folder (dir) configured`, 400);
  }
  return `${manifest.dir}/data/${userId}`;
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

export interface RemoveAppOptions {
  /** Also delete the app folder (UI, data partitions, everything). */
  purgeData?: boolean;
}

export async function removeApp(
  workspaceId: string,
  name: string,
  options: RemoveAppOptions = {},
): Promise<boolean> {
  const manifest = await readApp(workspaceId, name);
  const removed = await getFsStore().remove(workspaceId, manifestPath(name));
  if (options.purgeData && manifest?.dir) {
    await getFsStore().removePrefix(workspaceId, manifest.dir);
  }
  return removed;
}

export async function readWorkspaceConfig(workspaceId: string): Promise<WorkspaceConfig> {
  const file = await getFsStore().read(workspaceId, WORKSPACE_CONFIG_PATH);
  if (!file) return {};
  try {
    return JSON.parse(file.content) as WorkspaceConfig;
  } catch {
    return {};
  }
}

export async function writeWorkspaceConfig(
  workspaceId: string,
  config: WorkspaceConfig,
): Promise<void> {
  await getFsStore().write(
    workspaceId,
    WORKSPACE_CONFIG_PATH,
    JSON.stringify(config, null, 2),
    "application/json",
  );
}

/**
 * Is `path` (workspace-relative) shared with `app` at the requested access
 * level by the workspace config?
 */
export function shareAllows(
  config: WorkspaceConfig,
  app: string,
  path: string,
  write: boolean,
): boolean {
  for (const share of config.shares ?? []) {
    const prefix = share.prefix.replace(/^\/+|\/+$/g, "");
    if (path !== prefix && !path.startsWith(`${prefix}/`)) continue;
    if (share.apps !== "*" && !share.apps.includes(app)) continue;
    if (write && (share.mode ?? "read") !== "readwrite") continue;
    return true;
  }
  return false;
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

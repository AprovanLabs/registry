/**
 * `apps` core service — publish and manage app bundles from the owning
 * workspace. Like every core service it rides tool discovery, so chat can
 * publish an app ("publish my workout tracker for others") the same way it
 * registers workflows. The public consumption surface lives in
 * routes/apps.ts; the live page surface in routes/live-apps.ts.
 */

import { getFsStore } from "../fs-store.js";
import { ServiceError, type CoreService } from "../services.js";
import { readRegistration } from "../workflows/store.js";
import {
  APP_ENTRY_FILE,
  appDir,
  appName,
  listApps,
  readApp,
  removeApp,
  saveApp,
  type AppManifest,
  type AppRateLimit,
  type AppRoles,
} from "./store.js";

function appPath(workspaceId: string, name: string): string {
  return `/apps/${workspaceId}/${name}`;
}

function parseAllowedTools(raw: unknown): string[] {
  if (!Array.isArray(raw)) {
    throw new ServiceError("allowed_tools must be an array of 'namespace.procedure' (or 'namespace.*') entries", 400);
  }
  const tools = raw.filter((t): t is string => typeof t === "string" && /^[\w.-]+\.(\*|[\w.-]+)$/u.test(t));
  if (tools.length === 0) {
    throw new ServiceError("allowed_tools must contain at least one entry", 400);
  }
  return tools;
}

function parseRoles(raw: unknown): AppRoles | undefined {
  if (raw === undefined || raw === null) return undefined;
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ServiceError("roles must be an object", 400);
  }
  const value = raw as Record<string, unknown>;
  const roles: AppRoles = {};
  if (Array.isArray(value["admins"])) {
    roles.admins = value["admins"].filter((s): s is string => typeof s === "string");
  }
  if (value["access"] === "listed" || value["access"] === "any") {
    roles.access = value["access"];
  }
  if (Array.isArray(value["users"])) {
    roles.users = value["users"].filter((s): s is string => typeof s === "string");
  }
  return roles;
}

function parseRateLimit(raw: unknown): AppRateLimit | undefined {
  if (raw === undefined || raw === null) return undefined;
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ServiceError("rate_limit must be an object", 400);
  }
  const value = raw as Record<string, unknown>;
  const limit: AppRateLimit = {};
  if (typeof value["rps"] === "number" && value["rps"] > 0) limit.rps = value["rps"];
  if (typeof value["burst"] === "number" && value["burst"] > 0) limit.burst = value["burst"];
  return limit;
}

function parseVisibility(raw: unknown): "public" | "private" | undefined {
  if (raw === undefined || raw === null) return undefined;
  if (raw !== "public" && raw !== "private") {
    throw new ServiceError('visibility must be "public" or "private"', 400);
  }
  return raw;
}

function summarize(manifest: AppManifest, workspaceId: string) {
  return {
    name: manifest.name,
    title: manifest.title,
    description: manifest.description,
    dir: manifest.dir,
    visibility: manifest.visibility ?? "private",
    workflows: manifest.workflows ?? [],
    allowedTools: manifest.allowedTools,
    roles: manifest.roles,
    rateLimit: manifest.rateLimit,
    /** Live page URL (aprovan.com/apps/<workspace>/<name>). */
    liveUrl: manifest.dir ? appPath(workspaceId, manifest.name) : undefined,
    /** API surface base (/api/gateway/apps/...). */
    appPath: appPath(workspaceId, manifest.name),
    updatedAt: manifest.updatedAt,
  };
}

export const appsService: CoreService = {
  tools: [
    {
      name: "apps.publish",
      operation: "publish",
      description:
        "Publish (or update) an app from a workspace folder: <dir>/index.tsx is the UI entrypoint, and app data is stored per-user next to the app in <dir>/data/. Includes workflows, a tool allow-list, roles, rate limits, and visibility ('public' pages need no Aprovan account to view; 'private' requires a signed-in account passing the role model). The live app serves at /apps/<workspace>/<name>.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "App id (kebab-case)" },
          title: { type: "string" },
          description: { type: "string" },
          dir: { type: "string", description: "Workspace folder the app lives in (e.g. apps/liift4); entry is <dir>/index.tsx" },
          visibility: { type: "string", enum: ["public", "private"], description: "Who can open the live page (default private)" },
          workflows: { type: "array", items: { type: "string" }, description: "Registered workflow names the app exposes as runnable endpoints" },
          allowed_tools: {
            type: "array",
            items: { type: "string" },
            description: "Tools app users may call, e.g. ['keyvalue.*'] — everything else is denied",
          },
          roles: {
            type: "object",
            description: "{ admins: [subs], access: 'any'|'listed', users: [subs] }",
          },
          rate_limit: { type: "object", description: "{ rps, burst } per user" },
        },
        required: ["name", "allowed_tools"],
      },
    },
    {
      name: "apps.list",
      operation: "list",
      description: "List the workspace's published apps.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "apps.get",
      operation: "get",
      description: "Get a published app's manifest and public URLs.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
    },
    {
      name: "apps.remove",
      operation: "remove",
      description:
        "Unpublish an app. By default its folder (UI + data) stays in the workspace; pass purge_data=true to delete the folder too.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string" },
          purge_data: { type: "boolean", description: "Also delete the app folder and all per-user data" },
        },
        required: ["name"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    // Published apps are workspace-owned; app sessions cannot manage them.
    if (ctx.appScope) {
      throw new ServiceError("apps management is not available to app sessions", 403);
    }
    switch (procedure) {
      case "publish": {
        const name = appName(args["name"]);
        const existing = await readApp(ctx.workspaceId, name);
        const workflows = Array.isArray(args["workflows"])
          ? args["workflows"].filter((w): w is string => typeof w === "string")
          : (existing?.workflows ?? []);
        // Exposed workflows must actually exist in the workspace.
        for (const workflow of workflows) {
          if (!(await readRegistration(ctx.workspaceId, workflow))) {
            throw new ServiceError(`Unknown workflow: ${workflow}`, 400);
          }
        }
        // Every app is a folder; `apps/<name>` is the convention when none is
        // given. An explicitly pointed-at folder must have its entrypoint in
        // place at publish time — publishing a live URL that 404s helps no one.
        const explicitDir = args["dir"] !== undefined ? appDir(args["dir"]) : undefined;
        const dir = explicitDir ?? existing?.dir ?? `apps/${name}`;
        if (explicitDir && explicitDir !== existing?.dir) {
          const entry = await getFsStore().read(ctx.workspaceId, `${dir}/${APP_ENTRY_FILE}`);
          if (!entry) {
            throw new ServiceError(`App entrypoint not found: ${dir}/${APP_ENTRY_FILE}`, 400);
          }
        }
        const now = new Date().toISOString();
        const manifest: AppManifest = {
          name,
          title: typeof args["title"] === "string" ? args["title"] : existing?.title,
          description:
            typeof args["description"] === "string" ? args["description"] : existing?.description,
          dir,
          visibility: parseVisibility(args["visibility"]) ?? existing?.visibility ?? "private",
          workflows,
          allowedTools: parseAllowedTools(args["allowed_tools"]),
          roles: parseRoles(args["roles"]) ?? existing?.roles,
          rateLimit: parseRateLimit(args["rate_limit"]) ?? existing?.rateLimit,
          createdBy: existing?.createdBy ?? ctx.userId,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
        };
        await saveApp(ctx.workspaceId, manifest);
        return summarize(manifest, ctx.workspaceId);
      }
      case "list": {
        const manifests = await listApps(ctx.workspaceId);
        return { apps: manifests.map((m) => summarize(m, ctx.workspaceId)) };
      }
      case "get": {
        const name = appName(args["name"]);
        const manifest = await readApp(ctx.workspaceId, name);
        if (!manifest) throw new ServiceError(`Unknown app: ${name}`, 404);
        return summarize(manifest, ctx.workspaceId);
      }
      case "remove": {
        const name = appName(args["name"]);
        const removed = await removeApp(ctx.workspaceId, name, {
          purgeData: args["purge_data"] === true,
        });
        return { name, removed };
      }
      default:
        throw new ServiceError(`Unknown apps procedure: ${procedure}`, 404);
    }
  },
};

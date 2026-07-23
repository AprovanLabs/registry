/**
 * `apps` core service — publish and manage app bundles from the owning
 * workspace. Like every core service it rides tool discovery, so chat can
 * publish an app ("publish my workout tracker for others") the same way it
 * registers workflows. The public consumption surface lives in
 * routes/apps.ts; the live page surface in routes/live-apps.ts.
 *
 * An app's UI entrypoint is content-versioned by the workspace FS, so
 * `apps.versions/version/restore` expose that history: enumerate the entry's
 * versions, read one back, or non-destructively restore an old one as the new
 * latest.
 */

import { ServiceError, type CoreService } from "../services.js";
import { readRegistration } from "../workflows/store.js";
import {
  ENTRY_CANDIDATES,
  appName,
  listApps,
  listEntryVersions,
  pathDir,
  readApp,
  readEntryVersion,
  readWorkspaceConfig,
  removeApp,
  resolveAppEntry,
  restoreEntryVersion,
  saveApp,
  workspacePath,
  writeWorkspaceConfig,
  type AppManifest,
  type AppRateLimit,
  type AppRoles,
  type WorkspaceShare,
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
  if (typeof value["daily"] === "number" && value["daily"] > 0) limit.daily = value["daily"];
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
    /** UI entrypoint, as a workspace path. */
    entry: manifest.entry,
    /** Workspace prefixes this app publishes (paths[0] is its root). */
    paths: manifest.paths,
    visibility: manifest.visibility ?? "private",
    workflows: manifest.workflows ?? [],
    allowedTools: manifest.allowedTools,
    roles: manifest.roles,
    rateLimit: manifest.rateLimit,
    /** Live page URL (aprovan.com/apps/<workspace>/<name>). */
    liveUrl: appPath(workspaceId, manifest.name),
    /** API surface base (/api/gateway/apps/...). */
    appPath: appPath(workspaceId, manifest.name),
    updatedAt: manifest.updatedAt,
  };
}

/**
 * Resolve the manifest's path binding from the publish arguments. `entry`
 * (a file, or a folder to resolve within) is the explicit form; `dir` is
 * sugar for the same thing. With neither, an update keeps its binding and a
 * fresh publish claims `apps/<name>/index.tsx` — the UI is often authored
 * after the app is registered, so that default is not required to exist yet.
 *
 * `paths` always leads with the entry's folder — the primary prefix carries
 * the app's data partition and its app-relative vfs paths, so it is derived,
 * never declared. Extra prefixes survive an update unless `paths` is given
 * (pass `[]` to drop them).
 */
async function resolveBinding(
  workspaceId: string,
  name: string,
  args: Record<string, unknown>,
  existing: AppManifest | undefined,
): Promise<{ entry: string; paths: string[] }> {
  const target = args["entry"] ?? args["dir"];
  const entry =
    target !== undefined
      ? await resolveAppEntry(workspaceId, target)
      : (existing?.entry ?? `apps/${name}/${ENTRY_CANDIDATES[0]}`);

  const declared = args["paths"] ?? existing?.paths.slice(1) ?? [];
  if (!Array.isArray(declared)) {
    throw new ServiceError("paths must be an array of workspace prefixes", 400);
  }
  const extra = declared.map((path) => workspacePath(path, "paths[]"));

  return { entry, paths: [...new Set([pathDir(entry), ...extra])] };
}

export const appsService: CoreService = {
  tools: [
    {
      name: "apps.publish",
      operation: "publish",
      description:
        "Publish (or update) an app by binding workspace paths to a live endpoint: 'entry' is the UI entrypoint path (e.g. apps/liift4/widget.tsx) and 'paths' are the prefixes the app publishes — the same prefixes decide what the live site serves and what the app's sessions may read/write. App data is stored per-user under <paths[0]>/data/ and never served. Includes workflows, a tool allow-list, roles, rate limits, and visibility ('public' pages need no Aprovan account to view; 'private' requires a signed-in account passing the role model). The live app serves at /apps/<workspace>/<name>.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "App id (kebab-case)" },
          title: { type: "string" },
          description: { type: "string" },
          entry: {
            type: "string",
            description:
              "Workspace path of the UI entrypoint (e.g. apps/liift4/widget.tsx). A folder resolves to index.tsx, index.ts, widget.tsx, or its only *.tsx",
          },
          paths: {
            type: "array",
            items: { type: "string" },
            description:
              "Extra workspace prefixes the app publishes (e.g. ['lib/charts']); the entry's folder is always included and is the app's root",
          },
          dir: { type: "string", description: "Sugar for entry: a folder whose entrypoint is resolved for you" },
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
          rate_limit: {
            type: "object",
            description:
              "{ rps, burst, daily } per user — daily is a durable calls-per-UTC-day budget (default 1000)",
          },
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
      name: "apps.shares",
      operation: "shares",
      description:
        "List the workspace paths shared with apps (apps always have automatic access to their own declared prefixes; shares expose paths outside them).",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "apps.share",
      operation: "share",
      description:
        "Share a workspace path prefix with apps: { prefix, apps: [names] or '*', mode: 'read'|'readwrite' }. App sessions reach shared paths via '~/<path>'.",
      inputSchema: {
        type: "object",
        properties: {
          prefix: { type: "string", description: "Workspace path prefix (e.g. shared/recipes)" },
          apps: { description: "App names, or '*' for every published app" },
          mode: { type: "string", enum: ["read", "readwrite"] },
        },
        required: ["prefix"],
      },
    },
    {
      name: "apps.unshare",
      operation: "unshare",
      description: "Remove a workspace path share by prefix.",
      inputSchema: {
        type: "object",
        properties: { prefix: { type: "string" } },
        required: ["prefix"],
      },
    },
    {
      name: "apps.remove",
      operation: "remove",
      description:
        "Unpublish an app. By default its files (UI + data) stay in the workspace; pass purge_data=true to delete its primary prefix too.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string" },
          purge_data: { type: "boolean", description: "Also delete the app's primary prefix and all per-user data" },
        },
        required: ["name"],
      },
    },
    {
      name: "apps.versions",
      operation: "versions",
      description:
        "List the content versions of an app's UI entrypoint (its entry), newest first. The newest version is the live one (current: true).",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
    },
    {
      name: "apps.version",
      operation: "version",
      description: "Read one past version of an app's UI entrypoint by content hash.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" }, hash: { type: "string" } },
        required: ["name", "hash"],
      },
    },
    {
      name: "apps.restore",
      operation: "restore",
      description:
        "Restore a past version of an app's UI entrypoint: re-writes that version's content as the new latest. Non-destructive — history is preserved and the old content becomes live again. Returns the updated app.",
      inputSchema: {
        type: "object",
        properties: { name: { type: "string" }, hash: { type: "string" } },
        required: ["name", "hash"],
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
          const _reg = await readRegistration(ctx.workspaceId, workflow); const _fs = await (await import("../fs-store.js")).getFsStore(); const _all = await _fs.list(ctx.workspaceId, ".services/workflows"); console.error("DBGPUB", workflow, "reg=", !!_reg, "files=", JSON.stringify(_all.map(e=>e.path))); if (!_reg) {
            throw new ServiceError(`Unknown workflow: ${workflow}`, 400);
          }
        }
        // The path binding is explicit: an entrypoint pointed at by the
        // publisher must exist at publish time — publishing a live URL that
        // 404s helps no one.
        const { entry, paths } = await resolveBinding(ctx.workspaceId, name, args, existing);
        const now = new Date().toISOString();
        const manifest: AppManifest = {
          name,
          title: typeof args["title"] === "string" ? args["title"] : existing?.title,
          description:
            typeof args["description"] === "string" ? args["description"] : existing?.description,
          entry,
          paths,
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
      case "shares": {
        const config = await readWorkspaceConfig(ctx.workspaceId);
        return { shares: config.shares ?? [] };
      }
      case "share": {
        const rawPrefix = args["prefix"];
        if (typeof rawPrefix !== "string" || !rawPrefix.trim()) {
          throw new ServiceError("prefix is required", 400);
        }
        const prefix = rawPrefix.replace(/^\/+|\/+$/g, "");
        if (prefix === ".services" || prefix.startsWith(".services/")) {
          throw new ServiceError("service state cannot be shared with apps", 400);
        }
        const share: WorkspaceShare = {
          prefix,
          apps:
            args["apps"] === "*" || args["apps"] === undefined
              ? "*"
              : Array.isArray(args["apps"])
                ? args["apps"].filter((a): a is string => typeof a === "string")
                : (() => {
                    throw new ServiceError('apps must be an array of names or "*"', 400);
                  })(),
          mode: args["mode"] === "readwrite" ? "readwrite" : "read",
        };
        const config = await readWorkspaceConfig(ctx.workspaceId);
        const shares = (config.shares ?? []).filter((s) => s.prefix !== share.prefix);
        shares.push(share);
        await writeWorkspaceConfig(ctx.workspaceId, { ...config, shares });
        return share;
      }
      case "unshare": {
        const prefix = String(args["prefix"] ?? "").replace(/^\/+|\/+$/g, "");
        const config = await readWorkspaceConfig(ctx.workspaceId);
        const shares = (config.shares ?? []).filter((s) => s.prefix !== prefix);
        await writeWorkspaceConfig(ctx.workspaceId, { ...config, shares });
        return { prefix, removed: true };
      }
      case "versions": {
        const name = appName(args["name"]);
        const manifest = await readApp(ctx.workspaceId, name);
        if (!manifest) throw new ServiceError(`Unknown app: ${name}`, 404);
        const versions = await listEntryVersions(ctx.workspaceId, manifest.entry);
        return {
          path: manifest.entry,
          versions: versions.map((version, index) => ({
            hash: version.hash,
            updatedAt: version.updatedAt,
            size: version.size,
            // listVersions is newest-first, so the head is the live version.
            current: index === 0,
          })),
        };
      }
      case "version": {
        const name = appName(args["name"]);
        const hash = typeof args["hash"] === "string" ? args["hash"] : "";
        const manifest = await readApp(ctx.workspaceId, name);
        if (!manifest) throw new ServiceError(`Unknown app: ${name}`, 404);
        const file = await readEntryVersion(ctx.workspaceId, manifest.entry, hash);
        if (!file) throw new ServiceError(`Unknown version: ${name}@${hash}`, 404);
        return {
          path: file.path,
          hash: file.hash,
          content: file.content,
          mimeType: file.mimeType,
          updatedAt: file.updatedAt,
        };
      }
      case "restore": {
        const name = appName(args["name"]);
        const hash = typeof args["hash"] === "string" ? args["hash"] : "";
        const manifest = await readApp(ctx.workspaceId, name);
        if (!manifest) throw new ServiceError(`Unknown app: ${name}`, 404);
        const restored = await restoreEntryVersion(ctx.workspaceId, manifest.entry, hash);
        if (!restored) throw new ServiceError(`Unknown version: ${name}@${hash}`, 404);
        return summarize(manifest, ctx.workspaceId);
      }
      default:
        throw new ServiceError(`Unknown apps procedure: ${procedure}`, 404);
    }
  },
};

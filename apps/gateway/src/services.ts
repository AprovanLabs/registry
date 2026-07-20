/**
 * First-party core service namespaces — the infra-level primitives widgets
 * and handlers call as bare injected globals:
 *
 *   await keyvalue.set("draft", { title: "..." });
 *   const draft = await keyvalue.get("draft");
 *   await events.emit("form.submitted", { id: 1 });
 *
 * Every call is auto-tenanted by the caller's workspace and attributed to the
 * calling user — callers never see storage, tenancy, or transport. The SDK
 * surface is the stable contract (think WASI): today both services are backed
 * by the workspace FS store, and the backend can be swapped (Valkey/Redis for
 * keyvalue, SNS/Kafka for events) without touching a single caller.
 *
 * Dispatch rides the same proxy path as UTDK providers
 * (`POST /tools/:namespace/:procedure`), so clients need no special casing:
 * core namespaces appear in tool discovery next to credentialed providers.
 */

import { appsService } from "./apps/service.js";
import { getFsStore, isServicePath, normalizeFsPath } from "./fs-store.js";
import { interfacesService } from "./interfaces-service.js";
import { syncService } from "./sync.js";
import { webhooksService } from "./webhooks/service.js";
import { workflowsService } from "./workflows/service.js";
import type { ToolEntry } from "./routes/tools.js";

export interface ServiceContext {
  workspaceId: string;
  userId: string;
  /**
   * Event-cascade depth when the caller is a workflow run (set by the
   * workflow runner). `events.emit` uses it to cap workflow→event→workflow
   * chains; absent means a user/API call (depth 0).
   */
  workflowDepth?: number;
  /**
   * Set when the caller reached the workspace through a published app (see
   * src/apps). Data is co-located with the app: a keyvalue key `k` for an
   * app session physically lives at `<dir>/data/<userId>/k`, and vfs paths
   * resolve relative to the app's own folder — so an app automatically owns
   * its folder and an app user only ever touches their own partition, while
   * the rest of the workspace stays untouched. Workspace paths outside the
   * folder are reachable only via `~/<path>` when `.services/workspace.json`
   * shares them with the app.
   */
  appScope?: { app: string; dir?: string; userId: string; role: "admin" | "user" };
  /**
   * Per-run interface binding overrides (interface id → provider id), set by
   * the workflow runner from the registration's `bindings`. Interface
   * dispatch prefers these over the workspace binding.
   */
  interfaceBindings?: Record<string, string>;
}

export interface CoreService {
  /** Tool entries advertised in discovery (`GET /tools`). */
  tools: Omit<ToolEntry, "provider">[];
  call(
    ctx: ServiceContext,
    procedure: string,
    args: Record<string, unknown>,
  ): Promise<unknown>;
}

/** Keys/channels: dotted-path identifiers, no traversal. */
const IDENT_RE = /^[\w][\w.\-:]{0,127}$/u;

function ident(value: unknown, label: string): string {
  if (typeof value !== "string" || !IDENT_RE.test(value)) {
    throw new ServiceError(`${label} must match ${IDENT_RE}`, 400);
  }
  return value;
}

export class ServiceError extends Error {
  constructor(
    message: string,
    readonly status: number = 400,
  ) {
    super(message);
  }
}

// ---------------------------------------------------------------------------
// keyvalue — workspace-scoped KV. Backend: WFS (`.services/keyvalue/<key>`).
// ---------------------------------------------------------------------------

const KV_PREFIX = ".services/keyvalue/";

/**
 * Where a keyvalue key physically lives. Workspace callers use the shared
 * `.services/keyvalue/` folder; app sessions read and write a per-(app,
 * user) partition co-located with the app itself (`<dir>/data/<userId>/`),
 * so an app's data travels with its folder.
 */
function kvPath(ctx: ServiceContext, key: string): string {
  const scope = ctx.appScope;
  if (!scope) return KV_PREFIX + key;
  if (!scope.dir) {
    throw new ServiceError(`App ${scope.app} has no folder (dir) configured`, 400);
  }
  return `${scope.dir}/data/${scope.userId}/${key}`;
}

const keyvalue: CoreService = {
  tools: [
    {
      name: "keyvalue.get",
      operation: "get",
      description: "Read a value by key (null when absent).",
      inputSchema: { type: "object", properties: { key: { type: "string" } }, required: ["key"] },
    },
    {
      name: "keyvalue.set",
      operation: "set",
      description: "Write a JSON-serializable value under a key.",
      inputSchema: {
        type: "object",
        properties: { key: { type: "string" }, value: {} },
        required: ["key", "value"],
      },
    },
    {
      name: "keyvalue.delete",
      operation: "delete",
      description: "Delete a key.",
      inputSchema: { type: "object", properties: { key: { type: "string" } }, required: ["key"] },
    },
    {
      name: "keyvalue.list",
      operation: "list",
      description: "List keys under an optional prefix.",
      inputSchema: { type: "object", properties: { prefix: { type: "string" } } },
    },
  ],

  async call(ctx, procedure, args) {
    const store = getFsStore();
    switch (procedure) {
      case "get": {
        const key = ident(args["key"], "key");
        const file = await store.read(ctx.workspaceId, kvPath(ctx, key));
        return { key, value: file ? (JSON.parse(file.content) as unknown) : null };
      }
      case "set": {
        const key = ident(args["key"], "key");
        await store.write(
          ctx.workspaceId,
          kvPath(ctx, key),
          JSON.stringify(args["value"] ?? null),
          "application/json",
        );
        return { key, ok: true };
      }
      case "delete": {
        const key = ident(args["key"], "key");
        const deleted = await store.remove(ctx.workspaceId, kvPath(ctx, key));
        return { key, deleted };
      }
      case "list": {
        // FS listing is directory-style; key-prefix filtering happens here.
        // App sessions only ever see their own co-located partition.
        const prefix = typeof args["prefix"] === "string" ? args["prefix"] : "";
        const root = kvPath(ctx, "");
        const entries = await store.list(ctx.workspaceId, root.replace(/\/$/, ""));
        const keys = entries
          .map((e) => e.path)
          .filter((p) => p.startsWith(root))
          .map((p) => p.slice(root.length))
          .filter((k) => k.startsWith(prefix));
        return { keys };
      }
      default:
        throw new ServiceError(`Unknown keyvalue procedure: ${procedure}`, 404);
    }
  },
};

// ---------------------------------------------------------------------------
// events — workspace-scoped event channels. Backend: WFS append-log
// (`.services/events/<channel>.jsonl`). Emit is fire-and-forget for callers;
// consumers poll with `list`. A push backend (SNS/Kafka/WebSocket fan-out)
// replaces this file without changing the emit/list contract.
// ---------------------------------------------------------------------------

const EVENTS_PREFIX = ".services/events/";
const EVENTS_MAX_RETAINED = 500;

interface EventRecord {
  id: string;
  ts: string;
  userId: string;
  payload: unknown;
}

const events: CoreService = {
  tools: [
    {
      name: "events.emit",
      operation: "emit",
      description: "Emit an event on a named channel (e.g. 'form.submitted').",
      inputSchema: {
        type: "object",
        properties: { channel: { type: "string" }, payload: {} },
        required: ["channel"],
      },
    },
    {
      name: "events.list",
      operation: "list",
      description: "Read recent events on a channel, oldest first.",
      inputSchema: {
        type: "object",
        properties: { channel: { type: "string" }, limit: { type: "number" } },
        required: ["channel"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    const store = getFsStore();
    switch (procedure) {
      case "emit": {
        const channel = ident(args["channel"], "channel");
        const path = EVENTS_PREFIX + channel + ".jsonl";
        const record: EventRecord = {
          id: crypto.randomUUID(),
          ts: new Date().toISOString(),
          userId: ctx.userId,
          payload: args["payload"] ?? null,
        };
        const existing = await store.read(ctx.workspaceId, path);
        const lines = existing ? existing.content.split("\n").filter(Boolean) : [];
        lines.push(JSON.stringify(record));
        await store.write(
          ctx.workspaceId,
          path,
          lines.slice(-EVENTS_MAX_RETAINED).join("\n"),
          "application/jsonl",
        );
        // Every emission kicks off subscribed workflows. The runner sets
        // `workflowDepth` on its context, so workflow→event→workflow chains
        // carry an incrementing depth and are capped (loop-safe). Dynamic
        // import breaks the services ⇄ workflows module cycle.
        void import("./workflows/runner.js")
          .then(({ triggerEventWorkflows }) =>
            triggerEventWorkflows(ctx, channel, record.payload, ctx.workflowDepth ?? 0),
          )
          .catch(() => undefined);
        return { id: record.id, channel };
      }
      case "list": {
        const channel = ident(args["channel"], "channel");
        const limit = Math.min(Number(args["limit"]) || 50, EVENTS_MAX_RETAINED);
        const file = await store.read(ctx.workspaceId, EVENTS_PREFIX + channel + ".jsonl");
        const records = (file ? file.content.split("\n").filter(Boolean) : [])
          .slice(-limit)
          .map((line) => JSON.parse(line) as EventRecord);
        return { channel, events: records };
      }
      default:
        throw new ServiceError(`Unknown events procedure: ${procedure}`, 404);
    }
  },
};

// ---------------------------------------------------------------------------
// vfs — the workspace filesystem as a tool namespace. Same store and
// semantics as the /fs routes and the MCP fs_* tools, so widgets can read
// and persist files without a bespoke transport.
// ---------------------------------------------------------------------------

function fsPath(value: unknown): string {
  const path = typeof value === "string" ? normalizeFsPath(value) : null;
  if (!path) throw new ServiceError("path must be a workspace-relative file path", 400);
  // Service state (.services/**) is managed only through its tool
  // namespaces — never through raw vfs access (it holds hook tokens and
  // webhook HMAC secrets).
  if (isServicePath(path)) {
    throw new ServiceError("Service state is managed through its tool namespaces", 403);
  }
  return path;
}

/**
 * Resolve a vfs path for the caller. Workspace callers address the whole
 * workspace. App sessions address their own folder (`data/x` means
 * `<dir>/data/x`) with automatic access; `~/<path>` addresses the workspace
 * root and is allowed only when `.services/workspace.json` shares that
 * prefix with the app at the required level.
 */
async function resolveVfsPath(
  ctx: ServiceContext,
  value: unknown,
  write: boolean,
): Promise<string> {
  const scope = ctx.appScope;
  if (!scope) return fsPath(value);

  if (!scope.dir) {
    throw new ServiceError(`App ${scope.app} has no folder (dir) configured`, 400);
  }
  if (typeof value !== "string") {
    throw new ServiceError("path must be a file path", 400);
  }

  if (value.startsWith("~/")) {
    const path = fsPath(value.slice(2)); // also rejects .services/**
    const { readWorkspaceConfig, shareAllows } = await import("./apps/store.js");
    const config = await readWorkspaceConfig(ctx.workspaceId);
    if (!shareAllows(config, scope.app, path, write)) {
      throw new ServiceError(`Path not shared with this app: ~/${path}`, 403);
    }
    return path;
  }

  return fsPath(`${scope.dir}/${value}`);
}

const vfs: CoreService = {
  tools: [
    {
      name: "vfs.list",
      operation: "list",
      description: "List workspace files (latest version metadata), optionally under a directory prefix.",
      inputSchema: { type: "object", properties: { prefix: { type: "string" } } },
    },
    {
      name: "vfs.read",
      operation: "read",
      description: "Read a workspace file (latest version unless a content hash pins an older one).",
      inputSchema: {
        type: "object",
        properties: { path: { type: "string" }, hash: { type: "string" } },
        required: ["path"],
      },
    },
    {
      name: "vfs.write",
      operation: "write",
      description: "Write a workspace file (content-hash versioned; prior versions stay readable).",
      inputSchema: {
        type: "object",
        properties: {
          path: { type: "string" },
          content: { type: "string" },
          mimeType: { type: "string" },
        },
        required: ["path", "content"],
      },
    },
    {
      name: "vfs.delete",
      operation: "delete",
      description: "Delete a workspace file, or a whole subtree with recursive=true.",
      inputSchema: {
        type: "object",
        properties: { path: { type: "string" }, recursive: { type: "boolean" } },
        required: ["path"],
      },
    },
  ],

  async call(ctx, procedure, args) {
    const store = getFsStore();
    switch (procedure) {
      case "list": {
        const raw = typeof args["prefix"] === "string" ? args["prefix"] : "";
        if (ctx.appScope) {
          if (!ctx.appScope.dir) {
            throw new ServiceError(`App ${ctx.appScope.app} has no folder (dir) configured`, 400);
          }
          const root = raw ? await resolveVfsPath(ctx, raw, false) : ctx.appScope.dir;
          return { entries: await store.list(ctx.workspaceId, root) };
        }
        const prefix = raw ? normalizeFsPath(raw) : "";
        if (prefix === null) throw new ServiceError(`Invalid prefix: ${raw}`, 400);
        if (prefix && isServicePath(prefix)) {
          throw new ServiceError("Service state is managed through its tool namespaces", 403);
        }
        const entries = await store.list(ctx.workspaceId, prefix);
        return { entries: entries.filter((entry) => !isServicePath(entry.path)) };
      }
      case "read": {
        const path = await resolveVfsPath(ctx, args["path"], false);
        const hash = typeof args["hash"] === "string" ? args["hash"] : undefined;
        const file = await store.read(ctx.workspaceId, path, hash);
        if (!file) throw new ServiceError(`Not found: ${path}`, 404);
        return file;
      }
      case "write": {
        const path = await resolveVfsPath(ctx, args["path"], true);
        if (typeof args["content"] !== "string") {
          throw new ServiceError("content must be a string", 400);
        }
        const mimeType = typeof args["mimeType"] === "string" ? args["mimeType"] : undefined;
        const { content: _content, ...meta } = await store.write(
          ctx.workspaceId,
          path,
          args["content"],
          mimeType,
        );
        return meta;
      }
      case "delete": {
        const path = await resolveVfsPath(ctx, args["path"], true);
        const removed =
          args["recursive"] === true
            ? (await store.removePrefix(ctx.workspaceId, path)) > 0
            : await store.remove(ctx.workspaceId, path);
        if (!removed) throw new ServiceError(`Not found: ${path}`, 404);
        return { deleted: path };
      }
      default:
        throw new ServiceError(`Unknown vfs procedure: ${procedure}`, 404);
    }
  },
};

// ---------------------------------------------------------------------------
// registry — meta tools over the public registry catalog, so widgets (and
// agents) can discover which UTDK SDKs exist and which operations they can
// call through the tool proxy without leaving the gateway surface.
// ---------------------------------------------------------------------------

const REGISTRY_BASE = (): string =>
  (process.env["GATEWAY_REGISTRY_BASE_URL"] ?? "https://aprovan.com/registry").replace(/\/$/, "");

interface CatalogProvider {
  id: string;
  title: string;
  description: string | null;
  packageName: string;
  icon: string | null;
  auth?: unknown;
}

interface CatalogOperation {
  providerPath: string;
  providerTitle: string;
  operationId: string;
  sdkPath: string;
  method: string;
  path: string;
  summary: string | null;
}

interface CatalogCache {
  providers: CatalogProvider[];
  operations: CatalogOperation[];
  expiresAt: number;
}

const CATALOG_TTL_MS = 10 * 60 * 1000;
let catalogCache: CatalogCache | null = null;

async function fetchCatalogJson<T>(path: string): Promise<T> {
  const response = await fetch(`${REGISTRY_BASE()}${path}`);
  if (!response.ok) {
    throw new ServiceError(`Registry catalog unavailable (${response.status})`, 502);
  }
  return (await response.json()) as T;
}

async function loadCatalog(): Promise<CatalogCache> {
  const now = Date.now();
  if (catalogCache && catalogCache.expiresAt > now) return catalogCache;
  const [providersBody, opsBody] = await Promise.all([
    fetchCatalogJson<{ providers: CatalogProvider[] }>("/catalog/providers.json"),
    fetchCatalogJson<{ operations: CatalogOperation[] }>("/catalog/ops.json"),
  ]);
  catalogCache = {
    providers: providersBody.providers ?? [],
    operations: opsBody.operations ?? [],
    expiresAt: now + CATALOG_TTL_MS,
  };
  return catalogCache;
}

interface CatalogDetailField {
  name: string;
  required: boolean;
  description: string | null;
  schema: unknown;
}

interface CatalogDetailOperation {
  sdkPath: string;
  httpMethod: string;
  summary: string | null;
  description: string | null;
  parameters?: CatalogDetailField[];
  requestBodyFields?: CatalogDetailField[];
}

function schemaFromCatalogOp(op: CatalogDetailOperation): Record<string, unknown> {
  const properties: Record<string, unknown> = {};
  const required: string[] = [];
  for (const field of [...(op.parameters ?? []), ...(op.requestBodyFields ?? [])]) {
    if (!field?.name || field.name in properties) continue;
    const schema =
      field.schema && typeof field.schema === "object"
        ? (field.schema as Record<string, unknown>)
        : { type: "string" };
    properties[field.name] = {
      ...schema,
      ...(field.description ? { description: field.description } : {}),
    };
    if (field.required) required.push(field.name);
  }
  return {
    type: "object",
    properties,
    ...(required.length > 0 ? { required } : {}),
  };
}

const providerDetailCache = new Map<
  string,
  { entries: ToolEntry[]; expiresAt: number }
>();

/**
 * Tool entries for a provider derived from the public registry catalog
 * (`/catalog/p/<provider>.json`). Used as the discovery source when the
 * provider's UTDK module doesn't export tool metadata itself — which is the
 * common case today, since generated modules only export the client factory.
 */
export async function catalogToolEntries(provider: string): Promise<ToolEntry[]> {
  const now = Date.now();
  const cached = providerDetailCache.get(provider);
  if (cached && cached.expiresAt > now) return cached.entries;
  const detail = await fetchCatalogJson<{ operations?: CatalogDetailOperation[] }>(
    `/catalog/p/${provider}.json`,
  );
  const entries: ToolEntry[] = (detail.operations ?? [])
    .filter((op) => typeof op.sdkPath === "string" && op.sdkPath)
    .map((op) => ({
      provider,
      name: `${provider}.${op.sdkPath}`,
      operation: op.sdkPath,
      description: op.summary ?? op.description ?? undefined,
      inputSchema: schemaFromCatalogOp(op),
      outputSchema: undefined,
    }));
  providerDetailCache.set(provider, {
    entries,
    expiresAt: now + CATALOG_TTL_MS,
  });
  return entries;
}

const registry: CoreService = {
  tools: [
    {
      name: "registry.providers",
      operation: "providers",
      description:
        "List registry providers (UTDK SDKs): id, title, description, package, icon, and supported credential kinds. Optional `q` substring filter.",
      inputSchema: { type: "object", properties: { q: { type: "string" } } },
    },
    {
      name: "registry.search",
      operation: "search",
      description:
        "Search registry SDK operations by keyword. Returns the sdkPath to call (e.g. `github.users.getByUsername`) plus HTTP method/path and summary.",
      inputSchema: {
        type: "object",
        properties: {
          q: { type: "string" },
          provider: { type: "string" },
          limit: { type: "number" },
        },
        required: ["q"],
      },
    },
  ],

  async call(_ctx, procedure, args) {
    const catalog = await loadCatalog();
    switch (procedure) {
      case "providers": {
        const q = typeof args["q"] === "string" ? args["q"].toLowerCase() : "";
        const providers = q
          ? catalog.providers.filter((p) =>
              [p.id, p.title, p.description, p.packageName]
                .filter(Boolean)
                .some((v) => String(v).toLowerCase().includes(q)),
            )
          : catalog.providers;
        return { providers };
      }
      case "search": {
        const q = typeof args["q"] === "string" ? args["q"].trim().toLowerCase() : "";
        if (!q) throw new ServiceError("q is required", 400);
        const provider = typeof args["provider"] === "string" ? args["provider"] : "";
        const limit = Math.min(Number(args["limit"]) || 25, 100);
        const operations = catalog.operations
          .filter((op) => !provider || op.providerPath === provider)
          .filter((op) =>
            [op.sdkPath, op.operationId, op.summary, op.providerTitle, op.path]
              .filter(Boolean)
              .some((v) => String(v).toLowerCase().includes(q)),
          )
          .slice(0, limit);
        return { operations };
      }
      default:
        throw new ServiceError(`Unknown registry procedure: ${procedure}`, 404);
    }
  },
};

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const CORE_SERVICES: Record<string, CoreService> = {
  keyvalue,
  events,
  vfs,
  registry,
  workflows: workflowsService,
  apps: appsService,
  webhooks: webhooksService,
  interfaces: interfacesService,
  sync: syncService,
};

export function getCoreService(namespace: string): CoreService | undefined {
  return CORE_SERVICES[namespace];
}

/** Discovery entries for every core service (always available, no credential). */
export function coreToolEntries(): ToolEntry[] {
  return Object.entries(CORE_SERVICES).flatMap(([provider, service]) =>
    service.tools.map((tool) => ({ ...tool, provider })),
  );
}

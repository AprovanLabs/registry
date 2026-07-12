/**
 * Tool call proxy route.
 *
 * POST /tools/:provider/:operation
 *
 * Authentication: Cognito access token (verified by `requireAuth`), which sets
 * `c.var.principal` with the caller's `sub`, active `workspaceId`, `role`, and
 * `groupIds`. The route:
 * - Checks the per-tool permission grant for `principal.sub`
 * - Resolves credentials for the provider from the credential store
 * - Applies rate limiting per user id
 * - Executes the operation in the Isolate runtime (APR-15)
 * - Emits telemetry span
 * - Logs request/response metadata (not bodies)
 */

import { withSpan } from "@utdk/common/telemetry";
import { Hono } from "hono";
import { getAuditStore } from "../audit.js";
import { getCredentialStore } from "../credentials.js";
import { getExecutor, getProviderModule, type IsolateResult, type ProviderModule } from "../isolate.js";
import { requireAuth } from "../middleware/auth.js";
import { rateLimitByUserId } from "../middleware/rateLimitMiddleware.js";
import { getPermissionStore } from "../permissions.js";

export const toolsRouter = new Hono();

// Every tool route requires a verified Cognito access token + resolved principal.
toolsRouter.use("*", requireAuth);

// ---------------------------------------------------------------------------
// GET /tools — workspace-filtered tool discovery
// ---------------------------------------------------------------------------
//
// Returns the tool schemas for every provider that has at least one credential
// configured in the caller's workspace. Tool schemas are read from each
// provider package's static `tools` export (see APR-304) via the LRU provider
// cache. The result is cached per workspace with a 5-minute TTL.

export interface ToolEntry {
  provider: string;
  name: string;
  operation: string;
  description?: string;
  inputSchema?: unknown;
  outputSchema?: unknown;
}

interface CachedToolList {
  tools: ToolEntry[];
  expiresAt: number;
}

const DEFAULT_TOOL_LIST_TTL_MS = 5 * 60 * 1000;

function getToolListTtlMs(): number {
  const raw = Number(process.env["TOOL_LIST_CACHE_TTL_MS"]);
  return Number.isFinite(raw) && raw > 0 ? raw : DEFAULT_TOOL_LIST_TTL_MS;
}

const toolListCache = new Map<string, CachedToolList>();

/** Drop the cached tool list for a workspace (call when credentials change). */
export function invalidateToolListCache(workspaceId: string): void {
  toolListCache.delete(workspaceId);
}

/** Clear every cached tool list (used in tests). */
export function resetToolListCache(): void {
  toolListCache.clear();
}

/**
 * Derive tool entries for a provider from its cached module.
 *
 * Primary source: the static `tools` export (APR-304). Each entry is expected
 * to look like `{ name, description?, inputSchema?, outputSchema? }` where
 * `name` follows the `provider.operation` convention.
 *
 * Transitional fallback: when a `tools` export is not present but the module
 * re-exports `toolMetadata`, entries are derived from the runtime metadata
 * map (best-effort input schema from the parameter keys). This keeps
 * discovery useful before every provider package ships a `tools` export.
 */
function deriveToolEntries(provider: string, mod: ProviderModule): ToolEntry[] {
  const entries: ToolEntry[] = [];

  const toolsExport = mod["tools"];
  if (Array.isArray(toolsExport)) {
    for (const t of toolsExport) {
      if (!t || typeof t !== "object") continue;
      const entry = t as Record<string, unknown>;
      const name = typeof entry["name"] === "string" ? entry["name"] : "";
      if (!name) continue;
      const operation = name.startsWith(`${provider}.`)
        ? name.slice(provider.length + 1)
        : name;
      entries.push({
        provider,
        name,
        operation,
        description: typeof entry["description"] === "string" ? entry["description"] : undefined,
        inputSchema: entry["inputSchema"],
        outputSchema: entry["outputSchema"],
      });
    }
    return entries;
  }

  const meta = mod["toolMetadata"];
  if (meta && typeof meta === "object" && !Array.isArray(meta)) {
    for (const [, value] of Object.entries(meta as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const m = value as Record<string, unknown>;
      const accessPath = Array.isArray(m["accessPath"])
        ? (m["accessPath"] as unknown[]).map(String)
        : [];
      if (accessPath.length === 0) continue;
      const operation = accessPath.join(".");
      entries.push({
        provider,
        name: `${provider}.${operation}`,
        operation,
        description: typeof m["description"] === "string" ? m["description"] : undefined,
        inputSchema: synthesizeInputSchema(m),
        outputSchema: undefined,
      });
    }
  }

  return entries;
}

/** Best-effort JSON schema for a tool derived from runtime metadata. */
function synthesizeInputSchema(meta: Record<string, unknown>): Record<string, unknown> {
  const stringKeys = (key: string): string[] =>
    Array.isArray(meta[key]) ? (meta[key] as unknown[]).map(String) : [];

  const pathKeys = stringKeys("pathParameterKeys");
  const queryKeys = stringKeys("queryParameterKeys");
  const bodyKeys = stringKeys("bodyPropertyKeys");
  const headerKeys = stringKeys("headerParameterKeys");
  const descriptions =
    meta["parameterDescriptions"] && typeof meta["parameterDescriptions"] === "object"
      ? (meta["parameterDescriptions"] as Record<string, unknown>)
      : {};

  const properties: Record<string, unknown> = {};
  for (const key of [...pathKeys, ...queryKeys, ...bodyKeys, ...headerKeys]) {
    properties[key] = {
      type: "string",
      ...(typeof descriptions[key] === "string" ? { description: descriptions[key] } : {}),
    };
  }

  const schema: Record<string, unknown> = { type: "object", properties };
  if (pathKeys.length > 0) {
    schema["required"] = pathKeys;
  }
  return schema;
}

async function getOrBuildToolList(workspaceId: string): Promise<ToolEntry[]> {
  const now = Date.now();
  const cached = toolListCache.get(workspaceId);
  if (cached && cached.expiresAt > now) return cached.tools;

  const credStore = getCredentialStore();
  const credentials = await credStore.list(workspaceId);
  const providers = Array.from(new Set(credentials.map((c) => c.provider)));

  const tools: ToolEntry[] = [];
  for (const provider of providers) {
    try {
      const mod = await getProviderModule(provider);
      tools.push(...deriveToolEntries(provider, mod));
    } catch (err) {
      process.stderr.write(
        JSON.stringify({
          ts: new Date().toISOString(),
          type: "gateway_tool_discovery_error",
          provider,
          error: err instanceof Error ? err.message : String(err),
        }) + "\n",
      );
    }
  }

  toolListCache.set(workspaceId, { tools, expiresAt: now + getToolListTtlMs() });
  return tools;
}

toolsRouter.get("/", async (c) => {
  const principal = c.get("principal");
  const tools = await getOrBuildToolList(principal.workspaceId);
  return c.json({ tools, workspace_id: principal.workspaceId });
});

// ---------------------------------------------------------------------------
// POST /tools/search — search/filter the workspace-visible tool catalog
// ---------------------------------------------------------------------------
//
// Request body (all fields optional):
//   tool_name  — exact lookup by tool name; short-circuits other filters
//   namespace  — filter by provider namespace (alias: provider name)
//   query      — keyword search over name, operation, and description
//   limit      — max results (default 10)
//
// Responses:
//   tool_name hit  → { success: true, tool: ToolEntry }
//   tool_name miss → { success: false, error: "Tool '<name>' not found" }
//   general search → { success: true, count: N, tools: ToolEntry[], namespaces: string[] }

export interface SearchToolsRequest {
  tool_name?: string;
  namespace?: string;
  query?: string;
  limit?: number;
}

export type SearchToolsResponse =
  | { success: true; tool: ToolEntry }
  | { success: false; error: string }
  | { success: true; count: number; tools: ToolEntry[]; namespaces: string[] };

/** Pure search logic — exported for unit tests. */
export function searchTools(tools: ToolEntry[], opts: SearchToolsRequest): SearchToolsResponse {
  const { tool_name, namespace, query, limit = 10 } = opts;

  if (tool_name) {
    const found = tools.find((t) => t.name === tool_name);
    if (!found) return { success: false, error: `Tool '${tool_name}' not found` };
    return { success: true, tool: found };
  }

  let results = namespace ? tools.filter((t) => t.provider === namespace) : [...tools];

  if (query) {
    const keywords = query.toLowerCase().split(/\s+/).filter(Boolean);
    results = results
      .map((tool) => {
        const text = `${tool.name} ${tool.provider} ${tool.operation} ${tool.description ?? ""}`.toLowerCase();
        const score = keywords.filter((kw) => text.includes(kw)).length / keywords.length;
        return { tool, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ tool }) => tool);
  }

  results = results.slice(0, limit);
  const namespaces = Array.from(new Set(results.map((t) => t.provider)));
  return { success: true, count: results.length, tools: results, namespaces };
}

toolsRouter.post("/search", async (c) => {
  const principal = c.get("principal");
  const tools = await getOrBuildToolList(principal.workspaceId);

  let body: SearchToolsRequest = {};
  try {
    const raw = await c.req.json<SearchToolsRequest>();
    if (raw && typeof raw === "object") body = raw;
  } catch {
    // empty body → all fields default
  }

  return c.json(searchTools(tools, body));
});

// ---------------------------------------------------------------------------
// POST /tools/:provider/:operation
// ---------------------------------------------------------------------------

toolsRouter.post("/:provider/:operation{.*}", rateLimitByUserId, async (c) => {
  const principal = c.get("principal");
  const callerId = principal.sub;
  const workspaceId = principal.workspaceId;

  const provider = c.req.param("provider");
  const operation = c.req.param("operation");

  // Permission check (async — DDB-backed store, APR-320)
  const permStore = getPermissionStore();
  if (!(await permStore.check(workspaceId, callerId, provider!, operation!))) {
    const requestId = crypto.randomUUID();
    logMetadata({ requestId, workspaceId, callerId, provider: provider!, operation: operation!, status: 403 });
    getAuditStore().append({ requestId, workspaceId, callerId, provider: provider!, operation: operation!, status: 403 });
    return c.json({ error: "Forbidden: caller does not have permission for this operation" }, 403);
  }

  // Resolve credentials from store (async — DDB-backed store, APR-318)
  const credStore = getCredentialStore();
  const credentials = await credStore.resolveForProvider(workspaceId, provider!);

  if (!provider || !operation) {
    return c.json({ error: "Missing provider or operation" }, 400);
  }

  const requestId = crypto.randomUUID();
  const startTime = Date.now();

  // Parse request body (args for the operation)
  let args: Record<string, unknown> = {};
  try {
    const body = await c.req.json<Record<string, unknown>>();
    if (body && typeof body === "object") {
      args = body;
    }
  } catch {
    // Empty body is fine; some operations take no arguments
  }

  // Execute via Isolate with telemetry
  const executor = await getExecutor();

  const isolateResult = await withSpan<IsolateResult>(
    { provider, operation, spanName: `gateway ${provider} ${operation}` },
    async (span) => {
      span.setAttribute("caller_id", callerId);
      span.setAttribute("workspace_id", workspaceId);
      span.setAttribute("request_id", requestId);

      const r = await executor.execute({
        provider,
        operation,
        args,
        credentials,
        timeout: 30_000,
      });

      span.setAttribute("success", r.success);
      span.setAttribute("duration_ms", r.durationMs);
      if (!r.success) {
        span.setAttribute("error", r.error ?? "unknown");
      }
      return r;
    },
  );

  const durationMs = Date.now() - startTime;

  // 5. Log request/response metadata (no bodies)
  const status = isolateResult.success ? 200 : 500;
  logMetadata({ requestId, workspaceId, callerId, provider, operation, status, durationMs });
  getAuditStore().append({ requestId, workspaceId, callerId, provider, operation, status, durationMs });

  if (!isolateResult.success) {
    return c.json({ error: isolateResult.error ?? "Execution failed" }, 500);
  }

  return c.json({ data: isolateResult.data, meta: { requestId, durationMs } });
});

// ---------------------------------------------------------------------------
// Logging helper — logs metadata only (no credential values, no request/response bodies)
// ---------------------------------------------------------------------------

interface RequestMetadata {
  requestId: string;
  workspaceId: string;
  callerId: string;
  provider: string;
  operation: string;
  status: number;
  durationMs?: number;
}

function logMetadata(meta: RequestMetadata): void {
  // Structured log line; omit all sensitive fields
  const entry = {
    ts: new Date().toISOString(),
    type: "gateway_request",
    ...meta,
  };
  // Use stderr for structured logs so stdout can remain clean for piping
  process.stderr.write(JSON.stringify(entry) + "\n");
}

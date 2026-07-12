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
import { getServiceRegistry, type ServiceToolInfo } from "../registry/service-registry.js";

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

toolsRouter.get("/", async (c) => {
  const principal = c.get("principal");
  const workspaceId = principal.workspaceId;

  const now = Date.now();
  const cached = toolListCache.get(workspaceId);
  if (cached && cached.expiresAt > now) {
    return c.json({ tools: cached.tools, workspace_id: workspaceId });
  }

  // Only providers with at least one credential configured in the workspace
  // contribute tools — a user who hasn't connected GitHub sees no GitHub tools.
  const credStore = getCredentialStore();
  const credentials = await credStore.list(workspaceId);
  const providers = Array.from(new Set(credentials.map((c) => c.provider)));

  const tools: ToolEntry[] = [];
  for (const provider of providers) {
    try {
      const mod = await getProviderModule(provider);
      tools.push(...deriveToolEntries(provider, mod));
    } catch (err) {
      // A single unresolvable provider should not break discovery for the rest.
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

  // Also include tools from ServiceRegistry (MCP, UTCP, etc.) — APR-339.
  // These are not credential-gated because the backends own their own auth.
  for (const info of getServiceRegistry().getServiceInfo()) {
    tools.push(serviceToolInfoToEntry(info));
  }

  toolListCache.set(workspaceId, { tools, expiresAt: now + getToolListTtlMs() });
  return c.json({ tools, workspace_id: workspaceId });
});

function serviceToolInfoToEntry(info: ServiceToolInfo): ToolEntry {
  return {
    provider: info.namespace,
    name: info.name,
    operation: info.procedure,
    description: info.description,
    inputSchema: info.parameters,
    outputSchema: info.outputs,
  };
}

// ---------------------------------------------------------------------------
// POST /tools/:provider/:operation
// ---------------------------------------------------------------------------

toolsRouter.post("/:provider/:operation{.*}", rateLimitByUserId, async (c) => {
  const principal = c.get("principal");
  const callerId = principal.sub;
  const workspaceId = principal.workspaceId;

  const provider = c.req.param("provider");
  const operation = c.req.param("operation");

  if (!provider || !operation) {
    return c.json({ error: "Missing provider or operation" }, 400);
  }

  // Permission check (async — DDB-backed store, APR-320)
  const permStore = getPermissionStore();
  if (!(await permStore.check(workspaceId, callerId, provider, operation))) {
    const requestId = crypto.randomUUID();
    logMetadata({ requestId, workspaceId, callerId, provider, operation, status: 403 });
    getAuditStore().append({ requestId, workspaceId, callerId, provider, operation, status: 403 });
    return c.json({ error: "Forbidden: caller does not have permission for this operation" }, 403);
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

  // Route: ServiceRegistry namespaces (MCP/UTCP) vs @utdk/* via IsolateExecutor
  const serviceReg = getServiceRegistry();
  if (serviceReg.hasNamespace(provider)) {
    // ServiceRegistry path — APR-339. Backends handle their own credentials.
    let data: unknown;
    let callError: string | undefined;
    let success = false;

    const spanResult = await withSpan<{ success: boolean; data?: unknown; error?: string; durationMs: number }>(
      { provider, operation, spanName: `gateway ${provider} ${operation}` },
      async (span) => {
        span.setAttribute("caller_id", callerId);
        span.setAttribute("workspace_id", workspaceId);
        span.setAttribute("request_id", requestId);
        span.setAttribute("route", "service_registry");

        const start = Date.now();
        try {
          const result = await serviceReg.call(provider, operation, args);
          const durationMs = Date.now() - start;
          span.setAttribute("success", true);
          span.setAttribute("duration_ms", durationMs);
          return { success: true, data: result, durationMs };
        } catch (err) {
          const durationMs = Date.now() - start;
          const error = err instanceof Error ? err.message : String(err);
          span.setAttribute("success", false);
          span.setAttribute("error", error);
          span.setAttribute("duration_ms", durationMs);
          return { success: false, error, durationMs };
        }
      },
    );

    success = spanResult.success;
    data = spanResult.data;
    callError = spanResult.error;
    const durationMs = spanResult.durationMs;

    const status = success ? 200 : (callError?.includes("not found") ? 404 : 502);
    logMetadata({ requestId, workspaceId, callerId, provider, operation, status, durationMs });
    getAuditStore().append({ requestId, workspaceId, callerId, provider, operation, status, durationMs });

    if (!success) {
      return c.json({ error: callError ?? "Service call failed" }, status as 404 | 502);
    }
    return c.json({ data, meta: { requestId, durationMs } });
  }

  // @utdk/* path — existing IsolateExecutor route (credential-backed)
  const credStore = getCredentialStore();
  const credentials = await credStore.resolveForProvider(workspaceId, provider);

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

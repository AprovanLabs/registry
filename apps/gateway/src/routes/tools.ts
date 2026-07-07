/**
 * Tool call proxy route.
 *
 * POST /tools/:provider/:operation
 *
 * Supports two authentication modes:
 *
 * 1. JWT Mode (production):
 *    - Verifies JWT (requireAuth middleware)
 *    - Checks per-tool permission grant
 *    - Resolves credentials for the provider from the credential store
 *
 * 2. Passthrough Mode (development/testing):
 *    - No JWT required
 *    - Credentials passed directly in headers (Authorization, X-Api-Key, etc.)
 *    - Enabled via X-Gateway-Mode: passthrough header or missing Authorization JWT
 *
 * Common steps:
 * - Applies rate limiting per callerId + provider
 * - Executes the operation in the Isolate runtime (APR-15)
 * - Emits telemetry span
 * - Logs request/response metadata (not bodies)
 */

import { withSpan } from "@utdk/common/telemetry";
import { Hono } from "hono";
import { getAuditStore } from "../audit.js";
import { getCredentialStore, type CredentialPayload } from "../credentials.js";
import { getExecutor, getProviderModule, type IsolateResult, type ProviderModule } from "../isolate.js";
import { requireAuth, type GatewayJWTPayload } from "../middleware/auth.js";
import { rateLimitByUserId } from "../middleware/rateLimitMiddleware.js";
import { getPermissionStore } from "../permissions.js";

export const toolsRouter = new Hono();

// ---------------------------------------------------------------------------
// Passthrough mode: extract credentials from request headers
// ---------------------------------------------------------------------------

function extractPassthroughCredentials(headers: Headers): CredentialPayload | null {
  const authHeader = headers.get("Authorization");

  if (authHeader) {
    // Check if it's a Bearer token
    if (authHeader.startsWith("Bearer ")) {
      return {
        type: "bearer_token",
        token: authHeader.slice("Bearer ".length),
      };
    }
    // Could be Basic auth or other schemes
    return {
      type: "bearer_token",
      token: authHeader,
    };
  }

  // Check for common API key headers
  const apiKeyHeaders = ["X-Api-Key", "X-API-KEY", "Api-Key", "x-api-key"];
  for (const h of apiKeyHeaders) {
    const value = headers.get(h);
    if (value) {
      return {
        type: "api_key",
        value,
        headerName: h,
      };
    }
  }

  // Check provider-specific headers (e.g., Anthropic, Datadog)
  const ddApiKey = headers.get("DD-API-KEY");
  if (ddApiKey) {
    return { type: "api_key", value: ddApiKey, headerName: "DD-API-KEY" };
  }

  return null;
}

// ---------------------------------------------------------------------------
// Flexible auth middleware: JWT or passthrough
// ---------------------------------------------------------------------------

async function flexibleAuth(c: any, next: () => Promise<void>): Promise<Response | void> {
  const gatewayMode = c.req.header("X-Gateway-Mode");
  const authHeader = c.req.header("Authorization");

  // Passthrough mode: no JWT required, credentials from headers
  if (gatewayMode === "passthrough" || !authHeader?.includes("eyJ")) {
    // Mark as passthrough mode
    c.set("passthroughMode", true);
    c.set("passthroughCredentials", extractPassthroughCredentials(c.req.raw.headers));
    return next();
  }

  // JWT mode: use standard auth
  return requireAuth(c, next);
}

toolsRouter.use("*", flexibleAuth);

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

toolsRouter.get("/", requireAuth, async (c) => {
  const payload = c.get("jwtPayload") as GatewayJWTPayload | undefined;
  if (!payload) {
    return c.json({ error: "Missing or invalid Authorization header" }, 401);
  }
  const workspaceId = payload.wid;

  const now = Date.now();
  const cached = toolListCache.get(workspaceId);
  if (cached && cached.expiresAt > now) {
    return c.json({ tools: cached.tools, workspace_id: workspaceId });
  }

  // Only providers with at least one credential configured in the workspace
  // contribute tools — a user who hasn't connected GitHub sees no GitHub tools.
  const credStore = getCredentialStore();
  const credentials = credStore.list(workspaceId);
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

  toolListCache.set(workspaceId, { tools, expiresAt: now + getToolListTtlMs() });
  return c.json({ tools, workspace_id: workspaceId });
});

// ---------------------------------------------------------------------------
// POST /tools/:provider/:operation
// ---------------------------------------------------------------------------

toolsRouter.post("/:provider/:operation{.*}", rateLimitByUserId, async (c) => {
  const isPassthrough = c.get("passthroughMode") === true;

  let callerId: string;
  let workspaceId: string;
  let credentials: CredentialPayload | null | undefined;

  if (isPassthrough) {
    // Passthrough mode: use anonymous caller, credentials from headers
    callerId = "anonymous";
    workspaceId = "passthrough";
    credentials = c.get("passthroughCredentials") as CredentialPayload | null;

    if (!credentials) {
      return c.json({
        error: "No credentials provided. Include Authorization or X-Api-Key header.",
      }, 401);
    }
  } else {
    // JWT mode: get from token and credential store
    const jwtPayload = c.get("jwtPayload") as GatewayJWTPayload;
    callerId = jwtPayload.sub;
    workspaceId = jwtPayload.wid;

    const provider = c.req.param("provider");
    const operation = c.req.param("operation");

    // Permission check (only in JWT mode)
    const permStore = getPermissionStore();
    if (!permStore.check(workspaceId, callerId, provider!, operation!)) {
      const requestId = crypto.randomUUID();
      logMetadata({ requestId, workspaceId, callerId, provider: provider!, operation: operation!, status: 403 });
      getAuditStore().append({ requestId, workspaceId, callerId, provider: provider!, operation: operation!, status: 403 });
      return c.json({ error: "Forbidden: caller does not have permission for this operation" }, 403);
    }

    // Resolve credentials from store
    const credStore = getCredentialStore();
    credentials = credStore.resolveForProvider(workspaceId, provider!);
  }

  const provider = c.req.param("provider");
  const operation = c.req.param("operation");

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
      span.setAttribute("passthrough", isPassthrough);

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

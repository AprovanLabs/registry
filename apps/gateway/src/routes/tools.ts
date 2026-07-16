/**
 * Tool call proxy route.
 *
 * POST /tools/:provider/:operation
 *
 * Authentication: Cognito access token (verified by `requireAuth`), which sets
 * `c.var.principal` with the caller's `sub`, active `workspaceId`, `role`, and
 * `groupIds`. The route:
 * - Authorizes via `mayInvokeTool` (direct grant, group tool grant, or admin)
 * - Resolves credentials for the provider from the credential store
 * - Applies rate limiting per user id
 * - Executes the operation in the Isolate runtime (APR-15)
 * - Emits telemetry span
 * - Logs request/response metadata (not bodies)
 */

import { withSpan } from "@utdk/common/telemetry";
import { Hono } from "hono";
import { mayInvokeTool } from "../authorize.js";
import { getAuditStore } from "../audit.js";
import { getCredentialStore } from "../credentials.js";
import { getExecutor, getProviderModule, type IsolateResult, type ProviderModule } from "../isolate.js";
import { getAuthMode, requireAuth } from "../middleware/auth.js";
import { rateLimitByUserId } from "../middleware/rateLimitMiddleware.js";
import type { ToolCallRequest } from "../contract.js";
import type { CredentialPayload } from "../credentials.js";

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

async function discoverTools(workspaceId: string): Promise<ToolEntry[]> {
  const now = Date.now();
  const cached = toolListCache.get(workspaceId);
  if (cached && cached.expiresAt > now) {
    return cached.tools;
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

  toolListCache.set(workspaceId, { tools, expiresAt: now + getToolListTtlMs() });
  return tools;
}

toolsRouter.get("/", async (c) => {
  const workspaceId = c.get("principal").workspaceId;
  const tools = await discoverTools(workspaceId);
  return c.json({ tools, workspace_id: workspaceId });
});

toolsRouter.get("/search", async (c) => {
  const query = (c.req.query("q") ?? "").trim().toLowerCase();
  const tools = await discoverTools(c.get("principal").workspaceId);
  const matches = query
    ? tools.filter((tool) =>
        [tool.provider, tool.operation, tool.description]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(query)),
      )
    : tools;
  return c.json({
    tools: matches.map((tool) => ({
      provider: tool.provider,
      operation: tool.operation,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })),
  });
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

  if (
    getAuthMode() === "oidc" &&
    !(await mayInvokeTool(principal, provider!, operation!))
  ) {
    const requestId = crypto.randomUUID();
    logMetadata({ requestId, workspaceId, callerId, provider: provider!, operation: operation!, status: 403 });
    getAuditStore().append({ requestId, workspaceId, callerId, provider: provider!, operation: operation!, status: 403 });
    return c.json({ error: "Forbidden: caller does not have permission for this operation" }, 403);
  }

  if (!provider || !operation) {
    return c.json({ error: "Missing provider or operation" }, 400);
  }

  const requestId = crypto.randomUUID();
  const startTime = Date.now();

  let body: ToolCallRequest;
  try {
    body = await c.req.json<ToolCallRequest>();
  } catch {
    return c.json({ error: "Expected { args, credential? }" }, 400);
  }
  if (!body.args || typeof body.args !== "object" || Array.isArray(body.args)) {
    return c.json({ error: "args must be an object" }, 400);
  }
  let credentials: CredentialPayload | undefined;
  if (body.credential) {
    if (process.env["GATEWAY_EPHEMERAL_CREDENTIALS"] === "0") {
      return c.json({ error: "Ephemeral credentials are disabled" }, 403);
    }
    credentials =
      body.credential.type === "bearer_token"
        ? { type: "bearer_token", token: body.credential.token ?? "" }
        : {
            type: "api_key",
            value: body.credential.value ?? "",
            headerName: body.credential.name,
          };
  } else {
    credentials = await getCredentialStore().resolveForProvider(
      workspaceId,
      provider,
    );
  }
  // Chat clients (AI SDK) send `stream: true` at the top level of the request;
  // provider chat-completion operations expect it inside their own arguments.
  const args = body.stream === true ? { ...body.args, stream: true } : body.args;

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

  // For streaming operations this measures time to first byte, not the full
  // stream duration — the response body is still being produced when we log.
  const durationMs = Date.now() - startTime;

  // 5. Log request/response metadata (no bodies)
  const status = isolateResult.success ? 200 : 500;
  logMetadata({ requestId, workspaceId, callerId, provider, operation, status, durationMs });
  getAuditStore().append({ requestId, workspaceId, callerId, provider, operation, status, durationMs });

  if (!isolateResult.success) {
    return c.json({ error: isolateResult.error ?? "Execution failed" }, 500);
  }

  // Streaming results (provider chat-completion operations called with
  // `stream: true`) are passed through as-is — typically SSE — rather than
  // JSON-buffered. Requires Lambda response streaming to reach the client
  // incrementally (see src/lambda.ts and infra/src/gateway-lambda.ts).
  const streamBody = asStreamBody(isolateResult.data);
  if (streamBody) {
    return c.newResponse(streamBody.stream, 200, streamBody.headers);
  }

  return c.json({ data: isolateResult.data, meta: { requestId, durationMs } });
});

// ---------------------------------------------------------------------------
// Streaming pass-through helpers
// ---------------------------------------------------------------------------

const SSE_HEADERS: Record<string, string> = {
  "Content-Type": "text/event-stream; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
};

interface StreamBody {
  stream: ReadableStream<Uint8Array>;
  headers: Record<string, string>;
}

function isAsyncIterable(value: unknown): value is AsyncIterable<unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as AsyncIterable<unknown>)[Symbol.asyncIterator] === "function"
  );
}

/**
 * Detect a streaming execution result and normalize it to a byte stream plus
 * response headers. Handles the shapes provider modules can hand back:
 * a fetch `Response` (raw SSE from the upstream API), a bare `ReadableStream`,
 * or an async-iterable SDK stream (e.g. OpenAI chunk objects, which are
 * re-encoded as SSE `data:` events). Returns undefined for plain JSON data.
 */
function asStreamBody(data: unknown): StreamBody | undefined {
  if (data instanceof Response) {
    if (!data.body) return undefined;
    return {
      stream: data.body,
      headers: {
        ...SSE_HEADERS,
        "Content-Type": data.headers.get("content-type") ?? SSE_HEADERS["Content-Type"]!,
      },
    };
  }
  if (data instanceof ReadableStream) {
    return { stream: data, headers: { ...SSE_HEADERS } };
  }
  if (isAsyncIterable(data)) {
    return { stream: sseFromAsyncIterable(data), headers: { ...SSE_HEADERS } };
  }
  return undefined;
}

/**
 * Encode an async-iterable stream as SSE. String and byte chunks are assumed
 * to already be wire-format (pre-encoded SSE) and pass through untouched;
 * object chunks become `data: <json>` events, terminated by `data: [DONE]`
 * to match the OpenAI-style contract chat clients expect.
 */
function sseFromAsyncIterable(iterable: AsyncIterable<unknown>): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const iterator = iterable[Symbol.asyncIterator]();
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      const { value, done } = await iterator.next();
      if (done) {
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
        return;
      }
      if (value instanceof Uint8Array) {
        controller.enqueue(value);
      } else if (typeof value === "string") {
        controller.enqueue(encoder.encode(value));
      } else {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(value)}\n\n`));
      }
    },
    async cancel(reason) {
      await iterator.return?.(reason);
    },
  });
}

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

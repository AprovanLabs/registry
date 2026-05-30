/**
 * Tool call proxy route.
 *
 * POST /tools/:provider/:operation
 *
 * 1. Verifies JWT (requireAuth middleware)
 * 2. Checks per-tool permission grant
 * 3. Resolves credentials for the provider from the credential store
 * 4. Applies rate limiting per callerId + provider
 * 5. Executes the operation in the Isolate runtime (APR-15)
 * 6. Emits telemetry span
 * 7. Logs request/response metadata (not bodies)
 */

import { Hono } from "hono";
import { requireAuth } from "../middleware/auth.js";
import { rateLimitByCallerAndProvider } from "../middleware/rateLimitMiddleware.js";
import { getCredentialStore } from "../credentials.js";
import { getPermissionStore } from "../permissions.js";
import { getExecutor, type IsolateResult } from "../isolate.js";
import { withSpan } from "@utdk/common/telemetry";

export const toolsRouter = new Hono();

toolsRouter.use("*", requireAuth);

// ---------------------------------------------------------------------------
// POST /tools/:provider/:operation
// ---------------------------------------------------------------------------

toolsRouter.post("/:provider/:operation{.*}", rateLimitByCallerAndProvider, async (c) => {
  const jwtPayload = c.get("jwtPayload");
  const callerId = jwtPayload.sub;
  const workspaceId = jwtPayload.wid;

  const provider = c.req.param("provider");
  // operation may contain dots (e.g. repos.list) — captured via wildcard
  const operation = c.req.param("operation");

  if (!provider || !operation) {
    return c.json({ error: "Missing provider or operation" }, 400);
  }

  const requestId = crypto.randomUUID();
  const startTime = Date.now();

  // 1. Permission check
  const permStore = getPermissionStore();
  if (!permStore.check(workspaceId, callerId, provider, operation)) {
    logMetadata({ requestId, workspaceId, callerId, provider, operation, status: 403 });
    return c.json({ error: "Forbidden: caller does not have permission for this operation" }, 403);
  }

  // 2. Resolve credentials
  const credStore = getCredentialStore();
  const credentials = credStore.resolveForProvider(workspaceId, provider);

  // 3. Parse request body (args for the operation)
  let args: Record<string, unknown> = {};
  try {
    const body = await c.req.json<Record<string, unknown>>();
    if (body && typeof body === "object") {
      args = body;
    }
  } catch {
    // Empty body is fine; some operations take no arguments
  }

  // 4. Execute via Isolate with telemetry
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
  logMetadata({
    requestId,
    workspaceId,
    callerId,
    provider,
    operation,
    status: isolateResult.success ? 200 : 500,
    durationMs,
  });

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

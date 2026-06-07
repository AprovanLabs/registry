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
import { getExecutor, type IsolateResult } from "../isolate.js";
import { requireAuth, type GatewayJWTPayload } from "../middleware/auth.js";
import { rateLimitByCallerAndProvider } from "../middleware/rateLimitMiddleware.js";
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
// POST /tools/:provider/:operation
// ---------------------------------------------------------------------------

toolsRouter.post("/:provider/:operation{.*}", rateLimitByCallerAndProvider, async (c) => {
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

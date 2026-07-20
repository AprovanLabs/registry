/**
 * Public app surface — how OTHER users consume a workspace's published apps.
 *
 *   GET  /apps/:workspaceId/:name              — manifest (public metadata)
 *   POST /apps/:workspaceId/:name/tools/:namespace/:procedure
 *   POST /apps/:workspaceId/:name/workflows/:workflow/run
 *
 * The live page surface (aprovan.com/apps/...) lives in routes/live-apps.ts;
 * this router is the authenticated API the pages call back into.
 *
 * Auth: any valid Cognito token — membership in the owning workspace is NOT
 * required. That's the point: the owner workspace is the app's "account"
 * (its data, credentials, and controls), and outside callers reach it only
 * through this surface, which enforces:
 *   - the app's role model (admins / listed users / any authenticated user)
 *   - the tool allow-list (`allowedTools` — deny by default)
 *   - per-(app, user) rate limits
 *   - per-(app, user) data partitioning (ServiceContext.appScope — keyvalue
 *     keys are transparently scoped, so users only ever see their own data)
 *
 * Executions run AS the owning workspace (its credentials, its storage) but
 * attributed to the calling user.
 */

import { Hono } from "hono";
import { RateLimiter } from "@utdk/common/rateLimit";
import { getAuditStore } from "../audit.js";
import { getAuthMode, readBearerToken, verifyAccessToken } from "../middleware/auth.js";
import { invokeTool } from "../workflows/invoke.js";
import { runWorkflow } from "../workflows/runner.js";
import { readRegistration } from "../workflows/store.js";
import { ServiceError, type ServiceContext } from "../services.js";
import { callerRole, readApp, toolAllowed, type AppManifest } from "../apps/store.js";
import { countDailyCall } from "../apps/usage.js";

export const appsRouter = new Hono();

// ---------------------------------------------------------------------------
// App-session auth: verify the token, resolve the app + caller role.
// No workspace membership check — the manifest's role model decides access.
// ---------------------------------------------------------------------------

interface AppSession {
  manifest: AppManifest;
  workspaceId: string;
  sub: string;
  role: "admin" | "user";
  ctx: ServiceContext;
}

async function callerSub(c: { req: { header(name: string): string | undefined } }): Promise<string> {
  if (getAuthMode() === "none") {
    // Test/dev mode: the caller identifies via header (defaults to "local").
    return c.req.header("X-App-User") ?? "local";
  }
  const token = readBearerToken(c);
  if (!token) throw new ServiceError("Missing bearer token", 401);
  try {
    return await verifyAccessToken(token);
  } catch {
    throw new ServiceError("Invalid or expired token", 401);
  }
}

async function resolveAppSession(
  c: { req: { header(name: string): string | undefined; param(name: string): string | undefined } },
): Promise<AppSession> {
  const workspaceId = c.req.param("workspaceId");
  const name = c.req.param("name");
  if (!workspaceId || !name) throw new ServiceError("Not found", 404);

  const manifest = await readApp(workspaceId, name).catch(() => undefined);
  if (!manifest) throw new ServiceError("Not found", 404);

  const sub = await callerSub(c);
  const role = callerRole(manifest, sub);
  if (!role) throw new ServiceError("You do not have access to this app", 403);

  return {
    manifest,
    workspaceId,
    sub,
    role,
    // Executions run as the owning workspace, attributed to the caller, with
    // data services partitioned per (app, user).
    ctx: {
      workspaceId,
      userId: sub,
      appScope: { app: manifest.name, dir: manifest.dir, userId: sub, role },
    },
  };
}

// ---------------------------------------------------------------------------
// Per-(app, user) rate limiting
// ---------------------------------------------------------------------------

const appLimiters = new Map<string, RateLimiter>();

function checkAppRateLimit(session: AppSession): boolean {
  const key = `${session.workspaceId}/${session.manifest.name}:${session.sub}`;
  let limiter = appLimiters.get(key);
  if (!limiter) {
    limiter = new RateLimiter({
      requestsPerSecond: session.manifest.rateLimit?.rps ?? 5,
      burst: session.manifest.rateLimit?.burst ?? 10,
    });
    appLimiters.set(key, limiter);
  }
  return limiter.tryAcquire();
}

/** Tests: drop all app rate-limit buckets. */
export function resetAppRateLimiters(): void {
  appLimiters.clear();
}

function errorResponse(c: { json: (body: unknown, status?: number) => Response }, err: unknown): Response {
  if (err instanceof ServiceError) {
    return c.json({ error: err.message }, err.status as 400);
  }
  return c.json({ error: err instanceof Error ? err.message : "Internal error" }, 500);
}

// ---------------------------------------------------------------------------
// GET /apps/:workspaceId/:name — public manifest
// ---------------------------------------------------------------------------

appsRouter.get("/:workspaceId/:name", async (c) => {
  try {
    const session = await resolveAppSession(c);
    const { manifest, workspaceId } = session;
    return c.json({
      name: manifest.name,
      title: manifest.title,
      description: manifest.description,
      visibility: manifest.visibility ?? "private",
      workflows: manifest.workflows ?? [],
      allowedTools: manifest.allowedTools,
      role: session.role,
      liveUrl: manifest.dir ? `/apps/${workspaceId}/${manifest.name}` : undefined,
    });
  } catch (err) {
    return errorResponse(c, err);
  }
});

// ---------------------------------------------------------------------------
// POST /apps/:workspaceId/:name/tools/:namespace/:procedure
// ---------------------------------------------------------------------------

appsRouter.post("/:workspaceId/:name/tools/:namespace/:procedure{.*}", async (c) => {
  const startTime = Date.now();
  try {
    const session = await resolveAppSession(c);
    const namespace = c.req.param("namespace")!;
    const procedure = c.req.param("procedure")!;

    if (!checkAppRateLimit(session)) {
      return c.json({ error: "rate_limit_exceeded" }, 429);
    }
    if (!toolAllowed(session.manifest, namespace, procedure)) {
      return c.json({ error: `Tool ${namespace}.${procedure} is not allowed for this app` }, 403);
    }
    const usage = await countDailyCall(session.workspaceId, session.manifest, session.sub);
    if (!usage.allowed) {
      return c.json(
        {
          error: "daily_limit_exceeded",
          used: usage.used,
          limit: usage.limit,
          resetsAfter: usage.date,
        },
        429,
      );
    }

    let body: { args?: unknown };
    try {
      body = await c.req.json<{ args?: unknown }>();
    } catch {
      body = {};
    }
    const args =
      body.args && typeof body.args === "object" && !Array.isArray(body.args)
        ? (body.args as Record<string, unknown>)
        : {};

    const data = await invokeTool(session.ctx, namespace, procedure, args);
    const durationMs = Date.now() - startTime;
    getAuditStore().append({
      requestId: crypto.randomUUID(),
      workspaceId: session.workspaceId,
      callerId: `app:${session.manifest.name}:${session.sub}`,
      provider: namespace,
      operation: procedure,
      status: 200,
      durationMs,
    });
    return c.json({ data, meta: { app: session.manifest.name, durationMs } });
  } catch (err) {
    return errorResponse(c, err);
  }
});

// ---------------------------------------------------------------------------
// POST /apps/:workspaceId/:name/workflows/:workflow/run
// ---------------------------------------------------------------------------

appsRouter.post("/:workspaceId/:name/workflows/:workflow/run", async (c) => {
  try {
    const session = await resolveAppSession(c);
    const workflowName = c.req.param("workflow")!;
    if (!session.manifest.workflows?.includes(workflowName)) {
      return c.json({ error: `Workflow ${workflowName} is not exposed by this app` }, 404);
    }
    if (!checkAppRateLimit(session)) {
      return c.json({ error: "rate_limit_exceeded" }, 429);
    }
    const usage = await countDailyCall(session.workspaceId, session.manifest, session.sub);
    if (!usage.allowed) {
      return c.json(
        {
          error: "daily_limit_exceeded",
          used: usage.used,
          limit: usage.limit,
          resetsAfter: usage.date,
        },
        429,
      );
    }

    const registration = await readRegistration(session.workspaceId, workflowName);
    if (!registration) return c.json({ error: "Workflow registration missing" }, 404);

    let input: unknown = null;
    try {
      input = await c.req.json();
    } catch {
      input = null;
    }

    const run = await runWorkflow({
      workspaceId: session.workspaceId,
      userId: session.sub,
      registration,
      trigger: "manual",
      triggerDetail: `app:${session.manifest.name}`,
      input,
      appScope: session.ctx.appScope,
    });
    return c.json(
      {
        runId: run.id,
        status: run.status,
        durationMs: run.durationMs,
        result: run.result ?? null,
        error: run.error,
      },
      run.status === "failed" ? 500 : 200,
    );
  } catch (err) {
    return errorResponse(c, err);
  }
});

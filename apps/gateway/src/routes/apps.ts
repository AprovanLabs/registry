/**
 * Public app surface — how OTHER users consume a workspace's published apps.
 *
 *   GET  /apps/:workspaceId/:name              — manifest (public metadata)
 *   GET  /apps/:workspaceId/:name/widget       — the app's widget UI page
 *   POST /apps/:workspaceId/:name/tools/:namespace/:procedure
 *   POST /apps/:workspaceId/:name/workflows/:workflow/run
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
import { getFsStore } from "../fs-store.js";
import { invokeTool } from "../workflows/invoke.js";
import { runWorkflow } from "../workflows/runner.js";
import { readRegistration } from "../workflows/store.js";
import { ServiceError, type ServiceContext } from "../services.js";
import { callerRole, readApp, toolAllowed, type AppManifest } from "../apps/store.js";

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
      appScope: { app: manifest.name, userId: sub, role },
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
    const { manifest } = session;
    return c.json({
      name: manifest.name,
      title: manifest.title,
      description: manifest.description,
      workflows: manifest.workflows ?? [],
      allowedTools: manifest.allowedTools,
      role: session.role,
      widget: manifest.widgetPath ? true : false,
    });
  } catch (err) {
    return errorResponse(c, err);
  }
});

// ---------------------------------------------------------------------------
// GET /apps/:workspaceId/:name/widget — the widget UI
//
// Serves an HTML shell that loads the patchwork compiler from esm.sh,
// fetches the widget source (inlined here), and mounts it with every
// namespace call proxied back to this app's tool endpoint with the viewer's
// token. Served same-origin under aprovan.com, so the shared auth token in
// localStorage (the @aprovan/ui client's storage key) just works.
// ---------------------------------------------------------------------------

appsRouter.get("/:workspaceId/:name/widget", async (c) => {
  try {
    const session = await resolveAppSession(c).catch(async (err) => {
      // The widget page itself is public chrome — auth happens client-side
      // with the viewer's stored token. Only 404 (no such app) is fatal here.
      if (err instanceof ServiceError && err.status === 404) throw err;
      const workspaceId = c.req.param("workspaceId")!;
      const name = c.req.param("name")!;
      const manifest = await readApp(workspaceId, name);
      if (!manifest) throw new ServiceError("Not found", 404);
      return { manifest, workspaceId, sub: "", role: "user" as const, ctx: { workspaceId, userId: "" } };
    });
    const { manifest, workspaceId } = session;
    if (!manifest.widgetPath) throw new ServiceError("This app has no widget UI", 404);

    const file = await getFsStore().read(workspaceId, manifest.widgetPath);
    if (!file) throw new ServiceError("Widget source missing", 404);

    const html = buildWidgetShell(manifest, workspaceId, file.content);
    return c.newResponse(html, 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    });
  } catch (err) {
    return errorResponse(c, err);
  }
});

function buildWidgetShell(manifest: AppManifest, workspaceId: string, source: string): string {
  const title = manifest.title ?? manifest.name;
  // The widget's injected namespaces are the allow-list's namespaces — the
  // widget can only reference what the app surface will actually serve.
  const services = [...new Set(manifest.allowedTools.map((tool) => tool.split(".")[0]!))];
  const config = {
    app: manifest.name,
    workspaceId,
    title,
    appBase: `/api/gateway/apps/${workspaceId}/${manifest.name}`,
    services,
    source,
  };
  // The shell compiles the widget in-browser with the published patchwork
  // compiler and binds each allow-listed namespace to the app tools endpoint.
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title.replace(/</g, "&lt;")}</title>
<style>
  body { margin: 0; font-family: system-ui, sans-serif; }
  #status { padding: 16px; color: #666; font-size: 14px; }
  #root { min-height: 100vh; }
</style>
</head>
<body>
<div id="status">Loading ${title.replace(/</g, "&lt;")}…</div>
<div id="root"></div>
<script>window.__APP_CONFIG__ = ${JSON.stringify(config).replace(/</g, "\\u003c")};</script>
<script type="module">
const cfg = window.__APP_CONFIG__;
const status = document.getElementById("status");

// The @aprovan/ui auth client mirrors the access token here for same-origin
// non-React callers — exactly this case.
const token =
  localStorage.getItem("aprovan.accessToken") ||
  localStorage.getItem("patchwork_access_token") ||
  "";

async function callTool(namespace, procedure, args) {
  const res = await fetch(cfg.appBase + "/tools/" + namespace + "/" + procedure, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "X-Aprovan-Authorization": "Bearer " + token } : {}),
    },
    body: JSON.stringify({ args }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || (namespace + "." + procedure + " failed"));
  return body.data;
}

try {
  // Version-pinned: esm.sh caches the unversioned "latest" redirect for
  // hours, so a bare spec can silently serve a stale compiler.
  const { createCompiler } = await import("https://esm.sh/@aprovan/patchwork-compiler@0.1.2");
  const compiler = await createCompiler({
    image: "@aprovan/patchwork-image-shadcn@0.1.2",
    cdnBaseUrl: "https://esm.sh",
    widgetCdnBaseUrl: "https://esm.sh",
    proxyUrl: cfg.appBase + "/tools",
    proxyFetch: (url, init) => fetch(url, {
      ...init,
      headers: {
        ...(init && init.headers ? init.headers : {}),
        ...(token ? { "X-Aprovan-Authorization": "Bearer " + token } : {}),
      },
    }),
  });
  const widget = await compiler.compile(cfg.source, {
    name: cfg.app,
    version: "1.0.0",
    platform: "browser",
    image: "@aprovan/patchwork-image-shadcn",
    services: cfg.services,
  }, { typescript: true });
  status.remove();
  await compiler.mount(widget, { target: document.getElementById("root"), mode: "iframe", sandbox: ["allow-scripts", "allow-same-origin"] });
} catch (err) {
  status.textContent = "Failed to load app: " + (err && err.message ? err.message : err) +
    (token ? "" : " — sign in at https://aprovan.com first so the app can reach its data.");
  console.error(err);
}
</script>
</body>
</html>`;
}

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

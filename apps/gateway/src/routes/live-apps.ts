/**
 * Live app pages — published apps as standalone websites:
 *
 *   GET /apps/:workspaceId/:name              — the app page (HTML shell)
 *   GET /apps/:workspaceId/:name/__project__  — the app's source project (JSON)
 *   GET /apps/:workspaceId/:name/*            — static files from the app
 *                                               folder, SPA-fallback to the page
 *
 * Mounted at the domain root (aprovan.com/apps/...) — CloudFront forwards
 * `apps/*` to the gateway alongside `api/*`. The shell carries no app
 * source; it fetches `__project__` with the viewer's token and compiles
 * `<dir>/index.tsx` in-browser, so **visibility is enforced server-side on
 * the project and file endpoints**, not on page chrome:
 *
 *   - "public": anyone can load the project/files, no Aprovan account.
 *   - "private" (default): a valid token passing the manifest role model.
 *
 * Tool/workflow calls always ride the authenticated app API surface
 * (/api/gateway/apps/...) regardless of visibility. Files under the app's
 * `data/` partition are never served.
 */

import { Hono } from "hono";
import { getAuthMode, readBearerToken, verifyAccessToken } from "../middleware/auth.js";
import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../services.js";
import { APP_ENTRY_FILE, callerRole, readApp, type AppManifest } from "../apps/store.js";

export const liveAppsRouter = new Hono();

interface LiveApp {
  manifest: AppManifest;
  workspaceId: string;
  dir: string;
}

type HonoCtx = {
  req: { header(name: string): string | undefined; param(name: string): string | undefined };
};

async function resolveLiveApp(c: HonoCtx): Promise<LiveApp> {
  const workspaceId = c.req.param("workspaceId");
  const name = c.req.param("name");
  if (!workspaceId || !name) throw new ServiceError("Not found", 404);
  const manifest = await readApp(workspaceId, name).catch(() => undefined);
  if (!manifest?.dir) throw new ServiceError("Not found", 404);
  return { manifest, workspaceId, dir: manifest.dir };
}

/**
 * Enforce the manifest's visibility for content requests. Public apps serve
 * to anyone; private apps require a valid token whose sub passes the role
 * model.
 */
async function requireViewer(c: HonoCtx, manifest: AppManifest): Promise<void> {
  if ((manifest.visibility ?? "private") === "public") return;
  let sub: string;
  if (getAuthMode() === "none") {
    sub = c.req.header("X-App-User") ?? "local";
  } else {
    const token = readBearerToken(c);
    if (!token) throw new ServiceError("Sign in to view this app", 401);
    try {
      sub = await verifyAccessToken(token);
    } catch {
      throw new ServiceError("Invalid or expired token", 401);
    }
  }
  if (!callerRole(manifest, sub)) {
    throw new ServiceError("You do not have access to this app", 403);
  }
}

function errorResponse(c: { json: (body: unknown, status?: number) => Response }, err: unknown): Response {
  if (err instanceof ServiceError) {
    return c.json({ error: err.message }, err.status as 400);
  }
  return c.json({ error: err instanceof Error ? err.message : "Internal error" }, 500);
}

/** Is this app-relative path servable? (Never the data partitions.) */
function servablePath(relative: string): boolean {
  if (!relative || relative.includes("..")) return false;
  return relative !== "data" && !relative.startsWith("data/");
}

// ---------------------------------------------------------------------------
// GET /:workspaceId/:name — the app page
// ---------------------------------------------------------------------------

liveAppsRouter.get("/:workspaceId/:name", async (c) => {
  try {
    const app = await resolveLiveApp(c);
    return c.newResponse(buildAppShell(app), 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    });
  } catch (err) {
    return errorResponse(c, err);
  }
});

// ---------------------------------------------------------------------------
// GET /:workspaceId/:name/__project__ — the source project (visibility-gated)
// ---------------------------------------------------------------------------

liveAppsRouter.get("/:workspaceId/:name/__project__", async (c) => {
  try {
    const app = await resolveLiveApp(c);
    await requireViewer(c, app.manifest);

    const store = getFsStore();
    const entries = await store.list(app.workspaceId, app.dir);
    const prefix = `${app.dir}/`;
    const files = (
      await Promise.all(
        entries
          .map((entry) => entry.path)
          .filter((path) => path.startsWith(prefix) && servablePath(path.slice(prefix.length)))
          .map(async (path) => {
            const file = await store.read(app.workspaceId, path);
            return file ? { path: path.slice(prefix.length), content: file.content } : null;
          }),
      )
    ).filter((f): f is { path: string; content: string } => f !== null);

    if (!files.some((f) => f.path === APP_ENTRY_FILE)) {
      throw new ServiceError(`App entrypoint missing: ${APP_ENTRY_FILE}`, 404);
    }
    return c.json({ entry: APP_ENTRY_FILE, files });
  } catch (err) {
    return errorResponse(c, err);
  }
});

// ---------------------------------------------------------------------------
// GET /:workspaceId/:name/* — static files, SPA fallback to the page
// ---------------------------------------------------------------------------

liveAppsRouter.get("/:workspaceId/:name/*", async (c) => {
  try {
    const app = await resolveLiveApp(c);
    const raw = c.req.param();
    const rest = (raw as Record<string, string>)["*"] ?? "";
    const relative = rest.replace(/^\/+|\/+$/g, "");

    if (relative && servablePath(relative)) {
      const file = await getFsStore().read(app.workspaceId, `${app.dir}/${relative}`);
      if (file) {
        await requireViewer(c, app.manifest);
        return c.newResponse(file.content, 200, {
          "Content-Type": file.mimeType ?? "application/octet-stream",
          "Cache-Control": "no-store",
        });
      }
    }
    // Client-side routes fall back to the app page.
    return c.newResponse(buildAppShell(app), 200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    });
  } catch (err) {
    return errorResponse(c, err);
  }
});

// ---------------------------------------------------------------------------
// Shell
// ---------------------------------------------------------------------------

function buildAppShell(app: LiveApp): string {
  const { manifest, workspaceId } = app;
  const title = manifest.title ?? manifest.name;
  // The app's injected namespaces are the allow-list's namespaces — the app
  // can only reference what the app surface will actually serve.
  const services = [...new Set(manifest.allowedTools.map((tool) => tool.split(".")[0]!))];
  const config = {
    app: manifest.name,
    workspaceId,
    title,
    appBase: `/api/gateway/apps/${workspaceId}/${manifest.name}`,
    liveBase: `/apps/${workspaceId}/${manifest.name}`,
    services,
  };
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
const authHeaders = token ? { "X-Aprovan-Authorization": "Bearer " + token } : {};

try {
  const projectRes = await fetch(cfg.liveBase + "/__project__", { headers: authHeaders });
  if (projectRes.status === 401 || projectRes.status === 403) {
    status.innerHTML = 'This app is private — <a href="https://aprovan.com">sign in at aprovan.com</a> and come back.';
    throw new Error("not authorized");
  }
  if (!projectRes.ok) throw new Error("Failed to load app source (" + projectRes.status + ")");
  const project = await projectRes.json();

  // Version-pinned: esm.sh caches the unversioned "latest" redirect for
  // hours, so a bare spec can silently serve a stale compiler.
  const { createCompiler } = await import("https://esm.sh/@aprovan/patchwork-compiler@0.1.3");
  const compiler = await createCompiler({
    image: "@aprovan/patchwork-image-shadcn@0.1.3",
    cdnBaseUrl: "https://esm.sh",
    widgetCdnBaseUrl: "https://esm.sh",
    proxyUrl: cfg.appBase + "/tools",
    proxyFetch: (url, init) => fetch(url, {
      ...init,
      headers: { ...(init && init.headers ? init.headers : {}), ...authHeaders },
    }),
  });
  const widget = await compiler.compile(
    {
      id: cfg.app,
      entry: project.entry,
      files: new Map(project.files.map((f) => [f.path, { path: f.path, content: f.content }])),
    },
    {
      name: cfg.app,
      version: "1.0.0",
      platform: "browser",
      image: "@aprovan/patchwork-image-shadcn",
      services: cfg.services,
    },
    { typescript: true },
  );
  status.remove();
  await compiler.mount(widget, { target: document.getElementById("root"), mode: "iframe", sandbox: ["allow-scripts", "allow-same-origin"] });
} catch (err) {
  if (String(err && err.message) !== "not authorized") {
    status.textContent = "Failed to load app: " + (err && err.message ? err.message : err);
  }
  console.error(err);
}
</script>
</body>
</html>`;
}

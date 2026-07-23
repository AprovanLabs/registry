/**
 * Live app pages — published apps as standalone websites:
 *
 *   GET /apps/:workspaceId/:name              — the app page (HTML shell)
 *   GET /apps/:workspaceId/:name/__project__  — the app's source project (JSON)
 *   GET /apps/:workspaceId/:name/*            — static files from the app's
 *                                               prefixes, SPA-fallback to the page
 *
 * Mounted at the domain root (aprovan.com/apps/...) — CloudFront forwards
 * `apps/*` to the gateway alongside `api/*`. The shell carries no app
 * source; it fetches `__project__` with the viewer's token and compiles the
 * manifest's declared `entry` in-browser (the payload names it, so the shell
 * never guesses), so **visibility is enforced server-side on the project and
 * file endpoints**, not on page chrome:
 *
 *   - "public": anyone can load the project/files, no Aprovan account.
 *   - "private" (default): a valid token passing the manifest role model.
 *
 * What may be served is decided by exactly one rule — the manifest's
 * declared path prefixes minus its data partition (appPathServable in
 * apps/store.js), the same rule that authorizes an app session's FS access.
 * Tool/workflow calls always ride the authenticated app API surface
 * (/api/gateway/apps/...) regardless of visibility.
 */

import { Hono } from "hono";
import { getAuthMode, readBearerToken, verifyAccessToken } from "../middleware/auth.js";
import { getFsStore } from "../fs-store.js";
import { ServiceError } from "../services.js";
import {
  appPathServable,
  callerRole,
  readApp,
  resolveAppPath,
  workspacePath,
  type AppManifest,
} from "../apps/store.js";

export const liveAppsRouter = new Hono();

interface LiveApp {
  manifest: AppManifest;
  workspaceId: string;
}

type HonoCtx = {
  req: { header(name: string): string | undefined; param(name: string): string | undefined };
};

async function resolveLiveApp(c: HonoCtx): Promise<LiveApp> {
  const workspaceId = c.req.param("workspaceId");
  const name = c.req.param("name");
  if (!workspaceId || !name) throw new ServiceError("Not found", 404);
  const manifest = await readApp(workspaceId, name).catch(() => undefined);
  if (!manifest?.entry) throw new ServiceError("Not found", 404);
  return { manifest, workspaceId };
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

/**
 * Workspace paths a URL path may address: the app's root (so URLs read like
 * a normal site) and the raw workspace path (so the workspace-keyed paths
 * `__project__` hands out fetch back). Traversal, `.services/**`, and
 * anything outside the app's servable prefixes drop out here.
 */
function servableTargets(manifest: AppManifest, relative: string): string[] {
  const targets: string[] = [];
  for (const resolve of [
    () => resolveAppPath(manifest, relative),
    () => workspacePath(relative),
  ]) {
    try {
      targets.push(resolve());
    } catch {
      // Not addressable — fall through to the SPA shell.
    }
  }
  return targets.filter((path) => appPathServable(manifest, path));
}

function errorResponse(c: { json: (body: unknown, status?: number) => Response }, err: unknown): Response {
  if (err instanceof ServiceError) {
    return c.json({ error: err.message }, err.status as 400);
  }
  return c.json({ error: err instanceof Error ? err.message : "Internal error" }, 500);
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

    // Every declared prefix ships, keyed by workspace path — so an app that
    // publishes `apps/liift4` plus `lib/charts` compiles as one project and
    // relative imports keep resolving.
    const { manifest, workspaceId } = app;
    const store = getFsStore();
    const listings = await Promise.all(
      manifest.paths.map((prefix) => store.list(workspaceId, prefix)),
    );
    const paths = [...new Set(listings.flat().map((entry) => entry.path))].filter((path) =>
      appPathServable(manifest, path),
    );
    const files = (
      await Promise.all(
        paths.map(async (path) => {
          const file = await store.read(workspaceId, path);
          return file ? { path, content: file.content } : null;
        }),
      )
    ).filter((f): f is { path: string; content: string } => f !== null);

    if (!files.some((f) => f.path === manifest.entry)) {
      throw new ServiceError(`App entrypoint missing: ${manifest.entry}`, 404);
    }
    return c.json({ entry: manifest.entry, paths: manifest.paths, files });
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

    for (const target of relative ? servableTargets(app.manifest, relative) : []) {
      const file = await getFsStore().read(app.workspaceId, target);
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
<script type="importmap">
{
  "imports": {
    "esbuild-wasm": "https://unpkg.com/esbuild-wasm@0.27.2/esm/browser.min.js"
  }
}
</script>
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
    // Any Aprovan account works when the app's role model allows it — the
    // caller does not need to be a member of the owning workspace. Sign-in
    // happens on the same origin, so when another tab stores the token this
    // page picks it up and reloads into the app.
    const returnTo = encodeURIComponent(location.pathname + location.search);
    status.innerHTML =
      'This app requires an Aprovan account — ' +
      '<a href="https://aprovan.com/?return=' + returnTo + '" target="_blank" rel="noopener">sign in</a>' +
      ' (this page will continue automatically).';
    window.addEventListener("storage", (event) => {
      if (event.key === "aprovan.accessToken" && event.newValue) location.reload();
    });
    throw new Error("not authorized");
  }
  if (!projectRes.ok) throw new Error("Failed to load app source (" + projectRes.status + ")");
  const project = await projectRes.json();

  // Version-pinned: esm.sh caches the unversioned "latest" redirect for
  // hours, so a bare spec can silently serve a stale compiler. esbuild-wasm
  // is external + import-mapped to its real ESM browser build — esm.sh's
  // UMD interop drops its named exports ("build is not a function").
  const { createCompiler } = await import("https://esm.sh/@aprovan/patchwork-compiler@0.1.4?external=esbuild-wasm");
  const compiler = await createCompiler({
    image: "@aprovan/patchwork-image-shadcn@0.1.4",
    cdnBaseUrl: "https://esm.sh",
    widgetCdnBaseUrl: "https://esm.sh",
    proxyUrl: cfg.appBase + "/tools",
    proxyFetch: (url, init) => fetch(url, {
      ...init,
      headers: { ...(init && init.headers ? init.headers : {}), ...authHeaders },
    }),
  });
  // The payload names its own entrypoint (the manifest's declared \`entry\`)
  // and keys every file by its workspace path, so relative imports resolve
  // across all of the app's published prefixes.
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
  // allow-scripts ONLY: adding allow-same-origin would let published app
  // code escape the iframe sandbox and read the viewer's stored token —
  // the service proxy runs in this parent shell, so the widget needs no
  // same-origin powers.
  await compiler.mount(widget, { target: document.getElementById("root"), mode: "iframe", sandbox: ["allow-scripts"] });
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

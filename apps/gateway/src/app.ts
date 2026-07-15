/**
 * Gateway Hono application factory.
 *
 * Exported separately from src/index.ts so the app can be imported in tests
 * without binding to a port.
 */

import { Hono } from "hono";
import { getAuthMode } from "./middleware/auth.js";
import { auditRouter } from "./routes/audit.js";
import { authRouter } from "./routes/auth.js";
import { artifactsRouter, promptsRouter } from "./routes/content.js";
import { credentialsRouter } from "./routes/credentials.js";
import { groupsRouter } from "./routes/groups.js";
import { invitesRouter } from "./routes/invites.js";
import { mcpRouter } from "./routes/mcp.js";
import { membersRouter } from "./routes/members.js";
import { oauthRouter } from "./routes/oauth.js";
import { permissionsRouter } from "./routes/permissions.js";
import { sessionRouter } from "./routes/session.js";
import { toolsRouter } from "./routes/tools.js";
import { wellKnownRouter } from "./routes/well-known.js";
import type { GatewayConfig } from "./contract.js";

function isLocalDevOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    return ["localhost", "127.0.0.1", "0.0.0.0"].includes(url.hostname);
  } catch {
    return false;
  }
}

export function createApp(): Hono {
  const app = new Hono();

  // ---------------------------------------------------------------------------
  // CORS middleware — allow local browser clients to call the gateway
  // ---------------------------------------------------------------------------
  app.use("/*", async (c, next) => {
    const origin = c.req.header("Origin");
    const requestHeaders = c.req.header("Access-Control-Request-Headers");

    if (origin) {
      const allowOrigin = isLocalDevOrigin(origin) ? origin : "*";
      const responseHeaders = new Headers();
      responseHeaders.set("Access-Control-Allow-Origin", allowOrigin);
      responseHeaders.set("Vary", "Origin");
      responseHeaders.set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
      responseHeaders.set(
        "Access-Control-Allow-Headers",
        requestHeaders ?? "Content-Type, Authorization, X-Aprovan-Authorization, X-Aprovan-Workspace",
      );
      responseHeaders.set("Access-Control-Expose-Headers", "Content-Type, Authorization");

      if (c.req.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: responseHeaders });
      }

      await next();
      const response = c.res;
      for (const [key, value] of responseHeaders.entries()) {
        response.headers.set(key, value);
      }
      return response;
    }

    await next();
  });

  // ---------------------------------------------------------------------------
  // Health check — unauthenticated
  // ---------------------------------------------------------------------------
  app.get("/health", (c) => c.json({ status: "ok", service: "gateway" }));
  app.get("/config", (c) => {
    const config: GatewayConfig = {
      mode: getAuthMode(),
      auth: {
        authority: process.env["COGNITO_AUTHORITY"],
        clientId: process.env["COGNITO_CLIENT_ID"],
        domain: process.env["COGNITO_DOMAIN"],
      },
      features: {
        ephemeralCredentials:
          process.env["GATEWAY_EPHEMERAL_CREDENTIALS"] !== "0",
        streaming: true,
      },
      version: process.env["npm_package_version"] ?? "0.1.0",
    };
    return c.json(config);
  });

  // ---------------------------------------------------------------------------
  // Routes
  // ---------------------------------------------------------------------------

  // Unauthenticated — must be mounted before requireAuth touches any prefix.
  app.route("/.well-known", wellKnownRouter);

  app.route("/auth", authRouter);
  app.route("/session", sessionRouter);
  app.route("/mcp", mcpRouter);
  app.route("/oauth", oauthRouter);
  app.route("/credentials", credentialsRouter);
  app.route("/groups", groupsRouter);
  app.route("/invites", invitesRouter);
  app.route("/members", membersRouter);
  app.route("/permissions", permissionsRouter);
  app.route("/tools", toolsRouter);
  app.route("/audit", auditRouter);
  app.route("/prompts", promptsRouter);
  app.route("/artifacts", artifactsRouter);

  // ---------------------------------------------------------------------------
  // 404 fallback
  // ---------------------------------------------------------------------------
  app.notFound((c) => c.json({ error: "Not found" }, 404));

  // ---------------------------------------------------------------------------
  // Error handler
  // ---------------------------------------------------------------------------
  app.onError((err, c) => {
    process.stderr.write(
      JSON.stringify({
        ts: new Date().toISOString(),
        type: "gateway_error",
        error: err instanceof Error ? err.message : String(err),
      }) + "\n",
    );
    return c.json({ error: "Internal server error" }, 500);
  });

  return app;
}

/**
 * Gateway Hono application factory.
 *
 * Exported separately from src/index.ts so the app can be imported in tests
 * without binding to a port.
 */

import { Hono } from "hono";
import { cors } from "hono/cors";
import { auditRouter } from "./routes/audit.js";
import { authRouter } from "./routes/auth.js";
import { credentialsRouter } from "./routes/credentials.js";
import { groupsRouter } from "./routes/groups.js";
import { mcpRouter } from "./routes/mcp.js";
import { oauthRouter } from "./routes/oauth.js";
import { permissionsRouter } from "./routes/permissions.js";
import { toolsRouter } from "./routes/tools.js";
import { wellKnownRouter } from "./routes/well-known.js";

export function createApp(): Hono {
  const app = new Hono();

  // ---------------------------------------------------------------------------
  // CORS middleware — allow requests from the registry frontend
  // ---------------------------------------------------------------------------
  app.use(
    "/*",
    cors({
      origin: "*", // In production, restrict to your registry domain
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
    }),
  );

  // ---------------------------------------------------------------------------
  // Health check — unauthenticated
  // ---------------------------------------------------------------------------
  app.get("/health", (c) => c.json({ status: "ok", service: "gateway" }));

  // ---------------------------------------------------------------------------
  // Routes
  // ---------------------------------------------------------------------------

  // Unauthenticated — must be mounted before requireAuth touches any prefix.
  app.route("/.well-known", wellKnownRouter);

  app.route("/auth", authRouter);
  app.route("/mcp", mcpRouter);
  app.route("/oauth", oauthRouter);
  app.route("/credentials", credentialsRouter);
  app.route("/groups", groupsRouter);
  app.route("/permissions", permissionsRouter);
  app.route("/tools", toolsRouter);
  app.route("/audit", auditRouter);

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

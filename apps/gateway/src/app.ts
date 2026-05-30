/**
 * Gateway Hono application factory.
 *
 * Exported separately from src/index.ts so the app can be imported in tests
 * without binding to a port.
 */

import { Hono } from "hono";
import { credentialsRouter } from "./routes/credentials.js";
import { permissionsRouter } from "./routes/permissions.js";
import { toolsRouter } from "./routes/tools.js";
import { authRouter } from "./routes/auth.js";

export function createApp(): Hono {
  const app = new Hono();

  // ---------------------------------------------------------------------------
  // Health check — unauthenticated
  // ---------------------------------------------------------------------------
  app.get("/health", (c) => c.json({ status: "ok", service: "gateway" }));

  // ---------------------------------------------------------------------------
  // Routes
  // ---------------------------------------------------------------------------
  app.route("/auth", authRouter);
  app.route("/credentials", credentialsRouter);
  app.route("/permissions", permissionsRouter);
  app.route("/tools", toolsRouter);

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

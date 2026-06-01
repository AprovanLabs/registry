/**
 * Gateway Hono application factory.
 *
 * Exported separately from src/index.ts so the app can be imported in tests
 * without binding to a port.
 */

import { Hono } from "hono";
import { cors } from "hono/cors";
import { credentialsRouter } from "./routes/credentials.js";
import { permissionsRouter } from "./routes/permissions.js";
import { toolsRouter } from "./routes/tools.js";
import { authRouter } from "./routes/auth.js";
import { auditRouter } from "./routes/audit.js";
import { apiKeysRouter } from "./routes/apikeys.js";

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
  app.route("/auth", authRouter);
  app.route("/credentials", credentialsRouter);
  app.route("/permissions", permissionsRouter);
  app.route("/tools", toolsRouter);
  app.route("/audit", auditRouter);
  app.route("/api-keys", apiKeysRouter);

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

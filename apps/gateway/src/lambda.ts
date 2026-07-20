/**
 * AWS Lambda entry point for the registry gateway.
 *
 * CloudFront forwards `https://aprovan.com/api/*` (and `/.well-known/*`) to
 * the function URL. REST routes are mounted under `/api/gateway`; the public
 * MCP endpoint lives at `/api/mcp` with its OAuth resource metadata under
 * `/.well-known`. Direct function URL calls can use the same prefixes.
 */

import { configureTelemetry } from "@utdk/common/telemetry";
import { Hono } from "hono";
import { streamHandle } from "hono/aws-lambda";
import { createApp } from "./app.js";
import { initAuth } from "./middleware/auth.js";
import { liveAppsRouter } from "./routes/live-apps.js";
import { mcpRouter } from "./routes/mcp.js";
import { wellKnownRouter } from "./routes/well-known.js";

let ready: Promise<void> | undefined;

async function ensureReady(): Promise<void> {
  if (!ready) {
    ready = (async () => {
      process.env["NODE_ENV"] ??= "production";
      process.env["STORE_BACKEND"] ??= "dynamodb";

      await configureTelemetry({
        enabled: false,
        exporter: "noop",
        tracerName: "@aprovan/gateway",
      });
      await initAuth();
    })();
  }
  await ready;
}

const gateway = createApp();
const app = new Hono();

// `streamHandle` owns the Lambda entry point (it wraps the handler in
// awslambda.streamifyResponse), so readiness is enforced as middleware
// instead of in a wrapper function.
app.use("*", async (_c, next) => {
  await ensureReady();
  await next();
});
app.route("/api/gateway", gateway);
// Public MCP endpoint (https://aprovan.com/api/mcp) + its RFC 9728 OAuth
// resource metadata, which clients resolve at the domain root.
app.route("/api/mcp", mcpRouter);
app.route("/.well-known", wellKnownRouter);
// Live app pages (https://aprovan.com/apps/<workspace>/<name>) — CloudFront
// forwards `apps/*` here alongside `api/*`.
app.route("/apps", liveAppsRouter);

// Streaming handler — requires InvokeMode.RESPONSE_STREAM on the function URL
// (see infra/src/gateway-lambda.ts). Buffered JSON responses still work; SSE
// responses from provider chat-completion operations are flushed as they
// arrive instead of being buffered.
export const handler: ReturnType<typeof streamHandle> = streamHandle(app);

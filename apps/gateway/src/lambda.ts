/**
 * AWS Lambda entry point for the registry gateway.
 *
 * CloudFront forwards `https://aprovan.com/api/gateway/*` to the function URL,
 * so routes are mounted under `/api/gateway`. Direct function URL calls can use
 * the same prefix.
 */

import { configureTelemetry } from "@utdk/common/telemetry";
import { Hono } from "hono";
import { streamHandle } from "hono/aws-lambda";
import { createApp } from "./app.js";
import { initAuth } from "./middleware/auth.js";

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

// Streaming handler — requires InvokeMode.RESPONSE_STREAM on the function URL
// (see infra/src/gateway-lambda.ts). Buffered JSON responses still work; SSE
// responses from provider chat-completion operations are flushed as they
// arrive instead of being buffered.
export const handler: ReturnType<typeof streamHandle> = streamHandle(app);

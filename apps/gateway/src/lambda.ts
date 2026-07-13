/**
 * AWS Lambda entry point for the registry gateway.
 *
 * CloudFront forwards `https://aprovan.com/api/gateway/*` to the function URL,
 * so routes are mounted under `/api/gateway`. Direct function URL calls can use
 * the same prefix.
 */

import { configureTelemetry } from "@utdk/common/telemetry";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
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
app.route("/api/gateway", gateway);

const honoHandler = handle(app);

export async function handler(
  event: Parameters<typeof honoHandler>[0],
  context: Parameters<typeof honoHandler>[1],
): Promise<ReturnType<typeof honoHandler>> {
  await ensureReady();
  return honoHandler(event, context);
}

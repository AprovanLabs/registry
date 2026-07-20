/**
 * Gateway entry point.
 *
 * Starts the Hono HTTP server using @hono/node-server.
 *
 * Environment variables:
 *   APROVAN_ENV                  — Load shared Cognito/DynamoDB config from
 *                                  `/aprovan/<env>/env` in SSM (default: `prd`).
 *                                  Set to `off` to skip and use only `.env`.
 *   GATEWAY_PORT                 — HTTP port (default: 4000)
 *   OIDC_ISSUER / OIDCAUDIENCE   — Cognito issuer + app client id for JWT verify
 *                                  (populated from SSM when APROVAN_ENV is set)
 *   GATEWAY_AWS_REGION           — AWS region for Cognito (falls back to AWS_REGION)
 *   GATEWAY_RATE_LIMIT_RPS       — Requests per second per caller+provider (default: 10)
 *   GATEWAY_RATE_LIMIT_BURST     — Burst capacity (default: 20)
 *   OTEL_EXPORTER_OTLP_ENDPOINT  — OTLP endpoint for telemetry (optional)
 *   COGNITO_USER_POOL_ID         — Cognito user pool for DCR client provisioning
 *   COGNITO_DOMAIN               — Cognito hosted UI domain (informational)
 */

import { loadAprovanEnv, dotenv } from "@aprovan/node";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { configureTelemetry } from "@utdk/common/telemetry";
import { createApp } from "./app.js";
import { initAuth, getAuthMode } from "./middleware/auth.js";

dotenv.config();

// Load `/aprovan/<env>/env` from SSM (Cognito + DynamoDB table names). Local
// `.env` / process env wins (`overwrite: false`) so ports and overrides stick.
const aprovanEnv = process.env["APROVAN_ENV"] ?? "prd";
if (aprovanEnv !== "off" && aprovanEnv !== "false") {
  process.env["AWS_REGION"] ??= "us-east-2";
  process.env["AWS_DEFAULT_REGION"] ??= process.env["AWS_REGION"];
  try {
    await loadAprovanEnv(aprovanEnv, { overwrite: false });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Failed to load /aprovan/${aprovanEnv}/env from SSM (${process.env["AWS_REGION"]}): ${message}\n` +
        "Set APROVAN_ENV=off to skip, or configure AWS credentials (e.g. AWS_PROFILE=aprovan).",
    );
  }
}

const PORT = Number(process.env["GATEWAY_PORT"] ?? 4000);

// ---------------------------------------------------------------------------
// Telemetry configuration
// ---------------------------------------------------------------------------

const telemetryExporter = process.env["OTEL_EXPORTER_OTLP_ENDPOINT"]
  ? "otlp"
  : process.env["GATEWAY_TELEMETRY_EXPORTER"] === "console"
    ? "console"
    : "noop";

await configureTelemetry({
  enabled: telemetryExporter !== "noop",
  exporter: telemetryExporter,
  tracerName: "@aprovan/gateway",
});

// ---------------------------------------------------------------------------
// Hydrate the Cognito JWKS so the first request does not pay the latency.
// Non-fatal: verification falls back to a lazy fetch on failure.
// ---------------------------------------------------------------------------

await initAuth();

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------

const app = createApp();

// Live app pages, same shape as prod (aprovan.com/apps/...). Registered on
// the outer app first so GET page requests win; API calls fall through to
// the inner /apps router.
const { liveAppsRouter } = await import("./routes/live-apps.js");
const outer = new Hono();
outer.route("/apps", liveAppsRouter);
outer.route("/", app);

serve({ fetch: outer.fetch, port: PORT }, (info) => {
  process.stderr.write(
    `[gateway] Listening on http://localhost:${info.port} (auth=${getAuthMode()})\n`,
  );
});

// Long-lived server: drive cron workflows with a local minute tick. (On
// Lambda, EventBridge Scheduler POSTs /hooks/cron/tick instead.)
const { startLocalCronLoop } = await import("./routes/hooks.js");
startLocalCronLoop();

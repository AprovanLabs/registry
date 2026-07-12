/**
 * Gateway entry point.
 *
 * Starts the Hono HTTP server using @hono/node-server.
 *
 * Environment variables:
 *   GATEWAY_PORT                 — HTTP port (default: 4000)
 *   COGNITO_USER_POOL_ID  — Cognito user pool id for access-token verification (required)
 *   COGNITO_CLIENT_ID    — Cognito app client id for access-token verification (required)
 *   GATEWAY_AWS_REGION           — AWS region for Cognito (falls back to AWS_REGION, then us-east-1)
 *   GATEWAY_RATE_LIMIT_RPS       — Requests per second per caller+provider (default: 10)
 *   GATEWAY_RATE_LIMIT_BURST     — Burst capacity (default: 20)
 *   OTEL_EXPORTER_OTLP_ENDPOINT  — OTLP endpoint for telemetry (optional)
 *   COGNITO_USER_POOL_ID         — Cognito user pool for DCR client provisioning (required for /oauth/register)
 *   COGNITO_REGION               — AWS region for Cognito (falls back to AWS_REGION, then us-east-1)
 *   COGNITO_DOMAIN              — Cognito hosted UI domain, e.g. auth.example.com (informational)
 */

import { serve } from "@hono/node-server";
import { configureTelemetry } from "@utdk/common/telemetry";
import { createApp } from "./app.js";
import { initAuth } from "./middleware/auth.js";

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

serve({ fetch: app.fetch, port: PORT }, (info) => {
  process.stderr.write(`[gateway] Listening on http://localhost:${info.port}\n`);
});

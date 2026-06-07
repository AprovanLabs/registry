/**
 * Gateway entry point.
 *
 * Starts the Hono HTTP server using @hono/node-server.
 *
 * Environment variables:
 *   GATEWAY_PORT              — HTTP port (default: 4000)
 *   GATEWAY_WORKSPACE_KEY     — AES-256 encryption key for credentials (required in production)
 *   GATEWAY_JWT_SECRET        — HS256 signing key for JWTs (required in production)
 *   GATEWAY_ADMIN_SECRET      — Shared secret for token issuance (required in production)
 *   GATEWAY_STORE_PATH        — Path for persistent credential storage (optional)
 *   GATEWAY_PERMISSIONS_PATH  — Path for persistent permission storage (optional)
 *   GATEWAY_RATE_LIMIT_RPS    — Requests per second per caller+provider (default: 10)
 *   GATEWAY_RATE_LIMIT_BURST  — Burst capacity (default: 20)
 *   OTEL_EXPORTER_OTLP_ENDPOINT — OTLP endpoint for telemetry (optional)
 */

import { serve } from "@hono/node-server";
import { configureTelemetry } from "@utdk/common/telemetry";
import { createApp } from "./app.js";

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
// Warn if running with insecure defaults
// ---------------------------------------------------------------------------

if (!process.env["GATEWAY_WORKSPACE_KEY"]) {
  process.stderr.write("[gateway] WARNING: GATEWAY_WORKSPACE_KEY not set; using insecure dev key\n");
}
if (!process.env["GATEWAY_JWT_SECRET"]) {
  process.stderr.write("[gateway] WARNING: GATEWAY_JWT_SECRET not set; using insecure dev key\n");
}
if (!process.env["GATEWAY_ADMIN_SECRET"]) {
  process.stderr.write("[gateway] WARNING: GATEWAY_ADMIN_SECRET not set; using insecure dev secret\n");
}

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------

const app = createApp();

serve({ fetch: app.fetch, port: PORT }, (info) => {
  process.stderr.write(`[gateway] Listening on http://localhost:${info.port}\n`);
});

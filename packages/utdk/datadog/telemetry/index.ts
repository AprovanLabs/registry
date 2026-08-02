/**
 * `utdk/datadog/telemetry` — the Datadog adapter for `@utdk/telemetry`.
 *
 * Handwritten (the `github/vcs` pattern): split an OTLP three-signal export
 * onto Datadog's OTLP intake (`/v1/traces`, `/v1/logs`, `/v1/metrics`) with
 * zero shape translation. Auth is `DD-API-KEY` from the injected
 * bearer_token credential.
 */

import {
  secretFromHeaders,
  telemetryToolEntries,
  TelemetryError,
  validateExportArgs,
  type TelemetryClient,
  type TelemetryClientOptions,
  type TelemetryExportArgs,
  type TelemetryExportResult,
} from "@utdk/telemetry";
import { createLazyClient } from "../../client.js";

export type { TelemetryClient, TelemetryExportArgs, TelemetryExportResult } from "@utdk/telemetry";

const DEFAULT_BASE_URL = "https://otlp.datadoghq.com";

function countSpans(args: TelemetryExportArgs): number {
  let n = 0;
  for (const rs of args.resourceSpans ?? []) {
    for (const scope of rs.scopeSpans) n += scope.spans.length;
  }
  return n;
}

function countLogs(args: TelemetryExportArgs): number {
  let n = 0;
  for (const rl of args.resourceLogs ?? []) {
    for (const scope of rl.scopeLogs) n += scope.logRecords.length;
  }
  return n;
}

function countMetricPoints(args: TelemetryExportArgs): number {
  let n = 0;
  for (const rm of args.resourceMetrics ?? []) {
    for (const scope of rm.scopeMetrics) {
      for (const metric of scope.metrics) {
        n +=
          (metric.gauge?.dataPoints.length ?? 0) +
          (metric.sum?.dataPoints.length ?? 0) +
          (metric.histogram?.dataPoints.length ?? 0);
      }
    }
  }
  return n;
}

interface SignalOutcome {
  accepted: number;
  rejected: number;
  message?: string;
}

async function postSignal(
  fetchImpl: typeof fetch,
  url: string,
  apiKey: string,
  body: unknown,
  total: number,
  rejectedKey: "rejectedSpans" | "rejectedLogRecords" | "rejectedDataPoints",
): Promise<SignalOutcome> {
  const response = await fetchImpl(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "DD-API-KEY": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let detail = `Datadog OTLP responded ${response.status}`;
    try {
      const parsed = (await response.json()) as { message?: string };
      if (parsed.message) detail = `Datadog: ${parsed.message}`;
    } catch {
      // Non-JSON error body; status alone.
    }
    throw new TelemetryError(detail, response.status);
  }

  let rejected = 0;
  let message: string | undefined;
  try {
    const parsed = (await response.json()) as {
      partialSuccess?: { errorMessage?: string } & Partial<Record<typeof rejectedKey, number>>;
    };
    const partial = parsed.partialSuccess;
    if (partial) {
      rejected = Number(partial[rejectedKey] ?? 0);
      if (typeof partial.errorMessage === "string" && partial.errorMessage) {
        message = partial.errorMessage;
      }
    }
  } catch {
    // Empty / non-JSON success body ⇒ full accept.
  }

  return {
    accepted: Math.max(0, total - rejected),
    rejected,
    ...(message ? { message } : {}),
  };
}

export function createDatadogTelemetryClient(
  options: TelemetryClientOptions = {},
): TelemetryClient {
  const fetchImpl = options.fetchImpl ?? fetch;
  const baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/u, "");

  return {
    async export(args) {
      const apiKey = secretFromHeaders(options.headers, "datadog", "API key");
      validateExportArgs(args);

      const spanTotal = countSpans(args);
      const logTotal = countLogs(args);
      const metricTotal = countMetricPoints(args);

      const posts: Array<Promise<{ signal: "spans" | "logs" | "metrics"; outcome: SignalOutcome }>> =
        [];

      if ((args.resourceSpans?.length ?? 0) > 0) {
        posts.push(
          postSignal(
            fetchImpl,
            `${baseUrl}/v1/traces`,
            apiKey,
            { resourceSpans: args.resourceSpans },
            spanTotal,
            "rejectedSpans",
          ).then((outcome) => ({ signal: "spans" as const, outcome })),
        );
      }
      if ((args.resourceLogs?.length ?? 0) > 0) {
        posts.push(
          postSignal(
            fetchImpl,
            `${baseUrl}/v1/logs`,
            apiKey,
            { resourceLogs: args.resourceLogs },
            logTotal,
            "rejectedLogRecords",
          ).then((outcome) => ({ signal: "logs" as const, outcome })),
        );
      }
      if ((args.resourceMetrics?.length ?? 0) > 0) {
        posts.push(
          postSignal(
            fetchImpl,
            `${baseUrl}/v1/metrics`,
            apiKey,
            { resourceMetrics: args.resourceMetrics },
            metricTotal,
            "rejectedDataPoints",
          ).then((outcome) => ({ signal: "metrics" as const, outcome })),
        );
      }

      const results = await Promise.all(posts);
      const accepted = { spans: 0, logs: 0, metrics: 0 };
      const rejected = { spans: 0, logs: 0, metrics: 0 };
      const messages: string[] = [];

      for (const { signal, outcome } of results) {
        accepted[signal] = outcome.accepted;
        rejected[signal] = outcome.rejected;
        if (outcome.message) messages.push(outcome.message);
      }

      const result: TelemetryExportResult = { accepted };
      const rejectedTotal = rejected.spans + rejected.logs + rejected.metrics;
      if (rejectedTotal > 0) {
        result.rejected = {
          ...rejected,
          message: messages.join("; ") || `rejected ${rejectedTotal} signal item(s)`,
        };
      }
      return result;
    },
  };
}

const defaultClient = createLazyClient(async () => createDatadogTelemetryClient());

export default defaultClient;

/** Discovery entries for GET /tools. */
export const tools = telemetryToolEntries("datadog");

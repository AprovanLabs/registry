/**
 * `@utdk/telemetry/sdk` — zero-dependency helpers over the OTLP shapes.
 *
 * Only Web-platform APIs (`crypto.getRandomValues`, `Date.now`,
 * `TextEncoder` via the contract validator). No `@opentelemetry/*`.
 */

import {
  validateExportArgs,
  withAttribution,
  type OtlpKeyValue,
  type OtlpLogRecord,
  type OtlpMetric,
  type OtlpSpan,
  type TelemetryExportArgs,
  type TelemetryExportResult,
} from "../index.js";

/** Default explicit histogram bounds (ms-oriented). */
export const DEFAULT_HISTOGRAM_BOUNDS = [
  5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000,
] as const;

const SEVERITY: Record<
  "debug" | "info" | "warn" | "error",
  { number: number; text: string }
> = {
  debug: { number: 5, text: "DEBUG" },
  info: { number: 9, text: "INFO" },
  warn: { number: 13, text: "WARN" },
  error: { number: 17, text: "ERROR" },
};

function toHex(bytes: Uint8Array): string {
  let out = "";
  for (const byte of bytes) {
    out += byte.toString(16).padStart(2, "0");
  }
  return out;
}

/** 32-char lowercase hex trace id (16 bytes). */
export function newTraceId(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return toHex(bytes);
}

/** 16-char lowercase hex span id (8 bytes). */
export function newSpanId(): string {
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  return toHex(bytes);
}

/** Current time as an OTLP Unix-nanosecond string. */
export function nowUnixNano(): string {
  return `${BigInt(Date.now()) * 1_000_000n}`;
}

function attrsFromRecord(
  attributes?: Record<string, string | number | boolean>,
): OtlpKeyValue[] | undefined {
  if (!attributes) return undefined;
  const out: OtlpKeyValue[] = [];
  for (const [key, value] of Object.entries(attributes)) {
    if (typeof value === "string") out.push({ key, value: { stringValue: value } });
    else if (typeof value === "boolean") out.push({ key, value: { boolValue: value } });
    else if (Number.isInteger(value)) out.push({ key, value: { intValue: String(value) } });
    else out.push({ key, value: { doubleValue: value } });
  }
  return out.length > 0 ? out : undefined;
}

function bucketValue(value: number, bounds: readonly number[]): { counts: string[]; sum: number } {
  const counts = new Array<number>(bounds.length + 1).fill(0);
  let placed = false;
  for (let i = 0; i < bounds.length; i++) {
    if (value <= bounds[i]!) {
      counts[i]! += 1;
      placed = true;
      break;
    }
  }
  if (!placed) counts[bounds.length]! += 1;
  return { counts: counts.map(String), sum: value };
}

export interface TelemetrySdkOptions {
  /** The one seam: where batches go (native or a vendor instance's export). */
  export: (args: TelemetryExportArgs) => Promise<TelemetryExportResult>;
  attribution?: { tenant?: string; principal?: string; source?: string };
  resourceAttributes?: OtlpKeyValue[];
  scope?: { name: string; version?: string };
  /** Auto-flush threshold (events) and interval (ms); flush() always available. */
  maxBatch?: number;
  /** Default 5000; 0 = manual flush only. */
  flushIntervalMs?: number;
  onError?: (err: unknown) => void;
  /** Override default histogram explicit bounds. */
  histogramBounds?: number[];
}

export interface SpanHandle {
  readonly traceId: string;
  readonly spanId: string;
  setAttribute(key: string, value: string | number | boolean): void;
  addEvent(name: string, attributes?: Record<string, string | number | boolean>): void;
  end(status?: { error?: string }): void;
}

export interface TelemetrySdk {
  log(
    level: "debug" | "info" | "warn" | "error",
    message: string,
    attributes?: Record<string, string | number | boolean>,
  ): void;
  counter(name: string, value?: number, attributes?: Record<string, string>): void;
  gauge(name: string, value: number, attributes?: Record<string, string>): void;
  histogram(name: string, value: number, attributes?: Record<string, string>): void;
  startSpan(name: string, options?: { parent?: SpanHandle; kind?: 1 | 2 | 3 | 4 | 5 }): SpanHandle;
  withSpan<T>(name: string, fn: (span: SpanHandle) => Promise<T> | T): Promise<T>;
  flush(): Promise<TelemetryExportResult | undefined>;
}

type Pending =
  | { kind: "span"; span: OtlpSpan }
  | { kind: "log"; record: OtlpLogRecord }
  | { kind: "metric"; metric: OtlpMetric };

export function createTelemetry(options: TelemetrySdkOptions): TelemetrySdk {
  const maxBatch = options.maxBatch ?? 100;
  const flushIntervalMs = options.flushIntervalMs ?? 5000;
  const histogramBounds = options.histogramBounds ?? [...DEFAULT_HISTOGRAM_BOUNDS];
  const scope = options.scope ?? { name: "@utdk/telemetry/sdk" };
  const buffer: Pending[] = [];
  const activeSpans: SpanHandle[] = [];
  let timer: ReturnType<typeof setInterval> | undefined;
  let flushing: Promise<TelemetryExportResult | undefined> | undefined;

  const scheduleFlush = (): void => {
    if (buffer.length >= maxBatch) {
      void safeFlush().catch((err) => options.onError?.(err));
    }
  };

  const safeFlush = (): Promise<TelemetryExportResult | undefined> => {
    flushing ??= doFlush().finally(() => {
      flushing = undefined;
    });
    return flushing;
  };

  const doFlush = async (): Promise<TelemetryExportResult | undefined> => {
    if (buffer.length === 0) return undefined;
    const batch = buffer.splice(0, buffer.length);
    const spans = batch.filter((item): item is Pending & { kind: "span" } => item.kind === "span");
    const logs = batch.filter((item): item is Pending & { kind: "log" } => item.kind === "log");
    const metrics = batch.filter(
      (item): item is Pending & { kind: "metric" } => item.kind === "metric",
    );

    let resource =
      options.resourceAttributes !== undefined
        ? { attributes: [...options.resourceAttributes] }
        : undefined;
    if (options.attribution) {
      resource = withAttribution(resource, options.attribution);
    }

    const args: TelemetryExportArgs = {};
    if (spans.length > 0) {
      args.resourceSpans = [
        {
          ...(resource ? { resource } : {}),
          scopeSpans: [{ scope, spans: spans.map((item) => item.span) }],
        },
      ];
    }
    if (logs.length > 0) {
      args.resourceLogs = [
        {
          ...(resource ? { resource } : {}),
          scopeLogs: [{ scope, logRecords: logs.map((item) => item.record) }],
        },
      ];
    }
    if (metrics.length > 0) {
      args.resourceMetrics = [
        {
          ...(resource ? { resource } : {}),
          scopeMetrics: [{ scope, metrics: metrics.map((item) => item.metric) }],
        },
      ];
    }

    validateExportArgs(args);
    return options.export(args);
  };

  const push = (item: Pending): void => {
    buffer.push(item);
    scheduleFlush();
  };

  if (flushIntervalMs > 0) {
    timer = setInterval(() => {
      void safeFlush().catch((err) => options.onError?.(err));
    }, flushIntervalMs);
    // Avoid keeping the process alive solely for the flush timer in Node.
    if (typeof timer === "object" && timer !== null && "unref" in timer) {
      (timer as { unref: () => void }).unref();
    }
  }

  const startSpan = (
    name: string,
    spanOptions?: { parent?: SpanHandle; kind?: 1 | 2 | 3 | 4 | 5 },
  ): SpanHandle => {
    const parent = spanOptions?.parent ?? activeSpans[activeSpans.length - 1];
    const traceId = parent?.traceId ?? newTraceId();
    const spanId = newSpanId();
    const startTimeUnixNano = nowUnixNano();
    const attributes: OtlpKeyValue[] = [];
    const events: NonNullable<OtlpSpan["events"]> = [];
    let ended = false;

    const handle: SpanHandle = {
      traceId,
      spanId,
      setAttribute(key, value) {
        if (ended) return;
        const next = attrsFromRecord({ [key]: value });
        if (next) attributes.push(...next);
      },
      addEvent(eventName, eventAttrs) {
        if (ended) return;
        events.push({
          timeUnixNano: nowUnixNano(),
          name: eventName,
          ...(attrsFromRecord(eventAttrs) ? { attributes: attrsFromRecord(eventAttrs) } : {}),
        });
      },
      end(status) {
        if (ended) return;
        ended = true;
        const span: OtlpSpan = {
          traceId,
          spanId,
          ...(parent ? { parentSpanId: parent.spanId } : {}),
          name,
          ...(spanOptions?.kind !== undefined ? { kind: spanOptions.kind } : {}),
          startTimeUnixNano,
          endTimeUnixNano: nowUnixNano(),
          ...(attributes.length > 0 ? { attributes } : {}),
          ...(events.length > 0 ? { events } : {}),
          ...(status?.error !== undefined
            ? { status: { code: 2, message: status.error } }
            : { status: { code: 1 } }),
        };
        push({ kind: "span", span });
      },
    };
    return handle;
  };

  return {
    log(level, message, attributes) {
      const severity = SEVERITY[level];
      const active = activeSpans[activeSpans.length - 1];
      const record: OtlpLogRecord = {
        timeUnixNano: nowUnixNano(),
        severityNumber: severity.number,
        severityText: severity.text,
        body: { stringValue: message },
        ...(attrsFromRecord(attributes) ? { attributes: attrsFromRecord(attributes) } : {}),
        ...(active ? { traceId: active.traceId, spanId: active.spanId } : {}),
      };
      push({ kind: "log", record });
    },

    counter(name, value = 1, attributes) {
      const metric: OtlpMetric = {
        name,
        sum: {
          aggregationTemporality: 1,
          isMonotonic: true,
          dataPoints: [
            {
              timeUnixNano: nowUnixNano(),
              asDouble: value,
              ...(attrsFromRecord(attributes) ? { attributes: attrsFromRecord(attributes) } : {}),
            },
          ],
        },
      };
      push({ kind: "metric", metric });
    },

    gauge(name, value, attributes) {
      const metric: OtlpMetric = {
        name,
        gauge: {
          dataPoints: [
            {
              timeUnixNano: nowUnixNano(),
              asDouble: value,
              ...(attrsFromRecord(attributes) ? { attributes: attrsFromRecord(attributes) } : {}),
            },
          ],
        },
      };
      push({ kind: "metric", metric });
    },

    histogram(name, value, attributes) {
      const { counts, sum } = bucketValue(value, histogramBounds);
      const metric: OtlpMetric = {
        name,
        histogram: {
          aggregationTemporality: 1,
          dataPoints: [
            {
              timeUnixNano: nowUnixNano(),
              count: "1",
              sum,
              bucketCounts: counts,
              explicitBounds: [...histogramBounds],
              ...(attrsFromRecord(attributes) ? { attributes: attrsFromRecord(attributes) } : {}),
            },
          ],
        },
      };
      push({ kind: "metric", metric });
    },

    startSpan,

    async withSpan(name, fn) {
      const span = startSpan(name);
      activeSpans.push(span);
      try {
        const result = await fn(span);
        span.end();
        return result;
      } catch (error) {
        span.end({
          error: error instanceof Error ? error.message : String(error),
        });
        throw error;
      } finally {
        activeSpans.pop();
      }
    },

    async flush() {
      try {
        return await safeFlush();
      } catch (error) {
        options.onError?.(error);
        return undefined;
      }
    },
  };
}

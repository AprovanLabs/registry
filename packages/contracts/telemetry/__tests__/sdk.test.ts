import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ATTR_SOURCE,
  ATTR_TENANT,
  validateExportArgs,
  type TelemetryExportArgs,
  type TelemetryExportResult,
} from "../index.js";
import { createTelemetry, newSpanId, newTraceId, nowUnixNano } from "../sdk/index.js";

afterEach(() => {
  vi.useRealTimers();
});

describe("id / time helpers", () => {
  it("emits correctly sized lowercase hex ids and nano strings", () => {
    expect(newTraceId()).toMatch(/^[0-9a-f]{32}$/u);
    expect(newSpanId()).toMatch(/^[0-9a-f]{16}$/u);
    expect(nowUnixNano()).toMatch(/^\d+$/u);
  });
});

describe("createTelemetry", () => {
  it("helper output round-trips validation with all three signals", async () => {
    let captured: TelemetryExportArgs | undefined;
    const sdk = createTelemetry({
      flushIntervalMs: 0,
      export: async (args) => {
        captured = args;
        validateExportArgs(args);
        return { accepted: { spans: 1, logs: 1, metrics: 3 } };
      },
    });

    sdk.log("info", "hello");
    sdk.counter("requests", 1);
    sdk.gauge("depth", 4);
    sdk.histogram("latency", 42);
    await sdk.withSpan("work", async () => "ok");
    const result = await sdk.flush();

    expect(result?.accepted.spans).toBe(1);
    expect(captured?.resourceSpans?.length).toBe(1);
    expect(captured?.resourceLogs?.length).toBe(1);
    expect(captured?.resourceMetrics?.length).toBe(1);
    expect(() => validateExportArgs(captured!)).not.toThrow();
  });

  it("correlates logs opened inside withSpan", async () => {
    let captured: TelemetryExportArgs | undefined;
    const sdk = createTelemetry({
      flushIntervalMs: 0,
      export: async (args) => {
        captured = args;
        return { accepted: { spans: 1, logs: 1, metrics: 0 } };
      },
    });

    await sdk.withSpan("outer", async (span) => {
      sdk.log("info", "inside");
      expect(span.traceId).toMatch(/^[0-9a-f]{32}$/u);
    });
    await sdk.flush();

    const record = captured!.resourceLogs![0]!.scopeLogs[0]!.logRecords[0]!;
    const span = captured!.resourceSpans![0]!.scopeSpans[0]!.spans[0]!;
    expect(record.traceId).toBe(span.traceId);
    expect(record.spanId).toBe(span.spanId);
  });

  it("folds attribution into aprovan.* resource attributes", async () => {
    let captured: TelemetryExportArgs | undefined;
    const sdk = createTelemetry({
      flushIntervalMs: 0,
      attribution: { tenant: "w1", source: "workflow" },
      export: async (args) => {
        captured = args;
        return { accepted: { spans: 0, logs: 1, metrics: 0 } };
      },
    });
    sdk.log("info", "attributed");
    await sdk.flush();

    const attrs = captured!.resourceLogs![0]!.resource!.attributes;
    expect(attrs).toEqual(
      expect.arrayContaining([
        { key: ATTR_TENANT, value: { stringValue: "w1" } },
        { key: ATTR_SOURCE, value: { stringValue: "workflow" } },
      ]),
    );
  });

  it("routes export failures to onError without throwing into callers", async () => {
    const errors: unknown[] = [];
    const sdk = createTelemetry({
      flushIntervalMs: 0,
      maxBatch: 1,
      onError: (err) => errors.push(err),
      export: async () => {
        throw new Error("boom");
      },
    });

    expect(() => sdk.log("error", "will fail on flush")).not.toThrow();
    // maxBatch: 1 triggers auto-flush; give the microtask a turn
    await vi.waitFor(() => expect(errors.length).toBeGreaterThan(0));

    expect(() => sdk.counter("still.accepts")).not.toThrow();
    await sdk.flush();
    expect(errors.length).toBeGreaterThanOrEqual(1);
  });

  it("flush drains the buffer and returns the export result", async () => {
    const results: TelemetryExportResult[] = [];
    const sdk = createTelemetry({
      flushIntervalMs: 0,
      export: async () => {
        const result = { accepted: { spans: 0, logs: 1, metrics: 0 } };
        results.push(result);
        return result;
      },
    });
    sdk.log("info", "one");
    const first = await sdk.flush();
    expect(first).toEqual({ accepted: { spans: 0, logs: 1, metrics: 0 } });
    expect(await sdk.flush()).toBeUndefined();
    expect(results).toHaveLength(1);
  });

  it("disables the timer at flushIntervalMs: 0", async () => {
    vi.useFakeTimers();
    let exports = 0;
    const sdk = createTelemetry({
      flushIntervalMs: 0,
      export: async () => {
        exports += 1;
        return { accepted: { spans: 0, logs: 1, metrics: 0 } };
      },
    });
    sdk.log("info", "buffered");
    await vi.advanceTimersByTimeAsync(60_000);
    expect(exports).toBe(0);
    await sdk.flush();
    expect(exports).toBe(1);
  });
});

import { describe, expect, it } from "vitest";
import {
  ATTR_PRINCIPAL,
  ATTR_SOURCE,
  ATTR_TENANT,
  MAX_EXPORT_BYTES,
  TelemetryError,
  telemetryToolEntries,
  validateExportArgs,
  withAttribution,
  secretFromHeaders,
} from "../index.js";
import type { OtlpResource, TelemetryExportArgs } from "../index.js";

const statusOf = (fn: () => void): number => {
  try {
    fn();
  } catch (error) {
    if (error instanceof TelemetryError) return error.status;
    throw error;
  }
  throw new Error("expected a TelemetryError");
};

const messageOf = (fn: () => void): string => {
  try {
    fn();
  } catch (error) {
    if (error instanceof TelemetryError) return error.message;
    throw error;
  }
  throw new Error("expected a TelemetryError");
};

/**
 * A real OTLP/HTTP JSON sample payload (the shape `POST /v1/traces` +
 * `/v1/logs` accept): hex ids, stringified unix nanos, attribute key/values.
 * The contract accepts it unmodified (spec scenario: OTLP-shaped).
 */
const otlpSample: TelemetryExportArgs = {
  resourceSpans: [
    {
      resource: {
        attributes: [
          { key: "service.name", value: { stringValue: "checkout" } },
          { key: "process.pid", value: { intValue: "4221" } },
        ],
      },
      scopeSpans: [
        {
          scope: { name: "example.instrumentation", version: "1.0.0" },
          spans: [
            {
              traceId: "5b8efff798038103d269b633813fc60c",
              spanId: "eee19b7ec3c1b174",
              parentSpanId: "eee19b7ec3c1b173",
              name: "HTTP GET /cart",
              kind: 2,
              startTimeUnixNano: "1544712660000000000",
              endTimeUnixNano: "1544712661000000000",
              attributes: [
                { key: "http.method", value: { stringValue: "GET" } },
                { key: "http.status_code", value: { intValue: "200" } },
              ],
              status: { code: 1 },
              events: [
                {
                  timeUnixNano: "1544712660500000000",
                  name: "cache.miss",
                  attributes: [{ key: "cache.key", value: { stringValue: "cart:42" } }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  resourceLogs: [
    {
      resource: { attributes: [{ key: "service.name", value: { stringValue: "checkout" } }] },
      scopeLogs: [
        {
          scope: { name: "example.instrumentation" },
          logRecords: [
            {
              timeUnixNano: "1544712660300000000",
              severityNumber: 9,
              severityText: "INFO",
              body: { stringValue: "cart loaded" },
              attributes: [{ key: "cart.items", value: { intValue: "3" } }],
              traceId: "5b8efff798038103d269b633813fc60c",
              spanId: "eee19b7ec3c1b174",
            },
          ],
        },
      ],
    },
  ],
};

/** Literal OTLP JSON metrics body (gauge) — posts to `/v1/metrics` unmodified. */
const otlpMetricsSample: TelemetryExportArgs = {
  resourceMetrics: [
    {
      resource: {
        attributes: [{ key: "service.name", value: { stringValue: "checkout" } }],
      },
      scopeMetrics: [
        {
          scope: { name: "example.instrumentation", version: "1.0.0" },
          metrics: [
            {
              name: "http.server.duration",
              unit: "ms",
              gauge: {
                dataPoints: [
                  {
                    timeUnixNano: "1544712661000000000",
                    asDouble: 42.5,
                    attributes: [{ key: "http.route", value: { stringValue: "/cart" } }],
                  },
                ],
              },
            },
            {
              name: "http.server.request.count",
              sum: {
                aggregationTemporality: 1,
                isMonotonic: true,
                dataPoints: [
                  {
                    timeUnixNano: "1544712661000000000",
                    asInt: "3",
                  },
                ],
              },
            },
            {
              name: "http.server.latency",
              histogram: {
                aggregationTemporality: 1,
                dataPoints: [
                  {
                    timeUnixNano: "1544712661000000000",
                    count: "2",
                    sum: 75,
                    bucketCounts: ["0", "1", "1", "0"],
                    explicitBounds: [10, 50, 100],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

describe("validateExportArgs", () => {
  it("accepts a real OTLP/HTTP JSON sample payload unmodified", () => {
    expect(() => validateExportArgs(otlpSample)).not.toThrow();
    // spans-only and logs-only halves are each sufficient
    expect(() => validateExportArgs({ resourceSpans: otlpSample.resourceSpans })).not.toThrow();
    expect(() => validateExportArgs({ resourceLogs: otlpSample.resourceLogs })).not.toThrow();
  });

  it("accepts a metrics-only payload with a well-formed gauge", () => {
    expect(() =>
      validateExportArgs({
        resourceMetrics: [
          {
            scopeMetrics: [
              {
                metrics: [
                  {
                    name: "queue.depth",
                    gauge: {
                      dataPoints: [{ timeUnixNano: "1544712661000000000", asDouble: 7 }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      }),
    ).not.toThrow();
  });

  it("accepts a mixed three-signal payload", () => {
    expect(() =>
      validateExportArgs({
        ...otlpSample,
        ...otlpMetricsSample,
      }),
    ).not.toThrow();
  });

  it("accepts a literal OTLP JSON metrics body unmodified", () => {
    expect(() => validateExportArgs(otlpMetricsSample)).not.toThrow();
  });

  it("rejects a payload with none of the three arrays non-empty with 400", () => {
    expect(statusOf(() => validateExportArgs({}))).toBe(400);
    expect(statusOf(() => validateExportArgs({ resourceMetrics: [] }))).toBe(400);
    expect(
      statusOf(() => validateExportArgs({ resourceSpans: [], resourceLogs: [], resourceMetrics: [] })),
    ).toBe(400);
  });

  it("rejects a metric with zero or two data shapes naming the field path", () => {
    const zeroShape = {
      resourceMetrics: [
        {
          scopeMetrics: [{ metrics: [{ name: "broken" }] }],
        },
      ],
    };
    expect(statusOf(() => validateExportArgs(zeroShape))).toBe(400);
    expect(messageOf(() => validateExportArgs(zeroShape))).toMatch(
      /resourceMetrics\[0\]\.scopeMetrics\[0\]\.metrics\[0\]/u,
    );

    const twoShapes = {
      resourceMetrics: [
        {
          scopeMetrics: [
            {
              metrics: [
                {
                  name: "broken",
                  gauge: { dataPoints: [{ timeUnixNano: "1", asDouble: 1 }] },
                  sum: {
                    aggregationTemporality: 1 as const,
                    dataPoints: [{ timeUnixNano: "1", asDouble: 1 }],
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    expect(statusOf(() => validateExportArgs(twoShapes))).toBe(400);
    expect(messageOf(() => validateExportArgs(twoShapes))).toMatch(
      /resourceMetrics\[0\]\.scopeMetrics\[0\]\.metrics\[0\]/u,
    );
  });

  it("rejects a data point whose timeUnixNano is a number, naming the field", () => {
    const bad = {
      resourceMetrics: [
        {
          scopeMetrics: [
            {
              metrics: [
                {
                  name: "queue.depth",
                  gauge: {
                    dataPoints: [{ timeUnixNano: 1544712661 as unknown as string, asDouble: 1 }],
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    expect(statusOf(() => validateExportArgs(bad))).toBe(400);
    expect(messageOf(() => validateExportArgs(bad))).toMatch(
      /resourceMetrics\[0\]\.scopeMetrics\[0\]\.metrics\[0\]\.gauge\.dataPoints\[0\]\.timeUnixNano/u,
    );
  });

  it("rejects oversized payloads including metrics-only ones", () => {
    const bigValue = "x".repeat(MAX_EXPORT_BYTES);
    expect(
      statusOf(() =>
        validateExportArgs({
          resourceMetrics: [
            {
              scopeMetrics: [
                {
                  metrics: [
                    {
                      name: "big",
                      gauge: {
                        dataPoints: [
                          {
                            timeUnixNano: "1",
                            asDouble: 1,
                            attributes: [{ key: "pad", value: { stringValue: bigValue } }],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        }),
      ),
    ).toBe(400);
  });

  it("rejects a span without traceId with a contract error", () => {
    const bad = JSON.parse(JSON.stringify(otlpSample)) as TelemetryExportArgs;
    delete (bad.resourceSpans![0]!.scopeSpans[0]!.spans[0] as Record<string, unknown>).traceId;
    expect(statusOf(() => validateExportArgs(bad))).toBe(400);
  });

  it("rejects malformed hex ids and non-string nanos with 400", () => {
    const badHex = JSON.parse(JSON.stringify(otlpSample)) as TelemetryExportArgs;
    badHex.resourceSpans![0]!.scopeSpans[0]!.spans[0]!.spanId = "not-hex";
    expect(statusOf(() => validateExportArgs(badHex))).toBe(400);

    const badNano = JSON.parse(JSON.stringify(otlpSample)) as TelemetryExportArgs;
    (badNano.resourceSpans![0]!.scopeSpans[0]!.spans[0] as Record<string, unknown>).startTimeUnixNano =
      1544712660;
    expect(statusOf(() => validateExportArgs(badNano))).toBe(400);
  });

  it("rejects a log record without timeUnixNano with 400", () => {
    const bad = JSON.parse(JSON.stringify(otlpSample)) as TelemetryExportArgs;
    delete (bad.resourceLogs![0]!.scopeLogs[0]!.logRecords[0] as Record<string, unknown>).timeUnixNano;
    expect(statusOf(() => validateExportArgs(bad))).toBe(400);
  });
});

describe("withAttribution", () => {
  it("adds aprovan.* resource attributes without mutating the input", () => {
    const resource: OtlpResource = {
      attributes: [{ key: "service.name", value: { stringValue: "checkout" } }],
    };
    const attributed = withAttribution(resource, {
      tenant: "acme",
      principal: "user:42",
      source: "workflow:nightly",
    });
    expect(attributed.attributes).toEqual([
      { key: "service.name", value: { stringValue: "checkout" } },
      { key: ATTR_TENANT, value: { stringValue: "acme" } },
      { key: ATTR_PRINCIPAL, value: { stringValue: "user:42" } },
      { key: ATTR_SOURCE, value: { stringValue: "workflow:nightly" } },
    ]);
    expect(resource.attributes).toHaveLength(1);
  });

  it("replaces existing aprovan.* values and handles an absent resource", () => {
    const attributed = withAttribution(
      { attributes: [{ key: ATTR_TENANT, value: { stringValue: "old" } }] },
      { tenant: "new" },
    );
    expect(attributed.attributes).toEqual([{ key: ATTR_TENANT, value: { stringValue: "new" } }]);

    const fromNothing = withAttribution(undefined, { source: "chat" });
    expect(fromNothing.attributes).toEqual([{ key: ATTR_SOURCE, value: { stringValue: "chat" } }]);
  });
});

describe("secretFromHeaders", () => {
  it("extracts the bearer secret and 400s when absent", () => {
    expect(secretFromHeaders({ Authorization: "Bearer tok" }, "honeycomb", "API key")).toBe("tok");
    expect(statusOf(() => secretFromHeaders({}, "honeycomb", "API key"))).toBe(400);
  });
});

describe("telemetryToolEntries", () => {
  it("exposes exactly one export operation naming all three arrays", () => {
    const entries = telemetryToolEntries("datadog");
    expect(entries.map((entry) => entry.name)).toEqual(["datadog.export"]);
    expect(entries[0]!.inputSchema).toMatchObject({
      type: "object",
      properties: {
        resourceSpans: expect.any(Object),
        resourceLogs: expect.any(Object),
        resourceMetrics: expect.any(Object),
      },
    });
    expect(entries[0]!.description).toContain("metrics");
    expect(entries[0]!.description).toContain("OTLP");
  });
});

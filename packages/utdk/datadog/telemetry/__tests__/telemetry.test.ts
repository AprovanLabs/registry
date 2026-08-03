import { describe, expect, it, vi } from "vitest";
import { TelemetryError, type TelemetryExportArgs } from "@utdk/telemetry";
import { createDatadogTelemetryClient } from "../index.js";

const sampleSpans: TelemetryExportArgs["resourceSpans"] = [
  {
    scopeSpans: [
      {
        spans: [
          {
            traceId: "5b8efff798038103d269b633813fc60c",
            spanId: "eee19b7ec3c1b174",
            name: "GET /cart",
            startTimeUnixNano: "1544712660000000000",
            endTimeUnixNano: "1544712661000000000",
          },
          {
            traceId: "5b8efff798038103d269b633813fc60c",
            spanId: "eee19b7ec3c1b175",
            name: "db.query",
            startTimeUnixNano: "1544712660100000000",
            endTimeUnixNano: "1544712660200000000",
          },
        ],
      },
    ],
  },
];

const sampleMetrics: TelemetryExportArgs["resourceMetrics"] = [
  {
    scopeMetrics: [
      {
        metrics: [
          {
            name: "queue.depth",
            gauge: {
              dataPoints: [{ timeUnixNano: "1544712661000000000", asDouble: 3 }],
            },
          },
        ],
      },
    ],
  },
];

describe("createDatadogTelemetryClient", () => {
  it("fans out spans+metrics to two POSTs with verbatim bodies and DD-API-KEY", async () => {
    const posts: Array<{ url: string; headers: HeadersInit; body: string }> = [];
    const fetchImpl = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      posts.push({
        url: String(url),
        headers: init?.headers ?? {},
        body: String(init?.body ?? ""),
      });
      return new Response("{}", { status: 200 });
    }) as unknown as typeof fetch;

    const client = createDatadogTelemetryClient({
      headers: { Authorization: "Bearer dd-secret" },
      fetchImpl,
    });

    const result = await client.export({
      resourceSpans: sampleSpans,
      resourceMetrics: sampleMetrics,
    });

    expect(posts).toHaveLength(2);
    const urls = posts.map((post) => post.url).sort();
    expect(urls).toEqual([
      "https://otlp.datadoghq.com/v1/metrics",
      "https://otlp.datadoghq.com/v1/traces",
    ]);

    const traces = posts.find((post) => post.url.endsWith("/v1/traces"))!;
    const metrics = posts.find((post) => post.url.endsWith("/v1/metrics"))!;
    expect(JSON.parse(traces.body)).toEqual({ resourceSpans: sampleSpans });
    expect(JSON.parse(metrics.body)).toEqual({ resourceMetrics: sampleMetrics });
    expect(traces.headers).toMatchObject({ "DD-API-KEY": "dd-secret" });
    expect(metrics.headers).toMatchObject({ "DD-API-KEY": "dd-secret" });
    expect(result.accepted).toEqual({ spans: 2, logs: 0, metrics: 1 });
    expect(result.rejected).toBeUndefined();
  });

  it("merges partial success across signals", async () => {
    const fetchImpl = vi.fn(async (url: string | URL | Request) => {
      const href = String(url);
      if (href.endsWith("/v1/traces")) {
        return new Response(
          JSON.stringify({
            partialSuccess: { rejectedSpans: 2, errorMessage: "span drop" },
          }),
          { status: 200 },
        );
      }
      return new Response("{}", { status: 200 });
    }) as unknown as typeof fetch;

    const client = createDatadogTelemetryClient({
      headers: { Authorization: "Bearer dd-secret" },
      fetchImpl,
    });

    const result = await client.export({
      resourceSpans: sampleSpans,
      resourceMetrics: sampleMetrics,
    });

    expect(result.rejected?.spans).toBe(2);
    expect(result.rejected?.metrics).toBe(0);
    expect(result.rejected?.message).toMatch(/span drop/u);
    expect(result.accepted.spans).toBe(0);
    expect(result.accepted.metrics).toBe(1);
  });

  it("400s naming datadog when the credential is missing", async () => {
    const client = createDatadogTelemetryClient({ fetchImpl: vi.fn() as unknown as typeof fetch });
    try {
      await client.export({ resourceSpans: sampleSpans });
      throw new Error("expected TelemetryError");
    } catch (error) {
      expect(error).toBeInstanceOf(TelemetryError);
      expect((error as TelemetryError).status).toBe(400);
      expect((error as TelemetryError).message).toMatch(/datadog/iu);
    }
  });
});

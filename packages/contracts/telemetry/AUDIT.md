# Shape audit — @utdk/telemetry

Paper audit (documentation-level) of the contract surface against real vendor
APIs, per Decision 8. Freeze criterion for the 0.2.0 bump; extended for the
0.3.0 three-signal freeze (metrics mapping below).

## Vendors

1. **OpenTelemetry Collector** (OTLP/HTTP JSON: `POST /v1/traces`, `POST /v1/logs`, `POST /v1/metrics`)
2. **Datadog OTLP intake** (Agent/Datadog OTLP ingestion endpoint)
3. **Honeycomb OTLP intake** (`api.honeycomb.io/v1/traces`, `/v1/logs`, `/v1/metrics`)

## Per-operation mapping

### `export` (`TelemetryExportArgs` → `TelemetryExportResult`)

| Contract element | OTLP Collector | Datadog OTLP | Honeycomb OTLP |
| --- | --- | --- | --- |
| `resourceSpans` (OTLP JSON) | `POST /v1/traces` body verbatim | OTLP ingestion verbatim | `POST /v1/traces` verbatim |
| `resourceLogs` (OTLP JSON) | `POST /v1/logs` body verbatim | OTLP logs ingestion | `POST /v1/logs` verbatim |
| `resourceMetrics` (OTLP JSON) | `POST /v1/metrics` body verbatim | OTLP metrics ingestion | `POST /v1/metrics` verbatim |
| `traceId`/`spanId` hex, `timeUnixNano` strings | exactly the OTLP JSON encoding | same | same |
| partial success result | `partialSuccess { rejectedSpans, errorMessage }` → `rejected` | mapped from response | mapped from response |
| `aprovan.*` resource attributes | ordinary resource attributes (pass through) | become tags | become fields/dataset routing |
| auth | none / configurable headers | `DD-API-KEY` header | `x-honeycomb-team` header |
| error → `TelemetryError(status)` | HTTP status | HTTP status | HTTP status |

Findings:

- Because the contract adopts OTLP/HTTP JSON verbatim (D7), the adapter for
  all three vendors is: split the args into the `/v1/traces`, `/v1/logs`, and
  `/v1/metrics` bodies, attach the vendor auth header, POST. The round-trip
  requires zero shape translation — the audit's sample payload (see
  `__tests__/telemetry.test.ts`) is a literal OTLP body.
- The one contract-vs-OTLP delta is combining spans, logs, and metrics in ONE
  `export` call where OTLP/HTTP has three endpoints; the adapter fans out and
  merges the partial-success responses into one `rejected` block. All three
  vendors accept the halves independently, so partial success composes.
- Vendor auth headers ride the standard `headers` client option (Datadog
  `DD-API-KEY`, Honeycomb `x-honeycomb-team`); no auth concept leaks into
  the contract surface.
- Attribution attributes under `aprovan.*` are legal resource attributes
  everywhere (Datadog renders them as tags, Honeycomb as fields) — the D9
  attribution scheme needs no vendor-specific casing.

## Metrics mapping (0.3.0 freeze gate)

The contract metrics subset is gauge, sum (`aggregationTemporality` +
`isMonotonic`), and histogram (`explicitBounds` + `bucketCounts`), with
`timeUnixNano` / `asInt` / `count` / `bucketCounts` as strings per OTLP JSON.

| Shape / field | OTLP Collector | Datadog OTLP | Honeycomb OTLP |
| --- | --- | --- | --- |
| `gauge` + `OtlpNumberDataPoint` (`asDouble` / `asInt`) | accepted verbatim on `/v1/metrics` | accepted verbatim | accepted verbatim |
| `sum` + `aggregationTemporality` 1\|2 + `isMonotonic` | accepted verbatim | accepted verbatim | accepted verbatim |
| `histogram` + `explicitBounds` + `bucketCounts` (strings) | accepted verbatim | accepted verbatim | accepted verbatim |
| exponential histogram / summary | out of subset — not sent | out of subset — not sent | out of subset — not sent |
| `accepted.metrics` / `rejected.metrics` | map from data-point counts / `rejectedDataPoints` | same | same |

Findings:

- No change vs OTLP JSON for the three accepted shapes on any of the three
  intakes — payloads built by the contract (and by `@utdk/telemetry/sdk`)
  post unmodified (D7 holds for metrics).
- Shapes outside the subset (exponential histogram, summary) remain rejected
  at validation with a named field path rather than silently dropped, so a
  future expansion stays an additive audit.

## Changes

**0.2.0:** No change. The OTLP-verbatim subset round-trips to all three
intakes unmodified (the D7 revisit trigger did not fire).

**0.3.0 (pending bump):** Metrics reservation lifted; gauge/sum/histogram
subset audited above with no translation required. Version bump waits on
this audit closing (this document) plus streams 1–3 landing.

## Verdict

**Frozen at 0.2.0** for the two-signal surface. **Metrics audit closed** for
the 0.3.0 freeze gate: gauge/sum/histogram map onto OTLP Collector, Datadog
OTLP, and Honeycomb OTLP with no field renaming. Bump to 0.3.0 proceeds in
stream 4 after this PR lands.

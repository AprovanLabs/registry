# Explore

3 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationEventsTimeseries`

Query Explore Events in Timeseries Format

```ts
sentry.listOrganizationEventsTimeseries(): Promise<{ meta?: { dataset: string; start: number; end: number }; timeSeries: ({ values: ({ timestamp: number; value: number; incomplete: boolean; comparisonValue?: number; sampleCount?: number; sampleRate?: number | null; confidence?: "low" | "high" | null | null; incompleteReason?: string })[]; yAxis: string; groupBy?: ({ key: string; value: string | number | { [key: string]: unknown } | null })[]; met...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/events-timeseries/` · `listOrganizationEventsTimeseries`</sub>

## `sentry.listOrganizationEvents`

Query Explore Events in Table Format

```ts
sentry.listOrganizationEvents(): Promise<{ data: ({ [key: string]: unknown | undefined })[]; meta: { fields?: { [key: string]: string | undefined }; units?: { [key: string]: string | null | undefined }; tips?: { [key: string]: string | undefined }; datasetReason?: string; isMetricsData?: boolean; isMetricsExtractedData?: boolean; dataset?: string; discoverSplitDecision?: unknown; dataScanned?: string; bytesScanned?: number; debug_info?:...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/events/` · `listOrganizationEvents`</sub>

## `sentry.retrieveTraceItemStatistics`

Compute statistics, such as attribute value distributions, over the trace items (spans or occurrences) matching the given query within the requested time range.

```ts
sentry.retrieveTraceItemStatistics(): Promise<{ data: ({ attributeDistributions: { data: { [key: string]: ({ label: string; value: number })[] | undefined } } })[] }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/trace-items/stats/` · `Retrieve Trace Item Statistics`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

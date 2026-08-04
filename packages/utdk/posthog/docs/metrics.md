# Metrics

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.metricsAttributeValuesRetrieve`

Observed values for one metric attribute key, most frequent first. Backs the filter bar's value autocomplete.

```ts
posthog.metricsAttributeValuesRetrieve(): Promise<{ results: ({ id: string; name: string; count: number })[] }>
```

<sub>`GET /api/projects/{project_id}/metrics/attribute_values/` · `metrics_attribute_values_retrieve`</sub>

## `posthog.metricsAttributesRetrieve`

Distinct attribute keys seen on the team's metrics (datapoint and resource attributes merged), most frequent first. Backs the filter bar's key autocomplete.

```ts
posthog.metricsAttributesRetrieve(): Promise<{ results: ({ name: string })[]; count: number }>
```

<sub>`GET /api/projects/{project_id}/metrics/attributes/` · `metrics_attributes_retrieve`</sub>

## `posthog.metricsCharacterizeCreate`

Characterize a metric anomaly: compare an anomaly window against a baseline, find the onset, and rank which label values moved.

```ts
posthog.metricsCharacterizeCreate(): Promise<{ metric_name: string; aggregation: string; interval: string; baseline_from: string; baseline_to: string; anomaly_from: string; anomaly_to: string; baseline_mean: number; baseline_stddev: number; anomaly_mean: number; anomaly_peak: number; change_ratio: number; direction: "up" | "down" | "flat"; onset_time: string | null; top_movers: ({ key: string; label: string; baseline_value: number; anomaly_...>
```

<sub>`POST /api/projects/{project_id}/metrics/characterize/` · `metrics_characterize_create`</sub>

## `posthog.metricsHasMetricsRetrieve`

```ts
posthog.metricsHasMetricsRetrieve(): Promise<{ hasMetrics: boolean }>
```

<sub>`GET /api/projects/{project_id}/metrics/has_metrics/` · `metrics_has_metrics_retrieve`</sub>

## `posthog.metricsQueryCreate`

```ts
posthog.metricsQueryCreate(): Promise<{ results: ({ labels: { [key: string]: string | undefined }; points: ({ time: string; value: number | null })[]; metric_name?: string | null; clause?: string | null })[] }>
```

<sub>`POST /api/projects/{project_id}/metrics/query/` · `metrics_query_create`</sub>

## `posthog.metricsSamplesCreate`

Raw individual emissions for a metric (the events model), newest first — backs the Samples view and the metric->trace pivot.

```ts
posthog.metricsSamplesCreate(): Promise<{ results: ({ timestamp: string; metric_name: string; metric_type: string; value: number; count: number; unit: string; aggregation_temporality: string; is_monotonic: boolean; service_name: string; trace_id: string; span_id: string; attributes: { [key: string]: string | undefined }; resource_attributes: { [key: string]: string | undefined } })[] }>
```

<sub>`POST /api/projects/{project_id}/metrics/samples/` · `metrics_samples_create`</sub>

## `posthog.metricsValuesRetrieve`

Distinct metric names for the team. Backs the picker UI.

```ts
posthog.metricsValuesRetrieve(): Promise<{ results: ({ name: string; metric_type: string })[] }>
```

<sub>`GET /api/projects/{project_id}/metrics/values/` · `metrics_values_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

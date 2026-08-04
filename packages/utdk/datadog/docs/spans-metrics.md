# Spans Metrics

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listSpansMetrics`

Get all span-based metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSpansMetrics(): Promise<SpansMetricsResponse>
```

<sub>`GET /api/v2/apm/config/metrics` · `ListSpansMetrics`</sub>

## `datadog.createSpansMetric`

Create a span-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSpansMetric(input: {
  data: SpansMetricCreateData;
}): Promise<SpansMetricResponse>
```

<sub>`POST /api/v2/apm/config/metrics` · `CreateSpansMetric`</sub>

## `datadog.deleteSpansMetric`

Delete a span-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSpansMetric(input: {
  /** The name of the span-based metric. */
  metric_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/apm/config/metrics/{metric_id}` · `DeleteSpansMetric`</sub>

## `datadog.getSpansMetric`

Get a span-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSpansMetric(input: {
  /** The name of the span-based metric. */
  metric_id: string;
}): Promise<SpansMetricResponse>
```

<sub>`GET /api/v2/apm/config/metrics/{metric_id}` · `GetSpansMetric`</sub>

## `datadog.updateSpansMetric`

Update a span-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSpansMetric(input: {
  data: SpansMetricUpdateData;
  /** The name of the span-based metric. */
  metric_id: string;
}): Promise<SpansMetricResponse>
```

<sub>`PATCH /api/v2/apm/config/metrics/{metric_id}` · `UpdateSpansMetric`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Rum Metrics

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listRumMetrics`

Get all RUM-based metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumMetrics(): Promise<RumMetricsResponse>
```

<sub>`GET /api/v2/rum/config/metrics` · `ListRumMetrics`</sub>

## `datadog.createRumMetric`

Create a RUM-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumMetric(input: {
  data: RumMetricCreateData;
}): Promise<RumMetricResponse>
```

<sub>`POST /api/v2/rum/config/metrics` · `CreateRumMetric`</sub>

## `datadog.deleteRumMetric`

Delete a RUM-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumMetric(input: {
  /** The name of the RUM-based metric. */
  metric_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/config/metrics/{metric_id}` · `DeleteRumMetric`</sub>

## `datadog.getRumMetric`

Get a RUM-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumMetric(input: {
  /** The name of the RUM-based metric. */
  metric_id: string;
}): Promise<RumMetricResponse>
```

<sub>`GET /api/v2/rum/config/metrics/{metric_id}` · `GetRumMetric`</sub>

## `datadog.updateRumMetric`

Update a RUM-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumMetric(input: {
  data: RumMetricUpdateData;
  /** The name of the RUM-based metric. */
  metric_id: string;
}): Promise<RumMetricResponse>
```

<sub>`PATCH /api/v2/rum/config/metrics/{metric_id}` · `UpdateRumMetric`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

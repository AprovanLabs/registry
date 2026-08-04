# Logs Metrics

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listLogsMetrics`

Get all log-based metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLogsMetrics(): Promise<LogsMetricsResponse>
```

<sub>`GET /api/v2/logs/config/metrics` · `ListLogsMetrics`</sub>

## `datadog.createLogsMetric`

Create a log-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLogsMetric(input: {
  data: LogsMetricCreateData;
}): Promise<LogsMetricResponse>
```

<sub>`POST /api/v2/logs/config/metrics` · `CreateLogsMetric`</sub>

## `datadog.deleteLogsMetric`

Delete a log-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLogsMetric(input: {
  /** The name of the log-based metric. */
  metric_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/logs/config/metrics/{metric_id}` · `DeleteLogsMetric`</sub>

## `datadog.getLogsMetric`

Get a log-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLogsMetric(input: {
  /** The name of the log-based metric. */
  metric_id: string;
}): Promise<LogsMetricResponse>
```

<sub>`GET /api/v2/logs/config/metrics/{metric_id}` · `GetLogsMetric`</sub>

## `datadog.updateLogsMetric`

Update a log-based metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLogsMetric(input: {
  data: LogsMetricUpdateData;
  /** The name of the log-based metric. */
  metric_id: string;
}): Promise<LogsMetricResponse>
```

<sub>`PATCH /api/v2/logs/config/metrics/{metric_id}` · `UpdateLogsMetric`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

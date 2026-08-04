# Data Observability

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.runDataObservabilityMonitor`

Run a data observability monitor — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.runDataObservabilityMonitor(input: {
  /** The ID of the data observability monitor to run. */
  monitor_id: number;
}): Promise<RunDataObservabilityMonitorResponse>
```

<sub>`POST /api/v2/data-observability/monitors/{monitor_id}/run` · `RunDataObservabilityMonitor`</sub>

## `datadog.getDataObservabilityMonitorRunStatus`

Get data observability monitor run status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDataObservabilityMonitorRunStatus(input: {
  /** The ID of the monitor run to retrieve status for. */
  run_id: string;
}): Promise<GetDataObservabilityMonitorRunStatusResponse>
```

<sub>`GET /api/v2/data-observability/monitors/runs/{run_id}/status` · `GetDataObservabilityMonitorRunStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

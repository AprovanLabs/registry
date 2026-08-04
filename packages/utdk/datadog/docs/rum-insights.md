# RUM Insights

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.queryAggregatedLongTasks`

Query aggregated long tasks — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryAggregatedLongTasks(input: {
  data: AggregatedLongTasksRequestData;
}): Promise<AggregatedLongTasksResponse>
```

<sub>`POST /api/v2/rum/query/insight/aggregated_long_tasks` · `QueryAggregatedLongTasks`</sub>

## `datadog.queryAggregatedSignalsProblems`

Query aggregated signals and problems — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryAggregatedSignalsProblems(input: {
  data: AggregatedSignalsProblemsRequestData;
}): Promise<AggregatedSignalsProblemsResponse>
```

<sub>`POST /api/v2/rum/query/insight/aggregated_signals_problems` · `QueryAggregatedSignalsProblems`</sub>

## `datadog.queryAggregatedWaterfall`

Query aggregated waterfall — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryAggregatedWaterfall(input: {
  data: AggregatedWaterfallRequestData;
}): Promise<AggregatedWaterfallResponse>
```

<sub>`POST /api/v2/rum/query/insight/aggregated_waterfall` · `QueryAggregatedWaterfall`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

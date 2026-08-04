# CI Visibility Pipelines

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createCiAppPipelineEvent`

Send pipeline event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCiAppPipelineEvent(input: {
  data?: CiAppCreatePipelineEventRequestDataSingleOrArray;
}): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/v2/ci/pipeline` · `CreateCIAppPipelineEvent`</sub>

## `datadog.aggregateCiAppPipelineEvents`

Aggregate pipelines events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateCiAppPipelineEvents(input: {
  /** The list of metrics or timeseries to compute for the retrieved buckets. */
  compute?: (CiAppCompute)[];
  filter?: CiAppPipelinesQueryFilter;
  /** The rules for the group-by. */
  group_by?: (CiAppPipelinesGroupBy)[];
  options?: CiAppQueryOptions;
}): Promise<CiAppPipelinesAnalyticsAggregateResponse>
```

<sub>`POST /api/v2/ci/pipelines/analytics/aggregate` · `AggregateCIAppPipelineEvents`</sub>

## `datadog.listCiAppPipelineEvents`

Get a list of pipelines events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCiAppPipelineEvents(input: {
  /** Search query following log syntax. */
  "filter[query]"?: string;
  /** Minimum timestamp for requested events. */
  "filter[from]"?: string;
  /** Maximum timestamp for requested events. */
  "filter[to]"?: string;
  sort?: CiAppSort;
  /** List following results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** Maximum number of events in the response. */
  "page[limit]"?: number;
}): Promise<CiAppPipelineEventsResponse>
```

<sub>`GET /api/v2/ci/pipelines/events` · `ListCIAppPipelineEvents`</sub>

## `datadog.searchCiAppPipelineEvents`

Search pipelines events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchCiAppPipelineEvents(input: {
  filter?: CiAppPipelinesQueryFilter;
  options?: CiAppQueryOptions;
  page?: CiAppQueryPageOptions;
  sort?: CiAppSort;
}): Promise<CiAppPipelineEventsResponse>
```

<sub>`POST /api/v2/ci/pipelines/events/search` · `SearchCIAppPipelineEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

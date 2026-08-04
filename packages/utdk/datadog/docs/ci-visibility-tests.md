# CI Visibility Tests

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.aggregateCiAppTestEvents`

Aggregate tests events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateCiAppTestEvents(input: {
  /** The list of metrics or timeseries to compute for the retrieved buckets. */
  compute?: (CiAppCompute)[];
  filter?: CiAppTestsQueryFilter;
  /** The rules for the group-by. */
  group_by?: (CiAppTestsGroupBy)[];
  options?: CiAppQueryOptions;
}): Promise<CiAppTestsAnalyticsAggregateResponse>
```

<sub>`POST /api/v2/ci/tests/analytics/aggregate` · `AggregateCIAppTestEvents`</sub>

## `datadog.listCiAppTestEvents`

Get a list of tests events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCiAppTestEvents(input: {
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
}): Promise<CiAppTestEventsResponse>
```

<sub>`GET /api/v2/ci/tests/events` · `ListCIAppTestEvents`</sub>

## `datadog.searchCiAppTestEvents`

Search tests events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchCiAppTestEvents(input: {
  filter?: CiAppTestsQueryFilter;
  options?: CiAppQueryOptions;
  page?: CiAppQueryPageOptions;
  sort?: CiAppSort;
}): Promise<CiAppTestEventsResponse>
```

<sub>`POST /api/v2/ci/tests/events/search` · `SearchCIAppTestEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

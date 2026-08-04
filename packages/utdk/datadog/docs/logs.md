# Logs

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.submitLog`

Send logs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.submitLog(input: {
  body: HttpLog;
  /** Log tags can be passed as query parameters with `text/plain` content type. */
  ddtags?: string;
}, options?: { headers?: { "Content-Encoding"?: "identity" | "gzip" | "deflate" } }): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/v2/logs` · `SubmitLog`</sub>

## `datadog.aggregateLogs`

Aggregate events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateLogs(input: {
  /** The list of metrics or timeseries to compute for the retrieved buckets. */
  compute?: (LogsCompute)[];
  filter?: LogsQueryFilter;
  /** The rules for the group by */
  group_by?: (LogsGroupBy)[];
  options?: LogsQueryOptions;
  page?: LogsAggregateRequestPage;
}): Promise<LogsAggregateResponse>
```

<sub>`POST /api/v2/logs/analytics/aggregate` · `AggregateLogs`</sub>

## `datadog.listLogsGet`

Search logs (GET) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLogsGet(input: {
  /** Search query following logs syntax. */
  "filter[query]"?: string;
  /** For customers with multiple indexes, the indexes to search. Defaults to '*' which means all indexes */
  "filter[indexes]"?: (string)[];
  /** Minimum timestamp for requested logs. */
  "filter[from]"?: string;
  /** Maximum timestamp for requested logs. */
  "filter[to]"?: string;
  "filter[storage_tier]"?: LogsStorageTier;
  sort?: LogsSort;
  /** List following results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** Maximum number of logs in the response. */
  "page[limit]"?: number;
}): Promise<LogsListResponse>
```

<sub>`GET /api/v2/logs/events` · `ListLogsGet`</sub>

## `datadog.listLogs`

Search logs (POST) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLogs(input: {
  filter?: LogsQueryFilter;
  options?: LogsQueryOptions;
  page?: LogsListRequestPage;
  sort?: LogsSort;
}): Promise<LogsListResponse>
```

<sub>`POST /api/v2/logs/events/search` · `ListLogs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

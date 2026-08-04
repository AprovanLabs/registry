# Spans

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.aggregateSpans`

Aggregate spans — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateSpans(input: {
  data?: SpansAggregateData;
}): Promise<SpansAggregateResponse>
```

<sub>`POST /api/v2/spans/analytics/aggregate` · `AggregateSpans`</sub>

## `datadog.listSpansGet`

Get a list of spans — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSpansGet(input: {
  /** Search query following spans syntax. */
  "filter[query]"?: string;
  /** Minimum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds). */
  "filter[from]"?: string;
  /** Maximum timestamp for requested spans. Supports date-time ISO8601, date math, and regular timestamps (milliseconds). */
  "filter[to]"?: string;
  sort?: SpansSort;
  /** List following results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** Maximum number of spans in the response. */
  "page[limit]"?: number;
}): Promise<SpansListResponse>
```

<sub>`GET /api/v2/spans/events` · `ListSpansGet`</sub>

## `datadog.listSpans`

Search spans — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSpans(input: {
  data?: SpansListRequestData;
}): Promise<SpansListResponse>
```

<sub>`POST /api/v2/spans/events/search` · `ListSpans`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

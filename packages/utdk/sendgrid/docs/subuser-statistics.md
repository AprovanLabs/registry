# Subuser Statistics

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getSubusersSubuserNameStatsMonthly`

Retrieve the monthly email statistics for a single subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusersSubuserNameStatsMonthly(input: {
  subuser_name: string;
  /** The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD */
  date: string;
  /** The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.' */
  sort_by_metric?: string;
  /** The direction you want to sort. */
  sort_by_direction?: "desc" | "asc";
  /** Optional field to limit the number of results returned. */
  limit?: number;
  /** Optional beginning point in the list to retrieve from. */
  offset?: number;
}): Promise<SubuserStats>
```

<sub>`GET /subusers/{subuser_name}/stats/monthly` · `GET_subusers-subuser_name-stats-monthly`</sub>

## `sendgrid.getSubusersStats`

Retrieve email statistics for your subusers. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusersStats(input: {
  /** Limits the number of results returned per page. */
  limit?: number;
  /** The point in the list to begin retrieving results from. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
  /** The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers. */
  subusers: string;
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. */
  end_date?: string;
}): Promise<CategoryStats>
```

<sub>`GET /subusers/stats` · `GET_subusers-stats`</sub>

## `sendgrid.getSubusersStatsMonthly`

Retrieve monthly stats for all subusers — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusersStatsMonthly(input: {
  /** The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD */
  date: string;
  /** A substring search of your subusers. */
  subuser?: string;
  /** The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.' */
  sort_by_metric?: "blocks" | "bounces" | "clicks" | "delivered" | "opens" | "requests" | "unique_clicks" | "unique_opens" | "unsubscribes";
  /** The direction you want to sort. */
  sort_by_direction?: "desc" | "asc";
  /** Optional field to limit the number of results returned. */
  limit?: number;
  /** Optional beginning point in the list to retrieve from. */
  offset?: number;
}): Promise<SubuserStats>
```

<sub>`GET /subusers/stats/monthly` · `GET_subusers-stats-monthly`</sub>

## `sendgrid.getSubusersStatsSums`

Retrieve the totals for each email statistic metric for all subusers. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusersStatsSums(input: {
  /** The direction you want to sort.  */
  sort_by_direction?: "desc" | "asc";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
  /** Limits the number of results returned per page. */
  limit?: number;
  /** The point in the list to begin retrieving results from. */
  offset?: number;
  /** How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD. */
  aggregated_by?: string;
  /** The metric that you want to sort by.  Must be a single metric. */
  sort_by_metric?: string;
}): Promise<CategoryStats>
```

<sub>`GET /subusers/stats/sums` · `GET_subusers-stats-sums`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

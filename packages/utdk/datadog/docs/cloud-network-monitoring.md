# Cloud Network Monitoring

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getAggregatedConnections`

Get all aggregated connections — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAggregatedConnections(input: {
  /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
  from?: number;
  /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
  to?: number;
  /** Comma-separated list of fields to group connections by. The maximum number of group_by(s) is 10. */
  group_by?: string;
  /** Comma-separated list of tags to filter connections by. */
  tags?: string;
  /** Free-form search query using AND/OR/NOT operators, wildcards, and parentheses. When provided, takes precedence over the `tags` parameter. */
  query?: string;
  /** The number of connections to be returned. The maximum value is 7500. The default is 100. */
  limit?: number;
}): Promise<SingleAggregatedConnectionResponseArray>
```

<sub>`GET /api/v2/network/connections/aggregate` · `GetAggregatedConnections`</sub>

## `datadog.getAggregatedDns`

Get all aggregated DNS traffic — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAggregatedDns(input: {
  /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window is 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
  from?: number;
  /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window is the current time. If neither `from` nor `to` are provided, the query window is `[now - 15m, now]`. */
  to?: number;
  /** Comma-separated list of fields to group DNS traffic by. The server side defaults to `network.dns_query` if unspecified. `server_ungrouped` may be used if groups are not desired. The maximum number of group_by(s) is 10. */
  group_by?: string;
  /** Comma-separated list of tags to filter DNS traffic by. */
  tags?: string;
  /** Free-form search query using AND/OR/NOT operators, wildcards, and parentheses. When provided, takes precedence over the `tags` parameter. */
  query?: string;
  /** The number of aggregated DNS entries to be returned. The maximum value is 7500. The default is 100. */
  limit?: number;
}): Promise<SingleAggregatedDnsResponseArray>
```

<sub>`GET /api/v2/network/dns/aggregate` · `GetAggregatedDns`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

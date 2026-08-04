# Network Health Insights

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listNetworkHealthInsights`

List network health insights — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listNetworkHealthInsights(input: {
  /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. */
  from?: string;
  /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be the current time. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. */
  to?: string;
}): Promise<NetworkHealthInsightsResponse>
```

<sub>`GET /api/v2/network-health-insights` · `ListNetworkHealthInsights`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

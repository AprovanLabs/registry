# Processes

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listProcesses`

Get all processes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listProcesses(input: {
  /** String to search processes by. */
  search?: string;
  /** Comma-separated list of tags to filter processes by. */
  tags?: string;
  /** Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the `to` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. */
  from?: number;
  /** Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the `from` timestamp. If neither `from` nor `to` are provided, the query window will be `[now - 15m, now]`. */
  to?: number;
  /** Maximum number of results returned. */
  "page[limit]"?: number;
  /** String to query the next page of results. This key is provided with each valid response from the API in `meta.page.after`. */
  "page[cursor]"?: string;
}): Promise<ProcessSummariesResponse>
```

<sub>`GET /api/v2/processes` · `ListProcesses`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

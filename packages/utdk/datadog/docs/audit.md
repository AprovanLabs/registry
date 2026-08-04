# Audit

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listAuditLogs`

Get a list of Audit Logs events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listAuditLogs(input: {
  /** Search query following Audit Logs syntax. */
  "filter[query]"?: string;
  /** Minimum timestamp for requested events. */
  "filter[from]"?: string;
  /** Maximum timestamp for requested events. */
  "filter[to]"?: string;
  sort?: AuditLogsSort;
  /** List following results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** Maximum number of events in the response. */
  "page[limit]"?: number;
}): Promise<AuditLogsEventsResponse>
```

<sub>`GET /api/v2/audit/events` · `ListAuditLogs`</sub>

## `datadog.searchAuditLogs`

Search Audit Logs events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchAuditLogs(input: {
  filter?: AuditLogsQueryFilter;
  options?: AuditLogsQueryOptions;
  page?: AuditLogsQueryPageOptions;
  sort?: AuditLogsSort;
}): Promise<AuditLogsEventsResponse>
```

<sub>`POST /api/v2/audit/events/search` · `SearchAuditLogs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

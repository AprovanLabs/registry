# Dashboards

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getDashboardUsage`

Get usage stats for a dashboard — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDashboardUsage(input: {
  /** The ID of the dashboard. */
  dashboard_id: string;
}): Promise<DashboardUsageResponse>
```

<sub>`GET /api/v2/dashboards/{dashboard_id}/usage` · `GetDashboardUsage`</sub>

## `datadog.listDashboardsUsage`

Get usage stats for all dashboards — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDashboardsUsage(input: {
  /** Maximum number of dashboards to return per page. Server-side maximum is 500; values above 500 return a 400 Bad Request. */
  "page[limit]"?: number;
  /** Zero-based offset into the result set. */
  "page[offset]"?: number;
  /** Return only dashboards whose last edit (`edited_at`) is strictly before this ISO 8601 timestamp (`edited_at < value`; boundary matches are excluded). Must include a timezone offset (for example, `Z` or `+00:00`); naive timestamps return HTTP 400. */
  "filter[edited_before]"?: string;
  /** Return only dashboards whose most recent view (`viewed_at`) is strictly before this ISO 8601 timestamp, including dashboards that have never been viewed. Must include a timezone offset; naive timestamps return HTTP 400. Orgs without Real User Monitoring (RUM) will see all dashboards returned by this filter. */
  "filter[viewed_before]"?: string;
}): Promise<ListDashboardsUsageResponse>
```

<sub>`GET /api/v2/dashboards/usage` · `ListDashboardsUsage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Dashboard Sharing

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listSharedDashboardsByDashboardId`

List shared dashboards for a dashboard — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSharedDashboardsByDashboardId(input: {
  /** ID of the dashboard. */
  dashboard_id: string;
}): Promise<ListSharedDashboardsResponse>
```

<sub>`GET /api/v2/dashboard/{dashboard_id}/shared` · `ListSharedDashboardsByDashboardId`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

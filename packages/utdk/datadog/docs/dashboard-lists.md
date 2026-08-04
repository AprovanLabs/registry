# Dashboard Lists

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.deleteDashboardListItems`

Delete items from a dashboard list — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDashboardListItems(input: {
  /** List of dashboards to delete from the dashboard list. */
  dashboards?: (DashboardListItemRequest)[];
  /** ID of the dashboard list to delete items from. */
  dashboard_list_id: number;
}): Promise<DashboardListDeleteItemsResponse>
```

<sub>`DELETE /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards` · `DeleteDashboardListItems`</sub>

## `datadog.getDashboardListItems`

Get items of a Dashboard List — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDashboardListItems(input: {
  /** ID of the dashboard list to get items from. */
  dashboard_list_id: number;
}): Promise<DashboardListItems>
```

<sub>`GET /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards` · `GetDashboardListItems`</sub>

## `datadog.createDashboardListItems`

Add Items to a Dashboard List — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDashboardListItems(input: {
  /** List of dashboards to add the dashboard list. */
  dashboards?: (DashboardListItemRequest)[];
  /** ID of the dashboard list to add items to. */
  dashboard_list_id: number;
}): Promise<DashboardListAddItemsResponse>
```

<sub>`POST /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards` · `CreateDashboardListItems`</sub>

## `datadog.updateDashboardListItems`

Update items of a dashboard list — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDashboardListItems(input: {
  /** List of dashboards to update the dashboard list to. */
  dashboards?: (DashboardListItemRequest)[];
  /** ID of the dashboard list to update items from. */
  dashboard_list_id: number;
}): Promise<DashboardListUpdateItemsResponse>
```

<sub>`PUT /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards` · `UpdateDashboardListItems`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

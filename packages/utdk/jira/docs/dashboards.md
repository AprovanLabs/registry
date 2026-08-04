# Dashboards

17 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllDashboards`

Get all dashboards — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllDashboards(input: {
  /** The filter applied to the list of dashboards. Valid values are:   *  `favourite` Returns dashboards the user has marked as favorite.  *  `my` Returns dashboards owned by the user. */
  filter?: "my" | "favourite";
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageOfDashboards>
```

<sub>`GET /rest/api/3/dashboard` · `getAllDashboards`</sub>

## `jira.createDashboard`

Create dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.createDashboard(input: {
  /** The description of the dashboard. */
  description?: string;
  /** The edit permissions for the dashboard. */
  editPermissions: (SharePermission)[];
  /** The name of the dashboard. */
  name: string;
  /** The share permissions for the dashboard. */
  sharePermissions: (SharePermission)[];
  /** Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) */
  extendAdminPermissions?: boolean;
}): Promise<Dashboard>
```

<sub>`POST /rest/api/3/dashboard` · `createDashboard`</sub>

## `jira.getAllGadgets`

Get gadgets — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllGadgets(input: {
  /** The ID of the dashboard. */
  dashboardId: number;
  /** The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`. */
  moduleKey?: (string)[];
  /** The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`. */
  uri?: (string)[];
  /** The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`. */
  gadgetId?: (number)[];
}): Promise<DashboardGadgetResponse>
```

<sub>`GET /rest/api/3/dashboard/{dashboardId}/gadget` · `getAllGadgets`</sub>

## `jira.addGadget`

Add gadget to dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.addGadget(input: {
  /** The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`. */
  color?: string;
  /** Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed. */
  ignoreUriAndModuleKeyValidation?: boolean;
  /** The module key of the gadget type. Can't be provided with `uri`. */
  moduleKey?: string;
  /** The position of the gadget. When the gadget is placed into the position, other gadgets in the same column are moved down to accommodate it. */
  position?: DashboardGadgetPosition;
  /** The title of the gadget. */
  title?: string;
  /** The URI of the gadget type. Can't be provided with `moduleKey`. */
  uri?: string;
  /** The ID of the dashboard. */
  dashboardId: number;
}): Promise<DashboardGadget>
```

<sub>`POST /rest/api/3/dashboard/{dashboardId}/gadget` · `addGadget`</sub>

## `jira.removeGadget`

Remove gadget from dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.removeGadget(input: {
  /** The ID of the dashboard. */
  dashboardId: number;
  /** The ID of the gadget. */
  gadgetId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}` · `removeGadget`</sub>

## `jira.updateGadget`

Update gadget on dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.updateGadget(input: {
  /** The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`. */
  color?: string;
  /** The position of the gadget. */
  position?: DashboardGadgetPosition;
  /** The title of the gadget. */
  title?: string;
  /** The ID of the dashboard. */
  dashboardId: number;
  /** The ID of the gadget. */
  gadgetId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}` · `updateGadget`</sub>

## `jira.getDashboardItemPropertyKeys`

Get dashboard item property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getDashboardItemPropertyKeys(input: {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties` · `getDashboardItemPropertyKeys`</sub>

## `jira.deleteDashboardItemProperty`

Delete dashboard item property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteDashboardItemProperty(input: {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
  /** The key of the dashboard item property. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}` · `deleteDashboardItemProperty`</sub>

## `jira.getDashboardItemProperty`

Get dashboard item property — [Provider docs](http://www.atlassian.com)

```ts
jira.getDashboardItemProperty(input: {
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
  /** The key of the dashboard item property. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}` · `getDashboardItemProperty`</sub>

## `jira.setDashboardItemProperty`

Set dashboard item property — [Provider docs](http://www.atlassian.com)

```ts
jira.setDashboardItemProperty(input: {
  body: unknown;
  /** The ID of the dashboard. */
  dashboardId: string;
  /** The ID of the dashboard item. */
  itemId: string;
  /** The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to "config", the request body's JSON must be an object with all keys and values as strings. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}` · `setDashboardItemProperty`</sub>

## `jira.deleteDashboard`

Delete dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteDashboard(input: {
  /** The ID of the dashboard. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/dashboard/{id}` · `deleteDashboard`</sub>

## `jira.getDashboard`

Get dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.getDashboard(input: {
  /** The ID of the dashboard. */
  id: string;
}): Promise<Dashboard>
```

<sub>`GET /rest/api/3/dashboard/{id}` · `getDashboard`</sub>

## `jira.updateDashboard`

Update dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.updateDashboard(input: {
  /** The description of the dashboard. */
  description?: string;
  /** The edit permissions for the dashboard. */
  editPermissions: (SharePermission)[];
  /** The name of the dashboard. */
  name: string;
  /** The share permissions for the dashboard. */
  sharePermissions: (SharePermission)[];
  /** The ID of the dashboard to update. */
  id: string;
  /** Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) */
  extendAdminPermissions?: boolean;
}): Promise<Dashboard>
```

<sub>`PUT /rest/api/3/dashboard/{id}` · `updateDashboard`</sub>

## `jira.copyDashboard`

Copy dashboard — [Provider docs](http://www.atlassian.com)

```ts
jira.copyDashboard(input: {
  /** The description of the dashboard. */
  description?: string;
  /** The edit permissions for the dashboard. */
  editPermissions: (SharePermission)[];
  /** The name of the dashboard. */
  name: string;
  /** The share permissions for the dashboard. */
  sharePermissions: (SharePermission)[];
  id: string;
  /** Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) */
  extendAdminPermissions?: boolean;
}): Promise<Dashboard>
```

<sub>`POST /rest/api/3/dashboard/{id}/copy` · `copyDashboard`</sub>

## `jira.bulkEditDashboards`

Bulk edit dashboards — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkEditDashboards(input: {
  /** Allowed action for bulk edit shareable entity */
  action: "changeOwner" | "changePermission" | "addPermission" | "removePermission";
  /** The details of change owner action. */
  changeOwnerDetails?: BulkChangeOwnerDetails;
  /** The id list of shareable entities to be changed. */
  entityIds: (number)[];
  /** Whether the actions are executed by users with Administer Jira global permission. */
  extendAdminPermissions?: boolean;
  /** The permission details to be changed. */
  permissionDetails?: PermissionDetails;
}): Promise<BulkEditShareableEntityResponse>
```

<sub>`PUT /rest/api/3/dashboard/bulk/edit` · `bulkEditDashboards`</sub>

## `jira.getAllAvailableDashboardGadgets`

Get available gadgets — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllAvailableDashboardGadgets(): Promise<AvailableDashboardGadgetsResponse>
```

<sub>`GET /rest/api/3/dashboard/gadgets` · `getAllAvailableDashboardGadgets`</sub>

## `jira.getDashboardsPaginated`

Search for dashboards — [Provider docs](http://www.atlassian.com)

```ts
jira.getDashboardsPaginated(input: {
  /** String used to perform a case-insensitive partial match with `name`. */
  dashboardName?: string;
  /** User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter. */
  accountId?: string;
  /** This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter. */
  owner?: string;
  /** As a group's name can change, use of `groupId` is recommended. Group name used to return dashboards that are shared with a group that matches `sharePermissions.group.name`. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** Group ID used to return dashboards that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter. */
  groupId?: string;
  /** Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`. */
  projectId?: number;
  /** [Order](#ordering) the results by a field:   *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by dashboard popularity.  *  `id` Sorts by dashboard ID.  *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.  *  `name` Sorts by dashboard name.  *  `owner` Sorts by dashboard owner name. */
  orderBy?: "description" | "-description" | "+description" | "favorite_count" | "-favorite_count" | "+favorite_count" | "id" | "-id" | "+id" | "is_favorite" | "-is_favorite" | "+is_favorite" | "name" | "-name" | "+name" | "owner" | "-owner" | "+owner";
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The status to filter by. It may be active, archived or deleted. */
  status?: "active" | "archived" | "deleted";
  /** Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the dashboard.  *  `owner` Returns the owner of the dashboard.  *  `viewUrl` Returns the URL that is used to view the dashboard.  *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.  *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.  *  `sharePermissions` Returns details of the share permissions defined for the dashboard.  *  `editPermissions` Returns details of the edit permissions defined for the dashboard.  *  `isWritable` Returns whether the current user has permission to edit the dashboard. */
  expand?: string;
}): Promise<PageBeanDashboard>
```

<sub>`GET /rest/api/3/dashboard/search` · `getDashboardsPaginated`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

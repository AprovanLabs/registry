# Filters

13 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.createFilter`

Create filter — [Provider docs](http://www.atlassian.com)

```ts
jira.createFilter(input: {
  /** \[Experimental\] Approximate last used time. Returns the date and time when the filter was last used. Returns `null` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate. */
  approximateLastUsed?: string;
  /** A description of the filter. */
  description?: string;
  /** The groups and projects that can edit the filter. */
  editPermissions?: (SharePermission)[];
  /** Whether the filter is selected as a favorite. */
  favourite?: boolean;
  /** The count of how many users have selected this filter as a favorite, including the filter owner. */
  favouritedCount?: number;
  /** The unique identifier for the filter. */
  id?: string;
  /** The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*. */
  jql?: string;
  /** The name of the filter. Must be unique. */
  name: string;
  /** The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings. */
  owner?: User;
  /** A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*. */
  searchUrl?: string;
  /** The URL of the filter. */
  self?: string;
  /** The groups and projects that the filter is shared with. */
  sharePermissions?: (SharePermission)[];
  /** A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with. */
  sharedUsers?: UserList;
  /** A paginated list of the users that are subscribed to the filter. */
  subscriptions?: FilterSubscriptionsList;
  /** A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*. */
  viewUrl?: string;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
}): Promise<Filter>
```

<sub>`POST /rest/api/3/filter` · `createFilter`</sub>

## `jira.deleteFilter`

Delete filter — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteFilter(input: {
  /** The ID of the filter to delete. */
  id: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/filter/{id}` · `deleteFilter`</sub>

## `jira.getFilter`

Get filter — [Provider docs](http://www.atlassian.com)

```ts
jira.getFilter(input: {
  /** The ID of the filter to return. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
}): Promise<Filter>
```

<sub>`GET /rest/api/3/filter/{id}` · `getFilter`</sub>

## `jira.updateFilter`

Update filter — [Provider docs](http://www.atlassian.com)

```ts
jira.updateFilter(input: {
  /** \[Experimental\] Approximate last used time. Returns the date and time when the filter was last used. Returns `null` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate. */
  approximateLastUsed?: string;
  /** A description of the filter. */
  description?: string;
  /** The groups and projects that can edit the filter. */
  editPermissions?: (SharePermission)[];
  /** Whether the filter is selected as a favorite. */
  favourite?: boolean;
  /** The count of how many users have selected this filter as a favorite, including the filter owner. */
  favouritedCount?: number;
  /** The unique identifier for the filter. */
  id?: string;
  /** The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*. */
  jql?: string;
  /** The name of the filter. Must be unique. */
  name: string;
  /** The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings. */
  owner?: User;
  /** A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*. */
  searchUrl?: string;
  /** The URL of the filter. */
  self?: string;
  /** The groups and projects that the filter is shared with. */
  sharePermissions?: (SharePermission)[];
  /** A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with. */
  sharedUsers?: UserList;
  /** A paginated list of the users that are subscribed to the filter. */
  subscriptions?: FilterSubscriptionsList;
  /** A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*. */
  viewUrl?: string;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
}, options: { params: { id: number } }): Promise<Filter>
```

<sub>`PUT /rest/api/3/filter/{id}` · `updateFilter`</sub>

## `jira.resetColumns`

Reset columns — [Provider docs](http://www.atlassian.com)

```ts
jira.resetColumns(input: {
  /** The ID of the filter. */
  id: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/filter/{id}/columns` · `resetColumns`</sub>

## `jira.getColumns`

Get columns — [Provider docs](http://www.atlassian.com)

```ts
jira.getColumns(input: {
  /** The ID of the filter. */
  id: number;
}): Promise<(ColumnItem)[]>
```

<sub>`GET /rest/api/3/filter/{id}/columns` · `getColumns`</sub>

## `jira.setColumns`

Set columns — [Provider docs](http://www.atlassian.com)

```ts
jira.setColumns(input: {
  columns?: (string)[];
  /** The ID of the filter. */
  id: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/filter/{id}/columns` · `setColumns`</sub>

## `jira.deleteFavouriteForFilter`

Remove filter as favorite — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteFavouriteForFilter(input: {
  /** The ID of the filter. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
}): Promise<Filter>
```

<sub>`DELETE /rest/api/3/filter/{id}/favourite` · `deleteFavouriteForFilter`</sub>

## `jira.setFavouriteForFilter`

Add filter as favorite — [Provider docs](http://www.atlassian.com)

```ts
jira.setFavouriteForFilter(input: {
  /** The ID of the filter. */
  id: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
}): Promise<Filter>
```

<sub>`PUT /rest/api/3/filter/{id}/favourite` · `setFavouriteForFilter`</sub>

## `jira.changeFilterOwner`

Change filter owner — [Provider docs](http://www.atlassian.com)

```ts
jira.changeFilterOwner(input: {
  /** The account ID of the new owner. */
  accountId: string;
  /** The ID of the filter to update. */
  id: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/filter/{id}/owner` · `changeFilterOwner`</sub>

## `jira.getFavouriteFilters`

Get favorite filters — [Provider docs](http://www.atlassian.com)

```ts
jira.getFavouriteFilters(input: {
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
}): Promise<(Filter)[]>
```

<sub>`GET /rest/api/3/filter/favourite` · `getFavouriteFilters`</sub>

## `jira.getMyFilters`

Get my filters — [Provider docs](http://www.atlassian.com)

```ts
jira.getMyFilters(input: {
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`. */
  expand?: string;
  /** Include the user's favorite filters in the response. */
  includeFavourites?: boolean;
}): Promise<(Filter)[]>
```

<sub>`GET /rest/api/3/filter/my` · `getMyFilters`</sub>

## `jira.getFiltersPaginated`

Search for filters — [Provider docs](http://www.atlassian.com)

```ts
jira.getFiltersPaginated(input: {
  /** String used to perform a case-insensitive partial match with `name`. */
  filterName?: string;
  /** User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`. */
  accountId?: string;
  /** This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`. */
  owner?: string;
  /** As a group's name can change, use of `groupId` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`. This parameter cannot be used with the `groupId` parameter. */
  groupname?: string;
  /** Group ID used to returns filters that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter. */
  groupId?: string;
  /** Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`. */
  projectId?: number;
  /** The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Do not exceed 200 filter IDs. */
  id?: (number)[];
  /** [Order](#ordering) the results by a field:   *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.  *  `is_favourite` Sorts by whether the filter is marked as a favorite.  *  `id` Sorts by filter ID.  *  `name` Sorts by filter name.  *  `owner` Sorts by the ID of the filter owner.  *  `is_shared` Sorts by whether the filter is shared. */
  orderBy?: "description" | "-description" | "+description" | "favourite_count" | "-favourite_count" | "+favourite_count" | "id" | "-id" | "+id" | "is_favourite" | "-is_favourite" | "+is_favourite" | "name" | "-name" | "+name" | "owner" | "-owner" | "+owner" | "is_shared" | "-is_shared" | "+is_shared";
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the filter.  *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.  *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.  *  `jql` Returns the JQL query that the filter uses.  *  `owner` Returns the owner of the filter.  *  `searchUrl` Returns a URL to perform the filter's JQL query.  *  `sharePermissions` Returns the share permissions defined for the filter.  *  `editPermissions` Returns the edit permissions defined for the filter.  *  `isWritable` Returns whether the current user has permission to edit the filter.  *  `approximateLastUsed` \[Experimental\] Returns the approximate date and time when the filter was last evaluated.  *  `subscriptions` Returns the users that are subscribed to the filter.  *  `viewUrl` Returns a URL to view the filter. */
  expand?: string;
  /** EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideSharePermissions?: boolean;
  /** When `true` this will perform a case-insensitive substring match for the provided `filterName`. When `false` the filter name will be searched using [full text search syntax](https://support.atlassian.com/jira-software-cloud/docs/search-for-issues-using-the-text-field/). */
  isSubstringMatch?: boolean;
}): Promise<PageBeanFilterDetails>
```

<sub>`GET /rest/api/3/filter/search` · `getFiltersPaginated`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

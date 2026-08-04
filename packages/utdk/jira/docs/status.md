# Status

9 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.deleteStatusesById`

Bulk delete Statuses — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteStatusesById(input: {
  /** The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.  Min items `1`, Max items `50` */
  id: (string)[];
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/statuses` · `deleteStatusesById`</sub>

## `jira.getStatusesById`

Bulk get statuses — [Provider docs](http://www.atlassian.com)

```ts
jira.getStatusesById(input: {
  /** The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.  Min items `1`, Max items `50` */
  id: (string)[];
}): Promise<(JiraStatus)[]>
```

<sub>`GET /rest/api/3/statuses` · `getStatusesById`</sub>

## `jira.createStatuses`

Bulk create statuses — [Provider docs](http://www.atlassian.com)

```ts
jira.createStatuses(input: {
  scope: StatusScope;
  /** Details of the statuses being created. */
  statuses: (StatusCreate)[];
}): Promise<(JiraStatus)[]>
```

<sub>`POST /rest/api/3/statuses` · `createStatuses`</sub>

## `jira.updateStatuses`

Bulk update statuses — [Provider docs](http://www.atlassian.com)

```ts
jira.updateStatuses(input: {
  /** The list of statuses that will be updated. */
  statuses: (StatusUpdate)[];
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/statuses` · `updateStatuses`</sub>

## `jira.getProjectIssueTypeUsagesForStatus`

Get issue type usages by status and project — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectIssueTypeUsagesForStatus(input: {
  /** The statusId to fetch issue type usages for */
  statusId: string;
  /** The projectId to fetch issue type usages for */
  projectId: string;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<StatusProjectIssueTypeUsageDto>
```

<sub>`GET /rest/api/3/statuses/{statusId}/project/{projectId}/issueTypeUsages` · `getProjectIssueTypeUsagesForStatus`</sub>

## `jira.getProjectUsagesForStatus`

Get project usages by status — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectUsagesForStatus(input: {
  /** The statusId to fetch project usages for */
  statusId: string;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<StatusProjectUsageDto>
```

<sub>`GET /rest/api/3/statuses/{statusId}/projectUsages` · `getProjectUsagesForStatus`</sub>

## `jira.getWorkflowUsagesForStatus`

Get workflow usages by status — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowUsagesForStatus(input: {
  /** The statusId to fetch workflow usages for */
  statusId: string;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<StatusWorkflowUsageDto>
```

<sub>`GET /rest/api/3/statuses/{statusId}/workflowUsages` · `getWorkflowUsagesForStatus`</sub>

## `jira.getStatusesByName`

Bulk get statuses by name — [Provider docs](http://www.atlassian.com)

```ts
jira.getStatusesByName(input: {
  /** The list of status names. To include multiple names, provide an ampersand-separated list. For example, name=nameXX&name=nameYY.  Min items `1`, Max items `50` */
  name: (string)[];
  /** The project the status is part of or null for global statuses. */
  projectId?: string;
}): Promise<(JiraStatus)[]>
```

<sub>`GET /rest/api/3/statuses/byNames` · `getStatusesByName`</sub>

## `jira.search`

Search statuses paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.search(input: {
  /** The project the status is part of or null for global statuses. */
  projectId?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Term to match status names against or null to search for all statuses in the search scope. */
  searchString?: string;
  /** Category of the status to filter by. The supported values are: `TODO`, `IN_PROGRESS`, and `DONE`. */
  statusCategory?: string;
  /** Whether to include global statuses (scope = null, not tied to any project) in the response. Defaults to false. Only relevant for project scoped queries. */
  includeGlobalStatuses?: boolean;
}): Promise<PageOfStatuses>
```

<sub>`GET /rest/api/3/statuses/search` · `search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

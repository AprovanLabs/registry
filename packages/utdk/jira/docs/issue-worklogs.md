# Issue Worklogs

10 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.bulkDeleteWorklogs`

Bulk delete worklogs — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkDeleteWorklogs(input: {
  /** A list of worklog IDs. */
  ids: (number)[];
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Defines how to update the issue's time estimate, the options are:   *  `leave` Leaves the estimate unchanged.  *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being deleted. */
  adjustEstimate?: "leave" | "auto";
  /** Whether the work log entries should be removed to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. */
  overrideEditableFlag?: boolean;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/worklog` · `bulkDeleteWorklogs`</sub>

## `jira.getIssueWorklog`

Get issue worklogs — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueWorklog(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. */
  startedAfter?: number;
  /** The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned. */
  startedBefore?: number;
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties. */
  expand?: string;
}): Promise<PageOfWorklogs>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/worklog` · `getIssueWorklog`</sub>

## `jira.addWorklog`

Add worklog — [Provider docs](http://www.atlassian.com)

```ts
jira.addWorklog(input: {
  /** Details of the user who created the worklog. */
  author?: UserDetails;
  /** A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog. */
  comment?: unknown;
  /** The datetime on which the worklog was created. */
  created?: string;
  /** The ID of the worklog record. */
  id?: string;
  /** The ID of the issue this worklog is for. */
  issueId?: string;
  /** Details of properties for the worklog. Optional when creating or updating a worklog. */
  properties?: (EntityProperty)[];
  /** The URL of the worklog item. */
  self?: string;
  /** The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. */
  started?: string;
  /** The time spent working on the issue as days (\#d), hours (\#h), or minutes (\#m or \#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided. */
  timeSpent?: string;
  /** The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided. */
  timeSpentSeconds?: number;
  /** Details of the user who last updated the worklog. */
  updateAuthor?: UserDetails;
  /** The datetime on which the worklog was last updated. */
  updated?: string;
  /** Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog. */
  visibility?: Visibility;
  /** The ID or key the issue. */
  issueIdOrKey: string;
  /** Whether users watching the issue are notified by email. */
  notifyUsers?: boolean;
  /** Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Reduces the estimate by amount specified in `reduceBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. */
  adjustEstimate?: "new" | "leave" | "manual" | "auto";
  /** The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`. */
  newEstimate?: string;
  /** The amount to reduce the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m). For example, *2d*. Required when `adjustEstimate` is `manual`. */
  reduceBy?: string;
  /** Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties. */
  expand?: string;
  /** Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. */
  overrideEditableFlag?: boolean;
  [key: string]: unknown;
}): Promise<Worklog>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/worklog` · `addWorklog`</sub>

## `jira.deleteWorklog`

Delete worklog — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorklog(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  id: string;
  /** Whether users watching the issue are notified by email. */
  notifyUsers?: boolean;
  /** Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Increases the estimate by amount specified in `increaseBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. */
  adjustEstimate?: "new" | "leave" | "manual" | "auto";
  /** The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`. */
  newEstimate?: string;
  /** The amount to increase the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `manual`. */
  increaseBy?: string;
  /** Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. */
  overrideEditableFlag?: boolean;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/worklog/{id}` · `deleteWorklog`</sub>

## `jira.getWorklog`

Get worklog — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorklog(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  id: string;
  /** Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  `properties`, which returns worklog properties. */
  expand?: string;
}): Promise<Worklog>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/worklog/{id}` · `getWorklog`</sub>

## `jira.updateWorklog`

Update worklog — [Provider docs](http://www.atlassian.com)

```ts
jira.updateWorklog(input: {
  /** Details of the user who created the worklog. */
  author?: UserDetails;
  /** A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog. */
  comment?: unknown;
  /** The datetime on which the worklog was created. */
  created?: string;
  /** The ID of the worklog record. */
  id?: string;
  /** The ID of the issue this worklog is for. */
  issueId?: string;
  /** Details of properties for the worklog. Optional when creating or updating a worklog. */
  properties?: (EntityProperty)[];
  /** The URL of the worklog item. */
  self?: string;
  /** The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. */
  started?: string;
  /** The time spent working on the issue as days (\#d), hours (\#h), or minutes (\#m or \#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided. */
  timeSpent?: string;
  /** The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided. */
  timeSpentSeconds?: number;
  /** Details of the user who last updated the worklog. */
  updateAuthor?: UserDetails;
  /** The datetime on which the worklog was last updated. */
  updated?: string;
  /** Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog. */
  visibility?: Visibility;
  /** The ID or key the issue. */
  issueIdOrKey: string;
  /** Whether users watching the issue are notified by email. */
  notifyUsers?: boolean;
  /** Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`. */
  adjustEstimate?: "new" | "leave" | "manual" | "auto";
  /** The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`. */
  newEstimate?: string;
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties. */
  expand?: string;
  /** Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. */
  overrideEditableFlag?: boolean;
  [key: string]: unknown;
}, options: { params: { id: string } }): Promise<Worklog>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}/worklog/{id}` · `updateWorklog`</sub>

## `jira.bulkMoveWorklogs`

Bulk move worklogs — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkMoveWorklogs(input: {
  /** A list of worklog IDs. */
  ids?: (number)[];
  /** The issue id or key of the destination issue */
  issueIdOrKey?: string;
  /** Defines how to update the issues' time estimate, the options are:   *  `leave` Leaves the estimate unchanged.  *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being moved in the source issue, and increases it in the destination issue. */
  adjustEstimate?: "leave" | "auto";
  /** Whether the work log entry should be moved to and from the issues even if the issues are not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. */
  overrideEditableFlag?: boolean;
}, options: { params: { issueIdOrKey: string } }): Promise<undefined>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/worklog/move` · `bulkMoveWorklogs`</sub>

## `jira.getIdsOfWorklogsDeletedSince`

Get IDs of deleted worklogs — [Provider docs](http://www.atlassian.com)

```ts
jira.getIdsOfWorklogsDeletedSince(input: {
  /** The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. */
  since?: number;
}): Promise<ChangedWorklogs>
```

<sub>`GET /rest/api/3/worklog/deleted` · `getIdsOfWorklogsDeletedSince`</sub>

## `jira.getWorklogsForIds`

Get worklogs — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorklogsForIds(input: {
  /** A list of worklog IDs. */
  ids: (number)[];
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. */
  expand?: string;
}): Promise<(Worklog)[]>
```

<sub>`POST /rest/api/3/worklog/list` · `getWorklogsForIds`</sub>

## `jira.getIdsOfWorklogsModifiedSince`

Get IDs of updated worklogs — [Provider docs](http://www.atlassian.com)

```ts
jira.getIdsOfWorklogsModifiedSince(input: {
  /** The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. */
  since?: number;
  /** Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. */
  expand?: string;
}): Promise<ChangedWorklogs>
```

<sub>`GET /rest/api/3/worklog/updated` · `getIdsOfWorklogsModifiedSince`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

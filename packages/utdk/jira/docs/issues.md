# Issues

23 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getBulkChangelogs`

Bulk fetch changelogs — [Provider docs](http://www.atlassian.com)

```ts
jira.getBulkChangelogs(input: {
  /** List of field IDs to filter changelogs */
  fieldIds?: (string)[];
  /** List of issue IDs/keys to fetch changelogs for */
  issueIdsOrKeys: (string)[];
  /** The maximum number of items to return per page */
  maxResults?: number;
  /** The cursor for pagination */
  nextPageToken?: string;
}): Promise<BulkChangelogResponseBean>
```

<sub>`POST /rest/api/3/changelog/bulkfetch` · `getBulkChangelogs`</sub>

## `jira.getEvents`

Get events — [Provider docs](http://www.atlassian.com)

```ts
jira.getEvents(): Promise<(IssueEvent)[]>
```

<sub>`GET /rest/api/3/events` · `getEvents`</sub>

## `jira.createIssue`

Create issue — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssue(input: {
  /** List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`. */
  fields?: { [key: string]: unknown | undefined };
  /** Additional issue history details. */
  historyMetadata?: HistoryMetadata;
  /** Details of issue properties to be add or update. */
  properties?: (EntityProperty)[];
  /** Details of a transition. Required when performing a transition, optional when creating or editing an issue. */
  transition?: IssueTransition;
  /** A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`. */
  update?: { [key: string]: (FieldUpdateOperation)[] | undefined };
  /** Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen. */
  updateHistory?: boolean;
  [key: string]: unknown;
}): Promise<CreatedIssue>
```

<sub>`POST /rest/api/3/issue` · `createIssue`</sub>

## `jira.deleteIssue`

Delete issue — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssue(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether the issue's subtasks are deleted when the issue is deleted. */
  deleteSubtasks?: "true" | "false";
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}` · `deleteIssue`</sub>

## `jira.getIssue`

Get issue — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssue(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all (default) fields except description.  *  `*navigable,-comment` Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields. */
  fields?: (string)[];
  /** Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID. */
  fieldsByKeys?: boolean;
  /** Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored. */
  expand?: string;
  /** A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  `*all` Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  `*all` Returns all properties.  *  `*all,-prop1` Returns all properties except `prop1`.  *  `prop1,prop2` Returns `prop1` and `prop2` properties.  This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`. */
  properties?: (string)[];
  /** Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field. */
  updateHistory?: boolean;
  /** Whether to fail the request quickly in case of an error while loading fields for an issue. For `failFast=true`, if one field fails, the entire operation fails. For `failFast=false`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s). */
  failFast?: boolean;
}): Promise<IssueBean>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}` · `getIssue`</sub>

## `jira.editIssue`

Edit issue — [Provider docs](http://www.atlassian.com)

```ts
jira.editIssue(input: {
  /** List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`. */
  fields?: { [key: string]: unknown | undefined };
  /** Additional issue history details. */
  historyMetadata?: HistoryMetadata;
  /** Details of issue properties to be add or update. */
  properties?: (EntityProperty)[];
  /** Details of a transition. Required when performing a transition, optional when creating or editing an issue. */
  transition?: IssueTransition;
  /** A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`. */
  update?: { [key: string]: (FieldUpdateOperation)[] | undefined };
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored. */
  notifyUsers?: boolean;
  /** Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideScreenSecurity?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
  /** Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get). */
  returnIssue?: boolean;
  /** The Get issue API expand parameter to use in the response if the `returnIssue` parameter is `true`. */
  expand?: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}` · `editIssue`</sub>

## `jira.assignIssue`

Assign issue — [Provider docs](http://www.atlassian.com)

```ts
jira.assignIssue(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests. */
  accountId?: string;
  /** The user account type. Can take the following values:   *  `atlassian` regular Atlassian user account  *  `app` system account used for Connect applications and OAuth to represent external systems  *  `customer` Jira Service Desk account representing an external service desk */
  accountType?: "atlassian" | "app" | "customer" | "unknown";
  /** Whether the user is active. */
  active?: boolean;
  /** The app type of the user account when accountType is 'app'. Can take the following values:   *  `service` Service Account  *  `agent` Rovo Agent Account  *  `unknown` Unknown app type */
  appType?: string;
  /** The application roles the user is assigned to. */
  applicationRoles?: SimpleListWrapperApplicationRole;
  /** The avatars of the user. */
  avatarUrls?: AvatarUrlsBean;
  /** The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. */
  displayName?: string;
  /** The email address of the user. Depending on the user’s privacy setting, this may be returned as null. */
  emailAddress?: string;
  /** Expand options that include additional user details in the response. */
  expand?: string;
  /** The groups that the user belongs to. */
  groups?: SimpleListWrapperGroupName;
  /** Whether the user is a guest. */
  guest?: boolean;
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** The locale of the user. Depending on the user’s privacy setting, this may be returned as null. */
  locale?: string;
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;
  /** The URL of the user. */
  self?: string;
  /** The time zone specified in the user's profile. If the user's time zone is not visible to the current user (due to user's profile setting), or if a time zone has not been set, the instance's default time zone will be returned. */
  timeZone?: string;
  /** The ID or key of the issue to be assigned. */
  issueIdOrKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}/assignee` · `assignIssue`</sub>

## `jira.getChangeLogs`

Get changelogs — [Provider docs](http://www.atlassian.com)

```ts
jira.getChangeLogs(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanChangelog>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/changelog` · `getChangeLogs`</sub>

## `jira.getChangeLogsByIds`

Get changelogs by IDs — [Provider docs](http://www.atlassian.com)

```ts
jira.getChangeLogsByIds(input: {
  /** The list of changelog IDs. */
  changelogIds: (number)[];
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}): Promise<PageOfChangelogs>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/changelog/list` · `getChangeLogsByIds`</sub>

## `jira.getEditIssueMeta`

Get edit issue metadata — [Provider docs](http://www.atlassian.com)

```ts
jira.getEditIssueMeta(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether hidden fields are returned. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideScreenSecurity?: boolean;
  /** Whether non-editable fields are returned. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
}): Promise<IssueUpdateMetadata>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/editmeta` · `getEditIssueMeta`</sub>

## `jira.notify`

Send notification for issue — [Provider docs](http://www.atlassian.com)

```ts
jira.notify(input: {
  /** The HTML body of the email notification for the issue. */
  htmlBody?: string;
  /** Restricts the notifications to users with the specified permissions. */
  restrict?: NotificationRecipientsRestrictions;
  /** The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary. */
  subject?: string;
  /** The plain text body of the email notification for the issue. */
  textBody?: string;
  /** The recipients of the email notification for the issue. */
  to?: NotificationRecipients;
  /** ID or key of the issue that the notification is sent for. */
  issueIdOrKey: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/notify` · `notify`</sub>

## `jira.getTransitions`

Get transitions — [Provider docs](http://www.atlassian.com)

```ts
jira.getTransitions(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post). */
  expand?: string;
  /** The ID of the transition. */
  transitionId?: string;
  /** Whether transitions with the condition *Hide From User Condition* are included in the response. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  skipRemoteOnlyCondition?: boolean;
  /** Whether details of transitions that fail a condition are included in the response */
  includeUnavailableTransitions?: boolean;
  /** Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value. */
  sortByOpsBarAndStatus?: boolean;
}): Promise<Transitions>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/transitions` · `getTransitions`</sub>

## `jira.doTransition`

Transition issue — [Provider docs](http://www.atlassian.com)

```ts
jira.doTransition(input: {
  /** List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`. */
  fields?: { [key: string]: unknown | undefined };
  /** Additional issue history details. */
  historyMetadata?: HistoryMetadata;
  /** Details of issue properties to be add or update. */
  properties?: (EntityProperty)[];
  /** Details of a transition. Required when performing a transition, optional when creating or editing an issue. */
  transition?: IssueTransition;
  /** A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`. */
  update?: { [key: string]: (FieldUpdateOperation)[] | undefined };
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/transitions` · `doTransition`</sub>

## `jira.archiveIssuesAsync`

Archive issue(s) by JQL — [Provider docs](http://www.atlassian.com)

```ts
jira.archiveIssuesAsync(input: {
  jql?: string;
}): Promise<string>
```

<sub>`POST /rest/api/3/issue/archive` · `archiveIssuesAsync`</sub>

## `jira.archiveIssues`

Archive issue(s) by issue ID/key — [Provider docs](http://www.atlassian.com)

```ts
jira.archiveIssues(input: {
  issueIdsOrKeys?: (string)[];
}): Promise<IssueArchivalSyncResponse>
```

<sub>`PUT /rest/api/3/issue/archive` · `archiveIssues`</sub>

## `jira.createIssues`

Bulk create issue — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssues(input: {
  issueUpdates?: (IssueUpdateDetails)[];
  [key: string]: unknown;
}): Promise<CreatedIssues>
```

<sub>`POST /rest/api/3/issue/bulk` · `createIssues`</sub>

## `jira.bulkFetchIssues`

Bulk fetch issues — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkFetchIssues(input: {
  /** Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent. This returns a maximum of 40 changelogs. If you require more, please refer to [Bulk fetch changelogs](#api-rest-api-3-changelog-bulkfetch-post).  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version. */
  expand?: (string)[];
  /** A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  The default is `*navigable`.  Examples:   *  `summary,comment` Returns the summary and comments fields only.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  Multiple `fields` parameters can be included in a request.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: (string)[];
  /** Reference fields by their key (rather than ID). The default is `false`. */
  fieldsByKeys?: boolean;
  /** An array of issue IDs or issue keys to fetch. You can mix issue IDs and keys in the same query. */
  issueIdsOrKeys: (string)[];
  /** A list of issue property keys of issue properties to be included in the results. A maximum of 5 issue property keys can be specified. */
  properties?: (string)[];
}): Promise<BulkIssueResults>
```

<sub>`POST /rest/api/3/issue/bulkfetch` · `bulkFetchIssues`</sub>

## `jira.getCreateIssueMeta`

Get create issue metadata — [Provider docs](http://www.atlassian.com)

```ts
jira.getCreateIssueMeta(input: {
  /** List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`. */
  projectIds?: (string)[];
  /** List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`. */
  projectKeys?: (string)[];
  /** List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`. */
  issuetypeIds?: (string)[];
  /** List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`. */
  issuetypeNames?: (string)[];
  /** Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post). */
  expand?: string;
}): Promise<IssueCreateMetadata>
```

<sub>`GET /rest/api/3/issue/createmeta` · `getCreateIssueMeta`</sub>

## `jira.getCreateIssueMetaIssueTypes`

Get create metadata issue types for a project — [Provider docs](http://www.atlassian.com)

```ts
jira.getCreateIssueMetaIssueTypes(input: {
  /** The ID or key of the project. */
  projectIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageOfCreateMetaIssueTypes>
```

<sub>`GET /rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes` · `getCreateIssueMetaIssueTypes`</sub>

## `jira.getCreateIssueMetaIssueTypeId`

Get create field metadata for a project and issue type id — [Provider docs](http://www.atlassian.com)

```ts
jira.getCreateIssueMetaIssueTypeId(input: {
  /** The ID or key of the project. */
  projectIdOrKey: string;
  /** The issuetype ID. */
  issueTypeId: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageOfCreateMetaIssueTypeWithField>
```

<sub>`GET /rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId}` · `getCreateIssueMetaIssueTypeId`</sub>

## `jira.getIssueLimitReport`

Get issue limit report — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueLimitReport(input: {
  /** Return issue keys instead of issue ids in the response.  Usage: Add `?isReturningKeys=true` to the end of the path to request issue keys. */
  isReturningKeys?: boolean;
}): Promise<IssueLimitReportResponseBean>
```

<sub>`GET /rest/api/3/issue/limit/report` · `getIssueLimitReport`</sub>

## `jira.unarchiveIssues`

Unarchive issue(s) by issue keys/ID — [Provider docs](http://www.atlassian.com)

```ts
jira.unarchiveIssues(input: {
  issueIdsOrKeys?: (string)[];
}): Promise<IssueArchivalSyncResponse>
```

<sub>`PUT /rest/api/3/issue/unarchive` · `unarchiveIssues`</sub>

## `jira.exportArchivedIssues`

Export archived issue(s) — [Provider docs](http://www.atlassian.com)

```ts
jira.exportArchivedIssues(input: {
  /** List archived issues archived by a specified account ID. */
  archivedBy?: (string)[];
  archivedDateRange?: DateRangeFilterRequest;
  /** List archived issues with a specified issue type ID. */
  issueTypes?: (string)[];
  /** List archived issues with a specified project key. */
  projects?: (string)[];
  /** List archived issues where the reporter is a specified account ID. */
  reporters?: (string)[];
  [key: string]: unknown;
}): Promise<ExportArchivedIssuesTaskProgressResponse>
```

<sub>`PUT /rest/api/3/issues/archive/export` · `exportArchivedIssues`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

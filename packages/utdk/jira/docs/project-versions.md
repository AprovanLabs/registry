# Project Versions

15 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getProjectVersionsPaginated`

Get project versions paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectVersionsPaginated(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field:   *  `description` Sorts by version description.  *  `name` Sorts by version name.  *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  `sequence` Sorts by the order of appearance in the user interface.  *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last. */
  orderBy?: "description" | "-description" | "+description" | "name" | "-name" | "+name" | "releaseDate" | "-releaseDate" | "+releaseDate" | "sequence" | "-sequence" | "+sequence" | "startDate" | "-startDate" | "+startDate";
  /** Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive). */
  query?: string;
  /** A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`. */
  status?: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `issuesstatus` Returns the number of issues in each status category for each version.  *  `operations` Returns actions that can be performed on the specified version.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing the approvers for this version. */
  expand?: string;
}): Promise<PageBeanVersion>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/version` · `getProjectVersionsPaginated`</sub>

## `jira.getProjectVersions`

Get project versions — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectVersions(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version. */
  expand?: string;
}): Promise<(Version)[]>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/versions` · `getProjectVersions`</sub>

## `jira.createVersion`

Create version — [Provider docs](http://www.atlassian.com)

```ts
jira.createVersion(input: {
  /** If the expand option `approvers` is used, returns a list containing the approvers for this version. */
  approvers?: (VersionApprover)[];
  /** Indicates that the version is archived. Optional when creating or updating a version. */
  archived?: boolean;
  /** The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes. */
  description?: string;
  /** The Atlassian account ID of the version driver. Optional when creating or updating a version. If the expand option `driver` is used, returns the Atlassian account ID of the driver. */
  driver?: string;
  /** Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing approvers for this version.  Optional for create and update. */
  expand?: string;
  /** The ID of the version. */
  id?: string;
  /** If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*. */
  issuesStatusForFixVersion?: VersionIssuesStatus;
  /** The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version. */
  moveUnfixedIssuesTo?: string;
  /** The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters. */
  name?: string;
  /** If the expand option `operations` is used, returns the list of operations available for this version. */
  operations?: (SimpleLink)[];
  /** Indicates that the version is overdue. */
  overdue?: boolean;
  /** Deprecated. Use `projectId`. */
  project?: string;
  /** The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version. */
  projectId?: number;
  /** The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
  releaseDate?: string;
  /** Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. */
  released?: boolean;
  /** The URL of the version. */
  self?: string;
  /** The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
  startDate?: string;
  /** The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format. */
  userReleaseDate?: string;
  /** The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format. */
  userStartDate?: string;
}): Promise<Version>
```

<sub>`POST /rest/api/3/version` · `createVersion`</sub>

## `jira.deleteVersion`

Delete version — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteVersion(input: {
  /** The ID of the version. */
  id: string;
  /** The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. */
  moveFixIssuesTo?: string;
  /** The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. */
  moveAffectedIssuesTo?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/version/{id}` · `deleteVersion`</sub>

## `jira.getVersion`

Get version — [Provider docs](http://www.atlassian.com)

```ts
jira.getVersion(input: {
  /** The ID of the version. */
  id: string;
  /** Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing the Atlassian account IDs of approvers for this version. */
  expand?: string;
}): Promise<Version>
```

<sub>`GET /rest/api/3/version/{id}` · `getVersion`</sub>

## `jira.updateVersion`

Update version — [Provider docs](http://www.atlassian.com)

```ts
jira.updateVersion(input: {
  /** If the expand option `approvers` is used, returns a list containing the approvers for this version. */
  approvers?: (VersionApprover)[];
  /** Indicates that the version is archived. Optional when creating or updating a version. */
  archived?: boolean;
  /** The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes. */
  description?: string;
  /** The Atlassian account ID of the version driver. Optional when creating or updating a version. If the expand option `driver` is used, returns the Atlassian account ID of the driver. */
  driver?: string;
  /** Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing approvers for this version.  Optional for create and update. */
  expand?: string;
  /** The ID of the version. */
  id?: string;
  /** If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*. */
  issuesStatusForFixVersion?: VersionIssuesStatus;
  /** The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version. */
  moveUnfixedIssuesTo?: string;
  /** The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters. */
  name?: string;
  /** If the expand option `operations` is used, returns the list of operations available for this version. */
  operations?: (SimpleLink)[];
  /** Indicates that the version is overdue. */
  overdue?: boolean;
  /** Deprecated. Use `projectId`. */
  project?: string;
  /** The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version. */
  projectId?: number;
  /** The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
  releaseDate?: string;
  /** Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. */
  released?: boolean;
  /** The URL of the version. */
  self?: string;
  /** The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. */
  startDate?: string;
  /** The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format. */
  userReleaseDate?: string;
  /** The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format. */
  userStartDate?: string;
}, options: { params: { id: string } }): Promise<Version>
```

<sub>`PUT /rest/api/3/version/{id}` · `updateVersion`</sub>

## `jira.mergeVersions`

Merge versions — [Provider docs](http://www.atlassian.com)

```ts
jira.mergeVersions(input: {
  /** The ID of the version to delete. */
  id: string;
  /** The ID of the version to merge into. */
  moveIssuesTo: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/version/{id}/mergeto/{moveIssuesTo}` · `mergeVersions`</sub>

## `jira.moveVersion`

Move version — [Provider docs](http://www.atlassian.com)

```ts
jira.moveVersion(input: {
  /** The URL (self link) of the version after which to place the moved version. Cannot be used with `position`. */
  after?: string;
  /** An absolute position in which to place the moved version. Cannot be used with `after`. */
  position?: "Earlier" | "Later" | "First" | "Last";
  /** The ID of the version to be moved. */
  id: string;
}): Promise<Version>
```

<sub>`POST /rest/api/3/version/{id}/move` · `moveVersion`</sub>

## `jira.getVersionRelatedIssues`

Get version's related issues count — [Provider docs](http://www.atlassian.com)

```ts
jira.getVersionRelatedIssues(input: {
  /** The ID of the version. */
  id: string;
}): Promise<VersionIssueCounts>
```

<sub>`GET /rest/api/3/version/{id}/relatedIssueCounts` · `getVersionRelatedIssues`</sub>

## `jira.getRelatedWork`

Get related work — [Provider docs](http://www.atlassian.com)

```ts
jira.getRelatedWork(input: {
  /** The ID of the version. */
  id: string;
}): Promise<(VersionRelatedWork)[]>
```

<sub>`GET /rest/api/3/version/{id}/relatedwork` · `getRelatedWork`</sub>

## `jira.createRelatedWork`

Create related work — [Provider docs](http://www.atlassian.com)

```ts
jira.createRelatedWork(input: {
  /** The category of the related work */
  category: string;
  /** The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API. */
  issueId?: number;
  /** The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it. */
  relatedWorkId?: string;
  /** The title of the related work */
  title?: string;
  /** The URL of the related work. Will be null for the native release note related work item, but is otherwise required. */
  url?: string;
  id: string;
}): Promise<VersionRelatedWork>
```

<sub>`POST /rest/api/3/version/{id}/relatedwork` · `createRelatedWork`</sub>

## `jira.updateRelatedWork`

Update related work — [Provider docs](http://www.atlassian.com)

```ts
jira.updateRelatedWork(input: {
  /** The category of the related work */
  category: string;
  /** The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API. */
  issueId?: number;
  /** The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it. */
  relatedWorkId?: string;
  /** The title of the related work */
  title?: string;
  /** The URL of the related work. Will be null for the native release note related work item, but is otherwise required. */
  url?: string;
  /** The ID of the version to update the related work on. For the related work id, pass it to the input JSON. */
  id: string;
}): Promise<VersionRelatedWork>
```

<sub>`PUT /rest/api/3/version/{id}/relatedwork` · `updateRelatedWork`</sub>

## `jira.deleteAndReplaceVersion`

Delete and replace version — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteAndReplaceVersion(input: {
  /** An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version. */
  customFieldReplacementList?: (CustomFieldReplacement)[];
  /** The ID of the version to update `affectedVersion` to when the field contains the deleted version. */
  moveAffectedIssuesTo?: number;
  /** The ID of the version to update `fixVersion` to when the field contains the deleted version. */
  moveFixIssuesTo?: number;
  /** The ID of the version. */
  id: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/version/{id}/removeAndSwap` · `deleteAndReplaceVersion`</sub>

## `jira.getVersionUnresolvedIssues`

Get version's unresolved issues count — [Provider docs](http://www.atlassian.com)

```ts
jira.getVersionUnresolvedIssues(input: {
  /** The ID of the version. */
  id: string;
}): Promise<VersionUnresolvedIssuesCount>
```

<sub>`GET /rest/api/3/version/{id}/unresolvedIssueCount` · `getVersionUnresolvedIssues`</sub>

## `jira.deleteRelatedWork`

Delete related work — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteRelatedWork(input: {
  /** The ID of the version that the target related work belongs to. */
  versionId: string;
  /** The ID of the related work to delete. */
  relatedWorkId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/version/{versionId}/relatedwork/{relatedWorkId}` · `deleteRelatedWork`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

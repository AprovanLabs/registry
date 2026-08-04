# Workflows

16 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.deleteInactiveWorkflow`

Delete inactive workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteInactiveWorkflow(input: {
  /** The entity ID of the workflow. */
  entityId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/workflow/{entityId}` · `deleteInactiveWorkflow`</sub>

## `jira.getWorkflowProjectIssueTypeUsages`

Get issue types in a project that are using a given workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowProjectIssueTypeUsages(input: {
  /** The workflow ID */
  workflowId: string;
  /** The project ID */
  projectId: number;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<WorkflowProjectIssueTypeUsageDto>
```

<sub>`GET /rest/api/3/workflow/{workflowId}/project/{projectId}/issueTypeUsages` · `getWorkflowProjectIssueTypeUsages`</sub>

## `jira.getProjectUsagesForWorkflow`

Get projects using a given workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectUsagesForWorkflow(input: {
  /** The workflow ID */
  workflowId: string;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<WorkflowProjectUsageDto>
```

<sub>`GET /rest/api/3/workflow/{workflowId}/projectUsages` · `getProjectUsagesForWorkflow`</sub>

## `jira.getWorkflowSchemeUsagesForWorkflow`

Get workflow schemes which are using a given workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowSchemeUsagesForWorkflow(input: {
  /** The workflow ID */
  workflowId: string;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<WorkflowSchemeUsageDto>
```

<sub>`GET /rest/api/3/workflow/{workflowId}/workflowSchemes` · `getWorkflowSchemeUsagesForWorkflow`</sub>

## `jira.readWorkflowFromHistory`

Read workflow version from history — [Provider docs](http://www.atlassian.com)

```ts
jira.readWorkflowFromHistory(input: {
  version?: number;
  workflowId?: string;
}): Promise<WorkflowHistoryReadResponseDto>
```

<sub>`POST /rest/api/3/workflow/history` · `readWorkflowFromHistory`</sub>

## `jira.listWorkflowHistory`

List workflow history entries — [Provider docs](http://www.atlassian.com)

```ts
jira.listWorkflowHistory(input: {
  /** The id of the workflow to read the history for. */
  workflowId?: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `includeIntermediateWorkflows` Includes intermediate workflow versions that are sometimes created during workflow updates or migrations. By default, these are omitted from the response. */
  expand?: string;
}): Promise<WorkflowHistoryListResponseDto>
```

<sub>`POST /rest/api/3/workflow/history/list` · `listWorkflowHistory`</sub>

## `jira.getWorkflowsPaginated`

Get workflows paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowsPaginated(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** The name of a workflow to return. To include multiple workflows, provide an ampersand-separated list. For example, `workflowName=name1&workflowName=name2`. */
  workflowName?: (string)[];
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `transitions` For each workflow, returns information about the transitions inside the workflow.  *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.  *  `transitions.properties` For each workflow transition, returns information about its properties. Transitions are included automatically if this expand is requested.  *  `statuses` For each workflow, returns information about the statuses inside the workflow.  *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.  *  `default` For each workflow, returns information about whether this is the default workflow.  *  `schemes` For each workflow, returns information about the workflow schemes the workflow is assigned to.  *  `projects` For each workflow, returns information about the projects the workflow is assigned to, through workflow schemes.  *  `hasDraftWorkflow` For each workflow, returns information about whether the workflow has a draft version.  *  `operations` For each workflow, returns information about the actions that can be undertaken on the workflow. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with workflow name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:   *  `name` Sorts by workflow name.  *  `created` Sorts by create time.  *  `updated` Sorts by update time. */
  orderBy?: "name" | "-name" | "+name" | "created" | "-created" | "+created" | "updated" | "+updated" | "-updated";
  /** Filters active and inactive workflows. */
  isActive?: boolean;
}): Promise<PageBeanWorkflow>
```

<sub>`GET /rest/api/3/workflow/search` · `getWorkflowsPaginated`</sub>

## `jira.readWorkflows`

Bulk get workflows — [Provider docs](http://www.atlassian.com)

```ts
jira.readWorkflows(input: {
  /** The list of projects and issue types to query. */
  projectAndIssueTypes?: (ProjectAndIssueTypePair)[];
  /** The list of workflow IDs to query. */
  workflowIds?: (string)[];
  /** The list of workflow names to query. */
  workflowNames?: (string)[];
}): Promise<WorkflowReadResponse>
```

<sub>`POST /rest/api/3/workflows` · `readWorkflows`</sub>

## `jira.workflowCapabilities`

Get available workflow capabilities — [Provider docs](http://www.atlassian.com)

```ts
jira.workflowCapabilities(input: {
  workflowId?: string;
  projectId?: string;
  issueTypeId?: string;
}): Promise<WorkflowCapabilities>
```

<sub>`GET /rest/api/3/workflows/capabilities` · `workflowCapabilities`</sub>

## `jira.createWorkflows`

Bulk create workflows — [Provider docs](http://www.atlassian.com)

```ts
jira.createWorkflows(input: {
  scope?: WorkflowScope;
  /** The statuses to associate with the workflows. */
  statuses?: (WorkflowStatusUpdate)[];
  /** The details of the workflows to create. */
  workflows?: (WorkflowCreate)[];
}): Promise<WorkflowCreateResponse>
```

<sub>`POST /rest/api/3/workflows/create` · `createWorkflows`</sub>

## `jira.validateCreateWorkflows`

Validate create workflows — [Provider docs](http://www.atlassian.com)

```ts
jira.validateCreateWorkflows(input: {
  payload: WorkflowCreateRequest;
  validationOptions?: ValidationOptionsForCreate;
}): Promise<WorkflowValidationErrorList>
```

<sub>`POST /rest/api/3/workflows/create/validation` · `validateCreateWorkflows`</sub>

## `jira.getDefaultEditor`

Get the user's default workflow editor — [Provider docs](http://www.atlassian.com)

```ts
jira.getDefaultEditor(): Promise<DefaultWorkflowEditorResponse>
```

<sub>`GET /rest/api/3/workflows/defaultEditor` · `getDefaultEditor`</sub>

## `jira.readWorkflowPreviews`

Preview workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.readWorkflowPreviews(input: {
  /** The list of issue type IDs. At most 25 issue type IDs can be specified. */
  issueTypeIds?: (string)[];
  /** The projectId parameter is required and will be used for permission checks. In addition, you must supply at least one of the following lookup terms: *workflowNames*, *workflowIds*, or *issueTypeIds*. The specified workflows must be associated with the given project. */
  projectId: string;
  /** The list of workflow IDs to be returned. At most 25 workflow IDs can be specified. */
  workflowIds?: (string)[];
  /** The list of workflow names to be returned. At most 25 workflow names can be specified. */
  workflowNames?: (string)[];
}): Promise<WorkflowPreviewResponse>
```

<sub>`POST /rest/api/3/workflows/preview` · `readWorkflowPreviews`</sub>

## `jira.searchWorkflows`

Search workflows — [Provider docs](http://www.atlassian.com)

```ts
jira.searchWorkflows(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `values.transitions` Returns the transitions that each workflow is associated with. */
  expand?: string;
  /** String used to perform a case-insensitive partial match with workflow name. */
  queryString?: string;
  /** [Order](#ordering) the results by a field:   *  `name` Sorts by workflow name.  *  `created` Sorts by create time.  *  `updated` Sorts by update time. */
  orderBy?: string;
  /** The scope of the workflow. Global for company-managed projects and Project for team-managed projects. */
  scope?: string;
  /** Filters active and inactive workflows. */
  isActive?: boolean;
  /** The ID of the project to filter the workflows by. Only workflows associated with the given project are returned. */
  projectId?: number;
}): Promise<WorkflowSearchResponse>
```

<sub>`GET /rest/api/3/workflows/search` · `searchWorkflows`</sub>

## `jira.updateWorkflows`

Bulk update workflows — [Provider docs](http://www.atlassian.com)

```ts
jira.updateWorkflows(input: {
  /** The statuses to associate with the workflows. */
  statuses?: (WorkflowStatusUpdate)[];
  /** The details of the workflows to update. */
  workflows?: (WorkflowUpdate)[];
}): Promise<WorkflowUpdateResponse>
```

<sub>`POST /rest/api/3/workflows/update` · `updateWorkflows`</sub>

## `jira.validateUpdateWorkflows`

Validate update workflows — [Provider docs](http://www.atlassian.com)

```ts
jira.validateUpdateWorkflows(input: {
  payload: WorkflowUpdateRequest;
  validationOptions?: ValidationOptionsForUpdate;
}): Promise<WorkflowValidationErrorList>
```

<sub>`POST /rest/api/3/workflows/update/validation` · `validateUpdateWorkflows`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

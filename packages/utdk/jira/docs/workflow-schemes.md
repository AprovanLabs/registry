# Workflow Schemes

19 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllWorkflowSchemes`

Get all workflow schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllWorkflowSchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
}): Promise<PageBeanWorkflowScheme>
```

<sub>`GET /rest/api/3/workflowscheme` · `getAllWorkflowSchemes`</sub>

## `jira.createWorkflowScheme`

Create workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createWorkflowScheme(input: {
  /** The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*. */
  defaultWorkflow?: string;
  /** The description of the workflow scheme. */
  description?: string;
  /** Whether the workflow scheme is a draft or not. */
  draft?: boolean;
  /** The ID of the workflow scheme. */
  id?: number;
  /** The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme. */
  issueTypeMappings?: { [key: string]: string | undefined };
  /** The issue types available in Jira. */
  issueTypes?: { [key: string]: IssueTypeDetails | undefined };
  /** The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows. */
  lastModified?: string;
  /** The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows. */
  lastModifiedUser?: User;
  /** The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme. */
  name?: string;
  /** For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. */
  originalDefaultWorkflow?: string;
  /** For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme. */
  originalIssueTypeMappings?: { [key: string]: string | undefined };
  self?: string;
  /** Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:   *  Update an active workflow scheme with `updateDraftIfNeeded` set to `true`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `false`: An error is returned, as active workflow schemes cannot be updated.  *  Update an inactive workflow scheme with `updateDraftIfNeeded` set to `true`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.  Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}): Promise<WorkflowScheme>
```

<sub>`POST /rest/api/3/workflowscheme` · `createWorkflowScheme`</sub>

## `jira.deleteWorkflowScheme`

Delete workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorkflowScheme(input: {
  /** The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*. */
  id: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}` · `deleteWorkflowScheme`</sub>

## `jira.getWorkflowScheme`

Get workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowScheme(input: {
  /** The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*. */
  id: number;
  /** Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
}): Promise<WorkflowScheme>
```

<sub>`GET /rest/api/3/workflowscheme/{id}` · `getWorkflowScheme`</sub>

## `jira.updateWorkflowScheme`

Classic update workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateWorkflowScheme(input: {
  /** The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*. */
  defaultWorkflow?: string;
  /** The description of the workflow scheme. */
  description?: string;
  /** Whether the workflow scheme is a draft or not. */
  draft?: boolean;
  /** The ID of the workflow scheme. */
  id?: number;
  /** The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme. */
  issueTypeMappings?: { [key: string]: string | undefined };
  /** The issue types available in Jira. */
  issueTypes?: { [key: string]: IssueTypeDetails | undefined };
  /** The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows. */
  lastModified?: string;
  /** The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows. */
  lastModifiedUser?: User;
  /** The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme. */
  name?: string;
  /** For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. */
  originalDefaultWorkflow?: string;
  /** For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme. */
  originalIssueTypeMappings?: { [key: string]: string | undefined };
  self?: string;
  /** Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:   *  Update an active workflow scheme with `updateDraftIfNeeded` set to `true`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `false`: An error is returned, as active workflow schemes cannot be updated.  *  Update an inactive workflow scheme with `updateDraftIfNeeded` set to `true`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.  Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}, options: { params: { id: number } }): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}` · `updateWorkflowScheme`</sub>

## `jira.deleteDefaultWorkflow`

Delete default workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteDefaultWorkflow(input: {
  /** The ID of the workflow scheme. */
  id: number;
  /** Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}): Promise<WorkflowScheme>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/default` · `deleteDefaultWorkflow`</sub>

## `jira.getDefaultWorkflow`

Get default workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.getDefaultWorkflow(input: {
  /** The ID of the workflow scheme. */
  id: number;
  /** Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
}): Promise<DefaultWorkflow>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/default` · `getDefaultWorkflow`</sub>

## `jira.updateDefaultWorkflow`

Update default workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.updateDefaultWorkflow(input: {
  /** Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
  /** The name of the workflow to set as the default workflow. */
  workflow: string;
  /** The ID of the workflow scheme. */
  id: number;
}): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}/default` · `updateDefaultWorkflow`</sub>

## `jira.deleteWorkflowSchemeIssueType`

Delete workflow for issue type in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorkflowSchemeIssueType(input: {
  /** The ID of the workflow scheme. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
  /** Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}): Promise<WorkflowScheme>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/issuetype/{issueType}` · `deleteWorkflowSchemeIssueType`</sub>

## `jira.getWorkflowSchemeIssueType`

Get workflow for issue type in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowSchemeIssueType(input: {
  /** The ID of the workflow scheme. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
  /** Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
}): Promise<IssueTypeWorkflowMapping>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/issuetype/{issueType}` · `getWorkflowSchemeIssueType`</sub>

## `jira.setWorkflowSchemeIssueType`

Set workflow for issue type in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.setWorkflowSchemeIssueType(input: {
  /** The ID of the issue type. Not required if updating the issue type-workflow mapping. */
  issueType?: string;
  /** Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping. */
  updateDraftIfNeeded?: boolean;
  /** The name of the workflow. */
  workflow?: string;
  /** The ID of the workflow scheme. */
  id: number;
}, options: { params: { issueType: string } }): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}/issuetype/{issueType}` · `setWorkflowSchemeIssueType`</sub>

## `jira.deleteWorkflowMapping`

Delete issue types for workflow in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorkflowMapping(input: {
  /** The ID of the workflow scheme. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
  /** Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/workflow` · `deleteWorkflowMapping`</sub>

## `jira.getWorkflow`

Get issue types for workflows in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflow(input: {
  /** The ID of the workflow scheme. */
  id: number;
  /** The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. */
  workflowName?: string;
  /** Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. */
  returnDraftIfExists?: boolean;
}): Promise<IssueTypesWorkflowMapping>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/workflow` · `getWorkflow`</sub>

## `jira.updateWorkflowMapping`

Set issue types for workflow in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateWorkflowMapping(input: {
  /** Whether the workflow is the default workflow for the workflow scheme. */
  defaultMapping?: boolean;
  /** The list of issue type IDs. */
  issueTypes?: (string)[];
  /** Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
  /** The name of the workflow. Optional if updating the workflow-issue types mapping. */
  workflow?: string;
  /** The ID of the workflow scheme. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
}): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}/workflow` · `updateWorkflowMapping`</sub>

## `jira.getProjectUsagesForWorkflowScheme`

Get projects which are using a given workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectUsagesForWorkflowScheme(input: {
  /** The workflow scheme ID */
  workflowSchemeId: string;
  /** The cursor for pagination */
  nextPageToken?: string;
  /** The maximum number of results to return. Must be an integer between 1 and 200. */
  maxResults?: number;
}): Promise<WorkflowSchemeProjectUsageDto>
```

<sub>`GET /rest/api/3/workflowscheme/{workflowSchemeId}/projectUsages` · `getProjectUsagesForWorkflowScheme`</sub>

## `jira.switchWorkflowSchemeForProject`

Switch workflow scheme for project — [Provider docs](http://www.atlassian.com)

```ts
jira.switchWorkflowSchemeForProject(input: {
  /** The mappings for migrating issues from old statuses to new statuses when switching from one workflow scheme to another. This field is required if any statuses in the current project's workflows would no longer exist in the target workflow scheme. Each mapping defines how to update issues from an old status to the corresponding new status in the issue’s new workflow. */
  mappingsByIssueTypeOverride?: (MappingsByIssueTypeOverride)[];
  /** The ID of the project to switch the workflow scheme for */
  projectId?: string;
  /** The ID of the target workflow scheme to switch to */
  targetSchemeId?: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/workflowscheme/project/switch` · `switchWorkflowSchemeForProject`</sub>

## `jira.readWorkflowSchemes`

Bulk get workflow schemes — [Provider docs](http://www.atlassian.com)

```ts
jira.readWorkflowSchemes(input: {
  /** The list of project IDs to query. */
  projectIds?: (string | null)[] | null;
  /** The list of workflow scheme IDs to query. */
  workflowSchemeIds?: (string | null)[] | null;
}): Promise<(WorkflowSchemeReadResponse)[]>
```

<sub>`POST /rest/api/3/workflowscheme/read` · `readWorkflowSchemes`</sub>

## `jira.updateSchemes`

Update workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateSchemes(input: {
  /** The ID of the workflow for issue types without having a mapping defined in this workflow scheme. Only used in global-scoped workflow schemes. If the `defaultWorkflowId` isn't specified, this is set to *Jira Workflow (jira)*. */
  defaultWorkflowId?: string;
  /** The new description for this workflow scheme. */
  description: string;
  /** The ID of this workflow scheme. */
  id: string;
  /** The new name for this workflow scheme. */
  name: string;
  /** Overrides, for the selected issue types, any status mappings provided in `statusMappingsByWorkflows`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`. */
  statusMappingsByIssueTypeOverride?: (MappingsByIssueTypeOverride)[];
  /** The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`. */
  statusMappingsByWorkflows?: (MappingsByWorkflow)[];
  version: DocumentVersion;
  /** Mappings from workflows to issue types. */
  workflowsForIssueTypes?: (WorkflowSchemeAssociation)[];
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/workflowscheme/update` · `updateSchemes`</sub>

## `jira.getRequiredWorkflowSchemeMappings`

Get required status mappings for workflow scheme update — [Provider docs](http://www.atlassian.com)

```ts
jira.getRequiredWorkflowSchemeMappings(input: {
  /** The ID of the new default workflow for this workflow scheme. Only used in global-scoped workflow schemes. If it isn't specified, is set to *Jira Workflow (jira)*. */
  defaultWorkflowId?: string | null;
  /** The ID of the workflow scheme. */
  id: string;
  /** The new workflow to issue type mappings for this workflow scheme. */
  workflowsForIssueTypes: (WorkflowSchemeAssociation)[];
}): Promise<WorkflowSchemeUpdateRequiredMappingsResponse>
```

<sub>`POST /rest/api/3/workflowscheme/update/mappings` · `getRequiredWorkflowSchemeMappings`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

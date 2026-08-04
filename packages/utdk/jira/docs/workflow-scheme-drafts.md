# Workflow Scheme Drafts

14 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.createWorkflowSchemeDraftFromParent`

Create draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createWorkflowSchemeDraftFromParent(input: {
  /** The ID of the active workflow scheme that the draft is created from. */
  id: number;
}): Promise<WorkflowScheme>
```

<sub>`POST /rest/api/3/workflowscheme/{id}/createdraft` · `createWorkflowSchemeDraftFromParent`</sub>

## `jira.deleteWorkflowSchemeDraft`

Delete draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorkflowSchemeDraft(input: {
  /** The ID of the active workflow scheme that the draft was created from. */
  id: number;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/draft` · `deleteWorkflowSchemeDraft`</sub>

## `jira.getWorkflowSchemeDraft`

Get draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowSchemeDraft(input: {
  /** The ID of the active workflow scheme that the draft was created from. */
  id: number;
}): Promise<WorkflowScheme>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/draft` · `getWorkflowSchemeDraft`</sub>

## `jira.updateWorkflowSchemeDraft`

Update draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateWorkflowSchemeDraft(input: {
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

<sub>`PUT /rest/api/3/workflowscheme/{id}/draft` · `updateWorkflowSchemeDraft`</sub>

## `jira.deleteDraftDefaultWorkflow`

Delete draft default workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteDraftDefaultWorkflow(input: {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
}): Promise<WorkflowScheme>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/draft/default` · `deleteDraftDefaultWorkflow`</sub>

## `jira.getDraftDefaultWorkflow`

Get draft default workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.getDraftDefaultWorkflow(input: {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
}): Promise<DefaultWorkflow>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/draft/default` · `getDraftDefaultWorkflow`</sub>

## `jira.updateDraftDefaultWorkflow`

Update draft default workflow — [Provider docs](http://www.atlassian.com)

```ts
jira.updateDraftDefaultWorkflow(input: {
  /** Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
  /** The name of the workflow to set as the default workflow. */
  workflow: string;
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
}): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}/draft/default` · `updateDraftDefaultWorkflow`</sub>

## `jira.deleteWorkflowSchemeDraftIssueType`

Delete workflow for issue type in draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorkflowSchemeDraftIssueType(input: {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
}): Promise<WorkflowScheme>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}` · `deleteWorkflowSchemeDraftIssueType`</sub>

## `jira.getWorkflowSchemeDraftIssueType`

Get workflow for issue type in draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorkflowSchemeDraftIssueType(input: {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The ID of the issue type. */
  issueType: string;
}): Promise<IssueTypeWorkflowMapping>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}` · `getWorkflowSchemeDraftIssueType`</sub>

## `jira.setWorkflowSchemeDraftIssueType`

Set workflow for issue type in draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.setWorkflowSchemeDraftIssueType(input: {
  /** The ID of the issue type. Not required if updating the issue type-workflow mapping. */
  issueType?: string;
  /** Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping. */
  updateDraftIfNeeded?: boolean;
  /** The name of the workflow. */
  workflow?: string;
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
}, options: { params: { issueType: string } }): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}` · `setWorkflowSchemeDraftIssueType`</sub>

## `jira.publishDraftWorkflowScheme`

Publish draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.publishDraftWorkflowScheme(input: {
  /** Mappings of statuses to new statuses for issue types. */
  statusMappings?: (StatusMapping)[];
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** Whether the request only performs a validation. */
  validateOnly?: boolean;
}): Promise<undefined>
```

<sub>`POST /rest/api/3/workflowscheme/{id}/draft/publish` · `publishDraftWorkflowScheme`</sub>

## `jira.deleteDraftWorkflowMapping`

Delete issue types for workflow in draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteDraftWorkflowMapping(input: {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/workflowscheme/{id}/draft/workflow` · `deleteDraftWorkflowMapping`</sub>

## `jira.getDraftWorkflow`

Get issue types for workflows in draft workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getDraftWorkflow(input: {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. */
  workflowName?: string;
}): Promise<IssueTypesWorkflowMapping>
```

<sub>`GET /rest/api/3/workflowscheme/{id}/draft/workflow` · `getDraftWorkflow`</sub>

## `jira.updateDraftWorkflowMapping`

Set issue types for workflow in workflow scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateDraftWorkflowMapping(input: {
  /** Whether the workflow is the default workflow for the workflow scheme. */
  defaultMapping?: boolean;
  /** The list of issue type IDs. */
  issueTypes?: (string)[];
  /** Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`. */
  updateDraftIfNeeded?: boolean;
  /** The name of the workflow. Optional if updating the workflow-issue types mapping. */
  workflow?: string;
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
  /** The name of the workflow. */
  workflowName: string;
}): Promise<WorkflowScheme>
```

<sub>`PUT /rest/api/3/workflowscheme/{id}/draft/workflow` · `updateDraftWorkflowMapping`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

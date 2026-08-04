# Workflow Automation

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listWorkflows`

List workflows — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listWorkflows(input: {
  /** The maximum number of workflows to return per page. */
  limit?: number;
  /** The page number to return, starting from 0. */
  page?: number;
  /** The sort order for the returned workflows. Provide a comma-separated list of fields, each optionally prefixed with `-` for descending order. Supported fields are `name`, `createdAt`, `updatedAt`, `creatorName`, `ownerName`, and `lastExecutedAt`. */
  sort?: string;
  /** A search query used to filter the returned workflows. The query performs a case-insensitive substring match against each workflow's name, creator name, and handle. If the query contains a colon (for example, `team:infra`), the query is treated as a `key:value` tag filter. */
  "filter[query]"?: string;
  /** Filters the returned workflows by one or more trigger types, such as `monitor`, `schedule`, or `githubWebhook`. To specify the multiple types, repeat this parameter. */
  "filter[triggerIds]"?: (string)[];
  /** Whether to include unpublished workflows in the response. */
  "filter[includeUnpublished]"?: boolean;
  /** Whether to include the full spec of each workflow in the response. When `false` (the default), each workflow's `spec` is returned as `null`. */
  "filter[includeSpecs]"?: boolean;
}): Promise<ListWorkflowsResponse>
```

<sub>`GET /api/v2/workflows` · `ListWorkflows`</sub>

## `datadog.createWorkflow`

Create a Workflow — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createWorkflow(input: {
  data: WorkflowData;
}): Promise<CreateWorkflowResponse>
```

<sub>`POST /api/v2/workflows` · `CreateWorkflow`</sub>

## `datadog.deleteWorkflow`

Delete an existing Workflow — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteWorkflow(input: {
  /** The ID of the workflow. */
  workflow_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/workflows/{workflow_id}` · `DeleteWorkflow`</sub>

## `datadog.getWorkflow`

Get an existing Workflow — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getWorkflow(input: {
  /** The ID of the workflow. */
  workflow_id: string;
}): Promise<GetWorkflowResponse>
```

<sub>`GET /api/v2/workflows/{workflow_id}` · `GetWorkflow`</sub>

## `datadog.updateWorkflow`

Update an existing Workflow — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateWorkflow(input: {
  data: WorkflowDataUpdate;
  /** The ID of the workflow. */
  workflow_id: string;
}): Promise<UpdateWorkflowResponse>
```

<sub>`PATCH /api/v2/workflows/{workflow_id}` · `UpdateWorkflow`</sub>

## `datadog.listWorkflowInstances`

List workflow instances — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listWorkflowInstances(input: {
  /** The ID of the workflow. */
  workflow_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
}): Promise<WorkflowListInstancesResponse>
```

<sub>`GET /api/v2/workflows/{workflow_id}/instances` · `ListWorkflowInstances`</sub>

## `datadog.createWorkflowInstance`

Execute a workflow — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createWorkflowInstance(input: {
  meta?: WorkflowInstanceCreateMeta;
  /** The ID of the workflow. */
  workflow_id: string;
}): Promise<WorkflowInstanceCreateResponse>
```

<sub>`POST /api/v2/workflows/{workflow_id}/instances` · `CreateWorkflowInstance`</sub>

## `datadog.getWorkflowInstance`

Get a workflow instance — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getWorkflowInstance(input: {
  /** The ID of the workflow. */
  workflow_id: string;
  /** The ID of the workflow instance. */
  instance_id: string;
}): Promise<WorklflowGetInstanceResponse>
```

<sub>`GET /api/v2/workflows/{workflow_id}/instances/{instance_id}` · `GetWorkflowInstance`</sub>

## `datadog.cancelWorkflowInstance`

Cancel a workflow instance — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cancelWorkflowInstance(input: {
  /** The ID of the workflow. */
  workflow_id: string;
  /** The ID of the workflow instance. */
  instance_id: string;
}): Promise<WorklflowCancelInstanceResponse>
```

<sub>`PUT /api/v2/workflows/{workflow_id}/instances/{instance_id}/cancel` · `CancelWorkflowInstance`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

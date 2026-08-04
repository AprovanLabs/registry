# Workflows

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getWorkflows`

Get workflows — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getWorkflows(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** Filter results by workflow status. Valid status filters are `active`, `completed`, and `failed`. */
  status?: string;
  /** A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `creationDate` or `stopDate`. */
  sort?: string;
  /** The maximum number of workflows to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<CustomWorkflowsListingOutput>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows` · `getWorkflows`</sub>

## `launchdarkly.postWorkflow`

Create workflow — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postWorkflow(input: {
  /** The ID of the workflow maintainer. Defaults to the workflow creator. */
  maintainerId?: ObjectId;
  /** The workflow name */
  name: string;
  /** The workflow description */
  description?: string;
  /** A list of the workflow stages */
  stages?: (StageInput)[];
  /** The template key */
  templateKey?: string;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** Whether to call the endpoint in dry-run mode */
  dryRun?: boolean;
}, options?: { query?: { templateKey?: string } }): Promise<CustomWorkflowOutput>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows` · `postWorkflow`</sub>

## `launchdarkly.deleteWorkflow`

Delete workflow — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteWorkflow(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The workflow id */
  workflowId: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}` · `deleteWorkflow`</sub>

## `launchdarkly.getCustomWorkflow`

Get custom workflow — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getCustomWorkflow(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The workflow ID */
  workflowId: string;
}): Promise<CustomWorkflowOutput>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}` · `getCustomWorkflow`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

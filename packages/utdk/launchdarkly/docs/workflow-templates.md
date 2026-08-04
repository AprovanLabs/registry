# Workflow Templates

3 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getWorkflowTemplates`

Get workflow templates — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getWorkflowTemplates(input: {
  /** Whether the entire template object or just a summary should be returned */
  summary?: boolean;
  /** The substring in either the name or description of a template */
  search?: string;
}): Promise<WorkflowTemplatesListingOutputRep>
```

<sub>`GET /api/v2/templates` · `getWorkflowTemplates`</sub>

## `launchdarkly.createWorkflowTemplate`

Create workflow template — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createWorkflowTemplate(input: {
  key: string;
  name?: string;
  description?: string;
  workflowId?: FeatureWorkflowId;
  stages?: (StageInput)[];
  projectKey?: string;
  environmentKey?: string;
  flagKey?: string;
}): Promise<WorkflowTemplateOutput>
```

<sub>`POST /api/v2/templates` · `createWorkflowTemplate`</sub>

## `launchdarkly.deleteWorkflowTemplate`

Delete workflow template — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteWorkflowTemplate(input: {
  /** The template key */
  templateKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/templates/{templateKey}` · `deleteWorkflowTemplate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

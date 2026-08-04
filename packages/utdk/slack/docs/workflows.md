# Workflows

3 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.workflowsStepCompleted`

Indicate that an app's step in a workflow completed execution. — [API reference](https://api.slack.com/methods/workflows.stepCompleted)

```ts
slack.workflowsStepCompleted(input: {
  /** Context identifier that maps to the correct workflow step execution. */
  workflow_step_execute_id: string;
  /** Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object. */
  outputs?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /workflows.stepCompleted` · `workflows_stepCompleted`</sub>

## `slack.workflowsStepFailed`

Indicate that an app's step in a workflow failed to execute. — [API reference](https://api.slack.com/methods/workflows.stepFailed)

```ts
slack.workflowsStepFailed(input: {
  /** Context identifier that maps to the correct workflow step execution. */
  workflow_step_execute_id: string;
  /** A JSON-based object with a `message` property that should contain a human readable error message. */
  error: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /workflows.stepFailed` · `workflows_stepFailed`</sub>

## `slack.workflowsUpdateStep`

Update the configuration for a workflow extension step. — [API reference](https://api.slack.com/methods/workflows.updateStep)

```ts
slack.workflowsUpdateStep(input: {
  /** A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`. */
  workflow_step_edit_id: string;
  /** A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables). */
  inputs?: string;
  /** An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed. */
  outputs?: string;
  /** An optional field that can be used to override the step name that is shown in the Workflow Builder. */
  step_name?: string;
  /** An optional field that can be used to override app image that is shown in the Workflow Builder. */
  step_image_url?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /workflows.updateStep` · `workflows_updateStep`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

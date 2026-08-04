# Flag Triggers

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getTriggerWorkflows`

List flag triggers — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTriggerWorkflows(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<TriggerWorkflowCollectionRep>
```

<sub>`GET /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}` · `getTriggerWorkflows`</sub>

## `launchdarkly.createTriggerWorkflow`

Create flag trigger — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createTriggerWorkflow(input: {
  /** Optional comment describing the trigger */
  comment?: string;
  /** The action to perform when triggering. This should be an array with a single object that looks like <code>{"kind": "flag_action"}</code>. Supported flag actions are <code>turnFlagOn</code> and <code>turnFlagOff</code>. */
  instructions?: (Instruction)[];
  /** The unique identifier of the integration for your trigger. Use <code>generic-trigger</code> for integrations not explicitly supported. */
  integrationKey: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<TriggerWorkflowRep>
```

<sub>`POST /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}` · `createTriggerWorkflow`</sub>

## `launchdarkly.deleteTriggerWorkflow`

Delete flag trigger — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteTriggerWorkflow(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The flag trigger ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}` · `deleteTriggerWorkflow`</sub>

## `launchdarkly.getTriggerWorkflowById`

Get flag trigger by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTriggerWorkflowById(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The flag trigger ID */
  id: string;
}): Promise<TriggerWorkflowRep>
```

<sub>`GET /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}` · `getTriggerWorkflowById`</sub>

## `launchdarkly.patchTriggerWorkflow`

Update flag trigger — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchTriggerWorkflow(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "trigger_action"}</code>. */
  instructions?: (Instruction)[];
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The flag trigger ID */
  id: string;
}): Promise<TriggerWorkflowRep>
```

<sub>`PATCH /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}` · `patchTriggerWorkflow`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Scheduled Changes

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getFlagConfigScheduledChanges`

List scheduled changes — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagConfigScheduledChanges(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<FeatureFlagScheduledChanges>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes` · `getFlagConfigScheduledChanges`</sub>

## `launchdarkly.postFlagConfigScheduledChanges`

Create scheduled changes workflow — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postFlagConfigScheduledChanges(input: {
  /** Optional comment describing the scheduled changes */
  comment?: string;
  /** When the scheduled changes should be executed */
  executionDate: UnixMillis;
  /** The actions to perform on the execution date for these scheduled changes. This should be an array with a single object that looks like <code>{"kind": "scheduled_action"}</code>. Supported scheduled actions include any semantic patch instructions available when updating a feature flag. */
  instructions: Instructions;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing scheduled changes */
  ignoreConflicts?: boolean;
}): Promise<FeatureFlagScheduledChange>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes` · `postFlagConfigScheduledChanges`</sub>

## `launchdarkly.deleteFlagConfigScheduledChanges`

Delete scheduled changes workflow — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteFlagConfigScheduledChanges(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The scheduled change id */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}` · `deleteFlagConfigScheduledChanges`</sub>

## `launchdarkly.getFeatureFlagScheduledChange`

Get a scheduled change — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFeatureFlagScheduledChange(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The scheduled change id */
  id: string;
}): Promise<FeatureFlagScheduledChange>
```

<sub>`GET /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}` · `getFeatureFlagScheduledChange`</sub>

## `launchdarkly.patchFlagConfigScheduledChange`

Update scheduled changes workflow — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchFlagConfigScheduledChange(input: {
  /** Optional comment describing the update to the scheduled changes */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require a <code>value</code> field in the array element. */
  instructions: Instructions;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The environment key */
  environmentKey: string;
  /** The scheduled change ID */
  id: string;
  /** Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with existing scheduled changes */
  ignoreConflicts?: boolean;
}): Promise<FeatureFlagScheduledChange>
```

<sub>`PATCH /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}` · `patchFlagConfigScheduledChange`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

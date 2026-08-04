# Holdouts

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getAllHoldouts`

Get all holdouts — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAllHoldouts(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The number of holdouts to return in the response. Defaults to 20 */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an `offset` of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<HoldoutsCollectionRep>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts` · `getAllHoldouts`</sub>

## `launchdarkly.postHoldout`

Create holdout — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postHoldout(input: {
  /** A human-friendly name for the holdout */
  name?: string;
  /** A key that identifies the holdout */
  key?: string;
  /** Description of the holdout */
  description?: string;
  /** The chosen randomization unit for the holdout base experiment */
  randomizationunit?: string;
  /** The attributes that the holdout iteration's results can be sliced by */
  attributes?: (string)[];
  /** Audience allocation for the holdout */
  holdoutamount?: string;
  /** The key of the primary metric for this holdout */
  primarymetrickey?: string;
  /** Details on the metrics for this experiment */
  metrics?: (MetricInput)[];
  /** The key of the flag that the holdout is dependent on */
  prerequisiteflagkey?: string;
  /** Maintainer id */
  maintainerId?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<HoldoutRep>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts` · `postHoldout`</sub>

## `launchdarkly.getHoldout`

Get holdout — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getHoldout(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The holdout experiment key */
  holdoutKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. Holdout experiment expansion fields have no prefix. Related experiment expansion fields have `rel-` as a prefix. */
  expand?: string;
}): Promise<HoldoutDetailRep>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}` · `getHoldout`</sub>

## `launchdarkly.patchHoldout`

Patch holdout — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchHoldout(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require a <code>value</code> field in the array element. */
  instructions: Instructions;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The holdout key */
  holdoutKey: string;
}): Promise<HoldoutRep>
```

<sub>`PATCH /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}` · `patchHoldout`</sub>

## `launchdarkly.getHoldoutById`

Get Holdout by Id — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getHoldoutById(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The holdout experiment ID */
  holdoutId: string;
}): Promise<HoldoutRep>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/id/{holdoutId}` · `getHoldoutById`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

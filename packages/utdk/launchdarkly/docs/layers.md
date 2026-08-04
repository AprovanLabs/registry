# Layers

3 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getLayers`

Get layers — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getLayers(input: {
  /** The project key */
  projectKey: string;
  /** A comma-separated list of filters. This endpoint only accepts filtering by `experimentKey`. The filter returns layers which include that experiment for the selected environment(s). For example: `filter=reservations.experimentKey contains expKey`. */
  filter?: string;
}): Promise<LayerCollectionRep>
```

<sub>`GET /api/v2/projects/{projectKey}/layers` · `getLayers`</sub>

## `launchdarkly.createLayer`

Create layer — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createLayer(input: {
  /** Unique identifier for the layer */
  key: string;
  /** Layer name */
  name: string;
  /** The checkout flow for the application */
  description: string;
  /** The project key */
  projectKey: string;
}): Promise<LayerRep>
```

<sub>`POST /api/v2/projects/{projectKey}/layers` · `createLayer`</sub>

## `launchdarkly.updateLayer`

Update layer — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateLayer(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The environment key used for making environment specific updates. For example, updating the reservation of an experiment */
  environmentKey?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require a <code>value</code> field in the array element. */
  instructions: Instructions;
  /** The project key */
  projectKey: string;
  /** The layer key */
  layerKey: string;
}): Promise<LayerRep>
```

<sub>`PATCH /api/v2/projects/{projectKey}/layers/{layerKey}` · `updateLayer`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

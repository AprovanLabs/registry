# Release Pipelines (Beta)

6 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getAllReleasePipelines`

Get all release pipelines — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAllReleasePipelines(input: {
  /** The project key */
  projectKey: string;
  /** A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields. */
  filter?: string;
  /** The maximum number of items to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<ReleasePipelineCollection>
```

<sub>`GET /api/v2/projects/{projectKey}/release-pipelines` · `getAllReleasePipelines`</sub>

## `launchdarkly.postReleasePipeline`

Create a release pipeline — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postReleasePipeline(input: {
  /** The release pipeline description */
  description?: string;
  /** The unique identifier of this release pipeline */
  key: string;
  /** The name of the release pipeline */
  name: string;
  /** A logical grouping of one or more environments that share attributes for rolling out changes */
  phases: (CreatePhaseInput)[];
  /** A list of tags for this release pipeline */
  tags?: (string)[];
  /** Whether or not the newly created pipeline should be set as the default pipeline for this project */
  isProjectDefault?: boolean;
  /** Whether or not the pipeline is enabled for Release Automation. */
  isLegacy?: boolean;
  /** The project key */
  projectKey: string;
}): Promise<ReleasePipeline>
```

<sub>`POST /api/v2/projects/{projectKey}/release-pipelines` · `postReleasePipeline`</sub>

## `launchdarkly.deleteReleasePipeline`

Delete release pipeline — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteReleasePipeline(input: {
  /** The project key */
  projectKey: string;
  /** The release pipeline key */
  pipelineKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}` · `deleteReleasePipeline`</sub>

## `launchdarkly.getReleasePipelineByKey`

Get release pipeline by key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getReleasePipelineByKey(input: {
  /** The project key */
  projectKey: string;
  /** The release pipeline key */
  pipelineKey: string;
}): Promise<ReleasePipeline>
```

<sub>`GET /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}` · `getReleasePipelineByKey`</sub>

## `launchdarkly.putReleasePipeline`

Update a release pipeline — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putReleasePipeline(input: {
  /** The release pipeline description */
  description?: string;
  /** The name of the release pipeline */
  name: string;
  /** A logical grouping of one or more environments that share attributes for rolling out changes */
  phases: (CreatePhaseInput)[];
  /** A list of tags for this release pipeline */
  tags?: (string)[];
  /** The project key */
  projectKey: string;
  /** The release pipeline key */
  pipelineKey: string;
}): Promise<ReleasePipeline>
```

<sub>`PUT /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}` · `putReleasePipeline`</sub>

## `launchdarkly.getAllReleaseProgressionsForReleasePipeline`

Get release progressions for release pipeline — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAllReleaseProgressionsForReleasePipeline(input: {
  /** The project key */
  projectKey: string;
  /** The pipeline key */
  pipelineKey: string;
  /** Accepts filter by `status` and `activePhaseId`. `status` can take a value of `completed` or `active`. `activePhaseId` takes a UUID and will filter results down to releases active on the specified phase. Providing `status equals completed` along with an `activePhaseId` filter will return an error as they are disjoint sets of data. The combination of `status equals active` and `activePhaseId` will return the same results as `activePhaseId` alone. */
  filter?: string;
  /** The maximum number of items to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<ReleaseProgressionCollection>
```

<sub>`GET /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases` · `getAllReleaseProgressionsForReleasePipeline`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

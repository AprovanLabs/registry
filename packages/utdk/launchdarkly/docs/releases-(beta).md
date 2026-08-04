# Releases (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.deleteReleaseByFlagKey`

Delete a release for flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteReleaseByFlagKey(input: {
  /** The project key */
  projectKey: string;
  /** The flag key */
  flagKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/flags/{projectKey}/{flagKey}/release` · `deleteReleaseByFlagKey`</sub>

## `launchdarkly.getReleaseByFlagKey`

Get release for flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getReleaseByFlagKey(input: {
  /** The project key */
  projectKey: string;
  /** The flag key */
  flagKey: string;
}): Promise<Release>
```

<sub>`GET /api/v2/flags/{projectKey}/{flagKey}/release` · `getReleaseByFlagKey`</sub>

## `launchdarkly.patchReleaseByFlagKey`

Patch release for flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchReleaseByFlagKey(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The flag key */
  flagKey: string;
}): Promise<Release>
```

<sub>`PATCH /api/v2/flags/{projectKey}/{flagKey}/release` · `patchReleaseByFlagKey`</sub>

## `launchdarkly.createReleaseForFlag`

Create a new release for flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createReleaseForFlag(input: {
  /** The variation id to release to across all phases */
  releaseVariationId?: string;
  /** The key of the release pipeline to attach the flag to */
  releasePipelineKey: string;
  /** The project key */
  projectKey: string;
  /** The flag key */
  flagKey: string;
}): Promise<Release>
```

<sub>`PUT /api/v2/projects/{projectKey}/flags/{flagKey}/release` · `createReleaseForFlag`</sub>

## `launchdarkly.updatePhaseStatus`

Update phase status for release — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updatePhaseStatus(input: {
  /** Status of the phase */
  status?: PhaseStatus;
  /** Extra configuration for audiences required upon phase initialization. */
  audiences?: (ReleaserAudienceConfigInput)[];
  /** The project key */
  projectKey: string;
  /** The flag key */
  flagKey: string;
  /** The phase ID */
  phaseId: string;
}): Promise<Release>
```

<sub>`PUT /api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId}` · `updatePhaseStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Feature Flags

14 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getFeatureFlagStatusAcrossEnvironments`

Get flag status across environments — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFeatureFlagStatusAcrossEnvironments(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** Optional environment filter */
  env?: string;
}): Promise<FeatureFlagStatusAcrossEnvironments>
```

<sub>`GET /api/v2/flag-status/{projectKey}/{featureFlagKey}` · `getFeatureFlagStatusAcrossEnvironments`</sub>

## `launchdarkly.getFeatureFlagStatuses`

List feature flag statuses — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFeatureFlagStatuses(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<FeatureFlagStatuses>
```

<sub>`GET /api/v2/flag-statuses/{projectKey}/{environmentKey}` · `getFeatureFlagStatuses`</sub>

## `launchdarkly.getFeatureFlagStatus`

Get feature flag status — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFeatureFlagStatus(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<FlagStatusRep>
```

<sub>`GET /api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}` · `getFeatureFlagStatus`</sub>

## `launchdarkly.getFeatureFlags`

List feature flags — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFeatureFlags(input: {
  /** The project key */
  projectKey: string;
  /** Filter configurations by environment */
  env?: string;
  /** Filter feature flags by tag */
  tag?: string;
  /** The number of feature flags to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** Deprecated, use `filter=archived:true` instead. A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned */
  archived?: boolean;
  /** By default, flags do _not_ include their lists of prerequisites, targets, or rules for each environment. Set `summary=0` and include the `env` query parameter to include these fields for each flag returned. */
  summary?: boolean;
  /** A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields. */
  filter?: string;
  /** A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. Read the endpoint description for a full list of available sort fields. */
  sort?: string;
  /** Deprecated, unavailable in API version `20240415`. A boolean to filter results by only flags that have differences between environments. */
  compare?: boolean;
  /** A comma-separated list of fields to expand in the response. Supported fields are explained above. */
  expand?: string;
}): Promise<FeatureFlags>
```

<sub>`GET /api/v2/flags/{projectKey}` · `getFeatureFlags`</sub>

## `launchdarkly.postFeatureFlag`

Create a feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postFeatureFlag(input: {
  /** A human-friendly name for the feature flag */
  name: string;
  /** A unique key used to reference the flag in your code */
  key: string;
  /** Description of the feature flag. Defaults to an empty string. */
  description?: string;
  /** Deprecated, use <code>clientSideAvailability</code>. Whether this flag should be made available to the client-side JavaScript SDK. Defaults to <code>false</code>. */
  includeInSnippet?: boolean;
  /** Which type of client-side SDKs the feature flag is available to */
  clientSideAvailability?: ClientSideAvailabilityPost;
  /** An array of possible variations for the flag. The variation values must be unique. If omitted, two boolean variations of <code>true</code> and <code>false</code> will be used. */
  variations?: (Variation)[];
  /** Whether the flag is a temporary flag. Defaults to <code>true</code>. */
  temporary?: boolean;
  /** Tags for the feature flag. Defaults to an empty array. */
  tags?: (string)[];
  /** Metadata attached to the feature flag, in the form of the property key associated with a name and array of values for the metadata to associate with this flag. Typically used to store data related to an integration. */
  customProperties?: CustomProperties;
  /** The indices, from the array of variations, for the variations to serve by default when targeting is on and when targeting is off. These variations will be used for this flag in new environments. If omitted, the first and last variation will be used. */
  defaults?: Defaults;
  /** Purpose of the flag */
  purpose?: "migration" | "holdout";
  /** Settings relevant to flags where <code>purpose</code> is <code>migration</code> */
  migrationSettings?: MigrationSettingsPost;
  /** The ID of the member who maintains this feature flag */
  maintainerId?: string;
  /** The key of the team that maintains this feature flag */
  maintainerTeamKey?: string;
  /** Initial set of prerequisite flags for all environments */
  initialPrerequisites?: (FlagPrerequisitePost)[];
  /** Whether to automatically turn the flag on across all environments at creation. Defaults to <code>false</code>. */
  isFlagOn?: boolean;
  /** The project key */
  projectKey: string;
  /** The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting `clone=flagKey` copies the full targeting configuration for all environments, including `on/off` state, from the original flag to the new flag. */
  clone?: string;
}): Promise<FeatureFlag>
```

<sub>`POST /api/v2/flags/{projectKey}` · `postFeatureFlag`</sub>

## `launchdarkly.deleteFeatureFlag`

Delete feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteFeatureFlag(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key. The key identifies the flag in your code. */
  featureFlagKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/flags/{projectKey}/{featureFlagKey}` · `deleteFeatureFlag`</sub>

## `launchdarkly.getFeatureFlag`

Get feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFeatureFlag(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** Filter configurations by environment */
  env?: string;
  /** A comma-separated list of fields to expand in the response. Supported fields are explained above. */
  expand?: string;
}): Promise<FeatureFlag>
```

<sub>`GET /api/v2/flags/{projectKey}/{featureFlagKey}` · `getFeatureFlag`</sub>

## `launchdarkly.patchFeatureFlag`

Update feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchFeatureFlag(input: {
  /** A JSON patch representation of the change to make */
  patch: JsonPatch;
  /** Optional comment */
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The feature flag key. The key identifies the flag in your code. */
  featureFlagKey: string;
  /** If true, the patch will be applied even if it causes a pending scheduled change or approval request to fail. */
  ignoreConflicts?: boolean;
  /** If true, the patch will be validated but not persisted. Returns a preview of the flag after the patch is applied. */
  dryRun?: boolean;
}): Promise<FeatureFlag>
```

<sub>`PATCH /api/v2/flags/{projectKey}/{featureFlagKey}` · `patchFeatureFlag`</sub>

## `launchdarkly.copyFeatureFlag`

Copy feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.copyFeatureFlag(input: {
  /** The source environment */
  source: FlagCopyConfigEnvironment;
  /** The target environment */
  target: FlagCopyConfigEnvironment;
  /** Optional comment */
  comment?: string;
  /** Optional list of the flag changes to copy from the source environment to the target environment. You may include either <code>includedActions</code> or <code>excludedActions</code>, but not both. If you include neither, then all flag changes will be copied. */
  includedActions?: ("updateOn" | "updateRules" | "updateFallthrough" | "updateOffVariation" | "updatePrerequisites" | "updateTargets" | "updateFlagConfigMigrationSettings")[];
  /** Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either  <code>includedActions</code> or <code>excludedActions</code>, but not both. If you include neither, then all flag changes will be copied. */
  excludedActions?: ("updateOn" | "updateRules" | "updateFallthrough" | "updateOffVariation" | "updatePrerequisites" | "updateTargets" | "updateFlagConfigMigrationSettings")[];
  /** The project key */
  projectKey: string;
  /** The feature flag key. The key identifies the flag in your code. */
  featureFlagKey: string;
}): Promise<FeatureFlag>
```

<sub>`POST /api/v2/flags/{projectKey}/{featureFlagKey}/copy` · `copyFeatureFlag`</sub>

## `launchdarkly.getExpiringContextTargets`

Get expiring context targets for feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExpiringContextTargets(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<ExpiringTargetGetResponse>
```

<sub>`GET /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}` · `getExpiringContextTargets`</sub>

## `launchdarkly.patchExpiringTargets`

Update expiring context targets on feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchExpiringTargets(input: {
  /** Optional comment describing the change */
  comment?: string;
  /** The instructions to perform when updating */
  instructions: (Instruction)[];
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<ExpiringTargetPatchResponse>
```

<sub>`PATCH /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}` · `patchExpiringTargets`</sub>

## `launchdarkly.getExpiringUserTargets`

Get expiring user targets for feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExpiringUserTargets(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<ExpiringUserTargetGetResponse>
```

<sub>`GET /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}` · `getExpiringUserTargets`</sub>

## `launchdarkly.patchExpiringUserTargets`

Update expiring user targets on feature flag — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchExpiringUserTargets(input: {
  /** Optional comment describing the change */
  comment?: string;
  /** The instructions to perform when updating */
  instructions: (Instruction)[];
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<ExpiringUserTargetPatchResponse>
```

<sub>`PATCH /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}` · `patchExpiringUserTargets`</sub>

## `launchdarkly.postMigrationSafetyIssues`

Get migration safety issues — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postMigrationSafetyIssues(input: {
  /** Semantic patch instructions. The same ones that are valid for flags are valid here. */
  instructions: Instructions;
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The migration flag key */
  flagKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<(MigrationSafetyIssueRep)[]>
```

<sub>`POST /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues` · `postMigrationSafetyIssues`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

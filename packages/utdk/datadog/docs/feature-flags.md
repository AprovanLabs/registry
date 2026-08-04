# Feature Flags

22 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listFeatureFlags`

List feature flags — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFeatureFlags(input: {
  /** Filter feature flags by key (partial matching). */
  key?: string;
  /** Filter by archived status. */
  is_archived?: boolean;
  /** Maximum number of results to return. */
  limit?: number;
  /** Number of results to skip. */
  offset?: number;
}): Promise<ListFeatureFlagsResponse>
```

<sub>`GET /api/v2/feature-flags` · `ListFeatureFlags`</sub>

## `datadog.createFeatureFlag`

Create a feature flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFeatureFlag(input: {
  data: CreateFeatureFlagData;
}): Promise<FeatureFlagResponse>
```

<sub>`POST /api/v2/feature-flags` · `CreateFeatureFlag`</sub>

## `datadog.getFeatureFlag`

Get a feature flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFeatureFlag(input: {
  /** The ID of the feature flag. */
  feature_flag_id: string;
}): Promise<FeatureFlagResponse>
```

<sub>`GET /api/v2/feature-flags/{feature_flag_id}` · `GetFeatureFlag`</sub>

## `datadog.updateFeatureFlag`

Update a feature flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFeatureFlag(input: {
  data: UpdateFeatureFlagData;
  /** The ID of the feature flag. */
  feature_flag_id: string;
}): Promise<FeatureFlagResponse>
```

<sub>`PUT /api/v2/feature-flags/{feature_flag_id}` · `UpdateFeatureFlag`</sub>

## `datadog.archiveFeatureFlag`

Archive a feature flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.archiveFeatureFlag(input: {
  /** The ID of the feature flag. */
  feature_flag_id: string;
}): Promise<FeatureFlagResponse>
```

<sub>`POST /api/v2/feature-flags/{feature_flag_id}/archive` · `ArchiveFeatureFlag`</sub>

## `datadog.createAllocationsForFeatureFlagInEnvironment`

Create targeting rules for a flag env — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createAllocationsForFeatureFlagInEnvironment(input: {
  data: AllocationDataRequest;
  /** The ID of the feature flag. */
  feature_flag_id: string;
  /** The ID of the environment. */
  environment_id: string;
}): Promise<AllocationResponse>
```

<sub>`POST /api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/allocations` · `CreateAllocationsForFeatureFlagInEnvironment`</sub>

## `datadog.updateAllocationsForFeatureFlagInEnvironment`

Update targeting rules for a flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAllocationsForFeatureFlagInEnvironment(input: {
  /** Targeting rules (allocations) to replace existing ones with. */
  data: (AllocationDataRequest)[];
  /** The ID of the feature flag. */
  feature_flag_id: string;
  /** The ID of the environment. */
  environment_id: string;
}): Promise<ListAllocationsResponse>
```

<sub>`PUT /api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/allocations` · `UpdateAllocationsForFeatureFlagInEnvironment`</sub>

## `datadog.disableFeatureFlagEnvironment`

Disable a feature flag in an environment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.disableFeatureFlagEnvironment(input: {
  /** The ID of the feature flag. */
  feature_flag_id: string;
  /** The ID of the environment. */
  environment_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/disable` · `DisableFeatureFlagEnvironment`</sub>

## `datadog.enableFeatureFlagEnvironment`

Enable a feature flag in an environment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.enableFeatureFlagEnvironment(input: {
  /** The ID of the feature flag. */
  feature_flag_id: string;
  /** The ID of the environment. */
  environment_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/feature-flags/{feature_flag_id}/environments/{environment_id}/enable` · `EnableFeatureFlagEnvironment`</sub>

## `datadog.unarchiveFeatureFlag`

Unarchive a feature flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unarchiveFeatureFlag(input: {
  /** The ID of the feature flag. */
  feature_flag_id: string;
}): Promise<FeatureFlagResponse>
```

<sub>`POST /api/v2/feature-flags/{feature_flag_id}/unarchive` · `UnarchiveFeatureFlag`</sub>

## `datadog.createVariantForFeatureFlag`

Add a variant to a feature flag — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createVariantForFeatureFlag(input: {
  /** The unique key of the variant. */
  key: string;
  /** The name of the variant. */
  name: string;
  /** The value of the variant as a string. */
  value: string;
  /** The ID of the feature flag. */
  feature_flag_id: string;
}): Promise<Variant>
```

<sub>`POST /api/v2/feature-flags/{feature_flag_id}/variants` · `CreateVariantForFeatureFlag`</sub>

## `datadog.deleteVariantFromFeatureFlag`

Delete a variant — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteVariantFromFeatureFlag(input: {
  /** The ID of the feature flag. */
  feature_flag_id: string;
  /** The ID of the variant. */
  variant_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/feature-flags/{feature_flag_id}/variants/{variant_id}` · `DeleteVariantFromFeatureFlag`</sub>

## `datadog.updateVariantForFeatureFlag`

Update a variant — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateVariantForFeatureFlag(input: {
  /** The display name of the variant. */
  name?: string;
  /** The value of the variant as a string. */
  value?: string;
  /** The ID of the feature flag. */
  feature_flag_id: string;
  /** The ID of the variant. */
  variant_id: string;
}): Promise<Variant>
```

<sub>`PUT /api/v2/feature-flags/{feature_flag_id}/variants/{variant_id}` · `UpdateVariantForFeatureFlag`</sub>

## `datadog.listFeatureFlagsEnvironments`

List environments — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFeatureFlagsEnvironments(input: {
  /** Filter environments by name (partial matching). */
  name?: string;
  /** Filter environments by key (partial matching). */
  key?: string;
  /** Filter environments by queries that contain the provided DD_ENV value. */
  dd_env?: string;
  /** Maximum number of results to return. */
  limit?: number;
  /** Number of results to skip. */
  offset?: number;
}): Promise<ListEnvironmentsResponse>
```

<sub>`GET /api/v2/feature-flags/environments` · `ListFeatureFlagsEnvironments`</sub>

## `datadog.createFeatureFlagsEnvironment`

Create an environment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFeatureFlagsEnvironment(input: {
  data: CreateEnvironmentData;
}): Promise<EnvironmentResponse>
```

<sub>`POST /api/v2/feature-flags/environments` · `CreateFeatureFlagsEnvironment`</sub>

## `datadog.deleteFeatureFlagsEnvironment`

Delete an environment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteFeatureFlagsEnvironment(input: {
  /** The ID of the environment. */
  environment_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/feature-flags/environments/{environment_id}` · `DeleteFeatureFlagsEnvironment`</sub>

## `datadog.getFeatureFlagsEnvironment`

Get an environment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFeatureFlagsEnvironment(input: {
  /** The ID of the environment. */
  environment_id: string;
}): Promise<EnvironmentResponse>
```

<sub>`GET /api/v2/feature-flags/environments/{environment_id}` · `GetFeatureFlagsEnvironment`</sub>

## `datadog.updateFeatureFlagsEnvironment`

Update an environment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFeatureFlagsEnvironment(input: {
  data: UpdateEnvironmentData;
  /** The ID of the environment. */
  environment_id: string;
}): Promise<EnvironmentResponse>
```

<sub>`PUT /api/v2/feature-flags/environments/{environment_id}` · `UpdateFeatureFlagsEnvironment`</sub>

## `datadog.pauseExposureSchedule`

Pause a progressive rollout — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.pauseExposureSchedule(input: {
  /** The ID of the exposure schedule. */
  exposure_schedule_id: string;
}): Promise<AllocationExposureScheduleResponse>
```

<sub>`POST /api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/pause` · `PauseExposureSchedule`</sub>

## `datadog.resumeExposureSchedule`

Resume a progressive rollout — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.resumeExposureSchedule(input: {
  /** The ID of the exposure schedule. */
  exposure_schedule_id: string;
}): Promise<AllocationExposureScheduleResponse>
```

<sub>`POST /api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/resume` · `ResumeExposureSchedule`</sub>

## `datadog.startExposureSchedule`

Start a progressive rollout — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.startExposureSchedule(input: {
  /** The ID of the exposure schedule. */
  exposure_schedule_id: string;
}): Promise<AllocationExposureScheduleResponse>
```

<sub>`POST /api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/start` · `StartExposureSchedule`</sub>

## `datadog.stopExposureSchedule`

Stop a progressive rollout — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.stopExposureSchedule(input: {
  /** The ID of the exposure schedule. */
  exposure_schedule_id: string;
}): Promise<AllocationExposureScheduleResponse>
```

<sub>`POST /api/v2/feature-flags/exposure-schedules/{exposure_schedule_id}/stop` · `StopExposureSchedule`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

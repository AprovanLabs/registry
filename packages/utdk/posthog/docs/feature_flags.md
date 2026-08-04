# Feature Flags

23 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.featureFlagsList`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; archived?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: s...>
```

<sub>`GET /api/projects/{project_id}/feature_flags/` · `feature_flags_list`</sub>

## `posthog.featureFlagsCreate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsCreate(): Promise<{ id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; archived?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`POST /api/projects/{project_id}/feature_flags/` · `feature_flags_create`</sub>

## `posthog.featureFlagsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.featureFlagsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/feature_flags/{id}/` · `feature_flags_destroy`</sub>

## `posthog.featureFlagsRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsRetrieve(): Promise<{ id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; archived?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`GET /api/projects/{project_id}/feature_flags/{id}/` · `feature_flags_retrieve`</sub>

## `posthog.featureFlagsPartialUpdate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsPartialUpdate(): Promise<{ id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; archived?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`PATCH /api/projects/{project_id}/feature_flags/{id}/` · `feature_flags_partial_update`</sub>

## `posthog.featureFlagsUpdate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsUpdate(): Promise<{ id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; archived?: boolean; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`PUT /api/projects/{project_id}/feature_flags/{id}/` · `feature_flags_update`</sub>

## `posthog.featureFlagsActivityRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsActivityRetrieve(): Promise<{ results: ({ id: string; user: { [key: string]: unknown } | null; activity: string; scope: string; item_id: string; detail?: { id: string; changes?: ({ type: string; action: string; field: string; before: unknown; after: unknown })[]; merge?: { type: string; source: unknown; target: unknown }; trigger?: { job_type: string; job_id: string; payload: unknown }; name: string; short_id: string; type:...>
```

<sub>`GET /api/projects/{project_id}/feature_flags/{id}/activity/` · `feature_flags_activity_retrieve`</sub>

## `posthog.featureFlagsCreateStaticCohortForFlagCreate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsCreateStaticCohortForFlagCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/feature_flags/{id}/create_static_cohort_for_flag/` · `feature_flags_create_static_cohort_for_flag_create`</sub>

## `posthog.featureFlagsDashboardCreate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsDashboardCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/feature_flags/{id}/dashboard/` · `feature_flags_dashboard_create`</sub>

## `posthog.featureFlagsDependentFlagsList`

Get other active flags that depend on this flag.

```ts
posthog.featureFlagsDependentFlagsList(): Promise<({ id: number; key: string; name: string })[]>
```

<sub>`GET /api/projects/{project_id}/feature_flags/{id}/dependent_flags/` · `feature_flags_dependent_flags_list`</sub>

## `posthog.featureFlagsEnrichUsageDashboardCreate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsEnrichUsageDashboardCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/feature_flags/{id}/enrich_usage_dashboard/` · `feature_flags_enrich_usage_dashboard_create`</sub>

## `posthog.featureFlagsRemoteConfigRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsRemoteConfigRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/feature_flags/{id}/remote_config/` · `feature_flags_remote_config_retrieve`</sub>

## `posthog.featureFlagsStatusRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsStatusRetrieve(): Promise<{ status: string; reason: string; rollout: { effectively_full_rollout: boolean; has_targeting_conditions: boolean; max_rollout_percentage: number | null; is_multivariate: boolean } }>
```

<sub>`GET /api/projects/{project_id}/feature_flags/{id}/status/` · `feature_flags_status_retrieve`</sub>

## `posthog.featureFlagsTestEvaluationCreate`

Test feature flag evaluation against a specific user at an optional point in time. This endpoint allows testing how a feature flag would evaluate for a specific user, optionally at a historical timestamp. When a timestamp is provided, both the flag conditions and person properties are evaluated as they existed at that time.

```ts
posthog.featureFlagsTestEvaluationCreate(): Promise<{ flag_key: string; result: unknown; reason: string; condition_index: number | null; payload: unknown; person_properties: { [key: string]: unknown }; evaluation_distinct_id: string | null; conditions: ({ index: number; matched: boolean; properties_matched?: boolean; explanation: string; rollout_percentage: number; rollout_excluded: boolean; variant: string | null; properties: ({ key: string; oper...>
```

<sub>`POST /api/projects/{project_id}/feature_flags/{id}/test_evaluation/` · `feature_flags_test_evaluation_create`</sub>

## `posthog.featureFlagsVersionsRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsVersionsRetrieve(): Promise<{ id: number; key: string; name?: string; filters: { [key: string]: unknown }; active?: boolean; deleted?: boolean; version?: number | null; ensure_experience_continuity?: boolean | null; has_enriched_analytics?: boolean | null; is_remote_configuration?: boolean | null; has_encrypted_payloads?: boolean | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "d...>
```

<sub>`GET /api/projects/{project_id}/feature_flags/{id}/versions/{version_number}/` · `feature_flags_versions_retrieve`</sub>

## `posthog.featureFlagsAllActivityRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsAllActivityRetrieve(): Promise<{ results: ({ id: string; user: { [key: string]: unknown } | null; activity: string; scope: string; item_id: string; detail?: { id: string; changes?: ({ type: string; action: string; field: string; before: unknown; after: unknown })[]; merge?: { type: string; source: unknown; target: unknown }; trigger?: { job_type: string; job_id: string; payload: unknown }; name: string; short_id: string; type:...>
```

<sub>`GET /api/projects/{project_id}/feature_flags/activity/` · `feature_flags_all_activity_retrieve`</sub>

## `posthog.featureFlagsBulkDeleteCreate`

Bulk delete feature flags by filter criteria or explicit IDs. Accepts either: - {"filters": {...}} - Same filter params as list endpoint (search, active, type, etc.) - {"ids": [...]} - Explicit list of flag IDs (no limit) Returns same format as bulk_delete for UI compatibility. Uses bulk operations for efficiency: database updates are batched and cache invalidation happens once at the end rather than per-flag.

```ts
posthog.featureFlagsBulkDeleteCreate(): Promise<{ deleted: ({ id: number; key: string; rollout_state: "fully_rolled_out" | "not_rolled_out" | "partial"; active_variant: string | null })[]; errors: ({ id: unknown; key?: string; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/feature_flags/bulk_delete/` · `feature_flags_bulk_delete_create`</sub>

## `posthog.featureFlagsBulkKeysRetrieve`

Get feature flag keys by IDs. Accepts a list of feature flag IDs and returns a mapping of ID to key.

```ts
posthog.featureFlagsBulkKeysRetrieve(): Promise<{ keys: { [key: string]: string | undefined }; warning?: string }>
```

<sub>`POST /api/projects/{project_id}/feature_flags/bulk_keys/` · `feature_flags_bulk_keys_retrieve`</sub>

## `posthog.featureFlagsBulkUpdateTagsCreate`

Bulk update tags on multiple objects. PAT access: this action has no ``required_scopes=`` on the decorator — inheriting viewsets must add ``"bulk_update_tags"`` to their ``scope_object_write_actions`` list to accept personal API keys. Without that opt-in, ``APIScopePermission`` rejects PAT requests with "This action does not support personal API key access". Done per-viewset so granting ``<scope>:write`` for one resource doesn't leak access to sibling resources that share this mixin. Accepts: - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]} Actions: - "add": Add tags to existing tags on each object - "remove": Remove specific tags from each object - "set": Replace all tags on each object with the provided list

```ts
posthog.featureFlagsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: number; tags: (string)[] })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/feature_flags/bulk_update_tags/` · `feature_flags_bulk_update_tags_create`</sub>

## `posthog.featureFlagsEvaluationReasonsRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsEvaluationReasonsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/feature_flags/evaluation_reasons/` · `feature_flags_evaluation_reasons_retrieve`</sub>

## `posthog.featureFlagsMatchingIdsRetrieve`

Get IDs of all feature flags matching the current filters. Uses the same filtering logic as the list endpoint. Returns only IDs that the user has permission to edit.

```ts
posthog.featureFlagsMatchingIdsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/feature_flags/matching_ids/` · `feature_flags_matching_ids_retrieve`</sub>

## `posthog.featureFlagsMyFlagsRetrieve`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsMyFlagsRetrieve(): Promise<({ feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" | null; evaluation_contexts: (string)[] }; value: unknown ...>
```

<sub>`GET /api/projects/{project_id}/feature_flags/my_flags/` · `feature_flags_my_flags_retrieve`</sub>

## `posthog.featureFlagsUserBlastRadiusCreate`

Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags. If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.

```ts
posthog.featureFlagsUserBlastRadiusCreate(): Promise<{ affected: number; total: number }>
```

<sub>`POST /api/projects/{project_id}/feature_flags/user_blast_radius/` · `feature_flags_user_blast_radius_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

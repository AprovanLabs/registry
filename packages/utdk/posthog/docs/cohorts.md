# Cohorts

13 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.cohortsList`

```ts
posthog.cohortsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name?: string | null; description?: string; groups?: unknown; deleted?: boolean; filters?: { properties: { type: "AND" | "OR"; values: ({ bytecode?: (unknown)[] | null; bytecode_error?: string | null; conditionHash?: string | null; type: string; key: string | number; value: string; event_type: string; time_va...>
```

<sub>`GET /api/projects/{project_id}/cohorts/` · `cohorts_list`</sub>

## `posthog.cohortsCreate`

```ts
posthog.cohortsCreate(): Promise<{ id: number; name?: string | null; description?: string; groups?: unknown; deleted?: boolean; filters?: { properties: { type: "AND" | "OR"; values: ({ bytecode?: (unknown)[] | null; bytecode_error?: string | null; conditionHash?: string | null; type: string; key: string | number; value: string; event_type: string; time_value?: number | null; time_interval?: string | null; negation?: boolean; ope...>
```

<sub>`POST /api/projects/{project_id}/cohorts/` · `cohorts_create`</sub>

## `posthog.cohortsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.cohortsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/cohorts/{id}/` · `cohorts_destroy`</sub>

## `posthog.cohortsRetrieve`

```ts
posthog.cohortsRetrieve(): Promise<{ id: number; name?: string | null; description?: string; groups?: unknown; deleted?: boolean; filters?: { properties: { type: "AND" | "OR"; values: ({ bytecode?: (unknown)[] | null; bytecode_error?: string | null; conditionHash?: string | null; type: string; key: string | number; value: string; event_type: string; time_value?: number | null; time_interval?: string | null; negation?: boolean; ope...>
```

<sub>`GET /api/projects/{project_id}/cohorts/{id}/` · `cohorts_retrieve`</sub>

## `posthog.cohortsPartialUpdate`

```ts
posthog.cohortsPartialUpdate(): Promise<{ id: number; name?: string | null; description?: string; groups?: unknown; deleted?: boolean; filters?: { properties: { type: "AND" | "OR"; values: ({ bytecode?: (unknown)[] | null; bytecode_error?: string | null; conditionHash?: string | null; type: string; key: string | number; value: string; event_type: string; time_value?: number | null; time_interval?: string | null; negation?: boolean; ope...>
```

<sub>`PATCH /api/projects/{project_id}/cohorts/{id}/` · `cohorts_partial_update`</sub>

## `posthog.cohortsUpdate`

```ts
posthog.cohortsUpdate(): Promise<{ id: number; name?: string | null; description?: string; groups?: unknown; deleted?: boolean; filters?: { properties: { type: "AND" | "OR"; values: ({ bytecode?: (unknown)[] | null; bytecode_error?: string | null; conditionHash?: string | null; type: string; key: string | number; value: string; event_type: string; time_value?: number | null; time_interval?: string | null; negation?: boolean; ope...>
```

<sub>`PUT /api/projects/{project_id}/cohorts/{id}/` · `cohorts_update`</sub>

## `posthog.cohortsActivityRetrieve`

```ts
posthog.cohortsActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/cohorts/{id}/activity/` · `cohorts_activity_retrieve`</sub>

## `posthog.cohortsAddPersonsToStaticCohortPartialUpdate`

```ts
posthog.cohortsAddPersonsToStaticCohortPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/cohorts/{id}/add_persons_to_static_cohort/` · `cohorts_add_persons_to_static_cohort_partial_update`</sub>

## `posthog.cohortsCalculationHistoryRetrieve`

```ts
posthog.cohortsCalculationHistoryRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/cohorts/{id}/calculation_history/` · `cohorts_calculation_history_retrieve`</sub>

## `posthog.cohortsPersonsRetrieve`

```ts
posthog.cohortsPersonsRetrieve(): Promise<{ results: ({ id: string; uuid: string; type: "person"; name: string; distinct_ids: (string)[]; properties: { [key: string]: unknown }; created_at: string | null; last_seen_at: string | null; is_identified: boolean | null; matched_recordings: ({ [key: string]: unknown })[]; value_at_data_point: number | null })[]; next: string | null; previous: string | null }>
```

<sub>`GET /api/projects/{project_id}/cohorts/{id}/persons/` · `cohorts_persons_retrieve`</sub>

## `posthog.cohortsRemovePersonFromStaticCohortPartialUpdate`

```ts
posthog.cohortsRemovePersonFromStaticCohortPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/cohorts/{id}/remove_person_from_static_cohort/` · `cohorts_remove_person_from_static_cohort_partial_update`</sub>

## `posthog.cohortsUsedInRetrieve`

```ts
posthog.cohortsUsedInRetrieve(): Promise<{ feature_flags: { results: ({ id: number; key: string; name: string | null })[]; total: number; has_more: boolean }; insights: { results: ({ id: number; short_id: string; name: string })[]; total: number; has_more: boolean }; cohorts: { results: ({ id: number; name: string })[]; total: number; has_more: boolean } }>
```

<sub>`GET /api/projects/{project_id}/cohorts/{id}/used_in/` · `cohorts_used_in_retrieve`</sub>

## `posthog.cohortsAllActivityRetrieve`

```ts
posthog.cohortsAllActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/cohorts/activity/` · `cohorts_all_activity_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

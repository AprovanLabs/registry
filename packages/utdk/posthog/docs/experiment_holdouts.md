# Experiment Holdouts

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.experimentHoldoutsList`

```ts
posthog.experimentHoldoutsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name: string; description?: string | null; filters?: ({ properties?: ({ key: string; type?: "cohort" | "person" | "group"; cohort_name?: string | null; group_type_index?: number | null; value: unknown; operator: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_wit...>
```

<sub>`GET /api/projects/{project_id}/experiment_holdouts/` · `experiment_holdouts_list`</sub>

## `posthog.experimentHoldoutsCreate`

```ts
posthog.experimentHoldoutsCreate(): Promise<{ id: number; name: string; description?: string | null; filters?: ({ properties?: ({ key: string; type?: "cohort" | "person" | "group"; cohort_name?: string | null; group_type_index?: number | null; value: unknown; operator: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" ...>
```

<sub>`POST /api/projects/{project_id}/experiment_holdouts/` · `experiment_holdouts_create`</sub>

## `posthog.experimentHoldoutsDestroy`

```ts
posthog.experimentHoldoutsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/experiment_holdouts/{id}/` · `experiment_holdouts_destroy`</sub>

## `posthog.experimentHoldoutsRetrieve`

```ts
posthog.experimentHoldoutsRetrieve(): Promise<{ id: number; name: string; description?: string | null; filters?: ({ properties?: ({ key: string; type?: "cohort" | "person" | "group"; cohort_name?: string | null; group_type_index?: number | null; value: unknown; operator: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" ...>
```

<sub>`GET /api/projects/{project_id}/experiment_holdouts/{id}/` · `experiment_holdouts_retrieve`</sub>

## `posthog.experimentHoldoutsPartialUpdate`

```ts
posthog.experimentHoldoutsPartialUpdate(): Promise<{ id: number; name: string; description?: string | null; filters?: ({ properties?: ({ key: string; type?: "cohort" | "person" | "group"; cohort_name?: string | null; group_type_index?: number | null; value: unknown; operator: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" ...>
```

<sub>`PATCH /api/projects/{project_id}/experiment_holdouts/{id}/` · `experiment_holdouts_partial_update`</sub>

## `posthog.experimentHoldoutsUpdate`

```ts
posthog.experimentHoldoutsUpdate(): Promise<{ id: number; name: string; description?: string | null; filters?: ({ properties?: ({ key: string; type?: "cohort" | "person" | "group"; cohort_name?: string | null; group_type_index?: number | null; value: unknown; operator: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" ...>
```

<sub>`PUT /api/projects/{project_id}/experiment_holdouts/{id}/` · `experiment_holdouts_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

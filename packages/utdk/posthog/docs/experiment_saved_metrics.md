# Experiment Saved Metrics

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.experimentSavedMetricsList`

```ts
posthog.experimentSavedMetricsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name: string; description?: string | null; query: unknown; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" |...>
```

<sub>`GET /api/projects/{project_id}/experiment_saved_metrics/` · `experiment_saved_metrics_list`</sub>

## `posthog.experimentSavedMetricsCreate`

```ts
posthog.experimentSavedMetricsCreate(): Promise<{ id: number; name: string; description?: string | null; query: unknown; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "s...>
```

<sub>`POST /api/projects/{project_id}/experiment_saved_metrics/` · `experiment_saved_metrics_create`</sub>

## `posthog.experimentSavedMetricsDestroy`

```ts
posthog.experimentSavedMetricsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/experiment_saved_metrics/{id}/` · `experiment_saved_metrics_destroy`</sub>

## `posthog.experimentSavedMetricsRetrieve`

```ts
posthog.experimentSavedMetricsRetrieve(): Promise<{ id: number; name: string; description?: string | null; query: unknown; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "s...>
```

<sub>`GET /api/projects/{project_id}/experiment_saved_metrics/{id}/` · `experiment_saved_metrics_retrieve`</sub>

## `posthog.experimentSavedMetricsPartialUpdate`

```ts
posthog.experimentSavedMetricsPartialUpdate(): Promise<{ id: number; name: string; description?: string | null; query: unknown; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "s...>
```

<sub>`PATCH /api/projects/{project_id}/experiment_saved_metrics/{id}/` · `experiment_saved_metrics_partial_update`</sub>

## `posthog.experimentSavedMetricsUpdate`

```ts
posthog.experimentSavedMetricsUpdate(): Promise<{ id: number; name: string; description?: string | null; query: unknown; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "s...>
```

<sub>`PUT /api/projects/{project_id}/experiment_saved_metrics/{id}/` · `experiment_saved_metrics_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

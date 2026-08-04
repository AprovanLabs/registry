# Groups Types

11 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.groupsTypesList`

```ts
posthog.groupsTypesList(): Promise<({ group_type: string; group_type_index: number; name_singular?: string | null; name_plural?: string | null; detail_dashboard?: number | null; default_columns?: unknown[] | null; created_at?: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/groups_types/` · `groups_types_list`</sub>

## `posthog.groupsTypesDestroy`

```ts
posthog.groupsTypesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/groups_types/{group_type_index}/` · `groups_types_destroy`</sub>

## `posthog.groupsTypesMetricsList`

```ts
posthog.groupsTypesMetricsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; format?: "numeric" | "currency"; interval?: number; display?: "number" | "sparkline"; filters: { [key: string]: unknown }; math?: "count" | "sum"; math_property?: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/groups_types/{group_type_index}/metrics/` · `groups_types_metrics_list`</sub>

## `posthog.groupsTypesMetricsCreate`

```ts
posthog.groupsTypesMetricsCreate(): Promise<{ id: string; name: string; format?: "numeric" | "currency"; interval?: number; display?: "number" | "sparkline"; filters: { [key: string]: unknown }; math?: "count" | "sum"; math_property?: string | null }>
```

<sub>`POST /api/projects/{project_id}/groups_types/{group_type_index}/metrics/` · `groups_types_metrics_create`</sub>

## `posthog.groupsTypesMetricsDestroy`

```ts
posthog.groupsTypesMetricsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/` · `groups_types_metrics_destroy`</sub>

## `posthog.groupsTypesMetricsRetrieve`

```ts
posthog.groupsTypesMetricsRetrieve(): Promise<{ id: string; name: string; format?: "numeric" | "currency"; interval?: number; display?: "number" | "sparkline"; filters: { [key: string]: unknown }; math?: "count" | "sum"; math_property?: string | null }>
```

<sub>`GET /api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/` · `groups_types_metrics_retrieve`</sub>

## `posthog.groupsTypesMetricsPartialUpdate`

```ts
posthog.groupsTypesMetricsPartialUpdate(): Promise<{ id: string; name: string; format?: "numeric" | "currency"; interval?: number; display?: "number" | "sparkline"; filters: { [key: string]: unknown }; math?: "count" | "sum"; math_property?: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/` · `groups_types_metrics_partial_update`</sub>

## `posthog.groupsTypesMetricsUpdate`

```ts
posthog.groupsTypesMetricsUpdate(): Promise<{ id: string; name: string; format?: "numeric" | "currency"; interval?: number; display?: "number" | "sparkline"; filters: { [key: string]: unknown }; math?: "count" | "sum"; math_property?: string | null }>
```

<sub>`PUT /api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/` · `groups_types_metrics_update`</sub>

## `posthog.groupsTypesCreateDetailDashboardUpdate`

```ts
posthog.groupsTypesCreateDetailDashboardUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/groups_types/create_detail_dashboard/` · `groups_types_create_detail_dashboard_update`</sub>

## `posthog.groupsTypesSetDefaultColumnsUpdate`

```ts
posthog.groupsTypesSetDefaultColumnsUpdate(): Promise<unknown>
```

<sub>`PUT /api/projects/{project_id}/groups_types/set_default_columns/` · `groups_types_set_default_columns_update`</sub>

## `posthog.groupsTypesUpdateMetadataPartialUpdate`

```ts
posthog.groupsTypesUpdateMetadataPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/groups_types/update_metadata/` · `groups_types_update_metadata_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Warehouse Saved Queries

17 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseSavedQueriesList`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; deleted: boolean | null; name: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_queries/` · `warehouse_saved_queries_list`</sub>

## `posthog.warehouseSavedQueriesCreate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/` · `warehouse_saved_queries_create`</sub>

## `posthog.warehouseSavedQueriesDestroy`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/warehouse_saved_queries/{id}/` · `warehouse_saved_queries_destroy`</sub>

## `posthog.warehouseSavedQueriesRetrieve`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesRetrieve(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_queries/{id}/` · `warehouse_saved_queries_retrieve`</sub>

## `posthog.warehouseSavedQueriesPartialUpdate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesPartialUpdate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`PATCH /api/projects/{project_id}/warehouse_saved_queries/{id}/` · `warehouse_saved_queries_partial_update`</sub>

## `posthog.warehouseSavedQueriesUpdate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesUpdate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`PUT /api/projects/{project_id}/warehouse_saved_queries/{id}/` · `warehouse_saved_queries_update`</sub>

## `posthog.warehouseSavedQueriesActivityRetrieve`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseSavedQueriesActivityRetrieve(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_queries/{id}/activity/` · `warehouse_saved_queries_activity_retrieve`</sub>

## `posthog.warehouseSavedQueriesAncestorsCreate`

Return the ancestors of this saved query. By default, we return the immediate parents. The `level` parameter can be used to look further back into the ancestor tree. If `level` overshoots (i.e. points to only ancestors beyond the root), we return an empty list.

```ts
posthog.warehouseSavedQueriesAncestorsCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/ancestors/` · `warehouse_saved_queries_ancestors_create`</sub>

## `posthog.warehouseSavedQueriesCancelCreate`

Cancel a running saved query workflow.

```ts
posthog.warehouseSavedQueriesCancelCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/cancel/` · `warehouse_saved_queries_cancel_create`</sub>

## `posthog.warehouseSavedQueriesDependenciesRetrieve`

Return the count of immediate upstream and downstream dependencies for this saved query.

```ts
posthog.warehouseSavedQueriesDependenciesRetrieve(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_queries/{id}/dependencies/` · `warehouse_saved_queries_dependencies_retrieve`</sub>

## `posthog.warehouseSavedQueriesDescendantsCreate`

Return the descendants of this saved query. By default, we return the immediate children. The `level` parameter can be used to look further ahead into the descendants tree. If `level` overshoots (i.e. points to only descendants further than a leaf), we return an empty list.

```ts
posthog.warehouseSavedQueriesDescendantsCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/descendants/` · `warehouse_saved_queries_descendants_create`</sub>

## `posthog.warehouseSavedQueriesMaterializeCreate`

Enable materialization for this saved query with a 24-hour sync frequency.

```ts
posthog.warehouseSavedQueriesMaterializeCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/materialize/` · `warehouse_saved_queries_materialize_create`</sub>

## `posthog.warehouseSavedQueriesResumeCreate`

Resume materialization suspended after repeated failures. Scheduled runs skip a suspended model and everything downstream of it, so it cannot succeed its way back on its own.

```ts
posthog.warehouseSavedQueriesResumeCreate(): Promise<{ resumed: boolean }>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/resume/` · `warehouse_saved_queries_resume_create`</sub>

## `posthog.warehouseSavedQueriesRevertMaterializationCreate`

Undo materialization, revert back to the original view. (i.e. delete the materialized table and the schedule)

```ts
posthog.warehouseSavedQueriesRevertMaterializationCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/revert_materialization/` · `warehouse_saved_queries_revert_materialization_create`</sub>

## `posthog.warehouseSavedQueriesRunHistoryRetrieve`

Return the recent run history (up to 5 most recent) for this materialized view.

```ts
posthog.warehouseSavedQueriesRunHistoryRetrieve(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_queries/{id}/run_history/` · `warehouse_saved_queries_run_history_retrieve`</sub>

## `posthog.warehouseSavedQueriesRunCreate`

Run this saved query.

```ts
posthog.warehouseSavedQueriesRunCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/{id}/run/` · `warehouse_saved_queries_run_create`</sub>

## `posthog.warehouseSavedQueriesResumeSchedulesCreate`

Resume paused materialization schedules for multiple matviews. Accepts a list of view IDs in the request body: {"view_ids": ["id1", "id2", ...]} This endpoint is idempotent - calling it on already running or non-existent schedules is safe.

```ts
posthog.warehouseSavedQueriesResumeSchedulesCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; query: { kind?: "HogQLQuery"; query: string }; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_queries/resume_schedules/` · `warehouse_saved_queries_resume_schedules_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

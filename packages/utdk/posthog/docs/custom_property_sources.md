# Custom Property Sources

9 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.customPropertySourcesList`

```ts
posthog.customPropertySourcesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; definition: string; saved_query?: string | null; external_data_schema?: string | null; source_column?: string | null; column_property_map?: unknown; column_descriptions?: unknown; key_column: string; is_enabled?: boolean; consecutive_failures: number; last_synced_at: string | null; last_sync_error: string | n...>
```

<sub>`GET /api/projects/{project_id}/custom_property_sources/` · `custom_property_sources_list`</sub>

## `posthog.customPropertySourcesCreate`

```ts
posthog.customPropertySourcesCreate(): Promise<{ id: string; definition: string; saved_query?: string | null; external_data_schema?: string | null; source_column?: string | null; column_property_map?: unknown; column_descriptions?: unknown; key_column: string; is_enabled?: boolean; consecutive_failures: number; last_synced_at: string | null; last_sync_error: string | null; created_at: string; created_by: number | null; updated_at: string | nu...>
```

<sub>`POST /api/projects/{project_id}/custom_property_sources/` · `custom_property_sources_create`</sub>

## `posthog.customPropertySourcesDestroy`

```ts
posthog.customPropertySourcesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/custom_property_sources/{id}/` · `custom_property_sources_destroy`</sub>

## `posthog.customPropertySourcesRetrieve`

```ts
posthog.customPropertySourcesRetrieve(): Promise<{ id: string; definition: string; saved_query?: string | null; external_data_schema?: string | null; source_column?: string | null; column_property_map?: unknown; column_descriptions?: unknown; key_column: string; is_enabled?: boolean; consecutive_failures: number; last_synced_at: string | null; last_sync_error: string | null; created_at: string; created_by: number | null; updated_at: string | nu...>
```

<sub>`GET /api/projects/{project_id}/custom_property_sources/{id}/` · `custom_property_sources_retrieve`</sub>

## `posthog.customPropertySourcesPartialUpdate`

```ts
posthog.customPropertySourcesPartialUpdate(): Promise<{ id: string; definition: string; saved_query?: string | null; external_data_schema?: string | null; source_column?: string | null; column_property_map?: unknown; column_descriptions?: unknown; key_column: string; is_enabled?: boolean; consecutive_failures: number; last_synced_at: string | null; last_sync_error: string | null; created_at: string; created_by: number | null; updated_at: string | nu...>
```

<sub>`PATCH /api/projects/{project_id}/custom_property_sources/{id}/` · `custom_property_sources_partial_update`</sub>

## `posthog.customPropertySourcesUpdate`

```ts
posthog.customPropertySourcesUpdate(): Promise<{ id: string; definition: string; saved_query?: string | null; external_data_schema?: string | null; source_column?: string | null; column_property_map?: unknown; column_descriptions?: unknown; key_column: string; is_enabled?: boolean; consecutive_failures: number; last_synced_at: string | null; last_sync_error: string | null; created_at: string; created_by: number | null; updated_at: string | nu...>
```

<sub>`PUT /api/projects/{project_id}/custom_property_sources/{id}/` · `custom_property_sources_update`</sub>

## `posthog.customPropertySourcesBackfill`

Person and group sources only: start a backfill that reads the whole warehouse table and populates person or group properties for historical rows. Coalesces if one is already running for the table.

```ts
posthog.customPropertySourcesBackfill(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/custom_property_sources/{id}/backfill/` · `custom_property_sources_backfill`</sub>

## `posthog.customPropertySourcesRunsList`

Person and group sources only: the source's sync/backfill run history, newest first. Gated on the caller's warehouse-source viewer access, since the runs expose its row counts and sync errors.

```ts
posthog.customPropertySourcesRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; trigger: string; status: string; started_at: string | null; finished_at: string | null; rows_read: number; changed: number; existing: number; produced: number; skipped_missing_person: number; error: string | null; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/custom_property_sources/{id}/runs/` · `custom_property_sources_runs_list`</sub>

## `posthog.customPropertySourcesSync`

Person and group sources only: trigger the underlying warehouse schema's sync now. This re-runs a real (billable) warehouse sync; the incremental person/group-property update runs off it.

```ts
posthog.customPropertySourcesSync(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/custom_property_sources/{id}/sync/` · `custom_property_sources_sync`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

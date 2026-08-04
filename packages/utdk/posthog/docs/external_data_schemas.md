# External Data Schemas

11 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.externalDataSchemasList`

```ts
posthog.externalDataSchemasList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; label: string | null; table: { [key: string]: unknown } | null; should_sync?: boolean; last_synced_at: string | null; latest_error: string | null; incremental: boolean; status: string | null; sync_type?: "full_refresh" | "incremental" | "append" | "webhook" | "cdc" | "xmin" | null; incremental_f...>
```

<sub>`GET /api/projects/{project_id}/external_data_schemas/` · `external_data_schemas_list`</sub>

## `posthog.externalDataSchemasDestroy`

```ts
posthog.externalDataSchemasDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/external_data_schemas/{id}/` · `external_data_schemas_destroy`</sub>

## `posthog.externalDataSchemasRetrieve`

```ts
posthog.externalDataSchemasRetrieve(): Promise<{ id: string; name: string; label: string | null; table: { [key: string]: unknown } | null; should_sync?: boolean; last_synced_at: string | null; latest_error: string | null; incremental: boolean; status: string | null; sync_type?: "full_refresh" | "incremental" | "append" | "webhook" | "cdc" | "xmin" | null; incremental_field?: string | null; incremental_field_type?: "integer" | "numeric" | "dat...>
```

<sub>`GET /api/projects/{project_id}/external_data_schemas/{id}/` · `external_data_schemas_retrieve`</sub>

## `posthog.externalDataSchemasPartialUpdate`

```ts
posthog.externalDataSchemasPartialUpdate(): Promise<{ id: string; name: string; label: string | null; table: { [key: string]: unknown } | null; should_sync?: boolean; last_synced_at: string | null; latest_error: string | null; incremental: boolean; status: string | null; sync_type?: "full_refresh" | "incremental" | "append" | "webhook" | "cdc" | "xmin" | null; incremental_field?: string | null; incremental_field_type?: "integer" | "numeric" | "dat...>
```

<sub>`PATCH /api/projects/{project_id}/external_data_schemas/{id}/` · `external_data_schemas_partial_update`</sub>

## `posthog.externalDataSchemasUpdate`

```ts
posthog.externalDataSchemasUpdate(): Promise<{ id: string; name: string; label: string | null; table: { [key: string]: unknown } | null; should_sync?: boolean; last_synced_at: string | null; latest_error: string | null; incremental: boolean; status: string | null; sync_type?: "full_refresh" | "incremental" | "append" | "webhook" | "cdc" | "xmin" | null; incremental_field?: string | null; incremental_field_type?: "integer" | "numeric" | "dat...>
```

<sub>`PUT /api/projects/{project_id}/external_data_schemas/{id}/` · `external_data_schemas_update`</sub>

## `posthog.externalDataSchemasCancelCreate`

```ts
posthog.externalDataSchemasCancelCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_schemas/{id}/cancel/` · `external_data_schemas_cancel_create`</sub>

## `posthog.externalDataSchemasDeleteDataDestroy`

```ts
posthog.externalDataSchemasDeleteDataDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/external_data_schemas/{id}/delete_data/` · `external_data_schemas_delete_data_destroy`</sub>

## `posthog.externalDataSchemasIncrementalFieldsCreate`

```ts
posthog.externalDataSchemasIncrementalFieldsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_schemas/{id}/incremental_fields/` · `external_data_schemas_incremental_fields_create`</sub>

## `posthog.externalDataSchemasLogsRetrieve`

```ts
posthog.externalDataSchemasLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/external_data_schemas/{id}/logs/` · `external_data_schemas_logs_retrieve`</sub>

## `posthog.externalDataSchemasReloadCreate`

```ts
posthog.externalDataSchemasReloadCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_schemas/{id}/reload/` · `external_data_schemas_reload_create`</sub>

## `posthog.externalDataSchemasResyncCreate`

```ts
posthog.externalDataSchemasResyncCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/external_data_schemas/{id}/resync/` · `external_data_schemas_resync_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

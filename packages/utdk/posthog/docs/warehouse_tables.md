# Warehouse Tables

11 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseTablesList`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; deleted?: boolean | null; name: string; hogql_name: string; format: "CSV" | "CSVWithNames" | "Parquet" | "JSONEachRow" | "Delta" | "DeltaS3Wrapper"; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_tables/` · `warehouse_tables_list`</sub>

## `posthog.warehouseTablesCreate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; hogql_name: string; format: "CSV" | "CSVWithNames" | "Parquet" | "JSONEachRow" | "Delta" | "DeltaS3Wrapper"; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_tables/` · `warehouse_tables_create`</sub>

## `posthog.warehouseTablesDestroy`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/warehouse_tables/{id}/` · `warehouse_tables_destroy`</sub>

## `posthog.warehouseTablesRetrieve`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesRetrieve(): Promise<{ id: string; deleted?: boolean | null; name: string; hogql_name: string; format: "CSV" | "CSVWithNames" | "Parquet" | "JSONEachRow" | "Delta" | "DeltaS3Wrapper"; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_tables/{id}/` · `warehouse_tables_retrieve`</sub>

## `posthog.warehouseTablesPartialUpdate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesPartialUpdate(): Promise<{ id: string; deleted?: boolean | null; name: string; hogql_name: string; format: "CSV" | "CSVWithNames" | "Parquet" | "JSONEachRow" | "Delta" | "DeltaS3Wrapper"; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: ...>
```

<sub>`PATCH /api/projects/{project_id}/warehouse_tables/{id}/` · `warehouse_tables_partial_update`</sub>

## `posthog.warehouseTablesUpdate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesUpdate(): Promise<{ id: string; deleted?: boolean | null; name: string; hogql_name: string; format: "CSV" | "CSVWithNames" | "Parquet" | "JSONEachRow" | "Delta" | "DeltaS3Wrapper"; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: ...>
```

<sub>`PUT /api/projects/{project_id}/warehouse_tables/{id}/` · `warehouse_tables_update`</sub>

## `posthog.warehouseTablesRefreshSchemaCreate`

Refresh table schema from source

```ts
posthog.warehouseTablesRefreshSchemaCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/warehouse_tables/{id}/refresh_schema/` · `warehouse_tables_refresh_schema_create`</sub>

## `posthog.warehouseTablesUpdateSchemaCreate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesUpdateSchemaCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/warehouse_tables/{id}/update_schema/` · `warehouse_tables_update_schema_create`</sub>

## `posthog.warehouseTablesCreateFromUploadCreate`

Create a self-managed warehouse table from an uploaded file

```ts
posthog.warehouseTablesCreateFromUploadCreate(): Promise<{ id: string; deleted?: boolean | null; name: string; hogql_name: string; format: "CSV" | "CSVWithNames" | "Parquet" | "JSONEachRow" | "Delta" | "DeltaS3Wrapper"; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_tables/create_from_upload/` · `warehouse_tables_create_from_upload_create`</sub>

## `posthog.warehouseTablesFileCreate`

Create, Read, Update and Delete Warehouse Tables.

```ts
posthog.warehouseTablesFileCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/warehouse_tables/file/` · `warehouse_tables_file_create`</sub>

## `posthog.warehouseTablesUploadFileCreate`

Upload a file for a new self-managed warehouse table

```ts
posthog.warehouseTablesUploadFileCreate(): Promise<{ upload_id: string; filename: string; file_format: string; size_bytes: number }>
```

<sub>`POST /api/projects/{project_id}/warehouse_tables/upload_file/` · `warehouse_tables_upload_file_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

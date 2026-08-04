# Warehouse Column Annotations

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseColumnAnnotationsList`

Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent. List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(table, column_name)`; the table cannot be changed after creation.

```ts
posthog.warehouseColumnAnnotationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; table: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/warehouse_column_annotations/` · `warehouse_column_annotations_list`</sub>

## `posthog.warehouseColumnAnnotationsCreate`

Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent. List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(table, column_name)`; the table cannot be changed after creation.

```ts
posthog.warehouseColumnAnnotationsCreate(): Promise<{ id: string; table: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/warehouse_column_annotations/` · `warehouse_column_annotations_create`</sub>

## `posthog.warehouseColumnAnnotationsDestroy`

Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent. List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(table, column_name)`; the table cannot be changed after creation.

```ts
posthog.warehouseColumnAnnotationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/warehouse_column_annotations/{id}/` · `warehouse_column_annotations_destroy`</sub>

## `posthog.warehouseColumnAnnotationsRetrieve`

Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent. List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(table, column_name)`; the table cannot be changed after creation.

```ts
posthog.warehouseColumnAnnotationsRetrieve(): Promise<{ id: string; table: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/warehouse_column_annotations/{id}/` · `warehouse_column_annotations_retrieve`</sub>

## `posthog.warehouseColumnAnnotationsPartialUpdate`

Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent. List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(table, column_name)`; the table cannot be changed after creation.

```ts
posthog.warehouseColumnAnnotationsPartialUpdate(): Promise<{ id: string; table: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/warehouse_column_annotations/{id}/` · `warehouse_column_annotations_partial_update`</sub>

## `posthog.warehouseColumnAnnotationsUpdate`

Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent. List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(table, column_name)`; the table cannot be changed after creation.

```ts
posthog.warehouseColumnAnnotationsUpdate(): Promise<{ id: string; table: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/warehouse_column_annotations/{id}/` · `warehouse_column_annotations_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

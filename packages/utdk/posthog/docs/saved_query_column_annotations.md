# Saved Query Column Annotations

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.savedQueryColumnAnnotationsList`

Read and edit semantic descriptions of data-modelling views and columns surfaced to the AI agent. List can be filtered to one view with `?saved_query_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(saved_query, column_name)`; the view cannot be changed after creation.

```ts
posthog.savedQueryColumnAnnotationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; saved_query: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/saved_query_column_annotations/` · `saved_query_column_annotations_list`</sub>

## `posthog.savedQueryColumnAnnotationsCreate`

Read and edit semantic descriptions of data-modelling views and columns surfaced to the AI agent. List can be filtered to one view with `?saved_query_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(saved_query, column_name)`; the view cannot be changed after creation.

```ts
posthog.savedQueryColumnAnnotationsCreate(): Promise<{ id: string; saved_query: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/saved_query_column_annotations/` · `saved_query_column_annotations_create`</sub>

## `posthog.savedQueryColumnAnnotationsDestroy`

Read and edit semantic descriptions of data-modelling views and columns surfaced to the AI agent. List can be filtered to one view with `?saved_query_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(saved_query, column_name)`; the view cannot be changed after creation.

```ts
posthog.savedQueryColumnAnnotationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/saved_query_column_annotations/{id}/` · `saved_query_column_annotations_destroy`</sub>

## `posthog.savedQueryColumnAnnotationsRetrieve`

Read and edit semantic descriptions of data-modelling views and columns surfaced to the AI agent. List can be filtered to one view with `?saved_query_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(saved_query, column_name)`; the view cannot be changed after creation.

```ts
posthog.savedQueryColumnAnnotationsRetrieve(): Promise<{ id: string; saved_query: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/saved_query_column_annotations/{id}/` · `saved_query_column_annotations_retrieve`</sub>

## `posthog.savedQueryColumnAnnotationsPartialUpdate`

Read and edit semantic descriptions of data-modelling views and columns surfaced to the AI agent. List can be filtered to one view with `?saved_query_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(saved_query, column_name)`; the view cannot be changed after creation.

```ts
posthog.savedQueryColumnAnnotationsPartialUpdate(): Promise<{ id: string; saved_query: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/saved_query_column_annotations/{id}/` · `saved_query_column_annotations_partial_update`</sub>

## `posthog.savedQueryColumnAnnotationsUpdate`

Read and edit semantic descriptions of data-modelling views and columns surfaced to the AI agent. List can be filtered to one view with `?saved_query_id=<uuid>`. Any create or update is treated as a user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic enrichment. Create upserts on `(saved_query, column_name)`; the view cannot be changed after creation.

```ts
posthog.savedQueryColumnAnnotationsUpdate(): Promise<{ id: string; saved_query: string; column_name?: string; description: string; description_source: "canonical" | "ai_generated" | "user_edited"; ai_model: string; is_user_edited: boolean; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/saved_query_column_annotations/{id}/` · `saved_query_column_annotations_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

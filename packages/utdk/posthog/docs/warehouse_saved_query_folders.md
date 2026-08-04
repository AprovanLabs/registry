# Warehouse Saved Query Folders

5 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseSavedQueryFoldersList`

```ts
posthog.warehouseSavedQueryFoldersList(): Promise<({ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" |...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_query_folders/` · `warehouse_saved_query_folders_list`</sub>

## `posthog.warehouseSavedQueryFoldersCreate`

```ts
posthog.warehouseSavedQueryFoldersCreate(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_saved_query_folders/` · `warehouse_saved_query_folders_create`</sub>

## `posthog.warehouseSavedQueryFoldersDestroy`

```ts
posthog.warehouseSavedQueryFoldersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/warehouse_saved_query_folders/{id}/` · `warehouse_saved_query_folders_destroy`</sub>

## `posthog.warehouseSavedQueryFoldersRetrieve`

```ts
posthog.warehouseSavedQueryFoldersRetrieve(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_saved_query_folders/{id}/` · `warehouse_saved_query_folders_retrieve`</sub>

## `posthog.warehouseSavedQueryFoldersPartialUpdate`

```ts
posthog.warehouseSavedQueryFoldersPartialUpdate(): Promise<{ id: string; name: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | ...>
```

<sub>`PATCH /api/projects/{project_id}/warehouse_saved_query_folders/{id}/` · `warehouse_saved_query_folders_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

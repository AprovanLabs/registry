# Warehouse Model Paths

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseModelPathsList`

```ts
posthog.warehouseModelPathsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; path: (string)[]; team: number; table?: string | null; saved_query?: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } |...>
```

<sub>`GET /api/projects/{project_id}/warehouse_model_paths/` · `warehouse_model_paths_list`</sub>

## `posthog.warehouseModelPathsRetrieve`

```ts
posthog.warehouseModelPathsRetrieve(): Promise<{ id: string; path: (string)[]; team: number; table?: string | null; saved_query?: string | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder...>
```

<sub>`GET /api/projects/{project_id}/warehouse_model_paths/{id}/` · `warehouse_model_paths_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

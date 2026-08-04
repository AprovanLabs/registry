# Warehouse View Links

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseViewLinksList`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" |...>
```

<sub>`GET /api/projects/{project_id}/warehouse_view_links/` · `warehouse_view_links_list`</sub>

## `posthog.warehouseViewLinksCreate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksCreate(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_view_links/` · `warehouse_view_links_create`</sub>

## `posthog.warehouseViewLinksDestroy`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/warehouse_view_links/{id}/` · `warehouse_view_links_destroy`</sub>

## `posthog.warehouseViewLinksRetrieve`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksRetrieve(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_view_links/{id}/` · `warehouse_view_links_retrieve`</sub>

## `posthog.warehouseViewLinksPartialUpdate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksPartialUpdate(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`PATCH /api/projects/{project_id}/warehouse_view_links/{id}/` · `warehouse_view_links_partial_update`</sub>

## `posthog.warehouseViewLinksUpdate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksUpdate(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`PUT /api/projects/{project_id}/warehouse_view_links/{id}/` · `warehouse_view_links_update`</sub>

## `posthog.warehouseViewLinksValidateCreate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinksValidateCreate(): Promise<{ is_valid: boolean; msg: string | null; hogql: string | null; columns: (string)[]; results: ((unknown)[])[]; total_rows: number | null; matched_rows: number | null; match_rate: number | null }>
```

<sub>`POST /api/projects/{project_id}/warehouse_view_links/validate/` · `warehouse_view_links_validate_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

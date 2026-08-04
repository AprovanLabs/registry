# Warehouse View Link

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.warehouseViewLinkList`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" |...>
```

<sub>`GET /api/projects/{project_id}/warehouse_view_link/` · `warehouse_view_link_list`</sub>

## `posthog.warehouseViewLinkCreate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkCreate(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`POST /api/projects/{project_id}/warehouse_view_link/` · `warehouse_view_link_create`</sub>

## `posthog.warehouseViewLinkDestroy`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/warehouse_view_link/{id}/` · `warehouse_view_link_destroy`</sub>

## `posthog.warehouseViewLinkRetrieve`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkRetrieve(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`GET /api/projects/{project_id}/warehouse_view_link/{id}/` · `warehouse_view_link_retrieve`</sub>

## `posthog.warehouseViewLinkPartialUpdate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkPartialUpdate(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`PATCH /api/projects/{project_id}/warehouse_view_link/{id}/` · `warehouse_view_link_partial_update`</sub>

## `posthog.warehouseViewLinkUpdate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkUpdate(): Promise<{ id: string; deleted?: boolean | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; ...>
```

<sub>`PUT /api/projects/{project_id}/warehouse_view_link/{id}/` · `warehouse_view_link_update`</sub>

## `posthog.warehouseViewLinkValidateCreate`

Create, Read, Update and Delete View Columns.

```ts
posthog.warehouseViewLinkValidateCreate(): Promise<{ is_valid: boolean; msg: string | null; hogql: string | null; columns: (string)[]; results: ((unknown)[])[]; total_rows: number | null; matched_rows: number | null; match_rate: number | null }>
```

<sub>`POST /api/projects/{project_id}/warehouse_view_link/validate/` · `warehouse_view_link_validate_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

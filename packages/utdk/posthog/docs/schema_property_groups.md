# Schema Property Groups

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.schemaPropertyGroupsList`

```ts
posthog.schemaPropertyGroupsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string }...>
```

<sub>`GET /api/projects/{project_id}/schema_property_groups/` · `schema_property_groups_list`</sub>

## `posthog.schemaPropertyGroupsCreate`

```ts
posthog.schemaPropertyGroupsCreate(): Promise<{ id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: string; updated_at: string; created_by: { id: number; uuid...>
```

<sub>`POST /api/projects/{project_id}/schema_property_groups/` · `schema_property_groups_create`</sub>

## `posthog.schemaPropertyGroupsDestroy`

```ts
posthog.schemaPropertyGroupsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/schema_property_groups/{id}/` · `schema_property_groups_destroy`</sub>

## `posthog.schemaPropertyGroupsRetrieve`

```ts
posthog.schemaPropertyGroupsRetrieve(): Promise<{ id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: string; updated_at: string; created_by: { id: number; uuid...>
```

<sub>`GET /api/projects/{project_id}/schema_property_groups/{id}/` · `schema_property_groups_retrieve`</sub>

## `posthog.schemaPropertyGroupsPartialUpdate`

```ts
posthog.schemaPropertyGroupsPartialUpdate(): Promise<{ id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: string; updated_at: string; created_by: { id: number; uuid...>
```

<sub>`PATCH /api/projects/{project_id}/schema_property_groups/{id}/` · `schema_property_groups_partial_update`</sub>

## `posthog.schemaPropertyGroupsUpdate`

```ts
posthog.schemaPropertyGroupsUpdate(): Promise<{ id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: string; updated_at: string; created_by: { id: number; uuid...>
```

<sub>`PUT /api/projects/{project_id}/schema_property_groups/{id}/` · `schema_property_groups_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

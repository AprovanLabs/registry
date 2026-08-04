# Event Schemas

5 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.eventSchemasList`

```ts
posthog.eventSchemasList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; event_definition: string; property_group: { id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; update...>
```

<sub>`GET /api/projects/{project_id}/event_schemas/` · `event_schemas_list`</sub>

## `posthog.eventSchemasCreate`

```ts
posthog.eventSchemasCreate(): Promise<{ id: string; event_definition: string; property_group: { id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: st...>
```

<sub>`POST /api/projects/{project_id}/event_schemas/` · `event_schemas_create`</sub>

## `posthog.eventSchemasDestroy`

```ts
posthog.eventSchemasDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/event_schemas/{id}/` · `event_schemas_destroy`</sub>

## `posthog.eventSchemasPartialUpdate`

```ts
posthog.eventSchemasPartialUpdate(): Promise<{ id: string; event_definition: string; property_group: { id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: st...>
```

<sub>`PATCH /api/projects/{project_id}/event_schemas/{id}/` · `event_schemas_partial_update`</sub>

## `posthog.eventSchemasUpdate`

```ts
posthog.eventSchemasUpdate(): Promise<{ id: string; event_definition: string; property_group: { id: string; name: string; description?: string; properties?: ({ id: string; name: string; property_type: "DateTime" | "String" | "Numeric" | "Boolean" | "Object"; is_required?: boolean; is_optional_in_types?: boolean; description?: string; created_at: string; updated_at: string })[]; events: ({ id: string; name: string })[]; created_at: st...>
```

<sub>`PUT /api/projects/{project_id}/event_schemas/{id}/` · `event_schemas_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

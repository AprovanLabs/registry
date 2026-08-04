# Custom Property Definitions

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.customPropertyDefinitionsList`

```ts
posthog.customPropertyDefinitionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string | null; display_type: "text" | "number" | "currency" | "percent" | "date" | "datetime" | "boolean" | "select"; target_type?: "account" | "person" | "group"; group_type_index?: number | null; is_big_number?: boolean; is_canonical: boolean; options?: unknown[] | null; source: ...>
```

<sub>`GET /api/projects/{project_id}/custom_property_definitions/` · `custom_property_definitions_list`</sub>

## `posthog.customPropertyDefinitionsCreate`

```ts
posthog.customPropertyDefinitionsCreate(): Promise<{ id: string; name: string; description?: string | null; display_type: "text" | "number" | "currency" | "percent" | "date" | "datetime" | "boolean" | "select"; target_type?: "account" | "person" | "group"; group_type_index?: number | null; is_big_number?: boolean; is_canonical: boolean; options?: unknown[] | null; source: { id: string; definition: string; saved_query?: string | null; external_dat...>
```

<sub>`POST /api/projects/{project_id}/custom_property_definitions/` · `custom_property_definitions_create`</sub>

## `posthog.customPropertyDefinitionsDestroy`

```ts
posthog.customPropertyDefinitionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/custom_property_definitions/{id}/` · `custom_property_definitions_destroy`</sub>

## `posthog.customPropertyDefinitionsRetrieve`

```ts
posthog.customPropertyDefinitionsRetrieve(): Promise<{ id: string; name: string; description?: string | null; display_type: "text" | "number" | "currency" | "percent" | "date" | "datetime" | "boolean" | "select"; target_type?: "account" | "person" | "group"; group_type_index?: number | null; is_big_number?: boolean; is_canonical: boolean; options?: unknown[] | null; source: { id: string; definition: string; saved_query?: string | null; external_dat...>
```

<sub>`GET /api/projects/{project_id}/custom_property_definitions/{id}/` · `custom_property_definitions_retrieve`</sub>

## `posthog.customPropertyDefinitionsPartialUpdate`

```ts
posthog.customPropertyDefinitionsPartialUpdate(): Promise<{ id: string; name: string; description?: string | null; display_type: "text" | "number" | "currency" | "percent" | "date" | "datetime" | "boolean" | "select"; target_type?: "account" | "person" | "group"; group_type_index?: number | null; is_big_number?: boolean; is_canonical: boolean; options?: unknown[] | null; source: { id: string; definition: string; saved_query?: string | null; external_dat...>
```

<sub>`PATCH /api/projects/{project_id}/custom_property_definitions/{id}/` · `custom_property_definitions_partial_update`</sub>

## `posthog.customPropertyDefinitionsUpdate`

```ts
posthog.customPropertyDefinitionsUpdate(): Promise<{ id: string; name: string; description?: string | null; display_type: "text" | "number" | "currency" | "percent" | "date" | "datetime" | "boolean" | "select"; target_type?: "account" | "person" | "group"; group_type_index?: number | null; is_big_number?: boolean; is_canonical: boolean; options?: unknown[] | null; source: { id: string; definition: string; saved_query?: string | null; external_dat...>
```

<sub>`PUT /api/projects/{project_id}/custom_property_definitions/{id}/` · `custom_property_definitions_update`</sub>

## `posthog.customPropertyDefinitionsValuesRetrieve`

```ts
posthog.customPropertyDefinitionsValuesRetrieve(): Promise<{ results: ({ name: string })[]; refreshing: boolean }>
```

<sub>`GET /api/projects/{project_id}/custom_property_definitions/values/` · `custom_property_definitions_values_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

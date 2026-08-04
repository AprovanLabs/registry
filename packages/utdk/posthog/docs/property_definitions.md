# Property Definitions

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.propertyDefinitionsList`

```ts
posthog.propertyDefinitionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string | null; tags?: (unknown)[]; is_numerical: boolean; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown }...>
```

<sub>`GET /api/projects/{project_id}/property_definitions/` · `property_definitions_list`</sub>

## `posthog.propertyDefinitionsDestroy`

```ts
posthog.propertyDefinitionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/property_definitions/{id}/` · `property_definitions_destroy`</sub>

## `posthog.propertyDefinitionsRetrieve`

```ts
posthog.propertyDefinitionsRetrieve(): Promise<{ id: string; name: string; description?: string | null; tags?: (unknown)[]; is_numerical: boolean; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "found...>
```

<sub>`GET /api/projects/{project_id}/property_definitions/{id}/` · `property_definitions_retrieve`</sub>

## `posthog.propertyDefinitionsPartialUpdate`

```ts
posthog.propertyDefinitionsPartialUpdate(): Promise<{ id: string; name: string; description?: string | null; tags?: (unknown)[]; is_numerical: boolean; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "found...>
```

<sub>`PATCH /api/projects/{project_id}/property_definitions/{id}/` · `property_definitions_partial_update`</sub>

## `posthog.propertyDefinitionsUpdate`

```ts
posthog.propertyDefinitionsUpdate(): Promise<{ id: string; name: string; description?: string | null; tags?: (unknown)[]; is_numerical: boolean; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "found...>
```

<sub>`PUT /api/projects/{project_id}/property_definitions/{id}/` · `property_definitions_update`</sub>

## `posthog.propertyDefinitionsBulkUpdateTagsCreate`

Bulk update tags on multiple objects. PAT access: this action has no ``required_scopes=`` on the decorator — inheriting viewsets must add ``"bulk_update_tags"`` to their ``scope_object_write_actions`` list to accept personal API keys. Without that opt-in, ``APIScopePermission`` rejects PAT requests with "This action does not support personal API key access". Done per-viewset so granting ``<scope>:write`` for one resource doesn't leak access to sibling resources that share this mixin. Accepts: - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]} Actions: - "add": Add tags to existing tags on each object - "remove": Remove specific tags from each object - "set": Replace all tags on each object with the provided list

```ts
posthog.propertyDefinitionsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: number; tags: (string)[] })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/property_definitions/bulk_update_tags/` · `property_definitions_bulk_update_tags_create`</sub>

## `posthog.propertyDefinitionsSeenTogetherRetrieve`

Allows a caller to provide a list of event names and a single property name Returns a map of the event names to a boolean representing whether that property has ever been seen with that event_name

```ts
posthog.propertyDefinitionsSeenTogetherRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/property_definitions/seen_together/` · `property_definitions_seen_together_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

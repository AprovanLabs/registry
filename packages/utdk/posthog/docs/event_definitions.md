# Event Definitions

13 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.eventDefinitionsList`

```ts
posthog.eventDefinitionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; owner?: number | null; description?: string | null; tags?: (unknown)[]; created_at: string | null; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config:...>
```

<sub>`GET /api/projects/{project_id}/event_definitions/` · `event_definitions_list`</sub>

## `posthog.eventDefinitionsCreate`

```ts
posthog.eventDefinitionsCreate(): Promise<{ id: string; name: string; owner?: number | null; description?: string | null; tags?: (unknown)[]; created_at: string | null; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`POST /api/projects/{project_id}/event_definitions/` · `event_definitions_create`</sub>

## `posthog.eventDefinitionsDestroy`

```ts
posthog.eventDefinitionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/event_definitions/{id}/` · `event_definitions_destroy`</sub>

## `posthog.eventDefinitionsRetrieve`

```ts
posthog.eventDefinitionsRetrieve(): Promise<{ id: string; name: string; owner?: number | null; description?: string | null; tags?: (unknown)[]; created_at: string | null; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`GET /api/projects/{project_id}/event_definitions/{id}/` · `event_definitions_retrieve`</sub>

## `posthog.eventDefinitionsPartialUpdate`

```ts
posthog.eventDefinitionsPartialUpdate(): Promise<{ id: string; name: string; owner?: number | null; description?: string | null; tags?: (unknown)[]; created_at: string | null; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`PATCH /api/projects/{project_id}/event_definitions/{id}/` · `event_definitions_partial_update`</sub>

## `posthog.eventDefinitionsUpdate`

```ts
posthog.eventDefinitionsUpdate(): Promise<{ id: string; name: string; owner?: number | null; description?: string | null; tags?: (unknown)[]; created_at: string | null; updated_at: string; updated_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | ...>
```

<sub>`PUT /api/projects/{project_id}/event_definitions/{id}/` · `event_definitions_update`</sub>

## `posthog.eventDefinitionsMetricsRetrieve`

```ts
posthog.eventDefinitionsMetricsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/event_definitions/{id}/metrics/` · `event_definitions_metrics_retrieve`</sub>

## `posthog.eventDefinitionsBulkUpdateTagsCreate`

Add, remove, or replace tags across multiple event definitions in one request. Overrides ``TaggedItemViewSetMixin.bulk_update_tags``, which assumes integer PKs and runs object-level access-control filtering. Event definitions use UUID PKs and are not an object-level access-controlled resource — project membership (enforced by the viewset) is the only boundary, matching the single-object update path — so this scopes by project and skips the per-object editor check. Tags live on the base ``EventDefinition`` row, so it operates there regardless of the enterprise extension.

```ts
posthog.eventDefinitionsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: string; tags: (string)[] })[]; skipped: ({ id: string; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/event_definitions/bulk_update_tags/` · `event_definitions_bulk_update_tags_create`</sub>

## `posthog.eventDefinitionsByNameRetrieve`

Get event definition by exact name

```ts
posthog.eventDefinitionsByNameRetrieve(): Promise<{ id: string; name: string; created_at?: string | null; last_seen_at?: string | null; last_updated_at: string; tags?: (unknown)[]; enforcement_mode?: "allow" | "reject"; primary_property?: string | null; is_action: boolean; action_id: number; is_calculating: boolean; last_calculated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: s...>
```

<sub>`GET /api/projects/{project_id}/event_definitions/by_name/` · `event_definitions_by_name_retrieve`</sub>

## `posthog.eventDefinitionsGolangRetrieve`

```ts
posthog.eventDefinitionsGolangRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/event_definitions/golang/` · `event_definitions_golang_retrieve`</sub>

## `posthog.eventDefinitionsPrimaryPropertiesRetrieve`

Resolve team-configured primary properties for event definitions. The response only contains entries where a non-null primary_property is set on the EventDefinition. Callers should fall back to the core taxonomy defaults client-side for names not present in the response.

```ts
posthog.eventDefinitionsPrimaryPropertiesRetrieve(): Promise<{ primary_properties: { [key: string]: string | undefined } }>
```

<sub>`GET /api/projects/{project_id}/event_definitions/primary_properties/` · `event_definitions_primary_properties_retrieve`</sub>

## `posthog.eventDefinitionsPythonRetrieve`

```ts
posthog.eventDefinitionsPythonRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/event_definitions/python/` · `event_definitions_python_retrieve`</sub>

## `posthog.eventDefinitionsTypescriptRetrieve`

```ts
posthog.eventDefinitionsTypescriptRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/event_definitions/typescript/` · `event_definitions_typescript_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

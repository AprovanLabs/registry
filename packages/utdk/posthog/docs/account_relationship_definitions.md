# Account Relationship Definitions

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.accountRelationshipDefinitionsList`

```ts
posthog.accountRelationshipDefinitionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string | null; is_single_holder?: boolean })[] }>
```

<sub>`GET /api/projects/{project_id}/account_relationship_definitions/` · `account_relationship_definitions_list`</sub>

## `posthog.accountRelationshipDefinitionsCreate`

```ts
posthog.accountRelationshipDefinitionsCreate(): Promise<{ id: string; name: string; description?: string | null; is_single_holder?: boolean }>
```

<sub>`POST /api/projects/{project_id}/account_relationship_definitions/` · `account_relationship_definitions_create`</sub>

## `posthog.accountRelationshipDefinitionsDestroy`

```ts
posthog.accountRelationshipDefinitionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/account_relationship_definitions/{id}/` · `account_relationship_definitions_destroy`</sub>

## `posthog.accountRelationshipDefinitionsRetrieve`

```ts
posthog.accountRelationshipDefinitionsRetrieve(): Promise<{ id: string; name: string; description?: string | null; is_single_holder?: boolean }>
```

<sub>`GET /api/projects/{project_id}/account_relationship_definitions/{id}/` · `account_relationship_definitions_retrieve`</sub>

## `posthog.accountRelationshipDefinitionsPartialUpdate`

```ts
posthog.accountRelationshipDefinitionsPartialUpdate(): Promise<{ id: string; name: string; description?: string | null; is_single_holder?: boolean }>
```

<sub>`PATCH /api/projects/{project_id}/account_relationship_definitions/{id}/` · `account_relationship_definitions_partial_update`</sub>

## `posthog.accountRelationshipDefinitionsUpdate`

```ts
posthog.accountRelationshipDefinitionsUpdate(): Promise<{ id: string; name: string; description?: string | null; is_single_holder?: boolean }>
```

<sub>`PUT /api/projects/{project_id}/account_relationship_definitions/{id}/` · `account_relationship_definitions_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

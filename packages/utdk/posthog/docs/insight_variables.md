# Insight Variables

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.insightVariablesList`

```ts
posthog.insightVariablesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; type: "String" | "Number" | "Boolean" | "List" | "Date"; default_value?: unknown; created_by: number | null; created_at: string; code_name: string | null; values?: unknown })[] }>
```

<sub>`GET /api/projects/{project_id}/insight_variables/` · `insight_variables_list`</sub>

## `posthog.insightVariablesCreate`

```ts
posthog.insightVariablesCreate(): Promise<{ id: string; name: string; type: "String" | "Number" | "Boolean" | "List" | "Date"; default_value?: unknown; created_by: number | null; created_at: string; code_name: string | null; values?: unknown }>
```

<sub>`POST /api/projects/{project_id}/insight_variables/` · `insight_variables_create`</sub>

## `posthog.insightVariablesDestroy`

```ts
posthog.insightVariablesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/insight_variables/{id}/` · `insight_variables_destroy`</sub>

## `posthog.insightVariablesRetrieve`

```ts
posthog.insightVariablesRetrieve(): Promise<{ id: string; name: string; type: "String" | "Number" | "Boolean" | "List" | "Date"; default_value?: unknown; created_by: number | null; created_at: string; code_name: string | null; values?: unknown }>
```

<sub>`GET /api/projects/{project_id}/insight_variables/{id}/` · `insight_variables_retrieve`</sub>

## `posthog.insightVariablesPartialUpdate`

```ts
posthog.insightVariablesPartialUpdate(): Promise<{ id: string; name: string; type: "String" | "Number" | "Boolean" | "List" | "Date"; default_value?: unknown; created_by: number | null; created_at: string; code_name: string | null; values?: unknown }>
```

<sub>`PATCH /api/projects/{project_id}/insight_variables/{id}/` · `insight_variables_partial_update`</sub>

## `posthog.insightVariablesUpdate`

```ts
posthog.insightVariablesUpdate(): Promise<{ id: string; name: string; type: "String" | "Number" | "Boolean" | "List" | "Date"; default_value?: unknown; created_by: number | null; created_at: string; code_name: string | null; values?: unknown }>
```

<sub>`PUT /api/projects/{project_id}/insight_variables/{id}/` · `insight_variables_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

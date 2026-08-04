# Elements

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.elementsList`

```ts
posthog.elementsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; attributes?: unknown; order?: number | null })[] }>
```

<sub>`GET /api/projects/{project_id}/elements/` · `elements_list`</sub>

## `posthog.elementsCreate`

```ts
posthog.elementsCreate(): Promise<{ text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; attributes?: unknown; order?: number | null }>
```

<sub>`POST /api/projects/{project_id}/elements/` · `elements_create`</sub>

## `posthog.elementsDestroy`

```ts
posthog.elementsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/elements/{id}/` · `elements_destroy`</sub>

## `posthog.elementsRetrieve`

```ts
posthog.elementsRetrieve(): Promise<{ text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; attributes?: unknown; order?: number | null }>
```

<sub>`GET /api/projects/{project_id}/elements/{id}/` · `elements_retrieve`</sub>

## `posthog.elementsPartialUpdate`

```ts
posthog.elementsPartialUpdate(): Promise<{ text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; attributes?: unknown; order?: number | null }>
```

<sub>`PATCH /api/projects/{project_id}/elements/{id}/` · `elements_partial_update`</sub>

## `posthog.elementsUpdate`

```ts
posthog.elementsUpdate(): Promise<{ text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; attributes?: unknown; order?: number | null }>
```

<sub>`PUT /api/projects/{project_id}/elements/{id}/` · `elements_update`</sub>

## `posthog.elementsStatsRetrieve`

Counts of $autocapture, $rageclick, and $dead_click events grouped by the element chain they occurred on, ordered by count. Defaults to all three event types; narrow with the include parameter.

```ts
posthog.elementsStatsRetrieve(): Promise<{ results: ({ count: number; hash: string | null; type: string; elements: ({ text?: string | null; tag_name?: string | null; attr_class?: unknown[] | null; href?: string | null; attr_id?: string | null; nth_child?: number | null; nth_of_type?: number | null; attributes?: unknown; order?: number | null })[] })[]; next: string | null; previous: string | null }>
```

<sub>`GET /api/projects/{project_id}/elements/stats/` · `elements_stats_retrieve`</sub>

## `posthog.elementsValuesList`

```ts
posthog.elementsValuesList(): Promise<({ name: string })[]>
```

<sub>`GET /api/projects/{project_id}/elements/values/` · `elements_values_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

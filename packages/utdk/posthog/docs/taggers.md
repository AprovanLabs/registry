# Taggers

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.taggersList`

```ts
posthog.taggersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; enabled?: boolean; tagger_type?: "llm" | "hog"; tagger_config: { prompt: string; tags: ({ name: string; description?: string })[]; min_tags?: number; max_tags?: number | null } | { source: string; tags?: ({ name: string; description?: string })[] }; conditions?: ({ id: stri...>
```

<sub>`GET /api/projects/{project_id}/taggers/` · `taggers_list`</sub>

## `posthog.taggersCreate`

```ts
posthog.taggersCreate(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; tagger_type?: "llm" | "hog"; tagger_config: { prompt: string; tags: ({ name: string; description?: string })[]; min_tags?: number; max_tags?: number | null } | { source: string; tags?: ({ name: string; description?: string })[] }; conditions?: ({ id: string; rollout_percentage?: number; properties?: ({ [key: string]: unknown })[...>
```

<sub>`POST /api/projects/{project_id}/taggers/` · `taggers_create`</sub>

## `posthog.taggersDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.taggersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/taggers/{id}/` · `taggers_destroy`</sub>

## `posthog.taggersRetrieve`

```ts
posthog.taggersRetrieve(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; tagger_type?: "llm" | "hog"; tagger_config: { prompt: string; tags: ({ name: string; description?: string })[]; min_tags?: number; max_tags?: number | null } | { source: string; tags?: ({ name: string; description?: string })[] }; conditions?: ({ id: string; rollout_percentage?: number; properties?: ({ [key: string]: unknown })[...>
```

<sub>`GET /api/projects/{project_id}/taggers/{id}/` · `taggers_retrieve`</sub>

## `posthog.taggersPartialUpdate`

```ts
posthog.taggersPartialUpdate(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; tagger_type?: "llm" | "hog"; tagger_config: { prompt: string; tags: ({ name: string; description?: string })[]; min_tags?: number; max_tags?: number | null } | { source: string; tags?: ({ name: string; description?: string })[] }; conditions?: ({ id: string; rollout_percentage?: number; properties?: ({ [key: string]: unknown })[...>
```

<sub>`PATCH /api/projects/{project_id}/taggers/{id}/` · `taggers_partial_update`</sub>

## `posthog.taggersUpdate`

```ts
posthog.taggersUpdate(): Promise<{ id: string; name: string; description?: string; enabled?: boolean; tagger_type?: "llm" | "hog"; tagger_config: { prompt: string; tags: ({ name: string; description?: string })[]; min_tags?: number; max_tags?: number | null } | { source: string; tags?: ({ name: string; description?: string })[] }; conditions?: ({ id: string; rollout_percentage?: number; properties?: ({ [key: string]: unknown })[...>
```

<sub>`PUT /api/projects/{project_id}/taggers/{id}/` · `taggers_update`</sub>

## `posthog.taggersTestHogCreate`

Test Hog tagger code against sample events without saving.

```ts
posthog.taggersTestHogCreate(): Promise<{ results: ({ event_uuid: string; trace_id?: string | null; input_preview: string; output_preview: string; tags: (string)[]; reasoning: string; error?: string | null })[]; message?: string }>
```

<sub>`POST /api/projects/{project_id}/taggers/test_hog/` · `taggers_test_hog_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Llm Prompts

9 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.llmPromptsList`

```ts
posthog.llmPromptsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; prompt: unknown; config?: { [key: string]: unknown } | null; version: number; version_description: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [k...>
```

<sub>`GET /api/projects/{project_id}/llm_prompts/` · `llm_prompts_list`</sub>

## `posthog.llmPromptsCreate`

```ts
posthog.llmPromptsCreate(): Promise<{ id: string; name: string; prompt: unknown; config?: { [key: string]: unknown } | null; version: number; version_description?: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "dat...>
```

<sub>`POST /api/projects/{project_id}/llm_prompts/` · `llm_prompts_create`</sub>

## `posthog.llmPromptsNameRetrieve`

```ts
posthog.llmPromptsNameRetrieve(): Promise<{ id: string; name: string; prompt?: unknown; config?: { [key: string]: unknown } | null; prompt_preview?: string; outline: ({ level: number; text: string })[]; version: number; label?: string; created_at: string; updated_at: string; deleted: boolean; is_latest: boolean; latest_version: number; version_count: number; first_version_created_at: string }>
```

<sub>`GET /api/projects/{project_id}/llm_prompts/name/{prompt_name}/` · `llm_prompts_name_retrieve`</sub>

## `posthog.llmPromptsNamePartialUpdate`

```ts
posthog.llmPromptsNamePartialUpdate(): Promise<{ id: string; name: string; prompt: unknown; config?: { [key: string]: unknown } | null; version: number; version_description?: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "dat...>
```

<sub>`PATCH /api/projects/{project_id}/llm_prompts/name/{prompt_name}/` · `llm_prompts_name_partial_update`</sub>

## `posthog.llmPromptsNameArchiveCreate`

```ts
posthog.llmPromptsNameArchiveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/llm_prompts/name/{prompt_name}/archive/` · `llm_prompts_name_archive_create`</sub>

## `posthog.llmPromptsNameDuplicateCreate`

```ts
posthog.llmPromptsNameDuplicateCreate(): Promise<{ id: string; name: string; prompt: unknown; config?: { [key: string]: unknown } | null; version: number; version_description?: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "dat...>
```

<sub>`POST /api/projects/{project_id}/llm_prompts/name/{prompt_name}/duplicate/` · `llm_prompts_name_duplicate_create`</sub>

## `posthog.llmPromptsNameLabelsDestroy`

```ts
posthog.llmPromptsNameLabelsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/llm_prompts/name/{prompt_name}/labels/{label_name}/` · `llm_prompts_name_labels_destroy`</sub>

## `posthog.llmPromptsNameLabelsUpdate`

```ts
posthog.llmPromptsNameLabelsUpdate(): Promise<{ id: string; name: string; prompt_name: string; version: number; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student"...>
```

<sub>`PUT /api/projects/{project_id}/llm_prompts/name/{prompt_name}/labels/{label_name}/` · `llm_prompts_name_labels_update`</sub>

## `posthog.llmPromptsResolveNameRetrieve`

```ts
posthog.llmPromptsResolveNameRetrieve(): Promise<{ prompt: { id: string; name: string; prompt: unknown; config?: { [key: string]: unknown } | null; version: number; version_description?: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineeri...>
```

<sub>`GET /api/projects/{project_id}/llm_prompts/resolve/name/{prompt_name}/` · `llm_prompts_resolve_name_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

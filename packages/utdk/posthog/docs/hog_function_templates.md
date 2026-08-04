# Hog Function Templates

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.hogFunctionTemplatesList`

```ts
posthog.hogFunctionTemplatesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string | null; code: string; code_language?: string; inputs_schema: unknown; type: string; status?: string; category?: unknown; free?: boolean; icon_url?: string | null; filters?: unknown; masking?: unknown; mapping_templates?: unknown[] | null })[] }>
```

<sub>`GET /api/projects/{project_id}/hog_function_templates/` · `hog_function_templates_list`</sub>

## `posthog.hogFunctionTemplatesRetrieve`

```ts
posthog.hogFunctionTemplatesRetrieve(): Promise<{ id: string; name: string; description?: string | null; code: string; code_language?: string; inputs_schema: unknown; type: string; status?: string; category?: unknown; free?: boolean; icon_url?: string | null; filters?: unknown; masking?: unknown; mapping_templates?: unknown[] | null }>
```

<sub>`GET /api/projects/{project_id}/hog_function_templates/{template_id}/` · `hog_function_templates_retrieve`</sub>

## `posthog.publicHogFunctionTemplatesList`

```ts
posthog.publicHogFunctionTemplatesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string | null; code: string; code_language?: string; inputs_schema: unknown; type: string; status?: string; category?: unknown; free?: boolean; icon_url?: string | null; filters?: unknown; masking?: unknown; mapping_templates?: unknown[] | null })[] }>
```

<sub>`GET /api/public_hog_function_templates/` · `public_hog_function_templates_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

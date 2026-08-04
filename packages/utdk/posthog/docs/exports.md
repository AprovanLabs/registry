# Exports

4 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.exportsList`

```ts
posthog.exportsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; dashboard?: number | null; insight?: number | null; export_format: "image/png" | "application/pdf" | "text/csv" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "video/webm" | "video/mp4" | "image/gif" | "application/json"; created_at: string; has_content: boolean; export_context?: unkn...>
```

<sub>`GET /api/projects/{project_id}/exports/` · `exports_list`</sub>

## `posthog.exportsCreate`

```ts
posthog.exportsCreate(): Promise<{ id: number; dashboard?: number | null; insight?: number | null; export_format: "image/png" | "application/pdf" | "text/csv" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "video/webm" | "video/mp4" | "image/gif" | "application/json"; created_at: string; has_content: boolean; export_context?: unknown; filename: string; expires_after: string | null; exception: string | nu...>
```

<sub>`POST /api/projects/{project_id}/exports/` · `exports_create`</sub>

## `posthog.exportsRetrieve`

```ts
posthog.exportsRetrieve(): Promise<{ id: number; dashboard?: number | null; insight?: number | null; export_format: "image/png" | "application/pdf" | "text/csv" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "video/webm" | "video/mp4" | "image/gif" | "application/json"; created_at: string; has_content: boolean; export_context?: unknown; filename: string; expires_after: string | null; exception: string | nu...>
```

<sub>`GET /api/projects/{project_id}/exports/{id}/` · `exports_retrieve`</sub>

## `posthog.exportsContentRetrieve`

```ts
posthog.exportsContentRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/exports/{id}/content/` · `exports_content_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

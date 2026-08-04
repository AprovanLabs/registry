# Product Tours

11 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.productToursList`

Create, read, update, and manage product tours and their targeting.

```ts
posthog.productToursList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | ...>
```

<sub>`GET /api/projects/{project_id}/product_tours/` · `product_tours_list`</sub>

## `posthog.productToursCreate`

Create, read, update, and manage product tours and their targeting.

```ts
posthog.productToursCreate(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`POST /api/projects/{project_id}/product_tours/` · `product_tours_create`</sub>

## `posthog.productToursDestroy`

Create, read, update, and manage product tours and their targeting.

```ts
posthog.productToursDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/product_tours/{id}/` · `product_tours_destroy`</sub>

## `posthog.productToursRetrieve`

Create, read, update, and manage product tours and their targeting.

```ts
posthog.productToursRetrieve(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`GET /api/projects/{project_id}/product_tours/{id}/` · `product_tours_retrieve`</sub>

## `posthog.productToursPartialUpdate`

Create, read, update, and manage product tours and their targeting.

```ts
posthog.productToursPartialUpdate(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`PATCH /api/projects/{project_id}/product_tours/{id}/` · `product_tours_partial_update`</sub>

## `posthog.productToursUpdate`

Create, read, update, and manage product tours and their targeting.

```ts
posthog.productToursUpdate(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`PUT /api/projects/{project_id}/product_tours/{id}/` · `product_tours_update`</sub>

## `posthog.productToursDiscardDraftDestroy`

Discard draft content.

```ts
posthog.productToursDiscardDraftDestroy(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`DELETE /api/projects/{project_id}/product_tours/{id}/discard_draft/` · `product_tours_discard_draft_destroy`</sub>

## `posthog.productToursDraftStatusRetrieve`

Lightweight polling endpoint for draft change detection.

```ts
posthog.productToursDraftStatusRetrieve(): Promise<{ updated_at: string; has_draft: boolean }>
```

<sub>`GET /api/projects/{project_id}/product_tours/{id}/draft_status/` · `product_tours_draft_status_retrieve`</sub>

## `posthog.productToursDraftPartialUpdate`

Save draft content (server-side merge). No side effects triggered.

```ts
posthog.productToursDraftPartialUpdate(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`PATCH /api/projects/{project_id}/product_tours/{id}/draft/` · `product_tours_draft_partial_update`</sub>

## `posthog.productToursGenerateCreate`

Generate tour step content using AI.

```ts
posthog.productToursGenerateCreate(): Promise<{ steps: ({ step_id: string; title: string; description: string })[] }>
```

<sub>`POST /api/projects/{project_id}/product_tours/{id}/generate/` · `product_tours_generate_create`</sub>

## `posthog.productToursPublishDraftCreate`

Commit draft to live tour. Runs full validation and triggers side effects. Accepts an optional body payload. If provided, merges it into the draft before publishing so the caller can save + publish in a single request.

```ts
posthog.productToursPublishDraftCreate(): Promise<{ id: string; name: string; description?: string; internal_targeting_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all" | "" | null; bucketing_identifier?: "distinct_id" | "device_id" | "" ...>
```

<sub>`POST /api/projects/{project_id}/product_tours/{id}/publish_draft/` · `product_tours_publish_draft_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

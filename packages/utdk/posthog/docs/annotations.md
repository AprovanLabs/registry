# Annotations

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.annotationsList`

Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.

```ts
posthog.annotationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; content?: string | null; date_marker?: string | null; creation_type?: "USR" | "GIT"; dashboard_item?: number | null; dashboard_id?: number | null; dashboard_name: string | null; insight_short_id: string | null; insight_name: string | null; insight_derived_name: string | null; created_by: { id: number; uuid: s...>
```

<sub>`GET /api/projects/{project_id}/annotations/` · `annotations_list`</sub>

## `posthog.annotationsCreate`

Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.

```ts
posthog.annotationsCreate(): Promise<{ id: number; content?: string | null; date_marker?: string | null; creation_type?: "USR" | "GIT"; dashboard_item?: number | null; dashboard_id?: number | null; dashboard_name: string | null; insight_short_id: string | null; insight_name: string | null; insight_derived_name: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string...>
```

<sub>`POST /api/projects/{project_id}/annotations/` · `annotations_create`</sub>

## `posthog.annotationsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.annotationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/annotations/{id}/` · `annotations_destroy`</sub>

## `posthog.annotationsRetrieve`

Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.

```ts
posthog.annotationsRetrieve(): Promise<{ id: number; content?: string | null; date_marker?: string | null; creation_type?: "USR" | "GIT"; dashboard_item?: number | null; dashboard_id?: number | null; dashboard_name: string | null; insight_short_id: string | null; insight_name: string | null; insight_derived_name: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string...>
```

<sub>`GET /api/projects/{project_id}/annotations/{id}/` · `annotations_retrieve`</sub>

## `posthog.annotationsPartialUpdate`

Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.

```ts
posthog.annotationsPartialUpdate(): Promise<{ id: number; content?: string | null; date_marker?: string | null; creation_type?: "USR" | "GIT"; dashboard_item?: number | null; dashboard_id?: number | null; dashboard_name: string | null; insight_short_id: string | null; insight_name: string | null; insight_derived_name: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string...>
```

<sub>`PATCH /api/projects/{project_id}/annotations/{id}/` · `annotations_partial_update`</sub>

## `posthog.annotationsUpdate`

Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.

```ts
posthog.annotationsUpdate(): Promise<{ id: number; content?: string | null; date_marker?: string | null; creation_type?: "USR" | "GIT"; dashboard_item?: number | null; dashboard_id?: number | null; dashboard_name: string | null; insight_short_id: string | null; insight_name: string | null; insight_derived_name: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string...>
```

<sub>`PUT /api/projects/{project_id}/annotations/{id}/` · `annotations_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

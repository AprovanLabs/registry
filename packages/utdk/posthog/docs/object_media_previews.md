# Object Media Previews

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.objectMediaPreviewsList`

```ts
posthog.objectMediaPreviewsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_at: string; updated_at: string | null; media_url: string; media_type: string; metadata?: unknown; uploaded_media_id?: string | null; exported_asset_id?: string | null; event_definition_id?: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/object_media_previews/` · `object_media_previews_list`</sub>

## `posthog.objectMediaPreviewsCreate`

```ts
posthog.objectMediaPreviewsCreate(): Promise<{ id: string; created_at: string; updated_at: string | null; media_url: string; media_type: string; metadata?: unknown; uploaded_media_id?: string | null; exported_asset_id?: string | null; event_definition_id?: string | null }>
```

<sub>`POST /api/projects/{project_id}/object_media_previews/` · `object_media_previews_create`</sub>

## `posthog.objectMediaPreviewsDestroy`

```ts
posthog.objectMediaPreviewsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/object_media_previews/{id}/` · `object_media_previews_destroy`</sub>

## `posthog.objectMediaPreviewsRetrieve`

```ts
posthog.objectMediaPreviewsRetrieve(): Promise<{ id: string; created_at: string; updated_at: string | null; media_url: string; media_type: string; metadata?: unknown; uploaded_media_id?: string | null; exported_asset_id?: string | null; event_definition_id?: string | null }>
```

<sub>`GET /api/projects/{project_id}/object_media_previews/{id}/` · `object_media_previews_retrieve`</sub>

## `posthog.objectMediaPreviewsPartialUpdate`

```ts
posthog.objectMediaPreviewsPartialUpdate(): Promise<{ id: string; created_at: string; updated_at: string | null; media_url: string; media_type: string; metadata?: unknown; uploaded_media_id?: string | null; exported_asset_id?: string | null; event_definition_id?: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/object_media_previews/{id}/` · `object_media_previews_partial_update`</sub>

## `posthog.objectMediaPreviewsUpdate`

```ts
posthog.objectMediaPreviewsUpdate(): Promise<{ id: string; created_at: string; updated_at: string | null; media_url: string; media_type: string; metadata?: unknown; uploaded_media_id?: string | null; exported_asset_id?: string | null; event_definition_id?: string | null }>
```

<sub>`PUT /api/projects/{project_id}/object_media_previews/{id}/` · `object_media_previews_update`</sub>

## `posthog.objectMediaPreviewsPreferredForEventRetrieve`

Get the preferred media preview for an event definition. Most recent user-uploaded, then most recent exported asset. Requires event_definition (query param).

```ts
posthog.objectMediaPreviewsPreferredForEventRetrieve(): Promise<{ id: string; created_at: string; updated_at: string | null; media_url: string; media_type: string; metadata?: unknown; uploaded_media_id?: string | null; exported_asset_id?: string | null; event_definition_id?: string | null }>
```

<sub>`GET /api/projects/{project_id}/object_media_previews/preferred_for_event/` · `object_media_previews_preferred_for_event_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Saved

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.savedList`

List saved heatmaps for the project. A saved heatmap pins a page URL and a set of viewport widths, and (for type 'screenshot') renders the page so heatmap data can be overlaid on it.

```ts
posthog.savedList(): Promise<({ results: ({ id: string; short_id: string; name?: string | null; url: string; data_url?: string | null; target_widths?: unknown; type?: "screenshot" | "iframe" | "recording"; status: "processing" | "completed" | "failed"; has_content: boolean; snapshots: ({ width: number; has_content: boolean })[]; deleted?: boolean; block_consent_modals?: boolean; created_by: { id: number; uuid: string; distin...>
```

<sub>`GET /api/projects/{project_id}/saved/` · `saved_list`</sub>

## `posthog.savedCreate`

Create a saved heatmap for a page URL. For type 'screenshot' (the default) this enqueues a headless render of the page at each target width; poll the saved heatmap or its content endpoint until status is 'completed'. Provide 'widths' to control which viewport widths are rendered.

```ts
posthog.savedCreate(): Promise<{ id: string; short_id: string; name?: string | null; url: string; data_url?: string | null; target_widths?: unknown; type?: "screenshot" | "iframe" | "recording"; status: "processing" | "completed" | "failed"; has_content: boolean; snapshots: ({ width: number; has_content: boolean })[]; deleted?: boolean; block_consent_modals?: boolean; created_by: { id: number; uuid: string; distinct_id?: strin...>
```

<sub>`POST /api/projects/{project_id}/saved/` · `saved_create`</sub>

## `posthog.savedDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.savedDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/saved/{short_id}/` · `saved_destroy`</sub>

## `posthog.savedRetrieve`

Get a single saved heatmap by its short_id, including per-width render status.

```ts
posthog.savedRetrieve(): Promise<{ id: string; short_id: string; name?: string | null; url: string; data_url?: string | null; target_widths?: unknown; type?: "screenshot" | "iframe" | "recording"; status: "processing" | "completed" | "failed"; has_content: boolean; snapshots: ({ width: number; has_content: boolean })[]; deleted?: boolean; block_consent_modals?: boolean; created_by: { id: number; uuid: string; distinct_id?: strin...>
```

<sub>`GET /api/projects/{project_id}/saved/{short_id}/` · `saved_retrieve`</sub>

## `posthog.savedPartialUpdate`

Update a saved heatmap (e.g. rename, change widths, or soft-delete via 'deleted'). Changing the URL of a 'screenshot' heatmap triggers a re-render.

```ts
posthog.savedPartialUpdate(): Promise<{ id: string; short_id: string; name?: string | null; url: string; data_url?: string | null; target_widths?: unknown; type?: "screenshot" | "iframe" | "recording"; status: "processing" | "completed" | "failed"; has_content: boolean; snapshots: ({ width: number; has_content: boolean })[]; deleted?: boolean; block_consent_modals?: boolean; created_by: { id: number; uuid: string; distinct_id?: strin...>
```

<sub>`PATCH /api/projects/{project_id}/saved/{short_id}/` · `saved_partial_update`</sub>

## `posthog.savedRegenerateCreate`

Re-run screenshot generation for a saved heatmap of type 'screenshot'. Clears existing renders and re-renders at every target width; status returns to 'processing'.

```ts
posthog.savedRegenerateCreate(): Promise<{ id: string; short_id: string; name?: string | null; url: string; data_url?: string | null; target_widths?: unknown; type?: "screenshot" | "iframe" | "recording"; status: "processing" | "completed" | "failed"; has_content: boolean; snapshots: ({ width: number; has_content: boolean })[]; deleted?: boolean; block_consent_modals?: boolean; created_by: { id: number; uuid: string; distinct_id?: strin...>
```

<sub>`POST /api/projects/{project_id}/saved/{short_id}/regenerate/` · `saved_regenerate_create`</sub>

## `posthog.savedPreflightCreate`

Check whether a page can back a heatmap

```ts
posthog.savedPreflightCreate(): Promise<{ framing: "allowed" | "blocked" | "unknown"; blocked_by: "x_frame_options" | "frame_ancestors" | null; http_status: number | null; body_excerpt: string | null }>
```

<sub>`POST /api/projects/{project_id}/saved/preflight/` · `saved_preflight_create`</sub>

## `posthog.savedPrewarmCreate`

Speculatively render a screenshot for a page URL ahead of heatmap creation, so it's ready (or closer to ready) by the time the user reaches the generation screen. Renders a single preview width. Idempotent within a short window: returns the existing in-flight or completed prewarm render for the same URL and consent setting if one exists (200), otherwise starts a new one (201). The result is reused when a heatmap is later created for the same URL.

```ts
posthog.savedPrewarmCreate(): Promise<{ id: string; short_id: string; name?: string | null; url: string; data_url?: string | null; target_widths?: unknown; type?: "screenshot" | "iframe" | "recording"; status: "processing" | "completed" | "failed"; has_content: boolean; snapshots: ({ width: number; has_content: boolean })[]; deleted?: boolean; block_consent_modals?: boolean; created_by: { id: number; uuid: string; distinct_id?: strin...>
```

<sub>`POST /api/projects/{project_id}/saved/prewarm/` · `saved_prewarm_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

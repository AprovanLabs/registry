# Replay

16 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.sessionRecordingPlaylistsList`

Override list to include synthetic playlists. Synthetics have no DB row, so we compute each one's position in the merged sort and split the requested page between synthetics and a DB queryset slice. The merge/rank/sort is all in-memory, so each phase is wrapped in a span and the input sizes are recorded as span attributes — a slow response on a team with many playlists then shows up as a wide span against a large db_count.

```ts
posthog.sessionRecordingPlaylistsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; short_id: string; name?: string | null; derived_name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { ...>
```

<sub>`GET /api/projects/{project_id}/session_recording_playlists/` · `session_recording_playlists_list`</sub>

## `posthog.sessionRecordingPlaylistsCreate`

```ts
posthog.sessionRecordingPlaylistsCreate(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "da...>
```

<sub>`POST /api/projects/{project_id}/session_recording_playlists/` · `session_recording_playlists_create`</sub>

## `posthog.sessionRecordingPlaylistsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.sessionRecordingPlaylistsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/session_recording_playlists/{short_id}/` · `session_recording_playlists_destroy`</sub>

## `posthog.sessionRecordingPlaylistsRetrieve`

```ts
posthog.sessionRecordingPlaylistsRetrieve(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "da...>
```

<sub>`GET /api/projects/{project_id}/session_recording_playlists/{short_id}/` · `session_recording_playlists_retrieve`</sub>

## `posthog.sessionRecordingPlaylistsPartialUpdate`

```ts
posthog.sessionRecordingPlaylistsPartialUpdate(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "da...>
```

<sub>`PATCH /api/projects/{project_id}/session_recording_playlists/{short_id}/` · `session_recording_playlists_partial_update`</sub>

## `posthog.sessionRecordingPlaylistsUpdate`

```ts
posthog.sessionRecordingPlaylistsUpdate(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; description?: string; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "da...>
```

<sub>`PUT /api/projects/{project_id}/session_recording_playlists/{short_id}/` · `session_recording_playlists_update`</sub>

## `posthog.sessionRecordingPlaylistsRecordingsRetrieve`

```ts
posthog.sessionRecordingPlaylistsRecordingsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/` · `session_recording_playlists_recordings_retrieve`</sub>

## `posthog.sessionRecordingPlaylistsRecordingsDestroy`

```ts
posthog.sessionRecordingPlaylistsRecordingsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/` · `session_recording_playlists_recordings_destroy`</sub>

## `posthog.sessionRecordingPlaylistsRecordingsCreate`

```ts
posthog.sessionRecordingPlaylistsRecordingsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/` · `session_recording_playlists_recordings_create`</sub>

## `posthog.sessionRecordingsList`

```ts
posthog.sessionRecordingsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; distinct_id: string | null; viewed: boolean; viewers: (string)[]; recording_duration: number; active_seconds: number | null; inactive_seconds: number | null; start_time: string | null; end_time: string | null; click_count: number | null; keypress_count: number | null; mouse_activity_count: number | null; cons...>
```

<sub>`GET /api/projects/{project_id}/session_recordings/` · `session_recordings_list`</sub>

## `posthog.sessionRecordingsDestroy`

```ts
posthog.sessionRecordingsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/session_recordings/{id}/` · `session_recordings_destroy`</sub>

## `posthog.sessionRecordingsRetrieve`

```ts
posthog.sessionRecordingsRetrieve(): Promise<{ id: string; distinct_id: string | null; viewed: boolean; viewers: (string)[]; recording_duration: number; active_seconds: number | null; inactive_seconds: number | null; start_time: string | null; end_time: string | null; click_count: number | null; keypress_count: number | null; mouse_activity_count: number | null; console_log_count: number | null; console_warn_count: number | null; console_er...>
```

<sub>`GET /api/projects/{project_id}/session_recordings/{id}/` · `session_recordings_retrieve`</sub>

## `posthog.sessionRecordingsPartialUpdate`

```ts
posthog.sessionRecordingsPartialUpdate(): Promise<{ id: string; distinct_id: string | null; viewed: boolean; viewers: (string)[]; recording_duration: number; active_seconds: number | null; inactive_seconds: number | null; start_time: string | null; end_time: string | null; click_count: number | null; keypress_count: number | null; mouse_activity_count: number | null; console_log_count: number | null; console_warn_count: number | null; console_er...>
```

<sub>`PATCH /api/projects/{project_id}/session_recordings/{id}/` · `session_recordings_partial_update`</sub>

## `posthog.sessionRecordingsUpdate`

```ts
posthog.sessionRecordingsUpdate(): Promise<{ id: string; distinct_id: string | null; viewed: boolean; viewers: (string)[]; recording_duration: number; active_seconds: number | null; inactive_seconds: number | null; start_time: string | null; end_time: string | null; click_count: number | null; keypress_count: number | null; mouse_activity_count: number | null; console_log_count: number | null; console_warn_count: number | null; console_er...>
```

<sub>`PUT /api/projects/{project_id}/session_recordings/{id}/` · `session_recordings_update`</sub>

## `posthog.sessionRecordingsBulkDeleteCreate`

Delete a batch of session recordings by session ID. Deletion is permanent and cannot be undone. IDs that don't match an existing recording are skipped and counted in `total_requested` but not `deleted_count`.

```ts
posthog.sessionRecordingsBulkDeleteCreate(): Promise<{ success: boolean; deleted_count: number; total_requested: number; failed_ids: (string)[] }>
```

<sub>`POST /api/projects/{project_id}/session_recordings/bulk_delete/` · `session_recordings_bulk_delete_create`</sub>

## `posthog.createSessionSummariesIndividually`

Generate AI individual summary for each session, without grouping.

```ts
posthog.createSessionSummariesIndividually(): Promise<{ session_ids: (string)[]; focus_area?: string }>
```

<sub>`POST /api/projects/{project_id}/session_summaries/create_session_summaries_individually/` · `create_session_summaries_individually`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

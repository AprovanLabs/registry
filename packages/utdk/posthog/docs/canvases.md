# Canvases

13 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.canvasesList`

Canvases: agent-built sandboxed browser apps, filed into channels. Source is versioned per publish and built server-side; the canvas app renders the published build's artifact from the isolated artifact origin.

```ts
posthog.canvasesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; channel: string; template_id: string; context: string; generation_task_id: string | null; pinned: boolean; pinned_at: string | null; is_home: boolean; current_version_id: string | null; published_build_id: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_...>
```

<sub>`GET /api/projects/{project_id}/canvases/` · `canvases_list`</sub>

## `posthog.canvasesCreate`

Create a new, empty canvas in a channel; give it source by publishing a project.

```ts
posthog.canvasesCreate(): Promise<{ id: string; name: string; channel: string; template_id: string; context: string; generation_task_id: string | null; pinned: boolean; pinned_at: string | null; is_home: boolean; current_version_id: string | null; published_build_id: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boole...>
```

<sub>`POST /api/projects/{project_id}/canvases/` · `canvases_create`</sub>

## `posthog.canvasesDestroy`

Canvases: agent-built sandboxed browser apps, filed into channels. Source is versioned per publish and built server-side; the canvas app renders the published build's artifact from the isolated artifact origin.

```ts
posthog.canvasesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/canvases/{id}/` · `canvases_destroy`</sub>

## `posthog.canvasesRetrieve`

Canvases: agent-built sandboxed browser apps, filed into channels. Source is versioned per publish and built server-side; the canvas app renders the published build's artifact from the isolated artifact origin.

```ts
posthog.canvasesRetrieve(): Promise<{ id: string; name: string; channel: string; template_id: string; context: string; generation_task_id: string | null; pinned: boolean; pinned_at: string | null; is_home: boolean; current_version_id: string | null; published_build_id: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boole...>
```

<sub>`GET /api/projects/{project_id}/canvases/{id}/` · `canvases_retrieve`</sub>

## `posthog.canvasesPartialUpdate`

Update canvas metadata (name, author context, pin, generation-task pointer).

```ts
posthog.canvasesPartialUpdate(): Promise<{ id: string; name: string; channel: string; template_id: string; context: string; generation_task_id: string | null; pinned: boolean; pinned_at: string | null; is_home: boolean; current_version_id: string | null; published_build_id: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boole...>
```

<sub>`PATCH /api/projects/{project_id}/canvases/{id}/` · `canvases_partial_update`</sub>

## `posthog.canvasesBuildsRetrieve`

Read the canvas's build lifecycle: live pointers plus recent builds. A publish queues a build; poll this until it is ready (the live pointer advances) or failed (fix the error diagnostics and publish again — the last good build stays live).

```ts
posthog.canvasesBuildsRetrieve(): Promise<{ published_build_id: string | null; current_version_id: string | null; builds: ({ id: string; source_version_id: string; build_status: "queued" | "building" | "ready" | "failed"; diagnostics: ({ severity: "error" | "warning"; code: string; message: string; path?: string; line?: number })[]; manifest?: { entryHtml: string; assets: ({ path: string; contentHash: string; sizeBytes: number })[]; depe...>
```

<sub>`GET /api/projects/{project_id}/canvases/{id}/builds/` · `canvases_builds_retrieve`</sub>

## `posthog.canvasesBuildActionCreate`

Apply a lifecycle action (retry, pin, unpin, cancel) to one build.

```ts
posthog.canvasesBuildActionCreate(): Promise<{ id: string; source_version_id: string; build_status: "queued" | "building" | "ready" | "failed"; diagnostics: ({ severity: "error" | "warning"; code: string; message: string; path?: string; line?: number })[]; manifest?: { entryHtml: string; assets: ({ path: string; contentHash: string; sizeBytes: number })[]; dependencies: { [key: string]: string | undefined }; canvasSdkVersion: string; legacy...>
```

<sub>`POST /api/projects/{project_id}/canvases/{id}/builds/action/` · `canvases_build_action_create`</sub>

## `posthog.canvasesEditCreate`

Publish per-file edits against the canvas's current source project. Diff-aware alternative to sending the complete project: each operation sets a file's content or (content null) deletes it, applied to the head the caller read. `expected_current_version_id` is mandatory here — relative edits against an unverified base could silently merge into someone else's newer work.

```ts
posthog.canvasesEditCreate(): Promise<{ canvas: { id: string; name: string; channel_id: string; current_version_id: string | null; published_build_id: string | null; created_at: string }; current_version_id: string; diagnostics: ({ severity: "error" | "warning"; code: string; message: string; path?: string; line?: number })[] }>
```

<sub>`POST /api/projects/{project_id}/canvases/{id}/edit/` · `canvases_edit_create`</sub>

## `posthog.canvasesPublishCreate`

Publish a complete source project as the canvas's new head version. Validation errors reject the publish (400) and leave the canvas untouched; a stale `expected_current_version_id` is rejected with 409. A successful publish queues a server-side build.

```ts
posthog.canvasesPublishCreate(): Promise<{ canvas: { id: string; name: string; channel_id: string; current_version_id: string | null; published_build_id: string | null; created_at: string }; current_version_id: string; diagnostics: ({ severity: "error" | "warning"; code: string; message: string; path?: string; line?: number })[] }>
```

<sub>`POST /api/projects/{project_id}/canvases/{id}/publish/` · `canvases_publish_create`</sub>

## `posthog.canvasesRevertCreate`

Move the canvas's head back to an existing source version and rebuild it.

```ts
posthog.canvasesRevertCreate(): Promise<{ id: string; source_version_id: string; build_status: "queued" | "building" | "ready" | "failed"; diagnostics: ({ severity: "error" | "warning"; code: string; message: string; path?: string; line?: number })[]; manifest?: { entryHtml: string; assets: ({ path: string; contentHash: string; sizeBytes: number })[]; dependencies: { [key: string]: string | undefined }; canvasSdkVersion: string; legacy...>
```

<sub>`POST /api/projects/{project_id}/canvases/{id}/revert/` · `canvases_revert_create`</sub>

## `posthog.canvasesSourceRetrieve`

Read the canvas's source project and its `current_version_id`. Always call this before editing: edit the returned files, then publish the complete project passing the returned version id as `expected_current_version_id` so concurrent edits are not overwritten. `?version_id=` reads a historical version instead of the head.

```ts
posthog.canvasesSourceRetrieve(): Promise<{ canvas: { id: string; name: string; channel_id: string; current_version_id: string | null; published_build_id: string | null; created_at: string }; project: { schemaVersion: number; files: { [key: string]: string | undefined }; assets?: { [key: string]: { encoding: "base64"; contentType: "image/png" | "image/jpeg" | "image/gif" | "image/webp" | "image/svg+xml" | "font/woff" | "font/woff2" | "ap...>
```

<sub>`GET /api/projects/{project_id}/canvases/{id}/source/` · `canvases_source_retrieve`</sub>

## `posthog.canvasesValidateCreate`

Validate a candidate source project without publishing it. Side-effect free.

```ts
posthog.canvasesValidateCreate(): Promise<{ valid: boolean; diagnostics: ({ severity: "error" | "warning"; code: string; message: string; path?: string; line?: number })[] }>
```

<sub>`POST /api/projects/{project_id}/canvases/{id}/validate/` · `canvases_validate_create`</sub>

## `posthog.canvasesVersionsRetrieve`

The canvas's source-version history, newest first (metadata only).

```ts
posthog.canvasesVersionsRetrieve(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; parent_version_id: string | null; prompt: string | null; task_id: string | null; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organiza...>
```

<sub>`GET /api/projects/{project_id}/canvases/{id}/versions/` · `canvases_versions_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

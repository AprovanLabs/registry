# File System

14 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.fileSystemList`

```ts
posthog.fileSystemList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; path: string; depth: number | null; type?: string; ref?: string | null; href?: string | null; meta?: unknown; shortcut?: boolean | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean ...>
```

<sub>`GET /api/projects/{project_id}/file_system/` · `file_system_list`</sub>

## `posthog.fileSystemCreate`

```ts
posthog.fileSystemCreate(): Promise<{ id: string; path: string; depth: number | null; type?: string; ref?: string | null; href?: string | null; meta?: unknown; shortcut?: boolean | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organiz...>
```

<sub>`POST /api/projects/{project_id}/file_system/` · `file_system_create`</sub>

## `posthog.fileSystemDestroy`

```ts
posthog.fileSystemDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/file_system/{id}/` · `file_system_destroy`</sub>

## `posthog.fileSystemRetrieve`

```ts
posthog.fileSystemRetrieve(): Promise<{ id: string; path: string; depth: number | null; type?: string; ref?: string | null; href?: string | null; meta?: unknown; shortcut?: boolean | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organiz...>
```

<sub>`GET /api/projects/{project_id}/file_system/{id}/` · `file_system_retrieve`</sub>

## `posthog.fileSystemPartialUpdate`

```ts
posthog.fileSystemPartialUpdate(): Promise<{ id: string; path: string; depth: number | null; type?: string; ref?: string | null; href?: string | null; meta?: unknown; shortcut?: boolean | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organiz...>
```

<sub>`PATCH /api/projects/{project_id}/file_system/{id}/` · `file_system_partial_update`</sub>

## `posthog.fileSystemUpdate`

```ts
posthog.fileSystemUpdate(): Promise<{ id: string; path: string; depth: number | null; type?: string; ref?: string | null; href?: string | null; meta?: unknown; shortcut?: boolean | null; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organiz...>
```

<sub>`PUT /api/projects/{project_id}/file_system/{id}/` · `file_system_update`</sub>

## `posthog.fileSystemCountCreate`

Get count of all files in a folder.

```ts
posthog.fileSystemCountCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_system/{id}/count/` · `file_system_count_create`</sub>

## `posthog.fileSystemLinkCreate`

```ts
posthog.fileSystemLinkCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_system/{id}/link/` · `file_system_link_create`</sub>

## `posthog.fileSystemMoveCreate`

```ts
posthog.fileSystemMoveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_system/{id}/move/` · `file_system_move_create`</sub>

## `posthog.fileSystemCountByPathCreate`

Get count of all files in a folder.

```ts
posthog.fileSystemCountByPathCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_system/count_by_path/` · `file_system_count_by_path_create`</sub>

## `posthog.fileSystemLogViewRetrieve`

```ts
posthog.fileSystemLogViewRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/file_system/log_view/` · `file_system_log_view_retrieve`</sub>

## `posthog.fileSystemLogViewCreate`

```ts
posthog.fileSystemLogViewCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_system/log_view/` · `file_system_log_view_create`</sub>

## `posthog.fileSystemUndoDeleteCreate`

```ts
posthog.fileSystemUndoDeleteCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_system/undo_delete/` · `file_system_undo_delete_create`</sub>

## `posthog.fileSystemUnfiledRetrieve`

```ts
posthog.fileSystemUnfiledRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/file_system/unfiled/` · `file_system_unfiled_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

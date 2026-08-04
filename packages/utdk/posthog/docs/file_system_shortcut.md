# File System Shortcut

7 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.fileSystemShortcutList`

```ts
posthog.fileSystemShortcutList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; path: string; type?: string; ref?: string | null; href?: string | null; order?: number; created_at: string; user_access_level: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/file_system_shortcut/` · `file_system_shortcut_list`</sub>

## `posthog.fileSystemShortcutCreate`

```ts
posthog.fileSystemShortcutCreate(): Promise<{ id: string; path: string; type?: string; ref?: string | null; href?: string | null; order?: number; created_at: string; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/file_system_shortcut/` · `file_system_shortcut_create`</sub>

## `posthog.fileSystemShortcutDestroy`

```ts
posthog.fileSystemShortcutDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/file_system_shortcut/{id}/` · `file_system_shortcut_destroy`</sub>

## `posthog.fileSystemShortcutRetrieve`

```ts
posthog.fileSystemShortcutRetrieve(): Promise<{ id: string; path: string; type?: string; ref?: string | null; href?: string | null; order?: number; created_at: string; user_access_level: string | null }>
```

<sub>`GET /api/projects/{project_id}/file_system_shortcut/{id}/` · `file_system_shortcut_retrieve`</sub>

## `posthog.fileSystemShortcutPartialUpdate`

```ts
posthog.fileSystemShortcutPartialUpdate(): Promise<{ id: string; path: string; type?: string; ref?: string | null; href?: string | null; order?: number; created_at: string; user_access_level: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/file_system_shortcut/{id}/` · `file_system_shortcut_partial_update`</sub>

## `posthog.fileSystemShortcutUpdate`

```ts
posthog.fileSystemShortcutUpdate(): Promise<{ id: string; path: string; type?: string; ref?: string | null; href?: string | null; order?: number; created_at: string; user_access_level: string | null }>
```

<sub>`PUT /api/projects/{project_id}/file_system_shortcut/{id}/` · `file_system_shortcut_update`</sub>

## `posthog.fileSystemShortcutReorderCreate`

Set the display order of the current user's shortcuts. `ordered_ids` becomes the new top-to-bottom order; any unknown IDs are rejected.

```ts
posthog.fileSystemShortcutReorderCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; path: string; type?: string; ref?: string | null; href?: string | null; order?: number; created_at: string; user_access_level: string | null })[] }>
```

<sub>`POST /api/projects/{project_id}/file_system_shortcut/reorder/` · `file_system_shortcut_reorder_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

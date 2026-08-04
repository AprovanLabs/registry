# Notebooks

30 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.notebooksList`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; short_id: string; title: string | null; deleted: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organizatio...>
```

<sub>`GET /api/projects/{project_id}/notebooks/` · `notebooks_list`</sub>

## `posthog.notebooksCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksCreate(): Promise<{ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; version?: number; deleted?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "e...>
```

<sub>`POST /api/projects/{project_id}/notebooks/` · `notebooks_create`</sub>

## `posthog.notebooksSharingList`

```ts
posthog.notebooksSharingList(): Promise<({ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/notebooks/{notebook_id}/sharing/` · `notebooks_sharing_list`</sub>

## `posthog.notebooksSharingPasswordsCreate`

Create a new password for the sharing configuration.

```ts
posthog.notebooksSharingPasswordsCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/notebooks/{notebook_id}/sharing/passwords/` · `notebooks_sharing_passwords_create`</sub>

## `posthog.notebooksSharingPasswordsDestroy`

Delete a password from the sharing configuration.

```ts
posthog.notebooksSharingPasswordsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/notebooks/{notebook_id}/sharing/passwords/{password_id}/` · `notebooks_sharing_passwords_destroy`</sub>

## `posthog.notebooksSharingRefreshCreate`

```ts
posthog.notebooksSharingRefreshCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/notebooks/{notebook_id}/sharing/refresh/` · `notebooks_sharing_refresh_create`</sub>

## `posthog.notebooksDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.notebooksDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/notebooks/{short_id}/` · `notebooks_destroy`</sub>

## `posthog.notebooksRetrieve`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksRetrieve(): Promise<{ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; version?: number; deleted?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "e...>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/` · `notebooks_retrieve`</sub>

## `posthog.notebooksPartialUpdate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksPartialUpdate(): Promise<{ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; version?: number; deleted?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "e...>
```

<sub>`PATCH /api/projects/{project_id}/notebooks/{short_id}/` · `notebooks_partial_update`</sub>

## `posthog.notebooksUpdate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksUpdate(): Promise<{ id: string; short_id: string; title?: string | null; content?: unknown; text_content?: string | null; version?: number; deleted?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "e...>
```

<sub>`PUT /api/projects/{project_id}/notebooks/{short_id}/` · `notebooks_update`</sub>

## `posthog.notebooksActivityRetrieve`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/activity/` · `notebooks_activity_retrieve`</sub>

## `posthog.notebooksCollabMarkdownSaveCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksCollabMarkdownSaveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/collab/markdown_save/` · `notebooks_collab_markdown_save_create`</sub>

## `posthog.notebooksCollabPresenceCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksCollabPresenceCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/collab/presence/` · `notebooks_collab_presence_create`</sub>

## `posthog.notebooksCollabSaveCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksCollabSaveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/collab/save/` · `notebooks_collab_save_create`</sub>

## `posthog.notebooksCollabStreamRetrieve`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksCollabStreamRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/collab/stream/` · `notebooks_collab_stream_retrieve`</sub>

## `posthog.notebooksHogqlExecuteCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksHogqlExecuteCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/hogql/execute/` · `notebooks_hogql_execute_create`</sub>

## `posthog.notebooksKernelConfigCreate`

Set the notebook's kernel compute configuration. Applies at sandbox provision time: a currently running kernel keeps its resources until restarted.

```ts
posthog.notebooksKernelConfigCreate(): Promise<{ cpu_cores?: number | null; memory_gb?: number | null; idle_timeout_seconds?: number | null; restart_required: boolean }>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/kernel/config/` · `notebooks_kernel_config_create`</sub>

## `posthog.notebooksKernelDataframeRetrieve`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksKernelDataframeRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/kernel/dataframe/` · `notebooks_kernel_dataframe_retrieve`</sub>

## `posthog.notebooksKernelExecuteCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksKernelExecuteCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/kernel/execute/` · `notebooks_kernel_execute_create`</sub>

## `posthog.notebooksKernelExecuteStreamCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksKernelExecuteStreamCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/kernel/execute/stream/` · `notebooks_kernel_execute_stream_create`</sub>

## `posthog.notebooksKernelRestartCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksKernelRestartCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/kernel/restart/` · `notebooks_kernel_restart_create`</sub>

## `posthog.notebooksKernelStartCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksKernelStartCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/kernel/start/` · `notebooks_kernel_start_create`</sub>

## `posthog.notebooksKernelStatusRetrieve`

Live-checked kernel runtime state for this notebook, its compute configuration, and the catalog of dataframes/tables a cell can currently reference (with column schemas).

```ts
posthog.notebooksKernelStatusRetrieve(): Promise<{ backend?: string | null; status: string; last_used_at?: string | null; last_error?: string | null; runtime_id?: string | null; kernel_id?: string | null; kernel_pid?: number | null; sandbox_id?: string | null; frames: ({ name: string; kind: string; columns?: ((string)[])[]; row_count?: number | null; row_count_is_estimate?: boolean })[]; cpu_cores: number; memory_gb: number; disk_size_gb?: numb...>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/kernel/status/` · `notebooks_kernel_status_retrieve`</sub>

## `posthog.notebooksKernelStopCreate`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksKernelStopCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/kernel/stop/` · `notebooks_kernel_stop_create`</sub>

## `posthog.notebooksSqlV2RunCreate`

Dispatch an asynchronous run of a notebook SQL or Python cell. Returns a run_id immediately; poll the run result endpoint until the status is terminal. Flag-gated (revamped-py-notebooks).

```ts
posthog.notebooksSqlV2RunCreate(): Promise<{ run_id: string }>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/sql_v2/run/` · `notebooks_sql_v2_run_create`</sub>

## `posthog.notebooksSqlV2RunsRetrieve`

Read a run's durable state: its status, and — once done or interrupted — the result envelope (columns, first rows, stdout/stderr, media, error). Poll until terminal. Flag-gated (revamped-py-notebooks).

```ts
posthog.notebooksSqlV2RunsRetrieve(): Promise<{ status: string; result?: { status: string; frames?: ({ name: string; kind: string; columns?: ((string)[])[]; row_count?: number | null; row_count_is_estimate?: boolean })[]; stdout?: string; stderr?: string; media?: ({ mime_type: string; data: string })[]; columns?: (string)[]; types?: ((string)[])[]; row_count?: number; has_more?: boolean; first_page?: ((unknown)[])[]; result_id?: string | nul...>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/sql_v2/runs/{run_id}/` · `notebooks_sql_v2_runs_retrieve`</sub>

## `posthog.notebooksSqlV2RunsInterruptCreate`

Stop a running cell. Idempotent: interrupting an already-finished run returns its outcome unchanged. Flag-gated (revamped-py-notebooks).

```ts
posthog.notebooksSqlV2RunsInterruptCreate(): Promise<{ status: string; detail?: string }>
```

<sub>`POST /api/projects/{project_id}/notebooks/{short_id}/sql_v2/runs/{run_id}/interrupt/` · `notebooks_sql_v2_runs_interrupt_create`</sub>

## `posthog.notebooksSqlV2StateRetrieve`

The full notebook view for agents: title, document source (markdown, or raw content for legacy rich-text notebooks), every cell with its dependency edges and derived run status (including staleness), and the kernel's runtime state and compute config. Flag-gated (revamped-py-notebooks).

```ts
posthog.notebooksSqlV2StateRetrieve(): Promise<{ notebook_id: string; title: string | null; version: number | null; markdown: string | null; content?: unknown; kernel: { status: string; cpu_cores?: number | null; memory_gb?: number | null; idle_timeout_seconds?: number | null }; cells: ({ node_id: string; cell_type: string; dataframe_name: string; code: string; status: string; depends_on: (string)[]; dependents: (string)[]; last_run?: { run_i...>
```

<sub>`GET /api/projects/{project_id}/notebooks/{short_id}/sql_v2/state/` · `notebooks_sql_v2_state_retrieve`</sub>

## `posthog.notebooksAllActivityRetrieve`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksAllActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/notebooks/activity/` · `notebooks_all_activity_retrieve`</sub>

## `posthog.notebooksRecordingCommentsRetrieve`

The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.

```ts
posthog.notebooksRecordingCommentsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/notebooks/recording_comments/` · `notebooks_recording_comments_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

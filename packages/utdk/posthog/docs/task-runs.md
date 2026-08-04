# Task Runs

23 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.tasksRunsList`

List task runs

```ts
posthog.tasksRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string...>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/` · `tasks_runs_list`</sub>

## `posthog.tasksRunsCreate`

Create task run

```ts
posthog.tasksRunsCreate(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/` · `tasks_runs_create`</sub>

## `posthog.tasksRunsRetrieve`

Get task run

```ts
posthog.tasksRunsRetrieve(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/` · `tasks_runs_retrieve`</sub>

## `posthog.tasksRunsPartialUpdate`

Update task run

```ts
posthog.tasksRunsPartialUpdate(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`PATCH /api/projects/{project_id}/tasks/{task_id}/runs/{id}/` · `tasks_runs_partial_update`</sub>

## `posthog.tasksRunsAppendLogCreate`

Append log entries

```ts
posthog.tasksRunsAppendLogCreate(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/append_log/` · `tasks_runs_append_log_create`</sub>

## `posthog.tasksRunsArtifactsCreate`

Upload artifacts for a task run

```ts
posthog.tasksRunsArtifactsCreate(): Promise<{ artifacts: ({ id?: string; name: string; type: string; source?: string; size?: number; content_type?: string; metadata?: { skill_name: string; skill_source: "user" | "repo" | "marketplace" | "codex"; content_sha256: string; bundle_format: "zip"; schema_version: number }; storage_path: string; uploaded_at: string; url?: string })[] }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/` · `tasks_runs_artifacts_create`</sub>

## `posthog.tasksRunsArtifactsDownloadCreate`

Download an artifact through the backend

```ts
posthog.tasksRunsArtifactsDownloadCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/download/` · `tasks_runs_artifacts_download_create`</sub>

## `posthog.tasksRunsArtifactsFinalizeUploadCreate`

Finalize direct uploads for task run artifacts

```ts
posthog.tasksRunsArtifactsFinalizeUploadCreate(): Promise<{ artifacts: ({ id?: string; name: string; type: string; source?: string; size?: number; content_type?: string; metadata?: { skill_name: string; skill_source: "user" | "repo" | "marketplace" | "codex"; content_sha256: string; bundle_format: "zip"; schema_version: number }; storage_path: string; uploaded_at: string; url?: string })[] }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/finalize_upload/` · `tasks_runs_artifacts_finalize_upload_create`</sub>

## `posthog.tasksRunsArtifactsPrepareUploadCreate`

Prepare direct uploads for task run artifacts

```ts
posthog.tasksRunsArtifactsPrepareUploadCreate(): Promise<{ artifacts: ({ id: string; name: string; type: string; source?: string; size: number; content_type?: string; metadata?: { skill_name: string; skill_source: "user" | "repo" | "marketplace" | "codex"; content_sha256: string; bundle_format: "zip"; schema_version: number }; storage_path: string; expires_in: number; presigned_post: { url: string; fields: { [key: string]: string | undefined } } })[] }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/prepare_upload/` · `tasks_runs_artifacts_prepare_upload_create`</sub>

## `posthog.tasksRunsArtifactsPresignCreate`

Generate presigned URL for an artifact

```ts
posthog.tasksRunsArtifactsPresignCreate(): Promise<{ url: string; expires_in: number }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/artifacts/presign/` · `tasks_runs_artifacts_presign_create`</sub>

## `posthog.tasksRunsCancelCreate`

Cancel task run

```ts
posthog.tasksRunsCancelCreate(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/cancel/` · `tasks_runs_cancel_create`</sub>

## `posthog.tasksRunsCommandCreate`

Send command to task run

```ts
posthog.tasksRunsCommandCreate(): Promise<{ jsonrpc: string; id?: unknown; result?: unknown; error?: { [key: string]: unknown } }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/command/` · `tasks_runs_command_create`</sub>

## `posthog.tasksRunsConnectionTokenRetrieve`

Get sandbox connection token

```ts
posthog.tasksRunsConnectionTokenRetrieve(): Promise<{ token: string }>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/connection_token/` · `tasks_runs_connection_token_retrieve`</sub>

## `posthog.tasksRunsLogsRetrieve`

Get task run logs

```ts
posthog.tasksRunsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/logs/` · `tasks_runs_logs_retrieve`</sub>

## `posthog.tasksRunsRelayMessageCreate`

Relay run message to Slack

```ts
posthog.tasksRunsRelayMessageCreate(): Promise<{ status: string; relay_id?: string }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/relay_message/` · `tasks_runs_relay_message_create`</sub>

## `posthog.tasksRunsResumeInCloudCreate`

Resume task run in cloud

```ts
posthog.tasksRunsResumeInCloudCreate(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/resume_in_cloud/` · `tasks_runs_resume_in_cloud_create`</sub>

## `posthog.tasksRunsSessionLogsRetrieve`

Get filtered task run session logs

```ts
posthog.tasksRunsSessionLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/session_logs/` · `tasks_runs_session_logs_retrieve`</sub>

## `posthog.tasksRunsSetOutputPartialUpdate`

Set run output

```ts
posthog.tasksRunsSetOutputPartialUpdate(): Promise<{ id: string; task: string; stage: string | null; branch: string | null; status: string; environment: string; runtime_adapter?: "claude" | "codex" | null; provider?: "anthropic" | "openai" | null; model?: string | null; reasoning_effort?: "low" | "medium" | "high" | "xhigh" | "max" | "ultracode" | unknown; log_url?: string | null; error_message: string | null; output: { [key: string]: unknown } |...>
```

<sub>`PATCH /api/projects/{project_id}/tasks/{task_id}/runs/{id}/set_output/` · `tasks_runs_set_output_partial_update`</sub>

## `posthog.tasksRunsStartCreate`

Start task run

```ts
posthog.tasksRunsStartCreate(): Promise<{ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null; json_schema: { [key: string]: unknown } | null; internal: boolean; archiv...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/start/` · `tasks_runs_start_create`</sub>

## `posthog.tasksRunsStreamTokenRetrieve`

Get task run stream read token

```ts
posthog.tasksRunsStreamTokenRetrieve(): Promise<{ token: string; stream_base_url: string | null }>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/stream_token/` · `tasks_runs_stream_token_retrieve`</sub>

## `posthog.tasksRunsStreamRetrieve`

Server-Sent Events stream of task run events. Events carry an `id:` line (a Redis stream id) usable as a resume cursor. The server caps each connection at 900 seconds: it emits `event: end` with `data: {"type": "rotated"}` and closes. This does NOT mean the run finished — reconnect with the `Last-Event-ID` header set to the last received event id to resume without gaps or duplicates. Only treat the stream as complete when the run itself reaches a terminal status. `?start=latest` consumers must also carry `Last-Event-ID` across reconnects: reconnecting without it re-resolves to the then-current latest event, silently skipping anything published while disconnected. **SDK consumers**: do not call the generated fetch wrapper for this path — it will buffer the entire stream. Use the URL builder (`getTasksRunsStreamRetrieveUrl`) with a streaming `fetch`/`EventSource`-style consumer and the `Last-Event-ID` header instead.

```ts
posthog.tasksRunsStreamRetrieve(): Promise<string>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/stream/` · `tasks_runs_stream_retrieve`</sub>

## `posthog.tasksRunsTaskSessionSyncCreate`

Replace the active native task session

```ts
posthog.tasksRunsTaskSessionSyncCreate(): Promise<{ id: string; content_sha256: string }>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{id}/task_session_sync/` · `tasks_runs_task_session_sync_create`</sub>

## `posthog.tasksRunsTaskSessionRetrieve`

Get active task session storage access

```ts
posthog.tasksRunsTaskSessionRetrieve(): Promise<{ id: string; download_url: string | null; content_sha256: string | null }>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{id}/task_session/` · `tasks_runs_task_session_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

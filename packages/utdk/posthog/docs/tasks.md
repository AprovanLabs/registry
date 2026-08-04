# Tasks

28 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.tasksList`

List tasks

```ts
posthog.tasksList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null...>
```

<sub>`GET /api/projects/{project_id}/tasks/` · `tasks_list`</sub>

## `posthog.tasksCreate`

API for managing tasks within a project. Tasks represent units of work to be performed by an agent.

```ts
posthog.tasksCreate(): Promise<{ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null; json_schema: { [key: string]: unknown } | null; internal: boolean; archiv...>
```

<sub>`POST /api/projects/{project_id}/tasks/` · `tasks_create`</sub>

## `posthog.tasksDestroy`

API for managing tasks within a project. Tasks represent units of work to be performed by an agent.

```ts
posthog.tasksDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/tasks/{id}/` · `tasks_destroy`</sub>

## `posthog.tasksRetrieve`

Get task

```ts
posthog.tasksRetrieve(): Promise<{ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null; json_schema: { [key: string]: unknown } | null; internal: boolean; archiv...>
```

<sub>`GET /api/projects/{project_id}/tasks/{id}/` · `tasks_retrieve`</sub>

## `posthog.tasksPartialUpdate`

API for managing tasks within a project. Tasks represent units of work to be performed by an agent.

```ts
posthog.tasksPartialUpdate(): Promise<{ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null; json_schema: { [key: string]: unknown } | null; internal: boolean; archiv...>
```

<sub>`PATCH /api/projects/{project_id}/tasks/{id}/` · `tasks_partial_update`</sub>

## `posthog.tasksUpdate`

API for managing tasks within a project. Tasks represent units of work to be performed by an agent.

```ts
posthog.tasksUpdate(): Promise<{ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null; json_schema: { [key: string]: unknown } | null; internal: boolean; archiv...>
```

<sub>`PUT /api/projects/{project_id}/tasks/{id}/` · `tasks_update`</sub>

## `posthog.tasksPinCreate`

API for managing tasks within a project. Tasks represent units of work to be performed by an agent.

```ts
posthog.tasksPinCreate(): Promise<{ task_id: string; pinned: boolean }>
```

<sub>`POST /api/projects/{project_id}/tasks/{id}/pin/` · `tasks_pin_create`</sub>

## `posthog.tasksPresenceDestroy`

Beacon presence for a device watching this task

```ts
posthog.tasksPresenceDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/tasks/{id}/presence/` · `tasks_presence_destroy`</sub>

## `posthog.tasksPresenceCreate`

Beacon presence for a device watching this task

```ts
posthog.tasksPresenceCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tasks/{id}/presence/` · `tasks_presence_create`</sub>

## `posthog.tasksRunCreate`

Run task

```ts
posthog.tasksRunCreate(): Promise<{ id: string; task_number: number | null; slug: string; title: string; title_manually_set: boolean; description: string; origin_product: string; runtime: "acp" | "pi"; repository: string | null; repositories: (string)[]; github_integration: number | null; github_user_integration: string | null; signal_report: string | null; json_schema: { [key: string]: unknown } | null; internal: boolean; archiv...>
```

<sub>`POST /api/projects/{project_id}/tasks/{id}/run/` · `tasks_run_create`</sub>

## `posthog.tasksStagedArtifactsFinalizeUploadCreate`

Finalize staged direct uploads for task attachments

```ts
posthog.tasksStagedArtifactsFinalizeUploadCreate(): Promise<{ artifacts: ({ id?: string; name: string; type: string; source?: string; size?: number; content_type?: string; metadata?: { skill_name: string; skill_source: "user" | "repo" | "marketplace" | "codex"; content_sha256: string; bundle_format: "zip"; schema_version: number }; storage_path: string; uploaded_at: string; url?: string })[] }>
```

<sub>`POST /api/projects/{project_id}/tasks/{id}/staged_artifacts/finalize_upload/` · `tasks_staged_artifacts_finalize_upload_create`</sub>

## `posthog.tasksStagedArtifactsPrepareUploadCreate`

Prepare staged direct uploads for task attachments

```ts
posthog.tasksStagedArtifactsPrepareUploadCreate(): Promise<{ artifacts: ({ id: string; name: string; type: string; source?: string; size: number; content_type?: string; metadata?: { skill_name: string; skill_source: "user" | "repo" | "marketplace" | "codex"; content_sha256: string; bundle_format: "zip"; schema_version: number }; storage_path: string; expires_in: number; presigned_post: { url: string; fields: { [key: string]: string | undefined } } })[] }>
```

<sub>`POST /api/projects/{project_id}/tasks/{id}/staged_artifacts/prepare_upload/` · `tasks_staged_artifacts_prepare_upload_create`</sub>

## `posthog.tasksRunsLivingArtifactsList`

List living artifacts for a task run

```ts
posthog.tasksRunsLivingArtifactsList(): Promise<({ artifacts: ({ id: string; task_id: string; run_id: string; team_id: number; name: string; artifact_type: "slack_message" | "slack_canvas" | "document" | "spreadsheet" | "dashboard" | "file" | "github_pr"; adapter: "slack_message" | "slack_canvas" | "slack_file" | "document_connector" | "github_pr"; status: "active" | "failed"; location: unknown; metadata: unknown; current_version: number; vers...>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{run_id}/living_artifacts/` · `tasks_runs_living_artifacts_list`</sub>

## `posthog.tasksRunsLivingArtifactsCreate`

Create a living artifact for a task run

```ts
posthog.tasksRunsLivingArtifactsCreate(): Promise<{ id: string; task_id: string; run_id: string; team_id: number; name: string; artifact_type: "slack_message" | "slack_canvas" | "document" | "spreadsheet" | "dashboard" | "file" | "github_pr"; adapter: "slack_message" | "slack_canvas" | "slack_file" | "document_connector" | "github_pr"; status: "active" | "failed"; location: unknown; metadata: unknown; current_version: number; versions: ({ [key: ...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{run_id}/living_artifacts/` · `tasks_runs_living_artifacts_create`</sub>

## `posthog.tasksRunsLivingArtifactsOpen`

Open a living artifact for a task run

```ts
posthog.tasksRunsLivingArtifactsOpen(): Promise<{ id: string; task_id: string; run_id: string; team_id: number; name: string; artifact_type: "slack_message" | "slack_canvas" | "document" | "spreadsheet" | "dashboard" | "file" | "github_pr"; adapter: "slack_message" | "slack_canvas" | "slack_file" | "document_connector" | "github_pr"; status: "active" | "failed"; location: unknown; metadata: unknown; current_version: number; versions: ({ [key: ...>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/runs/{run_id}/living_artifacts/{id}/` · `tasks_runs_living_artifacts_open`</sub>

## `posthog.tasksRunsLivingArtifactsEdit`

Edit a living artifact for a task run

```ts
posthog.tasksRunsLivingArtifactsEdit(): Promise<{ id: string; task_id: string; run_id: string; team_id: number; name: string; artifact_type: "slack_message" | "slack_canvas" | "document" | "spreadsheet" | "dashboard" | "file" | "github_pr"; adapter: "slack_message" | "slack_canvas" | "slack_file" | "document_connector" | "github_pr"; status: "active" | "failed"; location: unknown; metadata: unknown; current_version: number; versions: ({ [key: ...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{run_id}/living_artifacts/{id}/edit/` · `tasks_runs_living_artifacts_edit`</sub>

## `posthog.tasksRunsLivingArtifactsChart`

Render an insight chart and attach it as a living artifact

```ts
posthog.tasksRunsLivingArtifactsChart(): Promise<{ artifact: { id: string; task_id: string; run_id: string; team_id: number; name: string; artifact_type: "slack_message" | "slack_canvas" | "document" | "spreadsheet" | "dashboard" | "file" | "github_pr"; adapter: "slack_message" | "slack_canvas" | "slack_file" | "document_connector" | "github_pr"; status: "active" | "failed"; location: unknown; metadata: unknown; current_version: number; version...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/runs/{run_id}/living_artifacts/chart/` · `tasks_runs_living_artifacts_chart`</sub>

## `posthog.tasksThreadMessagesList`

List thread messages

```ts
posthog.tasksThreadMessagesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; task: string; author_kind: string; event: string; payload: { [key: string]: unknown }; content: string; created_at: string; author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unk...>
```

<sub>`GET /api/projects/{project_id}/tasks/{task_id}/thread_messages/` · `tasks_thread_messages_list`</sub>

## `posthog.tasksThreadMessagesCreate`

Post a thread message

```ts
posthog.tasksThreadMessagesCreate(): Promise<{ id: string; task: string; author_kind: string; event: string; payload: { [key: string]: unknown }; content: string; created_at: string; author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; forwarded_to_...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/thread_messages/` · `tasks_thread_messages_create`</sub>

## `posthog.tasksThreadMessagesDestroy`

Delete own thread message

```ts
posthog.tasksThreadMessagesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/tasks/{task_id}/thread_messages/{id}/` · `tasks_thread_messages_destroy`</sub>

## `posthog.tasksThreadMessagesSendToAgentCreate`

Send a thread message to the agent

```ts
posthog.tasksThreadMessagesSendToAgentCreate(): Promise<{ id: string; task: string; author_kind: string; event: string; payload: { [key: string]: unknown }; content: string; created_at: string; author?: { id: number; uuid: string; distinct_id: string; first_name: string; last_name: string; email: string; is_email_verified?: boolean | null; hedgehog_config?: { [key: string]: unknown } | null; role_at_organization?: string | null } | null; forwarded_to_...>
```

<sub>`POST /api/projects/{project_id}/tasks/{task_id}/thread_messages/{id}/send_to_agent/` · `tasks_thread_messages_send_to_agent_create`</sub>

## `posthog.tasksActiveWizardRunRetrieve`

Get the team's active onboarding wizard cloud run

```ts
posthog.tasksActiveWizardRunRetrieve(): Promise<{ task_id: string; run_id: string; status: string; started_at?: string | null }>
```

<sub>`GET /api/projects/{project_id}/tasks/active_wizard_run/` · `tasks_active_wizard_run_retrieve`</sub>

## `posthog.tasksPinnedRetrieve`

List pinned tasks

```ts
posthog.tasksPinnedRetrieve(): Promise<{ task_ids: (string)[] }>
```

<sub>`GET /api/projects/{project_id}/tasks/pinned/` · `tasks_pinned_retrieve`</sub>

## `posthog.tasksRepositoriesRetrieve`

List distinct task repositories

```ts
posthog.tasksRepositoriesRetrieve(): Promise<{ repositories: (string)[] }>
```

<sub>`GET /api/projects/{project_id}/tasks/repositories/` · `tasks_repositories_retrieve`</sub>

## `posthog.tasksRepositoryReadinessRetrieve`

Get repository readiness

```ts
posthog.tasksRepositoryReadinessRetrieve(): Promise<{ repository: string; classification: string; excluded: boolean; coreSuggestions: { state: "needs_setup" | "detected" | "waiting_for_data" | "ready" | "not_applicable" | "unknown"; estimated: boolean; reason: string; evidence?: { [key: string]: unknown } }; replayInsights: { state: "needs_setup" | "detected" | "waiting_for_data" | "ready" | "not_applicable" | "unknown"; estimated: boolean; reason...>
```

<sub>`GET /api/projects/{project_id}/tasks/repository_readiness/` · `tasks_repository_readiness_retrieve`</sub>

## `posthog.tasksSlackThreadContextRetrieve`

Resolve a Slack thread to its task, runs, and Temporal workflows

```ts
posthog.tasksSlackThreadContextRetrieve(): Promise<{ thread: { url: string; channel: string; thread_ts: string; slack_workspace_id: string | null; mentioning_slack_user_id: string | null }; task: { id: string; team_id: number; title: string; repository: string | null; origin_product: string; created_at: string; url: string } | null; runs: ({ id: string; status: string; created_at: string; completed_at: string | null; sandbox_url: string | null; p...>
```

<sub>`GET /api/projects/{project_id}/tasks/slack_thread_context/` · `tasks_slack_thread_context_retrieve`</sub>

## `posthog.tasksSummariesCreate`

Fetch task summaries by ID

```ts
posthog.tasksSummariesCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; title: string; repository: string | null; created_at: string; updated_at: string; origin_product?: string; latest_run?: { status: "not_started" | "queued" | "in_progress" | "completed" | "failed" | "cancelled" | null; environment: "local" | "cloud" | null } | null })[] }>
```

<sub>`POST /api/projects/{project_id}/tasks/summaries/` · `tasks_summaries_create`</sub>

## `posthog.tasksWarmCreate`

Warm a task sandbox

```ts
posthog.tasksWarmCreate(): Promise<{ task_id: string; run_id: string }>
```

<sub>`POST /api/projects/{project_id}/tasks/warm/` · `tasks_warm_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

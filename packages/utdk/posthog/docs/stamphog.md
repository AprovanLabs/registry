# Stamphog

20 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.stamphogDigestChannelsList`

Per-audience Slack destinations for the daily merged-PR digest.

```ts
posthog.stamphogDigestChannelsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; audience_key: string; slack_integration_id: number; slack_channel_id: string; slack_channel_name?: string; resolution_source: "manual" | "slack_name_match" | "stamphog_config" | "owners_contact"; enabled?: boolean; last_digest_at: string | null; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/stamphog/digest_channels/` · `stamphog_digest_channels_list`</sub>

## `posthog.stamphogDigestChannelsCreate`

Per-audience Slack destinations for the daily merged-PR digest.

```ts
posthog.stamphogDigestChannelsCreate(): Promise<{ id: string; audience_key: string; slack_integration_id: number; slack_channel_id: string; slack_channel_name?: string; resolution_source: "manual" | "slack_name_match" | "stamphog_config" | "owners_contact"; enabled?: boolean; last_digest_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/stamphog/digest_channels/` · `stamphog_digest_channels_create`</sub>

## `posthog.stamphogDigestChannelsDestroy`

Per-audience Slack destinations for the daily merged-PR digest.

```ts
posthog.stamphogDigestChannelsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/stamphog/digest_channels/{id}/` · `stamphog_digest_channels_destroy`</sub>

## `posthog.stamphogDigestChannelsRetrieve`

Per-audience Slack destinations for the daily merged-PR digest.

```ts
posthog.stamphogDigestChannelsRetrieve(): Promise<{ id: string; audience_key: string; slack_integration_id: number; slack_channel_id: string; slack_channel_name?: string; resolution_source: "manual" | "slack_name_match" | "stamphog_config" | "owners_contact"; enabled?: boolean; last_digest_at: string | null; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/stamphog/digest_channels/{id}/` · `stamphog_digest_channels_retrieve`</sub>

## `posthog.stamphogDigestChannelsPartialUpdate`

Per-audience Slack destinations for the daily merged-PR digest.

```ts
posthog.stamphogDigestChannelsPartialUpdate(): Promise<{ id: string; audience_key: string; slack_integration_id: number; slack_channel_id: string; slack_channel_name?: string; resolution_source: "manual" | "slack_name_match" | "stamphog_config" | "owners_contact"; enabled?: boolean; last_digest_at: string | null; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/stamphog/digest_channels/{id}/` · `stamphog_digest_channels_partial_update`</sub>

## `posthog.stamphogDigestChannelsUpdate`

Per-audience Slack destinations for the daily merged-PR digest.

```ts
posthog.stamphogDigestChannelsUpdate(): Promise<{ id: string; audience_key: string; slack_integration_id: number; slack_channel_id: string; slack_channel_name?: string; resolution_source: "manual" | "slack_name_match" | "stamphog_config" | "owners_contact"; enabled?: boolean; last_digest_at: string | null; created_at: string; updated_at: string }>
```

<sub>`PUT /api/projects/{project_id}/stamphog/digest_channels/{id}/` · `stamphog_digest_channels_update`</sub>

## `posthog.stamphogDigestRunsList`

Read-only history of posted (or attempted) digests, filterable by digest channel.

```ts
posthog.stamphogDigestRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; digest_channel: string; status: "pending" | "completed" | "failed"; pr_count: number; slack_message_ts: string; error: string; created_at: string; posted_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/stamphog/digest_runs/` · `stamphog_digest_runs_list`</sub>

## `posthog.stamphogDigestRunsRetrieve`

Read-only history of posted (or attempted) digests, filterable by digest channel.

```ts
posthog.stamphogDigestRunsRetrieve(): Promise<{ id: string; digest_channel: string; status: "pending" | "completed" | "failed"; pr_count: number; slack_message_ts: string; error: string; created_at: string; posted_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/stamphog/digest_runs/{id}/` · `stamphog_digest_runs_retrieve`</sub>

## `posthog.stamphogPullRequestsList`

Read-only pull requests stamphog knows about, filterable by PR number and merge state.

```ts
posthog.stamphogPullRequestsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; repository: string; pr_number: number; title: string; author_login: string; pr_url: string; head_branch: string; merged: boolean; merged_at: string | null; merge_commit_sha: string; additions: number; deletions: number; changed_files: number; audience_key: string; digest_run: string | null; created_at: string...>
```

<sub>`GET /api/projects/{project_id}/stamphog/pull_requests/` · `stamphog_pull_requests_list`</sub>

## `posthog.stamphogPullRequestsRetrieve`

Read-only pull requests stamphog knows about, filterable by PR number and merge state.

```ts
posthog.stamphogPullRequestsRetrieve(): Promise<{ id: string; repository: string; pr_number: number; title: string; author_login: string; pr_url: string; head_branch: string; merged: boolean; merged_at: string | null; merge_commit_sha: string; additions: number; deletions: number; changed_files: number; audience_key: string; digest_run: string | null; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/stamphog/pull_requests/{id}/` · `stamphog_pull_requests_retrieve`</sub>

## `posthog.stamphogRepoConfigsList`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; provider?: string; repository: string; enabled?: boolean; installation_id: string; digest_enabled?: boolean; review_mode?: "all" | "label"; trigger_label?: string; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/stamphog/repo_configs/` · `stamphog_repo_configs_list`</sub>

## `posthog.stamphogRepoConfigsCreate`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsCreate(): Promise<{ id: string; provider?: string; repository: string; enabled?: boolean; installation_id: string; digest_enabled?: boolean; review_mode?: "all" | "label"; trigger_label?: string; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/stamphog/repo_configs/` · `stamphog_repo_configs_create`</sub>

## `posthog.stamphogRepoConfigsDestroy`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/stamphog/repo_configs/{id}/` · `stamphog_repo_configs_destroy`</sub>

## `posthog.stamphogRepoConfigsRetrieve`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsRetrieve(): Promise<{ id: string; provider?: string; repository: string; enabled?: boolean; installation_id: string; digest_enabled?: boolean; review_mode?: "all" | "label"; trigger_label?: string; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/stamphog/repo_configs/{id}/` · `stamphog_repo_configs_retrieve`</sub>

## `posthog.stamphogRepoConfigsPartialUpdate`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsPartialUpdate(): Promise<{ id: string; provider?: string; repository: string; enabled?: boolean; installation_id: string; digest_enabled?: boolean; review_mode?: "all" | "label"; trigger_label?: string; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/stamphog/repo_configs/{id}/` · `stamphog_repo_configs_partial_update`</sub>

## `posthog.stamphogRepoConfigsUpdate`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsUpdate(): Promise<{ id: string; provider?: string; repository: string; enabled?: boolean; installation_id: string; digest_enabled?: boolean; review_mode?: "all" | "label"; trigger_label?: string; created_at: string; updated_at: string }>
```

<sub>`PUT /api/projects/{project_id}/stamphog/repo_configs/{id}/` · `stamphog_repo_configs_update`</sub>

## `posthog.stamphogRepoConfigsInstallInfoRetrieve`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsInstallInfoRetrieve(): Promise<{ app_slug: string; install_url: string; authorize_url: string }>
```

<sub>`GET /api/projects/{project_id}/stamphog/repo_configs/install_info/` · `stamphog_repo_configs_install_info_retrieve`</sub>

## `posthog.stamphogRepoConfigsSyncInstallationCreate`

Per-repo stamphog settings — enable/disable review, GitHub App installation, policy overrides.

```ts
posthog.stamphogRepoConfigsSyncInstallationCreate(): Promise<{ synced: ({ id: string; provider?: string; repository: string; enabled?: boolean; installation_id: string; digest_enabled?: boolean; review_mode?: "all" | "label"; trigger_label?: string; created_at: string; updated_at: string })[]; skipped: (string)[]; app_not_installed: boolean; installations: ({ id: string; account_login: string })[] }>
```

<sub>`POST /api/projects/{project_id}/stamphog/repo_configs/sync_installation/` · `stamphog_repo_configs_sync_installation_create`</sub>

## `posthog.stamphogReviewRunsList`

Read-only history of stamphog review runs, filterable by repository, PR number, and status.

```ts
posthog.stamphogReviewRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; pull_request: string; repository: string; pr_number: number; pr_url: string; head_sha: string; head_branch: string; delivery_id: string | null; status: "queued" | "gated" | "reviewing" | "completed" | "failed" | "superseded"; verdict: "none" | "approved" | "refused" | "escalate" | "wait" | "error"; gate_resul...>
```

<sub>`GET /api/projects/{project_id}/stamphog/review_runs/` · `stamphog_review_runs_list`</sub>

## `posthog.stamphogReviewRunsRetrieve`

Read-only history of stamphog review runs, filterable by repository, PR number, and status.

```ts
posthog.stamphogReviewRunsRetrieve(): Promise<{ id: string; pull_request: string; repository: string; pr_number: number; pr_url: string; head_sha: string; head_branch: string; delivery_id: string | null; status: "queued" | "gated" | "reviewing" | "completed" | "failed" | "superseded"; verdict: "none" | "approved" | "refused" | "escalate" | "wait" | "error"; gate_result: { gate_blocked: boolean; final_verdict: string }; output: { stamphog_ver...>
```

<sub>`GET /api/projects/{project_id}/stamphog/review_runs/{id}/` · `stamphog_review_runs_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

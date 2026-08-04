# Signals

57 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.signalsProcessingList`

Return current processing state including pause status.

```ts
posthog.signalsProcessingList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ paused_until: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/signals/processing/` · `signals_processing_list`</sub>

## `posthog.signalsProcessingPauseDestroy`

View and control signal processing pipeline state for a team.

```ts
posthog.signalsProcessingPauseDestroy(): Promise<{ status: string; paused_until: string }>
```

<sub>`DELETE /api/projects/{project_id}/signals/processing/pause/` · `signals_processing_pause_destroy`</sub>

## `posthog.signalsProcessingPauseUpdate`

View and control signal processing pipeline state for a team.

```ts
posthog.signalsProcessingPauseUpdate(): Promise<{ status: string; paused_until: string }>
```

<sub>`PUT /api/projects/{project_id}/signals/processing/pause/` · `signals_processing_pause_update`</sub>

## `posthog.signalsReportsList`

```ts
posthog.signalsReportsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; title: string | null; summary: string | null; status: "potential" | "candidate" | "in_progress" | "pending_input" | "ready" | "resolved" | "failed" | "deleted" | "suppressed"; total_weight: number; signal_count: number; signals_at_run: number; created_at: string; updated_at: string; artefact_count: number; ch...>
```

<sub>`GET /api/projects/{project_id}/signals/reports/` · `signals_reports_list`</sub>

## `posthog.signalsReportsRetrieve`

```ts
posthog.signalsReportsRetrieve(): Promise<{ id: string; title: string | null; summary: string | null; status: "potential" | "candidate" | "in_progress" | "pending_input" | "ready" | "resolved" | "failed" | "deleted" | "suppressed"; total_weight: number; signal_count: number; signals_at_run: number; created_at: string; updated_at: string; artefact_count: number; charts: ({ chart_id: string; title: string; query: unknown; caption?: string ...>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{id}/` · `signals_reports_retrieve`</sub>

## `posthog.signalsReportsPartialUpdate`

Edit a report's title or summary

```ts
posthog.signalsReportsPartialUpdate(): Promise<{ id: string; title: string | null; summary: string | null; status: "potential" | "candidate" | "in_progress" | "pending_input" | "ready" | "resolved" | "failed" | "deleted" | "suppressed"; total_weight: number; signal_count: number; signals_at_run: number; created_at: string; updated_at: string; artefact_count: number; charts: ({ chart_id: string; title: string; query: unknown; caption?: string ...>
```

<sub>`PATCH /api/projects/{project_id}/signals/reports/{id}/` · `signals_reports_partial_update`</sub>

## `posthog.signalsReportPrChecks`

Fetch CI checks for a report's implementation PR

```ts
posthog.signalsReportPrChecks(): Promise<{ checks: ({ name: string; status: string | null; conclusion: string | null; url: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{id}/pr_checks/` · `signals_report_pr_checks`</sub>

## `posthog.signalsReportPrComments`

Fetch comments for a report's implementation PR

```ts
posthog.signalsReportPrComments(): Promise<{ comments: ({ id: string; author: string | null; author_avatar_url: string | null; body: string; created_at: string | null; url: string | null; comment_type: "conversation" | "review"; path: string | null; line: number | null; start_line: number | null; side: "LEFT" | "RIGHT" | null; diff_hunk: string | null; in_reply_to_id: string | null; commit_id: string | null; reactions: ({ id: string; cont...>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{id}/pr_comments/` · `signals_report_pr_comments`</sub>

## `posthog.signalsReportPrReviewCommentsCreate`

Post an inline review comment on a report's implementation PR

```ts
posthog.signalsReportPrReviewCommentsCreate(): Promise<{ comment: { id: string; author: string | null; author_avatar_url: string | null; body: string; created_at: string | null; url: string | null; comment_type: "conversation" | "review"; path: string | null; line: number | null; start_line: number | null; side: "LEFT" | "RIGHT" | null; diff_hunk: string | null; in_reply_to_id: string | null; commit_id: string | null; reactions: ({ id: string; conten...>
```

<sub>`POST /api/projects/{project_id}/signals/reports/{id}/pr_review_comments/` · `signals_report_pr_review_comments_create`</sub>

## `posthog.signalsReportPrReviewCommentDestroy`

Delete one of the requesting user's own review comments

```ts
posthog.signalsReportPrReviewCommentDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/signals/reports/{id}/pr_review_comments/{comment_id}/` · `signals_report_pr_review_comment_destroy`</sub>

## `posthog.signalsReportPrReviewCommentUpdate`

Edit one of the requesting user's own review comments

```ts
posthog.signalsReportPrReviewCommentUpdate(): Promise<{ comment: { id: string; author: string | null; author_avatar_url: string | null; body: string; created_at: string | null; url: string | null; comment_type: "conversation" | "review"; path: string | null; line: number | null; start_line: number | null; side: "LEFT" | "RIGHT" | null; diff_hunk: string | null; in_reply_to_id: string | null; commit_id: string | null; reactions: ({ id: string; conten...>
```

<sub>`PATCH /api/projects/{project_id}/signals/reports/{id}/pr_review_comments/{comment_id}/` · `signals_report_pr_review_comment_update`</sub>

## `posthog.signalsReportPrReviewCommentReactionsCreate`

React to a review comment as the requesting user

```ts
posthog.signalsReportPrReviewCommentReactionsCreate(): Promise<{ reaction: { id: string; content: string; user_login: string | null } }>
```

<sub>`POST /api/projects/{project_id}/signals/reports/{id}/pr_review_comments/{comment_id}/reactions/` · `signals_report_pr_review_comment_reactions_create`</sub>

## `posthog.signalsReportPrReviewCommentReactionDestroy`

Remove one of the requesting user's own reactions from a review comment

```ts
posthog.signalsReportPrReviewCommentReactionDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/signals/reports/{id}/pr_review_comments/{comment_id}/reactions/{reaction_id}/` · `signals_report_pr_review_comment_reaction_destroy`</sub>

## `posthog.signalsReportsRefundCreate`

Refund a report's implementation PR

```ts
posthog.signalsReportsRefundCreate(): Promise<{ id: string; reason: "pr_incorrect" | "pr_not_useful" | "duplicate" | "other"; note: string; billing_path: "excluded" | "credited"; credits: number; pr_url: string; pr_run_created_at: string; credit_amount_usd: string | null; billing_synced: boolean; created_at: string; already_refunded: boolean }>
```

<sub>`POST /api/projects/{project_id}/signals/reports/{id}/refund/` · `signals_reports_refund_create`</sub>

## `posthog.signalsReportsSignalsRetrieve`

List a report's signals

```ts
posthog.signalsReportsSignalsRetrieve(): Promise<{ report: { id: string; title: string | null; summary: string | null; status: "potential" | "candidate" | "in_progress" | "pending_input" | "ready" | "resolved" | "failed" | "deleted" | "suppressed"; total_weight: number; signal_count: number; signals_at_run: number; created_at: string; updated_at: string; artefact_count: number; charts: ({ chart_id: string; title: string; query: unknown; caption...>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{id}/signals/` · `signals_reports_signals_retrieve`</sub>

## `posthog.signalsReportsStateCreate`

Transition a report to a new state. The model validates allowed transitions. The request body is validated by SignalReportStateRequestSerializer — only the fields it declares (state, dismissal_reason, dismissal_note, snooze_for) are read, and only snooze_for is ever forwarded to transition_to. Any other key is ignored, so internal transition_to kwargs (reset_weight, error, ...) can't be injected. Body: { "state": "suppressed" | "potential" | "resolved", # Optional dismissal feedback (honored when state == "suppressed", "potential", or "resolved"): "dismissal_reason": "<canonical reason code, see SIGNAL_REPORT_DISMISSAL_REASON_CHOICES>", "dismissal_note": "free-form text", # Optional, only honored for state == "potential": "snooze_for": <number of additional signals before re-promotion>, }

```ts
posthog.signalsReportsStateCreate(): Promise<{ id: string; title: string | null; summary: string | null; status: "potential" | "candidate" | "in_progress" | "pending_input" | "ready" | "resolved" | "failed" | "deleted" | "suppressed"; total_weight: number; signal_count: number; signals_at_run: number; created_at: string; updated_at: string; artefact_count: number; charts: ({ chart_id: string; title: string; query: unknown; caption?: string ...>
```

<sub>`POST /api/projects/{project_id}/signals/reports/{id}/state/` · `signals_reports_state_create`</sub>

## `posthog.signalsReportArtefactsList`

List a report's artefacts

```ts
posthog.signalsReportArtefactsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; type: "video_segment" | "safety_judgment" | "actionability_judgment" | "priority_judgment" | "signal_finding" | "repo_selection" | "suggested_reviewers" | "dismissal" | "code_reference" | "commit" | "task_run" | "note" | "title_change" | "summary_change" | "code_review" | "related_to"; content: { [key: string...>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{report_id}/artefacts/` · `signals_report_artefacts_list`</sub>

## `posthog.signalsReportArtefactsCreate`

Append an artefact to a report

```ts
posthog.signalsReportArtefactsCreate(): Promise<{ id: string; report_id: string; type: string; content: unknown; created_at: string; updated_at: string | null; task_id: string | null }>
```

<sub>`POST /api/projects/{project_id}/signals/reports/{report_id}/artefacts/` · `signals_report_artefacts_create`</sub>

## `posthog.signalsReportArtefactsDestroy`

Delete an artefact

```ts
posthog.signalsReportArtefactsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/` · `signals_report_artefacts_destroy`</sub>

## `posthog.signalsReportArtefactsRetrieve`

Get a single artefact

```ts
posthog.signalsReportArtefactsRetrieve(): Promise<{ id: string; type: "video_segment" | "safety_judgment" | "actionability_judgment" | "priority_judgment" | "signal_finding" | "repo_selection" | "suggested_reviewers" | "dismissal" | "code_reference" | "commit" | "task_run" | "note" | "title_change" | "summary_change" | "code_review" | "related_to"; content: { [key: string]: unknown } | (unknown)[]; created_at: string; updated_at: string | null; ...>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/` · `signals_report_artefacts_retrieve`</sub>

## `posthog.signalsReportArtefactsPartialUpdate`

Replace an artefact's content

```ts
posthog.signalsReportArtefactsPartialUpdate(): Promise<{ id: string; report_id: string; type: string; content: unknown; created_at: string; updated_at: string | null; task_id: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/` · `signals_report_artefacts_partial_update`</sub>

## `posthog.signalsReportArtefactsDiff`

Fetch the diff for a commit artefact

```ts
posthog.signalsReportArtefactsDiff(): Promise<{ diff: string; truncated: boolean }>
```

<sub>`GET /api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/diff/` · `signals_report_artefacts_diff`</sub>

## `posthog.signalsReportsBulkStateCreate`

Transition many reports to a new state in one call. Each id is processed independently: a report whose transition isn't allowed from its current status is reported as `skipped` (a 409 on the single-report endpoint) and the rest still go through. Returns one result per requested id (in request order, after de-duplication) plus per-outcome counts. The whole call is 200 even on partial failure — inspect `results` / the counts to see what happened.

```ts
posthog.signalsReportsBulkStateCreate(): Promise<{ results: ({ id: string; outcome: string; status?: string | null; detail?: string | null })[]; transitioned_count: number; skipped_count: number; failed_count: number; not_found_count: number }>
```

<sub>`POST /api/projects/{project_id}/signals/reports/bulk-state/` · `signals_reports_bulk_state_create`</sub>

## `posthog.signalsReportsRefundSummaryRetrieve`

Summarize credited PR refunds for the billing period

```ts
posthog.signalsReportsRefundSummaryRetrieve(): Promise<{ credited_refund_count: number; credited_credits: number; period_billable_credits: number }>
```

<sub>`GET /api/projects/{project_id}/signals/reports/refund-summary/` · `signals_reports_refund_summary_retrieve`</sub>

## `posthog.signalsScoutCreate`

Create a scout

```ts
posthog.signalsScoutCreate(): Promise<{ created: boolean; skill: { id: string; name: string; description: string; version: number; allowed_tools: (string)[] }; config: { id: string; skill_name: string; description: string; scout_origin: "canonical" | "custom"; enabled: boolean; status: "active" | "pending_pause" | "paused_by_system" | "paused_by_user"; pause_reason: "no_output" | "ignored" | "repeated_failures" | null; emit: boolean;...>
```

<sub>`POST /api/projects/{project_id}/signals/scout/` · `signals_scout_create`</sub>

## `posthog.signalsScoutConfigList`

List scout configs

```ts
posthog.signalsScoutConfigList(): Promise<({ id: string; skill_name: string; description: string; scout_origin: "canonical" | "custom"; enabled: boolean; status: "active" | "pending_pause" | "paused_by_system" | "paused_by_user"; pause_reason: "no_output" | "ignored" | "repeated_failures" | null; emit: boolean; run_interval_minutes: number; run_cron_schedule: string | null; output_destinations: { slack?: { integration_id: number; channel...>
```

<sub>`GET /api/projects/{project_id}/signals/scout/configs/` · `signals_scout_config_list`</sub>

## `posthog.signalsScoutConfigCreate`

Create a scout config

```ts
posthog.signalsScoutConfigCreate(): Promise<{ id: string; skill_name: string; description: string; scout_origin: "canonical" | "custom"; enabled: boolean; status: "active" | "pending_pause" | "paused_by_system" | "paused_by_user"; pause_reason: "no_output" | "ignored" | "repeated_failures" | null; emit: boolean; run_interval_minutes: number; run_cron_schedule: string | null; output_destinations: { slack?: { integration_id: number; channel?...>
```

<sub>`POST /api/projects/{project_id}/signals/scout/configs/` · `signals_scout_config_create`</sub>

## `posthog.signalsScoutConfigDestroy`

Delete a scout config

```ts
posthog.signalsScoutConfigDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/signals/scout/configs/{id}/` · `signals_scout_config_destroy`</sub>

## `posthog.signalsScoutConfigUpdate`

Update a scout config

```ts
posthog.signalsScoutConfigUpdate(): Promise<{ id: string; skill_name: string; description: string; scout_origin: "canonical" | "custom"; enabled: boolean; status: "active" | "pending_pause" | "paused_by_system" | "paused_by_user"; pause_reason: "no_output" | "ignored" | "repeated_failures" | null; emit: boolean; run_interval_minutes: number; run_cron_schedule: string | null; output_destinations: { slack?: { integration_id: number; channel?...>
```

<sub>`PATCH /api/projects/{project_id}/signals/scout/configs/{id}/` · `signals_scout_config_update`</sub>

## `posthog.signalsScoutConfigRun`

Run a scout now

```ts
posthog.signalsScoutConfigRun(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/signals/scout/configs/{id}/run/` · `signals_scout_config_run`</sub>

## `posthog.signalsScoutConfigSync`

Sync scout configs

```ts
posthog.signalsScoutConfigSync(): Promise<({ id: string; skill_name: string; description: string; scout_origin: "canonical" | "custom"; enabled: boolean; status: "active" | "pending_pause" | "paused_by_system" | "paused_by_user"; pause_reason: "no_output" | "ignored" | "repeated_failures" | null; emit: boolean; run_interval_minutes: number; run_cron_schedule: string | null; output_destinations: { slack?: { integration_id: number; channel...>
```

<sub>`POST /api/projects/{project_id}/signals/scout/configs/sync/` · `signals_scout_config_sync`</sub>

## `posthog.signalsScoutMembersList`

List project members for reviewer routing

```ts
posthog.signalsScoutMembersList(): Promise<({ user_uuid: string; email: string; first_name: string; last_name: string; github_login: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/signals/scout/members/` · `signals_scout_members_list`</sub>

## `posthog.signalsScoutMetadataGet`

Get scout metadata

```ts
posthog.signalsScoutMetadataGet(): Promise<{ enrolled: boolean; banner_message: string | null; limits: { max_runs_per_tick: number; max_runs_per_day: number | null; runs_today: number; runs_remaining_today: number | null } }>
```

<sub>`GET /api/projects/{project_id}/signals/scout/metadata/current/` · `signals_scout_metadata_get`</sub>

## `posthog.signalsScoutNotesList`

List scout notes

```ts
posthog.signalsScoutNotesList(): Promise<({ id: string; skill_name: string; content: string; created_at: string | null; expires_at: string | null; created_by_name: string | null; origin: string })[]>
```

<sub>`GET /api/projects/{project_id}/signals/scout/notes/` · `signals_scout_notes_list`</sub>

## `posthog.signalsScoutNotesCreate`

Leave a note for the scouts

```ts
posthog.signalsScoutNotesCreate(): Promise<{ id: string; skill_name: string; content: string; created_at: string | null; expires_at: string | null; created_by_name: string | null; origin: string }>
```

<sub>`POST /api/projects/{project_id}/signals/scout/notes/` · `signals_scout_notes_create`</sub>

## `posthog.signalsScoutNotesDestroy`

Delete a scout note

```ts
posthog.signalsScoutNotesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/signals/scout/notes/{id}/` · `signals_scout_notes_destroy`</sub>

## `posthog.signalsScoutProjectProfileGet`

Get the current project profile

```ts
posthog.signalsScoutProjectProfileGet(): Promise<{ profile_id: string; computed_at: string; expires_at: string; source_version: string; payload: { inventory: { project_context: { product_description: string | null; app_urls: (string)[] }; products_in_use: (string)[]; product_intents: ({ product_type: string; activated_at: string | null; created_at: string | null })[]; integrations: ({ kind: string; created_at: string | null })[]; external_data_...>
```

<sub>`GET /api/projects/{project_id}/signals/scout/project_profile/current/` · `signals_scout_project_profile_get`</sub>

## `posthog.signalsScoutRunsList`

Search recent agent runs

```ts
posthog.signalsScoutRunsList(): Promise<({ run_id: string; skill_name: string; skill_version: number; status: "not_started" | "queued" | "in_progress" | "completed" | "failed" | "cancelled"; created_at: string; started_at: string; completed_at: string | null; task_id?: string | null; task_run_id?: string | null; task_url?: string | null; summary: string; error?: string | null; failure_reason?: string | null; emitted_count: number; emit...>
```

<sub>`GET /api/projects/{project_id}/signals/scout/runs/` · `signals_scout_runs_list`</sub>

## `posthog.signalsScoutRunsRetrieve`

Get a run by ID

```ts
posthog.signalsScoutRunsRetrieve(): Promise<{ run_id: string; skill_name: string; skill_version: number; status: "not_started" | "queued" | "in_progress" | "completed" | "failed" | "cancelled"; created_at: string; started_at: string; completed_at: string | null; task_id?: string | null; task_run_id?: string | null; task_url?: string | null; summary: string; error?: string | null; failure_reason?: string | null; emitted_count: number; emitt...>
```

<sub>`GET /api/projects/{project_id}/signals/scout/runs/{run_id}/` · `signals_scout_runs_retrieve`</sub>

## `posthog.signalsScoutEditReport`

Edit an existing report for a run

```ts
posthog.signalsScoutEditReport(): Promise<{ report_id: string; updated_fields: (string)[]; note_appended: boolean; reviewers_set: boolean; charts_set: number | null }>
```

<sub>`POST /api/projects/{project_id}/signals/scout/runs/{run_id}/edit-report/` · `signals_scout_edit_report`</sub>

## `posthog.signalsScoutRunsEmissions`

List a run's emitted findings

```ts
posthog.signalsScoutRunsEmissions(): Promise<({ id: string; run_id: string; finding_id: string; description: string; weight: number; confidence: number; severity: "P0" | "P1" | "P2" | "P3" | "P4" | null; tags: (string)[]; source_id: string; emitted_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/signals/scout/runs/{run_id}/emissions/` · `signals_scout_runs_emissions`</sub>

## `posthog.signalsScoutRunsEmissionReports`

List the inbox reports a run's findings linked to

```ts
posthog.signalsScoutRunsEmissionReports(): Promise<({ finding_id: string; source_id: string; report: { id: string; title: string | null; status: string } | null })[]>
```

<sub>`GET /api/projects/{project_id}/signals/scout/runs/{run_id}/emissions/reports/` · `signals_scout_runs_emission_reports`</sub>

## `posthog.signalsScoutEmitReport`

Author a full report for a run

```ts
posthog.signalsScoutEmitReport(): Promise<{ report_id: string | null; report_status: string | null; emitted: boolean; skipped_reason: string | null; safety_explanation: string | null; remediation: string | null }>
```

<sub>`POST /api/projects/{project_id}/signals/scout/runs/{run_id}/emit-report/` · `signals_scout_emit_report`</sub>

## `posthog.signalsScoutEmitSignal`

Emit a finding for a run

```ts
posthog.signalsScoutEmitSignal(): Promise<{ finding_id: string; emitted: boolean; skipped_reason: string | null; remediation: string | null }>
```

<sub>`POST /api/projects/{project_id}/signals/scout/runs/{run_id}/emit-signal/` · `signals_scout_emit_signal`</sub>

## `posthog.signalsScoutRunsEmissionsBatch`

List emitted findings for many runs at once

```ts
posthog.signalsScoutRunsEmissionsBatch(): Promise<({ id: string; run_id: string; finding_id: string; description: string; weight: number; confidence: number; severity: "P0" | "P1" | "P2" | "P3" | "P4" | null; tags: (string)[]; source_id: string; emitted_at: string })[]>
```

<sub>`POST /api/projects/{project_id}/signals/scout/runs/emissions/batch/` · `signals_scout_runs_emissions_batch`</sub>

## `posthog.signalsScoutRunsRecentEmissions`

List recent emitted findings across all runs

```ts
posthog.signalsScoutRunsRecentEmissions(): Promise<({ id: string; run_id: string; finding_id: string; description: string; weight: number; confidence: number; severity: "P0" | "P1" | "P2" | "P3" | "P4" | null; tags: (string)[]; source_id: string; emitted_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/signals/scout/runs/emissions/recent/` · `signals_scout_runs_recent_emissions`</sub>

## `posthog.signalsScoutRunsEmissionReportsBatch`

List the inbox reports many runs' findings linked to

```ts
posthog.signalsScoutRunsEmissionReportsBatch(): Promise<({ finding_id: string; source_id: string; report: { id: string; title: string | null; status: string } | null })[]>
```

<sub>`POST /api/projects/{project_id}/signals/scout/runs/emissions/reports/batch/` · `signals_scout_runs_emission_reports_batch`</sub>

## `posthog.signalsScoutRunsFindingsSummary`

Summarise recent scout output across the fleet

```ts
posthog.signalsScoutRunsFindingsSummary(): Promise<{ count: number; scout_count: number; authored_report_count: number; edited_report_count: number; latest_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/signals/scout/runs/findings/summary/` · `signals_scout_runs_findings_summary`</sub>

## `posthog.signalsScoutScratchpadSearch`

Search the scout scratchpad

```ts
posthog.signalsScoutScratchpadSearch(): Promise<({ key: string; content: string; created_at: string | null; updated_at: string | null; created_by_run_id: string | null; created_by_skill?: string | null; created_by_run_url?: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/signals/scout/scratchpad/` · `signals_scout_scratchpad_search`</sub>

## `posthog.signalsScoutScratchpadRemember`

Remember a scratchpad entry

```ts
posthog.signalsScoutScratchpadRemember(): Promise<{ key: string; content: string; created_at: string | null; updated_at: string | null; created_by_run_id: string | null; created_by_skill?: string | null; created_by_run_url?: string | null }>
```

<sub>`POST /api/projects/{project_id}/signals/scout/scratchpad/` · `signals_scout_scratchpad_remember`</sub>

## `posthog.signalsScoutScratchpadForget`

Forget a scratchpad entry by key

```ts
posthog.signalsScoutScratchpadForget(): Promise<{ deleted: boolean }>
```

<sub>`POST /api/projects/{project_id}/signals/scout/scratchpad/forget/` · `signals_scout_scratchpad_forget`</sub>

## `posthog.signalsSourceConfigsList`

```ts
posthog.signalsSourceConfigsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; source_product: "session_replay" | "llm_analytics" | "github" | "linear" | "jira" | "zendesk" | "conversations" | "error_tracking" | "pganalyze" | "signals_scout" | "logs" | "health_checks" | "endpoints" | "replay_vision" | "analytics" | "freshdesk" | "freshservice" | "front" | "gorgias" | "kustomer" | "dixa"...>
```

<sub>`GET /api/projects/{project_id}/signals/source_configs/` · `signals_source_configs_list`</sub>

## `posthog.signalsSourceConfigsCreate`

```ts
posthog.signalsSourceConfigsCreate(): Promise<{ id: string; source_product: "session_replay" | "llm_analytics" | "github" | "linear" | "jira" | "zendesk" | "conversations" | "error_tracking" | "pganalyze" | "signals_scout" | "logs" | "health_checks" | "endpoints" | "replay_vision" | "analytics" | "freshdesk" | "freshservice" | "front" | "gorgias" | "kustomer" | "dixa" | "plain" | "gitlab" | "gitea" | "shortcut" | "sentry" | "rollbar" | "bugs...>
```

<sub>`POST /api/projects/{project_id}/signals/source_configs/` · `signals_source_configs_create`</sub>

## `posthog.signalsSourceConfigsDestroy`

```ts
posthog.signalsSourceConfigsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/signals/source_configs/{id}/` · `signals_source_configs_destroy`</sub>

## `posthog.signalsSourceConfigsRetrieve`

```ts
posthog.signalsSourceConfigsRetrieve(): Promise<{ id: string; source_product: "session_replay" | "llm_analytics" | "github" | "linear" | "jira" | "zendesk" | "conversations" | "error_tracking" | "pganalyze" | "signals_scout" | "logs" | "health_checks" | "endpoints" | "replay_vision" | "analytics" | "freshdesk" | "freshservice" | "front" | "gorgias" | "kustomer" | "dixa" | "plain" | "gitlab" | "gitea" | "shortcut" | "sentry" | "rollbar" | "bugs...>
```

<sub>`GET /api/projects/{project_id}/signals/source_configs/{id}/` · `signals_source_configs_retrieve`</sub>

## `posthog.signalsSourceConfigsPartialUpdate`

```ts
posthog.signalsSourceConfigsPartialUpdate(): Promise<{ id: string; source_product: "session_replay" | "llm_analytics" | "github" | "linear" | "jira" | "zendesk" | "conversations" | "error_tracking" | "pganalyze" | "signals_scout" | "logs" | "health_checks" | "endpoints" | "replay_vision" | "analytics" | "freshdesk" | "freshservice" | "front" | "gorgias" | "kustomer" | "dixa" | "plain" | "gitlab" | "gitea" | "shortcut" | "sentry" | "rollbar" | "bugs...>
```

<sub>`PATCH /api/projects/{project_id}/signals/source_configs/{id}/` · `signals_source_configs_partial_update`</sub>

## `posthog.signalsSourceConfigsUpdate`

```ts
posthog.signalsSourceConfigsUpdate(): Promise<{ id: string; source_product: "session_replay" | "llm_analytics" | "github" | "linear" | "jira" | "zendesk" | "conversations" | "error_tracking" | "pganalyze" | "signals_scout" | "logs" | "health_checks" | "endpoints" | "replay_vision" | "analytics" | "freshdesk" | "freshservice" | "front" | "gorgias" | "kustomer" | "dixa" | "plain" | "gitlab" | "gitea" | "shortcut" | "sentry" | "rollbar" | "bugs...>
```

<sub>`PUT /api/projects/{project_id}/signals/source_configs/{id}/` · `signals_source_configs_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

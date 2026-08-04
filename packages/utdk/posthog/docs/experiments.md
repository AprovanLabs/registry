# Experiments

34 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.experimentsList`

List experiments for the current project. Supports filtering by status and archival state.

```ts
posthog.experimentsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean ...>
```

<sub>`GET /api/projects/{project_id}/experiments/` · `experiments_list`</sub>

## `posthog.experimentsCreate`

Create a new experiment in draft status with optional metrics.

```ts
posthog.experimentsCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/` · `experiments_create`</sub>

## `posthog.experimentsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.experimentsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/experiments/{id}/` · `experiments_destroy`</sub>

## `posthog.experimentsRetrieve`

Retrieve a single experiment by ID, including its current status, metrics, feature flag, and results metadata.

```ts
posthog.experimentsRetrieve(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/` · `experiments_retrieve`</sub>

## `posthog.experimentsPartialUpdate`

Update an experiment. Use this to modify experiment properties such as name, description, metrics, variants, and configuration. Metrics can be added, changed and removed at any time. Feature-flag config (variants, rollout, payloads) is sent via the feature_flag object.

```ts
posthog.experimentsPartialUpdate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`PATCH /api/projects/{project_id}/experiments/{id}/` · `experiments_partial_update`</sub>

## `posthog.experimentsUpdate`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsUpdate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`PUT /api/projects/{project_id}/experiments/{id}/` · `experiments_update`</sub>

## `posthog.experimentsActivityRetrieve`

Change history for this experiment. Returns a paginated audit trail of changes to the experiment and its holdouts and shared metrics: who made each change, what changed (field-level before/after values), and when. Ordered newest first.

```ts
posthog.experimentsActivityRetrieve(): Promise<{ results: ({ id: string; user: { [key: string]: unknown } | null; activity: string; scope: string; item_id: string; detail?: { id: string; changes?: ({ type: string; action: string; field: string; before: unknown; after: unknown })[]; merge?: { type: string; source: unknown; target: unknown }; trigger?: { job_type: string; job_id: string; payload: unknown }; name: string; short_id: string; type:...>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/activity/` · `experiments_activity_retrieve`</sub>

## `posthog.experimentsArchiveCreate`

Archive an ended experiment. Hides the experiment from the default list view. The experiment can be restored at any time by updating archived=false. When the linked feature flag is still enabled, pass disable_feature_flag=true to also disable and archive it. Returns 400 if the experiment is already archived or has not ended yet.

```ts
posthog.experimentsArchiveCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/archive/` · `experiments_archive_create`</sub>

## `posthog.experimentsCopyToProjectCreate`

Copy an experiment into another project in the same organization as a new draft.

```ts
posthog.experimentsCopyToProjectCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/copy_to_project/` · `experiments_copy_to_project_create`</sub>

## `posthog.experimentsCreateExposureCohortForExperimentCreate`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsCreateExposureCohortForExperimentCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/create_exposure_cohort_for_experiment/` · `experiments_create_exposure_cohort_for_experiment_create`</sub>

## `posthog.experimentsDuplicateCreate`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsDuplicateCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/duplicate/` · `experiments_duplicate_create`</sub>

## `posthog.experimentsEndCreate`

End a running experiment without shipping a variant. Sets end_date to now and marks the experiment as stopped. The feature flag is NOT modified — users continue to see their assigned variants and exposure events ($feature_flag_called) continue to be recorded. However, only data up to end_date is included in experiment results. Use this when: - You want to freeze the results window without changing which variant users see. - A variant was already shipped manually via the feature flag UI and the experiment just needs to be marked complete. The end_date can be adjusted after ending via PATCH if it needs to be backdated (e.g. to match when the flag was actually paused). Other options: - Use ship_variant to end the experiment AND roll out a single variant to 100%% of users. - Use pause to deactivate the flag without ending the experiment (stops variant assignment but does not freeze results). Returns 400 if the experiment is not running.

```ts
posthog.experimentsEndCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/end/` · `experiments_end_create`</sub>

## `posthog.experimentsFlagCleanupTargetRetrieve`

Repository a flag-cleanup pull request for this experiment would be opened in. Resolution order: the experiment's saved repository, else the team's only connected GitHub repository. When the team has several repositories and none is saved (source=ambiguous), pass one via `repository` on end/ship_variant. Requires access to PostHog Desktop, like open_cleanup_pr (403 otherwise).

```ts
posthog.experimentsFlagCleanupTargetRetrieve(): Promise<{ repository: string | null; source: "explicit" | "single_repo" | "ambiguous" | "no_integration"; candidates: (string)[] }>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/flag_cleanup_target/` · `experiments_flag_cleanup_target_retrieve`</sub>

## `posthog.experimentsFlagCleanupTaskRetrieve`

Status of the flag-cleanup Desktop task opened for this experiment. When an experiment was ended or shipped with open_cleanup_pr=true, a Desktop task removes the experiment's feature-flag code and opens a draft pull request. This returns that task's latest run status and the PR URL once one is opened. Poll until is_terminal is true. Returns 404 when no cleanup task was opened.

```ts
posthog.experimentsFlagCleanupTaskRetrieve(): Promise<{ task_id: string; run_status: "not_started" | "queued" | "in_progress" | "completed" | "failed" | "cancelled"; is_terminal: boolean; pr_url: string | null; can_view_task: boolean }>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/flag_cleanup_task/` · `experiments_flag_cleanup_task_retrieve`</sub>

## `posthog.experimentsFreezeExposureCreate`

Freeze exposure on a running experiment while metrics keep flowing. Snapshots the already-exposed users into a static cohort and narrows the linked feature flag so only those users keep matching — new users can no longer enter the experiment. ``end_date`` is left null so long-term metrics (revenue/LTV/renewals/retention) keep accumulating. Enrolled users keep their assigned variant. The serialized status becomes 'exposure_frozen'. Returns 400 if the experiment is not running, exposure is already frozen, the experiment is group-aggregated (group flags cannot be frozen with a person cohort), or the exposed set is too large to snapshot synchronously.

```ts
posthog.experimentsFreezeExposureCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/freeze_exposure/` · `experiments_freeze_exposure_create`</sub>

## `posthog.experimentsLaunchCreate`

Launch a draft experiment. Validates the experiment is in draft state, activates its linked feature flag, sets start_date to the current server time, and transitions the experiment to running. Returns 400 if the experiment has already been launched or if the feature flag configuration is invalid (e.g. fewer than 2 variants).

```ts
posthog.experimentsLaunchCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/launch/` · `experiments_launch_create`</sub>

## `posthog.experimentsMetricsRecalculationCreate`

Trigger a batch recalculation of all metrics for this experiment. Returns 201 with the new pending recalculation, or 200 with the active one if a recalculation is already pending or in progress for this experiment. The response payload intentionally does not include the `results` array — at POST time the workflow has just been queued and no per-metric results exist yet. Clients should poll `GET metrics_recalculation/{id}/` for results as the workflow progresses.

```ts
posthog.experimentsMetricsRecalculationCreate(): Promise<{ id: string; experiment_id: number; status: "pending" | "in_progress" | "completed" | "failed"; total_metrics: number; completed_metrics: number; failed_metrics: number; metric_errors: unknown; metric_retries: unknown; trigger: "manual" | "agent_mcp" | "cold_run" | "stale_refresh" | "auto_refresh" | "config_change" | "experiment_launch" | "experiment_stop" | "experiment_update"; created_at: stri...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/metrics_recalculation/` · `experiments_metrics_recalculation_create`</sub>

## `posthog.experimentsMetricsRecalculationRetrieve`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsMetricsRecalculationRetrieve(): Promise<{ id: string; experiment_id: number; status: "pending" | "in_progress" | "completed" | "failed"; total_metrics: number; completed_metrics: number; failed_metrics: number; metric_errors: unknown; metric_retries: unknown; trigger: "manual" | "agent_mcp" | "cold_run" | "stale_refresh" | "auto_refresh" | "config_change" | "experiment_launch" | "experiment_stop" | "experiment_update"; created_at: stri...>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/metrics_recalculation/{recalculation_id}/` · `experiments_metrics_recalculation_retrieve`</sub>

## `posthog.experimentsMetricsRecalculationLatestRetrieve`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsMetricsRecalculationLatestRetrieve(): Promise<{ id: string; experiment_id: number; status: "pending" | "in_progress" | "completed" | "failed"; total_metrics: number; completed_metrics: number; failed_metrics: number; metric_errors: unknown; metric_retries: unknown; trigger: "manual" | "agent_mcp" | "cold_run" | "stale_refresh" | "auto_refresh" | "config_change" | "experiment_launch" | "experiment_stop" | "experiment_update"; created_at: stri...>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/metrics_recalculation/latest/` · `experiments_metrics_recalculation_latest_retrieve`</sub>

## `posthog.experimentsPauseCreate`

Pause a running experiment. Deactivates the linked feature flag so it is no longer returned by the /decide endpoint. Users fall back to the application default (typically the control experience), and no new exposure events are recorded (i.e. $feature_flag_called is not fired). Returns 400 if the experiment is not running or is already paused.

```ts
posthog.experimentsPauseCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/pause/` · `experiments_pause_create`</sub>

## `posthog.experimentsRecalculateTimeseriesCreate`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsRecalculateTimeseriesCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/recalculate_timeseries/` · `experiments_recalculate_timeseries_create`</sub>

## `posthog.experimentsResetCreate`

Reset an experiment back to draft state. Clears start/end dates, conclusion, archived flag, and any flag-cleanup task pointer. The feature flag is left unchanged — users continue to see their assigned variants. Previously collected events still exist but won't be included in results unless the start date is manually adjusted after re-launch. Returns 400 if the experiment is already in draft state.

```ts
posthog.experimentsResetCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/reset/` · `experiments_reset_create`</sub>

## `posthog.experimentsResumeCreate`

Resume a paused experiment. Reactivates the linked feature flag so it is returned by /decide again. Users are re-bucketed deterministically into the same variants they had before the pause, and exposure tracking resumes. Returns 400 if the experiment is not running or is not paused.

```ts
posthog.experimentsResumeCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/resume/` · `experiments_resume_create`</sub>

## `posthog.experimentsSessionBucketsCreate`

Session recordings of this experiment matching a bucket. Answers the questions a recordings query can't express on its own — "fired any of these metrics", "fired none of them", "entered the funnel but never completed it in this session" — by returning a bounded, most-recent-first list of session IDs to pass back as a recordings query's session_ids. POST because the metric list doesn't fit a query string; the endpoint only reads. Session-scoped and goal-free: the set describes what happened in each session, while the experiment analysis counts per person over the whole run window. A session can be in the drop-off bucket while the same person converts in a later one.

```ts
posthog.experimentsSessionBucketsCreate(): Promise<{ session_ids: (string)[]; truncated: boolean; considered_metrics: ({ metric_uuid: string; metric_name: string })[]; excluded_metrics: ({ metric_uuid: string; metric_name: string; reason: string })[]; date_from: string; date_to: string; filter_test_accounts: boolean; used_exposure_fallback: boolean }>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/session_buckets/` · `experiments_session_buckets_create`</sub>

## `posthog.experimentsShipVariantCreate`

Ship a variant and (optionally) end the experiment. Updates the feature flag so the selected variant gets 100% of the variant distribution. By default, existing release conditions on the flag are preserved untouched — the variant is served only to users who already match them. Pass ``release_to_everyone: true`` to also prepend a catch-all release condition that rolls the variant out to 100% of users (overrides any existing release conditions on the flag). Can be called on both running and stopped experiments. If the experiment is still running, it will also be ended (end_date set and status marked as stopped). If the experiment has already ended, only the flag is rewritten - this supports the "end first, ship later" workflow. If an approval policy requires review before changes on the flag take effect, the API returns 409 with a change_request_id. The experiment is NOT ended until the change request is approved and the user retries. Returns 400 if the experiment is in draft state, the variant_key is not found on the flag, or the experiment has no linked feature flag.

```ts
posthog.experimentsShipVariantCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/ship_variant/` · `experiments_ship_variant_create`</sub>

## `posthog.experimentsTimeseriesResultsRetrieve`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsTimeseriesResultsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/experiments/{id}/timeseries_results/` · `experiments_timeseries_results_retrieve`</sub>

## `posthog.experimentsUnarchiveCreate`

Unarchive an archived experiment. Restores the experiment to the default list view. Returns 400 if the experiment is not currently archived.

```ts
posthog.experimentsUnarchiveCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/unarchive/` · `experiments_unarchive_create`</sub>

## `posthog.experimentsUnfreezeExposureCreate`

Reopen enrollment on an exposure-frozen experiment. Removes the snapshot-cohort condition and freeze markers from every release group, restoring the flag's original targeting: new users can enroll again and already-enrolled users keep their assigned variant. The snapshot cohort is soft-deleted. The serialized status returns to 'running'. Returns 400 if the experiment is not running or its exposure is not frozen.

```ts
posthog.experimentsUnfreezeExposureCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/{id}/unfreeze_exposure/` · `experiments_unfreeze_exposure_create`</sub>

## `posthog.experimentsCalculateRunningTimeCreate`

Estimate the recommended sample size and running time for an experiment. Pure statistical calculation — does not read or write any experiment. Pass the metric type, a minimum detectable effect, and either a baseline value or raw baseline statistics. When `exposure_rate_per_day` is provided, the response also includes the estimated running time in days.

```ts
posthog.experimentsCalculateRunningTimeCreate(): Promise<{ baseline_value: number | null; variance: number | null; recommended_sample_size: number | null; recommended_running_time_days: number | null }>
```

<sub>`POST /api/projects/{project_id}/experiments/calculate_running_time/` · `experiments_calculate_running_time_create`</sub>

## `posthog.experimentsCreateFromPromptCreate`

Create an experiment that compares N versions of an LLM prompt using a metric template. The user picks 2+ versions of an existing LLMPrompt and 1+ metric templates (cost / latency / eval_pass_rate). The endpoint builds the matching variants (control + test-N, each named after its prompt version) and attaches one metric per selected template, each scoped to the prompt's $ai_prompt_name. Resulting experiment is in draft state.

```ts
posthog.experimentsCreateFromPromptCreate(): Promise<{ id: number; name: string; description?: string | null; start_date?: string | null; end_date?: string | null; feature_flag_key: string; feature_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" |...>
```

<sub>`POST /api/projects/{project_id}/experiments/create_from_prompt/` · `experiments_create_from_prompt_create`</sub>

## `posthog.experimentsPromptTemplatesRetrieve`

List the LLM metric templates that can be passed to `create_from_prompt`.

```ts
posthog.experimentsPromptTemplatesRetrieve(): Promise<({ key: string; label: string; description: string })[]>
```

<sub>`GET /api/projects/{project_id}/experiments/prompt_templates/` · `experiments_prompt_templates_retrieve`</sub>

## `posthog.experimentsSessionContextRetrieve`

Resolve which experiments (and variants) a session recording saw. Variants come from the session's $feature_flag_called events and stamped $feature/<key> event properties — flag evaluation, which may differ from an experiment's exposure criteria.

```ts
posthog.experimentsSessionContextRetrieve(): Promise<{ session_id: string; results: ({ experiment_id: number; experiment_name: string; flag_key: string; variant: string; variants_seen: (string)[]; multiple_variants: boolean; first_exposure_timestamp: string | null; experiment_start_date: string | null; experiment_end_date: string | null; metrics_in_session: ({ metric_uuid: string; metric_name: string; event_count: number; first_timestamp: string; t...>
```

<sub>`GET /api/projects/{project_id}/experiments/session_context/` · `experiments_session_context_retrieve`</sub>

## `posthog.experimentsSessionContextsCreate`

Resolve experiment context for a batch of session recordings. Batch variant of `session_context`, used to prefetch the replay player's experiments box for a whole recordings list in one request. POST because the id list doesn't fit a query string; the endpoint only reads. Already-computed sessions are served from (and cold ones written to) the same short-lived per-viewer cache the single-session endpoint uses, so opening any prefetched recording renders its context instantly. Sessions whose recording metadata doesn't exist yet are omitted from the response, as are recordings the caller can't access and sessions beyond the batch's recording-day budget (each distinct recording day costs its own set of ClickHouse scans, so only the most recent days are computed per request).

```ts
posthog.experimentsSessionContextsCreate(): Promise<{ results: ({ session_id: string; results: ({ experiment_id: number; experiment_name: string; flag_key: string; variant: string; variants_seen: (string)[]; multiple_variants: boolean; first_exposure_timestamp: string | null; experiment_start_date: string | null; experiment_end_date: string | null; metrics_in_session: ({ metric_uuid: string; metric_name: string; event_count: number; first_timestam...>
```

<sub>`POST /api/projects/{project_id}/experiments/session_contexts/` · `experiments_session_contexts_create`</sub>

## `posthog.experimentsStatsRetrieve`

Mixin for ViewSets to handle approval-gate exceptions raised from decorated serializers. Intercepts ApprovalRequired (409) and PolicyConflict (400) raised by the @approval_gate decorator on serializer methods and converts them into the same responses the viewset path produces (see decorators._result_to_response), so both paths share one contract.

```ts
posthog.experimentsStatsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/experiments/stats/` · `experiments_stats_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

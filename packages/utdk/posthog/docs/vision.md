# Vision

41 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.visionActionsList`

CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.

```ts
posthog.visionActionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; scanner: string; enabled?: boolean; is_scanner_digest?: boolean; trigger_type?: "schedule" | "threshold"; mode?: "group_summary" | "alert" | "per_observation"; trigger_config?: { rrule?: string; timezone?: string }; selection?: { scanner_ids?: (string)[]; verdict?: ("yes" | "no" | "inconclusive"...>
```

<sub>`GET /api/projects/{project_id}/vision/actions/` · `vision_actions_list`</sub>

## `posthog.visionActionsCreate`

CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.

```ts
posthog.visionActionsCreate(): Promise<{ id: string; name: string; scanner: string; enabled?: boolean; is_scanner_digest?: boolean; trigger_type?: "schedule" | "threshold"; mode?: "group_summary" | "alert" | "per_observation"; trigger_config?: { rrule?: string; timezone?: string }; selection?: { scanner_ids?: (string)[]; verdict?: ("yes" | "no" | "inconclusive")[]; tags?: (string)[]; min_score?: number; max_score?: number }; synthesis...>
```

<sub>`POST /api/projects/{project_id}/vision/actions/` · `vision_actions_create`</sub>

## `posthog.visionActionsDestroy`

CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.

```ts
posthog.visionActionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/vision/actions/{id}/` · `vision_actions_destroy`</sub>

## `posthog.visionActionsRetrieve`

CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.

```ts
posthog.visionActionsRetrieve(): Promise<{ id: string; name: string; scanner: string; enabled?: boolean; is_scanner_digest?: boolean; trigger_type?: "schedule" | "threshold"; mode?: "group_summary" | "alert" | "per_observation"; trigger_config?: { rrule?: string; timezone?: string }; selection?: { scanner_ids?: (string)[]; verdict?: ("yes" | "no" | "inconclusive")[]; tags?: (string)[]; min_score?: number; max_score?: number }; synthesis...>
```

<sub>`GET /api/projects/{project_id}/vision/actions/{id}/` · `vision_actions_retrieve`</sub>

## `posthog.visionActionsPartialUpdate`

CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.

```ts
posthog.visionActionsPartialUpdate(): Promise<{ id: string; name: string; scanner: string; enabled?: boolean; is_scanner_digest?: boolean; trigger_type?: "schedule" | "threshold"; mode?: "group_summary" | "alert" | "per_observation"; trigger_config?: { rrule?: string; timezone?: string }; selection?: { scanner_ids?: (string)[]; verdict?: ("yes" | "no" | "inconclusive")[]; tags?: (string)[]; min_score?: number; max_score?: number }; synthesis...>
```

<sub>`PATCH /api/projects/{project_id}/vision/actions/{id}/` · `vision_actions_partial_update`</sub>

## `posthog.visionActionsRunCreate`

Run this summary now, without waiting for its schedule — synthesizes a group summary over the observations since the last summary (or the last 24h). The recurring schedule is untouched: the engine advances next_run_at only at scheduled claim time, never in the run itself.

```ts
posthog.visionActionsRunCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/vision/actions/{id}/run/` · `vision_actions_run_create`</sub>

## `posthog.visionActionsRunsList`

Read-only run history for a single vision action (nested under /vision/actions/{action_id}/runs/).

```ts
posthog.visionActionsRunsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; status: "running" | "completed" | "failed" | "skipped"; scheduled_at: string | null; observation_count: number; error_reason: string | null; is_recovery: boolean; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/vision/actions/{vision_action_id}/runs/` · `vision_actions_runs_list`</sub>

## `posthog.visionActionsRunsRetrieve`

Read-only run history for a single vision action (nested under /vision/actions/{action_id}/runs/).

```ts
posthog.visionActionsRunsRetrieve(): Promise<{ id: string; status: "running" | "completed" | "failed" | "skipped"; scheduled_at: string | null; observation_count: number; error_reason: string | null; is_recovery: boolean; created_at: string; updated_at: string; synthesized_markdown: string; observations: ({ index: number; id: string; session_id: string; recording_subject_email: string | null; title: string | null; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/vision/actions/{vision_action_id}/runs/{id}/` · `vision_actions_runs_retrieve`</sub>

## `posthog.visionObservationsList`

Read-only access to a session's observations across every scanner the caller can read, for the replay-page dock.

```ts
posthog.visionObservationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; scanner_id: string; session_id: string; status: "pending" | "running" | "succeeded" | "failed" | "ineligible"; error_reason: string; workflow_id: string; scanner_snapshot: { name: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_version: number; model: string; provider: string...>
```

<sub>`GET /api/projects/{project_id}/vision/observations/` · `vision_observations_list`</sub>

## `posthog.visionObservationsRetrieve`

Retrieve one observation. Any list filters passed along (status, tags, order_by, …) scope the `previous_observation_id`/`next_observation_id` navigation to the matching, identically-ordered set — so prev/next from a filtered table stays within that filtered list.

```ts
posthog.visionObservationsRetrieve(): Promise<{ id: string; scanner_id: string; session_id: string; status: "pending" | "running" | "succeeded" | "failed" | "ineligible"; error_reason: string; workflow_id: string; scanner_snapshot: { name: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_version: number; model: string; provider: string; emits_signals: boolean; scanner_config: unknown } | null; scanner_result:...>
```

<sub>`GET /api/projects/{project_id}/vision/observations/{id}/` · `vision_observations_retrieve`</sub>

## `posthog.visionObservationsCreateTaskCreate`

Create a PostHog Task from this observation's finding so it can be triaged and fixed. Title and description are derived from the scanner and its result. Record-only: this does not start the coding agent. Idempotent per observation: once a task exists, repeat calls return its id with a 200 instead of creating a duplicate.

```ts
posthog.visionObservationsCreateTaskCreate(): Promise<{ task_id: string }>
```

<sub>`POST /api/projects/{project_id}/vision/observations/{id}/create_task/` · `vision_observations_create_task_create`</sub>

## `posthog.visionObservationsLabelDestroy`

Remove the observation's shared label. Requires editor access to the scanner.

```ts
posthog.visionObservationsLabelDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/vision/observations/{id}/label/` · `vision_observations_label_destroy`</sub>

## `posthog.visionObservationsLabelCreate`

Set or update the observation's shared label: whether the scanner scored the session correctly, plus optional feedback on what it got wrong. One label per observation, shared across the team; these labels feed prompt improvement. Requires editor access to the scanner.

```ts
posthog.visionObservationsLabelCreate(): Promise<{ is_correct: boolean; feedback?: string }>
```

<sub>`POST /api/projects/{project_id}/vision/observations/{id}/label/` · `vision_observations_label_create`</sub>

## `posthog.visionObservationsRetryCreate`

Delete a failed or ineligible observation and re-run its scanner on the same recording. Returns 202 with the workflow handle.

```ts
posthog.visionObservationsRetryCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/vision/observations/{id}/retry/` · `vision_observations_retry_create`</sub>

## `posthog.environmentVisionQuotaRetrieve`

```ts
posthog.environmentVisionQuotaRetrieve(): Promise<{ credit_limit: number | null; credits_used: number; remaining: number | null; exhausted: boolean; period_start: string; period_end: string; projected_monthly_credits: number; free_monthly_credits: number }>
```

<sub>`GET /api/projects/{project_id}/vision/quota/` · `environment_vision_quota_retrieve`</sub>

## `posthog.visionScannersList`

CRUD for Replay Vision scanners.

```ts
posthog.visionScannersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_config: unknown; query?: unknown; sampling_rate?: number; sampling_mode?: "focused" | "balanced" | "comprehensive"; provider?: "google"; model: "gemini-3.5-flash-lite" | "gemini-3-flash-preview" | "ge...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/` · `vision_scanners_list`</sub>

## `posthog.visionScannersCreate`

CRUD for Replay Vision scanners.

```ts
posthog.visionScannersCreate(): Promise<{ id: string; name: string; description?: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_config: unknown; query?: unknown; sampling_rate?: number; sampling_mode?: "focused" | "balanced" | "comprehensive"; provider?: "google"; model: "gemini-3.5-flash-lite" | "gemini-3-flash-preview" | "gemini-3.6-flash"; enabled?: boolean; emits_signals?: boolean; scanner_versio...>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/` · `vision_scanners_create`</sub>

## `posthog.visionScannersDestroy`

CRUD for Replay Vision scanners.

```ts
posthog.visionScannersDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/vision/scanners/{id}/` · `vision_scanners_destroy`</sub>

## `posthog.visionScannersRetrieve`

CRUD for Replay Vision scanners.

```ts
posthog.visionScannersRetrieve(): Promise<{ id: string; name: string; description?: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_config: unknown; query?: unknown; sampling_rate?: number; sampling_mode?: "focused" | "balanced" | "comprehensive"; provider?: "google"; model: "gemini-3.5-flash-lite" | "gemini-3-flash-preview" | "gemini-3.6-flash"; enabled?: boolean; emits_signals?: boolean; scanner_versio...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{id}/` · `vision_scanners_retrieve`</sub>

## `posthog.visionScannersPartialUpdate`

CRUD for Replay Vision scanners.

```ts
posthog.visionScannersPartialUpdate(): Promise<{ id: string; name: string; description?: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_config: unknown; query?: unknown; sampling_rate?: number; sampling_mode?: "focused" | "balanced" | "comprehensive"; provider?: "google"; model: "gemini-3.5-flash-lite" | "gemini-3-flash-preview" | "gemini-3.6-flash"; enabled?: boolean; emits_signals?: boolean; scanner_versio...>
```

<sub>`PATCH /api/projects/{project_id}/vision/scanners/{id}/` · `vision_scanners_partial_update`</sub>

## `posthog.visionScannersAffectedCohortCreate`

Save the users this scanner matched as a static cohort, for surveys, funnels, and retention analysis.

```ts
posthog.visionScannersAffectedCohortCreate(): Promise<{ cohort_id: number; name: string; users_in_cohort: number; window_days: number }>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{id}/affected_cohort/` · `vision_scanners_affected_cohort_create`</sub>

## `posthog.visionScannersBulkObserveCreate`

Apply this scanner to many sessions on demand. Starts as many as fit under the in-flight caps and monthly credit quota, reporting the rest as skipped rather than failing the batch.

```ts
posthog.visionScannersBulkObserveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{id}/bulk_observe/` · `vision_scanners_bulk_observe_create`</sub>

## `posthog.visionScannersImpactRetrieve`

Affected sessions and users for this scanner over the trailing window.

```ts
posthog.visionScannersImpactRetrieve(): Promise<{ affected_sessions: number; affected_users: number; sessions_without_user: number; window_days: number }>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{id}/impact/` · `vision_scanners_impact_retrieve`</sub>

## `posthog.visionScannersObserveCreate`

Apply this scanner to one specific session, on demand. Returns 202 with the workflow handle.

```ts
posthog.visionScannersObserveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{id}/observe/` · `vision_scanners_observe_create`</sub>

## `posthog.visionScannersObservationsList`

Read-only access to observations produced by a scanner.

```ts
posthog.visionScannersObservationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; scanner_id: string; session_id: string; status: "pending" | "running" | "succeeded" | "failed" | "ineligible"; error_reason: string; workflow_id: string; scanner_snapshot: { name: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_version: number; model: string; provider: string...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/` · `vision_scanners_observations_list`</sub>

## `posthog.visionScannersObservationsRetrieve`

Retrieve one observation. Any list filters passed along (status, tags, order_by, …) scope the `previous_observation_id`/`next_observation_id` navigation to the matching, identically-ordered set — so prev/next from a filtered table stays within that filtered list.

```ts
posthog.visionScannersObservationsRetrieve(): Promise<{ id: string; scanner_id: string; session_id: string; status: "pending" | "running" | "succeeded" | "failed" | "ineligible"; error_reason: string; workflow_id: string; scanner_snapshot: { name: string; scanner_type: "monitor" | "classifier" | "scorer" | "summarizer"; scanner_version: number; model: string; provider: string; emits_signals: boolean; scanner_config: unknown } | null; scanner_result:...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/{id}/` · `vision_scanners_observations_retrieve`</sub>

## `posthog.visionScannersObservationsCreateTaskCreate`

Create a PostHog Task from this observation's finding so it can be triaged and fixed. Title and description are derived from the scanner and its result. Record-only: this does not start the coding agent. Idempotent per observation: once a task exists, repeat calls return its id with a 200 instead of creating a duplicate.

```ts
posthog.visionScannersObservationsCreateTaskCreate(): Promise<{ task_id: string }>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/{id}/create_task/` · `vision_scanners_observations_create_task_create`</sub>

## `posthog.visionScannersObservationsLabelDestroy`

Remove the observation's shared label. Requires editor access to the scanner.

```ts
posthog.visionScannersObservationsLabelDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/{id}/label/` · `vision_scanners_observations_label_destroy`</sub>

## `posthog.visionScannersObservationsLabelCreate`

Set or update the observation's shared label: whether the scanner scored the session correctly, plus optional feedback on what it got wrong. One label per observation, shared across the team; these labels feed prompt improvement. Requires editor access to the scanner.

```ts
posthog.visionScannersObservationsLabelCreate(): Promise<{ is_correct: boolean; feedback?: string }>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/{id}/label/` · `vision_scanners_observations_label_create`</sub>

## `posthog.visionScannersObservationsRetryCreate`

Delete a failed or ineligible observation and re-run its scanner on the same recording. Returns 202 with the workflow handle.

```ts
posthog.visionScannersObservationsRetryCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/{id}/retry/` · `vision_scanners_observations_retry_create`</sub>

## `posthog.visionScannersObservationsStatsRetrieve`

Aggregate counts and per-scanner-type distributions over the filtered observation set. Same filters as the list endpoint apply.

```ts
posthog.visionScannersObservationsStatsRetrieve(): Promise<{ status_counts: { total: number; succeeded: number; failed: number; ineligible: number; in_flight: number; success_rate: number | null }; coverage: { recent_sessions: number; total_sessions: number; recent_days: number }; labels: { up_total: number; down_total: number; by_day: ({ date: string; up: number; down: number })[]; by_rating_day: ({ date: string; up: number; down: number })[]; version_m...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{scanner_id}/observations/stats/` · `vision_scanners_observations_stats_retrieve`</sub>

## `posthog.visionScannersPromptSuggestionsList`

AI prompt-rewrite suggestions for a scanner, generated from the team's thumbs up/down ratings.

```ts
posthog.visionScannersPromptSuggestionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; status: "pending" | "applied" | "dismissed" | "superseded" | "no_change"; suggested_prompt: string; base_prompt: string; base_config: unknown; suggested_config: unknown; changes: unknown; rationale: string; based_on_up: number; based_on_down: number; scanner_version: number; created_at: string; created_by: { ...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{scanner_id}/prompt_suggestions/` · `vision_scanners_prompt_suggestions_list`</sub>

## `posthog.visionScannersPromptSuggestionsApplyCreate`

Apply this suggestion: write a config to the scanner (the prompt plus any type-specific config such as classifier tags or the monitor allow_inconclusive flag), bumping the scanner version, and mark the suggestion applied. Pass `config` to apply an edited subset of the recommendation; omit it to apply the full suggested config. Only the current pending suggestion can be applied. Requires session recording edit access.

```ts
posthog.visionScannersPromptSuggestionsApplyCreate(): Promise<{ id: string; status: "pending" | "applied" | "dismissed" | "superseded" | "no_change"; suggested_prompt: string; base_prompt: string; base_config: unknown; suggested_config: unknown; changes: unknown; rationale: string; based_on_up: number; based_on_down: number; scanner_version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string;...>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/prompt_suggestions/{id}/apply/` · `vision_scanners_prompt_suggestions_apply_create`</sub>

## `posthog.visionScannersPromptSuggestionsDismissCreate`

Dismiss this suggestion without applying it. Only the current pending suggestion can be dismissed. Requires editor access to the scanner.

```ts
posthog.visionScannersPromptSuggestionsDismissCreate(): Promise<{ id: string; status: "pending" | "applied" | "dismissed" | "superseded" | "no_change"; suggested_prompt: string; base_prompt: string; base_config: unknown; suggested_config: unknown; changes: unknown; rationale: string; based_on_up: number; based_on_down: number; scanner_version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string;...>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/prompt_suggestions/{id}/dismiss/` · `vision_scanners_prompt_suggestions_dismiss_create`</sub>

## `posthog.visionScannersPromptSuggestionsEvaluateCreate`

Test this suggestion before applying it: re-run the scanner with the suggested prompt against already-rated sessions in the background and compare each fresh output with the stored one. Results land on the suggestion's `evaluation` field. Poll `current` while status is running. `session_limit` controls how many rated sessions are re-run (thumbs-down prioritized, up to `evaluation_session_cap`). Each successful re-run charges credits like a normal observation of the same model. The request is refused with 402 when the planned credits exceed what is left of the monthly limit. Monitor and classifier scanners get a kept/fixed/regressed classification, while scorer and summarizer scanners show the raw before and after output. Requires session recording edit access.

```ts
posthog.visionScannersPromptSuggestionsEvaluateCreate(): Promise<{ id: string; status: "pending" | "applied" | "dismissed" | "superseded" | "no_change"; suggested_prompt: string; base_prompt: string; base_config: unknown; suggested_config: unknown; changes: unknown; rationale: string; based_on_up: number; based_on_down: number; scanner_version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string;...>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/prompt_suggestions/{id}/evaluate/` · `vision_scanners_prompt_suggestions_evaluate_create`</sub>

## `posthog.visionScannersPromptSuggestionsCurrentRetrieve`

The scanner's newest prompt suggestion plus whether it is stale (the ratings changed since it was generated) and how many rated observations are available.

```ts
posthog.visionScannersPromptSuggestionsCurrentRetrieve(): Promise<{ suggestion: { id: string; status: "pending" | "applied" | "dismissed" | "superseded" | "no_change"; suggested_prompt: string; base_prompt: string; base_config: unknown; suggested_config: unknown; changes: unknown; rationale: string; based_on_up: number; based_on_down: number; scanner_version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_...>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/{scanner_id}/prompt_suggestions/current/` · `vision_scanners_prompt_suggestions_current_retrieve`</sub>

## `posthog.visionScannersPromptSuggestionsGenerateCreate`

Generate a fresh prompt suggestion from the team's current ratings. The previous pending suggestion becomes history (superseded). Requires at least one rated observation and editor access to the scanner.

```ts
posthog.visionScannersPromptSuggestionsGenerateCreate(): Promise<{ id: string; status: "pending" | "applied" | "dismissed" | "superseded" | "no_change"; suggested_prompt: string; base_prompt: string; base_config: unknown; suggested_config: unknown; changes: unknown; rationale: string; based_on_up: number; based_on_down: number; scanner_version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string;...>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/{scanner_id}/prompt_suggestions/generate/` · `vision_scanners_prompt_suggestions_generate_create`</sub>

## `posthog.visionScannersCreatorsRetrieve`

Distinct creators across the team's scanners — feeds the `Created by` filter dropdown.

```ts
posthog.visionScannersCreatorsRetrieve(): Promise<{ creators: ({ id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null })[] }>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/creators/` · `vision_scanners_creators_retrieve`</sub>

## `posthog.visionScannersEstimateCreate`

Estimate the observation volume a proposed scanner would generate, for the pre-save cost preview.

```ts
posthog.visionScannersEstimateCreate(): Promise<{ matched_sessions_in_window: number; window_days: number; estimated_observations_per_month: number; credits_per_observation: number; estimated_credits_per_month: number; other_enabled_scanners_monthly_credits: number; sampling_rate: number }>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/estimate/` · `vision_scanners_estimate_create`</sub>

## `posthog.visionScannersStatsRetrieve`

Team-wide scanner counts — independent of list filters, so the overview stays stable.

```ts
posthog.visionScannersStatsRetrieve(): Promise<{ total: number; enabled: number; by_type: { monitor: { enabled: number; total: number }; classifier: { enabled: number; total: number }; scorer: unknown; summarizer: unknown } }>
```

<sub>`GET /api/projects/{project_id}/vision/scanners/stats/` · `vision_scanners_stats_retrieve`</sub>

## `posthog.visionScannersSuggestTagsCreate`

Suggest classifier tags grounded in the scanner's own observations and the org's product data.

```ts
posthog.visionScannersSuggestTagsCreate(): Promise<{ suggestions: ({ tag: string; rationale: string; source: "observed" | "product" | "prompt" })[] }>
```

<sub>`POST /api/projects/{project_id}/vision/scanners/suggest_tags/` · `vision_scanners_suggest_tags_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

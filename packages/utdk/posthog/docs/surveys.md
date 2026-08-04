# Surveys

22 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.surveysList`

```ts
posthog.surveysList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null...>
```

<sub>`GET /api/projects/{project_id}/surveys/` · `surveys_list`</sub>

## `posthog.surveysCreate`

```ts
posthog.surveysCreate(): Promise<{ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all"...>
```

<sub>`POST /api/projects/{project_id}/surveys/` · `surveys_create`</sub>

## `posthog.surveysDestroy`

```ts
posthog.surveysDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/surveys/{id}/` · `surveys_destroy`</sub>

## `posthog.surveysRetrieve`

```ts
posthog.surveysRetrieve(): Promise<{ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all"...>
```

<sub>`GET /api/projects/{project_id}/surveys/{id}/` · `surveys_retrieve`</sub>

## `posthog.surveysPartialUpdate`

```ts
posthog.surveysPartialUpdate(): Promise<{ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all"...>
```

<sub>`PATCH /api/projects/{project_id}/surveys/{id}/` · `surveys_partial_update`</sub>

## `posthog.surveysUpdate`

```ts
posthog.surveysUpdate(): Promise<{ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all"...>
```

<sub>`PUT /api/projects/{project_id}/surveys/{id}/` · `surveys_update`</sub>

## `posthog.surveysActivityRetrieve`

```ts
posthog.surveysActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/surveys/{id}/activity/` · `surveys_activity_retrieve`</sub>

## `posthog.surveysArchivedResponseUuidsRetrieve`

Get list of archived response UUIDs for HogQL filtering. Returns list of UUIDs that the frontend can use to filter out archived responses in HogQL queries.

```ts
posthog.surveysArchivedResponseUuidsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/surveys/{id}/archived-response-uuids/` · `surveys_archived_response_uuids_retrieve`</sub>

## `posthog.surveysDuplicateToProjectsCreate`

Duplicate a survey to multiple projects in a single transaction. Accepts a list of target team IDs and creates a copy of the survey in each project. Uses an all-or-nothing approach - if any duplication fails, all changes are rolled back.

```ts
posthog.surveysDuplicateToProjectsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/duplicate_to_projects/` · `surveys_duplicate_to_projects_create`</sub>

## `posthog.surveysGenerateTranslationsCreate`

```ts
posthog.surveysGenerateTranslationsCreate(): Promise<{ translations: { [key: string]: { name?: string; thankYouMessageHeader?: string; thankYouMessageDescription?: string; thankYouMessageCloseButtonText?: string } | undefined }; questions: ({ id: string; translations: { [key: string]: { question?: string; description?: string; buttonText?: string; choices?: (string)[]; lowerBoundLabel?: string; upperBoundLabel?: string; link?: string } | undefined ...>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/generate_translations/` · `surveys_generate_translations_create`</sub>

## `posthog.surveysLaunch`

Launch a survey by setting `start_date` to the current time. No-op if the survey is already launched (start_date set in the past) — returns the existing state unchanged. Does not affect archived surveys or surveys with an end_date in the past; unarchive or extend the end_date first.

```ts
posthog.surveysLaunch(): Promise<{ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all"...>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/launch/` · `surveys_launch`</sub>

## `posthog.surveysResponsesList`

List survey responses for a specific survey, with question text resolved server-side so callers do not have to map opaque `$survey_response_<id>` keys. Each row carries `distinct_id`, `session_id`, `submitted_at`, and an `extra` block (device, browser, OS, geoip, current_url, iteration) so agents can cross-pivot to recordings, persons, or paths in a single follow-up call. For person properties at event time, follow up with `persons-get` using the returned `distinct_id` — keeps scopes scoped. Use `question_id` + `score_lte` to fetch NPS detractors and similar score-filtered cohorts.

```ts
posthog.surveysResponsesList(): Promise<{ results: ({ uuid: string; distinct_id: string; session_id: string | null; submitted_at: string; answers: ({ question_id: string; question_index: number; question_text: string; question_type: string; answer: unknown })[]; extra: { device_type?: string | null; browser?: string | null; os?: string | null; geoip_country_code?: string | null; geoip_country_name?: string | null; geoip_city_name?: str...>
```

<sub>`GET /api/projects/{project_id}/surveys/{id}/responses/` · `surveys_responses_list`</sub>

## `posthog.surveysResponsesArchiveCreate`

Archive a single survey response.

```ts
posthog.surveysResponsesArchiveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/responses/{response_uuid}/archive/` · `surveys_responses_archive_create`</sub>

## `posthog.surveysResponsesUnarchiveCreate`

Unarchive a single survey response.

```ts
posthog.surveysResponsesUnarchiveCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/responses/{response_uuid}/unarchive/` · `surveys_responses_unarchive_create`</sub>

## `posthog.surveysStatsRetrieve`

Get survey response statistics for a specific survey. Args: date_from: Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z) date_to: Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z) exclude_archived: Optional boolean to exclude archived responses (default: false, includes archived) include_per_question_stats: Optional boolean to include per-question response counts and distributions Returns: Survey statistics including event counts, unique respondents, and conversion rates

```ts
posthog.surveysStatsRetrieve(): Promise<{ survey_id: string; start_date: string | null; end_date: string | null; stats: { [key: string]: unknown }; rates: { [key: string]: unknown }; per_question_stats?: (unknown)[] }>
```

<sub>`GET /api/projects/{project_id}/surveys/{id}/stats/` · `surveys_stats_retrieve`</sub>

## `posthog.surveysStop`

Stop a survey by setting `end_date` to the current time. No new responses are accepted after this; existing responses remain available. No-op if the survey already has an end_date in the past.

```ts
posthog.surveysStop(): Promise<{ id: string; name: string; description?: string; type: "popover" | "widget" | "external_survey" | "api"; schedule?: string | null; linked_flag: { id: number; team_id: number; name?: string; key: string; filters?: { [key: string]: unknown }; deleted?: boolean; active?: boolean; ensure_experience_continuity?: boolean | null; version?: number | null; evaluation_runtime?: "server" | "client" | "all"...>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/stop/` · `surveys_stop`</sub>

## `posthog.surveysSummarizeResponsesCreate`

Summarize survey responses. When `question_index` or `question_id` is provided, returns a per-question theme summary using cached `survey.question_summaries` when fresh. When neither is provided, returns the survey-wide headline summary (delegates to summary_headline). Pass `force_refresh=true` in the body to bypass caches.

```ts
posthog.surveysSummarizeResponsesCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/summarize_responses/` · `surveys_summarize_responses_create`</sub>

## `posthog.surveysSummaryHeadlineCreate`

```ts
posthog.surveysSummaryHeadlineCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/surveys/{id}/summary_headline/` · `surveys_summary_headline_create`</sub>

## `posthog.surveysAllActivityRetrieve`

```ts
posthog.surveysAllActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/surveys/activity/` · `surveys_all_activity_retrieve`</sub>

## `posthog.surveysQuestionLabels`

Return a slim list of question labels for the team's surveys. Used by the frontend to resolve `$survey_response_<question_id>` property keys into human-readable question text without loading the full survey payload.

```ts
posthog.surveysQuestionLabels(): Promise<{ labels: ({ question_id: string; question_text: string; question_index: number; survey_id: string; survey_name: string })[] }>
```

<sub>`GET /api/projects/{project_id}/surveys/question_labels/` · `surveys_question_labels`</sub>

## `posthog.surveysResponsesCountRetrieve`

Get response counts for all surveys. Args: exclude_archived: Optional boolean to exclude archived responses (default: false, includes archived) survey_ids: Optional comma-separated list of survey IDs to filter by Returns: Dictionary mapping survey IDs to response counts

```ts
posthog.surveysResponsesCountRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/surveys/responses_count/` · `surveys_responses_count_retrieve`</sub>

## `posthog.surveysGlobalStatsRetrieve`

Get aggregated response statistics across all surveys. Args: date_from: Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z) date_to: Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z) Returns: Aggregated statistics across all surveys including total counts and rates

```ts
posthog.surveysGlobalStatsRetrieve(): Promise<{ stats: { [key: string]: unknown }; rates: { [key: string]: unknown } }>
```

<sub>`GET /api/projects/{project_id}/surveys/stats/` · `surveys_global_stats_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

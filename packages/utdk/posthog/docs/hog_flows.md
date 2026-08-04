# Hog Flows

33 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.hogFlowsList`

```ts
posthog.hogFlowsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string | null; description: string; version: number; status: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: stri...>
```

<sub>`GET /api/projects/{project_id}/hog_flows/` · `hog_flows_list`</sub>

## `posthog.hogFlowsCreate`

```ts
posthog.hogFlowsCreate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`POST /api/projects/{project_id}/hog_flows/` · `hog_flows_create`</sub>

## `posthog.hogFlowsDestroy`

```ts
posthog.hogFlowsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/hog_flows/{id}/` · `hog_flows_destroy`</sub>

## `posthog.hogFlowsRetrieve`

```ts
posthog.hogFlowsRetrieve(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/` · `hog_flows_retrieve`</sub>

## `posthog.hogFlowsPartialUpdate`

```ts
posthog.hogFlowsPartialUpdate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`PATCH /api/projects/{project_id}/hog_flows/{id}/` · `hog_flows_partial_update`</sub>

## `posthog.hogFlowsUpdate`

```ts
posthog.hogFlowsUpdate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`PUT /api/projects/{project_id}/hog_flows/{id}/` · `hog_flows_update`</sub>

## `posthog.hogFlowsActionsEmailPartialUpdate`

```ts
posthog.hogFlowsActionsEmailPartialUpdate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`PATCH /api/projects/{project_id}/hog_flows/{id}/actions/{action_id}/email/` · `hog_flows_actions_email_partial_update`</sub>

## `posthog.hogFlowsAssetsRetrieve`

```ts
posthog.hogFlowsAssetsRetrieve(): Promise<({ invocation_id: string; action_id: string; function_id: string; function_name: string; parent_run_id: string; kind: string; distinct_id: string; person_id: string; recipient: string; subject: string; status: string; sent_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/assets/` · `hog_flows_assets_retrieve`</sub>

## `posthog.hogFlowsAssetContentRetrieve`

```ts
posthog.hogFlowsAssetContentRetrieve(): Promise<string>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/assets/content/` · `hog_flows_asset_content_retrieve`</sub>

## `posthog.hogFlowsBatchJobsList`

```ts
posthog.hogFlowsBatchJobsList(): Promise<({ id: string; status?: "waiting" | "queued" | "active" | "completed" | "cancelled" | "failed"; hog_flow: string; filters: unknown; variables?: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organ...>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/batch_jobs/` · `hog_flows_batch_jobs_list`</sub>

## `posthog.hogFlowsBatchJobsCreate`

```ts
posthog.hogFlowsBatchJobsCreate(): Promise<{ id: string; status?: "waiting" | "queued" | "active" | "completed" | "cancelled" | "failed"; hog_flow: string; filters: unknown; variables?: unknown; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organi...>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/batch_jobs/` · `hog_flows_batch_jobs_create`</sub>

## `posthog.hogFlowsDiscardDraftCreate`

```ts
posthog.hogFlowsDiscardDraftCreate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/discard_draft/` · `hog_flows_discard_draft_create`</sub>

## `posthog.hogFlowsGraphPartialUpdate`

```ts
posthog.hogFlowsGraphPartialUpdate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`PATCH /api/projects/{project_id}/hog_flows/{id}/graph/` · `hog_flows_graph_partial_update`</sub>

## `posthog.hogFlowsInvocationResultsRetrieve`

```ts
posthog.hogFlowsInvocationResultsRetrieve(): Promise<({ invocation_id: string; status: string; error_kind: string; error_message: string; distinct_id: string; person_id: string; scheduled_at: string; started_at: string | null; finished_at: string | null; duration_ms: number | null; attempts: number; is_retry: boolean })[]>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/invocation_results/` · `hog_flows_invocation_results_retrieve`</sub>

## `posthog.hogFlowsInvocationResultRetrieve`

```ts
posthog.hogFlowsInvocationResultRetrieve(): Promise<{ invocation_globals: { [key: string]: unknown }; invocation_id: string; status: string; error_kind: string; error_message: string; distinct_id: string; person_id: string; scheduled_at: string; started_at: string | null; finished_at: string | null; duration_ms: number | null; attempts: number; is_retry: boolean }>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/invocation_results/{invocation_id}/` · `hog_flows_invocation_result_retrieve`</sub>

## `posthog.hogFlowsInvocationsCreate`

```ts
posthog.hogFlowsInvocationsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/invocations/` · `hog_flows_invocations_create`</sub>

## `posthog.hogFlowsLogsRetrieve`

```ts
posthog.hogFlowsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/logs/` · `hog_flows_logs_retrieve`</sub>

## `posthog.hogFlowsMetricsRetrieve`

```ts
posthog.hogFlowsMetricsRetrieve(): Promise<{ labels: (string)[]; series: ({ name: string; values: (number)[] })[] }>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/metrics/` · `hog_flows_metrics_retrieve`</sub>

## `posthog.hogFlowsMetricsTotalsRetrieve`

```ts
posthog.hogFlowsMetricsTotalsRetrieve(): Promise<{ totals: { [key: string]: number | undefined } }>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/metrics/totals/` · `hog_flows_metrics_totals_retrieve`</sub>

## `posthog.hogFlowsPublishCreate`

```ts
posthog.hogFlowsPublishCreate(): Promise<{ published: boolean; in_flight_runs: number | null; draft_updated_at: string | null; confirm_token: string | null; impact: { deleted_steps: ({ action_id: string; name: string; runs: number | null; moves_to: { action_id: string; name: string } | null; exits: boolean })[]; position_unknown: number | null; empty_variables: ({ variable: string; set_by: string | null; referenced_by: (string)[] })[]; ...>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/publish/` · `hog_flows_publish_create`</sub>

## `posthog.hogFlowsRerunCreate`

Rerun past invocations of this hog flow from their stored payloads. Same shape and semantics as the hog function rerun endpoint — proxies through to the CDP worker, which reads matching rows from ClickHouse, rehydrates from `invocation_globals`, and re-enqueues onto cyclotron with `is_retry=1`. Because rerun replays historical event/person/group data, it requires `person:read` and `group:read` on top of `hog_flow:write`.

```ts
posthog.hogFlowsRerunCreate(): Promise<{ rerun_job_id: string; queued_count: number; skipped_count: number }>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/rerun/` · `hog_flows_rerun_create`</sub>

## `posthog.hogFlowsRevisionsList`

```ts
posthog.hogFlowsRevisionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | ...>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/revisions/` · `hog_flows_revisions_list`</sub>

## `posthog.hogFlowsRevisionsRetrieve`

```ts
posthog.hogFlowsRevisionsRetrieve(): Promise<{ version: number; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null } | ...>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/revisions/{version}/` · `hog_flows_revisions_retrieve`</sub>

## `posthog.hogFlowsRevisionsRestoreCreate`

```ts
posthog.hogFlowsRevisionsRestoreCreate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/revisions/{version}/restore/` · `hog_flows_revisions_restore_create`</sub>

## `posthog.hogFlowsSchedulesList`

```ts
posthog.hogFlowsSchedulesList(): Promise<({ id: string; rrule: string; starts_at: string; timezone?: string; variables?: unknown; status: "active" | "paused" | "completed"; next_run_at: string | null; created_at: string; updated_at: string })[]>
```

<sub>`GET /api/projects/{project_id}/hog_flows/{id}/schedules/` · `hog_flows_schedules_list`</sub>

## `posthog.hogFlowsSchedulesCreate`

```ts
posthog.hogFlowsSchedulesCreate(): Promise<{ id: string; rrule: string; starts_at: string; timezone?: string; variables?: unknown; status: "active" | "paused" | "completed"; next_run_at: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/hog_flows/{id}/schedules/` · `hog_flows_schedules_create`</sub>

## `posthog.hogFlowsSchedulesDestroy`

```ts
posthog.hogFlowsSchedulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/hog_flows/{id}/schedules/{schedule_id}/` · `hog_flows_schedules_destroy`</sub>

## `posthog.hogFlowsSchedulesPartialUpdate`

```ts
posthog.hogFlowsSchedulesPartialUpdate(): Promise<{ id: string; rrule: string; starts_at: string; timezone?: string; variables?: unknown; status: "active" | "paused" | "completed"; next_run_at: string | null; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/hog_flows/{id}/schedules/{schedule_id}/` · `hog_flows_schedules_partial_update`</sub>

## `posthog.hogFlowsBulkDeleteCreate`

```ts
posthog.hogFlowsBulkDeleteCreate(): Promise<{ id: string; name?: string | null; description?: string; version: number; status?: "draft" | "active" | "archived"; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "...>
```

<sub>`POST /api/projects/{project_id}/hog_flows/bulk_delete/` · `hog_flows_bulk_delete_create`</sub>

## `posthog.hogFlowsEmailSendingSuspensionRetrieve`

Cheap read for the scene-wide suspension banner: single-row `TeamWorkflowsConfig` lookup with no reputation computation. Every project member sees this — a suspension stops everyone's email, so hiding it would leave silent send failures unexplained.

```ts
posthog.hogFlowsEmailSendingSuspensionRetrieve(): Promise<{ email_sending_suspended: boolean; email_sending_suspended_at: string | null; email_sending_suspension_reason: string }>
```

<sub>`GET /api/projects/{project_id}/hog_flows/email_sending_suspension/` · `hog_flows_email_sending_suspension_retrieve`</sub>

## `posthog.hogFlowsMetricsGlobalRetrieve`

```ts
posthog.hogFlowsMetricsGlobalRetrieve(): Promise<({ workflow_id: string; succeeded: number; failed: number })[]>
```

<sub>`GET /api/projects/{project_id}/hog_flows/metrics/global/` · `hog_flows_metrics_global_retrieve`</sub>

## `posthog.hogFlowsReputationRetrieve`

Bounce/complaint rates for this project's workflow email over the last 30 days, computed on the fly from app metrics (a project-wide aggregate plus per-workflow rows, worst first, capped), together with the authoritative AWS SES tenant verdict — sending status and open reputation findings. Our rates are the per-workflow diagnosis; AWS judges and enforces.

```ts
posthog.hogFlowsReputationRetrieve(): Promise<{ aws: { health: "healthy" | "warning" | "critical" | "suspended"; sending_status: "ENABLED" | "REINSTATED" | "DISABLED"; findings: ({ finding_type: "DKIM" | "DMARC" | "SPF" | "BIMI" | "COMPLAINT" | "BOUNCE" | "FEEDBACK_3P" | "IP_LISTING"; impact: "LOW" | "HIGH"; description: string; last_updated_at: string | null })[] } | null; reputation: { bounce_rate: number; complaint_rate: number; emails_se...>
```

<sub>`GET /api/projects/{project_id}/hog_flows/reputation/` · `hog_flows_reputation_retrieve`</sub>

## `posthog.hogFlowsUserBlastRadiusCreate`

```ts
posthog.hogFlowsUserBlastRadiusCreate(): Promise<{ affected: number; total: number; limit: number; dedupe_key: "email" | null; confirm_token: string }>
```

<sub>`POST /api/projects/{project_id}/hog_flows/user_blast_radius/` · `hog_flows_user_blast_radius_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

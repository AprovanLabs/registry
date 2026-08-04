# Data Modeling Jobs

4 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.dataModelingJobsList`

List data modeling jobs which are "runs" for our saved queries.

```ts
posthog.dataModelingJobsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; saved_query_id: string | null; status: "Cancelled" | "Completed" | "Failed" | "Running"; rows_materialized: number; error: string | null; created_at: string; last_run_at: string; workflow_id: string | null; workflow_run_id: string | null; rows_expected: number | null })[] }>
```

<sub>`GET /api/projects/{project_id}/data_modeling_jobs/` · `data_modeling_jobs_list`</sub>

## `posthog.dataModelingJobsRetrieve`

List data modeling jobs which are "runs" for our saved queries.

```ts
posthog.dataModelingJobsRetrieve(): Promise<{ id: string; saved_query_id: string | null; status: "Cancelled" | "Completed" | "Failed" | "Running"; rows_materialized: number; error: string | null; created_at: string; last_run_at: string; workflow_id: string | null; workflow_run_id: string | null; rows_expected: number | null }>
```

<sub>`GET /api/projects/{project_id}/data_modeling_jobs/{id}/` · `data_modeling_jobs_retrieve`</sub>

## `posthog.dataModelingJobsRecentRetrieve`

Get the most recent non-running job for each saved query from the v2 backend.

```ts
posthog.dataModelingJobsRecentRetrieve(): Promise<{ id: string; saved_query_id: string | null; status: "Cancelled" | "Completed" | "Failed" | "Running"; rows_materialized: number; error: string | null; created_at: string; last_run_at: string; workflow_id: string | null; workflow_run_id: string | null; rows_expected: number | null }>
```

<sub>`GET /api/projects/{project_id}/data_modeling_jobs/recent/` · `data_modeling_jobs_recent_retrieve`</sub>

## `posthog.dataModelingJobsRunningRetrieve`

Get all currently running jobs from the v2 backend.

```ts
posthog.dataModelingJobsRunningRetrieve(): Promise<{ id: string; saved_query_id: string | null; status: "Cancelled" | "Completed" | "Failed" | "Running"; rows_materialized: number; error: string | null; created_at: string; last_run_at: string; workflow_id: string | null; workflow_run_id: string | null; rows_expected: number | null }>
```

<sub>`GET /api/projects/{project_id}/data_modeling_jobs/running/` · `data_modeling_jobs_running_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

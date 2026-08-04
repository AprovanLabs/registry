# Batch Exports

39 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.orgOrganizationsBatchExportsList`

```ts
posthog.orgOrganizationsBatchExportsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; ...>
```

<sub>`GET /api/organizations/{organization_id}/batch_exports/` · `org_organizations_batch_exports_list`</sub>

## `posthog.orgOrganizationsBatchExportsCreate`

```ts
posthog.orgOrganizationsBatchExportsCreate(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`POST /api/organizations/{organization_id}/batch_exports/` · `org_organizations_batch_exports_create`</sub>

## `posthog.orgOrganizationsBatchExportsDestroy`

```ts
posthog.orgOrganizationsBatchExportsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/organizations/{organization_id}/batch_exports/{id}/` · `org_organizations_batch_exports_destroy`</sub>

## `posthog.orgOrganizationsBatchExportsRetrieve`

```ts
posthog.orgOrganizationsBatchExportsRetrieve(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`GET /api/organizations/{organization_id}/batch_exports/{id}/` · `org_organizations_batch_exports_retrieve`</sub>

## `posthog.orgOrganizationsBatchExportsPartialUpdate`

```ts
posthog.orgOrganizationsBatchExportsPartialUpdate(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`PATCH /api/organizations/{organization_id}/batch_exports/{id}/` · `org_organizations_batch_exports_partial_update`</sub>

## `posthog.orgOrganizationsBatchExportsUpdate`

```ts
posthog.orgOrganizationsBatchExportsUpdate(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`PUT /api/organizations/{organization_id}/batch_exports/{id}/` · `org_organizations_batch_exports_update`</sub>

## `posthog.orgOrganizationsBatchExportsLogsRetrieve`

```ts
posthog.orgOrganizationsBatchExportsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/organizations/{organization_id}/batch_exports/{id}/logs/` · `org_organizations_batch_exports_logs_retrieve`</sub>

## `posthog.orgOrganizationsBatchExportsPauseCreate`

Pause a BatchExport.

```ts
posthog.orgOrganizationsBatchExportsPauseCreate(): Promise<unknown>
```

<sub>`POST /api/organizations/{organization_id}/batch_exports/{id}/pause/` · `org_organizations_batch_exports_pause_create`</sub>

## `posthog.orgOrganizationsBatchExportsRunTestStepCreate`

```ts
posthog.orgOrganizationsBatchExportsRunTestStepCreate(): Promise<unknown>
```

<sub>`POST /api/organizations/{organization_id}/batch_exports/{id}/run_test_step/` · `org_organizations_batch_exports_run_test_step_create`</sub>

## `posthog.orgOrganizationsBatchExportsUnpauseCreate`

Unpause a BatchExport.

```ts
posthog.orgOrganizationsBatchExportsUnpauseCreate(): Promise<unknown>
```

<sub>`POST /api/organizations/{organization_id}/batch_exports/{id}/unpause/` · `org_organizations_batch_exports_unpause_create`</sub>

## `posthog.orgOrganizationsBatchExportsRunTestStepNewCreate`

```ts
posthog.orgOrganizationsBatchExportsRunTestStepNewCreate(): Promise<unknown>
```

<sub>`POST /api/organizations/{organization_id}/batch_exports/run_test_step_new/` · `org_organizations_batch_exports_run_test_step_new_create`</sub>

## `posthog.orgOrganizationsBatchExportsTestRetrieve`

```ts
posthog.orgOrganizationsBatchExportsTestRetrieve(): Promise<unknown>
```

<sub>`GET /api/organizations/{organization_id}/batch_exports/test/` · `org_organizations_batch_exports_test_retrieve`</sub>

## `posthog.batchExportsList`

```ts
posthog.batchExportsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; ...>
```

<sub>`GET /api/projects/{project_id}/batch_exports/` · `batch_exports_list`</sub>

## `posthog.batchExportsCreate`

```ts
posthog.batchExportsCreate(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`POST /api/projects/{project_id}/batch_exports/` · `batch_exports_create`</sub>

## `posthog.batchExportsBackfillsList`

ViewSet for BatchExportBackfill models. Allows creating and reading backfills, but not updating or deleting them.

```ts
posthog.batchExportsBackfillsList(): Promise<{ next?: string | null; previous?: string | null; results: ({ id: string; progress: { [key: string]: unknown } | null; start_at?: string | null; end_at?: string | null; status: "Cancelled" | "Completed" | "ContinuedAsNew" | "Failed" | "FailedRetryable" | "Terminated" | "TimedOut" | "Running" | "Starting"; created_at: string; finished_at?: string | null; last_updated_at: string; total_records_coun...>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{batch_export_id}/backfills/` · `batch_exports_backfills_list`</sub>

## `posthog.batchExportsBackfillsCreate`

Create a new backfill for a BatchExport.

```ts
posthog.batchExportsBackfillsCreate(): Promise<{ id: string; progress: { [key: string]: unknown } | null; start_at?: string | null; end_at?: string | null; status: "Cancelled" | "Completed" | "ContinuedAsNew" | "Failed" | "FailedRetryable" | "Terminated" | "TimedOut" | "Running" | "Starting"; created_at: string; finished_at?: string | null; last_updated_at: string; total_records_count?: number | null; adjusted_start_at?: string | null; team: ...>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{batch_export_id}/backfills/` · `batch_exports_backfills_create`</sub>

## `posthog.batchExportsBackfillsRetrieve`

ViewSet for BatchExportBackfill models. Allows creating and reading backfills, but not updating or deleting them.

```ts
posthog.batchExportsBackfillsRetrieve(): Promise<{ id: string; progress: { [key: string]: unknown } | null; start_at?: string | null; end_at?: string | null; status: "Cancelled" | "Completed" | "ContinuedAsNew" | "Failed" | "FailedRetryable" | "Terminated" | "TimedOut" | "Running" | "Starting"; created_at: string; finished_at?: string | null; last_updated_at: string; total_records_count?: number | null; adjusted_start_at?: string | null; team: ...>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{batch_export_id}/backfills/{id}/` · `batch_exports_backfills_retrieve`</sub>

## `posthog.batchExportsBackfillsCancelCreate`

Cancel a batch export backfill.

```ts
posthog.batchExportsBackfillsCancelCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{batch_export_id}/backfills/{id}/cancel/` · `batch_exports_backfills_cancel_create`</sub>

## `posthog.batchExportsRunsList`

```ts
posthog.batchExportsRunsList(): Promise<{ next?: string | null; previous?: string | null; results: ({ id: string; status: "Cancelled" | "Completed" | "ContinuedAsNew" | "Failed" | "FailedRetryable" | "FailedBilling" | "Terminated" | "TimedOut" | "Running" | "Starting"; records_completed?: number | null; records_failed?: number | null; latest_error?: string | null; data_interval_start?: string | null; data_interval_end: string; cursor?:...>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{batch_export_id}/runs/` · `batch_exports_runs_list`</sub>

## `posthog.batchExportsRunsRetrieve`

```ts
posthog.batchExportsRunsRetrieve(): Promise<{ id: string; status: "Cancelled" | "Completed" | "ContinuedAsNew" | "Failed" | "FailedRetryable" | "FailedBilling" | "Terminated" | "TimedOut" | "Running" | "Starting"; records_completed?: number | null; records_failed?: number | null; latest_error?: string | null; data_interval_start?: string | null; data_interval_end: string; cursor?: string | null; created_at: string; finished_at?: string | n...>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/` · `batch_exports_runs_retrieve`</sub>

## `posthog.batchExportsRunsCancelCreate`

Cancel a batch export run.

```ts
posthog.batchExportsRunsCancelCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/cancel/` · `batch_exports_runs_cancel_create`</sub>

## `posthog.batchExportsRunsLogsRetrieve`

```ts
posthog.batchExportsRunsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/logs/` · `batch_exports_runs_logs_retrieve`</sub>

## `posthog.batchExportsRunsRetryCreate`

Retry a batch export run. We use the same underlying mechanism as when backfilling a batch export, as retrying a run is the same as backfilling one run.

```ts
posthog.batchExportsRunsRetryCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/retry/` · `batch_exports_runs_retry_create`</sub>

## `posthog.batchExportsDestroy`

```ts
posthog.batchExportsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/batch_exports/{id}/` · `batch_exports_destroy`</sub>

## `posthog.batchExportsRetrieve`

```ts
posthog.batchExportsRetrieve(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{id}/` · `batch_exports_retrieve`</sub>

## `posthog.batchExportsPartialUpdate`

```ts
posthog.batchExportsPartialUpdate(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`PATCH /api/projects/{project_id}/batch_exports/{id}/` · `batch_exports_partial_update`</sub>

## `posthog.batchExportsUpdate`

```ts
posthog.batchExportsUpdate(): Promise<{ id: string; team_id: number; name: string; model?: "events" | "persons" | "sessions" | "hogql" | "" | null; destination: { type: "S3" | "AwsS3" | "S3Compatible" | "Snowflake" | "Postgres" | "Redshift" | "BigQuery" | "Databricks" | "AzureBlob" | "Workflows" | "HTTP" | "NoOp" | "FileDownload"; config: { http_path: string; catalog: string; schema: string; table_name: string; use_variant_type?: boo...>
```

<sub>`PUT /api/projects/{project_id}/batch_exports/{id}/` · `batch_exports_update`</sub>

## `posthog.batchExportsLogsRetrieve`

```ts
posthog.batchExportsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/batch_exports/{id}/logs/` · `batch_exports_logs_retrieve`</sub>

## `posthog.batchExportsPauseCreate`

Pause a BatchExport.

```ts
posthog.batchExportsPauseCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{id}/pause/` · `batch_exports_pause_create`</sub>

## `posthog.batchExportsRunTestStepCreate`

```ts
posthog.batchExportsRunTestStepCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{id}/run_test_step/` · `batch_exports_run_test_step_create`</sub>

## `posthog.batchExportsUnpauseCreate`

Unpause a BatchExport.

```ts
posthog.batchExportsUnpauseCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/{id}/unpause/` · `batch_exports_unpause_create`</sub>

## `posthog.batchExportsRunTestStepNewCreate`

```ts
posthog.batchExportsRunTestStepNewCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/batch_exports/run_test_step_new/` · `batch_exports_run_test_step_new_create`</sub>

## `posthog.batchExportsTestRetrieve`

```ts
posthog.batchExportsTestRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/batch_exports/test/` · `batch_exports_test_retrieve`</sub>

## `posthog.fileDownloadBatchExportsList`

```ts
posthog.fileDownloadBatchExportsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; status: "Cancelled" | "Completed" | "ContinuedAsNew" | "Failed" | "FailedRetryable" | "FailedBilling" | "Terminated" | "TimedOut" | "Running" | "Starting" })[] }>
```

<sub>`GET /api/projects/{project_id}/file_download_batch_exports/` · `file_download_batch_exports_list`</sub>

## `posthog.fileDownloadBatchExportsCreate`

Create and start a batch export on demand run to download a file.

```ts
posthog.fileDownloadBatchExportsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_download_batch_exports/` · `file_download_batch_exports_create`</sub>

## `posthog.fileDownloadBatchExportsRetrieve`

Get a batch export on demand run. If the underlying batch export run has completed, we return keys to the generated file downloads so that users may download them by making a request to /download.

```ts
posthog.fileDownloadBatchExportsRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/file_download_batch_exports/{id}/` · `file_download_batch_exports_retrieve`</sub>

## `posthog.fileDownloadBatchExportsCancelCreate`

Cancel an ongoing file-download batch export.

```ts
posthog.fileDownloadBatchExportsCancelCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/file_download_batch_exports/{id}/cancel/` · `file_download_batch_exports_cancel_create`</sub>

## `posthog.fileDownloadBatchExportsDownloadRetrieve`

Download a file (or a part) from this batch export run. Users can provide a part component with an id or index, or no part component at all: * If part id is included: The file download matching the id is downloaded. * If part index is included: The file download matching the index (as ordered by key) is downloaded. * If no part component is present: If there is only one file downloaded, that is downloaded. Otherwise the first one as sorted by key is downloaded.

```ts
posthog.fileDownloadBatchExportsDownloadRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/file_download_batch_exports/{id}/download/` · `file_download_batch_exports_download_retrieve`</sub>

## `posthog.fileDownloadBatchExportsLogsRetrieve`

```ts
posthog.fileDownloadBatchExportsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/file_download_batch_exports/{id}/logs/` · `file_download_batch_exports_logs_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

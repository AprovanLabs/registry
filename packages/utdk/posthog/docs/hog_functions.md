# Hog Functions

15 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.hogFunctionsList`

```ts
posthog.hogFunctionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; type: string | null; name: string | null; description: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organi...>
```

<sub>`GET /api/projects/{project_id}/hog_functions/` · `hog_functions_list`</sub>

## `posthog.hogFunctionsCreate`

```ts
posthog.hogFunctionsCreate(): Promise<{ id: string; type?: "destination" | "site_destination" | "internal_destination" | "source_webhook" | "warehouse_source_webhook" | "site_app" | "transformation" | "transformation_log" | null; name?: string | null; description?: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?...>
```

<sub>`POST /api/projects/{project_id}/hog_functions/` · `hog_functions_create`</sub>

## `posthog.hogFunctionsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.hogFunctionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/hog_functions/{id}/` · `hog_functions_destroy`</sub>

## `posthog.hogFunctionsRetrieve`

```ts
posthog.hogFunctionsRetrieve(): Promise<{ id: string; type?: "destination" | "site_destination" | "internal_destination" | "source_webhook" | "warehouse_source_webhook" | "site_app" | "transformation" | "transformation_log" | null; name?: string | null; description?: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?...>
```

<sub>`GET /api/projects/{project_id}/hog_functions/{id}/` · `hog_functions_retrieve`</sub>

## `posthog.hogFunctionsPartialUpdate`

```ts
posthog.hogFunctionsPartialUpdate(): Promise<{ id: string; type?: "destination" | "site_destination" | "internal_destination" | "source_webhook" | "warehouse_source_webhook" | "site_app" | "transformation" | "transformation_log" | null; name?: string | null; description?: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?...>
```

<sub>`PATCH /api/projects/{project_id}/hog_functions/{id}/` · `hog_functions_partial_update`</sub>

## `posthog.hogFunctionsUpdate`

```ts
posthog.hogFunctionsUpdate(): Promise<{ id: string; type?: "destination" | "site_destination" | "internal_destination" | "source_webhook" | "warehouse_source_webhook" | "site_app" | "transformation" | "transformation_log" | null; name?: string | null; description?: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?...>
```

<sub>`PUT /api/projects/{project_id}/hog_functions/{id}/` · `hog_functions_update`</sub>

## `posthog.hogFunctionsEnableBackfillsCreate`

```ts
posthog.hogFunctionsEnableBackfillsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/hog_functions/{id}/enable_backfills/` · `hog_functions_enable_backfills_create`</sub>

## `posthog.hogFunctionsInvocationsCreate`

```ts
posthog.hogFunctionsInvocationsCreate(): Promise<{ configuration: { id: string; type?: "destination" | "site_destination" | "internal_destination" | "source_webhook" | "warehouse_source_webhook" | "site_app" | "transformation" | "transformation_log" | null; name?: string | null; description?: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; i...>
```

<sub>`POST /api/projects/{project_id}/hog_functions/{id}/invocations/` · `hog_functions_invocations_create`</sub>

## `posthog.hogFunctionsLogsRetrieve`

```ts
posthog.hogFunctionsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/hog_functions/{id}/logs/` · `hog_functions_logs_retrieve`</sub>

## `posthog.hogFunctionsMetricsRetrieve`

```ts
posthog.hogFunctionsMetricsRetrieve(): Promise<{ labels: (string)[]; series: ({ name: string; values: (number)[] })[] }>
```

<sub>`GET /api/projects/{project_id}/hog_functions/{id}/metrics/` · `hog_functions_metrics_retrieve`</sub>

## `posthog.hogFunctionsMetricsTotalsRetrieve`

```ts
posthog.hogFunctionsMetricsTotalsRetrieve(): Promise<{ totals: { [key: string]: number | undefined } }>
```

<sub>`GET /api/projects/{project_id}/hog_functions/{id}/metrics/totals/` · `hog_functions_metrics_totals_retrieve`</sub>

## `posthog.hogFunctionsRerunCreate`

Rerun past invocations of this hog function from their stored payloads. The CDP worker reads matching rows from the `hog_invocation_results` ClickHouse table, rehydrates the invocation from the stored `invocation_globals`, and re-enqueues onto cyclotron. Each rerun run reuses the original `invocation_id` with `is_retry=1` set on the new lifecycle row so the UI can surface that it was a rerun. Only types a cyclotron worker executes (`TYPES_THAT_CAN_RERUN`) can be rerun: rerun re-enqueues onto the cyclotron hog queue, and other types run elsewhere (source webhooks inline in the cdp-api HTTP handler, transformations during ingestion, `site_*` transpiled to client-side JS). A re-enqueued invocation of one of those would never drain and wedges the partition, so a rerun of a non-rerunnable type is rejected with a 400 here. Because rerun replays historical event/person/group data, it requires `person:read` and `group:read` on top of `hog_function:write`.

```ts
posthog.hogFunctionsRerunCreate(): Promise<{ rerun_job_id: string; queued_count: number; skipped_count: number }>
```

<sub>`POST /api/projects/{project_id}/hog_functions/{id}/rerun/` · `hog_functions_rerun_create`</sub>

## `posthog.hogFunctionsIconRetrieve`

```ts
posthog.hogFunctionsIconRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/hog_functions/icon/` · `hog_functions_icon_retrieve`</sub>

## `posthog.hogFunctionsIconsRetrieve`

```ts
posthog.hogFunctionsIconsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/hog_functions/icons/` · `hog_functions_icons_retrieve`</sub>

## `posthog.hogFunctionsRearrangePartialUpdate`

Update the execution order of multiple HogFunctions.

```ts
posthog.hogFunctionsRearrangePartialUpdate(): Promise<({ id: string; type?: "destination" | "site_destination" | "internal_destination" | "source_webhook" | "warehouse_source_webhook" | "site_app" | "transformation" | "transformation_log" | null; name?: string | null; description?: string; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified...>
```

<sub>`PATCH /api/projects/{project_id}/hog_functions/rearrange/` · `hog_functions_rearrange_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

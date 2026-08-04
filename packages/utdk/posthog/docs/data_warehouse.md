# Data Warehouse

17 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.dataWarehouseCheckDatabaseNameRetrieve`

Check if a database name is available.

```ts
posthog.dataWarehouseCheckDatabaseNameRetrieve(): Promise<{ name: string; available: boolean }>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/check-database-name/` · `data_warehouse_check_database_name_retrieve`</sub>

## `posthog.dataWarehouseCheckSchemaNameRetrieve`

Check if a schema name is free within the organization's managed warehouse.

```ts
posthog.dataWarehouseCheckSchemaNameRetrieve(): Promise<{ name: string; available: boolean }>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/check-schema-name/` · `data_warehouse_check_schema_name_retrieve`</sub>

## `posthog.dataWarehouseCompletedActivityRetrieve`

Returns completed/non-running activities (jobs with status 'Completed'). Supports pagination and cutoff time filtering.

```ts
posthog.dataWarehouseCompletedActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/completed_activity/` · `data_warehouse_completed_activity_retrieve`</sub>

## `posthog.dataWarehouseDataHealthIssuesRetrieve`

Returns failed/disabled data pipeline items for the Pipeline status side panel. Includes: materializations, syncs, sources, destinations, and transformations.

```ts
posthog.dataWarehouseDataHealthIssuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/data_health_issues/` · `data_warehouse_data_health_issues_retrieve`</sub>

## `posthog.dataWarehouseDataOpsDashboardRetrieve`

Returns the data ops overview dashboard ID for this team, creating it if it doesn't exist yet.

```ts
posthog.dataWarehouseDataOpsDashboardRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/data_ops_dashboard/` · `data_warehouse_data_ops_dashboard_retrieve`</sub>

## `posthog.dataWarehouseDeleteOrgDestroy`

Remove the organization's provisioning record after teardown, freeing its warehouse name. Called once the warehouse status reports `deleted`: deprovision tears the warehouse down, this removes the now-empty org row so the database_name can be reused. Restricted to organization admins.

```ts
posthog.dataWarehouseDeleteOrgDestroy(): Promise<{ status?: string; org?: string }>
```

<sub>`DELETE /api/projects/{project_id}/data_warehouse/delete-org/` · `data_warehouse_delete_org_destroy`</sub>

## `posthog.dataWarehouseDeprovisionCreate`

Start deprovisioning the organization's managed warehouse. Restricted to organization admins.

```ts
posthog.dataWarehouseDeprovisionCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/data_warehouse/deprovision/` · `data_warehouse_deprovision_create`</sub>

## `posthog.dataWarehouseJobStatsRetrieve`

Returns success and failed job statistics for the last 1, 7, or 30 days. Query parameter 'days' can be 1, 7, or 30 (default: 7).

```ts
posthog.dataWarehouseJobStatsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/job_stats/` · `data_warehouse_job_stats_retrieve`</sub>

## `posthog.dataWarehouseManagedWarehouseDataStatusRetrieve`

Get events, persons, and imported source readiness for the managed warehouse.

```ts
posthog.dataWarehouseManagedWarehouseDataStatusRetrieve(): Promise<{ overall_readiness_state: "not_configured" | "waiting" | "backfilling" | "up_to_date" | "needs_attention" | "sync_paused"; events: { dataset: "events" | "persons"; readiness_state: "not_configured" | "waiting" | "backfilling" | "up_to_date" | "needs_attention" | "sync_paused"; detail: string; completed_partitions: number; total_partitions: number | null; current_partition: string | null; last_up...>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/managed-warehouse-data-status/` · `data_warehouse_managed_warehouse_data_status_retrieve`</sub>

## `posthog.dataWarehouseManagedWarehouseSourceSchemasRetrieve`

Get per-schema detail for one imported source

```ts
posthog.dataWarehouseManagedWarehouseSourceSchemasRetrieve(): Promise<{ schemas: ({ schema_id: string; source_id: string; source_name: string; source_type: string; table_name: string; readiness_state: "not_configured" | "waiting" | "backfilling" | "up_to_date" | "needs_attention" | "sync_paused"; detail: string; workflow_type: "copy" | "register" | null; workflow_status: "running" | "completed" | "failed" | "skipped" | "stale" | null; workflow_started_at: string | ...>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/managed-warehouse-source-schemas/` · `data_warehouse_managed_warehouse_source_schemas_retrieve`</sub>

## `posthog.dataWarehouseOnboardTeamCreate`

Onboard this project onto the organization's existing managed warehouse. Requires a schema name and records the project's membership in the Duckgres control plane. Restricted to organization admins.

```ts
posthog.dataWarehouseOnboardTeamCreate(): Promise<{ onboarded: boolean; schema_name: string }>
```

<sub>`POST /api/projects/{project_id}/data_warehouse/onboard-team/` · `data_warehouse_onboard_team_create`</sub>

## `posthog.dataWarehousePropertyValuesRetrieve`

API endpoints for data warehouse aggregate statistics and operations.

```ts
posthog.dataWarehousePropertyValuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/property_values/` · `data_warehouse_property_values_retrieve`</sub>

## `posthog.dataWarehouseProvisionCreate`

Start provisioning a managed warehouse for this organization (shared by all its teams).

```ts
posthog.dataWarehouseProvisionCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/data_warehouse/provision/` · `data_warehouse_provision_create`</sub>

## `posthog.dataWarehouseResetPasswordCreate`

Reset the root password for the managed warehouse.

```ts
posthog.dataWarehouseResetPasswordCreate(): Promise<{ username: string; password: string }>
```

<sub>`POST /api/projects/{project_id}/data_warehouse/reset-password/` · `data_warehouse_reset_password_create`</sub>

## `posthog.dataWarehouseRunningActivityRetrieve`

Returns currently running activities (jobs with status 'Running'). Supports pagination and cutoff time filtering.

```ts
posthog.dataWarehouseRunningActivityRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/running_activity/` · `data_warehouse_running_activity_retrieve`</sub>

## `posthog.dataWarehouseTotalRowsStatsRetrieve`

Returns aggregated statistics for the data warehouse total rows processed within the current billing period. Used by the frontend data warehouse scene to display usage information.

```ts
posthog.dataWarehouseTotalRowsStatsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/total_rows_stats/` · `data_warehouse_total_rows_stats_retrieve`</sub>

## `posthog.dataWarehouseWarehouseStatusRetrieve`

Get the current provisioning status of the managed warehouse, with this project's onboarding state.

```ts
posthog.dataWarehouseWarehouseStatusRetrieve(): Promise<{ org_id: string; state: "pending" | "provisioning" | "ready" | "failed" | "deleting" | "deleted"; status_message: string; s3_state: string; metadata_store_state: string; identity_state: string; secrets_state: string; ready_at: string | null; failed_at: string | null; connection?: { host: string; port: number; database: string; username: string } | null; has_backfill: boolean; table_suffix: strin...>
```

<sub>`GET /api/projects/{project_id}/data_warehouse/warehouse_status/` · `data_warehouse_warehouse_status_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

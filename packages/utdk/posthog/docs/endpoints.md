# Endpoints

16 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.endpointsList`

List all endpoints for the team.

```ts
posthog.endpointsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string | null; query: unknown; is_active: boolean; data_freshness_seconds: number; endpoint_path: string; url: string | null; ui_url: string | null; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last...>
```

<sub>`GET /api/projects/{project_id}/endpoints/` · `endpoints_list`</sub>

## `posthog.endpointsCreate`

Create a new endpoint.

```ts
posthog.endpointsCreate(): Promise<{ id: string; name: string; description: string | null; query: unknown; is_active: boolean; data_freshness_seconds: number; endpoint_path: string; url: string | null; ui_url: string | null; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog...>
```

<sub>`POST /api/projects/{project_id}/endpoints/` · `endpoints_create`</sub>

## `posthog.endpointsDestroy`

Delete an endpoint and clean up materialized query.

```ts
posthog.endpointsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/endpoints/{name}/` · `endpoints_destroy`</sub>

## `posthog.endpointsRetrieve`

Retrieve an endpoint, or a specific version via ?version=N.

```ts
posthog.endpointsRetrieve(): Promise<{ id: string; name: string; description: string | null; query: unknown; is_active: boolean; data_freshness_seconds: number; endpoint_path: string; url: string | null; ui_url: string | null; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog...>
```

<sub>`GET /api/projects/{project_id}/endpoints/{name}/` · `endpoints_retrieve`</sub>

## `posthog.endpointsPartialUpdate`

Update an existing endpoint.

```ts
posthog.endpointsPartialUpdate(): Promise<{ id: string; name: string; description: string | null; query: unknown; is_active: boolean; data_freshness_seconds: number; endpoint_path: string; url: string | null; ui_url: string | null; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog...>
```

<sub>`PATCH /api/projects/{project_id}/endpoints/{name}/` · `endpoints_partial_update`</sub>

## `posthog.endpointsUpdate`

Update an existing endpoint. Parameters are optional. Pass version in body or ?version=N query param to target a specific version.

```ts
posthog.endpointsUpdate(): Promise<{ id: string; name: string; description: string | null; query: unknown; is_active: boolean; data_freshness_seconds: number; endpoint_path: string; url: string | null; ui_url: string | null; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog...>
```

<sub>`PUT /api/projects/{project_id}/endpoints/{name}/` · `endpoints_update`</sub>

## `posthog.endpointsLogsRetrieve`

```ts
posthog.endpointsLogsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/endpoints/{name}/logs/` · `endpoints_logs_retrieve`</sub>

## `posthog.endpointsMaterializationPreviewCreate`

Preview the materialization transform for an endpoint. Shows what the query will look like after materialization, including range pair detection and bucket functions.

```ts
posthog.endpointsMaterializationPreviewCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/endpoints/{name}/materialization_preview/` · `endpoints_materialization_preview_create`</sub>

## `posthog.endpointsMaterializationStatusRetrieve`

Get materialization status for an endpoint. Supports ?version=N query param.

```ts
posthog.endpointsMaterializationStatusRetrieve(): Promise<{ name: string; status?: string; can_materialize: boolean; reason?: string | null; last_materialized_at?: string | null; error?: string; saved_query_id?: string | null }>
```

<sub>`GET /api/projects/{project_id}/endpoints/{name}/materialization_status/` · `endpoints_materialization_status_retrieve`</sub>

## `posthog.endpointsMaterializationSuggestionCreate`

Ask AI to rewrite the endpoint's query into a semantically equivalent form that can be materialized. Only applicable to SQL (HogQL) endpoints that currently fail the materialization checks. The suggestion is validated against the live checks before being returned; nothing is saved. Requires the organization's AI data processing approval.

```ts
posthog.endpointsMaterializationSuggestionCreate(): Promise<{ suggestion_status: "ok" | "cannot_fix" | "invalid" | "model_error"; suggested_query: string | null; explanation: string | null; attempts: number; error: string | null; original_reason: string }>
```

<sub>`POST /api/projects/{project_id}/endpoints/{name}/materialization_suggestion/` · `endpoints_materialization_suggestion_create`</sub>

## `posthog.endpointsOpenapiSpecRetrieve`

Get OpenAPI 3.0 specification for this endpoint. Use this to generate typed SDK clients.

```ts
posthog.endpointsOpenapiSpecRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/endpoints/{name}/openapi.json/` · `endpoints_openapi_spec_retrieve`</sub>

## `posthog.endpointsRunRetrieve`

Execute endpoint with optional materialization. Supports version parameter, runs latest version if not set.

```ts
posthog.endpointsRunRetrieve(): Promise<{ name: string; execution_id?: string; results?: (unknown)[]; columns?: (string)[]; hasMore?: boolean; endpoint_version?: number }>
```

<sub>`GET /api/projects/{project_id}/endpoints/{name}/run/` · `endpoints_run_retrieve`</sub>

## `posthog.endpointsRunCreate`

Execute endpoint with optional materialization. Supports version parameter, runs latest version if not set.

```ts
posthog.endpointsRunCreate(): Promise<{ name: string; execution_id?: string; results?: (unknown)[]; columns?: (string)[]; hasMore?: boolean; endpoint_version?: number }>
```

<sub>`POST /api/projects/{project_id}/endpoints/{name}/run/` · `endpoints_run_create`</sub>

## `posthog.endpointsVersionsList`

List all versions for an endpoint.

```ts
posthog.endpointsVersionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; description: string | null; query: unknown; is_active: boolean; data_freshness_seconds: number; endpoint_path: string; url: string | null; ui_url: string | null; created_at: string; updated_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last...>
```

<sub>`GET /api/projects/{project_id}/endpoints/{name}/versions/` · `endpoints_versions_list`</sub>

## `posthog.endpointsLastExecutionTimesCreate`

Get the most recent execution time per endpoint (endpoint-level). Timestamps are recorded by the run path for personal-API-key calls. For per-version usage, query the query_log table directly.

```ts
posthog.endpointsLastExecutionTimesCreate(): Promise<{ query_status: { complete?: boolean | null; dashboard_id?: number | null; end_time?: string | null; error?: boolean | null; error_code?: string | null; error_message?: string | null; expiration_time?: string | null; id: string; insight_id?: number | null; labels?: (string)[] | null; pickup_time?: string | null; query_async?: boolean; query_progress?: { active_cpu_time: number; bytes_read: number...>
```

<sub>`POST /api/projects/{project_id}/endpoints/last_execution_times/` · `endpoints_last_execution_times_create`</sub>

## `posthog.endpointsMaterializationConditionsRetrieve`

Get the source code of the live materialization checks, plus the rewrite contract. Lets an agent rewrite a rejected endpoint query itself: fetch these conditions, produce a semantically equivalent query that passes every check, update the endpoint with it, then confirm via materialization_status. The source is read from the running system, so it always matches the checks this instance enforces.

```ts
posthog.endpointsMaterializationConditionsRetrieve(): Promise<{ conditions_source: string; rewrite_contract: string }>
```

<sub>`GET /api/projects/{project_id}/endpoints/materialization_conditions/` · `endpoints_materialization_conditions_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

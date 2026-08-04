# Data Catalog

20 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.dataCatalogCertificationsList`

Trust marks on warehouse tables and views. Reads exclude soft-deleted targets.

```ts
posthog.dataCatalogCertificationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; table: string | null; saved_query: string | null; target_type: string; target_name: string; status: string; notes?: string; certified_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key...>
```

<sub>`GET /api/projects/{project_id}/data_catalog/certifications/` · `data_catalog_certifications_list`</sub>

## `posthog.dataCatalogCertificationsCreate`

Trust marks on warehouse tables and views. Reads exclude soft-deleted targets.

```ts
posthog.dataCatalogCertificationsCreate(): Promise<{ id: string; table: string | null; saved_query: string | null; target_type: string; target_name: string; status: string; notes?: string; certified_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" ...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/certifications/` · `data_catalog_certifications_create`</sub>

## `posthog.dataCatalogCertificationsDestroy`

Trust marks on warehouse tables and views. Reads exclude soft-deleted targets.

```ts
posthog.dataCatalogCertificationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/data_catalog/certifications/{id}/` · `data_catalog_certifications_destroy`</sub>

## `posthog.dataCatalogCertificationsRetrieve`

Trust marks on warehouse tables and views. Reads exclude soft-deleted targets.

```ts
posthog.dataCatalogCertificationsRetrieve(): Promise<{ id: string; table: string | null; saved_query: string | null; target_type: string; target_name: string; status: string; notes?: string; certified_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" ...>
```

<sub>`GET /api/projects/{project_id}/data_catalog/certifications/{id}/` · `data_catalog_certifications_retrieve`</sub>

## `posthog.dataCatalogCertificationsCertifyCreate`

Mark the target as certified (prefer this source).

```ts
posthog.dataCatalogCertificationsCertifyCreate(): Promise<{ id: string; table: string | null; saved_query: string | null; target_type: string; target_name: string; status: string; notes?: string; certified_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" ...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/certifications/{id}/certify/` · `data_catalog_certifications_certify_create`</sub>

## `posthog.dataCatalogCertificationsDeprecateCreate`

Mark the target as deprecated (avoid this source).

```ts
posthog.dataCatalogCertificationsDeprecateCreate(): Promise<{ id: string; table: string | null; saved_query: string | null; target_type: string; target_name: string; status: string; notes?: string; certified_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" ...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/certifications/{id}/deprecate/` · `data_catalog_certifications_deprecate_create`</sub>

## `posthog.dataCatalogMetricsList`

CRUD for catalog metrics, addressed by their reserved ``name`` (e.g. /metrics/mrr/).

```ts
posthog.dataCatalogMetricsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: stri...>
```

<sub>`GET /api/projects/{project_id}/data_catalog/metrics/` · `data_catalog_metrics_list`</sub>

## `posthog.dataCatalogMetricsCreate`

Create a metric, or refine the one already holding this name for the team.

```ts
posthog.dataCatalogMetricsCreate(): Promise<{ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; e...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/metrics/` · `data_catalog_metrics_create`</sub>

## `posthog.dataCatalogMetricsDestroy`

CRUD for catalog metrics, addressed by their reserved ``name`` (e.g. /metrics/mrr/).

```ts
posthog.dataCatalogMetricsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/data_catalog/metrics/{name}/` · `data_catalog_metrics_destroy`</sub>

## `posthog.dataCatalogMetricsRetrieve`

CRUD for catalog metrics, addressed by their reserved ``name`` (e.g. /metrics/mrr/).

```ts
posthog.dataCatalogMetricsRetrieve(): Promise<{ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; e...>
```

<sub>`GET /api/projects/{project_id}/data_catalog/metrics/{name}/` · `data_catalog_metrics_retrieve`</sub>

## `posthog.dataCatalogMetricsPartialUpdate`

CRUD for catalog metrics, addressed by their reserved ``name`` (e.g. /metrics/mrr/).

```ts
posthog.dataCatalogMetricsPartialUpdate(): Promise<{ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; e...>
```

<sub>`PATCH /api/projects/{project_id}/data_catalog/metrics/{name}/` · `data_catalog_metrics_partial_update`</sub>

## `posthog.dataCatalogMetricsUpdate`

CRUD for catalog metrics, addressed by their reserved ``name`` (e.g. /metrics/mrr/).

```ts
posthog.dataCatalogMetricsUpdate(): Promise<{ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; e...>
```

<sub>`PUT /api/projects/{project_id}/data_catalog/metrics/{name}/` · `data_catalog_metrics_update`</sub>

## `posthog.dataCatalogMetricsApproveCreate`

Bless a metric as canonical. Returns 409 while the metric is drifted from its insight.

```ts
posthog.dataCatalogMetricsApproveCreate(): Promise<{ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; e...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/metrics/{name}/approve/` · `data_catalog_metrics_approve_create`</sub>

## `posthog.dataCatalogMetricsRefreshFromInsightCreate`

Re-snapshot the linked insight's current query into the definition.

```ts
posthog.dataCatalogMetricsRefreshFromInsightCreate(): Promise<{ id: string; name: string; display_name?: string; description: string; unit?: string; owner: string | null; definition?: { [key: string]: unknown } | null; definition_kind: string | null; referenced_table_names: unknown; status: string; is_drifted: boolean; approved_at: string | null; approved_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; e...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/metrics/{name}/refresh_from_insight/` · `data_catalog_metrics_refresh_from_insight_create`</sub>

## `posthog.dataCatalogMetricsRunCreate`

Execute the metric's definition and return the normalized result envelope.

```ts
posthog.dataCatalogMetricsRunCreate(): Promise<{ status: string; is_drifted: boolean; unit: string | null; kind: string | null; results: unknown; compiled_query: string | null; query_status: unknown; posthog_url: string | null; instructions: string | null }>
```

<sub>`POST /api/projects/{project_id}/data_catalog/metrics/{name}/run/` · `data_catalog_metrics_run_create`</sub>

## `posthog.dataCatalogRelationshipProposalsList`

Reviewed join facts. Accepting one promotes it to a real DataWarehouseJoin; rejections persist.

```ts
posthog.dataCatalogRelationshipProposalsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; source_table_name: string; source_table_key: string; joining_table_name: string; joining_table_key: string; field_name: string; configuration?: unknown; confidence?: number | null; reasoning?: string; evidence?: unknown; status: string; reviewed_by: { id: number; uuid: string; distinct_id?: string | null; fir...>
```

<sub>`GET /api/projects/{project_id}/data_catalog/relationship_proposals/` · `data_catalog_relationship_proposals_list`</sub>

## `posthog.dataCatalogRelationshipProposalsCreate`

Reviewed join facts. Accepting one promotes it to a real DataWarehouseJoin; rejections persist.

```ts
posthog.dataCatalogRelationshipProposalsCreate(): Promise<{ id: string; source_table_name: string; source_table_key: string; joining_table_name: string; joining_table_key: string; field_name: string; configuration?: unknown; confidence?: number | null; reasoning?: string; evidence?: unknown; status: string; reviewed_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: bo...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/relationship_proposals/` · `data_catalog_relationship_proposals_create`</sub>

## `posthog.dataCatalogRelationshipProposalsRetrieve`

Reviewed join facts. Accepting one promotes it to a real DataWarehouseJoin; rejections persist.

```ts
posthog.dataCatalogRelationshipProposalsRetrieve(): Promise<{ id: string; source_table_name: string; source_table_key: string; joining_table_name: string; joining_table_key: string; field_name: string; configuration?: unknown; confidence?: number | null; reasoning?: string; evidence?: unknown; status: string; reviewed_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: bo...>
```

<sub>`GET /api/projects/{project_id}/data_catalog/relationship_proposals/{id}/` · `data_catalog_relationship_proposals_retrieve`</sub>

## `posthog.dataCatalogRelationshipProposalsAcceptCreate`

Promote the proposal to a real warehouse join after re-validating and probing it.

```ts
posthog.dataCatalogRelationshipProposalsAcceptCreate(): Promise<{ id: string; source_table_name: string; source_table_key: string; joining_table_name: string; joining_table_key: string; field_name: string; configuration?: unknown; confidence?: number | null; reasoning?: string; evidence?: unknown; status: string; reviewed_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: bo...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/relationship_proposals/{id}/accept/` · `data_catalog_relationship_proposals_accept_create`</sub>

## `posthog.dataCatalogRelationshipProposalsRejectCreate`

Reject the proposal. Persists forever so the pair is never re-proposed.

```ts
posthog.dataCatalogRelationshipProposalsRejectCreate(): Promise<{ id: string; source_table_name: string; source_table_key: string; joining_table_name: string; joining_table_key: string; field_name: string; configuration?: unknown; confidence?: number | null; reasoning?: string; evidence?: unknown; status: string; reviewed_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: bo...>
```

<sub>`POST /api/projects/{project_id}/data_catalog/relationship_proposals/{id}/reject/` · `data_catalog_relationship_proposals_reject_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

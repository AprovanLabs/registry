# Insights

25 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.insightsList`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | ...>
```

<sub>`GET /api/projects/{project_id}/insights/` · `insights_list`</sub>

## `posthog.insightsCreate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsCreate(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | null; showLastComputationRefresh?: bo...>
```

<sub>`POST /api/projects/{project_id}/insights/` · `insights_create`</sub>

## `posthog.insightsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.insightsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/insights/{id}/` · `insights_destroy`</sub>

## `posthog.insightsRetrieve`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsRetrieve(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | null; showLastComputationRefresh?: bo...>
```

<sub>`GET /api/projects/{project_id}/insights/{id}/` · `insights_retrieve`</sub>

## `posthog.insightsPartialUpdate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsPartialUpdate(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | null; showLastComputationRefresh?: bo...>
```

<sub>`PATCH /api/projects/{project_id}/insights/{id}/` · `insights_partial_update`</sub>

## `posthog.insightsUpdate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsUpdate(): Promise<{ id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: { embedded?: boolean | null; full?: boolean | null; hidePersonsModal?: boolean | null; hideTooltipOnScroll?: boolean | null; kind?: string; showCorrelationTable?: boolean | null; showFilters?: boolean | null; showHeader?: boolean | null; showLastComputation?: boolean | null; showLastComputationRefresh?: bo...>
```

<sub>`PUT /api/projects/{project_id}/insights/{id}/` · `insights_update`</sub>

## `posthog.insightsActivityRetrieve`

Audit trail for a single insight — every change made to it, by whom, and when. Use this when you want the change history of a specific insight; use the project-wide activity endpoint for a broader view.

```ts
posthog.insightsActivityRetrieve(): Promise<{ results: ({ id: string; user: { [key: string]: unknown } | null; activity: string; scope: string; item_id: string; detail?: { id: string; changes?: ({ type: string; action: string; field: string; before: unknown; after: unknown })[]; merge?: { type: string; source: unknown; target: unknown }; trigger?: { job_type: string; job_id: string; payload: unknown }; name: string; short_id: string; type:...>
```

<sub>`GET /api/projects/{project_id}/insights/{id}/activity/` · `insights_activity_retrieve`</sub>

## `posthog.insightsAnalyzeRetrieve`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsAnalyzeRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/insights/{id}/analyze/` · `insights_analyze_retrieve`</sub>

## `posthog.insightsSuggestionsRetrieve`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsSuggestionsRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/insights/{id}/suggestions/` · `insights_suggestions_retrieve`</sub>

## `posthog.insightsSuggestionsCreate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsSuggestionsCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/insights/{id}/suggestions/` · `insights_suggestions_create`</sub>

## `posthog.insightsSharingList`

```ts
posthog.insightsSharingList(): Promise<({ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null })[]>
```

<sub>`GET /api/projects/{project_id}/insights/{insight_id}/sharing/` · `insights_sharing_list`</sub>

## `posthog.insightsSharingPasswordsCreate`

Create a new password for the sharing configuration.

```ts
posthog.insightsSharingPasswordsCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/insights/{insight_id}/sharing/passwords/` · `insights_sharing_passwords_create`</sub>

## `posthog.insightsSharingPasswordsDestroy`

Delete a password from the sharing configuration.

```ts
posthog.insightsSharingPasswordsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/insights/{insight_id}/sharing/passwords/{password_id}/` · `insights_sharing_passwords_destroy`</sub>

## `posthog.insightsSharingRefreshCreate`

```ts
posthog.insightsSharingRefreshCreate(): Promise<{ created_at: string; enabled?: boolean; access_token: string | null; settings?: unknown; password_required?: boolean; share_passwords: ({ id: number; created_at: string; note?: string | null; created_by_email: string; is_active: boolean })[]; user_access_level: string | null }>
```

<sub>`POST /api/projects/{project_id}/insights/{insight_id}/sharing/refresh/` · `insights_sharing_refresh_create`</sub>

## `posthog.insightsThresholdsList`

```ts
posthog.insightsThresholdsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_at: string; name?: string; configuration: { bounds?: { lower?: number | null; upper?: number | null } | null; type: "absolute" | "percentage" }; alerts: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_...>
```

<sub>`GET /api/projects/{project_id}/insights/{insight_id}/thresholds/` · `insights_thresholds_list`</sub>

## `posthog.insightsThresholdsRetrieve`

```ts
posthog.insightsThresholdsRetrieve(): Promise<{ id: string; created_at: string; name?: string; configuration: { bounds?: { lower?: number | null; upper?: number | null } | null; type: "absolute" | "percentage" }; alerts: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | nu...>
```

<sub>`GET /api/projects/{project_id}/insights/{insight_id}/thresholds/{id}/` · `insights_thresholds_retrieve`</sub>

## `posthog.insightsAllActivityRetrieve`

Project-wide audit trail across all insights — who created, edited, deleted, or restored insights, what changed (with before/after diffs), and when. Useful for surfacing what people (or agents) have been working on recently.

```ts
posthog.insightsAllActivityRetrieve(): Promise<{ results: ({ id: string; user: { [key: string]: unknown } | null; activity: string; scope: string; item_id: string; detail?: { id: string; changes?: ({ type: string; action: string; field: string; before: unknown; after: unknown })[]; merge?: { type: string; source: unknown; target: unknown }; trigger?: { job_type: string; job_id: string; payload: unknown }; name: string; short_id: string; type:...>
```

<sub>`GET /api/projects/{project_id}/insights/activity/` · `insights_all_activity_retrieve`</sub>

## `posthog.insightsBulkDeleteCreate`

Soft-delete insights in bulk by ID. Mirrors the single-insight delete: sets deleted=True, soft-deletes the insights' dashboard tiles, and removes their linked alerts. Insights the requester cannot edit are skipped and reported in `skipped`. Reversible via the bulk_restore endpoint.

```ts
posthog.insightsBulkDeleteCreate(): Promise<{ deleted: ({ id: number; name: string | null })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/insights/bulk_delete/` · `insights_bulk_delete_create`</sub>

## `posthog.insightsBulkRestoreCreate`

Restore soft-deleted insights in bulk by ID — the inverse of bulk_delete. Sets deleted=False and re-activates the insights' dashboard tiles on dashboards that still exist. Linked alerts are not restored (they are removed on delete). Insights the requester cannot edit are reported in `skipped`.

```ts
posthog.insightsBulkRestoreCreate(): Promise<{ restored: ({ id: number; name: string | null })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/insights/bulk_restore/` · `insights_bulk_restore_create`</sub>

## `posthog.insightsBulkUpdateTagsCreate`

Bulk update tags on multiple objects. PAT access: this action has no ``required_scopes=`` on the decorator — inheriting viewsets must add ``"bulk_update_tags"`` to their ``scope_object_write_actions`` list to accept personal API keys. Without that opt-in, ``APIScopePermission`` rejects PAT requests with "This action does not support personal API key access". Done per-viewset so granting ``<scope>:write`` for one resource doesn't leak access to sibling resources that share this mixin. Accepts: - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]} Actions: - "add": Add tags to existing tags on each object - "remove": Remove specific tags from each object - "set": Replace all tags on each object with the provided list

```ts
posthog.insightsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: number; tags: (string)[] })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/insights/bulk_update_tags/` · `insights_bulk_update_tags_create`</sub>

## `posthog.insightsCancelCreate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.insightsCancelCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/insights/cancel/` · `insights_cancel_create`</sub>

## `posthog.insightsGenerateMetadataCreate`

Generate an AI-suggested name and description for an insight based on its query configuration.

```ts
posthog.insightsGenerateMetadataCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/insights/generate_metadata/` · `insights_generate_metadata_create`</sub>

## `posthog.insightsMyLastViewedRetrieve`

Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.

```ts
posthog.insightsMyLastViewedRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/insights/my_last_viewed/` · `insights_my_last_viewed_retrieve`</sub>

## `posthog.insightsTrendingRetrieve`

Returns insights ranked by view count over the last N days (default 7), highest first. Each result includes the same metadata as the standard insights list, plus a `view_count` and up to 3 recent `viewers`. Useful for surfacing the most-used insights in a project.

```ts
posthog.insightsTrendingRetrieve(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; short_id: string; name?: string | null; derived_name?: string | null; query?: unknown; dashboards?: (number)[]; dashboard_tiles: ({ id: number; dashboard_id: number; deleted?: boolean | null })[]; description?: string | null; last_refresh: string | null; refreshing: boolean; tags?: (unknown)[]; updated_at: st...>
```

<sub>`GET /api/projects/{project_id}/insights/trending/` · `insights_trending_retrieve`</sub>

## `posthog.insightsViewedCreate`

Record that the current user has just viewed one or more insights. Submitted ids that do not belong to the current project or that point at deleted insights are silently dropped. Returns 201 on success regardless of how many ids were retained.

```ts
posthog.insightsViewedCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/insights/viewed/` · `insights_viewed_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

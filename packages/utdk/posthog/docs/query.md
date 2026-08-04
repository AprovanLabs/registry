# Query

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.queryCreate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.queryCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/query/` · `query_create`</sub>

## `posthog.queryDestroy`

(Experimental)

```ts
posthog.queryDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/query/{id}/` · `query_destroy`</sub>

## `posthog.queryRetrieve`

(Experimental)

```ts
posthog.queryRetrieve(): Promise<{ query_status: { complete?: boolean | null; dashboard_id?: number | null; end_time?: string | null; error?: boolean | null; error_code?: string | null; error_message?: string | null; expiration_time?: string | null; id: string; insight_id?: number | null; labels?: (string)[] | null; pickup_time?: string | null; query_async?: boolean; query_progress?: { active_cpu_time: number; bytes_read: number...>
```

<sub>`GET /api/projects/{project_id}/query/{id}/` · `query_retrieve`</sub>

## `posthog.queryLogRetrieve`

Get query log details from query_log_archive table for a specific query_id, the query must have been issued in last 24 hours.

```ts
posthog.queryLogRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/query/{id}/log/` · `query_log_retrieve`</sub>

## `posthog.queryCreateWithKind`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.queryCreateWithKind(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/query/{query_kind}/` · `query_create_with_kind`</sub>

## `posthog.queryCheckAuthForAsyncCreate`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.queryCheckAuthForAsyncCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/query/check_auth_for_async/` · `query_check_auth_for_async_create`</sub>

## `posthog.queryDraftSqlRetrieve`

DRF ViewSet mixin that gates coalesced responses behind permission checks. The QueryCoalescingMiddleware attaches cached response data to request.META["_coalesced_response"] for followers. This mixin runs DRF's initial() (auth + permissions + throttling) before returning the cached response, ensuring the request is authorized.

```ts
posthog.queryDraftSqlRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/query/draft_sql/` · `query_draft_sql_retrieve`</sub>

## `posthog.queryUpgradeCreate`

Upgrades a query without executing it. Returns a query with all nodes migrated to the latest version.

```ts
posthog.queryUpgradeCreate(): Promise<{ query: { custom_name?: string | null; event?: string | null; fixedProperties?: ({ key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" | "is_set" | "is_not_set" | "is_date_exact" | "is_date_before" | "is_date_after" | "between" | ...>
```

<sub>`POST /api/projects/{project_id}/query/upgrade/` · `query_upgrade_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Subscriptions

10 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.subscriptionsList`

```ts
posthog.subscriptionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: number; resource_type: "insight" | "dashboard" | "ai_prompt"; dashboard?: number | null; insight?: number | null; insight_short_id: string | null; resource_name: string | null; dashboard_export_insights?: (number)[]; prompt?: string | null; ai_prompt_config?: { window?: { mode?: "since_last_sent" | "last_n_days" | "d...>
```

<sub>`GET /api/projects/{project_id}/subscriptions/` · `subscriptions_list`</sub>

## `posthog.subscriptionsCreate`

```ts
posthog.subscriptionsCreate(): Promise<{ id: number; resource_type: "insight" | "dashboard" | "ai_prompt"; dashboard?: number | null; insight?: number | null; insight_short_id: string | null; resource_name: string | null; dashboard_export_insights?: (number)[]; prompt?: string | null; ai_prompt_config?: { window?: { mode?: "since_last_sent" | "last_n_days" | "days_ago_range"; start_days_ago?: number | null; end_days_ago?: number | nul...>
```

<sub>`POST /api/projects/{project_id}/subscriptions/` · `subscriptions_create`</sub>

## `posthog.subscriptionsDestroy`

Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true

```ts
posthog.subscriptionsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/subscriptions/{id}/` · `subscriptions_destroy`</sub>

## `posthog.subscriptionsRetrieve`

```ts
posthog.subscriptionsRetrieve(): Promise<{ id: number; resource_type: "insight" | "dashboard" | "ai_prompt"; dashboard?: number | null; insight?: number | null; insight_short_id: string | null; resource_name: string | null; dashboard_export_insights?: (number)[]; prompt?: string | null; ai_prompt_config?: { window?: { mode?: "since_last_sent" | "last_n_days" | "days_ago_range"; start_days_ago?: number | null; end_days_ago?: number | nul...>
```

<sub>`GET /api/projects/{project_id}/subscriptions/{id}/` · `subscriptions_retrieve`</sub>

## `posthog.subscriptionsPartialUpdate`

```ts
posthog.subscriptionsPartialUpdate(): Promise<{ id: number; resource_type: "insight" | "dashboard" | "ai_prompt"; dashboard?: number | null; insight?: number | null; insight_short_id: string | null; resource_name: string | null; dashboard_export_insights?: (number)[]; prompt?: string | null; ai_prompt_config?: { window?: { mode?: "since_last_sent" | "last_n_days" | "days_ago_range"; start_days_ago?: number | null; end_days_ago?: number | nul...>
```

<sub>`PATCH /api/projects/{project_id}/subscriptions/{id}/` · `subscriptions_partial_update`</sub>

## `posthog.subscriptionsUpdate`

```ts
posthog.subscriptionsUpdate(): Promise<{ id: number; resource_type: "insight" | "dashboard" | "ai_prompt"; dashboard?: number | null; insight?: number | null; insight_short_id: string | null; resource_name: string | null; dashboard_export_insights?: (number)[]; prompt?: string | null; ai_prompt_config?: { window?: { mode?: "since_last_sent" | "last_n_days" | "days_ago_range"; start_days_ago?: number | null; end_days_ago?: number | nul...>
```

<sub>`PUT /api/projects/{project_id}/subscriptions/{id}/` · `subscriptions_update`</sub>

## `posthog.subscriptionsTestDeliveryCreate`

```ts
posthog.subscriptionsTestDeliveryCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/subscriptions/{id}/test-delivery/` · `subscriptions_test_delivery_create`</sub>

## `posthog.subscriptionsDeliveriesList`

List subscription deliveries

```ts
posthog.subscriptionsDeliveriesList(): Promise<{ next?: string | null; previous?: string | null; results: ({ id: string; subscription: number; temporal_workflow_id: string; idempotency_key: string; trigger_type: string; scheduled_at: string | null; target_type: string; target_value: string; exported_asset_ids: (number)[]; content_snapshot: unknown; recipient_results: unknown; status: "starting" | "completed" | "failed" | "skipped"; error: unk...>
```

<sub>`GET /api/projects/{project_id}/subscriptions/{subscription_id}/deliveries/` · `subscriptions_deliveries_list`</sub>

## `posthog.subscriptionsDeliveriesRetrieve`

Retrieve subscription delivery

```ts
posthog.subscriptionsDeliveriesRetrieve(): Promise<{ id: string; subscription: number; temporal_workflow_id: string; idempotency_key: string; trigger_type: string; scheduled_at: string | null; target_type: string; target_value: string; exported_asset_ids: (number)[]; content_snapshot: unknown; recipient_results: unknown; status: "starting" | "completed" | "failed" | "skipped"; error: unknown; created_at: string; last_updated_at: string; finished_...>
```

<sub>`GET /api/projects/{project_id}/subscriptions/{subscription_id}/deliveries/{id}/` · `subscriptions_deliveries_retrieve`</sub>

## `posthog.subscriptionsSummaryQuotaRetrieve`

```ts
posthog.subscriptionsSummaryQuotaRetrieve(): Promise<{ active_count: number; limit: number | null; at_limit: boolean }>
```

<sub>`GET /api/projects/{project_id}/subscriptions/summary_quota/` · `subscriptions_summary_quota_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

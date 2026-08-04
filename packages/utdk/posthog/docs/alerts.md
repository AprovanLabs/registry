# Alerts

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.alertsList`

```ts
posthog.alertsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing...>
```

<sub>`GET /api/projects/{project_id}/alerts/` · `alerts_list`</sub>

## `posthog.alertsCreate`

```ts
posthog.alertsCreate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; insigh...>
```

<sub>`POST /api/projects/{project_id}/alerts/` · `alerts_create`</sub>

## `posthog.alertsDestroy`

```ts
posthog.alertsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/alerts/{id}/` · `alerts_destroy`</sub>

## `posthog.alertsRetrieve`

```ts
posthog.alertsRetrieve(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; insigh...>
```

<sub>`GET /api/projects/{project_id}/alerts/{id}/` · `alerts_retrieve`</sub>

## `posthog.alertsPartialUpdate`

```ts
posthog.alertsPartialUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; insigh...>
```

<sub>`PATCH /api/projects/{project_id}/alerts/{id}/` · `alerts_partial_update`</sub>

## `posthog.alertsUpdate`

```ts
posthog.alertsUpdate(): Promise<{ id: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; created_at: string; insigh...>
```

<sub>`PUT /api/projects/{project_id}/alerts/{id}/` · `alerts_update`</sub>

## `posthog.alertsTestDeliveryCreate`

Send a synthetic test notification to subscribed users and every active destination on this alert.

```ts
posthog.alertsTestDeliveryCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/alerts/{id}/test-delivery/` · `alerts_test_delivery_create`</sub>

## `posthog.alertsSimulateCreate`

Simulate a detector on an insight's historical data. Read-only — no AlertCheck records are created.

```ts
posthog.alertsSimulateCreate(): Promise<{ data: (number)[]; dates: (string)[]; scores: (number | null)[]; triggered_indices: (number)[]; triggered_dates: (string)[]; interval: string | null; total_points: number; anomaly_count: number; sub_detector_scores?: ({ [key: string]: unknown })[]; breakdown_results?: ({ label: string; data: (number)[]; dates: (string)[]; scores: (number | null)[]; triggered_indices: (number)[]; triggered_dates:...>
```

<sub>`POST /api/projects/{project_id}/alerts/simulate/` · `alerts_simulate_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

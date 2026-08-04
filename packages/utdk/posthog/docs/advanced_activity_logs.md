# Advanced Activity Logs

3 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.advancedActivityLogsList`

```ts
posthog.advancedActivityLogsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "s...>
```

<sub>`GET /api/projects/{project_id}/advanced_activity_logs/` · `advanced_activity_logs_list`</sub>

## `posthog.advancedActivityLogsAvailableFiltersRetrieve`

```ts
posthog.advancedActivityLogsAvailableFiltersRetrieve(): Promise<{ static_filters: { users: ({ [key: string]: unknown })[]; scopes: ({ [key: string]: unknown })[]; activities: ({ [key: string]: unknown })[]; clients: ({ [key: string]: unknown })[] }; detail_fields: { [key: string]: unknown } }>
```

<sub>`GET /api/projects/{project_id}/advanced_activity_logs/available_filters/` · `advanced_activity_logs_available_filters_retrieve`</sub>

## `posthog.advancedActivityLogsExportCreate`

```ts
posthog.advancedActivityLogsExportCreate(): Promise<{ id: string; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "founder" | "leadership" | "marketing" | "sales" | "student" | "other" | "" | null }; unread: boolean; team_id?: numbe...>
```

<sub>`POST /api/projects/{project_id}/advanced_activity_logs/export/` · `advanced_activity_logs_export_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

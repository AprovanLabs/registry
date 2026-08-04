# Marketing Analytics

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.marketingAnalyticsConversionGoalsRetrieve`

List conversion goals

```ts
posthog.marketingAnalyticsConversionGoalsRetrieve(): Promise<{ goals: ({ id: string; name: string; kind: "EventsNode" | "ActionsNode" | "DataWarehouseNode"; target_label: string; last_30d_count: number; integrated_count: number | null; events_without_utm_source: number | null; events_with_unmatched_utm_source: number | null; non_integrated_count: number | null; integrated_pct: number | null; is_misconfigured: boolean; misconfig_reason: string | null; is_ap...>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/conversion_goals/` · `marketing_analytics_conversion_goals_retrieve`</sub>

## `posthog.marketingAnalyticsDataSourcesRetrieve`

List marketing data sources

```ts
posthog.marketingAnalyticsDataSourcesRetrieve(): Promise<{ integrations: ({ source_type: string; is_native: boolean; display_name: string; connected: boolean; last_sync_at: string | null; last_sync_status: string; last_error: string | null; rows_last_24h: number; rows_last_7d: number; sources_map_present: boolean; schema_columns_mapped: (string)[]; schema_columns_required_missing: (string)[]; required_tables: ({ table_name: string; present: boolean; sh...>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/data_sources/` · `marketing_analytics_data_sources_retrieve`</sub>

## `posthog.marketingAnalyticsDiagnoseRetrieve`

Diagnose marketing analytics

```ts
posthog.marketingAnalyticsDiagnoseRetrieve(): Promise<{ integrations: ({ integration_key: string; source_type: string; display_name: string; overall_status: string; diagnosis: string; data_source?: { source_type: string; is_native: boolean; display_name: string; connected: boolean; last_sync_at: string | null; last_sync_status: string; last_error: string | null; rows_last_24h: number; rows_last_7d: number; sources_map_present: boolean; schema_column...>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/diagnose/` · `marketing_analytics_diagnose_retrieve`</sub>

## `posthog.marketingAnalyticsExplainConversionGoalRetrieve`

Explain a conversion goal

```ts
posthog.marketingAnalyticsExplainConversionGoalRetrieve(): Promise<{ goal_id: string; goal_name: string; kind: "EventsNode" | "ActionsNode" | "DataWarehouseNode"; period: { date_from: string | null; date_to: string | null }; total_count: number; integrated_count: number | null; events_without_utm_source: number | null; events_with_unmatched_utm_source: number | null; non_integrated_count: number | null; by_event: (unknown[])[]; by_utm_source: (unknown[])[]; by_m...>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/explain_conversion_goal/` · `marketing_analytics_explain_conversion_goal_retrieve`</sub>

## `posthog.marketingAnalyticsSuggestConversionGoalsRetrieve`

Suggest conversion goals

```ts
posthog.marketingAnalyticsSuggestConversionGoalsRetrieve(): Promise<{ candidates: ({ event_name: string; last_30d_count: number; distinct_users_30d: number; pct_with_utm_source: number; pct_with_utm_campaign: number; top_utm_sources: (unknown[])[]; is_already_a_goal: boolean; suggestion_score: number; suggestion_reason: string })[]; lookback_days: number; excluded_events_count: number }>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/suggest_conversion_goals/` · `marketing_analytics_suggest_conversion_goals_retrieve`</sub>

## `posthog.marketingAnalyticsSuggestUtmMappingsRetrieve`

Suggest UTM source mappings

```ts
posthog.marketingAnalyticsSuggestUtmMappingsRetrieve(): Promise<{ source_suggestions: ({ raw_utm_source: string; suggested_target: string; suggested_target_display_name: string; reason: string })[]; campaign_suggestions: ({ integration: string; integration_display_name: string; suggested_clean_name: string; raw_campaign_values: (string)[]; confidence: number; method: string; reason: string })[]; raw_unmatched_samples: ({ raw_utm_source: string; event_count: n...>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/suggest_utm_mappings/` · `marketing_analytics_suggest_utm_mappings_retrieve`</sub>

## `posthog.marketingAnalyticsTestMappingCreate`

```ts
posthog.marketingAnalyticsTestMappingCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/marketing_analytics/test_mapping/` · `marketing_analytics_test_mapping_create`</sub>

## `posthog.marketingAnalyticsUtmAuditRetrieve`

Run UTM audit

```ts
posthog.marketingAnalyticsUtmAuditRetrieve(): Promise<{ total_campaigns: number; campaigns_with_issues: number; campaigns_without_issues: number; total_spend_at_risk: number; results: ({ campaign_name: string; campaign_id: string; source_name: string; spend: number; clicks: number; impressions: number; has_utm_events: boolean; event_count: number; issues: ({ field: string; severity: "error" | "warning"; kind: "not_linked" | "name_collision" | "no_ta...>
```

<sub>`GET /api/projects/{project_id}/marketing_analytics/utm_audit/` · `marketing_analytics_utm_audit_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

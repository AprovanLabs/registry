# Logs

52 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.logsAlertsList`

```ts
posthog.logsAlertsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name?: string; enabled?: boolean; filters?: { filterGroup?: { type: "AND" | "OR"; values: ({ type: "AND" | "OR"; values: ({ type: unknown; values: (unknown | { key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | ...>
```

<sub>`GET /api/projects/{project_id}/logs/alerts/` · `logs_alerts_list`</sub>

## `posthog.logsAlertsCreate`

```ts
posthog.logsAlertsCreate(): Promise<{ id: string; name?: string; enabled?: boolean; filters?: { filterGroup?: { type: "AND" | "OR"; values: ({ type: "AND" | "OR"; values: ({ type: unknown; values: (unknown | { key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" | "is...>
```

<sub>`POST /api/projects/{project_id}/logs/alerts/` · `logs_alerts_create`</sub>

## `posthog.logsAlertsDestroy`

```ts
posthog.logsAlertsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/logs/alerts/{id}/` · `logs_alerts_destroy`</sub>

## `posthog.logsAlertsRetrieve`

```ts
posthog.logsAlertsRetrieve(): Promise<{ id: string; name?: string; enabled?: boolean; filters?: { filterGroup?: { type: "AND" | "OR"; values: ({ type: "AND" | "OR"; values: ({ type: unknown; values: (unknown | { key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" | "is...>
```

<sub>`GET /api/projects/{project_id}/logs/alerts/{id}/` · `logs_alerts_retrieve`</sub>

## `posthog.logsAlertsPartialUpdate`

```ts
posthog.logsAlertsPartialUpdate(): Promise<{ id: string; name?: string; enabled?: boolean; filters?: { filterGroup?: { type: "AND" | "OR"; values: ({ type: "AND" | "OR"; values: ({ type: unknown; values: (unknown | { key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" | "is...>
```

<sub>`PATCH /api/projects/{project_id}/logs/alerts/{id}/` · `logs_alerts_partial_update`</sub>

## `posthog.logsAlertsUpdate`

```ts
posthog.logsAlertsUpdate(): Promise<{ id: string; name?: string; enabled?: boolean; filters?: { filterGroup?: { type: "AND" | "OR"; values: ({ type: "AND" | "OR"; values: ({ type: unknown; values: (unknown | { key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" | "is...>
```

<sub>`PUT /api/projects/{project_id}/logs/alerts/{id}/` · `logs_alerts_update`</sub>

## `posthog.logsAlertsDestinationsCreate`

Create a notification destination for this alert. One HogFunction is created per alert event kind (firing, resolved, ...) atomically.

```ts
posthog.logsAlertsDestinationsCreate(): Promise<{ hog_function_ids: (string)[] }>
```

<sub>`POST /api/projects/{project_id}/logs/alerts/{id}/destinations/` · `logs_alerts_destinations_create`</sub>

## `posthog.logsAlertsDestinationsDeleteCreate`

Delete a notification destination by deleting its HogFunction group atomically.

```ts
posthog.logsAlertsDestinationsDeleteCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/logs/alerts/{id}/destinations/delete/` · `logs_alerts_destinations_delete_create`</sub>

## `posthog.logsAlertsEventsList`

Paginated event history for this alert, newest first. Returns state transitions, errored checks, and user-initiated control-plane rows (reset, enable/disable, snooze/unsnooze, threshold change) — quiet no-op check rows (where state didn't change and there was no error) are filtered out since only the last 10 are kept and they carry no forensic value. Optional `?kind=...` narrows to a single kind.

```ts
posthog.logsAlertsEventsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; created_at: string; kind: "check" | "reset" | "enable" | "disable" | "snooze" | "unsnooze" | "threshold_change" | "broken_config"; state_before: string; state_after: string; threshold_breached: boolean; result_count: number | null; error_message: string | null; query_duration_ms: number | null })[] }>
```

<sub>`GET /api/projects/{project_id}/logs/alerts/{id}/events/` · `logs_alerts_events_list`</sub>

## `posthog.logsAlertsResetCreate`

Reset a broken alert. Clears the consecutive-failure counter and schedules an immediate recheck.

```ts
posthog.logsAlertsResetCreate(): Promise<{ id: string; name?: string; enabled?: boolean; filters?: { filterGroup?: { type: "AND" | "OR"; values: ({ type: "AND" | "OR"; values: ({ type: unknown; values: (unknown | { key: string; label?: string | null; operator?: "exact" | "is_not" | "icontains" | "not_icontains" | "starts_with" | "not_starts_with" | "ends_with" | "not_ends_with" | "regex" | "not_regex" | "gt" | "gte" | "lt" | "lte" | "is...>
```

<sub>`POST /api/projects/{project_id}/logs/alerts/{id}/reset/` · `logs_alerts_reset_create`</sub>

## `posthog.logsAlertsSimulateCreate`

Simulate a logs alert on historical data using the full state machine. Read-only — no alert check records are created.

```ts
posthog.logsAlertsSimulateCreate(): Promise<{ buckets: ({ timestamp: string; count: number; threshold_breached: boolean; state: string; notification: string; reason: string })[]; fire_count: number; resolve_count: number; total_buckets: number; threshold_count: number; threshold_operator: string }>
```

<sub>`POST /api/projects/{project_id}/logs/alerts/simulate/` · `logs_alerts_simulate_create`</sub>

## `posthog.logsAttributesRetrieve`

```ts
posthog.logsAttributesRetrieve(): Promise<{ results: ({ name: string; propertyFilterType: string; matchedOn: "key" | "value"; matchedValue?: string | null })[]; count: number }>
```

<sub>`GET /api/projects/{project_id}/logs/attributes/` · `logs_attributes_retrieve`</sub>

## `posthog.logsCountRangesCreate`

```ts
posthog.logsCountRangesCreate(): Promise<{ ranges: ({ date_from: string; date_to: string; count: number })[]; interval: string }>
```

<sub>`POST /api/projects/{project_id}/logs/count-ranges/` · `logs_count_ranges_create`</sub>

## `posthog.logsCountCreate`

```ts
posthog.logsCountCreate(): Promise<{ count: number }>
```

<sub>`POST /api/projects/{project_id}/logs/count/` · `logs_count_create`</sub>

## `posthog.logsExplainLogWithAiCreate`

Explain a log entry using AI. POST /api/environments/:id/logs/explainLogWithAI/

```ts
posthog.logsExplainLogWithAiCreate(): Promise<{ uuid: string; timestamp: string; force_refresh?: boolean }>
```

<sub>`POST /api/projects/{project_id}/logs/explainLogWithAI/` · `logs_explainLogWithAI_create`</sub>

## `posthog.logsExportCreate`

```ts
posthog.logsExportCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/logs/export/` · `logs_export_create`</sub>

## `posthog.logsFacetValuesCreate`

```ts
posthog.logsFacetValuesCreate(): Promise<{ results: ({ value: string; count: number })[] }>
```

<sub>`POST /api/projects/{project_id}/logs/facet_values/` · `logs_facet_values_create`</sub>

## `posthog.logsGroupByCreate`

```ts
posthog.logsGroupByCreate(): Promise<{ groups: ({ value: string; values: (string)[]; log_count: number; error_count: number; last_seen: string })[]; total_groups: number; total_logs: number; truncated: boolean }>
```

<sub>`POST /api/projects/{project_id}/logs/group-by/` · `logs_group_by_create`</sub>

## `posthog.logsHasLogsRetrieve`

```ts
posthog.logsHasLogsRetrieve(): Promise<{ [key: string]: unknown }>
```

<sub>`GET /api/projects/{project_id}/logs/has_logs/` · `logs_has_logs_retrieve`</sub>

## `posthog.logsMetricRulesList`

```ts
posthog.logsMetricRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; metric_name: string; enabled?: boolean; filter_group?: unknown; value_attribute?: string | null; group_by?: (string)[]; version: number; created_by: number; created_at: string; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/logs/metric_rules/` · `logs_metric_rules_list`</sub>

## `posthog.logsMetricRulesCreate`

```ts
posthog.logsMetricRulesCreate(): Promise<{ id: string; name: string; metric_name: string; enabled?: boolean; filter_group?: unknown; value_attribute?: string | null; group_by?: (string)[]; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/logs/metric_rules/` · `logs_metric_rules_create`</sub>

## `posthog.logsMetricRulesDestroy`

```ts
posthog.logsMetricRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/logs/metric_rules/{id}/` · `logs_metric_rules_destroy`</sub>

## `posthog.logsMetricRulesRetrieve`

```ts
posthog.logsMetricRulesRetrieve(): Promise<{ id: string; name: string; metric_name: string; enabled?: boolean; filter_group?: unknown; value_attribute?: string | null; group_by?: (string)[]; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/logs/metric_rules/{id}/` · `logs_metric_rules_retrieve`</sub>

## `posthog.logsMetricRulesPartialUpdate`

```ts
posthog.logsMetricRulesPartialUpdate(): Promise<{ id: string; name: string; metric_name: string; enabled?: boolean; filter_group?: unknown; value_attribute?: string | null; group_by?: (string)[]; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/logs/metric_rules/{id}/` · `logs_metric_rules_partial_update`</sub>

## `posthog.logsMetricRulesUpdate`

```ts
posthog.logsMetricRulesUpdate(): Promise<{ id: string; name: string; metric_name: string; enabled?: boolean; filter_group?: unknown; value_attribute?: string | null; group_by?: (string)[]; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/logs/metric_rules/{id}/` · `logs_metric_rules_update`</sub>

## `posthog.logsPatternsDiffCreate`

```ts
posthog.logsPatternsDiffCreate(): Promise<{ entries: ({ classification: "new" | "rate_shift" | "gone" | "unchanged"; rate_ratio: number | null; pattern: { pattern: string; count: number; estimated_count: number; volume_share_pct: number; error_count: number; estimated_error_count: number; first_seen: string; last_seen: string; examples: ({ body: string; severity_text: string; service_name: string; timestamp: string })[]; services: (strin...>
```

<sub>`POST /api/projects/{project_id}/logs/patterns_diff/` · `logs_patterns_diff_create`</sub>

## `posthog.logsPatternsCreate`

```ts
posthog.logsPatternsCreate(): Promise<{ patterns: ({ pattern: string; count: number; estimated_count: number; volume_share_pct: number; error_count: number; estimated_error_count: number; first_seen: string; last_seen: string; examples: ({ body: string; severity_text: string; service_name: string; timestamp: string })[]; services: (string)[]; sparkline: (number)[]; severity_counts: { [key: string]: number | undefined }; match_regex: ...>
```

<sub>`POST /api/projects/{project_id}/logs/patterns/` · `logs_patterns_create`</sub>

## `posthog.logsQueryCreate`

```ts
posthog.logsQueryCreate(): Promise<{ query: { [key: string]: unknown }; results: ({ uuid: string; timestamp: string; observed_timestamp: string; body: string; severity_text: string; severity_number: number; level: string; trace_id: string; span_id: string; trace_flags?: number; attributes: { [key: string]: string | undefined }; resource_attributes: { [key: string]: string | undefined }; event_name?: string })[]; hasMore: boolean; ...>
```

<sub>`POST /api/projects/{project_id}/logs/query/` · `logs_query_create`</sub>

## `posthog.logsRetentionRulesList`

```ts
posthog.logsRetentionRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; enabled?: boolean; priority?: number | null; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/logs/retention_rules/` · `logs_retention_rules_list`</sub>

## `posthog.logsRetentionRulesCreate`

```ts
posthog.logsRetentionRulesCreate(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/logs/retention_rules/` · `logs_retention_rules_create`</sub>

## `posthog.logsRetentionRulesDestroy`

```ts
posthog.logsRetentionRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/logs/retention_rules/{id}/` · `logs_retention_rules_destroy`</sub>

## `posthog.logsRetentionRulesRetrieve`

```ts
posthog.logsRetentionRulesRetrieve(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/logs/retention_rules/{id}/` · `logs_retention_rules_retrieve`</sub>

## `posthog.logsRetentionRulesPartialUpdate`

```ts
posthog.logsRetentionRulesPartialUpdate(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/logs/retention_rules/{id}/` · `logs_retention_rules_partial_update`</sub>

## `posthog.logsRetentionRulesUpdate`

```ts
posthog.logsRetentionRulesUpdate(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/logs/retention_rules/{id}/` · `logs_retention_rules_update`</sub>

## `posthog.logsRetentionRulesReorderCreate`

Atomically reassign priorities so the given ID order maps to ascending priorities (0..n-1).

```ts
posthog.logsRetentionRulesReorderCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; enabled?: boolean; priority?: number | null; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null })[] }>
```

<sub>`POST /api/projects/{project_id}/logs/retention_rules/reorder/` · `logs_retention_rules_reorder_create`</sub>

## `posthog.logsSamplingRulesList`

```ts
posthog.logsSamplingRulesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; enabled?: boolean; priority?: number | null; rule_type: "severity_sampling" | "path_drop" | "rate_limit"; scope_service?: string | null; scope_path_pattern?: string | null; scope_attribute_filters?: ({ [key: string]: unknown })[]; config: unknown; version: number; created_by: number; created_at:...>
```

<sub>`GET /api/projects/{project_id}/logs/sampling_rules/` · `logs_sampling_rules_list`</sub>

## `posthog.logsSamplingRulesCreate`

```ts
posthog.logsSamplingRulesCreate(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; rule_type: "severity_sampling" | "path_drop" | "rate_limit"; scope_service?: string | null; scope_path_pattern?: string | null; scope_attribute_filters?: ({ [key: string]: unknown })[]; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/logs/sampling_rules/` · `logs_sampling_rules_create`</sub>

## `posthog.logsSamplingRulesDestroy`

```ts
posthog.logsSamplingRulesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/logs/sampling_rules/{id}/` · `logs_sampling_rules_destroy`</sub>

## `posthog.logsSamplingRulesRetrieve`

```ts
posthog.logsSamplingRulesRetrieve(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; rule_type: "severity_sampling" | "path_drop" | "rate_limit"; scope_service?: string | null; scope_path_pattern?: string | null; scope_attribute_filters?: ({ [key: string]: unknown })[]; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`GET /api/projects/{project_id}/logs/sampling_rules/{id}/` · `logs_sampling_rules_retrieve`</sub>

## `posthog.logsSamplingRulesPartialUpdate`

```ts
posthog.logsSamplingRulesPartialUpdate(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; rule_type: "severity_sampling" | "path_drop" | "rate_limit"; scope_service?: string | null; scope_path_pattern?: string | null; scope_attribute_filters?: ({ [key: string]: unknown })[]; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/logs/sampling_rules/{id}/` · `logs_sampling_rules_partial_update`</sub>

## `posthog.logsSamplingRulesUpdate`

```ts
posthog.logsSamplingRulesUpdate(): Promise<{ id: string; name: string; enabled?: boolean; priority?: number | null; rule_type: "severity_sampling" | "path_drop" | "rate_limit"; scope_service?: string | null; scope_path_pattern?: string | null; scope_attribute_filters?: ({ [key: string]: unknown })[]; config: unknown; version: number; created_by: number; created_at: string; updated_at: string | null }>
```

<sub>`PUT /api/projects/{project_id}/logs/sampling_rules/{id}/` · `logs_sampling_rules_update`</sub>

## `posthog.logsSamplingRulesSimulateCreate`

Dry-run estimate for how much volume this rule would remove (placeholder response until CH-backed simulation is wired).

```ts
posthog.logsSamplingRulesSimulateCreate(): Promise<{ estimated_reduction_pct: number; notes: string }>
```

<sub>`POST /api/projects/{project_id}/logs/sampling_rules/{id}/simulate/` · `logs_sampling_rules_simulate_create`</sub>

## `posthog.logsSamplingRulesReorderCreate`

Atomically reassign priorities so the given ID order maps to ascending priorities (0..n-1).

```ts
posthog.logsSamplingRulesReorderCreate(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; enabled?: boolean; priority?: number | null; rule_type: "severity_sampling" | "path_drop" | "rate_limit"; scope_service?: string | null; scope_path_pattern?: string | null; scope_attribute_filters?: ({ [key: string]: unknown })[]; config: unknown; version: number; created_by: number; created_at:...>
```

<sub>`POST /api/projects/{project_id}/logs/sampling_rules/reorder/` · `logs_sampling_rules_reorder_create`</sub>

## `posthog.logsServicesCreate`

```ts
posthog.logsServicesCreate(): Promise<{ services: ({ service_name: string; log_count: number; error_count: number; error_rate: number; volume_share_pct?: number; severity_breakdown?: { debug: number; info: number; warn: number; error: number }; active_rules?: ({ rule_id: string; rule_name: string; summary_string: string })[] })[]; sparkline: ({ time: string; service_name: string; count: number })[]; summary?: { top_services_count: nu...>
```

<sub>`POST /api/projects/{project_id}/logs/services/` · `logs_services_create`</sub>

## `posthog.logsSparklineCreate`

```ts
posthog.logsSparklineCreate(): Promise<{ results: ({ time: string; severity?: string; service?: string; count: number; bytes_uncompressed?: number })[] }>
```

<sub>`POST /api/projects/{project_id}/logs/sparkline/` · `logs_sparkline_create`</sub>

## `posthog.logsValuesRetrieve`

```ts
posthog.logsValuesRetrieve(): Promise<{ results: ({ id: string; name: string; count?: number })[]; refreshing: boolean }>
```

<sub>`GET /api/projects/{project_id}/logs/values/` · `logs_values_retrieve`</sub>

## `posthog.logsViewsList`

```ts
posthog.logsViewsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; columns?: unknown[] | null; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_conf...>
```

<sub>`GET /api/projects/{project_id}/logs/views/` · `logs_views_list`</sub>

## `posthog.logsViewsCreate`

```ts
posthog.logsViewsCreate(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; columns?: unknown[] | null; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering"...>
```

<sub>`POST /api/projects/{project_id}/logs/views/` · `logs_views_create`</sub>

## `posthog.logsViewsDestroy`

```ts
posthog.logsViewsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/logs/views/{short_id}/` · `logs_views_destroy`</sub>

## `posthog.logsViewsRetrieve`

```ts
posthog.logsViewsRetrieve(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; columns?: unknown[] | null; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering"...>
```

<sub>`GET /api/projects/{project_id}/logs/views/{short_id}/` · `logs_views_retrieve`</sub>

## `posthog.logsViewsPartialUpdate`

```ts
posthog.logsViewsPartialUpdate(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; columns?: unknown[] | null; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering"...>
```

<sub>`PATCH /api/projects/{project_id}/logs/views/{short_id}/` · `logs_views_partial_update`</sub>

## `posthog.logsViewsUpdate`

```ts
posthog.logsViewsUpdate(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; columns?: unknown[] | null; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering"...>
```

<sub>`PUT /api/projects/{project_id}/logs/views/{short_id}/` · `logs_views_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

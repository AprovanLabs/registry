# Tracing

20 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.tracingSpansAggregateCreate`

```ts
posthog.tracingSpansAggregateCreate(): Promise<{ results: ({ service_name: string; name: string; count: number; total_duration_nano: number; avg_duration_nano: number; p50_duration_nano: number; p95_duration_nano: number; p99_duration_nano: number; p999_duration_nano: number; error_count: number })[]; compare: unknown[] | null; has_more: boolean; next_offset: number | null }>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/aggregate/` · `tracing_spans_aggregate_create`</sub>

## `posthog.tracingSpansAttributeBreakdownCreate`

```ts
posthog.tracingSpansAttributeBreakdownCreate(): Promise<{ results: ({ value: string; count: number; error_count: number; p50_duration_nano: number; p95_duration_nano: number })[]; compare: unknown[] | null }>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/attribute-breakdown/` · `tracing_spans_attribute_breakdown_create`</sub>

## `posthog.tracingSpansAttributesRetrieve`

```ts
posthog.tracingSpansAttributesRetrieve(): Promise<{ results: ({ name: string; propertyFilterType: string; matchedOn: "key" | "value"; matchedValue?: string | null })[]; count: number }>
```

<sub>`GET /api/projects/{project_id}/tracing/spans/attributes/` · `tracing_spans_attributes_retrieve`</sub>

## `posthog.tracingSpansCountCreate`

```ts
posthog.tracingSpansCountCreate(): Promise<{ count: number; traceCount: number }>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/count/` · `tracing_spans_count_create`</sub>

## `posthog.tracingSpansDurationHistogramCreate`

```ts
posthog.tracingSpansDurationHistogramCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/duration-histogram/` · `tracing_spans_duration_histogram_create`</sub>

## `posthog.tracingSpansHasSpansRetrieve`

```ts
posthog.tracingSpansHasSpansRetrieve(): Promise<{ hasSpans: boolean }>
```

<sub>`GET /api/projects/{project_id}/tracing/spans/has_spans/` · `tracing_spans_has_spans_retrieve`</sub>

## `posthog.tracingSpansLatencyHeatmapCreate`

```ts
posthog.tracingSpansLatencyHeatmapCreate(): Promise<{ results: ({ time: string; bucket_ns: number; count: number })[] }>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/latency-heatmap/` · `tracing_spans_latency_heatmap_create`</sub>

## `posthog.tracingSpansQueryCreate`

```ts
posthog.tracingSpansQueryCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/query/` · `tracing_spans_query_create`</sub>

## `posthog.tracingSpansServiceNamesRetrieve`

```ts
posthog.tracingSpansServiceNamesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/tracing/spans/service-names/` · `tracing_spans_service_names_retrieve`</sub>

## `posthog.tracingSpansSparklineCreate`

```ts
posthog.tracingSpansSparklineCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/sparkline/` · `tracing_spans_sparkline_create`</sub>

## `posthog.tracingSpansSymbolStatsCreate`

```ts
posthog.tracingSpansSymbolStatsCreate(): Promise<{ results: ({ count: number; error_count: number; sum_duration_nano: number; p50_duration_nano: number; p95_duration_nano: number; p99_duration_nano: number; busy_count: number; p50_busy_nano: number; p95_busy_nano: number; p99_busy_nano: number; line: number; name?: string | null; end_line?: number | null; previous: { count: number; error_count: number; sum_duration_nano: number; p50_duration_na...>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/symbol-stats/` · `tracing_spans_symbol_stats_create`</sub>

## `posthog.tracingSpansTraceCreate`

```ts
posthog.tracingSpansTraceCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/trace/{trace_id}/` · `tracing_spans_trace_create`</sub>

## `posthog.tracingSpansTreeCreate`

```ts
posthog.tracingSpansTreeCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/tracing/spans/tree/` · `tracing_spans_tree_create`</sub>

## `posthog.tracingSpansValuesRetrieve`

```ts
posthog.tracingSpansValuesRetrieve(): Promise<unknown>
```

<sub>`GET /api/projects/{project_id}/tracing/spans/values/` · `tracing_spans_values_retrieve`</sub>

## `posthog.tracingViewsList`

```ts
posthog.tracingViewsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown...>
```

<sub>`GET /api/projects/{project_id}/tracing/views/` · `tracing_views_list`</sub>

## `posthog.tracingViewsCreate`

```ts
posthog.tracingViewsCreate(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`POST /api/projects/{project_id}/tracing/views/` · `tracing_views_create`</sub>

## `posthog.tracingViewsDestroy`

```ts
posthog.tracingViewsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/tracing/views/{short_id}/` · `tracing_views_destroy`</sub>

## `posthog.tracingViewsRetrieve`

```ts
posthog.tracingViewsRetrieve(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`GET /api/projects/{project_id}/tracing/views/{short_id}/` · `tracing_views_retrieve`</sub>

## `posthog.tracingViewsPartialUpdate`

```ts
posthog.tracingViewsPartialUpdate(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`PATCH /api/projects/{project_id}/tracing/views/{short_id}/` · `tracing_views_partial_update`</sub>

## `posthog.tracingViewsUpdate`

```ts
posthog.tracingViewsUpdate(): Promise<{ id: string; short_id: string; name: string; filters?: { [key: string]: unknown }; pinned?: boolean; created_at: string; created_by: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | null; hedgehog_config: { [key: string]: unknown } | null; role_at_organization?: "engineering" | "data" | "product" | "fou...>
```

<sub>`PUT /api/projects/{project_id}/tracing/views/{short_id}/` · `tracing_views_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

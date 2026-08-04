# Metrics

29 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listTagConfigurations`

Get a list of metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagConfigurations(input: {
  /** Only return custom metrics that have been configured (`true`) or not configured (`false`) with Metrics Without Limits. */
  "filter[configured]"?: boolean;
  /** Only return metrics that are eligible (`true`) or ineligible (`false`) for configuration with Metrics Without Limits. */
  "filter[is_configurable]"?: boolean;
  /** Only return metrics that have the given tag key(s) in their Metrics Without Limits configuration (included or excluded). */
  "filter[tags_configured]"?: string;
  "filter[metric_type]"?: MetricTagConfigurationMetricTypeCategory;
  /** Only return distribution metrics that have percentile aggregations enabled (true) or disabled (false). */
  "filter[include_percentiles]"?: boolean;
  /** Only return metrics that have been queried (true) or not queried (false) in the look back window. Set the window with `filter[queried][window][seconds]`; if omitted, a default window is used. */
  "filter[queried]"?: boolean;
  /** This parameter has no effect unless `filter[queried]` is also set. Only return metrics that have been queried or not queried in the specified window. The default value is 2,592,000 seconds (30 days), the maximum value is 15,552,000 seconds (180 days), and the minimum value is 1 second. For example: `filter[queried]=true&filter[queried][window][seconds]=604800`. */
  "filter[queried][window][seconds]"?: number;
  /** Only return metrics that were submitted with tags matching this expression. You can use AND, OR, IN, and wildcards. For example: `filter[tags]=env IN (staging,test) AND service:web*`. */
  "filter[tags]"?: string;
  /** Only return metrics that are used in at least one dashboard, monitor, notebook, or SLO. */
  "filter[related_assets]"?: boolean;
  /** Include related resources in the response. Set to `metric_volumes` to include indexed and ingested volume counts for each metric. */
  include?: string;
  /** Sort results by metric volume. Prefix a key with `-` for descending order. Supported keys: `metric_volumes.indexed_volume`, `metric_volumes.ingested_volume`, `metric_volumes.indexed_volume_delta`, `metric_volumes.ingested_volume_delta`. Requires a paginated request (`page[size]` or `page[cursor]`). */
  sort?: string;
  /** Only return metrics that have been actively reporting in the specified window. The default value is 3600 seconds (1 hour), the maximum value is 2,592,000 seconds (30 days), and the minimum value is 1 second. */
  "window[seconds]"?: number;
  /** Maximum number of results per page. Send `page[size]` on the first request to opt in to pagination. On each subsequent request, send `page[cursor]` set to the value of `meta.pagination.next_cursor` from the previous response. The default value is 10000, the maximum value is 10000, and the minimum value is 1. */
  "page[size]"?: number;
  /** Cursor for pagination. Use `page[size]` to opt-in to pagination and get the first page; for subsequent pages, use the value from `meta.pagination.next_cursor` in the response. Pagination is complete when `next_cursor` is null. */
  "page[cursor]"?: string;
}): Promise<MetricsAndMetricTagConfigurationsResponse>
```

<sub>`GET /api/v2/metrics` · `ListTagConfigurations`</sub>

## `datadog.listActiveMetricConfigurations`

List active tags and aggregations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listActiveMetricConfigurations(input: {
  /** The name of the metric. */
  metric_name: string;
  /** The number of seconds of look back (from now). Default value is 604,800 (1 week), minimum value is 7200 (2 hours), maximum value is 2,630,000 (1 month). */
  "window[seconds]"?: number;
}): Promise<MetricSuggestedTagsAndAggregationsResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/active-configurations` · `ListActiveMetricConfigurations`</sub>

## `datadog.listTagsByMetricName`

List tags by metric name — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagsByMetricName(input: {
  /** The name of the metric. */
  metric_name: string;
  /** The number of seconds of look back (from now) to query for tag data. Default value is 14400 (4 hours), minimum value is 14400 (4 hours). */
  "window[seconds]"?: number;
  /** Filter results to tags from data points that have the specified tags. For example, `filter[tags]=env:staging,host:123` returns tags only from data points with both `env:staging` and `host:123`. */
  "filter[tags]"?: string;
  /** Filter returned tags to those matching a substring. For example, `filter[match]=env` returns tags like `env:prod`, `environment:staging`, etc. */
  "filter[match]"?: string;
  /** Whether to include tag values in the response. Defaults to true. */
  "filter[include_tag_values]"?: boolean;
  /** Whether to allow partial results. Defaults to false. */
  "filter[allow_partial]"?: boolean;
  /** Maximum number of results to return. */
  "page[limit]"?: number;
}): Promise<MetricAllTagsResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/all-tags` · `ListTagsByMetricName`</sub>

## `datadog.listMetricAssets`

Related Assets to a Metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMetricAssets(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<MetricAssetsResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/assets` · `ListMetricAssets`</sub>

## `datadog.estimateMetricsOutputSeries`

Tag Configuration Cardinality Estimator — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.estimateMetricsOutputSeries(input: {
  /** The name of the metric. */
  metric_name: string;
  /** Comma-separated list of tag keys that the metric is configured to query with. For example: `filter[groups]=app,host`. */
  "filter[groups]"?: string;
  /** The number of hours of look back (from now) to estimate cardinality with. If unspecified, it defaults to 0 hours. */
  "filter[hours_ago]"?: number;
  /** Deprecated. Number of aggregations has no impact on volume. */
  "filter[num_aggregations]"?: number;
  /** A boolean, for distribution metrics only, to estimate cardinality if the metric includes additional percentile aggregators. */
  "filter[pct]"?: boolean;
  /** A window, in hours, from the look back to estimate cardinality with. The minimum and default is 1 hour. */
  "filter[timespan_h]"?: number;
}): Promise<MetricEstimateResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/estimate` · `EstimateMetricsOutputSeries`</sub>

## `datadog.getMetricTagCardinalityDetails`

Get tag key cardinality details — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getMetricTagCardinalityDetails(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<MetricTagCardinalitiesResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/tag-cardinalities` · `GetMetricTagCardinalityDetails`</sub>

## `datadog.deleteTagIndexingRuleExemption`

Delete a tag indexing rule exemption — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTagIndexingRuleExemption(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/metrics/{metric_name}/tag-indexing-rule-exemptions` · `DeleteTagIndexingRuleExemption`</sub>

## `datadog.getTagIndexingRuleExemption`

Get a tag indexing rule exemption — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTagIndexingRuleExemption(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<TagIndexingRuleExemptionResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/tag-indexing-rule-exemptions` · `GetTagIndexingRuleExemption`</sub>

## `datadog.createTagIndexingRuleExemption`

Create a tag indexing rule exemption — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTagIndexingRuleExemption(input: {
  data: TagIndexingRuleExemptionCreateData;
  /** The name of the metric. */
  metric_name: string;
}): Promise<TagIndexingRuleExemptionResponse>
```

<sub>`POST /api/v2/metrics/{metric_name}/tag-indexing-rule-exemptions` · `CreateTagIndexingRuleExemption`</sub>

## `datadog.listTagIndexingRulesForMetric`

List tag indexing rules for a metric — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagIndexingRulesForMetric(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<TagIndexingRulesResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/tag-indexing-rules` · `ListTagIndexingRulesForMetric`</sub>

## `datadog.deleteTagConfiguration`

Delete a tag configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTagConfiguration(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/metrics/{metric_name}/tags` · `DeleteTagConfiguration`</sub>

## `datadog.listTagConfigurationByName`

List tag configuration by name — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagConfigurationByName(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<MetricTagConfigurationResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/tags` · `ListTagConfigurationByName`</sub>

## `datadog.updateTagConfiguration`

Update a tag configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTagConfiguration(input: {
  data: MetricTagConfigurationUpdateData;
  /** The name of the metric. */
  metric_name: string;
}): Promise<MetricTagConfigurationResponse>
```

<sub>`PATCH /api/v2/metrics/{metric_name}/tags` · `UpdateTagConfiguration`</sub>

## `datadog.createTagConfiguration`

Create a tag configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTagConfiguration(input: {
  data: MetricTagConfigurationCreateData;
  /** The name of the metric. */
  metric_name: string;
}): Promise<MetricTagConfigurationResponse>
```

<sub>`POST /api/v2/metrics/{metric_name}/tags` · `CreateTagConfiguration`</sub>

## `datadog.listVolumesByMetricName`

List distinct metric volumes by metric name — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listVolumesByMetricName(input: {
  /** The name of the metric. */
  metric_name: string;
  /** The number of seconds of look back (from now). Default value is 3,600 (1 hour), maximum value is 2,592,000 (1 month). */
  "window[seconds]"?: number;
}): Promise<MetricVolumesResponse>
```

<sub>`GET /api/v2/metrics/{metric_name}/volumes` · `ListVolumesByMetricName`</sub>

## `datadog.deleteBulkTagsMetricsConfiguration`

Delete tags for multiple metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteBulkTagsMetricsConfiguration(input: {
  data: MetricBulkTagConfigDelete;
}): Promise<MetricBulkTagConfigResponse>
```

<sub>`DELETE /api/v2/metrics/config/bulk-tags` · `DeleteBulkTagsMetricsConfiguration`</sub>

## `datadog.createBulkTagsMetricsConfiguration`

Configure tags for multiple metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createBulkTagsMetricsConfiguration(input: {
  data: MetricBulkTagConfigCreate;
}): Promise<MetricBulkTagConfigResponse>
```

<sub>`POST /api/v2/metrics/config/bulk-tags` · `CreateBulkTagsMetricsConfiguration`</sub>

## `datadog.createHistoricalMetricsConfiguration`

Enable historical metrics ingestion — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createHistoricalMetricsConfiguration(input: {
  data: HistoricalMetricsConfigurationCreateData;
}): Promise<HistoricalMetricsConfigurationResponse>
```

<sub>`POST /api/v2/metrics/historical-metrics-configurations` · `CreateHistoricalMetricsConfiguration`</sub>

## `datadog.deleteHistoricalMetricsConfiguration`

Delete a historical metrics configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteHistoricalMetricsConfiguration(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/metrics/historical-metrics-configurations/{metric_name}` · `DeleteHistoricalMetricsConfiguration`</sub>

## `datadog.getHistoricalMetricsConfiguration`

Get a historical metrics configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getHistoricalMetricsConfiguration(input: {
  /** The name of the metric. */
  metric_name: string;
}): Promise<HistoricalMetricsConfigurationResponse>
```

<sub>`GET /api/v2/metrics/historical-metrics-configurations/{metric_name}` · `GetHistoricalMetricsConfiguration`</sub>

## `datadog.listTagIndexingRules`

List tag indexing rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTagIndexingRules(input: {
  /** Page size (1–1000, default 100). */
  "page[limit]"?: number;
  /** Page offset from the start of the list (default 0). */
  "page[offset]"?: number;
  /** Substring filter on rule name. */
  search?: string;
}): Promise<TagIndexingRulesResponse>
```

<sub>`GET /api/v2/metrics/tag-indexing-rules` · `ListTagIndexingRules`</sub>

## `datadog.createTagIndexingRule`

Create a tag indexing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTagIndexingRule(input: {
  data: TagIndexingRuleCreateData;
}): Promise<TagIndexingRuleResponse>
```

<sub>`POST /api/v2/metrics/tag-indexing-rules` · `CreateTagIndexingRule`</sub>

## `datadog.deleteTagIndexingRule`

Delete a tag indexing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTagIndexingRule(input: {
  /** ID of the tag indexing rule. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/metrics/tag-indexing-rules/{id}` · `DeleteTagIndexingRule`</sub>

## `datadog.getTagIndexingRule`

Get a tag indexing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTagIndexingRule(input: {
  /** ID of the tag indexing rule. */
  id: string;
}): Promise<TagIndexingRuleResponse>
```

<sub>`GET /api/v2/metrics/tag-indexing-rules/{id}` · `GetTagIndexingRule`</sub>

## `datadog.updateTagIndexingRule`

Update a tag indexing rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTagIndexingRule(input: {
  data: TagIndexingRuleUpdateData;
  /** ID of the tag indexing rule. */
  id: string;
}): Promise<TagIndexingRuleResponse>
```

<sub>`PUT /api/v2/metrics/tag-indexing-rules/{id}` · `UpdateTagIndexingRule`</sub>

## `datadog.reorderTagIndexingRules`

Reorder tag indexing rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderTagIndexingRules(input: {
  data: TagIndexingRuleOrderData;
}): Promise<undefined>
```

<sub>`POST /api/v2/metrics/tag-indexing-rules/order` · `ReorderTagIndexingRules`</sub>

## `datadog.queryScalarData`

Query scalar data across multiple products — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryScalarData(input: {
  data: ScalarFormulaRequest;
}): Promise<ScalarFormulaQueryResponse>
```

<sub>`POST /api/v2/query/scalar` · `QueryScalarData`</sub>

## `datadog.queryTimeseriesData`

Query timeseries data across multiple products — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.queryTimeseriesData(input: {
  data: TimeseriesFormulaRequest;
}): Promise<TimeseriesFormulaQueryResponse>
```

<sub>`POST /api/v2/query/timeseries` · `QueryTimeseriesData`</sub>

## `datadog.submitMetrics`

Submit metrics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.submitMetrics(input: {
  /** A list of timeseries to submit to Datadog. */
  series: (MetricSeries)[];
}, options?: { headers?: { "Content-Encoding"?: "deflate" | "zstd1" | "gzip" } }): Promise<IntakePayloadAccepted>
```

<sub>`POST /api/v2/series` · `SubmitMetrics`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

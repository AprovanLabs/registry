# Metrics

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getMetrics`

List metrics — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMetrics(input: {
  /** The project key */
  projectKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
  /** The number of metrics to return in the response. Defaults to 20. Maximum limit is 50. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. */
  offset?: number;
  /** A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `createdAt` or `name`. */
  sort?: string;
  /** A comma-separated list of filters. This endpoint accepts filtering by `query`, `tags`, `eventKind`, `isNumeric`, `unitAggregationType`, `hasConnections`, `maintainerIds`, `maintainerTeamKey`, `view`, `dataSourceKeys`, `metricUsedIn`, `eventKeys`, and `versionIds`. To learn more about the filter syntax, read the 'Filtering metrics' section above. */
  filter?: string;
}): Promise<MetricCollectionRep>
```

<sub>`GET /api/v2/metrics/{projectKey}` · `getMetrics`</sub>

## `launchdarkly.postMetric`

Create metric — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postMetric(input: {
  /** A unique key to reference the metric */
  key: string;
  /** A human-friendly name for the metric */
  name?: string;
  /** Description of the metric */
  description?: string;
  /** The kind of event your metric will track */
  kind: "pageview" | "click" | "custom" | "trace";
  /** One or more CSS selectors. Required for click metrics only. */
  selector?: string;
  /** One or more target URLs. Required for click and pageview metrics only. */
  urls?: (UrlPost)[];
  /** Whether to track numeric changes in value against a baseline (<code>true</code>) or to track a conversion when an end user takes an action (<code>false</code>). Required for custom and trace metrics only. */
  isNumeric?: boolean;
  /** The unit of measure. Applicable for numeric custom and trace metrics only. */
  unit?: string;
  /** The event key to use in your code. Required for custom conversion/binary and custom numeric metrics only. */
  eventKey?: string;
  /** Success criteria. Required for custom and trace numeric metrics, optional for custom and trace conversion metrics. */
  successCriteria?: "HigherThanBaseline" | "LowerThanBaseline";
  /** Tags for the metric */
  tags?: (string)[];
  /** Deprecated, use <code>analysisUnits</code> instead. */
  randomizationUnits?: (string)[];
  /** An array of analysis units allowed for this metric. */
  analysisUnits?: (string)[];
  /** The ID of the member who maintains this metric */
  maintainerId?: string;
  /** The method by which multiple unit event values are aggregated */
  unitAggregationType?: "average" | "sum" | "count_distinct";
  /** The method for analyzing metric events */
  analysisType?: string;
  /** The percentile for the analysis method. An integer denoting the target percentile between 0 and 100. Required when <code>analysisType</code> is <code>percentile</code>. */
  percentileValue?: number;
  eventDefault?: MetricEventDefaultRep;
  dataSource?: MetricDataSourceRefRep;
  /** Filters for the metric to exclude certain events from being included. This is only supported for custom metrics. */
  filters?: EventFilter;
  /** Not yet implemented - The start of the measurement window, in milliseconds relative to the unit's first exposure to a flag variation */
  windowStartOffset?: number;
  /** Not yet implemented - The end of the measurement window, in milliseconds relative to the unit's first exposure to a flag variation */
  windowEndOffset?: number;
  /** Lower winsorization percentile, expressed as a percent in the open interval (0, 100). When both bounds are set, defines a two-sided clamp range. Otherwise lower-only winsorization. */
  winsorLowerPercentile?: number;
  /** Upper winsorization percentile, expressed as a percent in the open interval (0, 100). When both bounds are set, must be greater than winsorLowerPercentile. */
  winsorUpperPercentile?: number;
  /** When true, the percentile bound calculation includes imputed zeros. Only meaningful when at least one bound is set and the metric includes units that didn't send events. */
  winsorIncludeImputed?: boolean;
  /** The trace query to use for the metric. Required for trace metrics. */
  traceQuery?: string;
  /** The location in the trace to use for numeric values. Required for numeric trace metrics. */
  traceValueLocation?: string;
  /** The warehouse column to use for counting distinct values. Required when the unitAggregationType is count_distinct. */
  unitAggregationField?: string;
  /** For numeric warehouse-native metrics, the column holding the numeric value. Overrides the value column mapped on the data source. */
  valueColumn?: string;
  /** For ratio metrics, the denominator event configuration. Only supported for warehouse native custom metrics. */
  denominator?: DenominatorPost;
  /** The project key */
  projectKey: string;
}): Promise<MetricRep>
```

<sub>`POST /api/v2/metrics/{projectKey}` · `postMetric`</sub>

## `launchdarkly.deleteMetric`

Delete metric — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteMetric(input: {
  /** The project key */
  projectKey: string;
  /** The metric key */
  metricKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/metrics/{projectKey}/{metricKey}` · `deleteMetric`</sub>

## `launchdarkly.getMetric`

Get metric — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMetric(input: {
  /** The project key */
  projectKey: string;
  /** The metric key */
  metricKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are `experiments`, `experimentCount`, `metricGroups`, `metricGroupCount`, `eventSources`, `guardedRollouts`, `guardedRolloutCount`, `lastUsedInExperiment`, and `lastUsedInGuardedRollout`. */
  expand?: string;
  /** The specific version ID of the metric */
  versionId?: string;
}): Promise<MetricRep>
```

<sub>`GET /api/v2/metrics/{projectKey}/{metricKey}` · `getMetric`</sub>

## `launchdarkly.patchMetric`

Update metric — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchMetric(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The metric key */
  metricKey: string;
}): Promise<MetricRep>
```

<sub>`PATCH /api/v2/metrics/{projectKey}/{metricKey}` · `patchMetric`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

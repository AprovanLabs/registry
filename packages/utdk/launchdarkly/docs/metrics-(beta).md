# Metrics (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getMetricGroups`

List metric groups — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMetricGroups(input: {
  /** The project key */
  projectKey: string;
  /** Accepts filter by `experimentStatus`, `query`, `kind`, `hasConnections`, `maintainerIds`, and `maintainerTeamKey`. Example: `filter=experimentStatus equals 'running' and query equals 'test'`. */
  filter?: string;
  /** A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. Read the endpoint description for a full list of available sort fields. */
  sort?: string;
  /** This parameter is reserved for future use and is not currently supported on this endpoint. */
  expand?: string;
  /** The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. */
  offset?: number;
}): Promise<MetricGroupCollectionRep>
```

<sub>`GET /api/v2/projects/{projectKey}/metric-groups` · `getMetricGroups`</sub>

## `launchdarkly.createMetricGroup`

Create metric group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createMetricGroup(input: {
  /** A unique key to reference the metric group */
  key?: string;
  /** A human-friendly name for the metric group */
  name: string;
  /** The type of the metric group */
  kind: "funnel" | "standard";
  /** Description of the metric group */
  description?: string;
  /** The ID of the member who maintains this metric group */
  maintainerId: string;
  /** Tags for the metric group */
  tags: (string)[];
  /** An ordered list of the metrics in this metric group */
  metrics: (MetricInMetricGroupInput)[];
  /** The project key */
  projectKey: string;
}): Promise<MetricGroupRep>
```

<sub>`POST /api/v2/projects/{projectKey}/metric-groups` · `createMetricGroup`</sub>

## `launchdarkly.deleteMetricGroup`

Delete metric group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteMetricGroup(input: {
  /** The project key */
  projectKey: string;
  /** The metric group key */
  metricGroupKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}` · `deleteMetricGroup`</sub>

## `launchdarkly.getMetricGroup`

Get metric group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMetricGroup(input: {
  /** The project key */
  projectKey: string;
  /** The metric group key */
  metricGroupKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
}): Promise<MetricGroupRep>
```

<sub>`GET /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}` · `getMetricGroup`</sub>

## `launchdarkly.patchMetricGroup`

Patch metric group — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchMetricGroup(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The metric group key */
  metricGroupKey: string;
}): Promise<MetricGroupRep>
```

<sub>`PATCH /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}` · `patchMetricGroup`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

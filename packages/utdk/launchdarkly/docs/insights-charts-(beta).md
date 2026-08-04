# Insights Charts (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getDeploymentFrequencyChart`

Get deployment frequency chart data — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDeploymentFrequencyChart(input: {
  /** The project key */
  projectKey?: string;
  /** The environment key */
  environmentKey?: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
  /** Unix timestamp in milliseconds. Default value is 7 days ago. */
  from?: string;
  /** Unix timestamp in milliseconds. Default value is now. */
  to?: string;
  /** Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. */
  bucketType?: string;
  /** Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds). */
  bucketMs?: number;
  /** Options: `application`, `kind` */
  groupBy?: string;
  /** Options: `metrics` */
  expand?: string;
}): Promise<InsightsChart>
```

<sub>`GET /api/v2/engineering-insights/charts/deployments/frequency` · `getDeploymentFrequencyChart`</sub>

## `launchdarkly.getStaleFlagsChart`

Get stale flags chart data — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getStaleFlagsChart(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
  /** Property to group results by. Options: `maintainer` */
  groupBy?: string;
  /** Comma-separated list of individual maintainers to filter results. */
  maintainerId?: string;
  /** Comma-separated list of team maintainer keys to filter results. */
  maintainerTeamKey?: string;
  /** Options: `metrics` */
  expand?: string;
}): Promise<InsightsChart>
```

<sub>`GET /api/v2/engineering-insights/charts/flags/stale` · `getStaleFlagsChart`</sub>

## `launchdarkly.getFlagStatusChart`

Get flag status chart data — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagStatusChart(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
}): Promise<InsightsChart>
```

<sub>`GET /api/v2/engineering-insights/charts/flags/status` · `getFlagStatusChart`</sub>

## `launchdarkly.getLeadTimeChart`

Get lead time chart data — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getLeadTimeChart(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey?: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
  /** Unix timestamp in milliseconds. Default value is 7 days ago. */
  from?: number;
  /** Unix timestamp in milliseconds. Default value is now. */
  to?: number;
  /** Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. */
  bucketType?: string;
  /** Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds). */
  bucketMs?: number;
  /** Options: `application`, `stage`. Default: `stage`. */
  groupBy?: string;
  /** Options: `metrics`, `percentiles`. */
  expand?: string;
}): Promise<InsightsChart>
```

<sub>`GET /api/v2/engineering-insights/charts/lead-time` · `getLeadTimeChart`</sub>

## `launchdarkly.getReleaseFrequencyChart`

Get release frequency chart data — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getReleaseFrequencyChart(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** Comma separated list of application keys */
  applicationKey?: string;
  /** Filter events to those associated with an experiment (`true`) or without an experiment (`false`) */
  hasExperiments?: boolean;
  /** Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude` */
  global?: string;
  /** Property to group results by. Options: `impact` */
  groupBy?: string;
  /** Unix timestamp in milliseconds. Default value is 7 days ago. */
  from?: string;
  /** Unix timestamp in milliseconds. Default value is now. */
  to?: string;
  /** Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. */
  bucketType?: string;
  /** Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds). */
  bucketMs?: number;
  /** Options: `metrics` */
  expand?: string;
}): Promise<InsightsChart>
```

<sub>`GET /api/v2/engineering-insights/charts/releases/frequency` · `getReleaseFrequencyChart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Account Usage (Beta)

27 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getAiRunsUsage`

Get AI runs usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiRunsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. */
  sdkVersion?: string;
  /** An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. */
  sdkType?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkVersion`, `sdkType`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/ai-runs` · `getAIRunsUsage`</sub>

## `launchdarkly.getContextsClientsideUsage`

Get contexts clientside usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextsClientsideUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. */
  contextKind?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. */
  anonymous?: string;
  /** If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/clientside-contexts` · `getContextsClientsideUsage`</sub>

## `launchdarkly.getMauClientsideUsage`

Get MAU clientside usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMauClientsideUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. */
  anonymous?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/clientside-mau` · `getMAUClientsideUsage`</sub>

## `launchdarkly.getDataExportEventsUsage`

Get data export events usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getDataExportEventsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. */
  eventKind?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `environmentId`, `eventKind`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/data-export-events` · `getDataExportEventsUsage`</sub>

## `launchdarkly.getEvaluationsUsage`

Get evaluations usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getEvaluationsUsage(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
  from?: string;
  /** The series of data returned ends at this timestamp. Defaults to the current time. */
  to?: string;
  /** The timezone to use for breaks between days when returning daily data. */
  tz?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey}` · `getEvaluationsUsage`</sub>

## `launchdarkly.getEventsUsage`

Get events usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getEventsUsage(input: {
  /** The type of event to retrieve. Must be either `received` or `published`. */
  type: string;
  /** The series of data returned starts from this timestamp. Defaults to 24 hours ago. */
  from?: string;
  /** The series of data returned ends at this timestamp. Defaults to the current time. */
  to?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/events/{type}` · `getEventsUsage`</sub>

## `launchdarkly.getExperimentationEventsUsage`

Get experimentation events usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExperimentationEventsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** An event key to filter results by. Can be specified multiple times, one query parameter per event key. */
  eventKey?: string;
  /** An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. */
  eventKind?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `environmentId`, `eventKey`, `eventKind`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/experimentation-events` · `getExperimentationEventsUsage`</sub>

## `launchdarkly.getExperimentationKeysUsage`

Get experimentation keys usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExperimentationKeysUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** An experiment ID to filter results by. Can be specified multiple times, one query parameter per experiment ID. */
  experimentId?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `experimentId`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/experimentation-keys` · `getExperimentationKeysUsage`</sub>

## `launchdarkly.getMauUsage`

Get MAU usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMauUsage(input: {
  /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
  from?: string;
  /** The series of data returned ends at this timestamp. Defaults to the current time. */
  to?: string;
  /** A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects. */
  project?: string;
  /** An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project. */
  environment?: string;
  /** An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server */
  sdktype?: string;
  /** An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK. */
  sdk?: string;
  /** If specified, filters results to either anonymous or nonanonymous users. */
  anonymous?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId */
  groupby?: string;
  /** If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental */
  aggregationType?: string;
  /** Filters results to the specified context kinds. Can be specified multiple times, one query parameter per context kind. If not set, queries for the user context kind. */
  contextKind?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/mau` · `getMauUsage`</sub>

## `launchdarkly.getMauUsageByCategory`

Get MAU usage by category — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMauUsageByCategory(input: {
  /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
  from?: string;
  /** The series of data returned ends at this timestamp. Defaults to the current time. */
  to?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/mau/bycategory` · `getMauUsageByCategory`</sub>

## `launchdarkly.getMauSdksByType`

Get MAU SDKs by type — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMauSdksByType(input: {
  /** The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000. */
  from?: string;
  /** The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000. */
  to?: string;
  /** The type of SDK with monthly active users (MAU) to list. Must be either `client` or `server`. */
  sdktype?: string;
}): Promise<SdkListRep>
```

<sub>`GET /api/v2/usage/mau/sdks` · `getMauSdksByType`</sub>

## `launchdarkly.getObservabilityErrorsUsage`

Get observability errors usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getObservabilityErrorsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/observability/errors` · `getObservabilityErrorsUsage`</sub>

## `launchdarkly.getObservabilityLogsUsage`

Get observability logs usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getObservabilityLogsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/observability/logs` · `getObservabilityLogsUsage`</sub>

## `launchdarkly.getObservabilityMetricsUsage`

Get observability metrics usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getObservabilityMetricsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `hourly`, `daily`, and `monthly`; **average** supports `hourly`, `daily`, and `monthly`. */
  granularity?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `average`. */
  aggregationType?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/observability/metrics` · `getObservabilityMetricsUsage`</sub>

## `launchdarkly.getObservabilitySessionsUsage`

Get observability sessions usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getObservabilitySessionsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/observability/sessions` · `getObservabilitySessionsUsage`</sub>

## `launchdarkly.getObservabilityTracesUsage`

Get observability traces usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getObservabilityTracesUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/observability/traces` · `getObservabilityTracesUsage`</sub>

## `launchdarkly.getSdkAllVersions`

Get usage details for all SDK versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSdkAllVersions(input: {
  /** Filter to a specific environment ID. */
  environmentId?: string;
  /** Filter to a specific project ID. */
  projectId?: string;
  /** Filter to a specific SDK name. */
  sdkName?: string;
  /** Filter to a specific SDK type (for example, 'server', 'browser', 'mobile'). */
  sdkType?: string;
  /** Filter to a specific SDK application ID. */
  sdkAppId?: string;
  /** Filter to a specific connection type (for example, 'direct', 'proxy'). */
  connectionType?: string;
}): Promise<(SdkVersionDetailsRep)[]>
```

<sub>`GET /api/v2/usage/sdk-versions/all` · `getSdkAllVersions`</sub>

## `launchdarkly.getSdkVersionsDetails`

Get SDK versions usage details — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSdkVersionsDetails(): Promise<(SdkVersionDetailsRep)[]>
```

<sub>`GET /api/v2/usage/sdk-versions/details` · `getSdkVersionsDetails`</sub>

## `launchdarkly.getContextsServersideUsage`

Get contexts serverside usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextsServersideUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. */
  contextKind?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. */
  anonymous?: string;
  /** If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/serverside-contexts` · `getContextsServersideUsage`</sub>

## `launchdarkly.getServiceConnectionsUsage`

Get service connections usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getServiceConnectionsUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** A connection type to filter results by. Can be specified multiple times, one query parameter per connection type. */
  connectionType?: string;
  /** A relay version to filter results by. Can be specified multiple times, one query parameter per relay version. */
  relayVersion?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. */
  sdkVersion?: string;
  /** An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. */
  sdkType?: string;
  /** An SDK app ID to filter results by. Can be specified multiple times, one query parameter per SDK app ID. */
  sdkAppId?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `connectionType`, `relayVersion`, `sdkName`, `sdkVersion`, `sdkType`, `sdkAppId`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. */
  granularity?: string;
}): Promise<SeriesListRepFloat>
```

<sub>`GET /api/v2/usage/service-connections` · `getServiceConnectionsUsage`</sub>

## `launchdarkly.getStreamUsage`

Get stream usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getStreamUsage(input: {
  /** The source of streaming connections to describe. Must be either `client` or `server`. */
  source: string;
  /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
  from?: string;
  /** The series of data returned ends at this timestamp. Defaults to the current time. */
  to?: string;
  /** The timezone to use for breaks between days when returning daily data. */
  tz?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/streams/{source}` · `getStreamUsage`</sub>

## `launchdarkly.getStreamUsageBySdkVersion`

Get stream usage by SDK version — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getStreamUsageBySdkVersion(input: {
  /** The source of streaming connections to describe. Must be either `client` or `server`. */
  source: string;
  /** The series of data returned starts from this timestamp. Defaults to 24 hours ago. */
  from?: string;
  /** The series of data returned ends at this timestamp. Defaults to the current time. */
  to?: string;
  /** The timezone to use for breaks between days when returning daily data. */
  tz?: string;
  /** If included, this filters the returned series to only those that match this SDK name. */
  sdk?: string;
  /** If included, this filters the returned series to only those that match this SDK version. */
  version?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/streams/{source}/bysdkversion` · `getStreamUsageBySdkVersion`</sub>

## `launchdarkly.getStreamUsageSdkversion`

Get stream usage SDK versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getStreamUsageSdkversion(input: {
  /** The source of streaming connections to describe. Must be either `client` or `server`. */
  source: string;
}): Promise<SdkVersionListRep>
```

<sub>`GET /api/v2/usage/streams/{source}/sdkversions` · `getStreamUsageSdkversion`</sub>

## `launchdarkly.getContextsTotalUsage`

Get contexts total usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextsTotalUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. */
  contextKind?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. */
  sdkType?: string;
  /** An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. */
  anonymous?: string;
  /** If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkType`, `sdkAppId`, `anonymousV2`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/total-contexts` · `getContextsTotalUsage`</sub>

## `launchdarkly.getMauTotalUsage`

Get MAU total usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMauTotalUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. */
  sdkName?: string;
  /** An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. */
  sdkType?: string;
  /** An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. */
  anonymous?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkType`, `sdkAppId`, `anonymousV2`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/total-mau` · `getMAUTotalUsage`</sub>

## `launchdarkly.getVegaAiUsage`

Get Vega AI usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getVegaAiUsage(input: {
  /** The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. */
  granularity?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. */
  aggregationType?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/vega-ai` · `getVegaAIUsage`</sub>

## `launchdarkly.getWarehouseExportUsage`

Get warehouse Data Export usage — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getWarehouseExportUsage(input: {
  /** The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. */
  from?: string;
  /** The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. */
  to?: string;
  /** A project key to filter results by. Can be specified multiple times, one query parameter per project key. */
  projectKey?: string;
  /** An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. */
  environmentKey?: string;
  /** A destination kind to filter results by. Can be specified multiple times, one query parameter per destination kind.<br/>Valid values: `snowflake-v2`, `databricks`, `bigquery`, `redshift`, `clickhouse`. */
  destination?: string;
  /** If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `destination`. */
  groupBy?: string;
  /** Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. */
  aggregationType?: string;
  /** Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. */
  granularity?: string;
}): Promise<SeriesListRep>
```

<sub>`GET /api/v2/usage/warehouse-export` · `getWarehouseExportUsage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

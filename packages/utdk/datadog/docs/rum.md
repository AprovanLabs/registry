# RUM

13 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.aggregateRumEvents`

Aggregate RUM events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateRumEvents(input: {
  /** The list of metrics or timeseries to compute for the retrieved buckets. */
  compute?: (RumCompute)[];
  filter?: RumQueryFilter;
  /** The rules for the group by. */
  group_by?: (RumGroupBy)[];
  options?: RumQueryOptions;
  page?: RumQueryPageOptions;
}): Promise<RumAnalyticsAggregateResponse>
```

<sub>`POST /api/v2/rum/analytics/aggregate` · `AggregateRUMEvents`</sub>

## `datadog.getRumApplications`

List all the RUM applications — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumApplications(): Promise<RumApplicationsResponse>
```

<sub>`GET /api/v2/rum/applications` · `GetRUMApplications`</sub>

## `datadog.createRumApplication`

Create a new RUM application — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumApplication(input: {
  data: RumApplicationCreate;
}): Promise<RumApplicationResponse>
```

<sub>`POST /api/v2/rum/applications` · `CreateRUMApplication`</sub>

## `datadog.deleteRumApplication`

Delete a RUM application — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumApplication(input: {
  /** RUM application ID. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/applications/{id}` · `DeleteRUMApplication`</sub>

## `datadog.getRumApplication`

Get a RUM application — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRumApplication(input: {
  /** RUM application ID. */
  id: string;
}): Promise<RumApplicationResponse>
```

<sub>`GET /api/v2/rum/applications/{id}` · `GetRUMApplication`</sub>

## `datadog.updateRumApplication`

Update a RUM application — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateRumApplication(input: {
  data: RumApplicationUpdate;
  /** RUM application ID. */
  id: string;
}): Promise<RumApplicationResponse>
```

<sub>`PATCH /api/v2/rum/applications/{id}` · `UpdateRUMApplication`</sub>

## `datadog.listRumEvents`

Get a list of RUM events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumEvents(input: {
  /** Search query following RUM syntax. */
  "filter[query]"?: string;
  /** Minimum timestamp for requested events. */
  "filter[from]"?: string;
  /** Maximum timestamp for requested events. */
  "filter[to]"?: string;
  sort?: RumSort;
  /** List following results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** Maximum number of events in the response. */
  "page[limit]"?: number;
}): Promise<RumEventsResponse>
```

<sub>`GET /api/v2/rum/events` · `ListRUMEvents`</sub>

## `datadog.searchRumEvents`

Search RUM events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchRumEvents(input: {
  filter?: RumQueryFilter;
  options?: RumQueryOptions;
  page?: RumQueryPageOptions;
  sort?: RumSort;
}): Promise<RumEventsResponse>
```

<sub>`POST /api/v2/rum/events/search` · `SearchRUMEvents`</sub>

## `datadog.deleteSourcemaps`

Delete source maps — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSourcemaps(input: {
  mapkind: SourcemapMapKind;
  /** When set to `true`, returns the source maps that would be deleted without performing the actual deletion. When set to `false`, performs the deletion. */
  dry_run: boolean;
  /** Filter by service names (multiple values allowed). Required for `js`, `jvm`, `react`, and `flutter` map kinds. */
  "filter[service]"?: (string)[];
  /** Filter by version values (multiple values allowed, maximum 10). Required for `js`, `jvm`, `react`, and `flutter` map kinds. */
  "filter[version]"?: (string)[];
  /** Filter by variant values (multiple values allowed). Supported for `jvm`. */
  "filter[variant]"?: (string)[];
  /** Filter by source map ID values (multiple values allowed). Supported for all map kinds. */
  "filter[id]"?: (string)[];
  /** Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`. */
  "filter[build_id]"?: (string)[];
  /** Filter by UUID values (multiple values allowed). Supported for `ios`. */
  "filter[uuid]"?: (string)[];
  /** Filter by platform values (multiple values allowed). Supported for `react`. */
  "filter[platform]"?: (string)[];
  /** Filter by build number values (multiple values allowed). Supported for `react`. */
  "filter[build_number]"?: (string)[];
  /** Filter by bundle name values (multiple values allowed). Supported for `react`. */
  "filter[bundle_name]"?: (string)[];
  /** Filter by architecture values (multiple values allowed). Supported for `flutter`, `elf`, and `ndk`. */
  "filter[arch]"?: (string)[];
  /** Filter by symbol source values (multiple values allowed). Supported for `elf`. */
  "filter[symbol_source]"?: (string)[];
  /** Filter by origin values (multiple values allowed). Supported for `elf`. */
  "filter[origin]"?: (string)[];
  /** Filter by origin version values (multiple values allowed). Supported for `elf`. */
  "filter[origin_version]"?: (string)[];
  /** Filter by filename (single value). Supported for `js`, `elf`, and `ndk`. */
  "filter[filename]"?: string;
  /** Filter by debug ID (single value). Supported for `react`. */
  "filter[debug_id]"?: string;
  /** Filter by GNU build ID (single value). Supported for `elf`. */
  "filter[gnu_build_id]"?: string;
  /** Filter by Go build ID (single value). Supported for `elf`. */
  "filter[go_build_id]"?: string;
  /** Filter by file hash (single value). Supported for `elf`. */
  "filter[file_hash]"?: string;
}): Promise<SourcemapsResponse>
```

<sub>`DELETE /api/v2/sourcemaps` · `DeleteSourcemaps`</sub>

## `datadog.getSourcemaps`

Get a JavaScript source map — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSourcemaps(input: {
  /** The path to the source map file. */
  filename: string;
  /** The service name associated with the source map. */
  service: string;
  /** The version of the service associated with the source map. */
  version: string;
}): Promise<SourcemapFileResponse>
```

<sub>`GET /api/v2/sourcemaps` · `GetSourcemaps`</sub>

## `datadog.listSourcemaps`

List source maps — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSourcemaps(input: {
  mapkind?: SourcemapMapKind;
  /** The number of results to return per page. Must be at least 1. */
  "page[size]"?: number;
  /** The page number to retrieve, starting from 1. */
  "page[number]"?: number;
  /** Filter by service names (multiple values allowed). Required for `js`, `jvm`, `react`, and `flutter` map kinds. */
  "filter[service]"?: (string)[];
  /** Filter by version values (multiple values allowed). Required for `js`, `jvm`, `react`, and `flutter` map kinds. */
  "filter[version]"?: (string)[];
  /** Filter by variant values (multiple values allowed). Supported for `jvm`. */
  "filter[variant]"?: (string)[];
  /** Filter by source map ID values (multiple values allowed). Supported for all map kinds. */
  "filter[id]"?: (string)[];
  /** Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`. */
  "filter[build_id]"?: (string)[];
  /** Filter by UUID values (multiple values allowed). Supported for `ios`. */
  "filter[uuid]"?: (string)[];
  /** Filter by platform values (multiple values allowed). Supported for `react`. */
  "filter[platform]"?: (string)[];
  /** Filter by build number values (multiple values allowed). Supported for `react`. */
  "filter[build_number]"?: (string)[];
  /** Filter by bundle name values (multiple values allowed). Supported for `react`. */
  "filter[bundle_name]"?: (string)[];
  /** Filter by architecture values (multiple values allowed). Supported for `flutter`, `elf`, and `ndk`. */
  "filter[arch]"?: (string)[];
  /** Filter by symbol source values (multiple values allowed). Supported for `elf`. */
  "filter[symbol_source]"?: (string)[];
  /** Filter by origin values (multiple values allowed). Supported for `elf`. */
  "filter[origin]"?: (string)[];
  /** Filter by origin version values (multiple values allowed). Supported for `elf`. */
  "filter[origin_version]"?: (string)[];
  /** Filter by filename (single value). Supported for `js`, `elf`, and `ndk`. */
  "filter[filename]"?: string;
  /** Filter by debug ID (single value). Supported for `react`. */
  "filter[debug_id]"?: string;
  /** Filter by GNU build ID (single value). Supported for `elf`. */
  "filter[gnu_build_id]"?: string;
  /** Filter by Go build ID (single value). Supported for `elf`. */
  "filter[go_build_id]"?: string;
  /** Filter by file hash (single value). Supported for `elf`. */
  "filter[file_hash]"?: string;
}): Promise<ListSourcemapsResponse>
```

<sub>`GET /api/v2/sourcemaps/list` · `ListSourcemaps`</sub>

## `datadog.restoreSourcemaps`

Restore source maps — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.restoreSourcemaps(input: {
  mapkind: SourcemapMapKind;
  /** When set to `true`, returns the source maps that would be restored without performing the actual restoration. When set to `false`, performs the restoration. */
  dry_run: boolean;
  /** Filter by service names (multiple values allowed). Required for `js`, `jvm`, `react`, and `flutter` map kinds. */
  "filter[service]"?: (string)[];
  /** Filter by version values (multiple values allowed, maximum 10). Required for `js`, `jvm`, `react`, and `flutter` map kinds. */
  "filter[version]"?: (string)[];
  /** Filter by variant values (multiple values allowed). Supported for `jvm`. */
  "filter[variant]"?: (string)[];
  /** Filter by source map ID values (multiple values allowed). Supported for all map kinds. */
  "filter[id]"?: (string)[];
  /** Filter by build ID values (multiple values allowed). Supported for `jvm`, `ndk`, and `il2cpp`. */
  "filter[build_id]"?: (string)[];
  /** Filter by UUID values (multiple values allowed). Supported for `ios`. */
  "filter[uuid]"?: (string)[];
  /** Filter by platform values (multiple values allowed). Supported for `react`. */
  "filter[platform]"?: (string)[];
  /** Filter by build number values (multiple values allowed). Supported for `react`. */
  "filter[build_number]"?: (string)[];
  /** Filter by bundle name values (multiple values allowed). Supported for `react`. */
  "filter[bundle_name]"?: (string)[];
  /** Filter by architecture values (multiple values allowed). Supported for `flutter`, `elf`, and `ndk`. */
  "filter[arch]"?: (string)[];
  /** Filter by symbol source values (multiple values allowed). Supported for `elf`. */
  "filter[symbol_source]"?: (string)[];
  /** Filter by origin values (multiple values allowed). Supported for `elf`. */
  "filter[origin]"?: (string)[];
  /** Filter by origin version values (multiple values allowed). Supported for `elf`. */
  "filter[origin_version]"?: (string)[];
  /** Filter by filename (single value). Supported for `js`, `elf`, and `ndk`. */
  "filter[filename]"?: string;
  /** Filter by debug ID (single value). Supported for `react`. */
  "filter[debug_id]"?: string;
  /** Filter by GNU build ID (single value). Supported for `elf`. */
  "filter[gnu_build_id]"?: string;
  /** Filter by Go build ID (single value). Supported for `elf`. */
  "filter[go_build_id]"?: string;
  /** Filter by file hash (single value). Supported for `elf`. */
  "filter[file_hash]"?: string;
}): Promise<SourcemapsResponse>
```

<sub>`PATCH /api/v2/sourcemaps/restore` · `RestoreSourcemaps`</sub>

## `datadog.getServiceRepositoryInfo`

Get service repository information — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getServiceRepositoryInfo(input: {
  data: ServiceRepositoryInfoRequestData;
}): Promise<ServiceRepositoryInfoResponse>
```

<sub>`POST /api/v2/sourcemaps/service_repository_info` · `GetServiceRepositoryInfo`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

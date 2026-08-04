# Downtimes

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listDowntimes`

Get all downtimes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDowntimes(input: {
  /** Only return downtimes that are active when the request is made. */
  current_only?: boolean;
  /** Comma-separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `monitor`. */
  include?: string;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Maximum number of downtimes in the response. */
  "page[limit]"?: number;
}): Promise<ListDowntimesResponse>
```

<sub>`GET /api/v2/downtime` · `ListDowntimes`</sub>

## `datadog.createDowntime`

Schedule a downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDowntime(input: {
  data: DowntimeCreateRequestData;
}): Promise<DowntimeResponse>
```

<sub>`POST /api/v2/downtime` · `CreateDowntime`</sub>

## `datadog.cancelDowntime`

Cancel a downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cancelDowntime(input: {
  /** ID of the downtime to cancel. */
  downtime_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/downtime/{downtime_id}` · `CancelDowntime`</sub>

## `datadog.getDowntime`

Get a downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDowntime(input: {
  /** ID of the downtime to fetch. */
  downtime_id: string;
  /** Comma-separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `monitor`. */
  include?: string;
}): Promise<DowntimeResponse>
```

<sub>`GET /api/v2/downtime/{downtime_id}` · `GetDowntime`</sub>

## `datadog.updateDowntime`

Update a downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDowntime(input: {
  data: DowntimeUpdateRequestData;
  /** ID of the downtime to update. */
  downtime_id: string;
}): Promise<DowntimeResponse>
```

<sub>`PATCH /api/v2/downtime/{downtime_id}` · `UpdateDowntime`</sub>

## `datadog.listMonitorDowntimes`

Get active downtimes for a monitor — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMonitorDowntimes(input: {
  /** The id of the monitor. */
  monitor_id: number;
  /** Specific offset to use as the beginning of the returned page. */
  "page[offset]"?: number;
  /** Maximum number of downtimes in the response. */
  "page[limit]"?: number;
}): Promise<MonitorDowntimeMatchResponse>
```

<sub>`GET /api/v2/monitor/{monitor_id}/downtime_matches` · `ListMonitorDowntimes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

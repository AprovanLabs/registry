# Analytics

4 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.createAnalyticsExport`

Create a new analytics export — [Provider docs](https://community.front.com)

```ts
front.createAnalyticsExport(input: {
  body?: AnalyticsExportRequest;
}): Promise<AnalyticsExportResponse>
```

<sub>`POST /analytics/exports` · `create-analytics-export`</sub>

## `front.getAnalyticsExport`

Fetch an analytics export — [Provider docs](https://community.front.com)

```ts
front.getAnalyticsExport(input: {
  /** The export ID. */
  export_id: string;
}): Promise<AnalyticsExportResponse>
```

<sub>`GET /analytics/exports/{export_id}` · `get-analytics-export`</sub>

## `front.createAnalyticsReport`

Create a new analytics report — [Provider docs](https://community.front.com)

```ts
front.createAnalyticsReport(input: {
  /** Start time of the data to include in the export (seconds since 1970-01-01T00:00:00+00). Will be rounded down to the start of the day. */
  start: number;
  /** End time of the data to include in the export (seconds since 1970-01-01T00:00:00+00). Will be rounded up to the end of the day. */
  end: number;
  /** [IANA name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the timezone to format the dates with. If omitted, the export will use Etc/UTC. */
  timezone?: string;
  filters?: AnalyticsFilters;
  /** List of the metrics required. */
  metrics: (AnalyticsMetricId)[];
}): Promise<AnalyticsReportResponse>
```

<sub>`POST /analytics/reports` · `create-analytics-report`</sub>

## `front.getAnalyticsReport`

Fetch an analytics report — [Provider docs](https://community.front.com)

```ts
front.getAnalyticsReport(input: {
  /** The report UID. */
  report_uid: string;
}): Promise<AnalyticsReportResponse>
```

<sub>`GET /analytics/reports/{report_uid}` · `get-analytics-report`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

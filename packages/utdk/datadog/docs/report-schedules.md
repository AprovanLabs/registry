# Report Schedules

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listDatasetReportSchedules`

List dataset report schedules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listDatasetReportSchedules(input: {
  /** The identifier of the published dataset to retrieve report schedules for. */
  dataset_id: string;
}): Promise<DatasetReportScheduleListResponse>
```

<sub>`GET /api/v2/reporting/dataset/{dataset_id}/schedules` · `ListDatasetReportSchedules`</sub>

## `datadog.printReport`

Print a report — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.printReport(input: {
  data: PrintReportRequestData;
}): Promise<PrintReportResponse>
```

<sub>`POST /api/v2/reporting/print` · `PrintReport`</sub>

## `datadog.createReportSchedule`

Create a report schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createReportSchedule(input: {
  data: ReportScheduleCreateRequestData;
}): Promise<ReportScheduleResponse>
```

<sub>`POST /api/v2/reporting/schedule` · `CreateReportSchedule`</sub>

## `datadog.getReportSchedulesForResource`

Get report schedules for a resource — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getReportSchedulesForResource(input: {
  resource_type: ReportScheduleResourceType;
  /** The identifier of the resource to fetch report schedules for. */
  resource_id: string;
}): Promise<ReportScheduleListResponse>
```

<sub>`GET /api/v2/reporting/schedule/{resource_type}/{resource_id}` · `GetReportSchedulesForResource`</sub>

## `datadog.deleteReportSchedule`

Delete a report schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteReportSchedule(input: {
  /** The unique identifier of the report schedule to delete. */
  schedule_uuid: string;
}): Promise<ReportScheduleResponse>
```

<sub>`DELETE /api/v2/reporting/schedule/{schedule_uuid}` · `DeleteReportSchedule`</sub>

## `datadog.getReportSchedule`

Get a report schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getReportSchedule(input: {
  /** The unique identifier of the report schedule to fetch. */
  schedule_uuid: string;
}): Promise<ReportScheduleResponse>
```

<sub>`GET /api/v2/reporting/schedule/{schedule_uuid}` · `GetReportSchedule`</sub>

## `datadog.patchReportSchedule`

Update a report schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchReportSchedule(input: {
  data: ReportSchedulePatchRequestData;
  /** The unique identifier of the report schedule to update. */
  schedule_uuid: string;
}): Promise<ReportScheduleResponse>
```

<sub>`PATCH /api/v2/reporting/schedule/{schedule_uuid}` · `PatchReportSchedule`</sub>

## `datadog.toggleReportSchedule`

Toggle a report schedule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.toggleReportSchedule(input: {
  data: ReportScheduleToggleRequestData;
  /** The unique identifier of the report schedule to toggle. */
  schedule_uuid: string;
}): Promise<ReportScheduleResponse>
```

<sub>`PATCH /api/v2/reporting/schedule/{schedule_uuid}/toggle` · `ToggleReportSchedule`</sub>

## `datadog.listReportSchedules`

List report schedules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listReportSchedules(input: {
  /** The maximum number of schedules to return. The maximum value is 50. */
  "page[limit]"?: number;
  /** The offset from which to start returning schedules. */
  "page[offset]"?: number;
  /** Filter schedules by report title. */
  "filter[title]"?: string;
  /** Filter schedules by author UUID. */
  "filter[author_uuid]"?: string;
  /** Filter schedules by a comma-separated list of recipients. */
  "filter[recipients]"?: string;
}): Promise<ReportScheduleListResponse>
```

<sub>`GET /api/v2/reporting/schedule/list` · `ListReportSchedules`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

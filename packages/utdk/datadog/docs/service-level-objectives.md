# Service Level Objectives

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getSloStatus`

Get SLO status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSloStatus(input: {
  /** The ID of the SLO. */
  slo_id: string;
  /** The starting timestamp for the SLO status query in epoch seconds. */
  from_ts: number;
  /** The ending timestamp for the SLO status query in epoch seconds. */
  to_ts: number;
  /** Whether to exclude correction windows from the SLO status calculation. Defaults to false. */
  disable_corrections?: boolean;
}): Promise<SloStatusResponse>
```

<sub>`GET /api/v2/slo/{slo_id}/status` · `GetSloStatus`</sub>

## `datadog.createSloReportJob`

Create a new SLO report — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSloReportJob(input: {
  data: SloReportCreateRequestData;
}): Promise<SloReportPostResponse>
```

<sub>`POST /api/v2/slo/report` · `CreateSLOReportJob`</sub>

## `datadog.getSloReport`

Get SLO report — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSloReport(input: {
  /** The ID of the report job. */
  report_id: string;
}): Promise<string>
```

<sub>`GET /api/v2/slo/report/{report_id}/download` · `GetSLOReport`</sub>

## `datadog.getSloReportJobStatus`

Get SLO report status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSloReportJobStatus(input: {
  /** The ID of the report job. */
  report_id: string;
}): Promise<SloReportStatusGetResponse>
```

<sub>`GET /api/v2/slo/report/{report_id}/status` · `GetSLOReportJobStatus`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

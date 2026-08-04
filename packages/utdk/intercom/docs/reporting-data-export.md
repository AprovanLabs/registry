# Reporting Data Export

4 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.getDownloadReportingDataJobIdentifier`

Download completed export job data — [Provider docs](https://developers.intercom.com)

```ts
intercom.getDownloadReportingDataJobIdentifier(input: {
  app_id: string;
  job_identifier: string;
}, options: { headers: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15"; Accept: "app...): Promise<undefined>
```

<sub>`GET /download/reporting_data/{job_identifier}` · `get_download_reporting_data_job_identifier`</sub>

## `intercom.getExportReportingDataJobIdentifier`

Get export job status — [Provider docs](https://developers.intercom.com)

```ts
intercom.getExportReportingDataJobIdentifier(input: {
  /** The Intercom defined code of the workspace the company is associated to. */
  app_id: string;
  client_id: string;
  /** Unique identifier of the job. */
  job_identifier: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ job_identifier?: string; status?: string; download_url?: string; download_expires_at?: string }>
```

<sub>`GET /export/reporting_data/{job_identifier}` · `get_export_reporting_data_job_identifier`</sub>

## `intercom.postExportReportingDataEnqueue`

Enqueue a new reporting data export job — [Provider docs](https://developers.intercom.com)

```ts
intercom.postExportReportingDataEnqueue(input: {
  dataset_id: string;
  attribute_ids: (string)[];
  start_time: number;
  end_time: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ job_identifier?: string; status?: string; download_url?: string; download_expires_at?: string }>
```

<sub>`POST /export/reporting_data/enqueue` · `post_export_reporting_data_enqueue`</sub>

## `intercom.getExportReportingDataGetDatasets`

List available datasets and attributes — [Provider docs](https://developers.intercom.com)

```ts
intercom.getExportReportingDataGetDatasets(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ type?: string; data?: ({ id?: string; name?: string; description?: string; default_time_attribute_id?: string; attributes?: ({ id?: string; name?: string })[] })[] }>
```

<sub>`GET /export/reporting_data/get_datasets` · `get_export_reporting_data_get_datasets`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Data Export

4 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.downloadDataExport`

Download content data export — [Provider docs](https://developers.intercom.com)

```ts
intercom.downloadDataExport(input: {
  /** job_identifier */
  job_identifier: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<undefined>
```

<sub>`GET /download/content/data/{job_identifier}` · `downloadDataExport`</sub>

## `intercom.cancelDataExport`

Cancel content data export — [Provider docs](https://developers.intercom.com)

```ts
intercom.cancelDataExport(input: {
  /** job_identifier */
  job_identifier: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataExport>
```

<sub>`POST /export/cancel/{job_identifier}` · `cancelDataExport`</sub>

## `intercom.createDataExport`

Create content data export — [Provider docs](https://developers.intercom.com)

```ts
intercom.createDataExport(input: {
  /** The start date that you request data for. It must be formatted as a unix timestamp. */
  created_at_after: number;
  /** The end date that you request data for. It must be formatted as a unix timestamp. */
  created_at_before: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataExport>
```

<sub>`POST /export/content/data` · `createDataExport`</sub>

## `intercom.getDataExport`

Show content data export — [Provider docs](https://developers.intercom.com)

```ts
intercom.getDataExport(input: {
  /** job_identifier */
  job_identifier: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataExport>
```

<sub>`GET /export/content/data/{job_identifier}` · `getDataExport`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Stats

7 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getBrowsersStats`

Retrieve email statistics by browser. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getBrowsersStats(input: {
  /** The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times. */
  browsers?: string;
  /** The number of results to return. */
  limit?: number;
  /** The point in the list to begin retrieving results. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date?: string; stats?: ({ metrics?: AdvancedStatsClicks; name?: string; type?: string })[] })[]>
```

<sub>`GET /browsers/stats` · `GET_browsers-stats`</sub>

## `sendgrid.getClientsClientTypeStats`

Retrieve stats by a specific client type. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getClientsClientTypeStats(input: {
  /** Specifies the type of client to retrieve stats for. Must be either "phone", "tablet", "webmail", or "desktop". */
  client_type: "phone" | "tablet" | "webmail" | "desktop";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date?: string; stats?: ({ metrics?: AdvancedStatsOpens; name?: string; type?: string })[] })[]>
```

<sub>`GET /clients/{client_type}/stats` · `GET_clients-client_type-stats`</sub>

## `sendgrid.getClientsStats`

Retrieve email statistics by client type. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getClientsStats(input: {
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date?: string; stats?: ({ metrics?: AdvancedStatsOpens; name?: string; type?: string })[] })[]>
```

<sub>`GET /clients/stats` · `GET_clients-stats`</sub>

## `sendgrid.getDevicesStats`

Retrieve email statistics by device type. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getDevicesStats(input: {
  /** The number of results to return. */
  limit?: number;
  /** The point in the list to begin retrieving results. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date?: string; stats?: ({ metrics?: AdvancedStatsOpens; name?: string; type?: string })[] })[]>
```

<sub>`GET /devices/stats` · `GET_devices-stats`</sub>

## `sendgrid.getGeoStats`

Retrieve email statistics by country and state/province. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getGeoStats(input: {
  /** The country you would like to see statistics for. Currently only supported for US and CA. */
  country?: "US" | "CA";
  /** The number of results to return. */
  limit?: number;
  /** The point in the list to begin retrieving results. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date?: string; stats?: ({ metrics?: AdvancedStatsClicksOpens; name?: string; type?: string })[] })[]>
```

<sub>`GET /geo/stats` · `GET_geo-stats`</sub>

## `sendgrid.getMailboxProvidersStats`

Retrieve email statistics by mailbox provider. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailboxProvidersStats(input: {
  /** The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times. */
  mailbox_providers?: string;
  /** The number of results to return. */
  limit?: number;
  /** The point in the list to begin retrieving results. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date?: string; stats?: ({ metrics?: AdvancedStatsMailboxProvider; name?: string; type?: string })[] })[]>
```

<sub>`GET /mailbox_providers/stats` · `GET_mailbox_providers-stats`</sub>

## `sendgrid.getStats`

Retrieve global email statistics — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getStats(input: {
  /** The number of results to return. */
  limit?: number;
  /** The point in the list to begin retrieving results. */
  offset?: number;
  /** How to group the statistics. Must be either "day", "week", or "month". */
  aggregated_by?: "day" | "week" | "month";
  /** The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD. */
  start_date: string;
  /** The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD. */
  end_date?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ date: string; stats: ({ metrics?: StatsAdvancedGlobalStats })[] })[]>
```

<sub>`GET /stats` · `GET_stats`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

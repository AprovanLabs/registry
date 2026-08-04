# Marketing Campaigns Stats

8 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getallAutomationStats`

Get All Automation Stats — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getallAutomationStats(input: {
  /** This endpoint returns all automation IDs if no `automation_ids` are specified. */
  automation_ids?: (string)[];
  /** The number of elements you want returned on each page. */
  page_size?: number;
  /** The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. */
  page_token?: string;
}): Promise<AutomationsResponse>
```

<sub>`GET /marketing/stats/automations` · `getall-automation-stats`</sub>

## `sendgrid.getAutomationStat`

Get Automation Stats by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAutomationStat(input: {
  id: string;
  /** Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats. */
  group_by?: ("step_id")[];
  /** Comma-separated list of `step_ids` that you want the link stats for. */
  step_ids?: (string)[];
  /** Dictates how the stats are time-sliced. Currently, `"total"` and `"day"` are supported. */
  aggregated_by?: "day" | "total";
  /** Format: `YYYY-MM-DD`. If this parameter is included, the stats' start date is included in the search. */
  start_date?: string;
  /** Format: `YYYY-MM-DD`.If this parameter is included, the stats' end date is included in the search. */
  end_date?: string;
  /** [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented, e.g., "America/Chicago". */
  timezone?: string;
  /** The number of elements you want returned on each page. */
  page_size?: number;
  /** The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. */
  page_token?: string;
}): Promise<AutomationsResponse>
```

<sub>`GET /marketing/stats/automations/{id}` · `get-automation-stat`</sub>

## `sendgrid.getAutomationLinkStat`

Get Automation Click Tracking Stats by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAutomationLinkStat(input: {
  /** The ID of the Automation you want to get click tracking stats for.  */
  id: string;
  /** Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats. */
  group_by?: ("step_id")[];
  /** Comma-separated list of `step_ids` that you want the link stats for. */
  step_ids?: (string)[];
  /** The number of elements you want returned on each page. */
  page_size?: number;
  /** The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. */
  page_token?: string;
}): Promise<AutomationsLinkStatsResponse>
```

<sub>`GET /marketing/stats/automations/{id}/links` · `get-automation-link-stat`</sub>

## `sendgrid.getAutomationsStatsExport`

Export Automation Stats — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAutomationsStatsExport(input: {
  /** The IDs of Automations for which to export stats. */
  ids?: (string)[];
  /** The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented; i.e. `"America/Chicago"`. This parameter changes the timezone format only; it does not alter which stats are returned. */
  timezone?: string;
}): Promise<string>
```

<sub>`GET /marketing/stats/automations/export` · `get-automations-stats-export`</sub>

## `sendgrid.getallSinglesendStats`

Get All Single Sends Stats — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getallSinglesendStats(input: {
  /** This endpoint returns all Single Send IDs if no IDs are included in `singlesend_ids`. */
  singlesend_ids?: (string)[];
  /** The number of elements you want returned on each page. */
  page_size?: number;
  /** The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. */
  page_token?: string;
}): Promise<SinglesendsResponse>
```

<sub>`GET /marketing/stats/singlesends` · `getall-singlesend-stats`</sub>

## `sendgrid.getSinglesendStat`

Get Single Send Stats by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSinglesendStat(input: {
  id: string;
  /** Dictates how the stats are time-sliced. Currently, `"total"` and `"day"` are supported. */
  aggregated_by?: "day" | "total";
  /** Format: `YYYY-MM-DD`. If this parameter is included, the stats' start date is included in the search. */
  start_date?: string;
  /** Format: `YYYY-MM-DD`.If this parameter is included, the stats' end date is included in the search. */
  end_date?: string;
  /** [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented, e.g., "America/Chicago". */
  timezone?: string;
  /** The number of elements you want returned on each page. */
  page_size?: number;
  /** The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. */
  page_token?: string;
  /** A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields. */
  group_by?: ("ab_variation" | "ab_phase")[];
}): Promise<SinglesendsResponse>
```

<sub>`GET /marketing/stats/singlesends/{id}` · `get-singlesend-stat`</sub>

## `sendgrid.getSinglesendLinkStat`

Get Single Send Click Tracking Stats by ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSinglesendLinkStat(input: {
  id: string;
  /** The number of elements you want returned on each page. */
  page_size?: number;
  /** The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page. */
  page_token?: string;
  /** A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields. */
  group_by?: ("ab_variation" | "ab_phase")[];
  ab_variation_id?: string;
  ab_phase_id?: "test" | "send";
}): Promise<SinglesendsLinkStatsResponse>
```

<sub>`GET /marketing/stats/singlesends/{id}/links` · `get-singlesend-link-stat`</sub>

## `sendgrid.getSinglesendStatsExport`

Export Single Send Stats — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSinglesendStatsExport(input: {
  /** The IDs of Single Sends for which to export stats. */
  ids?: (string)[];
  /** The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented; i.e. `"America/Chicago"`. This parameter changes the timezone format only; it does not alter which stats are returned. */
  timezone?: string;
}): Promise<string>
```

<sub>`GET /marketing/stats/singlesends/export` · `get-singlesend-stats-export`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

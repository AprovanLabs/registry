# Access:All

2 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.usageByProductOverTime`

Get Workspace Usage

```ts
elevenlabs.usageByProductOverTime(input: {
  /** Start of the time range as a Unix timestamp in milliseconds. Must be at least 2020-01-01. */
  start_time: number;
  /** End of the time range as a Unix timestamp in milliseconds. Must be at least 2020-01-01. */
  end_time: number;
  /** Bucket size in seconds. Each row in the response covers this many seconds of the selected time range. For example, pass 3600 for hourly buckets or 86400 for daily buckets. Whether `time_zone` shifts bucket boundaries depends on this value: whole-day multiples (e.g. 86400) align to local midnight; whole-hour multiples up to 24 hours (e.g. 3600, 14400) align to local hour boundaries from midnight; sub-hour values and other sizes remain UTC-anchored regardless of `time_zone`. */
  interval_seconds?: number;
  group_by?: ("product_type" | "model" | "voice_id" | "user_id" | "fiat_currency" | "fiat_charge_type" | "region" | "reporting_workspace_id" | "request_source" | "resource_id" | "subresource_id" | "request_queue_type" | "voice_multiplier" | "hashed_xi_api_key" | "billing_group_id" | "surface" | "actor")[] | null;
  filters?: (ColumnFilter)[] | null;
  /** IANA time zone identifier (e.g. 'America/New_York', 'Europe/London', 'UTC') used to align bucket boundaries for eligible `interval_seconds` values. Whole-day multiples start at local midnight; whole-hour multiples up to 24 hours align to local hour boundaries from midnight. Sub-hour intervals and other bucket sizes remain UTC-anchored regardless of this setting. Defaults to UTC. */
  time_zone?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceAnalyticsQueryResponseModel>
```

<sub>`POST /v1/workspace/analytics/query/usage-by-product-over-time` · `usage_by_product_over_time`</sub>

## `elevenlabs.requestsList`

List Api Requests

```ts
elevenlabs.requestsList(input: {
  /** Start of the time range as a Unix timestamp in milliseconds. */
  start_time?: number | null;
  /** End of the time range as a Unix timestamp in milliseconds. */
  end_time?: number | null;
  limit?: number;
  /** Optional timestamp sort direction. If omitted, defaults to desc when end_time is provided, otherwise asc. */
  sort?: "asc" | "desc" | null;
  filters?: (ColumnFilter)[] | null;
  search?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceAnalyticsQueryResponseModel>
```

<sub>`POST /v1/workspace/analytics/requests` · `requests_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

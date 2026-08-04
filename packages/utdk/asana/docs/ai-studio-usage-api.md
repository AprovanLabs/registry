# AI Studio Usage API

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getAiStudioRuns`

Get AI Studio credit utilization — [Provider docs](https://asana.com/support)

```ts
asana.getAiStudioRuns(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Inclusive lower bound. Runs are ordered and filtered by when their usage was recorded (the monotonic timestamp used for incremental polling), not by `run_started_at`. Omitted ⇒ the 2025-01-08 floor — no credit data exists before then, and there is no limit on how far back you can query. A value earlier than 2025-01-08 is treated as 2025-01-08 (not rejected), matching the audit log. */
  start_at?: string;
  /** Filter to runs whose usage was recorded before this time (exclusive) — by when the run's credit usage was recorded, not by `run_started_at`. Defaults to the time of the request. */
  end_at?: string;
  /** Scope results to a single division (its gid). Omitted ⇒ the org's first licensed division. Use this to retrieve only one division's slice (e.g. for a division-level admin or billing owner) rather than the whole organization. */
  division_gid?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
}): Promise<{ data?: (AiStudioRunResponse)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/ai_studio/runs` · `getAiStudioRuns`</sub>

## `asana.getAiStudioSeats`

Get AI Studio seats — [Provider docs](https://asana.com/support)

```ts
asana.getAiStudioSeats(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Filter seats to this state. */
  state?: "active" | "revoked";
  /** Scope results to a single division (its gid). Omitted ⇒ the org's first licensed division. Use this to retrieve only one division's slice (e.g. for a division-level admin or billing owner) rather than the whole organization. */
  division_gid?: string;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
}): Promise<{ data?: (AiStudioSeatResponse)[]; next_page?: NextPage }>
```

<sub>`GET /workspaces/{workspace_gid}/ai_studio/seats` · `getAiStudioSeats`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

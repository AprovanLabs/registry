# Rum Replay Viewership

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listRumReplaySessionWatchers`

List RUM replay session watchers — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumReplaySessionWatchers(input: {
  /** Unique identifier of the session. */
  session_id: string;
  /** Number of items per page. */
  "page[size]"?: number;
  /** Page number for pagination (0-indexed). */
  "page[number]"?: number;
}): Promise<WatcherArray>
```

<sub>`GET /api/v2/rum/replay/sessions/{session_id}/watchers` · `ListRumReplaySessionWatchers`</sub>

## `datadog.deleteRumReplaySessionWatch`

Delete RUM replay session watch — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRumReplaySessionWatch(input: {
  /** Unique identifier of the session. */
  session_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/rum/replay/sessions/{session_id}/watches` · `DeleteRumReplaySessionWatch`</sub>

## `datadog.createRumReplaySessionWatch`

Create RUM replay session watch — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createRumReplaySessionWatch(input: {
  data: WatchData;
  /** Unique identifier of the session. */
  session_id: string;
}): Promise<Watch>
```

<sub>`POST /api/v2/rum/replay/sessions/{session_id}/watches` · `CreateRumReplaySessionWatch`</sub>

## `datadog.listRumReplayViewershipHistorySessions`

List RUM replay viewership history sessions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listRumReplayViewershipHistorySessions(input: {
  /** Start timestamp in milliseconds for watched_at filter. */
  "filter[watched_at][start]"?: number;
  /** Page number for pagination (0-indexed). */
  "page[number]"?: number;
  /** Filter by user UUID. Defaults to current user if not specified. */
  "filter[created_by]"?: string;
  /** End timestamp in milliseconds for watched_at filter. */
  "filter[watched_at][end]"?: number;
  /** Comma-separated list of session IDs to filter by. */
  "filter[session_ids]"?: string;
  /** Number of items per page. */
  "page[size]"?: number;
  /** Filter by application ID. */
  "filter[application_id]"?: string;
}): Promise<ViewershipHistorySessionArray>
```

<sub>`GET /api/v2/rum/replay/viewership-history/sessions` · `ListRumReplayViewershipHistorySessions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

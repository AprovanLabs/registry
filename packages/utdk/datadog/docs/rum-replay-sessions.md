# Rum Replay Sessions

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getSegments`

Get segments — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSegments(input: {
  /** Unique identifier of the view. */
  view_id: string;
  /** Unique identifier of the session. */
  session_id: string;
  /** Storage source: 'event_platform' or 'blob'. */
  source?: string;
  /** Server-side timestamp in milliseconds. */
  ts?: number;
  /** Maximum size in bytes for the segment list. */
  max_list_size?: number;
  /** Paging token for pagination. */
  paging?: string;
}): Promise<undefined>
```

<sub>`GET /api/v2/rum/replay/sessions/{session_id}/views/{view_id}/segments` · `GetSegments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

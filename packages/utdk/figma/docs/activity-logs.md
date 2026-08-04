# Activity Logs

1 operation · `@utdk/figma`

```ts
import figma from "@utdk/figma";
```

## `figma.getActivityLogs`

Get activity logs — [Provider docs](https://developers.figma.com/docs/rest-api/)

```ts
figma.getActivityLogs(input: {
  /** Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default. */
  events?: string;
  /** Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified. */
  start_time?: number;
  /** Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified. */
  end_time?: number;
  /** Maximum number of events to return. This param defaults to 1000 if unspecified. */
  limit?: number;
  /** Event order by timestamp. This param can be either "asc" (default) or "desc". */
  order?: "asc" | "desc";
}): Promise<{ status?: 200; error?: false; meta?: { activity_logs?: (ActivityLog)[]; cursor?: string; next_page?: boolean } }>
```

<sub>`GET /v1/activity_logs` · `getActivityLogs`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Events

2 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listEvents`

List events — [Provider docs](https://community.front.com)

```ts
front.listEvents(input: {
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with optional properties `before`, `after`, `types`, or `inboxes`. `before` and `after` should be a timestamp in seconds with up to 3 decimal places. `types` should be a list of [event types](https://dev.frontapp.com/reference/events). `inboxes` should be a list of inbox IDs. */
  q?: string;
  /** Max number of results per page (max 15) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the events. Only supports `created_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (EventResponse)[] }>
```

<sub>`GET /events` · `list-events`</sub>

## `front.getEvent`

Get event — [Provider docs](https://community.front.com)

```ts
front.getEvent(input: {
  /** The event ID */
  event_id: string;
}): Promise<EventResponse>
```

<sub>`GET /events/{event_id}` · `get-event`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

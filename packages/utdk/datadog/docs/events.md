# Events

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listEvents`

Get a list of events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listEvents(input: {
  /** Search query following events syntax. */
  "filter[query]"?: string;
  /** Minimum timestamp for requested events, in milliseconds. */
  "filter[from]"?: string;
  /** Maximum timestamp for requested events, in milliseconds. */
  "filter[to]"?: string;
  sort?: EventsSort;
  /** List following results with a cursor provided in the previous query. */
  "page[cursor]"?: string;
  /** Maximum number of events in the response. */
  "page[limit]"?: number;
}): Promise<EventsListResponse>
```

<sub>`GET /api/v2/events` · `ListEvents`</sub>

## `datadog.createEvent`

Post an event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createEvent(input: {
  data: EventCreateRequest;
}): Promise<EventCreateResponsePayload>
```

<sub>`POST /api/v2/events` · `CreateEvent`</sub>

## `datadog.getEvent`

Get an event — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getEvent(input: {
  /** The UID of the event. */
  event_id: string;
}): Promise<V2EventResponse>
```

<sub>`GET /api/v2/events/{event_id}` · `GetEvent`</sub>

## `datadog.searchEvents`

Search events — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchEvents(input: {
  filter?: EventsQueryFilter;
  options?: EventsQueryOptions;
  page?: EventsRequestPage;
  sort?: EventsSort;
}): Promise<EventsListResponse>
```

<sub>`POST /api/v2/events/search` · `SearchEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

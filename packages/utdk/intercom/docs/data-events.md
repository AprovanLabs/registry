# Data Events

3 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.lisDataEvents`

List all data events — [Provider docs](https://developers.intercom.com)

```ts
intercom.lisDataEvents(input: {
  filter: { user_id: string } | { intercom_user_id: string } | { email: string };
  /** The value must be user */
  type: string;
  /** summary flag */
  summary?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<DataEventSummary>
```

<sub>`GET /events` · `lisDataEvents`</sub>

## `intercom.createDataEvent`

Submit a data event — [Provider docs](https://developers.intercom.com)

```ts
intercom.createDataEvent(input: {
  body?: CreateDataEventRequest;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<undefined>
```

<sub>`POST /events` · `createDataEvent`</sub>

## `intercom.dataEventSummaries`

Create event summaries — [Provider docs](https://developers.intercom.com)

```ts
intercom.dataEventSummaries(input: {
  /** Your identifier for the user. */
  user_id?: string;
  /** A list of event summaries for the user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`. */
  event_summaries?: { event_name?: string; count?: number; first?: number; last?: number };
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<undefined>
```

<sub>`POST /events/summaries` · `dataEventSummaries`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

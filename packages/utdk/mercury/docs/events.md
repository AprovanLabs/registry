# Events

2 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getEvents`

Get all events

```ts
mercury.getEvents(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** The ID of the event to start the page after (exclusive). When provided, results will begin with the event immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the event to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
  resourceType?: "transaction" | "checkingAccount" | "savingsAccount" | "treasuryAccount" | "investmentAccount" | "creditAccount";
  resourceId?: string;
}): Promise<ApiEventsPaginatedResponse>
```

<sub>`GET /events` · `getEvents`</sub>

## `mercury.getEvent`

Get event by ID

```ts
mercury.getEvent(input: {
  /** ID for the API event */
  eventId: string;
}): Promise<ApiEventResponse>
```

<sub>`GET /events/{eventId}` · `getEvent`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

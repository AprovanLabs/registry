# Seats

3 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.unassignSeatsUser`

Unassign seats from users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unassignSeatsUser(input: {
  /** The data for the unassign seats user request. */
  data?: UnassignSeatsUserRequestData;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/seats/users` · `UnassignSeatsUser`</sub>

## `datadog.getSeatsUsers`

Get users with seats — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSeatsUsers(input: {
  /** The product code for which to retrieve seat users. */
  product_code: string;
  /** Maximum number of results to return. */
  "page[limit]"?: number;
  /** Cursor for pagination. */
  "page[cursor]"?: string;
}): Promise<SeatUserDataArray>
```

<sub>`GET /api/v2/seats/users` · `GetSeatsUsers`</sub>

## `datadog.assignSeatsUser`

Assign seats to users — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.assignSeatsUser(input: {
  /** The data for the assign seats user request. */
  data?: AssignSeatsUserRequestData;
}): Promise<AssignSeatsUserResponse>
```

<sub>`POST /api/v2/seats/users` · `AssignSeatsUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

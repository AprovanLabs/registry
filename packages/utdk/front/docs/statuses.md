# Statuses

2 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listCompanyTicketStatuses`

List company ticket statuses — [Provider docs](https://community.front.com)

```ts
front.listCompanyTicketStatuses(): Promise<{ _links?: { self?: string }; _results?: (StatusResponse)[] }>
```

<sub>`GET /company/statuses` · `list-company-ticket-statuses`</sub>

## `front.getTicketStatusById`

Get ticket status — [Provider docs](https://community.front.com)

```ts
front.getTicketStatusById(input: {
  /** The ticket status ID */
  status_id: string;
}): Promise<StatusResponse>
```

<sub>`GET /company/statuses/{status_id}` · `get-ticket-status-by-id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

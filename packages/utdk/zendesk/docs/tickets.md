# Tickets

6 operations · `@utdk/zendesk`

```ts
import zendesk from "@utdk/zendesk";
```

## `zendesk.listTickets`

List tickets — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.listTickets(input: {
  /** Page number for pagination */
  page?: number;
  /** Number of tickets per page (max 100) */
  per_page?: number;
  /** Field to sort results by */
  sort_by?: "created_at" | "updated_at" | "priority" | "status" | "ticket_type";
  /** Sort direction */
  sort_order?: "asc" | "desc";
}): Promise<TicketList>
```

<sub>`GET /tickets` · `listTickets`</sub>

## `zendesk.createTicket`

Create a ticket — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.createTicket(input: {
  ticket: { subject?: string; comment?: { body?: string; html_body?: string }; requester_id?: number; assignee_id?: number; group_id?: number; organization_id?: number; priority?: "urgent" | "high" | "normal" | "low"; status?: "new" | "open" | "pending" | "hold" | "solved"; type?: "problem" | "incident" | "question" | "task"; tags?: (string)[] };
}): Promise<TicketResponse>
```

<sub>`POST /tickets` · `createTicket`</sub>

## `zendesk.deleteTicket`

Delete a ticket — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.deleteTicket(input: {
  /** The ticket ID */
  ticketId: number;
}): Promise<undefined>
```

<sub>`DELETE /tickets/{ticketId}` · `deleteTicket`</sub>

## `zendesk.getTicket`

Show a ticket — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.getTicket(input: {
  /** The ticket ID */
  ticketId: number;
}): Promise<TicketResponse>
```

<sub>`GET /tickets/{ticketId}` · `getTicket`</sub>

## `zendesk.updateTicket`

Update a ticket — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.updateTicket(input: {
  ticket: { subject?: string; status?: "new" | "open" | "pending" | "hold" | "solved" | "closed"; priority?: "urgent" | "high" | "normal" | "low"; assignee_id?: number; tags?: (string)[]; comment?: { body?: string; public?: boolean } };
  /** The ticket ID */
  ticketId: number;
}): Promise<TicketResponse>
```

<sub>`PUT /tickets/{ticketId}` · `updateTicket`</sub>

## `zendesk.listTicketComments`

List ticket comments — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.listTicketComments(input: {
  /** The ticket ID */
  ticketId: number;
  /** Page number */
  page?: number;
  /** Comments per page */
  per_page?: number;
}): Promise<CommentList>
```

<sub>`GET /tickets/{ticketId}/comments` · `listTicketComments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

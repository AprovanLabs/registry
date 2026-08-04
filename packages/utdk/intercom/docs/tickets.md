# Tickets

7 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.createTicket`

Create a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.createTicket(input: {
  /** Option to disable notifications when a Ticket is created. */
  skip_notifications?: boolean;
  /** The ID of the type of ticket you want to create */
  ticket_type_id: string;
  /** The list of contacts (users or leads) affected by this ticket. Currently only one is allowed */
  contacts: ({ id: string } | { external_id: string } | { email: string })[];
  /** The ID of the conversation you want to link to the ticket. Here are the valid ways of linking two tickets:  - conversation | back-office ticket  - customer tickets | non-shared back-office ticket  - conversation | tracker ticket  - customer ticket | tracker ticket */
  conversation_to_link_id?: string;
  /** The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom */
  company_id?: string;
  /** The time the ticket was created. If not provided, the current time will be used. */
  created_at?: number;
  ticket_attributes?: TicketRequestCustomAttributes;
  assignment?: { admin_assignee_id?: string; team_assignee_id?: string };
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Ticket>
```

<sub>`POST /tickets` · `createTicket`</sub>

## `intercom.deleteTicket`

Delete a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteTicket(input: {
  /** The unique identifier for the ticket which is given by Intercom. {% admonition type="info" name="Not the Inbox ticket ID" %} This is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API. {% /admonition %}  */
  ticket_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketDeleted>
```

<sub>`DELETE /tickets/{ticket_id}` · `deleteTicket`</sub>

## `intercom.getTicket`

Retrieve a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.getTicket(input: {
  /** The unique identifier for the ticket which is given by Intercom. {% admonition type="info" name="Not the Inbox ticket ID" %} This is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API. {% /admonition %}  */
  ticket_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Ticket>
```

<sub>`GET /tickets/{ticket_id}` · `getTicket`</sub>

## `intercom.updateTicket`

Update a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateTicket(input: {
  /** Option to disable notifications when a Ticket is updated. */
  skip_notifications?: boolean;
  /** The attributes set on the ticket. */
  ticket_attributes?: { [key: string]: unknown };
  /** The ID of the ticket state associated with the ticket type. */
  ticket_state_id?: string;
  /** The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom. Set to nil to remove company. */
  company_id?: string;
  /** Specify if a ticket is open. Set to false to close a ticket. Closing a ticket will also unsnooze it. */
  open?: boolean;
  /** Specify whether the ticket is visible to users. */
  is_shared?: boolean;
  /** The time you want the ticket to reopen. */
  snoozed_until?: number;
  /** The ID of the admin performing ticket update. Needed for workflows execution and attributing actions to specific admins. */
  admin_id?: number;
  /** The ID of the admin or team to which the ticket is assigned. Set this 0 to unassign it. */
  assignee_id?: string;
  /** The unique identifier for the ticket which is given by Intercom. {% admonition type="info" name="Not the Inbox ticket ID" %} This is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API. {% /admonition %}  */
  ticket_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Ticket>
```

<sub>`PUT /tickets/{ticket_id}` · `updateTicket`</sub>

## `intercom.replyTicket`

Reply to a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.replyTicket(input: {
  body?: ContactReplyTicketRequest | AdminReplyTicketRequest;
  /** The id of the ticket to target. {% admonition type="info" name="Not the Inbox ticket ID" %} This is the internal `id` field from the API response, not the `ticket_id` displayed in the Intercom Inbox (e.g., #12345). Use the `id` value from the ticket object returned by the API. {% /admonition %}  */
  ticket_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketReply>
```

<sub>`POST /tickets/{ticket_id}/reply` · `replyTicket`</sub>

## `intercom.enqueueCreateTicket`

Enqueue create ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.enqueueCreateTicket(input: {
  /** Option to disable notifications when a Ticket is created. */
  skip_notifications?: boolean;
  /** The ID of the type of ticket you want to create */
  ticket_type_id: string;
  /** The list of contacts (users or leads) affected by this ticket. Currently only one is allowed */
  contacts: ({ id: string } | { external_id: string } | { email: string })[];
  /** The ID of the conversation you want to link to the ticket. Here are the valid ways of linking two tickets:  - conversation | back-office ticket  - customer tickets | non-shared back-office ticket  - conversation | tracker ticket  - customer ticket | tracker ticket */
  conversation_to_link_id?: string;
  /** The ID of the company that the ticket is associated with. The unique identifier for the company which is given by Intercom */
  company_id?: string;
  /** The time the ticket was created. If not provided, the current time will be used. */
  created_at?: number;
  ticket_attributes?: TicketRequestCustomAttributes;
  assignment?: { admin_assignee_id?: string; team_assignee_id?: string };
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Jobs>
```

<sub>`POST /tickets/enqueue` · `enqueueCreateTicket`</sub>

## `intercom.searchTickets`

Search tickets — [Provider docs](https://developers.intercom.com)

```ts
intercom.searchTickets(input: {
  query: SingleFilterSearchRequest | MultipleFilterSearchRequest;
  pagination?: StartingAfterPaging;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketList>
```

<sub>`POST /tickets/search` · `searchTickets`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

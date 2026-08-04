# Ticket Types

4 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listTicketTypes`

List all ticket types — [Provider docs](https://developers.intercom.com)

```ts
intercom.listTicketTypes(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketTypeList>
```

<sub>`GET /ticket_types` · `listTicketTypes`</sub>

## `intercom.createTicketType`

Create a ticket type — [Provider docs](https://developers.intercom.com)

```ts
intercom.createTicketType(input: {
  /** The name of the ticket type. */
  name: string;
  /** The description of the ticket type. */
  description?: string;
  /** Category of the Ticket Type. */
  category?: "Customer" | "Back-office" | "Tracker";
  /** The icon of the ticket type. */
  icon?: string;
  /** Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute. */
  is_internal?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketType>
```

<sub>`POST /ticket_types` · `createTicketType`</sub>

## `intercom.getTicketType`

Retrieve a ticket type — [Provider docs](https://developers.intercom.com)

```ts
intercom.getTicketType(input: {
  /** The unique identifier for the ticket type which is given by Intercom. */
  ticket_type_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketType>
```

<sub>`GET /ticket_types/{ticket_type_id}` · `getTicketType`</sub>

## `intercom.updateTicketType`

Update a ticket type — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateTicketType(input: {
  /** The name of the ticket type. */
  name?: string;
  /** The description of the ticket type. */
  description?: string;
  /** Category of the Ticket Type. */
  category?: "Customer" | "Back-office" | "Tracker";
  /** The icon of the ticket type. */
  icon?: string;
  /** The archived status of the ticket type. */
  archived?: boolean;
  /** Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute. */
  is_internal?: boolean;
  /** The unique identifier for the ticket type which is given by Intercom. */
  ticket_type_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketType>
```

<sub>`PUT /ticket_types/{ticket_type_id}` · `updateTicketType`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Ticket Type Attributes

2 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.createTicketTypeAttribute`

Create a new attribute for a ticket type — [Provider docs](https://developers.intercom.com)

```ts
intercom.createTicketTypeAttribute(input: {
  /** The name of the ticket type attribute */
  name: string;
  /** The description of the attribute presented to the teammate or contact */
  description: string;
  /** The data type of the attribute */
  data_type: "string" | "list" | "integer" | "decimal" | "boolean" | "datetime" | "files";
  /** Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. */
  required_to_create?: boolean;
  /** Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. */
  required_to_create_for_contacts?: boolean;
  /** Whether the attribute is visible to teammates when creating a ticket in Inbox. */
  visible_on_create?: boolean;
  /** Whether the attribute is visible to contacts when creating a ticket in Messenger. */
  visible_to_contacts?: boolean;
  /** Whether the attribute allows multiple lines of text (only applicable to string attributes) */
  multiline?: boolean;
  /** A comma delimited list of items for the attribute value (only applicable to list attributes) */
  list_items?: string;
  /** Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) */
  allow_multiple_values?: boolean;
  /** The unique identifier for the ticket type which is given by Intercom. */
  ticket_type_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketTypeAttribute>
```

<sub>`POST /ticket_types/{ticket_type_id}/attributes` · `createTicketTypeAttribute`</sub>

## `intercom.updateTicketTypeAttribute`

Update an existing attribute for a ticket type — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateTicketTypeAttribute(input: {
  /** The name of the ticket type attribute */
  name?: string;
  /** The description of the attribute presented to the teammate or contact */
  description?: string;
  /** Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox. */
  required_to_create?: boolean;
  /** Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger. */
  required_to_create_for_contacts?: boolean;
  /** Whether the attribute is visible to teammates when creating a ticket in Inbox. */
  visible_on_create?: boolean;
  /** Whether the attribute is visible to contacts when creating a ticket in Messenger. */
  visible_to_contacts?: boolean;
  /** Whether the attribute allows multiple lines of text (only applicable to string attributes) */
  multiline?: boolean;
  /** A comma delimited list of items for the attribute value (only applicable to list attributes) */
  list_items?: string;
  /** Whether the attribute allows multiple files to be attached to it (only applicable to file attributes) */
  allow_multiple_values?: boolean;
  /** Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets) */
  archived?: boolean;
  /** The unique identifier for the ticket type which is given by Intercom. */
  ticket_type_id: string;
  /** The unique identifier for the ticket type attribute which is given by Intercom. */
  attribute_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<TicketTypeAttribute>
```

<sub>`PUT /ticket_types/{ticket_type_id}/attributes/{attribute_id}` · `updateTicketTypeAttribute`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

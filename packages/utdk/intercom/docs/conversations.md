# Conversations

13 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listConversations`

List all conversations — [Provider docs](https://developers.intercom.com)

```ts
intercom.listConversations(input: {
  /** How many results per page */
  per_page?: number;
  /** String used to get the next page of conversations. */
  starting_after?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ConversationList>
```

<sub>`GET /conversations` · `listConversations`</sub>

## `intercom.createConversation`

Creates a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.createConversation(input: {
  from: { type: "lead" | "user" | "contact"; id: string };
  /** The content of the message. HTML is not supported. */
  body: string;
  /** The title of the email. Only applicable if the message type is email. */
  subject?: string;
  /** A list of image URLs that will be added as attachments. You can include up to 10 URLs. */
  attachment_urls?: (string)[];
  /** The time the conversation was created as a UTC Unix timestamp. If not provided, the current time will be used. This field is only recommneded for migrating past conversations from another source into Intercom. */
  created_at?: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Message>
```

<sub>`POST /conversations` · `createConversation`</sub>

## `intercom.deleteConversation`

Delete a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.deleteConversation(input: {
  /** id */
  conversation_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ConversationDeleted>
```

<sub>`DELETE /conversations/{conversation_id}` · `deleteConversation`</sub>

## `intercom.retrieveConversation`

Retrieve a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.retrieveConversation(input: {
  /** The id of the conversation to target */
  conversation_id: number;
  /** Set to plaintext to retrieve conversation messages in plain text. */
  display_as?: string;
  /** If set to true, conversation parts will be translated to the detected language of the conversation. */
  include_translations?: boolean;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`GET /conversations/{conversation_id}` · `retrieveConversation`</sub>

## `intercom.updateConversation`

Update a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateConversation(input: {
  /** Mark a conversation as read within Intercom. */
  read?: boolean;
  /** The title given to the conversation */
  title?: string;
  custom_attributes?: CustomAttributes;
  /** The ID of the company that the conversation is associated with. The unique identifier for the company which is given by Intercom. Set to nil to remove company. */
  company_id?: string;
  /** The id of the conversation to target */
  conversation_id: number;
  /** Set to plaintext to retrieve conversation messages in plain text. */
  display_as?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`PUT /conversations/{conversation_id}` · `updateConversation`</sub>

## `intercom.convertConversationToTicket`

Convert a conversation to a ticket — [Provider docs](https://developers.intercom.com)

```ts
intercom.convertConversationToTicket(input: {
  /** The ID of the type of ticket you want to convert the conversation to */
  ticket_type_id: string;
  attributes?: TicketRequestCustomAttributes;
  /** The id of the conversation to target */
  conversation_id: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Ticket>
```

<sub>`POST /conversations/{conversation_id}/convert` · `convertConversationToTicket`</sub>

## `intercom.attachContactToConversation`

Attach a contact to a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.attachContactToConversation(input: {
  /** The `id` of the admin who is adding the new participant. */
  admin_id?: string;
  customer?: { intercom_user_id: string; customer?: CustomerRequest } | { user_id: string; customer?: CustomerRequest } | { email: string; customer?: CustomerRequest };
  /** The identifier for the conversation as given by Intercom. */
  conversation_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`POST /conversations/{conversation_id}/customers` · `attachContactToConversation`</sub>

## `intercom.detachContactFromConversation`

Detach a contact from a group conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.detachContactFromConversation(input: {
  /** The `id` of the admin who is performing the action. */
  admin_id: string;
  /** The identifier for the conversation as given by Intercom. */
  conversation_id: string;
  /** The identifier for the contact as given by Intercom. */
  contact_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`DELETE /conversations/{conversation_id}/customers/{contact_id}` · `detachContactFromConversation`</sub>

## `intercom.manageConversation`

Manage a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.manageConversation(input: {
  body?: CloseConversationRequest | SnoozeConversationRequest | OpenConversationRequest | AssignConversationRequest;
  /** The identifier for the conversation as given by Intercom. */
  conversation_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`POST /conversations/{conversation_id}/parts` · `manageConversation`</sub>

## `intercom.replyConversation`

Reply to a conversation — [Provider docs](https://developers.intercom.com)

```ts
intercom.replyConversation(input: {
  body?: ReplyConversationRequest;
  /** The Intercom provisioned identifier for the conversation or the string "last" to reply to the last part of the conversation */
  conversation_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`POST /conversations/{conversation_id}/reply` · `replyConversation`</sub>

## `intercom.listHandlingEvents`

List handling events — [Provider docs](https://developers.intercom.com)

```ts
intercom.listHandlingEvents(input: {
  /** The identifier for the conversation as given by Intercom. */
  id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<HandlingEventList>
```

<sub>`GET /conversations/{id}/handling_events` · `listHandlingEvents`</sub>

## `intercom.redactConversation`

Redact a conversation part — [Provider docs](https://developers.intercom.com)

```ts
intercom.redactConversation(input: {
  body?: RedactConversationRequest;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Conversation>
```

<sub>`POST /conversations/redact` · `redactConversation`</sub>

## `intercom.searchConversations`

Search conversations — [Provider docs](https://developers.intercom.com)

```ts
intercom.searchConversations(input: {
  query: SingleFilterSearchRequest | MultipleFilterSearchRequest;
  pagination?: StartingAfterPaging;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<ConversationList>
```

<sub>`POST /conversations/search` · `searchConversations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

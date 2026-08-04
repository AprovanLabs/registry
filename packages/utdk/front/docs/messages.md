# Messages

7 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.receiveCustomMessages`

Receive custom messages — [Provider docs](https://community.front.com)

```ts
front.receiveCustomMessages(input: {
  /** Data of the sender */
  sender: { contact_id?: string; name?: string; handle: string };
  /** Subject of the message */
  subject?: string;
  /** Body of the message */
  body: string;
  /** Format of the message body. Can be `markdown` (default) or `html`. */
  body_format?: "html" | "markdown";
  metadata?: { thread_ref?: string; headers?: { [key: string]: unknown } };
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
  /** The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
}): Promise<{ status?: string; message_uid?: string }>
```

<sub>`POST /channels/{channel_id}/incoming_messages` · `receive-custom-messages`</sub>

## `front.createMessage`

Create message — [Provider docs](https://community.front.com)

```ts
front.createMessage(input: {
  /** List of the recipient handles who will receive this message. One of `to`, `cc`, or `bcc` is required. */
  to: (string)[];
  /** List of the recipient handles who will receive a copy of this message. One of `to`, `cc`, or `bcc` is required. */
  cc?: (string)[];
  /** List of the recipient handles who will receive a blind copy of this message. One of `to`, `cc`, or `bcc` is required. */
  bcc?: (string)[];
  /** Name used for the sender info of the message */
  sender_name?: string;
  /** Subject of the message for email message */
  subject?: string;
  /** ID of the teammate on behalf of whom the answer is sent */
  author_id?: string;
  /** Body of the message */
  body: string;
  /** Text version of the body for email messages */
  text?: string;
  options?: { tag_ids?: (string)[]; archive?: boolean };
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB. */
  attachments?: (string)[];
  /** ID of the signature to attach to this draft. Only supported for email channels; using this on other channel types returns a 403 forbidden error. If null, no signature is attached. */
  signature_id?: string;
  /** Whether or not Front should try to resolve a signature for the message. Only applies to email channels and is ignored if signature_id is included or if author_id is omitted. Default false. */
  should_add_default_signature?: boolean;
  /** The sending channel ID. Alternatively, you can supply the sending channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
}): Promise<{ status?: string; message_uid?: string }>
```

<sub>`POST /channels/{channel_id}/messages` · `create-message`</sub>

## `front.createMessageReply`

Create message reply — [Provider docs](https://community.front.com)

```ts
front.createMessageReply(input: {
  /** List of the recipient handles who will receive this message */
  to?: (string)[];
  /** List of the recipient handles who will receive a copy of this message */
  cc?: (string)[];
  /** List of the recipient handles who will receive a copy of this message */
  bcc?: (string)[];
  /** Name used for the sender info of the message */
  sender_name?: string;
  /** Subject of the message for email message */
  subject?: string;
  /** ID of the teammate on behalf of whom the answer is sent */
  author_id?: string;
  /** Channel ID the message is sent from */
  channel_id?: string;
  /** Body of the message */
  body: string;
  /** Text version of the body for email messages */
  text?: string;
  /** Body for the quote that the message is referencing. Only available on email channels. */
  quote_body?: string;
  options?: { tag_ids?: (string)[]; archive?: boolean };
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
  /** ID of the signature to attach to this draft. Only supported for email channels; using this on other channel types returns a 403 forbidden error. If null, no signature is attached. */
  signature_id?: string;
  /** Whether or not Front should try to resolve a signature for the message. Only applies to email channels and is ignored if signature_id is included or if author_id is omitted. Default false; */
  should_add_default_signature?: boolean;
  /** The conversation ID */
  conversation_id: string;
}): Promise<{ status?: string; message_uid?: string }>
```

<sub>`POST /conversations/{conversation_id}/messages` · `create-message-reply`</sub>

## `front.importInboxMessage`

Import message — [Provider docs](https://community.front.com)

```ts
front.importInboxMessage(input: {
  /** Data of the sender */
  sender: { author_id?: string; name?: string; handle: string };
  /** List of the recipient handles who will receive this message */
  to: (string)[];
  /** List of the recipient handles who will receive a copy of this message */
  cc?: (string)[];
  /** List of the recipient handles who will receive a blind copy of this message */
  bcc?: (string)[];
  /** Subject of the message */
  subject?: string;
  /** Body of the message */
  body: string;
  /** Format of the message body. Can be `markdown` (default) or `html`, and can only be specified for `email` type. */
  body_format?: "html" | "markdown";
  /** External identifier of the message. Front won't import two messages with the same external ID. */
  external_id: string;
  /** Date at which the message as been sent or received. */
  created_at: number;
  /** Type of the message to import. Default is `email`. */
  type?: "email" | "sms" | "intercom" | "custom";
  /** ID of the teammate who will be assigned to the conversation. */
  assignee_id?: string;
  /** List of tag names to add to the conversation */
  tags?: (string)[];
  /** If supplied, Front will thread this message into conversation with the given ID. Note that including this parameter nullifies the `thread_ref` parameter _completely_. */
  conversation_id?: string;
  metadata: { thread_ref?: string; is_inbound: boolean; is_archived?: boolean; should_skip_rules?: boolean };
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB. */
  attachments?: (string)[];
  /** The Inbox ID */
  inbox_id: string;
}): Promise<{ status?: string; message_uid?: string }>
```

<sub>`POST /inboxes/{inbox_id}/imported_messages` · `import-inbox-message`</sub>

## `front.getMessage`

Get message — [Provider docs](https://community.front.com)

```ts
front.getMessage(input: {
  /** The message ID */
  message_id: string;
}): Promise<MessageResponse>
```

<sub>`GET /messages/{message_id}` · `get-message`</sub>

## `front.getMessageSeenStatus`

Get message seen status — [Provider docs](https://community.front.com)

```ts
front.getMessageSeenStatus(input: {
  /** The message ID */
  message_id: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (SeenReceiptResponse)[] }>
```

<sub>`GET /messages/{message_id}/seen` · `get-message-seen-status`</sub>

## `front.markMessageSeen`

Mark message seen — [Provider docs](https://community.front.com)

```ts
front.markMessageSeen(input: {
  body?: { [key: string]: unknown };
  /** The message ID */
  message_id: string;
}): Promise<undefined>
```

<sub>`POST /messages/{message_id}/seen` · `mark-message-seen`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

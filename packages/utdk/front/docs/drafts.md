# Drafts

5 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.createDraft`

Create draft — [Provider docs](https://community.front.com)

```ts
front.createDraft(input: {
  /** ID of the teammate on behalf of whom the draft will be created. Alternatively, you can supply the author ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). If omitted, will post as the API Token or Application making the request. */
  author_id?: string;
  /** List of recipient handles who will receive the message once the draft is sent */
  to?: (string)[];
  /** List of recipient handles who will receive a copy of the message once the draft is sent */
  cc?: (string)[];
  /** List of the recipient handles who will receive a blind copy of the message once the draft is sent */
  bcc?: (string)[];
  /** Subject of the draft. */
  subject?: string;
  /** Body of the draft */
  body: string;
  /** Body for the quote that the message is referencing. Only available on email channels. */
  quote_body?: string;
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB. */
  attachments?: (string)[];
  /** Mode of the draft to create. Can be 'private' (draft is visible to the author only) or 'shared' (draft is visible to all teammates with access to the conversation). */
  mode?: "private" | "shared";
  /** ID of the signature to attach to this draft. If null, no signature is attached. */
  signature_id?: string;
  /** Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false; */
  should_add_default_signature?: boolean;
  /** The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
}): Promise<MessageResponse>
```

<sub>`POST /channels/{channel_id}/drafts` · `create-draft`</sub>

## `front.listConversationDrafts`

List conversation drafts — [Provider docs](https://community.front.com)

```ts
front.listConversationDrafts(input: {
  /** The conversation ID */
  conversation_id: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageResponse)[] }>
```

<sub>`GET /conversations/{conversation_id}/drafts` · `list-conversation-drafts`</sub>

## `front.createDraftReply`

Create draft reply — [Provider docs](https://community.front.com)

```ts
front.createDraftReply(input: {
  /** ID of the teammate on behalf of whom the draft will be created. Alternatively, you can supply the author ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). If omitted, will post as the API Token or Application making the request. */
  author_id?: string;
  /** List of recipient handles who will receive the message once the draft is sent */
  to?: (string)[];
  /** List of recipient handles who will receive a copy of the message once the draft is sent */
  cc?: (string)[];
  /** List of the recipient handles who will receive a blind copy of the message once the draft is sent */
  bcc?: (string)[];
  /** Subject of the draft. */
  subject?: string;
  /** Body of the draft */
  body: string;
  /** Body for the quote that the message is referencing. Only available on email channels. */
  quote_body?: string;
  /** Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB. */
  attachments?: (string)[];
  /** Mode of the draft to create. Can be 'private' (draft is visible to the author only) or 'shared' (draft is visible to all teammates with access to the conversation). */
  mode?: "private" | "shared";
  /** ID of the signature to attach to this draft. If null, no signature is attached. */
  signature_id?: string;
  /** Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false; */
  should_add_default_signature?: boolean;
  /** ID of the channel from which the draft will be sent. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  channel_id: string;
  /** The conversation ID */
  conversation_id: string;
}): Promise<MessageResponse>
```

<sub>`POST /conversations/{conversation_id}/drafts` · `create-draft-reply`</sub>

## `front.deleteDraft`

Delete draft — [Provider docs](https://community.front.com)

```ts
front.deleteDraft(input: {
  /** Version of the draft */
  version: string;
  /** The draft ID */
  draft_id: string;
}): Promise<undefined>
```

<sub>`DELETE /drafts/{draft_id}` · `delete-draft`</sub>

## `front.editDraft`

Edit draft — [Provider docs](https://community.front.com)

```ts
front.editDraft(): Promise<{ _links?: { self?: string; related?: { conversation?: string; message_replied_to?: string; message_seen?: string } }; id?: string; message_uid?: string; type?: "call" | "custom" | "email" | "facebook" | "front_chat" | "googleplay" | "intercom" | "internal" | "phone-call" | "sms" | "tweet" | "tweet_dm" | "whatsapp" | "yalo_wha"; is_inbound?: boolean; draft_mode?: "shared" | "private" | null; erro...>
```

<sub>`PATCH /drafts/{message_id}/` · `edit-draft`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

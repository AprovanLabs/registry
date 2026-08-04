# Conversations

18 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.conversationsArchive`

Archives a conversation. — [API reference](https://api.slack.com/methods/conversations.archive)

```ts
slack.conversationsArchive(input: {
  /** ID of conversation to archive */
  channel?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /conversations.archive` · `conversations_archive`</sub>

## `slack.conversationsClose`

Closes a direct message or multi-person direct message. — [API reference](https://api.slack.com/methods/conversations.close)

```ts
slack.conversationsClose(input: {
  /** Conversation to close. */
  channel?: string;
}, options?: { headers?: { token?: string } }): Promise<{ already_closed?: boolean; no_op?: boolean; ok: DefsOkTrue }>
```

<sub>`POST /conversations.close` · `conversations_close`</sub>

## `slack.conversationsCreate`

Initiates a public or private channel-based conversation — [API reference](https://api.slack.com/methods/conversations.create)

```ts
slack.conversationsCreate(input: {
  /** Create a private channel instead of a public one */
  is_private?: boolean;
  /** Name of the public or private channel to create */
  name?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel: ObjsConversation; ok: DefsOkTrue }>
```

<sub>`POST /conversations.create` · `conversations_create`</sub>

## `slack.conversationsHistory`

Fetches a conversation's history of messages and events. — [API reference](https://api.slack.com/methods/conversations.history)

```ts
slack.conversationsHistory(input: {
  /** Authentication token. Requires scope: `conversations:history` */
  token?: string;
  /** Conversation ID to fetch history for. */
  channel?: string;
  /** End of time range of messages to include in results. */
  latest?: number;
  /** Start of time range of messages to include in results. */
  oldest?: number;
  /** Include messages with latest or oldest timestamp in results only when either timestamp is specified. */
  inclusive?: boolean;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
}): Promise<{ channel_actions_count: number; channel_actions_ts: unknown; has_more: boolean; messages: (ObjsMessage)[]; ok: DefsOkTrue; pin_count: number }>
```

<sub>`GET /conversations.history` · `conversations_history`</sub>

## `slack.conversationsInfo`

Retrieve information about a conversation. — [API reference](https://api.slack.com/methods/conversations.info)

```ts
slack.conversationsInfo(input: {
  /** Authentication token. Requires scope: `conversations:read` */
  token?: string;
  /** Conversation ID to learn more about */
  channel?: string;
  /** Set this to `true` to receive the locale for this conversation. Defaults to `false` */
  include_locale?: boolean;
  /** Set to `true` to include the member count for the specified conversation. Defaults to `false` */
  include_num_members?: boolean;
}): Promise<{ channel: ObjsConversation; ok: DefsOkTrue }>
```

<sub>`GET /conversations.info` · `conversations_info`</sub>

## `slack.conversationsInvite`

Invites users to a channel. — [API reference](https://api.slack.com/methods/conversations.invite)

```ts
slack.conversationsInvite(input: {
  /** The ID of the public or private channel to invite user(s) to. */
  channel?: string;
  /** A comma separated list of user IDs. Up to 1000 users may be listed. */
  users?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel: ObjsConversation; ok: DefsOkTrue }>
```

<sub>`POST /conversations.invite` · `conversations_invite`</sub>

## `slack.conversationsJoin`

Joins an existing conversation. — [API reference](https://api.slack.com/methods/conversations.join)

```ts
slack.conversationsJoin(input: {
  /** ID of conversation to join */
  channel?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel: ObjsConversation; ok: DefsOkTrue; response_metadata?: { warnings?: (string)[] }; warning?: string }>
```

<sub>`POST /conversations.join` · `conversations_join`</sub>

## `slack.conversationsKick`

Removes a user from a conversation. — [API reference](https://api.slack.com/methods/conversations.kick)

```ts
slack.conversationsKick(input: {
  /** ID of conversation to remove user from. */
  channel?: string;
  /** User ID to be removed. */
  user?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /conversations.kick` · `conversations_kick`</sub>

## `slack.conversationsLeave`

Leaves a conversation. — [API reference](https://api.slack.com/methods/conversations.leave)

```ts
slack.conversationsLeave(input: {
  /** Conversation to leave */
  channel?: string;
}, options?: { headers?: { token?: string } }): Promise<{ not_in_channel?: true; ok: DefsOkTrue }>
```

<sub>`POST /conversations.leave` · `conversations_leave`</sub>

## `slack.conversationsList`

Lists all channels in a Slack team. — [API reference](https://api.slack.com/methods/conversations.list)

```ts
slack.conversationsList(input: {
  /** Authentication token. Requires scope: `conversations:read` */
  token?: string;
  /** Set to `true` to exclude archived channels from the list */
  exclude_archived?: boolean;
  /** Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` */
  types?: string;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
}): Promise<{ channels: (ObjsConversation)[]; ok: DefsOkTrue; response_metadata?: { next_cursor: string } }>
```

<sub>`GET /conversations.list` · `conversations_list`</sub>

## `slack.conversationsMark`

Sets the read cursor in a channel. — [API reference](https://api.slack.com/methods/conversations.mark)

```ts
slack.conversationsMark(input: {
  /** Channel or conversation to set the read cursor for. */
  channel?: string;
  /** Unique identifier of message you want marked as most recently seen in this conversation. */
  ts?: number;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /conversations.mark` · `conversations_mark`</sub>

## `slack.conversationsMembers`

Retrieve members of a conversation. — [API reference](https://api.slack.com/methods/conversations.members)

```ts
slack.conversationsMembers(input: {
  /** Authentication token. Requires scope: `conversations:read` */
  token?: string;
  /** ID of the conversation to retrieve members for */
  channel?: string;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
}): Promise<{ members: (DefsUserId)[]; ok: DefsOkTrue; response_metadata: { next_cursor: string } }>
```

<sub>`GET /conversations.members` · `conversations_members`</sub>

## `slack.conversationsOpen`

Opens or resumes a direct message or multi-person direct message. — [API reference](https://api.slack.com/methods/conversations.open)

```ts
slack.conversationsOpen(input: {
  /** Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead. */
  channel?: string;
  /** Boolean, indicates you want the full IM channel definition in the response. */
  return_im?: boolean;
  /** Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`. */
  users?: string;
}, options?: { headers?: { token?: string } }): Promise<{ already_open?: boolean; channel: unknown; no_op?: boolean; ok: DefsOkTrue }>
```

<sub>`POST /conversations.open` · `conversations_open`</sub>

## `slack.conversationsRename`

Renames a conversation. — [API reference](https://api.slack.com/methods/conversations.rename)

```ts
slack.conversationsRename(input: {
  /** ID of conversation to rename */
  channel?: string;
  /** New name for conversation. */
  name?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel: ObjsConversation; ok: DefsOkTrue }>
```

<sub>`POST /conversations.rename` · `conversations_rename`</sub>

## `slack.conversationsReplies`

Retrieve a thread of messages posted to a conversation — [API reference](https://api.slack.com/methods/conversations.replies)

```ts
slack.conversationsReplies(input: {
  /** Authentication token. Requires scope: `conversations:history` */
  token?: string;
  /** Conversation ID to fetch thread from. */
  channel?: string;
  /** Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message. */
  ts?: number;
  /** End of time range of messages to include in results. */
  latest?: number;
  /** Start of time range of messages to include in results. */
  oldest?: number;
  /** Include messages with latest or oldest timestamp in results only when either timestamp is specified. */
  inclusive?: boolean;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. */
  limit?: number;
  /** Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail. */
  cursor?: string;
}): Promise<{ has_more?: boolean; messages: (unknown)[]; ok: DefsOkTrue }>
```

<sub>`GET /conversations.replies` · `conversations_replies`</sub>

## `slack.conversationsSetPurpose`

Sets the purpose for a conversation. — [API reference](https://api.slack.com/methods/conversations.setPurpose)

```ts
slack.conversationsSetPurpose(input: {
  /** Conversation to set the purpose of */
  channel?: string;
  /** A new, specialer purpose */
  purpose?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel: ObjsConversation; ok: DefsOkTrue }>
```

<sub>`POST /conversations.setPurpose` · `conversations_setPurpose`</sub>

## `slack.conversationsSetTopic`

Sets the topic for a conversation. — [API reference](https://api.slack.com/methods/conversations.setTopic)

```ts
slack.conversationsSetTopic(input: {
  /** Conversation to set the topic of */
  channel?: string;
  /** The new topic string. Does not support formatting or linkification. */
  topic?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel: ObjsConversation; ok: DefsOkTrue }>
```

<sub>`POST /conversations.setTopic` · `conversations_setTopic`</sub>

## `slack.conversationsUnarchive`

Reverses conversation archival. — [API reference](https://api.slack.com/methods/conversations.unarchive)

```ts
slack.conversationsUnarchive(input: {
  /** ID of conversation to unarchive */
  channel?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /conversations.unarchive` · `conversations_unarchive`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

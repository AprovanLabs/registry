# Chat

9 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.chatDelete`

Deletes a message. — [API reference](https://api.slack.com/methods/chat.delete)

```ts
slack.chatDelete(input: {
  /** Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. */
  as_user?: boolean;
  /** Channel containing the message to be deleted. */
  channel?: string;
  /** Timestamp of the message to be deleted. */
  ts?: number;
}, options?: { headers?: { token?: string } }): Promise<{ channel: DefsChannel; ok: DefsOkTrue; ts: DefsTs }>
```

<sub>`POST /chat.delete` · `chat_delete`</sub>

## `slack.chatDeleteScheduledMessage`

Deletes a pending scheduled message from the queue. — [API reference](https://api.slack.com/methods/chat.deleteScheduledMessage)

```ts
slack.chatDeleteScheduledMessage(input: {
  /** Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. */
  as_user?: boolean;
  /** The channel the scheduled_message is posting to */
  channel: string;
  /** `scheduled_message_id` returned from call to chat.scheduleMessage */
  scheduled_message_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /chat.deleteScheduledMessage` · `chat_deleteScheduledMessage`</sub>

## `slack.chatGetPermalink`

Retrieve a permalink URL for a specific extant message — [API reference](https://api.slack.com/methods/chat.getPermalink)

```ts
slack.chatGetPermalink(input: {
  /** Authentication token. Requires scope: `none` */
  token: string;
  /** The ID of the conversation or channel containing the message */
  channel: string;
  /** A message's `ts` value, uniquely identifying it within a channel */
  message_ts: string;
}): Promise<{ channel: DefsChannel; ok: DefsOkTrue; permalink: string }>
```

<sub>`GET /chat.getPermalink` · `chat_getPermalink`</sub>

## `slack.chatMeMessage`

Share a me message into a channel. — [API reference](https://api.slack.com/methods/chat.meMessage)

```ts
slack.chatMeMessage(input: {
  /** Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name. */
  channel?: string;
  /** Text of the message to send. */
  text?: string;
}, options?: { headers?: { token?: string } }): Promise<{ channel?: DefsChannel; ok: DefsOkTrue; ts?: DefsTs }>
```

<sub>`POST /chat.meMessage` · `chat_meMessage`</sub>

## `slack.chatPostEphemeral`

Sends an ephemeral message to a user in a channel. — [API reference](https://api.slack.com/methods/chat.postEphemeral)

```ts
slack.chatPostEphemeral(input: {
  /** Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false. */
  as_user?: boolean;
  /** A JSON-based array of structured attachments, presented as a URL-encoded string. */
  attachments?: string;
  /** A JSON-based array of structured blocks, presented as a URL-encoded string. */
  blocks?: string;
  /** Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. */
  channel: string;
  /** Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. */
  icon_emoji?: string;
  /** URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
  icon_url?: string;
  /** Find and link channel names and usernames. */
  link_names?: boolean;
  /** Change how messages are treated. Defaults to `none`. See [below](#formatting). */
  parse?: string;
  /** How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. */
  text?: string;
  /** Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread. */
  thread_ts?: string;
  /** `id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument. */
  user: string;
  /** Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
  username?: string;
}, options: { headers: { token: string } }): Promise<{ message_ts: DefsTs; ok: DefsOkTrue }>
```

<sub>`POST /chat.postEphemeral` · `chat_postEphemeral`</sub>

## `slack.chatPostMessage`

Sends a message to a channel. — [API reference](https://api.slack.com/methods/chat.postMessage)

```ts
slack.chatPostMessage(input: {
  /** Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below. */
  as_user?: string;
  /** A JSON-based array of structured attachments, presented as a URL-encoded string. */
  attachments?: string;
  /** A JSON-based array of structured blocks, presented as a URL-encoded string. */
  blocks?: string;
  /** Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. */
  channel: string;
  /** Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. */
  icon_emoji?: string;
  /** URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
  icon_url?: string;
  /** Find and link channel names and usernames. */
  link_names?: boolean;
  /** Disable Slack markup parsing by setting to `false`. Enabled by default. */
  mrkdwn?: boolean;
  /** Change how messages are treated. Defaults to `none`. See [below](#formatting). */
  parse?: string;
  /** Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. */
  reply_broadcast?: boolean;
  /** How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. */
  text?: string;
  /** Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. */
  thread_ts?: string;
  /** Pass true to enable unfurling of primarily text-based content. */
  unfurl_links?: boolean;
  /** Pass false to disable unfurling of media content. */
  unfurl_media?: boolean;
  /** Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. */
  username?: string;
}, options: { headers: { token: string } }): Promise<{ channel: DefsChannel; message: ObjsMessage; ok: DefsOkTrue; ts: DefsTs }>
```

<sub>`POST /chat.postMessage` · `chat_postMessage`</sub>

## `slack.chatScheduleMessage`

Schedules a message to be sent to a channel. — [API reference](https://api.slack.com/methods/chat.scheduleMessage)

```ts
slack.chatScheduleMessage(input: {
  /** Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship). */
  as_user?: boolean;
  /** A JSON-based array of structured attachments, presented as a URL-encoded string. */
  attachments?: string;
  /** A JSON-based array of structured blocks, presented as a URL-encoded string. */
  blocks?: string;
  /** Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. */
  channel?: string;
  /** Find and link channel names and usernames. */
  link_names?: boolean;
  /** Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting). */
  parse?: string;
  /** Unix EPOCH timestamp of time in future to send the message. */
  post_at?: string;
  /** Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. */
  reply_broadcast?: boolean;
  /** How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. */
  text?: string;
  /** Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. */
  thread_ts?: number;
  /** Pass true to enable unfurling of primarily text-based content. */
  unfurl_links?: boolean;
  /** Pass false to disable unfurling of media content. */
  unfurl_media?: boolean;
}, options?: { headers?: { token?: string } }): Promise<{ channel: DefsChannel; message: { bot_id: DefsBotId; bot_profile?: ObjsBotProfile; team: DefsTeam; text: string; type: string; user: DefsUserId; username?: string }; ok: DefsOkTrue; post_at: number; scheduled_message_id: string }>
```

<sub>`POST /chat.scheduleMessage` · `chat_scheduleMessage`</sub>

## `slack.chatUnfurl`

Provide custom unfurl behavior for user-posted URLs — [API reference](https://api.slack.com/methods/chat.unfurl)

```ts
slack.chatUnfurl(input: {
  /** Channel ID of the message */
  channel: string;
  /** Timestamp of the message to add unfurl behavior to. */
  ts: string;
  /** URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments. */
  unfurls?: string;
  /** Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior */
  user_auth_message?: string;
  /** Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain */
  user_auth_required?: boolean;
  /** Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded. */
  user_auth_url?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /chat.unfurl` · `chat_unfurl`</sub>

## `slack.chatUpdate`

Updates a message. — [API reference](https://api.slack.com/methods/chat.update)

```ts
slack.chatUpdate(input: {
  /** Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users. */
  as_user?: string;
  /** A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field. */
  attachments?: string;
  /** A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field. */
  blocks?: string;
  /** Channel containing the message to be updated. */
  channel: string;
  /** Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`. */
  link_names?: string;
  /** Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`. */
  parse?: string;
  /** New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`. */
  text?: string;
  /** Timestamp of the message to be updated. */
  ts: string;
}, options: { headers: { token: string } }): Promise<{ channel: string; message: { attachments?: ({ [key: string]: unknown })[]; blocks?: { [key: string]: unknown }; text: string }; ok: DefsOkTrue; text: string; ts: string }>
```

<sub>`POST /chat.update` · `chat_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

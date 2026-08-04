# Chat.ScheduledMessages

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.chatScheduledMessagesList`

Returns a list of scheduled messages. — [API reference](https://api.slack.com/methods/chat.scheduledMessages.list)

```ts
slack.chatScheduledMessagesList(input: {
  /** The channel of the scheduled messages */
  channel?: string;
  /** A UNIX timestamp of the latest value in the time range */
  latest?: number;
  /** A UNIX timestamp of the oldest value in the time range */
  oldest?: number;
  /** Maximum number of original entries to return. */
  limit?: number;
  /** For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from. */
  cursor?: string;
}, options?: { headers?: { token?: string } }): Promise<{ ok: DefsOkTrue; response_metadata: { next_cursor: string }; scheduled_messages: ({ channel_id: DefsChannelId; date_created: number; id: string; post_at: number; text?: string })[] }>
```

<sub>`GET /chat.scheduledMessages.list` · `chat_scheduledMessages_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# DeleteMessage

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postDeletemessage`

Use this method to delete a message, including service messages, with the following limitations: \- A message can only be deleted if it was sent less than 48 hours ago. \- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago. \- Bots can delete outgoing messages in private chats, groups, and supergroups. \- Bots can delete incoming messages in private chats. \- Bots granted *can\_post\_messages* permissions can delete outgoing messages in channels. \- If the bot is an administrator of a group, it can delete any message there. \- If the bot has *can\_delete\_messages* permission in a supergroup or a channel, it can delete any message there. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#deletemessage)

```ts
telegram.postDeletemessage(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /deleteMessage` · `post_deletemessage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

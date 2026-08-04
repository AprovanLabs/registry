# UnpinChatMessage

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postUnpinchatmessage`

Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#unpinchatmessage)

```ts
telegram.postUnpinchatmessage(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /unpinChatMessage` · `post_unpinchatmessage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

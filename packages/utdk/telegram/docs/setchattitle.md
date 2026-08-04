# SetChatTitle

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postSetchattitle`

Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#setchattitle)

```ts
telegram.postSetchattitle(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /setChatTitle` · `post_setchattitle`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

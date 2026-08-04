# DeleteChatPhoto

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postDeletechatphoto`

Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#deletechatphoto)

```ts
telegram.postDeletechatphoto(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /deleteChatPhoto` · `post_deletechatphoto`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

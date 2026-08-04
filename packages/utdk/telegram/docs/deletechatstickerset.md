# DeleteChatStickerSet

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postDeletechatstickerset`

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#deletechatstickerset)

```ts
telegram.postDeletechatstickerset(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /deleteChatStickerSet` · `post_deletechatstickerset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

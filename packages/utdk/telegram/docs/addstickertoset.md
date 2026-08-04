# AddStickerToSet

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postAddstickertoset`

Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#addstickertoset)

```ts
telegram.postAddstickertoset(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /addStickerToSet` · `post_addstickertoset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# CreateNewStickerSet

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postCreatenewstickerset`

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#createnewstickerset)

```ts
telegram.postCreatenewstickerset(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /createNewStickerSet` · `post_createnewstickerset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

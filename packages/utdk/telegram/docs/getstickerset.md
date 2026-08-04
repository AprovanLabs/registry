# GetStickerSet

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetstickerset`

Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/#stickerset) object is returned. — [API reference](https://core.telegram.org/bots/api/#getstickerset)

```ts
telegram.postGetstickerset(): Promise<{ ok: boolean; result: { contains_masks: boolean; is_animated: boolean; name: string; stickers: ({ emoji?: string; file_id: string; file_size?: number; file_unique_id: string; height: number; is_animated: boolean; mask_position?: { point: "forehead" | "eyes" | "mouth" | "chin"; scale: number; x_shift: number; y_shift: number }; set_name?: string; thumb?: { file_id: string; file_size?: number; fil...>
```

<sub>`POST /getStickerSet` · `post_getstickerset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

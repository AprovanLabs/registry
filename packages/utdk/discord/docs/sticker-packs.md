# Sticker Packs

2 operations · `@utdk/discord`

```ts
import discord from "@utdk/discord";
```

## `discord.listStickerPacks`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.listStickerPacks(): Promise<StickerPackCollectionResponse>
```

<sub>`GET /sticker-packs` · `list_sticker_packs`</sub>

## `discord.getStickerPack`

[Provider docs](https://discord.com/developers/docs)

```ts
discord.getStickerPack(input: {
  pack_id: SnowflakeType;
}): Promise<StickerPackResponse>
```

<sub>`GET /sticker-packs/{pack_id}` · `get_sticker_pack`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# UploadStickerFile

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postUploadstickerfile`

Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success. — [API reference](https://core.telegram.org/bots/api/#uploadstickerfile)

```ts
telegram.postUploadstickerfile(): Promise<{ ok: boolean; result: { file_id: string; file_path?: string; file_size?: number; file_unique_id: string } }>
```

<sub>`POST /uploadStickerFile` · `post_uploadstickerfile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

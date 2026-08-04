# GetUserProfilePhotos

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetuserprofilephotos`

Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object. — [API reference](https://core.telegram.org/bots/api/#getuserprofilephotos)

```ts
telegram.postGetuserprofilephotos(): Promise<{ ok: boolean; result: { photos: (({ file_id: string; file_size?: number; file_unique_id: string; height: number; width: number })[])[]; total_count: number } }>
```

<sub>`POST /getUserProfilePhotos` · `post_getuserprofilephotos`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

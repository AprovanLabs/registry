# SendMediaGroup

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postSendmediagroup`

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/#message) that were sent is returned. — [API reference](https://core.telegram.org/bots/api/#sendmediagroup)

```ts
telegram.postSendmediagroup(): Promise<{ ok: boolean; result: ({ animation?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: string; height: number; mime_type?: string; thumb?: { file_id: string; file_size?: number; file_unique_id: string; height: number; width: number }; width: number }; audio?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: st...>
```

<sub>`POST /sendMediaGroup` · `post_sendmediagroup`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

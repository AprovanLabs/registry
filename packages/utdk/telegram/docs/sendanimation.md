# SendAnimation

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postSendanimation`

Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future. — [API reference](https://core.telegram.org/bots/api/#sendanimation)

```ts
telegram.postSendanimation(): Promise<{ ok: boolean; result: { animation?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: string; height: number; mime_type?: string; thumb?: { file_id: string; file_size?: number; file_unique_id: string; height: number; width: number }; width: number }; audio?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: str...>
```

<sub>`POST /sendAnimation` · `post_sendanimation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

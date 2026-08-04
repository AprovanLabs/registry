# SendPhoto

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postSendphoto`

Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. — [API reference](https://core.telegram.org/bots/api/#sendphoto)

```ts
telegram.postSendphoto(): Promise<{ ok: boolean; result: { animation?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: string; height: number; mime_type?: string; thumb?: { file_id: string; file_size?: number; file_unique_id: string; height: number; width: number }; width: number }; audio?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: str...>
```

<sub>`POST /sendPhoto` · `post_sendphoto`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

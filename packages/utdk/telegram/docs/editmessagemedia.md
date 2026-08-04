# EditMessageMedia

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postEditmessagemedia`

Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned. — [API reference](https://core.telegram.org/bots/api/#editmessagemedia)

```ts
telegram.postEditmessagemedia(): Promise<{ ok: boolean; result: { animation?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: string; height: number; mime_type?: string; thumb?: { file_id: string; file_size?: number; file_unique_id: string; height: number; width: number }; width: number }; audio?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: str...>
```

<sub>`POST /editMessageMedia` · `post_editmessagemedia`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

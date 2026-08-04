# GetFile

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetfile`

Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile) again. — [API reference](https://core.telegram.org/bots/api/#getfile)

```ts
telegram.postGetfile(): Promise<{ ok: boolean; result: { file_id: string; file_path?: string; file_size?: number; file_unique_id: string } }>
```

<sub>`POST /getFile` · `post_getfile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

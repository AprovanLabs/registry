# SetGameScore

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postSetgamescore`

Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. — [API reference](https://core.telegram.org/bots/api/#setgamescore)

```ts
telegram.postSetgamescore(): Promise<{ ok: boolean; result: { animation?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: string; height: number; mime_type?: string; thumb?: { file_id: string; file_size?: number; file_unique_id: string; height: number; width: number }; width: number }; audio?: { duration: number; file_id: string; file_name?: string; file_size?: number; file_unique_id: str...>
```

<sub>`POST /setGameScore` · `post_setgamescore`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

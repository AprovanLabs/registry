# GetGameHighScores

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetgamehighscores`

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/#gamehighscore) objects. This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change. — [API reference](https://core.telegram.org/bots/api/#getgamehighscores)

```ts
telegram.postGetgamehighscores(): Promise<{ ok: boolean; result: ({ position: number; score: number; user: { can_join_groups?: boolean; can_read_all_group_messages?: boolean; first_name: string; id: number; is_bot: boolean; language_code?: string; last_name?: string; supports_inline_queries?: boolean; username?: string } })[] }>
```

<sub>`POST /getGameHighScores` · `post_getgamehighscores`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

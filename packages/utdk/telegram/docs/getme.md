# GetMe

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetme`

A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object. — [API reference](https://core.telegram.org/bots/api/#getme)

```ts
telegram.postGetme(): Promise<{ ok: boolean; result: { can_join_groups?: boolean; can_read_all_group_messages?: boolean; first_name: string; id: number; is_bot: boolean; language_code?: string; last_name?: string; supports_inline_queries?: boolean; username?: string } }>
```

<sub>`POST /getMe` · `post_getme`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

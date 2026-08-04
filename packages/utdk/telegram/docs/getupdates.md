# GetUpdates

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetupdates`

Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api/#update) objects is returned. — [API reference](https://core.telegram.org/bots/api/#getupdates)

```ts
telegram.postGetupdates(): Promise<{ ok: boolean; result: ({ callback_query?: { chat_instance: string; data?: string; from: { can_join_groups?: boolean; can_read_all_group_messages?: boolean; first_name: string; id: number; is_bot: boolean; language_code?: string; last_name?: string; supports_inline_queries?: boolean; username?: string }; game_short_name?: string; id: string; inline_message_id?: string; message?: { animation?: { d...>
```

<sub>`POST /getUpdates` · `post_getupdates`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# GetMyCommands

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetmycommands`

Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success. — [API reference](https://core.telegram.org/bots/api/#getmycommands)

```ts
telegram.postGetmycommands(): Promise<{ ok: boolean; result: ({ command: string; description: string })[] }>
```

<sub>`POST /getMyCommands` · `post_getmycommands`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

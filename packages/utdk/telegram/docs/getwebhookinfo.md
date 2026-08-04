# GetWebhookInfo

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postGetwebhookinfo`

Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty. — [API reference](https://core.telegram.org/bots/api/#getwebhookinfo)

```ts
telegram.postGetwebhookinfo(): Promise<{ ok: boolean; result: { allowed_updates?: (string)[]; has_custom_certificate: boolean; ip_address?: string; last_error_date?: number; last_error_message?: string; max_connections?: number; pending_update_count: number; url: string } }>
```

<sub>`POST /getWebhookInfo` · `post_getwebhookinfo`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

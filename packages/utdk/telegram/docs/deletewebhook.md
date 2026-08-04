# DeleteWebhook

1 operation · `@utdk/telegram`

```ts
import telegram from "@utdk/telegram";
```

## `telegram.postDeletewebhook`

Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success. — [API reference](https://core.telegram.org/bots/api/#deletewebhook)

```ts
telegram.postDeletewebhook(): Promise<{ ok: boolean; result: boolean }>
```

<sub>`POST /deleteWebhook` · `post_deletewebhook`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

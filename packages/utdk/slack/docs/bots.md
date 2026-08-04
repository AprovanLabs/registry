# Bots

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.botsInfo`

Gets information about a bot user. — [API reference](https://api.slack.com/methods/bots.info)

```ts
slack.botsInfo(input: {
  /** Authentication token. Requires scope: `users:read` */
  token: string;
  /** Bot user to get info on */
  bot?: string;
}): Promise<{ bot: { app_id: DefsAppId; deleted: boolean; icons: { image_36: string; image_48: string; image_72: string }; id: DefsBotId; name: string; updated: number; user_id?: DefsUserId }; ok: DefsOkTrue }>
```

<sub>`GET /bots.info` · `bots_info`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

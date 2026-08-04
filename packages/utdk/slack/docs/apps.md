# Apps

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.appsUninstall`

Uninstalls your app from a workspace. — [API reference](https://api.slack.com/methods/apps.uninstall)

```ts
slack.appsUninstall(input: {
  /** Authentication token. Requires scope: `none` */
  token?: string;
  /** Issued when you created your application. */
  client_id?: string;
  /** Issued when you created your application. */
  client_secret?: string;
}): Promise<{ ok: DefsOkTrue }>
```

<sub>`GET /apps.uninstall` · `apps_uninstall`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

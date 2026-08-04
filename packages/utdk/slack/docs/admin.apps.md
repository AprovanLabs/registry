# Admin.Apps

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminAppsApprove`

Approve an app for installation on a workspace. — [API reference](https://api.slack.com/methods/admin.apps.approve)

```ts
slack.adminAppsApprove(input: {
  /** The id of the app to approve. */
  app_id?: string;
  /** The id of the request to approve. */
  request_id?: string;
  team_id?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.apps.approve` · `admin_apps_approve`</sub>

## `slack.adminAppsRestrict`

Restrict an app for installation on a workspace. — [API reference](https://api.slack.com/methods/admin.apps.restrict)

```ts
slack.adminAppsRestrict(input: {
  /** The id of the app to restrict. */
  app_id?: string;
  /** The id of the request to restrict. */
  request_id?: string;
  team_id?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.apps.restrict` · `admin_apps_restrict`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

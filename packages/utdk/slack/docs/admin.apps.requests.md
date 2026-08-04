# Admin.Apps.Requests

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminAppsRequestsList`

List app requests for a team/workspace. — [API reference](https://api.slack.com/methods/admin.apps.requests.list)

```ts
slack.adminAppsRequestsList(input: {
  /** Authentication token. Requires scope: `admin.apps:read` */
  token: string;
  /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
  limit?: number;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
  cursor?: string;
  team_id?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.apps.requests.list` · `admin_apps_requests_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

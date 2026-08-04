# Admin.Teams.Admins

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminTeamsAdminsList`

List all of the admins on a given workspace. — [API reference](https://api.slack.com/methods/admin.teams.admins.list)

```ts
slack.adminTeamsAdminsList(input: {
  /** Authentication token. Requires scope: `admin.teams:read` */
  token: string;
  /** The maximum number of items to return. */
  limit?: number;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
  cursor?: string;
  team_id: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.teams.admins.list` · `admin_teams_admins_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

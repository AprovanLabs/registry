# Admin.Teams

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminTeamsCreate`

Create an Enterprise team. — [API reference](https://api.slack.com/methods/admin.teams.create)

```ts
slack.adminTeamsCreate(input: {
  /** Description for the team. */
  team_description?: string;
  /** Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`. */
  team_discoverability?: string;
  /** Team domain (for example, slacksoftballteam). */
  team_domain: string;
  /** Team name (for example, Slack Softball Team). */
  team_name: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.teams.create` · `admin_teams_create`</sub>

## `slack.adminTeamsList`

List all teams on an Enterprise organization — [API reference](https://api.slack.com/methods/admin.teams.list)

```ts
slack.adminTeamsList(input: {
  /** The maximum number of items to return. Must be between 1 - 100 both inclusive. */
  limit?: number;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
  cursor?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.teams.list` · `admin_teams_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

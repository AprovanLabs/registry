# Teams

4 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listTeams`

List teams — [Provider docs](https://community.front.com)

```ts
front.listTeams(): Promise<{ _links?: { self?: string }; _results?: (TeamPreviewResponse)[] }>
```

<sub>`GET /teams` · `list-teams`</sub>

## `front.getTeam`

Get team — [Provider docs](https://community.front.com)

```ts
front.getTeam(input: {
  /** The Team ID */
  team_id: string;
}): Promise<TeamResponse>
```

<sub>`GET /teams/{team_id}` · `get-team`</sub>

## `front.removeTeammatesFromTeam`

Remove teammates from team — [Provider docs](https://community.front.com)

```ts
front.removeTeammatesFromTeam(input: {
  teammate_ids: (ResourceId)[];
  /** The Team ID */
  team_id: string;
}): Promise<undefined>
```

<sub>`DELETE /teams/{team_id}/teammates` · `remove-teammates-from-team`</sub>

## `front.addTeammatesToTeam`

Add teammates to team — [Provider docs](https://community.front.com)

```ts
front.addTeammatesToTeam(input: {
  teammate_ids: (ResourceId)[];
  /** The Team ID */
  team_id: string;
}): Promise<undefined>
```

<sub>`POST /teams/{team_id}/teammates` · `add-teammates-to-team`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

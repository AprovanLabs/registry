# Dnd

5 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.dndEndDnd`

Ends the current user's Do Not Disturb session immediately. — [API reference](https://api.slack.com/methods/dnd.endDnd)

```ts
slack.dndEndDnd(options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /dnd.endDnd` · `dnd_endDnd`</sub>

## `slack.dndEndSnooze`

Ends the current user's snooze mode immediately. — [API reference](https://api.slack.com/methods/dnd.endSnooze)

```ts
slack.dndEndSnooze(options: { headers: { token: string } }): Promise<{ dnd_enabled: boolean; next_dnd_end_ts: number; next_dnd_start_ts: number; ok: DefsOkTrue; snooze_enabled: boolean }>
```

<sub>`POST /dnd.endSnooze` · `dnd_endSnooze`</sub>

## `slack.dndInfo`

Retrieves a user's current Do Not Disturb status. — [API reference](https://api.slack.com/methods/dnd.info)

```ts
slack.dndInfo(input: {
  /** Authentication token. Requires scope: `dnd:read` */
  token?: string;
  /** User to fetch status for (defaults to current user) */
  user?: string;
}): Promise<{ dnd_enabled: boolean; next_dnd_end_ts: number; next_dnd_start_ts: number; ok: DefsOkTrue; snooze_enabled?: boolean; snooze_endtime?: number; snooze_remaining?: number }>
```

<sub>`GET /dnd.info` · `dnd_info`</sub>

## `slack.dndSetSnooze`

Turns on Do Not Disturb mode for the current user, or changes its duration. — [API reference](https://api.slack.com/methods/dnd.setSnooze)

```ts
slack.dndSetSnooze(input: {
  /** Number of minutes, from now, to snooze until. */
  num_minutes: string;
  /** Authentication token. Requires scope: `dnd:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; snooze_enabled: boolean; snooze_endtime: number; snooze_remaining: number }>
```

<sub>`POST /dnd.setSnooze` · `dnd_setSnooze`</sub>

## `slack.dndTeamInfo`

Retrieves the Do Not Disturb status for up to 50 users on a team. — [API reference](https://api.slack.com/methods/dnd.teamInfo)

```ts
slack.dndTeamInfo(input: {
  /** Authentication token. Requires scope: `dnd:read` */
  token?: string;
  /** Comma-separated list of users to fetch Do Not Disturb status for */
  users?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /dnd.teamInfo` · `dnd_teamInfo`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

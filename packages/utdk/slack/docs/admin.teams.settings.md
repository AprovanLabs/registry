# Admin.Teams.Settings

6 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminTeamsSettingsInfo`

Fetch information about settings in a workspace — [API reference](https://api.slack.com/methods/admin.teams.settings.info)

```ts
slack.adminTeamsSettingsInfo(input: {
  team_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.teams.settings.info` · `admin_teams_settings_info`</sub>

## `slack.adminTeamsSettingsSetDefaultChannels`

Set the default channels of a workspace. — [API reference](https://api.slack.com/methods/admin.teams.settings.setDefaultChannels)

```ts
slack.adminTeamsSettingsSetDefaultChannels(input: {
  /** An array of channel IDs. */
  channel_ids: string;
  /** ID for the workspace to set the default channel for. */
  team_id: string;
  /** Authentication token. Requires scope: `admin.teams:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.teams.settings.setDefaultChannels` · `admin_teams_settings_setDefaultChannels`</sub>

## `slack.adminTeamsSettingsSetDescription`

Set the description of a given workspace. — [API reference](https://api.slack.com/methods/admin.teams.settings.setDescription)

```ts
slack.adminTeamsSettingsSetDescription(input: {
  /** The new description for the workspace. */
  description: string;
  /** ID for the workspace to set the description for. */
  team_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.teams.settings.setDescription` · `admin_teams_settings_setDescription`</sub>

## `slack.adminTeamsSettingsSetDiscoverability`

An API method that allows admins to set the discoverability of a given workspace — [API reference](https://api.slack.com/methods/admin.teams.settings.setDiscoverability)

```ts
slack.adminTeamsSettingsSetDiscoverability(input: {
  /** This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`. */
  discoverability: string;
  /** The ID of the workspace to set discoverability on. */
  team_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.teams.settings.setDiscoverability` · `admin_teams_settings_setDiscoverability`</sub>

## `slack.adminTeamsSettingsSetIcon`

Sets the icon of a workspace. — [API reference](https://api.slack.com/methods/admin.teams.settings.setIcon)

```ts
slack.adminTeamsSettingsSetIcon(input: {
  /** Image URL for the icon */
  image_url: string;
  /** ID for the workspace to set the icon for. */
  team_id: string;
  /** Authentication token. Requires scope: `admin.teams:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.teams.settings.setIcon` · `admin_teams_settings_setIcon`</sub>

## `slack.adminTeamsSettingsSetName`

Set the name of a given workspace. — [API reference](https://api.slack.com/methods/admin.teams.settings.setName)

```ts
slack.adminTeamsSettingsSetName(input: {
  /** The new name of the workspace. */
  name: string;
  /** ID for the workspace to set the name for. */
  team_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.teams.settings.setName` · `admin_teams_settings_setName`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

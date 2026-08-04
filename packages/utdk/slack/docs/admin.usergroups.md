# Admin.Usergroups

4 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminUsergroupsAddChannels`

Add one or more default channels to an IDP group. — [API reference](https://api.slack.com/methods/admin.usergroups.addChannels)

```ts
slack.adminUsergroupsAddChannels(input: {
  /** Comma separated string of channel IDs. */
  channel_ids: string;
  /** The workspace to add default channels in. */
  team_id?: string;
  /** ID of the IDP group to add default channels for. */
  usergroup_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.usergroups.addChannels` · `admin_usergroups_addChannels`</sub>

## `slack.adminUsergroupsAddTeams`

Associate one or more default workspaces with an organization-wide IDP group. — [API reference](https://api.slack.com/methods/admin.usergroups.addTeams)

```ts
slack.adminUsergroupsAddTeams(input: {
  /** When `true`, this method automatically creates new workspace accounts for the IDP group members. */
  auto_provision?: boolean;
  /** A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token. */
  team_ids: string;
  /** An encoded usergroup (IDP Group) ID. */
  usergroup_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.usergroups.addTeams` · `admin_usergroups_addTeams`</sub>

## `slack.adminUsergroupsListChannels`

List the channels linked to an org-level IDP group (user group). — [API reference](https://api.slack.com/methods/admin.usergroups.listChannels)

```ts
slack.adminUsergroupsListChannels(input: {
  /** ID of the IDP group to list default channels for. */
  usergroup_id: string;
  /** ID of the the workspace. */
  team_id?: string;
  /** Flag to include or exclude the count of members per channel. */
  include_num_members?: boolean;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.usergroups.listChannels` · `admin_usergroups_listChannels`</sub>

## `slack.adminUsergroupsRemoveChannels`

Remove one or more default channels from an org-level IDP group (user group). — [API reference](https://api.slack.com/methods/admin.usergroups.removeChannels)

```ts
slack.adminUsergroupsRemoveChannels(input: {
  /** Comma-separated string of channel IDs */
  channel_ids: string;
  /** ID of the IDP Group */
  usergroup_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.usergroups.removeChannels` · `admin_usergroups_removeChannels`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

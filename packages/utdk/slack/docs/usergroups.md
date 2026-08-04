# Usergroups

5 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.usergroupsCreate`

Create a User Group — [API reference](https://api.slack.com/methods/usergroups.create)

```ts
slack.usergroupsCreate(input: {
  /** A comma separated string of encoded channel IDs for which the User Group uses as a default. */
  channels?: string;
  /** A short description of the User Group. */
  description?: string;
  /** A mention handle. Must be unique among channels, users and User Groups. */
  handle?: string;
  /** Include the number of users in each User Group. */
  include_count?: boolean;
  /** A name for the User Group. Must be unique among User Groups. */
  name: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; usergroup: ObjsSubteam }>
```

<sub>`POST /usergroups.create` · `usergroups_create`</sub>

## `slack.usergroupsDisable`

Disable an existing User Group — [API reference](https://api.slack.com/methods/usergroups.disable)

```ts
slack.usergroupsDisable(input: {
  /** Include the number of users in the User Group. */
  include_count?: boolean;
  /** The encoded ID of the User Group to disable. */
  usergroup: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; usergroup: ObjsSubteam }>
```

<sub>`POST /usergroups.disable` · `usergroups_disable`</sub>

## `slack.usergroupsEnable`

Enable a User Group — [API reference](https://api.slack.com/methods/usergroups.enable)

```ts
slack.usergroupsEnable(input: {
  /** Include the number of users in the User Group. */
  include_count?: boolean;
  /** The encoded ID of the User Group to enable. */
  usergroup: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; usergroup: ObjsSubteam }>
```

<sub>`POST /usergroups.enable` · `usergroups_enable`</sub>

## `slack.usergroupsList`

List all User Groups for a team — [API reference](https://api.slack.com/methods/usergroups.list)

```ts
slack.usergroupsList(input: {
  /** Include the list of users for each User Group. */
  include_users?: boolean;
  /** Authentication token. Requires scope: `usergroups:read` */
  token: string;
  /** Include the number of users in each User Group. */
  include_count?: boolean;
  /** Include disabled User Groups. */
  include_disabled?: boolean;
}): Promise<{ ok: DefsOkTrue; usergroups: (ObjsSubteam)[] }>
```

<sub>`GET /usergroups.list` · `usergroups_list`</sub>

## `slack.usergroupsUpdate`

Update an existing User Group — [API reference](https://api.slack.com/methods/usergroups.update)

```ts
slack.usergroupsUpdate(input: {
  /** A comma separated string of encoded channel IDs for which the User Group uses as a default. */
  channels?: string;
  /** A short description of the User Group. */
  description?: string;
  /** A mention handle. Must be unique among channels, users and User Groups. */
  handle?: string;
  /** Include the number of users in the User Group. */
  include_count?: boolean;
  /** A name for the User Group. Must be unique among User Groups. */
  name?: string;
  /** The encoded ID of the User Group to update. */
  usergroup: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; usergroup: ObjsSubteam }>
```

<sub>`POST /usergroups.update` · `usergroups_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

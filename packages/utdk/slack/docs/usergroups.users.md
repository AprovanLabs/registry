# Usergroups.Users

2 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.usergroupsUsersList`

List all users in a User Group — [API reference](https://api.slack.com/methods/usergroups.users.list)

```ts
slack.usergroupsUsersList(input: {
  /** Authentication token. Requires scope: `usergroups:read` */
  token: string;
  /** Allow results that involve disabled User Groups. */
  include_disabled?: boolean;
  /** The encoded ID of the User Group to update. */
  usergroup: string;
}): Promise<{ ok: DefsOkTrue; users: (DefsUserId)[] }>
```

<sub>`GET /usergroups.users.list` · `usergroups_users_list`</sub>

## `slack.usergroupsUsersUpdate`

Update the list of users for a User Group — [API reference](https://api.slack.com/methods/usergroups.users.update)

```ts
slack.usergroupsUsersUpdate(input: {
  /** Include the number of users in the User Group. */
  include_count?: boolean;
  /** The encoded ID of the User Group to update. */
  usergroup: string;
  /** A comma separated string of encoded user IDs that represent the entire list of users for the User Group. */
  users: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; usergroup: ObjsSubteam }>
```

<sub>`POST /usergroups.users.update` · `usergroups_users_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Admin.Users

8 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminUsersAssign`

Add an Enterprise user to a workspace. — [API reference](https://api.slack.com/methods/admin.users.assign)

```ts
slack.adminUsersAssign(input: {
  /** Comma separated values of channel IDs to add user in the new workspace. */
  channel_ids?: string;
  /** True if user should be added to the workspace as a guest. */
  is_restricted?: boolean;
  /** True if user should be added to the workspace as a single-channel guest. */
  is_ultra_restricted?: boolean;
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** The ID of the user to add to the workspace. */
  user_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.assign` · `admin_users_assign`</sub>

## `slack.adminUsersInvite`

Invite a user to a workspace. — [API reference](https://api.slack.com/methods/admin.users.invite)

```ts
slack.adminUsersInvite(input: {
  /** A comma-separated list of `channel_id`s for this user to join. At least one channel is required. */
  channel_ids: string;
  /** An optional message to send to the user in the invite email. */
  custom_message?: string;
  /** The email address of the person to invite. */
  email: string;
  /** Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date. */
  guest_expiration_ts?: string;
  /** Is this user a multi-channel guest user? (default: false) */
  is_restricted?: boolean;
  /** Is this user a single channel guest user? (default: false) */
  is_ultra_restricted?: boolean;
  /** Full name of the user. */
  real_name?: string;
  /** Allow this invite to be resent in the future if a user has not signed up yet. (default: false) */
  resend?: boolean;
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.invite` · `admin_users_invite`</sub>

## `slack.adminUsersList`

List users on a workspace — [API reference](https://api.slack.com/methods/admin.users.list)

```ts
slack.adminUsersList(input: {
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
  cursor?: string;
  /** Limit for how many users to be retrieved per page */
  limit?: number;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.users.list` · `admin_users_list`</sub>

## `slack.adminUsersRemove`

Remove a user from a workspace. — [API reference](https://api.slack.com/methods/admin.users.remove)

```ts
slack.adminUsersRemove(input: {
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** The ID of the user to remove. */
  user_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.remove` · `admin_users_remove`</sub>

## `slack.adminUsersSetAdmin`

Set an existing guest, regular user, or owner to be an admin user. — [API reference](https://api.slack.com/methods/admin.users.setAdmin)

```ts
slack.adminUsersSetAdmin(input: {
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** The ID of the user to designate as an admin. */
  user_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.setAdmin` · `admin_users_setAdmin`</sub>

## `slack.adminUsersSetExpiration`

Set an expiration for a guest user — [API reference](https://api.slack.com/methods/admin.users.setExpiration)

```ts
slack.adminUsersSetExpiration(input: {
  /** Timestamp when guest account should be disabled. */
  expiration_ts: number;
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** The ID of the user to set an expiration for. */
  user_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.setExpiration` · `admin_users_setExpiration`</sub>

## `slack.adminUsersSetOwner`

Set an existing guest, regular user, or admin user to be a workspace owner. — [API reference](https://api.slack.com/methods/admin.users.setOwner)

```ts
slack.adminUsersSetOwner(input: {
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** Id of the user to promote to owner. */
  user_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.setOwner` · `admin_users_setOwner`</sub>

## `slack.adminUsersSetRegular`

Set an existing guest user, admin user, or owner to be a regular user. — [API reference](https://api.slack.com/methods/admin.users.setRegular)

```ts
slack.adminUsersSetRegular(input: {
  /** The ID (`T1234`) of the workspace. */
  team_id: string;
  /** The ID of the user to designate as a regular user. */
  user_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.users.setRegular` · `admin_users_setRegular`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

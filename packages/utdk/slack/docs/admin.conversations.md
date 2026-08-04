# Admin.Conversations

13 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminConversationsArchive`

Archive a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.archive)

```ts
slack.adminConversationsArchive(input: {
  /** The channel to archive. */
  channel_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.archive` · `admin_conversations_archive`</sub>

## `slack.adminConversationsConvertToPrivate`

Convert a public channel to a private channel. — [API reference](https://api.slack.com/methods/admin.conversations.convertToPrivate)

```ts
slack.adminConversationsConvertToPrivate(input: {
  /** The channel to convert to private. */
  channel_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.convertToPrivate` · `admin_conversations_convertToPrivate`</sub>

## `slack.adminConversationsCreate`

Create a public or private channel-based conversation. — [API reference](https://api.slack.com/methods/admin.conversations.create)

```ts
slack.adminConversationsCreate(input: {
  /** Description of the public or private channel to create. */
  description?: string;
  /** When `true`, creates a private channel instead of a public channel */
  is_private: boolean;
  /** Name of the public or private channel to create. */
  name: string;
  /** When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel */
  org_wide?: boolean;
  /** The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`. */
  team_id?: string;
}, options: { headers: { token: string } }): Promise<{ channel_id?: DefsChannelId; ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.create` · `admin_conversations_create`</sub>

## `slack.adminConversationsDelete`

Delete a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.delete)

```ts
slack.adminConversationsDelete(input: {
  /** The channel to delete. */
  channel_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.delete` · `admin_conversations_delete`</sub>

## `slack.adminConversationsDisconnectShared`

Disconnect a connected channel from one or more workspaces. — [API reference](https://api.slack.com/methods/admin.conversations.disconnectShared)

```ts
slack.adminConversationsDisconnectShared(input: {
  /** The channel to be disconnected from some workspaces. */
  channel_id: string;
  /** The team to be removed from the channel. Currently only a single team id can be specified. */
  leaving_team_ids?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.disconnectShared` · `admin_conversations_disconnectShared`</sub>

## `slack.adminConversationsGetConversationPrefs`

Get conversation preferences for a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.getConversationPrefs)

```ts
slack.adminConversationsGetConversationPrefs(input: {
  /** The channel to get preferences for. */
  channel_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; prefs?: { can_thread?: { type?: (string)[]; user?: (string)[] }; who_can_post?: { type?: (string)[]; user?: (string)[] } } }>
```

<sub>`GET /admin.conversations.getConversationPrefs` · `admin_conversations_getConversationPrefs`</sub>

## `slack.adminConversationsGetTeams`

Get all the workspaces a given public or private channel is connected to within this Enterprise org. — [API reference](https://api.slack.com/methods/admin.conversations.getTeams)

```ts
slack.adminConversationsGetTeams(input: {
  /** The channel to determine connected workspaces within the organization for. */
  channel_id: string;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page */
  cursor?: string;
  /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
  limit?: number;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; response_metadata?: { next_cursor: string }; team_ids: (DefsTeam)[] }>
```

<sub>`GET /admin.conversations.getTeams` · `admin_conversations_getTeams`</sub>

## `slack.adminConversationsInvite`

Invite a user to a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.invite)

```ts
slack.adminConversationsInvite(input: {
  /** The channel that the users will be invited to. */
  channel_id: string;
  /** The users to invite. */
  user_ids: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.invite` · `admin_conversations_invite`</sub>

## `slack.adminConversationsRename`

Rename a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.rename)

```ts
slack.adminConversationsRename(input: {
  /** The channel to rename. */
  channel_id: string;
  name: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.rename` · `admin_conversations_rename`</sub>

## `slack.adminConversationsSearch`

Search for public or private channels in an Enterprise organization. — [API reference](https://api.slack.com/methods/admin.conversations.search)

```ts
slack.adminConversationsSearch(input: {
  /** Comma separated string of team IDs, signifying the workspaces to search through. */
  team_ids?: string;
  /** Name of the the channel to query by. */
  query?: string;
  /** Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10. */
  limit?: number;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
  cursor?: string;
  /** The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types). */
  search_channel_types?: string;
  /** Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted  */
  sort?: string;
  /** Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a) */
  sort_dir?: string;
}, options: { headers: { token: string } }): Promise<{ channels: (ObjsChannel)[]; next_cursor: string }>
```

<sub>`GET /admin.conversations.search` · `admin_conversations_search`</sub>

## `slack.adminConversationsSetConversationPrefs`

Set the posting permissions for a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.setConversationPrefs)

```ts
slack.adminConversationsSetConversationPrefs(input: {
  /** The channel to set the prefs for */
  channel_id: string;
  /** The prefs for this channel in a stringified JSON format. */
  prefs: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.setConversationPrefs` · `admin_conversations_setConversationPrefs`</sub>

## `slack.adminConversationsSetTeams`

Set the workspaces in an Enterprise grid org that connect to a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.setTeams)

```ts
slack.adminConversationsSetTeams(input: {
  /** The encoded `channel_id` to add or remove to workspaces. */
  channel_id: string;
  /** True if channel has to be converted to an org channel */
  org_channel?: boolean;
  /** A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide. */
  target_team_ids?: string;
  /** The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel. */
  team_id?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.conversations.setTeams` · `admin_conversations_setTeams`</sub>

## `slack.adminConversationsUnarchive`

Unarchive a public or private channel. — [API reference](https://api.slack.com/methods/admin.conversations.unarchive)

```ts
slack.adminConversationsUnarchive(input: {
  /** The channel to unarchive. */
  channel_id: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /admin.conversations.unarchive` · `admin_conversations_unarchive`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

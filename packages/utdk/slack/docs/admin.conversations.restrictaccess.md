# Admin.Conversations.RestrictAccess

3 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminConversationsRestrictAccessAddGroup`

Add an allowlist of IDP groups for accessing a channel — [API reference](https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup)

```ts
slack.adminConversationsRestrictAccessAddGroup(input: {
  /** The channel to link this group to. */
  channel_id: string;
  /** The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel. */
  group_id: string;
  /** The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. */
  team_id?: string;
  /** Authentication token. Requires scope: `admin.conversations:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.conversations.restrictAccess.addGroup` · `admin_conversations_restrictAccess_addGroup`</sub>

## `slack.adminConversationsRestrictAccessListGroups`

List all IDP Groups linked to a channel — [API reference](https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups)

```ts
slack.adminConversationsRestrictAccessListGroups(input: {
  /** Authentication token. Requires scope: `admin.conversations:read` */
  token: string;
  channel_id: string;
  /** The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. */
  team_id?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.conversations.restrictAccess.listGroups` · `admin_conversations_restrictAccess_listGroups`</sub>

## `slack.adminConversationsRestrictAccessRemoveGroup`

Remove a linked IDP group linked from a private channel — [API reference](https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup)

```ts
slack.adminConversationsRestrictAccessRemoveGroup(input: {
  /** The channel to remove the linked group from. */
  channel_id: string;
  /** The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel. */
  group_id: string;
  /** The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. */
  team_id: string;
  /** Authentication token. Requires scope: `admin.conversations:write` */
  token: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`POST /admin.conversations.restrictAccess.removeGroup` · `admin_conversations_restrictAccess_removeGroup`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

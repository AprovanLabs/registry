# Admin.Conversations.Ekm

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminConversationsEkmListOriginalConnectedChannelInfo`

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM. — [API reference](https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo)

```ts
slack.adminConversationsEkmListOriginalConnectedChannelInfo(input: {
  /** Authentication token. Requires scope: `admin.conversations:read` */
  token: string;
  /** A comma-separated list of channels to filter to. */
  channel_ids?: string;
  /** A comma-separated list of the workspaces to which the channels you would like returned belong. */
  team_ids?: string;
  /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
  limit?: number;
  /** Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. */
  cursor?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.conversations.ekm.listOriginalConnectedChannelInfo` · `admin_conversations_ekm_listOriginalConnectedChannelInfo`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

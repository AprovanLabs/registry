# Admin.InviteRequests.Approved

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.adminInviteRequestsApprovedList`

List all approved workspace invite requests. — [API reference](https://api.slack.com/methods/admin.inviteRequests.approved.list)

```ts
slack.adminInviteRequestsApprovedList(input: {
  /** ID for the workspace where the invite requests were made. */
  team_id?: string;
  /** Value of the `next_cursor` field sent as part of the previous API response */
  cursor?: string;
  /** The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive */
  limit?: number;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /admin.inviteRequests.approved.list` · `admin_inviteRequests_approved_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Send Money

2 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.listSendMoneyApprovalRequests`

List send money approval requests

```ts
mercury.listSendMoneyApprovalRequests(input: {
  /** ID for a Mercury account. */
  accountId?: string;
  status?: "pendingApproval" | "approved" | "rejected" | "cancelled";
  /** The ID of the send money approval request to start the page after (exclusive). When provided, results will begin with the send money approval request immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the send money approval request to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
}): Promise<SendMoneyApprovalRequestsPaginatedResponse>
```

<sub>`GET /request-send-money` · `listSendMoneyApprovalRequests`</sub>

## `mercury.getSendMoneyApprovalRequest`

Get send money approval request by ID

```ts
mercury.getSendMoneyApprovalRequest(input: {
  /** ID for the send money approval request */
  requestId: string;
}): Promise<SendMoneyApprovalRequestResponse>
```

<sub>`GET /request-send-money/{requestId}` · `getSendMoneyApprovalRequest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

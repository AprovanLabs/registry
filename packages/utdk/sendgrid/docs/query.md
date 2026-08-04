# Query

2 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getMessages`

Filter all messages — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMessages(input: {
  /** Use the query syntax  to filter your email activity. */
  query: string;
  /** The number of messages returned. This parameter must be greater than 0 and less than or equal to 1000 */
  limit?: number;
}, options: { headers: { "X-Query-Id"?: string; "X-Cursor"?: string; Authorization: string } }): Promise<{ messages?: (EmailActivityResponseCommonFields & { clicks_count?: number; last_event_time?: number; opens_count?: number })[] }>
```

<sub>`GET /messages` · `GET-messages`</sub>

## `sendgrid.getV3MessagesMsgId`

Filter messages by message ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3MessagesMsgId(input: {
  /** The ID of the message you are requesting details for. */
  msg_id: string;
}, options: { headers: { Authorization: string } }): Promise<EmailActivityResponseCommonFields & { api_key_id: string; asm_group_id: number; categories: (string)[]; events: ({ attempt_num?: number; bounce_type: "soft" | "hard"; event_name: "bounced" | "opened" | "clicked" | "processed" | "dropped" | "delivered" | "deferred" | "spam_report" | "unsubscribe" | "group_unsubscribe" | "group_resubscribe"; http_user_agent: string; mx_server: string; processed: st...>
```

<sub>`GET /messages/{msg_id}` · `GET-v3-messages-msg_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

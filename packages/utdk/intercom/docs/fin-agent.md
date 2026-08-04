# Fin Agent

3 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.submitFinCsat`

Submit a CSAT rating — [Provider docs](https://developers.intercom.com)

```ts
intercom.submitFinCsat(input: {
  /** Your external conversation ID — the same ID you started the conversation with, and the one echoed on the `csat_requested` event. */
  conversation_id: string;
  /** The rating the user selected — one of the `key` values from the `csat_requested` event's options. */
  rating: "terrible" | "bad" | "ok" | "good" | "amazing";
  /** Optional free-text comment the user left alongside the rating. Can be added to an already-rated survey, but only once — the rating locks after a remark is recorded. */
  remark?: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ conversation_id?: string; rating?: "terrible" | "bad" | "ok" | "good" | "amazing"; status?: "rated" }>
```

<sub>`POST /fin/csat` · `submitFinCsat`</sub>

## `intercom.replyToFin`

Reply to Fin — [Provider docs](https://developers.intercom.com)

```ts
intercom.replyToFin(input: {
  /** The ID of the conversation. */
  conversation_id: string;
  message: FinAgentMessage;
  user: FinAgentUser;
  /** An array of attachments to include with the message. Maximum of 10 attachments. */
  attachments?: (FinAgentAttachment)[];
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ conversation_id?: string; user_id?: string; status?: "thinking" | "awaiting_user_reply" | "escalated" | "resolved" | "complete"; created_at_ms?: string; errors?: FinAgentAttributeErrors; sse_subscription_url?: string }>
```

<sub>`POST /fin/reply` · `replyToFin`</sub>

## `intercom.startFinConversation`

Start a conversation with Fin — [Provider docs](https://developers.intercom.com)

```ts
intercom.startFinConversation(input: {
  /** The ID of the conversation that is calling Fin via this API. */
  conversation_id: string;
  message: FinAgentMessage;
  user: FinAgentUser;
  /** An array of attachments to include with the message. Maximum of 10 attachments. */
  attachments?: (FinAgentAttachment)[];
  conversation_metadata?: FinAgentConversationMetadata;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ conversation_id?: string; user_id?: string; status?: "thinking" | "awaiting_user_reply" | "escalated" | "resolved" | "complete"; created_at_ms?: string; errors?: FinAgentAttributeErrors; sse_subscription_url?: string }>
```

<sub>`POST /fin/start` · `startFinConversation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

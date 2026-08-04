# Max

12 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.conversationsList`

```ts
posthog.conversationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; status: "idle" | "in_progress" | "canceling"; title: string | null; topic: "web_analytics" | "product_analytics" | "session_replay" | "surveys" | "feature_flags" | "experiments" | "error_tracking" | "data_warehouse" | "other" | null; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: ...>
```

<sub>`GET /api/projects/{project_id}/conversations/` · `conversations_list`</sub>

## `posthog.conversationsCreate`

Unified endpoint that handles both conversation creation and streaming. - If message is provided: Start new conversation processing - If no message: Stream from existing conversation

```ts
posthog.conversationsCreate(): Promise<{ content: string | null; conversation: string; contextual_tools?: { [key: string]: unknown }; ui_context?: unknown; billing_context?: unknown; trace_id: string; session_id?: string; agent_mode?: "product_analytics" | "sql" | "session_replay" | "error_tracking" | "plan" | "execution" | "survey" | "research" | "flags" | "llm_analytics" | "sandbox" | "user_interview" | "customer_analytics"; is_sand...>
```

<sub>`POST /api/projects/{project_id}/conversations/` · `conversations_create`</sub>

## `posthog.conversationsDestroy`

Delete a conversation.

```ts
posthog.conversationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/conversations/{conversation}/` · `conversations_destroy`</sub>

## `posthog.conversationsRetrieve`

```ts
posthog.conversationsRetrieve(): Promise<{ id: string; status: "idle" | "in_progress" | "canceling"; title: string | null; topic: "web_analytics" | "product_analytics" | "session_replay" | "surveys" | "feature_flags" | "experiments" | "error_tracking" | "data_warehouse" | "other" | null; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | nu...>
```

<sub>`GET /api/projects/{project_id}/conversations/{conversation}/` · `conversations_retrieve`</sub>

## `posthog.conversationsAppendMessageCreate`

Appends a message to an existing conversation without triggering AI processing. This is used for client-side generated messages that need to be persisted (e.g., support ticket confirmation messages).

```ts
posthog.conversationsAppendMessageCreate(): Promise<{ content: string }>
```

<sub>`POST /api/projects/{project_id}/conversations/{conversation}/append_message/` · `conversations_append_message_create`</sub>

## `posthog.conversationsCancelPartialUpdate`

Cancel the conversation's in-progress LangGraph run.

```ts
posthog.conversationsCancelPartialUpdate(): Promise<unknown>
```

<sub>`PATCH /api/projects/{project_id}/conversations/{conversation}/cancel/` · `conversations_cancel_partial_update`</sub>

## `posthog.conversationsOpenCreate`

Create-or-resume a sandbox conversation — the single sandbox session opener. With `content`, processes the turn (first message, in-progress follow-up, or terminal resume); without `content`, warms a sandbox that idles awaiting the first message. Returns the `(task, run)` handle the frontend opens SSE against. The conversation row is created on first use from the URL id.

```ts
posthog.conversationsOpenCreate(): Promise<{ task_id: string; run_id: string; trace_id: string | null; run_status: string; just_created_run: boolean }>
```

<sub>`POST /api/projects/{project_id}/conversations/{conversation}/open/` · `conversations_open_create`</sub>

## `posthog.conversationsQueueRetrieve`

```ts
posthog.conversationsQueueRetrieve(): Promise<{ id: string; status: "idle" | "in_progress" | "canceling"; title: string | null; topic: "web_analytics" | "product_analytics" | "session_replay" | "surveys" | "feature_flags" | "experiments" | "error_tracking" | "data_warehouse" | "other" | null; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | nu...>
```

<sub>`GET /api/projects/{project_id}/conversations/{conversation}/queue/` · `conversations_queue_retrieve`</sub>

## `posthog.conversationsQueueCreate`

```ts
posthog.conversationsQueueCreate(): Promise<{ id: string; status: "idle" | "in_progress" | "canceling"; title: string | null; topic: "web_analytics" | "product_analytics" | "session_replay" | "surveys" | "feature_flags" | "experiments" | "error_tracking" | "data_warehouse" | "other" | null; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | nu...>
```

<sub>`POST /api/projects/{project_id}/conversations/{conversation}/queue/` · `conversations_queue_create`</sub>

## `posthog.conversationsQueueDestroy`

```ts
posthog.conversationsQueueDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/conversations/{conversation}/queue/{queue_id}/` · `conversations_queue_destroy`</sub>

## `posthog.conversationsQueuePartialUpdate`

```ts
posthog.conversationsQueuePartialUpdate(): Promise<{ id: string; status: "idle" | "in_progress" | "canceling"; title: string | null; topic: "web_analytics" | "product_analytics" | "session_replay" | "surveys" | "feature_flags" | "experiments" | "error_tracking" | "data_warehouse" | "other" | null; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | nu...>
```

<sub>`PATCH /api/projects/{project_id}/conversations/{conversation}/queue/{queue_id}/` · `conversations_queue_partial_update`</sub>

## `posthog.conversationsQueueClearCreate`

```ts
posthog.conversationsQueueClearCreate(): Promise<{ id: string; status: "idle" | "in_progress" | "canceling"; title: string | null; topic: "web_analytics" | "product_analytics" | "session_replay" | "surveys" | "feature_flags" | "experiments" | "error_tracking" | "data_warehouse" | "other" | null; user: { id: number; uuid: string; distinct_id?: string | null; first_name?: string; last_name?: string; email: string; is_email_verified?: boolean | nu...>
```

<sub>`POST /api/projects/{project_id}/conversations/{conversation}/queue/clear/` · `conversations_queue_clear_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

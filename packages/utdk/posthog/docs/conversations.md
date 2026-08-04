# Conversations

17 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.conversationsTicketsList`

List tickets with person data attached.

```ts
posthog.conversationsTicketsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; ticket_number: number; channel_source: "widget" | "email" | "slack" | "teams" | "github"; channel_detail: "slack_channel_message" | "slack_bot_mention" | "slack_emoji_reaction" | "teams_channel_message" | "teams_bot_mention" | "widget_embedded" | "widget_api" | "github_issue" | null; distinct_id: string; stat...>
```

<sub>`GET /api/projects/{project_id}/conversations/tickets/` · `conversations_tickets_list`</sub>

## `posthog.conversationsTicketsDestroy`

```ts
posthog.conversationsTicketsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/conversations/tickets/{id}/` · `conversations_tickets_destroy`</sub>

## `posthog.conversationsTicketsRetrieve`

Get single ticket and mark as read by team.

```ts
posthog.conversationsTicketsRetrieve(): Promise<{ id: string; ticket_number: number; channel_source: "widget" | "email" | "slack" | "teams" | "github"; channel_detail: "slack_channel_message" | "slack_bot_mention" | "slack_emoji_reaction" | "teams_channel_message" | "teams_bot_mention" | "widget_embedded" | "widget_api" | "github_issue" | null; distinct_id: string; status?: "new" | "open" | "pending" | "on_hold" | "resolved"; priority?: "low" ...>
```

<sub>`GET /api/projects/{project_id}/conversations/tickets/{id}/` · `conversations_tickets_retrieve`</sub>

## `posthog.conversationsTicketsPartialUpdate`

```ts
posthog.conversationsTicketsPartialUpdate(): Promise<{ id: string; ticket_number: number; channel_source: "widget" | "email" | "slack" | "teams" | "github"; channel_detail: "slack_channel_message" | "slack_bot_mention" | "slack_emoji_reaction" | "teams_channel_message" | "teams_bot_mention" | "widget_embedded" | "widget_api" | "github_issue" | null; distinct_id: string; status?: "new" | "open" | "pending" | "on_hold" | "resolved"; priority?: "low" ...>
```

<sub>`PATCH /api/projects/{project_id}/conversations/tickets/{id}/` · `conversations_tickets_partial_update`</sub>

## `posthog.conversationsTicketsUpdate`

Handle ticket updates including assignee changes.

```ts
posthog.conversationsTicketsUpdate(): Promise<{ id: string; ticket_number: number; channel_source: "widget" | "email" | "slack" | "teams" | "github"; channel_detail: "slack_channel_message" | "slack_bot_mention" | "slack_emoji_reaction" | "teams_channel_message" | "teams_bot_mention" | "widget_embedded" | "widget_api" | "github_issue" | null; distinct_id: string; status?: "new" | "open" | "pending" | "on_hold" | "resolved"; priority?: "low" ...>
```

<sub>`PUT /api/projects/{project_id}/conversations/tickets/{id}/` · `conversations_tickets_update`</sub>

## `posthog.conversationsTicketsAiFeedbackCreate`

Record reviewer feedback on an AI reply, captured to the internal analytics project.

```ts
posthog.conversationsTicketsAiFeedbackCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/conversations/tickets/{id}/ai_feedback/` · `conversations_tickets_ai_feedback_create`</sub>

## `posthog.conversationsTicketsMessagesList`

Return the message thread for a ticket, ordered chronologically (paginated).

```ts
posthog.conversationsTicketsMessagesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; content: string; rich_content: unknown; author_type: string; author_name: string; is_private: boolean; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/conversations/tickets/{id}/messages/` · `conversations_tickets_messages_list`</sub>

## `posthog.conversationsTicketsReplyCreate`

Post a reply or internal note to a ticket. With is_private=false, the reply is delivered to the customer via the ticket's channel (email, Slack, Teams, GitHub). With is_private=true, the message is stored as an internal note only visible to team members.

```ts
posthog.conversationsTicketsReplyCreate(): Promise<{ id: string; content: string; rich_content: unknown; author_type: string; author_name: string; is_private: boolean; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/conversations/tickets/{id}/reply/` · `conversations_tickets_reply_create`</sub>

## `posthog.conversationsTicketsBulkUpdateStatusCreate`

Update the status of multiple tickets in a single request. Only tickets belonging to the current team are affected; other-team UUIDs are silently ignored. Tickets the caller lacks editor-level access to (denied or view-only via object-level access control) are silently skipped too, the same way single-ticket updates enforce object-level access via get_object(). Tickets already in the requested status are skipped.

```ts
posthog.conversationsTicketsBulkUpdateStatusCreate(): Promise<{ updated: number; ids: (string)[] }>
```

<sub>`POST /api/projects/{project_id}/conversations/tickets/bulk_update_status/` · `conversations_tickets_bulk_update_status_create`</sub>

## `posthog.conversationsTicketsBulkUpdateTagsCreate`

Bulk update tags on multiple objects. PAT access: this action has no ``required_scopes=`` on the decorator — inheriting viewsets must add ``"bulk_update_tags"`` to their ``scope_object_write_actions`` list to accept personal API keys. Without that opt-in, ``APIScopePermission`` rejects PAT requests with "This action does not support personal API key access". Done per-viewset so granting ``<scope>:write`` for one resource doesn't leak access to sibling resources that share this mixin. Accepts: - {"ids": [...], "action": "add"|"remove"|"set", "tags": ["tag1", "tag2"]} Actions: - "add": Add tags to existing tags on each object - "remove": Remove specific tags from each object - "set": Replace all tags on each object with the provided list

```ts
posthog.conversationsTicketsBulkUpdateTagsCreate(): Promise<{ updated: ({ id: number; tags: (string)[] })[]; skipped: ({ id: number; reason: string })[] }>
```

<sub>`POST /api/projects/{project_id}/conversations/tickets/bulk_update_tags/` · `conversations_tickets_bulk_update_tags_create`</sub>

## `posthog.conversationsTicketsComposeCreate`

Create a new outbound ticket and send the first message to the customer.

```ts
posthog.conversationsTicketsComposeCreate(): Promise<{ id: string; ticket_number: number }>
```

<sub>`POST /api/projects/{project_id}/conversations/tickets/compose/` · `conversations_tickets_compose_create`</sub>

## `posthog.conversationsTicketsUnreadCountRetrieve`

Get total unread ticket count for the team. Returns the sum of unread_team_count for all non-resolved tickets visible to the caller. The team-wide Redis cache (30s TTL, invalidated on changes) is only used for callers without object-level ticket restrictions, since it holds one unscoped total per team - serving it to a restricted member would leak counts for tickets they can't see.

```ts
posthog.conversationsTicketsUnreadCountRetrieve(): Promise<{ id: string; ticket_number: number; channel_source: "widget" | "email" | "slack" | "teams" | "github"; channel_detail: "slack_channel_message" | "slack_bot_mention" | "slack_emoji_reaction" | "teams_channel_message" | "teams_bot_mention" | "widget_embedded" | "widget_api" | "github_issue" | null; distinct_id: string; status?: "new" | "open" | "pending" | "on_hold" | "resolved"; priority?: "low" ...>
```

<sub>`GET /api/projects/{project_id}/conversations/tickets/unread_count/` · `conversations_tickets_unread_count_retrieve`</sub>

## `posthog.conversationsViewsList`

```ts
posthog.conversationsViewsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; short_id: string; name: string; filters?: { status?: ("new" | "open" | "pending" | "on_hold" | "resolved")[]; priority?: ("low" | "medium" | "high" | "critical")[]; channel?: "widget" | "email" | "slack" | "teams" | "github" | "all"; sla?: "breached" | "at-risk" | "on-track" | "all"; aiTriageResult?: ("persis...>
```

<sub>`GET /api/projects/{project_id}/conversations/views/` · `conversations_views_list`</sub>

## `posthog.conversationsViewsCreate`

```ts
posthog.conversationsViewsCreate(): Promise<{ id: string; short_id: string; name: string; filters?: { status?: ("new" | "open" | "pending" | "on_hold" | "resolved")[]; priority?: ("low" | "medium" | "high" | "critical")[]; channel?: "widget" | "email" | "slack" | "teams" | "github" | "all"; sla?: "breached" | "at-risk" | "on-track" | "all"; aiTriageResult?: ("persisted" | "escalated_with_best" | "escalated_no_reply" | "skipped_unactionable...>
```

<sub>`POST /api/projects/{project_id}/conversations/views/` · `conversations_views_create`</sub>

## `posthog.conversationsViewsDestroy`

```ts
posthog.conversationsViewsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/conversations/views/{short_id}/` · `conversations_views_destroy`</sub>

## `posthog.conversationsViewsRetrieve`

```ts
posthog.conversationsViewsRetrieve(): Promise<{ id: string; short_id: string; name: string; filters?: { status?: ("new" | "open" | "pending" | "on_hold" | "resolved")[]; priority?: ("low" | "medium" | "high" | "critical")[]; channel?: "widget" | "email" | "slack" | "teams" | "github" | "all"; sla?: "breached" | "at-risk" | "on-track" | "all"; aiTriageResult?: ("persisted" | "escalated_with_best" | "escalated_no_reply" | "skipped_unactionable...>
```

<sub>`GET /api/projects/{project_id}/conversations/views/{short_id}/` · `conversations_views_retrieve`</sub>

## `posthog.conversationsViewsPartialUpdate`

```ts
posthog.conversationsViewsPartialUpdate(): Promise<{ id: string; short_id: string; name: string; filters?: { status?: ("new" | "open" | "pending" | "on_hold" | "resolved")[]; priority?: ("low" | "medium" | "high" | "critical")[]; channel?: "widget" | "email" | "slack" | "teams" | "github" | "all"; sla?: "breached" | "at-risk" | "on-track" | "all"; aiTriageResult?: ("persisted" | "escalated_with_best" | "escalated_no_reply" | "skipped_unactionable...>
```

<sub>`PATCH /api/projects/{project_id}/conversations/views/{short_id}/` · `conversations_views_partial_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

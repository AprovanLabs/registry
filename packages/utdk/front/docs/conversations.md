# Conversations

18 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listConversations`

List conversations — [Provider docs](https://community.front.com)

```ts
front.listConversations(input: {
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `trashed`). If ticketing is enabled, this endpoint accepts either `status_categories` (`open`, `waiting`, `resolved`) or `status_ids` as an alternative. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the conversations. Only supports `date`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ConversationResponse)[] }>
```

<sub>`GET /conversations` · `list-conversations`</sub>

## `front.createConversation`

Create discussion/task conversation — [Provider docs](https://community.front.com)

```ts
front.createConversation(input: {
  /** Conversation type */
  type: "discussion" | "task";
  /** Inbox ID for the conversation. Either `inbox_id` OR `teammate_ids` must be provided (not both). */
  inbox_id?: string;
  /** Teammates to add to the conversation. Either `inbox_id` OR `teammate_ids` must be provided (not both). */
  teammate_ids?: (string)[];
  /** Subject of the conversation. Used as the title for tasks. */
  subject: string;
  /** Details for the starter comment. Required for discussions, optional for tasks. */
  comment?: { author_id?: string; body: string; attachments?: (string)[] };
  /** Description of the task. Only allowed when type is `task`. */
  description?: string;
  /** Unix timestamp in seconds when the task is due. Must be in the future and within 50 years. Only allowed when type is `task`. */
  due_at?: number;
  /** Custom fields for this conversation */
  custom_fields?: CustomFieldParameter;
}): Promise<ConversationResponse>
```

<sub>`POST /conversations` · `create-conversation`</sub>

## `front.deleteConversation`

Delete conversation — [Provider docs](https://community.front.com)

```ts
front.deleteConversation(input: {
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /conversations/{conversation_id}` · `delete-conversation`</sub>

## `front.getConversationById`

Get conversation — [Provider docs](https://community.front.com)

```ts
front.getConversationById(input: {
  /** The conversation ID */
  conversation_id: string;
}): Promise<ConversationResponse>
```

<sub>`GET /conversations/{conversation_id}` · `get-conversation-by-id`</sub>

## `front.updateConversation`

Update conversation — [Provider docs](https://community.front.com)

```ts
front.updateConversation(input: {
  /** ID of the teammate to assign the conversation to. Set it to null to unassign. */
  assignee_id?: string;
  /** ID of the inbox to move the conversation to. */
  inbox_id?: string;
  /** New status of the conversation */
  status?: "archived" | "open" | "deleted" | "spam";
  /** Unique identifier of the status to set the conversation to. Only one of status and status_id should be provided. Ticketing must be enabled for the company to use this field. */
  status_id?: string;
  /** List of all the tag IDs replacing the old conversation tags */
  tag_ids?: (ResourceId)[];
  /** Description of the task. Only allowed on task conversations. Set to null to clear. */
  description?: string | null;
  /** Unix timestamp in seconds when the task is due. Must be in the future and within 50 years. Only allowed on task conversations. Set to null to clear. */
  due_at?: number | null;
  /** Custom fields for this conversation. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. Send as an object of key:value pairs where the key is the custom field name and the value is the custom field value. */
  custom_fields?: CustomFieldParameter;
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`PATCH /conversations/{conversation_id}` · `update-conversation`</sub>

## `front.updateConversationAssignee`

Update conversation assignee — [Provider docs](https://community.front.com)

```ts
front.updateConversationAssignee(input: {
  /** ID of the teammate to assign the conversation to. Set it to null to unassign. */
  assignee_id: string;
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`PUT /conversations/{conversation_id}/assignee` · `update-conversation-assignee`</sub>

## `front.listConversationEvents`

List conversation events — [Provider docs](https://community.front.com)

```ts
front.listConversationEvents(input: {
  /** The conversation ID */
  conversation_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (EventResponse)[] }>
```

<sub>`GET /conversations/{conversation_id}/events` · `list-conversation-events`</sub>

## `front.deleteConversationFollowers`

Delete conversation followers — [Provider docs](https://community.front.com)

```ts
front.deleteConversationFollowers(input: {
  /** IDs of the teammate to remove from the followers list. Alternatively, you can supply the teammates as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids: (string)[];
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /conversations/{conversation_id}/followers` · `delete-conversation-followers`</sub>

## `front.listConversationFollowers`

List conversation followers — [Provider docs](https://community.front.com)

```ts
front.listConversationFollowers(input: {
  /** The conversation ID */
  conversation_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TeammateResponse)[] }>
```

<sub>`GET /conversations/{conversation_id}/followers` · `list-conversation-followers`</sub>

## `front.addConversationFollowers`

Add conversation followers — [Provider docs](https://community.front.com)

```ts
front.addConversationFollowers(input: {
  /** IDs of the teammate to add to the followers list. Alternatively, you can supply the teammates as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids: (string)[];
  /** The conversation ID */
  conversation_id: string;
  /** Whether to ignore invalid teammate IDs and continue adding valid ones. */
  ignore_errors?: boolean;
}): Promise<undefined>
```

<sub>`POST /conversations/{conversation_id}/followers` · `add-conversation-followers`</sub>

## `front.listConversationInboxes`

List conversation inboxes — [Provider docs](https://community.front.com)

```ts
front.listConversationInboxes(input: {
  /** The conversation ID */
  conversation_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (InboxResponse)[] }>
```

<sub>`GET /conversations/{conversation_id}/inboxes` · `list-conversation-inboxes`</sub>

## `front.removeConversationLinks`

Remove conversation links — [Provider docs](https://community.front.com)

```ts
front.removeConversationLinks(input: {
  /** Link IDs to remove. */
  link_ids: (string)[];
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /conversations/{conversation_id}/links` · `remove-conversation-links`</sub>

## `front.addConversationLink`

Add conversation link — [Provider docs](https://community.front.com)

```ts
front.addConversationLink(input: {
  /** Link IDs to add. Either link_ids or link_external_urls must be specified but not both */
  link_ids?: (string)[];
  /** Link external URLs to add. Creates links if necessary. Either link_ids or link_external_urls must be specified but not both */
  link_external_urls?: (string)[];
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`POST /conversations/{conversation_id}/links` · `add-conversation-link`</sub>

## `front.listConversationMessages`

List conversation messages — [Provider docs](https://community.front.com)

```ts
front.listConversationMessages(input: {
  /** The conversation ID */
  conversation_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the messages. Only supports `created_at`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (MessageResponse)[] }>
```

<sub>`GET /conversations/{conversation_id}/messages` · `list-conversation-messages`</sub>

## `front.updateConversationReminders`

Update conversation reminders — [Provider docs](https://community.front.com)

```ts
front.updateConversationReminders(input: {
  /** ID of the teammate to create a reminder for. For a private conversation, specify the id of the teammate that owns the conversation. For a shared conversation, use the id of any teammate that has access to the conversation's shared inbox. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
  /** Unix timestamp in seconds to schedule the reminder for. Must be in the future and within 50 years. Set to null to cancel. */
  scheduled_at: number;
  /** ID of the waiting status to which the conversation will be set. Ticketing must be enabled for the company to use this field. If no status is supplied and ticket is enabled, the default waiting status will be used. */
  status_id?: string;
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`PATCH /conversations/{conversation_id}/reminders` · `update-conversation-reminders`</sub>

## `front.removeConversationTag`

Remove conversation tag — [Provider docs](https://community.front.com)

```ts
front.removeConversationTag(input: {
  tag_ids: (ResourceId)[];
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`DELETE /conversations/{conversation_id}/tags` · `remove-conversation-tag`</sub>

## `front.addConversationTag`

Add conversation tag — [Provider docs](https://community.front.com)

```ts
front.addConversationTag(input: {
  tag_ids: (ResourceId)[];
  /** The conversation ID */
  conversation_id: string;
}): Promise<undefined>
```

<sub>`POST /conversations/{conversation_id}/tags` · `add-conversation-tag`</sub>

## `front.searchConversations`

Search conversations — [Provider docs](https://community.front.com)

```ts
front.searchConversations(input: {
  /** Search query string. See [Search](https://dev.frontapp.com/docs/search-1) topic for usage details. */
  query: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _total?: number; _results?: (ConversationResponse)[] }>
```

<sub>`GET /conversations/search/{query}` · `search-conversations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

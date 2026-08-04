# Inboxes

12 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listInboxes`

List inboxes — [Provider docs](https://community.front.com)

```ts
front.listInboxes(): Promise<{ _links?: { self?: string }; _results?: (InboxResponse)[] }>
```

<sub>`GET /inboxes` · `list-inboxes`</sub>

## `front.createInbox`

Create inbox — [Provider docs](https://community.front.com)

```ts
front.createInbox(input: {
  /** The name of the inbox */
  name: string;
  /** An array of teammate IDs that should have access to the inbox. Alternatively, you can supply teammate emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids?: (ResourceId)[];
  /** Whether the inbox is public or not */
  is_public?: boolean;
  /** Custom fields for this inbox */
  custom_fields?: CustomFieldParameter;
}): Promise<InboxResponse>
```

<sub>`POST /inboxes` · `create-inbox`</sub>

## `front.getInbox`

Get inbox — [Provider docs](https://community.front.com)

```ts
front.getInbox(input: {
  /** The Inbox ID */
  inbox_id: string;
}): Promise<InboxResponse>
```

<sub>`GET /inboxes/{inbox_id}` · `get-inbox`</sub>

## `front.listInboxChannels`

List inbox channels — [Provider docs](https://community.front.com)

```ts
front.listInboxChannels(input: {
  /** The Inbox ID */
  inbox_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (ChannelResponse)[] }>
```

<sub>`GET /inboxes/{inbox_id}/channels` · `list-inbox-channels`</sub>

## `front.listInboxConversations`

List inbox conversations — [Provider docs](https://community.front.com)

```ts
front.listInboxConversations(input: {
  /** The Inbox ID */
  inbox_id: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `trashed`). If ticketing is enabled, this endpoint accepts either `status_categories` (`open`, `waiting`, `resolved`) or `status_ids` as an alternative. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ConversationResponse)[] }>
```

<sub>`GET /inboxes/{inbox_id}/conversations` · `list-inbox-conversations`</sub>

## `front.removesInboxAccess`

Removes inbox access — [Provider docs](https://community.front.com)

```ts
front.removesInboxAccess(input: {
  teammate_ids: (ResourceId)[];
  /** The Inbox ID */
  inbox_id: string;
}): Promise<undefined>
```

<sub>`DELETE /inboxes/{inbox_id}/teammates` · `removes-inbox-access`</sub>

## `front.listInboxAccess`

List inbox access — [Provider docs](https://community.front.com)

```ts
front.listInboxAccess(input: {
  /** The Inbox ID */
  inbox_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TeammateResponse)[] }>
```

<sub>`GET /inboxes/{inbox_id}/teammates` · `list-inbox-access`</sub>

## `front.addInboxAccess`

Add inbox access — [Provider docs](https://community.front.com)

```ts
front.addInboxAccess(input: {
  teammate_ids: (ResourceId)[];
  /** The Inbox ID */
  inbox_id: string;
}): Promise<undefined>
```

<sub>`POST /inboxes/{inbox_id}/teammates` · `add-inbox-access`</sub>

## `front.listTeammatePrivateInboxes`

List teammate private inboxes — [Provider docs](https://community.front.com)

```ts
front.listTeammatePrivateInboxes(input: {
  /** The teammate ID */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (InboxResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/private_inboxes` · `list-teammate-private-inboxes`</sub>

## `front.createTeammatePrivateInbox`

Create teammate private inbox — [Provider docs](https://community.front.com)

```ts
front.createTeammatePrivateInbox(input: {
  /** The name of the inbox */
  name: string;
  /** Custom fields for this inbox */
  custom_fields?: CustomFieldParameter;
  /** The teammate ID */
  teammate_id: string;
}): Promise<InboxResponse>
```

<sub>`POST /teammates/{teammate_id}/private_inboxes` · `create-teammate-private-inbox`</sub>

## `front.listTeamInboxes`

List team inboxes — [Provider docs](https://community.front.com)

```ts
front.listTeamInboxes(input: {
  /** The team ID */
  team_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (InboxResponse)[] }>
```

<sub>`GET /teams/{team_id}/inboxes` · `list-team-inboxes`</sub>

## `front.createTeamInbox`

Create team inbox — [Provider docs](https://community.front.com)

```ts
front.createTeamInbox(input: {
  /** The name of the inbox */
  name: string;
  /** An array of teammate IDs that should have access to the inbox. Alternatively, you can supply teammate emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_ids?: (ResourceId)[];
  /** Whether the inbox is public or not */
  is_public?: boolean;
  /** Custom fields for this inbox */
  custom_fields?: CustomFieldParameter;
  /** The team ID */
  team_id: string;
}): Promise<InboxResponse>
```

<sub>`POST /teams/{team_id}/inboxes` · `create-team-inbox`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

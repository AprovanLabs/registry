# Teammates

5 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listTeammates`

List teammates — [Provider docs](https://community.front.com)

```ts
front.listTeammates(): Promise<{ _links?: { self?: string }; _results?: (TeammateResponse)[] }>
```

<sub>`GET /teammates` · `list-teammates`</sub>

## `front.getTeammate`

Get teammate — [Provider docs](https://community.front.com)

```ts
front.getTeammate(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<TeammateResponse>
```

<sub>`GET /teammates/{teammate_id}` · `get-teammate`</sub>

## `front.updateTeammate`

Update teammate — [Provider docs](https://community.front.com)

```ts
front.updateTeammate(input: {
  /** New username. It must be unique and can only contains lowercase letters, numbers and underscores. */
  username?: string;
  /** New first name */
  first_name?: string;
  /** New last name */
  last_name?: string;
  /** New availability status */
  is_available?: boolean;
  /** Custom fields for this teammate. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields. */
  custom_fields?: CustomFieldParameter;
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<undefined>
```

<sub>`PATCH /teammates/{teammate_id}` · `update-teammate`</sub>

## `front.listAssignedConversations`

List assigned conversations — [Provider docs](https://community.front.com)

```ts
front.listAssignedConversations(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `trashed`). If ticketing is enabled, this endpoint accepts either `status_categories` (`open`, `waiting`, `resolved`) or `status_ids` as an alternative. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ConversationResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/conversations` · `list-assigned-conversations`</sub>

## `front.listTeammateInboxes`

List teammate inboxes — [Provider docs](https://community.front.com)

```ts
front.listTeammateInboxes(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (InboxResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/inboxes` · `list-teammate-inboxes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

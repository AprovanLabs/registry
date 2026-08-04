# Links

5 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listLinks`

List links — [Provider docs](https://community.front.com)

```ts
front.listLinks(input: {
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `types`, whose value should be a list of link types. Links created via the API have type `web` and links created by application objects have type `app_<uid>`, matching the app UID where the object is configured. There are also types `jira`, `asana`, `monday`, `trello`, and `github`, which correspond to the integrations built by Front. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the links. Only supports `id`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (LinkResponse)[] }>
```

<sub>`GET /links` · `list-links`</sub>

## `front.createLink`

Create link — [Provider docs](https://community.front.com)

```ts
front.createLink(input: {
  /** Name of the link. If none is specified, the external_url is used as a default */
  name?: string;
  /** Underlying identifying url of the link */
  external_url?: string;
  /** The string that application object configurations will match on to update a specific application object. For example, if you've configured an application object to match on ORDER-{Digits}, and you want to specifically update the application objects for ORDER-777 to retrieve the latest information from external systems, send "ORDER-777". Repeat for other specific identifiers, such as "ORDER-435". */
  pattern?: string;
}): Promise<LinkResponse>
```

<sub>`POST /links` · `create-link`</sub>

## `front.getLink`

Get link — [Provider docs](https://community.front.com)

```ts
front.getLink(input: {
  /** The link ID */
  link_id: string;
}): Promise<LinkResponse>
```

<sub>`GET /links/{link_id}` · `get-link`</sub>

## `front.updateALink`

Update a link — [Provider docs](https://community.front.com)

```ts
front.updateALink(input: {
  /** Name of the link */
  name?: string;
  /** The Link ID */
  link_id: string;
}): Promise<undefined>
```

<sub>`PATCH /links/{link_id}` · `update-a-link`</sub>

## `front.listLinkConversations`

List link conversations — [Provider docs](https://community.front.com)

```ts
front.listLinkConversations(input: {
  /** The Link ID */
  link_id: string;
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

<sub>`GET /links/{link_id}/conversations` · `list-link-conversations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

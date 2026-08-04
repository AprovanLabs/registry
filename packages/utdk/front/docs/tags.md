# Tags

14 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listCompanyTags`

List company tags — [Provider docs](https://community.front.com)

```ts
front.listCompanyTags(input: {
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the tags. Only supports `id`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _links?: { self?: string }; _results?: (TagResponse)[] }>
```

<sub>`GET /company/tags` · `list-company-tags`</sub>

## `front.createCompanyTag`

Create company tag — [Provider docs](https://community.front.com)

```ts
front.createCompanyTag(input: {
  /** Name of the tag */
  name: string;
  /** Description of the tag */
  description?: string;
  /** Highlight color of the tag. */
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  /** Whether the tag is visible in conversation lists. */
  is_visible_in_conversation_lists?: boolean;
}): Promise<TagResponse>
```

<sub>`POST /company/tags` · `create-company-tag`</sub>

## `front.listTags`

List tags — [Provider docs](https://community.front.com)

```ts
front.listTags(input: {
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the tags. Only supports `id`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _links?: { self?: string }; _results?: (TagResponse)[] }>
```

<sub>`GET /tags` · `list-tags`</sub>

## `front.createTag`

Create tag — [Provider docs](https://community.front.com)

```ts
front.createTag(input: {
  /** Name of the tag */
  name: string;
  /** Description of the tag */
  description?: string;
  /** Highlight color of the tag. */
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  /** Whether the tag is visible in conversation lists. */
  is_visible_in_conversation_lists?: boolean;
}): Promise<TagResponse>
```

<sub>`POST /tags` · `create-tag`</sub>

## `front.deleteTag`

Delete tag — [Provider docs](https://community.front.com)

```ts
front.deleteTag(input: {
  /** The ID of the tag to delete */
  tag_id: string;
}): Promise<undefined>
```

<sub>`DELETE /tags/{tag_id}` · `delete-tag`</sub>

## `front.getTag`

Get tag — [Provider docs](https://community.front.com)

```ts
front.getTag(input: {
  /** The tag ID */
  tag_id: string;
}): Promise<TagResponse>
```

<sub>`GET /tags/{tag_id}` · `get-tag`</sub>

## `front.updateATag`

Update a tag — [Provider docs](https://community.front.com)

```ts
front.updateATag(input: {
  /** Name of the tag */
  name?: string;
  /** Description of the tag */
  description?: string;
  /** Highlight color of the tag. */
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  /** ID of the parent of this tag. Set to `null` to remove  the parent tag. */
  parent_tag_id?: string;
  /** Whether the tag is visible in conversation lists. */
  is_visible_in_conversation_lists?: boolean;
  /** The tag ID */
  tag_id: string;
}): Promise<undefined>
```

<sub>`PATCH /tags/{tag_id}` · `update-a-tag`</sub>

## `front.listTagChildren`

List tag children — [Provider docs](https://community.front.com)

```ts
front.listTagChildren(input: {
  /** The tag ID */
  tag_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TagResponse)[] }>
```

<sub>`GET /tags/{tag_id}/children` · `list-tag-children`</sub>

## `front.createChildTag`

Create child tag — [Provider docs](https://community.front.com)

```ts
front.createChildTag(input: {
  /** Name of the tag */
  name: string;
  /** Description of the tag */
  description?: string;
  /** Highlight color of the tag. */
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  /** Whether the tag is visible in conversation lists. */
  is_visible_in_conversation_lists?: boolean;
  /** The tag ID */
  tag_id: string;
}): Promise<TagResponse>
```

<sub>`POST /tags/{tag_id}/children` · `create-child-tag`</sub>

## `front.listTaggedConversations`

List tagged conversations — [Provider docs](https://community.front.com)

```ts
front.listTaggedConversations(input: {
  /** The ID of the tag */
  tag_id: string;
  /** [Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `trashed`). If ticketing is enabled, this endpoint accepts either `status_categories` (`open`, `waiting`, `resolved`) or `status_ids` as an alternative. */
  q?: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
}): Promise<{ _pagination?: { next?: string | null }; _links?: { self?: string }; _results?: (ConversationResponse)[] }>
```

<sub>`GET /tags/{tag_id}/conversations` · `list-tagged-conversations`</sub>

## `front.listTeammateTags`

List teammate tags — [Provider docs](https://community.front.com)

```ts
front.listTeammateTags(input: {
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the tags. Only supports `id`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _links?: { self?: string }; _results?: (TagResponse)[] }>
```

<sub>`GET /teammates/{teammate_id}/tags` · `list-teammate-tags`</sub>

## `front.createTeammateTag`

Create teammate tag — [Provider docs](https://community.front.com)

```ts
front.createTeammateTag(input: {
  /** Name of the tag */
  name: string;
  /** Description of the tag */
  description?: string;
  /** Highlight color of the tag. */
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  /** Whether the tag is visible in conversation lists. */
  is_visible_in_conversation_lists?: boolean;
  /** The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). */
  teammate_id: string;
}): Promise<TagResponse>
```

<sub>`POST /teammates/{teammate_id}/tags` · `create-teammate-tag`</sub>

## `front.listTeamTags`

List team tags — [Provider docs](https://community.front.com)

```ts
front.listTeamTags(input: {
  /** The team ID */
  team_id: string;
  /** Max number of results per [page](https://dev.frontapp.com/docs/pagination) */
  limit?: number;
  /** Token to use to request the [next page](https://dev.frontapp.com/docs/pagination) */
  page_token?: string;
  /** Field used to sort the tags. Only supports `id`. */
  sort_by?: string;
  /** Order by which results should be sorted */
  sort_order?: "asc" | "desc";
}): Promise<{ _links?: { self?: string }; _results?: (TagResponse)[] }>
```

<sub>`GET /teams/{team_id}/tags` · `list-team-tags`</sub>

## `front.createTeamTag`

Create team tag — [Provider docs](https://community.front.com)

```ts
front.createTeamTag(input: {
  /** Name of the tag */
  name: string;
  /** Description of the tag */
  description?: string;
  /** Highlight color of the tag. */
  highlight?: "grey" | "pink" | "red" | "orange" | "yellow" | "green" | "light-blue" | "blue" | "purple";
  /** Whether the tag is visible in conversation lists. */
  is_visible_in_conversation_lists?: boolean;
  /** The team ID */
  team_id: string;
}): Promise<TagResponse>
```

<sub>`POST /teams/{team_id}/tags` · `create-team-tag`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

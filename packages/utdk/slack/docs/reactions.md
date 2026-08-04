# Reactions

4 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.reactionsAdd`

Adds a reaction to an item. — [API reference](https://api.slack.com/methods/reactions.add)

```ts
slack.reactionsAdd(input: {
  /** Channel where the message to add reaction to was posted. */
  channel: string;
  /** Reaction (emoji) name. */
  name: string;
  /** Timestamp of the message to add reaction to. */
  timestamp: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /reactions.add` · `reactions_add`</sub>

## `slack.reactionsGet`

Gets reactions for an item. — [API reference](https://api.slack.com/methods/reactions.get)

```ts
slack.reactionsGet(input: {
  /** Authentication token. Requires scope: `reactions:read` */
  token: string;
  /** Channel where the message to get reactions for was posted. */
  channel?: string;
  /** File to get reactions for. */
  file?: string;
  /** File comment to get reactions for. */
  file_comment?: string;
  /** If true always return the complete reaction list. */
  full?: boolean;
  /** Timestamp of the message to get reactions for. */
  timestamp?: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`GET /reactions.get` · `reactions_get`</sub>

## `slack.reactionsList`

Lists reactions made by a user. — [API reference](https://api.slack.com/methods/reactions.list)

```ts
slack.reactionsList(input: {
  /** Authentication token. Requires scope: `reactions:read` */
  token: string;
  /** Show reactions made by this user. Defaults to the authed user. */
  user?: string;
  /** If true always return the complete reaction list. */
  full?: boolean;
  count?: number;
  page?: number;
  /** Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details. */
  cursor?: string;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. */
  limit?: number;
}): Promise<{ items: (unknown)[]; ok: DefsOkTrue; paging?: ObjsPaging; response_metadata?: ObjsResponseMetadata }>
```

<sub>`GET /reactions.list` · `reactions_list`</sub>

## `slack.reactionsRemove`

Removes a reaction from an item. — [API reference](https://api.slack.com/methods/reactions.remove)

```ts
slack.reactionsRemove(input: {
  /** Channel where the message to remove reaction from was posted. */
  channel?: string;
  /** File to remove reaction from. */
  file?: string;
  /** File comment to remove reaction from. */
  file_comment?: string;
  /** Reaction (emoji) name. */
  name: string;
  /** Timestamp of the message to remove reaction from. */
  timestamp?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /reactions.remove` · `reactions_remove`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

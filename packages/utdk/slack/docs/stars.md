# Stars

3 operations · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.starsAdd`

Adds a star to an item. — [API reference](https://api.slack.com/methods/stars.add)

```ts
slack.starsAdd(input: {
  /** Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`). */
  channel?: string;
  /** File to add star to. */
  file?: string;
  /** File comment to add star to. */
  file_comment?: string;
  /** Timestamp of the message to add star to. */
  timestamp?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /stars.add` · `stars_add`</sub>

## `slack.starsList`

Lists stars for a user. — [API reference](https://api.slack.com/methods/stars.list)

```ts
slack.starsList(input: {
  /** Authentication token. Requires scope: `stars:read` */
  token?: string;
  count?: string;
  page?: string;
  /** Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details. */
  cursor?: string;
  /** The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. */
  limit?: number;
}): Promise<{ items: (unknown)[]; ok: DefsOkTrue; paging?: ObjsPaging }>
```

<sub>`GET /stars.list` · `stars_list`</sub>

## `slack.starsRemove`

Removes a star from an item. — [API reference](https://api.slack.com/methods/stars.remove)

```ts
slack.starsRemove(input: {
  /** Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`). */
  channel?: string;
  /** File to remove star from. */
  file?: string;
  /** File comment to remove star from. */
  file_comment?: string;
  /** Timestamp of the message to remove star from. */
  timestamp?: string;
}, options: { headers: { token: string } }): Promise<{ ok: DefsOkTrue }>
```

<sub>`POST /stars.remove` · `stars_remove`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

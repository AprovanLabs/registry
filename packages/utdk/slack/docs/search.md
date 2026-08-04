# Search

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.searchMessages`

Searches for messages matching a query. — [API reference](https://api.slack.com/methods/search.messages)

```ts
slack.searchMessages(input: {
  /** Authentication token. Requires scope: `search:read` */
  token: string;
  /** Pass the number of results you want per "page". Maximum of `100`. */
  count?: number;
  /** Pass a value of `true` to enable query highlight markers (see below). */
  highlight?: boolean;
  page?: number;
  /** Search query. */
  query: string;
  /** Return matches sorted by either `score` or `timestamp`. */
  sort?: string;
  /** Change sort direction to ascending (`asc`) or descending (`desc`). */
  sort_dir?: string;
}): Promise<{ ok: DefsOkTrue; [key: string]: unknown }>
```

<sub>`GET /search.messages` · `search_messages`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

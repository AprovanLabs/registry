# Search

1 operation · `@utdk/zendesk`

```ts
import zendesk from "@utdk/zendesk";
```

## `zendesk.search`

Search Zendesk — [Provider docs](https://developer.zendesk.com/api-reference)

```ts
zendesk.search(input: {
  /** Search query using Zendesk search syntax (e.g. 'type:ticket status:open priority:high') */
  query: string;
  /** Field to sort results by */
  sort_by?: string;
  /** Sort direction */
  sort_order?: "asc" | "desc";
  page?: number;
  per_page?: number;
}): Promise<SearchResults>
```

<sub>`GET /search` · `search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

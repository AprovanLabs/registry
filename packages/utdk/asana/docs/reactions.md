# Reactions

1 operation · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getReactionsOnObject`

Get reactions with an emoji base on an object. — [Provider docs](https://asana.com/support)

```ts
asana.getReactionsOnObject(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Globally unique identifier for object to fetch reactions from. Must be a GID for a status update or story. */
  target: string;
  /** Only return reactions with this emoji base character. */
  emoji_base: string;
}): Promise<{ data?: (ReactionCompact)[]; next_page?: NextPage }>
```

<sub>`GET /reactions` · `getReactionsOnObject`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

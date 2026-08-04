# Search

1 operation · `@utdk/hubspot`

```ts
import hubspot from "@utdk/hubspot";
```

## `hubspot.post.crm.v3.objects.contacts.searchDoSearch`

Search for contacts

```ts
hubspot.post.crm.v3.objects.contacts.searchDoSearch(input: {
  /** A paging cursor token for retrieving subsequent pages. */
  after: string;
  /** Up to 6 groups of filters defining additional query criteria. */
  filterGroups: (FilterGroup)[];
  /** The maximum results to return, up to 200 objects. */
  limit: number;
  /** A list of property names to include in the response. */
  properties: (string)[];
  /** The search query string, up to 3000 characters. */
  query?: string;
  /** Specifies sorting order based on object properties. */
  sorts: (string)[];
}): Promise<CollectionResponseWithTotalSimplePublicObject>
```

<sub>`POST /crm/v3/objects/contacts/search` · `post-/crm/v3/objects/contacts/search_doSearch`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

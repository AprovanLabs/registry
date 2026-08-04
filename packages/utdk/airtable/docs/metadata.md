# Metadata

2 operations · `@utdk/airtable`

```ts
import airtable from "@utdk/airtable";
```

## `airtable.listBases`

List bases — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.listBases(input: {
  /** Pagination offset for fetching the next page */
  offset?: string;
}): Promise<BaseList>
```

<sub>`GET /meta/bases` · `listBases`</sub>

## `airtable.listTables`

List tables in a base — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.listTables(input: {
  /** The Airtable base ID */
  baseId: string;
}): Promise<TableList>
```

<sub>`GET /meta/bases/{baseId}/tables` · `listTables`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

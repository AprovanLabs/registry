# Query

3 operations · `@utdk/salesforce`

```ts
import salesforce from "@utdk/salesforce";
```

## `salesforce.query`

Execute a SOQL query — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.query(input: {
  /** The SOQL query string (e.g. 'SELECT Id, Name FROM Account WHERE CreatedDate = TODAY') */
  q: string;
}): Promise<QueryResult>
```

<sub>`GET /query` · `query`</sub>

## `salesforce.queryMore`

Get next page of query results — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.queryMore(input: {
  /** The query locator identifier from the nextRecordsUrl */
  queryLocator: string;
}): Promise<QueryResult>
```

<sub>`GET /query/{queryLocator}` · `queryMore`</sub>

## `salesforce.search`

Execute a SOSL search — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.search(input: {
  /** The SOSL search string (e.g. 'FIND {Acme} IN ALL FIELDS RETURNING Account, Contact') */
  q: string;
}): Promise<SearchResult>
```

<sub>`GET /search` · `search`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Records

4 operations · `@utdk/salesforce`

```ts
import salesforce from "@utdk/salesforce";
```

## `salesforce.createRecord`

Create a record — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.createRecord(input: {
  /** Field values for the new record */
  body: { [key: string]: unknown };
  /** API name of the Salesforce object */
  sObjectName: string;
}): Promise<CreateResponse>
```

<sub>`POST /sobjects/{sObjectName}` · `createRecord`</sub>

## `salesforce.deleteRecord`

Delete a record — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.deleteRecord(input: {
  /** API name of the Salesforce object */
  sObjectName: string;
  /** Salesforce record ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /sobjects/{sObjectName}/{id}` · `deleteRecord`</sub>

## `salesforce.getRecord`

Get a record — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.getRecord(input: {
  /** API name of the Salesforce object */
  sObjectName: string;
  /** Salesforce record ID (15 or 18 character ID) */
  id: string;
  /** Comma-separated list of fields to return */
  fields?: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`GET /sobjects/{sObjectName}/{id}` · `getRecord`</sub>

## `salesforce.updateRecord`

Update a record — [Provider docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)

```ts
salesforce.updateRecord(input: {
  /** Field values to update */
  body: { [key: string]: unknown };
  /** API name of the Salesforce object */
  sObjectName: string;
  /** Salesforce record ID */
  id: string;
}): Promise<undefined>
```

<sub>`PATCH /sobjects/{sObjectName}/{id}` · `updateRecord`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

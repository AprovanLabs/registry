# Records

7 operations · `@utdk/airtable`

```ts
import airtable from "@utdk/airtable";
```

## `airtable.deleteRecords`

Delete records — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.deleteRecords(input: {
  /** The Airtable base ID */
  baseId: string;
  /** The table ID or name */
  tableIdOrName: string;
  /** Record IDs to delete */
  "records[]": (string)[];
}): Promise<DeleteRecordsResponse>
```

<sub>`DELETE /{baseId}/{tableIdOrName}` · `deleteRecords`</sub>

## `airtable.listRecords`

List records — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.listRecords(input: {
  /** The Airtable base ID (starts with 'app') */
  baseId: string;
  /** The table ID (starts with 'tbl') or table name */
  tableIdOrName: string;
  /** Field names to include in the response. If not specified, all fields are returned. */
  "fields[]"?: (string)[];
  /** An Airtable formula to filter records (e.g. '{Status}="Done"') */
  filterByFormula?: string;
  /** Maximum number of records to return (max 100) */
  maxRecords?: number;
  /** Number of records per page (default 100, max 100) */
  pageSize?: number;
  /** Pagination offset string returned from a previous request */
  offset?: string;
  /** Name or ID of a view to filter and sort records */
  view?: string;
  /** Field name to sort by */
  "sort[0][field]"?: string;
  /** Sort direction */
  "sort[0][direction]"?: "asc" | "desc";
}): Promise<RecordList>
```

<sub>`GET /{baseId}/{tableIdOrName}` · `listRecords`</sub>

## `airtable.updateRecords`

Update multiple records — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.updateRecords(input: {
  records?: ({ id: string; fields?: { [key: string]: unknown } })[];
  /** The Airtable base ID */
  baseId: string;
  /** The table ID or name */
  tableIdOrName: string;
}): Promise<UpdateRecordsResponse>
```

<sub>`PATCH /{baseId}/{tableIdOrName}` · `updateRecords`</sub>

## `airtable.createRecord`

Create a record — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.createRecord(input: {
  /** Array of records to create (max 10) */
  records?: ({ fields?: { [key: string]: unknown } })[];
  /** Automatically convert string values to the appropriate field type */
  typecast?: boolean;
  /** Return field keys as field IDs instead of names */
  returnFieldsByFieldId?: boolean;
  /** The Airtable base ID */
  baseId: string;
  /** The table ID or name */
  tableIdOrName: string;
}): Promise<CreateRecordsResponse>
```

<sub>`POST /{baseId}/{tableIdOrName}` · `createRecord`</sub>

## `airtable.deleteRecord`

Delete a record — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.deleteRecord(input: {
  /** The Airtable base ID */
  baseId: string;
  /** The table ID or name */
  tableIdOrName: string;
  /** The record ID to delete */
  recordId: string;
}): Promise<DeleteRecordResponse>
```

<sub>`DELETE /{baseId}/{tableIdOrName}/{recordId}` · `deleteRecord`</sub>

## `airtable.getRecord`

Get a record — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.getRecord(input: {
  /** The Airtable base ID */
  baseId: string;
  /** The table ID or name */
  tableIdOrName: string;
  /** The record ID (starts with 'rec') */
  recordId: string;
}): Promise<Record>
```

<sub>`GET /{baseId}/{tableIdOrName}/{recordId}` · `getRecord`</sub>

## `airtable.replaceRecord`

Replace a record — [Provider docs](https://airtable.com/developers/web/api/introduction)

```ts
airtable.replaceRecord(input: {
  /** Fields to update */
  fields?: { [key: string]: unknown };
  /** The Airtable base ID */
  baseId: string;
  /** The table ID or name */
  tableIdOrName: string;
  /** The record ID */
  recordId: string;
}): Promise<Record>
```

<sub>`PUT /{baseId}/{tableIdOrName}/{recordId}` · `replaceRecord`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

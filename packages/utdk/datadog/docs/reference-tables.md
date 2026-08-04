# Reference Tables

11 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.batchRowsQuery`

Batch rows query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.batchRowsQuery(input: {
  data?: BatchRowsQueryRequestData;
}): Promise<BatchRowsQueryResponse>
```

<sub>`POST /api/v2/reference-tables/queries/batch-rows` · `BatchRowsQuery`</sub>

## `datadog.listTables`

List tables — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTables(input: {
  /** Number of tables to return. */
  "page[limit]"?: number;
  /** Number of tables to skip for pagination. */
  "page[offset]"?: number;
  sort?: ReferenceTableSortType;
  /** Filter by table status. */
  "filter[status]"?: string;
  /** Filter by exact table name match. */
  "filter[table_name][exact]"?: string;
  /** Filter by table name containing substring. */
  "filter[table_name][contains]"?: string;
}): Promise<TableResultV2Array>
```

<sub>`GET /api/v2/reference-tables/tables` · `ListTables`</sub>

## `datadog.createReferenceTable`

Create reference table — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createReferenceTable(input: {
  data?: CreateTableRequestData;
}): Promise<TableResultV2>
```

<sub>`POST /api/v2/reference-tables/tables` · `CreateReferenceTable`</sub>

## `datadog.deleteTable`

Delete table — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTable(input: {
  /** Unique identifier of the reference table to delete */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/reference-tables/tables/{id}` · `DeleteTable`</sub>

## `datadog.getTable`

Get table — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTable(input: {
  /** Unique identifier of the reference table to retrieve */
  id: string;
}): Promise<TableResultV2>
```

<sub>`GET /api/v2/reference-tables/tables/{id}` · `GetTable`</sub>

## `datadog.updateReferenceTable`

Update reference table — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateReferenceTable(input: {
  data?: PatchTableRequestData;
  /** Unique identifier of the reference table to update */
  id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/reference-tables/tables/{id}` · `UpdateReferenceTable`</sub>

## `datadog.deleteRows`

Delete rows — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteRows(input: {
  /** List of row resources to delete from the reference table. */
  data: (TableRowResourceIdentifier)[];
  /** Unique identifier of the reference table to delete rows from */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/reference-tables/tables/{id}/rows` · `DeleteRows`</sub>

## `datadog.getRowsById`

Get rows by id — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getRowsById(input: {
  /** Unique identifier of the reference table to get rows from */
  id: string;
  /** List of row IDs (primary key values) to retrieve from the reference table. */
  row_id: (string)[];
}): Promise<TableRowResourceArray>
```

<sub>`GET /api/v2/reference-tables/tables/{id}/rows` · `GetRowsByID`</sub>

## `datadog.upsertRows`

Upsert rows — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertRows(input: {
  /** List of row resources to create or update in the reference table. */
  data: (BatchUpsertRowsRequestData)[];
  /** Unique identifier of the reference table to upsert rows into */
  id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/reference-tables/tables/{id}/rows` · `UpsertRows`</sub>

## `datadog.listReferenceTableRows`

List rows — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listReferenceTableRows(input: {
  /** Unique identifier of the reference table to list rows from. */
  id: string;
  /** Number of rows to return per page. Defaults to 100, maximum is 1000. */
  "page[limit]"?: number;
  /** Opaque cursor from the previous response's next link. Pass this to retrieve the next page on the same consistent snapshot. */
  "page[continuation_token]"?: string;
}): Promise<ListRowsResponse>
```

<sub>`GET /api/v2/reference-tables/tables/{id}/rows/list` · `ListReferenceTableRows`</sub>

## `datadog.createReferenceTableUpload`

Create reference table upload — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createReferenceTableUpload(input: {
  data?: CreateUploadRequestData;
}): Promise<CreateUploadResponse>
```

<sub>`POST /api/v2/reference-tables/uploads` · `CreateReferenceTableUpload`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# DDSQL

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.executeDdsqlTabularQuery`

Execute a tabular DDSQL query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.executeDdsqlTabularQuery(input: {
  data: DdsqlTabularQueryRequestData;
}): Promise<DdsqlTabularQueryResponse>
```

<sub>`POST /api/v2/ddsql/query/tabular` · `ExecuteDdsqlTabularQuery`</sub>

## `datadog.fetchDdsqlTabularQuery`

Fetch the result of a DDSQL query — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.fetchDdsqlTabularQuery(input: {
  data: DdsqlTabularQueryFetchRequestData;
}): Promise<DdsqlTabularQueryResponse>
```

<sub>`POST /api/v2/ddsql/query/tabular/fetch` · `FetchDdsqlTabularQuery`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

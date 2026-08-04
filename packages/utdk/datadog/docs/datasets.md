# Datasets

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getAllDatasets`

Get all datasets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getAllDatasets(): Promise<DatasetResponseMulti>
```

<sub>`GET /api/v2/datasets` · `GetAllDatasets`</sub>

## `datadog.createDataset`

Create a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createDataset(input: {
  data: DatasetRequest;
}): Promise<DatasetResponseSingle>
```

<sub>`POST /api/v2/datasets` · `CreateDataset`</sub>

## `datadog.deleteDataset`

Delete a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteDataset(input: {
  /** The ID of a defined dataset. */
  dataset_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/datasets/{dataset_id}` · `DeleteDataset`</sub>

## `datadog.getDataset`

Get a single dataset by ID — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getDataset(input: {
  /** The ID of a defined dataset. */
  dataset_id: string;
}): Promise<DatasetResponseSingle>
```

<sub>`GET /api/v2/datasets/{dataset_id}` · `GetDataset`</sub>

## `datadog.updateDataset`

Edit a dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateDataset(input: {
  data: DatasetRequest;
  /** The ID of a defined dataset. */
  dataset_id: string;
}): Promise<DatasetResponseSingle>
```

<sub>`PUT /api/v2/datasets/{dataset_id}` · `UpdateDataset`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

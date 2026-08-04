# APM Retention Filters

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listApmRetentionFilters`

List all APM retention filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApmRetentionFilters(): Promise<RetentionFiltersResponse>
```

<sub>`GET /api/v2/apm/config/retention-filters` · `ListApmRetentionFilters`</sub>

## `datadog.createApmRetentionFilter`

Create a retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createApmRetentionFilter(input: {
  data: RetentionFilterCreateData;
}): Promise<RetentionFilterCreateResponse>
```

<sub>`POST /api/v2/apm/config/retention-filters` · `CreateApmRetentionFilter`</sub>

## `datadog.reorderApmRetentionFilters`

Re-order retention filters — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.reorderApmRetentionFilters(input: {
  /** A list of retention filters objects. */
  data: (RetentionFilterWithoutAttributes)[];
}): Promise<undefined>
```

<sub>`PUT /api/v2/apm/config/retention-filters-execution-order` · `ReorderApmRetentionFilters`</sub>

## `datadog.deleteApmRetentionFilter`

Delete a retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApmRetentionFilter(input: {
  /** The ID of the retention filter. */
  filter_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/apm/config/retention-filters/{filter_id}` · `DeleteApmRetentionFilter`</sub>

## `datadog.getApmRetentionFilter`

Get a given APM retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApmRetentionFilter(input: {
  /** The ID of the retention filter. */
  filter_id: string;
}): Promise<RetentionFilterResponse>
```

<sub>`GET /api/v2/apm/config/retention-filters/{filter_id}` · `GetApmRetentionFilter`</sub>

## `datadog.updateApmRetentionFilter`

Update a retention filter — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApmRetentionFilter(input: {
  data: RetentionFilterUpdateData;
  /** The ID of the retention filter. */
  filter_id: string;
}): Promise<RetentionFilterResponse>
```

<sub>`PUT /api/v2/apm/config/retention-filters/{filter_id}` · `UpdateApmRetentionFilter`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

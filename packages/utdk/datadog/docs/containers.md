# Containers

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listContainers`

Get All Containers — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listContainers(input: {
  /** Comma-separated list of tags to filter containers by. */
  "filter[tags]"?: string;
  /** Comma-separated list of tags to group containers by. */
  group_by?: string;
  /** Attribute to sort containers by. */
  sort?: string;
  /** Maximum number of results returned. */
  "page[size]"?: number;
  /** String to query the next page of results. This key is provided with each valid response from the API in `meta.pagination.next_cursor`. */
  "page[cursor]"?: string;
}): Promise<ContainersResponse>
```

<sub>`GET /api/v2/containers` · `ListContainers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

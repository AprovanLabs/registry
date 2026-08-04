# Exports

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.createGraphExport`

Initiate a graph export — [Provider docs](https://asana.com/support)

```ts
asana.createGraphExport(input: {
  data?: GraphExportRequest;
}): Promise<{ data?: GraphExportResponse }>
```

<sub>`POST /exports/graph` · `createGraphExport`</sub>

## `asana.createResourceExport`

Initiate a resource export — [Provider docs](https://asana.com/support)

```ts
asana.createResourceExport(input: {
  data?: ResourceExportRequest;
}): Promise<{ data?: ResourceExportResponse }>
```

<sub>`POST /exports/resource` · `createResourceExport`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

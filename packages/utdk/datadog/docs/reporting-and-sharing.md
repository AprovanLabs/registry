# Reporting And Sharing

1 operation · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createSnapshot`

Create a graph snapshot — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSnapshot(input: {
  data: CreateSnapshotDataRequest;
}): Promise<CreateSnapshotResponse>
```

<sub>`POST /api/v2/snapshot` · `CreateSnapshot`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

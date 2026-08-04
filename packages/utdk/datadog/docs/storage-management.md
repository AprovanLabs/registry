# Storage Management

2 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.upsertSyncConfig`

Enable Storage Management for a bucket — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertSyncConfig(input: {
  data: UpsertCloudInventorySyncConfigRequestData;
}): Promise<CloudInventorySyncConfigResponse>
```

<sub>`PUT /api/v2/cloudinventoryservice/syncconfigs` · `UpsertSyncConfig`</sub>

## `datadog.deleteSyncConfig`

Delete a Storage Management configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSyncConfig(input: {
  /** Unique identifier of the Storage Management configuration. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cloudinventoryservice/syncconfigs/{id}` · `DeleteSyncConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

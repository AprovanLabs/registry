# Org Connections

4 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listOrgConnections`

List Org Connections — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOrgConnections(input: {
  /** The Org ID of the sink org. */
  sink_org_id?: string;
  /** The Org ID of the source org. */
  source_org_id?: string;
  /** The limit of number of entries you want to return. Default is 1000. */
  limit?: number;
  /** The pagination offset which you want to query from. Default is 0. */
  offset?: number;
}): Promise<OrgConnectionListResponse>
```

<sub>`GET /api/v2/org_connections` · `ListOrgConnections`</sub>

## `datadog.createOrgConnections`

Create Org Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOrgConnections(input: {
  data: OrgConnectionCreate;
}): Promise<OrgConnectionResponse>
```

<sub>`POST /api/v2/org_connections` · `CreateOrgConnections`</sub>

## `datadog.deleteOrgConnections`

Delete Org Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOrgConnections(input: {
  /** The unique identifier of the org connection. */
  connection_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/org_connections/{connection_id}` · `DeleteOrgConnections`</sub>

## `datadog.updateOrgConnections`

Update Org Connection — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOrgConnections(input: {
  data: OrgConnectionUpdate;
  /** The unique identifier of the org connection. */
  connection_id: string;
}): Promise<OrgConnectionResponse>
```

<sub>`PATCH /api/v2/org_connections/{connection_id}` · `UpdateOrgConnections`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

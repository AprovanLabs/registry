# Logs Archives

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getLogsArchiveOrder`

Get archive order — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLogsArchiveOrder(): Promise<LogsArchiveOrder>
```

<sub>`GET /api/v2/logs/config/archive-order` · `GetLogsArchiveOrder`</sub>

## `datadog.updateLogsArchiveOrder`

Update archive order — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLogsArchiveOrder(input: {
  data?: LogsArchiveOrderDefinition;
}): Promise<LogsArchiveOrder>
```

<sub>`PUT /api/v2/logs/config/archive-order` · `UpdateLogsArchiveOrder`</sub>

## `datadog.listLogsArchives`

Get all archives — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLogsArchives(): Promise<LogsArchives>
```

<sub>`GET /api/v2/logs/config/archives` · `ListLogsArchives`</sub>

## `datadog.createLogsArchive`

Create an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLogsArchive(input: {
  data?: LogsArchiveCreateRequestDefinition;
}): Promise<LogsArchive>
```

<sub>`POST /api/v2/logs/config/archives` · `CreateLogsArchive`</sub>

## `datadog.deleteLogsArchive`

Delete an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLogsArchive(input: {
  /** The ID of the archive. */
  archive_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/logs/config/archives/{archive_id}` · `DeleteLogsArchive`</sub>

## `datadog.getLogsArchive`

Get an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLogsArchive(input: {
  /** The ID of the archive. */
  archive_id: string;
}): Promise<LogsArchive>
```

<sub>`GET /api/v2/logs/config/archives/{archive_id}` · `GetLogsArchive`</sub>

## `datadog.updateLogsArchive`

Update an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLogsArchive(input: {
  data?: LogsArchiveCreateRequestDefinition;
  /** The ID of the archive. */
  archive_id: string;
}): Promise<LogsArchive>
```

<sub>`PUT /api/v2/logs/config/archives/{archive_id}` · `UpdateLogsArchive`</sub>

## `datadog.removeRoleFromArchive`

Revoke role from an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeRoleFromArchive(input: {
  data?: RelationshipToRoleData;
  /** The ID of the archive. */
  archive_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/logs/config/archives/{archive_id}/readers` · `RemoveRoleFromArchive`</sub>

## `datadog.listArchiveReadRoles`

List read roles for an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listArchiveReadRoles(input: {
  /** The ID of the archive. */
  archive_id: string;
}): Promise<RolesResponse>
```

<sub>`GET /api/v2/logs/config/archives/{archive_id}/readers` · `ListArchiveReadRoles`</sub>

## `datadog.addReadRoleToArchive`

Grant role to an archive — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addReadRoleToArchive(input: {
  data?: RelationshipToRoleData;
  /** The ID of the archive. */
  archive_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/logs/config/archives/{archive_id}/readers` · `AddReadRoleToArchive`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

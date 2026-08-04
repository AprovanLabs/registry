# Microsoft Teams Integration

12 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getChannelByName`

Get channel information by name — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getChannelByName(input: {
  /** Your tenant name. */
  tenant_name: string;
  /** Your team name. */
  team_name: string;
  /** Your channel name. */
  channel_name: string;
}): Promise<MicrosoftTeamsGetChannelByNameResponse>
```

<sub>`GET /api/v2/integration/ms-teams/configuration/channel/{tenant_name}/{team_name}/{channel_name}` · `GetChannelByName`</sub>

## `datadog.listTenantBasedHandles`

Get all tenant-based handles — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTenantBasedHandles(input: {
  /** Your tenant id. */
  tenant_id?: string;
  /** Your tenant-based handle name. */
  name?: string;
}): Promise<MicrosoftTeamsTenantBasedHandlesResponse>
```

<sub>`GET /api/v2/integration/ms-teams/configuration/tenant-based-handles` · `ListTenantBasedHandles`</sub>

## `datadog.createTenantBasedHandle`

Create tenant-based handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTenantBasedHandle(input: {
  data: MicrosoftTeamsTenantBasedHandleRequestData;
}): Promise<MicrosoftTeamsTenantBasedHandleResponse>
```

<sub>`POST /api/v2/integration/ms-teams/configuration/tenant-based-handles` · `CreateTenantBasedHandle`</sub>

## `datadog.deleteTenantBasedHandle`

Delete tenant-based handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTenantBasedHandle(input: {
  /** Your tenant-based handle id. */
  handle_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}` · `DeleteTenantBasedHandle`</sub>

## `datadog.getTenantBasedHandle`

Get tenant-based handle information — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTenantBasedHandle(input: {
  /** Your tenant-based handle id. */
  handle_id: string;
}): Promise<MicrosoftTeamsTenantBasedHandleResponse>
```

<sub>`GET /api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}` · `GetTenantBasedHandle`</sub>

## `datadog.updateTenantBasedHandle`

Update tenant-based handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTenantBasedHandle(input: {
  data: MicrosoftTeamsUpdateTenantBasedHandleRequestData;
  /** Your tenant-based handle id. */
  handle_id: string;
}): Promise<MicrosoftTeamsTenantBasedHandleResponse>
```

<sub>`PATCH /api/v2/integration/ms-teams/configuration/tenant-based-handles/{handle_id}` · `UpdateTenantBasedHandle`</sub>

## `datadog.deleteMsTeamsUserBinding`

Delete user binding — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteMsTeamsUserBinding(input: {
  /** Your tenant id. */
  tenant_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/ms-teams/configuration/user-binding/{tenant_id}` · `DeleteMSTeamsUserBinding`</sub>

## `datadog.listWorkflowsWebhookHandles`

Get all Workflows webhook handles — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listWorkflowsWebhookHandles(input: {
  /** Your Workflows webhook handle name. */
  name?: string;
}): Promise<MicrosoftTeamsWorkflowsWebhookHandlesResponse>
```

<sub>`GET /api/v2/integration/ms-teams/configuration/workflows-webhook-handles` · `ListWorkflowsWebhookHandles`</sub>

## `datadog.createWorkflowsWebhookHandle`

Create Workflows webhook handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createWorkflowsWebhookHandle(input: {
  data: MicrosoftTeamsWorkflowsWebhookHandleRequestData;
}): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>
```

<sub>`POST /api/v2/integration/ms-teams/configuration/workflows-webhook-handles` · `CreateWorkflowsWebhookHandle`</sub>

## `datadog.deleteWorkflowsWebhookHandle`

Delete Workflows webhook handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteWorkflowsWebhookHandle(input: {
  /** Your Workflows webhook handle id. */
  handle_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}` · `DeleteWorkflowsWebhookHandle`</sub>

## `datadog.getWorkflowsWebhookHandle`

Get Workflows webhook handle information — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getWorkflowsWebhookHandle(input: {
  /** Your Workflows webhook handle id. */
  handle_id: string;
}): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>
```

<sub>`GET /api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}` · `GetWorkflowsWebhookHandle`</sub>

## `datadog.updateWorkflowsWebhookHandle`

Update Workflows webhook handle — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateWorkflowsWebhookHandle(input: {
  data: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData;
  /** Your Workflows webhook handle id. */
  handle_id: string;
}): Promise<MicrosoftTeamsWorkflowsWebhookHandleResponse>
```

<sub>`PATCH /api/v2/integration/ms-teams/configuration/workflows-webhook-handles/{handle_id}` · `UpdateWorkflowsWebhookHandle`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Opsgenie Integration

9 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listOpsgenieAccounts`

Get all Opsgenie accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOpsgenieAccounts(): Promise<OpsgenieAccountsResponse>
```

<sub>`GET /api/v2/integration/opsgenie/accounts` · `ListOpsgenieAccounts`</sub>

## `datadog.createOpsgenieAccount`

Create a new Opsgenie account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOpsgenieAccount(input: {
  data: OpsgenieAccountCreateData;
}): Promise<OpsgenieAccountResponse>
```

<sub>`POST /api/v2/integration/opsgenie/accounts` · `CreateOpsgenieAccount`</sub>

## `datadog.deleteOpsgenieAccount`

Delete an Opsgenie account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOpsgenieAccount(input: {
  /** The UUID of the Opsgenie account. */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/opsgenie/accounts/{account_id}` · `DeleteOpsgenieAccount`</sub>

## `datadog.updateOpsgenieAccount`

Update an Opsgenie account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOpsgenieAccount(input: {
  data: OpsgenieAccountUpdateData;
  /** The UUID of the Opsgenie account. */
  account_id: string;
}): Promise<OpsgenieAccountResponse>
```

<sub>`PATCH /api/v2/integration/opsgenie/accounts/{account_id}` · `UpdateOpsgenieAccount`</sub>

## `datadog.listOpsgenieServices`

Get all service objects — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listOpsgenieServices(): Promise<OpsgenieServicesResponse>
```

<sub>`GET /api/v2/integration/opsgenie/services` · `ListOpsgenieServices`</sub>

## `datadog.createOpsgenieService`

Create a new service object — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createOpsgenieService(input: {
  data: OpsgenieServiceCreateData;
}): Promise<OpsgenieServiceResponse>
```

<sub>`POST /api/v2/integration/opsgenie/services` · `CreateOpsgenieService`</sub>

## `datadog.deleteOpsgenieService`

Delete a single service object — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteOpsgenieService(input: {
  /** The UUID of the service. */
  integration_service_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/opsgenie/services/{integration_service_id}` · `DeleteOpsgenieService`</sub>

## `datadog.getOpsgenieService`

Get a single service object — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOpsgenieService(input: {
  /** The UUID of the service. */
  integration_service_id: string;
}): Promise<OpsgenieServiceResponse>
```

<sub>`GET /api/v2/integration/opsgenie/services/{integration_service_id}` · `GetOpsgenieService`</sub>

## `datadog.updateOpsgenieService`

Update a single service object — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateOpsgenieService(input: {
  data: OpsgenieServiceUpdateData;
  /** The UUID of the service. */
  integration_service_id: string;
}): Promise<OpsgenieServiceResponse>
```

<sub>`PATCH /api/v2/integration/opsgenie/services/{integration_service_id}` · `UpdateOpsgenieService`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

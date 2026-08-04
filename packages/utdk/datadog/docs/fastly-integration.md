# Fastly Integration

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listFastlyAccounts`

List Fastly accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFastlyAccounts(): Promise<FastlyAccountsResponse>
```

<sub>`GET /api/v2/integrations/fastly/accounts` · `ListFastlyAccounts`</sub>

## `datadog.createFastlyAccount`

Add Fastly account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFastlyAccount(input: {
  data: FastlyAccountCreateRequestData;
}): Promise<FastlyAccountResponse>
```

<sub>`POST /api/v2/integrations/fastly/accounts` · `CreateFastlyAccount`</sub>

## `datadog.deleteFastlyAccount`

Delete Fastly account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteFastlyAccount(input: {
  /** Fastly Account id. */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/fastly/accounts/{account_id}` · `DeleteFastlyAccount`</sub>

## `datadog.getFastlyAccount`

Get Fastly account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFastlyAccount(input: {
  /** Fastly Account id. */
  account_id: string;
}): Promise<FastlyAccountResponse>
```

<sub>`GET /api/v2/integrations/fastly/accounts/{account_id}` · `GetFastlyAccount`</sub>

## `datadog.updateFastlyAccount`

Update Fastly account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFastlyAccount(input: {
  data: FastlyAccountUpdateRequestData;
  /** Fastly Account id. */
  account_id: string;
}): Promise<FastlyAccountResponse>
```

<sub>`PATCH /api/v2/integrations/fastly/accounts/{account_id}` · `UpdateFastlyAccount`</sub>

## `datadog.listFastlyServices`

List Fastly services — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listFastlyServices(input: {
  /** Fastly Account id. */
  account_id: string;
}): Promise<FastlyServicesResponse>
```

<sub>`GET /api/v2/integrations/fastly/accounts/{account_id}/services` · `ListFastlyServices`</sub>

## `datadog.createFastlyService`

Add Fastly service — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createFastlyService(input: {
  data: FastlyServiceData;
  /** Fastly Account id. */
  account_id: string;
}): Promise<FastlyServiceResponse>
```

<sub>`POST /api/v2/integrations/fastly/accounts/{account_id}/services` · `CreateFastlyService`</sub>

## `datadog.deleteFastlyService`

Delete Fastly service — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteFastlyService(input: {
  /** Fastly Account id. */
  account_id: string;
  /** Fastly Service ID. */
  service_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}` · `DeleteFastlyService`</sub>

## `datadog.getFastlyService`

Get Fastly service — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getFastlyService(input: {
  /** Fastly Account id. */
  account_id: string;
  /** Fastly Service ID. */
  service_id: string;
}): Promise<FastlyServiceResponse>
```

<sub>`GET /api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}` · `GetFastlyService`</sub>

## `datadog.updateFastlyService`

Update Fastly service — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateFastlyService(input: {
  data: FastlyServiceData;
  /** Fastly Account id. */
  account_id: string;
  /** Fastly Service ID. */
  service_id: string;
}): Promise<FastlyServiceResponse>
```

<sub>`PATCH /api/v2/integrations/fastly/accounts/{account_id}/services/{service_id}` · `UpdateFastlyService`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Confluent Cloud

10 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listConfluentAccount`

List Confluent accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listConfluentAccount(): Promise<ConfluentAccountsResponse>
```

<sub>`GET /api/v2/integrations/confluent-cloud/accounts` · `ListConfluentAccount`</sub>

## `datadog.createConfluentAccount`

Add Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createConfluentAccount(input: {
  data: ConfluentAccountCreateRequestData;
}): Promise<ConfluentAccountResponse>
```

<sub>`POST /api/v2/integrations/confluent-cloud/accounts` · `CreateConfluentAccount`</sub>

## `datadog.deleteConfluentAccount`

Delete Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteConfluentAccount(input: {
  /** Confluent Account ID. */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/confluent-cloud/accounts/{account_id}` · `DeleteConfluentAccount`</sub>

## `datadog.getConfluentAccount`

Get Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getConfluentAccount(input: {
  /** Confluent Account ID. */
  account_id: string;
}): Promise<ConfluentAccountResponse>
```

<sub>`GET /api/v2/integrations/confluent-cloud/accounts/{account_id}` · `GetConfluentAccount`</sub>

## `datadog.updateConfluentAccount`

Update Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateConfluentAccount(input: {
  data: ConfluentAccountUpdateRequestData;
  /** Confluent Account ID. */
  account_id: string;
}): Promise<ConfluentAccountResponse>
```

<sub>`PATCH /api/v2/integrations/confluent-cloud/accounts/{account_id}` · `UpdateConfluentAccount`</sub>

## `datadog.listConfluentResource`

List Confluent Account resources — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listConfluentResource(input: {
  /** Confluent Account ID. */
  account_id: string;
}): Promise<ConfluentResourcesResponse>
```

<sub>`GET /api/v2/integrations/confluent-cloud/accounts/{account_id}/resources` · `ListConfluentResource`</sub>

## `datadog.createConfluentResource`

Add resource to Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createConfluentResource(input: {
  data: ConfluentResourceRequestData;
  /** Confluent Account ID. */
  account_id: string;
}): Promise<ConfluentResourceResponse>
```

<sub>`POST /api/v2/integrations/confluent-cloud/accounts/{account_id}/resources` · `CreateConfluentResource`</sub>

## `datadog.deleteConfluentResource`

Delete resource from Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteConfluentResource(input: {
  /** Confluent Account ID. */
  account_id: string;
  /** Confluent Account Resource ID. */
  resource_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}` · `DeleteConfluentResource`</sub>

## `datadog.getConfluentResource`

Get resource from Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getConfluentResource(input: {
  /** Confluent Account ID. */
  account_id: string;
  /** Confluent Account Resource ID. */
  resource_id: string;
}): Promise<ConfluentResourceResponse>
```

<sub>`GET /api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}` · `GetConfluentResource`</sub>

## `datadog.updateConfluentResource`

Update resource in Confluent account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateConfluentResource(input: {
  data: ConfluentResourceRequestData;
  /** Confluent Account ID. */
  account_id: string;
  /** Confluent Account Resource ID. */
  resource_id: string;
}): Promise<ConfluentResourceResponse>
```

<sub>`PATCH /api/v2/integrations/confluent-cloud/accounts/{account_id}/resources/{resource_id}` · `UpdateConfluentResource`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

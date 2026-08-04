# GCP Integration

6 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listGcpstsAccounts`

List all GCP STS-enabled service accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listGcpstsAccounts(): Promise<GcpstsServiceAccountsResponse>
```

<sub>`GET /api/v2/integration/gcp/accounts` · `ListGCPSTSAccounts`</sub>

## `datadog.createGcpstsAccount`

Create a new entry for your service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createGcpstsAccount(input: {
  data?: GcpstsServiceAccountData;
}): Promise<GcpstsServiceAccountResponse>
```

<sub>`POST /api/v2/integration/gcp/accounts` · `CreateGCPSTSAccount`</sub>

## `datadog.deleteGcpstsAccount`

Delete an STS enabled GCP Account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteGcpstsAccount(input: {
  /** Your GCP STS enabled service account's unique ID. */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integration/gcp/accounts/{account_id}` · `DeleteGCPSTSAccount`</sub>

## `datadog.updateGcpstsAccount`

Update STS Service Account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateGcpstsAccount(input: {
  data?: GcpstsServiceAccountUpdateRequestData;
  /** Your GCP STS enabled service account's unique ID. */
  account_id: string;
}): Promise<GcpstsServiceAccountResponse>
```

<sub>`PATCH /api/v2/integration/gcp/accounts/{account_id}` · `UpdateGCPSTSAccount`</sub>

## `datadog.getGcpstsDelegate`

List delegate account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getGcpstsDelegate(): Promise<GcpstsDelegateAccountResponse>
```

<sub>`GET /api/v2/integration/gcp/sts_delegate` · `GetGCPSTSDelegate`</sub>

## `datadog.makeGcpstsDelegate`

Create a Datadog GCP principal — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.makeGcpstsDelegate(input: {
  body?: { [key: string]: unknown };
}): Promise<GcpstsDelegateAccountResponse>
```

<sub>`POST /api/v2/integration/gcp/sts_delegate` · `MakeGCPSTSDelegate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Cloudflare Integration

5 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listCloudflareAccounts`

List Cloudflare accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCloudflareAccounts(): Promise<CloudflareAccountsResponse>
```

<sub>`GET /api/v2/integrations/cloudflare/accounts` · `ListCloudflareAccounts`</sub>

## `datadog.createCloudflareAccount`

Add Cloudflare account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCloudflareAccount(input: {
  data: CloudflareAccountCreateRequestData;
}): Promise<CloudflareAccountResponse>
```

<sub>`POST /api/v2/integrations/cloudflare/accounts` · `CreateCloudflareAccount`</sub>

## `datadog.deleteCloudflareAccount`

Delete Cloudflare account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCloudflareAccount(input: {
  /** None */
  account_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/integrations/cloudflare/accounts/{account_id}` · `DeleteCloudflareAccount`</sub>

## `datadog.getCloudflareAccount`

Get Cloudflare account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCloudflareAccount(input: {
  /** None */
  account_id: string;
}): Promise<CloudflareAccountResponse>
```

<sub>`GET /api/v2/integrations/cloudflare/accounts/{account_id}` · `GetCloudflareAccount`</sub>

## `datadog.updateCloudflareAccount`

Update Cloudflare account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCloudflareAccount(input: {
  data: CloudflareAccountUpdateRequestData;
  /** None */
  account_id: string;
}): Promise<CloudflareAccountResponse>
```

<sub>`PATCH /api/v2/integrations/cloudflare/accounts/{account_id}` · `UpdateCloudflareAccount`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Service Accounts

11 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.createServiceAccount`

Create a service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createServiceAccount(input: {
  data: ServiceAccountCreateData;
}): Promise<UserResponse>
```

<sub>`POST /api/v2/service_accounts` · `CreateServiceAccount`</sub>

## `datadog.listServiceAccountAccessTokens`

List access tokens for a service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceAccountAccessTokens(input: {
  /** The ID of the service account. */
  service_account_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: PersonalAccessTokensSort;
  /** Filter access tokens by the specified string. */
  filter?: string;
}): Promise<ListServiceAccessTokensResponse>
```

<sub>`GET /api/v2/service_accounts/{service_account_id}/access_tokens` · `ListServiceAccountAccessTokens`</sub>

## `datadog.createServiceAccountAccessToken`

Create an access token for a service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createServiceAccountAccessToken(input: {
  data: ServiceAccountAccessTokenCreateData;
  /** The ID of the service account. */
  service_account_id: string;
}): Promise<ServiceAccessTokenCreateResponse>
```

<sub>`POST /api/v2/service_accounts/{service_account_id}/access_tokens` · `CreateServiceAccountAccessToken`</sub>

## `datadog.revokeServiceAccountAccessToken`

Revoke an access token for a service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.revokeServiceAccountAccessToken(input: {
  /** The ID of the service account. */
  service_account_id: string;
  /** The ID of the access token. */
  token_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/service_accounts/{service_account_id}/access_tokens/{token_id}` · `RevokeServiceAccountAccessToken`</sub>

## `datadog.getServiceAccountAccessToken`

Get an access token for a service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getServiceAccountAccessToken(input: {
  /** The ID of the service account. */
  service_account_id: string;
  /** The ID of the access token. */
  token_id: string;
}): Promise<ServiceAccessTokenResponse>
```

<sub>`GET /api/v2/service_accounts/{service_account_id}/access_tokens/{token_id}` · `GetServiceAccountAccessToken`</sub>

## `datadog.updateServiceAccountAccessToken`

Update an access token for a service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateServiceAccountAccessToken(input: {
  data: ServiceAccountAccessTokenUpdateData;
  /** The ID of the service account. */
  service_account_id: string;
  /** The ID of the access token. */
  token_id: string;
}): Promise<ServiceAccessTokenResponse>
```

<sub>`PATCH /api/v2/service_accounts/{service_account_id}/access_tokens/{token_id}` · `UpdateServiceAccountAccessToken`</sub>

## `datadog.listServiceAccountApplicationKeys`

List application keys for this service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listServiceAccountApplicationKeys(input: {
  /** The ID of the service account. */
  service_account_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: ApplicationKeysSort;
  /** Filter application keys by the specified string. */
  filter?: string;
  /** Only include application keys created on or after the specified date. */
  "filter[created_at][start]"?: string;
  /** Only include application keys created on or before the specified date. */
  "filter[created_at][end]"?: string;
}): Promise<ListApplicationKeysResponse>
```

<sub>`GET /api/v2/service_accounts/{service_account_id}/application_keys` · `ListServiceAccountApplicationKeys`</sub>

## `datadog.createServiceAccountApplicationKey`

Create an application key for this service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createServiceAccountApplicationKey(input: {
  data: ApplicationKeyCreateData;
  /** The ID of the service account. */
  service_account_id: string;
}): Promise<ApplicationKeyResponse>
```

<sub>`POST /api/v2/service_accounts/{service_account_id}/application_keys` · `CreateServiceAccountApplicationKey`</sub>

## `datadog.deleteServiceAccountApplicationKey`

Delete an application key for this service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteServiceAccountApplicationKey(input: {
  /** The ID of the service account. */
  service_account_id: string;
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}` · `DeleteServiceAccountApplicationKey`</sub>

## `datadog.getServiceAccountApplicationKey`

Get one application key for this service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getServiceAccountApplicationKey(input: {
  /** The ID of the service account. */
  service_account_id: string;
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<PartialApplicationKeyResponse>
```

<sub>`GET /api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}` · `GetServiceAccountApplicationKey`</sub>

## `datadog.updateServiceAccountApplicationKey`

Edit an application key for this service account — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateServiceAccountApplicationKey(input: {
  data: ApplicationKeyUpdateData;
  /** The ID of the service account. */
  service_account_id: string;
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<PartialApplicationKeyResponse>
```

<sub>`PATCH /api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}` · `UpdateServiceAccountApplicationKey`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

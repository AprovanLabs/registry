# Key Management

21 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listApiKeys`

Get all API keys — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApiKeys(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: ApiKeysSort;
  /** Filter API keys by the specified string. */
  filter?: string;
  /** Only include API keys created on or after the specified date. */
  "filter[created_at][start]"?: string;
  /** Only include API keys created on or before the specified date. */
  "filter[created_at][end]"?: string;
  /** Only include API keys modified on or after the specified date. */
  "filter[modified_at][start]"?: string;
  /** Only include API keys modified on or before the specified date. */
  "filter[modified_at][end]"?: string;
  /** Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. */
  include?: string;
  /** Filter API keys by remote config read enabled status. */
  "filter[remote_config_read_enabled]"?: boolean;
  /** Filter API keys by category. */
  "filter[category]"?: string;
}): Promise<ApiKeysResponse>
```

<sub>`GET /api/v2/api_keys` · `ListAPIKeys`</sub>

## `datadog.createApiKey`

Create an API key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createApiKey(input: {
  data: ApiKeyCreateData;
}): Promise<ApiKeyResponse>
```

<sub>`POST /api/v2/api_keys` · `CreateAPIKey`</sub>

## `datadog.deleteApiKey`

Delete an API key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApiKey(input: {
  /** The ID of the API key. */
  api_key_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/api_keys/{api_key_id}` · `DeleteAPIKey`</sub>

## `datadog.getApiKey`

Get API key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApiKey(input: {
  /** The ID of the API key. */
  api_key_id: string;
  /** Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. */
  include?: string;
}): Promise<ApiKeyResponse>
```

<sub>`GET /api/v2/api_keys/{api_key_id}` · `GetAPIKey`</sub>

## `datadog.updateApiKey`

Edit an API key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApiKey(input: {
  data: ApiKeyUpdateData;
  /** The ID of the API key. */
  api_key_id: string;
}): Promise<ApiKeyResponse>
```

<sub>`PATCH /api/v2/api_keys/{api_key_id}` · `UpdateAPIKey`</sub>

## `datadog.listApplicationKeys`

Get all application keys — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listApplicationKeys(input: {
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
  /** Filter application keys by owner ID. */
  "filter[owned_by]"?: string;
  /** Resource path for related resources to include in the response. Only `owned_by` is supported. */
  include?: string;
}): Promise<ListApplicationKeysResponse>
```

<sub>`GET /api/v2/application_keys` · `ListApplicationKeys`</sub>

## `datadog.deleteApplicationKey`

Delete an application key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteApplicationKey(input: {
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/application_keys/{app_key_id}` · `DeleteApplicationKey`</sub>

## `datadog.getApplicationKey`

Get an application key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApplicationKey(input: {
  /** The ID of the application key. */
  app_key_id: string;
  /** Resource path for related resources to include in the response. Only `owned_by` is supported. */
  include?: string;
}): Promise<ApplicationKeyResponse>
```

<sub>`GET /api/v2/application_keys/{app_key_id}` · `GetApplicationKey`</sub>

## `datadog.updateApplicationKey`

Edit an application key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateApplicationKey(input: {
  data: ApplicationKeyUpdateData;
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<ApplicationKeyResponse>
```

<sub>`PATCH /api/v2/application_keys/{app_key_id}` · `UpdateApplicationKey`</sub>

## `datadog.listCurrentUserApplicationKeys`

Get all application keys owned by current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCurrentUserApplicationKeys(input: {
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
  /** Resource path for related resources to include in the response. Only `owned_by` is supported. */
  include?: string;
}): Promise<ListApplicationKeysResponse>
```

<sub>`GET /api/v2/current_user/application_keys` · `ListCurrentUserApplicationKeys`</sub>

## `datadog.createCurrentUserApplicationKey`

Create an application key for current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCurrentUserApplicationKey(input: {
  data: ApplicationKeyCreateData;
}): Promise<ApplicationKeyResponse>
```

<sub>`POST /api/v2/current_user/application_keys` · `CreateCurrentUserApplicationKey`</sub>

## `datadog.deleteCurrentUserApplicationKey`

Delete an application key owned by current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCurrentUserApplicationKey(input: {
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/current_user/application_keys/{app_key_id}` · `DeleteCurrentUserApplicationKey`</sub>

## `datadog.getCurrentUserApplicationKey`

Get one application key owned by current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCurrentUserApplicationKey(input: {
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<ApplicationKeyResponse>
```

<sub>`GET /api/v2/current_user/application_keys/{app_key_id}` · `GetCurrentUserApplicationKey`</sub>

## `datadog.updateCurrentUserApplicationKey`

Edit an application key owned by current user — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCurrentUserApplicationKey(input: {
  data: ApplicationKeyUpdateData;
  /** The ID of the application key. */
  app_key_id: string;
}): Promise<ApplicationKeyResponse>
```

<sub>`PATCH /api/v2/current_user/application_keys/{app_key_id}` · `UpdateCurrentUserApplicationKey`</sub>

## `datadog.listPersonalAccessTokens`

Get all access tokens — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listPersonalAccessTokens(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: PersonalAccessTokensSort;
  /** Filter access tokens by the specified string. */
  filter?: string;
  /** Filter access tokens by the owner's ID. Supports multiple values. */
  "filter[owned_by]"?: (string)[];
}): Promise<ListPersonalAccessTokensResponse>
```

<sub>`GET /api/v2/personal_access_tokens` · `ListPersonalAccessTokens`</sub>

## `datadog.createPersonalAccessToken`

Create a personal access token — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createPersonalAccessToken(input: {
  data: PersonalAccessTokenCreateData;
}): Promise<PersonalAccessTokenCreateResponse>
```

<sub>`POST /api/v2/personal_access_tokens` · `CreatePersonalAccessToken`</sub>

## `datadog.revokePersonalAccessToken`

Revoke a personal access token — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.revokePersonalAccessToken(input: {
  /** The ID of the access token. */
  token_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/personal_access_tokens/{token_id}` · `RevokePersonalAccessToken`</sub>

## `datadog.getPersonalAccessToken`

Get a personal access token — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getPersonalAccessToken(input: {
  /** The ID of the access token. */
  token_id: string;
}): Promise<PersonalAccessTokenResponse>
```

<sub>`GET /api/v2/personal_access_tokens/{token_id}` · `GetPersonalAccessToken`</sub>

## `datadog.updatePersonalAccessToken`

Update a personal access token — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updatePersonalAccessToken(input: {
  data: PersonalAccessTokenUpdateData;
  /** The ID of the access token. */
  token_id: string;
}): Promise<PersonalAccessTokenResponse>
```

<sub>`PATCH /api/v2/personal_access_tokens/{token_id}` · `UpdatePersonalAccessToken`</sub>

## `datadog.validate`

Validate API key — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validate(): Promise<ValidateV2Response>
```

<sub>`GET /api/v2/validate` · `Validate`</sub>

## `datadog.validateApiKey`

Validate API and application keys — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.validateApiKey(): Promise<ValidateApiKeyResponse>
```

<sub>`GET /api/v2/validate_keys` · `ValidateAPIKey`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

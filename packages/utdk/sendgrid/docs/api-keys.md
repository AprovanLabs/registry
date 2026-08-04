# API Keys

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getApiKeys`

Retrieve all API Keys belonging to the authenticated user — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getApiKeys(input: {
  limit?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: (ApiKeyNameId)[] }>
```

<sub>`GET /api_keys` · `GET_api_keys`</sub>

## `sendgrid.createApiKeys`

Create API keys — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.createApiKeys(input: {
  /** The name you will use to describe this API Key. */
  name: string;
  /** The individual permissions that you are giving to this API Key. */
  scopes?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ api_key?: string; api_key_id?: string; name?: string; scopes?: (string)[] }>
```

<sub>`POST /api_keys` · `create-api-keys`</sub>

## `sendgrid.deleteApiKeysApiKeyId`

Delete API keys — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteApiKeysApiKeyId(input: {
  api_key_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<undefined>
```

<sub>`DELETE /api_keys/{api_key_id}` · `DELETE_api_keys-api_key_id`</sub>

## `sendgrid.getApiKeysApiKeyId`

Retrieve an existing API Key — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getApiKeysApiKeyId(input: {
  api_key_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: (ApiKeyNameIdScopes)[] }>
```

<sub>`GET /api_keys/{api_key_id}` · `GET_api_keys-api_key_id`</sub>

## `sendgrid.patchApiKeysApiKeyId`

Update API key name — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchApiKeysApiKeyId(input: {
  /** The new name of the API Key. */
  name: string;
  api_key_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ApiKeyNameId>
```

<sub>`PATCH /api_keys/{api_key_id}` · `PATCH_api_keys-api_key_id`</sub>

## `sendgrid.putApiKeysApiKeyId`

Update API key name and scopes — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putApiKeysApiKeyId(input: {
  name: string;
  scopes?: (string)[];
  api_key_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ApiKeyNameIdScopes>
```

<sub>`PUT /api_keys/{api_key_id}` · `PUT_api_keys-api_key_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Organization

4 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.adminApiKeysList`

List organization API keys — [Provider docs](https://help.openai.com/)

```ts
openai.adminApiKeysList(input: {
  /** Return keys with IDs that come after this ID in the pagination order. */
  after?: string | null;
  /** Order results by creation time, ascending or descending. */
  order?: "asc" | "desc";
  /** Maximum number of keys to return. */
  limit?: number;
}): Promise<ApiKeyList>
```

<sub>`GET /organization/admin_api_keys` · `admin-api-keys-list`</sub>

## `openai.adminApiKeysCreate`

Create an organization admin API key — [Provider docs](https://help.openai.com/)

```ts
openai.adminApiKeysCreate(input: {
  name: string;
}): Promise<AdminApiKey>
```

<sub>`POST /organization/admin_api_keys` · `admin-api-keys-create`</sub>

## `openai.adminApiKeysDelete`

Delete an organization admin API key — [Provider docs](https://help.openai.com/)

```ts
openai.adminApiKeysDelete(input: {
  /** The ID of the API key to be deleted. */
  key_id: string;
}): Promise<{ id?: string; object?: string; deleted?: boolean }>
```

<sub>`DELETE /organization/admin_api_keys/{key_id}` · `admin-api-keys-delete`</sub>

## `openai.adminApiKeysGet`

Retrieve a single organization API key — [Provider docs](https://help.openai.com/)

```ts
openai.adminApiKeysGet(input: {
  /** The ID of the API key. */
  key_id: string;
}): Promise<AdminApiKey>
```

<sub>`GET /organization/admin_api_keys/{key_id}` · `admin-api-keys-get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

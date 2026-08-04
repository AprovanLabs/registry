# Access Tokens

6 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getTokens`

List access tokens — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTokens(input: {
  /** If set to true, and the authentication access token has the 'Admin' role, personal access tokens for all members will be retrieved. */
  showAll?: boolean;
  /** The number of access tokens to return in the response. Defaults to 25. */
  limit?: number;
  /** Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<Tokens>
```

<sub>`GET /api/v2/tokens` · `getTokens`</sub>

## `launchdarkly.postToken`

Create access token — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postToken(input: {
  /** A human-friendly name for the access token */
  name?: string;
  /** A description for the access token */
  description?: string;
  /** Base role for the token */
  role?: "reader" | "writer" | "admin";
  /** A list of custom role IDs to use as access limits for the access token */
  customRoleIds?: (string)[];
  /** A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a role. */
  inlineRole?: (StatementPost)[];
  /** Whether the token is a service token */
  serviceToken?: boolean;
  /** The default API version for this token */
  defaultApiVersion?: number;
}): Promise<Token>
```

<sub>`POST /api/v2/tokens` · `postToken`</sub>

## `launchdarkly.deleteToken`

Delete access token — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteToken(input: {
  /** The ID of the access token to update */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/tokens/{id}` · `deleteToken`</sub>

## `launchdarkly.getToken`

Get access token — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getToken(input: {
  /** The ID of the access token */
  id: string;
}): Promise<Token>
```

<sub>`GET /api/v2/tokens/{id}` · `getToken`</sub>

## `launchdarkly.patchToken`

Patch access token — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchToken(input: {
  body: JsonPatch;
  /** The ID of the access token to update */
  id: string;
}): Promise<Token>
```

<sub>`PATCH /api/v2/tokens/{id}` · `patchToken`</sub>

## `launchdarkly.resetToken`

Reset access token — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.resetToken(input: {
  /** The ID of the access token to update */
  id: string;
  /** An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately. */
  expiry?: number;
}): Promise<Token>
```

<sub>`POST /api/v2/tokens/{id}/reset` · `resetToken`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

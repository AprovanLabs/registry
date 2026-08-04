# SDK Keys (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getSdkKeys`

Get all environment SDK keys — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSdkKeys(input: {
  projectKey: string;
  environmentKey: string;
  /** A filter to apply to the list of SDK keys. Supports the following fields and operators: `kind` (equals "sdk" or "mobile"), `active` (equals true or false). Format: `field:value`. Example: `kind:sdk`. */
  filter?: string;
  /** The number of SDK keys to return. Defaults to 20. Maximum is 100. */
  limit?: number;
  /** The number of SDK keys to skip. Used for pagination. */
  offset?: number;
  /** A sort to apply to the list of SDK keys. Supported field: `createdAt`. Prefix the field with `-` to sort in descending order (for example, `-createdAt`). */
  sort?: "createdAt" | "-createdAt";
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<SdkKeysForGetSdkKeys>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys` · `getSdkKeys`</sub>

## `launchdarkly.postSdkKey`

Create SDK key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postSdkKey(input: {
  /** The kind of SDK key. Can be either "sdk" (server-side) or "mobile" (mobile). Defaults to "sdk" when not explicitly defined. */
  kind?: "sdk" | "mobile";
  /** The user-defined key of the SDK key. */
  key: string;
  /** The human-readable name of the SDK key. */
  name: string;
  /** The optional description of the SDK key. */
  description?: string;
  expiry?: number;
  projectKey: string;
  environmentKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<SdkKey>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys` · `postSdkKey`</sub>

## `launchdarkly.deleteSdkKeyByKey`

Delete SDK key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteSdkKeyByKey(input: {
  projectKey: string;
  environmentKey: string;
  /** The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. */
  sdkKeyKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey}` · `deleteSdkKeyByKey`</sub>

## `launchdarkly.getSdkKeyByKey`

Get SDK key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSdkKeyByKey(input: {
  projectKey: string;
  environmentKey: string;
  /** The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. */
  sdkKeyKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<SdkKey>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey}` · `getSdkKeyByKey`</sub>

## `launchdarkly.patchSdkKeyByKey`

Update SDK key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchSdkKeyByKey(input: {
  /** (Optional)The human-readable name of the SDK key. */
  name?: string;
  /** (Optional) The description of the SDK key. */
  description?: string;
  expiry?: number;
  projectKey: string;
  environmentKey: string;
  /** The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. */
  sdkKeyKey: string;
  /** The version of the SDK key for optimistic locking. If provided, the update will only succeed if the current version matches. */
  version?: number;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<SdkKey>
```

<sub>`PATCH /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey}` · `patchSdkKeyByKey`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

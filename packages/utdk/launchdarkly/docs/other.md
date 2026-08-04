# Other

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getRoot`

Root resource — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getRoot(): Promise<RootResponse>
```

<sub>`GET /api/v2` · `getRoot`</sub>

## `launchdarkly.getCallerIdentity`

Identify the caller — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getCallerIdentity(): Promise<CallerIdentityRep>
```

<sub>`GET /api/v2/caller-identity` · `getCallerIdentity`</sub>

## `launchdarkly.getOpenapiSpec`

Gets the OpenAPI spec in json — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getOpenapiSpec(): Promise<undefined>
```

<sub>`GET /api/v2/openapi.json` · `getOpenapiSpec`</sub>

## `launchdarkly.getIps`

Gets the public IP list — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getIps(): Promise<IpList>
```

<sub>`GET /api/v2/public-ip-list` · `getIps`</sub>

## `launchdarkly.getVersions`

Get version information — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getVersions(): Promise<VersionsRep>
```

<sub>`GET /api/v2/versions` · `getVersions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

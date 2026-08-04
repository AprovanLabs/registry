# Relay Proxy Configurations

6 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getRelayProxyConfigs`

List Relay Proxy configs — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getRelayProxyConfigs(): Promise<RelayAutoConfigCollectionRep>
```

<sub>`GET /api/v2/account/relay-auto-configs` · `getRelayProxyConfigs`</sub>

## `launchdarkly.postRelayAutoConfig`

Create a new Relay Proxy config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postRelayAutoConfig(input: {
  /** A human-friendly name for the Relay Proxy configuration */
  name: string;
  /** A description of what environments and projects the Relay Proxy should include or exclude. To learn more, read [Write an inline policy](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration#write-an-inline-policy). */
  policy: (Statement)[];
}): Promise<RelayAutoConfigRep>
```

<sub>`POST /api/v2/account/relay-auto-configs` · `postRelayAutoConfig`</sub>

## `launchdarkly.deleteRelayAutoConfig`

Delete Relay Proxy config by ID — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteRelayAutoConfig(input: {
  /** The relay auto config id */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/account/relay-auto-configs/{id}` · `deleteRelayAutoConfig`</sub>

## `launchdarkly.getRelayProxyConfig`

Get Relay Proxy config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getRelayProxyConfig(input: {
  /** The relay auto config id */
  id: string;
}): Promise<RelayAutoConfigRep>
```

<sub>`GET /api/v2/account/relay-auto-configs/{id}` · `getRelayProxyConfig`</sub>

## `launchdarkly.patchRelayAutoConfig`

Update a Relay Proxy config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchRelayAutoConfig(input: {
  /** A JSON patch representation of the change to make */
  patch: JsonPatch;
  /** Optional comment */
  comment?: string;
  /** The relay auto config id */
  id: string;
}): Promise<RelayAutoConfigRep>
```

<sub>`PATCH /api/v2/account/relay-auto-configs/{id}` · `patchRelayAutoConfig`</sub>

## `launchdarkly.resetRelayAutoConfig`

Reset Relay Proxy configuration key — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.resetRelayAutoConfig(input: {
  /** The Relay Proxy configuration ID */
  id: string;
  /** An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately. */
  expiry?: number;
}): Promise<RelayAutoConfigRep>
```

<sub>`POST /api/v2/account/relay-auto-configs/{id}/reset` · `resetRelayAutoConfig`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

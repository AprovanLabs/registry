# IP Allowlist (Beta)

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getIpAllowlist`

Get IP Allowlist — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getIpAllowlist(input: {
  /** A case-insensitive substring to filter entries by. Matches against the IP address or CIDR block and the description. */
  search?: string;
  /** The number of entries to return. When omitted, all matching entries are returned. Maximum is 100. */
  limit?: number;
  /** The number of entries to skip. Used for pagination. */
  offset?: number;
}): Promise<IpAllowlistResponse>
```

<sub>`GET /api/v2/account/ip-allowlist` · `getIpAllowlist`</sub>

## `launchdarkly.patchIpAllowlistConfig`

Update IP Allowlist Configuration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchIpAllowlistConfig(input: {
  /** Enable or disable session allowlist */
  sessionAllowlistEnabled?: boolean;
  /** Enable or disable API token allowlist */
  apiTokenAllowlistEnabled?: boolean;
}): Promise<IpAllowlistResponse>
```

<sub>`PATCH /api/v2/account/ip-allowlist` · `patchIpAllowlistConfig`</sub>

## `launchdarkly.createIpAllowlistEntry`

Create IP Allowlist Entry — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createIpAllowlistEntry(input: {
  ipAddress: string;
  description?: string;
}): Promise<IpAllowlistEntryResponse>
```

<sub>`POST /api/v2/account/ip-allowlist` · `createIpAllowlistEntry`</sub>

## `launchdarkly.deleteIpAllowlistEntry`

Delete IP Allowlist Entry — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteIpAllowlistEntry(input: {
  /** Unique identifier for the allowlist entry */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/account/ip-allowlist/{id}` · `deleteIpAllowlistEntry`</sub>

## `launchdarkly.patchIpAllowlistEntry`

Update IP Allowlist Entry Description — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchIpAllowlistEntry(input: {
  description: string;
  /** Unique identifier for the allowlist entry */
  id: string;
}): Promise<IpAllowlistEntryResponse>
```

<sub>`PATCH /api/v2/account/ip-allowlist/{id}` · `patchIpAllowlistEntry`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

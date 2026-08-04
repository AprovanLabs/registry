# IP Allowlist

2 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.getIpAllowlist`

Get IP allowlist settings — [Provider docs](https://developers.intercom.com)

```ts
intercom.getIpAllowlist(options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<IpAllowlist>
```

<sub>`GET /ip_allowlist` · `getIpAllowlist`</sub>

## `intercom.updateIpAllowlist`

Update IP allowlist settings — [Provider docs](https://developers.intercom.com)

```ts
intercom.updateIpAllowlist(input: {
  /** String representing the object's type. Always has the value `ip_allowlist`. */
  type?: string;
  /** Whether the IP allowlist is enabled for the workspace. */
  enabled?: boolean;
  /** List of allowed IP addresses and/or IP ranges in CIDR notation. Examples: - Single IP: `192.168.0.1` - IP range: `192.168.0.1/24` (allows 192.168.0.0 - 192.168.0.255)  */
  ip_allowlist?: (string)[];
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<IpAllowlist>
```

<sub>`PUT /ip_allowlist` · `updateIpAllowlist`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

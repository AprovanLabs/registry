# Reserved IPv6 Actions

1 operation · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.reservedIPv6ActionsPost`

Initiate a Reserved IPv6 Action

```ts
digitalocean.reservedIPv6ActionsPost(input: {
  body?: ReservedIpv6ActionUnassign | ReservedIpv6ActionAssign;
  /** A reserved IPv6 address. */
  reserved_ipv6: string;
}): Promise<{ action?: Action & { resource_id?: number; resource_type?: string; region_slug?: string } }>
```

<sub>`POST /v2/reserved_ipv6/{reserved_ipv6}/actions` · `reservedIPv6Actions_post`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

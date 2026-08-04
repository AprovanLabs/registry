# Reserved IPv6

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.reservedIPv6List`

List All Reserved IPv6s

```ts
digitalocean.reservedIPv6List(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<ReservedIpv6List & Pagination & Meta>
```

<sub>`GET /v2/reserved_ipv6` · `reservedIPv6_list`</sub>

## `digitalocean.reservedIPv6Create`

Create a New Reserved IPv6

```ts
digitalocean.reservedIPv6Create(input: {
  /** The slug identifier for the region the reserved IPv6 will be reserved to. */
  region_slug: string;
}): Promise<{ reserved_ipv6?: { ip?: string; region_slug?: string; reserved_at?: string } }>
```

<sub>`POST /v2/reserved_ipv6` · `reservedIPv6_create`</sub>

## `digitalocean.reservedIPv6Delete`

Delete a Reserved IPv6

```ts
digitalocean.reservedIPv6Delete(input: {
  /** A reserved IPv6 address. */
  reserved_ipv6: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/reserved_ipv6/{reserved_ipv6}` · `reservedIPv6_delete`</sub>

## `digitalocean.reservedIPv6Get`

Retrieve an Existing Reserved IPv6

```ts
digitalocean.reservedIPv6Get(input: {
  /** A reserved IPv6 address. */
  reserved_ipv6: string;
}): Promise<{ reserved_ipv6?: ReservedIpv6 }>
```

<sub>`GET /v2/reserved_ipv6/{reserved_ipv6}` · `reservedIPv6_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

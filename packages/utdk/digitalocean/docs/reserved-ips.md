# Reserved IPs

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.reservedIPsList`

List All Reserved IPs

```ts
digitalocean.reservedIPsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ reserved_ips?: (ReservedIp)[] } & Pagination & Meta>
```

<sub>`GET /v2/reserved_ips` · `reservedIPs_list`</sub>

## `digitalocean.reservedIPsCreate`

Create a New Reserved IP

```ts
digitalocean.reservedIPsCreate(input: {
  body: ReservedIpCreate;
}): Promise<{ reserved_ip?: ReservedIp; links?: { droplets?: (ActionLink)[]; actions?: (ActionLink)[] } }>
```

<sub>`POST /v2/reserved_ips` · `reservedIPs_create`</sub>

## `digitalocean.reservedIPsDelete`

Delete a Reserved IP

```ts
digitalocean.reservedIPsDelete(input: {
  /** A reserved IP address. */
  reserved_ip: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/reserved_ips/{reserved_ip}` · `reservedIPs_delete`</sub>

## `digitalocean.reservedIPsGet`

Retrieve an Existing Reserved IP

```ts
digitalocean.reservedIPsGet(input: {
  /** A reserved IP address. */
  reserved_ip: string;
}): Promise<{ reserved_ip?: ReservedIp }>
```

<sub>`GET /v2/reserved_ips/{reserved_ip}` · `reservedIPs_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

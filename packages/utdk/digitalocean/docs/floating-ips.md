# Floating IPs

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.floatingIPsList`

List All Floating IPs

```ts
digitalocean.floatingIPsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ floating_ips?: (FloatingIp)[] } & Pagination & Meta>
```

<sub>`GET /v2/floating_ips` · `floatingIPs_list`</sub>

## `digitalocean.floatingIPsCreate`

Create a New Floating IP

```ts
digitalocean.floatingIPsCreate(input: {
  body: FloatingIpCreate;
}): Promise<{ floating_ip?: FloatingIp; links?: { droplets?: (ActionLink)[]; actions?: (ActionLink)[] } }>
```

<sub>`POST /v2/floating_ips` · `floatingIPs_create`</sub>

## `digitalocean.floatingIPsDelete`

Delete a Floating IP

```ts
digitalocean.floatingIPsDelete(input: {
  /** A floating IP address. */
  floating_ip: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/floating_ips/{floating_ip}` · `floatingIPs_delete`</sub>

## `digitalocean.floatingIPsGet`

Retrieve an Existing Floating IP

```ts
digitalocean.floatingIPsGet(input: {
  /** A floating IP address. */
  floating_ip: string;
}): Promise<{ floating_ip?: FloatingIp }>
```

<sub>`GET /v2/floating_ips/{floating_ip}` · `floatingIPs_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

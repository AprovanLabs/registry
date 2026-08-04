# IP Addresses

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getIps`

Retrieve all IP addresses — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIps(input: {
  /** The IP address to get */
  ip?: string;
  /** Should we exclude reverse DNS records (whitelabels)? */
  exclude_whitelabels?: boolean;
  /** The number of IPs you want returned at the same time. */
  limit?: number;
  /** The offset for the number of IPs that you are requesting. */
  offset?: number;
  /** The subuser you are requesting for. */
  subuser?: string;
  /** The direction to sort the results. */
  sort_by_direction?: "desc" | "asc";
}): Promise<({ assigned_at: number | null; ip: string; pools: (string)[]; rdns?: string; start_date: number | null; subusers: (string)[]; warmup: boolean; whitelabeled: boolean })[]>
```

<sub>`GET /ips` · `GET_ips`</sub>

## `sendgrid.postIps`

Add IPs — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postIps(input: {
  /** The amount of IPs to add to the account. */
  count: number;
  /** Array of usernames to be assigned a send IP. */
  subusers?: (string)[];
  /** Whether or not to warmup the IPs being added. */
  warmup?: boolean;
}): Promise<{ ips: ({ ip: string; subusers: (string)[] })[]; remaining_ips: number; warmup: boolean }>
```

<sub>`POST /ips` · `POST_ips`</sub>

## `sendgrid.getIpsIpAddress`

Retrieve all IP pools an IP address belongs to — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsIpAddress(input: {
  /** The IP address you are retrieving the IP pools for. */
  ip_address: string;
}): Promise<{ ip: string; pools: (string)[]; rdns: string; start_date: number | null; subusers: (string)[]; warmup: boolean; whitelabeled: boolean }>
```

<sub>`GET /ips/{ip_address}` · `GET_ips-ip_address`</sub>

## `sendgrid.getIpsAssigned`

Retrieve all assigned IPs — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsAssigned(): Promise<({ ip: string; pools: (string)[]; start_date: number; warmup: boolean })[]>
```

<sub>`GET /ips/assigned` · `GET_ips-assigned`</sub>

## `sendgrid.getIpsRemaining`

Get remaining IPs count — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsRemaining(): Promise<{ results: ({ period: string; price_per_ip: number; remaining: number })[] }>
```

<sub>`GET /ips/remaining` · `GET_ips-remaining`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# IP Pools

7 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getIpsPools`

Retrieve all IP pools — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsPools(): Promise<(IpPoolResponse)[]>
```

<sub>`GET /ips/pools` · `GET_ips-pools`</sub>

## `sendgrid.postIpsPools`

Create an IP pool — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postIpsPools(input: {
  /** The name of your new IP pool. */
  name: string;
}): Promise<IpPoolResponse>
```

<sub>`POST /ips/pools` · `POST_ips-pools`</sub>

## `sendgrid.deleteIpsPoolsPoolName`

Delete an IP pool — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteIpsPoolsPoolName(input: {
  /** The name of the IP pool that you want to retrieve the IP addresses for. */
  pool_name: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /ips/pools/{pool_name}` · `DELETE_ips-pools-pool_name`</sub>

## `sendgrid.getIpsPoolsPoolName`

Retrieve all the IPs in a specified pool — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsPoolsPoolName(input: {
  /** The name of the IP pool that you want to retrieve the IP addresses for. */
  pool_name: string;
}): Promise<{ ips?: (string)[]; pool_name?: string }>
```

<sub>`GET /ips/pools/{pool_name}` · `GET_ips-pools-pool_name`</sub>

## `sendgrid.putIpsPoolsPoolName`

Rename an IP pool — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putIpsPoolsPoolName(input: {
  /** The new name for your IP pool. */
  name?: string;
  /** The name of the IP pool that you want to retrieve the IP addresses for. */
  pool_name: string;
}): Promise<IpPoolResponse>
```

<sub>`PUT /ips/pools/{pool_name}` · `PUT_ips-pools-pool_name`</sub>

## `sendgrid.postIpsPoolsPoolNameIps`

Add an IP address to a pool — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postIpsPoolsPoolNameIps(input: {
  /** The IP address that you want to add to the named pool. */
  ip?: string;
  /** The name of the IP pool you want to add the address to. If the name contains spaces, they must be URL encoded (e.g., "Test Pool" becomes "Test%20Pool"). */
  pool_name: string;
}): Promise<{ ip: string; pools: (string)[]; start_date: number; warmup: boolean }>
```

<sub>`POST /ips/pools/{pool_name}/ips` · `POST_ips-pools-pool_name-ips`</sub>

## `sendgrid.deleteIpsPoolsPoolNameIpsIp`

Remove an IP address from a pool — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteIpsPoolsPoolNameIpsIp(input: {
  /** The name of the IP pool that you are removing the IP address from. */
  pool_name: string;
  /** The IP address that you wish to remove. */
  ip: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /ips/pools/{pool_name}/ips/{ip}` · `DELETE_ips-pools-pool_name-ips-ip`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

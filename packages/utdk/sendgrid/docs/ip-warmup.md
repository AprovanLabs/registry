# IP Warmup

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getIpsWarmup`

Retrieve all IPs currently in warmup — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsWarmup(): Promise<IpWarmupResponse>
```

<sub>`GET /ips/warmup` · `GET_ips-warmup`</sub>

## `sendgrid.postIpsWarmup`

Start warming up an IP address — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postIpsWarmup(input: {
  /** The IP address that you want to begin warming up. */
  ip?: string;
}): Promise<IpWarmupResponse>
```

<sub>`POST /ips/warmup` · `POST_ips-warmup`</sub>

## `sendgrid.deleteIpsWarmupIpAddress`

Stop warming up an IP address — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteIpsWarmupIpAddress(input: {
  /** The IP address that you want to retrieve the warmup status for. */
  ip_address: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /ips/warmup/{ip_address}` · `DELETE_ips-warmup-ip_address`</sub>

## `sendgrid.getIpsWarmupIpAddress`

Retrieve the warmup status for a specific IP address — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getIpsWarmupIpAddress(input: {
  /** The IP address that you want to retrieve the warmup status for. */
  ip_address: string;
}): Promise<IpWarmupResponse>
```

<sub>`GET /ips/warmup/{ip_address}` · `GET_ips-warmup-ip_address`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

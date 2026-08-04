# Reverse DNS

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getWhitelabelIps`

Retrieve all reverse DNS records — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelIps(input: {
  /** The maximum number of results to retrieve. */
  limit?: number;
  /** The point in the list of results to begin retrieving IP addresses from. */
  offset?: number;
  /** The IP address segment that you'd like to use in a prefix search. */
  ip?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(ReverseDns)[]>
```

<sub>`GET /whitelabel/ips` · `GET_whitelabel-ips`</sub>

## `sendgrid.postWhitelabelIps`

Set up reverse DNS — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelIps(input: {
  /** The root, or sending, domain that will be used to send message from the IP address. */
  domain: string;
  /** The IP address for which you want to set up reverse DNS. */
  ip: string;
  /** The subdomain that will be used to send emails from the IP address. This should be the same as the subdomain used to set up an authenticated domain. */
  subdomain?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ReverseDns>
```

<sub>`POST /whitelabel/ips` · `POST_whitelabel-ips`</sub>

## `sendgrid.deleteWhitelabelIpsId`

Delete a reverse DNS record — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteWhitelabelIpsId(input: {
  /** The ID of the reverse DNS record that you would like to retrieve. */
  id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /whitelabel/ips/{id}` · `DELETE_whitelabel-ips-id`</sub>

## `sendgrid.getWhitelabelIpsId`

Retrieve a reverse DNS record — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelIpsId(input: {
  /** The ID of the reverse DNS record that you would like to retrieve. */
  id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<ReverseDns>
```

<sub>`GET /whitelabel/ips/{id}` · `GET_whitelabel-ips-id`</sub>

## `sendgrid.postWhitelabelIpsIdValidate`

Validate a reverse DNS record — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelIpsIdValidate(input: {
  /** The ID of the reverse DNS record that you would like to validate. */
  id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id: number; valid: true | false; validation_results: { a_record?: { reason: string | null; valid: true | false } } }>
```

<sub>`POST /whitelabel/ips/{id}/validate` · `POST_whitelabel-ips-id-validate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

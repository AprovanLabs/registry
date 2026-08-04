# Domain Authentication

12 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getWhitelabelDomains`

List all authenticated domains — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelDomains(input: {
  /** Number of domains to return. */
  limit?: number;
  /** Paging offset. */
  offset?: number;
  /** Exclude subuser domains from the result. */
  exclude_subusers?: boolean;
  /** The username associated with an authenticated domain. */
  username?: string;
  /** Search for authenticated domains. */
  domain?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<DomainAuthentication200Response>
```

<sub>`GET /whitelabel/domains` · `GET_whitelabel-domains`</sub>

## `sendgrid.postWhitelabelDomains`

Authenticate a domain — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelDomains(input: {
  /** Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation. */
  automatic_security?: boolean;
  /** Add a custom DKIM selector. Accepts three letters or numbers. */
  custom_dkim_selector?: string;
  /** Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to authenticated domains set up for manual security. */
  custom_spf?: boolean;
  /** Whether to use this authenticated domain as the fallback if no authenticated domains match the sender's domain. */
  default?: boolean;
  /** Domain being authenticated. */
  domain: string;
  /** The IP addresses that will be included in the custom SPF record for this authenticated domain. */
  ips?: (string)[];
  /** The subdomain to use for this authenticated domain. */
  subdomain?: string;
  /** The username associated with this domain. */
  username?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<AuthenticationDomain>
```

<sub>`POST /whitelabel/domains` · `POST_whitelabel-domains`</sub>

## `sendgrid.deleteWhitelabelDomainsDomainId`

Delete an authenticated domain. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteWhitelabelDomainsDomainId(input: {
  domain_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /whitelabel/domains/{domain_id}` · `DELETE_whitelabel-domains-domain_id`</sub>

## `sendgrid.getWhitelabelDomainsDomainId`

Retrieve an authenticated domain — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelDomainsDomainId(input: {
  domain_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<AuthenticationDomain>
```

<sub>`GET /whitelabel/domains/{domain_id}` · `GET_whitelabel-domains-domain_id`</sub>

## `sendgrid.patchWhitelabelDomainsDomainId`

Update an authenticated domain — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchWhitelabelDomainsDomainId(input: {
  /** Indicates whether to generate a custom SPF record for manual security. */
  custom_spf?: boolean;
  /** Indicates whether this is the default authenticated domain. */
  default?: boolean;
  domain_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<DomainAuthentication200Response>
```

<sub>`PATCH /whitelabel/domains/{domain_id}` · `PATCH_whitelabel-domains-domain_id`</sub>

## `sendgrid.postWhitelabelDomainsDomainIdSubuser`

Associate an authenticated domain with a given user. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelDomainsDomainIdSubuser(input: {
  /** Username to associate with the authenticated domain. */
  username: string;
  /** ID of the authenticated domain to associate with the subuser */
  domain_id: number;
}): Promise<DomainAuthenticationDomainSpf>
```

<sub>`POST /whitelabel/domains/{domain_id}/subuser` · `POST_whitelabel-domains-domain_id-subuser`</sub>

## `sendgrid.postWhitelabelDomainsIdIps`

Add an IP to an authenticated domain — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelDomainsIdIps(input: {
  /** IP to associate with the domain. Used for manually specifying IPs for custom SPF. */
  ip: string;
  /** ID of the domain to which you are adding an IP */
  id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<DomainAuthenticationDomainSpf>
```

<sub>`POST /whitelabel/domains/{id}/ips` · `POST_whitelabel-domains-id-ips`</sub>

## `sendgrid.deleteWhitelabelDomainsIdIpsIp`

Remove an IP from an authenticated domain. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteWhitelabelDomainsIdIpsIp(input: {
  /** ID of the domain to delete the IP from. */
  id: number;
  /** IP to remove from the domain. */
  ip: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<DomainAuthenticationDomainSpf>
```

<sub>`DELETE /whitelabel/domains/{id}/ips/{ip}` · `DELETE_whitelabel-domains-id-ips-ip`</sub>

## `sendgrid.postWhitelabelDomainsIdValidate`

Validate a domain authentication. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelDomainsIdValidate(input: {
  /** ID of the domain to validate. */
  id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ id?: number; valid?: boolean; validation_results?: { dkim1?: { reason?: string | null; valid?: boolean }; dkim2?: { reason?: string | null; valid?: boolean }; mail_cname?: { reason?: string | null; valid?: boolean }; spf?: { reason?: string | null; valid?: boolean } } }>
```

<sub>`POST /whitelabel/domains/{id}/validate` · `POST_whitelabel-domains-id-validate`</sub>

## `sendgrid.getWhitelabelDomainsDefault`

Get the default authentication — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelDomainsDefault(input: {
  /** The domain to find a default authentication. */
  domain?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<DomainAuthentication200Response>
```

<sub>`GET /whitelabel/domains/default` · `GET_whitelabel-domains-default`</sub>

## `sendgrid.deleteWhitelabelDomainsSubuser`

Disassociate an authenticated domain from a given user. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteWhitelabelDomainsSubuser(input: {
  /** Username for the subuser to find associated authenticated domain. */
  username?: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /whitelabel/domains/subuser` · `DELETE_whitelabel-domains-subuser`</sub>

## `sendgrid.getWhitelabelDomainsSubuser`

List the authenticated domain associated with the given user. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getWhitelabelDomainsSubuser(input: {
  /** Username for the subuser to find associated authenticated domain. */
  username: string;
}): Promise<DomainAuthenticationDomainSpf>
```

<sub>`GET /whitelabel/domains/subuser` · `GET_whitelabel-domains-subuser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

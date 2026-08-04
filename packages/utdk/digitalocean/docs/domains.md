# Domains

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.domainsList`

List All Domains

```ts
digitalocean.domainsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ domains: (Domain)[] } & Pagination & Meta>
```

<sub>`GET /v2/domains` · `domains_list`</sub>

## `digitalocean.domainsCreate`

Create a New Domain

```ts
digitalocean.domainsCreate(input: {
  /** The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name. */
  name?: string;
  /** This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain. */
  ip_address?: string;
  /** This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
  ttl?: number | null;
  /** This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource. */
  zone_file?: string | null;
}): Promise<{ domain?: Domain }>
```

<sub>`POST /v2/domains` · `domains_create`</sub>

## `digitalocean.domainsDelete`

Delete a Domain

```ts
digitalocean.domainsDelete(input: {
  /** The name of the domain itself. */
  domain_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/domains/{domain_name}` · `domains_delete`</sub>

## `digitalocean.domainsGet`

Retrieve an Existing Domain

```ts
digitalocean.domainsGet(input: {
  /** The name of the domain itself. */
  domain_name: string;
}): Promise<{ domain?: Domain }>
```

<sub>`GET /v2/domains/{domain_name}` · `domains_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

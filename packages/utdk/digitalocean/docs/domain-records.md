# Domain Records

6 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.domainsListRecords`

List All Domain Records

```ts
digitalocean.domainsListRecords(input: {
  /** The name of the domain itself. */
  domain_name: string;
  /** A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. */
  name?: string;
  /** The type of the DNS record. For example: A, CNAME, TXT, ... */
  type?: "A" | "AAAA" | "CAA" | "CNAME" | "MX" | "NS" | "SOA" | "SRV" | "TXT";
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ domain_records?: (DomainRecord)[] } & Pagination & Meta>
```

<sub>`GET /v2/domains/{domain_name}/records` · `domains_list_records`</sub>

## `digitalocean.domainsCreateRecord`

Create a New Domain Record

```ts
digitalocean.domainsCreateRecord(input: {
  body?: DomainRecordA | DomainRecordAaaa | DomainRecordCaa | DomainRecordCname | DomainRecordMx | DomainRecordNs | DomainRecordSoa | DomainRecordSrv | DomainRecordTxt;
  /** The name of the domain itself. */
  domain_name: string;
}): Promise<{ domain_record?: DomainRecord }>
```

<sub>`POST /v2/domains/{domain_name}/records` · `domains_create_record`</sub>

## `digitalocean.domainsDeleteRecord`

Delete a Domain Record

```ts
digitalocean.domainsDeleteRecord(input: {
  /** The name of the domain itself. */
  domain_name: string;
  /** The unique identifier of the domain record. */
  domain_record_id: number;
}): Promise<undefined>
```

<sub>`DELETE /v2/domains/{domain_name}/records/{domain_record_id}` · `domains_delete_record`</sub>

## `digitalocean.domainsGetRecord`

Retrieve an Existing Domain Record

```ts
digitalocean.domainsGetRecord(input: {
  /** The name of the domain itself. */
  domain_name: string;
  /** The unique identifier of the domain record. */
  domain_record_id: number;
}): Promise<{ domain_record?: DomainRecord }>
```

<sub>`GET /v2/domains/{domain_name}/records/{domain_record_id}` · `domains_get_record`</sub>

## `digitalocean.domainsPatchRecord`

Update a Domain Record

```ts
digitalocean.domainsPatchRecord(input: {
  /** A unique identifier for each domain record. */
  id?: number;
  /** The type of the DNS record. For example: A, CNAME, TXT, ... */
  type: string;
  /** The host name, alias, or service being defined by the record. */
  name?: string;
  /** Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. */
  data?: string;
  /** The priority for SRV and MX records. */
  priority?: number | null;
  /** The port for SRV records. */
  port?: number | null;
  /** This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
  ttl?: number;
  /** The weight for SRV records. */
  weight?: number | null;
  /** An unsigned integer between 0-255 used for CAA records. */
  flags?: number | null;
  /** The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef" */
  tag?: string | null;
  /** The name of the domain itself. */
  domain_name: string;
  /** The unique identifier of the domain record. */
  domain_record_id: number;
}): Promise<{ domain_record?: DomainRecord }>
```

<sub>`PATCH /v2/domains/{domain_name}/records/{domain_record_id}` · `domains_patch_record`</sub>

## `digitalocean.domainsUpdateRecord`

Update a Domain Record

```ts
digitalocean.domainsUpdateRecord(input: {
  /** A unique identifier for each domain record. */
  id?: number;
  /** The type of the DNS record. For example: A, CNAME, TXT, ... */
  type: string;
  /** The host name, alias, or service being defined by the record. */
  name?: string;
  /** Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates. */
  data?: string;
  /** The priority for SRV and MX records. */
  priority?: number | null;
  /** The port for SRV records. */
  port?: number | null;
  /** This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested. */
  ttl?: number;
  /** The weight for SRV records. */
  weight?: number | null;
  /** An unsigned integer between 0-255 used for CAA records. */
  flags?: number | null;
  /** The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef" */
  tag?: string | null;
  /** The name of the domain itself. */
  domain_name: string;
  /** The unique identifier of the domain record. */
  domain_record_id: number;
}): Promise<{ domain_record?: DomainRecord }>
```

<sub>`PUT /v2/domains/{domain_name}/records/{domain_record_id}` · `domains_update_record`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

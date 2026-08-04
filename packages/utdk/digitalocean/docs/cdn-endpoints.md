# CDN Endpoints

6 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.cdnListEndpoints`

List All CDN Endpoints

```ts
digitalocean.cdnListEndpoints(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ endpoints?: (CdnEndpoint)[] } & Pagination & Meta>
```

<sub>`GET /v2/cdn/endpoints` · `cdn_list_endpoints`</sub>

## `digitalocean.cdnCreateEndpoint`

Create a New CDN Endpoint

```ts
digitalocean.cdnCreateEndpoint(input: {
  /** A unique ID that can be used to identify and reference a CDN endpoint. */
  id?: string;
  /** The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space. */
  origin: string;
  /** The fully qualified domain name (FQDN) from which the CDN-backed content is served. */
  endpoint?: string;
  /** The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded. */
  ttl?: 60 | 600 | 3600 | 86400 | 604800;
  /** The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. */
  certificate_id?: string;
  /** The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. */
  custom_domain?: string;
  /** A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created. */
  created_at?: string;
}): Promise<{ endpoint?: CdnEndpoint }>
```

<sub>`POST /v2/cdn/endpoints` · `cdn_create_endpoint`</sub>

## `digitalocean.cdnDeleteEndpoint`

Delete a CDN Endpoint

```ts
digitalocean.cdnDeleteEndpoint(input: {
  /** A unique identifier for a CDN endpoint. */
  cdn_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/cdn/endpoints/{cdn_id}` · `cdn_delete_endpoint`</sub>

## `digitalocean.cdnGetEndpoint`

Retrieve an Existing CDN Endpoint

```ts
digitalocean.cdnGetEndpoint(input: {
  /** A unique identifier for a CDN endpoint. */
  cdn_id: string;
}): Promise<{ endpoint?: CdnEndpoint }>
```

<sub>`GET /v2/cdn/endpoints/{cdn_id}` · `cdn_get_endpoint`</sub>

## `digitalocean.cdnUpdateEndpoints`

Update a CDN Endpoint

```ts
digitalocean.cdnUpdateEndpoints(input: {
  /** The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded. */
  ttl?: 60 | 600 | 3600 | 86400 | 604800;
  /** The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided. */
  certificate_id?: string;
  /** The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint. */
  custom_domain?: string;
  /** A unique identifier for a CDN endpoint. */
  cdn_id: string;
}): Promise<{ endpoint?: CdnEndpoint }>
```

<sub>`PUT /v2/cdn/endpoints/{cdn_id}` · `cdn_update_endpoints`</sub>

## `digitalocean.cdnPurgeCache`

Purge the Cache for an Existing CDN Endpoint

```ts
digitalocean.cdnPurgeCache(input: {
  /** An array of strings containing the path to the content to be purged from the CDN cache. */
  files: (string)[];
  /** A unique identifier for a CDN endpoint. */
  cdn_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/cdn/endpoints/{cdn_id}/cache` · `cdn_purge_cache`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

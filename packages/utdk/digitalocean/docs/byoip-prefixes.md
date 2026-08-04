# BYOIP Prefixes

6 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.byoipPrefixesList`

List BYOIP Prefixes

```ts
digitalocean.byoipPrefixesList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ byoip_prefixes?: (ByoipPrefix)[] } & Pagination & Meta>
```

<sub>`GET /v2/byoip_prefixes` · `byoipPrefixes_list`</sub>

## `digitalocean.byoipPrefixesCreate`

Create a BYOIP Prefix

```ts
digitalocean.byoipPrefixesCreate(input: {
  /** The IP prefix in CIDR notation to bring */
  prefix: string;
  /** The region where the prefix will be created */
  region: string;
  /** The signature hash for the prefix creation request */
  signature: string;
}): Promise<{ uuid?: string; region?: string; status?: string }>
```

<sub>`POST /v2/byoip_prefixes` · `byoipPrefixes_create`</sub>

## `digitalocean.byoipPrefixesDelete`

Delete a BYOIP Prefix

```ts
digitalocean.byoipPrefixesDelete(input: {
  /** The unique identifier for the BYOIP Prefix. */
  byoip_prefix_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/byoip_prefixes/{byoip_prefix_uuid}` · `byoipPrefixes_delete`</sub>

## `digitalocean.byoipPrefixesGet`

Get a BYOIP Prefix

```ts
digitalocean.byoipPrefixesGet(input: {
  /** The unique identifier for the BYOIP Prefix. */
  byoip_prefix_uuid: string;
}): Promise<{ byoip_prefix?: ByoipPrefix }>
```

<sub>`GET /v2/byoip_prefixes/{byoip_prefix_uuid}` · `byoipPrefixes_get`</sub>

## `digitalocean.byoipPrefixesPatch`

Update a BYOIP Prefix

```ts
digitalocean.byoipPrefixesPatch(input: {
  /** Whether the BYOIP prefix should be advertised */
  advertise?: boolean;
  /** A unique identifier for a BYOIP prefix. */
  byoip_prefix_uuid: string;
}): Promise<{ byoip_prefix?: ByoipPrefix }>
```

<sub>`PATCH /v2/byoip_prefixes/{byoip_prefix_uuid}` · `byoipPrefixes_patch`</sub>

## `digitalocean.byoipPrefixesListResources`

List BYOIP Prefix Resources

```ts
digitalocean.byoipPrefixesListResources(input: {
  /** The unique identifier for the BYOIP Prefix. */
  byoip_prefix_uuid: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ ips?: (ByoipPrefixResource)[] } & Pagination & Meta>
```

<sub>`GET /v2/byoip_prefixes/{byoip_prefix_uuid}/ips` · `byoipPrefixes_list_resources`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

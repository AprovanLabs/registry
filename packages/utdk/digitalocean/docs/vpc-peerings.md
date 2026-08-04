# VPC Peerings

5 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.vpcPeeringsList`

List All VPC Peerings

```ts
digitalocean.vpcPeeringsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  region?: RegionSlug;
}): Promise<{ vpc_peerings?: (VpcPeering)[] } & Pagination & Meta>
```

<sub>`GET /v2/vpc_peerings` · `vpcPeerings_list`</sub>

## `digitalocean.vpcPeeringsCreate`

Create a New VPC Peering

```ts
digitalocean.vpcPeeringsCreate(input: {
  /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
  name: string;
  /** An array of the two peered VPCs IDs. */
  vpc_ids: (string)[];
}): Promise<{ vpc_peering?: VpcPeering }>
```

<sub>`POST /v2/vpc_peerings` · `vpcPeerings_create`</sub>

## `digitalocean.vpcPeeringsDelete`

Delete a VPC peering

```ts
digitalocean.vpcPeeringsDelete(input: {
  /** A unique identifier for a VPC peering. */
  vpc_peering_id: string;
}): Promise<{ vpc_peering?: VpcPeering }>
```

<sub>`DELETE /v2/vpc_peerings/{vpc_peering_id}` · `vpcPeerings_delete`</sub>

## `digitalocean.vpcPeeringsGet`

Retrieve an Existing VPC Peering

```ts
digitalocean.vpcPeeringsGet(input: {
  /** A unique identifier for a VPC peering. */
  vpc_peering_id: string;
}): Promise<{ vpc_peering?: VpcPeering }>
```

<sub>`GET /v2/vpc_peerings/{vpc_peering_id}` · `vpcPeerings_get`</sub>

## `digitalocean.vpcPeeringsPatch`

Update a VPC peering

```ts
digitalocean.vpcPeeringsPatch(input: {
  /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
  name: string;
  /** A unique identifier for a VPC peering. */
  vpc_peering_id: string;
}): Promise<{ vpc_peering?: VpcPeering }>
```

<sub>`PATCH /v2/vpc_peerings/{vpc_peering_id}` · `vpcPeerings_patch`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

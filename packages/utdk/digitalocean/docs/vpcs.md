# VPCs

10 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.vpcsList`

List All VPCs

```ts
digitalocean.vpcsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ vpcs?: (Vpc)[] } & Pagination & Meta>
```

<sub>`GET /v2/vpcs` · `vpcs_list`</sub>

## `digitalocean.vpcsCreate`

Create a New VPC

```ts
digitalocean.vpcsCreate(input: {
  /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name: string;
  /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
  description?: string;
  /** The slug identifier for the region where the VPC will be created. */
  region: string;
  /** The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account. */
  ip_range?: string;
}): Promise<{ vpc?: Vpc }>
```

<sub>`POST /v2/vpcs` · `vpcs_create`</sub>

## `digitalocean.vpcsDelete`

Delete a VPC

```ts
digitalocean.vpcsDelete(input: {
  /** A unique identifier for a VPC. */
  vpc_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/vpcs/{vpc_id}` · `vpcs_delete`</sub>

## `digitalocean.vpcsGet`

Retrieve an Existing VPC

```ts
digitalocean.vpcsGet(input: {
  /** A unique identifier for a VPC. */
  vpc_id: string;
}): Promise<{ vpc?: Vpc }>
```

<sub>`GET /v2/vpcs/{vpc_id}` · `vpcs_get`</sub>

## `digitalocean.vpcsPatch`

Partially Update a VPC

```ts
digitalocean.vpcsPatch(input: {
  /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name?: string;
  /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
  description?: string;
  /** A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined. */
  default?: boolean;
  /** A unique identifier for a VPC. */
  vpc_id: string;
}): Promise<{ vpc?: Vpc }>
```

<sub>`PATCH /v2/vpcs/{vpc_id}` · `vpcs_patch`</sub>

## `digitalocean.vpcsUpdate`

Update a VPC

```ts
digitalocean.vpcsUpdate(input: {
  /** The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name: string;
  /** A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters. */
  description?: string;
  /** A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined. */
  default?: boolean;
  /** A unique identifier for a VPC. */
  vpc_id: string;
}): Promise<{ vpc?: Vpc }>
```

<sub>`PUT /v2/vpcs/{vpc_id}` · `vpcs_update`</sub>

## `digitalocean.vpcsListMembers`

List the Member Resources of a VPC

```ts
digitalocean.vpcsListMembers(input: {
  /** A unique identifier for a VPC. */
  vpc_id: string;
  /** Used to filter VPC members by a resource type. */
  resource_type?: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ members?: (VpcMember)[] } & Pagination & Meta>
```

<sub>`GET /v2/vpcs/{vpc_id}/members` · `vpcs_list_members`</sub>

## `digitalocean.vpcsListPeerings`

List the Peerings of a VPC

```ts
digitalocean.vpcsListPeerings(input: {
  /** A unique identifier for a VPC. */
  vpc_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ peerings?: (VpcPeering)[] } & Pagination & Meta>
```

<sub>`GET /v2/vpcs/{vpc_id}/peerings` · `vpcs_list_peerings`</sub>

## `digitalocean.vpcsCreatePeerings`

Create a Peering with a VPC

```ts
digitalocean.vpcsCreatePeerings(input: {
  /** The name of the VPC peering. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name: string;
  /** The ID of the VPC to peer with. */
  vpc_id: string;
}, options: { params: { vpc_id: string } }): Promise<{ peering?: VpcPeering }>
```

<sub>`POST /v2/vpcs/{vpc_id}/peerings` · `vpcs_create_peerings`</sub>

## `digitalocean.vpcsPatchPeerings`

Update a VPC Peering

```ts
digitalocean.vpcsPatchPeerings(input: {
  /** The name of the VPC peering. Must be unique within the team and may only contain alphanumeric characters and dashes. */
  name: string;
  /** A unique identifier for a VPC. */
  vpc_id: string;
  /** A unique identifier for a VPC peering. */
  vpc_peering_id: string;
}): Promise<{ peering?: VpcPeering }>
```

<sub>`PATCH /v2/vpcs/{vpc_id}/peerings/{vpc_peering_id}` · `vpcs_patch_peerings`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

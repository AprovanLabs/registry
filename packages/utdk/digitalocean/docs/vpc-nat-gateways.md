# VPC NAT Gateways

5 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.vpcnatgatewaysList`

List All VPC NAT Gateways

```ts
digitalocean.vpcnatgatewaysList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** The current state of the VPC NAT gateway. */
  state?: "new" | "provisioning" | "active" | "deleting" | "error" | "invalid";
  /** The region where the VPC NAT gateway is located. */
  region?: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1" | "atl1";
  /** The type of the VPC NAT gateway. */
  type?: "public";
  /** The name of the VPC NAT gateway. */
  name?: string;
}): Promise<{ vpc_nat_gateways?: (VpcNatGatewayGet)[] } & Pagination & Meta>
```

<sub>`GET /v2/vpc_nat_gateways` · `vpcnatgateways_list`</sub>

## `digitalocean.vpcnatgatewaysCreate`

Create a New VPC NAT Gateway

```ts
digitalocean.vpcnatgatewaysCreate(input: {
  /** The human-readable name of the VPC NAT gateway. */
  name: string;
  /** The type of the VPC NAT gateway. */
  type: "PUBLIC";
  /** The region in which the VPC NAT gateway is created. */
  region: "nyc1" | "nyc2" | "nyc3" | "ams2" | "ams3" | "sfo1" | "sfo2" | "sfo3" | "sgp1" | "lon1" | "fra1" | "tor1" | "blr1" | "syd1" | "atl1";
  /** The size of the VPC NAT gateway. */
  size: number;
  /** An array of VPCs associated with the VPC NAT gateway. */
  vpcs: ({ vpc_uuid: string; default_gateway?: boolean })[];
  /** The UDP timeout in seconds for the VPC NAT gateway. */
  udp_timeout_seconds?: number;
  /** The ICMP timeout in seconds for the VPC NAT gateway. */
  icmp_timeout_seconds?: number;
  /** The TCP timeout in seconds for the VPC NAT gateway. */
  tcp_timeout_seconds?: number;
}): Promise<{ vpc_nat_gateway?: VpcNatGatewayCreate }>
```

<sub>`POST /v2/vpc_nat_gateways` · `vpcnatgateways_create`</sub>

## `digitalocean.vpcnatgatewaysDelete`

Delete VPC NAT Gateway

```ts
digitalocean.vpcnatgatewaysDelete(input: {
  /** The unique identifier of the VPC NAT gateway. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/vpc_nat_gateways/{id}` · `vpcnatgateways_delete`</sub>

## `digitalocean.vpcnatgatewaysGet`

Retrieve an Existing VPC NAT Gateway

```ts
digitalocean.vpcnatgatewaysGet(input: {
  /** The unique identifier of the VPC NAT gateway. */
  id: string;
}): Promise<{ vpc_nat_gateway?: VpcNatGatewayGet }>
```

<sub>`GET /v2/vpc_nat_gateways/{id}` · `vpcnatgateways_get`</sub>

## `digitalocean.vpcnatgatewaysUpdate`

Update VPC NAT Gateway

```ts
digitalocean.vpcnatgatewaysUpdate(input: {
  /** The human-readable name of the VPC NAT gateway. */
  name: string;
  /** The size of the VPC NAT gateway. */
  size: number;
  /** An array of VPCs associated with the VPC NAT gateway. */
  vpcs?: ({ vpc_uuid?: string; default_gateway?: boolean })[];
  /** The UDP timeout in seconds for the VPC NAT gateway. */
  udp_timeout_seconds?: number;
  /** The ICMP timeout in seconds for the VPC NAT gateway. */
  icmp_timeout_seconds?: number;
  /** The TCP timeout in seconds for the VPC NAT gateway. */
  tcp_timeout_seconds?: number;
  /** The unique identifier of the VPC NAT gateway. */
  id: string;
}): Promise<{ vpc_nat_gateway?: VpcNatGatewayUpdate }>
```

<sub>`PUT /v2/vpc_nat_gateways/{id}` · `vpcnatgateways_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

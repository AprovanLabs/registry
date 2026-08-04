# Partner Network Connect

9 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.partnerAttachmentsList`

List all partner attachments

```ts
digitalocean.partnerAttachmentsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ partner_attachments?: (PartnerAttachment)[] } & Pagination & Meta>
```

<sub>`GET /v2/partner_network_connect/attachments` · `partnerAttachments_list`</sub>

## `digitalocean.partnerAttachmentsCreate`

Create a new partner attachment

```ts
digitalocean.partnerAttachmentsCreate(input: {
  /** The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods. */
  name: string;
  /** Bandwidth (in Mbps) of the connection. */
  connection_bandwidth_in_mbps: 1000 | 2000 | 5000 | 10000;
  /** The region to create the partner attachment. */
  region: "nyc" | "sfo" | "fra" | "ams" | "sgp";
  naas_provider: string;
  /** An array of VPCs IDs. */
  vpc_ids: (string)[];
  /** Optional associated partner attachment UUID */
  parent_uuid?: string;
  /** Optional BGP configurations */
  bgp?: { local_router_ip: string; peer_router_ip: string; peer_router_asn: number; auth_key: string };
  /** Optional redundancy zone for the partner attachment. */
  redundancy_zone?: "MEGAPORT_BLUE" | "MEGAPORT_RED";
}): Promise<{ partner_attachment?: PartnerAttachment }>
```

<sub>`POST /v2/partner_network_connect/attachments` · `partnerAttachments_create`</sub>

## `digitalocean.partnerAttachmentsDelete`

Delete an existing partner attachment

```ts
digitalocean.partnerAttachmentsDelete(input: {
  /** A unique identifier for a partner attachment. */
  pa_id: string;
}): Promise<{ partner_attachment?: PartnerAttachment }>
```

<sub>`DELETE /v2/partner_network_connect/attachments/{pa_id}` · `partnerAttachments_delete`</sub>

## `digitalocean.partnerAttachmentsGet`

Retrieve an existing partner attachment

```ts
digitalocean.partnerAttachmentsGet(input: {
  /** A unique identifier for a partner attachment. */
  pa_id: string;
}): Promise<{ partner_attachment?: PartnerAttachment }>
```

<sub>`GET /v2/partner_network_connect/attachments/{pa_id}` · `partnerAttachments_get`</sub>

## `digitalocean.partnerAttachmentsPatch`

Update an existing partner attachment

```ts
digitalocean.partnerAttachmentsPatch(input: {
  body?: PartnerAttachmentUpdatable;
  /** A unique identifier for a partner attachment. */
  pa_id: string;
}): Promise<{ partner_attachment?: PartnerAttachment }>
```

<sub>`PATCH /v2/partner_network_connect/attachments/{pa_id}` · `partnerAttachments_patch`</sub>

## `digitalocean.partnerAttachmentsGetBgpAuthKey`

Get current BGP auth key for the partner attachment

```ts
digitalocean.partnerAttachmentsGetBgpAuthKey(input: {
  /** A unique identifier for a partner attachment. */
  pa_id: string;
}): Promise<{ bgp_auth_key?: { [key: string]: unknown } }>
```

<sub>`GET /v2/partner_network_connect/attachments/{pa_id}/bgp_auth_key` · `partnerAttachments_get_bgp_auth_key`</sub>

## `digitalocean.partnerAttachmentsListRemoteRoutes`

List remote routes for a partner attachment

```ts
digitalocean.partnerAttachmentsListRemoteRoutes(input: {
  /** A unique identifier for a partner attachment. */
  pa_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ remote_routes?: (PartnerAttachmentRemoteRoute)[] } & Pagination & Meta>
```

<sub>`GET /v2/partner_network_connect/attachments/{pa_id}/remote_routes` · `partnerAttachments_list_remote_routes`</sub>

## `digitalocean.partnerAttachmentsGetServiceKey`

Get the current service key for the partner attachment

```ts
digitalocean.partnerAttachmentsGetServiceKey(input: {
  /** A unique identifier for a partner attachment. */
  pa_id: string;
}): Promise<{ service_key?: { [key: string]: unknown } }>
```

<sub>`GET /v2/partner_network_connect/attachments/{pa_id}/service_key` · `partnerAttachments_get_service_key`</sub>

## `digitalocean.partnerAttachmentsCreateServiceKey`

Regenerate the service key for the partner attachment

```ts
digitalocean.partnerAttachmentsCreateServiceKey(input: {
  /** A unique identifier for a partner attachment. */
  pa_id: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`POST /v2/partner_network_connect/attachments/{pa_id}/service_key` · `partnerAttachments_create_service_key`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

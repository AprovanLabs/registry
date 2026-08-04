# NFS

11 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.nfsList`

List NFS shares per region

```ts
digitalocean.nfsList(input: {
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region?: string;
}): Promise<NfsListResponse>
```

<sub>`GET /v2/nfs` · `nfs_list`</sub>

## `digitalocean.nfsCreate`

Create a new NFS share

```ts
digitalocean.nfsCreate(input: {
  /** The human-readable name of the share. */
  name: string;
  /** The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50. */
  size_gib: number;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region: string;
  /** List of VPC IDs that should be able to access the share. */
  vpc_ids: (string)[];
  /** The performance tier of the share. */
  performance_tier?: string;
}): Promise<NfsCreateResponse>
```

<sub>`POST /v2/nfs` · `nfs_create`</sub>

## `digitalocean.nfsDelete`

Delete an NFS share

```ts
digitalocean.nfsDelete(input: {
  /** The unique ID of the NFS share */
  nfs_id: string;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region?: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/nfs/{nfs_id}` · `nfs_delete`</sub>

## `digitalocean.nfsGet`

Get an NFS share

```ts
digitalocean.nfsGet(input: {
  /** The unique ID of the NFS share */
  nfs_id: string;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region?: string;
}): Promise<NfsGetResponse>
```

<sub>`GET /v2/nfs/{nfs_id}` · `nfs_get`</sub>

## `digitalocean.nfsDeleteAccessPoint`

Delete an NFS access point

```ts
digitalocean.nfsDeleteAccessPoint(input: {
  /** The unique identifier of the NFS access point. */
  access_point_id: string;
}): Promise<AccessPointActionResponse>
```

<sub>`DELETE /v2/nfs/access_points/{access_point_id}` · `nfs_delete_access_point`</sub>

## `digitalocean.nfsGetAccessPoint`

Get an NFS access point

```ts
digitalocean.nfsGetAccessPoint(input: {
  /** The unique identifier of the NFS access point. */
  access_point_id: string;
}): Promise<AccessPointGetResponse>
```

<sub>`GET /v2/nfs/access_points/{access_point_id}` · `nfs_get_access_point`</sub>

## `digitalocean.nfsListAccessPoints`

List NFS access points for a share

```ts
digitalocean.nfsListAccessPoints(input: {
  /** The unique identifier of the NFS share. */
  share_id: string;
  /** Filter access points by status. */
  status?: "ACCESS_POINT_CREATING" | "ACCESS_POINT_ACTIVE" | "ACCESS_POINT_FAILED" | "ACCESS_POINT_DELETED";
}): Promise<AccessPointListResponse>
```

<sub>`GET /v2/nfs/shares/{share_id}/access_points` · `nfs_list_access_points`</sub>

## `digitalocean.nfsCreateAccessPoint`

Create an NFS access point

```ts
digitalocean.nfsCreateAccessPoint(input: {
  /** The name for the access point. Must be unique per share. Must be 2–63 characters and match `^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$`. The name `default` is reserved (case-insensitive) for the implicit default access point created with each share.  */
  name: string;
  /** The export sub-path. Must start with `/`, must not be exactly `/` (reserved for the default access point), must be at most 1024 characters, may contain only alphanumerics, `-`, `_`, `.`, and `/`, and must not contain `..` path segments.  */
  path: string;
  access_policy: AccessPolicy;
  /** Required. The VPC this access point will be pinned to. A storage gateway is provisioned (or reused) in this VPC, and the access point becomes mountable from this VPC regardless of whether the parent share is currently attached to it.  */
  vpc_id: string;
  /** The unique identifier of the NFS share. */
  share_id: string;
}): Promise<AccessPointActionResponse>
```

<sub>`POST /v2/nfs/shares/{share_id}/access_points` · `nfs_create_access_point`</sub>

## `digitalocean.nfsListSnapshot`

List NFS snapshots per region

```ts
digitalocean.nfsListSnapshot(input: {
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region?: string;
  /** The unique ID of an NFS share. If provided, only snapshots of this specific share will be returned. */
  share_id?: string;
}): Promise<NfsSnapshotListResponse>
```

<sub>`GET /v2/nfs/snapshots` · `nfs_list_snapshot`</sub>

## `digitalocean.nfsDeleteSnapshot`

Delete an NFS snapshot

```ts
digitalocean.nfsDeleteSnapshot(input: {
  /** The unique ID of the NFS snapshot */
  nfs_snapshot_id: string;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region?: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/nfs/snapshots/{nfs_snapshot_id}` · `nfs_delete_snapshot`</sub>

## `digitalocean.nfsGetSnapshot`

Get an NFS snapshot by ID

```ts
digitalocean.nfsGetSnapshot(input: {
  /** The unique ID of the NFS snapshot */
  nfs_snapshot_id: string;
  /** The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. */
  region?: string;
}): Promise<NfsSnapshotGetResponse>
```

<sub>`GET /v2/nfs/snapshots/{nfs_snapshot_id}` · `nfs_get_snapshot`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

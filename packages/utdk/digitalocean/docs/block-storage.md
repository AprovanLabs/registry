# Block Storage

9 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.volumesDeleteByName`

Delete a Block Storage Volume by Name

```ts
digitalocean.volumesDeleteByName(input: {
  /** The block storage volume's name. */
  name?: string;
  region?: RegionSlug;
}): Promise<undefined>
```

<sub>`DELETE /v2/volumes` · `volumes_delete_byName`</sub>

## `digitalocean.volumesList`

List All Block Storage Volumes

```ts
digitalocean.volumesList(input: {
  /** The block storage volume's name. */
  name?: string;
  region?: RegionSlug;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ volumes: (VolumeFull)[] } & Pagination & Meta>
```

<sub>`GET /v2/volumes` · `volumes_list`</sub>

## `digitalocean.volumesCreate`

Create a New Block Storage Volume

```ts
digitalocean.volumesCreate(input: {
  body: VolumesExt4 | VolumesXfs;
}): Promise<{ volume?: VolumeFull }>
```

<sub>`POST /v2/volumes` · `volumes_create`</sub>

## `digitalocean.volumesDelete`

Delete a Block Storage Volume

```ts
digitalocean.volumesDelete(input: {
  /** The ID of the block storage volume. */
  volume_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/volumes/{volume_id}` · `volumes_delete`</sub>

## `digitalocean.volumesGet`

Retrieve an Existing Block Storage Volume

```ts
digitalocean.volumesGet(input: {
  /** The ID of the block storage volume. */
  volume_id: string;
}): Promise<{ volume?: VolumeFull }>
```

<sub>`GET /v2/volumes/{volume_id}` · `volumes_get`</sub>

## `digitalocean.volumeSnapshotsList`

List Snapshots for a Volume

```ts
digitalocean.volumeSnapshotsList(input: {
  /** The ID of the block storage volume. */
  volume_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ snapshots?: (Snapshots)[] } & Pagination & Meta>
```

<sub>`GET /v2/volumes/{volume_id}/snapshots` · `volumeSnapshots_list`</sub>

## `digitalocean.volumeSnapshotsCreate`

Create Snapshot from a Volume

```ts
digitalocean.volumeSnapshotsCreate(input: {
  /** A human-readable name for the volume snapshot. */
  name: string;
  tags?: TagsArray;
  /** The ID of the block storage volume. */
  volume_id: string;
}): Promise<{ snapshot?: Snapshots }>
```

<sub>`POST /v2/volumes/{volume_id}/snapshots` · `volumeSnapshots_create`</sub>

## `digitalocean.volumeSnapshotsDeleteById`

Delete a Volume Snapshot

```ts
digitalocean.volumeSnapshotsDeleteById(input: {
  /** The unique identifier for the snapshot. */
  snapshot_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/volumes/snapshots/{snapshot_id}` · `volumeSnapshots_delete_byId`</sub>

## `digitalocean.volumeSnapshotsGetById`

Retrieve an Existing Volume Snapshot

```ts
digitalocean.volumeSnapshotsGetById(input: {
  /** The unique identifier for the snapshot. */
  snapshot_id: string;
}): Promise<{ snapshot?: Snapshots }>
```

<sub>`GET /v2/volumes/snapshots/{snapshot_id}` · `volumeSnapshots_get_byId`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

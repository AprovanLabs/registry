# Snapshots

3 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.snapshotsList`

List All Snapshots

```ts
digitalocean.snapshotsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Used to filter snapshots by a resource type. */
  resource_type?: "droplet" | "volume";
}): Promise<{ snapshots?: (Snapshots)[] } & Pagination & Meta>
```

<sub>`GET /v2/snapshots` · `snapshots_list`</sub>

## `digitalocean.snapshotsDelete`

Delete a Snapshot

```ts
digitalocean.snapshotsDelete(input: {
  /** Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot. */
  snapshot_id: number | string;
}): Promise<undefined>
```

<sub>`DELETE /v2/snapshots/{snapshot_id}` · `snapshots_delete`</sub>

## `digitalocean.snapshotsGet`

Retrieve an Existing Snapshot

```ts
digitalocean.snapshotsGet(input: {
  /** Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot. */
  snapshot_id: number | string;
}): Promise<{ snapshot?: Snapshots }>
```

<sub>`GET /v2/snapshots/{snapshot_id}` · `snapshots_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

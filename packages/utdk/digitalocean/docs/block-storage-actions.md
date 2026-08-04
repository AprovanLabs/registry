# Block Storage Actions

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.volumeActionsList`

List All Actions for a Volume

```ts
digitalocean.volumeActionsList(input: {
  /** The ID of the block storage volume. */
  volume_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ actions?: (VolumeAction)[] } & Pagination & Meta>
```

<sub>`GET /v2/volumes/{volume_id}/actions` · `volumeActions_list`</sub>

## `digitalocean.volumeActionsPostById`

Initiate A Block Storage Action By Volume Id

```ts
digitalocean.volumeActionsPostById(input: {
  body: VolumeActionPostAttach | VolumeActionPostDetach | VolumeActionPostResize;
  /** The ID of the block storage volume. */
  volume_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ action?: VolumeAction }>
```

<sub>`POST /v2/volumes/{volume_id}/actions` · `volumeActions_post_byId`</sub>

## `digitalocean.volumeActionsGet`

Retrieve an Existing Volume Action

```ts
digitalocean.volumeActionsGet(input: {
  /** The ID of the block storage volume. */
  volume_id: string;
  /** A unique numeric ID that can be used to identify and reference an action. */
  action_id: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ action?: VolumeAction }>
```

<sub>`GET /v2/volumes/{volume_id}/actions/{action_id}` · `volumeActions_get`</sub>

## `digitalocean.volumeActionsPost`

Initiate A Block Storage Action By Volume Name

```ts
digitalocean.volumeActionsPost(input: {
  body: VolumeActionPostAttach | VolumeActionPostDetach;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ action?: VolumeAction }>
```

<sub>`POST /v2/volumes/actions` · `volumeActions_post`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

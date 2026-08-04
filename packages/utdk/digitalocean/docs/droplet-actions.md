# Droplet Actions

4 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.dropletActionsList`

List Actions for a Droplet

```ts
digitalocean.dropletActionsList(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ actions?: (Action)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/{droplet_id}/actions` · `dropletActions_list`</sub>

## `digitalocean.dropletActionsPost`

Initiate a Droplet Action

```ts
digitalocean.dropletActionsPost(input: {
  body?: DropletAction | DropletActionEnableBackups | DropletActionChangeBackupPolicy | DropletActionRestore | DropletActionResize | DropletActionRebuild | DropletActionRename | DropletActionChangeKernel | DropletActionSnapshot;
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<{ action?: Action }>
```

<sub>`POST /v2/droplets/{droplet_id}/actions` · `dropletActions_post`</sub>

## `digitalocean.dropletActionsGet`

Retrieve a Droplet Action

```ts
digitalocean.dropletActionsGet(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
  /** A unique numeric ID that can be used to identify and reference an action. */
  action_id: number;
}): Promise<{ action?: Action }>
```

<sub>`GET /v2/droplets/{droplet_id}/actions/{action_id}` · `dropletActions_get`</sub>

## `digitalocean.dropletActionsPostByTag`

Acting on Tagged Droplets

```ts
digitalocean.dropletActionsPostByTag(input: {
  body?: DropletAction | DropletActionSnapshot;
  /** Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope. */
  tag_name?: string;
}): Promise<{ actions?: (Action)[] }>
```

<sub>`POST /v2/droplets/actions` · `dropletActions_post_byTag`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

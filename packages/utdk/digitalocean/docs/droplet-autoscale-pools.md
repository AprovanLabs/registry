# Droplet Autoscale Pools

8 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.autoscalepoolsList`

List All Autoscale Pools

```ts
digitalocean.autoscalepoolsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** The name of the autoscale pool */
  name?: string;
}): Promise<{ autoscale_pools?: (AutoscalePool)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/autoscale` · `autoscalepools_list`</sub>

## `digitalocean.autoscalepoolsCreate`

Create a New Autoscale Pool

```ts
digitalocean.autoscalepoolsCreate(input: {
  /** The human-readable name of the autoscale pool. This field cannot be updated */
  name: string;
  /** The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration). */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;
  droplet_template: AutoscalePoolDropletTemplate;
}): Promise<{ autoscale_pool?: AutoscalePool }>
```

<sub>`POST /v2/droplets/autoscale` · `autoscalepools_create`</sub>

## `digitalocean.autoscalepoolsDelete`

Delete autoscale pool

```ts
digitalocean.autoscalepoolsDelete(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/droplets/autoscale/{autoscale_pool_id}` · `autoscalepools_delete`</sub>

## `digitalocean.autoscalepoolsGet`

Retrieve an Existing Autoscale Pool

```ts
digitalocean.autoscalepoolsGet(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
}): Promise<{ autoscale_pool?: AutoscalePool }>
```

<sub>`GET /v2/droplets/autoscale/{autoscale_pool_id}` · `autoscalepools_get`</sub>

## `digitalocean.autoscalepoolsUpdate`

Update Autoscale Pool

```ts
digitalocean.autoscalepoolsUpdate(input: {
  /** The human-readable name of the autoscale pool. This field cannot be updated */
  name: string;
  /** The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration). */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;
  droplet_template: AutoscalePoolDropletTemplate;
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
}): Promise<{ autoscale_pool?: AutoscalePool }>
```

<sub>`PUT /v2/droplets/autoscale/{autoscale_pool_id}` · `autoscalepools_update`</sub>

## `digitalocean.autoscalepoolsDeleteDangerous`

Delete autoscale pool and resources

```ts
digitalocean.autoscalepoolsDeleteDangerous(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
}, options: { headers: { "X-Dangerous": boolean } }): Promise<undefined>
```

<sub>`DELETE /v2/droplets/autoscale/{autoscale_pool_id}/dangerous` · `autoscalepools_delete_dangerous`</sub>

## `digitalocean.autoscalepoolsListHistory`

List history events

```ts
digitalocean.autoscalepoolsListHistory(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ history?: (History)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/autoscale/{autoscale_pool_id}/history` · `autoscalepools_list_history`</sub>

## `digitalocean.autoscalepoolsListMembers`

List members

```ts
digitalocean.autoscalepoolsListMembers(input: {
  /** A unique identifier for an autoscale pool. */
  autoscale_pool_id: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ droplets?: (Member)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/autoscale/{autoscale_pool_id}/members` · `autoscalepools_list_members`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

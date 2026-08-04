# Load Balancers

10 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.loadBalancersList`

List All Load Balancers

```ts
digitalocean.loadBalancersList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ load_balancers?: (LoadBalancer)[] } & Pagination & Meta>
```

<sub>`GET /v2/load_balancers` · `loadBalancers_list`</sub>

## `digitalocean.loadBalancersCreate`

Create a New Load Balancer

```ts
digitalocean.loadBalancersCreate(input: {
  body: LoadBalancerCreate;
}): Promise<{ load_balancer?: LoadBalancer }>
```

<sub>`POST /v2/load_balancers` · `loadBalancers_create`</sub>

## `digitalocean.loadBalancersDelete`

Delete a Load Balancer

```ts
digitalocean.loadBalancersDelete(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/load_balancers/{lb_id}` · `loadBalancers_delete`</sub>

## `digitalocean.loadBalancersGet`

Retrieve an Existing Load Balancer

```ts
digitalocean.loadBalancersGet(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<{ load_balancer?: LoadBalancer }>
```

<sub>`GET /v2/load_balancers/{lb_id}` · `loadBalancers_get`</sub>

## `digitalocean.loadBalancersUpdate`

Update a Load Balancer

```ts
digitalocean.loadBalancersUpdate(input: {
  body: LoadBalancerCreate;
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<{ load_balancer?: LoadBalancer }>
```

<sub>`PUT /v2/load_balancers/{lb_id}` · `loadBalancers_update`</sub>

## `digitalocean.loadBalancersDeleteCache`

Delete a Global Load Balancer CDN Cache

```ts
digitalocean.loadBalancersDeleteCache(input: {
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/load_balancers/{lb_id}/cache` · `loadBalancers_delete_cache`</sub>

## `digitalocean.loadBalancersRemoveDroplets`

Remove Droplets from a Load Balancer

```ts
digitalocean.loadBalancersRemoveDroplets(input: {
  /** An array containing the IDs of the Droplets assigned to the load balancer. */
  droplet_ids: (number)[];
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/load_balancers/{lb_id}/droplets` · `loadBalancers_remove_droplets`</sub>

## `digitalocean.loadBalancersAddDroplets`

Add Droplets to a Load Balancer

```ts
digitalocean.loadBalancersAddDroplets(input: {
  /** An array containing the IDs of the Droplets assigned to the load balancer. */
  droplet_ids: (number)[];
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/load_balancers/{lb_id}/droplets` · `loadBalancers_add_droplets`</sub>

## `digitalocean.loadBalancersRemoveForwardingRules`

Remove Forwarding Rules from a Load Balancer

```ts
digitalocean.loadBalancersRemoveForwardingRules(input: {
  forwarding_rules: (ForwardingRule)[];
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/load_balancers/{lb_id}/forwarding_rules` · `loadBalancers_remove_forwardingRules`</sub>

## `digitalocean.loadBalancersAddForwardingRules`

Add Forwarding Rules to a Load Balancer

```ts
digitalocean.loadBalancersAddForwardingRules(input: {
  forwarding_rules: (ForwardingRule)[];
  /** A unique identifier for a load balancer. */
  lb_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/load_balancers/{lb_id}/forwarding_rules` · `loadBalancers_add_forwardingRules`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

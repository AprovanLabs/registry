# Firewalls

11 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.firewallsList`

List All Firewalls

```ts
digitalocean.firewallsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ firewalls?: (Firewall)[] } & Pagination & Meta>
```

<sub>`GET /v2/firewalls` · `firewalls_list`</sub>

## `digitalocean.firewallsCreate`

Create a New Firewall

```ts
digitalocean.firewallsCreate(input: {
  body?: Firewall & unknown & unknown | unknown;
}): Promise<{ firewall?: Firewall }>
```

<sub>`POST /v2/firewalls` · `firewalls_create`</sub>

## `digitalocean.firewallsDelete`

Delete a Firewall

```ts
digitalocean.firewallsDelete(input: {
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/firewalls/{firewall_id}` · `firewalls_delete`</sub>

## `digitalocean.firewallsGet`

Retrieve an Existing Firewall

```ts
digitalocean.firewallsGet(input: {
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<{ firewall?: Firewall }>
```

<sub>`GET /v2/firewalls/{firewall_id}` · `firewalls_get`</sub>

## `digitalocean.firewallsUpdate`

Update a Firewall

```ts
digitalocean.firewallsUpdate(input: {
  body?: Firewall & unknown | unknown;
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<{ firewall?: Firewall }>
```

<sub>`PUT /v2/firewalls/{firewall_id}` · `firewalls_update`</sub>

## `digitalocean.firewallsDeleteDroplets`

Remove Droplets from a Firewall

```ts
digitalocean.firewallsDeleteDroplets(input: {
  /** An array containing the IDs of the Droplets to be removed from the firewall. */
  droplet_ids: (number)[];
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/firewalls/{firewall_id}/droplets` · `firewalls_delete_droplets`</sub>

## `digitalocean.firewallsAssignDroplets`

Add Droplets to a Firewall

```ts
digitalocean.firewallsAssignDroplets(input: {
  /** An array containing the IDs of the Droplets to be assigned to the firewall. */
  droplet_ids: (number)[];
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/firewalls/{firewall_id}/droplets` · `firewalls_assign_droplets`</sub>

## `digitalocean.firewallsDeleteRules`

Remove Rules from a Firewall

```ts
digitalocean.firewallsDeleteRules(input: {
  body?: FirewallRules & unknown | unknown;
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/firewalls/{firewall_id}/rules` · `firewalls_delete_rules`</sub>

## `digitalocean.firewallsAddRules`

Add Rules to a Firewall

```ts
digitalocean.firewallsAddRules(input: {
  body?: FirewallRules & unknown | unknown;
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/firewalls/{firewall_id}/rules` · `firewalls_add_rules`</sub>

## `digitalocean.firewallsDeleteTags`

Remove Tags from a Firewall

```ts
digitalocean.firewallsDeleteTags(input: {
  tags: ExistingTagsArray & unknown;
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/firewalls/{firewall_id}/tags` · `firewalls_delete_tags`</sub>

## `digitalocean.firewallsAddTags`

Add Tags to a Firewall

```ts
digitalocean.firewallsAddTags(input: {
  tags: ExistingTagsArray & unknown;
  /** A unique ID that can be used to identify and reference a firewall. */
  firewall_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/firewalls/{firewall_id}/tags` · `firewalls_add_tags`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

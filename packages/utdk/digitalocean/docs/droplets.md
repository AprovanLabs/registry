# Droplets

19 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.dropletsDestroyByTag`

Deleting Droplets by Tag

```ts
digitalocean.dropletsDestroyByTag(input: {
  /** Specifies Droplets to be deleted by tag. */
  tag_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/droplets` · `droplets_destroy_byTag`</sub>

## `digitalocean.dropletsList`

List All Droplets

```ts
digitalocean.dropletsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope. */
  tag_name?: string;
  /** Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`. */
  name?: string;
  /** When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`. */
  type?: "droplets" | "gpus";
}): Promise<{ droplets?: (Droplet)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets` · `droplets_list`</sub>

## `digitalocean.dropletsCreate`

Create a New Droplet

```ts
digitalocean.dropletsCreate(input: {
  body?: DropletSingleCreate | DropletMultiCreate;
}): Promise<{ droplet: Droplet; links: { actions?: (ActionLink)[] } } | { droplets: (Droplet)[]; links: { actions?: (ActionLink)[] } }>
```

<sub>`POST /v2/droplets` · `droplets_create`</sub>

## `digitalocean.dropletsDestroy`

Delete an Existing Droplet

```ts
digitalocean.dropletsDestroy(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<undefined>
```

<sub>`DELETE /v2/droplets/{droplet_id}` · `droplets_destroy`</sub>

## `digitalocean.dropletsGet`

Retrieve an Existing Droplet

```ts
digitalocean.dropletsGet(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<{ droplet?: Droplet }>
```

<sub>`GET /v2/droplets/{droplet_id}` · `droplets_get`</sub>

## `digitalocean.dropletsListBackups`

List Backups for a Droplet

```ts
digitalocean.dropletsListBackups(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ backups?: (DropletSnapshot)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/{droplet_id}/backups` · `droplets_list_backups`</sub>

## `digitalocean.dropletsGetBackupPolicy`

Retrieve the Backup Policy for an Existing Droplet

```ts
digitalocean.dropletsGetBackupPolicy(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<{ policy?: DropletBackupPolicyRecord }>
```

<sub>`GET /v2/droplets/{droplet_id}/backups/policy` · `droplets_get_backup_policy`</sub>

## `digitalocean.dropletsListAssociatedResources`

List Associated Resources for a Droplet

```ts
digitalocean.dropletsListAssociatedResources(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<{ reserved_ips?: (AssociatedResource)[]; floating_ips?: (AssociatedResource)[]; snapshots?: (AssociatedResource)[]; volumes?: (AssociatedResource)[]; volume_snapshots?: (AssociatedResource)[] }>
```

<sub>`GET /v2/droplets/{droplet_id}/destroy_with_associated_resources` · `droplets_list_associatedResources`</sub>

## `digitalocean.dropletsDestroyWithAssociatedResourcesDangerous`

Destroy a Droplet and All of its Associated Resources (Dangerous)

```ts
digitalocean.dropletsDestroyWithAssociatedResourcesDangerous(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}, options: { headers: { "X-Dangerous": boolean } }): Promise<undefined>
```

<sub>`DELETE /v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous` · `droplets_destroy_withAssociatedResourcesDangerous`</sub>

## `digitalocean.dropletsDestroyRetryWithAssociatedResources`

Retry a Droplet Destroy with Associated Resources Request

```ts
digitalocean.dropletsDestroyRetryWithAssociatedResources(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<undefined>
```

<sub>`POST /v2/droplets/{droplet_id}/destroy_with_associated_resources/retry` · `droplets_destroy_retryWithAssociatedResources`</sub>

## `digitalocean.dropletsDestroyWithAssociatedResourcesSelective`

Selectively Destroy a Droplet and its Associated Resources

```ts
digitalocean.dropletsDestroyWithAssociatedResourcesSelective(input: {
  /** An array of unique identifiers for the floating IPs to be scheduled for deletion. */
  floating_ips?: (string)[];
  /** An array of unique identifiers for the reserved IPs to be scheduled for deletion. */
  reserved_ips?: (string)[];
  /** An array of unique identifiers for the snapshots to be scheduled for deletion. */
  snapshots?: (string)[];
  /** An array of unique identifiers for the volumes to be scheduled for deletion. */
  volumes?: (string)[];
  /** An array of unique identifiers for the volume snapshots to be scheduled for deletion. */
  volume_snapshots?: (string)[];
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<undefined>
```

<sub>`DELETE /v2/droplets/{droplet_id}/destroy_with_associated_resources/selective` · `droplets_destroy_withAssociatedResourcesSelective`</sub>

## `digitalocean.dropletsGetDestroyAssociatedResourcesStatus`

Check Status of a Droplet Destroy with Associated Resources Request

```ts
digitalocean.dropletsGetDestroyAssociatedResourcesStatus(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<AssociatedResourceStatus>
```

<sub>`GET /v2/droplets/{droplet_id}/destroy_with_associated_resources/status` · `droplets_get_DestroyAssociatedResourcesStatus`</sub>

## `digitalocean.dropletsListFirewalls`

List all Firewalls Applied to a Droplet

```ts
digitalocean.dropletsListFirewalls(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ firewalls?: (Firewall)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/{droplet_id}/firewalls` · `droplets_list_firewalls`</sub>

## `digitalocean.dropletsListKernels`

List All Available Kernels for a Droplet

```ts
digitalocean.dropletsListKernels(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ kernels?: (Kernel)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/{droplet_id}/kernels` · `droplets_list_kernels`</sub>

## `digitalocean.dropletsListNeighbors`

List Neighbors for a Droplet

```ts
digitalocean.dropletsListNeighbors(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
}): Promise<{ droplets?: (Droplet)[] }>
```

<sub>`GET /v2/droplets/{droplet_id}/neighbors` · `droplets_list_neighbors`</sub>

## `digitalocean.dropletsListSnapshots`

List Snapshots for a Droplet

```ts
digitalocean.dropletsListSnapshots(input: {
  /** A unique identifier for a Droplet instance. */
  droplet_id: number;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ snapshots?: (DropletSnapshot)[] } & Pagination & Meta>
```

<sub>`GET /v2/droplets/{droplet_id}/snapshots` · `droplets_list_snapshots`</sub>

## `digitalocean.dropletsListBackupPolicies`

List Backup Policies for All Existing Droplets

```ts
digitalocean.dropletsListBackupPolicies(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ policies?: { [key: string]: DropletBackupPolicyRecord | undefined } } & Pagination & Meta>
```

<sub>`GET /v2/droplets/backups/policies` · `droplets_list_backup_policies`</sub>

## `digitalocean.dropletsListSupportedBackupPolicies`

List Supported Droplet Backup Policies

```ts
digitalocean.dropletsListSupportedBackupPolicies(): Promise<{ supported_policies?: (SupportedDropletBackupPolicy)[] }>
```

<sub>`GET /v2/droplets/backups/supported_policies` · `droplets_list_supported_backup_policies`</sub>

## `digitalocean.dropletsListNeighborsIds`

List All Droplet Neighbors

```ts
digitalocean.dropletsListNeighborsIds(): Promise<NeighborIds>
```

<sub>`GET /v2/reports/droplet_neighbors_ids` · `droplets_list_neighborsIds`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

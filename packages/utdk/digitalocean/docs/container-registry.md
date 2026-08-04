# Container Registry

18 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.registryDelete`

Delete Container Registry

```ts
digitalocean.registryDelete(): Promise<undefined>
```

<sub>`DELETE /v2/registry` · `registry_delete`</sub>

## `digitalocean.registryGet`

Get Container Registry Information

```ts
digitalocean.registryGet(): Promise<{ registry?: Registry }>
```

<sub>`GET /v2/registry` · `registry_get`</sub>

## `digitalocean.registryCreate`

Create Container Registry

```ts
digitalocean.registryCreate(input: {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
  /** The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint. */
  subscription_tier_slug: "starter" | "basic" | "professional";
  /** Slug of the region where registry data is stored. When not provided, a region will be selected. */
  region?: "nyc3" | "sfo3" | "ams3" | "sgp1" | "fra1";
}): Promise<{ registry?: Registry }>
```

<sub>`POST /v2/registry` · `registry_create`</sub>

## `digitalocean.registryGetGarbageCollection`

Get Active Garbage Collection

```ts
digitalocean.registryGetGarbageCollection(input: {
  /** The name of a container registry. */
  registry_name: string;
}): Promise<{ garbage_collection?: GarbageCollection }>
```

<sub>`GET /v2/registry/{registry_name}/garbage-collection` · `registry_get_garbageCollection`</sub>

## `digitalocean.registryRunGarbageCollection`

Start Garbage Collection

```ts
digitalocean.registryRunGarbageCollection(input: {
  /** Type of the garbage collection to run against this registry */
  type?: "untagged manifests only" | "unreferenced blobs only" | "untagged manifests and unreferenced blobs";
  /** The name of a container registry. */
  registry_name: string;
}): Promise<{ garbage_collection?: GarbageCollection }>
```

<sub>`POST /v2/registry/{registry_name}/garbage-collection` · `registry_run_garbageCollection`</sub>

## `digitalocean.registryUpdateGarbageCollection`

Update Garbage Collection

```ts
digitalocean.registryUpdateGarbageCollection(input: {
  /** A boolean value indicating that the garbage collection should be cancelled. */
  cancel?: boolean;
  /** The name of a container registry. */
  registry_name: string;
  /** The UUID of a garbage collection run. */
  garbage_collection_uuid: string;
}): Promise<{ garbage_collection?: GarbageCollection }>
```

<sub>`PUT /v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}` · `registry_update_garbageCollection`</sub>

## `digitalocean.registryListGarbageCollections`

List Garbage Collections

```ts
digitalocean.registryListGarbageCollections(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ garbage_collections?: (GarbageCollection)[] }>
```

<sub>`GET /v2/registry/{registry_name}/garbage-collections` · `registry_list_garbageCollections`</sub>

## `digitalocean.registryListRepositories`

List All Container Registry Repositories

```ts
digitalocean.registryListRepositories(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ repositories?: (Repository)[] } & Pagination & Meta>
```

<sub>`GET /v2/registry/{registry_name}/repositories` · `registry_list_repositories`</sub>

## `digitalocean.registryListRepositoryManifests`

List All Container Registry Repository Manifests

```ts
digitalocean.registryListRepositoryManifests(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ manifests?: (RepositoryManifest)[] } & Pagination & Meta>
```

<sub>`GET /v2/registry/{registry_name}/repositories/{repository_name}/digests` · `registry_list_repositoryManifests`</sub>

## `digitalocean.registryDeleteRepositoryManifest`

Delete Container Registry Repository Manifest

```ts
digitalocean.registryDeleteRepositoryManifest(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
  /** The manifest digest of a container registry repository tag. */
  manifest_digest: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/registry/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}` · `registry_delete_repositoryManifest`</sub>

## `digitalocean.registryListRepositoryTags`

List All Container Registry Repository Tags

```ts
digitalocean.registryListRepositoryTags(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ tags?: (RepositoryTag)[] } & Pagination & Meta>
```

<sub>`GET /v2/registry/{registry_name}/repositories/{repository_name}/tags` · `registry_list_repositoryTags`</sub>

## `digitalocean.registryDeleteRepositoryTag`

Delete Container Registry Repository Tag

```ts
digitalocean.registryDeleteRepositoryTag(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
  /** The name of a container registry repository tag. */
  repository_tag: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/registry/{registry_name}/repositories/{repository_name}/tags/{repository_tag}` · `registry_delete_repositoryTag`</sub>

## `digitalocean.registryListRepositoriesV2`

List All Container Registry Repositories (V2)

```ts
digitalocean.registryListRepositoriesV2(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. Ignored when 'page_token' is provided. */
  page?: number;
  /** Token to retrieve of the next or previous set of results more quickly than using 'page'. */
  page_token?: string;
}): Promise<{ repositories?: (RepositoryV2)[] } & Pagination & Meta>
```

<sub>`GET /v2/registry/{registry_name}/repositoriesV2` · `registry_list_repositoriesV2`</sub>

## `digitalocean.registryGetDockerCredentials`

Get Docker Credentials for Container Registry

```ts
digitalocean.registryGetDockerCredentials(input: {
  /** The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire. */
  expiry_seconds?: number;
  /** By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials. */
  read_write?: boolean;
}): Promise<DockerCredentials>
```

<sub>`GET /v2/registry/docker-credentials` · `registry_get_dockerCredentials`</sub>

## `digitalocean.registryGetOptions`

List Registry Options (Subscription Tiers and Available Regions)

```ts
digitalocean.registryGetOptions(): Promise<{ options?: { available_regions?: (string)[]; subscription_tiers?: (SubscriptionTierBase & SubscriptionTierExtended)[] } }>
```

<sub>`GET /v2/registry/options` · `registry_get_options`</sub>

## `digitalocean.registryGetSubscription`

Get Subscription

```ts
digitalocean.registryGetSubscription(): Promise<{ subscription?: Subscription }>
```

<sub>`GET /v2/registry/subscription` · `registry_get_subscription`</sub>

## `digitalocean.registryUpdateSubscription`

Update Subscription Tier

```ts
digitalocean.registryUpdateSubscription(input: {
  /** The slug of the subscription tier to sign up for. */
  tier_slug?: "starter" | "basic" | "professional";
}): Promise<{ subscription?: Subscription }>
```

<sub>`POST /v2/registry/subscription` · `registry_update_subscription`</sub>

## `digitalocean.registryValidateName`

Validate a Container Registry Name

```ts
digitalocean.registryValidateName(input: {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
}): Promise<undefined>
```

<sub>`POST /v2/registry/validate-name` · `registry_validate_name`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

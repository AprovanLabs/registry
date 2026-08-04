# Container Registries

19 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.registriesList`

List All Container Registries

```ts
digitalocean.registriesList(): Promise<{ registries?: (Registry)[] }>
```

<sub>`GET /v2/registries` · `registries_list`</sub>

## `digitalocean.registriesCreate`

Create Container Registry

```ts
digitalocean.registriesCreate(input: {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
  /** The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint. */
  subscription_tier_slug?: "starter" | "basic" | "professional";
  /** Slug of the region where registry data is stored. When not provided, a region will be selected. */
  region?: "nyc3" | "sfo3" | "sfo2" | "ams3" | "sgp1" | "fra1" | "blr1" | "syd1";
}): Promise<{ registry?: Multiregistry }>
```

<sub>`POST /v2/registries` · `registries_create`</sub>

## `digitalocean.registriesDelete`

Delete Container Registry By Name

```ts
digitalocean.registriesDelete(input: {
  /** The name of a container registry. */
  registry_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/registries/{registry_name}` · `registries_delete`</sub>

## `digitalocean.registriesGet`

Get a Container Registry By Name

```ts
digitalocean.registriesGet(input: {
  /** The name of a container registry. */
  registry_name: string;
}): Promise<{ registry?: Multiregistry }>
```

<sub>`GET /v2/registries/{registry_name}` · `registries_get`</sub>

## `digitalocean.registriesGetDockerCredentials`

Get Docker Credentials By Registry Name

```ts
digitalocean.registriesGetDockerCredentials(input: {
  /** The name of a container registry. */
  registry_name: string;
}): Promise<DockerCredentials>
```

<sub>`GET /v2/registries/{registry_name}/docker-credentials` · `registries_get_dockerCredentials`</sub>

## `digitalocean.registriesGetGarbageCollection`

Get Active Garbage Collection

```ts
digitalocean.registriesGetGarbageCollection(input: {
  /** The name of a container registry. */
  registry_name: string;
}): Promise<{ garbage_collection?: GarbageCollection }>
```

<sub>`GET /v2/registries/{registry_name}/garbage-collection` · `registries_get_garbageCollection`</sub>

## `digitalocean.registriesRunGarbageCollection`

Start Garbage Collection

```ts
digitalocean.registriesRunGarbageCollection(input: {
  /** The name of a container registry. */
  registry_name: string;
}): Promise<{ garbage_collection?: GarbageCollection }>
```

<sub>`POST /v2/registries/{registry_name}/garbage-collection` · `registries_run_garbageCollection`</sub>

## `digitalocean.registriesUpdateGarbageCollection`

Update Garbage Collection

```ts
digitalocean.registriesUpdateGarbageCollection(input: {
  /** A boolean value indicating that the garbage collection should be cancelled. */
  cancel?: boolean;
  /** The name of a container registry. */
  registry_name: string;
  /** The UUID of a garbage collection run. */
  garbage_collection_uuid: string;
}): Promise<{ garbage_collection?: GarbageCollection }>
```

<sub>`PUT /v2/registries/{registry_name}/garbage-collection/{garbage_collection_uuid}` · `registries_update_garbageCollection`</sub>

## `digitalocean.registriesListGarbageCollections`

List Garbage Collections

```ts
digitalocean.registriesListGarbageCollections(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ garbage_collections?: (GarbageCollection)[] }>
```

<sub>`GET /v2/registries/{registry_name}/garbage-collections` · `registries_list_garbageCollections`</sub>

## `digitalocean.registriesDeleteRepository`

Delete Container Registry Repository

```ts
digitalocean.registriesDeleteRepository(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/registries/{registry_name}/repositories/{repository_name}` · `registries_delete_repository`</sub>

## `digitalocean.registriesListRepositoryManifests`

List All Container Registry Repository Manifests

```ts
digitalocean.registriesListRepositoryManifests(input: {
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

<sub>`GET /v2/registries/{registry_name}/repositories/{repository_name}/digests` · `registries_list_repositoryManifests`</sub>

## `digitalocean.registriesDeleteRepositoryManifest`

Delete Container Registry Repository Manifest

```ts
digitalocean.registriesDeleteRepositoryManifest(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
  /** The manifest digest of a container registry repository tag. */
  manifest_digest: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/registries/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}` · `registries_delete_repositoryManifest`</sub>

## `digitalocean.registriesListRepositoryTags`

List All Container Registry Repository Tags

```ts
digitalocean.registriesListRepositoryTags(input: {
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

<sub>`GET /v2/registries/{registry_name}/repositories/{repository_name}/tags` · `registries_list_repositoryTags`</sub>

## `digitalocean.registriesDeleteRepositoryTag`

Delete Container Registry Repository Tag

```ts
digitalocean.registriesDeleteRepositoryTag(input: {
  /** The name of a container registry. */
  registry_name: string;
  /** The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`. */
  repository_name: string;
  /** The name of a container registry repository tag. */
  repository_tag: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/registries/{registry_name}/repositories/{repository_name}/tags/{repository_tag}` · `registries_delete_repositoryTag`</sub>

## `digitalocean.registriesListRepositoriesV2`

List All Container Registry Repositories (V2)

```ts
digitalocean.registriesListRepositoriesV2(input: {
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

<sub>`GET /v2/registries/{registry_name}/repositoriesV2` · `registries_list_repositoriesV2`</sub>

## `digitalocean.registriesGetOptions`

List Registry Options (Subscription Tiers and Available Regions)

```ts
digitalocean.registriesGetOptions(): Promise<{ options?: { available_regions?: (string)[]; subscription_tiers?: (SubscriptionTierBase & SubscriptionTierExtended)[] } }>
```

<sub>`GET /v2/registries/options` · `registries_get_options`</sub>

## `digitalocean.registriesGetSubscription`

Get Subscription Information

```ts
digitalocean.registriesGetSubscription(): Promise<{ subscription?: Subscription }>
```

<sub>`GET /v2/registries/subscription` · `registries_get_subscription`</sub>

## `digitalocean.registriesUpdateSubscription`

Update Subscription Tier

```ts
digitalocean.registriesUpdateSubscription(input: {
  /** The slug of the subscription tier to sign up for. */
  tier_slug?: "starter" | "basic" | "professional";
}): Promise<{ subscription?: Subscription }>
```

<sub>`POST /v2/registries/subscription` · `registries_update_subscription`</sub>

## `digitalocean.registriesValidateName`

Validate a Container Registry Name

```ts
digitalocean.registriesValidateName(input: {
  /** A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters. */
  name: string;
}): Promise<undefined>
```

<sub>`POST /v2/registries/validate-name` · `registries_validate_name`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

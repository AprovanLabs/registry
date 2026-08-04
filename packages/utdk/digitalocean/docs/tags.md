# Tags

6 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.tagsList`

List All Tags

```ts
digitalocean.tagsList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ tags?: (Tags)[] } & Pagination & Meta>
```

<sub>`GET /v2/tags` · `tags_list`</sub>

## `digitalocean.tagsCreate`

Create a New Tag

```ts
digitalocean.tagsCreate(input: {
  /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.  **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.  When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).  Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".  */
  name?: string;
  /** An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.  This will only include resources that you are authorized to see. For example, to see tagged Droplets, include the `droplet:read` scope.  */
  resources?: TagsMetadata & { droplets?: unknown & TagsMetadata; imgages?: unknown & TagsMetadata; volumes?: unknown & TagsMetadata; volume_snapshots?: unknown & TagsMetadata; databases?: unknown & TagsMetadata };
}): Promise<{ tag?: Tags }>
```

<sub>`POST /v2/tags` · `tags_create`</sub>

## `digitalocean.tagsDelete`

Delete a Tag

```ts
digitalocean.tagsDelete(input: {
  /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
  tag_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/tags/{tag_id}` · `tags_delete`</sub>

## `digitalocean.tagsGet`

Retrieve a Tag

```ts
digitalocean.tagsGet(input: {
  /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
  tag_id: string;
}): Promise<{ tag?: Tags }>
```

<sub>`GET /v2/tags/{tag_id}` · `tags_get`</sub>

## `digitalocean.tagsUnassignResources`

Untag a Resource

```ts
digitalocean.tagsUnassignResources(input: {
  /** An array of objects containing resource_id and resource_type  attributes.  This response will only include resources that you are authorized to see. For example, to see Droplets, include the `droplet:read` scope.  */
  resources: ({ resource_id?: string; resource_type?: "droplet" | "image" | "volume" | "volume_snapshot" })[];
  /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
  tag_id: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/tags/{tag_id}/resources` · `tags_unassign_resources`</sub>

## `digitalocean.tagsAssignResources`

Tag a Resource

```ts
digitalocean.tagsAssignResources(input: {
  /** An array of objects containing resource_id and resource_type  attributes.  This response will only include resources that you are authorized to see. For example, to see Droplets, include the `droplet:read` scope.  */
  resources: ({ resource_id?: string; resource_type?: "droplet" | "image" | "volume" | "volume_snapshot" })[];
  /** The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag. */
  tag_id: string;
}): Promise<undefined>
```

<sub>`POST /v2/tags/{tag_id}/resources` · `tags_assign_resources`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

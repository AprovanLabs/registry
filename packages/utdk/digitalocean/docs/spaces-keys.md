# Spaces Keys

6 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.spacesKeyList`

List Spaces Access Keys

```ts
digitalocean.spacesKeyList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
  /** The field to sort by. */
  sort?: string;
  /** The direction to sort by. Possible values are `asc` or `desc`. */
  sort_direction?: string;
  /** The access key's name. */
  name?: string;
  /** The bucket's name. */
  bucket?: string;
  /** The permission of the access key. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string. */
  permission?: string;
}): Promise<{ keys?: (Key)[] } & Pagination & Meta>
```

<sub>`GET /v2/spaces/keys` · `spacesKey_list`</sub>

## `digitalocean.spacesKeyCreate`

Create a New Spaces Access Key

```ts
digitalocean.spacesKeyCreate(input: {
  /** The access key's name. */
  name?: string;
  /** The list of permissions for the access key. */
  grants?: (Grant)[];
  /** The Access Key ID used to access a bucket. */
  access_key?: string;
  /** The date and time the key was created. */
  created_at?: string;
}): Promise<{ key?: KeyCreateResponse }>
```

<sub>`POST /v2/spaces/keys` · `spacesKey_create`</sub>

## `digitalocean.spacesKeyDelete`

Delete a Spaces Access Key

```ts
digitalocean.spacesKeyDelete(input: {
  /** The access key's ID. */
  access_key: string;
}): Promise<undefined>
```

<sub>`DELETE /v2/spaces/keys/{access_key}` · `spacesKey_delete`</sub>

## `digitalocean.spacesKeyGet`

Get a Spaces Access Key

```ts
digitalocean.spacesKeyGet(input: {
  /** The access key's ID. */
  access_key: string;
}): Promise<{ keys?: (Key)[] }>
```

<sub>`GET /v2/spaces/keys/{access_key}` · `spacesKey_get`</sub>

## `digitalocean.spacesKeyPatch`

Update Spaces Access Keys

```ts
digitalocean.spacesKeyPatch(input: {
  /** The access key's name. */
  name?: string;
  /** The list of permissions for the access key. */
  grants?: (Grant)[];
  /** The Access Key ID used to access a bucket. */
  access_key?: string;
  /** The date and time the key was created. */
  created_at?: string;
}, options: { params: { access_key: string } }): Promise<{ key?: Key }>
```

<sub>`PATCH /v2/spaces/keys/{access_key}` · `spacesKey_patch`</sub>

## `digitalocean.spacesKeyUpdate`

Update Spaces Access Keys

```ts
digitalocean.spacesKeyUpdate(input: {
  /** The access key's name. */
  name?: string;
  /** The list of permissions for the access key. */
  grants?: (Grant)[];
  /** The Access Key ID used to access a bucket. */
  access_key?: string;
  /** The date and time the key was created. */
  created_at?: string;
}, options: { params: { access_key: string } }): Promise<{ key?: Key }>
```

<sub>`PUT /v2/spaces/keys/{access_key}` · `spacesKey_update`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Products

6 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getProductDeals`

Get deals where a product is attached to

```ts
pipedrive.getProductDeals(input: {
  /** The ID of the product */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
  /** Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included. */
  status?: "open" | "won" | "lost" | "deleted" | "all_not_deleted";
}): Promise<{ success?: boolean } & { data?: ({ id?: number; creator_user_id?: { id?: number; name?: string; email?: string; has_pic?: boolean; pic_hash?: string | null; active_flag?: boolean; value?: number }; user_id?: { id?: number; name?: string; email?: string; has_pic?: boolean; pic_hash?: string | null; active_flag?: boolean } & { value?: number }; person_id?: { active_flag?: boolean; name?: string; e...>
```

<sub>`GET /products/{id}/deals` · `getProductDeals`</sub>

## `pipedrive.getProductFiles`

List files attached to a product

```ts
pipedrive.getProductFiles(input: {
  /** The ID of the product */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page. Please note that a maximum value of 100 is allowed. */
  limit?: number;
  /** Supported fields: `id`, `update_time` */
  sort?: string;
}): Promise<{ success?: boolean } & { data?: ({ id?: number; product_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; s3_bucket?: string; product_name?: string; url?: string; name?: string; description?: string })[]; additional_data?: { start?: number; limit?: number; more_...>
```

<sub>`GET /products/{id}/files` · `getProductFiles`</sub>

## `pipedrive.getProductFollowers`

List followers of a product

```ts
pipedrive.getProductFollowers(input: {
  /** The ID of the product */
  id: number;
  /** Pagination start */
  start?: number;
  /** Items shown per page */
  limit?: number;
}): Promise<{ success?: boolean } & { data?: ({ user_id?: number; id?: number; product_id?: number; add_time?: string })[]; additional_data?: { start?: number; limit?: number; more_items_in_collection?: boolean } }>
```

<sub>`GET /products/{id}/followers` · `getProductFollowers`</sub>

## `pipedrive.addProductFollower`

Add a follower to a product

```ts
pipedrive.addProductFollower(input: {
  /** The ID of the user */
  user_id: number;
  /** The ID of the product */
  id: number;
}): Promise<{ success?: boolean; data?: { user_id?: number; id?: number; product_id?: number; add_time?: string } }>
```

<sub>`POST /products/{id}/followers` · `addProductFollower`</sub>

## `pipedrive.deleteProductFollower`

Delete a follower from a product

```ts
pipedrive.deleteProductFollower(input: {
  /** The ID of the product */
  id: number;
  /** The ID of the relationship between the follower and the product */
  follower_id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`DELETE /products/{id}/followers/{follower_id}` · `deleteProductFollower`</sub>

## `pipedrive.getProductUsers`

List permitted users

```ts
pipedrive.getProductUsers(input: {
  /** The ID of the product */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`GET /products/{id}/permittedUsers` · `getProductUsers`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

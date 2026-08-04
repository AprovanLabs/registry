# Images

9 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.imagesList`

List All Images

```ts
digitalocean.imagesList(input: {
  /** Filters results based on image type which can be either `application` or `distribution`. */
  type?: "application" | "distribution";
  /** Used to filter only user images. */
  private?: boolean;
  /** Used to filter images by a specific tag. */
  tag_name?: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ images: (Image)[] } & Pagination & Meta>
```

<sub>`GET /v2/images` · `images_list`</sub>

## `digitalocean.imagesCreateCustom`

Create a Custom Image

```ts
digitalocean.imagesCreateCustom(input: {
  name: ImageName;
  distribution?: Distribution;
  description?: ImageDescription;
  /** A URL from which the custom Linux virtual machine image may be retrieved.  The image it points to must be in the raw, qcow2, vhdx, vdi, or vmdk format.  It may be compressed using gzip or bzip2 and must be smaller than 100 GB after being decompressed. */
  url: string;
  region: RegionSlug;
  tags?: TagsArray;
}): Promise<{ image?: Image }>
```

<sub>`POST /v2/images` · `images_create_custom`</sub>

## `digitalocean.imagesDelete`

Delete an Image

```ts
digitalocean.imagesDelete(input: {
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<undefined>
```

<sub>`DELETE /v2/images/{image_id}` · `images_delete`</sub>

## `digitalocean.imagesGet`

Retrieve an Existing Image

```ts
digitalocean.imagesGet(input: {
  /** A unique number (id) or string (slug) used to identify and reference a specific image.  **Public** images can be identified by image `id` or `slug`.  **Private** images *must* be identified by image `id`.  */
  image_id: number | string;
}): Promise<{ image: Image }>
```

<sub>`GET /v2/images/{image_id}` · `images_get`</sub>

## `digitalocean.imagesUpdate`

Update an Image

```ts
digitalocean.imagesUpdate(input: {
  name?: ImageName;
  distribution?: Distribution;
  description?: ImageDescription;
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<{ image: Image }>
```

<sub>`PUT /v2/images/{image_id}` · `images_update`</sub>

## `digitalocean.imagesPostAccountTransferCreate`

Initiate an Image Account Transfer

```ts
digitalocean.imagesPostAccountTransferCreate(input: {
  body: ImagesPostAccountTransferCreate;
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<{ transfer_id?: TransferId }>
```

<sub>`POST /v2/images/{image_id}/account_transfer` · `images_post_account_transfer_create`</sub>

## `digitalocean.imagesPostAccountTransferAccept`

Accept an Image Account Transfer

```ts
digitalocean.imagesPostAccountTransferAccept(input: {
  /** A unique number that used to identify and reference an image account transfer. */
  transfer_id: number;
  /** The UUID of the team that the image will be transferred to. */
  recipient_uuid: string;
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<undefined>
```

<sub>`POST /v2/images/{image_id}/account_transfer/accept` · `images_post_account_transfer_accept`</sub>

## `digitalocean.imagesPostAccountTransferCancel`

Cancel an Image Account Transfer

```ts
digitalocean.imagesPostAccountTransferCancel(input: {
  /** A unique number that used to identify and reference an image account transfer. */
  transfer_id: number;
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<undefined>
```

<sub>`POST /v2/images/{image_id}/account_transfer/cancel` · `images_post_account_transfer_cancel`</sub>

## `digitalocean.imagesPostAccountTransferDecline`

Decline an Image Account Transfer

```ts
digitalocean.imagesPostAccountTransferDecline(input: {
  /** A unique number that used to identify and reference an image account transfer. */
  transfer_id: number;
  /** A unique number that can be used to identify and reference a specific image. */
  image_id: number;
}): Promise<undefined>
```

<sub>`POST /v2/images/{image_id}/account_transfer/decline` · `images_post_account_transfer_decline`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

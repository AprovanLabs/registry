# Files

8 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getFiles`

Get all files

```ts
pipedrive.getFiles(input: {
  /** Pagination start */
  start?: number;
  /** Items shown per page. Please note that a maximum value of 100 is allowed. */
  limit?: number;
  /** Supported fields: `id`, `update_time` */
  sort?: string;
}): Promise<{ success?: boolean; data?: ({ id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; project_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: s...>
```

<sub>`GET /files` · `getFiles`</sub>

## `pipedrive.addFile`

Add file

```ts
pipedrive.addFile(input: {
  /** A single file, supplied in the multipart/form-data encoding and contained within the given boundaries */
  file: string;
  /** The ID of the deal to associate file(s) with */
  deal_id?: number;
  /** The ID of the person to associate file(s) with */
  person_id?: number;
  /** The ID of the organization to associate file(s) with */
  org_id?: number;
  /** The ID of the product to associate file(s) with */
  product_id?: number;
  /** The ID of the activity to associate file(s) with */
  activity_id?: number;
  /** The ID of the lead to associate file(s) with */
  lead_id?: string;
  /** The ID of the project to associate file(s) with */
  project_id?: number;
}): Promise<{ success?: boolean; data?: { id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; project_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: st...>
```

<sub>`POST /files` · `addFile`</sub>

## `pipedrive.deleteFile`

Delete a file

```ts
pipedrive.deleteFile(input: {
  /** The ID of the file */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } }>
```

<sub>`DELETE /files/{id}` · `deleteFile`</sub>

## `pipedrive.getFile`

Get one file

```ts
pipedrive.getFile(input: {
  /** The ID of the file */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; project_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: st...>
```

<sub>`GET /files/{id}` · `getFile`</sub>

## `pipedrive.updateFile`

Update file details

```ts
pipedrive.updateFile(input: {
  /** The visible name of the file */
  name?: string;
  /** The description of the file */
  description?: string;
  /** The ID of the file */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; project_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: st...>
```

<sub>`PUT /files/{id}` · `updateFile`</sub>

## `pipedrive.downloadFile`

Download one file

```ts
pipedrive.downloadFile(input: {
  /** The ID of the file */
  id: number;
}): Promise<string>
```

<sub>`GET /files/{id}/download` · `downloadFile`</sub>

## `pipedrive.addFileAndLinkIt`

Create a remote file and link it to an item

```ts
pipedrive.addFileAndLinkIt(input: {
  /** The file type */
  file_type: "gdoc" | "gslides" | "gsheet" | "gform" | "gdraw";
  /** The title of the file */
  title: string;
  /** The item type */
  item_type: "deal" | "organization" | "person";
  /** The ID of the item to associate the file with */
  item_id: number;
  /** The location type to send the file to. Only `googledrive` is supported at the moment. */
  remote_location: "googledrive";
}): Promise<{ success?: boolean; data?: { id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; project_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: st...>
```

<sub>`POST /files/remote` · `addFileAndLinkIt`</sub>

## `pipedrive.linkFileToItem`

Link a remote file to an item

```ts
pipedrive.linkFileToItem(input: {
  /** The item type */
  item_type: "deal" | "organization" | "person";
  /** The ID of the item to associate the file with */
  item_id: number;
  /** The remote item ID */
  remote_id: string;
  /** The location type to send the file to. Only `googledrive` is supported at the moment. */
  remote_location: "googledrive";
}): Promise<{ success?: boolean; data?: { id?: number; user_id?: number; deal_id?: number; person_id?: number; org_id?: number; product_id?: number; activity_id?: number; lead_id?: string; project_id?: number; add_time?: string; update_time?: string; file_name?: string; file_size?: number; active_flag?: boolean; inline_flag?: boolean; remote_location?: string; remote_id?: string; cid?: string; s3_bucket?: st...>
```

<sub>`POST /files/remoteLink` · `linkFileToItem`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

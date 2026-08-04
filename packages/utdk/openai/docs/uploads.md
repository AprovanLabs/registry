# Uploads

4 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.createUpload`

Creates an intermediate [Upload](/docs/api-reference/uploads/object) object that you can add [Parts](/docs/api-reference/uploads/part-object) to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it. Once you complete the Upload, we will create a [File](/docs/api-reference/files/object) object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object. For certain `purpose` values, the correct `mime_type` must be specified. Please refer to documentation for the [supported MIME types for your use case](/docs/assistants/tools/file-search#supported-files). For guidance on the proper filename extensions for each purpose, please follow the documentation on [creating a File](/docs/api-reference/files/create). — [Provider docs](https://help.openai.com/)

```ts
openai.createUpload(input: {
  /** The name of the file to upload.  */
  filename: string;
  /** The intended purpose of the uploaded file.  See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).  */
  purpose: "assistants" | "batch" | "fine-tune" | "vision";
  /** The number of bytes in the file you are uploading.  */
  bytes: number;
  /** The MIME type of the file.  This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.  */
  mime_type: string;
}): Promise<Upload>
```

<sub>`POST /uploads` · `createUpload`</sub>

## `openai.cancelUpload`

Cancels the Upload. No Parts may be added after an Upload is cancelled. — [Provider docs](https://help.openai.com/)

```ts
openai.cancelUpload(input: {
  /** The ID of the Upload.  */
  upload_id: string;
}): Promise<Upload>
```

<sub>`POST /uploads/{upload_id}/cancel` · `cancelUpload`</sub>

## `openai.completeUpload`

Completes the [Upload](/docs/api-reference/uploads/object). Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform. You can specify the order of the Parts by passing in an ordered list of the Part IDs. The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed. — [Provider docs](https://help.openai.com/)

```ts
openai.completeUpload(input: {
  /** The ordered list of Part IDs.  */
  part_ids: (string)[];
  /** The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.  */
  md5?: string;
  /** The ID of the Upload.  */
  upload_id: string;
}): Promise<Upload>
```

<sub>`POST /uploads/{upload_id}/complete` · `completeUpload`</sub>

## `openai.addUploadPart`

Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload. Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB. It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete). — [Provider docs](https://help.openai.com/)

```ts
openai.addUploadPart(input: {
  /** The chunk of bytes for this Part.  */
  data: string;
  /** The ID of the Upload.  */
  upload_id: string;
}): Promise<UploadPart>
```

<sub>`POST /uploads/{upload_id}/parts` · `addUploadPart`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

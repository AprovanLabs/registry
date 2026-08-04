# Files

5 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listFiles`

Returns a list of files. — [Provider docs](https://help.openai.com/)

```ts
openai.listFiles(input: {
  /** Only return files with the given purpose. */
  purpose?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.  */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
}): Promise<ListFilesResponse>
```

<sub>`GET /files` · `listFiles`</sub>

## `openai.createFile`

Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB. The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details. The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models. The Batch API only supports `.jsonl` files up to 200 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input). Please [contact us](https://help.openai.com/) if you need to increase these storage limits. — [Provider docs](https://help.openai.com/)

```ts
openai.createFile(input: {
  /** The File object (not file name) to be uploaded.  */
  file: string;
  /** The intended purpose of the uploaded file. One of: - `assistants`: Used in the Assistants API - `batch`: Used in the Batch API - `fine-tune`: Used for fine-tuning - `vision`: Images used for vision fine-tuning - `user_data`: Flexible file type for any purpose - `evals`: Used for eval data sets  */
  purpose: "assistants" | "batch" | "fine-tune" | "vision" | "user_data" | "evals";
}): Promise<OpenAiFile>
```

<sub>`POST /files` · `createFile`</sub>

## `openai.deleteFile`

Delete a file. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteFile(input: {
  /** The ID of the file to use for this request. */
  file_id: string;
}): Promise<DeleteFileResponse>
```

<sub>`DELETE /files/{file_id}` · `deleteFile`</sub>

## `openai.retrieveFile`

Returns information about a specific file. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveFile(input: {
  /** The ID of the file to use for this request. */
  file_id: string;
}): Promise<OpenAiFile>
```

<sub>`GET /files/{file_id}` · `retrieveFile`</sub>

## `openai.downloadFile`

Returns the contents of the specified file. — [Provider docs](https://help.openai.com/)

```ts
openai.downloadFile(input: {
  /** The ID of the file to use for this request. */
  file_id: string;
}): Promise<string>
```

<sub>`GET /files/{file_id}/content` · `downloadFile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

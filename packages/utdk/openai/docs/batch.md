# Batch

4 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listBatches`

List your organization's batches. — [Provider docs](https://help.openai.com/)

```ts
openai.listBatches(input: {
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
}): Promise<ListBatchesResponse>
```

<sub>`GET /batches` · `listBatches`</sub>

## `openai.createBatch`

Creates and executes a batch from an uploaded file of requests — [Provider docs](https://help.openai.com/)

```ts
openai.createBatch(input: {
  /** The ID of an uploaded file that contains requests for the new batch.  See [upload file](/docs/api-reference/files/create) for how to upload a file.  Your input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.  */
  input_file_id: string;
  /** The endpoint to be used for all requests in the batch. Currently `/v1/responses`, `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch. */
  endpoint: "/v1/responses" | "/v1/chat/completions" | "/v1/embeddings" | "/v1/completions";
  /** The time frame within which the batch should be processed. Currently only `24h` is supported. */
  completion_window: "24h";
  metadata?: Metadata;
}): Promise<Batch>
```

<sub>`POST /batches` · `createBatch`</sub>

## `openai.retrieveBatch`

Retrieves a batch. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveBatch(input: {
  /** The ID of the batch to retrieve. */
  batch_id: string;
}): Promise<Batch>
```

<sub>`GET /batches/{batch_id}` · `retrieveBatch`</sub>

## `openai.cancelBatch`

Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file. — [Provider docs](https://help.openai.com/)

```ts
openai.cancelBatch(input: {
  /** The ID of the batch to cancel. */
  batch_id: string;
}): Promise<Batch>
```

<sub>`POST /batches/{batch_id}/cancel` · `cancelBatch`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

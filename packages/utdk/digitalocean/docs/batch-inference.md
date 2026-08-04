# Batch Inference

7 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.inferenceUploadBatchFile`

Upload a Batch Inference Input File

```ts
digitalocean.inferenceUploadBatchFile(input: {
  body: string;
}): Promise<undefined>
```

<sub>`PUT /<upload_url>` · `inference_upload_batch_file`</sub>

## `digitalocean.inferenceListBatches`

List Batch Inference Jobs

```ts
digitalocean.inferenceListBatches(input: {
  /** Cursor for pagination. Pass the `last_id` value from the previous response to fetch the next page. Omit for the first page.  */
  after?: string;
  /** Maximum number of batches to return per page. */
  limit?: number;
  /** Optional filter restricting results to batches in the given lifecycle state.  */
  status?: "validating" | "in_progress" | "finalizing" | "completed" | "failed" | "expired" | "cancelling" | "cancelled";
}): Promise<BatchListResponse>
```

<sub>`GET /v1/batches` · `inference_list_batches`</sub>

## `digitalocean.inferenceCreateBatch`

Create a Batch Inference Job

```ts
digitalocean.inferenceCreateBatch(input: {
  /** The `file_id` returned by `POST /v1/batches/files`. */
  file_id: string;
  /** The inference provider whose JSONL schema the input file conforms to. `openai` follows the OpenAI Batch API input schema (`custom_id`, `method`, `url`, `body`); `anthropic` follows the Anthropic Message Batches JSONL conventions.  */
  provider: "openai" | "anthropic";
  /** Inference endpoint each request is dispatched to. **Required when `provider` is `openai` and must match the `url` on every JSONL line. Must be omitted when `provider` is `anthropic`.**  */
  endpoint?: "/v1/responses" | "/v1/chat/completions";
  /** Time window in which the job must complete. Jobs that do not finish in time transition to `expired`.  */
  completion_window: "24h";
  /** Client-supplied idempotency key. Retries with the same value return the existing job instead of creating a duplicate.  */
  request_id: string;
  /** Optional string-valued metadata to attach to the job. */
  metadata?: { [key: string]: string | undefined } | null;
}): Promise<Batch>
```

<sub>`POST /v1/batches` · `inference_create_batch`</sub>

## `digitalocean.inferenceGetBatch`

Retrieve a Batch Inference Job

```ts
digitalocean.inferenceGetBatch(input: {
  /** The batch job identifier. */
  batch_id: string;
}): Promise<Batch>
```

<sub>`GET /v1/batches/{batch_id}` · `inference_get_batch`</sub>

## `digitalocean.inferenceCancelBatch`

Cancel a Batch Inference Job

```ts
digitalocean.inferenceCancelBatch(input: {
  /** The batch job identifier. */
  batch_id: string;
}): Promise<Batch>
```

<sub>`POST /v1/batches/{batch_id}/cancel` · `inference_cancel_batch`</sub>

## `digitalocean.inferenceGetBatchResults`

Get Batch Inference Results Download Links

```ts
digitalocean.inferenceGetBatchResults(input: {
  /** The batch job identifier. */
  batch_id: string;
}): Promise<BatchResultsResponse>
```

<sub>`GET /v1/batches/{batch_id}/results` · `inference_get_batch_results`</sub>

## `digitalocean.inferenceCreateBatchFile`

Create a Batch Inference Input File

```ts
digitalocean.inferenceCreateBatchFile(input: {
  /** The file you plan to upload. Must end with `.jsonl` (case-insensitive) and contain one request per line in the schema expected by the target `provider`.  */
  file_name: string;
}): Promise<BatchFileCreateResponse>
```

<sub>`POST /v1/batches/files` · `inference_create_batch_file`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

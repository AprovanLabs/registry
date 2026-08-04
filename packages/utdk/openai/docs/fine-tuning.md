# Fine Tuning

9 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listFineTuningCheckpointPermissions`

**NOTE:** This endpoint requires an [admin API key](../admin-api-keys). Organization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint. — [Provider docs](https://help.openai.com/)

```ts
openai.listFineTuningCheckpointPermissions(input: {
  /** The ID of the fine-tuned model checkpoint to get permissions for.  */
  fine_tuned_model_checkpoint: string;
  /** The ID of the project to get permissions for. */
  project_id?: string;
  /** Identifier for the last permission ID from the previous pagination request. */
  after?: string;
  /** Number of permissions to retrieve. */
  limit?: number;
  /** The order in which to retrieve permissions. */
  order?: "ascending" | "descending";
}): Promise<ListFineTuningCheckpointPermissionResponse>
```

<sub>`GET /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions` · `listFineTuningCheckpointPermissions`</sub>

## `openai.createFineTuningCheckpointPermission`

**NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys). This enables organization owners to share fine-tuned models with other projects in their organization. — [Provider docs](https://help.openai.com/)

```ts
openai.createFineTuningCheckpointPermission(input: {
  /** The project identifiers to grant access to. */
  project_ids: (string)[];
  /** The ID of the fine-tuned model checkpoint to create a permission for.  */
  fine_tuned_model_checkpoint: string;
}): Promise<ListFineTuningCheckpointPermissionResponse>
```

<sub>`POST /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions` · `createFineTuningCheckpointPermission`</sub>

## `openai.deleteFineTuningCheckpointPermission`

**NOTE:** This endpoint requires an [admin API key](../admin-api-keys). Organization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteFineTuningCheckpointPermission(input: {
  /** The ID of the fine-tuned model checkpoint to delete a permission for.  */
  fine_tuned_model_checkpoint: string;
  /** The ID of the fine-tuned model checkpoint permission to delete.  */
  permission_id: string;
}): Promise<DeleteFineTuningCheckpointPermissionResponse>
```

<sub>`DELETE /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}` · `deleteFineTuningCheckpointPermission`</sub>

## `openai.listPaginatedFineTuningJobs`

List your organization's fine-tuning jobs — [Provider docs](https://help.openai.com/)

```ts
openai.listPaginatedFineTuningJobs(input: {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
  /** Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.  */
  metadata?: { [key: string]: string | undefined } | null;
}): Promise<ListPaginatedFineTuningJobsResponse>
```

<sub>`GET /fine_tuning/jobs` · `listPaginatedFineTuningJobs`</sub>

## `openai.createFineTuningJob`

Creates a fine-tuning job which begins the process of creating a new model from a given dataset. Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete. [Learn more about fine-tuning](/docs/guides/fine-tuning) — [Provider docs](https://help.openai.com/)

```ts
openai.createFineTuningJob(input: {
  /** The name of the model to fine-tune. You can select one of the [supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).  */
  model: string | "babbage-002" | "davinci-002" | "gpt-3.5-turbo" | "gpt-4o-mini";
  /** The ID of an uploaded file that contains training data.  See [upload file](/docs/api-reference/files/create) for how to upload a file.  Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.  The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.  See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.  */
  training_file: string;
  /** The hyperparameters used for the fine-tuning job. This value is now deprecated in favor of `method`, and should be passed in under the `method` parameter.  */
  hyperparameters?: { batch_size?: "auto" | number; learning_rate_multiplier?: "auto" | number; n_epochs?: "auto" | number };
  /** A string of up to 64 characters that will be added to your fine-tuned model name.  For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.  */
  suffix?: string | null;
  /** The ID of an uploaded file that contains validation data.  If you provide this file, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in the fine-tuning results file. The same data should not be present in both train and validation files.  Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.  See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.  */
  validation_file?: string | null;
  /** A list of integrations to enable for your fine-tuning job. */
  integrations?: ({ type: "wandb"; wandb: { project: string; name?: string | null; entity?: string | null; tags?: (string)[] } })[] | null;
  /** The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases. If a seed is not specified, one will be generated for you.  */
  seed?: number | null;
  method?: FineTuneMethod;
  metadata?: Metadata;
}): Promise<FineTuningJob>
```

<sub>`POST /fine_tuning/jobs` · `createFineTuningJob`</sub>

## `openai.retrieveFineTuningJob`

Get info about a fine-tuning job. [Learn more about fine-tuning](/docs/guides/fine-tuning) — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveFineTuningJob(input: {
  /** The ID of the fine-tuning job.  */
  fine_tuning_job_id: string;
}): Promise<FineTuningJob>
```

<sub>`GET /fine_tuning/jobs/{fine_tuning_job_id}` · `retrieveFineTuningJob`</sub>

## `openai.cancelFineTuningJob`

Immediately cancel a fine-tune job. — [Provider docs](https://help.openai.com/)

```ts
openai.cancelFineTuningJob(input: {
  /** The ID of the fine-tuning job to cancel.  */
  fine_tuning_job_id: string;
}): Promise<FineTuningJob>
```

<sub>`POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel` · `cancelFineTuningJob`</sub>

## `openai.listFineTuningJobCheckpoints`

List checkpoints for a fine-tuning job. — [Provider docs](https://help.openai.com/)

```ts
openai.listFineTuningJobCheckpoints(input: {
  /** The ID of the fine-tuning job to get checkpoints for.  */
  fine_tuning_job_id: string;
  /** Identifier for the last checkpoint ID from the previous pagination request. */
  after?: string;
  /** Number of checkpoints to retrieve. */
  limit?: number;
}): Promise<ListFineTuningJobCheckpointsResponse>
```

<sub>`GET /fine_tuning/jobs/{fine_tuning_job_id}/checkpoints` · `listFineTuningJobCheckpoints`</sub>

## `openai.listFineTuningEvents`

Get status updates for a fine-tuning job. — [Provider docs](https://help.openai.com/)

```ts
openai.listFineTuningEvents(input: {
  /** The ID of the fine-tuning job to get events for.  */
  fine_tuning_job_id: string;
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}): Promise<ListFineTuningJobEventsResponse>
```

<sub>`GET /fine_tuning/jobs/{fine_tuning_job_id}/events` · `listFineTuningEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# LLM Observability

73 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listLlmObsCustomEvalConfigs`

List custom evaluator configurations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsCustomEvalConfigs(): Promise<LlmObsCustomEvalConfigListResponse>
```

<sub>`GET /api/unstable/llm-obs/config/evaluators/custom` · `ListLLMObsCustomEvalConfigs`</sub>

## `datadog.deleteLlmObsCustomEvalConfig`

Delete a custom evaluator configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsCustomEvalConfig(input: {
  /** The name of the custom LLM Observability evaluator configuration. */
  eval_name: string;
}): Promise<undefined>
```

<sub>`DELETE /api/unstable/llm-obs/config/evaluators/custom/{eval_name}` · `DeleteLLMObsCustomEvalConfig`</sub>

## `datadog.getLlmObsCustomEvalConfig`

Get a custom evaluator configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsCustomEvalConfig(input: {
  /** The name of the custom LLM Observability evaluator configuration. */
  eval_name: string;
}): Promise<LlmObsCustomEvalConfigResponse>
```

<sub>`GET /api/unstable/llm-obs/config/evaluators/custom/{eval_name}` · `GetLLMObsCustomEvalConfig`</sub>

## `datadog.updateLlmObsCustomEvalConfig`

Create or update a custom evaluator configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsCustomEvalConfig(input: {
  data: LlmObsCustomEvalConfigUpdateData;
  /** The name of the custom LLM Observability evaluator configuration. */
  eval_name: string;
}): Promise<undefined>
```

<sub>`PUT /api/unstable/llm-obs/config/evaluators/custom/{eval_name}` · `UpdateLLMObsCustomEvalConfig`</sub>

## `datadog.deleteLlmObsData`

Delete LLM Observability data — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsData(input: {
  data: LlmObsDataDeletionRequestData;
}): Promise<LlmObsDataDeletionResponse>
```

<sub>`POST /api/v2/llm-obs/deletion/data/llmobs` · `DeleteLLMObsData`</sub>

## `datadog.listLlmObsDatasets`

List LLM Observability datasets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsDatasets(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** Filter datasets by name. */
  "filter[name]"?: string;
  /** Filter datasets by dataset ID. */
  "filter[id]"?: string;
  /** Use the Pagination cursor to retrieve the next page of results. */
  "page[cursor]"?: string;
  /** Maximum number of results to return per page. */
  "page[limit]"?: number;
}): Promise<LlmObsDatasetsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/{project_id}/datasets` · `ListLLMObsDatasets`</sub>

## `datadog.createLlmObsDataset`

Create an LLM Observability dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsDataset(input: {
  data: LlmObsDatasetDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
}): Promise<LlmObsDatasetResponse>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets` · `CreateLLMObsDataset`</sub>

## `datadog.updateLlmObsDataset`

Update an LLM Observability dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsDataset(input: {
  data: LlmObsDatasetUpdateDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}` · `UpdateLLMObsDataset`</sub>

## `datadog.batchUpdateLlmObsDataset`

Batch update LLM Observability dataset records — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.batchUpdateLlmObsDataset(input: {
  data: LlmObsDatasetBatchUpdateDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetRecordsMutationResponse>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/batch_update` · `BatchUpdateLLMObsDataset`</sub>

## `datadog.cloneLlmObsDataset`

Clone an LLM Observability dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.cloneLlmObsDataset(input: {
  data: LlmObsDatasetCloneDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the source LLM Observability dataset to clone. */
  dataset_id: string;
}): Promise<LlmObsDatasetResponse>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/clone` · `CloneLLMObsDataset`</sub>

## `datadog.getLlmObsDatasetDraftState`

Get LLM Observability dataset draft state — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsDatasetDraftState(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetDraftStateResponse>
```

<sub>`GET /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/draft_state` · `GetLLMObsDatasetDraftState`</sub>

## `datadog.lockLlmObsDatasetDraftState`

Lock LLM Observability dataset draft state — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.lockLlmObsDatasetDraftState(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetDraftStateResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/draft_state/lock` · `LockLLMObsDatasetDraftState`</sub>

## `datadog.unlockLlmObsDatasetDraftState`

Unlock LLM Observability dataset draft state — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unlockLlmObsDatasetDraftState(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/draft_state/unlock` · `UnlockLLMObsDatasetDraftState`</sub>

## `datadog.exportLlmObsDataset`

Export an LLM Observability dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.exportLlmObsDataset(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
  format?: LlmObsDatasetExportFormat;
  /** Version of the dataset to export. If omitted, the current version is used. Must be between 0 and the current version of the dataset, inclusive. */
  version?: number;
}): Promise<string>
```

<sub>`GET /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/export` · `ExportLLMObsDataset`</sub>

## `datadog.listLlmObsDatasetRecords`

List LLM Observability dataset records — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsDatasetRecords(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
  /** Retrieve records from a specific dataset version. Defaults to the current version. */
  "filter[version]"?: number;
  /** Use the Pagination cursor to retrieve the next page of results. */
  "page[cursor]"?: string;
  /** Maximum number of results to return per page. */
  "page[limit]"?: number;
}): Promise<LlmObsDatasetRecordsListResponse>
```

<sub>`GET /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records` · `ListLLMObsDatasetRecords`</sub>

## `datadog.updateLlmObsDatasetRecords`

Update LLM Observability dataset records — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsDatasetRecords(input: {
  data: LlmObsDatasetRecordsUpdateDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetRecordsMutationResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records` · `UpdateLLMObsDatasetRecords`</sub>

## `datadog.createLlmObsDatasetRecords`

Append records to an LLM Observability dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsDatasetRecords(input: {
  data: LlmObsDatasetRecordsDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetRecordsMutationResponse>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records` · `CreateLLMObsDatasetRecords`</sub>

## `datadog.deleteLlmObsDatasetRecords`

Delete LLM Observability dataset records — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsDatasetRecords(input: {
  data: LlmObsDeleteDatasetRecordsDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records/delete` · `DeleteLLMObsDatasetRecords`</sub>

## `datadog.restoreLlmObsDatasetVersion`

Restore an LLM Observability dataset version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.restoreLlmObsDatasetVersion(input: {
  data: LlmObsDatasetRestoreVersionDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/restore` · `RestoreLLMObsDatasetVersion`</sub>

## `datadog.listLlmObsDatasetVersions`

List LLM Observability dataset versions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsDatasetVersions(input: {
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
}): Promise<LlmObsDatasetVersionsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/versions` · `ListLLMObsDatasetVersions`</sub>

## `datadog.deleteLlmObsDatasets`

Delete LLM Observability datasets — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsDatasets(input: {
  data: LlmObsDeleteDatasetsDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/{project_id}/datasets/delete` · `DeleteLLMObsDatasets`</sub>

## `datadog.getLlmObsAnnotatedInteractionsByTraceIDs`

Get annotated interactions by content IDs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsAnnotatedInteractionsByTraceIDs(input: {
  /** One or more content IDs to retrieve annotated interactions for. At least one is required. */
  contentIds: (string)[];
  /** Pagination offset. Must be >= 0. Defaults to 0. */
  offset?: number;
  /** Maximum number of results to return. Must be > 0. Defaults to 100. */
  limit?: number;
}): Promise<LlmObsAnnotatedInteractionsByTraceResponse>
```

<sub>`GET /api/v2/llm-obs/v1/annotated-interactions` · `GetLLMObsAnnotatedInteractionsByTraceIDs`</sub>

## `datadog.listLlmObsAnnotationQueues`

List LLM Observability annotation queues — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsAnnotationQueues(input: {
  /** Filter annotation queues by project ID. Cannot be used together with `queueIds`. */
  projectId?: string;
  /** Filter annotation queues by queue IDs (comma-separated). Cannot be used together with `projectId`. */
  queueIds?: (string)[];
}): Promise<LlmObsAnnotationQueuesResponse>
```

<sub>`GET /api/v2/llm-obs/v1/annotation-queues` · `ListLLMObsAnnotationQueues`</sub>

## `datadog.createLlmObsAnnotationQueue`

Create an LLM Observability annotation queue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsAnnotationQueue(input: {
  data: LlmObsAnnotationQueueDataRequest;
}): Promise<LlmObsAnnotationQueueResponse>
```

<sub>`POST /api/v2/llm-obs/v1/annotation-queues` · `CreateLLMObsAnnotationQueue`</sub>

## `datadog.deleteLlmObsAnnotationQueue`

Delete an LLM Observability annotation queue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsAnnotationQueue(input: {
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/llm-obs/v1/annotation-queues/{queue_id}` · `DeleteLLMObsAnnotationQueue`</sub>

## `datadog.updateLlmObsAnnotationQueue`

Update an LLM Observability annotation queue — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsAnnotationQueue(input: {
  data: LlmObsAnnotationQueueUpdateDataRequest;
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsAnnotationQueueResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/annotation-queues/{queue_id}` · `UpdateLLMObsAnnotationQueue`</sub>

## `datadog.getLlmObsAnnotatedInteractions`

Get annotated queue interactions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsAnnotatedInteractions(input: {
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsAnnotatedInteractionsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/annotation-queues/{queue_id}/annotated-interactions` · `GetLLMObsAnnotatedInteractions`</sub>

## `datadog.upsertLlmObsAnnotations`

Create or update annotations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertLlmObsAnnotations(input: {
  data: LlmObsAnnotationsDataRequest;
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsAnnotationsResponse>
```

<sub>`POST /api/v2/llm-obs/v1/annotation-queues/{queue_id}/annotations` · `UpsertLLMObsAnnotations`</sub>

## `datadog.deleteLlmObsAnnotations`

Delete annotations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsAnnotations(input: {
  data: LlmObsDeleteAnnotationsDataRequest;
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsDeleteAnnotationsResponse>
```

<sub>`POST /api/v2/llm-obs/v1/annotation-queues/{queue_id}/annotations/delete` · `DeleteLLMObsAnnotations`</sub>

## `datadog.createLlmObsAnnotationQueueInteractions`

Add annotation queue interactions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsAnnotationQueueInteractions(input: {
  data: LlmObsAnnotationQueueInteractionsDataRequest;
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsAnnotationQueueInteractionsResponse>
```

<sub>`POST /api/v2/llm-obs/v1/annotation-queues/{queue_id}/interactions` · `CreateLLMObsAnnotationQueueInteractions`</sub>

## `datadog.deleteLlmObsAnnotationQueueInteractions`

Delete annotation queue interactions — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsAnnotationQueueInteractions(input: {
  data: LlmObsDeleteAnnotationQueueInteractionsDataRequest;
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/annotation-queues/{queue_id}/interactions/delete` · `DeleteLLMObsAnnotationQueueInteractions`</sub>

## `datadog.getLlmObsAnnotationQueueLabelSchema`

Get annotation queue label schema — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsAnnotationQueueLabelSchema(input: {
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsAnnotationQueueLabelSchemaResponse>
```

<sub>`GET /api/v2/llm-obs/v1/annotation-queues/{queue_id}/label-schema` · `GetLLMObsAnnotationQueueLabelSchema`</sub>

## `datadog.updateLlmObsAnnotationQueueLabelSchema`

Update annotation queue label schema — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsAnnotationQueueLabelSchema(input: {
  data: LlmObsAnnotationQueueLabelSchemaUpdateData;
  /** The ID of the LLM Observability annotation queue. */
  queue_id: string;
}): Promise<LlmObsAnnotationQueueLabelSchemaResponse>
```

<sub>`PUT /api/v2/llm-obs/v1/annotation-queues/{queue_id}/label-schema` · `UpdateLLMObsAnnotationQueueLabelSchema`</sub>

## `datadog.aggregateLlmObsExperimentation`

Aggregate LLM Observability experimentation — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateLlmObsExperimentation(input: {
  data: LlmObsExperimentationAnalyticsDataRequest;
}): Promise<LlmObsExperimentationAnalyticsResponse>
```

<sub>`POST /api/v2/llm-obs/v1/experimentation/analytics` · `AggregateLLMObsExperimentation`</sub>

## `datadog.searchLlmObsExperimentation`

Search LLM Observability experimentation entities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchLlmObsExperimentation(input: {
  data: LlmObsExperimentationSearchDataRequest;
}): Promise<LlmObsExperimentationSearchResponse>
```

<sub>`POST /api/v2/llm-obs/v1/experimentation/search` · `SearchLLMObsExperimentation`</sub>

## `datadog.simpleSearchLlmObsExperimentation`

Simple search experimentation entities — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.simpleSearchLlmObsExperimentation(input: {
  data: LlmObsExperimentationSimpleSearchDataRequest;
}): Promise<LlmObsExperimentationSimpleSearchResponse>
```

<sub>`POST /api/v2/llm-obs/v1/experimentation/simple-search` · `SimpleSearchLLMObsExperimentation`</sub>

## `datadog.listLlmObsExperiments`

List LLM Observability experiments — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsExperiments(input: {
  /** Filter experiments by project ID. Required if `filter[dataset_id]` is not provided. */
  "filter[project_id]"?: string;
  /** Filter experiments by dataset ID. */
  "filter[dataset_id]"?: string;
  /** Filter experiments by experiment ID. Can be specified multiple times. */
  "filter[id]"?: string;
  /** Filter experiments by their exact run name. */
  "filter[name]"?: string;
  /** Filter by logical experiment name. This is the `name` field set when creating an experiment through `POST /experiments`. Returns all experiment runs that share the same name, enabling cross-commit and cross-branch comparisons. */
  "filter[experiment]"?: string;
  /** Filter by JSONB metadata containment. Provide a JSON object string where experiments whose metadata contains all specified key-value pairs are returned. For example: `{"commit":"abc123","branch":"main"}`. */
  "filter[metadata]"?: string;
  /** Filter experiments by the ID of their parent (baseline) experiment. Returns all experiments that were run against the given baseline. Can be specified multiple times. */
  "filter[parent_experiment_id]"?: string;
  /** When `true`, return only soft-deleted experiments. Defaults to `false`. */
  "filter[is_deleted]"?: boolean;
  /** When `true`, enrich each experiment with its author's user data in the `author` field. */
  "include[user_data]"?: boolean;
  /** When `true`, enrich each experiment with its dataset name in the `dataset_name` field. */
  "include[dataset_names]"?: boolean;
  /** Use the pagination cursor returned in `meta.after` to retrieve the next page of results. */
  "page[cursor]"?: string;
  /** Maximum number of results to return per page. Values above 5000 are clamped to 5000. Defaults to 5000. */
  "page[limit]"?: number;
}): Promise<LlmObsExperimentsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/experiments` · `ListLLMObsExperiments`</sub>

## `datadog.createLlmObsExperiment`

Create an LLM Observability experiment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsExperiment(input: {
  data: LlmObsExperimentDataRequest;
}): Promise<LlmObsExperimentResponse>
```

<sub>`POST /api/v2/llm-obs/v1/experiments` · `CreateLLMObsExperiment`</sub>

## `datadog.updateLlmObsExperiment`

Update an LLM Observability experiment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsExperiment(input: {
  data: LlmObsExperimentUpdateDataRequest;
  /** The ID of the LLM Observability experiment. */
  experiment_id: string;
}): Promise<LlmObsExperimentResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/experiments/{experiment_id}` · `UpdateLLMObsExperiment`</sub>

## `datadog.listLlmObsExperimentEventsV1`

List LLM Observability experiment spans (v1) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsExperimentEventsV1(input: {
  /** The ID of the LLM Observability experiment. */
  experiment_id: string;
}): Promise<LlmObsExperimentSpansResponse>
```

<sub>`GET /api/v2/llm-obs/v1/experiments/{experiment_id}/events` · `ListLLMObsExperimentEventsV1`</sub>

## `datadog.createLlmObsExperimentEvents`

Push events for an LLM Observability experiment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsExperimentEvents(input: {
  data: LlmObsExperimentEventsDataRequest;
  /** The ID of the LLM Observability experiment. */
  experiment_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/experiments/{experiment_id}/events` · `CreateLLMObsExperimentEvents`</sub>

## `datadog.deleteLlmObsExperiments`

Delete LLM Observability experiments — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsExperiments(input: {
  data: LlmObsDeleteExperimentsDataRequest;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/experiments/delete` · `DeleteLLMObsExperiments`</sub>

## `datadog.createLlmObsIntegrationInference`

Run an LLM inference — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsIntegrationInference(input: {
  anthropic_metadata?: LlmObsAnthropicMetadata;
  azure_openai_metadata?: LlmObsAzureOpenAiMetadata;
  bedrock_metadata?: LlmObsBedrockMetadata;
  /** Penalty for token frequency to reduce repetition. */
  frequency_penalty?: number | null;
  /** JSON schema for structured output, if supported by the model. */
  json_schema?: string | null;
  /** Maximum number of completion tokens to generate (alternative to max_tokens for some providers). */
  max_completion_tokens?: number | null;
  /** Maximum number of tokens to generate. */
  max_tokens?: number | null;
  messages: LlmObsInferenceMessagesList;
  /** The model identifier to use for inference. */
  model_id: string;
  openai_metadata?: LlmObsOpenAiMetadata;
  /** Penalty for token presence to encourage topic diversity. */
  presence_penalty?: number | null;
  /** Sampling temperature between 0 and 2. Higher values produce more random output. */
  temperature?: number | null;
  tools?: LlmObsInferenceToolsList;
  /** Top-K sampling parameter. */
  top_k?: number | null;
  /** Nucleus sampling probability mass. */
  top_p?: number | null;
  vertex_ai_metadata?: LlmObsVertexAiMetadata;
  integration: LlmObsIntegrationName;
  /** The ID of the integration account. */
  account_id: string;
}): Promise<LlmObsIntegrationInferenceResponse>
```

<sub>`POST /api/v2/llm-obs/v1/integrations/{integration}/{account_id}/inference` · `CreateLLMObsIntegrationInference`</sub>

## `datadog.listLlmObsIntegrationModels`

List LLM integration models — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsIntegrationModels(input: {
  integration: LlmObsIntegrationName;
  /** The ID of the integration account. */
  account_id: string;
}): Promise<(LlmObsIntegrationModel)[]>
```

<sub>`GET /api/v2/llm-obs/v1/integrations/{integration}/{account_id}/models` · `ListLLMObsIntegrationModels`</sub>

## `datadog.listLlmObsIntegrationAccounts`

List LLM integration accounts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsIntegrationAccounts(input: {
  integration: LlmObsIntegrationName;
}): Promise<(LlmObsIntegrationAccount)[]>
```

<sub>`GET /api/v2/llm-obs/v1/integrations/{integration}/accounts` · `ListLLMObsIntegrationAccounts`</sub>

## `datadog.listLlmObsProjects`

List LLM Observability projects — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsProjects(input: {
  /** Filter projects by project ID. */
  "filter[id]"?: string;
  /** Filter projects by name. */
  "filter[name]"?: string;
  /** Use the Pagination cursor to retrieve the next page of results. */
  "page[cursor]"?: string;
  /** Maximum number of results to return per page. */
  "page[limit]"?: number;
}): Promise<LlmObsProjectsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/projects` · `ListLLMObsProjects`</sub>

## `datadog.createLlmObsProject`

Create an LLM Observability project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsProject(input: {
  data: LlmObsProjectDataRequest;
}): Promise<LlmObsProjectResponse>
```

<sub>`POST /api/v2/llm-obs/v1/projects` · `CreateLLMObsProject`</sub>

## `datadog.updateLlmObsProject`

Update an LLM Observability project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsProject(input: {
  data: LlmObsProjectUpdateDataRequest;
  /** The ID of the LLM Observability project. */
  project_id: string;
}): Promise<LlmObsProjectResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/projects/{project_id}` · `UpdateLLMObsProject`</sub>

## `datadog.deleteLlmObsProjects`

Delete LLM Observability projects — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsProjects(input: {
  data: LlmObsDeleteProjectsDataRequest;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v1/projects/delete` · `DeleteLLMObsProjects`</sub>

## `datadog.listLlmObsPrompts`

List LLM Observability prompts — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPrompts(input: {
  /** Optional filter for prompts by prompt ID. */
  "filter[prompt_id]"?: string;
}): Promise<LlmObsPromptsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/prompts` · `ListLLMObsPrompts`</sub>

## `datadog.createLlmObsPrompt`

Create an LLM Observability prompt — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsPrompt(input: {
  data: LlmObsCreatePromptData;
}): Promise<LlmObsPromptResponse>
```

<sub>`POST /api/v2/llm-obs/v1/prompts` · `CreateLLMObsPrompt`</sub>

## `datadog.deleteLlmObsPrompt`

Delete an LLM Observability prompt — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsPrompt(input: {
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
}): Promise<LlmObsDeletedPromptResponse>
```

<sub>`DELETE /api/v2/llm-obs/v1/prompts/{prompt_id}` · `DeleteLLMObsPrompt`</sub>

## `datadog.getLlmObsPrompt`

Get an LLM Observability prompt — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsPrompt(input: {
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
  /** **Deprecated.** Optional label of the prompt version to return. Do not use this parameter for new integrations. If omitted, the latest version is returned. If the prompt has no labels, the latest version is returned even when a label is requested. If the prompt has labels but none match the requested label, a 404 response is returned. */
  label?: string;
}): Promise<LlmObsPromptSdkResponse>
```

<sub>`GET /api/v2/llm-obs/v1/prompts/{prompt_id}` · `GetLLMObsPrompt`</sub>

## `datadog.updateLlmObsPrompt`

Update an LLM Observability prompt — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsPrompt(input: {
  data: LlmObsUpdatePromptData;
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
}): Promise<LlmObsPromptResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/prompts/{prompt_id}` · `UpdateLLMObsPrompt`</sub>

## `datadog.listLlmObsPromptVersions`

List versions of an LLM Observability prompt — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPromptVersions(input: {
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
}): Promise<LlmObsPromptVersionsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/prompts/{prompt_id}/versions` · `ListLLMObsPromptVersions`</sub>

## `datadog.createLlmObsPromptVersion`

Create a new LLM Observability prompt version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createLlmObsPromptVersion(input: {
  data: LlmObsCreatePromptVersionData;
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
}): Promise<LlmObsPromptVersionResponse>
```

<sub>`POST /api/v2/llm-obs/v1/prompts/{prompt_id}/versions` · `CreateLLMObsPromptVersion`</sub>

## `datadog.getLlmObsPromptVersion`

Get a specific LLM Observability prompt version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsPromptVersion(input: {
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
  /** The version number of the LLM Observability prompt. */
  version: number;
}): Promise<LlmObsPromptVersionResponse>
```

<sub>`GET /api/v2/llm-obs/v1/prompts/{prompt_id}/versions/{version}` · `GetLLMObsPromptVersion`</sub>

## `datadog.updateLlmObsPromptVersion`

Update a specific LLM Observability prompt version — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateLlmObsPromptVersion(input: {
  data: LlmObsUpdatePromptVersionData;
  /** The customer-provided identifier of the LLM Observability prompt. */
  prompt_id: string;
  /** The version number of the LLM Observability prompt. */
  version: number;
}): Promise<LlmObsPromptVersionResponse>
```

<sub>`PATCH /api/v2/llm-obs/v1/prompts/{prompt_id}/versions/{version}` · `UpdateLLMObsPromptVersion`</sub>

## `datadog.listLlmObsSpans`

List LLM Observability spans — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsSpans(input: {
  /** Start of the time range. Accepts ISO 8601 or relative format (e.g., `now-15m`). Defaults to `now-15m`. */
  "filter[from]"?: string;
  /** End of the time range. Accepts ISO 8601 or relative format. Defaults to `now`. */
  "filter[to]"?: string;
  /** Search query using LLM Observability query syntax. Supports attribute filters using the field:value syntax (e.g. session_id, trace_id, ml_app, meta.span.kind). When provided, structured field filters (`filter[span_id]`, `filter[trace_id]`, etc.) are ignored. */
  "filter[query]"?: string;
  /** Filter by exact span ID. */
  "filter[span_id]"?: string;
  /** Filter by exact trace ID. */
  "filter[trace_id]"?: string;
  /** Filter by span kind (e.g., llm, agent, tool, task, workflow). */
  "filter[span_kind]"?: string;
  /** Filter by span name. */
  "filter[span_name]"?: string;
  /** Filter by ML application name. */
  "filter[ml_app]"?: string;
  /** Maximum number of spans to return. Defaults to `10`. */
  "page[limit]"?: number;
  /** Cursor from the previous response to retrieve the next page. */
  "page[cursor]"?: string;
  /** Sort order for the results. */
  sort?: string;
  /** Whether to include attachment data in the response. Defaults to `true`. */
  include_attachments?: boolean;
}): Promise<LlmObsSpansResponse>
```

<sub>`GET /api/v2/llm-obs/v1/spans/events` · `ListLLMObsSpans`</sub>

## `datadog.searchLlmObsSpans`

Search LLM Observability spans — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchLlmObsSpans(input: {
  data: LlmObsSearchSpansRequestData;
}): Promise<LlmObsSpansResponse>
```

<sub>`POST /api/v2/llm-obs/v1/spans/events/search` · `SearchLLMObsSpans`</sub>

## `datadog.listLlmObsPatternsClusteredPoints`

List patterns clustered points — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPatternsClusteredPoints(input: {
  /** The ID of the topic to retrieve clustered points for. */
  topic_id: string;
  /** Maximum number of clustered points to return per page. */
  page_size?: number;
  /** Pagination token to retrieve the next page of clustered points. */
  page_token?: string;
}): Promise<LlmObsPatternsClusteredPointsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-clustered-points` · `ListLLMObsPatternsClusteredPoints`</sub>

## `datadog.listLlmObsPatternsConfigs`

List patterns configurations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPatternsConfigs(): Promise<LlmObsPatternsConfigsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-configs` · `ListLLMObsPatternsConfigs`</sub>

## `datadog.upsertLlmObsPatternsConfig`

Create or update a patterns configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.upsertLlmObsPatternsConfig(input: {
  data: LlmObsPatternsConfigUpsertRequestData;
}): Promise<LlmObsPatternsConfigResponse>
```

<sub>`PUT /api/v2/llm-obs/v1/topic-discovery-configs` · `UpsertLLMObsPatternsConfig`</sub>

## `datadog.deleteLlmObsPatternsConfig`

Delete a patterns configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteLlmObsPatternsConfig(input: {
  /** The ID of the patterns configuration. */
  config_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/llm-obs/v1/topic-discovery-configs/{config_id}` · `DeleteLLMObsPatternsConfig`</sub>

## `datadog.getLlmObsPatternsConfig`

Get a patterns configuration — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsPatternsConfig(): Promise<LlmObsPatternsConfigResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-configs/latest` · `GetLLMObsPatternsConfig`</sub>

## `datadog.listLlmObsPatternsRuns`

List patterns runs — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPatternsRuns(input: {
  /** The ID of the patterns configuration. */
  config_id: string;
}): Promise<LlmObsPatternsRunsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-runs` · `ListLLMObsPatternsRuns`</sub>

## `datadog.triggerLlmObsPatterns`

Trigger a patterns run — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.triggerLlmObsPatterns(input: {
  data: LlmObsPatternsTriggerRequestData;
}): Promise<LlmObsPatternsTriggerResponse>
```

<sub>`POST /api/v2/llm-obs/v1/topic-discovery-runs` · `TriggerLLMObsPatterns`</sub>

## `datadog.getLlmObsPatternsRunStatus`

Get patterns run status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getLlmObsPatternsRunStatus(input: {
  /** The ID of the patterns configuration. */
  config_id: string;
}): Promise<LlmObsPatternsRunStatusResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-runs/status` · `GetLLMObsPatternsRunStatus`</sub>

## `datadog.listLlmObsPatternsTopics`

List patterns topics — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPatternsTopics(input: {
  /** The ID of the patterns configuration. */
  config_id: string;
  /** The ID of a specific patterns run. Defaults to the most recent completed run. */
  run_id?: string;
}): Promise<LlmObsPatternsTopicsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-topics` · `ListLLMObsPatternsTopics`</sub>

## `datadog.listLlmObsPatternsTopicsWithClusteredPoints`

List patterns topics with clustered points — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsPatternsTopicsWithClusteredPoints(input: {
  /** The ID of the patterns configuration. */
  config_id: string;
  /** The ID of a specific patterns run. Defaults to the most recent completed run. */
  run_id?: string;
  /** When true, enrich each clustered point with span metrics such as status, duration, token counts, estimated cost, and evaluations. */
  include_metrics?: boolean;
}): Promise<LlmObsPatternsTopicsWithClusteredPointsResponse>
```

<sub>`GET /api/v2/llm-obs/v1/topic-discovery-topics/with-cluster-points` · `ListLLMObsPatternsTopicsWithClusteredPoints`</sub>

## `datadog.uploadLlmObsDatasetRecordsFile`

Upload records to an LLM Observability dataset — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.uploadLlmObsDatasetRecordsFile(input: {
  /** The records file to upload. Currently only CSV is supported. The file must include an `input` column. Optional columns include `id`, `expected_output`, `metadata`, and `tags`. */
  file?: string;
  /** The ID of the LLM Observability project. */
  project_id: string;
  /** The ID of the LLM Observability dataset. */
  dataset_id: string;
  /** Whether to skip records whose `input` already exists in the dataset. Defaults to `false`. */
  deduplicate?: boolean;
  /** Whether to overwrite existing records that share the same user-provided `id`. Defaults to `true`. */
  overwrite?: boolean;
  /** Tags to apply to every uploaded record, in addition to any tags defined on individual rows. Can be repeated, e.g. `tags=env:prod&tags=team:ai`. */
  tags?: (string)[];
  /** Whether to enrich the response with user metadata. */
  "include[user_data]"?: boolean;
}): Promise<undefined>
```

<sub>`POST /api/v2/llm-obs/v2/{project_id}/datasets/{dataset_id}/records/upload` · `UploadLLMObsDatasetRecordsFile`</sub>

## `datadog.listLlmObsExperimentEventsV2`

List LLM Observability experiment events (v2) — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsExperimentEventsV2(input: {
  /** The ID of the LLM Observability experiment. */
  experiment_id: string;
}): Promise<LlmObsExperimentEventsV2Response>
```

<sub>`GET /api/v2/llm-obs/v2/experiments/{experiment_id}/events` · `ListLLMObsExperimentEventsV2`</sub>

## `datadog.listLlmObsExperimentEvents`

List events for an LLM Observability experiment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listLlmObsExperimentEvents(input: {
  /** The ID of the LLM Observability experiment. */
  experiment_id: string;
  /** Maximum number of spans to return per page. Defaults to 5000. */
  "page[limit]"?: number;
  /** Opaque cursor from a previous response to fetch the next page of results. */
  "page[cursor]"?: string;
}): Promise<LlmObsExperimentEventsV2Response>
```

<sub>`GET /api/v2/llm-obs/v3/experiments/{experiment_id}/events` · `ListLLMObsExperimentEvents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# GradientAI Platform

119 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.genaiListAgents`

List Agents

```ts
digitalocean.genaiListAgents(input: {
  /** Only list agents that are deployed. */
  only_deployed?: boolean;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAgentsOutputPublic>
```

<sub>`GET /v2/gen-ai/agents` · `genai_list_agents`</sub>

## `digitalocean.genaiCreateAgent`

Create an Agent

```ts
digitalocean.genaiCreateAgent(input: {
  /** Optional Anthropic API key ID to use with Anthropic models */
  anthropic_key_uuid?: string;
  /** A text description of the agent, not used in inference */
  description?: string;
  /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
  instruction?: string;
  /** Ids of the knowledge base(s) to attach to the agent */
  knowledge_base_uuid?: (string)[];
  /** MCP (Model Context Protocol) servers to attach to the agent */
  mcp_servers?: (ApiMcpServer)[];
  model_provider_key_uuid?: string;
  model_router_uuid?: string;
  /** Identifier for the foundation model. */
  model_uuid?: string;
  /** Agent name */
  name?: string;
  /** Optional OpenAI API key ID to use with OpenAI models */
  open_ai_key_uuid?: string;
  /** The id of the DigitalOcean project this agent will belong to */
  project_id?: string;
  reasoning_effort?: string;
  /** The DigitalOcean region to deploy your agent in */
  region?: string;
  router_preset_slug?: string;
  /** Agent tag to organize related resources */
  tags?: (string)[];
  thinking_token_budget?: number;
  /** Whether the agent can use the built-in web_fetch tool to retrieve content from public web pages. */
  web_fetch_enabled?: boolean;
  /** Whether the agent can use the built-in web_search tool to search the public web for current information. */
  web_search_enabled?: boolean;
  /** Identifier for the workspace */
  workspace_uuid?: string;
}): Promise<ApiCreateAgentOutput>
```

<sub>`POST /v2/gen-ai/agents` · `genai_create_agent`</sub>

## `digitalocean.genaiListAgentApiKeys`

List Agent API Keys

```ts
digitalocean.genaiListAgentApiKeys(input: {
  /** Agent id */
  agent_uuid: string;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAgentApiKeysOutput>
```

<sub>`GET /v2/gen-ai/agents/{agent_uuid}/api_keys` · `genai_list_agent_api_keys`</sub>

## `digitalocean.genaiCreateAgentApiKey`

Create an Agent API Key

```ts
digitalocean.genaiCreateAgentApiKey(input: {
  /** Agent id */
  agent_uuid?: string;
  /** A human friendly name to identify the key */
  name?: string;
}, options: { params: { agent_uuid: string } }): Promise<ApiCreateAgentApiKeyOutput>
```

<sub>`POST /v2/gen-ai/agents/{agent_uuid}/api_keys` · `genai_create_agent_api_key`</sub>

## `digitalocean.genaiDeleteAgentApiKey`

Delete API Key for an Agent

```ts
digitalocean.genaiDeleteAgentApiKey(input: {
  /** A unique identifier for your agent. */
  agent_uuid: string;
  /** API key for an agent. */
  api_key_uuid: string;
}): Promise<ApiDeleteAgentApiKeyOutput>
```

<sub>`DELETE /v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}` · `genai_delete_agent_api_key`</sub>

## `digitalocean.genaiUpdateAgentApiKey`

Update API Key for an Agent

```ts
digitalocean.genaiUpdateAgentApiKey(input: {
  /** Agent id */
  agent_uuid?: string;
  /** API key ID */
  api_key_uuid?: string;
  /** Name */
  name?: string;
}, options: { params: { agent_uuid: string; api_key_uuid: string } }): Promise<ApiUpdateAgentApiKeyOutput>
```

<sub>`PUT /v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}` · `genai_update_agent_api_key`</sub>

## `digitalocean.genaiRegenerateAgentApiKey`

Regenerate API Key for an Agent

```ts
digitalocean.genaiRegenerateAgentApiKey(input: {
  /** Agent id */
  agent_uuid: string;
  /** API key ID */
  api_key_uuid: string;
}): Promise<ApiRegenerateAgentApiKeyOutput>
```

<sub>`PUT /v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate` · `genai_regenerate_agent_api_key`</sub>

## `digitalocean.genaiAttachAgentFunction`

Add Function Route to an Agent

```ts
digitalocean.genaiAttachAgentFunction(input: {
  /** Agent id */
  agent_uuid?: string;
  /** Function description */
  description?: string;
  /** The name of the function in the DigitalOcean functions platform */
  faas_name?: string;
  /** The namespace of the function in the DigitalOcean functions platform */
  faas_namespace?: string;
  /** Function name */
  function_name?: string;
  /** Describe the input schema for the function so the agent may call it */
  input_schema?: { [key: string]: unknown };
  /** Describe the output schema for the function so the agent handle its response */
  output_schema?: { [key: string]: unknown };
}, options: { params: { agent_uuid: string } }): Promise<ApiLinkAgentFunctionOutput>
```

<sub>`POST /v2/gen-ai/agents/{agent_uuid}/functions` · `genai_attach_agent_function`</sub>

## `digitalocean.genaiDetachAgentFunction`

Delete Function Route for an Agent

```ts
digitalocean.genaiDetachAgentFunction(input: {
  /** The id of the agent the function route belongs to. */
  agent_uuid: string;
  /** The function route to be destroyed. This does not destroy the function itself. */
  function_uuid: string;
}): Promise<ApiUnlinkAgentFunctionOutput>
```

<sub>`DELETE /v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}` · `genai_detach_agent_function`</sub>

## `digitalocean.genaiUpdateAgentFunction`

Update Function Route for an Agent

```ts
digitalocean.genaiUpdateAgentFunction(input: {
  /** Agent id */
  agent_uuid?: string;
  /** Funciton description */
  description?: string;
  /** The name of the function in the DigitalOcean functions platform */
  faas_name?: string;
  /** The namespace of the function in the DigitalOcean functions platform */
  faas_namespace?: string;
  /** Function name */
  function_name?: string;
  /** Function id */
  function_uuid?: string;
  /** Describe the input schema for the function so the agent may call it */
  input_schema?: { [key: string]: unknown };
  /** Describe the output schema for the function so the agent handle its response */
  output_schema?: { [key: string]: unknown };
}, options: { params: { agent_uuid: string; function_uuid: string } }): Promise<ApiUpdateAgentFunctionOutput>
```

<sub>`PUT /v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}` · `genai_update_agent_function`</sub>

## `digitalocean.genaiAttachAgentGuardrails`

Attach Guardrails to an Agent

```ts
digitalocean.genaiAttachAgentGuardrails(input: {
  /** The UUID of the agent. */
  agent_uuid?: string;
  /** The list of guardrails to attach. */
  guardrails?: (ApiAgentGuardrailInput)[];
}, options: { params: { agent_uuid: string } }): Promise<ApiLinkAgentGuardrailOutput>
```

<sub>`POST /v2/gen-ai/agents/{agent_uuid}/guardrails` · `genai_attach_agent_guardrails`</sub>

## `digitalocean.genaiDetachAgentGuardrail`

Detach a Guardrail from an Agent

```ts
digitalocean.genaiDetachAgentGuardrail(input: {
  /** The UUID of the agent. */
  agent_uuid: string;
  /** The UUID of the guardrail to detach. */
  guardrail_uuid: string;
}): Promise<ApiUnlinkAgentGuardrailOutput>
```

<sub>`DELETE /v2/gen-ai/agents/{agent_uuid}/guardrails/{guardrail_uuid}` · `genai_detach_agent_guardrail`</sub>

## `digitalocean.genaiAttachKnowledgeBases`

Attach Knowledge Bases to an Agent

```ts
digitalocean.genaiAttachKnowledgeBases(input: {
  /** A unique identifier for an agent. */
  agent_uuid: string;
}): Promise<ApiLinkKnowledgeBaseOutput>
```

<sub>`POST /v2/gen-ai/agents/{agent_uuid}/knowledge_bases` · `genai_attach_knowledge_bases`</sub>

## `digitalocean.genaiDetachKnowledgeBase`

Detach Knowledge Base from an Agent

```ts
digitalocean.genaiDetachKnowledgeBase(input: {
  /** Agent id */
  agent_uuid: string;
  /** Knowledge base id */
  knowledge_base_uuid: string;
}): Promise<ApiUnlinkKnowledgeBaseOutput>
```

<sub>`DELETE /v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}` · `genai_detach_knowledge_base`</sub>

## `digitalocean.genaiAttachKnowledgeBase`

Attach Knowledge Base to an Agent

```ts
digitalocean.genaiAttachKnowledgeBase(input: {
  /** A unique identifier for an agent. */
  agent_uuid: string;
  /** A unique identifier for a knowledge base. */
  knowledge_base_uuid: string;
}): Promise<ApiLinkKnowledgeBaseOutput>
```

<sub>`POST /v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}` · `genai_attach_knowledge_base`</sub>

## `digitalocean.genaiDetachAgent`

Delete Agent Route for an Agent

```ts
digitalocean.genaiDetachAgent(input: {
  /** Pagent agent id */
  parent_agent_uuid: string;
  /** Routed agent id */
  child_agent_uuid: string;
}): Promise<ApiUnlinkAgentOutput>
```

<sub>`DELETE /v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}` · `genai_detach_agent`</sub>

## `digitalocean.genaiAttachAgent`

Add Agent Route to an Agent

```ts
digitalocean.genaiAttachAgent(input: {
  /** Routed agent id */
  child_agent_uuid?: string;
  if_case?: string;
  /** A unique identifier for the parent agent. */
  parent_agent_uuid?: string;
  /** Name of route */
  route_name?: string;
}, options: { params: { parent_agent_uuid: string; child_agent_uuid: string } }): Promise<ApiLinkAgentOutput>
```

<sub>`POST /v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}` · `genai_attach_agent`</sub>

## `digitalocean.genaiUpdateAttachedAgent`

Update Agent Route for an Agent

```ts
digitalocean.genaiUpdateAttachedAgent(input: {
  /** Routed agent id */
  child_agent_uuid?: string;
  /** Describes the case in which the child agent should be used */
  if_case?: string;
  /** A unique identifier for the parent agent. */
  parent_agent_uuid?: string;
  /** Route name */
  route_name?: string;
  /** Unique id of linkage */
  uuid?: string;
}, options: { params: { parent_agent_uuid: string; child_agent_uuid: string } }): Promise<ApiUpdateLinkedAgentOutput>
```

<sub>`PUT /v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}` · `genai_update_attached_agent`</sub>

## `digitalocean.genaiDeleteAgent`

Delete an Agent

```ts
digitalocean.genaiDeleteAgent(input: {
  /** Unique agent id */
  uuid: string;
}): Promise<ApiDeleteAgentOutput>
```

<sub>`DELETE /v2/gen-ai/agents/{uuid}` · `genai_delete_agent`</sub>

## `digitalocean.genaiGetAgent`

Retrieve an Existing Agent

```ts
digitalocean.genaiGetAgent(input: {
  /** Unique agent id */
  uuid: string;
}): Promise<ApiGetAgentOutput>
```

<sub>`GET /v2/gen-ai/agents/{uuid}` · `genai_get_agent`</sub>

## `digitalocean.genaiUpdateAgent`

Update an Agent

```ts
digitalocean.genaiUpdateAgent(input: {
  agent_log_insights_enabled?: boolean;
  /** Optional list of allowed domains for the chatbot - Must use fully qualified domain name (FQDN) such as https://example.com */
  allowed_domains?: (string)[];
  /** Optional anthropic key uuid for use with anthropic models */
  anthropic_key_uuid?: string;
  /** When true, removes all MCP servers from the agent. Use this instead of sending an empty mcp_servers array. */
  clear_mcp_servers?: boolean;
  /** Optional update of conversation logs enabled */
  conversation_logs_enabled?: boolean;
  /** Agent description */
  description?: string;
  /** Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices. */
  instruction?: string;
  /** How many results should be considered from an attached knowledge base */
  k?: number;
  /** Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response. */
  max_tokens?: number;
  /** MCP (Model Context Protocol) servers to attach to the agent */
  mcp_servers?: (ApiMcpServer)[];
  /** Optional Model Provider uuid for use with provider models */
  model_provider_key_uuid?: string;
  model_router_uuid?: string;
  /** Identifier for the foundation model. */
  model_uuid?: string;
  /** Agent name */
  name?: string;
  /** Optional OpenAI key uuid for use with OpenAI models */
  open_ai_key_uuid?: string;
  /** The id of the DigitalOcean project this agent will belong to */
  project_id?: string;
  provide_citations?: boolean;
  reasoning_effort?: string;
  retrieval_method?: ApiRetrievalMethod;
  router_preset_slug?: string;
  /** A set of abitrary tags to organize your agent */
  tags?: (string)[];
  /** Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation. */
  temperature?: number;
  thinking_token_budget?: number;
  /** Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses. */
  top_p?: number;
  /** Unique agent id */
  uuid?: string;
  /** Optional. Set to true to let the agent use the built-in web_fetch tool to retrieve content from public web pages, or false to disable it. */
  web_fetch_enabled?: boolean;
  /** Optional. Set to true to let the agent use the built-in web_search tool to search the public web for current information, or false to disable it. */
  web_search_enabled?: boolean;
}, options: { params: { uuid: string } }): Promise<ApiUpdateAgentOutput>
```

<sub>`PUT /v2/gen-ai/agents/{uuid}` · `genai_update_agent`</sub>

## `digitalocean.genaiGetAgentChildren`

View Agent Routes

```ts
digitalocean.genaiGetAgentChildren(input: {
  /** Agent id */
  uuid: string;
}): Promise<ApiGetChildrenOutput>
```

<sub>`GET /v2/gen-ai/agents/{uuid}/child_agents` · `genai_get_agent_children`</sub>

## `digitalocean.genaiUpdateAgentDeploymentVisibility`

Update Agent Status

```ts
digitalocean.genaiUpdateAgentDeploymentVisibility(input: {
  /** Unique id */
  uuid?: string;
  visibility?: ApiDeploymentVisibility;
}, options: { params: { uuid: string } }): Promise<ApiUpdateAgentDeploymentVisbilityOutput>
```

<sub>`PUT /v2/gen-ai/agents/{uuid}/deployment_visibility` · `genai_update_agent_deployment_visibility`</sub>

## `digitalocean.genaiGetAgentUsage`

Get Agent Usage

```ts
digitalocean.genaiGetAgentUsage(input: {
  /** Agent id */
  uuid: string;
  /** Return all usage data from this date. */
  start?: string;
  /** Return all usage data up to this date, if omitted, will return up to the current date. */
  stop?: string;
}): Promise<ApiGetAgentUsageOutput>
```

<sub>`GET /v2/gen-ai/agents/{uuid}/usage` · `genai_get_agent_usage`</sub>

## `digitalocean.genaiListAgentVersions`

List Agent Versions

```ts
digitalocean.genaiListAgentVersions(input: {
  /** Agent uuid */
  uuid: string;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAgentVersionsOutput>
```

<sub>`GET /v2/gen-ai/agents/{uuid}/versions` · `genai_list_agent_versions`</sub>

## `digitalocean.genaiRollbackToAgentVersion`

Rollback to Agent Version

```ts
digitalocean.genaiRollbackToAgentVersion(input: {
  /** Agent unique identifier */
  uuid?: string;
  /** Unique identifier */
  version_hash?: string;
}, options: { params: { uuid: string } }): Promise<ApiRollbackToAgentVersionOutput>
```

<sub>`PUT /v2/gen-ai/agents/{uuid}/versions` · `genai_rollback_to_agent_version`</sub>

## `digitalocean.genaiListAnthropicApiKeys`

List Anthropic API Keys

```ts
digitalocean.genaiListAnthropicApiKeys(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAnthropicApiKeysOutput>
```

<sub>`GET /v2/gen-ai/anthropic/keys` · `genai_list_anthropic_api_keys`</sub>

## `digitalocean.genaiCreateAnthropicApiKey`

Create Anthropic API Key

```ts
digitalocean.genaiCreateAnthropicApiKey(input: {
  /** Anthropic API key */
  api_key?: string;
  /** Name of the key */
  name?: string;
}): Promise<ApiCreateAnthropicApiKeyOutput>
```

<sub>`POST /v2/gen-ai/anthropic/keys` · `genai_create_anthropic_api_key`</sub>

## `digitalocean.genaiDeleteAnthropicApiKey`

Delete Anthropic API Key

```ts
digitalocean.genaiDeleteAnthropicApiKey(input: {
  /** API key ID */
  api_key_uuid: string;
}): Promise<ApiDeleteAnthropicApiKeyOutput>
```

<sub>`DELETE /v2/gen-ai/anthropic/keys/{api_key_uuid}` · `genai_delete_anthropic_api_key`</sub>

## `digitalocean.genaiGetAnthropicApiKey`

Get Anthropic API Key

```ts
digitalocean.genaiGetAnthropicApiKey(input: {
  /** API key ID */
  api_key_uuid: string;
}): Promise<ApiGetAnthropicApiKeyOutput>
```

<sub>`GET /v2/gen-ai/anthropic/keys/{api_key_uuid}` · `genai_get_anthropic_api_key`</sub>

## `digitalocean.genaiUpdateAnthropicApiKey`

Update Anthropic API Key

```ts
digitalocean.genaiUpdateAnthropicApiKey(input: {
  /** Anthropic API key */
  api_key?: string;
  /** API key ID */
  api_key_uuid?: string;
  /** Name of the key */
  name?: string;
}, options: { params: { api_key_uuid: string } }): Promise<ApiUpdateAnthropicApiKeyOutput>
```

<sub>`PUT /v2/gen-ai/anthropic/keys/{api_key_uuid}` · `genai_update_anthropic_api_key`</sub>

## `digitalocean.genaiListAgentsByAnthropicKey`

List agents by Anthropic key

```ts
digitalocean.genaiListAgentsByAnthropicKey(input: {
  /** Unique ID of Anthropic key */
  uuid: string;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAgentsByAnthropicKeyOutput>
```

<sub>`GET /v2/gen-ai/anthropic/keys/{uuid}/agents` · `genai_list_agents_by_anthropic_key`</sub>

## `digitalocean.genaiCreateCustomEvaluationMetric`

Create Custom Evaluation Metric

```ts
digitalocean.genaiCreateCustomEvaluationMetric(input: {
  config?: ApiCustomEvaluationMetricConfig;
  description?: string;
  metric_name?: string;
}): Promise<ApiCreateCustomEvaluationMetricOutput>
```

<sub>`POST /v2/gen-ai/custom_evaluation_metrics` · `genai_create_custom_evaluation_metric`</sub>

## `digitalocean.genaiDeleteCustomEvaluationMetric`

Delete Custom Evaluation Metric

```ts
digitalocean.genaiDeleteCustomEvaluationMetric(input: {
  /** UUID of the custom metric to delete. */
  metric_uuid: string;
}): Promise<ApiDeleteCustomEvaluationMetricOutput>
```

<sub>`DELETE /v2/gen-ai/custom_evaluation_metrics/{metric_uuid}` · `genai_delete_custom_evaluation_metric`</sub>

## `digitalocean.genaiUpdateCustomEvaluationMetric`

Update Custom Evaluation Metric

```ts
digitalocean.genaiUpdateCustomEvaluationMetric(input: {
  config?: ApiCustomEvaluationMetricConfig;
  description?: string;
  metric_name?: string;
  metric_uuid?: string;
}, options: { params: { metric_uuid: string } }): Promise<ApiUpdateCustomEvaluationMetricOutput>
```

<sub>`PUT /v2/gen-ai/custom_evaluation_metrics/{metric_uuid}` · `genai_update_custom_evaluation_metric`</sub>

## `digitalocean.genaiListCustomModels`

List Custom Models

```ts
digitalocean.genaiListCustomModels(input: {
  /** Page number for pagination. */
  page?: number;
  /** Number of items per page. */
  per_page?: number;
  /** Filter by model status. */
  status?: "STATUS_UNSPECIFIED" | "STATUS_IMPORTING" | "STATUS_READY" | "STATUS_FAILED" | "STATUS_DELETED";
}): Promise<ApiListCustomModelsOutputPublic>
```

<sub>`GET /v2/gen-ai/custom_models` · `genai_list_custom_models`</sub>

## `digitalocean.genaiDeleteCustomModel`

Delete Custom Model

```ts
digitalocean.genaiDeleteCustomModel(input: {
  /** UUID of the custom model to delete */
  uuid: string;
}): Promise<ApiDeleteCustomModelOutputPublic>
```

<sub>`DELETE /v2/gen-ai/custom_models/{uuid}` · `genai_delete_custom_model`</sub>

## `digitalocean.genaiGetCustomModel`

Get Custom Model

```ts
digitalocean.genaiGetCustomModel(input: {
  /** UUID of the custom model to retrieve */
  uuid: string;
}): Promise<ApiGetCustomModelOutputPublic>
```

<sub>`GET /v2/gen-ai/custom_models/{uuid}` · `genai_get_custom_model`</sub>

## `digitalocean.genaiUpdateCustomModelMetadata`

Update Custom Model Metadata

```ts
digitalocean.genaiUpdateCustomModelMetadata(input: {
  description?: string;
  /** Optional new input modalities for the model (replaces existing list when non-empty). Spaces-imported models only. */
  input_modalities?: (string)[];
  license?: string;
  name?: string;
  /** Optional new output modalities for the model (replaces existing list when non-empty). Spaces-imported models only. */
  output_modalities?: (string)[];
  parameters?: string;
  tags?: CustomModelTags;
  /** UUID of the custom model to update */
  uuid?: string;
}, options: { params: { uuid: string } }): Promise<ApiUpdateCustomModelMetadataOutputPublic>
```

<sub>`PATCH /v2/gen-ai/custom_models/{uuid}/metadata` · `genai_update_custom_model_metadata`</sub>

## `digitalocean.genaiImportCustomModel`

Import Custom Model

```ts
digitalocean.genaiImportCustomModel(input: {
  /** Whether the caller accepts storage of their HuggingFace token for gated model access */
  accept_hf_token_storage?: boolean;
  /** Whether the caller accepts the terms and conditions for importing this model */
  accept_terms_and_conditions?: boolean;
  /** Description of the model */
  description?: string;
  /** Name for the imported model */
  name?: string;
  /** Preferred GPU region for deployment */
  preferred_gpu_region?: string;
  source_ref?: CustomModelSourceRef;
  source_type?: CustomModelSourceType;
  tags?: CustomModelTags;
}): Promise<ApiImportCustomModelOutputPublic>
```

<sub>`POST /v2/gen-ai/custom_models/import` · `genai_import_custom_model`</sub>

## `digitalocean.genaiListEvaluationDatasets`

List Evaluation Datasets

```ts
digitalocean.genaiListEvaluationDatasets(input: {
  /** Filter by evaluation dataset type. */
  dataset_type?: "EVALUATION_DATASET_TYPE_UNKNOWN" | "EVALUATION_DATASET_TYPE_ADK" | "EVALUATION_DATASET_TYPE_NON_ADK" | "EVALUATION_DATASET_TYPE_MODEL";
}): Promise<ApiListEvaluationDatasetsOutput>
```

<sub>`GET /v2/gen-ai/evaluation_datasets` · `genai_list_evaluation_datasets`</sub>

## `digitalocean.genaiCreateEvaluationDataset`

Create Evaluation Dataset

```ts
digitalocean.genaiCreateEvaluationDataset(input: {
  dataset_type?: ApiEvaluationDatasetType;
  file_upload_dataset?: ApiFileUploadDataSource;
  /** The name of the agent evaluation dataset. */
  name?: string;
}): Promise<ApiCreateEvaluationDatasetOutput>
```

<sub>`POST /v2/gen-ai/evaluation_datasets` · `genai_create_evaluation_dataset`</sub>

## `digitalocean.genaiDeleteEvaluationDataset`

Delete Evaluation Dataset

```ts
digitalocean.genaiDeleteEvaluationDataset(input: {
  /** UUID of the evaluation dataset to delete. */
  dataset_uuid: string;
}): Promise<ApiDeleteEvaluationDatasetOutput>
```

<sub>`DELETE /v2/gen-ai/evaluation_datasets/{dataset_uuid}` · `genai_delete_evaluation_dataset`</sub>

## `digitalocean.genaiGetEvaluationDatasetDownloadUrl`

Get Download URL for Evaluation Dataset

```ts
digitalocean.genaiGetEvaluationDatasetDownloadUrl(input: {
  /** UUID of the evaluation dataset. */
  dataset_uuid: string;
}): Promise<ApiGetEvaluationDatasetDownloadUrlOutput>
```

<sub>`GET /v2/gen-ai/evaluation_datasets/{dataset_uuid}/download_url` · `genai_get_evaluation_dataset_download_url`</sub>

## `digitalocean.genaiCreateEvaluationDatasetFileUploadPresignedUrls`

Create Presigned URLs for Evaluation Dataset File Upload

```ts
digitalocean.genaiCreateEvaluationDatasetFileUploadPresignedUrls(input: {
  /** A list of files to generate presigned URLs for. */
  files?: (ApiPresignedUrlFile)[];
}): Promise<ApiCreateDataSourceFileUploadPresignedUrlsOutput>
```

<sub>`POST /v2/gen-ai/evaluation_datasets/file_upload_presigned_urls` · `genai_create_evaluation_dataset_file_upload_presigned_urls`</sub>

## `digitalocean.genaiListEvaluationMetrics`

List Evaluation Metrics

```ts
digitalocean.genaiListEvaluationMetrics(): Promise<ApiListEvaluationMetricsOutput>
```

<sub>`GET /v2/gen-ai/evaluation_metrics` · `genai_list_evaluation_metrics`</sub>

## `digitalocean.genaiRunEvaluationTestCase`

Run an Evaluation Test Case

```ts
digitalocean.genaiRunEvaluationTestCase(input: {
  /** Agent deployment names to run the test case against (ADK agent workspaces). */
  agent_deployment_names?: (string)[];
  /** Agent UUIDs to run the test case against (legacy agents). */
  agent_uuids?: (string)[];
  /** The name of the run. */
  run_name?: string;
  /** Test-case UUID to run */
  test_case_uuid?: string;
}): Promise<ApiRunEvaluationTestCaseOutput>
```

<sub>`POST /v2/gen-ai/evaluation_runs` · `genai_run_evaluation_test_case`</sub>

## `digitalocean.genaiGetEvaluationRun`

Retrieve Information About an Existing Evaluation Run

```ts
digitalocean.genaiGetEvaluationRun(input: {
  /** Evaluation run UUID. */
  evaluation_run_uuid: string;
}): Promise<ApiGetEvaluationRunOutput>
```

<sub>`GET /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}` · `genai_get_evaluation_run`</sub>

## `digitalocean.genaiGetEvaluationRunResults`

Retrieve Results of an Evaluation Run

```ts
digitalocean.genaiGetEvaluationRunResults(input: {
  /** Evaluation run UUID. */
  evaluation_run_uuid: string;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiGetEvaluationRunResultsOutput>
```

<sub>`GET /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results` · `genai_get_evaluation_run_results`</sub>

## `digitalocean.genaiGetEvaluationRunPromptResults`

Retrieve Results of an Evaluation Run Prompt

```ts
digitalocean.genaiGetEvaluationRunPromptResults(input: {
  /** Evaluation run UUID. */
  evaluation_run_uuid: string;
  /** Prompt ID to get results for. */
  prompt_id: number;
}): Promise<ApiGetEvaluationRunPromptResultsOutput>
```

<sub>`GET /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}` · `genai_get_evaluation_run_prompt_results`</sub>

## `digitalocean.genaiListEvaluationTestCases`

List Evaluation Test Cases

```ts
digitalocean.genaiListEvaluationTestCases(): Promise<ApiListEvaluationTestCasesOutput>
```

<sub>`GET /v2/gen-ai/evaluation_test_cases` · `genai_list_evaluation_test_cases`</sub>

## `digitalocean.genaiCreateEvaluationTestCase`

Create Evaluation Test Case.

```ts
digitalocean.genaiCreateEvaluationTestCase(input: {
  agent_workspace_name?: string;
  /** Dataset against which the test‑case is executed. */
  dataset_uuid?: string;
  /** Description of the test case. */
  description?: string;
  /** Full metric list to use for evaluation test case. */
  metrics?: (string)[];
  /** Name of the test case. */
  name?: string;
  star_metric?: ApiStarMetric;
  /** The workspace uuid. */
  workspace_uuid?: string;
}): Promise<ApiCreateEvaluationTestCaseOutput>
```

<sub>`POST /v2/gen-ai/evaluation_test_cases` · `genai_create_evaluation_test_case`</sub>

## `digitalocean.genaiListEvaluationRunsByTestCase`

List Evaluation Runs by Test Case

```ts
digitalocean.genaiListEvaluationRunsByTestCase(input: {
  /** Evaluation run UUID. */
  evaluation_test_case_uuid: string;
  /** Version of the test case. */
  evaluation_test_case_version?: number;
}): Promise<ApiListEvaluationRunsByTestCaseOutput>
```

<sub>`GET /v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs` · `genai_list_evaluation_runs_by_test_case`</sub>

## `digitalocean.genaiGetEvaluationTestCase`

Retrieve Information About an Existing Evaluation Test Case

```ts
digitalocean.genaiGetEvaluationTestCase(input: {
  /** The test case uuid to retrieve. */
  test_case_uuid: string;
  /** Version of the test case. */
  evaluation_test_case_version?: number;
}): Promise<ApiGetEvaluationTestCaseOutput>
```

<sub>`GET /v2/gen-ai/evaluation_test_cases/{test_case_uuid}` · `genai_get_evaluation_test_case`</sub>

## `digitalocean.genaiUpdateEvaluationTestCase`

Update an Evaluation Test Case.

```ts
digitalocean.genaiUpdateEvaluationTestCase(input: {
  /** Dataset against which the test‑case is executed. */
  dataset_uuid?: string;
  /** Description of the test case. */
  description?: string;
  metrics?: ApiEvaluationTestCaseMetricList;
  /** Name of the test case. */
  name?: string;
  star_metric?: ApiStarMetric;
  /** Test-case UUID to update */
  test_case_uuid?: string;
}, options: { params: { test_case_uuid: string } }): Promise<ApiUpdateEvaluationTestCaseOutput>
```

<sub>`PUT /v2/gen-ai/evaluation_test_cases/{test_case_uuid}` · `genai_update_evaluation_test_case`</sub>

## `digitalocean.genaiListIndexingJobs`

List Indexing Jobs for a Knowledge Base

```ts
digitalocean.genaiListIndexingJobs(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListKnowledgeBaseIndexingJobsOutput>
```

<sub>`GET /v2/gen-ai/indexing_jobs` · `genai_list_indexing_jobs`</sub>

## `digitalocean.genaiCreateIndexingJob`

Start Indexing Job for a Knowledge Base

```ts
digitalocean.genaiCreateIndexingJob(input: {
  /** List of data source ids to index, if none are provided, all data sources will be indexed */
  data_source_uuids?: (string)[];
  /** Knowledge base id */
  knowledge_base_uuid?: string;
}): Promise<ApiStartKnowledgeBaseIndexingJobOutput>
```

<sub>`POST /v2/gen-ai/indexing_jobs` · `genai_create_indexing_job`</sub>

## `digitalocean.genaiListIndexingJobDataSources`

List Data Sources for Indexing Job for a Knowledge Base

```ts
digitalocean.genaiListIndexingJobDataSources(input: {
  /** Uuid of the indexing job */
  indexing_job_uuid: string;
}): Promise<ApiListIndexingJobDataSourcesOutput>
```

<sub>`GET /v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources` · `genai_list_indexing_job_data_sources`</sub>

## `digitalocean.genaiGetIndexingJobDetailsSignedUrl`

Get Signed URL for Indexing Job Details

```ts
digitalocean.genaiGetIndexingJobDetailsSignedUrl(input: {
  /** The uuid of the indexing job */
  indexing_job_uuid: string;
}): Promise<ApiGetIndexingJobDetailsSignedUrlOutput>
```

<sub>`GET /v2/gen-ai/indexing_jobs/{indexing_job_uuid}/details_signed_url` · `genai_get_indexing_job_details_signed_url`</sub>

## `digitalocean.genaiGetIndexingJob`

Retrieve Status of Indexing Job for a Knowledge Base

```ts
digitalocean.genaiGetIndexingJob(input: {
  /** Indexing job id */
  uuid: string;
}): Promise<ApiGetKnowledgeBaseIndexingJobOutput>
```

<sub>`GET /v2/gen-ai/indexing_jobs/{uuid}` · `genai_get_indexing_job`</sub>

## `digitalocean.genaiCancelIndexingJob`

Cancel Indexing Job for a Knowledge Base

```ts
digitalocean.genaiCancelIndexingJob(input: {
  /** A unique identifier for an indexing job. */
  uuid?: string;
}, options: { params: { uuid: string } }): Promise<ApiCancelKnowledgeBaseIndexingJobOutput>
```

<sub>`PUT /v2/gen-ai/indexing_jobs/{uuid}/cancel` · `genai_cancel_indexing_job`</sub>

## `digitalocean.genaiListKnowledgeBases`

List Knowledge Bases

```ts
digitalocean.genaiListKnowledgeBases(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListKnowledgeBasesOutput>
```

<sub>`GET /v2/gen-ai/knowledge_bases` · `genai_list_knowledge_bases`</sub>

## `digitalocean.genaiCreateKnowledgeBase`

Create a Knowledge Base

```ts
digitalocean.genaiCreateKnowledgeBase(input: {
  /** Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional. If not provided, we create a new database for the knowledge base in the same region as the knowledge base. */
  database_id?: string;
  /** Optional data sources to attach at creation. Omit or use an empty list to create the knowledge base without sources, then add sources (with chunking strategy and sizes) using [Add a Data Source to a Knowledge Base](#operation/create_knowledge_base_data_source). When provided, see [Organize Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-data-sources) for best practices. */
  datasources?: (ApiKbDataSource)[];
  /** Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models). */
  embedding_model_uuid?: string;
  /** Name of the knowledge base. */
  name?: string;
  /** Identifier of the DigitalOcean project this knowledge base will belong to. */
  project_id?: string;
  /** The datacenter region to deploy the knowledge base in. */
  region?: string;
  reranking_config?: ApiRerankingConfiguration;
  size?: ApiOpenSearchPlanSize;
  /** Tags to organize your knowledge base. */
  tags?: (string)[];
  /** The VPC to deploy the knowledge base database in */
  vpc_uuid?: string;
}): Promise<ApiCreateKnowledgeBaseOutput>
```

<sub>`POST /v2/gen-ai/knowledge_bases` · `genai_create_knowledge_base`</sub>

## `digitalocean.genaiListKnowledgeBaseDataSources`

List Data Sources for a Knowledge Base

```ts
digitalocean.genaiListKnowledgeBaseDataSources(input: {
  /** Knowledge base id */
  knowledge_base_uuid: string;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListKnowledgeBaseDataSourcesOutput>
```

<sub>`GET /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources` · `genai_list_knowledge_base_data_sources`</sub>

## `digitalocean.genaiCreateKnowledgeBaseDataSource`

Add Data Source to a Knowledge Base

```ts
digitalocean.genaiCreateKnowledgeBaseDataSource(input: {
  aws_data_source?: ApiAwsDataSource;
  chunking_algorithm?: ApiChunkingAlgorithm;
  chunking_options?: ApiChunkingOptions;
  /** Knowledge base id */
  knowledge_base_uuid?: string;
  spaces_data_source?: ApiSpacesDataSource;
  web_crawler_data_source?: ApiWebCrawlerDataSource;
}, options: { params: { knowledge_base_uuid: string } }): Promise<ApiCreateKnowledgeBaseDataSourceOutput>
```

<sub>`POST /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources` · `genai_create_knowledge_base_data_source`</sub>

## `digitalocean.genaiDeleteKnowledgeBaseDataSource`

Delete a Data Source from a Knowledge Base

```ts
digitalocean.genaiDeleteKnowledgeBaseDataSource(input: {
  /** Knowledge base id */
  knowledge_base_uuid: string;
  /** Data source id */
  data_source_uuid: string;
}): Promise<ApiDeleteKnowledgeBaseDataSourceOutput>
```

<sub>`DELETE /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}` · `genai_delete_knowledge_base_data_source`</sub>

## `digitalocean.genaiUpdateKnowledgeBaseDataSource`

Update Data Source options

```ts
digitalocean.genaiUpdateKnowledgeBaseDataSource(input: {
  chunking_algorithm?: ApiChunkingAlgorithm;
  chunking_options?: ApiChunkingOptions;
  /** Data Source ID (Path Parameter) */
  data_source_uuid?: string;
  /** Knowledge Base ID (Path Parameter) */
  knowledge_base_uuid?: string;
}, options: { params: { knowledge_base_uuid: string; data_source_uuid: string } }): Promise<ApiUpdateKnowledgeBaseDataSourceOutput>
```

<sub>`PUT /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}` · `genai_update_knowledge_base_data_source`</sub>

## `digitalocean.genaiListIndexingJobsByKnowledgeBase`

List Indexing Jobs for a Knowledge Base

```ts
digitalocean.genaiListIndexingJobsByKnowledgeBase(input: {
  /** Knowledge base uuid in string */
  knowledge_base_uuid: string;
}): Promise<ApiListKnowledgeBaseIndexingJobsOutput>
```

<sub>`GET /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/indexing_jobs` · `genai_list_indexing_jobs_by_knowledge_base`</sub>

## `digitalocean.genaiDeleteKnowledgeBase`

Delete a Knowledge Base

```ts
digitalocean.genaiDeleteKnowledgeBase(input: {
  /** Knowledge base id */
  uuid: string;
}): Promise<ApiDeleteKnowledgeBaseOutput>
```

<sub>`DELETE /v2/gen-ai/knowledge_bases/{uuid}` · `genai_delete_knowledge_base`</sub>

## `digitalocean.genaiGetKnowledgeBase`

Retrieve Information About an Existing Knowledge Base

```ts
digitalocean.genaiGetKnowledgeBase(input: {
  /** Knowledge base id */
  uuid: string;
}): Promise<ApiGetKnowledgeBaseOutput>
```

<sub>`GET /v2/gen-ai/knowledge_bases/{uuid}` · `genai_get_knowledge_base`</sub>

## `digitalocean.genaiUpdateKnowledgeBase`

Update a Knowledge Base

```ts
digitalocean.genaiUpdateKnowledgeBase(input: {
  /** The id of the DigitalOcean database this knowledge base will use, optional. */
  database_id?: string;
  /** Knowledge base name */
  name?: string;
  /** The id of the DigitalOcean project this knowledge base will belong to */
  project_id?: string;
  reranking_config?: ApiRerankingConfiguration;
  /** Tags to organize your knowledge base. */
  tags?: (string)[];
  /** Knowledge base id */
  uuid?: string;
}, options: { params: { uuid: string } }): Promise<ApiUpdateKnowledgeBaseOutput>
```

<sub>`PUT /v2/gen-ai/knowledge_bases/{uuid}` · `genai_update_knowledge_base`</sub>

## `digitalocean.genaiCreateDataSourceFileUploadPresignedUrls`

Create Presigned URLs for Data Source File Upload

```ts
digitalocean.genaiCreateDataSourceFileUploadPresignedUrls(input: {
  /** A list of files to generate presigned URLs for. */
  files?: (ApiPresignedUrlFile)[];
}): Promise<ApiCreateDataSourceFileUploadPresignedUrlsOutput>
```

<sub>`POST /v2/gen-ai/knowledge_bases/data_sources/file_upload_presigned_urls` · `genai_create_data_source_file_upload_presigned_urls`</sub>

## `digitalocean.genaiListModelEvaluationMetrics`

List Model Evaluation Metrics

```ts
digitalocean.genaiListModelEvaluationMetrics(): Promise<ApiListModelEvaluationMetricsOutput>
```

<sub>`GET /v2/gen-ai/model_evaluation_metrics` · `genai_list_model_evaluation_metrics`</sub>

## `digitalocean.genaiListModelEvaluationPresets`

List Model Evaluation Presets

```ts
digitalocean.genaiListModelEvaluationPresets(): Promise<ApiListModelEvaluationPresetsOutput>
```

<sub>`GET /v2/gen-ai/model_evaluation_presets` · `genai_list_model_evaluation_presets`</sub>

## `digitalocean.genaiDeleteModelEvaluationPreset`

Delete Model Evaluation Preset

```ts
digitalocean.genaiDeleteModelEvaluationPreset(input: {
  /** UUID of the evaluation preset to delete. */
  eval_preset_uuid: string;
}): Promise<ApiDeleteModelEvaluationPresetOutput>
```

<sub>`DELETE /v2/gen-ai/model_evaluation_presets/{eval_preset_uuid}` · `genai_delete_model_evaluation_preset`</sub>

## `digitalocean.genaiGetModelEvaluationPreset`

Retrieve Model Evaluation Preset

```ts
digitalocean.genaiGetModelEvaluationPreset(input: {
  /** UUID of the evaluation preset. */
  eval_preset_uuid: string;
}): Promise<ApiGetModelEvaluationPresetOutput>
```

<sub>`GET /v2/gen-ai/model_evaluation_presets/{eval_preset_uuid}` · `genai_get_model_evaluation_preset`</sub>

## `digitalocean.genaiListModelEvaluationRuns`

List Model Evaluation Runs

```ts
digitalocean.genaiListModelEvaluationRuns(input: {
  /** UUID of the evaluation preset to filter by. */
  eval_preset_uuid?: string;
  /** Filter by evaluation run status. */
  status?: "MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED" | "MODEL_EVALUATION_RUN_QUEUED" | "MODEL_EVALUATION_RUN_RUNNING_DATASET" | "MODEL_EVALUATION_RUN_EVALUATING_RESULTS" | "MODEL_EVALUATION_RUN_CANCELLING" | "MODEL_EVALUATION_RUN_CANCELLED" | "MODEL_EVALUATION_RUN_SUCCESSFUL" | "MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL" | "MODEL_EVALUATION_RUN_FAILED";
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
  /** Filter by one or more statuses. Empty means no status filter. */
  statuses?: ("MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED" | "MODEL_EVALUATION_RUN_QUEUED" | "MODEL_EVALUATION_RUN_RUNNING_DATASET" | "MODEL_EVALUATION_RUN_EVALUATING_RESULTS" | "MODEL_EVALUATION_RUN_CANCELLING" | "MODEL_EVALUATION_RUN_CANCELLED" | "MODEL_EVALUATION_RUN_SUCCESSFUL" | "MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL" | "MODEL_EVALUATION_RUN_FAILED")[];
  /** Filter by one or more candidate model source types (serverless, dedicated, router). Empty means no candidate-type filter. */
  candidate_types?: ("CANDIDATE_MODEL_SOURCE_SERVERLESS" | "CANDIDATE_MODEL_SOURCE_DEDICATED" | "CANDIDATE_MODEL_SOURCE_ROUTER")[];
  /** Free-text search across the eval run name, candidate model name and dataset name (case-insensitive substring match). Empty means no search. */
  search?: string;
  /** Field to sort by. Defaults to creation date when unspecified. */
  sort_by?: "MODEL_EVALUATION_RUN_SORT_FIELD_UNSPECIFIED" | "MODEL_EVALUATION_RUN_SORT_FIELD_CREATED_AT" | "MODEL_EVALUATION_RUN_SORT_FIELD_STATUS";
  /** Sort direction. Defaults to descending when unspecified. */
  sort_direction?: "SORT_DIRECTION_UNSPECIFIED" | "SORT_DIRECTION_ASC" | "SORT_DIRECTION_DESC";
}): Promise<ApiListModelEvaluationRunsOutput>
```

<sub>`GET /v2/gen-ai/model_evaluation_runs` · `genai_list_model_evaluation_runs`</sub>

## `digitalocean.genaiCreateModelEvaluationRun`

Create Model Evaluation Run

```ts
digitalocean.genaiCreateModelEvaluationRun(input: {
  candidate_inference_config?: ApiCandidateInferenceConfig;
  /** Model slug used to call the candidate model API. For dedicated inference, this is the model slug from the deployment. For serverless, this should match the model's internal name. */
  candidate_model_name?: string;
  candidate_model_source?: ApiCandidateModelSource;
  /** UUID of the candidate model to evaluate. */
  candidate_model_uuid?: string;
  /** UUID of the dataset to use for evaluation. */
  dataset_uuid?: string;
  eval_preset_uuid?: string;
  /** UUID of the judge model used to score responses. */
  judge_model_uuid?: string;
  /** UUIDs of metrics to evaluate (selected from ListModelEvaluationMetrics). */
  metric_uuids?: (string)[];
  name?: string;
  preset_name?: string;
  /** Which sections of this run's resolved configuration to persist as a reusable preset. Each selected section saves only its own fields; the remaining sections stay empty on the preset and must be supplied inline on future runs that reference it. Empty means do not save a preset (unless the deprecated `save_as_preset` boolean is true, in which case all sections are saved). Ignored when `eval_preset_uuid` is set. Use `preset_name` to label the saved preset. */
  preset_save_sections?: (ApiPresetSaveSection)[];
  /** Deprecated: use `preset_save_sections`. When `true` and `preset_save_sections` is empty, all five sections of the resolved configuration are saved as a reusable preset (legacy behavior). Ignored when `eval_preset_uuid` is set. */
  save_as_preset?: boolean;
  /** Source of the run creation (api, sdk, cli). */
  source?: string;
  star_metric?: ApiStarMetric;
}): Promise<ApiCreateModelEvaluationRunOutput>
```

<sub>`POST /v2/gen-ai/model_evaluation_runs` · `genai_create_model_evaluation_run`</sub>

## `digitalocean.genaiDeleteModelEvaluationRun`

Delete Model Evaluation Run

```ts
digitalocean.genaiDeleteModelEvaluationRun(input: {
  /** UUID of the model evaluation run to delete. The run must be in a terminal status (`successful`, `partially_successful`, `failed`, or `cancelled`). For runs still in progress, either wait for the run to finish or cancel it, then retry the delete. */
  eval_run_uuid: string;
}): Promise<ApiDeleteModelEvaluationRunOutputPublic>
```

<sub>`DELETE /v2/gen-ai/model_evaluation_runs/{eval_run_uuid}` · `genai_delete_model_evaluation_run`</sub>

## `digitalocean.genaiGetModelEvaluationRun`

Retrieve Model Evaluation Run

```ts
digitalocean.genaiGetModelEvaluationRun(input: {
  /** UUID of the evaluation run. */
  eval_run_uuid: string;
  /** Page number for per-prompt results (defaults to 1). */
  page?: number;
  /** Number of per-prompt results per page (defaults to 50). */
  per_page?: number;
}): Promise<ApiGetModelEvaluationRunOutput>
```

<sub>`GET /v2/gen-ai/model_evaluation_runs/{eval_run_uuid}` · `genai_get_model_evaluation_run`</sub>

## `digitalocean.genaiUpdateModelEvaluationRun`

Update Model Evaluation Run

```ts
digitalocean.genaiUpdateModelEvaluationRun(input: {
  /** UUID of the model evaluation run to update. Returned by `CreateModelEvaluationRun` and listed via `ListModelEvaluationRuns`. */
  eval_run_uuid?: string;
  /** Optional new display name for the evaluation run (max 255 characters). */
  name?: string;
}, options: { params: { eval_run_uuid: string } }): Promise<ApiUpdateModelEvaluationRunOutput>
```

<sub>`PATCH /v2/gen-ai/model_evaluation_runs/{eval_run_uuid}` · `genai_update_model_evaluation_run`</sub>

## `digitalocean.genaiCancelModelEvaluationRun`

Cancel Model Evaluation Run

```ts
digitalocean.genaiCancelModelEvaluationRun(input: {
  /** UUID of the model evaluation run to cancel. Returned by `CreateModelEvaluationRun` and listed via `ListModelEvaluationRuns`. The run must be in a non-terminal status (queued, running_dataset, or evaluating_results); already-terminal runs return an error. */
  eval_run_uuid?: string;
}, options: { params: { eval_run_uuid: string } }): Promise<ApiCancelModelEvaluationRunOutput>
```

<sub>`PUT /v2/gen-ai/model_evaluation_runs/{eval_run_uuid}/cancel` · `genai_cancel_model_evaluation_run`</sub>

## `digitalocean.genaiGetModelEvaluationRunResultsDownloadUrl`

Get Download URL for Model Evaluation Run Results

```ts
digitalocean.genaiGetModelEvaluationRunResultsDownloadUrl(input: {
  /** UUID of the evaluation run. */
  eval_run_uuid: string;
}): Promise<ApiGetModelEvaluationRunResultsDownloadUrlOutput>
```

<sub>`GET /v2/gen-ai/model_evaluation_runs/{eval_run_uuid}/results/download_url` · `genai_get_model_evaluation_run_results_download_url`</sub>

## `digitalocean.genaiCreateModelEvalDatasetUploadPresignedUrls`

Create Presigned URLs for Model Evaluation Dataset File Upload

```ts
digitalocean.genaiCreateModelEvalDatasetUploadPresignedUrls(input: {
  /** A list of files to generate presigned URLs for. */
  files?: (ApiPresignedUrlFile)[];
}): Promise<ApiCreateDataSourceFileUploadPresignedUrlsOutput>
```

<sub>`POST /v2/gen-ai/model_evaluation/datasets/file_upload_presigned_urls` · `genai_create_model_eval_dataset_upload_presigned_urls`</sub>

## `digitalocean.genaiListModels`

List Available Models

```ts
digitalocean.genaiListModels(input: {
  /** Include only models defined for the listed usecases.   - MODEL_USECASE_UNKNOWN: The use case of the model is unknown  - MODEL_USECASE_AGENT: The model maybe used in an agent  - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning  - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)  - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails  - MODEL_USECASE_REASONING: The model usecase for reasoning  - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference */
  usecases?: ("MODEL_USECASE_UNKNOWN" | "MODEL_USECASE_AGENT" | "MODEL_USECASE_FINETUNED" | "MODEL_USECASE_KNOWLEDGEBASE" | "MODEL_USECASE_GUARDRAIL" | "MODEL_USECASE_REASONING" | "MODEL_USECASE_SERVERLESS")[];
  /** Only include models that are publicly available. */
  public_only?: boolean;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListModelsOutputPublic>
```

<sub>`GET /v2/gen-ai/models` · `genai_list_models`</sub>

## `digitalocean.genaiListModelApiKeys`

List Model API Keys

```ts
digitalocean.genaiListModelApiKeys(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListModelApiKeysOutput>
```

<sub>`GET /v2/gen-ai/models/api_keys` · `genai_list_model_api_keys`</sub>

## `digitalocean.genaiCreateModelApiKey`

Create a Model API Key

```ts
digitalocean.genaiCreateModelApiKey(input: {
  /** A human friendly name to identify the key */
  name?: string;
}): Promise<{ id: string; message: string; request_id?: string }>
```

<sub>`POST /v2/gen-ai/models/api_keys` · `genai_create_model_api_key`</sub>

## `digitalocean.genaiDeleteModelApiKey`

Delete API Key for a Model

```ts
digitalocean.genaiDeleteModelApiKey(input: {
  /** API key for an agent. */
  api_key_uuid: string;
}): Promise<ApiDeleteModelApiKeyOutput>
```

<sub>`DELETE /v2/gen-ai/models/api_keys/{api_key_uuid}` · `genai_delete_model_api_key`</sub>

## `digitalocean.genaiUpdateModelApiKey`

Update API Key for a Model

```ts
digitalocean.genaiUpdateModelApiKey(input: {
  /** API key ID */
  api_key_uuid?: string;
  /** Name */
  name?: string;
}, options: { params: { api_key_uuid: string } }): Promise<ApiUpdateModelApiKeyOutput>
```

<sub>`PUT /v2/gen-ai/models/api_keys/{api_key_uuid}` · `genai_update_model_api_key`</sub>

## `digitalocean.genaiRegenerateModelApiKey`

Regenerate API Key for a Model

```ts
digitalocean.genaiRegenerateModelApiKey(input: {
  /** API key ID */
  api_key_uuid: string;
}): Promise<ApiRegenerateModelApiKeyOutput>
```

<sub>`PUT /v2/gen-ai/models/api_keys/{api_key_uuid}/regenerate` · `genai_regenerate_model_api_key`</sub>

## `digitalocean.genaiListModelCatalog`

List Model Catalog

```ts
digitalocean.genaiListModelCatalog(input: {
  page?: number;
  limit?: number;
}): Promise<ApiListModelCatalogOutput>
```

<sub>`GET /v2/gen-ai/models/catalog` · `genai_list_model_catalog`</sub>

## `digitalocean.genaiGetModelCatalogCard`

Get Model Catalog Card

```ts
digitalocean.genaiGetModelCatalogCard(input: {
  id: string;
  /** Model identifier used for API calls (e.g., "llama3.1-70b-instruct"). Alternative to UUID lookup. */
  model_id?: string;
}): Promise<ApiGetModelCatalogCardOutput>
```

<sub>`GET /v2/gen-ai/models/catalog/{id}` · `genai_get_model_catalog_card`</sub>

## `digitalocean.genaiListModelRouters`

List Model Routers

```ts
digitalocean.genaiListModelRouters(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListModelRoutersOutput>
```

<sub>`GET /v2/gen-ai/models/routers` · `genai_list_model_routers`</sub>

## `digitalocean.genaiCreateModelRouter`

Create a Model Router

```ts
digitalocean.genaiCreateModelRouter(input: {
  /** Model router description */
  description?: string;
  /** At least one fallback model is required; order defines failover priority */
  fallback_models?: (string)[];
  /** Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens */
  name?: string;
  /** Router policies */
  policies?: (ApiModelRouterTaskPolicy)[];
  /** DEPRECATED: this field does not affect deployment and model routers are always deployed to all regions. Must be omitted or set to ["all"]. */
  regions?: (string)[];
}): Promise<ApiCreateModelRouterOutput>
```

<sub>`POST /v2/gen-ai/models/routers` · `genai_create_model_router`</sub>

## `digitalocean.genaiDeleteModelRouter`

Delete a Model Router

```ts
digitalocean.genaiDeleteModelRouter(input: {
  /** Model router id */
  uuid: string;
}): Promise<ApiDeleteModelRouterOutput>
```

<sub>`DELETE /v2/gen-ai/models/routers/{uuid}` · `genai_delete_model_router`</sub>

## `digitalocean.genaiGetModelRouter`

Retrieve an Existing Model Router

```ts
digitalocean.genaiGetModelRouter(input: {
  /** Model router id */
  uuid: string;
}): Promise<ApiGetModelRouterOutput>
```

<sub>`GET /v2/gen-ai/models/routers/{uuid}` · `genai_get_model_router`</sub>

## `digitalocean.genaiUpdateModelRouter`

Update a Model Router

```ts
digitalocean.genaiUpdateModelRouter(input: {
  /** Model router description */
  description?: string;
  fallback_models?: ({ [key: string]: unknown })[];
  /** Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens */
  name?: string;
  /** Router policies */
  policies?: (ApiModelRouterTaskPolicy)[];
  /** DEPRECATED: this field does not affect deployment and model routers are always deployed to all regions. Must be omitted or set to ["all"]. */
  regions?: (string)[];
  /** Model router id */
  uuid?: string;
}, options: { params: { uuid: string } }): Promise<ApiUpdateModelRouterOutput>
```

<sub>`PUT /v2/gen-ai/models/routers/{uuid}` · `genai_update_model_router`</sub>

## `digitalocean.genaiListModelRouterPresets`

List Model Router Presets

```ts
digitalocean.genaiListModelRouterPresets(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListModelRouterPresetsOutput>
```

<sub>`GET /v2/gen-ai/models/routers/presets` · `genai_list_model_router_presets`</sub>

## `digitalocean.genaiListModelRouterTaskPresets`

List Model Router Task Presets

```ts
digitalocean.genaiListModelRouterTaskPresets(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListModelRouterTaskPresetsOutput>
```

<sub>`GET /v2/gen-ai/models/routers/tasks/presets` · `genai_list_model_router_task_presets`</sub>

## `digitalocean.genaiCreateOauth2DropboxTokens`

Get Oauth2 Dropbox Tokens

```ts
digitalocean.genaiCreateOauth2DropboxTokens(input: {
  /** The oauth2 code from google */
  code?: string;
  /** Redirect url */
  redirect_url?: string;
}): Promise<ApiDropboxOauth2GetTokensOutput>
```

<sub>`POST /v2/gen-ai/oauth2/dropbox/tokens` · `genai_create_oauth2_dropbox_tokens`</sub>

## `digitalocean.genaiGetOauth2Url`

Get Oauth2 URL

```ts
digitalocean.genaiGetOauth2Url(input: {
  /** Type "google" / "dropbox". */
  type?: string;
  /** The redirect url. */
  redirect_url?: string;
}): Promise<ApiGenerateOauth2UrlOutput>
```

<sub>`GET /v2/gen-ai/oauth2/url` · `genai_get_oauth2_url`</sub>

## `digitalocean.genaiListOpenaiApiKeys`

List OpenAI API Keys

```ts
digitalocean.genaiListOpenaiApiKeys(input: {
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListOpenAiapiKeysOutput>
```

<sub>`GET /v2/gen-ai/openai/keys` · `genai_list_openai_api_keys`</sub>

## `digitalocean.genaiCreateOpenaiApiKey`

Create OpenAI API Key

```ts
digitalocean.genaiCreateOpenaiApiKey(input: {
  /** OpenAI API key */
  api_key?: string;
  /** Name of the key */
  name?: string;
}): Promise<ApiCreateOpenAiapiKeyOutput>
```

<sub>`POST /v2/gen-ai/openai/keys` · `genai_create_openai_api_key`</sub>

## `digitalocean.genaiDeleteOpenaiApiKey`

Delete OpenAI API Key

```ts
digitalocean.genaiDeleteOpenaiApiKey(input: {
  /** API key ID */
  api_key_uuid: string;
}): Promise<ApiDeleteOpenAiapiKeyOutput>
```

<sub>`DELETE /v2/gen-ai/openai/keys/{api_key_uuid}` · `genai_delete_openai_api_key`</sub>

## `digitalocean.genaiGetOpenaiApiKey`

Get OpenAI API Key

```ts
digitalocean.genaiGetOpenaiApiKey(input: {
  /** API key ID */
  api_key_uuid: string;
}): Promise<ApiGetOpenAiapiKeyOutput>
```

<sub>`GET /v2/gen-ai/openai/keys/{api_key_uuid}` · `genai_get_openai_api_key`</sub>

## `digitalocean.genaiUpdateOpenaiApiKey`

Update OpenAI API Key

```ts
digitalocean.genaiUpdateOpenaiApiKey(input: {
  /** OpenAI API key */
  api_key?: string;
  /** API key ID */
  api_key_uuid?: string;
  /** Name of the key */
  name?: string;
}, options: { params: { api_key_uuid: string } }): Promise<ApiUpdateOpenAiapiKeyOutput>
```

<sub>`PUT /v2/gen-ai/openai/keys/{api_key_uuid}` · `genai_update_openai_api_key`</sub>

## `digitalocean.genaiListAgentsByOpenaiKey`

List agents by OpenAI key

```ts
digitalocean.genaiListAgentsByOpenaiKey(input: {
  /** Unique ID of OpenAI key */
  uuid: string;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAgentsByOpenAiKeyOutput>
```

<sub>`GET /v2/gen-ai/openai/keys/{uuid}/agents` · `genai_list_agents_by_openai_key`</sub>

## `digitalocean.genaiListDatacenterRegions`

List Datacenter Regions

```ts
digitalocean.genaiListDatacenterRegions(input: {
  /** Include datacenters that serve inference. */
  serves_inference?: boolean;
  /** Include datacenters that are capable of running batch jobs. */
  serves_batch?: boolean;
}): Promise<ApiListRegionsOutput>
```

<sub>`GET /v2/gen-ai/regions` · `genai_list_datacenter_regions`</sub>

## `digitalocean.genaiCreateScheduledIndexing`

Create scheduled indexing for knowledge base

```ts
digitalocean.genaiCreateScheduledIndexing(input: {
  /** Days for execution (day is represented same as in a cron expression, e.g. Monday begins with 1 ) */
  days?: (number)[];
  /** Knowledge base uuid for which the schedule is created */
  knowledge_base_uuid?: string;
  /** Time of execution (HH:MM) UTC */
  time?: string;
}): Promise<ApiCreateScheduledIndexingOutput>
```

<sub>`POST /v2/gen-ai/scheduled-indexing` · `genai_create_scheduled_indexing`</sub>

## `digitalocean.genaiDeleteScheduledIndexing`

Delete Scheduled Indexing

```ts
digitalocean.genaiDeleteScheduledIndexing(input: {
  /** UUID of the scheduled indexing */
  uuid: string;
}): Promise<ApiDeleteScheduledIndexingOutput>
```

<sub>`DELETE /v2/gen-ai/scheduled-indexing/{uuid}` · `genai_delete_scheduled_indexing`</sub>

## `digitalocean.genaiGetScheduledIndexing`

Get Scheduled Indexing for Knowledge Base

```ts
digitalocean.genaiGetScheduledIndexing(input: {
  /** UUID of the scheduled indexing entry */
  knowledge_base_uuid: string;
}): Promise<ApiGetScheduledIndexingOutput>
```

<sub>`GET /v2/gen-ai/scheduled-indexing/knowledge-base/{knowledge_base_uuid}` · `genai_get_scheduled_indexing`</sub>

## `digitalocean.genaiListWorkspaces`

List Workspaces

```ts
digitalocean.genaiListWorkspaces(): Promise<ApiListWorkspacesOutput>
```

<sub>`GET /v2/gen-ai/workspaces` · `genai_list_workspaces`</sub>

## `digitalocean.genaiCreateWorkspace`

Create a Workspace

```ts
digitalocean.genaiCreateWorkspace(input: {
  /** Ids of the agents(s) to attach to the workspace */
  agent_uuids?: (string)[];
  /** Description of the workspace */
  description?: string;
  /** Name of the workspace */
  name?: string;
}): Promise<ApiCreateWorkspaceOutput>
```

<sub>`POST /v2/gen-ai/workspaces` · `genai_create_workspace`</sub>

## `digitalocean.genaiDeleteWorkspace`

Delete a Workspace

```ts
digitalocean.genaiDeleteWorkspace(input: {
  /** Workspace UUID. */
  workspace_uuid: string;
}): Promise<ApiDeleteWorkspaceOutput>
```

<sub>`DELETE /v2/gen-ai/workspaces/{workspace_uuid}` · `genai_delete_workspace`</sub>

## `digitalocean.genaiGetWorkspace`

Retrieve an Existing Workspace

```ts
digitalocean.genaiGetWorkspace(input: {
  /** Workspace UUID. */
  workspace_uuid: string;
}): Promise<ApiGetWorkspaceOutput>
```

<sub>`GET /v2/gen-ai/workspaces/{workspace_uuid}` · `genai_get_workspace`</sub>

## `digitalocean.genaiUpdateWorkspace`

Update a Workspace

```ts
digitalocean.genaiUpdateWorkspace(input: {
  /** The new description of the workspace */
  description?: string;
  /** The new name of the workspace */
  name?: string;
  /** Workspace UUID. */
  workspace_uuid?: string;
}, options: { params: { workspace_uuid: string } }): Promise<ApiUpdateWorkspaceOutput>
```

<sub>`PUT /v2/gen-ai/workspaces/{workspace_uuid}` · `genai_update_workspace`</sub>

## `digitalocean.genaiListAgentsByWorkspace`

List agents by Workspace

```ts
digitalocean.genaiListAgentsByWorkspace(input: {
  /** Workspace UUID. */
  workspace_uuid: string;
  /** Only list agents that are deployed. */
  only_deployed?: boolean;
  /** Page number. */
  page?: number;
  /** Items per page. */
  per_page?: number;
}): Promise<ApiListAgentsByWorkspaceOutput>
```

<sub>`GET /v2/gen-ai/workspaces/{workspace_uuid}/agents` · `genai_list_agents_by_workspace`</sub>

## `digitalocean.genaiUpdateAgentsWorkspace`

Move Agents to a Workspace

```ts
digitalocean.genaiUpdateAgentsWorkspace(input: {
  /** Agent uuids */
  agent_uuids?: (string)[];
  /** Workspace uuid to move agents to */
  workspace_uuid?: string;
}, options: { params: { workspace_uuid: string } }): Promise<ApiMoveAgentsToWorkspaceOutput>
```

<sub>`PUT /v2/gen-ai/workspaces/{workspace_uuid}/agents` · `genai_update_agents_workspace`</sub>

## `digitalocean.genaiListEvaluationTestCasesByWorkspace`

List Evaluation Test Cases by Workspace

```ts
digitalocean.genaiListEvaluationTestCasesByWorkspace(input: {
  /** Workspace UUID. */
  workspace_uuid: string;
}): Promise<ApiListEvaluationTestCasesByWorkspaceOutput>
```

<sub>`GET /v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases` · `genai_list_evaluation_test_cases_by_workspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Agents Platform

146 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.agentTestingBulkMoveRoute`

Bulk Move Tests To Folder

```ts
elevenlabs.agentTestingBulkMoveRoute(input: {
  /** The IDs of tests or folders to move. */
  entity_ids: (string)[];
  /** The folder to move the entities to. If not set, the entities will be moved to the root folder. */
  move_to?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/convai/agent-testing/bulk-move` · `agent_testing_bulk_move_route`</sub>

## `elevenlabs.createAgentTestFolderRoute`

Create Agent Test Folder

```ts
elevenlabs.createAgentTestFolderRoute(input: {
  /** The name of the folder to create */
  name: string;
  /** The ID of the parent folder. If not provided, the folder will be created at the root level. */
  parent_folder_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateAgentTestFolderResponseModel>
```

<sub>`POST /v1/convai/agent-testing/folders` · `create_agent_test_folder_route`</sub>

## `elevenlabs.deleteAgentTestFolderRoute`

Delete Agent Test Folder

```ts
elevenlabs.deleteAgentTestFolderRoute(input: {
  /** The folder ID. */
  folder_id: string;
  /** Force delete. Required for deleting non-empty folders. */
  force?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/convai/agent-testing/folders/{folder_id}` · `delete_agent_test_folder_route`</sub>

## `elevenlabs.getAgentTestFolderRoute`

Get Agent Test Folder By Id

```ts
elevenlabs.getAgentTestFolderRoute(input: {
  /** The folder ID. */
  folder_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentTestFolderResponseModel>
```

<sub>`GET /v1/convai/agent-testing/folders/{folder_id}` · `get_agent_test_folder_route`</sub>

## `elevenlabs.updateAgentTestFolderRoute`

Update Agent Test Folder

```ts
elevenlabs.updateAgentTestFolderRoute(input: {
  /** The new name for the folder */
  name: string;
  /** The folder ID. */
  folder_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentTestFolderResponseModel>
```

<sub>`PATCH /v1/convai/agent-testing/folders/{folder_id}` · `update_agent_test_folder_route`</sub>

## `elevenlabs.getAgentKnowledgeBaseSize`

Returns The Size Of The Agent'S Knowledge Base

```ts
elevenlabs.getAgentKnowledgeBaseSize(input: {
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentKnowledgebaseSizeResponseModel>
```

<sub>`GET /v1/convai/agent/{agent_id}/knowledge-base/size` · `get_agent_knowledge_base_size`</sub>

## `elevenlabs.getAgentLlmExpectedCostCalculation`

Calculate Expected Llm Usage For An Agent

```ts
elevenlabs.getAgentLlmExpectedCostCalculation(input: {
  /** Length of the prompt in characters. */
  prompt_length?: number | null;
  /** Pages of content in pdf documents OR urls in agent's Knowledge Base. */
  number_of_pages?: number | null;
  /** Whether RAG is enabled. */
  rag_enabled?: boolean | null;
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<LlmUsageCalculatorResponseModel>
```

<sub>`POST /v1/convai/agent/{agent_id}/llm-usage/calculate` · `get_agent_llm_expected_cost_calculation`</sub>

## `elevenlabs.getAgentsRoute`

List Agents

```ts
elevenlabs.getAgentsRoute(input: {
  /** How many Agents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Search by agents name. */
  search?: string | null;
  /** Filter agents by archived status */
  archived?: boolean | null;
  /** If set to true, the endpoint will omit any agents that were shared with you by someone else and include only the ones you own. Deprecated: use created_by_user_id instead. */
  show_only_owned_agents?: boolean;
  /** Filter agents by creator user ID. When set, only agents created by this user are returned. Takes precedence over show_only_owned_agents. Use '@me' to refer to the authenticated user. */
  created_by_user_id?: string | null;
  /** The direction to sort the results */
  sort_direction?: SortDirection;
  /** The field to sort the results by */
  sort_by?: AgentSortBy | null;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentsPageResponseModel>
```

<sub>`GET /v1/convai/agents` · `get_agents_route`</sub>

## `elevenlabs.deleteAgentRoute`

Delete Agent

```ts
elevenlabs.deleteAgentRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/convai/agents/{agent_id}` · `delete_agent_route`</sub>

## `elevenlabs.getAgentRoute`

Get Agent

```ts
elevenlabs.getAgentRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** The ID of the agent version to use */
  version_id?: string | null;
  /** The ID of the branch to use */
  branch_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}` · `get_agent_route`</sub>

## `elevenlabs.patchAgentSettingsRoute`

Patches An Agent Settings

```ts
elevenlabs.patchAgentSettingsRoute(input: {
  /** Conversation configuration for an agent */
  conversation_config?: { [key: string]: unknown } | null;
  /** Platform settings for the agent are all settings that aren't related to the conversation orchestration and content. */
  platform_settings?: { [key: string]: unknown } | null;
  /** Workflow for the agent. This is used to define the flow of the conversation and how the agent interacts with tools. */
  workflow?: AgentWorkflowRequestModel;
  /** A name to make the agent easier to find */
  name?: string | null;
  /** Tags to help classify and filter the agent */
  tags?: (string)[] | null;
  /** Description for this version when publishing changes (only applicable for versioned agents) */
  version_description?: string | null;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Deprecated: all agents are versioned. This parameter is ignored. */
  enable_versioning_if_not_enabled?: boolean;
  /** The ID of the branch to use */
  branch_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentResponseModel>
```

<sub>`PATCH /v1/convai/agents/{agent_id}` · `patch_agent_settings_route`</sub>

## `elevenlabs.postAgentAvatarRoute`

Post Agent Avatar

```ts
elevenlabs.postAgentAvatarRoute(input: {
  /** An image file to be used as the agent's avatar. */
  avatar_file: string;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PostAgentAvatarResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/avatar` · `post_agent_avatar_route`</sub>

## `elevenlabs.getBranchesRoute`

List Agent Branches

```ts
elevenlabs.getBranchesRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Whether archived branches should be included */
  include_archived?: boolean;
  /** How many results at most should be returned */
  limit?: number;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListResponseAgentBranchSummary>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches` · `get_branches_route`</sub>

## `elevenlabs.createBranchRoute`

Create A New Branch

```ts
elevenlabs.createBranchRoute(input: {
  /** ID of the version to branch from */
  parent_version_id: string;
  /** Name of the branch. It is unique within the agent. */
  name: string;
  /** Description for the branch */
  description: string;
  /** Changes to apply to conversation config */
  conversation_config?: { [key: string]: unknown } | null;
  /** Changes to apply to platform settings */
  platform_settings?: { [key: string]: unknown } | null;
  /** Updated workflow definition */
  workflow?: AgentWorkflowRequestModel | null;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateAgentBranchResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/branches` · `create_branch_route`</sub>

## `elevenlabs.getBranchRoute`

Get Agent Branch

```ts
elevenlabs.getBranchRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the branch. */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AgentBranchResponse>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches/{branch_id}` · `get_branch_route`</sub>

## `elevenlabs.updateBranchRoute`

Update Agent Branch

```ts
elevenlabs.updateBranchRoute(input: {
  /** New name for the branch. Must be unique within the agent. */
  name?: string | null;
  /** Whether the branch should be archived */
  is_archived?: boolean | null;
  /** The protection level for the branch */
  protection_status?: BranchProtectionStatus | null;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the branch. */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AgentBranchResponse>
```

<sub>`PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}` · `update_branch_route`</sub>

## `elevenlabs.listProceduresRoute`

List Procedures

```ts
elevenlabs.listProceduresRoute(input: {
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListProceduresResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures` · `list_procedures_route`</sub>

## `elevenlabs.createProcedureRoute`

Create Procedure

```ts
elevenlabs.createProcedureRoute(input: {
  body?: CreateProcedureRequestModel | null;
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateProcedureResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures` · `create_procedure_route`</sub>

## `elevenlabs.removeProcedureRoute`

Remove Procedure

```ts
elevenlabs.removeProcedureRoute(input: {
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
  /** The procedure ID */
  procedure_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures/{procedure_id}` · `remove_procedure_route`</sub>

## `elevenlabs.getProcedureRoute`

Get Procedure

```ts
elevenlabs.getProcedureRoute(input: {
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
  /** The procedure ID */
  procedure_id: string;
  /** The version ID to retrieve. If omitted, returns the version at branch HEAD. */
  version_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProcedureAtVersionResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures/{procedure_id}` · `get_procedure_route`</sub>

## `elevenlabs.deleteProcedureDraftRoute`

Delete Procedure Draft

```ts
elevenlabs.deleteProcedureDraftRoute(input: {
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
  /** The procedure ID */
  procedure_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures/{procedure_id}/draft` · `delete_procedure_draft_route`</sub>

## `elevenlabs.getProcedureDraftRoute`

Get Procedure Draft

```ts
elevenlabs.getProcedureDraftRoute(input: {
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
  /** The procedure ID */
  procedure_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProcedureDraftResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures/{procedure_id}/draft` · `get_procedure_draft_route`</sub>

## `elevenlabs.updateProcedureDraftRoute`

Update Procedure Draft

```ts
elevenlabs.updateProcedureDraftRoute(input: {
  /** Procedure name */
  name: string;
  /** Procedure content */
  content: string;
  /** Procedure type */
  type: ProcedureType;
  /** When the agent should use this procedure. Empty string means this is a sub-procedure that should only start when another procedure references it. If omitted or null, the trigger is derived from the content instead. Also accepts `description` as an alias. */
  trigger?: string | null;
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
  /** The procedure ID */
  procedure_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProcedureDraftResponseModel>
```

<sub>`PATCH /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures/{procedure_id}/draft` · `update_procedure_draft_route`</sub>

## `elevenlabs.compileProceduresRoute`

Compile Procedures

```ts
elevenlabs.compileProceduresRoute(input: {
  /** Agent ID to get the procedure draft from */
  agent_id: string;
  /** Branch ID to get the procedure draft from */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CompileProceduresResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/branches/{branch_id}/procedures/compile` · `compile_procedures_route`</sub>

## `elevenlabs.rebaseBranchOntoMain`

Rebase A Branch Onto Main

```ts
elevenlabs.rebaseBranchOntoMain(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the source branch to merge from. */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase` · `rebase_branch_onto_main`</sub>

## `elevenlabs.rebasePreviewRoute`

Preview Rebased Configuration

```ts
elevenlabs.rebasePreviewRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the source branch to merge from. */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MergePreviewResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches/{branch_id}/rebase-preview` · `rebase_preview_route`</sub>

## `elevenlabs.mergeBranchIntoTarget`

Merge A Branch Into A Target Branch

```ts
elevenlabs.mergeBranchIntoTarget(input: {
  /** Whether to archive the source branch after merging */
  archive_source_branch?: boolean;
  /** Force source branch changes onto the target, overriding timestamp-based conflict resolution */
  force?: boolean;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the source branch to merge from. */
  source_branch_id: string;
  /** The ID of the target branch to merge into. */
  target_branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge` · `merge_branch_into_target`</sub>

## `elevenlabs.mergePreviewRoute`

Preview Merged Configuration

```ts
elevenlabs.mergePreviewRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the source branch to merge from. */
  source_branch_id: string;
  /** The ID of the target branch to merge into. */
  target_branch_id: string;
  /** When true, source branch changes always win conflicts regardless of timestamps */
  force?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MergePreviewResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/branches/{source_branch_id}/merge-preview` · `merge_preview_route`</sub>

## `elevenlabs.createAgentDeploymentRoute`

Create Or Update Deployments

```ts
elevenlabs.createAgentDeploymentRoute(input: {
  /** Request to create a new deployment */
  deployment_request: AgentDeploymentRequest;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AgentDeploymentResponse>
```

<sub>`POST /v1/convai/agents/{agent_id}/deployments` · `create_agent_deployment_route`</sub>

## `elevenlabs.deleteAgentDraftRoute`

Delete Agent Draft

```ts
elevenlabs.deleteAgentDraftRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** The ID of the agent branch to use */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/agents/{agent_id}/drafts` · `delete_agent_draft_route`</sub>

## `elevenlabs.createAgentDraftRoute`

Create Agent Draft

```ts
elevenlabs.createAgentDraftRoute(input: {
  /** Conversation config for the draft */
  conversation_config: { [key: string]: unknown };
  /** Platform settings for the draft */
  platform_settings: { [key: string]: unknown };
  /** Workflow for the draft */
  workflow: AgentWorkflowRequestModel;
  /** Name for the draft */
  name: string;
  /** Tags to help classify and filter the agent */
  tags?: (string)[] | null;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** The ID of the agent branch to use */
  branch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/convai/agents/{agent_id}/drafts` · `create_agent_draft_route`</sub>

## `elevenlabs.duplicateAgentRoute`

Duplicate Agent

```ts
elevenlabs.duplicateAgentRoute(input: {
  /** A name to make the agent easier to find */
  name?: string | null;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateAgentResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/duplicate` · `duplicate_agent_route`</sub>

## `elevenlabs.queryAgentKnowledgeBaseRagRoute`

Query Agent Knowledge Base Rag

```ts
elevenlabs.queryAgentKnowledgeBaseRagRoute(input: {
  /** Query to run against the agent's knowledge base RAG index. */
  query: string;
  /** When true (the default), retrieval uses the agent's own RAG settings, reproducing exactly what the agent would retrieve. Set to false to retrieve with neutral default RAG settings instead (the agent's embedding model is always kept, since it determines which vector index exists). Useful for auditing the knowledge base independently of how a particular agent is tuned. */
  use_agent_defaults?: boolean;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** The ID of the branch to use */
  branch_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AgentKnowledgeBaseRagQueryResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/knowledge-base/rag-query` · `query_agent_knowledge_base_rag_route`</sub>

## `elevenlabs.getAgentLinkRoute`

Get Shareable Agent Link

```ts
elevenlabs.getAgentLinkRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentLinkResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/link` · `get_agent_link_route`</sub>

## `elevenlabs.runConversationSimulationRoute`

Simulates A Conversation

```ts
elevenlabs.runConversationSimulationRoute(input: {
  /** A specification detailing how the conversation should be simulated */
  simulation_specification: ConversationSimulationSpecification;
  /** A list of evaluation criteria to test */
  extra_evaluation_criteria?: (PromptEvaluationCriteria)[] | null;
  /** Maximum number of new turns to generate in the conversation simulation */
  new_turns_limit?: number;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AgentSimulatedChatTestResponseModel>
```

<sub>`POST /v1/convai/agents/{agent_id}/simulate-conversation` · `run_conversation_simulation_route`</sub>

## `elevenlabs.runConversationSimulationRouteStream`

Simulates A Conversation (Stream)

```ts
elevenlabs.runConversationSimulationRouteStream(input: {
  /** A specification detailing how the conversation should be simulated */
  simulation_specification: ConversationSimulationSpecification;
  /** A list of evaluation criteria to test */
  extra_evaluation_criteria?: (PromptEvaluationCriteria)[] | null;
  /** Maximum number of new turns to generate in the conversation simulation */
  new_turns_limit?: number;
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/convai/agents/{agent_id}/simulate-conversation/stream` · `run_conversation_simulation_route_stream`</sub>

## `elevenlabs.getVersionMetadataRoute`

Get Agent Version Metadata

```ts
elevenlabs.getVersionMetadataRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** Unique identifier for the version. */
  version_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AgentVersionMetadata>
```

<sub>`GET /v1/convai/agents/{agent_id}/versions/{version_id}` · `get_version_metadata_route`</sub>

## `elevenlabs.getAgentWidgetRoute`

Get Agent Widget Config

```ts
elevenlabs.getAgentWidgetRoute(input: {
  /** The id of an agent. This is returned on agent creation. */
  agent_id: string;
  /** An expiring token that enables a websocket conversation to start. These can be generated for an agent using the /v1/convai/conversation/get_signed_url endpoint */
  conversation_signature?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentEmbedResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/widget` · `get_agent_widget_route`</sub>

## `elevenlabs.createAgentRoute`

Create Agent

```ts
elevenlabs.createAgentRoute(input: {
  /** Conversation configuration for an agent */
  conversation_config: ConversationalConfigApiModelInput;
  /** Platform settings for the agent are all settings that aren't related to the conversation orchestration and content. */
  platform_settings?: AgentPlatformSettingsRequestModel | null;
  /** Workflow for the agent. This is used to define the flow of the conversation and how the agent interacts with tools. */
  workflow?: AgentWorkflowRequestModel;
  /** A name to make the agent easier to find */
  name?: string | null;
  /** Tags to help classify and filter the agent */
  tags?: (string)[] | null;
  /** Deprecated: all agents are versioned. This parameter is ignored. */
  enable_versioning?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateAgentResponseModel>
```

<sub>`POST /v1/convai/agents/create` · `create_agent_route`</sub>

## `elevenlabs.getAgentSummariesRoute`

Get Agent Summaries

```ts
elevenlabs.getAgentSummariesRoute(input: {
  /** List of agent IDs to fetch summaries for */
  agent_ids: (string)[];
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<{ [key: string]: AgentSummaryBatchSuccessfulResponseModel | BatchFailureResponseModel | undefined }>
```

<sub>`GET /v1/convai/agents/summaries` · `get_agent_summaries_route`</sub>

## `elevenlabs.getLiveCount`

Get Live Count

```ts
elevenlabs.getLiveCount(input: {
  /** The id of an agent to restrict the analytics to. */
  agent_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetLiveCountResponse>
```

<sub>`GET /v1/convai/analytics/live-count` · `get_live_count`</sub>

## `elevenlabs.deleteBatchCall`

Delete A Batch Call.

```ts
elevenlabs.deleteBatchCall(input: {
  batch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/convai/batch-calling/{batch_id}` · `delete_batch_call`</sub>

## `elevenlabs.getBatchCall`

Get A Batch Call By Id.

```ts
elevenlabs.getBatchCall(input: {
  batch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<BatchCallDetailedResponse>
```

<sub>`GET /v1/convai/batch-calling/{batch_id}` · `get_batch_call`</sub>

## `elevenlabs.cancelBatchCall`

Cancel A Batch Call.

```ts
elevenlabs.cancelBatchCall(input: {
  batch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<BatchCallResponse>
```

<sub>`POST /v1/convai/batch-calling/{batch_id}/cancel` · `cancel_batch_call`</sub>

## `elevenlabs.exportBatchCall`

Export Batch Call Results

```ts
elevenlabs.exportBatchCall(input: {
  batch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`GET /v1/convai/batch-calling/{batch_id}/export` · `export_batch_call`</sub>

## `elevenlabs.retryBatchCall`

Retry A Batch Call.

```ts
elevenlabs.retryBatchCall(input: {
  batch_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<BatchCallResponse>
```

<sub>`POST /v1/convai/batch-calling/{batch_id}/retry` · `retry_batch_call`</sub>

## `elevenlabs.createBatchCall`

Submit A Batch Call Request.

```ts
elevenlabs.createBatchCall(input: {
  call_name: string;
  agent_id: string;
  recipients: (OutboundCallRecipient)[];
  scheduled_time_unix?: number | null;
  agent_phone_number_id?: string | null;
  whatsapp_params?: BatchCallWhatsAppParams | null;
  timezone?: string | null;
  branch_id?: string | null;
  environment?: string | null;
  telephony_call_config?: TelephonyCallConfig;
  /** Maximum number of simultaneous calls for this batch. When set, dispatch is governed by this limit rather than workspace/agent capacity percentages. */
  target_concurrency_limit?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<BatchCallResponse>
```

<sub>`POST /v1/convai/batch-calling/submit` · `create_batch_call`</sub>

## `elevenlabs.getWorkspaceBatchCalls`

Get All Batch Calls For A Workspace.

```ts
elevenlabs.getWorkspaceBatchCalls(input: {
  limit?: number;
  last_doc?: string | null;
  /** Filter batch calls to a single agent. */
  agent_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WorkspaceBatchCallsResponse>
```

<sub>`GET /v1/convai/batch-calling/workspace` · `get_workspace_batch_calls`</sub>

## `elevenlabs.getSignedUrlDeprecated`

Get Signed Url

```ts
elevenlabs.getSignedUrlDeprecated(input: {
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id: string;
  /** Whether to include a conversation_id with the response. If included, the conversation_signature cannot be used again. */
  include_conversation_id?: boolean;
  /** The ID of the branch to use */
  branch_id?: string | null;
  /** The environment to use for resolving environment variables (e.g. 'production', 'staging'). Defaults to 'production'. */
  environment?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConversationSignedUrlResponseModel>
```

<sub>`GET /v1/convai/conversation/get_signed_url` · `get_signed_url_deprecated`</sub>

## `elevenlabs.getConversationSignedLink`

Get Signed Url

```ts
elevenlabs.getConversationSignedLink(input: {
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id: string;
  /** Whether to include a conversation_id with the response. If included, the conversation_signature cannot be used again. */
  include_conversation_id?: boolean;
  /** The ID of the branch to use */
  branch_id?: string | null;
  /** The environment to use for resolving environment variables (e.g. 'production', 'staging'). Defaults to 'production'. */
  environment?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConversationSignedUrlResponseModel>
```

<sub>`GET /v1/convai/conversation/get-signed-url` · `get_conversation_signed_link`</sub>

## `elevenlabs.getLivekitToken`

Get Webrtc Token

```ts
elevenlabs.getLivekitToken(input: {
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id: string;
  /** Optional custom participant name. If not provided, user ID will be used */
  participant_name?: string | null;
  /** The ID of the branch to use */
  branch_id?: string | null;
  /** The environment to use for resolving environment variables (e.g. 'production', 'staging'). Defaults to 'production'. */
  environment?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<TokenResponseModel>
```

<sub>`GET /v1/convai/conversation/token` · `get_livekit_token`</sub>

## `elevenlabs.getConversationHistoriesRoute`

Get Conversations

```ts
elevenlabs.getConversationHistoriesRoute(input: {
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id?: string | null;
  /** Filter conversations where any of these agents participated. Can not exceed 50 values. */
  visited_agent_ids?: (string)[] | null;
  /** Filter conversations where any of these agent branches participated. Can not exceed 50 values. */
  visited_agent_branch_ids?: (string)[] | null;
  /** The result of the success evaluation */
  call_successful?: EvaluationSuccessResult | null;
  /** Unix timestamp (in seconds) to filter conversations up to this start date. */
  call_start_before_unix?: number | null;
  /** Unix timestamp (in seconds) to filter conversations after to this start date. */
  call_start_after_unix?: number | null;
  /** Minimum call duration in seconds. */
  call_duration_min_secs?: number | null;
  /** Maximum call duration in seconds. */
  call_duration_max_secs?: number | null;
  /** Maximum overall rating (1-5). */
  rating_max?: number | null;
  /** Minimum overall rating (1-5). */
  rating_min?: number | null;
  /** Filter conversations with user feedback comments. */
  has_feedback_comment?: boolean | null;
  /** Filter conversations by the user ID who initiated them. */
  user_id?: string | null;
  /** Evaluation filters. Repeat param. Format: criteria_id:result. Example: eval=value_framing:success */
  evaluation_params?: (string)[] | null;
  /** Data collection filters. Repeat param. Format: id:op:value where op is one of eq|neq|gt|gte|lt|lte|in|exists|missing. For in, pipe-delimit values. */
  data_collection_params?: (string)[] | null;
  /** Data collection field IDs to include in each conversation summary. Repeat param. When omitted, data_collection_results is not returned. */
  data_collection_ids?: (string)[] | null;
  /** Evaluation criteria IDs to include in each conversation summary. Repeat param. When omitted, evaluation_criteria_results is not returned. */
  evaluation_criteria_ids?: (string)[] | null;
  /** Filter conversations by tool names used during the call. */
  tool_names?: (string)[] | null;
  /** Filter conversations by tool names that had successful calls. */
  tool_names_successful?: (string)[] | null;
  /** Filter conversations by tool names that had errored calls. */
  tool_names_errored?: (string)[] | null;
  /** Filter conversations by detected main language (language code). */
  main_languages?: (string)[] | null;
  /** How many conversations to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Whether to include transcript summaries in the response. */
  summary_mode?: "exclude" | "include";
  /** Full-text or fuzzy search over transcript messages */
  search?: string | null;
  conversation_initiation_source?: ConversationInitiationSource | null;
  text_only?: boolean | null;
  /** Restrict results to a single conversation product surface. */
  conversation_product_type?: ConversationProduct | null;
  /** Filter conversations by branch ID. */
  branch_id?: string | null;
  /** Filter conversations by version ID. */
  version_id?: string | null;
  /** Filter conversations by parent conversation ID for subagent conversations. */
  parent_conversation_id?: string | null;
  /** Filter conversations by topic IDs assigned during topic discovery. */
  topic_ids?: (string)[] | null;
  /** Exclude conversations with the given statuses. Useful for hiding in-progress / processing conversations from list views. */
  exclude_statuses?: ("initiated" | "in-progress" | "processing" | "done" | "failed")[] | null;
  /** Filter conversations by conversation tag IDs assigned via the conversation-tags endpoints. */
  tag_ids?: (string)[] | null;
  /** Filter conversations to only those that entered the given node. */
  workflow_node_entered_id?: string | null;
  /** Filter conversations by their stored termination_reason (metadata.termination_reason). Repeat param to match any of several. */
  termination_reasons?: (string)[] | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationsPageResponseModel>
```

<sub>`GET /v1/convai/conversations` · `get_conversation_histories_route`</sub>

## `elevenlabs.deleteConversationRoute`

Delete Conversation

```ts
elevenlabs.deleteConversationRoute(input: {
  /** The id of the conversation you're taking the action on. */
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/conversations/{conversation_id}` · `delete_conversation_route`</sub>

## `elevenlabs.getConversationHistoryRoute`

Get Conversation Details

```ts
elevenlabs.getConversationHistoryRoute(input: {
  /** The id of the conversation you're taking the action on. */
  conversation_id: string;
  /** Response format. Defaults to 'json'. Set to 'opentelemetry' for an OTLP-compatible trace payload using the same structure as the post-call webhook. */
  format?: "json" | "opentelemetry";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationResponseModel>
```

<sub>`GET /v1/convai/conversations/{conversation_id}` · `get_conversation_history_route`</sub>

## `elevenlabs.getConversationAudioRoute`

Get Conversation Audio

```ts
elevenlabs.getConversationAudioRoute(input: {
  /** The id of the conversation you're taking the action on. */
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`GET /v1/convai/conversations/{conversation_id}/audio` · `get_conversation_audio_route`</sub>

## `elevenlabs.postConversationFeedbackRoute`

Send Conversation Feedback

```ts
elevenlabs.postConversationFeedbackRoute(input: {
  /** Either 'like' or 'dislike' to indicate the feedback for the conversation. */
  feedback?: UserFeedbackScore | null;
  /** The id of the conversation you're taking the action on. */
  conversation_id: string;
}): Promise<unknown>
```

<sub>`POST /v1/convai/conversations/{conversation_id}/feedback` · `post_conversation_feedback_route`</sub>

## `elevenlabs.uploadFileRoute`

Upload File

```ts
elevenlabs.uploadFileRoute(input: {
  /** Image or PDF file to upload */
  file: string;
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConvAiFileUploadResponseModel>
```

<sub>`POST /v1/convai/conversations/{conversation_id}/files` · `upload_file_route`</sub>

## `elevenlabs.cancelFileUploadRoute`

Delete File Upload

```ts
elevenlabs.cancelFileUploadRoute(input: {
  file_id: string;
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConvAiFileUploadResponseModel>
```

<sub>`DELETE /v1/convai/conversations/{conversation_id}/files/{file_id}` · `cancel_file_upload_route`</sub>

## `elevenlabs.getConversationSipMessages`

Get Sip Messages For A Conversation

```ts
elevenlabs.getConversationSipMessages(input: {
  /** The id of the conversation you're taking the action on. */
  conversation_id: string;
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetSipLogMessagesResponse>
```

<sub>`GET /v1/convai/conversations/{conversation_id}/sip-messages` · `get_conversation_sip_messages`</sub>

## `elevenlabs.assignConversationTagsRoute`

Assign Conversation Tags

```ts
elevenlabs.assignConversationTagsRoute(input: {
  /** Tag IDs to add to the conversation. Re-assigning an existing tag is a no-op. */
  tag_ids: (string)[];
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/convai/conversations/{conversation_id}/tags` · `assign_conversation_tags_route`</sub>

## `elevenlabs.unassignConversationTagRoute`

Unassign Conversation Tag

```ts
elevenlabs.unassignConversationTagRoute(input: {
  conversation_id: string;
  tag_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/convai/conversations/{conversation_id}/tags/{tag_id}` · `unassign_conversation_tag_route`</sub>

## `elevenlabs.smartSearchConversationMessagesRoute`

Smart Search Conversation Messages

```ts
elevenlabs.smartSearchConversationMessagesRoute(input: {
  /** The search query text for semantic similarity matching */
  text_query: string;
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id?: string | null;
  /** Number of results per page. Max 50. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MessagesSearchResponse>
```

<sub>`GET /v1/convai/conversations/messages/smart-search` · `smart_search_conversation_messages_route`</sub>

## `elevenlabs.textSearchConversationMessagesRoute`

Text Search Conversation Messages

```ts
elevenlabs.textSearchConversationMessagesRoute(input: {
  /** The search query text for full-text and fuzzy matching */
  text_query: string;
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id?: string | null;
  /** Filter conversations where any of these agents participated. Can not exceed 50 values. */
  visited_agent_ids?: (string)[] | null;
  /** Filter conversations where any of these agent branches participated. Can not exceed 50 values. */
  visited_agent_branch_ids?: (string)[] | null;
  /** The result of the success evaluation */
  call_successful?: EvaluationSuccessResult | null;
  /** Unix timestamp (in seconds) to filter conversations up to this start date. */
  call_start_before_unix?: number | null;
  /** Unix timestamp (in seconds) to filter conversations after to this start date. */
  call_start_after_unix?: number | null;
  /** Minimum call duration in seconds. */
  call_duration_min_secs?: number | null;
  /** Maximum call duration in seconds. */
  call_duration_max_secs?: number | null;
  /** Maximum overall rating (1-5). */
  rating_max?: number | null;
  /** Minimum overall rating (1-5). */
  rating_min?: number | null;
  /** Filter conversations with user feedback comments. */
  has_feedback_comment?: boolean | null;
  /** Filter conversations by the user ID who initiated them. */
  user_id?: string | null;
  /** Evaluation filters. Repeat param. Format: criteria_id:result. Example: eval=value_framing:success */
  evaluation_params?: (string)[] | null;
  /** Data collection filters. Repeat param. Format: id:op:value where op is one of eq|neq|gt|gte|lt|lte|in|exists|missing. For in, pipe-delimit values. */
  data_collection_params?: (string)[] | null;
  /** Filter conversations by tool names used during the call. */
  tool_names?: (string)[] | null;
  /** Filter conversations by tool names that had successful calls. */
  tool_names_successful?: (string)[] | null;
  /** Filter conversations by tool names that had errored calls. */
  tool_names_errored?: (string)[] | null;
  /** Filter conversations by detected main language (language code). */
  main_languages?: (string)[] | null;
  /** Exclude conversations with the given statuses. Useful for hiding in-progress / processing conversations from list views. */
  exclude_statuses?: ("initiated" | "in-progress" | "processing" | "done" | "failed")[] | null;
  /** Filter conversations by their stored termination_reason (metadata.termination_reason). Repeat param to match any of several. */
  termination_reasons?: (string)[] | null;
  /** Number of results per page. Max 50. */
  page_size?: number;
  /** Whether to include transcript summaries in the response. */
  summary_mode?: "exclude" | "include";
  conversation_initiation_source?: ConversationInitiationSource | null;
  text_only?: boolean | null;
  /** Restrict results to a single conversation product surface. */
  conversation_product_type?: ConversationProduct | null;
  /** Filter conversations by branch ID. */
  branch_id?: string | null;
  /** Filter conversations by version ID. */
  version_id?: string | null;
  /** Filter conversations by topic IDs assigned during topic discovery. */
  topic_ids?: (string)[] | null;
  /** Sort order for search results. 'search_score' sorts by search score, 'created_at' sorts by conversation start time. */
  sort_by?: MessageSearchSortBy;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MessagesSearchResponse>
```

<sub>`GET /v1/convai/conversations/messages/text-search` · `text_search_conversation_messages_route`</sub>

## `elevenlabs.resolveConversationReferenceRoute`

Resolve Conversation Reference

```ts
elevenlabs.resolveConversationReferenceRoute(input: {
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id: string;
  /** A Slack message URL or a Zendesk ticket URL. */
  reference: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationResponseModel>
```

<sub>`GET /v1/convai/conversations/resolve` · `resolve_conversation_reference_route`</sub>

## `elevenlabs.listEnvironmentVariables`

List Environment Variables

```ts
elevenlabs.listEnvironmentVariables(input: {
  /** Pagination cursor from previous response */
  cursor?: string | null;
  /** Number of items to return (1-100) */
  page_size?: number;
  /** Filter by exact label match */
  label?: string | null;
  /** Filter to only return variables that have this environment. When specified, the values dict in the response will only contain this environment. */
  environment?: string | null;
  /** Filter by variable type */
  type?: "string" | "secret" | "auth_connection" | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EnvironmentVariablesListResponse>
```

<sub>`GET /v1/convai/environment-variables` · `list_environment_variables`</sub>

## `elevenlabs.createEnvironmentVariable`

Create Environment Variable

```ts
elevenlabs.createEnvironmentVariable(input: {
  body: CreateStringEnvironmentVariableRequest | CreateSecretEnvironmentVariableRequest | CreateAuthConnectionEnvironmentVariableRequest;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EnvironmentVariableResponse>
```

<sub>`POST /v1/convai/environment-variables` · `create_environment_variable`</sub>

## `elevenlabs.getEnvironmentVariable`

Get Environment Variable

```ts
elevenlabs.getEnvironmentVariable(input: {
  env_var_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EnvironmentVariableResponse>
```

<sub>`GET /v1/convai/environment-variables/{env_var_id}` · `get_environment_variable`</sub>

## `elevenlabs.updateEnvironmentVariable`

Update Environment Variable

```ts
elevenlabs.updateEnvironmentVariable(input: {
  /** Values to replace. Set to null to remove an environment (except 'production'). */
  values: { [key: string]: string | EnvironmentVariableSecretValueRequest | EnvironmentVariableAuthConnectionValueRequest | null | undefined };
  env_var_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EnvironmentVariableResponse>
```

<sub>`PATCH /v1/convai/environment-variables/{env_var_id}` · `update_environment_variable`</sub>

## `elevenlabs.handleExotelOutboundCall`

Handle An Outbound Call Via Exotel

```ts
elevenlabs.handleExotelOutboundCall(input: {
  agent_id: string;
  agent_phone_number_id: string;
  to_number: string;
  conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput | null;
  telephony_call_config?: TelephonyCallConfig;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ExotelOutboundCallResponse>
```

<sub>`POST /v1/convai/exotel/outbound-call` · `handle_exotel_outbound_call`</sub>

## `elevenlabs.getKnowledgeBaseListRoute`

Get Knowledge Base List

```ts
elevenlabs.getKnowledgeBaseListRoute(input: {
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** If specified, the endpoint returns only such knowledge base documents whose names start with this string. */
  search?: string | null;
  /** If set to true, the endpoint will return only documents owned by you (and not shared from somebody else). Deprecated: use created_by_user_id instead. */
  show_only_owned_documents?: boolean;
  /** Filter documents by creator user ID. When set, only documents created by this user are returned. Takes precedence over show_only_owned_documents. Use '@me' to refer to the authenticated user. */
  created_by_user_id?: string | null;
  /** If present, the endpoint will return only documents of the given types. */
  types?: (KnowledgeBaseDocumentType)[] | null;
  /** If set, the endpoint will return only documents that are direct children of the given folder. */
  parent_folder_id?: string | null;
  /** If set, the endpoint will return only documents that are descendants of the given folder. */
  ancestor_folder_id?: string | null;
  /** Whether folders should be returned first in the list of documents. */
  folders_first?: boolean;
  /** The direction to sort the results */
  sort_direction?: SortDirection;
  /** The field to sort the results by */
  sort_by?: KnowledgeBaseSortBy | null;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseListResponseModel>
```

<sub>`GET /v1/convai/knowledge-base` · `get_knowledge_base_list_route`</sub>

## `elevenlabs.addDocumentationToKnowledgeBase`

Add To Knowledge Base

```ts
elevenlabs.addDocumentationToKnowledgeBase(input: {
  /** A custom, human-readable name for the document. */
  name?: string | null;
  /** URL to a page of documentation that the agent will have access to in order to interact with users. */
  url?: string;
  /** Documentation that the agent will have access to in order to interact with users. */
  file?: string;
  agent_id?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddKnowledgeBaseResponseModel>
```

<sub>`POST /v1/convai/knowledge-base` · `add_documentation_to_knowledge_base`</sub>

## `elevenlabs.deleteKnowledgeBaseDocument`

Delete Knowledge Base Document Or Folder

```ts
elevenlabs.deleteKnowledgeBaseDocument(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
  /** If set to true, the document or folder will be deleted regardless of whether it is used by any agents and it will be removed from the dependent agents. For non-empty folders, this will also delete all child documents and folders. */
  force?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/knowledge-base/{documentation_id}` · `delete_knowledge_base_document`</sub>

## `elevenlabs.getDocumentationFromKnowledgeBase`

Get Documentation From Knowledge Base

```ts
elevenlabs.getDocumentationFromKnowledgeBase(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
  agent_id?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseUrlResponseModel | GetKnowledgeBaseFileResponseModel | GetKnowledgeBaseTextResponseModel | GetKnowledgeBaseFolderResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}` · `get_documentation_from_knowledge_base`</sub>

## `elevenlabs.updateDocumentRoute`

Update Document

```ts
elevenlabs.updateDocumentRoute(input: {
  /** A custom, human-readable name for the document. */
  name?: string | null;
  /** Updated content for the document. Only supported for text documents, URL documents with auto-sync disabled, and file documents. */
  content?: string | null;
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseUrlResponseModel | GetKnowledgeBaseFileResponseModel | GetKnowledgeBaseTextResponseModel | GetKnowledgeBaseFolderResponseModel>
```

<sub>`PATCH /v1/convai/knowledge-base/{documentation_id}` · `update_document_route`</sub>

## `elevenlabs.getDocumentationChunkFromKnowledgeBase`

Get Documentation Chunk From Knowledge Base

```ts
elevenlabs.getDocumentationChunkFromKnowledgeBase(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
  /** The id of a document RAG chunk from the knowledge base. */
  chunk_id: string;
  /** The embedding model used to retrieve the chunk. */
  embedding_model?: EmbeddingModelEnum | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<KnowledgeBaseDocumentChunkResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}/chunk/{chunk_id}` · `get_documentation_chunk_from_knowledge_base`</sub>

## `elevenlabs.getDocumentationChunksFromKnowledgeBase`

Get All Rag Chunks For A Document

```ts
elevenlabs.getDocumentationChunksFromKnowledgeBase(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
  /** The embedding model used to retrieve the chunk. */
  embedding_model: EmbeddingModelEnum;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<KnowledgeBaseDocumentChunksResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}/chunks` · `get_documentation_chunks_from_knowledge_base`</sub>

## `elevenlabs.getKnowledgeBaseContent`

Get Document Content

```ts
elevenlabs.getKnowledgeBaseContent(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}/content` · `get_knowledge_base_content`</sub>

## `elevenlabs.getKnowledgeBaseDependentAgents`

Get Dependent Agents List

```ts
elevenlabs.getKnowledgeBaseDependentAgents(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
  /** Type of dependent agents to return. */
  dependent_type?: KnowledgeBaseDependentType;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseDependentAgentsResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}/dependent-agents` · `get_knowledge_base_dependent_agents`</sub>

## `elevenlabs.getRagIndexes`

Get Rag Indexes Of The Specified Knowledgebase Document.

```ts
elevenlabs.getRagIndexes(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RagDocumentIndexesResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}/rag-index` · `get_rag_indexes`</sub>

## `elevenlabs.ragIndexStatus`

Compute Rag Index.

```ts
elevenlabs.ragIndexStatus(input: {
  model: EmbeddingModelEnum;
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RagDocumentIndexResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/{documentation_id}/rag-index` · `rag_index_status`</sub>

## `elevenlabs.deleteRagIndex`

Delete Rag Index.

```ts
elevenlabs.deleteRagIndex(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
  /** The id of RAG index of document from the knowledge base. */
  rag_index_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RagDocumentIndexResponseModel>
```

<sub>`DELETE /v1/convai/knowledge-base/{documentation_id}/rag-index/{rag_index_id}` · `delete_rag_index`</sub>

## `elevenlabs.refreshUrlDocumentRoute`

Refresh Url Document Content

```ts
elevenlabs.refreshUrlDocumentRoute(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseUrlResponseModel | GetKnowledgeBaseFileResponseModel | GetKnowledgeBaseTextResponseModel | GetKnowledgeBaseFolderResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/{documentation_id}/refresh` · `refresh_url_document_route`</sub>

## `elevenlabs.getKnowledgeBaseSourceFileUrl`

Get Document Source File Url

```ts
elevenlabs.getKnowledgeBaseSourceFileUrl(input: {
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<KnowledgeBaseSourceFileUrlResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/{documentation_id}/source-file-url` · `get_knowledge_base_source_file_url`</sub>

## `elevenlabs.updateFileDocumentRoute`

Update File Document

```ts
elevenlabs.updateFileDocumentRoute(input: {
  /** Documentation that the agent will have access to in order to interact with users. */
  file: string;
  /** The id of a document from the knowledge base. This is returned on document addition. */
  documentation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseUrlResponseModel | GetKnowledgeBaseFileResponseModel | GetKnowledgeBaseTextResponseModel | GetKnowledgeBaseFolderResponseModel>
```

<sub>`PATCH /v1/convai/knowledge-base/{documentation_id}/update-file` · `update_file_document_route`</sub>

## `elevenlabs.postKnowledgeBaseBulkDeleteRoute`

Bulk Delete Knowledge Base Documents

```ts
elevenlabs.postKnowledgeBaseBulkDeleteRoute(input: {
  /** The ids of documents or folders from the knowledge base. */
  document_ids: (string)[];
  /** If set to true, documents or folders will be deleted regardless of whether they are used by any agents and will be removed from the dependent agents. For non-empty folders, this will also delete all child documents and folders. */
  force?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<{ [key: string]: KnowledgeBaseBulkDeleteSuccessfulResponseModel | BatchFailureResponseModel | undefined }>
```

<sub>`POST /v1/convai/knowledge-base/bulk-delete` · `post_knowledge_base_bulk_delete_route`</sub>

## `elevenlabs.getKnowledgeBaseBulkDependentAgentsRoute`

Get Dependent Agents For Multiple Documents

```ts
elevenlabs.getKnowledgeBaseBulkDependentAgentsRoute(input: {
  /** The ids of documents or folders from the knowledge base. */
  document_ids: (string)[];
  /** Type of dependent agents to return. */
  dependent_type?: KnowledgeBaseDependentType;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetKnowledgeBaseDependentAgentsResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/dependent-agents` · `get_knowledge_base_bulk_dependent_agents_route`</sub>

## `elevenlabs.createFileDocumentRoute`

Create File Document

```ts
elevenlabs.createFileDocumentRoute(input: {
  /** Documentation that the agent will have access to in order to interact with users. */
  file: string;
  /** A custom, human-readable name for the document. */
  name?: string | null;
  /** If set, the created document or folder will be placed inside the given folder. */
  parent_folder_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddKnowledgeBaseResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/file` · `create_file_document_route`</sub>

## `elevenlabs.getRagIndexOverview`

Get Rag Index Overview.

```ts
elevenlabs.getRagIndexOverview(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RagIndexOverviewResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/rag-index` · `get_rag_index_overview`</sub>

## `elevenlabs.getOrCreateRagIndexes`

Compute Rag Indexes In Batch

```ts
elevenlabs.getOrCreateRagIndexes(input: {
  /** List of requested RAG indexes. Minimum 1, maximum 100 items. */
  items: (GetOrCreateRagIndexRequestModel)[];
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<{ [key: string]: RagIndexBatchSuccessfulResponseModel | BatchFailureResponseModel | undefined }>
```

<sub>`POST /v1/convai/knowledge-base/rag-index` · `get_or_create_rag_indexes`</sub>

## `elevenlabs.searchKnowledgeBaseContentRoute`

Search Knowledge Base Content

```ts
elevenlabs.searchKnowledgeBaseContentRoute(input: {
  /** The search query text */
  query: string;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** If present, the endpoint will return only documents of the given types. */
  types?: (KnowledgeBaseDocumentType)[] | null;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<KnowledgeBaseContentSearchResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/search` · `search_knowledge_base_content_route`</sub>

## `elevenlabs.getAgentKnowledgeBaseSummariesRoute`

Get Knowledge Base Summaries By Ids

```ts
elevenlabs.getAgentKnowledgeBaseSummariesRoute(input: {
  /** The ids of knowledge base documents. */
  document_ids: (string)[];
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<{ [key: string]: KnowledgeBaseSummaryBatchSuccessfulResponseModel | BatchFailureResponseModel | undefined }>
```

<sub>`GET /v1/convai/knowledge-base/summaries` · `get_agent_knowledge_base_summaries_route`</sub>

## `elevenlabs.createTextDocumentRoute`

Create Text Document

```ts
elevenlabs.createTextDocumentRoute(input: {
  /** Text content to be added to the knowledge base. */
  text: string;
  /** A custom, human-readable name for the document. */
  name?: string | null;
  /** If set, the created document or folder will be placed inside the given folder. */
  parent_folder_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddKnowledgeBaseResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/text` · `create_text_document_route`</sub>

## `elevenlabs.createUrlDocumentRoute`

Create Url Document

```ts
elevenlabs.createUrlDocumentRoute(input: {
  /** URL to a page of documentation that the agent will have access to in order to interact with users. */
  url: string;
  /** A custom, human-readable name for the document. */
  name?: string | null;
  /** If set, the created document or folder will be placed inside the given folder. */
  parent_folder_id?: string | null;
  /** Whether to enable auto-sync for this URL document. */
  enable_auto_sync?: boolean;
  /** Whether to automatically remove the document if the URL becomes unavailable. Only applicable when auto-sync is enabled. */
  auto_remove?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddKnowledgeBaseResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/url` · `create_url_document_route`</sub>

## `elevenlabs.getPublicLlmExpectedCostCalculation`

Calculate Expected Llm Usage

```ts
elevenlabs.getPublicLlmExpectedCostCalculation(input: {
  /** Length of the prompt in characters. */
  prompt_length: number;
  /** Pages of content in PDF documents or URLs in the agent's knowledge base. */
  number_of_pages: number;
  /** Whether RAG is enabled. */
  rag_enabled: boolean;
}): Promise<LlmUsageCalculatorResponseModel>
```

<sub>`POST /v1/convai/llm-usage/calculate` · `get_public_llm_expected_cost_calculation`</sub>

## `elevenlabs.listAvailableLlms`

List Available Llms

```ts
elevenlabs.listAvailableLlms(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<LlmListResponseModelInput>
```

<sub>`GET /v1/convai/llm/list` · `list_available_llms`</sub>

## `elevenlabs.listMcpServersRoute`

List Mcp Servers

```ts
elevenlabs.listMcpServersRoute(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServersResponseModel>
```

<sub>`GET /v1/convai/mcp-servers` · `list_mcp_servers_route`</sub>

## `elevenlabs.createMcpServerRoute`

Create Mcp Server

```ts
elevenlabs.createMcpServerRoute(input: {
  /** Configuration details for the MCP Server. */
  config: McpServerConfigInput;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`POST /v1/convai/mcp-servers` · `create_mcp_server_route`</sub>

## `elevenlabs.deleteMcpServerRoute`

Delete Mcp Server

```ts
elevenlabs.deleteMcpServerRoute(input: {
  /** ID of the MCP Server. */
  mcp_server_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/mcp-servers/{mcp_server_id}` · `delete_mcp_server_route`</sub>

## `elevenlabs.getMcpRoute`

Get Mcp Server

```ts
elevenlabs.getMcpRoute(input: {
  /** ID of the MCP Server. */
  mcp_server_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`GET /v1/convai/mcp-servers/{mcp_server_id}` · `get_mcp_route`</sub>

## `elevenlabs.updateMcpServerConfigRoute`

Update Mcp Server Configuration

```ts
elevenlabs.updateMcpServerConfigRoute(input: {
  /** The approval mode to set for the MCP server */
  approval_policy?: McpApprovalPolicy | null;
  /** DEPRECATED: use `pre_tool_speech` instead. If set, overrides the server's force_pre_tool_speech setting for this tool. */
  force_pre_tool_speech?: boolean | null;
  /** If set, overrides the server's pre_tool_speech setting for this tool. */
  pre_tool_speech?: PreToolSpeechMode | null;
  /** DEPRECATED: use `interruption_mode` instead. If set, overrides the server's disable_interruptions setting for this tool. */
  disable_interruptions?: boolean | null;
  /** If set, overrides the server's interruption_mode setting for this tool. */
  interruption_mode?: ToolInterruptionMode | null;
  /** Predefined tool call sound type to play during tool execution for all tools from this MCP server */
  tool_call_sound?: ToolCallSoundType | null;
  /** Determines when the tool call sound should play for all tools from this MCP server */
  tool_call_sound_behavior?: ToolCallSoundBehavior | null;
  /** If set, overrides the server's execution_mode setting for this tool */
  execution_mode?: ToolExecutionMode | null;
  /** The maximum time in seconds to wait for each MCP tool call to complete. */
  response_timeout_secs?: number | null;
  /** The headers to include in requests to the MCP server */
  request_headers?: { [key: string]: string | ConvAiSecretLocator | ConvAiDynamicVariable | ConvAiEnvVarLocator | undefined } | null;
  /** Whether to disable HTTP compression for this MCP server */
  disable_compression?: boolean | null;
  /** Optional secret token for authentication with this MCP server */
  secret_token?: ConvAiSecretLocator | null;
  /** Optional auth connection to use for authentication with this MCP server */
  auth_connection?: AuthConnectionLocator | EnvironmentAuthConnectionLocator | null;
  /** ID of the MCP Server. */
  mcp_server_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`PATCH /v1/convai/mcp-servers/{mcp_server_id}` · `update_mcp_server_config_route`</sub>

## `elevenlabs.updateMcpServerApprovalPolicyRoute`

Update Mcp Server Approval Policy

```ts
elevenlabs.updateMcpServerApprovalPolicyRoute(input: {
  /** The approval mode to set for the MCP server */
  approval_policy: McpApprovalPolicy;
  /** ID of the MCP Server. */
  mcp_server_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`PATCH /v1/convai/mcp-servers/{mcp_server_id}/approval-policy` · `update_mcp_server_approval_policy_route`</sub>

## `elevenlabs.addMcpServerToolApprovalRoute`

Create Mcp Server Tool Approval

```ts
elevenlabs.addMcpServerToolApprovalRoute(input: {
  /** The name of the MCP tool */
  tool_name: string;
  /** The description of the MCP tool */
  tool_description: string;
  /** The input schema of the MCP tool (the schema defined on the MCP server before ElevenLabs does any extra processing) */
  input_schema?: { [key: string]: unknown };
  /** The tool-level approval policy */
  approval_policy?: McpToolApprovalPolicy;
  /** ID of the MCP Server. */
  mcp_server_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`POST /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals` · `add_mcp_server_tool_approval_route`</sub>

## `elevenlabs.removeMcpServerToolApprovalRoute`

Delete Mcp Server Tool Approval

```ts
elevenlabs.removeMcpServerToolApprovalRoute(input: {
  /** ID of the MCP Server. */
  mcp_server_id: string;
  /** Name of the MCP tool to remove approval for. */
  tool_name: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-approvals/{tool_name}` · `remove_mcp_server_tool_approval_route`</sub>

## `elevenlabs.addMcpToolConfigOverrideRoute`

Create Mcp Tool Configuration Override

```ts
elevenlabs.addMcpToolConfigOverrideRoute(input: {
  /** DEPRECATED: use `pre_tool_speech` instead. If set, overrides the server's force_pre_tool_speech setting for this tool. */
  force_pre_tool_speech?: boolean | null;
  /** If set, overrides the server's pre_tool_speech setting for this tool. */
  pre_tool_speech?: PreToolSpeechMode | null;
  /** DEPRECATED: use `interruption_mode` instead. If set, overrides the server's disable_interruptions setting for this tool. */
  disable_interruptions?: boolean | null;
  /** If set, overrides the server's interruption_mode setting for this tool. */
  interruption_mode?: ToolInterruptionMode | null;
  /** Overrides the server's tool_call_sound setting for this tool. A sound name plays that sound; 'off' overrides to no sound (silence); null means do not override (inherit the server default). */
  tool_call_sound?: ToolCallSoundType | string | null;
  /** If set, overrides the server's tool_call_sound_behavior setting for this tool */
  tool_call_sound_behavior?: ToolCallSoundBehavior | null;
  /** If set, overrides the server's execution_mode setting for this tool */
  execution_mode?: ToolExecutionMode | null;
  /** If set, overrides the server's response timeout for this MCP tool. */
  response_timeout_secs?: number | null;
  /** Dynamic variable assignments for this MCP tool */
  assignments?: (DynamicVariableAssignment)[] | null;
  /** Mapping of json path to input override configuration */
  input_overrides?: { [key: string]: ConstantSchemaOverride | DynamicVariableSchemaOverride | LlmSchemaOverride | OmitSchemaOverride | undefined } | null;
  /** Mock responses with optional parameter conditions. Evaluated top-to-bottom; first match wins. */
  response_mocks?: (ToolResponseMockConfigInput)[] | null;
  /** The name of the MCP tool */
  tool_name: string;
  /** ID of the MCP Server. */
  mcp_server_id: string;
  /** Environment whose values are used when the MCP server URL, headers, or auth connection reference environment variables. Mirrors the environment a conversation would run in; defaults to production. */
  environment?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`POST /v1/convai/mcp-servers/{mcp_server_id}/tool-configs` · `add_mcp_tool_config_override_route`</sub>

## `elevenlabs.removeMcpToolConfigOverrideRoute`

Delete Mcp Tool Configuration Override

```ts
elevenlabs.removeMcpToolConfigOverrideRoute(input: {
  /** ID of the MCP Server. */
  mcp_server_id: string;
  /** Name of the MCP tool to remove config overrides for. */
  tool_name: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`DELETE /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}` · `remove_mcp_tool_config_override_route`</sub>

## `elevenlabs.getMcpToolConfigOverrideRoute`

Get Mcp Tool Configuration Override

```ts
elevenlabs.getMcpToolConfigOverrideRoute(input: {
  /** ID of the MCP Server. */
  mcp_server_id: string;
  /** Name of the MCP tool to retrieve config overrides for. */
  tool_name: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpToolConfigOverrideOutput>
```

<sub>`GET /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}` · `get_mcp_tool_config_override_route`</sub>

## `elevenlabs.updateMcpToolConfigOverrideRoute`

Update Mcp Tool Configuration Override

```ts
elevenlabs.updateMcpToolConfigOverrideRoute(input: {
  /** DEPRECATED: use `pre_tool_speech` instead. If set, overrides the server's force_pre_tool_speech setting for this tool. */
  force_pre_tool_speech?: boolean | null;
  /** If set, overrides the server's pre_tool_speech setting for this tool. */
  pre_tool_speech?: PreToolSpeechMode | null;
  /** DEPRECATED: use `interruption_mode` instead. If set, overrides the server's disable_interruptions setting for this tool. */
  disable_interruptions?: boolean | null;
  /** If set, overrides the server's interruption_mode setting for this tool. */
  interruption_mode?: ToolInterruptionMode | null;
  /** Overrides the server's tool_call_sound setting for this tool. A sound name plays that sound; 'off' overrides to no sound (silence); null means do not override (inherit the server default). */
  tool_call_sound?: ToolCallSoundType | string | null;
  /** If set, overrides the server's tool_call_sound_behavior setting for this tool */
  tool_call_sound_behavior?: ToolCallSoundBehavior | null;
  /** If set, overrides the server's execution_mode setting for this tool */
  execution_mode?: ToolExecutionMode | null;
  /** If set, overrides the server's response timeout for this MCP tool. */
  response_timeout_secs?: number | null;
  /** Dynamic variable assignments for this MCP tool */
  assignments?: (DynamicVariableAssignment)[] | null;
  /** Mapping of json path to input override configuration */
  input_overrides?: { [key: string]: ConstantSchemaOverride | DynamicVariableSchemaOverride | LlmSchemaOverride | OmitSchemaOverride | undefined } | null;
  /** Mock responses with optional parameter conditions. Evaluated top-to-bottom; first match wins. */
  response_mocks?: (ToolResponseMockConfigInput)[] | null;
  /** ID of the MCP Server. */
  mcp_server_id: string;
  /** Name of the MCP tool to update config overrides for. */
  tool_name: string;
  /** Environment whose values are used when the MCP server URL, headers, or auth connection reference environment variables. Mirrors the environment a conversation would run in; defaults to production. */
  environment?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<McpServerResponseModel>
```

<sub>`PATCH /v1/convai/mcp-servers/{mcp_server_id}/tool-configs/{tool_name}` · `update_mcp_tool_config_override_route`</sub>

## `elevenlabs.listMcpServerToolsRoute`

List Mcp Server Tools

```ts
elevenlabs.listMcpServerToolsRoute(input: {
  /** ID of the MCP Server. */
  mcp_server_id: string;
  /** Environment whose values are used when the MCP server URL, headers, or auth connection reference environment variables. Mirrors the environment a conversation would run in; defaults to production. */
  environment?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListMcpToolsResponseModel>
```

<sub>`GET /v1/convai/mcp-servers/{mcp_server_id}/tools` · `list_mcp_server_tools_route`</sub>

## `elevenlabs.listPhoneNumbersRoute`

List Phone Numbers

```ts
elevenlabs.listPhoneNumbersRoute(input: {
  /** Filter by telephony provider */
  provider?: TelephonyProvider | null;
  /** Filter by assigned agent ID */
  agent_id?: string | null;
  /** Filter by assigned branch ID */
  branch_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<(GetPhoneNumberTwilioResponseModel | GetPhoneNumberExotelResponseModel | GetPhoneNumberSipTrunkResponseModel)[]>
```

<sub>`GET /v1/convai/phone-numbers` · `list_phone_numbers_route`</sub>

## `elevenlabs.createPhoneNumberRoute`

Import Phone Number

```ts
elevenlabs.createPhoneNumberRoute(input: {
  /** Create Phone Request Information */
  body: CreateTwilioPhoneNumberRequest | CreateExotelPhoneNumberRequest | CreateSipTrunkPhoneNumberRequestV2;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreatePhoneNumberResponseModel>
```

<sub>`POST /v1/convai/phone-numbers` · `create_phone_number_route`</sub>

## `elevenlabs.deletePhoneNumberRoute`

Delete Phone Number

```ts
elevenlabs.deletePhoneNumberRoute(input: {
  /** The phone number ID. This is returned when a phone number is imported. */
  phone_number_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/phone-numbers/{phone_number_id}` · `delete_phone_number_route`</sub>

## `elevenlabs.getPhoneNumberRoute`

Get Phone Number

```ts
elevenlabs.getPhoneNumberRoute(input: {
  /** The phone number ID. This is returned when a phone number is imported. */
  phone_number_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetPhoneNumberTwilioResponseModel | GetPhoneNumberExotelResponseModel | GetPhoneNumberSipTrunkResponseModel>
```

<sub>`GET /v1/convai/phone-numbers/{phone_number_id}` · `get_phone_number_route`</sub>

## `elevenlabs.updatePhoneNumberRoute`

Update Phone Number

```ts
elevenlabs.updatePhoneNumberRoute(input: {
  agent_id?: string | null;
  label?: string | null;
  inbound_trunk_config?: InboundSipTrunkConfigRequestModel | null;
  outbound_trunk_config?: OutboundSipTrunkConfigRequestModel | null;
  livekit_stack?: LivekitStackType | null;
  store_sip_messages?: boolean | null;
  /** Environment to use for resolving environment variables on calls to this number. */
  environment?: string | null;
  /** Agent branch to use for calls to this number. */
  branch_id?: string | null;
  /** The phone number ID. This is returned when a phone number is imported. */
  phone_number_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetPhoneNumberTwilioResponseModel | GetPhoneNumberExotelResponseModel | GetPhoneNumberSipTrunkResponseModel>
```

<sub>`PATCH /v1/convai/phone-numbers/{phone_number_id}` · `update_phone_number_route`</sub>

## `elevenlabs.listSipMessages`

Get Sip Messages For A Phone Number

```ts
elevenlabs.listSipMessages(input: {
  /** The phone number ID. This is returned when a phone number is imported. */
  phone_number_id: string;
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetSipLogMessagesResponse>
```

<sub>`GET /v1/convai/phone-numbers/{phone_number_id}/sip-messages` · `list_sip_messages`</sub>

## `elevenlabs.getSecretsRoute`

Get Convai Workspace Secrets

```ts
elevenlabs.getSecretsRoute(input: {
  /** How many documents to return at maximum. Can not exceed 100. If not provided, returns all secrets. */
  page_size?: number | null;
  /** Maximum number of dependent resources (tools, agents, phone numbers) to return per secret. Can not exceed 100. */
  dependency_limit?: number | null;
  /** If specified, returns only secrets whose names start with this string. */
  search?: string | null;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetWorkspaceSecretsResponseModel>
```

<sub>`GET /v1/convai/secrets` · `get_secrets_route`</sub>

## `elevenlabs.createSecretRoute`

Create Convai Workspace Secret

```ts
elevenlabs.createSecretRoute(input: {
  type: string;
  name: string;
  value: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PostWorkspaceSecretResponseModel>
```

<sub>`POST /v1/convai/secrets` · `create_secret_route`</sub>

## `elevenlabs.deleteSecretRoute`

Delete Convai Workspace Secret

```ts
elevenlabs.deleteSecretRoute(input: {
  secret_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/convai/secrets/{secret_id}` · `delete_secret_route`</sub>

## `elevenlabs.getSecretRoute`

Get Convai Workspace Secret

```ts
elevenlabs.getSecretRoute(input: {
  secret_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConvAiWorkspaceStoredSecretConfig>
```

<sub>`GET /v1/convai/secrets/{secret_id}` · `get_secret_route`</sub>

## `elevenlabs.updateSecretRoute`

Update Convai Workspace Secret

```ts
elevenlabs.updateSecretRoute(input: {
  type: string;
  name: string;
  value: string;
  secret_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<PostWorkspaceSecretResponseModel>
```

<sub>`PATCH /v1/convai/secrets/{secret_id}` · `update_secret_route`</sub>

## `elevenlabs.getSecretDependenciesRoute`

Get Secret Dependencies By Type

```ts
elevenlabs.getSecretDependenciesRoute(input: {
  secret_id: string;
  resource_type: SecretDependencyResourceType;
  /** How many dependency items to return per page. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetSecretDependenciesResponseModel>
```

<sub>`GET /v1/convai/secrets/{secret_id}/dependencies/{resource_type}` · `get_secret_dependencies_route`</sub>

## `elevenlabs.getSettingsRoute`

Get Convai Settings

```ts
elevenlabs.getSettingsRoute(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConvAiSettingsResponseModel>
```

<sub>`GET /v1/convai/settings` · `get_settings_route`</sub>

## `elevenlabs.updateSettingsRoute`

Update Convai Settings

```ts
elevenlabs.updateSettingsRoute(input: {
  conversation_initiation_client_data_webhook?: ConversationInitiationClientDataWebhook | null;
  webhooks?: ConvAiWebhooks;
  /** Whether the workspace can use MCP servers */
  can_use_mcp_servers?: boolean;
  rag_retention_period_days?: number;
  /** Days to retain conversation embeddings. None means use the system default (30 days). */
  conversation_embedding_retention_days?: number | null;
  default_livekit_stack?: LivekitStackType;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConvAiSettingsResponseModel>
```

<sub>`PATCH /v1/convai/settings` · `update_settings_route`</sub>

## `elevenlabs.getDashboardSettingsRoute`

Get Convai Dashboard Settings

```ts
elevenlabs.getDashboardSettingsRoute(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConvAiDashboardSettingsResponseModel>
```

<sub>`GET /v1/convai/settings/dashboard` · `get_dashboard_settings_route`</sub>

## `elevenlabs.updateDashboardSettingsRoute`

Update Convai Dashboard Settings

```ts
elevenlabs.updateDashboardSettingsRoute(input: {
  charts?: (DashboardCallSuccessChartModel | DashboardCriteriaChartModel | DashboardDataCollectionChartModel)[];
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConvAiDashboardSettingsResponseModel>
```

<sub>`PATCH /v1/convai/settings/dashboard` · `update_dashboard_settings_route`</sub>

## `elevenlabs.handleSipTrunkOutboundCall`

Handle An Outbound Call Via Sip Trunk

```ts
elevenlabs.handleSipTrunkOutboundCall(input: {
  agent_id: string;
  agent_phone_number_id: string;
  to_number: string;
  conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput | null;
  telephony_call_config?: TelephonyCallConfig;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SipTrunkOutboundCallResponse>
```

<sub>`POST /v1/convai/sip-trunk/outbound-call` · `handle_sip_trunk_outbound_call`</sub>

## `elevenlabs.listConversationTagsRoute`

List Conversation Tags

```ts
elevenlabs.listConversationTagsRoute(input: {
  /** How many conversation tags to return. Can not exceed 100. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationTagsPageResponseModel>
```

<sub>`GET /v1/convai/tags` · `list_conversation_tags_route`</sub>

## `elevenlabs.createConversationTagRoute`

Create Conversation Tag

```ts
elevenlabs.createConversationTagRoute(input: {
  /** Display title of the tag. */
  title: string;
  /** Optional free-text description. */
  description?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConversationTagResponseModel>
```

<sub>`POST /v1/convai/tags` · `create_conversation_tag_route`</sub>

## `elevenlabs.deleteConversationTagRoute`

Delete Conversation Tag

```ts
elevenlabs.deleteConversationTagRoute(input: {
  tag_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/convai/tags/{tag_id}` · `delete_conversation_tag_route`</sub>

## `elevenlabs.getConversationTagRoute`

Get Conversation Tag

```ts
elevenlabs.getConversationTagRoute(input: {
  tag_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConversationTagResponseModel>
```

<sub>`GET /v1/convai/tags/{tag_id}` · `get_conversation_tag_route`</sub>

## `elevenlabs.updateConversationTagRoute`

Update Conversation Tag

```ts
elevenlabs.updateConversationTagRoute(input: {
  /** If provided, replaces the tag title. Omit to leave unchanged. */
  title?: string | null;
  /** If provided, replaces the tag description. Omit to leave unchanged. */
  description?: string | null;
  tag_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConversationTagResponseModel>
```

<sub>`PATCH /v1/convai/tags/{tag_id}` · `update_conversation_tag_route`</sub>

## `elevenlabs.getToolsRoute`

Get Tools

```ts
elevenlabs.getToolsRoute(input: {
  /** If specified, the endpoint returns only tools whose names start with this string. */
  search?: string | null;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number | null;
  /** If set to true, the endpoint will return only tools owned by you (and not shared from somebody else). Deprecated: use created_by_user_id instead. */
  show_only_owned_documents?: boolean;
  /** Filter tools by creator user ID. When set, only tools created by this user are returned. Takes precedence over show_only_owned_documents. Use '@me' to refer to the authenticated user. */
  created_by_user_id?: string | null;
  /** If present, the endpoint will return only tools of the given types. */
  types?: (ToolTypeFilter)[] | null;
  /** The direction to sort the results */
  sort_direction?: SortDirection;
  /** The field to sort the results by */
  sort_by?: ToolSortBy | null;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ToolsResponseModel>
```

<sub>`GET /v1/convai/tools` · `get_tools_route`</sub>

## `elevenlabs.addToolRoute`

Add Tool

```ts
elevenlabs.addToolRoute(input: {
  /** Configuration for the tool */
  tool_config: WebhookToolConfigInput | ClientToolConfigInput | SystemToolConfigInput | McpToolConfigInput;
  /** Mock responses with optional parameter conditions. Evaluated top-to-bottom; first match wins. */
  response_mocks?: (ToolResponseMockConfigInput)[] | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ToolResponseModel>
```

<sub>`POST /v1/convai/tools` · `add_tool_route`</sub>

## `elevenlabs.deleteToolRoute`

Delete Tool

```ts
elevenlabs.deleteToolRoute(input: {
  /** ID of the requested tool. */
  tool_id: string;
  /** If set to true, the tool will be deleted regardless of whether it is used by any agents and it will be removed from the dependent agents and branches. */
  force?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/tools/{tool_id}` · `delete_tool_route`</sub>

## `elevenlabs.getToolRoute`

Get Tool

```ts
elevenlabs.getToolRoute(input: {
  /** ID of the requested tool. */
  tool_id: string;
  /** Environment whose values are used when the MCP server URL, headers, or auth connection reference environment variables. Mirrors the environment a conversation would run in; defaults to production. */
  environment?: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ToolResponseModel>
```

<sub>`GET /v1/convai/tools/{tool_id}` · `get_tool_route`</sub>

## `elevenlabs.updateToolRoute`

Update Tool

```ts
elevenlabs.updateToolRoute(input: {
  /** Configuration for the tool */
  tool_config: WebhookToolConfigInput | ClientToolConfigInput | SystemToolConfigInput | McpToolConfigInput;
  /** Mock responses with optional parameter conditions. Evaluated top-to-bottom; first match wins. */
  response_mocks?: (ToolResponseMockConfigInput)[] | null;
  /** ID of the requested tool. */
  tool_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ToolResponseModel>
```

<sub>`PATCH /v1/convai/tools/{tool_id}` · `update_tool_route`</sub>

## `elevenlabs.getToolDependentAgentsRoute`

Get Dependent Agents List

```ts
elevenlabs.getToolDependentAgentsRoute(input: {
  /** ID of the requested tool. */
  tool_id: string;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetToolDependentAgentsResponseModel>
```

<sub>`GET /v1/convai/tools/{tool_id}/dependent-agents` · `get_tool_dependent_agents_route`</sub>

## `elevenlabs.getToolExecutionsRoute`

Get Tool Executions

```ts
elevenlabs.getToolExecutionsRoute(input: {
  /** ID of the requested tool. */
  tool_id: string;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Filter by error status. If not provided, returns all executions. */
  is_error?: boolean | null;
  /** Filter by agent ID. */
  agent_id?: string | null;
  /** Filter by agent branch ID. */
  branch_id?: string | null;
  /** Filter executions from this Unix timestamp (inclusive). */
  start_time?: number | null;
  /** Filter executions until this Unix timestamp (inclusive). */
  end_time?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetToolExecutionsPageResponseModel>
```

<sub>`GET /v1/convai/tools/{tool_id}/executions` · `get_tool_executions_route`</sub>

## `elevenlabs.handleTwilioOutboundCall`

Handle An Outbound Call Via Twilio

```ts
elevenlabs.handleTwilioOutboundCall(input: {
  agent_id: string;
  agent_phone_number_id: string;
  to_number: string;
  conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput | null;
  /** Whether let Twilio record the call. */
  call_recording_enabled?: boolean | null;
  telephony_call_config?: TelephonyCallConfig;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<TwilioOutboundCallResponse>
```

<sub>`POST /v1/convai/twilio/outbound-call` · `handle_twilio_outbound_call`</sub>

## `elevenlabs.registerTwilioCall`

Register A Twilio Call And Return Twiml

```ts
elevenlabs.registerTwilioCall(input: {
  agent_id: string;
  from_number: string;
  to_number: string;
  direction?: TelephonyDirection;
  conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/convai/twilio/register-call` · `register_twilio_call`</sub>

## `elevenlabs.getConversationUsersRoute`

Get Conversation Users

```ts
elevenlabs.getConversationUsersRoute(input: {
  /** Agent id (agent_…) or speech engine external id (seng_), resolved to the same underlying resource. */
  agent_id?: string | null;
  /** Filter conversations by branch ID. */
  branch_id?: string | null;
  /** Unix timestamp (in seconds) to filter conversations up to this start date. */
  call_start_before_unix?: number | null;
  /** Unix timestamp (in seconds) to filter conversations after to this start date. */
  call_start_after_unix?: number | null;
  /** Search/filter by user ID (exact match). */
  search?: string | null;
  /** How many users to return at maximum. Defaults to 30. */
  page_size?: number;
  /** The field to sort the results by. Defaults to last_contact_unix_secs. */
  sort_by?: UsersSortBy;
  /** The direction to sort the results */
  sort_direction?: SortDirection;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationUsersPageResponseModel>
```

<sub>`GET /v1/convai/users` · `get_conversation_users_route`</sub>

## `elevenlabs.listWhatsappAccounts`

List Whatsapp Accounts

```ts
elevenlabs.listWhatsappAccounts(input: {
  /** Filter by assigned agent ID */
  agent_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListWhatsAppAccountsResponse>
```

<sub>`GET /v1/convai/whatsapp-accounts` · `list_whatsapp_accounts`</sub>

## `elevenlabs.deleteWhatsappAccount`

Delete Whatsapp Account

```ts
elevenlabs.deleteWhatsappAccount(input: {
  phone_number_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`DELETE /v1/convai/whatsapp-accounts/{phone_number_id}` · `delete_whatsapp_account`</sub>

## `elevenlabs.getWhatsappAccount`

Get Whatsapp Account

```ts
elevenlabs.getWhatsappAccount(input: {
  phone_number_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetWhatsAppAccountResponse>
```

<sub>`GET /v1/convai/whatsapp-accounts/{phone_number_id}` · `get_whatsapp_account`</sub>

## `elevenlabs.updateWhatsappAccount`

Update Whatsapp Account

```ts
elevenlabs.updateWhatsappAccount(input: {
  assigned_agent_id?: string | null;
  enable_messaging?: boolean | null;
  enable_audio_message_response?: boolean | null;
  enable_typing_indicator?: boolean | null;
  phone_number_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`PATCH /v1/convai/whatsapp-accounts/{phone_number_id}` · `update_whatsapp_account`</sub>

## `elevenlabs.whatsappOutboundCall`

Make An Outbound Call Via Whatsapp

```ts
elevenlabs.whatsappOutboundCall(input: {
  whatsapp_phone_number_id: string;
  whatsapp_user_id: string;
  whatsapp_call_permission_request_template_name: string;
  whatsapp_call_permission_request_template_language_code: string;
  agent_id: string;
  conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WhatsAppOutboundCallResponse>
```

<sub>`POST /v1/convai/whatsapp/outbound-call` · `whatsapp_outbound_call`</sub>

## `elevenlabs.whatsappOutboundMessage`

Send An Outbound Message Via Whatsapp

```ts
elevenlabs.whatsappOutboundMessage(input: {
  whatsapp_phone_number_id: string;
  whatsapp_user_id: string;
  template_name: string;
  template_language_code: string;
  template_params: (WhatsAppTemplateHeaderComponentParams | WhatsAppTemplateBodyComponentParams | WhatsAppTemplateButtonComponentParams)[];
  agent_id: string;
  conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<WhatsAppOutboundMessageResponse>
```

<sub>`POST /v1/convai/whatsapp/outbound-message` · `whatsapp_outbound_message`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

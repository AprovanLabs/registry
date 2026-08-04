# AgentControl

58 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.listAgentGraphs`

List agent graphs — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentGraphs(input: {
  projectKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list. */
  filter?: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<AgentGraphs>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-graphs` · `listAgentGraphs`</sub>

## `launchdarkly.postAgentGraph`

Create new agent graph — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAgentGraph(input: {
  /** A unique key for the agent graph */
  key: string;
  /** A human-readable name for the agent graph */
  name: string;
  /** A description of the agent graph */
  description?: string;
  /** The ID of the member who maintains this agent graph */
  maintainerId?: string;
  /** The key of the team that maintains this agent graph */
  maintainerTeamKey?: string;
  /** The config key of the root node. A missing root implies a newly created graph with metadata only. */
  rootConfigKey?: string;
  /** The edges in the graph. If edges or rootConfigKey is present, both must be present. */
  edges?: (AgentGraphEdgePost)[];
  projectKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<AgentGraph>
```

<sub>`POST /api/v2/projects/{projectKey}/agent-graphs` · `postAgentGraph`</sub>

## `launchdarkly.deleteAgentGraph`

Delete agent graph — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAgentGraph(input: {
  projectKey: string;
  graphKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/agent-graphs/{graphKey}` · `deleteAgentGraph`</sub>

## `launchdarkly.getAgentGraph`

Get agent graph — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAgentGraph(input: {
  projectKey: string;
  graphKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<AgentGraph>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-graphs/{graphKey}` · `getAgentGraph`</sub>

## `launchdarkly.patchAgentGraph`

Update agent graph — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAgentGraph(input: {
  /** A human-readable name for the agent graph */
  name?: string;
  /** A description of the agent graph */
  description?: string;
  /** The ID of the member who maintains this agent graph. Pass an empty string to remove maintainer. */
  maintainerId?: string;
  /** The key of the team that maintains this agent graph. Pass an empty string to remove maintainer. */
  maintainerTeamKey?: string;
  /** The config key of the root node. If present, edges must also be present. */
  rootConfigKey?: string;
  /** The edges in the graph. If present, rootConfigKey must also be present. Replaces all existing edges. */
  edges?: (AgentGraphEdge)[];
  projectKey: string;
  graphKey: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<AgentGraph>
```

<sub>`PATCH /api/v2/projects/{projectKey}/agent-graphs/{graphKey}` · `patchAgentGraph`</sub>

## `launchdarkly.listAgentOptimizations`

List agent optimizations — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentOptimizations(input: {
  projectKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list. */
  filter?: string;
}): Promise<AgentOptimizations>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-optimizations` · `listAgentOptimizations`</sub>

## `launchdarkly.postAgentOptimization`

Create agent optimization — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAgentOptimization(input: {
  key: string;
  aiConfigKey: string;
  maxAttempts: number;
  modelChoices?: (string)[];
  judgeModel: string;
  variableChoices?: ({ [key: string]: unknown })[];
  acceptanceStatements?: (AgentOptimizationAcceptanceStatement)[];
  judges?: (AgentOptimizationJudge)[];
  userInputOptions?: (string)[];
  groundTruthResponses?: (string)[];
  metricKey?: string;
  tokenLimit?: number;
  variationKey?: string;
  label?: string;
  latencyOptimization?: boolean;
  tokenOptimization?: boolean;
  autoCommit?: boolean;
  projectKey: string;
}): Promise<AgentOptimization>
```

<sub>`POST /api/v2/projects/{projectKey}/agent-optimizations` · `postAgentOptimization`</sub>

## `launchdarkly.deleteAgentOptimization`

Delete an agent optimization — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAgentOptimization(input: {
  projectKey: string;
  optimizationKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}` · `deleteAgentOptimization`</sub>

## `launchdarkly.getAgentOptimization`

Get an agent optimization — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAgentOptimization(input: {
  projectKey: string;
  optimizationKey: string;
}): Promise<AgentOptimization>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}` · `getAgentOptimization`</sub>

## `launchdarkly.patchAgentOptimization`

Update an agent optimization — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAgentOptimization(input: {
  maxAttempts?: number;
  modelChoices?: (string)[];
  judgeModel?: string;
  variableChoices?: ({ [key: string]: unknown })[];
  acceptanceStatements?: (AgentOptimizationAcceptanceStatement)[];
  judges?: (AgentOptimizationJudge)[];
  userInputOptions?: (string)[];
  groundTruthResponses?: (string)[];
  metricKey?: string;
  tokenLimit?: number;
  variationKey?: string;
  label?: string;
  latencyOptimization?: boolean;
  tokenOptimization?: boolean;
  autoCommit?: boolean;
  projectKey: string;
  optimizationKey: string;
}): Promise<AgentOptimization>
```

<sub>`PATCH /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}` · `patchAgentOptimization`</sub>

## `launchdarkly.listAllAgentOptimizationResults`

List all agent optimization results across versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAllAgentOptimizationResults(input: {
  projectKey: string;
  optimizationKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<AgentOptimizationResults>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/all-results` · `listAllAgentOptimizationResults`</sub>

## `launchdarkly.listAgentOptimizationResults`

List agent optimization runs — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentOptimizationResults(input: {
  projectKey: string;
  optimizationKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<AgentOptimizationResults>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/results` · `listAgentOptimizationResults`</sub>

## `launchdarkly.postAgentOptimizationResult`

Create agent optimization result — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAgentOptimizationResult(input: {
  runId: string;
  agentOptimizationVersion: number;
  iteration: number;
  instructions: string;
  userInput: string;
  parameters?: { [key: string]: unknown };
  projectKey: string;
  optimizationKey: string;
}): Promise<AgentOptimizationResult>
```

<sub>`POST /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/results` · `postAgentOptimizationResult`</sub>

## `launchdarkly.patchAgentOptimizationResult`

Update an agent optimization result — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAgentOptimizationResult(input: {
  status?: AgentOptimizationResultStatus;
  activity?: AgentOptimizationResultActivity;
  completionResponse?: string;
  variation?: { [key: string]: unknown };
  scores?: { [key: string]: unknown };
  generationTokens?: { [key: string]: unknown };
  evaluationTokens?: { [key: string]: unknown };
  generationLatency?: number;
  evaluationLatencies?: { [key: string]: unknown };
  createdVariationKey?: string;
  projectKey: string;
  optimizationKey: string;
  resultId: string;
}): Promise<AgentOptimizationResult>
```

<sub>`PATCH /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/results/{resultId}` · `patchAgentOptimizationResult`</sub>

## `launchdarkly.deleteAgentOptimizationRun`

Delete an agent optimization run — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAgentOptimizationRun(input: {
  projectKey: string;
  optimizationKey: string;
  runId: string;
}, options: { headers: { "LD-API-Version": "beta" } }): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/runs/{runId}` · `deleteAgentOptimizationRun`</sub>

## `launchdarkly.listAgentOptimizationResultsByRunId`

List agent optimization results for a run — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentOptimizationResultsByRunId(input: {
  projectKey: string;
  optimizationKey: string;
  runId: string;
}): Promise<AgentOptimizationResults>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/runs/{runId}/results` · `listAgentOptimizationResultsByRunId`</sub>

## `launchdarkly.getAiConfigs`

List AI Configs — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfigs(input: {
  projectKey: string;
  /** A sort to apply to the list of AgentControl configs. */
  sort?: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list. */
  filter?: string;
}): Promise<AiConfigs>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs` · `getAIConfigs`</sub>

## `launchdarkly.postAiConfig`

Create new AI Config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAiConfig(input: {
  description?: string;
  key: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  mode?: "agent" | "completion" | "judge";
  name: string;
  tags?: (string)[];
  viewKeys?: (string)[];
  defaultVariation?: AiConfigVariationPost;
  /** Evaluation metric key for this config */
  evaluationMetricKey?: string;
  /** Whether the evaluation metric is inverted, meaning a lower value is better if set as true */
  isInverted?: boolean;
  projectKey: string;
}): Promise<AiConfig>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-configs` · `postAIConfig`</sub>

## `launchdarkly.deleteAiConfig`

Delete AI Config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAiConfig(input: {
  projectKey: string;
  configKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-configs/{configKey}` · `deleteAIConfig`</sub>

## `launchdarkly.getAiConfig`

Get AI Config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfig(input: {
  projectKey: string;
  configKey: string;
}): Promise<AiConfig>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/{configKey}` · `getAIConfig`</sub>

## `launchdarkly.patchAiConfig`

Update AI Config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAiConfig(input: {
  description?: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  name?: string;
  tags?: (string)[];
  /** Evaluation metric key for this config */
  evaluationMetricKey?: string;
  /** Whether the evaluation metric is inverted, meaning a lower value is better if set as true */
  isInverted?: boolean;
  projectKey: string;
  configKey: string;
}): Promise<AiConfig>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-configs/{configKey}` · `patchAIConfig`</sub>

## `launchdarkly.getAiConfigMetrics`

Get AI Config metrics — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfigMetrics(input: {
  projectKey: string;
  configKey: string;
  /** The starting time, as milliseconds since epoch (inclusive). */
  from: number;
  /** The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`. */
  to: number;
  /** An environment key. Only metrics from this environment will be included. */
  env: string;
  /** A context kind. Only metrics from events that include a context of this kind are included. Required if `contextKey` is provided. */
  contextKind?: string;
  /** A context key. Only metrics from events whose context of the `contextKind` kind has this key are included. Requires `contextKind`. */
  contextKey?: string;
}): Promise<Metrics>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics` · `getAIConfigMetrics`</sub>

## `launchdarkly.getAiConfigMetricsByVariation`

Get AI Config metrics by variation — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfigMetricsByVariation(input: {
  projectKey: string;
  configKey: string;
  /** The starting time, as milliseconds since epoch (inclusive). */
  from: number;
  /** The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`. */
  to: number;
  /** An environment key. Only metrics from this environment will be included. */
  env: string;
  /** A context kind. Only metrics from events that include a context of this kind are included. Required if `contextKey` is provided. */
  contextKind?: string;
  /** A context key. Only metrics from events whose context of the `contextKind` kind has this key are included. Requires `contextKind`. */
  contextKey?: string;
}): Promise<MetricsByVariation>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation` · `getAIConfigMetricsByVariation`</sub>

## `launchdarkly.getAiConfigTargeting`

Show an AI Config's targeting — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfigTargeting(input: {
  projectKey: string;
  configKey: string;
}): Promise<AiConfigTargeting>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting` · `getAIConfigTargeting`</sub>

## `launchdarkly.patchAiConfigTargeting`

Update AI Config targeting — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAiConfigTargeting(input: {
  comment?: string;
  environmentKey: string;
  instructions: ({ [key: string]: unknown })[];
  projectKey: string;
  configKey: string;
}): Promise<AiConfigTargeting>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting` · `patchAIConfigTargeting`</sub>

## `launchdarkly.postAiConfigVariation`

Create AI Config variation — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAiConfigVariation(input: {
  /** Human-readable description of this variation */
  comment?: string;
  /** Returns the description for the agent. This is only returned for agent variations. */
  description?: string;
  /** Returns the instructions for the agent. This is only returned for agent variations. */
  instructions?: string;
  key: string;
  messages?: (Message)[];
  model?: { [key: string]: unknown };
  name: string;
  modelConfigKey?: string;
  /** The exact model config version to set this variation to. Requires modelConfigKey to be set, and the version must exist for that model config. When omitted, the variation records the model config's current (latest) version.  */
  modelConfigVersion?: number;
  /** JSON Schema defining the structured output format for the variation. */
  outputFormat?: { [key: string]: unknown };
  /** List of tools to use for this variation. The latest version of the tool will be used. */
  tools?: (VariationToolPost)[];
  /** List of tool keys to use for this variation. The latest version of the tool will be used. */
  toolKeys?: (string)[];
  /** List of agent skills to attach to this variation. */
  skills?: (VariationSkillPost)[];
  judgeConfiguration?: JudgeConfiguration;
  projectKey: string;
  configKey: string;
}): Promise<AiConfigVariation>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations` · `postAIConfigVariation`</sub>

## `launchdarkly.deleteAiConfigVariation`

Delete AI Config variation — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAiConfigVariation(input: {
  projectKey: string;
  configKey: string;
  variationKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}` · `deleteAIConfigVariation`</sub>

## `launchdarkly.getAiConfigVariation`

Get AI Config variation — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfigVariation(input: {
  projectKey: string;
  configKey: string;
  variationKey: string;
}): Promise<AiConfigVariationsResponse>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}` · `getAIConfigVariation`</sub>

## `launchdarkly.patchAiConfigVariation`

Update AI Config variation — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAiConfigVariation(input: {
  /** Human-readable description of what this patch changes */
  comment?: string;
  /** Description for agent when the config is in agent mode. */
  description?: string;
  /** Instructions for agent when the config is in agent mode. */
  instructions?: string;
  messages?: (Message)[];
  model?: { [key: string]: unknown };
  modelConfigKey?: string;
  /** The exact model config version to set this variation to. Requires modelConfigKey to be set (either in this patch or already on the variation), and the version must exist for that model config. When omitted, the variation keeps the version it is currently set to, unless the patch changes modelConfigKey, in which case the variation records the new model config's current (latest) version.  */
  modelConfigVersion?: number;
  name?: string;
  /** JSON Schema defining the structured output format for the variation. */
  outputFormat?: { [key: string]: unknown };
  published?: boolean;
  /** One of 'archived', 'published' */
  state?: string;
  /** List of tools to use for this variation. The latest version of the tool will be used. */
  tools?: (VariationToolPost)[];
  /** List of tool keys to use for this variation. The latest version of the tool will be used. */
  toolKeys?: (string)[];
  /** List of agent skills to attach to this variation. Replaces the current attachments. */
  skills?: (VariationSkillPost)[];
  judgeConfiguration?: JudgeConfiguration;
  projectKey: string;
  configKey: string;
  variationKey: string;
}): Promise<AiConfigVariation>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}` · `patchAIConfigVariation`</sub>

## `launchdarkly.listModelConfigs`

List AI model configs — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listModelConfigs(input: {
  projectKey: string;
  /** Whether to return only restricted models */
  restricted?: boolean;
}): Promise<(ModelConfig)[]>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/model-configs` · `listModelConfigs`</sub>

## `launchdarkly.postModelConfig`

Create an AI model config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postModelConfig(input: {
  /** Human readable name of the model */
  name: string;
  /** Unique key for the model */
  key: string;
  /** Identifier for the model, for use with third party providers */
  id: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  /** Icon for the model */
  icon?: string;
  /** Provider for the model */
  provider?: string;
  params?: { [key: string]: unknown };
  customParams?: { [key: string]: unknown };
  tags?: (string)[];
  /** Cost per input token in USD */
  costPerInputToken?: number;
  /** Cost per output token in USD */
  costPerOutputToken?: number;
  /** Cost per cached input token in USD */
  costPerCachedInputToken?: number;
  projectKey: string;
}): Promise<ModelConfig>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-configs/model-configs` · `postModelConfig`</sub>

## `launchdarkly.deleteModelConfig`

Delete an AI model config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteModelConfig(input: {
  projectKey: string;
  modelConfigKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}` · `deleteModelConfig`</sub>

## `launchdarkly.getModelConfig`

Get AI model config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getModelConfig(input: {
  projectKey: string;
  modelConfigKey: string;
  /** Specific model config version to return. Omit to return the latest version. */
  version?: number;
}): Promise<ModelConfig>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}` · `getModelConfig`</sub>

## `launchdarkly.patchModelConfig`

Update an AI model config — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchModelConfig(input: {
  /** Immutable provider model identifier. To use a different model identifier, create a new model config. */
  id?: string;
  /** Immutable model provider. To use a different provider, create a new model config. */
  provider?: string;
  /** Human-readable name of the model */
  name?: string;
  /** Cost per input token in USD */
  costPerInputToken?: number;
  /** Cost per output token in USD */
  costPerOutputToken?: number;
  /** Cost per cached input token in USD */
  costPerCachedInputToken?: number;
  params?: { [key: string]: unknown };
  customParams?: { [key: string]: unknown };
  tags?: (string)[];
  maintainerId?: string;
  maintainerTeamKey?: string;
  projectKey: string;
  modelConfigKey: string;
}): Promise<ModelConfig>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}` · `patchModelConfig`</sub>

## `launchdarkly.listModelConfigVersions`

List AI model config versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listModelConfigVersions(input: {
  projectKey: string;
  modelConfigKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<ModelConfigs>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}/versions` · `listModelConfigVersions`</sub>

## `launchdarkly.deleteRestrictedModels`

Remove AI models from the restricted list — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteRestrictedModels(input: {
  keys: (string)[];
  projectKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted` · `deleteRestrictedModels`</sub>

## `launchdarkly.postRestrictedModels`

Add AI models to the restricted list — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postRestrictedModels(input: {
  keys: (string)[];
  projectKey: string;
}): Promise<RestrictedModelsResponse>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted` · `postRestrictedModels`</sub>

## `launchdarkly.listPromptSnippets`

List prompt snippets — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listPromptSnippets(input: {
  projectKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list. */
  filter?: string;
}): Promise<PromptSnippets>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/prompt-snippets` · `listPromptSnippets`</sub>

## `launchdarkly.postPromptSnippet`

Create a prompt snippet — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postPromptSnippet(input: {
  key: string;
  name: string;
  description?: string;
  /** The text content of the prompt snippet */
  text: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  tags?: (string)[];
  projectKey: string;
}): Promise<PromptSnippet>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-configs/prompt-snippets` · `postPromptSnippet`</sub>

## `launchdarkly.deletePromptSnippet`

Delete a prompt snippet — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deletePromptSnippet(input: {
  projectKey: string;
  snippetKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-configs/prompt-snippets/{snippetKey}` · `deletePromptSnippet`</sub>

## `launchdarkly.getPromptSnippet`

Get a prompt snippet — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getPromptSnippet(input: {
  projectKey: string;
  snippetKey: string;
}): Promise<PromptSnippet>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/prompt-snippets/{snippetKey}` · `getPromptSnippet`</sub>

## `launchdarkly.patchPromptSnippet`

Update a prompt snippet — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchPromptSnippet(input: {
  name?: string;
  description?: string;
  /** The text content of the prompt snippet */
  text?: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  tags?: (string)[];
  projectKey: string;
  snippetKey: string;
}): Promise<PromptSnippet>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-configs/prompt-snippets/{snippetKey}` · `patchPromptSnippet`</sub>

## `launchdarkly.listPromptSnippetReferences`

List prompt snippet references — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listPromptSnippetReferences(input: {
  projectKey: string;
  snippetKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<SnippetReferences>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/prompt-snippets/{snippetKey}/references` · `listPromptSnippetReferences`</sub>

## `launchdarkly.listPromptSnippetVersions`

List prompt snippet versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listPromptSnippetVersions(input: {
  projectKey: string;
  snippetKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<PromptSnippets>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/prompt-snippets/{snippetKey}/versions` · `listPromptSnippetVersions`</sub>

## `launchdarkly.getAiConfigQuickStats`

Get AI Config quick stats — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiConfigQuickStats(input: {
  projectKey: string;
  /** An environment key. Only metrics from this environment will be included. */
  env: string;
}): Promise<QuickStats>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/quick-stats` · `getAIConfigQuickStats`</sub>

## `launchdarkly.listAgentSkills`

List agent skills — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentSkills(input: {
  projectKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list. */
  filter?: string;
}): Promise<AgentSkills>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/skills` · `listAgentSkills`</sub>

## `launchdarkly.postAgentSkill`

Create an agent skill — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAgentSkill(input: {
  key: string;
  name: string;
  description?: string;
  /** The verbatim SKILL.md content of the agent skill */
  markdown: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  tags?: (string)[];
  projectKey: string;
}): Promise<AgentSkill>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-configs/skills` · `postAgentSkill`</sub>

## `launchdarkly.deleteAgentSkill`

Delete an agent skill — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAgentSkill(input: {
  projectKey: string;
  skillKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-configs/skills/{skillKey}` · `deleteAgentSkill`</sub>

## `launchdarkly.getAgentSkill`

Get an agent skill — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAgentSkill(input: {
  projectKey: string;
  skillKey: string;
}): Promise<AgentSkill>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/skills/{skillKey}` · `getAgentSkill`</sub>

## `launchdarkly.patchAgentSkill`

Update an agent skill — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAgentSkill(input: {
  name?: string;
  description?: string;
  /** The verbatim SKILL.md content of the agent skill */
  markdown?: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  tags?: (string)[];
  projectKey: string;
  skillKey: string;
}): Promise<AgentSkill>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-configs/skills/{skillKey}` · `patchAgentSkill`</sub>

## `launchdarkly.listAgentSkillReferences`

List agent skill references — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentSkillReferences(input: {
  projectKey: string;
  skillKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<AgentSkillReferences>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/skills/{skillKey}/references` · `listAgentSkillReferences`</sub>

## `launchdarkly.listAgentSkillVersions`

List agent skill versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentSkillVersions(input: {
  projectKey: string;
  skillKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<AgentSkills>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-configs/skills/{skillKey}/versions` · `listAgentSkillVersions`</sub>

## `launchdarkly.listAiTools`

List AI tools — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAiTools(input: {
  projectKey: string;
  /** A sort to apply to the list of AgentControl configs. */
  sort?: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A filter to apply to the list. */
  filter?: string;
}): Promise<AiTools>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-tools` · `listAITools`</sub>

## `launchdarkly.postAiTool`

Create an AI tool — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postAiTool(input: {
  key: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  description?: string;
  /** JSON Schema defining the tool's parameters for LLM consumption */
  schema: { [key: string]: unknown };
  /** Custom metadata and configuration for application-level use (not sent to LLM) */
  customParameters?: { [key: string]: unknown };
  tags?: (string)[];
  projectKey: string;
}): Promise<AiTool>
```

<sub>`POST /api/v2/projects/{projectKey}/ai-tools` · `postAITool`</sub>

## `launchdarkly.deleteAiTool`

Delete AI tool — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteAiTool(input: {
  projectKey: string;
  toolKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/projects/{projectKey}/ai-tools/{toolKey}` · `deleteAITool`</sub>

## `launchdarkly.getAiTool`

Get AI tool — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getAiTool(input: {
  projectKey: string;
  toolKey: string;
}): Promise<AiTool>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-tools/{toolKey}` · `getAITool`</sub>

## `launchdarkly.patchAiTool`

Update AI tool — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchAiTool(input: {
  maintainerId?: string;
  maintainerTeamKey?: string;
  description?: string;
  /** JSON Schema defining the tool's parameters for LLM consumption */
  schema?: { [key: string]: unknown };
  /** Custom metadata and configuration for application-level use (not sent to LLM) */
  customParameters?: { [key: string]: unknown };
  tags?: (string)[];
  projectKey: string;
  toolKey: string;
}): Promise<AiTool>
```

<sub>`PATCH /api/v2/projects/{projectKey}/ai-tools/{toolKey}` · `patchAITool`</sub>

## `launchdarkly.listAiToolVersions`

List AI tool versions — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAiToolVersions(input: {
  projectKey: string;
  toolKey: string;
  /** A sort to apply to the list of AgentControl configs. */
  sort?: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<AiTools>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-tools/{toolKey}/versions` · `listAIToolVersions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

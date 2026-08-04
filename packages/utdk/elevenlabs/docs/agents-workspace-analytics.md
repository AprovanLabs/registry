# Agents Workspace Analytics

2 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.runConversationEvaluations`

Run Conversation Evaluation

```ts
elevenlabs.runConversationEvaluations(input: {
  /** ID of the single evaluation criterion to rerun. */
  evaluation_id: string;
  scope?: AnalysisScope;
  /** ID of the conversation */
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationResponseModel>
```

<sub>`POST /v1/convai/conversations/{conversation_id}/analysis/evaluations/run` · `run_conversation_evaluations`</sub>

## `elevenlabs.runConversationAnalysis`

Run Conversation Analysis

```ts
elevenlabs.runConversationAnalysis(input: {
  /** ID of the conversation */
  conversation_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetConversationResponseModel>
```

<sub>`POST /v1/convai/conversations/{conversation_id}/analysis/run` · `run_conversation_analysis`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# AI Configs

2 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.listAgentOptimizationRuns`

List agent optimization runs — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAgentOptimizationRuns(input: {
  projectKey: string;
  optimizationKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<AgentOptimizationRuns>
```

<sub>`GET /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/runs` · `listAgentOptimizationRuns`</sub>

## `launchdarkly.listAiToolReferences`

List AI tool references — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.listAiToolReferences(input: {
  projectKey: string;
  toolKey: string;
  /** The number of resources to return. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<ToolReferences>
```

<sub>`GET /api/v2/projects/{projectKey}/ai-tools/{toolKey}/references` · `listAIToolReferences`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

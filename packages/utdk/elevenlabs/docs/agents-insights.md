# Agents Insights

1 operation · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getAgentTopicsRoute`

Get Agent Conversation Topics

```ts
elevenlabs.getAgentTopicsRoute(input: {
  /** ID of the agent */
  agent_id: string;
  /** Start of the window to view topics for. When set with to_unix_secs, per-day topics in the range are aggregated together. */
  from_unix_secs?: number | null;
  /** End of the window to view topics for. */
  to_unix_secs?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAgentTopicsResponseModel>
```

<sub>`GET /v1/convai/agents/{agent_id}/topics` · `get_agent_topics_route`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

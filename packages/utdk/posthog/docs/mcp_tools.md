# Mcp Tools

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.mcpToolsCreate`

Invoke an MCP tool by name. This endpoint allows MCP callers to invoke Max AI tools directly without going through the full LangChain conversation flow. Scopes are resolved dynamically per tool via dangerously_get_required_scopes.

```ts
posthog.mcpToolsCreate(): Promise<{ [key: string]: unknown }>
```

<sub>`POST /api/projects/{project_id}/mcp_tools/{tool_name}/` · `mcp_tools_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

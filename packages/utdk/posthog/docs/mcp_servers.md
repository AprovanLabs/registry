# Mcp Servers

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.mcpServersList`

Lists curated MCP server templates that users can install with one click. Templates are seeded by PostHog operators and carry shared, encrypted OAuth client credentials. Inactive templates are hidden from the catalog.

```ts
posthog.mcpServersList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; url: string; docs_url?: string; description?: string; auth_type?: "api_key" | "oauth"; icon_key: string; icon_domain: string; category?: "business" | "data" | "design" | "dev" | "infra" | "productivity" })[] }>
```

<sub>`GET /api/projects/{project_id}/mcp_servers/` · `mcp_servers_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

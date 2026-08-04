# Posthog Connections

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.posthogConnectionsForwardCreate`

Forward a request through a PostHog connection

```ts
posthog.posthogConnectionsForwardCreate(): Promise<{ status: number; data: unknown }>
```

<sub>`POST /api/projects/{project_id}/posthog_connections/{id}/forward/` · `posthog_connections_forward_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

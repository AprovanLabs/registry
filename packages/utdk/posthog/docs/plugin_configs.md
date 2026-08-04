# Plugin Configs

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.pluginConfigsLogsList`

```ts
posthog.pluginConfigsLogsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; team_id: number; plugin_id: number; plugin_config_id: number; timestamp: string; source: "SYSTEM" | "PLUGIN" | "CONSOLE"; type: "DEBUG" | "LOG" | "INFO" | "WARN" | "ERROR"; message: string; instance_id: string })[] }>
```

<sub>`GET /api/projects/{project_id}/plugin_configs/{plugin_config_id}/logs/` · `plugin_configs_logs_list`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

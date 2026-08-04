# Sdk Health

1 operation · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.sdkHealthReportRetrieve`

Get SDK health report for a project

```ts
posthog.sdkHealthReportRetrieve(): Promise<{ overall_health: "healthy" | "needs_attention"; health: "success" | "warning" | "danger"; needs_updating_count: number; team_sdk_count: number; sdks: ({ lib: "web" | "posthog-ios" | "posthog-android" | "posthog-java" | "posthog-server" | "posthog-node" | "posthog-python" | "posthog-php" | "posthog-ruby" | "posthog-go" | "posthog-flutter" | "posthog-react-native" | "posthog-kmp" | "posthog-dotnet...>
```

<sub>`GET /api/projects/{project_id}/sdk_health/report/` · `sdk_health_report_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

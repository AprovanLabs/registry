# Web Analytics

2 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.webAnalyticsRecap`

Weekly web analytics recap

```ts
posthog.webAnalyticsRecap(): Promise<{ visitors: { current: number; previous: number | null; change: { percent: number; direction: "Up" | "Down"; color: string; text: string; long_text: string } | null }; pageviews: { current: number; previous: number | null; change: { percent: number; direction: "Up" | "Down"; color: string; text: string; long_text: string } | null }; sessions: unknown; bounce_rate: unknown; avg_session_duration: {...>
```

<sub>`GET /api/projects/{project_id}/web_analytics/recap/` · `web_analytics_recap`</sub>

## `posthog.webAnalyticsWeeklyDigest`

Summarize web analytics

```ts
posthog.webAnalyticsWeeklyDigest(): Promise<{ visitors: { current: number; previous: number | null; change: { percent: number; direction: "Up" | "Down"; color: string; text: string; long_text: string } | null }; pageviews: { current: number; previous: number | null; change: { percent: number; direction: "Up" | "Down"; color: string; text: string; long_text: string } | null }; sessions: unknown; bounce_rate: unknown; avg_session_duration: {...>
```

<sub>`GET /api/projects/{project_id}/web_analytics/weekly_digest/` · `web_analytics_weekly_digest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

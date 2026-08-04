# Web Analytics Achievements

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.webAnalyticsAchievementsAcknowledgeCelebration`

Acknowledge an achievement celebration

```ts
posthog.webAnalyticsAchievementsAcknowledgeCelebration(): Promise<{ acknowledged: boolean }>
```

<sub>`POST /api/projects/{project_id}/web_analytics_achievements/acknowledge_celebration/` · `web_analytics_achievements_acknowledge_celebration`</sub>

## `posthog.webAnalyticsAchievementsOverview`

Get Web analytics achievements overview

```ts
posthog.webAnalyticsAchievementsOverview(): Promise<{ definitions: ({ key: string; display_name: string; description: string; scope: "user" | "team"; is_experiment_track: boolean; stages: ({ stage: number; name: string; threshold: number })[] })[]; user_progress: ({ track_key: string; current_stage: number; progress_value: number; last_computed_at: string | null; unlocked_at: { [key: string]: string | undefined } })[]; team_progress: ({ track_key:...>
```

<sub>`GET /api/projects/{project_id}/web_analytics_achievements/overview/` · `web_analytics_achievements_overview`</sub>

## `posthog.webAnalyticsAchievementsPreferences`

Get Web analytics achievements preferences

```ts
posthog.webAnalyticsAchievementsPreferences(): Promise<{ achievements_opt_out: boolean }>
```

<sub>`GET /api/projects/{project_id}/web_analytics_achievements/preferences/` · `web_analytics_achievements_preferences`</sub>

## `posthog.webAnalyticsAchievementsUpdatePreferences`

Update Web analytics achievements preferences

```ts
posthog.webAnalyticsAchievementsUpdatePreferences(): Promise<{ achievements_opt_out: boolean }>
```

<sub>`POST /api/projects/{project_id}/web_analytics_achievements/preferences/` · `web_analytics_achievements_update_preferences`</sub>

## `posthog.webAnalyticsAchievementsRecordInteraction`

Record a Web analytics interaction

```ts
posthog.webAnalyticsAchievementsRecordInteraction(): Promise<{ recorded: boolean }>
```

<sub>`POST /api/projects/{project_id}/web_analytics_achievements/record_interaction/` · `web_analytics_achievements_record_interaction`</sub>

## `posthog.webAnalyticsAchievementsRecordVisit`

Record a Web analytics visit

```ts
posthog.webAnalyticsAchievementsRecordVisit(): Promise<{ recorded: boolean }>
```

<sub>`POST /api/projects/{project_id}/web_analytics_achievements/record_visit/` · `web_analytics_achievements_record_visit`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

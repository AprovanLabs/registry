# Task Automations

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.taskAutomationsList`

API for managing scheduled task automations.

```ts
posthog.taskAutomationsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; name: string; prompt: string; repository: string | null; github_integration: number | null; cron_expression: string; timezone: string; template_id: string | null; enabled: boolean; last_run_at: string | null; last_run_status: string | null; last_task_id: string; last_task_run_id: string | null; last_error: st...>
```

<sub>`GET /api/projects/{project_id}/task_automations/` · `task_automations_list`</sub>

## `posthog.taskAutomationsCreate`

API for managing scheduled task automations.

```ts
posthog.taskAutomationsCreate(): Promise<{ id: string; name: string; prompt: string; repository: string | null; github_integration: number | null; cron_expression: string; timezone: string; template_id: string | null; enabled: boolean; last_run_at: string | null; last_run_status: string | null; last_task_id: string; last_task_run_id: string | null; last_error: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/task_automations/` · `task_automations_create`</sub>

## `posthog.taskAutomationsDestroy`

API for managing scheduled task automations.

```ts
posthog.taskAutomationsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/task_automations/{id}/` · `task_automations_destroy`</sub>

## `posthog.taskAutomationsRetrieve`

API for managing scheduled task automations.

```ts
posthog.taskAutomationsRetrieve(): Promise<{ id: string; name: string; prompt: string; repository: string | null; github_integration: number | null; cron_expression: string; timezone: string; template_id: string | null; enabled: boolean; last_run_at: string | null; last_run_status: string | null; last_task_id: string; last_task_run_id: string | null; last_error: string | null; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/task_automations/{id}/` · `task_automations_retrieve`</sub>

## `posthog.taskAutomationsPartialUpdate`

API for managing scheduled task automations.

```ts
posthog.taskAutomationsPartialUpdate(): Promise<{ id: string; name: string; prompt: string; repository: string | null; github_integration: number | null; cron_expression: string; timezone: string; template_id: string | null; enabled: boolean; last_run_at: string | null; last_run_status: string | null; last_task_id: string; last_task_run_id: string | null; last_error: string | null; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/task_automations/{id}/` · `task_automations_partial_update`</sub>

## `posthog.taskAutomationsRunCreate`

API for managing scheduled task automations.

```ts
posthog.taskAutomationsRunCreate(): Promise<{ id: string; name: string; prompt: string; repository: string | null; github_integration: number | null; cron_expression: string; timezone: string; template_id: string | null; enabled: boolean; last_run_at: string | null; last_run_status: string | null; last_task_id: string; last_task_run_id: string | null; last_error: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/task_automations/{id}/run/` · `task_automations_run_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Loops

10 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.loopsList`

List loops

```ts
posthog.loopsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; team_id: number; created_by_id: number | null; name: string; description: string; visibility: string; instructions: string; runtime_adapter: string; model: string; reasoning_effort: string | null; repositories: ({ github_integration_id: number; full_name: string })[]; sandbox_environment_id: string | null; en...>
```

<sub>`GET /api/projects/{project_id}/loops/` · `loops_list`</sub>

## `posthog.loopsCreate`

Create a loop

```ts
posthog.loopsCreate(): Promise<{ id: string; team_id: number; created_by_id: number | null; name: string; description: string; visibility: string; instructions: string; runtime_adapter: string; model: string; reasoning_effort: string | null; repositories: ({ github_integration_id: number; full_name: string })[]; sandbox_environment_id: string | null; enabled: boolean; disabled_reason: string | null; overlap_policy: string; beh...>
```

<sub>`POST /api/projects/{project_id}/loops/` · `loops_create`</sub>

## `posthog.loopsDestroy`

Delete a loop

```ts
posthog.loopsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/loops/{id}/` · `loops_destroy`</sub>

## `posthog.loopsRetrieve`

Get a loop

```ts
posthog.loopsRetrieve(): Promise<{ id: string; team_id: number; created_by_id: number | null; name: string; description: string; visibility: string; instructions: string; runtime_adapter: string; model: string; reasoning_effort: string | null; repositories: ({ github_integration_id: number; full_name: string })[]; sandbox_environment_id: string | null; enabled: boolean; disabled_reason: string | null; overlap_policy: string; beh...>
```

<sub>`GET /api/projects/{project_id}/loops/{id}/` · `loops_retrieve`</sub>

## `posthog.loopsPartialUpdate`

Update a loop

```ts
posthog.loopsPartialUpdate(): Promise<{ id: string; team_id: number; created_by_id: number | null; name: string; description: string; visibility: string; instructions: string; runtime_adapter: string; model: string; reasoning_effort: string | null; repositories: ({ github_integration_id: number; full_name: string })[]; sandbox_environment_id: string | null; enabled: boolean; disabled_reason: string | null; overlap_policy: string; beh...>
```

<sub>`PATCH /api/projects/{project_id}/loops/{id}/` · `loops_partial_update`</sub>

## `posthog.loopsPreviewCreate`

Preview a loop fire

```ts
posthog.loopsPreviewCreate(): Promise<{ instructions: string; trigger_type: string; trigger_context: string }>
```

<sub>`POST /api/projects/{project_id}/loops/{id}/preview/` · `loops_preview_create`</sub>

## `posthog.loopsRunCreate`

Run a loop manually

```ts
posthog.loopsRunCreate(): Promise<{ created: boolean; reason: "created" | "deduped" | "overlap_skipped" | "rate_capped" | "team_rate_capped" | "disabled" | "gate_blocked" | "owner_inactive" | "owner_changed"; task_id: string | null; task_run_id: string | null }>
```

<sub>`POST /api/projects/{project_id}/loops/{id}/run/` · `loops_run_create`</sub>

## `posthog.loopsRunsRetrieve`

List loop runs

```ts
posthog.loopsRunsRetrieve(): Promise<{ results: ({ id: string; task_id: string; loop_trigger_id: string | null; status: string; environment: string; branch: string | null; error_message: string | null; output: { [key: string]: unknown } | null; created_at: string; completed_at: string | null })[]; next_cursor: string | null }>
```

<sub>`GET /api/projects/{project_id}/loops/{id}/runs/` · `loops_runs_retrieve`</sub>

## `posthog.loopsSkillBundlesUpdate`

Replace a loop's skill bundles

```ts
posthog.loopsSkillBundlesUpdate(): Promise<{ id: string; team_id: number; created_by_id: number | null; name: string; description: string; visibility: string; instructions: string; runtime_adapter: string; model: string; reasoning_effort: string | null; repositories: ({ github_integration_id: number; full_name: string })[]; sandbox_environment_id: string | null; enabled: boolean; disabled_reason: string | null; overlap_policy: string; beh...>
```

<sub>`PUT /api/projects/{project_id}/loops/{id}/skill_bundles/` · `loops_skill_bundles_update`</sub>

## `posthog.loopsTriggerCreate`

Fire a loop externally

```ts
posthog.loopsTriggerCreate(): Promise<{ created: boolean; reason: "created" | "deduped" | "overlap_skipped" | "rate_capped" | "team_rate_capped" | "disabled" | "gate_blocked" | "owner_inactive" | "owner_changed"; task_id: string | null; task_run_id: string | null }>
```

<sub>`POST /api/projects/{project_id}/loops/{id}/trigger/` · `loops_trigger_create`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

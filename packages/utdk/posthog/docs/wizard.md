# Wizard

5 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.wizardSessionsList`

List wizard sessions for the project, ordered by started_at desc. This should only be called by the PostHog Wizard. Optional filters: ?workflow_id=<id> and ?skill_id=<id>.

```ts
posthog.wizardSessionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ pending_input: { id: string; asked_at?: string; question_count?: number; sensitive?: boolean; prompts?: (string)[] } | null; session_id: string; team_id: number; workflow_id: string; skill_id: string; started_at: string; run_phase: "idle" | "running" | "completed" | "error"; tasks: ({ id: string; title: string; status: "...>
```

<sub>`GET /api/projects/{project_id}/wizard/sessions/` · `wizard_sessions_list`</sub>

## `posthog.wizardSessionsCreate`

Upsert a wizard session. The `session_id` key is the idempotency anchor — reposting the same `session_id` replaces the existing row. Returns 201 on create, 200 on update.

```ts
posthog.wizardSessionsCreate(): Promise<{ pending_input: { id: string; asked_at?: string; question_count?: number; sensitive?: boolean; prompts?: (string)[] } | null; session_id: string; team_id: number; workflow_id: string; skill_id: string; started_at: string; run_phase: "idle" | "running" | "completed" | "error"; tasks: ({ id: string; title: string; status: "pending" | "in_progress" | "completed" | "failed" | "canceled" })[]; event_...>
```

<sub>`POST /api/projects/{project_id}/wizard/sessions/` · `wizard_sessions_create`</sub>

## `posthog.wizardSessionsRetrieve`

Retrieve a single wizard session by its session_id.

```ts
posthog.wizardSessionsRetrieve(): Promise<{ pending_input: { id: string; asked_at?: string; question_count?: number; sensitive?: boolean; prompts?: (string)[] } | null; session_id: string; team_id: number; workflow_id: string; skill_id: string; started_at: string; run_phase: "idle" | "running" | "completed" | "error"; tasks: ({ id: string; title: string; status: "pending" | "in_progress" | "completed" | "failed" | "canceled" })[]; event_...>
```

<sub>`GET /api/projects/{project_id}/wizard/sessions/{session_id}/` · `wizard_sessions_retrieve`</sub>

## `posthog.wizardSessionsLatestRetrieve`

Return the single most-recent wizard session for a workflow (and optional skill), or 204 if none exists. Unlike `list`, this is a point lookup the app shell uses to decide whether to open the live SSE stream — it never returns a collection, and 'no run' is a 204 rather than a 404 so clients don't conflate it with a missing endpoint.

```ts
posthog.wizardSessionsLatestRetrieve(): Promise<{ pending_input: { id: string; asked_at?: string; question_count?: number; sensitive?: boolean; prompts?: (string)[] } | null; session_id: string; team_id: number; workflow_id: string; skill_id: string; started_at: string; run_phase: "idle" | "running" | "completed" | "error"; tasks: ({ id: string; title: string; status: "pending" | "in_progress" | "completed" | "failed" | "canceled" })[]; event_...>
```

<sub>`GET /api/projects/{project_id}/wizard/sessions/latest/` · `wizard_sessions_latest_retrieve`</sub>

## `posthog.wizardSessionsStreamRetrieve`

Server-Sent Events stream of wizard session updates for a (workflow_id, skill_id) pair. On connect, the current latest session (if any) is emitted as the first event; subsequent upserts are streamed in real time. The server closes the connection after 900 seconds with an `event: end` line so the client (EventSource) can reconnect. **SDK consumers**: do not call the generated fetch wrapper for this path — it will buffer the entire infinite stream. Use the URL builder (`getWizardSessionsStreamRetrieveUrl`) with the browser's `EventSource` API instead.

```ts
posthog.wizardSessionsStreamRetrieve(): Promise<string>
```

<sub>`GET /api/projects/{project_id}/wizard/sessions/stream/` · `wizard_sessions_stream_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Live Debugger Breakpoints

8 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.liveDebuggerBreakpointsList`

Create, Read, Update and Delete breakpoints for live debugging.

```ts
posthog.liveDebuggerBreakpointsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; repository?: string | null; filename: string; line_number: number; enabled?: boolean; condition?: string | null; created_at: string; updated_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/live_debugger_breakpoints/` · `live_debugger_breakpoints_list`</sub>

## `posthog.liveDebuggerBreakpointsCreate`

Create, Read, Update and Delete breakpoints for live debugging.

```ts
posthog.liveDebuggerBreakpointsCreate(): Promise<{ id: string; repository?: string | null; filename: string; line_number: number; enabled?: boolean; condition?: string | null; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/live_debugger_breakpoints/` · `live_debugger_breakpoints_create`</sub>

## `posthog.liveDebuggerBreakpointsDestroy`

Create, Read, Update and Delete breakpoints for live debugging.

```ts
posthog.liveDebuggerBreakpointsDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/live_debugger_breakpoints/{id}/` · `live_debugger_breakpoints_destroy`</sub>

## `posthog.liveDebuggerBreakpointsRetrieve`

Create, Read, Update and Delete breakpoints for live debugging.

```ts
posthog.liveDebuggerBreakpointsRetrieve(): Promise<{ id: string; repository?: string | null; filename: string; line_number: number; enabled?: boolean; condition?: string | null; created_at: string; updated_at: string }>
```

<sub>`GET /api/projects/{project_id}/live_debugger_breakpoints/{id}/` · `live_debugger_breakpoints_retrieve`</sub>

## `posthog.liveDebuggerBreakpointsPartialUpdate`

Create, Read, Update and Delete breakpoints for live debugging.

```ts
posthog.liveDebuggerBreakpointsPartialUpdate(): Promise<{ id: string; repository?: string | null; filename: string; line_number: number; enabled?: boolean; condition?: string | null; created_at: string; updated_at: string }>
```

<sub>`PATCH /api/projects/{project_id}/live_debugger_breakpoints/{id}/` · `live_debugger_breakpoints_partial_update`</sub>

## `posthog.liveDebuggerBreakpointsUpdate`

Create, Read, Update and Delete breakpoints for live debugging.

```ts
posthog.liveDebuggerBreakpointsUpdate(): Promise<{ id: string; repository?: string | null; filename: string; line_number: number; enabled?: boolean; condition?: string | null; created_at: string; updated_at: string }>
```

<sub>`PUT /api/projects/{project_id}/live_debugger_breakpoints/{id}/` · `live_debugger_breakpoints_update`</sub>

## `posthog.liveDebuggerBreakpointsActiveRetrieve`

Get active breakpoints (External API)

```ts
posthog.liveDebuggerBreakpointsActiveRetrieve(): Promise<{ breakpoints: ({ id: string; repository?: string | null; filename: string; line_number: number; enabled: boolean; condition?: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/live_debugger_breakpoints/active/` · `live_debugger_breakpoints_active_retrieve`</sub>

## `posthog.liveDebuggerBreakpointsBreakpointHitsRetrieve`

Get breakpoint hits

```ts
posthog.liveDebuggerBreakpointsBreakpointHitsRetrieve(): Promise<{ results: ({ id: string; lineNumber: number; functionName: string; timestamp: string; variables: { [key: string]: unknown }; stackTrace: (unknown)[]; breakpoint_id: string; filename: string })[]; count: number; has_more: boolean }>
```

<sub>`GET /api/projects/{project_id}/live_debugger_breakpoints/breakpoint_hits/` · `live_debugger_breakpoints_breakpoint_hits_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

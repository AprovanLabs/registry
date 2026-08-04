# Mcp Analytics

11 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.mcpAnalyticsFeedbackList`

List MCP feedback submissions for the current project, newest first.

```ts
posthog.mcpAnalyticsFeedbackList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; kind: "feedback" | "missing_capability"; goal: string; summary: string; category: string; blocked: boolean | null; attempted_tool: string; mcp_client_name: string; mcp_client_version: string; mcp_protocol_version: string; mcp_transport: string; mcp_session_id: string; mcp_trace_id: string; created_at: string;...>
```

<sub>`GET /api/projects/{project_id}/mcp_analytics/feedback/` · `mcp_analytics_feedback_list`</sub>

## `posthog.mcpAnalyticsFeedbackCreate`

Create a new MCP feedback submission for the current project.

```ts
posthog.mcpAnalyticsFeedbackCreate(): Promise<{ id: string; kind: "feedback" | "missing_capability"; goal: string; summary: string; category: string; blocked: boolean | null; attempted_tool: string; mcp_client_name: string; mcp_client_version: string; mcp_protocol_version: string; mcp_transport: string; mcp_session_id: string; mcp_trace_id: string; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/mcp_analytics/feedback/` · `mcp_analytics_feedback_create`</sub>

## `posthog.mcpAnalyticsIntentClustersRetrieve`

Return the most recent intent cluster snapshot for the current project. Returns an empty IDLE snapshot when no clustering run has happened yet.

```ts
posthog.mcpAnalyticsIntentClustersRetrieve(): Promise<({ status: "idle" | "computing" | "error"; error_message: string; last_computed_at: string | null; last_computed_by_email: string; clusters: ({ id: number; label: string; intent_count: number; session_count: number; call_count: number; error_count: number; error_rate_pct: number; routing_entropy: number; tool_distribution: ({ tool: string; count: number; pct: number; errors: number; error_rate_pc...>
```

<sub>`GET /api/projects/{project_id}/mcp_analytics/intent_clusters/` · `mcp_analytics_intent_clusters_retrieve`</sub>

## `posthog.mcpAnalyticsIntentClustersRecompute`

Trigger an asynchronous recompute of the intent cluster snapshot. The task runs in the background; poll the GET endpoint for progress (status transitions to 'idle' or 'error').

```ts
posthog.mcpAnalyticsIntentClustersRecompute(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/mcp_analytics/intent_clusters/recompute/` · `mcp_analytics_intent_clusters_recompute`</sub>

## `posthog.mcpAnalyticsMissingCapabilitiesList`

List missing capability reports for the current project, newest first.

```ts
posthog.mcpAnalyticsMissingCapabilitiesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; kind: "feedback" | "missing_capability"; goal: string; summary: string; category: string; blocked: boolean | null; attempted_tool: string; mcp_client_name: string; mcp_client_version: string; mcp_protocol_version: string; mcp_transport: string; mcp_session_id: string; mcp_trace_id: string; created_at: string;...>
```

<sub>`GET /api/projects/{project_id}/mcp_analytics/missing_capabilities/` · `mcp_analytics_missing_capabilities_list`</sub>

## `posthog.mcpAnalyticsMissingCapabilitiesCreate`

Create a new missing capability report for the current project.

```ts
posthog.mcpAnalyticsMissingCapabilitiesCreate(): Promise<{ id: string; kind: "feedback" | "missing_capability"; goal: string; summary: string; category: string; blocked: boolean | null; attempted_tool: string; mcp_client_name: string; mcp_client_version: string; mcp_protocol_version: string; mcp_transport: string; mcp_session_id: string; mcp_trace_id: string; created_at: string; updated_at: string }>
```

<sub>`POST /api/projects/{project_id}/mcp_analytics/missing_capabilities/` · `mcp_analytics_missing_capabilities_create`</sub>

## `posthog.mcpAnalyticsSessionsList`

List MCP sessions for the current project, derived by grouping $mcp_tool_call events by $mcp_session_id. Ordered by newest session start first by default.

```ts
posthog.mcpAnalyticsSessionsList(): Promise<{ results: ({ session_id: string; tool_calls: number; session_start: string; session_end: string; distinct_id_count: number; tools_used: (string)[]; mcp_client_name: string; distinct_id: string; person_email: string; person_name: string; intent: string })[]; has_next: boolean }>
```

<sub>`GET /api/projects/{project_id}/mcp_analytics/sessions/` · `mcp_analytics_sessions_list`</sub>

## `posthog.mcpAnalyticsSessionsGenerateIntent`

Generate (or return the cached) LLM summary of the agent's goal for a session, derived from its recorded $mcp_intents. The first call summarises and persists the result; subsequent calls return the stored summary.

```ts
posthog.mcpAnalyticsSessionsGenerateIntent(): Promise<{ session_id: string; intent: string }>
```

<sub>`POST /api/projects/{project_id}/mcp_analytics/sessions/{id}/generate_intent/` · `mcp_analytics_sessions_generate_intent`</sub>

## `posthog.mcpAnalyticsSessionsToolCalls`

List a page of the $mcp_tool_call events that belong to a given $session_id, in chronological order.

```ts
posthog.mcpAnalyticsSessionsToolCalls(): Promise<{ results: ({ event_id: string; timestamp: string; tool_name: string; intent: string; is_error: boolean; error_message: string; duration_ms: number | null })[]; has_next: boolean }>
```

<sub>`GET /api/projects/{project_id}/mcp_analytics/sessions/{id}/tool_calls/` · `mcp_analytics_sessions_tool_calls`</sub>

## `posthog.mcpAnalyticsSessionsActivityOverview`

Aggregate counters, top tools, agent clients, and the most recent tool calls for the last 30 days, computed in one request. Powers the dashboard's activity view; always computed fresh so polling callers watch data arrive.

```ts
posthog.mcpAnalyticsSessionsActivityOverview(): Promise<{ stats: { total_calls: number; distinct_tools: number; distinct_sessions: number; distinct_clients: number; calls_with_intent: number; error_calls: number; missing_capability_reports: number }; top_tools: ({ tool: string; calls: number; errors: number })[]; clients: ({ client: string; calls: number })[]; recent_calls: ({ timestamp: string; tool: string; intent: string | null; is_error: boolean; ...>
```

<sub>`GET /api/projects/{project_id}/mcp_analytics/sessions/activity_overview/` · `mcp_analytics_sessions_activity_overview`</sub>

## `posthog.mcpAnalyticsSessionsIntentDigest`

Generate (or return the cached) LLM digest of what agents are trying to do with this MCP server, derived from the most recent recorded $mcp_intents across all sessions: a one-sentence summary plus semantic themes, each sized and attributed to tools from the intents themselves. Cached by intent corpus and by recency, so repeated calls are cheap and a busy server regenerates at a bounded rate. Powers the dashboard's activity tab.

```ts
posthog.mcpAnalyticsSessionsIntentDigest(): Promise<{ digest: string | null; intent_count: number; themes: ({ name: string; description: string; intent_count: number; example_intent: string; tools: (string)[] })[] }>
```

<sub>`POST /api/projects/{project_id}/mcp_analytics/sessions/intent_digest/` · `mcp_analytics_sessions_intent_digest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

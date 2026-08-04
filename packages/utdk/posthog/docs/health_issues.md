# Health Issues

6 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.healthIssuesList`

List health issues

```ts
posthog.healthIssuesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; kind: string; severity: "critical" | "warning" | "info"; status: "active" | "resolved"; dismissed?: boolean; payload: { [key: string]: unknown }; created_at: string; updated_at: string; resolved_at: string | null })[] }>
```

<sub>`GET /api/projects/{project_id}/health_issues/` · `health_issues_list`</sub>

## `posthog.healthIssuesRetrieve`

Get a health issue

```ts
posthog.healthIssuesRetrieve(): Promise<{ id: string; kind: string; severity: "critical" | "warning" | "info"; status: "active" | "resolved"; dismissed?: boolean; payload: { [key: string]: unknown }; created_at: string; updated_at: string; resolved_at: string | null; title: string; summary: string; link: string; remediation: { human: string; agent: string } | null }>
```

<sub>`GET /api/projects/{project_id}/health_issues/{id}/` · `health_issues_retrieve`</sub>

## `posthog.healthIssuesPartialUpdate`

```ts
posthog.healthIssuesPartialUpdate(): Promise<{ id: string; kind: string; severity: "critical" | "warning" | "info"; status: "active" | "resolved"; dismissed?: boolean; payload: { [key: string]: unknown }; created_at: string; updated_at: string; resolved_at: string | null }>
```

<sub>`PATCH /api/projects/{project_id}/health_issues/{id}/` · `health_issues_partial_update`</sub>

## `posthog.healthIssuesResolveCreate`

```ts
posthog.healthIssuesResolveCreate(): Promise<{ id: string; kind: string; severity: "critical" | "warning" | "info"; status: "active" | "resolved"; dismissed?: boolean; payload: { [key: string]: unknown }; created_at: string; updated_at: string; resolved_at: string | null }>
```

<sub>`POST /api/projects/{project_id}/health_issues/{id}/resolve/` · `health_issues_resolve_create`</sub>

## `posthog.healthIssuesRefreshCreate`

```ts
posthog.healthIssuesRefreshCreate(): Promise<unknown>
```

<sub>`POST /api/projects/{project_id}/health_issues/refresh/` · `health_issues_refresh_create`</sub>

## `posthog.healthIssuesSummaryRetrieve`

Summarize active health issues

```ts
posthog.healthIssuesSummaryRetrieve(): Promise<{ total: number; by_severity: { [key: string]: number | undefined }; by_kind: { [key: string]: number | undefined } }>
```

<sub>`GET /api/projects/{project_id}/health_issues/summary/` · `health_issues_summary_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

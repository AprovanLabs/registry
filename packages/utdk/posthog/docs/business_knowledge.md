# Business Knowledge

14 operations · `@utdk/posthog`

```ts
import posthog from "@utdk/posthog";
```

## `posthog.businessKnowledgeDocumentsWindowList`

Read-only access to parsed knowledge documents. Exposes hybrid search (``search``) and a drill-down window (``window``) so an agent (PHAI or MCP) can find and explore business knowledge chunks.

```ts
posthog.businessKnowledgeDocumentsWindowList(): Promise<({ chunk_id: string; ordinal: number; content: string; heading_path: string; source_name: string; document_title: string })[]>
```

<sub>`GET /api/projects/{project_id}/business_knowledge/documents/{id}/window/` · `business_knowledge_documents_window_list`</sub>

## `posthog.businessKnowledgeDocumentsSearchList`

Read-only access to parsed knowledge documents. Exposes hybrid search (``search``) and a drill-down window (``window``) so an agent (PHAI or MCP) can find and explore business knowledge chunks.

```ts
posthog.businessKnowledgeDocumentsSearchList(): Promise<({ chunk_id: string; document_id: string; ordinal: number; source_id: string; source_name: string; source_type: string; document_title: string; heading_path: string; content: string })[]>
```

<sub>`GET /api/projects/{project_id}/business_knowledge/documents/search/` · `business_knowledge_documents_search_list`</sub>

## `posthog.businessKnowledgeGapSuggestionsList`

Surfaces topics the support AI couldn't answer from the knowledge base. Two list shapes controlled by the ``ticket_id`` query param: - **per-ticket** (``?ticket_id=<uuid>``): individual gap rows for that ticket. - **aggregated** (no ``ticket_id``): gaps grouped by normalized topic with counts, for the Business knowledge suggestions panel.

```ts
posthog.businessKnowledgeGapSuggestionsList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; ticket_id: string; topic: string; normalized_topic: string; ticket_type: string; outcome: string; status: string; resolved_source_id: string | null; created_at: string })[] }>
```

<sub>`GET /api/projects/{project_id}/business_knowledge/gap_suggestions/` · `business_knowledge_gap_suggestions_list`</sub>

## `posthog.businessKnowledgeGapSuggestionsAcceptCreate`

Surfaces topics the support AI couldn't answer from the knowledge base. Two list shapes controlled by the ``ticket_id`` query param: - **per-ticket** (``?ticket_id=<uuid>``): individual gap rows for that ticket. - **aggregated** (no ``ticket_id``): gaps grouped by normalized topic with counts, for the Business knowledge suggestions panel.

```ts
posthog.businessKnowledgeGapSuggestionsAcceptCreate(): Promise<{ id: string; ticket_id: string; topic: string; normalized_topic: string; ticket_type: string; outcome: string; status: string; resolved_source_id: string | null; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/business_knowledge/gap_suggestions/{id}/accept/` · `business_knowledge_gap_suggestions_accept_create`</sub>

## `posthog.businessKnowledgeGapSuggestionsDismissCreate`

Surfaces topics the support AI couldn't answer from the knowledge base. Two list shapes controlled by the ``ticket_id`` query param: - **per-ticket** (``?ticket_id=<uuid>``): individual gap rows for that ticket. - **aggregated** (no ``ticket_id``): gaps grouped by normalized topic with counts, for the Business knowledge suggestions panel.

```ts
posthog.businessKnowledgeGapSuggestionsDismissCreate(): Promise<{ id: string; ticket_id: string; topic: string; normalized_topic: string; ticket_type: string; outcome: string; status: string; resolved_source_id: string | null; created_at: string }>
```

<sub>`POST /api/projects/{project_id}/business_knowledge/gap_suggestions/{id}/dismiss/` · `business_knowledge_gap_suggestions_dismiss_create`</sub>

## `posthog.businessKnowledgeGapSuggestionsAcceptTopicCreate`

Accept all pending suggestions for a normalized topic cluster.

```ts
posthog.businessKnowledgeGapSuggestionsAcceptTopicCreate(): Promise<{ normalized_topic: string; updated: number }>
```

<sub>`POST /api/projects/{project_id}/business_knowledge/gap_suggestions/accept_topic/` · `business_knowledge_gap_suggestions_accept_topic_create`</sub>

## `posthog.businessKnowledgeGapSuggestionsDismissTopicCreate`

Dismiss all pending suggestions for a normalized topic cluster.

```ts
posthog.businessKnowledgeGapSuggestionsDismissTopicCreate(): Promise<{ normalized_topic: string; updated: number }>
```

<sub>`POST /api/projects/{project_id}/business_knowledge/gap_suggestions/dismiss_topic/` · `business_knowledge_gap_suggestions_dismiss_topic_create`</sub>

## `posthog.businessKnowledgeSourcesList`

```ts
posthog.businessKnowledgeSourcesList(): Promise<{ count: number; next?: string | null; previous?: string | null; results: ({ id: string; team_id: number; name: string; source_type: "text" | "url" | "file"; status: "pending" | "processing" | "ready" | "error"; error_message: string; document_count: number; chunk_count: number; created_at: string; updated_at: string | null; source_url: string; last_refresh_at: string | null; last_refresh_status:...>
```

<sub>`GET /api/projects/{project_id}/business_knowledge/sources/` · `business_knowledge_sources_list`</sub>

## `posthog.businessKnowledgeSourcesCreate`

```ts
posthog.businessKnowledgeSourcesCreate(): Promise<{ id: string; team_id: number; name: string; source_type: "text" | "url" | "file"; status: "pending" | "processing" | "ready" | "error"; error_message: string; document_count: number; chunk_count: number; created_at: string; updated_at: string | null; source_url: string; last_refresh_at: string | null; last_refresh_status: "success" | "not_modified" | "error"; last_refresh_error: string; refresh_...>
```

<sub>`POST /api/projects/{project_id}/business_knowledge/sources/` · `business_knowledge_sources_create`</sub>

## `posthog.businessKnowledgeSourcesDestroy`

```ts
posthog.businessKnowledgeSourcesDestroy(): Promise<unknown>
```

<sub>`DELETE /api/projects/{project_id}/business_knowledge/sources/{id}/` · `business_knowledge_sources_destroy`</sub>

## `posthog.businessKnowledgeSourcesRetrieve`

```ts
posthog.businessKnowledgeSourcesRetrieve(): Promise<{ id: string; team_id: number; name: string; source_type: "text" | "url" | "file"; status: "pending" | "processing" | "ready" | "error"; error_message: string; document_count: number; chunk_count: number; created_at: string; updated_at: string | null; source_url: string; last_refresh_at: string | null; last_refresh_status: "success" | "not_modified" | "error"; last_refresh_error: string; refresh_...>
```

<sub>`GET /api/projects/{project_id}/business_knowledge/sources/{id}/` · `business_knowledge_sources_retrieve`</sub>

## `posthog.businessKnowledgeSourcesPartialUpdate`

```ts
posthog.businessKnowledgeSourcesPartialUpdate(): Promise<{ id: string; team_id: number; name: string; source_type: "text" | "url" | "file"; status: "pending" | "processing" | "ready" | "error"; error_message: string; document_count: number; chunk_count: number; created_at: string; updated_at: string | null; source_url: string; last_refresh_at: string | null; last_refresh_status: "success" | "not_modified" | "error"; last_refresh_error: string; refresh_...>
```

<sub>`PATCH /api/projects/{project_id}/business_knowledge/sources/{id}/` · `business_knowledge_sources_partial_update`</sub>

## `posthog.businessKnowledgeSourcesRefreshCreate`

```ts
posthog.businessKnowledgeSourcesRefreshCreate(): Promise<{ id: string; team_id: number; name: string; source_type: "text" | "url" | "file"; status: "pending" | "processing" | "ready" | "error"; error_message: string; document_count: number; chunk_count: number; created_at: string; updated_at: string | null; source_url: string; last_refresh_at: string | null; last_refresh_status: "success" | "not_modified" | "error"; last_refresh_error: string; refresh_...>
```

<sub>`POST /api/projects/{project_id}/business_knowledge/sources/{id}/refresh/` · `business_knowledge_sources_refresh_create`</sub>

## `posthog.businessKnowledgeSourcesTextRetrieve`

```ts
posthog.businessKnowledgeSourcesTextRetrieve(): Promise<{ text?: string }>
```

<sub>`GET /api/projects/{project_id}/business_knowledge/sources/{id}/text/` · `business_knowledge_sources_text_retrieve`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

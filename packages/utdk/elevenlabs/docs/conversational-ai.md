# Conversational AI

7 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.postKnowledgeBaseMoveRoute`

Move Entity To Folder

```ts
elevenlabs.postKnowledgeBaseMoveRoute(input: {
  /** The folder to move the entities to. If not set, the entities will be moved to the root folder. */
  move_to?: string | null;
  /** The id of a document from the knowledge base. This is returned on document addition. */
  document_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/convai/knowledge-base/{document_id}/move` · `post_knowledge_base_move_route`</sub>

## `elevenlabs.postKnowledgeBaseBulkMoveRoute`

Bulk Move Entities To Folder

```ts
elevenlabs.postKnowledgeBaseBulkMoveRoute(input: {
  /** The ids of documents or folders from the knowledge base. */
  document_ids: (string)[];
  /** The folder to move the entities to. If not set, the entities will be moved to the root folder. */
  move_to?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/convai/knowledge-base/bulk-move` · `post_knowledge_base_bulk_move_route`</sub>

## `elevenlabs.listCrawlJobsRoute`

List Ongoing And Recent Crawl Jobs Created By A User

```ts
elevenlabs.listCrawlJobsRoute(input: {
  /** Ids of additional crawl jobs to retrieve */
  include_job_ids?: (string)[] | null;
  /** How many documents to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListCrawlJobsResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/crawl` · `list_crawl_jobs_route`</sub>

## `elevenlabs.createCrawlJobRoute`

Create Crawl Job

```ts
elevenlabs.createCrawlJobRoute(input: {
  /** URL to a page of documentation that the agent will have access to in order to interact with users. */
  url: string;
  /** Maximum depth for crawling (1-5), defaults to 3. */
  max_depth?: number;
  /** Maximum number of pages to crawl (1-10,000), defaults to 1000. */
  max_pages?: number;
  /** If set, only URLs that match this pattern are included. */
  pattern?: string | null;
  /** List of URLs to crawl from sitemap (optional, overrides automatic URL discovery). */
  sitemap_urls?: (string)[] | null;
  /** If set, the created document or folder will be placed inside the given folder. */
  parent_folder_id?: string | null;
  /** Whether to enable auto-sync for this URL document. */
  enable_auto_sync?: boolean;
  /** Whether to automatically remove the document if the URL becomes unavailable. Only applicable when auto-sync is enabled. */
  auto_remove?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreateCrawlJobResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/crawl` · `create_crawl_job_route`</sub>

## `elevenlabs.getCrawlJobRoute`

Get Crawl Job Details

```ts
elevenlabs.getCrawlJobRoute(input: {
  /** The id of the crawl job to retrieve */
  crawl_job_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetCrawlJobResponseModel>
```

<sub>`GET /v1/convai/knowledge-base/crawl/{crawl_job_id}` · `get_crawl_job_route`</sub>

## `elevenlabs.cancelCrawlJobRoute`

Cancel Crawl Job

```ts
elevenlabs.cancelCrawlJobRoute(input: {
  /** The id of the crawl job to retrieve */
  crawl_job_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<unknown>
```

<sub>`POST /v1/convai/knowledge-base/crawl/{crawl_job_id}/cancel` · `cancel_crawl_job_route`</sub>

## `elevenlabs.createFolderRoute`

Create Folder

```ts
elevenlabs.createFolderRoute(input: {
  /** A custom, human-readable name for the document. */
  name: string;
  /** If set, the created document or folder will be placed inside the given folder. */
  parent_folder_id?: string | null;
  /** Whether to enable auto-sync for this URL document. */
  enable_auto_sync?: boolean;
  /** Whether to automatically remove the document if the URL becomes unavailable. Only applicable when auto-sync is enabled. */
  auto_remove?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddKnowledgeBaseResponseModel>
```

<sub>`POST /v1/convai/knowledge-base/folder` · `create_folder_route`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

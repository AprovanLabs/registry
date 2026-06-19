# Search

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.search.code`

- **HTTP**: `GET /search/code`
- **What it does**: Search code
- **OpenAPI operationId**: `search/code`
- **Path params**: None
- **Query params**: `q`, `sort`, `order`
- **Response codes**: `200`, `304`, `403`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ q: string; sort?: "indexed"; order?: "desc" | "asc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ name: string; path: string; sha: string; url: string; git_url: string; html_url: string; repository: { id: number; node_id: string; name: string; full_name: ...`
- OpenAPI response codes: `200`, `304`, `403`, `422`, `503`

```ts
import github from "@utdk/github";

type SearchCodeInput = Parameters<typeof github.search.code> extends [infer T, ...unknown[]] ? T : undefined;
type SearchCodeOutput = Awaited<ReturnType<typeof github.search.code>>;

const input: SearchCodeInput = {} as { q: string; sort?: "indexed"; order?: "desc" | "asc"; per_page?: number; page?: number };
const result: SearchCodeOutput = await github.search.code(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ name: string; path: string; sha: string; url: string; git_url: string; html_url: string; repository: { id: number; node_id: string; name: string; full_name: ...
```

### `github.search.commits`

- **HTTP**: `GET /search/commits`
- **What it does**: Search commits
- **OpenAPI operationId**: `search/commits`
- **Path params**: None
- **Query params**: `q`, `sort`
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ q: string; sort?: "author-date" | "committer-date"; order?: "desc" | "asc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ url: string; sha: string; html_url: string; comments_url: string; commit: { author: { name: string; email: string; date: string }; committer: { name?: string...`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type SearchCommitsInput = Parameters<typeof github.search.commits> extends [infer T, ...unknown[]] ? T : undefined;
type SearchCommitsOutput = Awaited<ReturnType<typeof github.search.commits>>;

const input: SearchCommitsInput = {} as { q: string; sort?: "author-date" | "committer-date"; order?: "desc" | "asc"; per_page?: number; page?: number };
const result: SearchCommitsOutput = await github.search.commits(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ url: string; sha: string; html_url: string; comments_url: string; commit: { author: { name: string; email: string; date: string }; committer: { name?: string...
```

### `github.search.issuesAndPullRequests`

- **HTTP**: `GET /search/issues`
- **What it does**: Search issues and pull requests
- **OpenAPI operationId**: `search/issues-and-pull-requests`
- **Path params**: None
- **Query params**: `q`, `sort`
- **Response codes**: `200`, `304`, `401`, `403`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ q: string; sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated"; order?: "desc" | "asc"; per_page?: number; page?: number; advanced_search?: string; search_type?: "semantic" | "hybrid" }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; id: number; node_id: string; number: num...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `422`, `503`

```ts
import github from "@utdk/github";

type SearchIssuesAndPullRequestsInput = Parameters<typeof github.search.issuesAndPullRequests> extends [infer T, ...unknown[]] ? T : undefined;
type SearchIssuesAndPullRequestsOutput = Awaited<ReturnType<typeof github.search.issuesAndPullRequests>>;

const input: SearchIssuesAndPullRequestsInput = {} as { q: string; sort?: "comments" | "reactions" | "reactions-+1" | "reactions--1" | "reactions-smile" | "reactions-thinking_face" | "reactions-heart" | "reactions-tada" | "interactions" | "created" | "updated"; order?: "desc" | "asc"; per_page?: number; page?: number; advanced_search?: string; search_type?: "semantic" | "hybrid" };
const result: SearchIssuesAndPullRequestsOutput = await github.search.issuesAndPullRequests(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; id: number; node_id: string; number: num...
```

### `github.search.labels`

- **HTTP**: `GET /search/labels`
- **What it does**: Search labels
- **OpenAPI operationId**: `search/labels`
- **Path params**: None
- **Query params**: `repository_id`, `q`, `sort`
- **Response codes**: `200`, `304`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ repository_id: number; q: string; sort?: "created" | "updated"; order?: "desc" | "asc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ id: number; node_id: string; url: string; name: string; color: string; default: boolean; description: string | null; score: number; text_matches?: ({ object_...`
- OpenAPI response codes: `200`, `304`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type SearchLabelsInput = Parameters<typeof github.search.labels> extends [infer T, ...unknown[]] ? T : undefined;
type SearchLabelsOutput = Awaited<ReturnType<typeof github.search.labels>>;

const input: SearchLabelsInput = {} as { repository_id: number; q: string; sort?: "created" | "updated"; order?: "desc" | "asc"; per_page?: number; page?: number };
const result: SearchLabelsOutput = await github.search.labels(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ id: number; node_id: string; url: string; name: string; color: string; default: boolean; description: string | null; score: number; text_matches?: ({ object_...
```

### `github.search.repos`

- **HTTP**: `GET /search/repositories`
- **What it does**: Search repositories
- **OpenAPI operationId**: `search/repos`
- **Path params**: None
- **Query params**: `q`, `sort`
- **Response codes**: `200`, `304`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ q: string; sort?: "stars" | "forks" | "help-wanted-issues" | "updated"; order?: "desc" | "asc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: strin...`
- OpenAPI response codes: `200`, `304`, `422`, `503`

```ts
import github from "@utdk/github";

type SearchReposInput = Parameters<typeof github.search.repos> extends [infer T, ...unknown[]] ? T : undefined;
type SearchReposOutput = Awaited<ReturnType<typeof github.search.repos>>;

const input: SearchReposInput = {} as { q: string; sort?: "stars" | "forks" | "help-wanted-issues" | "updated"; order?: "desc" | "asc"; per_page?: number; page?: number };
const result: SearchReposOutput = await github.search.repos(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: strin...
```

### `github.search.topics`

- **HTTP**: `GET /search/topics`
- **What it does**: Search topics
- **OpenAPI operationId**: `search/topics`
- **Path params**: None
- **Query params**: `q`
- **Response codes**: `200`, `304`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ q: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ name: string; display_name: string | null; short_description: string | null; description: string | null; created_by: string | null; released: string | null; ...`
- OpenAPI response codes: `200`, `304`

```ts
import github from "@utdk/github";

type SearchTopicsInput = Parameters<typeof github.search.topics> extends [infer T, ...unknown[]] ? T : undefined;
type SearchTopicsOutput = Awaited<ReturnType<typeof github.search.topics>>;

const input: SearchTopicsInput = {} as { q: string; per_page?: number; page?: number };
const result: SearchTopicsOutput = await github.search.topics(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ name: string; display_name: string | null; short_description: string | null; description: string | null; created_by: string | null; released: string | null; ...
```

### `github.search.users`

- **HTTP**: `GET /search/users`
- **What it does**: Search users
- **OpenAPI operationId**: `search/users`
- **Path params**: None
- **Query params**: `q`, `sort`
- **Response codes**: `200`, `304`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ q: string; sort?: "followers" | "repositories" | "joined"; order?: "desc" | "asc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; incomplete_results: boolean; items: ({ login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; subscriptio...`
- OpenAPI response codes: `200`, `304`, `422`, `503`

```ts
import github from "@utdk/github";

type SearchUsersInput = Parameters<typeof github.search.users> extends [infer T, ...unknown[]] ? T : undefined;
type SearchUsersOutput = Awaited<ReturnType<typeof github.search.users>>;

const input: SearchUsersInput = {} as { q: string; sort?: "followers" | "repositories" | "joined"; order?: "desc" | "asc"; per_page?: number; page?: number };
const result: SearchUsersOutput = await github.search.users(input);

// Result shape (from schema): { total_count: number; incomplete_results: boolean; items: ({ login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; subscriptio...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

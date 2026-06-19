# Pulls

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.pulls.list`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls`
- **What it does**: List pull requests
- **OpenAPI operationId**: `pulls/list`
- **Path params**: None
- **Query params**: `state`, `head`, `base`, `sort`, `direction`
- **Response codes**: `200`, `304`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; state?: "open" | "closed" | "all"; head?: string; base?: string; sort?: "created" | "updated" | "popularity" | "long-running"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; ...`
- OpenAPI response codes: `200`, `304`, `422`

```ts
import github from "@utdk/github";

type PullsListInput = Parameters<typeof github.pulls.list> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListOutput = Awaited<ReturnType<typeof github.pulls.list>>;

const input: PullsListInput = {} as { owner: string; repo: string; state?: "open" | "closed" | "all"; head?: string; base?: string; sort?: "created" | "updated" | "popularity" | "long-running"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: PullsListOutput = await github.pulls.list(input);

// Result shape (from schema): ({ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; ...
```

### `github.pulls.create`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls`
- **What it does**: Create a pull request
- **OpenAPI operationId**: `pulls/create`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string; head: string; head_repo?: string; base: string; body?: string; maintainer_can_modify?: boolean; draft?: boolean; issue?: number; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type PullsCreateInput = Parameters<typeof github.pulls.create> extends [infer T, ...unknown[]] ? T : undefined;
type PullsCreateOutput = Awaited<ReturnType<typeof github.pulls.create>>;

const input: PullsCreateInput = {} as { title?: string; head: string; head_repo?: string; base: string; body?: string; maintainer_can_modify?: boolean; draft?: boolean; issue?: number; owner: string; repo: string };
const result: PullsCreateOutput = await github.pulls.create(input);

// Result shape (from schema): { url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...
```

### `github.pulls.get`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}`
- **What it does**: Get a pull request
- **OpenAPI operationId**: `pulls/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `404`, `406`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...`
- OpenAPI response codes: `200`, `304`, `404`, `406`, `500`, `503`

```ts
import github from "@utdk/github";

type PullsGetInput = Parameters<typeof github.pulls.get> extends [infer T, ...unknown[]] ? T : undefined;
type PullsGetOutput = Awaited<ReturnType<typeof github.pulls.get>>;

const input: PullsGetInput = {} as { owner: string; repo: string; pull_number: number };
const result: PullsGetOutput = await github.pulls.get(input);

// Result shape (from schema): { url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...
```

### `github.pulls.update`

- **HTTP**: `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
- **What it does**: Update a pull request
- **OpenAPI operationId**: `pulls/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string; body?: string; state?: "open" | "closed"; base?: string; maintainer_can_modify?: boolean; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...`
- OpenAPI response codes: `200`, `403`, `422`

```ts
import github from "@utdk/github";

type PullsUpdateInput = Parameters<typeof github.pulls.update> extends [infer T, ...unknown[]] ? T : undefined;
type PullsUpdateOutput = Awaited<ReturnType<typeof github.pulls.update>>;

const input: PullsUpdateInput = {} as { title?: string; body?: string; state?: "open" | "closed"; base?: string; maintainer_can_modify?: boolean; owner: string; repo: string; pull_number: number };
const result: PullsUpdateOutput = await github.pulls.update(input);

// Result shape (from schema): { url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...
```

### `github.pulls.listReviewComments`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`
- **What it does**: List review comments on a pull request
- **OpenAPI operationId**: `pulls/list-review-comments`
- **Path params**: None
- **Query params**: `direction`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; sort?: "created" | "updated"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PullsListReviewCommentsInput = Parameters<typeof github.pulls.listReviewComments> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListReviewCommentsOutput = Awaited<ReturnType<typeof github.pulls.listReviewComments>>;

const input: PullsListReviewCommentsInput = {} as { owner: string; repo: string; pull_number: number; sort?: "created" | "updated"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number };
const result: PullsListReviewCommentsOutput = await github.pulls.listReviewComments(input);

// Result shape (from schema): ({ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply...
```

### `github.pulls.createReviewComment`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`
- **What it does**: Create a review comment for a pull request
- **OpenAPI operationId**: `pulls/create-review-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; commit_id: string; path: string; position?: number; side?: "LEFT" | "RIGHT"; line?: number; start_line?: number; start_side?: "LEFT" | "RIGHT" | "side"; in_reply_to?: number; subject_type?: "line" | "file"; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type PullsCreateReviewCommentInput = Parameters<typeof github.pulls.createReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type PullsCreateReviewCommentOutput = Awaited<ReturnType<typeof github.pulls.createReviewComment>>;

const input: PullsCreateReviewCommentInput = {} as { body: string; commit_id: string; path: string; position?: number; side?: "LEFT" | "RIGHT"; line?: number; start_line?: number; start_side?: "LEFT" | "RIGHT" | "side"; in_reply_to?: number; subject_type?: "line" | "file"; owner: string; repo: string; pull_number: number };
const result: PullsCreateReviewCommentOutput = await github.pulls.createReviewComment(input);

// Result shape (from schema): { url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...
```

### `github.pulls.createReplyForReviewComment`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`
- **What it does**: Create a reply for a review comment
- **OpenAPI operationId**: `pulls/create-reply-for-review-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; owner: string; repo: string; pull_number: number; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...`
- OpenAPI response codes: `201`, `404`

```ts
import github from "@utdk/github";

type PullsCreateReplyForReviewCommentInput = Parameters<typeof github.pulls.createReplyForReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type PullsCreateReplyForReviewCommentOutput = Awaited<ReturnType<typeof github.pulls.createReplyForReviewComment>>;

const input: PullsCreateReplyForReviewCommentInput = {} as { body: string; owner: string; repo: string; pull_number: number; comment_id: number };
const result: PullsCreateReplyForReviewCommentOutput = await github.pulls.createReplyForReviewComment(input);

// Result shape (from schema): { url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...
```

### `github.pulls.listCommits`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`
- **What it does**: List commits on a pull request
- **OpenAPI operationId**: `pulls/list-commits`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; d...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PullsListCommitsInput = Parameters<typeof github.pulls.listCommits> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListCommitsOutput = Awaited<ReturnType<typeof github.pulls.listCommits>>;

const input: PullsListCommitsInput = {} as { owner: string; repo: string; pull_number: number; per_page?: number; page?: number };
const result: PullsListCommitsOutput = await github.pulls.listCommits(input);

// Result shape (from schema): ({ url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; d...
```

### `github.pulls.listFiles`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/files`
- **What it does**: List pull requests files
- **OpenAPI operationId**: `pulls/list-files`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ sha: string | null; filename: string; status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged"; additions: number; deletions: number; changes: number; blob_url: string; raw_url: strin...`
- OpenAPI response codes: `200`, `422`, `500`, `503`

```ts
import github from "@utdk/github";

type PullsListFilesInput = Parameters<typeof github.pulls.listFiles> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListFilesOutput = Awaited<ReturnType<typeof github.pulls.listFiles>>;

const input: PullsListFilesInput = {} as { owner: string; repo: string; pull_number: number; per_page?: number; page?: number };
const result: PullsListFilesOutput = await github.pulls.listFiles(input);

// Result shape (from schema): ({ sha: string | null; filename: string; status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged"; additions: number; deletions: number; changes: number; blob_url: string; raw_url: strin...
```

### `github.pulls.checkIfMerged`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`
- **What it does**: Check if a pull request has been merged
- **OpenAPI operationId**: `pulls/check-if-merged`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type PullsCheckIfMergedInput = Parameters<typeof github.pulls.checkIfMerged> extends [infer T, ...unknown[]] ? T : undefined;
type PullsCheckIfMergedOutput = Awaited<ReturnType<typeof github.pulls.checkIfMerged>>;

const input: PullsCheckIfMergedInput = {} as { owner: string; repo: string; pull_number: number };
const result: PullsCheckIfMergedOutput = await github.pulls.checkIfMerged(input);

// Result shape (from schema): unknown
```

### `github.pulls.merge`

- **HTTP**: `PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`
- **What it does**: Merge a pull request
- **OpenAPI operationId**: `pulls/merge`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `405`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ commit_title?: string; commit_message?: string; sha?: string; merge_method?: "merge" | "squash" | "rebase"; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ sha: string; merged: boolean; message: string }`
- OpenAPI response codes: `200`, `403`, `404`, `405`, `409`, `422`

```ts
import github from "@utdk/github";

type PullsMergeInput = Parameters<typeof github.pulls.merge> extends [infer T, ...unknown[]] ? T : undefined;
type PullsMergeOutput = Awaited<ReturnType<typeof github.pulls.merge>>;

const input: PullsMergeInput = {} as { commit_title?: string; commit_message?: string; sha?: string; merge_method?: "merge" | "squash" | "rebase"; owner: string; repo: string; pull_number: number };
const result: PullsMergeOutput = await github.pulls.merge(input);

// Result shape (from schema): { sha: string; merged: boolean; message: string }
```

### `github.pulls.removeRequestedReviewers`

- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
- **What it does**: Remove requested reviewers from a pull request
- **OpenAPI operationId**: `pulls/remove-requested-reviewers`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ reviewers: (string)[]; team_reviewers?: (string)[]; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type PullsRemoveRequestedReviewersInput = Parameters<typeof github.pulls.removeRequestedReviewers> extends [infer T, ...unknown[]] ? T : undefined;
type PullsRemoveRequestedReviewersOutput = Awaited<ReturnType<typeof github.pulls.removeRequestedReviewers>>;

const input: PullsRemoveRequestedReviewersInput = {} as { reviewers: (string)[]; team_reviewers?: (string)[]; owner: string; repo: string; pull_number: number };
const result: PullsRemoveRequestedReviewersOutput = await github.pulls.removeRequestedReviewers(input);

// Result shape (from schema): { url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...
```

### `github.pulls.listRequestedReviewers`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
- **What it does**: Get all requested reviewers for a pull request
- **OpenAPI operationId**: `pulls/list-requested-reviewers`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ users: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PullsListRequestedReviewersInput = Parameters<typeof github.pulls.listRequestedReviewers> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListRequestedReviewersOutput = Awaited<ReturnType<typeof github.pulls.listRequestedReviewers>>;

const input: PullsListRequestedReviewersInput = {} as { owner: string; repo: string; pull_number: number };
const result: PullsListRequestedReviewersOutput = await github.pulls.listRequestedReviewers(input);

// Result shape (from schema): { users: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: s...
```

### `github.pulls.requestReviewers`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
- **What it does**: Request reviewers for a pull request
- **OpenAPI operationId**: `pulls/request-reviewers`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: unknown | unknown; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type PullsRequestReviewersInput = Parameters<typeof github.pulls.requestReviewers> extends [infer T, ...unknown[]] ? T : undefined;
type PullsRequestReviewersOutput = Awaited<ReturnType<typeof github.pulls.requestReviewers>>;

const input: PullsRequestReviewersInput = {} as { body?: unknown | unknown; owner: string; repo: string; pull_number: number };
const result: PullsRequestReviewersOutput = await github.pulls.requestReviewers(input);

// Result shape (from schema): { url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; s...
```

### `github.pulls.listReviews`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`
- **What it does**: List reviews for a pull request
- **OpenAPI operationId**: `pulls/list-reviews`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PullsListReviewsInput = Parameters<typeof github.pulls.listReviews> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListReviewsOutput = Awaited<ReturnType<typeof github.pulls.listReviews>>;

const input: PullsListReviewsInput = {} as { owner: string; repo: string; pull_number: number; per_page?: number; page?: number };
const result: PullsListReviewsOutput = await github.pulls.listReviews(input);

// Result shape (from schema): ({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.pulls.createReview`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`
- **What it does**: Create a review for a pull request
- **OpenAPI operationId**: `pulls/create-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ commit_id?: string; body?: string; event?: "APPROVE" | "REQUEST_CHANGES" | "COMMENT"; comments?: ({ path: string; position?: number; body: string; line?: number; side?: string; start_line?: number; start_side?: string })[]; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `403`, `422`

```ts
import github from "@utdk/github";

type PullsCreateReviewInput = Parameters<typeof github.pulls.createReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsCreateReviewOutput = Awaited<ReturnType<typeof github.pulls.createReview>>;

const input: PullsCreateReviewInput = {} as { commit_id?: string; body?: string; event?: "APPROVE" | "REQUEST_CHANGES" | "COMMENT"; comments?: ({ path: string; position?: number; body: string; line?: number; side?: string; start_line?: number; start_side?: string })[]; owner: string; repo: string; pull_number: number };
const result: PullsCreateReviewOutput = await github.pulls.createReview(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.pulls.deletePendingReview`

- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`
- **What it does**: Delete a pending review for a pull request
- **OpenAPI operationId**: `pulls/delete-pending-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; review_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type PullsDeletePendingReviewInput = Parameters<typeof github.pulls.deletePendingReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsDeletePendingReviewOutput = Awaited<ReturnType<typeof github.pulls.deletePendingReview>>;

const input: PullsDeletePendingReviewInput = {} as { owner: string; repo: string; pull_number: number; review_id: number };
const result: PullsDeletePendingReviewOutput = await github.pulls.deletePendingReview(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.pulls.getReview`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`
- **What it does**: Get a review for a pull request
- **OpenAPI operationId**: `pulls/get-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; review_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type PullsGetReviewInput = Parameters<typeof github.pulls.getReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsGetReviewOutput = Awaited<ReturnType<typeof github.pulls.getReview>>;

const input: PullsGetReviewInput = {} as { owner: string; repo: string; pull_number: number; review_id: number };
const result: PullsGetReviewOutput = await github.pulls.getReview(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.pulls.updateReview`

- **HTTP**: `PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`
- **What it does**: Update a review for a pull request
- **OpenAPI operationId**: `pulls/update-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; owner: string; repo: string; pull_number: number; review_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type PullsUpdateReviewInput = Parameters<typeof github.pulls.updateReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsUpdateReviewOutput = Awaited<ReturnType<typeof github.pulls.updateReview>>;

const input: PullsUpdateReviewInput = {} as { body: string; owner: string; repo: string; pull_number: number; review_id: number };
const result: PullsUpdateReviewOutput = await github.pulls.updateReview(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.pulls.listCommentsForReview`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`
- **What it does**: List comments for a pull request review
- **OpenAPI operationId**: `pulls/list-comments-for-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pull_number: number; review_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position: number | null; original_position: number; commit_id: string; original_commit_id: string; in_...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type PullsListCommentsForReviewInput = Parameters<typeof github.pulls.listCommentsForReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListCommentsForReviewOutput = Awaited<ReturnType<typeof github.pulls.listCommentsForReview>>;

const input: PullsListCommentsForReviewInput = {} as { owner: string; repo: string; pull_number: number; review_id: number; per_page?: number; page?: number };
const result: PullsListCommentsForReviewOutput = await github.pulls.listCommentsForReview(input);

// Result shape (from schema): ({ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position: number | null; original_position: number; commit_id: string; original_commit_id: string; in_...
```

### `github.pulls.dismissReview`

- **HTTP**: `PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`
- **What it does**: Dismiss a review for a pull request
- **OpenAPI operationId**: `pulls/dismiss-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ message: string; event?: "DISMISS"; owner: string; repo: string; pull_number: number; review_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type PullsDismissReviewInput = Parameters<typeof github.pulls.dismissReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsDismissReviewOutput = Awaited<ReturnType<typeof github.pulls.dismissReview>>;

const input: PullsDismissReviewInput = {} as { message: string; event?: "DISMISS"; owner: string; repo: string; pull_number: number; review_id: number };
const result: PullsDismissReviewOutput = await github.pulls.dismissReview(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.pulls.submitReview`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`
- **What it does**: Submit a review for a pull request
- **OpenAPI operationId**: `pulls/submit-review`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: string; event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT"; owner: string; repo: string; pull_number: number; review_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type PullsSubmitReviewInput = Parameters<typeof github.pulls.submitReview> extends [infer T, ...unknown[]] ? T : undefined;
type PullsSubmitReviewOutput = Awaited<ReturnType<typeof github.pulls.submitReview>>;

const input: PullsSubmitReviewInput = {} as { body?: string; event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT"; owner: string; repo: string; pull_number: number; review_id: number };
const result: PullsSubmitReviewOutput = await github.pulls.submitReview(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.pulls.updateBranch`

- **HTTP**: `PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`
- **What it does**: Update a pull request branch
- **OpenAPI operationId**: `pulls/update-branch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ expected_head_sha?: string; owner: string; repo: string; pull_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `403`, `422`

```ts
import github from "@utdk/github";

type PullsUpdateBranchInput = Parameters<typeof github.pulls.updateBranch> extends [infer T, ...unknown[]] ? T : undefined;
type PullsUpdateBranchOutput = Awaited<ReturnType<typeof github.pulls.updateBranch>>;

const input: PullsUpdateBranchInput = {} as { expected_head_sha?: string; owner: string; repo: string; pull_number: number };
const result: PullsUpdateBranchOutput = await github.pulls.updateBranch(input);

// Result shape (from schema): unknown
```

### `github.pulls.listReviewCommentsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/comments`
- **What it does**: List review comments in a repository
- **OpenAPI operationId**: `pulls/list-review-comments-for-repo`
- **Path params**: None
- **Query params**: `sort`, `direction`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sort?: "created" | "updated" | "created_at"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PullsListReviewCommentsForRepoInput = Parameters<typeof github.pulls.listReviewCommentsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type PullsListReviewCommentsForRepoOutput = Awaited<ReturnType<typeof github.pulls.listReviewCommentsForRepo>>;

const input: PullsListReviewCommentsForRepoInput = {} as { owner: string; repo: string; sort?: "created" | "updated" | "created_at"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number };
const result: PullsListReviewCommentsForRepoOutput = await github.pulls.listReviewCommentsForRepo(input);

// Result shape (from schema): ({ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply...
```

### `github.pulls.deleteReviewComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`
- **What it does**: Delete a review comment for a pull request
- **OpenAPI operationId**: `pulls/delete-review-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type PullsDeleteReviewCommentInput = Parameters<typeof github.pulls.deleteReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type PullsDeleteReviewCommentOutput = Awaited<ReturnType<typeof github.pulls.deleteReviewComment>>;

const input: PullsDeleteReviewCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: PullsDeleteReviewCommentOutput = await github.pulls.deleteReviewComment(input);

// Result shape (from schema): unknown
```

### `github.pulls.getReviewComment`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`
- **What it does**: Get a review comment for a pull request
- **OpenAPI operationId**: `pulls/get-review-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type PullsGetReviewCommentInput = Parameters<typeof github.pulls.getReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type PullsGetReviewCommentOutput = Awaited<ReturnType<typeof github.pulls.getReviewComment>>;

const input: PullsGetReviewCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: PullsGetReviewCommentOutput = await github.pulls.getReviewComment(input);

// Result shape (from schema): { url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...
```

### `github.pulls.updateReviewComment`

- **HTTP**: `PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`
- **What it does**: Update a review comment for a pull request
- **OpenAPI operationId**: `pulls/update-review-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type PullsUpdateReviewCommentInput = Parameters<typeof github.pulls.updateReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type PullsUpdateReviewCommentOutput = Awaited<ReturnType<typeof github.pulls.updateReviewComment>>;

const input: PullsUpdateReviewCommentInput = {} as { body: string; owner: string; repo: string; comment_id: number };
const result: PullsUpdateReviewCommentOutput = await github.pulls.updateReviewComment(input);

// Result shape (from schema): { url: string; pull_request_review_id: number | null; id: number; node_id: string; diff_hunk: string; path: string; position?: number; original_position?: number; commit_id: string; original_commit_id: string; in_reply_...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

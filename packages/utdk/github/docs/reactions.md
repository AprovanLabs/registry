# Reactions

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.reactions.listForCommitComment`

- **HTTP**: `GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`
- **What it does**: List reactions for a commit comment
- **OpenAPI operationId**: `reactions/list-for-commit-comment`
- **Path params**: None
- **Query params**: `content`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReactionsListForCommitCommentInput = Parameters<typeof github.reactions.listForCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsListForCommitCommentOutput = Awaited<ReturnType<typeof github.reactions.listForCommitComment>>;

const input: ReactionsListForCommitCommentInput = {} as { owner: string; repo: string; comment_id: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number };
const result: ReactionsListForCommitCommentOutput = await github.reactions.listForCommitComment(input);

// Result shape (from schema): ({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.reactions.createForCommitComment`

- **HTTP**: `POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`
- **What it does**: Create reaction for a commit comment
- **OpenAPI operationId**: `reactions/create-for-commit-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `201`, `422`

```ts
import github from "@utdk/github";

type ReactionsCreateForCommitCommentInput = Parameters<typeof github.reactions.createForCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsCreateForCommitCommentOutput = Awaited<ReturnType<typeof github.reactions.createForCommitComment>>;

const input: ReactionsCreateForCommitCommentInput = {} as { content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; comment_id: number };
const result: ReactionsCreateForCommitCommentOutput = await github.reactions.createForCommitComment(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.reactions.deleteForCommitComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`
- **What it does**: Delete a commit comment reaction
- **OpenAPI operationId**: `reactions/delete-for-commit-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number; reaction_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReactionsDeleteForCommitCommentInput = Parameters<typeof github.reactions.deleteForCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsDeleteForCommitCommentOutput = Awaited<ReturnType<typeof github.reactions.deleteForCommitComment>>;

const input: ReactionsDeleteForCommitCommentInput = {} as { owner: string; repo: string; comment_id: number; reaction_id: number };
const result: ReactionsDeleteForCommitCommentOutput = await github.reactions.deleteForCommitComment(input);

// Result shape (from schema): unknown
```

### `github.reactions.listForIssue`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`
- **What it does**: List reactions for an issue
- **OpenAPI operationId**: `reactions/list-for-issue`
- **Path params**: None
- **Query params**: `content`
- **Response codes**: `200`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `404`, `410`

```ts
import github from "@utdk/github";

type ReactionsListForIssueInput = Parameters<typeof github.reactions.listForIssue> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsListForIssueOutput = Awaited<ReturnType<typeof github.reactions.listForIssue>>;

const input: ReactionsListForIssueInput = {} as { owner: string; repo: string; issue_number: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number };
const result: ReactionsListForIssueOutput = await github.reactions.listForIssue(input);

// Result shape (from schema): ({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.reactions.createForIssue`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`
- **What it does**: Create reaction for an issue
- **OpenAPI operationId**: `reactions/create-for-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `201`, `422`

```ts
import github from "@utdk/github";

type ReactionsCreateForIssueInput = Parameters<typeof github.reactions.createForIssue> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsCreateForIssueOutput = Awaited<ReturnType<typeof github.reactions.createForIssue>>;

const input: ReactionsCreateForIssueInput = {} as { content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; issue_number: number };
const result: ReactionsCreateForIssueOutput = await github.reactions.createForIssue(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.reactions.deleteForIssue`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`
- **What it does**: Delete an issue reaction
- **OpenAPI operationId**: `reactions/delete-for-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; reaction_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReactionsDeleteForIssueInput = Parameters<typeof github.reactions.deleteForIssue> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsDeleteForIssueOutput = Awaited<ReturnType<typeof github.reactions.deleteForIssue>>;

const input: ReactionsDeleteForIssueInput = {} as { owner: string; repo: string; issue_number: number; reaction_id: number };
const result: ReactionsDeleteForIssueOutput = await github.reactions.deleteForIssue(input);

// Result shape (from schema): unknown
```

### `github.reactions.listForIssueComment`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`
- **What it does**: List reactions for an issue comment
- **OpenAPI operationId**: `reactions/list-for-issue-comment`
- **Path params**: None
- **Query params**: `content`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReactionsListForIssueCommentInput = Parameters<typeof github.reactions.listForIssueComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsListForIssueCommentOutput = Awaited<ReturnType<typeof github.reactions.listForIssueComment>>;

const input: ReactionsListForIssueCommentInput = {} as { owner: string; repo: string; comment_id: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number };
const result: ReactionsListForIssueCommentOutput = await github.reactions.listForIssueComment(input);

// Result shape (from schema): ({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.reactions.createForIssueComment`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`
- **What it does**: Create reaction for an issue comment
- **OpenAPI operationId**: `reactions/create-for-issue-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `201`, `422`

```ts
import github from "@utdk/github";

type ReactionsCreateForIssueCommentInput = Parameters<typeof github.reactions.createForIssueComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsCreateForIssueCommentOutput = Awaited<ReturnType<typeof github.reactions.createForIssueComment>>;

const input: ReactionsCreateForIssueCommentInput = {} as { content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; comment_id: number };
const result: ReactionsCreateForIssueCommentOutput = await github.reactions.createForIssueComment(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.reactions.deleteForIssueComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`
- **What it does**: Delete an issue comment reaction
- **OpenAPI operationId**: `reactions/delete-for-issue-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number; reaction_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReactionsDeleteForIssueCommentInput = Parameters<typeof github.reactions.deleteForIssueComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsDeleteForIssueCommentOutput = Awaited<ReturnType<typeof github.reactions.deleteForIssueComment>>;

const input: ReactionsDeleteForIssueCommentInput = {} as { owner: string; repo: string; comment_id: number; reaction_id: number };
const result: ReactionsDeleteForIssueCommentOutput = await github.reactions.deleteForIssueComment(input);

// Result shape (from schema): unknown
```

### `github.reactions.listForPullRequestReviewComment`

- **HTTP**: `GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`
- **What it does**: List reactions for a pull request review comment
- **OpenAPI operationId**: `reactions/list-for-pull-request-review-comment`
- **Path params**: None
- **Query params**: `content`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReactionsListForPullRequestReviewCommentInput = Parameters<typeof github.reactions.listForPullRequestReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsListForPullRequestReviewCommentOutput = Awaited<ReturnType<typeof github.reactions.listForPullRequestReviewComment>>;

const input: ReactionsListForPullRequestReviewCommentInput = {} as { owner: string; repo: string; comment_id: number; content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number };
const result: ReactionsListForPullRequestReviewCommentOutput = await github.reactions.listForPullRequestReviewComment(input);

// Result shape (from schema): ({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.reactions.createForPullRequestReviewComment`

- **HTTP**: `POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`
- **What it does**: Create reaction for a pull request review comment
- **OpenAPI operationId**: `reactions/create-for-pull-request-review-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `201`, `422`

```ts
import github from "@utdk/github";

type ReactionsCreateForPullRequestReviewCommentInput = Parameters<typeof github.reactions.createForPullRequestReviewComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsCreateForPullRequestReviewCommentOutput = Awaited<ReturnType<typeof github.reactions.createForPullRequestReviewComment>>;

const input: ReactionsCreateForPullRequestReviewCommentInput = {} as { content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; comment_id: number };
const result: ReactionsCreateForPullRequestReviewCommentOutput = await github.reactions.createForPullRequestReviewComment(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.reactions.deleteForPullRequestComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`
- **What it does**: Delete a pull request comment reaction
- **OpenAPI operationId**: `reactions/delete-for-pull-request-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number; reaction_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReactionsDeleteForPullRequestCommentInput = Parameters<typeof github.reactions.deleteForPullRequestComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsDeleteForPullRequestCommentOutput = Awaited<ReturnType<typeof github.reactions.deleteForPullRequestComment>>;

const input: ReactionsDeleteForPullRequestCommentInput = {} as { owner: string; repo: string; comment_id: number; reaction_id: number };
const result: ReactionsDeleteForPullRequestCommentOutput = await github.reactions.deleteForPullRequestComment(input);

// Result shape (from schema): unknown
```

### `github.reactions.listForRelease`

- **HTTP**: `GET /repos/{owner}/{repo}/releases/{release_id}/reactions`
- **What it does**: List reactions for a release
- **OpenAPI operationId**: `reactions/list-for-release`
- **Path params**: None
- **Query params**: `content`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; release_id: number; content?: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReactionsListForReleaseInput = Parameters<typeof github.reactions.listForRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsListForReleaseOutput = Awaited<ReturnType<typeof github.reactions.listForRelease>>;

const input: ReactionsListForReleaseInput = {} as { owner: string; repo: string; release_id: number; content?: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes"; per_page?: number; page?: number };
const result: ReactionsListForReleaseOutput = await github.reactions.listForRelease(input);

// Result shape (from schema): ({ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.reactions.createForRelease`

- **HTTP**: `POST /repos/{owner}/{repo}/releases/{release_id}/reactions`
- **What it does**: Create reaction for a release
- **OpenAPI operationId**: `reactions/create-for-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ content: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; release_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...`
- OpenAPI response codes: `200`, `201`, `422`

```ts
import github from "@utdk/github";

type ReactionsCreateForReleaseInput = Parameters<typeof github.reactions.createForRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsCreateForReleaseOutput = Awaited<ReturnType<typeof github.reactions.createForRelease>>;

const input: ReactionsCreateForReleaseInput = {} as { content: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes"; owner: string; repo: string; release_id: number };
const result: ReactionsCreateForReleaseOutput = await github.reactions.createForRelease(input);

// Result shape (from schema): { id: number; node_id: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_ur...
```

### `github.reactions.deleteForRelease`

- **HTTP**: `DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}`
- **What it does**: Delete a release reaction
- **OpenAPI operationId**: `reactions/delete-for-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; release_id: number; reaction_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReactionsDeleteForReleaseInput = Parameters<typeof github.reactions.deleteForRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReactionsDeleteForReleaseOutput = Awaited<ReturnType<typeof github.reactions.deleteForRelease>>;

const input: ReactionsDeleteForReleaseInput = {} as { owner: string; repo: string; release_id: number; reaction_id: number };
const result: ReactionsDeleteForReleaseOutput = await github.reactions.deleteForRelease(input);

// Result shape (from schema): unknown
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

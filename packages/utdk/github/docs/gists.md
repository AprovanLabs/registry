# Gists

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.gists.list`

- **HTTP**: `GET /gists`
- **What it does**: List gists for the authenticated user
- **OpenAPI operationId**: `gists/list`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...`
- OpenAPI response codes: `200`, `304`, `403`

```ts
import github from "@utdk/github";

type GistsListInput = Parameters<typeof github.gists.list> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListOutput = Awaited<ReturnType<typeof github.gists.list>>;

const input: GistsListInput = {} as { since?: string; per_page?: number; page?: number };
const result: GistsListOutput = await github.gists.list(input);

// Result shape (from schema): ({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...
```

### `github.gists.create`

- **HTTP**: `POST /gists`
- **What it does**: Create a gist
- **OpenAPI operationId**: `gists/create`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ description?: string; files: { [key: string]: { content: string } | undefined }; public?: boolean | "true" | "false" }`
- Client transport options: None

**Outputs**

- Client return type: `{ forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...`
- OpenAPI response codes: `201`, `304`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type GistsCreateInput = Parameters<typeof github.gists.create> extends [infer T, ...unknown[]] ? T : undefined;
type GistsCreateOutput = Awaited<ReturnType<typeof github.gists.create>>;

const input: GistsCreateInput = {} as { description?: string; files: { [key: string]: { content: string } | undefined }; public?: boolean | "true" | "false" };
const result: GistsCreateOutput = await github.gists.create(input);

// Result shape (from schema): { forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...
```

### `github.gists.delete`

- **HTTP**: `DELETE /gists/{gist_id}`
- **What it does**: Delete a gist
- **OpenAPI operationId**: `gists/delete`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsDeleteInput = Parameters<typeof github.gists.delete> extends [infer T, ...unknown[]] ? T : undefined;
type GistsDeleteOutput = Awaited<ReturnType<typeof github.gists.delete>>;

const input: GistsDeleteInput = {} as { gist_id: string };
const result: GistsDeleteOutput = await github.gists.delete(input);

// Result shape (from schema): unknown
```

### `github.gists.get`

- **HTTP**: `GET /gists/{gist_id}`
- **What it does**: Get a gist
- **OpenAPI operationId**: `gists/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsGetInput = Parameters<typeof github.gists.get> extends [infer T, ...unknown[]] ? T : undefined;
type GistsGetOutput = Awaited<ReturnType<typeof github.gists.get>>;

const input: GistsGetInput = {} as { gist_id: string };
const result: GistsGetOutput = await github.gists.get(input);

// Result shape (from schema): { forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...
```

### `github.gists.update`

- **HTTP**: `PATCH /gists/{gist_id}`
- **What it does**: Update a gist
- **OpenAPI operationId**: `gists/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ description?: string; files?: { [key: string]: { content?: string; filename?: string | null } | null | undefined }; gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type GistsUpdateInput = Parameters<typeof github.gists.update> extends [infer T, ...unknown[]] ? T : undefined;
type GistsUpdateOutput = Awaited<ReturnType<typeof github.gists.update>>;

const input: GistsUpdateInput = {} as { description?: string; files?: { [key: string]: { content?: string; filename?: string | null } | null | undefined }; gist_id: string };
const result: GistsUpdateOutput = await github.gists.update(input);

// Result shape (from schema): { forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...
```

### `github.gists.getRevision`

- **HTTP**: `GET /gists/{gist_id}/{sha}`
- **What it does**: Get a gist revision
- **OpenAPI operationId**: `gists/get-revision`
- **Path params**: `sha`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string; sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type GistsGetRevisionInput = Parameters<typeof github.gists.getRevision> extends [infer T, ...unknown[]] ? T : undefined;
type GistsGetRevisionOutput = Awaited<ReturnType<typeof github.gists.getRevision>>;

const input: GistsGetRevisionInput = {} as { gist_id: string; sha: string };
const result: GistsGetRevisionOutput = await github.gists.getRevision(input);

// Result shape (from schema): { forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string;...
```

### `github.gists.listComments`

- **HTTP**: `GET /gists/{gist_id}/comments`
- **What it does**: List gist comments
- **OpenAPI operationId**: `gists/list-comments`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; ht...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsListCommentsInput = Parameters<typeof github.gists.listComments> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListCommentsOutput = Awaited<ReturnType<typeof github.gists.listComments>>;

const input: GistsListCommentsInput = {} as { gist_id: string; per_page?: number; page?: number };
const result: GistsListCommentsOutput = await github.gists.listComments(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; ht...
```

### `github.gists.createComment`

- **HTTP**: `POST /gists/{gist_id}/comments`
- **What it does**: Create a gist comment
- **OpenAPI operationId**: `gists/create-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; htm...`
- OpenAPI response codes: `201`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsCreateCommentInput = Parameters<typeof github.gists.createComment> extends [infer T, ...unknown[]] ? T : undefined;
type GistsCreateCommentOutput = Awaited<ReturnType<typeof github.gists.createComment>>;

const input: GistsCreateCommentInput = {} as { body: string; gist_id: string };
const result: GistsCreateCommentOutput = await github.gists.createComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; htm...
```

### `github.gists.deleteComment`

- **HTTP**: `DELETE /gists/{gist_id}/comments/{comment_id}`
- **What it does**: Delete a gist comment
- **OpenAPI operationId**: `gists/delete-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsDeleteCommentInput = Parameters<typeof github.gists.deleteComment> extends [infer T, ...unknown[]] ? T : undefined;
type GistsDeleteCommentOutput = Awaited<ReturnType<typeof github.gists.deleteComment>>;

const input: GistsDeleteCommentInput = {} as { gist_id: string; comment_id: number };
const result: GistsDeleteCommentOutput = await github.gists.deleteComment(input);

// Result shape (from schema): unknown
```

### `github.gists.getComment`

- **HTTP**: `GET /gists/{gist_id}/comments/{comment_id}`
- **What it does**: Get a gist comment
- **OpenAPI operationId**: `gists/get-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; htm...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsGetCommentInput = Parameters<typeof github.gists.getComment> extends [infer T, ...unknown[]] ? T : undefined;
type GistsGetCommentOutput = Awaited<ReturnType<typeof github.gists.getComment>>;

const input: GistsGetCommentInput = {} as { gist_id: string; comment_id: number };
const result: GistsGetCommentOutput = await github.gists.getComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; htm...
```

### `github.gists.updateComment`

- **HTTP**: `PATCH /gists/{gist_id}/comments/{comment_id}`
- **What it does**: Update a gist comment
- **OpenAPI operationId**: `gists/update-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; gist_id: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; htm...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type GistsUpdateCommentInput = Parameters<typeof github.gists.updateComment> extends [infer T, ...unknown[]] ? T : undefined;
type GistsUpdateCommentOutput = Awaited<ReturnType<typeof github.gists.updateComment>>;

const input: GistsUpdateCommentInput = {} as { body: string; gist_id: string; comment_id: number };
const result: GistsUpdateCommentOutput = await github.gists.updateComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; htm...
```

### `github.gists.listCommits`

- **HTTP**: `GET /gists/{gist_id}/commits`
- **What it does**: List gist commits
- **OpenAPI operationId**: `gists/list-commits`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; version: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsListCommitsInput = Parameters<typeof github.gists.listCommits> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListCommitsOutput = Awaited<ReturnType<typeof github.gists.listCommits>>;

const input: GistsListCommitsInput = {} as { gist_id: string; per_page?: number; page?: number };
const result: GistsListCommitsOutput = await github.gists.listCommits(input);

// Result shape (from schema): ({ url: string; version: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_...
```

### `github.gists.listForks`

- **HTTP**: `GET /gists/{gist_id}/forks`
- **What it does**: List gist forks
- **OpenAPI operationId**: `gists/list-forks`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string...`
- OpenAPI response codes: `200`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsListForksInput = Parameters<typeof github.gists.listForks> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListForksOutput = Awaited<ReturnType<typeof github.gists.listForks>>;

const input: GistsListForksInput = {} as { gist_id: string; per_page?: number; page?: number };
const result: GistsListForksOutput = await github.gists.listForks(input);

// Result shape (from schema): ({ forks?: ({ id?: string; url?: string; user?: { login: string; id: number; user_view_type?: string; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string...
```

### `github.gists.fork`

- **HTTP**: `POST /gists/{gist_id}/forks`
- **What it does**: Fork a gist
- **OpenAPI operationId**: `gists/fork`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: st...`
- OpenAPI response codes: `201`, `304`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type GistsForkInput = Parameters<typeof github.gists.fork> extends [infer T, ...unknown[]] ? T : undefined;
type GistsForkOutput = Awaited<ReturnType<typeof github.gists.fork>>;

const input: GistsForkInput = {} as { gist_id: string };
const result: GistsForkOutput = await github.gists.fork(input);

// Result shape (from schema): { url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: st...
```

### `github.gists.unstar`

- **HTTP**: `DELETE /gists/{gist_id}/star`
- **What it does**: Unstar a gist
- **OpenAPI operationId**: `gists/unstar`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsUnstarInput = Parameters<typeof github.gists.unstar> extends [infer T, ...unknown[]] ? T : undefined;
type GistsUnstarOutput = Awaited<ReturnType<typeof github.gists.unstar>>;

const input: GistsUnstarInput = {} as { gist_id: string };
const result: GistsUnstarOutput = await github.gists.unstar(input);

// Result shape (from schema): unknown
```

### `github.gists.checkIsStarred`

- **HTTP**: `GET /gists/{gist_id}/star`
- **What it does**: Check if a gist is starred
- **OpenAPI operationId**: `gists/check-is-starred`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsCheckIsStarredInput = Parameters<typeof github.gists.checkIsStarred> extends [infer T, ...unknown[]] ? T : undefined;
type GistsCheckIsStarredOutput = Awaited<ReturnType<typeof github.gists.checkIsStarred>>;

const input: GistsCheckIsStarredInput = {} as { gist_id: string };
const result: GistsCheckIsStarredOutput = await github.gists.checkIsStarred(input);

// Result shape (from schema): unknown
```

### `github.gists.star`

- **HTTP**: `PUT /gists/{gist_id}/star`
- **What it does**: Star a gist
- **OpenAPI operationId**: `gists/star`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ gist_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type GistsStarInput = Parameters<typeof github.gists.star> extends [infer T, ...unknown[]] ? T : undefined;
type GistsStarOutput = Awaited<ReturnType<typeof github.gists.star>>;

const input: GistsStarInput = {} as { gist_id: string };
const result: GistsStarOutput = await github.gists.star(input);

// Result shape (from schema): unknown
```

### `github.gists.listPublic`

- **HTTP**: `GET /gists/public`
- **What it does**: List public gists
- **OpenAPI operationId**: `gists/list-public`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...`
- OpenAPI response codes: `200`, `304`, `403`, `422`

```ts
import github from "@utdk/github";

type GistsListPublicInput = Parameters<typeof github.gists.listPublic> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListPublicOutput = Awaited<ReturnType<typeof github.gists.listPublic>>;

const input: GistsListPublicInput = {} as { since?: string; per_page?: number; page?: number };
const result: GistsListPublicOutput = await github.gists.listPublic(input);

// Result shape (from schema): ({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...
```

### `github.gists.listStarred`

- **HTTP**: `GET /gists/starred`
- **What it does**: List starred gists
- **OpenAPI operationId**: `gists/list-starred`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type GistsListStarredInput = Parameters<typeof github.gists.listStarred> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListStarredOutput = Awaited<ReturnType<typeof github.gists.listStarred>>;

const input: GistsListStarredInput = {} as { since?: string; per_page?: number; page?: number };
const result: GistsListStarredOutput = await github.gists.listStarred(input);

// Result shape (from schema): ({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...
```

### `github.gists.listForUser`

- **HTTP**: `GET /users/{username}/gists`
- **What it does**: List gists for a user
- **OpenAPI operationId**: `gists/list-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type GistsListForUserInput = Parameters<typeof github.gists.listForUser> extends [infer T, ...unknown[]] ? T : undefined;
type GistsListForUserOutput = Awaited<ReturnType<typeof github.gists.listForUser>>;

const input: GistsListForUserInput = {} as { username: string; since?: string; per_page?: number; page?: number };
const result: GistsListForUserOutput = await github.gists.listForUser(input);

// Result shape (from schema): ({ url: string; forks_url: string; commits_url: string; id: string; node_id: string; git_pull_url: string; git_push_url: string; html_url: string; files: { [key: string]: { filename?: string; type?: string; language?: s...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

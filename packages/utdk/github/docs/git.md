# Git

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.git.createBlob`

- **HTTP**: `POST /repos/{owner}/{repo}/git/blobs`
- **What it does**: Create a blob
- **OpenAPI operationId**: `git/create-blob`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ content: string; encoding?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; sha: string }`
- OpenAPI response codes: `201`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type GitCreateBlobInput = Parameters<typeof github.git.createBlob> extends [infer T, ...unknown[]] ? T : undefined;
type GitCreateBlobOutput = Awaited<ReturnType<typeof github.git.createBlob>>;

const input: GitCreateBlobInput = {} as { content: string; encoding?: string; owner: string; repo: string };
const result: GitCreateBlobOutput = await github.git.createBlob(input);

// Result shape (from schema): { url: string; sha: string }
```

### `github.git.getBlob`

- **HTTP**: `GET /repos/{owner}/{repo}/git/blobs/{file_sha}`
- **What it does**: Get a blob
- **OpenAPI operationId**: `git/get-blob`
- **Path params**: `file_sha`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; file_sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ content: string; encoding: string; url: string; sha: string; size: number | null; node_id: string; highlighted_content?: string }`
- OpenAPI response codes: `200`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type GitGetBlobInput = Parameters<typeof github.git.getBlob> extends [infer T, ...unknown[]] ? T : undefined;
type GitGetBlobOutput = Awaited<ReturnType<typeof github.git.getBlob>>;

const input: GitGetBlobInput = {} as { owner: string; repo: string; file_sha: string };
const result: GitGetBlobOutput = await github.git.getBlob(input);

// Result shape (from schema): { content: string; encoding: string; url: string; sha: string; size: number | null; node_id: string; highlighted_content?: string }
```

### `github.git.createCommit`

- **HTTP**: `POST /repos/{owner}/{repo}/git/commits`
- **What it does**: Create a commit
- **OpenAPI operationId**: `git/create-commit`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ message: string; tree: string; parents?: (string)[]; author?: { name: string; email: string; date?: string }; committer?: { name?: string; email?: string; date?: string }; signature?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ sha: string; node_id: string; url: string; author: { date: string; email: string; name: string }; committer: { date: string; email: string; name: string }; message: string; tree: { sha: string; url: string }; parents:...`
- OpenAPI response codes: `201`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type GitCreateCommitInput = Parameters<typeof github.git.createCommit> extends [infer T, ...unknown[]] ? T : undefined;
type GitCreateCommitOutput = Awaited<ReturnType<typeof github.git.createCommit>>;

const input: GitCreateCommitInput = {} as { message: string; tree: string; parents?: (string)[]; author?: { name: string; email: string; date?: string }; committer?: { name?: string; email?: string; date?: string }; signature?: string; owner: string; repo: string };
const result: GitCreateCommitOutput = await github.git.createCommit(input);

// Result shape (from schema): { sha: string; node_id: string; url: string; author: { date: string; email: string; name: string }; committer: { date: string; email: string; name: string }; message: string; tree: { sha: string; url: string }; parents:...
```

### `github.git.getCommit`

- **HTTP**: `GET /repos/{owner}/{repo}/git/commits/{commit_sha}`
- **What it does**: Get a commit object
- **OpenAPI operationId**: `git/get-commit`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; commit_sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ sha: string; node_id: string; url: string; author: { date: string; email: string; name: string }; committer: { date: string; email: string; name: string }; message: string; tree: { sha: string; url: string }; parents:...`
- OpenAPI response codes: `200`, `404`, `409`

```ts
import github from "@utdk/github";

type GitGetCommitInput = Parameters<typeof github.git.getCommit> extends [infer T, ...unknown[]] ? T : undefined;
type GitGetCommitOutput = Awaited<ReturnType<typeof github.git.getCommit>>;

const input: GitGetCommitInput = {} as { owner: string; repo: string; commit_sha: string };
const result: GitGetCommitOutput = await github.git.getCommit(input);

// Result shape (from schema): { sha: string; node_id: string; url: string; author: { date: string; email: string; name: string }; committer: { date: string; email: string; name: string }; message: string; tree: { sha: string; url: string }; parents:...
```

### `github.git.listMatchingRefs`

- **HTTP**: `GET /repos/{owner}/{repo}/git/matching-refs/{ref}`
- **What it does**: List matching references
- **OpenAPI operationId**: `git/list-matching-refs`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } })[]`
- OpenAPI response codes: `200`, `409`

```ts
import github from "@utdk/github";

type GitListMatchingRefsInput = Parameters<typeof github.git.listMatchingRefs> extends [infer T, ...unknown[]] ? T : undefined;
type GitListMatchingRefsOutput = Awaited<ReturnType<typeof github.git.listMatchingRefs>>;

const input: GitListMatchingRefsInput = {} as { owner: string; repo: string; ref: string };
const result: GitListMatchingRefsOutput = await github.git.listMatchingRefs(input);

// Result shape (from schema): ({ ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } })[]
```

### `github.git.getRef`

- **HTTP**: `GET /repos/{owner}/{repo}/git/ref/{ref}`
- **What it does**: Get a reference
- **OpenAPI operationId**: `git/get-ref`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } }`
- OpenAPI response codes: `200`, `404`, `409`

```ts
import github from "@utdk/github";

type GitGetRefInput = Parameters<typeof github.git.getRef> extends [infer T, ...unknown[]] ? T : undefined;
type GitGetRefOutput = Awaited<ReturnType<typeof github.git.getRef>>;

const input: GitGetRefInput = {} as { owner: string; repo: string; ref: string };
const result: GitGetRefOutput = await github.git.getRef(input);

// Result shape (from schema): { ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } }
```

### `github.git.createRef`

- **HTTP**: `POST /repos/{owner}/{repo}/git/refs`
- **What it does**: Create a reference
- **OpenAPI operationId**: `git/create-ref`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ref: string; sha: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } }`
- OpenAPI response codes: `201`, `409`, `422`

```ts
import github from "@utdk/github";

type GitCreateRefInput = Parameters<typeof github.git.createRef> extends [infer T, ...unknown[]] ? T : undefined;
type GitCreateRefOutput = Awaited<ReturnType<typeof github.git.createRef>>;

const input: GitCreateRefInput = {} as { ref: string; sha: string; owner: string; repo: string };
const result: GitCreateRefOutput = await github.git.createRef(input);

// Result shape (from schema): { ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } }
```

### `github.git.deleteRef`

- **HTTP**: `DELETE /repos/{owner}/{repo}/git/refs/{ref}`
- **What it does**: Delete a reference
- **OpenAPI operationId**: `git/delete-ref`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`, `422`

```ts
import github from "@utdk/github";

type GitDeleteRefInput = Parameters<typeof github.git.deleteRef> extends [infer T, ...unknown[]] ? T : undefined;
type GitDeleteRefOutput = Awaited<ReturnType<typeof github.git.deleteRef>>;

const input: GitDeleteRefInput = {} as { owner: string; repo: string; ref: string };
const result: GitDeleteRefOutput = await github.git.deleteRef(input);

// Result shape (from schema): unknown
```

### `github.git.updateRef`

- **HTTP**: `PATCH /repos/{owner}/{repo}/git/refs/{ref}`
- **What it does**: Update a reference
- **OpenAPI operationId**: `git/update-ref`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ sha: string; force?: boolean; owner: string; repo: string; ref: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } }`
- OpenAPI response codes: `200`, `409`, `422`

```ts
import github from "@utdk/github";

type GitUpdateRefInput = Parameters<typeof github.git.updateRef> extends [infer T, ...unknown[]] ? T : undefined;
type GitUpdateRefOutput = Awaited<ReturnType<typeof github.git.updateRef>>;

const input: GitUpdateRefInput = {} as { sha: string; force?: boolean; owner: string; repo: string; ref: string };
const result: GitUpdateRefOutput = await github.git.updateRef(input);

// Result shape (from schema): { ref: string; node_id: string; url: string; object: { type: string; sha: string; url: string } }
```

### `github.git.createTag`

- **HTTP**: `POST /repos/{owner}/{repo}/git/tags`
- **What it does**: Create a tag object
- **OpenAPI operationId**: `git/create-tag`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ tag: string; message: string; object: string; type: "commit" | "tree" | "blob"; tagger?: { name: string; email: string; date?: string }; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ node_id: string; tag: string; sha: string; url: string; message: string; tagger: { date: string; email: string; name: string }; object: { sha: string; type: string; url: string }; verification?: { verified: boolean; r...`
- OpenAPI response codes: `201`, `409`, `422`

```ts
import github from "@utdk/github";

type GitCreateTagInput = Parameters<typeof github.git.createTag> extends [infer T, ...unknown[]] ? T : undefined;
type GitCreateTagOutput = Awaited<ReturnType<typeof github.git.createTag>>;

const input: GitCreateTagInput = {} as { tag: string; message: string; object: string; type: "commit" | "tree" | "blob"; tagger?: { name: string; email: string; date?: string }; owner: string; repo: string };
const result: GitCreateTagOutput = await github.git.createTag(input);

// Result shape (from schema): { node_id: string; tag: string; sha: string; url: string; message: string; tagger: { date: string; email: string; name: string }; object: { sha: string; type: string; url: string }; verification?: { verified: boolean; r...
```

### `github.git.getTag`

- **HTTP**: `GET /repos/{owner}/{repo}/git/tags/{tag_sha}`
- **What it does**: Get a tag
- **OpenAPI operationId**: `git/get-tag`
- **Path params**: `tag_sha`
- **Query params**: None
- **Response codes**: `200`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; tag_sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ node_id: string; tag: string; sha: string; url: string; message: string; tagger: { date: string; email: string; name: string }; object: { sha: string; type: string; url: string }; verification?: { verified: boolean; r...`
- OpenAPI response codes: `200`, `404`, `409`

```ts
import github from "@utdk/github";

type GitGetTagInput = Parameters<typeof github.git.getTag> extends [infer T, ...unknown[]] ? T : undefined;
type GitGetTagOutput = Awaited<ReturnType<typeof github.git.getTag>>;

const input: GitGetTagInput = {} as { owner: string; repo: string; tag_sha: string };
const result: GitGetTagOutput = await github.git.getTag(input);

// Result shape (from schema): { node_id: string; tag: string; sha: string; url: string; message: string; tagger: { date: string; email: string; name: string }; object: { sha: string; type: string; url: string }; verification?: { verified: boolean; r...
```

### `github.git.createTree`

- **HTTP**: `POST /repos/{owner}/{repo}/git/trees`
- **What it does**: Create a tree
- **OpenAPI operationId**: `git/create-tree`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ tree: ({ path?: string; mode?: "100644" | "100755" | "040000" | "160000" | "120000"; type?: "blob" | "tree" | "commit"; sha?: string | null; content?: string })[]; base_tree?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ sha: string; url?: string; truncated: boolean; tree: ({ path: string; mode: string; type: string; sha: string; size?: number; url?: string })[] }`
- OpenAPI response codes: `201`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type GitCreateTreeInput = Parameters<typeof github.git.createTree> extends [infer T, ...unknown[]] ? T : undefined;
type GitCreateTreeOutput = Awaited<ReturnType<typeof github.git.createTree>>;

const input: GitCreateTreeInput = {} as { tree: ({ path?: string; mode?: "100644" | "100755" | "040000" | "160000" | "120000"; type?: "blob" | "tree" | "commit"; sha?: string | null; content?: string })[]; base_tree?: string; owner: string; repo: string };
const result: GitCreateTreeOutput = await github.git.createTree(input);

// Result shape (from schema): { sha: string; url?: string; truncated: boolean; tree: ({ path: string; mode: string; type: string; sha: string; size?: number; url?: string })[] }
```

### `github.git.getTree`

- **HTTP**: `GET /repos/{owner}/{repo}/git/trees/{tree_sha}`
- **What it does**: Get a tree
- **OpenAPI operationId**: `git/get-tree`
- **Path params**: `tree_sha`
- **Query params**: `recursive`
- **Response codes**: `200`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; tree_sha: string; recursive?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ sha: string; url?: string; truncated: boolean; tree: ({ path: string; mode: string; type: string; sha: string; size?: number; url?: string })[] }`
- OpenAPI response codes: `200`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type GitGetTreeInput = Parameters<typeof github.git.getTree> extends [infer T, ...unknown[]] ? T : undefined;
type GitGetTreeOutput = Awaited<ReturnType<typeof github.git.getTree>>;

const input: GitGetTreeInput = {} as { owner: string; repo: string; tree_sha: string; recursive?: string };
const result: GitGetTreeOutput = await github.git.getTree(input);

// Result shape (from schema): { sha: string; url?: string; truncated: boolean; tree: ({ path: string; mode: string; type: string; sha: string; size?: number; url?: string })[] }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

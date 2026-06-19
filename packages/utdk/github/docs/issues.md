# Issues

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.issues.list`

- **HTTP**: `GET /issues`
- **What it does**: List issues assigned to the authenticated user
- **OpenAPI operationId**: `issues/list`
- **Path params**: None
- **Query params**: `filter`, `state`, `sort`, `collab`, `orgs`, `owned`, `pulls`
- **Response codes**: `200`, `304`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all"; state?: "open" | "closed" | "all"; labels?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; collab?: boolean; orgs?: boolean; owned?: boolean; pulls?: boolean; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `304`, `404`, `422`

```ts
import github from "@utdk/github";

type IssuesListInput = Parameters<typeof github.issues.list> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListOutput = Awaited<ReturnType<typeof github.issues.list>>;

const input: IssuesListInput = {} as { filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all"; state?: "open" | "closed" | "all"; labels?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; collab?: boolean; orgs?: boolean; owned?: boolean; pulls?: boolean; per_page?: number; page?: number };
const result: IssuesListOutput = await github.issues.list(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```

### `github.issues.listForOrg`

- **HTTP**: `GET /orgs/{org}/issues`
- **What it does**: List organization issues assigned to the authenticated user
- **OpenAPI operationId**: `issues/list-for-org`
- **Path params**: None
- **Query params**: `filter`, `state`, `type`, `sort`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all"; state?: "open" | "closed" | "all"; labels?: string; type?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesListForOrgInput = Parameters<typeof github.issues.listForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListForOrgOutput = Awaited<ReturnType<typeof github.issues.listForOrg>>;

const input: IssuesListForOrgInput = {} as { org: string; filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all"; state?: "open" | "closed" | "all"; labels?: string; type?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number };
const result: IssuesListForOrgOutput = await github.issues.listForOrg(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```

### `github.issues.listAssignees`

- **HTTP**: `GET /repos/{owner}/{repo}/assignees`
- **What it does**: List assignees
- **OpenAPI operationId**: `issues/list-assignees`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesListAssigneesInput = Parameters<typeof github.issues.listAssignees> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListAssigneesOutput = Awaited<ReturnType<typeof github.issues.listAssignees>>;

const input: IssuesListAssigneesInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: IssuesListAssigneesOutput = await github.issues.listAssignees(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.issues.checkUserCanBeAssigned`

- **HTTP**: `GET /repos/{owner}/{repo}/assignees/{assignee}`
- **What it does**: Check if a user can be assigned
- **OpenAPI operationId**: `issues/check-user-can-be-assigned`
- **Path params**: `assignee`
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; assignee: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type IssuesCheckUserCanBeAssignedInput = Parameters<typeof github.issues.checkUserCanBeAssigned> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesCheckUserCanBeAssignedOutput = Awaited<ReturnType<typeof github.issues.checkUserCanBeAssigned>>;

const input: IssuesCheckUserCanBeAssignedInput = {} as { owner: string; repo: string; assignee: string };
const result: IssuesCheckUserCanBeAssignedOutput = await github.issues.checkUserCanBeAssigned(input);

// Result shape (from schema): unknown
```

### `github.issues.listForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/issues`
- **What it does**: List repository issues
- **OpenAPI operationId**: `issues/list-for-repo`
- **Path params**: None
- **Query params**: `milestone`, `state`, `assignee`, `type`, `creator`, `mentioned`, `issue_field_values`, `sort`
- **Response codes**: `200`, `301`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; milestone?: string; state?: "open" | "closed" | "all"; assignee?: string; type?: string; creator?: string; mentioned?: string; issue_field_values?: string; labels?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `301`, `404`, `422`

```ts
import github from "@utdk/github";

type IssuesListForRepoInput = Parameters<typeof github.issues.listForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListForRepoOutput = Awaited<ReturnType<typeof github.issues.listForRepo>>;

const input: IssuesListForRepoInput = {} as { owner: string; repo: string; milestone?: string; state?: "open" | "closed" | "all"; assignee?: string; type?: string; creator?: string; mentioned?: string; issue_field_values?: string; labels?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number };
const result: IssuesListForRepoOutput = await github.issues.listForRepo(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```

### `github.issues.create`

- **HTTP**: `POST /repos/{owner}/{repo}/issues`
- **What it does**: Create an issue
- **OpenAPI operationId**: `issues/create`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `400`, `403`, `404`, `410`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title: string | number; body?: string; assignee?: string | null; milestone?: string | number | null; labels?: (string | { id?: number; name?: string; description?: string | null; color?: string | null })[]; assignees?: (string)[]; issue_field_values?: ({ field_id: number; value: string | number })[]; type?: string | null; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `201`, `400`, `403`, `404`, `410`, `422`, `503`

```ts
import github from "@utdk/github";

type IssuesCreateInput = Parameters<typeof github.issues.create> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesCreateOutput = Awaited<ReturnType<typeof github.issues.create>>;

const input: IssuesCreateInput = {} as { title: string | number; body?: string; assignee?: string | null; milestone?: string | number | null; labels?: (string | { id?: number; name?: string; description?: string | null; color?: string | null })[]; assignees?: (string)[]; issue_field_values?: ({ field_id: number; value: string | number })[]; type?: string | null; owner: string; repo: string };
const result: IssuesCreateOutput = await github.issues.create(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.get`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}`
- **What it does**: Get an issue
- **OpenAPI operationId**: `issues/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `304`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`, `301`, `304`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesGetInput = Parameters<typeof github.issues.get> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesGetOutput = Awaited<ReturnType<typeof github.issues.get>>;

const input: IssuesGetInput = {} as { owner: string; repo: string; issue_number: number };
const result: IssuesGetOutput = await github.issues.get(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.update`

- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
- **What it does**: Update an issue
- **OpenAPI operationId**: `issues/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `403`, `404`, `410`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string | number | null; body?: string | null; assignee?: string | null; state?: "open" | "closed"; state_reason?: "completed" | "not_planned" | "duplicate" | "reopened" | null; milestone?: string | number | null; labels?: (string | { id?: number; name?: string; description?: string | null; color?: string | null })[]; assignees?: (string)[]; issue_field_values?: ({ field_id: number; value: string | number })[]; type?: string | null; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`, `301`, `403`, `404`, `410`, `422`, `503`

```ts
import github from "@utdk/github";

type IssuesUpdateInput = Parameters<typeof github.issues.update> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesUpdateOutput = Awaited<ReturnType<typeof github.issues.update>>;

const input: IssuesUpdateInput = {} as { title?: string | number | null; body?: string | null; assignee?: string | null; state?: "open" | "closed"; state_reason?: "completed" | "not_planned" | "duplicate" | "reopened" | null; milestone?: string | number | null; labels?: (string | { id?: number; name?: string; description?: string | null; color?: string | null })[]; assignees?: (string)[]; issue_field_values?: ({ field_id: number; value: string | number })[]; type?: string | null; owner: string; repo: string; issue_number: number };
const result: IssuesUpdateOutput = await github.issues.update(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.removeAssignees`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
- **What it does**: Remove assignees from an issue
- **OpenAPI operationId**: `issues/remove-assignees`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ assignees?: (string)[]; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type IssuesRemoveAssigneesInput = Parameters<typeof github.issues.removeAssignees> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesRemoveAssigneesOutput = Awaited<ReturnType<typeof github.issues.removeAssignees>>;

const input: IssuesRemoveAssigneesInput = {} as { assignees?: (string)[]; owner: string; repo: string; issue_number: number };
const result: IssuesRemoveAssigneesOutput = await github.issues.removeAssignees(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.addAssignees`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
- **What it does**: Add assignees to an issue
- **OpenAPI operationId**: `issues/add-assignees`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ assignees?: (string)[]; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type IssuesAddAssigneesInput = Parameters<typeof github.issues.addAssignees> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesAddAssigneesOutput = Awaited<ReturnType<typeof github.issues.addAssignees>>;

const input: IssuesAddAssigneesInput = {} as { assignees?: (string)[]; owner: string; repo: string; issue_number: number };
const result: IssuesAddAssigneesOutput = await github.issues.addAssignees(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.checkUserCanBeAssignedToIssue`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}`
- **What it does**: Check if a user can be assigned to a issue
- **OpenAPI operationId**: `issues/check-user-can-be-assigned-to-issue`
- **Path params**: `assignee`
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; assignee: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type IssuesCheckUserCanBeAssignedToIssueInput = Parameters<typeof github.issues.checkUserCanBeAssignedToIssue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesCheckUserCanBeAssignedToIssueOutput = Awaited<ReturnType<typeof github.issues.checkUserCanBeAssignedToIssue>>;

const input: IssuesCheckUserCanBeAssignedToIssueInput = {} as { owner: string; repo: string; issue_number: number; assignee: string };
const result: IssuesCheckUserCanBeAssignedToIssueOutput = await github.issues.checkUserCanBeAssignedToIssue(input);

// Result shape (from schema): unknown
```

### `github.issues.listComments`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/comments`
- **What it does**: List issue comments
- **OpenAPI operationId**: `issues/list-comments`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avat...`
- OpenAPI response codes: `200`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListCommentsInput = Parameters<typeof github.issues.listComments> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListCommentsOutput = Awaited<ReturnType<typeof github.issues.listComments>>;

const input: IssuesListCommentsInput = {} as { owner: string; repo: string; issue_number: number; since?: string; per_page?: number; page?: number };
const result: IssuesListCommentsOutput = await github.issues.listComments(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avat...
```

### `github.issues.createComment`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/comments`
- **What it does**: Create an issue comment
- **OpenAPI operationId**: `issues/create-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...`
- OpenAPI response codes: `201`, `403`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesCreateCommentInput = Parameters<typeof github.issues.createComment> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesCreateCommentOutput = Awaited<ReturnType<typeof github.issues.createComment>>;

const input: IssuesCreateCommentInput = {} as { body: string; owner: string; repo: string; issue_number: number };
const result: IssuesCreateCommentOutput = await github.issues.createComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...
```

### `github.issues.listDependenciesBlockedBy`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
- **What it does**: List dependencies an issue is blocked by
- **OpenAPI operationId**: `issues/list-dependencies-blocked-by`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListDependenciesBlockedByInput = Parameters<typeof github.issues.listDependenciesBlockedBy> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListDependenciesBlockedByOutput = Awaited<ReturnType<typeof github.issues.listDependenciesBlockedBy>>;

const input: IssuesListDependenciesBlockedByInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListDependenciesBlockedByOutput = await github.issues.listDependenciesBlockedBy(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```

### `github.issues.addBlockedByDependency`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
- **What it does**: Add a dependency an issue is blocked by
- **OpenAPI operationId**: `issues/add-blocked-by-dependency`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `301`, `403`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ issue_id: number; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `201`, `301`, `403`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesAddBlockedByDependencyInput = Parameters<typeof github.issues.addBlockedByDependency> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesAddBlockedByDependencyOutput = Awaited<ReturnType<typeof github.issues.addBlockedByDependency>>;

const input: IssuesAddBlockedByDependencyInput = {} as { issue_id: number; owner: string; repo: string; issue_number: number };
const result: IssuesAddBlockedByDependencyOutput = await github.issues.addBlockedByDependency(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.removeDependencyBlockedBy`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
- **What it does**: Remove dependency an issue is blocked by
- **OpenAPI operationId**: `issues/remove-dependency-blocked-by`
- **Path params**: `issue_id`
- **Query params**: None
- **Response codes**: `200`, `301`, `400`, `401`, `403`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; issue_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`, `301`, `400`, `401`, `403`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesRemoveDependencyBlockedByInput = Parameters<typeof github.issues.removeDependencyBlockedBy> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesRemoveDependencyBlockedByOutput = Awaited<ReturnType<typeof github.issues.removeDependencyBlockedBy>>;

const input: IssuesRemoveDependencyBlockedByInput = {} as { owner: string; repo: string; issue_number: number; issue_id: number };
const result: IssuesRemoveDependencyBlockedByOutput = await github.issues.removeDependencyBlockedBy(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.listDependenciesBlocking`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
- **What it does**: List dependencies an issue is blocking
- **OpenAPI operationId**: `issues/list-dependencies-blocking`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListDependenciesBlockingInput = Parameters<typeof github.issues.listDependenciesBlocking> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListDependenciesBlockingOutput = Awaited<ReturnType<typeof github.issues.listDependenciesBlocking>>;

const input: IssuesListDependenciesBlockingInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListDependenciesBlockingOutput = await github.issues.listDependenciesBlocking(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```

### `github.issues.listEvents`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/events`
- **What it does**: List issue events
- **OpenAPI operationId**: `issues/list-events`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...`
- OpenAPI response codes: `200`, `410`

```ts
import github from "@utdk/github";

type IssuesListEventsInput = Parameters<typeof github.issues.listEvents> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListEventsOutput = Awaited<ReturnType<typeof github.issues.listEvents>>;

const input: IssuesListEventsInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListEventsOutput = await github.issues.listEvents(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...
```

### `github.issues.listIssueFieldValuesForIssue`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values`
- **What it does**: List issue field values for an issue
- **OpenAPI operationId**: `issues/list-issue-field-values-for-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ issue_field_id: number; node_id: string; data_type: "text" | "single_select" | "number" | "date"; value: string | number | number | null; single_select_option?: { id: number; name: string; color: string } | null })[]`
- OpenAPI response codes: `200`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListIssueFieldValuesForIssueInput = Parameters<typeof github.issues.listIssueFieldValuesForIssue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListIssueFieldValuesForIssueOutput = Awaited<ReturnType<typeof github.issues.listIssueFieldValuesForIssue>>;

const input: IssuesListIssueFieldValuesForIssueInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListIssueFieldValuesForIssueOutput = await github.issues.listIssueFieldValuesForIssue(input);

// Result shape (from schema): ({ issue_field_id: number; node_id: string; data_type: "text" | "single_select" | "number" | "date"; value: string | number | number | null; single_select_option?: { id: number; name: string; color: string } | null })[]
```

### `github.issues.addIssueFieldValues`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values`
- **What it does**: Add issue field values to an issue
- **OpenAPI operationId**: `issues/add-issue-field-values`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ issue_field_values?: ({ field_id: number; value: string | number })[]; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ issue_field_id: number; node_id: string; data_type: "text" | "single_select" | "number" | "date"; value: string | number | number | null; single_select_option?: { id: number; name: string; color: string } | null })[]`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type IssuesAddIssueFieldValuesInput = Parameters<typeof github.issues.addIssueFieldValues> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesAddIssueFieldValuesOutput = Awaited<ReturnType<typeof github.issues.addIssueFieldValues>>;

const input: IssuesAddIssueFieldValuesInput = {} as { issue_field_values?: ({ field_id: number; value: string | number })[]; owner: string; repo: string; issue_number: number };
const result: IssuesAddIssueFieldValuesOutput = await github.issues.addIssueFieldValues(input);

// Result shape (from schema): ({ issue_field_id: number; node_id: string; data_type: "text" | "single_select" | "number" | "date"; value: string | number | number | null; single_select_option?: { id: number; name: string; color: string } | null })[]
```

### `github.issues.setIssueFieldValues`

- **HTTP**: `PUT /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values`
- **What it does**: Set issue field values for an issue
- **OpenAPI operationId**: `issues/set-issue-field-values`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ issue_field_values?: ({ field_id: number; value: string | number })[]; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ issue_field_id: number; node_id: string; data_type: "text" | "single_select" | "number" | "date"; value: string | number | number | null; single_select_option?: { id: number; name: string; color: string } | null })[]`
- OpenAPI response codes: `200`, `400`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type IssuesSetIssueFieldValuesInput = Parameters<typeof github.issues.setIssueFieldValues> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesSetIssueFieldValuesOutput = Awaited<ReturnType<typeof github.issues.setIssueFieldValues>>;

const input: IssuesSetIssueFieldValuesInput = {} as { issue_field_values?: ({ field_id: number; value: string | number })[]; owner: string; repo: string; issue_number: number };
const result: IssuesSetIssueFieldValuesOutput = await github.issues.setIssueFieldValues(input);

// Result shape (from schema): ({ issue_field_id: number; node_id: string; data_type: "text" | "single_select" | "number" | "date"; value: string | number | number | null; single_select_option?: { id: number; name: string; color: string } | null })[]
```

### `github.issues.deleteIssueFieldValue`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values/{issue_field_id}`
- **What it does**: Delete an issue field value from an issue
- **OpenAPI operationId**: `issues/delete-issue-field-value`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; issue_field_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type IssuesDeleteIssueFieldValueInput = Parameters<typeof github.issues.deleteIssueFieldValue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesDeleteIssueFieldValueOutput = Awaited<ReturnType<typeof github.issues.deleteIssueFieldValue>>;

const input: IssuesDeleteIssueFieldValueInput = {} as { owner: string; repo: string; issue_number: number; issue_field_id: number };
const result: IssuesDeleteIssueFieldValueOutput = await github.issues.deleteIssueFieldValue(input);

// Result shape (from schema): unknown
```

### `github.issues.removeAllLabels`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`
- **What it does**: Remove all labels from an issue
- **OpenAPI operationId**: `issues/remove-all-labels`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesRemoveAllLabelsInput = Parameters<typeof github.issues.removeAllLabels> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesRemoveAllLabelsOutput = Awaited<ReturnType<typeof github.issues.removeAllLabels>>;

const input: IssuesRemoveAllLabelsInput = {} as { owner: string; repo: string; issue_number: number };
const result: IssuesRemoveAllLabelsOutput = await github.issues.removeAllLabels(input);

// Result shape (from schema): unknown
```

### `github.issues.listLabelsOnIssue`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/labels`
- **What it does**: List labels for an issue
- **OpenAPI operationId**: `issues/list-labels-on-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]`
- OpenAPI response codes: `200`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListLabelsOnIssueInput = Parameters<typeof github.issues.listLabelsOnIssue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListLabelsOnIssueOutput = Awaited<ReturnType<typeof github.issues.listLabelsOnIssue>>;

const input: IssuesListLabelsOnIssueInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListLabelsOnIssueOutput = await github.issues.listLabelsOnIssue(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]
```

### `github.issues.addLabels`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/labels`
- **What it does**: Add labels to an issue
- **OpenAPI operationId**: `issues/add-labels`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { labels?: (string)[] } | (string)[] | ({ name: string })[]; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]`
- OpenAPI response codes: `200`, `301`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesAddLabelsInput = Parameters<typeof github.issues.addLabels> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesAddLabelsOutput = Awaited<ReturnType<typeof github.issues.addLabels>>;

const input: IssuesAddLabelsInput = {} as { body?: { labels?: (string)[] } | (string)[] | ({ name: string })[]; owner: string; repo: string; issue_number: number };
const result: IssuesAddLabelsOutput = await github.issues.addLabels(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]
```

### `github.issues.setLabels`

- **HTTP**: `PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`
- **What it does**: Set labels for an issue
- **OpenAPI operationId**: `issues/set-labels`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { labels?: (string)[] } | (string)[] | { labels?: ({ name: string })[] } | ({ name: string })[] | string; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]`
- OpenAPI response codes: `200`, `301`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesSetLabelsInput = Parameters<typeof github.issues.setLabels> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesSetLabelsOutput = Awaited<ReturnType<typeof github.issues.setLabels>>;

const input: IssuesSetLabelsInput = {} as { body?: { labels?: (string)[] } | (string)[] | { labels?: ({ name: string })[] } | ({ name: string })[] | string; owner: string; repo: string; issue_number: number };
const result: IssuesSetLabelsOutput = await github.issues.setLabels(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]
```

### `github.issues.removeLabel`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`
- **What it does**: Remove a label from an issue
- **OpenAPI operationId**: `issues/remove-label`
- **Path params**: `name`
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]`
- OpenAPI response codes: `200`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesRemoveLabelInput = Parameters<typeof github.issues.removeLabel> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesRemoveLabelOutput = Awaited<ReturnType<typeof github.issues.removeLabel>>;

const input: IssuesRemoveLabelInput = {} as { owner: string; repo: string; issue_number: number; name: string };
const result: IssuesRemoveLabelOutput = await github.issues.removeLabel(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]
```

### `github.issues.unlock`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`
- **What it does**: Unlock an issue
- **OpenAPI operationId**: `issues/unlock`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`

```ts
import github from "@utdk/github";

type IssuesUnlockInput = Parameters<typeof github.issues.unlock> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesUnlockOutput = Awaited<ReturnType<typeof github.issues.unlock>>;

const input: IssuesUnlockInput = {} as { owner: string; repo: string; issue_number: number };
const result: IssuesUnlockOutput = await github.issues.unlock(input);

// Result shape (from schema): unknown
```

### `github.issues.lock`

- **HTTP**: `PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`
- **What it does**: Lock an issue
- **OpenAPI operationId**: `issues/lock`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ lock_reason?: "off-topic" | "too heated" | "resolved" | "spam"; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesLockInput = Parameters<typeof github.issues.lock> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesLockOutput = Awaited<ReturnType<typeof github.issues.lock>>;

const input: IssuesLockInput = {} as { lock_reason?: "off-topic" | "too heated" | "resolved" | "spam"; owner: string; repo: string; issue_number: number };
const result: IssuesLockOutput = await github.issues.lock(input);

// Result shape (from schema): unknown
```

### `github.issues.getParent`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
- **What it does**: Get parent issue
- **OpenAPI operationId**: `issues/get-parent`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`, `301`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesGetParentInput = Parameters<typeof github.issues.getParent> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesGetParentOutput = Awaited<ReturnType<typeof github.issues.getParent>>;

const input: IssuesGetParentInput = {} as { owner: string; repo: string; issue_number: number };
const result: IssuesGetParentOutput = await github.issues.getParent(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.removeSubIssue`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
- **What it does**: Remove sub-issue
- **OpenAPI operationId**: `issues/remove-sub-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ sub_issue_id: number; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`, `400`, `404`

```ts
import github from "@utdk/github";

type IssuesRemoveSubIssueInput = Parameters<typeof github.issues.removeSubIssue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesRemoveSubIssueOutput = Awaited<ReturnType<typeof github.issues.removeSubIssue>>;

const input: IssuesRemoveSubIssueInput = {} as { sub_issue_id: number; owner: string; repo: string; issue_number: number };
const result: IssuesRemoveSubIssueOutput = await github.issues.removeSubIssue(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.listSubIssues`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
- **What it does**: List sub-issues
- **OpenAPI operationId**: `issues/list-sub-issues`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListSubIssuesInput = Parameters<typeof github.issues.listSubIssues> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListSubIssuesOutput = Awaited<ReturnType<typeof github.issues.listSubIssues>>;

const input: IssuesListSubIssuesInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListSubIssuesOutput = await github.issues.listSubIssues(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```

### `github.issues.addSubIssue`

- **HTTP**: `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
- **What it does**: Add sub-issue
- **OpenAPI operationId**: `issues/add-sub-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ sub_issue_id: number; replace_parent?: boolean; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `201`, `403`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesAddSubIssueInput = Parameters<typeof github.issues.addSubIssue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesAddSubIssueOutput = Awaited<ReturnType<typeof github.issues.addSubIssue>>;

const input: IssuesAddSubIssueInput = {} as { sub_issue_id: number; replace_parent?: boolean; owner: string; repo: string; issue_number: number };
const result: IssuesAddSubIssueOutput = await github.issues.addSubIssue(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.reprioritizeSubIssue`

- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
- **What it does**: Reprioritize sub-issue
- **OpenAPI operationId**: `issues/reprioritize-sub-issue`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ sub_issue_id: number; after_id?: number; before_id?: number; owner: string; repo: string; issue_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...`
- OpenAPI response codes: `200`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type IssuesReprioritizeSubIssueInput = Parameters<typeof github.issues.reprioritizeSubIssue> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesReprioritizeSubIssueOutput = Awaited<ReturnType<typeof github.issues.reprioritizeSubIssue>>;

const input: IssuesReprioritizeSubIssueInput = {} as { sub_issue_id: number; after_id?: number; before_id?: number; owner: string; repo: string; issue_number: number };
const result: IssuesReprioritizeSubIssueOutput = await github.issues.reprioritizeSubIssue(input);

// Result shape (from schema): { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened" ...
```

### `github.issues.listEventsForTimeline`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
- **What it does**: List timeline events for an issue
- **OpenAPI operationId**: `issues/list-events-for-timeline`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; issue_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...`
- OpenAPI response codes: `200`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesListEventsForTimelineInput = Parameters<typeof github.issues.listEventsForTimeline> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListEventsForTimelineOutput = Awaited<ReturnType<typeof github.issues.listEventsForTimeline>>;

const input: IssuesListEventsForTimelineInput = {} as { owner: string; repo: string; issue_number: number; per_page?: number; page?: number };
const result: IssuesListEventsForTimelineOutput = await github.issues.listEventsForTimeline(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...
```

### `github.issues.listCommentsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments`
- **What it does**: List issue comments for a repository
- **OpenAPI operationId**: `issues/list-comments-for-repo`
- **Path params**: None
- **Query params**: `direction`
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avat...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type IssuesListCommentsForRepoInput = Parameters<typeof github.issues.listCommentsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListCommentsForRepoOutput = Awaited<ReturnType<typeof github.issues.listCommentsForRepo>>;

const input: IssuesListCommentsForRepoInput = {} as { owner: string; repo: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number };
const result: IssuesListCommentsForRepoOutput = await github.issues.listCommentsForRepo(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avat...
```

### `github.issues.deleteComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`
- **What it does**: Delete an issue comment
- **OpenAPI operationId**: `issues/delete-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type IssuesDeleteCommentInput = Parameters<typeof github.issues.deleteComment> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesDeleteCommentOutput = Awaited<ReturnType<typeof github.issues.deleteComment>>;

const input: IssuesDeleteCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: IssuesDeleteCommentOutput = await github.issues.deleteComment(input);

// Result shape (from schema): unknown
```

### `github.issues.getComment`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments/{comment_id}`
- **What it does**: Get an issue comment
- **OpenAPI operationId**: `issues/get-comment`
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

- Client return type: `{ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesGetCommentInput = Parameters<typeof github.issues.getComment> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesGetCommentOutput = Awaited<ReturnType<typeof github.issues.getComment>>;

const input: IssuesGetCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: IssuesGetCommentOutput = await github.issues.getComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...
```

### `github.issues.updateComment`

- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`
- **What it does**: Update an issue comment
- **OpenAPI operationId**: `issues/update-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type IssuesUpdateCommentInput = Parameters<typeof github.issues.updateComment> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesUpdateCommentOutput = Awaited<ReturnType<typeof github.issues.updateComment>>;

const input: IssuesUpdateCommentInput = {} as { body: string; owner: string; repo: string; comment_id: number };
const result: IssuesUpdateCommentOutput = await github.issues.updateComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...
```

### `github.issues.unpinComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/pin`
- **What it does**: Unpin an issue comment
- **OpenAPI operationId**: `issues/unpin-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`, `404`, `410`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`, `404`, `410`, `503`

```ts
import github from "@utdk/github";

type IssuesUnpinCommentInput = Parameters<typeof github.issues.unpinComment> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesUnpinCommentOutput = Awaited<ReturnType<typeof github.issues.unpinComment>>;

const input: IssuesUnpinCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: IssuesUnpinCommentOutput = await github.issues.unpinComment(input);

// Result shape (from schema): unknown
```

### `github.issues.pinComment`

- **HTTP**: `PUT /repos/{owner}/{repo}/issues/comments/{comment_id}/pin`
- **What it does**: Pin an issue comment
- **OpenAPI operationId**: `issues/pin-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `410`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `410`, `422`

```ts
import github from "@utdk/github";

type IssuesPinCommentInput = Parameters<typeof github.issues.pinComment> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesPinCommentOutput = Awaited<ReturnType<typeof github.issues.pinComment>>;

const input: IssuesPinCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: IssuesPinCommentOutput = await github.issues.pinComment(input);

// Result shape (from schema): { id: number; node_id: string; url: string; body?: string; body_text?: string; body_html?: string; html_url: string; user: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avata...
```

### `github.issues.listEventsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/events`
- **What it does**: List issue events for a repository
- **OpenAPI operationId**: `issues/list-events-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type IssuesListEventsForRepoInput = Parameters<typeof github.issues.listEventsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListEventsForRepoOutput = Awaited<ReturnType<typeof github.issues.listEventsForRepo>>;

const input: IssuesListEventsForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: IssuesListEventsForRepoOutput = await github.issues.listEventsForRepo(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...
```

### `github.issues.getEvent`

- **HTTP**: `GET /repos/{owner}/{repo}/issues/events/{event_id}`
- **What it does**: Get an issue event
- **OpenAPI operationId**: `issues/get-event`
- **Path params**: `event_id`
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `410`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; event_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string...`
- OpenAPI response codes: `200`, `403`, `404`, `410`

```ts
import github from "@utdk/github";

type IssuesGetEventInput = Parameters<typeof github.issues.getEvent> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesGetEventOutput = Awaited<ReturnType<typeof github.issues.getEvent>>;

const input: IssuesGetEventInput = {} as { owner: string; repo: string; event_id: number };
const result: IssuesGetEventOutput = await github.issues.getEvent(input);

// Result shape (from schema): { id: number; node_id: string; url: string; actor: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string...
```

### `github.issues.listLabelsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/labels`
- **What it does**: List labels for a repository
- **OpenAPI operationId**: `issues/list-labels-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesListLabelsForRepoInput = Parameters<typeof github.issues.listLabelsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListLabelsForRepoOutput = Awaited<ReturnType<typeof github.issues.listLabelsForRepo>>;

const input: IssuesListLabelsForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: IssuesListLabelsForRepoOutput = await github.issues.listLabelsForRepo(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]
```

### `github.issues.createLabel`

- **HTTP**: `POST /repos/{owner}/{repo}/labels`
- **What it does**: Create a label
- **OpenAPI operationId**: `issues/create-label`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; color?: string; description?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean }`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type IssuesCreateLabelInput = Parameters<typeof github.issues.createLabel> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesCreateLabelOutput = Awaited<ReturnType<typeof github.issues.createLabel>>;

const input: IssuesCreateLabelInput = {} as { name: string; color?: string; description?: string; owner: string; repo: string };
const result: IssuesCreateLabelOutput = await github.issues.createLabel(input);

// Result shape (from schema): { id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean }
```

### `github.issues.deleteLabel`

- **HTTP**: `DELETE /repos/{owner}/{repo}/labels/{name}`
- **What it does**: Delete a label
- **OpenAPI operationId**: `issues/delete-label`
- **Path params**: `name`
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type IssuesDeleteLabelInput = Parameters<typeof github.issues.deleteLabel> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesDeleteLabelOutput = Awaited<ReturnType<typeof github.issues.deleteLabel>>;

const input: IssuesDeleteLabelInput = {} as { owner: string; repo: string; name: string };
const result: IssuesDeleteLabelOutput = await github.issues.deleteLabel(input);

// Result shape (from schema): unknown
```

### `github.issues.getLabel`

- **HTTP**: `GET /repos/{owner}/{repo}/labels/{name}`
- **What it does**: Get a label
- **OpenAPI operationId**: `issues/get-label`
- **Path params**: `name`
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesGetLabelInput = Parameters<typeof github.issues.getLabel> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesGetLabelOutput = Awaited<ReturnType<typeof github.issues.getLabel>>;

const input: IssuesGetLabelInput = {} as { owner: string; repo: string; name: string };
const result: IssuesGetLabelOutput = await github.issues.getLabel(input);

// Result shape (from schema): { id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean }
```

### `github.issues.updateLabel`

- **HTTP**: `PATCH /repos/{owner}/{repo}/labels/{name}`
- **What it does**: Update a label
- **OpenAPI operationId**: `issues/update-label`
- **Path params**: `name`
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ new_name?: string; color?: string; description?: string; owner: string; repo: string; name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type IssuesUpdateLabelInput = Parameters<typeof github.issues.updateLabel> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesUpdateLabelOutput = Awaited<ReturnType<typeof github.issues.updateLabel>>;

const input: IssuesUpdateLabelInput = {} as { new_name?: string; color?: string; description?: string; owner: string; repo: string; name: string };
const result: IssuesUpdateLabelOutput = await github.issues.updateLabel(input);

// Result shape (from schema): { id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean }
```

### `github.issues.listMilestones`

- **HTTP**: `GET /repos/{owner}/{repo}/milestones`
- **What it does**: List milestones
- **OpenAPI operationId**: `issues/list-milestones`
- **Path params**: None
- **Query params**: `state`, `sort`, `direction`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; state?: "open" | "closed" | "all"; sort?: "due_on" | "completeness"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | n...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesListMilestonesInput = Parameters<typeof github.issues.listMilestones> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListMilestonesOutput = Awaited<ReturnType<typeof github.issues.listMilestones>>;

const input: IssuesListMilestonesInput = {} as { owner: string; repo: string; state?: "open" | "closed" | "all"; sort?: "due_on" | "completeness"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: IssuesListMilestonesOutput = await github.issues.listMilestones(input);

// Result shape (from schema): ({ url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | n...
```

### `github.issues.createMilestone`

- **HTTP**: `POST /repos/{owner}/{repo}/milestones`
- **What it does**: Create a milestone
- **OpenAPI operationId**: `issues/create-milestone`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title: string; state?: "open" | "closed"; description?: string; due_on?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | nu...`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type IssuesCreateMilestoneInput = Parameters<typeof github.issues.createMilestone> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesCreateMilestoneOutput = Awaited<ReturnType<typeof github.issues.createMilestone>>;

const input: IssuesCreateMilestoneInput = {} as { title: string; state?: "open" | "closed"; description?: string; due_on?: string; owner: string; repo: string };
const result: IssuesCreateMilestoneOutput = await github.issues.createMilestone(input);

// Result shape (from schema): { url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | nu...
```

### `github.issues.deleteMilestone`

- **HTTP**: `DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`
- **What it does**: Delete a milestone
- **OpenAPI operationId**: `issues/delete-milestone`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; milestone_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type IssuesDeleteMilestoneInput = Parameters<typeof github.issues.deleteMilestone> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesDeleteMilestoneOutput = Awaited<ReturnType<typeof github.issues.deleteMilestone>>;

const input: IssuesDeleteMilestoneInput = {} as { owner: string; repo: string; milestone_number: number };
const result: IssuesDeleteMilestoneOutput = await github.issues.deleteMilestone(input);

// Result shape (from schema): unknown
```

### `github.issues.getMilestone`

- **HTTP**: `GET /repos/{owner}/{repo}/milestones/{milestone_number}`
- **What it does**: Get a milestone
- **OpenAPI operationId**: `issues/get-milestone`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; milestone_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | nu...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type IssuesGetMilestoneInput = Parameters<typeof github.issues.getMilestone> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesGetMilestoneOutput = Awaited<ReturnType<typeof github.issues.getMilestone>>;

const input: IssuesGetMilestoneInput = {} as { owner: string; repo: string; milestone_number: number };
const result: IssuesGetMilestoneOutput = await github.issues.getMilestone(input);

// Result shape (from schema): { url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | nu...
```

### `github.issues.updateMilestone`

- **HTTP**: `PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`
- **What it does**: Update a milestone
- **OpenAPI operationId**: `issues/update-milestone`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string; state?: "open" | "closed"; description?: string; due_on?: string; owner: string; repo: string; milestone_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | nu...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type IssuesUpdateMilestoneInput = Parameters<typeof github.issues.updateMilestone> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesUpdateMilestoneOutput = Awaited<ReturnType<typeof github.issues.updateMilestone>>;

const input: IssuesUpdateMilestoneInput = {} as { title?: string; state?: "open" | "closed"; description?: string; due_on?: string; owner: string; repo: string; milestone_number: number };
const result: IssuesUpdateMilestoneOutput = await github.issues.updateMilestone(input);

// Result shape (from schema): { url: string; html_url: string; labels_url: string; id: number; node_id: string; number: number; state: "open" | "closed"; title: string; description: string | null; creator: { name?: string | null; email?: string | nu...
```

### `github.issues.listLabelsForMilestone`

- **HTTP**: `GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`
- **What it does**: List labels for issues in a milestone
- **OpenAPI operationId**: `issues/list-labels-for-milestone`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; milestone_number: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type IssuesListLabelsForMilestoneInput = Parameters<typeof github.issues.listLabelsForMilestone> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListLabelsForMilestoneOutput = Awaited<ReturnType<typeof github.issues.listLabelsForMilestone>>;

const input: IssuesListLabelsForMilestoneInput = {} as { owner: string; repo: string; milestone_number: number; per_page?: number; page?: number };
const result: IssuesListLabelsForMilestoneOutput = await github.issues.listLabelsForMilestone(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; name: string; description: string | null; color: string; default: boolean })[]
```

### `github.issues.listForAuthenticatedUser`

- **HTTP**: `GET /user/issues`
- **What it does**: List user account issues assigned to the authenticated user
- **OpenAPI operationId**: `issues/list-for-authenticated-user`
- **Path params**: None
- **Query params**: `filter`, `state`, `sort`
- **Response codes**: `200`, `304`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all"; state?: "open" | "closed" | "all"; labels?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...`
- OpenAPI response codes: `200`, `304`, `404`

```ts
import github from "@utdk/github";

type IssuesListForAuthenticatedUserInput = Parameters<typeof github.issues.listForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type IssuesListForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.issues.listForAuthenticatedUser>>;

const input: IssuesListForAuthenticatedUserInput = {} as { filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all"; state?: "open" | "closed" | "all"; labels?: string; sort?: "created" | "updated" | "comments"; direction?: "asc" | "desc"; since?: string; per_page?: number; page?: number };
const result: IssuesListForAuthenticatedUserOutput = await github.issues.listForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string; state_reason?: "completed" | "reopened"...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

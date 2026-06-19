# Projects

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.projects.listForOrg`

- **HTTP**: `GET /orgs/{org}/projectsV2`
- **What it does**: List projects for organization
- **OpenAPI operationId**: `projects/list-for-org`
- **Path params**: None
- **Query params**: `q`
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; q?: string; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsListForOrgInput = Parameters<typeof github.projects.listForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListForOrgOutput = Awaited<ReturnType<typeof github.projects.listForOrg>>;

const input: ProjectsListForOrgInput = {} as { org: string; q?: string; before?: string; after?: string; per_page?: number };
const result: ProjectsListForOrgOutput = await github.projects.listForOrg(input);

// Result shape (from schema): ({ id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_...
```

### `github.projects.getForOrg`

- **HTTP**: `GET /orgs/{org}/projectsV2/{project_number}`
- **What it does**: Get project for organization
- **OpenAPI operationId**: `projects/get-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsGetForOrgInput = Parameters<typeof github.projects.getForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsGetForOrgOutput = Awaited<ReturnType<typeof github.projects.getForOrg>>;

const input: ProjectsGetForOrgInput = {} as { project_number: number; org: string };
const result: ProjectsGetForOrgOutput = await github.projects.getForOrg(input);

// Result shape (from schema): { id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.projects.createDraftItemForOrg`

- **HTTP**: `POST /orgs/{org}/projectsV2/{project_number}/drafts`
- **What it does**: Create draft item for organization owned project
- **OpenAPI operationId**: `projects/create-draft-item-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title: string; body?: string; org: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...`
- OpenAPI response codes: `201`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsCreateDraftItemForOrgInput = Parameters<typeof github.projects.createDraftItemForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsCreateDraftItemForOrgOutput = Awaited<ReturnType<typeof github.projects.createDraftItemForOrg>>;

const input: ProjectsCreateDraftItemForOrgInput = {} as { title: string; body?: string; org: string; project_number: number };
const result: ProjectsCreateDraftItemForOrgOutput = await github.projects.createDraftItemForOrg(input);

// Result shape (from schema): { id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...
```

### `github.projects.listFieldsForOrg`

- **HTTP**: `GET /orgs/{org}/projectsV2/{project_number}/fields`
- **What it does**: List project fields for organization
- **OpenAPI operationId**: `projects/list-fields-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; org: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "si...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsListFieldsForOrgInput = Parameters<typeof github.projects.listFieldsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListFieldsForOrgOutput = Awaited<ReturnType<typeof github.projects.listFieldsForOrg>>;

const input: ProjectsListFieldsForOrgInput = {} as { project_number: number; org: string; per_page?: number; before?: string; after?: string };
const result: ProjectsListFieldsForOrgOutput = await github.projects.listFieldsForOrg(input);

// Result shape (from schema): ({ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "si...
```

### `github.projects.addFieldForOrg`

- **HTTP**: `POST /orgs/{org}/projectsV2/{project_number}/fields`
- **What it does**: Add a field to an organization-owned project.
- **OpenAPI operationId**: `projects/add-field-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { issue_field_id: number } | { name: string; data_type: "text" | "number" | "date" } | { name: string; data_type: "single_select"; single_select_options: ({ name?: string; color?: "BLUE" | "GRAY" | "GREEN" | "ORANGE" | "PINK" | "PURPLE" | "RED" | "YELLOW"; description?: string })[] } | { name: string; data_type: "iteration"; iteration_configuration: { start_date?: string; duration?: number; iterations?: ({ title?: string; start_date?: string; duration?: number })[] } }; project_number: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type ProjectsAddFieldForOrgInput = Parameters<typeof github.projects.addFieldForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsAddFieldForOrgOutput = Awaited<ReturnType<typeof github.projects.addFieldForOrg>>;

const input: ProjectsAddFieldForOrgInput = {} as { body: { issue_field_id: number } | { name: string; data_type: "text" | "number" | "date" } | { name: string; data_type: "single_select"; single_select_options: ({ name?: string; color?: "BLUE" | "GRAY" | "GREEN" | "ORANGE" | "PINK" | "PURPLE" | "RED" | "YELLOW"; description?: string })[] } | { name: string; data_type: "iteration"; iteration_configuration: { start_date?: string; duration?: number; iterations?: ({ title?: string; start_date?: string; duration?: number })[] } }; project_number: number; org: string };
const result: ProjectsAddFieldForOrgOutput = await github.projects.addFieldForOrg(input);

// Result shape (from schema): { id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...
```

### `github.projects.getFieldForOrg`

- **HTTP**: `GET /orgs/{org}/projectsV2/{project_number}/fields/{field_id}`
- **What it does**: Get project field for organization
- **OpenAPI operationId**: `projects/get-field-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; field_id: number; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsGetFieldForOrgInput = Parameters<typeof github.projects.getFieldForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsGetFieldForOrgOutput = Awaited<ReturnType<typeof github.projects.getFieldForOrg>>;

const input: ProjectsGetFieldForOrgInput = {} as { project_number: number; field_id: number; org: string };
const result: ProjectsGetFieldForOrgOutput = await github.projects.getFieldForOrg(input);

// Result shape (from schema): { id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...
```

### `github.projects.listItemsForOrg`

- **HTTP**: `GET /orgs/{org}/projectsV2/{project_number}/items`
- **What it does**: List items for an organization owned project
- **OpenAPI operationId**: `projects/list-items-for-org`
- **Path params**: None
- **Query params**: `q`, `fields`
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; org: string; q?: string; fields?: string | (string)[]; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsListItemsForOrgInput = Parameters<typeof github.projects.listItemsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListItemsForOrgOutput = Awaited<ReturnType<typeof github.projects.listItemsForOrg>>;

const input: ProjectsListItemsForOrgInput = {} as { project_number: number; org: string; q?: string; fields?: string | (string)[]; before?: string; after?: string; per_page?: number };
const result: ProjectsListItemsForOrgOutput = await github.projects.listItemsForOrg(input);

// Result shape (from schema): ({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...
```

### `github.projects.addItemForOrg`

- **HTTP**: `POST /orgs/{org}/projectsV2/{project_number}/items`
- **What it does**: Add item to organization owned project
- **OpenAPI operationId**: `projects/add-item-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown; org: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...`
- OpenAPI response codes: `201`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsAddItemForOrgInput = Parameters<typeof github.projects.addItemForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsAddItemForOrgOutput = Awaited<ReturnType<typeof github.projects.addItemForOrg>>;

const input: ProjectsAddItemForOrgInput = {} as { body: unknown | unknown; org: string; project_number: number };
const result: ProjectsAddItemForOrgOutput = await github.projects.addItemForOrg(input);

// Result shape (from schema): { id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...
```

### `github.projects.deleteItemForOrg`

- **HTTP**: `DELETE /orgs/{org}/projectsV2/{project_number}/items/{item_id}`
- **What it does**: Delete project item for organization
- **OpenAPI operationId**: `projects/delete-item-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; org: string; item_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsDeleteItemForOrgInput = Parameters<typeof github.projects.deleteItemForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsDeleteItemForOrgOutput = Awaited<ReturnType<typeof github.projects.deleteItemForOrg>>;

const input: ProjectsDeleteItemForOrgInput = {} as { project_number: number; org: string; item_id: number };
const result: ProjectsDeleteItemForOrgOutput = await github.projects.deleteItemForOrg(input);

// Result shape (from schema): unknown
```

### `github.projects.getOrgItem`

- **HTTP**: `GET /orgs/{org}/projectsV2/{project_number}/items/{item_id}`
- **What it does**: Get an item for an organization owned project
- **OpenAPI operationId**: `projects/get-org-item`
- **Path params**: None
- **Query params**: `fields`
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; org: string; item_id: number; fields?: string | (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsGetOrgItemInput = Parameters<typeof github.projects.getOrgItem> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsGetOrgItemOutput = Awaited<ReturnType<typeof github.projects.getOrgItem>>;

const input: ProjectsGetOrgItemInput = {} as { project_number: number; org: string; item_id: number; fields?: string | (string)[] };
const result: ProjectsGetOrgItemOutput = await github.projects.getOrgItem(input);

// Result shape (from schema): { id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...
```

### `github.projects.updateItemForOrg`

- **HTTP**: `PATCH /orgs/{org}/projectsV2/{project_number}/items/{item_id}`
- **What it does**: Update project item for organization
- **OpenAPI operationId**: `projects/update-item-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ fields: ({ id: number; value: string | number | null })[]; project_number: number; org: string; item_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ProjectsUpdateItemForOrgInput = Parameters<typeof github.projects.updateItemForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsUpdateItemForOrgOutput = Awaited<ReturnType<typeof github.projects.updateItemForOrg>>;

const input: ProjectsUpdateItemForOrgInput = {} as { fields: ({ id: number; value: string | number | null })[]; project_number: number; org: string; item_id: number };
const result: ProjectsUpdateItemForOrgOutput = await github.projects.updateItemForOrg(input);

// Result shape (from schema): { id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...
```

### `github.projects.createViewForOrg`

- **HTTP**: `POST /orgs/{org}/projectsV2/{project_number}/views`
- **What it does**: Create a view for an organization-owned project
- **OpenAPI operationId**: `projects/create-view-for-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; layout: "table" | "board" | "roadmap"; filter?: string; visible_fields?: (number)[]; org: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; layout: "table" | "board" | "roadmap"; node_id: string; project_url: string; html_url: string; creator: { name?: string | null; email?: string | null; login: string; id: numbe...`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type ProjectsCreateViewForOrgInput = Parameters<typeof github.projects.createViewForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsCreateViewForOrgOutput = Awaited<ReturnType<typeof github.projects.createViewForOrg>>;

const input: ProjectsCreateViewForOrgInput = {} as { name: string; layout: "table" | "board" | "roadmap"; filter?: string; visible_fields?: (number)[]; org: string; project_number: number };
const result: ProjectsCreateViewForOrgOutput = await github.projects.createViewForOrg(input);

// Result shape (from schema): { id: number; number: number; name: string; layout: "table" | "board" | "roadmap"; node_id: string; project_url: string; html_url: string; creator: { name?: string | null; email?: string | null; login: string; id: numbe...
```

### `github.projects.listViewItemsForOrg`

- **HTTP**: `GET /orgs/{org}/projectsV2/{project_number}/views/{view_number}/items`
- **What it does**: List items for an organization project view
- **OpenAPI operationId**: `projects/list-view-items-for-org`
- **Path params**: None
- **Query params**: `fields`
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; org: string; view_number: number; fields?: string | (string)[]; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type ProjectsListViewItemsForOrgInput = Parameters<typeof github.projects.listViewItemsForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListViewItemsForOrgOutput = Awaited<ReturnType<typeof github.projects.listViewItemsForOrg>>;

const input: ProjectsListViewItemsForOrgInput = {} as { project_number: number; org: string; view_number: number; fields?: string | (string)[]; before?: string; after?: string; per_page?: number };
const result: ProjectsListViewItemsForOrgOutput = await github.projects.listViewItemsForOrg(input);

// Result shape (from schema): ({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...
```

### `github.projects.createDraftItemForAuthenticatedUser`

- **HTTP**: `POST /user/{user_id}/projectsV2/{project_number}/drafts`
- **What it does**: Create draft item for user owned project
- **OpenAPI operationId**: `projects/create-draft-item-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title: string; body?: string; user_id: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...`
- OpenAPI response codes: `201`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsCreateDraftItemForAuthenticatedUserInput = Parameters<typeof github.projects.createDraftItemForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsCreateDraftItemForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.projects.createDraftItemForAuthenticatedUser>>;

const input: ProjectsCreateDraftItemForAuthenticatedUserInput = {} as { title: string; body?: string; user_id: string; project_number: number };
const result: ProjectsCreateDraftItemForAuthenticatedUserOutput = await github.projects.createDraftItemForAuthenticatedUser(input);

// Result shape (from schema): { id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...
```

### `github.projects.createViewForUser`

- **HTTP**: `POST /users/{user_id}/projectsV2/{project_number}/views`
- **What it does**: Create a view for a user-owned project
- **OpenAPI operationId**: `projects/create-view-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `404`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; layout: "table" | "board" | "roadmap"; filter?: string; visible_fields?: (number)[]; user_id: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; number: number; name: string; layout: "table" | "board" | "roadmap"; node_id: string; project_url: string; html_url: string; creator: { name?: string | null; email?: string | null; login: string; id: numbe...`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `404`, `422`, `503`

```ts
import github from "@utdk/github";

type ProjectsCreateViewForUserInput = Parameters<typeof github.projects.createViewForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsCreateViewForUserOutput = Awaited<ReturnType<typeof github.projects.createViewForUser>>;

const input: ProjectsCreateViewForUserInput = {} as { name: string; layout: "table" | "board" | "roadmap"; filter?: string; visible_fields?: (number)[]; user_id: string; project_number: number };
const result: ProjectsCreateViewForUserOutput = await github.projects.createViewForUser(input);

// Result shape (from schema): { id: number; number: number; name: string; layout: "table" | "board" | "roadmap"; node_id: string; project_url: string; html_url: string; creator: { name?: string | null; email?: string | null; login: string; id: numbe...
```

### `github.projects.listForUser`

- **HTTP**: `GET /users/{username}/projectsV2`
- **What it does**: List projects for user
- **OpenAPI operationId**: `projects/list-for-user`
- **Path params**: None
- **Query params**: `q`
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; q?: string; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsListForUserInput = Parameters<typeof github.projects.listForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListForUserOutput = Awaited<ReturnType<typeof github.projects.listForUser>>;

const input: ProjectsListForUserInput = {} as { username: string; q?: string; before?: string; after?: string; per_page?: number };
const result: ProjectsListForUserOutput = await github.projects.listForUser(input);

// Result shape (from schema): ({ id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_...
```

### `github.projects.getForUser`

- **HTTP**: `GET /users/{username}/projectsV2/{project_number}`
- **What it does**: Get project for user
- **OpenAPI operationId**: `projects/get-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsGetForUserInput = Parameters<typeof github.projects.getForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsGetForUserOutput = Awaited<ReturnType<typeof github.projects.getForUser>>;

const input: ProjectsGetForUserInput = {} as { project_number: number; username: string };
const result: ProjectsGetForUserOutput = await github.projects.getForUser(input);

// Result shape (from schema): { id: number; node_id: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_u...
```

### `github.projects.listFieldsForUser`

- **HTTP**: `GET /users/{username}/projectsV2/{project_number}/fields`
- **What it does**: List project fields for user
- **OpenAPI operationId**: `projects/list-fields-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; username: string; per_page?: number; before?: string; after?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "si...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsListFieldsForUserInput = Parameters<typeof github.projects.listFieldsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListFieldsForUserOutput = Awaited<ReturnType<typeof github.projects.listFieldsForUser>>;

const input: ProjectsListFieldsForUserInput = {} as { project_number: number; username: string; per_page?: number; before?: string; after?: string };
const result: ProjectsListFieldsForUserOutput = await github.projects.listFieldsForUser(input);

// Result shape (from schema): ({ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "si...
```

### `github.projects.addFieldForUser`

- **HTTP**: `POST /users/{username}/projectsV2/{project_number}/fields`
- **What it does**: Add field to user owned project
- **OpenAPI operationId**: `projects/add-field-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: { name: string; data_type: "text" | "number" | "date" } | { name: string; data_type: "single_select"; single_select_options: ({ name?: string; color?: "BLUE" | "GRAY" | "GREEN" | "ORANGE" | "PINK" | "PURPLE" | "RED" | "YELLOW"; description?: string })[] } | { name: string; data_type: "iteration"; iteration_configuration: { start_date?: string; duration?: number; iterations?: ({ title?: string; start_date?: string; duration?: number })[] } }; username: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...`
- OpenAPI response codes: `201`, `304`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type ProjectsAddFieldForUserInput = Parameters<typeof github.projects.addFieldForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsAddFieldForUserOutput = Awaited<ReturnType<typeof github.projects.addFieldForUser>>;

const input: ProjectsAddFieldForUserInput = {} as { body: { name: string; data_type: "text" | "number" | "date" } | { name: string; data_type: "single_select"; single_select_options: ({ name?: string; color?: "BLUE" | "GRAY" | "GREEN" | "ORANGE" | "PINK" | "PURPLE" | "RED" | "YELLOW"; description?: string })[] } | { name: string; data_type: "iteration"; iteration_configuration: { start_date?: string; duration?: number; iterations?: ({ title?: string; start_date?: string; duration?: number })[] } }; username: string; project_number: number };
const result: ProjectsAddFieldForUserOutput = await github.projects.addFieldForUser(input);

// Result shape (from schema): { id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...
```

### `github.projects.getFieldForUser`

- **HTTP**: `GET /users/{username}/projectsV2/{project_number}/fields/{field_id}`
- **What it does**: Get project field for user
- **OpenAPI operationId**: `projects/get-field-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; field_id: number; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsGetFieldForUserInput = Parameters<typeof github.projects.getFieldForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsGetFieldForUserOutput = Awaited<ReturnType<typeof github.projects.getFieldForUser>>;

const input: ProjectsGetFieldForUserInput = {} as { project_number: number; field_id: number; username: string };
const result: ProjectsGetFieldForUserOutput = await github.projects.getFieldForUser(input);

// Result shape (from schema): { id: number; issue_field_id?: number; node_id?: string; project_url: string; name: string; data_type: "assignees" | "linked_pull_requests" | "reviewers" | "labels" | "milestone" | "repository" | "title" | "text" | "sin...
```

### `github.projects.listItemsForUser`

- **HTTP**: `GET /users/{username}/projectsV2/{project_number}/items`
- **What it does**: List items for a user owned project
- **OpenAPI operationId**: `projects/list-items-for-user`
- **Path params**: None
- **Query params**: `q`, `fields`
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; username: string; before?: string; after?: string; per_page?: number; q?: string; fields?: string | (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsListItemsForUserInput = Parameters<typeof github.projects.listItemsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListItemsForUserOutput = Awaited<ReturnType<typeof github.projects.listItemsForUser>>;

const input: ProjectsListItemsForUserInput = {} as { project_number: number; username: string; before?: string; after?: string; per_page?: number; q?: string; fields?: string | (string)[] };
const result: ProjectsListItemsForUserOutput = await github.projects.listItemsForUser(input);

// Result shape (from schema): ({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...
```

### `github.projects.addItemForUser`

- **HTTP**: `POST /users/{username}/projectsV2/{project_number}/items`
- **What it does**: Add item to user owned project
- **OpenAPI operationId**: `projects/add-item-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown; username: string; project_number: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...`
- OpenAPI response codes: `201`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsAddItemForUserInput = Parameters<typeof github.projects.addItemForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsAddItemForUserOutput = Awaited<ReturnType<typeof github.projects.addItemForUser>>;

const input: ProjectsAddItemForUserInput = {} as { body: unknown | unknown; username: string; project_number: number };
const result: ProjectsAddItemForUserOutput = await github.projects.addItemForUser(input);

// Result shape (from schema): { id: number; node_id?: string; content?: { id: number; node_id: string; url: string; repository_url: string; labels_url: string; comments_url: string; events_url: string; html_url: string; number: number; state: string...
```

### `github.projects.deleteItemForUser`

- **HTTP**: `DELETE /users/{username}/projectsV2/{project_number}/items/{item_id}`
- **What it does**: Delete project item for user
- **OpenAPI operationId**: `projects/delete-item-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; username: string; item_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsDeleteItemForUserInput = Parameters<typeof github.projects.deleteItemForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsDeleteItemForUserOutput = Awaited<ReturnType<typeof github.projects.deleteItemForUser>>;

const input: ProjectsDeleteItemForUserInput = {} as { project_number: number; username: string; item_id: number };
const result: ProjectsDeleteItemForUserOutput = await github.projects.deleteItemForUser(input);

// Result shape (from schema): unknown
```

### `github.projects.getUserItem`

- **HTTP**: `GET /users/{username}/projectsV2/{project_number}/items/{item_id}`
- **What it does**: Get an item for a user owned project
- **OpenAPI operationId**: `projects/get-user-item`
- **Path params**: None
- **Query params**: `fields`
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; username: string; item_id: number; fields?: string | (string)[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ProjectsGetUserItemInput = Parameters<typeof github.projects.getUserItem> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsGetUserItemOutput = Awaited<ReturnType<typeof github.projects.getUserItem>>;

const input: ProjectsGetUserItemInput = {} as { project_number: number; username: string; item_id: number; fields?: string | (string)[] };
const result: ProjectsGetUserItemOutput = await github.projects.getUserItem(input);

// Result shape (from schema): { id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...
```

### `github.projects.updateItemForUser`

- **HTTP**: `PATCH /users/{username}/projectsV2/{project_number}/items/{item_id}`
- **What it does**: Update project item for user
- **OpenAPI operationId**: `projects/update-item-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ fields: ({ id: number; value: string | number | null })[]; project_number: number; username: string; item_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...`
- OpenAPI response codes: `200`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ProjectsUpdateItemForUserInput = Parameters<typeof github.projects.updateItemForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsUpdateItemForUserOutput = Awaited<ReturnType<typeof github.projects.updateItemForUser>>;

const input: ProjectsUpdateItemForUserInput = {} as { fields: ({ id: number; value: string | number | null })[]; project_number: number; username: string; item_id: number };
const result: ProjectsUpdateItemForUserOutput = await github.projects.updateItemForUser(input);

// Result shape (from schema): { id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: st...
```

### `github.projects.listViewItemsForUser`

- **HTTP**: `GET /users/{username}/projectsV2/{project_number}/views/{view_number}/items`
- **What it does**: List items for a user project view
- **OpenAPI operationId**: `projects/list-view-items-for-user`
- **Path params**: None
- **Query params**: `fields`
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ project_number: number; username: string; view_number: number; fields?: string | (string)[]; before?: string; after?: string; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type ProjectsListViewItemsForUserInput = Parameters<typeof github.projects.listViewItemsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ProjectsListViewItemsForUserOutput = Awaited<ReturnType<typeof github.projects.listViewItemsForUser>>;

const input: ProjectsListViewItemsForUserInput = {} as { project_number: number; username: string; view_number: number; fields?: string | (string)[]; before?: string; after?: string; per_page?: number };
const result: ProjectsListViewItemsForUserOutput = await github.projects.listViewItemsForUser(input);

// Result shape (from schema): ({ id: number; node_id?: string; project_url?: string; content_type: "Issue" | "PullRequest" | "DraftIssue"; content?: { [key: string]: unknown } | null; creator?: { name?: string | null; email?: string | null; login: s...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

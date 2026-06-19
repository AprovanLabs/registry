# Agent Tasks

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.agentTasks.listTasksForRepo`

- **HTTP**: `GET /agents/repos/{owner}/{repo}/tasks`
- **What it does**: List tasks for repository
- **OpenAPI operationId**: `agent-tasks/list-tasks-for-repo`
- **Path params**: `owner`, `repo`
- **Query params**: `per_page`, `page`, `sort`, `direction`, `state`, `is_archived`, `since`, `creator_id`
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number; sort?: "updated_at" | "created_at"; direction?: "asc" | "desc"; state?: string; is_archived?: boolean; since?: string; creator_id?: (number)[] }`
- Client transport options: None

**Outputs**

- Client return type: `{ tasks: ({ id: string; url?: string; html_url?: string; name?: string; creator?: { id?: number }; creator_type?: "user" | "organization"; user_collaborators?: ({ id?: number })[]; owner?: { id?: number }; repository?: ...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type AgentTasksListTasksForRepoInput = Parameters<typeof github.agentTasks.listTasksForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type AgentTasksListTasksForRepoOutput = Awaited<ReturnType<typeof github.agentTasks.listTasksForRepo>>;

const input: AgentTasksListTasksForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number; sort?: "updated_at" | "created_at"; direction?: "asc" | "desc"; state?: string; is_archived?: boolean; since?: string; creator_id?: (number)[] };
const result: AgentTasksListTasksForRepoOutput = await github.agentTasks.listTasksForRepo(input);

// Result shape (from schema): { tasks: ({ id: string; url?: string; html_url?: string; name?: string; creator?: { id?: number }; creator_type?: "user" | "organization"; user_collaborators?: ({ id?: number })[]; owner?: { id?: number }; repository?: ...
```

### `github.agentTasks.createTaskInRepo`

- **HTTP**: `POST /agents/repos/{owner}/{repo}/tasks`
- **What it does**: Start a task
- **OpenAPI operationId**: `agent-tasks/create-task-in-repo`
- **Path params**: `owner`, `repo`
- **Query params**: None
- **Response codes**: `201`, `400`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ prompt: string; model?: string; create_pull_request?: boolean; base_ref?: string; head_ref?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; url?: string; html_url?: string; name?: string; creator?: { id?: number }; creator_type?: "user" | "organization"; user_collaborators?: ({ id?: number })[]; owner?: { id?: number }; repository?: { id?: num...`
- OpenAPI response codes: `201`, `400`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type AgentTasksCreateTaskInRepoInput = Parameters<typeof github.agentTasks.createTaskInRepo> extends [infer T, ...unknown[]] ? T : undefined;
type AgentTasksCreateTaskInRepoOutput = Awaited<ReturnType<typeof github.agentTasks.createTaskInRepo>>;

const input: AgentTasksCreateTaskInRepoInput = {} as { prompt: string; model?: string; create_pull_request?: boolean; base_ref?: string; head_ref?: string; owner: string; repo: string };
const result: AgentTasksCreateTaskInRepoOutput = await github.agentTasks.createTaskInRepo(input);

// Result shape (from schema): { id: string; url?: string; html_url?: string; name?: string; creator?: { id?: number }; creator_type?: "user" | "organization"; user_collaborators?: ({ id?: number })[]; owner?: { id?: number }; repository?: { id?: num...
```

### `github.agentTasks.getTaskByRepoAndId`

- **HTTP**: `GET /agents/repos/{owner}/{repo}/tasks/{task_id}`
- **What it does**: Get a task by repo
- **OpenAPI operationId**: `agent-tasks/get-task-by-repo-and-id`
- **Path params**: `owner`, `repo`, `task_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; task_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type AgentTasksGetTaskByRepoAndIdInput = Parameters<typeof github.agentTasks.getTaskByRepoAndId> extends [infer T, ...unknown[]] ? T : undefined;
type AgentTasksGetTaskByRepoAndIdOutput = Awaited<ReturnType<typeof github.agentTasks.getTaskByRepoAndId>>;

const input: AgentTasksGetTaskByRepoAndIdInput = {} as { owner: string; repo: string; task_id: string };
const result: AgentTasksGetTaskByRepoAndIdOutput = await github.agentTasks.getTaskByRepoAndId(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.agentTasks.listTasks`

- **HTTP**: `GET /agents/tasks`
- **What it does**: List tasks
- **OpenAPI operationId**: `agent-tasks/list-tasks`
- **Path params**: None
- **Query params**: `per_page`, `page`, `sort`, `direction`, `state`, `is_archived`, `since`
- **Response codes**: `200`, `400`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number; sort?: "updated_at" | "created_at"; direction?: "asc" | "desc"; state?: string; is_archived?: boolean; since?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ tasks: ({ id: string; url?: string; html_url?: string; name?: string; creator?: { id?: number }; creator_type?: "user" | "organization"; user_collaborators?: ({ id?: number })[]; owner?: { id?: number }; repository?: ...`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type AgentTasksListTasksInput = Parameters<typeof github.agentTasks.listTasks> extends [infer T, ...unknown[]] ? T : undefined;
type AgentTasksListTasksOutput = Awaited<ReturnType<typeof github.agentTasks.listTasks>>;

const input: AgentTasksListTasksInput = {} as { per_page?: number; page?: number; sort?: "updated_at" | "created_at"; direction?: "asc" | "desc"; state?: string; is_archived?: boolean; since?: string };
const result: AgentTasksListTasksOutput = await github.agentTasks.listTasks(input);

// Result shape (from schema): { tasks: ({ id: string; url?: string; html_url?: string; name?: string; creator?: { id?: number }; creator_type?: "user" | "organization"; user_collaborators?: ({ id?: number })[]; owner?: { id?: number }; repository?: ...
```

### `github.agentTasks.getTaskById`

- **HTTP**: `GET /agents/tasks/{task_id}`
- **What it does**: Get a task by ID
- **OpenAPI operationId**: `agent-tasks/get-task-by-id`
- **Path params**: `task_id`
- **Query params**: None
- **Response codes**: `200`, `400`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ task_id: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `400`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type AgentTasksGetTaskByIdInput = Parameters<typeof github.agentTasks.getTaskById> extends [infer T, ...unknown[]] ? T : undefined;
type AgentTasksGetTaskByIdOutput = Awaited<ReturnType<typeof github.agentTasks.getTaskById>>;

const input: AgentTasksGetTaskByIdInput = {} as { task_id: string };
const result: AgentTasksGetTaskByIdOutput = await github.agentTasks.getTaskById(input);

// Result shape (from schema): { [key: string]: unknown }
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

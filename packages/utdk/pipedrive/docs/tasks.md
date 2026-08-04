# Tasks

5 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getTasks`

Get all tasks

```ts
pipedrive.getTasks(input: {
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
  /** For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned. */
  limit?: number;
  /** If supplied, only tasks that are assigned to this user are returned */
  assignee_id?: number;
  /** If supplied, only tasks that are assigned to this project are returned */
  project_id?: number;
  /** If `null` is supplied then only parent tasks are returned. If integer is supplied then only subtasks of a specific task are returned. By default all tasks are returned. */
  parent_task_id?: number;
  /** Whether the task is done or not. `0` = Not done, `1` = Done. If not omitted then returns both done and not done tasks. */
  done?: 0 | 1;
}): Promise<{ success?: boolean; data?: ({ id?: number } & { title?: string; project_id?: number } & { description?: string; parent_task_id?: number; assignee_id?: number; assignee_ids?: (number)[]; done?: 0 | 1; due_date?: string } & { creator_id?: number; add_time?: string; update_time?: string; marked_as_done_time?: string })[]; additional_data?: { next_cursor?: string } }>
```

<sub>`GET /tasks` · `getTasks`</sub>

## `pipedrive.addTask`

Add a task

```ts
pipedrive.addTask(input: {
  /** The title of the task */
  title: string;
  /** The ID of a project */
  project_id: number;
  /** The description of the task */
  description?: string;
  /** The ID of a parent task. Can not be ID of a task which is already a subtask. */
  parent_task_id?: number;
  /** The ID of the user assigned to the task. When the `assignee_id` field is updated, the `assignee_ids` field value will be overwritten by the `assignee_id` field value. */
  assignee_id?: number;
  /** The IDs of users assigned to the task. When the `assignee_ids` field is updated, the `assignee_id` field value will be set to the first value of the `assignee_ids` field, or `null` if the list is empty. */
  assignee_ids?: (number)[];
  /** Whether the task is done or not. 0 = Not done, 1 = Done. */
  done?: 0 | 1;
  /** The due date of the task. Format: YYYY-MM-DD. */
  due_date?: string;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string; project_id?: number } & { description?: string; parent_task_id?: number; assignee_id?: number; assignee_ids?: (number)[]; done?: 0 | 1; due_date?: string } & { creator_id?: number; add_time?: string; update_time?: string; marked_as_done_time?: string }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`POST /tasks` · `addTask`</sub>

## `pipedrive.deleteTask`

Delete a task

```ts
pipedrive.deleteTask(input: {
  /** The ID of the task */
  id: number;
}): Promise<{ success?: boolean; data?: { success?: boolean; data?: { id?: number } }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`DELETE /tasks/{id}` · `deleteTask`</sub>

## `pipedrive.getTask`

Get details of a task

```ts
pipedrive.getTask(input: {
  /** The ID of the task */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string; project_id?: number } & { description?: string; parent_task_id?: number; assignee_id?: number; assignee_ids?: (number)[]; done?: 0 | 1; due_date?: string } & { creator_id?: number; add_time?: string; update_time?: string; marked_as_done_time?: string }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /tasks/{id}` · `getTask`</sub>

## `pipedrive.updateTask`

Update a task

```ts
pipedrive.updateTask(input: {
  /** The title of the task */
  title?: string;
  /** The ID of the project this task is associated with */
  project_id?: number;
  /** The description of the task */
  description?: string;
  /** The ID of a parent task. Can not be ID of a task which is already a subtask. */
  parent_task_id?: number;
  /** The ID of the user assigned to the task. When the `assignee_id` field is updated, the `assignee_ids` field value will be overwritten by the `assignee_id` field value. */
  assignee_id?: number;
  /** The IDs of users assigned to the task. When the `assignee_ids` field is updated, the `assignee_id` field value will be set to the first value of the `assignee_ids` field, or `null` if the list is empty. */
  assignee_ids?: (number)[];
  /** Whether the task is done or not. 0 = Not done, 1 = Done. */
  done?: 0 | 1;
  /** The due date of the task. Format: YYYY-MM-DD. */
  due_date?: string;
  /** The ID of the task */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string; project_id?: number } & { description?: string; parent_task_id?: number; assignee_id?: number; assignee_ids?: (number)[]; done?: 0 | 1; due_date?: string } & { creator_id?: number; add_time?: string; update_time?: string; marked_as_done_time?: string }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`PUT /tasks/{id}` · `updateTask`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

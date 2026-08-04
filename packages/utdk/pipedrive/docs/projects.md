# Projects

12 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getProjects`

Get all projects

```ts
pipedrive.getProjects(input: {
  /** For pagination, the marker (an opaque string value) representing the first item on the next page */
  cursor?: string;
  /** For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. */
  limit?: number;
  /** The ID of the filter to use */
  filter_id?: number;
  /** If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned. */
  status?: string;
  /** If supplied, only projects in specified phase are returned */
  phase_id?: number;
  /** If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned. */
  include_archived?: boolean;
}): Promise<{ success?: boolean; data?: ({ id?: number } & { title?: string } & { board_id?: number; phase_id?: number; description?: string; status?: string; owner_id?: number; start_date?: string; end_date?: string; deal_ids?: (number)[]; org_id?: number; person_id?: number; labels?: (number)[]; health_status?: number | null } & { add_time?: string; update_time?: string; status_change_time?: string; archiv...>
```

<sub>`GET /projects` · `getProjects`</sub>

## `pipedrive.addProject`

Add a project

```ts
pipedrive.addProject(input: {
  /** The title of the project */
  title: string;
  /** The ID of the board this project is associated with */
  board_id?: number;
  /** The ID of the phase this project is associated with */
  phase_id?: number;
  /** The description of the project */
  description?: string;
  /** The status of the project */
  status?: string;
  /** The ID of a project owner */
  owner_id?: number;
  /** The start date of the project. Format: YYYY-MM-DD. */
  start_date?: string;
  /** The end date of the project. Format: YYYY-MM-DD. */
  end_date?: string;
  /** An array of IDs of the deals this project is associated with */
  deal_ids?: (number)[];
  /** The ID of the organization this project is associated with */
  org_id?: number;
  /** The ID of the person this project is associated with */
  person_id?: number;
  /** An array of IDs of the labels this project has */
  labels?: (number)[];
  /** The health status of the project */
  health_status?: number | null;
  /** The ID of the template the project will be based on */
  template_id?: number;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string } & { board_id?: number; phase_id?: number; description?: string; status?: string; owner_id?: number; start_date?: string; end_date?: string; deal_ids?: (number)[]; org_id?: number; person_id?: number; labels?: (number)[]; health_status?: number | null } & { add_time?: string; update_time?: string; status_change_time?: string; archive...>
```

<sub>`POST /projects` · `addProject`</sub>

## `pipedrive.deleteProject`

Delete a project

```ts
pipedrive.deleteProject(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: { success?: boolean; data?: { id?: number } }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`DELETE /projects/{id}` · `deleteProject`</sub>

## `pipedrive.getProject`

Get details of a project

```ts
pipedrive.getProject(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string } & { board_id?: number; phase_id?: number; description?: string; status?: string; owner_id?: number; start_date?: string; end_date?: string; deal_ids?: (number)[]; org_id?: number; person_id?: number; labels?: (number)[]; health_status?: number | null } & { add_time?: string; update_time?: string; status_change_time?: string; archive...>
```

<sub>`GET /projects/{id}` · `getProject`</sub>

## `pipedrive.updateProject`

Update a project

```ts
pipedrive.updateProject(input: {
  /** The title of the project */
  title?: string;
  /** The ID of the board this project is associated with */
  board_id?: number;
  /** The ID of the phase this project is associated with */
  phase_id?: number;
  /** The description of the project */
  description?: string;
  /** The status of the project */
  status?: string;
  /** The ID of a project owner */
  owner_id?: number;
  /** The start date of the project. Format: YYYY-MM-DD. */
  start_date?: string;
  /** The end date of the project. Format: YYYY-MM-DD. */
  end_date?: string;
  /** An array of IDs of the deals this project is associated with */
  deal_ids?: (number)[];
  /** The ID of the organization this project is associated with */
  org_id?: number;
  /** The ID of the person this project is associated with */
  person_id?: number;
  /** An array of IDs of the labels this project has */
  labels?: (number)[];
  /** The health status of the project */
  health_status?: number | null;
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string } & { board_id?: number; phase_id?: number; description?: string; status?: string; owner_id?: number; start_date?: string; end_date?: string; deal_ids?: (number)[]; org_id?: number; person_id?: number; labels?: (number)[]; health_status?: number | null } & { add_time?: string; update_time?: string; status_change_time?: string; archive...>
```

<sub>`PUT /projects/{id}` · `updateProject`</sub>

## `pipedrive.getProjectActivities`

Returns project activities

```ts
pipedrive.getProjectActivities(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: ({ due_date?: string; due_time?: string; duration?: string; deal_id?: number; lead_id?: string | null; person_id?: number; project_id?: number | null; org_id?: number; location?: string; public_description?: string } & { id?: number; done?: boolean; subject?: string; type?: string; user_id?: number; busy_flag?: boolean; company_id?: number; conference_meeting_client?: ...>
```

<sub>`GET /projects/{id}/activities` · `getProjectActivities`</sub>

## `pipedrive.archiveProject`

Archive a project

```ts
pipedrive.archiveProject(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: { id?: number } & { title?: string } & { board_id?: number; phase_id?: number; description?: string; status?: string; owner_id?: number; start_date?: string; end_date?: string; deal_ids?: (number)[]; org_id?: number; person_id?: number; labels?: (number)[]; health_status?: number | null } & { add_time?: string; update_time?: string; status_change_time?: string; archive...>
```

<sub>`POST /projects/{id}/archive` · `archiveProject`</sub>

## `pipedrive.getProjectGroups`

Returns project groups

```ts
pipedrive.getProjectGroups(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: ({ id?: number; name?: string; order_nr?: number })[]; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projects/{id}/groups` · `getProjectGroups`</sub>

## `pipedrive.getProjectPlan`

Returns project plan

```ts
pipedrive.getProjectPlan(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: ({ item_id?: number; item_type?: string; phase_id?: number; group_id?: number })[]; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`GET /projects/{id}/plan` · `getProjectPlan`</sub>

## `pipedrive.putProjectPlanActivity`

Update activity in project plan

```ts
pipedrive.putProjectPlanActivity(input: {
  /** The ID of a phase on a project board */
  phase_id?: number;
  /** The ID of a group on a project board */
  group_id?: number;
  /** The ID of the project */
  id: number;
  /** The ID of the activity */
  activityId: number;
}): Promise<{ success?: boolean; data?: { item_id?: number; item_type?: string; phase_id?: number; group_id?: number }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`PUT /projects/{id}/plan/activities/{activityId}` · `putProjectPlanActivity`</sub>

## `pipedrive.putProjectPlanTask`

Update task in project plan

```ts
pipedrive.putProjectPlanTask(input: {
  /** The ID of a phase on a project board */
  phase_id?: number;
  /** The ID of a group on a project board */
  group_id?: number;
  /** The ID of the project */
  id: number;
  /** The ID of the task */
  taskId: number;
}): Promise<{ success?: boolean; data?: { item_id?: number; item_type?: string; phase_id?: number; group_id?: number }; additional_data?: { [key: string]: unknown } | null }>
```

<sub>`PUT /projects/{id}/plan/tasks/{taskId}` · `putProjectPlanTask`</sub>

## `pipedrive.getProjectTasks`

Returns project tasks

```ts
pipedrive.getProjectTasks(input: {
  /** The ID of the project */
  id: number;
}): Promise<{ success?: boolean; data?: ({ id?: number } & { title?: string; project_id?: number } & { description?: string; parent_task_id?: number; assignee_id?: number; assignee_ids?: (number)[]; done?: 0 | 1; due_date?: string } & { creator_id?: number; add_time?: string; update_time?: string; marked_as_done_time?: string })[]; additional_data?: { next_cursor?: string } }>
```

<sub>`GET /projects/{id}/tasks` · `getProjectTasks`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Tasks

27 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getTasksForProject`

Get tasks from a project — [Provider docs](https://asana.com/support)

```ts
asana.getTasksForProject(input: {
  /** Globally unique identifier for the project. */
  project_gid: string;
  /** Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  */
  completed_since?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /projects/{project_gid}/tasks` · `getTasksForProject`</sub>

## `asana.getTasksForSection`

Get tasks from a section — [Provider docs](https://asana.com/support)

```ts
asana.getTasksForSection(input: {
  /** The globally unique identifier for the section. */
  section_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  */
  completed_since?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /sections/{section_gid}/tasks` · `getTasksForSection`</sub>

## `asana.getTasksForTag`

Get tasks from a tag — [Provider docs](https://asana.com/support)

```ts
asana.getTasksForTag(input: {
  /** Globally unique identifier for the tag. */
  tag_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tags/{tag_gid}/tasks` · `getTasksForTag`</sub>

## `asana.getTasks`

Get multiple tasks — [Provider docs](https://asana.com/support)

```ts
asana.getTasks(input: {
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified. *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.* */
  assignee?: string;
  /** The project to filter tasks on. */
  project?: string;
  /** The section to filter tasks on. */
  section?: string;
  /** The workspace to filter tasks on. *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.* */
  workspace?: string;
  /** Only return tasks that are either incomplete or that have been completed since this time. */
  completed_since?: string;
  /** Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.* */
  modified_since?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks` · `getTasks`</sub>

## `asana.createTask`

Create a task — [Provider docs](https://asana.com/support)

```ts
asana.createTask(input: {
  data?: TaskCreateRequest;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`POST /tasks` · `createTask`</sub>

## `asana.deleteTask`

Delete a task — [Provider docs](https://asana.com/support)

```ts
asana.deleteTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`DELETE /tasks/{task_gid}` · `deleteTask`</sub>

## `asana.getTask`

Get a task — [Provider docs](https://asana.com/support)

```ts
asana.getTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`GET /tasks/{task_gid}` · `getTask`</sub>

## `asana.updateTask`

Update a task — [Provider docs](https://asana.com/support)

```ts
asana.updateTask(input: {
  data?: TaskUpdateRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`PUT /tasks/{task_gid}` · `updateTask`</sub>

## `asana.addDependenciesForTask`

Set dependencies for a task — [Provider docs](https://asana.com/support)

```ts
asana.addDependenciesForTask(input: {
  data?: ModifyDependenciesRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/addDependencies` · `addDependenciesForTask`</sub>

## `asana.addDependentsForTask`

Set dependents for a task — [Provider docs](https://asana.com/support)

```ts
asana.addDependentsForTask(input: {
  data?: ModifyDependentsRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/addDependents` · `addDependentsForTask`</sub>

## `asana.addFollowersForTask`

Add followers to a task — [Provider docs](https://asana.com/support)

```ts
asana.addFollowersForTask(input: {
  data?: TaskAddFollowersRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`POST /tasks/{task_gid}/addFollowers` · `addFollowersForTask`</sub>

## `asana.addProjectForTask`

Add a project to a task — [Provider docs](https://asana.com/support)

```ts
asana.addProjectForTask(input: {
  data?: TaskAddProjectRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/addProject` · `addProjectForTask`</sub>

## `asana.addTagForTask`

Add a tag to a task — [Provider docs](https://asana.com/support)

```ts
asana.addTagForTask(input: {
  data?: TaskAddTagRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/addTag` · `addTagForTask`</sub>

## `asana.getDependenciesForTask`

Get dependencies from a task — [Provider docs](https://asana.com/support)

```ts
asana.getDependenciesForTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks/{task_gid}/dependencies` · `getDependenciesForTask`</sub>

## `asana.getDependentsForTask`

Get dependents from a task — [Provider docs](https://asana.com/support)

```ts
asana.getDependentsForTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks/{task_gid}/dependents` · `getDependentsForTask`</sub>

## `asana.duplicateTask`

Duplicate a task — [Provider docs](https://asana.com/support)

```ts
asana.duplicateTask(input: {
  data?: TaskDuplicateRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("new_graph_export" | "new_graph_export.completed_at" | "new_graph_export.created_at" | "new_graph_export.download_url" | "new_portfolio" | "new_portfolio.name" | "new_project" | "new_project.name" | "new_project_template" | "new_project_template.name" | "new_resource_export" | "new_resource_export.completed_at" | "new_resource_export.created_at" | "new_resource_export.download_url" | "new_task" | "new_task.created_by" | "new_task.name" | "new_task.resource_subtype" | "resource_subtype" | "status")[];
}): Promise<{ data?: JobResponse }>
```

<sub>`POST /tasks/{task_gid}/duplicate` · `duplicateTask`</sub>

## `asana.removeDependenciesForTask`

Unlink dependencies from a task — [Provider docs](https://asana.com/support)

```ts
asana.removeDependenciesForTask(input: {
  data?: ModifyDependenciesRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/removeDependencies` · `removeDependenciesForTask`</sub>

## `asana.removeDependentsForTask`

Unlink dependents from a task — [Provider docs](https://asana.com/support)

```ts
asana.removeDependentsForTask(input: {
  data?: ModifyDependentsRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/removeDependents` · `removeDependentsForTask`</sub>

## `asana.removeFollowerForTask`

Remove followers from a task — [Provider docs](https://asana.com/support)

```ts
asana.removeFollowerForTask(input: {
  data?: TaskRemoveFollowersRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`POST /tasks/{task_gid}/removeFollowers` · `removeFollowerForTask`</sub>

## `asana.removeProjectForTask`

Remove a project from a task — [Provider docs](https://asana.com/support)

```ts
asana.removeProjectForTask(input: {
  data?: TaskRemoveProjectRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/removeProject` · `removeProjectForTask`</sub>

## `asana.removeTagForTask`

Remove a tag from a task — [Provider docs](https://asana.com/support)

```ts
asana.removeTagForTask(input: {
  data?: TaskRemoveTagRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /tasks/{task_gid}/removeTag` · `removeTagForTask`</sub>

## `asana.setParentForTask`

Set the parent of a task — [Provider docs](https://asana.com/support)

```ts
asana.setParentForTask(input: {
  data?: TaskSetParentRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`POST /tasks/{task_gid}/setParent` · `setParentForTask`</sub>

## `asana.getSubtasksForTask`

Get subtasks from a task — [Provider docs](https://asana.com/support)

```ts
asana.getSubtasksForTask(input: {
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /tasks/{task_gid}/subtasks` · `getSubtasksForTask`</sub>

## `asana.createSubtaskForTask`

Create a subtask — [Provider docs](https://asana.com/support)

```ts
asana.createSubtaskForTask(input: {
  data?: TaskCreateRequest;
  /** The task to operate on. */
  task_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: TaskResponse }>
```

<sub>`POST /tasks/{task_gid}/subtasks` · `createSubtaskForTask`</sub>

## `asana.getTasksForUserTaskList`

Get tasks from a user task list — [Provider docs](https://asana.com/support)

```ts
asana.getTasksForUserTaskList(input: {
  /** Globally unique identifier for the user task list. */
  user_task_list_gid: string;
  /** Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.  */
  completed_since?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Results per page. The number of objects to return per page. The value must be between 1 and 100. */
  limit?: number;
  /** Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* */
  offset?: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "offset" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "path" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "uri" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[]; next_page?: NextPage }>
```

<sub>`GET /user_task_lists/{user_task_list_gid}/tasks` · `getTasksForUserTaskList`</sub>

## `asana.getTaskForCustomId`

Get a task for a given custom ID — [Provider docs](https://asana.com/support)

```ts
asana.getTaskForCustomId(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Generated custom ID for a task. */
  custom_id: string;
}): Promise<{ data?: TaskResponse }>
```

<sub>`GET /workspaces/{workspace_gid}/tasks/custom_id/{custom_id}` · `getTaskForCustomID`</sub>

## `asana.searchTasksForWorkspace`

Search tasks in a workspace — [Provider docs](https://asana.com/support)

```ts
asana.searchTasksForWorkspace(input: {
  /** Globally unique identifier for the workspace or organization. */
  workspace_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** Performs full-text search on both task name and description */
  text?: string;
  /** Filters results by the task's resource_subtype */
  resource_subtype?: "default_task" | "milestone" | "approval" | "custom";
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "assignee.any"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "assignee.not"?: string;
  /** Comma-separated list of portfolio IDs */
  "portfolios.any"?: string;
  /** Comma-separated list of project IDs */
  "projects.any"?: string;
  /** Comma-separated list of project IDs */
  "projects.not"?: string;
  /** Comma-separated list of project IDs */
  "projects.all"?: string;
  /** Comma-separated list of section or column IDs */
  "sections.any"?: string;
  /** Comma-separated list of section or column IDs */
  "sections.not"?: string;
  /** Comma-separated list of section or column IDs */
  "sections.all"?: string;
  /** Comma-separated list of tag IDs */
  "tags.any"?: string;
  /** Comma-separated list of tag IDs */
  "tags.not"?: string;
  /** Comma-separated list of tag IDs */
  "tags.all"?: string;
  /** Comma-separated list of team IDs */
  "teams.any"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "followers.any"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "followers.not"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "created_by.any"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "created_by.not"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "assigned_by.any"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "assigned_by.not"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "liked_by.not"?: string;
  /** Comma-separated list of user identifiers. This can either be the string "me", an email, or the gid of a user. */
  "commented_on_by.not"?: string;
  /** ISO 8601 date string */
  "due_on.before"?: string;
  /** ISO 8601 date string */
  "due_on.after"?: string;
  /** ISO 8601 date string or `null` */
  due_on?: string | null;
  /** ISO 8601 datetime string */
  "due_at.before"?: string;
  /** ISO 8601 datetime string */
  "due_at.after"?: string;
  /** ISO 8601 date string */
  "start_on.before"?: string;
  /** ISO 8601 date string */
  "start_on.after"?: string;
  /** ISO 8601 date string or `null` */
  start_on?: string | null;
  /** ISO 8601 date string */
  "created_on.before"?: string;
  /** ISO 8601 date string */
  "created_on.after"?: string;
  /** ISO 8601 date string or `null` */
  created_on?: string | null;
  /** ISO 8601 datetime string */
  "created_at.before"?: string;
  /** ISO 8601 datetime string */
  "created_at.after"?: string;
  /** ISO 8601 date string */
  "completed_on.before"?: string;
  /** ISO 8601 date string */
  "completed_on.after"?: string;
  /** ISO 8601 date string or `null` */
  completed_on?: string | null;
  /** ISO 8601 datetime string */
  "completed_at.before"?: string;
  /** ISO 8601 datetime string */
  "completed_at.after"?: string;
  /** ISO 8601 date string */
  "modified_on.before"?: string;
  /** ISO 8601 date string */
  "modified_on.after"?: string;
  /** ISO 8601 date string or `null` */
  modified_on?: string | null;
  /** ISO 8601 datetime string */
  "modified_at.before"?: string;
  /** ISO 8601 datetime string */
  "modified_at.after"?: string;
  /** Filter to incomplete tasks with dependents */
  is_blocking?: boolean;
  /** Filter to tasks with incomplete dependencies */
  is_blocked?: boolean;
  /** Filter to tasks with attachments */
  has_attachment?: boolean;
  /** Filter to completed tasks */
  completed?: boolean;
  /** Filter to subtasks */
  is_subtask?: boolean;
  /** One of `due_date`, `created_at`, `completed_at`, `likes`, `relevance`, or `modified_at`, defaults to `modified_at` */
  sort_by?: "due_date" | "created_at" | "completed_at" | "likes" | "modified_at" | "relevance";
  /** Default `false` */
  sort_ascending?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("actual_time_minutes" | "approval_status" | "assigned_by" | "assigned_by.name" | "assignee" | "assignee.name" | "assignee_section" | "assignee_section.name" | "assignee_status" | "completed" | "completed_at" | "completed_by" | "completed_by.name" | "created_at" | "created_by" | "custom_fields" | "custom_fields.asana_created_field" | "custom_fields.created_by" | "custom_fields.created_by.name" | "custom_fields.currency_code" | "custom_fields.custom_label" | "custom_fields.custom_label_position" | "custom_fields.date_value" | "custom_fields.date_value.date" | "custom_fields.date_value.date_time" | "custom_fields.default_access_level" | "custom_fields.description" | "custom_fields.display_value" | "custom_fields.enabled" | "custom_fields.enum_options" | "custom_fields.enum_options.color" | "custom_fields.enum_options.enabled" | "custom_fields.enum_options.name" | "custom_fields.enum_value" | "custom_fields.enum_value.color" | "custom_fields.enum_value.enabled" | "custom_fields.enum_value.name" | "custom_fields.format" | "custom_fields.has_notifications_enabled" | "custom_fields.html_text_value" | "custom_fields.id_prefix" | "custom_fields.input_restrictions" | "custom_fields.is_formula_field" | "custom_fields.is_global_to_workspace" | "custom_fields.is_value_read_only" | "custom_fields.multi_enum_values" | "custom_fields.multi_enum_values.color" | "custom_fields.multi_enum_values.enabled" | "custom_fields.multi_enum_values.name" | "custom_fields.name" | "custom_fields.number_value" | "custom_fields.people_value" | "custom_fields.people_value.name" | "custom_fields.precision" | "custom_fields.privacy_setting" | "custom_fields.reference_value" | "custom_fields.reference_value.name" | "custom_fields.representation_type" | "custom_fields.resource_subtype" | "custom_fields.text_value" | "custom_fields.type" | "custom_type" | "custom_type.name" | "custom_type_status_option" | "custom_type_status_option.name" | "dependencies" | "dependents" | "due_at" | "due_on" | "external" | "external.data" | "followers" | "followers.name" | "hearted" | "hearts" | "hearts.user" | "hearts.user.name" | "html_notes" | "is_rendered_as_separator" | "liked" | "likes" | "likes.user" | "likes.user.name" | "memberships" | "memberships.project" | "memberships.project.name" | "memberships.section" | "memberships.section.name" | "modified_at" | "name" | "notes" | "num_hearts" | "num_likes" | "num_subtasks" | "parent" | "parent.created_by" | "parent.name" | "parent.resource_subtype" | "permalink_url" | "projects" | "projects.name" | "resource_subtype" | "start_at" | "start_on" | "tags" | "tags.name" | "workspace" | "workspace.name")[];
}): Promise<{ data?: (TaskCompact)[] }>
```

<sub>`GET /workspaces/{workspace_gid}/tasks/search` · `searchTasksForWorkspace`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

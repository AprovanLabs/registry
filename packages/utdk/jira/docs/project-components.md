# Project Components

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.findComponentsForProjects`

Find components for projects — [Provider docs](http://www.atlassian.com)

```ts
jira.findComponentsForProjects(input: {
  /** The project IDs and/or project keys (case sensitive). */
  projectIdsOrKeys?: (string)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `name` Sorts by component name. */
  orderBy?: "description" | "-description" | "+description" | "name" | "-name" | "+name";
  /** Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive). */
  query?: string;
}): Promise<PageBean2ComponentJsonBean>
```

<sub>`GET /rest/api/3/component` · `findComponentsForProjects`</sub>

## `jira.createComponent`

Create component — [Provider docs](http://www.atlassian.com)

```ts
jira.createComponent(input: {
  /** Compass component's ID. Can't be updated. Not required for creating a Project Component. */
  ari?: string;
  /** The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component. */
  assignee?: User;
  /** The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:   *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.  *  `UNASSIGNED` an assignee is not set for issues created with this component.  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.  Default value: `PROJECT_DEFAULT`.   Optional when creating or updating a component. */
  assigneeType?: "PROJECT_DEFAULT" | "COMPONENT_LEAD" | "PROJECT_LEAD" | "UNASSIGNED";
  /** The description for the component. Optional when creating or updating a component. */
  description?: string;
  /** The unique identifier for the component. */
  id?: string;
  /** Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned. */
  isAssigneeTypeValid?: boolean;
  /** The user details for the component's lead user. */
  lead?: User;
  /** The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  leadAccountId?: string;
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  leadUserName?: string;
  /** Compass component's metadata. Can't be updated. Not required for creating a Project Component. */
  metadata?: { [key: string]: string | undefined };
  /** The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters. */
  name?: string;
  /** The key of the project the component is assigned to. Required when creating a component. Can't be updated. */
  project?: string;
  /** The ID of the project the component is assigned to. */
  projectId?: number;
  /** The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee. */
  realAssignee?: User;
  /** The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:   *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.  *  `PROJECT_DEFAULT` when none of the preceding cases are true. */
  realAssigneeType?: "PROJECT_DEFAULT" | "COMPONENT_LEAD" | "PROJECT_LEAD" | "UNASSIGNED";
  /** The URL of the component. */
  self?: string;
}): Promise<ProjectComponent>
```

<sub>`POST /rest/api/3/component` · `createComponent`</sub>

## `jira.deleteComponent`

Delete component — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteComponent(input: {
  /** The ID of the component. */
  id: string;
  /** The ID of the component to replace the deleted component. If this value is null no replacement is made. */
  moveIssuesTo?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/component/{id}` · `deleteComponent`</sub>

## `jira.getComponent`

Get component — [Provider docs](http://www.atlassian.com)

```ts
jira.getComponent(input: {
  /** The ID of the component. */
  id: string;
}): Promise<ProjectComponent>
```

<sub>`GET /rest/api/3/component/{id}` · `getComponent`</sub>

## `jira.updateComponent`

Update component — [Provider docs](http://www.atlassian.com)

```ts
jira.updateComponent(input: {
  /** Compass component's ID. Can't be updated. Not required for creating a Project Component. */
  ari?: string;
  /** The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component. */
  assignee?: User;
  /** The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:   *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.  *  `UNASSIGNED` an assignee is not set for issues created with this component.  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.  Default value: `PROJECT_DEFAULT`.   Optional when creating or updating a component. */
  assigneeType?: "PROJECT_DEFAULT" | "COMPONENT_LEAD" | "PROJECT_LEAD" | "UNASSIGNED";
  /** The description for the component. Optional when creating or updating a component. */
  description?: string;
  /** The unique identifier for the component. */
  id?: string;
  /** Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned. */
  isAssigneeTypeValid?: boolean;
  /** The user details for the component's lead user. */
  lead?: User;
  /** The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  leadAccountId?: string;
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  leadUserName?: string;
  /** Compass component's metadata. Can't be updated. Not required for creating a Project Component. */
  metadata?: { [key: string]: string | undefined };
  /** The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters. */
  name?: string;
  /** The key of the project the component is assigned to. Required when creating a component. Can't be updated. */
  project?: string;
  /** The ID of the project the component is assigned to. */
  projectId?: number;
  /** The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee. */
  realAssignee?: User;
  /** The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:   *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.  *  `PROJECT_DEFAULT` when none of the preceding cases are true. */
  realAssigneeType?: "PROJECT_DEFAULT" | "COMPONENT_LEAD" | "PROJECT_LEAD" | "UNASSIGNED";
  /** The URL of the component. */
  self?: string;
}, options: { params: { id: string } }): Promise<ProjectComponent>
```

<sub>`PUT /rest/api/3/component/{id}` · `updateComponent`</sub>

## `jira.getComponentRelatedIssues`

Get component issues count — [Provider docs](http://www.atlassian.com)

```ts
jira.getComponentRelatedIssues(input: {
  /** The ID of the component. */
  id: string;
}): Promise<ComponentIssuesCount>
```

<sub>`GET /rest/api/3/component/{id}/relatedIssueCounts` · `getComponentRelatedIssues`</sub>

## `jira.getProjectComponentsPaginated`

Get project components paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectComponentsPaginated(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `issueCount` Sorts by the count of issues associated with the component.  *  `lead` Sorts by the user key of the component's project lead.  *  `name` Sorts by component name. */
  orderBy?: "description" | "-description" | "+description" | "issueCount" | "-issueCount" | "+issueCount" | "lead" | "-lead" | "+lead" | "name" | "-name" | "+name";
  /** The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`. */
  componentSource?: "jira" | "compass" | "auto";
  /** Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive). */
  query?: string;
}): Promise<PageBeanComponentWithIssueCount>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/component` · `getProjectComponentsPaginated`</sub>

## `jira.getProjectComponents`

Get project components — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectComponents(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`. */
  componentSource?: "jira" | "compass" | "auto";
}): Promise<(ProjectComponent)[]>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/components` · `getProjectComponents`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

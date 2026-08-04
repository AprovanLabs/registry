# Projects

13 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllProjects`

Get all projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllProjects(input: {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `issueTypes` Returns all issue types associated with the project.  *  `lead` Returns information about the project lead.  *  `projectKeys` Returns all project keys associated with the project. */
  expand?: string;
  /** Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session. */
  recent?: number;
  /** A list of project properties to return for the project. This parameter accepts a comma-separated list. */
  properties?: (string)[];
}): Promise<(Project)[]>
```

<sub>`GET /rest/api/3/project` · `getAllProjects`</sub>

## `jira.createProject`

Create project — [Provider docs](http://www.atlassian.com)

```ts
jira.createProject(input: {
  /** The default assignee when creating issues for this project. */
  assigneeType?: "PROJECT_LEAD" | "UNASSIGNED";
  /** An integer value for the project's avatar. */
  avatarId?: number;
  /** The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. */
  categoryId?: number;
  /** A brief description of the project. */
  description?: string;
  /** Deprecated use [fieldScheme](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-field-schemes/#api-group-field-schemes) instead. The ID of the field configuration scheme for the project. Use the [Get all field configuration schemes](#api-rest-api-3-fieldconfigurationscheme-get) operation to get a list of field configuration scheme IDs. If you specify the field configuration scheme you cannot specify the project template key. */
  fieldConfigurationScheme?: number;
  /** The ID of the field scheme for the project. Use the [Get field schemes](#api-rest-api-3-config-fieldschemes-get) operation to get a list of field scheme IDs. If you specify the field scheme you cannot specify the project template key. */
  fieldScheme?: number;
  /** The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs. */
  issueSecurityScheme?: number;
  /** The ID of the issue type scheme for the project. Use the [Get all issue type schemes](#api-rest-api-3-issuetypescheme-get) operation to get a list of issue type scheme IDs. If you specify the issue type scheme you cannot specify the project template key. */
  issueTypeScheme?: number;
  /** The ID of the issue type screen scheme for the project. Use the [Get all issue type screen schemes](#api-rest-api-3-issuetypescreenscheme-get) operation to get a list of issue type screen scheme IDs. If you specify the issue type screen scheme you cannot specify the project template key. */
  issueTypeScreenScheme?: number;
  /** Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. */
  key: string;
  /** This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `leadAccountId`. */
  lead?: string;
  /** The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `lead`. */
  leadAccountId?: string;
  /** The name of the project. */
  name: string;
  /** The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs. */
  notificationScheme?: number;
  /** The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs. */
  permissionScheme?: number;
  /** A predefined configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`. */
  projectTemplateKey?: "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban" | "com.pyxis.greenhopper.jira:gh-simplified-agility-scrum" | "com.pyxis.greenhopper.jira:gh-simplified-basic" | "com.pyxis.greenhopper.jira:gh-simplified-kanban-classic" | "com.pyxis.greenhopper.jira:gh-simplified-scrum-classic" | "com.pyxis.greenhopper.jira:gh-cross-team-template" | "com.pyxis.greenhopper.jira:gh-cross-team-planning-template" | "com.atlassian.servicedesk:simplified-it-service-management" | "com.atlassian.servicedesk:simplified-it-service-management-basic" | "com.atlassian.servicedesk:simplified-it-service-management-operations" | "com.atlassian.servicedesk:simplified-internal-service-desk" | "com.atlassian.servicedesk:simplified-external-service-desk" | "com.atlassian.servicedesk:simplified-hr-service-desk" | "com.atlassian.servicedesk:simplified-facilities-service-desk" | "com.atlassian.servicedesk:simplified-legal-service-desk" | "com.atlassian.servicedesk:simplified-marketing-service-desk" | "com.atlassian.servicedesk:simplified-finance-service-desk" | "com.atlassian.servicedesk:simplified-analytics-service-desk" | "com.atlassian.servicedesk:simplified-design-service-desk" | "com.atlassian.servicedesk:simplified-sales-service-desk" | "com.atlassian.servicedesk:simplified-halp-service-desk" | "com.atlassian.servicedesk:next-gen-it-service-desk" | "com.atlassian.servicedesk:next-gen-hr-service-desk" | "com.atlassian.servicedesk:next-gen-legal-service-desk" | "com.atlassian.servicedesk:next-gen-marketing-service-desk" | "com.atlassian.servicedesk:next-gen-facilities-service-desk" | "com.atlassian.servicedesk:next-gen-analytics-service-desk" | "com.atlassian.servicedesk:next-gen-finance-service-desk" | "com.atlassian.servicedesk:next-gen-design-service-desk" | "com.atlassian.servicedesk:next-gen-sales-service-desk" | "com.atlassian.servicedesk:company-managed-blank-service-project" | "com.atlassian.servicedesk:company-managed-general-service-project" | "com.atlassian.servicedesk:team-managed-general-service-project" | "com.atlassian.jira-core-project-templates:jira-core-simplified-content-management" | "com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval" | "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking" | "com.atlassian.jira-core-project-templates:jira-core-simplified-process-control" | "com.atlassian.jira-core-project-templates:jira-core-simplified-procurement" | "com.atlassian.jira-core-project-templates:jira-core-simplified-project-management" | "com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment" | "com.atlassian.jira-core-project-templates:jira-core-simplified-task-" | "com.atlassian.jcs:customer-service-management";
  /** The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type. */
  projectTypeKey?: "software" | "service_desk" | "business";
  /** A link to information about this project, such as project documentation */
  url?: string;
  /** The ID of the workflow scheme for the project. Use the [Get all workflow schemes](#api-rest-api-3-workflowscheme-get) operation to get a list of workflow scheme IDs. If you specify the workflow scheme you cannot specify the project template key. */
  workflowScheme?: number;
}): Promise<ProjectIdentifiers>
```

<sub>`POST /rest/api/3/project` · `createProject`</sub>

## `jira.getHierarchy`

Get project issue type hierarchy — [Provider docs](http://www.atlassian.com)

```ts
jira.getHierarchy(input: {
  /** The ID of the project. */
  projectId: number;
}): Promise<ProjectIssueTypeHierarchy>
```

<sub>`GET /rest/api/3/project/{projectId}/hierarchy` · `getHierarchy`</sub>

## `jira.deleteProject`

Delete project — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteProject(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Whether this project is placed in the Jira recycle bin where it will be available for restoration. */
  enableUndo?: boolean;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/project/{projectIdOrKey}` · `deleteProject`</sub>

## `jira.getProject`

Get project — [Provider docs](http://www.atlassian.com)

```ts
jira.getProject(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.  *  `issueTypeHierarchy` The project issue type hierarchy. */
  expand?: string;
  /** A list of project properties to return for the project. This parameter accepts a comma-separated list. */
  properties?: (string)[];
}): Promise<Project>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}` · `getProject`</sub>

## `jira.updateProject`

Update project — [Provider docs](http://www.atlassian.com)

```ts
jira.updateProject(input: {
  /** The default assignee when creating issues for this project. */
  assigneeType?: "PROJECT_LEAD" | "UNASSIGNED";
  /** An integer value for the project's avatar. */
  avatarId?: number;
  /** The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. To remove the project category from the project, set the value to `-1.` */
  categoryId?: number;
  /** A brief description of the project. */
  description?: string;
  /** The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs. */
  issueSecurityScheme?: number;
  /** Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. */
  key?: string;
  /** This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Cannot be provided with `leadAccountId`. */
  lead?: string;
  /** The account ID of the project lead. Cannot be provided with `lead`. */
  leadAccountId?: string;
  /** The name of the project. */
  name?: string;
  /** The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs. */
  notificationScheme?: number;
  /** The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs. */
  permissionScheme?: number;
  /** Previous project keys to be released from the current project. Released keys must belong to the current project and not contain the current project key */
  releasedProjectKeys?: (string)[];
  /** A link to information about this project, such as project documentation */
  url?: string;
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project. */
  expand?: string;
}): Promise<Project>
```

<sub>`PUT /rest/api/3/project/{projectIdOrKey}` · `updateProject`</sub>

## `jira.archiveProject`

Archive project — [Provider docs](http://www.atlassian.com)

```ts
jira.archiveProject(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/project/{projectIdOrKey}/archive` · `archiveProject`</sub>

## `jira.deleteProjectAsynchronously`

Delete project asynchronously — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteProjectAsynchronously(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/project/{projectIdOrKey}/delete` · `deleteProjectAsynchronously`</sub>

## `jira.restore`

Restore deleted or archived project — [Provider docs](http://www.atlassian.com)

```ts
jira.restore(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}): Promise<Project>
```

<sub>`POST /rest/api/3/project/{projectIdOrKey}/restore` · `restore`</sub>

## `jira.getAllStatuses`

Get all statuses for project — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllStatuses(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}): Promise<(IssueTypeWithStatus)[]>
```

<sub>`GET /rest/api/3/project/{projectIdOrKey}/statuses` · `getAllStatuses`</sub>

## `jira.getNotificationSchemeForProject`

Get project notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getNotificationSchemeForProject(input: {
  /** The project ID or project key (case sensitive). */
  projectKeyOrId: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about any custom fields assigned to receive an event  *  `group` Returns information about any groups assigned to receive an event  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information  *  `projectRole` Returns information about any project roles assigned to receive an event  *  `user` Returns information about any users assigned to receive an event */
  expand?: string;
}): Promise<NotificationScheme>
```

<sub>`GET /rest/api/3/project/{projectKeyOrId}/notificationscheme` · `getNotificationSchemeForProject`</sub>

## `jira.getRecent`

Get recent projects — [Provider docs](http://www.atlassian.com)

```ts
jira.getRecent(input: {
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `projectKeys` Returns all project keys associated with a project.  *  `lead` Returns information about the project lead.  *  `issueTypes` Returns all issue types associated with the project.  *  `url` Returns the URL associated with the project.  *  `permissions` Returns the permissions associated with the project.  *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.  *  `*` Returns the project with all available expand options. */
  expand?: string;
  /** EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored. */
  properties?: (StringList)[];
}): Promise<(Project)[]>
```

<sub>`GET /rest/api/3/project/recent` · `getRecent`</sub>

## `jira.searchProjects`

Get projects paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.searchProjects(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. Must be less than or equal to 100. If a value greater than 100 is provided, the `maxResults` parameter will default to 100. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field.   *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).  *  `issueCount` Sorts by the total number of issues in each project.  *  `key` Sorts by project key.  *  `lastIssueUpdatedTime` Sorts by the last issue update time.  *  `name` Sorts by project name.  *  `owner` Sorts by project lead.  *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.  *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date. */
  orderBy?: "category" | "-category" | "+category" | "key" | "-key" | "+key" | "name" | "-name" | "+name" | "owner" | "-owner" | "+owner" | "issueCount" | "-issueCount" | "+issueCount" | "lastIssueUpdatedDate" | "-lastIssueUpdatedDate" | "+lastIssueUpdatedDate" | "archivedDate" | "+archivedDate" | "-archivedDate" | "deletedDate" | "+deletedDate" | "-deletedDate";
  /** The project IDs to filter the results by. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Up to 50 project IDs can be provided. */
  id?: (number)[];
  /** The project keys to filter the results by. To include multiple keys, provide an ampersand-separated list. For example, `keys=PA&keys=PB`. Up to 50 project keys can be provided. */
  keys?: (string)[];
  /** Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive). */
  query?: string;
  /** Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`. */
  typeKey?: string;
  /** The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. */
  categoryId?: number;
  /** Filter results by projects for which the user can:   *  `view` the project, meaning that they have one of the following permissions:           *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  `edit` the project, meaning that they have one of the following permissions:           *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  `create` the project, meaning that they have the *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue is created. */
  action?: "view" | "browse" | "edit" | "create";
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `projectKeys` Returns all project keys associated with a project.  *  `lead` Returns information about the project lead.  *  `issueTypes` Returns all issue types associated with the project.  *  `url` Returns the URL associated with the project.  *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project. */
  expand?: string;
  /** EXPERIMENTAL. Filter results by project status:   *  `live` Search live projects.  *  `archived` Search archived projects.  *  `deleted` Search deleted projects, those in the recycle bin. */
  status?: ("live" | "archived" | "deleted")[];
  /** EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. */
  properties?: (StringList)[];
  /** EXPERIMENTAL. A query string used to search properties. The query string cannot be specified using a JSON object. For example, to search for the value of `nested` from `{"something":{"nested":1,"other":2}}` use `[thepropertykey].something.nested=1`. Note that the propertyQuery key is enclosed in square brackets to enable searching where the propertyQuery key includes dot (.) or equals (=) characters. Note that `thepropertykey` is only returned when included in `properties`. */
  propertyQuery?: string;
}): Promise<PageBeanProject>
```

<sub>`GET /rest/api/3/project/search` · `searchProjects`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

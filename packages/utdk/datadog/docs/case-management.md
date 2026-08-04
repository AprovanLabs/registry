# Case Management

66 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.searchCases`

Search cases — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchCases(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  "sort[field]"?: CaseSortableField;
  /** Search query */
  filter?: string;
  /** Specify if order is ascending or not */
  "sort[asc]"?: boolean;
}): Promise<CasesResponse>
```

<sub>`GET /api/v2/cases` · `SearchCases`</sub>

## `datadog.createCase`

Create a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCase(input: {
  data: CaseCreate;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases` · `CreateCase`</sub>

## `datadog.getCase`

Get the details of a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCase(input: {
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`GET /api/v2/cases/{case_id}` · `GetCase`</sub>

## `datadog.archiveCase`

Archive case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.archiveCase(input: {
  data: CaseEmpty;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/archive` · `ArchiveCase`</sub>

## `datadog.assignCase`

Assign case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.assignCase(input: {
  data: CaseAssign;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/assign` · `AssignCase`</sub>

## `datadog.updateAttributes`

Update case attributes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateAttributes(input: {
  data: CaseUpdateAttributes;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/attributes` · `UpdateAttributes`</sub>

## `datadog.commentCase`

Comment case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.commentCase(input: {
  data: CaseComment;
  /** Case's UUID or key */
  case_id: string;
}): Promise<TimelineResponse>
```

<sub>`POST /api/v2/cases/{case_id}/comment` · `CommentCase`</sub>

## `datadog.deleteCaseComment`

Delete case comment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCaseComment(input: {
  /** Case's UUID or key */
  case_id: string;
  /** The UUID of the timeline cell (comment) to update. */
  cell_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/{case_id}/comment/{cell_id}` · `DeleteCaseComment`</sub>

## `datadog.updateCaseComment`

Update case comment — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseComment(input: {
  data: CaseUpdateComment;
  /** Case's UUID or key */
  case_id: string;
  /** The UUID of the timeline cell (comment) to update. */
  cell_id: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/cases/{case_id}/comment/{cell_id}` · `UpdateCaseComment`</sub>

## `datadog.deleteCaseCustomAttribute`

Delete custom attribute from case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCaseCustomAttribute(input: {
  /** Case's UUID or key */
  case_id: string;
  /** Case Custom attribute's key */
  custom_attribute_key: string;
}): Promise<CaseResponse>
```

<sub>`DELETE /api/v2/cases/{case_id}/custom_attributes/{custom_attribute_key}` · `DeleteCaseCustomAttribute`</sub>

## `datadog.updateCaseCustomAttribute`

Update case custom attribute — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseCustomAttribute(input: {
  data: CaseUpdateCustomAttribute;
  /** Case's UUID or key */
  case_id: string;
  /** Case Custom attribute's key */
  custom_attribute_key: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/custom_attributes/{custom_attribute_key}` · `UpdateCaseCustomAttribute`</sub>

## `datadog.updateCaseDescription`

Update case description — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseDescription(input: {
  data: CaseUpdateDescription;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/description` · `UpdateCaseDescription`</sub>

## `datadog.updateCaseDueDate`

Update case due date — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseDueDate(input: {
  data: CaseUpdateDueDate;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/due_date` · `UpdateCaseDueDate`</sub>

## `datadog.removeCaseInsights`

Remove insights from a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeCaseInsights(input: {
  data: CaseInsightsData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`DELETE /api/v2/cases/{case_id}/insights` · `RemoveCaseInsights`</sub>

## `datadog.addCaseInsights`

Add insights to a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addCaseInsights(input: {
  data: CaseInsightsData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`PUT /api/v2/cases/{case_id}/insights` · `AddCaseInsights`</sub>

## `datadog.updatePriority`

Update case priority — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updatePriority(input: {
  data: CaseUpdatePriority;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/priority` · `UpdatePriority`</sub>

## `datadog.linkIncident`

Link incident to case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.linkIncident(input: {
  data: IncidentRelationshipData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/relationships/incidents` · `LinkIncident`</sub>

## `datadog.unlinkJiraIssue`

Remove Jira issue link from case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unlinkJiraIssue(input: {
  /** Case's UUID or key */
  case_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/{case_id}/relationships/jira_issues` · `UnlinkJiraIssue`</sub>

## `datadog.linkJiraIssueToCase`

Link existing Jira issue to case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.linkJiraIssueToCase(input: {
  data: JiraIssueLinkData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<undefined>
```

<sub>`PATCH /api/v2/cases/{case_id}/relationships/jira_issues` · `LinkJiraIssueToCase`</sub>

## `datadog.createCaseJiraIssue`

Create Jira issue for case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseJiraIssue(input: {
  data: JiraIssueCreateData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/cases/{case_id}/relationships/jira_issues` · `CreateCaseJiraIssue`</sub>

## `datadog.createCaseNotebook`

Create investigation notebook for case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseNotebook(input: {
  data: NotebookCreateData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/cases/{case_id}/relationships/notebook` · `CreateCaseNotebook`</sub>

## `datadog.moveCaseToProject`

Update case project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.moveCaseToProject(input: {
  data: ProjectRelationshipData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`PATCH /api/v2/cases/{case_id}/relationships/project` · `MoveCaseToProject`</sub>

## `datadog.createCaseServiceNowTicket`

Create ServiceNow ticket for case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseServiceNowTicket(input: {
  data: ServiceNowTicketCreateData;
  /** Case's UUID or key */
  case_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/cases/{case_id}/relationships/servicenow_tickets` · `CreateCaseServiceNowTicket`</sub>

## `datadog.updateCaseResolvedReason`

Update case resolved reason — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseResolvedReason(input: {
  data: CaseUpdateResolvedReason;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/resolved_reason` · `UpdateCaseResolvedReason`</sub>

## `datadog.updateStatus`

Update case status — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateStatus(input: {
  data: CaseUpdateStatus;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/status` · `UpdateStatus`</sub>

## `datadog.listCaseTimeline`

Get case timeline — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCaseTimeline(input: {
  /** Case's UUID or key */
  case_id: string;
  /** Number of timeline cells to return per page. */
  "page[size]"?: number;
  /** Zero-based page number for pagination. */
  "page[number]"?: number;
  /** If `true`, returns timeline cells in chronological order (oldest first). Defaults to `false` (newest first). */
  "sort[ascending]"?: boolean;
}): Promise<TimelineResponse>
```

<sub>`GET /api/v2/cases/{case_id}/timelines` · `ListCaseTimeline`</sub>

## `datadog.updateCaseTitle`

Update case title — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseTitle(input: {
  data: CaseUpdateTitle;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/title` · `UpdateCaseTitle`</sub>

## `datadog.unarchiveCase`

Unarchive case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unarchiveCase(input: {
  data: CaseEmpty;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/unarchive` · `UnarchiveCase`</sub>

## `datadog.unassignCase`

Unassign case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unassignCase(input: {
  data: CaseEmpty;
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseResponse>
```

<sub>`POST /api/v2/cases/{case_id}/unassign` · `UnassignCase`</sub>

## `datadog.listCaseWatchers`

List case watchers — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCaseWatchers(input: {
  /** Case's UUID or key */
  case_id: string;
}): Promise<CaseWatchersResponse>
```

<sub>`GET /api/v2/cases/{case_id}/watchers` · `ListCaseWatchers`</sub>

## `datadog.unwatchCase`

Unwatch a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unwatchCase(input: {
  /** Case's UUID or key */
  case_id: string;
  /** The UUID of the user to add or remove as a watcher. */
  user_uuid: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/{case_id}/watchers/{user_uuid}` · `UnwatchCase`</sub>

## `datadog.watchCase`

Watch a case — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.watchCase(input: {
  /** Case's UUID or key */
  case_id: string;
  /** The UUID of the user to add or remove as a watcher. */
  user_uuid: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/cases/{case_id}/watchers/{user_uuid}` · `WatchCase`</sub>

## `datadog.aggregateCases`

Aggregate cases — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.aggregateCases(input: {
  data: CaseAggregateRequestData;
}): Promise<CaseAggregateResponse>
```

<sub>`POST /api/v2/cases/aggregate` · `AggregateCases`</sub>

## `datadog.bulkUpdateCases`

Bulk update cases — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.bulkUpdateCases(input: {
  data: CaseBulkUpdateRequestData;
}): Promise<undefined>
```

<sub>`POST /api/v2/cases/bulk` · `BulkUpdateCases`</sub>

## `datadog.countCases`

Count cases — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.countCases(input: {
  /** Filter query for cases. */
  query_filter?: string;
  /** Comma-separated fields to group by. */
  group_bys?: string;
  /** Maximum facet values to return. */
  limit?: number;
}): Promise<CaseCountResponse>
```

<sub>`GET /api/v2/cases/count` · `CountCases`</sub>

## `datadog.listCaseLinks`

List case links — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCaseLinks(input: {
  /** The entity type to look up links for. Use `CASE` to find links for a specific case. */
  entity_type: string;
  /** The UUID of the entity to look up links for. */
  entity_id: string;
  /** Optional filter to only return links of a specific relationship type (for example, `BLOCKS` or `CAUSES`). */
  relationship?: string;
}): Promise<CaseLinksResponse>
```

<sub>`GET /api/v2/cases/link` · `ListCaseLinks`</sub>

## `datadog.createCaseLink`

Create a case link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseLink(input: {
  data: CaseLinkCreate;
}): Promise<CaseLinkResponse>
```

<sub>`POST /api/v2/cases/link` · `CreateCaseLink`</sub>

## `datadog.deleteCaseLink`

Delete a case link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCaseLink(input: {
  /** The UUID of the case link. */
  link_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/link/{link_id}` · `DeleteCaseLink`</sub>

## `datadog.getProjects`

Get all projects — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getProjects(): Promise<ProjectsResponse>
```

<sub>`GET /api/v2/cases/projects` · `GetProjects`</sub>

## `datadog.createProject`

Create a project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createProject(input: {
  data: ProjectCreate;
}): Promise<ProjectResponse>
```

<sub>`POST /api/v2/cases/projects` · `CreateProject`</sub>

## `datadog.deleteProject`

Remove a project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteProject(input: {
  /** Project UUID. */
  project_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/projects/{project_id}` · `DeleteProject`</sub>

## `datadog.getProject`

Get the details of a project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getProject(input: {
  /** Project UUID. */
  project_id: string;
}): Promise<ProjectResponse>
```

<sub>`GET /api/v2/cases/projects/{project_id}` · `GetProject`</sub>

## `datadog.updateProject`

Update a project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateProject(input: {
  data: ProjectUpdate;
  /** Project UUID. */
  project_id: string;
}): Promise<ProjectResponse>
```

<sub>`PATCH /api/v2/cases/projects/{project_id}` · `UpdateProject`</sub>

## `datadog.unfavoriteCaseProject`

Unfavorite a project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.unfavoriteCaseProject(input: {
  /** Project UUID. */
  project_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/projects/{project_id}/favorites` · `UnfavoriteCaseProject`</sub>

## `datadog.favoriteCaseProject`

Favorite a project — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.favoriteCaseProject(input: {
  /** Project UUID. */
  project_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/cases/projects/{project_id}/favorites` · `FavoriteCaseProject`</sub>

## `datadog.getProjectNotificationRules`

Get notification rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getProjectNotificationRules(input: {
  /** Project UUID */
  project_id: string;
}): Promise<CaseNotificationRulesResponse>
```

<sub>`GET /api/v2/cases/projects/{project_id}/notification_rules` · `GetProjectNotificationRules`</sub>

## `datadog.createProjectNotificationRule`

Create a notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createProjectNotificationRule(input: {
  data: CaseNotificationRuleCreate;
  /** Project UUID */
  project_id: string;
}): Promise<CaseNotificationRuleResponse>
```

<sub>`POST /api/v2/cases/projects/{project_id}/notification_rules` · `CreateProjectNotificationRule`</sub>

## `datadog.deleteProjectNotificationRule`

Delete a notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteProjectNotificationRule(input: {
  /** Project UUID */
  project_id: string;
  /** Notification Rule UUID */
  notification_rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/projects/{project_id}/notification_rules/{notification_rule_id}` · `DeleteProjectNotificationRule`</sub>

## `datadog.updateProjectNotificationRule`

Update a notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateProjectNotificationRule(input: {
  data: CaseNotificationRuleUpdate;
  /** Project UUID */
  project_id: string;
  /** Notification Rule UUID */
  notification_rule_id: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/cases/projects/{project_id}/notification_rules/{notification_rule_id}` · `UpdateProjectNotificationRule`</sub>

## `datadog.listCaseAutomationRules`

List automation rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCaseAutomationRules(input: {
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
}): Promise<AutomationRulesResponse>
```

<sub>`GET /api/v2/cases/projects/{project_id}/rules` · `ListCaseAutomationRules`</sub>

## `datadog.createCaseAutomationRule`

Create an automation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseAutomationRule(input: {
  data: AutomationRuleCreate;
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
}): Promise<AutomationRuleResponse>
```

<sub>`POST /api/v2/cases/projects/{project_id}/rules` · `CreateCaseAutomationRule`</sub>

## `datadog.deleteCaseAutomationRule`

Delete an automation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCaseAutomationRule(input: {
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
  /** The UUID of the automation rule. */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/projects/{project_id}/rules/{rule_id}` · `DeleteCaseAutomationRule`</sub>

## `datadog.getCaseAutomationRule`

Get an automation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCaseAutomationRule(input: {
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
  /** The UUID of the automation rule. */
  rule_id: string;
}): Promise<AutomationRuleResponse>
```

<sub>`GET /api/v2/cases/projects/{project_id}/rules/{rule_id}` · `GetCaseAutomationRule`</sub>

## `datadog.updateCaseAutomationRule`

Update an automation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseAutomationRule(input: {
  data: AutomationRuleUpdate;
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
  /** The UUID of the automation rule. */
  rule_id: string;
}): Promise<AutomationRuleResponse>
```

<sub>`PUT /api/v2/cases/projects/{project_id}/rules/{rule_id}` · `UpdateCaseAutomationRule`</sub>

## `datadog.disableCaseAutomationRule`

Disable an automation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.disableCaseAutomationRule(input: {
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
  /** The UUID of the automation rule. */
  rule_id: string;
}): Promise<AutomationRuleResponse>
```

<sub>`POST /api/v2/cases/projects/{project_id}/rules/{rule_id}/disable` · `DisableCaseAutomationRule`</sub>

## `datadog.enableCaseAutomationRule`

Enable an automation rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.enableCaseAutomationRule(input: {
  /** The UUID of the project that owns the automation rules. */
  project_id: string;
  /** The UUID of the automation rule. */
  rule_id: string;
}): Promise<AutomationRuleResponse>
```

<sub>`POST /api/v2/cases/projects/{project_id}/rules/{rule_id}/enable` · `EnableCaseAutomationRule`</sub>

## `datadog.listUserCaseProjectFavorites`

List project favorites — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listUserCaseProjectFavorites(): Promise<ProjectFavoritesResponse>
```

<sub>`GET /api/v2/cases/projects/favorites` · `ListUserCaseProjectFavorites`</sub>

## `datadog.listCaseViews`

List case views — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listCaseViews(input: {
  /** Filter views by project identifier. */
  project_id: string;
}): Promise<CaseViewsResponse>
```

<sub>`GET /api/v2/cases/views` · `ListCaseViews`</sub>

## `datadog.createCaseView`

Create a case view — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createCaseView(input: {
  data: CaseViewCreate;
}): Promise<CaseViewResponse>
```

<sub>`POST /api/v2/cases/views` · `CreateCaseView`</sub>

## `datadog.deleteCaseView`

Delete a case view — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteCaseView(input: {
  /** The UUID of the case view. */
  view_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/cases/views/{view_id}` · `DeleteCaseView`</sub>

## `datadog.getCaseView`

Get a case view — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getCaseView(input: {
  /** The UUID of the case view. */
  view_id: string;
}): Promise<CaseViewResponse>
```

<sub>`GET /api/v2/cases/views/{view_id}` · `GetCaseView`</sub>

## `datadog.updateCaseView`

Update a case view — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateCaseView(input: {
  data: CaseViewUpdate;
  /** The UUID of the case view. */
  view_id: string;
}): Promise<CaseViewResponse>
```

<sub>`PUT /api/v2/cases/views/{view_id}` · `UpdateCaseView`</sub>

## `datadog.listMaintenanceWindows`

List maintenance windows — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMaintenanceWindows(): Promise<MaintenanceWindowsResponse>
```

<sub>`GET /api/v2/maintenance_windows` · `ListMaintenanceWindows`</sub>

## `datadog.createMaintenanceWindow`

Create a maintenance window — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createMaintenanceWindow(input: {
  data: MaintenanceWindowCreate;
}): Promise<MaintenanceWindowResponse>
```

<sub>`POST /api/v2/maintenance_windows` · `CreateMaintenanceWindow`</sub>

## `datadog.deleteMaintenanceWindow`

Delete a maintenance window — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteMaintenanceWindow(input: {
  /** The UUID of the maintenance window. */
  maintenance_window_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/maintenance_windows/{maintenance_window_id}` · `DeleteMaintenanceWindow`</sub>

## `datadog.updateMaintenanceWindow`

Update a maintenance window — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateMaintenanceWindow(input: {
  data: MaintenanceWindowUpdate;
  /** The UUID of the maintenance window. */
  maintenance_window_id: string;
}): Promise<MaintenanceWindowResponse>
```

<sub>`PUT /api/v2/maintenance_windows/{maintenance_window_id}` · `UpdateMaintenanceWindow`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Plans

7 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getPlans`

Get plans paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getPlans(input: {
  /** Whether to include trashed plans in the results. */
  includeTrashed?: boolean;
  /** Whether to include archived plans in the results. */
  includeArchived?: boolean;
  /** The cursor to start from. If not provided, the first page will be returned. */
  cursor?: string;
  /** The maximum number of plans to return per page. The maximum value is 50. The default value is 50. */
  maxResults?: number;
}): Promise<PageWithCursorGetPlanResponseForPage>
```

<sub>`GET /rest/api/3/plans/plan` · `getPlans`</sub>

## `jira.createPlan`

Create plan — [Provider docs](http://www.atlassian.com)

```ts
jira.createPlan(input: {
  /** The cross-project releases to include in the plan. */
  crossProjectReleases?: (CreateCrossProjectReleaseRequest)[];
  /** The custom fields for the plan. */
  customFields?: (CreateCustomFieldRequest)[];
  /** The exclusion rules for the plan. */
  exclusionRules?: CreateExclusionRulesRequest;
  /** The issue sources to include in the plan. */
  issueSources: (CreateIssueSourceRequest)[];
  /** The account ID of the plan lead. */
  leadAccountId?: string;
  /** The plan name. */
  name: string;
  /** The permissions for the plan. */
  permissions?: (CreatePermissionRequest)[];
  /** The scheduling settings for the plan. */
  scheduling: CreateSchedulingRequest;
  /** Whether to accept group IDs instead of group names. Group names are deprecated. */
  useGroupId?: boolean;
}): Promise<number>
```

<sub>`POST /rest/api/3/plans/plan` · `createPlan`</sub>

## `jira.getPlan`

Get plan — [Provider docs](http://www.atlassian.com)

```ts
jira.getPlan(input: {
  /** The ID of the plan. */
  planId: number;
  /** Whether to return group IDs instead of group names. Group names are deprecated. */
  useGroupId?: boolean;
}): Promise<GetPlanResponse>
```

<sub>`GET /rest/api/3/plans/plan/{planId}` · `getPlan`</sub>

## `jira.updatePlan`

Update plan — [Provider docs](http://www.atlassian.com)

```ts
jira.updatePlan(input: {
  body: { [key: string]: unknown };
  /** The ID of the plan. */
  planId: number;
  /** Whether to accept group IDs instead of group names. Group names are deprecated. */
  useGroupId?: boolean;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/plans/plan/{planId}` · `updatePlan`</sub>

## `jira.archivePlan`

Archive plan — [Provider docs](http://www.atlassian.com)

```ts
jira.archivePlan(input: {
  /** The ID of the plan. */
  planId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/plans/plan/{planId}/archive` · `archivePlan`</sub>

## `jira.duplicatePlan`

Duplicate plan — [Provider docs](http://www.atlassian.com)

```ts
jira.duplicatePlan(input: {
  /** The plan name. */
  name: string;
  /** The ID of the plan. */
  planId: number;
}): Promise<number>
```

<sub>`POST /rest/api/3/plans/plan/{planId}/duplicate` · `duplicatePlan`</sub>

## `jira.trashPlan`

Trash plan — [Provider docs](http://www.atlassian.com)

```ts
jira.trashPlan(input: {
  /** The ID of the plan. */
  planId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/plans/plan/{planId}/trash` · `trashPlan`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

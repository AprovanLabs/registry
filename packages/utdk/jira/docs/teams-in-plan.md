# Teams In Plan

9 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getTeams`

Get teams in plan paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getTeams(input: {
  /** The ID of the plan. */
  planId: number;
  /** The cursor to start from. If not provided, the first page will be returned. */
  cursor?: string;
  /** The maximum number of plan teams to return per page. The maximum value is 50. The default value is 50. */
  maxResults?: number;
}): Promise<PageWithCursorGetTeamResponseForPage>
```

<sub>`GET /rest/api/3/plans/plan/{planId}/team` · `getTeams`</sub>

## `jira.addAtlassianTeam`

Add Atlassian team to plan — [Provider docs](http://www.atlassian.com)

```ts
jira.addAtlassianTeam(input: {
  /** The capacity for the Atlassian team. */
  capacity?: number;
  /** The Atlassian team ID. */
  id: string;
  /** The ID of the issue source for the Atlassian team. */
  issueSourceId?: number;
  /** The planning style for the Atlassian team. This must be "Scrum" or "Kanban". */
  planningStyle: "Scrum" | "Kanban";
  /** The sprint length for the Atlassian team. */
  sprintLength?: number;
  /** The ID of the plan. */
  planId: number;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/plans/plan/{planId}/team/atlassian` · `addAtlassianTeam`</sub>

## `jira.removeAtlassianTeam`

Remove Atlassian team from plan — [Provider docs](http://www.atlassian.com)

```ts
jira.removeAtlassianTeam(input: {
  /** The ID of the plan. */
  planId: number;
  /** The ID of the Atlassian team. */
  atlassianTeamId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId}` · `removeAtlassianTeam`</sub>

## `jira.getAtlassianTeam`

Get Atlassian team in plan — [Provider docs](http://www.atlassian.com)

```ts
jira.getAtlassianTeam(input: {
  /** The ID of the plan. */
  planId: number;
  /** The ID of the Atlassian team. */
  atlassianTeamId: string;
}): Promise<GetAtlassianTeamResponse>
```

<sub>`GET /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId}` · `getAtlassianTeam`</sub>

## `jira.updateAtlassianTeam`

Update Atlassian team in plan — [Provider docs](http://www.atlassian.com)

```ts
jira.updateAtlassianTeam(input: {
  body: { [key: string]: unknown };
  /** The ID of the plan. */
  planId: number;
  /** The ID of the Atlassian team. */
  atlassianTeamId: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId}` · `updateAtlassianTeam`</sub>

## `jira.createPlanOnlyTeam`

Create plan-only team — [Provider docs](http://www.atlassian.com)

```ts
jira.createPlanOnlyTeam(input: {
  /** The capacity for the plan-only team. */
  capacity?: number;
  /** The ID of the issue source for the plan-only team. */
  issueSourceId?: number;
  /** The account IDs of the plan-only team members. */
  memberAccountIds?: (string)[];
  /** The plan-only team name. */
  name: string;
  /** The planning style for the plan-only team. This must be "Scrum" or "Kanban". */
  planningStyle: "Scrum" | "Kanban";
  /** The sprint length for the plan-only team. */
  sprintLength?: number;
  /** The ID of the plan. */
  planId: number;
}): Promise<number>
```

<sub>`POST /rest/api/3/plans/plan/{planId}/team/planonly` · `createPlanOnlyTeam`</sub>

## `jira.deletePlanOnlyTeam`

Delete plan-only team — [Provider docs](http://www.atlassian.com)

```ts
jira.deletePlanOnlyTeam(input: {
  /** The ID of the plan. */
  planId: number;
  /** The ID of the plan-only team. */
  planOnlyTeamId: number;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId}` · `deletePlanOnlyTeam`</sub>

## `jira.getPlanOnlyTeam`

Get plan-only team — [Provider docs](http://www.atlassian.com)

```ts
jira.getPlanOnlyTeam(input: {
  /** The ID of the plan. */
  planId: number;
  /** The ID of the plan-only team. */
  planOnlyTeamId: number;
}): Promise<GetPlanOnlyTeamResponse>
```

<sub>`GET /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId}` · `getPlanOnlyTeam`</sub>

## `jira.updatePlanOnlyTeam`

Update plan-only team — [Provider docs](http://www.atlassian.com)

```ts
jira.updatePlanOnlyTeam(input: {
  body: { [key: string]: unknown };
  /** The ID of the plan. */
  planId: number;
  /** The ID of the plan-only team. */
  planOnlyTeamId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId}` · `updatePlanOnlyTeam`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

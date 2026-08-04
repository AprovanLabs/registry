# Teams

34 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.listTeams`

Get all teams — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTeams(input: {
  /** Specific page number to return. */
  "page[number]"?: number;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  sort?: ListTeamsSort;
  /** Included related resources optionally requested. Allowed enum values: `team_links, user_team_permissions` */
  include?: (ListTeamsInclude)[];
  /** Search query. Can be team name, team handle, or email of team member */
  "filter[keyword]"?: string;
  /** When true, only returns teams the current user belongs to */
  "filter[me]"?: boolean;
  /** List of fields that need to be fetched. */
  "fields[team]"?: (TeamsField)[];
}): Promise<TeamsResponse>
```

<sub>`GET /api/v2/team` · `ListTeams`</sub>

## `datadog.createTeam`

Create a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTeam(input: {
  data: TeamCreate;
}): Promise<TeamResponse>
```

<sub>`POST /api/v2/team` · `CreateTeam`</sub>

## `datadog.listTeamHierarchyLinks`

Get team hierarchy links — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTeamHierarchyLinks(input: {
  /** Specific page number to return. */
  "page[number]"?: number;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Filter by parent team ID */
  "filter[parent_team]"?: string;
  /** Filter by sub team ID */
  "filter[sub_team]"?: string;
}): Promise<TeamHierarchyLinksResponse>
```

<sub>`GET /api/v2/team-hierarchy-links` · `ListTeamHierarchyLinks`</sub>

## `datadog.addTeamHierarchyLink`

Create a team hierarchy link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addTeamHierarchyLink(input: {
  data: TeamHierarchyLinkCreate;
}): Promise<TeamHierarchyLinkResponse>
```

<sub>`POST /api/v2/team-hierarchy-links` · `AddTeamHierarchyLink`</sub>

## `datadog.removeTeamHierarchyLink`

Remove a team hierarchy link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeTeamHierarchyLink(input: {
  /** The team hierarchy link's identifier */
  link_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team-hierarchy-links/{link_id}` · `RemoveTeamHierarchyLink`</sub>

## `datadog.getTeamHierarchyLink`

Get a team hierarchy link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamHierarchyLink(input: {
  /** The team hierarchy link's identifier */
  link_id: string;
}): Promise<TeamHierarchyLinkResponse>
```

<sub>`GET /api/v2/team-hierarchy-links/{link_id}` · `GetTeamHierarchyLink`</sub>

## `datadog.listMemberTeams`

Get all member teams — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listMemberTeams(input: {
  /** None */
  super_team_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** List of fields that need to be fetched. */
  "fields[team]"?: (TeamsField)[];
}): Promise<TeamsResponse>
```

<sub>`GET /api/v2/team/{super_team_id}/member_teams` · `ListMemberTeams`</sub>

## `datadog.addMemberTeam`

Add a member team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addMemberTeam(input: {
  data: MemberTeam;
  /** None */
  super_team_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/team/{super_team_id}/member_teams` · `AddMemberTeam`</sub>

## `datadog.removeMemberTeam`

Remove a member team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeMemberTeam(input: {
  /** None */
  super_team_id: string;
  /** None */
  member_team_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team/{super_team_id}/member_teams/{member_team_id}` · `RemoveMemberTeam`</sub>

## `datadog.deleteTeam`

Remove a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTeam(input: {
  /** None */
  team_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team/{team_id}` · `DeleteTeam`</sub>

## `datadog.getTeam`

Get a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeam(input: {
  /** None */
  team_id: string;
}): Promise<TeamResponse>
```

<sub>`GET /api/v2/team/{team_id}` · `GetTeam`</sub>

## `datadog.updateTeam`

Update a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTeam(input: {
  data: TeamUpdate;
  /** None */
  team_id: string;
}): Promise<TeamResponse>
```

<sub>`PATCH /api/v2/team/{team_id}` · `UpdateTeam`</sub>

## `datadog.getTeamLinks`

Get links for a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamLinks(input: {
  /** None */
  team_id: string;
}): Promise<TeamLinksResponse>
```

<sub>`GET /api/v2/team/{team_id}/links` · `GetTeamLinks`</sub>

## `datadog.createTeamLink`

Create a team link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTeamLink(input: {
  data: TeamLinkCreate;
  /** None */
  team_id: string;
}): Promise<TeamLinkResponse>
```

<sub>`POST /api/v2/team/{team_id}/links` · `CreateTeamLink`</sub>

## `datadog.deleteTeamLink`

Remove a team link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTeamLink(input: {
  /** None */
  team_id: string;
  /** None */
  link_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team/{team_id}/links/{link_id}` · `DeleteTeamLink`</sub>

## `datadog.getTeamLink`

Get a team link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamLink(input: {
  /** None */
  team_id: string;
  /** None */
  link_id: string;
}): Promise<TeamLinkResponse>
```

<sub>`GET /api/v2/team/{team_id}/links/{link_id}` · `GetTeamLink`</sub>

## `datadog.updateTeamLink`

Update a team link — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTeamLink(input: {
  data: TeamLinkCreate;
  /** None */
  team_id: string;
  /** None */
  link_id: string;
}): Promise<TeamLinkResponse>
```

<sub>`PATCH /api/v2/team/{team_id}/links/{link_id}` · `UpdateTeamLink`</sub>

## `datadog.getTeamMemberships`

Get team memberships — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamMemberships(input: {
  /** None */
  team_id: string;
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  sort?: GetTeamMembershipsSort;
  /** Search query, can be user email or name */
  "filter[keyword]"?: string;
}): Promise<UserTeamsResponse>
```

<sub>`GET /api/v2/team/{team_id}/memberships` · `GetTeamMemberships`</sub>

## `datadog.createTeamMembership`

Add a user to a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTeamMembership(input: {
  data: UserTeamCreate;
  /** None */
  team_id: string;
}): Promise<UserTeamResponse>
```

<sub>`POST /api/v2/team/{team_id}/memberships` · `CreateTeamMembership`</sub>

## `datadog.deleteTeamMembership`

Remove a user from a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTeamMembership(input: {
  /** None */
  team_id: string;
  /** None */
  user_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team/{team_id}/memberships/{user_id}` · `DeleteTeamMembership`</sub>

## `datadog.updateTeamMembership`

Update a user's membership attributes on a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTeamMembership(input: {
  data: UserTeamUpdate;
  /** None */
  team_id: string;
  /** None */
  user_id: string;
}): Promise<UserTeamResponse>
```

<sub>`PATCH /api/v2/team/{team_id}/memberships/{user_id}` · `UpdateTeamMembership`</sub>

## `datadog.getTeamNotificationRules`

Get team notification rules — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamNotificationRules(input: {
  /** None */
  team_id: string;
}): Promise<TeamNotificationRulesResponse>
```

<sub>`GET /api/v2/team/{team_id}/notification-rules` · `GetTeamNotificationRules`</sub>

## `datadog.createTeamNotificationRule`

Create team notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTeamNotificationRule(input: {
  data: TeamNotificationRule;
  /** None */
  team_id: string;
}): Promise<TeamNotificationRuleResponse>
```

<sub>`POST /api/v2/team/{team_id}/notification-rules` · `CreateTeamNotificationRule`</sub>

## `datadog.deleteTeamNotificationRule`

Delete team notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTeamNotificationRule(input: {
  /** None */
  team_id: string;
  /** None */
  rule_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team/{team_id}/notification-rules/{rule_id}` · `DeleteTeamNotificationRule`</sub>

## `datadog.getTeamNotificationRule`

Get team notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamNotificationRule(input: {
  /** None */
  team_id: string;
  /** None */
  rule_id: string;
}): Promise<TeamNotificationRuleResponse>
```

<sub>`GET /api/v2/team/{team_id}/notification-rules/{rule_id}` · `GetTeamNotificationRule`</sub>

## `datadog.updateTeamNotificationRule`

Update team notification rule — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTeamNotificationRule(input: {
  data: TeamNotificationRule;
  /** None */
  team_id: string;
  /** None */
  rule_id: string;
}): Promise<TeamNotificationRuleResponse>
```

<sub>`PUT /api/v2/team/{team_id}/notification-rules/{rule_id}` · `UpdateTeamNotificationRule`</sub>

## `datadog.getTeamPermissionSettings`

Get permission settings for a team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamPermissionSettings(input: {
  /** None */
  team_id: string;
}): Promise<TeamPermissionSettingsResponse>
```

<sub>`GET /api/v2/team/{team_id}/permission-settings` · `GetTeamPermissionSettings`</sub>

## `datadog.updateTeamPermissionSetting`

Update permission setting for team — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateTeamPermissionSetting(input: {
  data: TeamPermissionSettingUpdate;
  /** None */
  team_id: string;
  /** None */
  action: string;
}): Promise<TeamPermissionSettingResponse>
```

<sub>`PUT /api/v2/team/{team_id}/permission-settings/{action}` · `UpdateTeamPermissionSetting`</sub>

## `datadog.deleteTeamConnections`

Delete team connections — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteTeamConnections(input: {
  /** Array of team connection IDs to delete. */
  data: (TeamConnectionDeleteRequestDataItem)[];
}): Promise<undefined>
```

<sub>`DELETE /api/v2/team/connections` · `DeleteTeamConnections`</sub>

## `datadog.listTeamConnections`

List team connections — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listTeamConnections(input: {
  /** Size for a given page. The maximum allowed value is 100. */
  "page[size]"?: number;
  /** Specific page number to return. */
  "page[number]"?: number;
  /** Filter team connections by external source systems. */
  "filter[sources]"?: (string)[];
  /** Filter team connections by Datadog team IDs. */
  "filter[team_ids]"?: (string)[];
  /** Filter team connections by connected team IDs from external systems. */
  "filter[connected_team_ids]"?: (string)[];
  /** Filter team connections by connection IDs. */
  "filter[connection_ids]"?: (string)[];
}): Promise<TeamConnectionsResponse>
```

<sub>`GET /api/v2/team/connections` · `ListTeamConnections`</sub>

## `datadog.createTeamConnections`

Create team connections — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createTeamConnections(input: {
  /** Array of team connections to create. */
  data: (TeamConnectionCreateData)[];
}): Promise<TeamConnectionsResponse>
```

<sub>`POST /api/v2/team/connections` · `CreateTeamConnections`</sub>

## `datadog.getTeamSync`

Get team sync configurations — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTeamSync(input: {
  "filter[source]": TeamSyncAttributesSource;
}): Promise<TeamSyncResponse>
```

<sub>`GET /api/v2/team/sync` · `GetTeamSync`</sub>

## `datadog.syncTeams`

Link Teams with GitHub Teams — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.syncTeams(input: {
  data: TeamSyncData;
}): Promise<undefined>
```

<sub>`POST /api/v2/team/sync` · `SyncTeams`</sub>

## `datadog.getUserMemberships`

Get user memberships — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getUserMemberships(input: {
  /** None */
  user_uuid: string;
}): Promise<UserTeamsResponse>
```

<sub>`GET /api/v2/users/{user_uuid}/memberships` · `GetUserMemberships`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Teams

8 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getTeams`

List teams — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTeams(input: {
  /** The number of teams to return in the response. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. */
  offset?: number;
  /** A comma-separated list of filters. Each filter is constructed as `field:value`. */
  filter?: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
}): Promise<Teams>
```

<sub>`GET /api/v2/teams` · `getTeams`</sub>

## `launchdarkly.postTeam`

Create team — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postTeam(input: {
  /** List of custom role keys the team will access */
  customRoleKeys?: (string)[];
  /** A description of the team */
  description?: string;
  /** The team key */
  key: string;
  /** A list of member IDs who belong to the team */
  memberIDs?: (string)[];
  /** A human-friendly name for the team */
  name: string;
  /** A list of permission grants. Permission grants allow access to a specific action, without having to create or update a custom role. */
  permissionGrants?: (PermissionGrantInput)[];
  /** A map of role attributes for the team */
  roleAttributes?: RoleAttributeMap;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. */
  expand?: string;
}): Promise<Team>
```

<sub>`POST /api/v2/teams` · `postTeam`</sub>

## `launchdarkly.deleteTeam`

Delete team — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteTeam(input: {
  /** The team key */
  teamKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/teams/{teamKey}` · `deleteTeam`</sub>

## `launchdarkly.getTeam`

Get team — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTeam(input: {
  /** The team key. */
  teamKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
}): Promise<Team>
```

<sub>`GET /api/v2/teams/{teamKey}` · `getTeam`</sub>

## `launchdarkly.patchTeam`

Update team — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchTeam(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require additional parameters as part of this object. */
  instructions: Instructions;
  /** The team key */
  teamKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. */
  expand?: string;
}): Promise<Team>
```

<sub>`PATCH /api/v2/teams/{teamKey}` · `patchTeam`</sub>

## `launchdarkly.getTeamMaintainers`

Get team maintainers — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTeamMaintainers(input: {
  /** The team key */
  teamKey: string;
  /** The number of maintainers to return in the response. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<TeamMaintainers>
```

<sub>`GET /api/v2/teams/{teamKey}/maintainers` · `getTeamMaintainers`</sub>

## `launchdarkly.postTeamMembers`

Add multiple members to team — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postTeamMembers(input: {
  /** CSV file containing email addresses */
  file?: string;
  /** The team key */
  teamKey: string;
}): Promise<TeamImportsRep>
```

<sub>`POST /api/v2/teams/{teamKey}/members` · `postTeamMembers`</sub>

## `launchdarkly.getTeamRoles`

Get team custom roles — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getTeamRoles(input: {
  /** The team key */
  teamKey: string;
  /** The number of roles to return in the response. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
}): Promise<TeamCustomRoles>
```

<sub>`GET /api/v2/teams/{teamKey}/roles` · `getTeamRoles`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

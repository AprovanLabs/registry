# LegacyTeams

8 operations · `@utdk/pipedrive`

```ts
import pipedrive from "@utdk/pipedrive";
```

## `pipedrive.getTeams`

Get all teams

```ts
pipedrive.getTeams(input: {
  /** The field name to sort returned teams by */
  order_by?: "id" | "name" | "manager_id" | "active_flag";
  /** When enabled, the teams will not include IDs of member users */
  skip_users?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: ({ id?: number } & { name?: string; description?: string; manager_id?: number; users?: (number)[] } & { active_flag?: 0 | 1; deleted_flag?: 0 | 1 } & { add_time?: string; created_by_user_id?: number })[] }>
```

<sub>`GET /legacyTeams` · `getTeams`</sub>

## `pipedrive.addTeam`

Add a new team

```ts
pipedrive.addTeam(input: {
  /** The team name */
  name: string;
  /** The team description */
  description?: string;
  /** The team manager ID */
  manager_id: number;
  /** The list of user IDs */
  users?: (number)[];
}): Promise<{ success?: boolean } & { data?: { id?: number } & { name?: string; description?: string; manager_id?: number; users?: (number)[] } & { active_flag?: 0 | 1; deleted_flag?: 0 | 1 } & { add_time?: string; created_by_user_id?: number } }>
```

<sub>`POST /legacyTeams` · `addTeam`</sub>

## `pipedrive.getTeam`

Get a single team

```ts
pipedrive.getTeam(input: {
  /** The ID of the team */
  id: number;
  /** When enabled, the teams will not include IDs of member users */
  skip_users?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: { id?: number } & { name?: string; description?: string; manager_id?: number; users?: (number)[] } & { active_flag?: 0 | 1; deleted_flag?: 0 | 1 } & { add_time?: string; created_by_user_id?: number } }>
```

<sub>`GET /legacyTeams/{id}` · `getTeam`</sub>

## `pipedrive.updateTeam`

Update a team

```ts
pipedrive.updateTeam(input: {
  /** The team name */
  name?: string;
  /** The team description */
  description?: string;
  /** The team manager ID */
  manager_id?: number;
  /** The list of user IDs */
  users?: (number)[];
  /** Flag that indicates whether the team is active */
  active_flag?: 0 | 1;
  /** Flag that indicates whether the team is deleted */
  deleted_flag?: 0 | 1;
  /** The ID of the team */
  id: number;
}): Promise<{ success?: boolean } & { data?: { id?: number } & { name?: string; description?: string; manager_id?: number; users?: (number)[] } & { active_flag?: 0 | 1; deleted_flag?: 0 | 1 } & { add_time?: string; created_by_user_id?: number } }>
```

<sub>`PUT /legacyTeams/{id}` · `updateTeam`</sub>

## `pipedrive.deleteTeamUser`

Delete users from a team

```ts
pipedrive.deleteTeamUser(input: {
  /** The list of user IDs */
  users: (number)[];
  /** The ID of the team */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`DELETE /legacyTeams/{id}/users` · `deleteTeamUser`</sub>

## `pipedrive.getTeamUsers`

Get all users in a team

```ts
pipedrive.getTeamUsers(input: {
  /** The ID of the team */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`GET /legacyTeams/{id}/users` · `getTeamUsers`</sub>

## `pipedrive.addTeamUser`

Add users to a team

```ts
pipedrive.addTeamUser(input: {
  /** The list of user IDs */
  users: (number)[];
  /** The ID of the team */
  id: number;
}): Promise<{ success?: boolean } & { data?: (number)[] }>
```

<sub>`POST /legacyTeams/{id}/users` · `addTeamUser`</sub>

## `pipedrive.getUserTeams`

Get all teams of a user

```ts
pipedrive.getUserTeams(input: {
  /** The ID of the user */
  id: number;
  /** The field name to sort returned teams by */
  order_by?: "id" | "name" | "manager_id" | "active_flag";
  /** When enabled, the teams will not include IDs of member users */
  skip_users?: 0 | 1;
}): Promise<{ success?: boolean } & { data?: ({ id?: number } & { name?: string; description?: string; manager_id?: number; users?: (number)[] } & { active_flag?: 0 | 1; deleted_flag?: 0 | 1 } & { add_time?: string; created_by_user_id?: number })[] }>
```

<sub>`GET /legacyTeams/user/{id}` · `getUserTeams`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

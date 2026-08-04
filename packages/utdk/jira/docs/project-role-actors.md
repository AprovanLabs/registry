# Project Role Actors

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.deleteActor`

Delete actors from project role — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteActor(input: {
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The user account ID of the user to remove from the project role. */
  user?: string;
  /** The name of the group to remove from the project role. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended. */
  group?: string;
  /** The ID of the group to remove from the project role. This parameter cannot be used with the `group` parameter. */
  groupId?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/project/{projectIdOrKey}/role/{id}` · `deleteActor`</sub>

## `jira.addActorUsers`

Add actors to project role — [Provider docs](http://www.atlassian.com)

```ts
jira.addActorUsers(input: {
  /** The name of the group to add. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended. */
  group?: (string)[];
  /** The ID of the group to add. This parameter cannot be used with the `group` parameter. */
  groupId?: (string)[];
  /** The user account ID of the user to add. */
  user?: (string)[];
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
}): Promise<ProjectRole>
```

<sub>`POST /rest/api/3/project/{projectIdOrKey}/role/{id}` · `addActorUsers`</sub>

## `jira.setActors`

Set actors for project role — [Provider docs](http://www.atlassian.com)

```ts
jira.setActors(input: {
  /** The actors to add to the project role.  Add groups using:   *  `atlassian-group-role-actor` and a list of group names.  *  `atlassian-group-role-actor-id` and a list of group IDs.  As a group's name can change, use of `atlassian-group-role-actor-id` is recommended. For example, `"atlassian-group-role-actor-id":["eef79f81-0b89-4fca-a736-4be531a10869","77f6ab39-e755-4570-a6ae-2d7a8df0bcb8"]`.  Add users using `atlassian-user-role-actor` and a list of account IDs. For example, `"atlassian-user-role-actor":["12345678-9abc-def1-2345-6789abcdef12", "abcdef12-3456-789a-bcde-f123456789ab"]`. */
  categorisedActors?: { [key: string]: (string)[] | undefined };
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id?: number;
  /** The project ID or project key (case sensitive). */
  projectIdOrKey: string;
}, options: { params: { id: number } }): Promise<ProjectRole>
```

<sub>`PUT /rest/api/3/project/{projectIdOrKey}/role/{id}` · `setActors`</sub>

## `jira.deleteProjectRoleActorsFromRole`

Delete default actors from project role — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteProjectRoleActorsFromRole(input: {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
  /** The user account ID of the user to remove as a default actor. */
  user?: string;
  /** The group ID of the group to be removed as a default actor. This parameter cannot be used with the `group` parameter. */
  groupId?: string;
  /** The group name of the group to be removed as a default actor.This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended. */
  group?: string;
}): Promise<ProjectRole>
```

<sub>`DELETE /rest/api/3/role/{id}/actors` · `deleteProjectRoleActorsFromRole`</sub>

## `jira.getProjectRoleActorsForRole`

Get default actors for project role — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectRoleActorsForRole(input: {
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
}): Promise<ProjectRole>
```

<sub>`GET /rest/api/3/role/{id}/actors` · `getProjectRoleActorsForRole`</sub>

## `jira.addProjectRoleActorsToRole`

Add default actors to project role — [Provider docs](http://www.atlassian.com)

```ts
jira.addProjectRoleActorsToRole(input: {
  /** The name of the group to add as a default actor. This parameter cannot be used with the `groupId` parameter. As a group's name can change,use of `groupId` is recommended. This parameter accepts a comma-separated list. For example, `"group":["project-admin", "jira-developers"]`. */
  group?: (string)[];
  /** The ID of the group to add as a default actor. This parameter cannot be used with the `group` parameter This parameter accepts a comma-separated list. For example, `"groupId":["77f6ab39-e755-4570-a6ae-2d7a8df0bcb8", "0c011f85-69ed-49c4-a801-3b18d0f771bc"]`. */
  groupId?: (string)[];
  /** The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, `"user":["5b10a2844c20165700ede21g", "5b109f2e9729b51b54dc274d"]`. */
  user?: (string)[];
  /** The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. */
  id: number;
}): Promise<ProjectRole>
```

<sub>`POST /rest/api/3/role/{id}/actors` · `addProjectRoleActorsToRole`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

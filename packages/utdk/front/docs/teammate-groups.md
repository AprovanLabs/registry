# Teammate Groups

14 operations · `@utdk/front`

```ts
import front from "@utdk/front";
```

## `front.listCompanyTeammateGroups`

List teammate groups — [Provider docs](https://community.front.com)

```ts
front.listCompanyTeammateGroups(): Promise<{ _links?: { self?: string }; _results?: (TeammateGroupResponse)[] }>
```

<sub>`GET /teammate_groups` · `list-company-teammate-groups`</sub>

## `front.createCompanyTeammateGroup`

Create teammate group — [Provider docs](https://community.front.com)

```ts
front.createCompanyTeammateGroup(input: {
  /** Name of the teammate group */
  name: string;
  /** Description of the teammate group */
  description?: string;
  /** Permissions for the teammate group */
  permissions?: { contacts?: { access: string; contact_group_ids?: (string)[]; contact_list_ids?: (string)[] } };
}): Promise<TeammateGroupResponse>
```

<sub>`POST /teammate_groups` · `create-company-teammate-group`</sub>

## `front.deleteCompanyTeammateGroup`

Delete teammate group — [Provider docs](https://community.front.com)

```ts
front.deleteCompanyTeammateGroup(input: {
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /teammate_groups/{teammate_group_id}` · `delete-company-teammate-group`</sub>

## `front.getCompanyTeammateGroup`

Get teammate group — [Provider docs](https://community.front.com)

```ts
front.getCompanyTeammateGroup(input: {
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<TeammateGroupResponse>
```

<sub>`GET /teammate_groups/{teammate_group_id}` · `get-company-teammate-group`</sub>

## `front.updateACompanyTeammateGroup`

Update a teammate group — [Provider docs](https://community.front.com)

```ts
front.updateACompanyTeammateGroup(input: {
  /** Name of the teammate group */
  name?: string;
  /** Description of the teammate group */
  description?: string;
  /** Permissions for the teammate group */
  permissions?: { contacts?: { access: string; contact_group_ids?: (string)[]; contact_list_ids?: (string)[] } };
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`PATCH /teammate_groups/{teammate_group_id}` · `update-a-company-teammate-group`</sub>

## `front.removeCompanyTeammateGroupTeamInboxes`

Remove teammate group team inboxes — [Provider docs](https://community.front.com)

```ts
front.removeCompanyTeammateGroupTeamInboxes(input: {
  inbox_ids: (ResourceId)[];
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /teammate_groups/{teammate_group_id}/inboxes` · `remove-company-teammate-group-team-inboxes`</sub>

## `front.listCompanyTeammateGroupTeamInboxes`

List teammate group team inboxes — [Provider docs](https://community.front.com)

```ts
front.listCompanyTeammateGroupTeamInboxes(input: {
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (InboxResponse)[] }>
```

<sub>`GET /teammate_groups/{teammate_group_id}/inboxes` · `list-company-teammate-group-team-inboxes`</sub>

## `front.addCompanyTeammateGroupTeamInboxes`

Add teammate group team inboxes — [Provider docs](https://community.front.com)

```ts
front.addCompanyTeammateGroupTeamInboxes(input: {
  inbox_ids: (ResourceId)[];
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`POST /teammate_groups/{teammate_group_id}/inboxes` · `add-company-teammate-group-team-inboxes`</sub>

## `front.removeCompanyTeammateGroupTeammates`

Remove teammate group teammates — [Provider docs](https://community.front.com)

```ts
front.removeCompanyTeammateGroupTeammates(input: {
  teammate_ids: (ResourceId)[];
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /teammate_groups/{teammate_group_id}/teammates` · `remove-company-teammate-group-teammates`</sub>

## `front.listCompanyTeammateGroupTeammates`

List teammate group teammates — [Provider docs](https://community.front.com)

```ts
front.listCompanyTeammateGroupTeammates(input: {
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TeammateResponse)[] }>
```

<sub>`GET /teammate_groups/{teammate_group_id}/teammates` · `list-company-teammate-group-teammates`</sub>

## `front.addCompanyTeammateGroupTeammates`

Add teammate group teammates — [Provider docs](https://community.front.com)

```ts
front.addCompanyTeammateGroupTeammates(input: {
  teammate_ids: (ResourceId)[];
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`POST /teammate_groups/{teammate_group_id}/teammates` · `add-company-teammate-group-teammates`</sub>

## `front.removeCompanyTeammateGroupTeams`

Remove teammate group teams — [Provider docs](https://community.front.com)

```ts
front.removeCompanyTeammateGroupTeams(input: {
  team_ids: (ResourceId)[];
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`DELETE /teammate_groups/{teammate_group_id}/teams` · `remove-company-teammate-group-teams`</sub>

## `front.listCompanyTeammateGroupTeams`

List teammate group teams — [Provider docs](https://community.front.com)

```ts
front.listCompanyTeammateGroupTeams(input: {
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<{ _links?: { self?: string }; _results?: (TeamPreviewResponse)[] }>
```

<sub>`GET /teammate_groups/{teammate_group_id}/teams` · `list-company-teammate-group-teams`</sub>

## `front.addCompanyTeammateGroupTeams`

Add teammate group teams — [Provider docs](https://community.front.com)

```ts
front.addCompanyTeammateGroupTeams(input: {
  team_ids: (ResourceId)[];
  /** The teammate group ID. */
  teammate_group_id: string;
}): Promise<undefined>
```

<sub>`POST /teammate_groups/{teammate_group_id}/teams` · `add-company-teammate-group-teams`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

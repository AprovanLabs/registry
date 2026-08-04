# Organizations

2 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.organizationsCreateTeam`

Create a Team in an Organization

```ts
digitalocean.organizationsCreateTeam(input: {
  /** The human-readable name for the team to create. */
  name: string;
  /** Optional invitations to send when creating the team. Each invitation includes an email address and a role. The `owner` role cannot be assigned via invitation.  */
  invitations?: (TeamInvitation)[];
}): Promise<{ team: CreateTeam; invitations?: { [key: string]: TeamInvitationStatus | undefined } }>
```

<sub>`POST /v2/organizations/team` · `organizations_create_team`</sub>

## `digitalocean.organizationsListTeams`

List Teams in an Organization

```ts
digitalocean.organizationsListTeams(): Promise<{ teams: (OrganizationTeam)[] }>
```

<sub>`GET /v2/organizations/teams` · `organizations_list_teams`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

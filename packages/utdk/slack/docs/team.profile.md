# Team.Profile

1 operation · `@utdk/slack`

```ts
import slack from "@utdk/slack";
```

## `slack.teamProfileGet`

Retrieve a team's profile. — [API reference](https://api.slack.com/methods/team.profile.get)

```ts
slack.teamProfileGet(input: {
  /** Authentication token. Requires scope: `users.profile:read` */
  token: string;
  /** Filter by visibility. */
  visibility?: string;
}): Promise<{ ok: DefsOkTrue; profile: { fields: (ObjsTeamProfileField)[] } }>
```

<sub>`GET /team.profile.get` · `team_profile_get`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

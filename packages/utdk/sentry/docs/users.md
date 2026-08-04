# Users

1 operation · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizations`

List Your Organizations

```ts
sentry.listOrganizations(): Promise<({ features?: (string)[]; extraOptions?: { [key: string]: { [key: string]: unknown | undefined } | undefined }; access?: (string)[]; onboardingTasks?: ({ task: string | null; status: string; completionSeen: string | null; dateCompleted: string; data: unknown })[]; id: string; slug: string; status: { id: string; name: string }; name: string; dateCreated: string; isEarlyAdopter: boolean; require2FA...>
```

<sub>`GET /api/0/organizations/` · `listOrganizations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Seer

3 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.getOrganizationIssueAutofixState`

Retrieve Seer Issue Fix State

```ts
sentry.getOrganizationIssueAutofixState(): Promise<{ autofix: { [key: string]: unknown | undefined } | null }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/autofix/` · `getOrganizationIssueAutofixState`</sub>

## `sentry.startOrganizationIssueAutofix`

Start Seer Issue Fix

```ts
sentry.startOrganizationIssueAutofix(): Promise<unknown>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/autofix/` · `startOrganizationIssueAutofix`</sub>

## `sentry.listSeerModels`

List Seer AI Models

```ts
sentry.listSeerModels(): Promise<{ models: (string)[] }>
```

<sub>`GET /api/0/seer/models/` · `listSeerModels`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

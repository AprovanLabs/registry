# Project Email

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getProjectEmail`

Get project's sender email — [Provider docs](http://www.atlassian.com)

```ts
jira.getProjectEmail(input: {
  /** The project ID. */
  projectId: number;
}): Promise<ProjectEmailAddress>
```

<sub>`GET /rest/api/3/project/{projectId}/email` · `getProjectEmail`</sub>

## `jira.updateProjectEmail`

Set project's sender email — [Provider docs](http://www.atlassian.com)

```ts
jira.updateProjectEmail(input: {
  /** The email address. */
  emailAddress?: string;
  /** When using a custom domain, the status of the email address. */
  emailAddressStatus?: (string)[];
  /** The project ID. */
  projectId: number;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/project/{projectId}/email` · `updateProjectEmail`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

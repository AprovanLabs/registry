# Application Roles

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllApplicationRoles`

Get all application roles — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllApplicationRoles(): Promise<(ApplicationRole)[]>
```

<sub>`GET /rest/api/3/applicationrole` · `getAllApplicationRoles`</sub>

## `jira.getApplicationRole`

Get application role — [Provider docs](http://www.atlassian.com)

```ts
jira.getApplicationRole(input: {
  /** The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role. */
  key: string;
}): Promise<ApplicationRole>
```

<sub>`GET /rest/api/3/applicationrole/{key}` · `getApplicationRole`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

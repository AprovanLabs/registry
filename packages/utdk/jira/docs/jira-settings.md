# Jira Settings

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getApplicationProperty`

Get application property — [Provider docs](http://www.atlassian.com)

```ts
jira.getApplicationProperty(input: {
  /** The key of the application property. */
  key?: string;
  /** The permission level of all items being returned in the list. */
  permissionLevel?: string;
  /** When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*. */
  keyFilter?: string;
}): Promise<(ApplicationProperty)[]>
```

<sub>`GET /rest/api/3/application-properties` · `getApplicationProperty`</sub>

## `jira.setApplicationProperty`

Set application property — [Provider docs](http://www.atlassian.com)

```ts
jira.setApplicationProperty(input: {
  /** The ID of the application property. */
  id?: string;
  /** The new value. */
  value?: string;
}, options: { params: { id: string } }): Promise<ApplicationProperty>
```

<sub>`PUT /rest/api/3/application-properties/{id}` · `setApplicationProperty`</sub>

## `jira.getAdvancedSettings`

Get advanced settings — [Provider docs](http://www.atlassian.com)

```ts
jira.getAdvancedSettings(): Promise<(ApplicationProperty)[]>
```

<sub>`GET /rest/api/3/application-properties/advanced-settings` · `getAdvancedSettings`</sub>

## `jira.getConfiguration`

Get global settings — [Provider docs](http://www.atlassian.com)

```ts
jira.getConfiguration(): Promise<Configuration>
```

<sub>`GET /rest/api/3/configuration` · `getConfiguration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

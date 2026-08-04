# Issue Worklog Properties

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getWorklogPropertyKeys`

Get worklog property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorklogPropertyKeys(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties` · `getWorklogPropertyKeys`</sub>

## `jira.deleteWorklogProperty`

Delete worklog property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteWorklogProperty(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}` · `deleteWorklogProperty`</sub>

## `jira.getWorklogProperty`

Get worklog property — [Provider docs](http://www.atlassian.com)

```ts
jira.getWorklogProperty(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}` · `getWorklogProperty`</sub>

## `jira.setWorklogProperty`

Set worklog property — [Provider docs](http://www.atlassian.com)

```ts
jira.setWorklogProperty(input: {
  body: unknown;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the worklog. */
  worklogId: string;
  /** The key of the issue property. The maximum length is 255 characters. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}` · `setWorklogProperty`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

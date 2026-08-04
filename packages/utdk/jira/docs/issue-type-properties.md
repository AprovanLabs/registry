# Issue Type Properties

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueTypePropertyKeys`

Get issue type property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypePropertyKeys(input: {
  /** The ID of the issue type. */
  issueTypeId: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/issuetype/{issueTypeId}/properties` · `getIssueTypePropertyKeys`</sub>

## `jira.deleteIssueTypeProperty`

Delete issue type property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueTypeProperty(input: {
  /** The ID of the issue type. */
  issueTypeId: string;
  /** The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}` · `deleteIssueTypeProperty`</sub>

## `jira.getIssueTypeProperty`

Get issue type property — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueTypeProperty(input: {
  /** The ID of the issue type. */
  issueTypeId: string;
  /** The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}` · `getIssueTypeProperty`</sub>

## `jira.setIssueTypeProperty`

Set issue type property — [Provider docs](http://www.atlassian.com)

```ts
jira.setIssueTypeProperty(input: {
  body: unknown;
  /** The ID of the issue type. */
  issueTypeId: string;
  /** The key of the issue type property. The maximum length is 255 characters. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}` · `setIssueTypeProperty`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

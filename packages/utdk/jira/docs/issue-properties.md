# Issue Properties

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssuePropertyKeys`

Get issue property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssuePropertyKeys(input: {
  /** The key or ID of the issue. */
  issueIdOrKey: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/properties` · `getIssuePropertyKeys`</sub>

## `jira.deleteIssueProperty`

Delete issue property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueProperty(input: {
  /** The key or ID of the issue. */
  issueIdOrKey: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}` · `deleteIssueProperty`</sub>

## `jira.getIssueProperty`

Get issue property — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueProperty(input: {
  /** The key or ID of the issue. */
  issueIdOrKey: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}` · `getIssueProperty`</sub>

## `jira.setIssueProperty`

Set issue property — [Provider docs](http://www.atlassian.com)

```ts
jira.setIssueProperty(input: {
  body: unknown;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The key of the issue property. The maximum length is 255 characters. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}` · `setIssueProperty`</sub>

## `jira.bulkSetIssuesPropertiesList`

Bulk set issues properties by list — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkSetIssuesPropertiesList(input: {
  /** A list of entity property IDs. */
  entitiesIds?: (number)[];
  /** A list of entity property keys and values. */
  properties?: { [key: string]: JsonNode | undefined };
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issue/properties` · `bulkSetIssuesPropertiesList`</sub>

## `jira.bulkDeleteIssueProperty`

Bulk delete issue property — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkDeleteIssueProperty(input: {
  /** The value of properties to perform the bulk operation on. */
  currentValue?: unknown;
  /** List of issues to perform the bulk delete operation on. */
  entityIds?: (number)[];
  /** The key of the property. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/issue/properties/{propertyKey}` · `bulkDeleteIssueProperty`</sub>

## `jira.bulkSetIssueProperty`

Bulk set issue property — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkSetIssueProperty(input: {
  /** EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are `issue` and `user`. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored. */
  expression?: string;
  /** The bulk operation filter. */
  filter?: IssueFilterForBulkPropertySet;
  /** The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. */
  value?: unknown;
  /** The key of the property. The maximum length is 255 characters. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issue/properties/{propertyKey}` · `bulkSetIssueProperty`</sub>

## `jira.bulkSetIssuePropertiesByIssue`

Bulk set issue properties by issue — [Provider docs](http://www.atlassian.com)

```ts
jira.bulkSetIssuePropertiesByIssue(input: {
  /** A list of issue IDs and their respective properties. */
  issues?: (IssueEntityPropertiesForMultiUpdate)[];
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issue/properties/multi` · `bulkSetIssuePropertiesByIssue`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

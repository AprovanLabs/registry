# Issue Comment Properties

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getCommentPropertyKeys`

Get comment property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getCommentPropertyKeys(input: {
  /** The ID of the comment. */
  commentId: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/comment/{commentId}/properties` · `getCommentPropertyKeys`</sub>

## `jira.deleteCommentProperty`

Delete comment property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteCommentProperty(input: {
  /** The ID of the comment. */
  commentId: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/comment/{commentId}/properties/{propertyKey}` · `deleteCommentProperty`</sub>

## `jira.getCommentProperty`

Get comment property — [Provider docs](http://www.atlassian.com)

```ts
jira.getCommentProperty(input: {
  /** The ID of the comment. */
  commentId: string;
  /** The key of the property. */
  propertyKey: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/comment/{commentId}/properties/{propertyKey}` · `getCommentProperty`</sub>

## `jira.setCommentProperty`

Set comment property — [Provider docs](http://www.atlassian.com)

```ts
jira.setCommentProperty(input: {
  body: unknown;
  /** The ID of the comment. */
  commentId: string;
  /** The key of the property. The maximum length is 255 characters. */
  propertyKey: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/comment/{commentId}/properties/{propertyKey}` · `setCommentProperty`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

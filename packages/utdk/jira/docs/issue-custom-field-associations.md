# Issue Custom Field Associations

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removeAssociations`

Remove associations — [Provider docs](http://www.atlassian.com)

```ts
jira.removeAssociations(input: {
  /** Contexts to associate/unassociate the fields with. */
  associationContexts: (AssociationContextObject)[];
  /** Fields to associate/unassociate with projects. */
  fields: (FieldIdentifierObject)[];
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/field/association` · `removeAssociations`</sub>

## `jira.createAssociations`

Create associations — [Provider docs](http://www.atlassian.com)

```ts
jira.createAssociations(input: {
  /** Contexts to associate/unassociate the fields with. */
  associationContexts: (AssociationContextObject)[];
  /** Fields to associate/unassociate with projects. */
  fields: (FieldIdentifierObject)[];
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/field/association` · `createAssociations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

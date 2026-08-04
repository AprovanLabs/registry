# JQL

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAutoComplete`

Get field reference data (GET) — [Provider docs](http://www.atlassian.com)

```ts
jira.getAutoComplete(): Promise<JqlReferenceData>
```

<sub>`GET /rest/api/3/jql/autocompletedata` · `getAutoComplete`</sub>

## `jira.getAutoCompletePost`

Get field reference data (POST) — [Provider docs](http://www.atlassian.com)

```ts
jira.getAutoCompletePost(input: {
  /** Include collapsed fields for fields that have non-unique names. */
  includeCollapsedFields?: boolean;
  /** List of project IDs used to filter the visible field details returned. */
  projectIds?: (number)[];
}): Promise<JqlReferenceData>
```

<sub>`POST /rest/api/3/jql/autocompletedata` · `getAutoCompletePost`</sub>

## `jira.getFieldAutoCompleteForQueryString`

Get field auto complete suggestions — [Provider docs](http://www.atlassian.com)

```ts
jira.getFieldAutoCompleteForQueryString(input: {
  /** The name of the field. */
  fieldName?: string;
  /** The partial field item name entered by the user. */
  fieldValue?: string;
  /** The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*. */
  predicateName?: string;
  /** The partial predicate item name entered by the user. */
  predicateValue?: string;
}): Promise<AutoCompleteSuggestions>
```

<sub>`GET /rest/api/3/jql/autocompletedata/suggestions` · `getFieldAutoCompleteForQueryString`</sub>

## `jira.parseJqlQueries`

Parse JQL query — [Provider docs](http://www.atlassian.com)

```ts
jira.parseJqlQueries(input: {
  /** A list of queries to parse. */
  queries: (string)[];
  /** How to validate the JQL query and treat the validation results. Validation options include:   *  `strict` Returns all errors. If validation fails, the query structure is not returned.  *  `warn` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.  *  `none` No validation is performed. If JQL query is correctly formed, the query structure is returned. */
  validation: "strict" | "warn" | "none";
}): Promise<ParsedJqlQueries>
```

<sub>`POST /rest/api/3/jql/parse` · `parseJqlQueries`</sub>

## `jira.migrateQueries`

Convert user identifiers to account IDs in JQL queries — [Provider docs](http://www.atlassian.com)

```ts
jira.migrateQueries(input: {
  /** A list of queries with user identifiers. Maximum of 100 queries. */
  queryStrings?: (string)[];
}): Promise<ConvertedJqlQueries>
```

<sub>`POST /rest/api/3/jql/pdcleaner` · `migrateQueries`</sub>

## `jira.sanitiseJqlQueries`

Sanitize JQL queries — [Provider docs](http://www.atlassian.com)

```ts
jira.sanitiseJqlQueries(input: {
  /** The list of JQL queries to sanitize. Must contain unique values. Maximum of 20 queries. */
  queries: (JqlQueryToSanitize)[];
}): Promise<SanitizedJqlQueries>
```

<sub>`POST /rest/api/3/jql/sanitize` · `sanitiseJqlQueries`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

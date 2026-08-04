# Issue Search

7 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssuePickerResource`

Get issue picker suggestions — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssuePickerResource(input: {
  /** A string to match against text fields in the issue such as title, description, or comments. */
  query?: string;
  /** A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead. */
  currentJQL?: string;
  /** The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query. */
  currentIssueKey?: string;
  /** The ID of a project that suggested issues must belong to. */
  currentProjectId?: string;
  /** Indicate whether to include subtasks in the suggestions list. */
  showSubTasks?: boolean;
  /** When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query. */
  showSubTaskParent?: boolean;
}): Promise<IssuePickerSuggestions>
```

<sub>`GET /rest/api/3/issue/picker` · `getIssuePickerResource`</sub>

## `jira.matchIssues`

Check issues against JQL — [Provider docs](http://www.atlassian.com)

```ts
jira.matchIssues(input: {
  /** A list of issue IDs. */
  issueIds: (number)[];
  /** A list of JQL queries. */
  jqls: (string)[];
}): Promise<IssueMatches>
```

<sub>`POST /rest/api/3/jql/match` · `matchIssues`</sub>

## `jira.searchForIssuesUsingJql`

Currently being removed. Search for issues using JQL (GET) — [Provider docs](http://www.atlassian.com)

```ts
jira.searchForIssuesUsingJql(input: {
  /** The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:   *  If no JQL expression is provided, all issues are returned.  *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.  *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required. */
  jql?: string;
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. */
  maxResults?: number;
  /** Determines how to validate the JQL query and treat the validation results. Supported values are:   *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  `warn` Returns all errors as warnings.  *  `none` No validation is performed.  *  `true` *Deprecated* A legacy synonym for `strict`.  *  `false` *Deprecated* A legacy synonym for `warn`.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value. */
  validateQuery?: "strict" | "warn" | "none" | "true" | "false";
  /** A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  This parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: (string)[];
  /** Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version. */
  expand?: string;
  /** A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified. */
  properties?: (string)[];
  /** Reference fields by their key (rather than ID). */
  fieldsByKeys?: boolean;
  /** Whether to fail the request quickly in case of an error while loading fields for an issue. For `failFast=true`, if one field fails, the entire operation fails. For `failFast=false`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s). */
  failFast?: boolean;
}): Promise<SearchResults>
```

<sub>`GET /rest/api/3/search` · `searchForIssuesUsingJql`</sub>

## `jira.searchForIssuesUsingJqlPost`

Currently being removed. Search for issues using JQL (POST) — [Provider docs](http://www.atlassian.com)

```ts
jira.searchForIssuesUsingJqlPost(input: {
  /** Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version. */
  expand?: (string)[];
  /** A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  The default is `*navigable`.  Examples:   *  `summary,comment` Returns the summary and comments fields only.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  Multiple `fields` parameters can be included in a request.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: (string)[];
  /** Reference fields by their key (rather than ID). The default is `false`. */
  fieldsByKeys?: boolean;
  /** A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. */
  jql?: string;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. */
  properties?: (string)[];
  /** The index of the first item to return in the page of results (page offset). The base index is `0`. */
  startAt?: number;
  /** Determines how to validate the JQL query and treat the validation results. Supported values:   *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  `warn` Returns all errors as warnings.  *  `none` No validation is performed.  *  `true` *Deprecated* A legacy synonym for `strict`.  *  `false` *Deprecated* A legacy synonym for `warn`.  The default is `strict`.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value. */
  validateQuery?: "strict" | "warn" | "none" | "true" | "false";
}): Promise<SearchResults>
```

<sub>`POST /rest/api/3/search` · `searchForIssuesUsingJqlPost`</sub>

## `jira.countIssues`

Count issues using JQL — [Provider docs](http://www.atlassian.com)

```ts
jira.countIssues(input: {
  /** A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction. */
  jql?: string;
}): Promise<JqlCountResultsBean>
```

<sub>`POST /rest/api/3/search/approximate-count` · `countIssues`</sub>

## `jira.searchAndReconsileIssuesUsingJql`

Search for issues using JQL enhanced search (GET) — [Provider docs](http://www.atlassian.com)

```ts
jira.searchAndReconsileIssuesUsingJql(input: {
  /** A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.   *  Example of an unbounded query: `order by key desc`.  *  Example of a bounded query: `assignee = currentUser() order by key`.  Additionally, `orderBy` clause can contain a maximum of 7 fields. */
  jql?: string;
  /** The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues.  Note: The `nextPageToken` field is **not included** in the response for the last page, indicating there is no next page. */
  nextPageToken?: string;
  /** The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. It returns max 5000 issues. */
  maxResults?: number;
  /** A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  `id` Returns only issue IDs.  *  Any issue field, prefixed with a minus to exclude.  The default is `id`.  Examples:   *  `summary,comment` Returns only the summary and comments fields only.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  Multiple `fields` parameters can be included in a request.  Note: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: (string)[];
  /** Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a comma-delimited string of values. The expand options are:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.  Examples: `"names,changelog"` Returns the display name of each field as well as a list of recent updates to an issue. */
  expand?: string;
  /** A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. */
  properties?: (string)[];
  /** Reference fields by their key (rather than ID). The default is `false`. */
  fieldsByKeys?: boolean;
  /** Fail this request early if we can't retrieve all field data. */
  failFast?: boolean;
  /** Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. This list of ids should be consistent with each paginated request across different pages. */
  reconcileIssues?: (number)[];
}): Promise<SearchAndReconcileResults>
```

<sub>`GET /rest/api/3/search/jql` · `searchAndReconsileIssuesUsingJql`</sub>

## `jira.searchAndReconsileIssuesUsingJqlPost`

Search for issues using JQL enhanced search (POST) — [Provider docs](http://www.atlassian.com)

```ts
jira.searchAndReconsileIssuesUsingJqlPost(input: {
  /** Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a comma-delimited string of values. The expand options are:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.  Examples: `"names,changelog"` Returns the display name of each field as well as a list of recent updates to an issue. */
  expand?: string;
  /** A list of fields to return for each issue. Use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  `id` Returns only issue IDs.  *  Any issue field, prefixed with a dash to exclude.  The default is `id`.  Examples:   *  `summary,comment` Returns the summary and comments fields only.  *  `*all,-comment` Returns all fields except comments.  Multiple `fields` parameters can be included in a request.  Note: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: (string)[];
  /** Reference fields by their key (rather than ID). The default is `false`. */
  fieldsByKeys?: boolean;
  /** A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.   *  Example of an unbounded query: `order by key desc`.  *  Example of a bounded query: `assignee = currentUser() order by key`.  Additionally, `orderBy` clause can contain a maximum of 7 fields. */
  jql?: string;
  /** The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. It returns max 5000 issues. */
  maxResults?: number;
  /** The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues. */
  nextPageToken?: string;
  /** A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. */
  properties?: (string)[];
  /** Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. This list of ids should be consistent with each paginated request across different pages. */
  reconcileIssues?: (number)[];
}): Promise<SearchAndReconcileResults>
```

<sub>`POST /rest/api/3/search/jql` · `searchAndReconsileIssuesUsingJqlPost`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

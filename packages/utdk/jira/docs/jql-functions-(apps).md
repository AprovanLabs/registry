# JQL Functions (Apps)

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getPrecomputations`

Get precomputations (apps) — [Provider docs](http://www.atlassian.com)

```ts
jira.getPrecomputations(input: {
  /** The function key in format:   *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`  *  Connect: `[App key]__[Module key]` */
  functionKey?: (string)[];
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: number;
  /** The maximum number of items to return per page. */
  maxResults?: number;
  /** [Order](#ordering) the results by a field:   *  `functionKey` Sorts by the functionKey.  *  `used` Sorts by the used timestamp.  *  `created` Sorts by the created timestamp.  *  `updated` Sorts by the updated timestamp. */
  orderBy?: string;
}): Promise<PageBean2JqlFunctionPrecomputationBean>
```

<sub>`GET /rest/api/3/jql/function/computation` · `getPrecomputations`</sub>

## `jira.updatePrecomputations`

Update precomputations (apps) — [Provider docs](http://www.atlassian.com)

```ts
jira.updatePrecomputations(input: {
  values?: (JqlFunctionPrecomputationUpdateBean)[];
  skipNotFoundPrecomputations?: boolean;
}): Promise<JqlFunctionPrecomputationUpdateResponse>
```

<sub>`POST /rest/api/3/jql/function/computation` · `updatePrecomputations`</sub>

## `jira.getPrecomputationsById`

Get precomputations by ID (apps) — [Provider docs](http://www.atlassian.com)

```ts
jira.getPrecomputationsById(input: {
  precomputationIDs?: (string)[];
  /** [Order](#ordering) the results by a field:   *  `functionKey` Sorts by the functionKey.  *  `used` Sorts by the used timestamp.  *  `created` Sorts by the created timestamp.  *  `updated` Sorts by the updated timestamp. */
  orderBy?: string;
}): Promise<JqlFunctionPrecomputationGetByIdResponse>
```

<sub>`POST /rest/api/3/jql/function/computation/search` · `getPrecomputationsByID`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Issue Votes

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removeVote`

Delete vote — [Provider docs](http://www.atlassian.com)

```ts
jira.removeVote(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/votes` · `removeVote`</sub>

## `jira.getVotes`

Get votes — [Provider docs](http://www.atlassian.com)

```ts
jira.getVotes(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}): Promise<Votes>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/votes` · `getVotes`</sub>

## `jira.addVote`

Add vote — [Provider docs](http://www.atlassian.com)

```ts
jira.addVote(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/votes` · `addVote`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

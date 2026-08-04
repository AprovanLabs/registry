# Issue Watchers

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removeWatcher`

Delete watcher — [Provider docs](http://www.atlassian.com)

```ts
jira.removeWatcher(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. */
  accountId?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/watchers` · `removeWatcher`</sub>

## `jira.getIssueWatchers`

Get issue watchers — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueWatchers(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}): Promise<Watchers>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/watchers` · `getIssueWatchers`</sub>

## `jira.addWatcher`

Add watcher — [Provider docs](http://www.atlassian.com)

```ts
jira.addWatcher(input: {
  body: string;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/watchers` · `addWatcher`</sub>

## `jira.getIsWatchingIssueBulk`

Get is watching issue bulk — [Provider docs](http://www.atlassian.com)

```ts
jira.getIsWatchingIssueBulk(input: {
  /** The list of issue IDs. */
  issueIds: (string)[];
}): Promise<BulkIssueIsWatching>
```

<sub>`POST /rest/api/3/issue/watching` · `getIsWatchingIssueBulk`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Migration Of Connect Modules To Forge

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet`

Get Connect issue field migration task — [Provider docs](http://www.atlassian.com)

```ts
jira.connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet(input: {
  /** The key of the Connect app that contains the Jira issue field being migrated. */
  connectKey: string;
  /** The module key of the Connect issue field being migrated. */
  jiraIssueFieldsKey: string;
}): Promise<TaskProgress>
```

<sub>`GET /rest/atlassian-connect/1/migration/{connectKey}/{jiraIssueFieldsKey}/task` · `ConnectToForgeMigrationFetchTaskResource.fetchMigrationTask_get`</sub>

## `jira.connectToForgeMigrationTaskSubmissionResourceSubmitTaskPost`

Submit Connect issue field migration task — [Provider docs](http://www.atlassian.com)

```ts
jira.connectToForgeMigrationTaskSubmissionResourceSubmitTaskPost(input: {
  /** The key of the Connect app that contains the Jira issue field being migrated. */
  connectKey: string;
  /** The module key of the Connect issue field being migrated. */
  jiraIssueFieldsKey: string;
  /** Whether to retrigger the migration if it has already completed. */
  retriggerCompletedMigration?: boolean;
}): Promise<undefined>
```

<sub>`POST /rest/atlassian-connect/1/migration/{connectKey}/{jiraIssueFieldsKey}/task` · `ConnectToForgeMigrationTaskSubmissionResource.submitTask_post`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

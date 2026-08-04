# Issue Remote Links

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.deleteRemoteIssueLinkByGlobalId`

Delete remote issue link by global ID — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteRemoteIssueLinkByGlobalId(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The global ID of a remote issue link. */
  globalId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/remotelink` · `deleteRemoteIssueLinkByGlobalId`</sub>

## `jira.getRemoteIssueLinks`

Get remote issue links — [Provider docs](http://www.atlassian.com)

```ts
jira.getRemoteIssueLinks(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The global ID of the remote issue link. */
  globalId?: string;
}): Promise<(RemoteIssueLink)[] | RemoteIssueLink>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/remotelink` · `getRemoteIssueLinks`</sub>

## `jira.createOrUpdateRemoteIssueLink`

Create or update remote issue link — [Provider docs](http://www.atlassian.com)

```ts
jira.createOrUpdateRemoteIssueLink(input: {
  /** Details of the remote application the linked item is in. For example, trello. */
  application?: Application;
  /** An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.  Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.  The maximum length is 255 characters. */
  globalId?: string;
  /** Details of the item linked to. */
  object: RemoteObject;
  /** Description of the relationship between the issue and the linked item. If not set, the relationship description "links to" is used in Jira. */
  relationship?: string;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  [key: string]: unknown;
}): Promise<RemoteIssueLinkIdentifies>
```

<sub>`POST /rest/api/3/issue/{issueIdOrKey}/remotelink` · `createOrUpdateRemoteIssueLink`</sub>

## `jira.deleteRemoteIssueLinkById`

Delete remote issue link by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteRemoteIssueLinkById(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of a remote issue link. */
  linkId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}` · `deleteRemoteIssueLinkById`</sub>

## `jira.getRemoteIssueLinkById`

Get remote issue link by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.getRemoteIssueLinkById(input: {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the remote issue link. */
  linkId: string;
}): Promise<RemoteIssueLink>
```

<sub>`GET /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}` · `getRemoteIssueLinkById`</sub>

## `jira.updateRemoteIssueLink`

Update remote issue link by ID — [Provider docs](http://www.atlassian.com)

```ts
jira.updateRemoteIssueLink(input: {
  /** Details of the remote application the linked item is in. For example, trello. */
  application?: Application;
  /** An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.  Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.  The maximum length is 255 characters. */
  globalId?: string;
  /** Details of the item linked to. */
  object: RemoteObject;
  /** Description of the relationship between the issue and the linked item. If not set, the relationship description "links to" is used in Jira. */
  relationship?: string;
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the remote issue link. */
  linkId: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}` · `updateRemoteIssueLink`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

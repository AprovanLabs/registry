# Issue Link Types

5 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getIssueLinkTypes`

Get issue link types — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueLinkTypes(): Promise<IssueLinkTypes>
```

<sub>`GET /rest/api/3/issueLinkType` · `getIssueLinkTypes`</sub>

## `jira.createIssueLinkType`

Create issue link type — [Provider docs](http://www.atlassian.com)

```ts
jira.createIssueLinkType(input: {
  /** The ID of the issue link type and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `name` isn't provided. Otherwise, read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only. */
  id?: string;
  /** The description of the issue link type inward link and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. */
  inward?: string;
  /** The name of the issue link type and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `id` isn't provided. Otherwise, read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. */
  name?: string;
  /** The description of the issue link type outward link and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. */
  outward?: string;
  /** The URL of the issue link type. Read only. */
  self?: string;
}): Promise<IssueLinkType>
```

<sub>`POST /rest/api/3/issueLinkType` · `createIssueLinkType`</sub>

## `jira.deleteIssueLinkType`

Delete issue link type — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteIssueLinkType(input: {
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/issueLinkType/{issueLinkTypeId}` · `deleteIssueLinkType`</sub>

## `jira.getIssueLinkType`

Get issue link type — [Provider docs](http://www.atlassian.com)

```ts
jira.getIssueLinkType(input: {
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
}): Promise<IssueLinkType>
```

<sub>`GET /rest/api/3/issueLinkType/{issueLinkTypeId}` · `getIssueLinkType`</sub>

## `jira.updateIssueLinkType`

Update issue link type — [Provider docs](http://www.atlassian.com)

```ts
jira.updateIssueLinkType(input: {
  /** The ID of the issue link type and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `name` isn't provided. Otherwise, read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only. */
  id?: string;
  /** The description of the issue link type inward link and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. */
  inward?: string;
  /** The name of the issue link type and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `id` isn't provided. Otherwise, read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. */
  name?: string;
  /** The description of the issue link type outward link and is used as follows:   *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only. */
  outward?: string;
  /** The URL of the issue link type. Read only. */
  self?: string;
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
}): Promise<IssueLinkType>
```

<sub>`PUT /rest/api/3/issueLinkType/{issueLinkTypeId}` · `updateIssueLinkType`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

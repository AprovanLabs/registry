# Account Members

7 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getMembers`

List account members — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMembers(input: {
  /** The number of members to return in the response. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above. */
  filter?: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
  /** A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. */
  sort?: string;
}): Promise<Members>
```

<sub>`GET /api/v2/members` · `getMembers`</sub>

## `launchdarkly.patchMembers`

Modify account members — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchMembers(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require additional parameters as part of this object. */
  instructions: Instructions;
}): Promise<BulkEditMembersRep>
```

<sub>`PATCH /api/v2/members` · `patchMembers`</sub>

## `launchdarkly.postMembers`

Invite new members — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postMembers(input: {
  body: NewMemberFormListPost;
}): Promise<Members>
```

<sub>`POST /api/v2/members` · `postMembers`</sub>

## `launchdarkly.deleteMember`

Delete account member — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteMember(input: {
  /** The member ID */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/members/{id}` · `deleteMember`</sub>

## `launchdarkly.getMember`

Get account member — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getMember(input: {
  /** The member ID */
  id: string;
  /** A comma-separated list of properties that can reveal additional information in the response. */
  expand?: string;
}): Promise<Member>
```

<sub>`GET /api/v2/members/{id}` · `getMember`</sub>

## `launchdarkly.patchMember`

Modify an account member — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchMember(input: {
  body: JsonPatch;
  /** The member ID */
  id: string;
}): Promise<Member>
```

<sub>`PATCH /api/v2/members/{id}` · `patchMember`</sub>

## `launchdarkly.postMemberTeams`

Add a member to teams — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postMemberTeams(input: {
  /** List of team keys */
  teamKeys: (string)[];
  /** The member ID */
  id: string;
}): Promise<Member>
```

<sub>`POST /api/v2/members/{id}/teams` · `postMemberTeams`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

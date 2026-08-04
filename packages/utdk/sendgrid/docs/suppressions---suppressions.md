# Suppressions   Suppressions

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getAsmGroupsGroupIdSuppressions`

Retrieve all suppressions for a suppression group — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAsmGroupsGroupIdSuppressions(input: {
  /** The id of the unsubscribe group that you are adding suppressions to. */
  group_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(string)[]>
```

<sub>`GET /asm/groups/{group_id}/suppressions` · `GET_asm-groups-group_id-suppressions`</sub>

## `sendgrid.postAsmGroupsGroupIdSuppressions`

Add suppressions to a suppression group — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postAsmGroupsGroupIdSuppressions(input: {
  /** The array of email addresses to add or find. */
  recipient_emails: (string)[];
  /** The id of the unsubscribe group that you are adding suppressions to. */
  group_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipient_emails?: (string)[] }>
```

<sub>`POST /asm/groups/{group_id}/suppressions` · `POST_asm-groups-group_id-suppressions`</sub>

## `sendgrid.deleteAsmGroupsGroupIdSuppressionsEmail`

Delete a suppression from a suppression group — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteAsmGroupsGroupIdSuppressionsEmail(input: {
  /** The id of the suppression group that you are removing an email address from. */
  group_id: string;
  /** The email address that you want to remove from the suppression group. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /asm/groups/{group_id}/suppressions/{email}` · `DELETE_asm-groups-group_id-suppressions-email`</sub>

## `sendgrid.postAsmGroupsGroupIdSuppressionsSearch`

Search for suppressions within a group — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postAsmGroupsGroupIdSuppressionsSearch(input: {
  /** The array of email addresses to add or find. */
  recipient_emails: (string)[];
  /** The ID of the suppression group that you would like to search. */
  group_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(string)[]>
```

<sub>`POST /asm/groups/{group_id}/suppressions/search` · `POST_asm-groups-group_id-suppressions-search`</sub>

## `sendgrid.getAsmSuppressions`

Retrieve all suppressions — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAsmSuppressions(options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ created_at: number; email: string; group_id: number; group_name: string })[]>
```

<sub>`GET /asm/suppressions` · `GET_asm-suppressions`</sub>

## `sendgrid.getAsmSuppressionsEmail`

Retrieve all suppression groups for an email address — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAsmSuppressionsEmail(input: {
  /** The email address that you want to search suppression groups for. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ suppressions: ({ description: string; id: number; is_default: boolean; name: string; suppressed: boolean })[] }>
```

<sub>`GET /asm/suppressions/{email}` · `GET_asm-suppressions-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

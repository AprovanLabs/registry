# Suppressions   Unsubscribe Groups

5 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getAsmGroups`

Retrieve all suppression groups associated with the user. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAsmGroups(input: {
  id?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(SuppressionGroup)[]>
```

<sub>`GET /asm/groups` · `GET_asm-groups`</sub>

## `sendgrid.postAsmGroups`

Create a new suppression group — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postAsmGroups(input: {
  /** A brief description of your suppression group. Required when creating a group. */
  description?: string;
  /** Indicates if you would like this to be your default suppression group. */
  is_default?: boolean;
  /** The name of your suppression group. Required when creating a group. */
  name?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ description: string; id: number; is_default: boolean; name: string }>
```

<sub>`POST /asm/groups` · `POST_asm-groups`</sub>

## `sendgrid.deleteAsmGroupsGroupId`

Delete a Suppression Group — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteAsmGroupsGroupId(input: {
  /** The ID of the suppression group you would like to retrieve. */
  group_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /asm/groups/{group_id}` · `DELETE_asm-groups-group_id`</sub>

## `sendgrid.getAsmGroupsGroupId`

Get information on a single suppression group. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAsmGroupsGroupId(input: {
  /** The ID of the suppression group you would like to retrieve. */
  group_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SuppressionGroupRequestBase & { id: number; last_email_sent_at?: string | null; unsubscribes?: number }>
```

<sub>`GET /asm/groups/{group_id}` · `GET_asm-groups-group_id`</sub>

## `sendgrid.patchAsmGroupsGroupId`

Update a suppression group. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchAsmGroupsGroupId(input: {
  /** A brief description of your suppression group. Required when creating a group. */
  description?: string;
  /** Indicates if you would like this to be your default suppression group. */
  is_default?: boolean;
  /** The name of your suppression group. Required when creating a group. */
  name?: string;
  /** The ID of the suppression group you would like to retrieve. */
  group_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SuppressionGroup>
```

<sub>`PATCH /asm/groups/{group_id}` · `PATCH_asm-groups-group_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

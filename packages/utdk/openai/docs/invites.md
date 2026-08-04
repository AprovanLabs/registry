# Invites

4 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listInvites`

Returns a list of invites in the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.listInvites(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
}): Promise<InviteListResponse>
```

<sub>`GET /organization/invites` · `list-invites`</sub>

## `openai.inviteUser`

Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.inviteUser(input: {
  /** Send an email to this address */
  email: string;
  /** `owner` or `reader` */
  role: "reader" | "owner";
  /** An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior. */
  projects?: ({ id: string; role: "member" | "owner" })[];
}): Promise<Invite>
```

<sub>`POST /organization/invites` · `inviteUser`</sub>

## `openai.deleteInvite`

Delete an invite. If the invite has already been accepted, it cannot be deleted. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteInvite(input: {
  /** The ID of the invite to delete. */
  invite_id: string;
}): Promise<InviteDeleteResponse>
```

<sub>`DELETE /organization/invites/{invite_id}` · `delete-invite`</sub>

## `openai.retrieveInvite`

Retrieves an invite. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveInvite(input: {
  /** The ID of the invite to retrieve. */
  invite_id: string;
}): Promise<Invite>
```

<sub>`GET /organization/invites/{invite_id}` · `retrieve-invite`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Users

4 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listUsers`

Lists all of the users in the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.listUsers(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** Filter by the email address of users. */
  emails?: (string)[];
}): Promise<UserListResponse>
```

<sub>`GET /organization/users` · `list-users`</sub>

## `openai.deleteUser`

Deletes a user from the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteUser(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<UserDeleteResponse>
```

<sub>`DELETE /organization/users/{user_id}` · `delete-user`</sub>

## `openai.retrieveUser`

Retrieves a user by their identifier. — [Provider docs](https://help.openai.com/)

```ts
openai.retrieveUser(input: {
  /** The ID of the user. */
  user_id: string;
}): Promise<User>
```

<sub>`GET /organization/users/{user_id}` · `retrieve-user`</sub>

## `openai.modifyUser`

Modifies a user's role in the organization. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyUser(input: {
  /** `owner` or `reader` */
  role: "owner" | "reader";
  /** The ID of the user. */
  user_id: string;
}): Promise<User>
```

<sub>`POST /organization/users/{user_id}` · `modify-user`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

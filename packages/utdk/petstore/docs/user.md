# User

7 operations · `@utdk/petstore`

```ts
import petstore from "@utdk/petstore";
```

## `petstore.createUser`

Create user. — [Provider docs](https://swagger.io)

```ts
petstore.createUser(input: {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** User Status */
  userStatus?: number;
}): Promise<User>
```

<sub>`POST /user` · `createUser`</sub>

## `petstore.deleteUser`

Delete user resource. — [Provider docs](https://swagger.io)

```ts
petstore.deleteUser(input: {
  /** The name that needs to be deleted */
  username: string;
}): Promise<undefined>
```

<sub>`DELETE /user/{username}` · `deleteUser`</sub>

## `petstore.getUserByName`

Get user by user name. — [Provider docs](https://swagger.io)

```ts
petstore.getUserByName(input: {
  /** The name that needs to be fetched. Use user1 for testing */
  username: string;
}): Promise<User>
```

<sub>`GET /user/{username}` · `getUserByName`</sub>

## `petstore.updateUser`

Update user resource. — [Provider docs](https://swagger.io)

```ts
petstore.updateUser(input: {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** User Status */
  userStatus?: number;
}, options: { params: { username: string } }): Promise<undefined>
```

<sub>`PUT /user/{username}` · `updateUser`</sub>

## `petstore.createUsersWithListInput`

Creates list of users with given input array. — [Provider docs](https://swagger.io)

```ts
petstore.createUsersWithListInput(input: {
  body?: (User)[];
}): Promise<User>
```

<sub>`POST /user/createWithList` · `createUsersWithListInput`</sub>

## `petstore.loginUser`

Logs user into the system. — [Provider docs](https://swagger.io)

```ts
petstore.loginUser(input: {
  /** The user name for login */
  username?: string;
  /** The password for login in clear text */
  password?: string;
}): Promise<string>
```

<sub>`GET /user/login` · `loginUser`</sub>

## `petstore.logoutUser`

Logs out current logged in user session. — [Provider docs](https://swagger.io)

```ts
petstore.logoutUser(): Promise<undefined>
```

<sub>`GET /user/logout` · `logoutUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

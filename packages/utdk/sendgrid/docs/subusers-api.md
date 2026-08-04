# Subusers API

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getSubusers`

List all Subusers — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusers(input: {
  /** The username of this subuser. */
  username?: string;
  /** The number of results you would like to get in each request. */
  limit?: number;
  /** The number of subusers to skip. */
  offset?: number;
}): Promise<(Subuser)[]>
```

<sub>`GET /subusers` · `GET_subusers`</sub>

## `sendgrid.postSubusers`

Create Subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSubusers(input: {
  /** The email address of the subuser. */
  email: string;
  /** The IP addresses that should be assigned to this subuser. */
  ips: (string)[];
  /** The password this subuser will use when logging into SendGrid. */
  password: string;
  /** The username for this subuser. */
  username: string;
}): Promise<SubuserPost>
```

<sub>`POST /subusers` · `POST_subusers`</sub>

## `sendgrid.deleteSubusersSubuserName`

Delete a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSubusersSubuserName(input: {
  subuser_name: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /subusers/{subuser_name}` · `DELETE_subusers-subuser_name`</sub>

## `sendgrid.patchSubusersSubuserName`

Enable/disable a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchSubusersSubuserName(input: {
  /** Whether or not this subuser is disabled. True means disabled, False means enabled. */
  disabled?: boolean;
  subuser_name: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`PATCH /subusers/{subuser_name}` · `PATCH_subusers-subuser_name`</sub>

## `sendgrid.putSubusersSubuserNameIps`

Update IPs assigned to a subuser — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.putSubusersSubuserNameIps(input: {
  /** The IP addresses you would like to assign to the subuser. */
  body?: (string)[];
  subuser_name: string;
}): Promise<{ ips?: (string)[] }>
```

<sub>`PUT /subusers/{subuser_name}/ips` · `PUT_subusers-subuser_name-ips`</sub>

## `sendgrid.getSubusersReputations`

Retrieve Subuser Reputations — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSubusersReputations(input: {
  usernames?: string;
}): Promise<({ reputation: number; username: string })[]>
```

<sub>`GET /subusers/reputations` · `GET_subusers-reputations`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Teammates

11 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getV3ScopesRequests`

Retrieve access requests — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3ScopesRequests(input: {
  /** Optional field to limit the number of results returned. */
  limit?: number;
  /** Optional beginning point in the list to retrieve from. */
  offset?: number;
}): Promise<({ email?: string; first_name?: string; id?: number; last_name?: string; scope_group_name?: string; username?: string })[]>
```

<sub>`GET /scopes/requests` · `GET_v3-scopes-requests`</sub>

## `sendgrid.deleteV3ScopesRequestsRequestId`

Deny access request — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteV3ScopesRequestsRequestId(input: {
  /** The ID of the request that you want to deny. */
  request_id: string;
}): Promise<undefined>
```

<sub>`DELETE /scopes/requests/{request_id}` · `DELETE_v3-scopes-requests-request_id`</sub>

## `sendgrid.patchV3ScopesRequestsApproveId`

Approve access request — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchV3ScopesRequestsApproveId(input: {
  /** The ID of the request that you want to approve. */
  request_id: string;
}): Promise<{ scope_group_name?: string }>
```

<sub>`PATCH /scopes/requests/{request_id}/approve` · `PATCH_v3-scopes-requests-approve-id`</sub>

## `sendgrid.getV3Teammates`

Retrieve all teammates — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3Teammates(input: {
  /** Number of items to return */
  limit?: number;
  /** Paging offset */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: ({ address?: string; address2?: string; city?: string; country?: string; email?: string; first_name?: string; is_admin?: boolean; last_name?: string; phone?: string; state?: string; user_type?: "admin" | "owner" | "teammate"; username?: string; website?: string; zip?: string })[] }>
```

<sub>`GET /teammates` · `GET_v3-teammates`</sub>

## `sendgrid.postV3Teammates`

Invite teammate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postV3Teammates(input: {
  /** New teammate's email */
  email: string;
  /** Set to true if teammate should be an admin user */
  is_admin: boolean;
  /** Set to specify list of scopes that teammate should have. Should be empty if teammate is an admin. */
  scopes: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ email?: string; is_admin?: boolean; scopes?: (unknown)[]; token?: string }>
```

<sub>`POST /teammates` · `POST_v3-teammates`</sub>

## `sendgrid.deleteV3TeammatesUsername`

Delete teammate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteV3TeammatesUsername(input: {
  /** The username of the teammate that you want to retrieve. */
  username: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ errors?: ({ field?: string; message?: string })[] }>
```

<sub>`DELETE /teammates/{username}` · `DELETE_v3-teammates-username`</sub>

## `sendgrid.getV3TeammatesUsername`

Retrieve specific teammate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3TeammatesUsername(input: {
  /** The username of the teammate that you want to retrieve. */
  username: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ address?: string; address2?: string; city?: string; country?: string; email?: string; first_name?: string; is_admin?: boolean; last_name?: string; phone?: string; scopes?: (unknown)[]; state?: string; user_type?: "admin" | "owner" | "teammate"; username?: string; website?: string; zip?: string }>
```

<sub>`GET /teammates/{username}` · `GET_v3-teammates-username`</sub>

## `sendgrid.patchV3TeammatesUsername`

Update teammate's permissions — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchV3TeammatesUsername(input: {
  /** Set to True if this teammate should be promoted to an admin user. If True, scopes should be an empty array. */
  is_admin: boolean;
  /** Provide list of scopes that should be given to teammate. If specifying list of scopes, is_admin should be set to False. */
  scopes: (string)[];
  /** The username of the teammate that you want to retrieve. */
  username: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ address?: string; address2?: string; city?: string; country?: string; email?: string; first_name?: string; is_admin?: boolean; last_name?: string; phone?: string; scopes?: (string)[]; state?: string; user_type?: "admin" | "owner" | "teammate"; username?: string; website?: string; zip?: string }>
```

<sub>`PATCH /teammates/{username}` · `PATCH_v3-teammates-username`</sub>

## `sendgrid.getV3TeammatesPending`

Retrieve all pending teammates — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3TeammatesPending(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: ({ email?: string; expiration_date?: number; is_admin?: boolean; scopes?: (string)[]; token?: string })[] }>
```

<sub>`GET /teammates/pending` · `GET_v3-teammates-pending`</sub>

## `sendgrid.deleteV3TeammatesPendingToken`

Delete pending teammate — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteV3TeammatesPendingToken(input: {
  /** The token for the invite you want to delete. */
  token: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<undefined>
```

<sub>`DELETE /teammates/pending/{token}` · `DELETE_v3-teammates-pending-token`</sub>

## `sendgrid.postV3TeammatesPendingTokenResend`

Resend teammate invite — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postV3TeammatesPendingTokenResend(input: {
  /** The token for the invite that you want to resend. */
  token: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ email?: string; is_admin?: boolean; scopes?: (string)[]; token?: string }>
```

<sub>`POST /teammates/pending/{token}/resend` · `POST_v3-teammates-pending-token-resend`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

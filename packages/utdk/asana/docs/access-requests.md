# Access Requests

4 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getAccessRequests`

Get access requests — [Provider docs](https://asana.com/support)

```ts
asana.getAccessRequests(input: {
  /** Globally unique identifier for the target object. */
  target: string;
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user?: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("approval_status" | "message" | "requester" | "requester.name" | "target")[];
}): Promise<{ data?: (AccessRequestResponse)[] }>
```

<sub>`GET /access_requests` · `getAccessRequests`</sub>

## `asana.createAccessRequest`

Create an access request — [Provider docs](https://asana.com/support)

```ts
asana.createAccessRequest(input: {
  data?: AccessRequestCreateRequest;
}): Promise<{ data?: AccessRequestResponse }>
```

<sub>`POST /access_requests` · `createAccessRequest`</sub>

## `asana.approveAccessRequest`

Approve an access request — [Provider docs](https://asana.com/support)

```ts
asana.approveAccessRequest(input: {
  /** Globally unique identifier for the access request. */
  access_request_gid: string;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /access_requests/{access_request_gid}/approve` · `approveAccessRequest`</sub>

## `asana.rejectAccessRequest`

Reject an access request — [Provider docs](https://asana.com/support)

```ts
asana.rejectAccessRequest(input: {
  /** Globally unique identifier for the access request. */
  access_request_gid: string;
}): Promise<{ data?: EmptyResponse }>
```

<sub>`POST /access_requests/{access_request_gid}/reject` · `rejectAccessRequest`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

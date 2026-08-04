# Sender Identities API

6 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getV3Senders`

Get all Sender Identities — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3Senders(options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ result?: (SenderId)[] }>
```

<sub>`GET /senders` · `GET_v3-senders`</sub>

## `sendgrid.postSenders`

Create a Sender Identity — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postSenders(input: {
  /** The physical address of the sender identity. */
  address: string;
  /** Additional sender identity address information. */
  address_2?: string;
  /** The city of the sender identity. */
  city: string;
  /** The country of the sender identity. */
  country: string;
  from?: { [key: string]: unknown };
  /** A nickname for the sender identity. Not used for sending. */
  nickname: string;
  reply_to?: { [key: string]: unknown };
  /** The state of the sender identity. */
  state?: string;
  /** The zipcode of the sender identity. */
  zip?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SenderId>
```

<sub>`POST /senders` · `POST_senders`</sub>

## `sendgrid.deleteV3SendersSenderId`

Delete a Sender Identity — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteV3SendersSenderId(input: {
  /** The ID of the sender identity that you want to retrieve. */
  sender_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /senders/{sender_id}` · `DELETE_v3-senders-sender_id`</sub>

## `sendgrid.getV3SendersSenderId`

View a Sender Identity — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3SendersSenderId(input: {
  /** The ID of the sender identity that you want to retrieve. */
  sender_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SenderId>
```

<sub>`GET /senders/{sender_id}` · `GET_v3-senders-sender_id`</sub>

## `sendgrid.patchV3SendersSenderId`

Update a Sender Identity — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchV3SendersSenderId(input: {
  /** The physical address of the sender identity. */
  address?: string;
  /** Additional sender identity address information. */
  address_2?: string;
  /** The city of the sender identity. */
  city?: string;
  /** The country of the sender identity. */
  country?: string;
  from?: { email?: string; name?: string };
  /** A nickname for the sender identity. Not used for sending. */
  nickname?: string;
  reply_to?: { email?: string; name?: string };
  /** The state of the sender identity. */
  state?: string;
  /** The zipcode of the sender identity. */
  zip?: string;
  /** The ID of the sender identity that you want to retrieve. */
  sender_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SenderId>
```

<sub>`PATCH /senders/{sender_id}` · `PATCH_v3-senders-sender_id`</sub>

## `sendgrid.postV3SendersSenderIdResendVerification`

Resend Sender Identity Verification — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postV3SendersSenderIdResendVerification(input: {
  /** The ID of the sender identity for which you would like to resend a verification email. */
  sender_id: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`POST /senders/{sender_id}/resend_verification` · `POST_v3-senders-sender_id-resend_verification`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

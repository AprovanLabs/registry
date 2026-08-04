# Sender Verification

8 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.getVerifiedSenders`

Get All Verified Senders — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getVerifiedSenders(input: {
  limit?: number;
  lastSeenID?: number;
  id?: number;
}): Promise<{ results?: (VerifiedSenderResponseSchema)[] }>
```

<sub>`GET /verified_senders` · `GET_verified_senders`</sub>

## `sendgrid.postVerifiedSenders`

Create Verified Sender Request — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postVerifiedSenders(input: {
  address?: string;
  address2?: string;
  city?: string;
  country?: string;
  from_email: string;
  from_name?: string;
  nickname: string;
  reply_to: string;
  reply_to_name?: string;
  state?: string;
  zip?: string;
}): Promise<VerifiedSenderResponseSchema>
```

<sub>`POST /verified_senders` · `POST_verified_senders`</sub>

## `sendgrid.deleteVerifiedSendersId`

Delete Verified Sender — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteVerifiedSendersId(input: {
  id: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /verified_senders/{id}` · `DELETE_verified_senders-id`</sub>

## `sendgrid.patchVerifiedSendersId`

Edit Verified Sender — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchVerifiedSendersId(input: {
  address?: string;
  address2?: string;
  city?: string;
  country?: string;
  from_email: string;
  from_name?: string;
  nickname: string;
  reply_to: string;
  reply_to_name?: string;
  state?: string;
  zip?: string;
  id: string;
}): Promise<VerifiedSenderResponseSchema>
```

<sub>`PATCH /verified_senders/{id}` · `PATCH_verified_senders-id`</sub>

## `sendgrid.getVerifiedSendersDomains`

Domain Warn List — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getVerifiedSendersDomains(): Promise<{ results: { hard_failures: (string)[]; soft_failures: (string)[] } }>
```

<sub>`GET /verified_senders/domains` · `GET_verified_senders-domains`</sub>

## `sendgrid.postVerifiedSendersResendId`

Resend Verified Sender Request — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postVerifiedSendersResendId(input: {
  id: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`POST /verified_senders/resend/{id}` · `POST_verified_senders-resend-id`</sub>

## `sendgrid.getVerifiedSendersStepsCompleted`

Completed Steps — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getVerifiedSendersStepsCompleted(): Promise<{ results?: { domain_verified?: boolean; sender_verified?: boolean } }>
```

<sub>`GET /verified_senders/steps_completed` · `GET_verified_senders-steps_completed`</sub>

## `sendgrid.getVerifiedSendersVerifyToken`

Verify Sender Request — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getVerifiedSendersVerifyToken(input: {
  token: string;
}): Promise<undefined>
```

<sub>`GET /verified_senders/verify/{token}` · `GET_verified_senders-verify-token`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

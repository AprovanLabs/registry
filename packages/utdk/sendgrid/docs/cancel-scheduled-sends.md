# Cancel Scheduled Sends

7 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postMailBatch`

Create a batch ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMailBatch(options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailBatchId>
```

<sub>`POST /mail/batch` · `POST_mail-batch`</sub>

## `sendgrid.getMailBatchBatchId`

Validate batch ID — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getMailBatchBatchId(input: {
  batch_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<MailBatchId>
```

<sub>`GET /mail/batch/{batch_id}` · `GET_mail-batch-batch_id`</sub>

## `sendgrid.getUserScheduledSends`

Retrieve all scheduled sends — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserScheduledSends(options?: { headers?: { "on-behalf-of"?: string } }): Promise<(UserScheduledSendStatus)[]>
```

<sub>`GET /user/scheduled_sends` · `GET_user-scheduled_sends`</sub>

## `sendgrid.postUserScheduledSends`

Cancel or pause a scheduled send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postUserScheduledSends(input: {
  /** The batch ID is the identifier that your scheduled mail sends share. */
  batch_id: string;
  /** The status of the send you would like to implement. This can be pause or cancel. To delete a pause or cancel status see DELETE /v3/user/scheduled_sends/{batch_id} */
  status: "pause" | "cancel";
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<UserScheduledSendStatus>
```

<sub>`POST /user/scheduled_sends` · `POST_user-scheduled_sends`</sub>

## `sendgrid.deleteUserScheduledSendsBatchId`

Delete a cancellation or pause from a scheduled send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteUserScheduledSendsBatchId(input: {
  batch_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<undefined>
```

<sub>`DELETE /user/scheduled_sends/{batch_id}` · `DELETE_user-scheduled_sends-batch_id`</sub>

## `sendgrid.getUserScheduledSendsBatchId`

Retrieve scheduled send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getUserScheduledSendsBatchId(input: {
  batch_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(UserScheduledSendStatus)[]>
```

<sub>`GET /user/scheduled_sends/{batch_id}` · `GET_user-scheduled_sends-batch_id`</sub>

## `sendgrid.patchUserScheduledSendsBatchId`

Update a scheduled send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.patchUserScheduledSendsBatchId(input: {
  /** The status you would like the scheduled send to have. */
  status: "cancel" | "pause";
  batch_id: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`PATCH /user/scheduled_sends/{batch_id}` · `PATCH_user-scheduled_sends-batch_id`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

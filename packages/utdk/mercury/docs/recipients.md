# Recipients

6 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getRecipient`

Get recipient by ID

```ts
mercury.getRecipient(input: {
  /** ID for a Mercury account. */
  recipientId: string;
}): Promise<RecipientInfo>
```

<sub>`GET /recipient/{recipientId}` · `getRecipient`</sub>

## `mercury.updateRecipient`

Edit information about a specific recipient

```ts
mercury.updateRecipient(input: {
  /** Deprecated. Use checkInfo instead. */
  address?: AddressData;
  /** Information needed to send a check. */
  checkInfo?: CheckInfoRaw;
  /** Contact email address of the recipient */
  contactEmail?: Email;
  /** Information needed to send a domestic wire. */
  domesticWireRoutingInfo?: DomesticWireRoutingInfoRaw;
  /** Information needed to send an ACH. */
  electronicRoutingInfo?: ElectronicRoutingInfoRaw;
  emails?: (Email)[];
  name?: string;
  nickname?: string;
  /** ID for a Mercury account. */
  recipientId: string;
}): Promise<RecipientInfo>
```

<sub>`POST /recipient/{recipientId}` · `updateRecipient`</sub>

## `mercury.uploadRecipientAttachment`

Upload a recipient attachment

```ts
mercury.uploadRecipientAttachment(input: {
  /** The file to upload (tax form document) */
  file: string;
  /** ID of the recipient to attach the file to */
  recipientId: string;
}): Promise<undefined>
```

<sub>`POST /recipient/{recipientId}/attachments` · `uploadRecipientAttachment`</sub>

## `mercury.getRecipients`

Get all recipients

```ts
mercury.getRecipients(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** The ID of the recipient to start the page after (exclusive). When provided, results will begin with the recipient immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the recipient to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
}): Promise<RecipientsPaginatedResponse>
```

<sub>`GET /recipients` · `getRecipients`</sub>

## `mercury.createRecipient`

Add a new recipient

```ts
mercury.createRecipient(input: {
  /** Deprecated. Use checkInfo instead. */
  address?: AddressData;
  /** Information needed to send a physical check. */
  checkInfo?: CheckInfoRaw;
  /** Contact email address of the recipient */
  contactEmail?: Email;
  /** Information needed to send a domestic wire. */
  domesticWireRoutingInfo?: DomesticWireRoutingInfoRaw;
  /** Information needed to send an ACH. */
  electronicRoutingInfo?: ElectronicRoutingInfoRaw;
  emails: (Email)[];
  name: string;
  nickname?: string;
}): Promise<RecipientInfo>
```

<sub>`POST /recipients` · `createRecipient`</sub>

## `mercury.listRecipientsAttachments`

List all recipient attachments

```ts
mercury.listRecipientsAttachments(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** The ID of the recipient attachment to start the page after (exclusive). When provided, results will begin with the recipient attachment immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the recipient attachment to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
}): Promise<RecipientsAttachmentsPaginatedResponse>
```

<sub>`GET /recipients/attachments` · `listRecipientsAttachments`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

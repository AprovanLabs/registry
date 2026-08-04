# Invoices

8 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getAttachment`

Get an attachment

```ts
mercury.getAttachment(input: {
  /** ID for the attachment. */
  attachmentId: string;
}): Promise<ApiV1ArAttachmentResponseData>
```

<sub>`GET /ar/attachments/{attachmentId}` · `getAttachment`</sub>

## `mercury.listInvoices`

List all invoices

```ts
mercury.listInvoices(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
  /** The ID of the invoice to start the page after (exclusive). When provided, results will begin with the invoice immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the invoice to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
}): Promise<ApiV1ArInvoicesPaginatedResponse>
```

<sub>`GET /ar/invoices` · `listInvoices`</sub>

## `mercury.createInvoice`

Create an invoice

```ts
mercury.createInvoice(input: {
  /**  Whether or not the invoice can be paid via ACH debit. */
  achDebitEnabled: boolean;
  /**  Emails to be CCed on invoice notifications/reminders. */
  ccEmails: (Email)[];
  /**  Whether or not the invoice can be paid via credit card. Requires Stripe to be setup for the Mercury account. */
  creditCardEnabled: boolean;
  customerId: CustomerId & unknown;
  destinationAccountId: TransactionPartyId & unknown;
  dueDate: Day & unknown;
  /**  Internal note for the invoice, visible by users in the organization but not visible to payers. */
  internalNote?: string | null;
  invoiceDate: Day & unknown;
  /**  The payer facing invoice number/identifier. */
  invoiceNumber?: string | null;
  /**  The line items for the invoice */
  lineItems: (ApiV1ArLineItemData)[];
  /**  Memo for the payer of the invoice. */
  payerMemo?: string | null;
  /**  Purchase order number for the invoice, if applicable. */
  poNumber?: string | null;
  sendEmailOption?: ApiSendEmailOption & unknown | null;
  servicePeriodEndDate?: Day & unknown | null;
  servicePeriodStartDate?: Day & unknown | null;
  /**  Whether or not the invoice payment instructions will show the real account and routing number for the destination account or use virtual account numbers instead. Virtual accounts are safer and are preferred in most cases. */
  useRealAccountNumber: boolean;
}): Promise<ApiV1ArInvoiceResponse>
```

<sub>`POST /ar/invoices` · `createInvoice`</sub>

## `mercury.getInvoice`

Get an invoice

```ts
mercury.getInvoice(input: {
  /** ID for the invoice. */
  invoiceId: string;
}): Promise<ApiV1ArInvoiceResponse>
```

<sub>`GET /ar/invoices/{invoiceId}` · `getInvoice`</sub>

## `mercury.updateInvoice`

Update an invoice

```ts
mercury.updateInvoice(input: {
  /**  Whether or not the invoice can be paid via ACH debit. */
  achDebitEnabled: boolean;
  /**  List of emails to be CCed on notifications/reminders. */
  ccEmails: (Email)[];
  /**  Whether or not the invoice can be paid via credit card. Requires Stripe to be setup for the Mercury account. */
  creditCardEnabled: boolean;
  dueDate: Day & unknown;
  /**  Internal note for the invoice, visible by users in the organization but not visible to payers. */
  internalNote?: string | null;
  invoiceDate: Day & unknown;
  /**  The invoice number. */
  invoiceNumber: string;
  /**  The line items for the invoice */
  lineItems: (ApiV1ArLineItemData)[];
  /**  Memo for the payer of the invoice. */
  payerMemo?: string | null;
  /**  The purchase order number for the invoice if applicable. */
  poNumber?: string | null;
  servicePeriodEndDate?: Day & unknown | null;
  servicePeriodStartDate?: Day & unknown | null;
  /**  Whether or not the invoice payment instructions will show the real account and routing number for the destination account or use virtual account numbers instead. */
  useRealAccountNumber: boolean;
  /** ID for the invoice. */
  invoiceId: string;
}): Promise<ApiV1ArInvoiceResponse>
```

<sub>`POST /ar/invoices/{invoiceId}` · `updateInvoice`</sub>

## `mercury.listInvoiceAttachments`

List invoice attachments

```ts
mercury.listInvoiceAttachments(input: {
  /** ID for the invoice. */
  invoiceId: string;
}): Promise<ApiV1ArAttachmentsResponseData>
```

<sub>`GET /ar/invoices/{invoiceId}/attachments` · `listInvoiceAttachments`</sub>

## `mercury.cancelInvoice`

Cancel an invoice

```ts
mercury.cancelInvoice(input: {
  /** ID for the invoice. */
  invoiceId: string;
}): Promise<undefined>
```

<sub>`POST /ar/invoices/{invoiceId}/cancel` · `cancelInvoice`</sub>

## `mercury.getInvoicePdf`

Download invoice PDF

```ts
mercury.getInvoicePdf(input: {
  /** ID for the invoice. */
  invoiceId: string;
}): Promise<PdfDocument>
```

<sub>`GET /ar/invoices/{invoiceId}/pdf` · `getInvoicePdf`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

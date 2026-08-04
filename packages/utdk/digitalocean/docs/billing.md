# Billing

8 operations · `@utdk/digitalocean`

```ts
import digitalocean from "@utdk/digitalocean";
```

## `digitalocean.billingInsightsList`

List Billing Insights

```ts
digitalocean.billingInsightsList(input: {
  /** URN of the customer account, can be a team (do:team:uuid) or an organization (do:teamgroup:uuid) */
  account_urn: string;
  /** Start date for billing insights in YYYY-MM-DD format */
  start_date: string;
  /** End date for billing insights in YYYY-MM-DD format. Must be within 31 days of start_date */
  end_date: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ data_points: (BillingDataPoint)[]; total_items: number; total_pages: number; current_page: number }>
```

<sub>`GET /v2/billing/{account_urn}/insights/{start_date}/{end_date}` · `billingInsights_list`</sub>

## `digitalocean.balanceGet`

Get Customer Balance

```ts
digitalocean.balanceGet(): Promise<Balance>
```

<sub>`GET /v2/customers/my/balance` · `balance_get`</sub>

## `digitalocean.billingHistoryList`

List Billing History

```ts
digitalocean.billingHistoryList(): Promise<{ billing_history?: (BillingHistory)[] } & Pagination & MetaOptionalTotal>
```

<sub>`GET /v2/customers/my/billing_history` · `billingHistory_list`</sub>

## `digitalocean.invoicesList`

List All Invoices

```ts
digitalocean.invoicesList(input: {
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ invoices?: (InvoicePreview)[]; invoice_preview?: InvoicePreview } & Pagination & Meta>
```

<sub>`GET /v2/customers/my/invoices` · `invoices_list`</sub>

## `digitalocean.invoicesGetByUuid`

Retrieve an Invoice by UUID

```ts
digitalocean.invoicesGetByUuid(input: {
  /** UUID of the invoice */
  invoice_uuid: string;
  /** Number of items returned per page */
  per_page?: number;
  /** Which 'page' of paginated results to return. */
  page?: number;
}): Promise<{ invoice_items?: (InvoiceItem)[] } & Pagination & Meta>
```

<sub>`GET /v2/customers/my/invoices/{invoice_uuid}` · `invoices_get_byUUID`</sub>

## `digitalocean.invoicesGetCsvByUuid`

Retrieve an Invoice CSV by UUID

```ts
digitalocean.invoicesGetCsvByUuid(input: {
  /** UUID of the invoice */
  invoice_uuid: string;
}): Promise<string>
```

<sub>`GET /v2/customers/my/invoices/{invoice_uuid}/csv` · `invoices_get_csvByUUID`</sub>

## `digitalocean.invoicesGetPdfByUuid`

Retrieve an Invoice PDF by UUID

```ts
digitalocean.invoicesGetPdfByUuid(input: {
  /** UUID of the invoice */
  invoice_uuid: string;
}): Promise<string>
```

<sub>`GET /v2/customers/my/invoices/{invoice_uuid}/pdf` · `invoices_get_pdfByUUID`</sub>

## `digitalocean.invoicesGetSummaryByUuid`

Retrieve an Invoice Summary by UUID

```ts
digitalocean.invoicesGetSummaryByUuid(input: {
  /** UUID of the invoice */
  invoice_uuid: string;
}): Promise<InvoiceSummary>
```

<sub>`GET /v2/customers/my/invoices/{invoice_uuid}/summary` · `invoices_get_summaryByUUID`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

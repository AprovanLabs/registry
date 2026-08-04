# Transactions

4 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getTransactionById`

Get a transaction by ID

```ts
mercury.getTransactionById(input: {
  /** ID for this transaction */
  transactionId: string;
}): Promise<Transaction>
```

<sub>`GET /transaction/{transactionId}` · `getTransactionById`</sub>

## `mercury.updateTransaction`

Update transaction metadata

```ts
mercury.updateTransaction(input: {
  categoryId: CategoryId & unknown;
  note: NoteUpdate & unknown;
  /** ID for this transaction */
  transactionId: string;
}): Promise<Transaction>
```

<sub>`PATCH /transaction/{transactionId}` · `updateTransaction`</sub>

## `mercury.uploadTransactionAttachment`

Upload a transaction attachment

```ts
mercury.uploadTransactionAttachment(input: {
  /** Type of attachment: 'receipt', 'bill', or 'other'. Defaults to 'other'. */
  attachmentType?: "receipt" | "bill" | "other";
  /** The file to upload */
  file: string;
  /** ID of the transaction to attach the file to */
  transactionId: string;
}): Promise<undefined>
```

<sub>`POST /transaction/{transactionId}/attachments` · `uploadTransactionAttachment`</sub>

## `mercury.listTransactions`

List all transactions

```ts
mercury.listTransactions(input: {
  status?: ("pending" | "sent" | "cancelled" | "failed" | "reversed" | "blocked")[];
  /** Search term to look for in transaction descriptions. */
  search?: string;
  /** Earliest createdAt date to filter for. If not provided, it defaults to the date of your first transaction. Format: YYYY-MM-DD or an ISO 8601 string. Please note that your Mercury transactions on your Dashboard might have their postedAt date displayed, as opposed to createdAt */
  start?: string;
  /** Latest createdAt date to filter for. If it’s not provided, it defaults to current day. Format: YYYY-MM-DD or an ISO 8601 string. Please note that your Mercury transactions on your Dashboard might have their postedAt date displayed, as opposed to createdAt */
  end?: string;
  /** Earliest postedAt date to filter for. Format: YYYY-MM-DD or an ISO 8601 string */
  postedStart?: string;
  /** Latest postedAt date to filter for. Format: YYYY-MM-DD or an ISO 8601 string */
  postedEnd?: string;
  accountId?: (string)[];
  /** Name of mercuryCategory you want to filter on. Merchant Type in the UI. */
  mercuryCategory?: string;
  /** UUID of a custom category. Can be returned from /categories endpoint. */
  categoryId?: string;
  /** The ID of the resource to start the page at (inclusive). When provided, results will begin with and include the resource with this ID. Use this to retrieve a specific page when you know the exact starting point. Cannot be combined with start_after or end_before. */
  start_at?: string;
  /** The ID of the transaction to start the page after (exclusive). When provided, results will begin with the transaction immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the transaction to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
}): Promise<TransactionsPaginatedResponse>
```

<sub>`GET /transactions` · `listTransactions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

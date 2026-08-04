# Accounts

9 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getAccount`

Get account by ID

```ts
mercury.getAccount(input: {
  /** ID for a Mercury account. */
  accountId: string;
}): Promise<Account>
```

<sub>`GET /account/{accountId}` · `getAccount`</sub>

## `mercury.getAccountCards`

Get cards for account

```ts
mercury.getAccountCards(input: {
  /** ID for a Mercury account. */
  accountId: string;
}): Promise<AccountCardsResponse>
```

<sub>`GET /account/{accountId}/cards` · `getAccountCards`</sub>

## `mercury.requestSendMoney`

Request to send money

```ts
mercury.requestSendMoney(input: {
  /** Amount of USD you want to send, must be a positive number. */
  amount: PositiveDollar;
  /** Optional external memo */
  externalMemo?: string;
  /** Unique string identifying the transaction */
  idempotencyKey: string;
  /** Optional note */
  note?: string;
  /** Payment method to use. */
  paymentMethod: RequestSendMoneyPaymentMethod;
  /** Recipient ID from the /recipients endpoint. */
  recipientId: TransactionPartyId;
  /** ID for a Mercury account. */
  accountId: string;
}): Promise<SendMoneyApprovalRequestResponse>
```

<sub>`POST /account/{accountId}/request-send-money` · `requestSendMoney`</sub>

## `mercury.getAccountStatements`

Get account statements

```ts
mercury.getAccountStatements(input: {
  /** ID for a Mercury account. */
  accountId: string;
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'desc' */
  order?: "asc" | "desc";
  /** The ID of the statement to start the page after (exclusive). When provided, results will begin with the statement immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the statement to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Filter statements where the period start date is on or after this date. Format: YYYY-MM-DD */
  start?: string;
  /** Filter statements where the period start date is on or before this date. If the date is in the future, defaults to the current date. Format: YYYY-MM-DD */
  end?: string;
}): Promise<DepositoryAccountStatementsPaginatedResponse>
```

<sub>`GET /account/{accountId}/statements` · `getAccountStatements`</sub>

## `mercury.getTransaction`

Get transaction by ID

```ts
mercury.getTransaction(input: {
  /** ID for a Mercury account. */
  accountId: string;
  /** ID for this transaction */
  transactionId: string;
}): Promise<Transaction>
```

<sub>`GET /account/{accountId}/transaction/{transactionId}` · `getTransaction`</sub>

## `mercury.listAccountTransactions`

List account transactions

```ts
mercury.listAccountTransactions(input: {
  /** ID for a Mercury account. */
  accountId: string;
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Earliest date to filter transactions. If not provided, defaults to 30 days before the current date. Format: YYYY-MM-DD or ISO 8601 string */
  start?: string;
  /** Latest date to filter transactions. If not provided, defaults to the current date. Format: YYYY-MM-DD or ISO 8601 string */
  end?: string;
  /** Search term to filter transactions by description or counterparty name */
  search?: string;
  status?: "pending" | "sent" | "cancelled" | "failed" | "reversed" | "blocked";
  /** Number of results to skip for pagination */
  offset?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'desc' */
  order?: "asc" | "desc";
  /** ID returned from /account/:id/request-send-money */
  requestId?: string;
  /** Name of mercuryCategory you want to filter on. Merchant Type in the UI. */
  mercuryCategory?: string;
  /** UUID of a custom category. Can be returned from /categories endpoint. */
  categoryId?: string;
}): Promise<TransactionsResponse>
```

<sub>`GET /account/{accountId}/transactions` · `listAccountTransactions`</sub>

## `mercury.createTransaction`

Send money to a recipient

```ts
mercury.createTransaction(input: {
  /** Amount of USD you want to send, must be a positive number. */
  amount: PositiveDollar;
  /** Optional external memo */
  externalMemo?: string;
  /** Unique string identifying the transaction */
  idempotencyKey: string;
  /** Optional note */
  note?: string;
  /** If domesticWire is used, then the purpose field is required. */
  paymentMethod: PostTransactionPaymentMethod;
  /** Purpose of payment with category and optional additional info. Required when paymentMethod is 'domesticWire'. */
  purpose?: PostTransactionSendMoneyPurpose;
  /** Recipient ID from the /recipients endpoint. */
  recipientId: TransactionPartyId;
  /** ID for a Mercury account. */
  accountId: string;
}): Promise<Transaction>
```

<sub>`POST /account/{accountId}/transactions` · `createTransaction`</sub>

## `mercury.getAccounts`

Get all accounts

```ts
mercury.getAccounts(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
  /** The ID of the account to start the page after (exclusive). When provided, results will begin with the account immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the account to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
}): Promise<AccountsPaginatedResponse>
```

<sub>`GET /accounts` · `getAccounts`</sub>

## `mercury.createInternalTransfer`

Create an internal transfer

```ts
mercury.createInternalTransfer(input: {
  amount: PositiveDollar;
  destinationAccountId: TransactionPartyId;
  idempotencyKey: string;
  note?: string | null;
  sourceAccountId: TransactionPartyId;
}): Promise<InternalTransferApiResponse>
```

<sub>`POST /transfer` · `createInternalTransfer`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

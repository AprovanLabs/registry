# Treasury

3 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.getTreasury`

Get all treasury accounts

```ts
mercury.getTreasury(input: {
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** The ID of the account to start the page after (exclusive). When provided, results will begin with the account immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the account to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
}): Promise<TreasuryAccountsPaginatedResponse>
```

<sub>`GET /treasury` · `getTreasury`</sub>

## `mercury.getTreasuryStatements`

Get treasury account statements

```ts
mercury.getTreasuryStatements(input: {
  /** ID for a Mercury account. */
  treasuryId: string;
  /** Maximum number of results to return. Allowed range: 1 to 1000. Defaults to 1000 */
  limit?: number;
  /** Sort order. Can be 'asc' or 'desc'. Defaults to 'asc' */
  order?: "asc" | "desc";
  /** The ID of the statement to start the page after (exclusive). When provided, results will begin with the statement immediately following this ID. Use this for standard forward pagination to get the next page of results. Cannot be combined with end_before. */
  start_after?: string;
  /** The ID of the statement to end the page before (exclusive). When provided, results will end just before this ID and work backwards. Use this for reverse pagination or to retrieve previous pages. Cannot be combined with start_after. */
  end_before?: string;
  /** Filter statements by document type. */
  documentType?: "MonthlyStatement" | "TradeConfirmation" | "1099" | "1099R" | "1042S" | "5498" | "5498ESA" | "1099Q" | "FMV" | "SDIRA";
}): Promise<TreasuryStatementsPaginatedResponse>
```

<sub>`GET /treasury/{treasuryId}/statements` · `getTreasuryStatements`</sub>

## `mercury.getTreasuryTransactions`

Get treasury transactions

```ts
mercury.getTreasuryTransactions(input: {
  /** ID for a Mercury account. */
  treasuryId: string;
  /** Maximum number of results to return. Defaults to 100 */
  limit?: number;
  /** Sort order for transactions. Can be 'asc' or 'desc'. Defaults to 'desc' */
  order?: "asc" | "desc";
  /** Pagination cursor for retrieving next batch of transactions. Must be an integer >= 0 */
  cursor?: number;
}): Promise<TreasuryTransactionsResponse>
```

<sub>`GET /treasury/{treasuryId}/transactions` · `getTreasuryTransactions`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

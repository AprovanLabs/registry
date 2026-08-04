# Books

12 operations · `@utdk/mercury`

```ts
import mercury from "@utdk/mercury";
```

## `mercury.deleteBooksAgentCoaTemplate`

Delete a Chart of Accounts Template

```ts
mercury.deleteBooksAgentCoaTemplate(input: {
  /** unique id for a chart of accounts template */
  coaTemplateId: string;
}): Promise<(unknown)[]>
```

<sub>`DELETE /books/agent-coa-template/{coaTemplateId}` · `deleteBooksAgentCoaTemplate`</sub>

## `mercury.getBooksAgentCoaTemplate`

Retrieve a Chart of Accounts Template

```ts
mercury.getBooksAgentCoaTemplate(input: {
  /** unique id for a chart of accounts template */
  coaTemplateId: string;
  /** Comma-separated list of expandable paths. */
  expand?: "ledgers";
}): Promise<GetBooksApiAgentCoaTemplateResponse>
```

<sub>`GET /books/agent-coa-template/{coaTemplateId}` · `getBooksAgentCoaTemplate`</sub>

## `mercury.getBooksAgentCoaTemplates`

List all Chart of Accounts Templates

```ts
mercury.getBooksAgentCoaTemplates(input: {
  /** token for pagination */
  pageToken?: string;
  /** The number of records to return. Max limit is 100. */
  limit?: number;
  /** Comma-separated list of expandable paths. */
  expand?: "ledgers";
}): Promise<GetBooksApiAgentCoaTemplatesResponse>
```

<sub>`GET /books/agent-coa-templates` · `getBooksAgentCoaTemplates`</sub>

## `mercury.postBooksAgentCoaTemplates`

Create a Chart of Accounts Template

```ts
mercury.postBooksAgentCoaTemplates(input: {
  accountingBasis: BooksAccountingBasis & unknown;
  /**  An arbitrary string on the object, useful for identifying the Chart of Accounts template. */
  name: string;
  /** Comma-separated list of expandable paths. */
  expand?: "ledgers";
}): Promise<CreateBooksApiAgentCoaTemplateResponse>
```

<sub>`POST /books/agent-coa-templates` · `postBooksAgentCoaTemplates`</sub>

## `mercury.deleteBooksAgentLedgerTemplate`

Delete a Ledger Template

```ts
mercury.deleteBooksAgentLedgerTemplate(input: {
  /** unique id for a ledger */
  ledgerId: string;
}): Promise<(unknown)[]>
```

<sub>`DELETE /books/agent-ledger-template/{ledgerId}` · `deleteBooksAgentLedgerTemplate`</sub>

## `mercury.putBooksAgentLedgerTemplate`

Update a Ledger Template

```ts
mercury.putBooksAgentLedgerTemplate(input: {
  /**  The name of the ledger. */
  name?: string | null;
  /**  Determines the display order in reports, ordered digit by digit. */
  sortCode?: string | null;
  /** unique id for a ledger */
  ledgerId: string;
}): Promise<UpdateBooksApiAgentLedgerTemplateResponse>
```

<sub>`PUT /books/agent-ledger-template/{ledgerId}` · `putBooksAgentLedgerTemplate`</sub>

## `mercury.postBooksAgentLedgerTemplates`

Create a Ledger Template

```ts
mercury.postBooksAgentLedgerTemplates(input: {
  /**  The COA Template Id. */
  coaTemplateId: string;
  debitCredit: BooksDebitCredit & unknown;
  /**  Whether line entries can be manually added or removed from the ledger. */
  editable: boolean;
  financialAccountType: BooksFinancialAccountType & unknown;
  ledgerSubType: BooksLedgerSubType & unknown;
  ledgerType: BooksLedgerType & unknown;
  /**  The name of the ledger. */
  name: string;
  /**  If the ledger is a child Ledger, the ID of the parent ledger object. */
  parentId?: string | null;
  /**  Whether Teal includes this ledger in the cash flow report. */
  reportCashFlow: boolean;
  /**  Determines the display order in reports, ordered digit by digit. */
  sortCode: string;
}): Promise<CreateBooksApiAgentLedgerTemplateResponse>
```

<sub>`POST /books/agent-ledger-templates` · `postBooksAgentLedgerTemplates`</sub>

## `mercury.deleteBooksJournalEntries`

Bulk delete journal entries

```ts
mercury.deleteBooksJournalEntries(input: {
  /**  A list of journal entry ids to delete */
  journalEntryIds: (string)[];
  booksId: string;
}): Promise<(unknown)[]>
```

<sub>`DELETE /books/journal-entries/{booksId}` · `deleteBooksJournalEntries`</sub>

## `mercury.getBooksJournalEntries`

List all journal entries

```ts
mercury.getBooksJournalEntries(input: {
  booksId: string;
  /** Only return Journal Entries after the start date (inclusive). */
  startDate?: string;
  /** Only return Journal Entries before the end date (inclusive). */
  endDate?: string;
  /** Only return Journal Entries where at least one Line Entry belongs to the specified Ledger. */
  ledgerId?: string;
  /** Only return Journal Entries with the specified creation source. */
  creationSource?: "manual" | "transaction" | "accrual" | "paymentApplication" | "legacy";
  /** The sort order for the results. */
  journalEntrySort?: "descriptionAsc" | "descriptionDesc" | "dateTimeAsc" | "dateTimeDesc" | "amountAsc" | "amountDesc";
  /** Comma-separated list of expandable paths. */
  expand?: "lineEntries" | "lineEntries.transactions" | "lineEntries.ledger" | "lineEntries.opposingLedgerIds" | "lineEntries.paymentApplications" | "accrualSource";
  /** token for pagination */
  pageToken?: string;
  /** Only return Journal Entries where the description matches the specified keyword(s). */
  keywords?: string;
  /** Only return journal entries with the specified monetary amount.  If specified, `minAmount` and `maxAmount` parameters are ignored.  If no decimal place provided, rounded values will be matched.  E.g. an input of `100` will match 100.13 and 100.45, but an input of `100.13` will only match that value. */
  amount?: number;
  /** Only return journal entries with a monetary amount of at least the specified amount.  Ignored if `amount` is set. */
  minAmount?: number;
  /** Only return journal entries with a monetary amount less than specified amount.  Ignored if `amount` is set. */
  maxAmount?: number;
  /** One or more comma-separated lists of ledger IDs.  Only return Journal Entries where at least one Line Entry belongs to one of the specified ledgers in a group.  Specifying multiple groups will return an intersection of the matches. */
  ledgerIdGroups?: (string)[];
  /** The maximum number of journal entries to return per page. */
  limit?: number;
}): Promise<GetBooksApiJournalEntriesResponse>
```

<sub>`GET /books/journal-entries/{booksId}` · `getBooksJournalEntries`</sub>

## `mercury.postBooksJournalEntries`

Create multiple Journal Entries

```ts
mercury.postBooksJournalEntries(input: {
  body?: (CreateBooksApiJournalEntryRequest)[];
  booksId: string;
  /** Comma-separated list of expandable paths. */
  expand?: "lineEntries" | "lineEntries.transactions" | "lineEntries.ledger" | "lineEntries.opposingLedgerIds" | "lineEntries.paymentApplications" | "accrualSource";
  /** An optional identifier for audit logging. */
  modifiedBy?: string;
}): Promise<CreateBooksApiJournalEntriesBulkResponse>
```

<sub>`POST /books/journal-entries/{booksId}` · `postBooksJournalEntries`</sub>

## `mercury.putBooksJournalEntries`

Bulk update journal entries

```ts
mercury.putBooksJournalEntries(input: {
  /**  The individual journal entry updates */
  updates: (UpdateBooksApiJournalEntryRequest)[];
  booksId: string;
}): Promise<(unknown)[]>
```

<sub>`PUT /books/journal-entries/{booksId}` · `putBooksJournalEntries`</sub>

## `mercury.getBooksJournalEntry`

Retrieve a Journal Entry

```ts
mercury.getBooksJournalEntry(input: {
  booksId: string;
  /** unique id for a journal entry */
  journalEntryId: string;
  expand?: "lineEntries" | "lineEntries.transactions" | "lineEntries.ledger" | "lineEntries.opposingLedgerIds" | "lineEntries.paymentApplications" | "accrualSource";
}): Promise<GetBooksApiJournalEntryResponse>
```

<sub>`GET /books/journal-entry/{booksId}/{journalEntryId}` · `getBooksJournalEntry`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

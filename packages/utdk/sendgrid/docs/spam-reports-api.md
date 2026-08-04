# Spam Reports API

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteSuppressionSpamReports`

Delete spam reports — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionSpamReports(input: {
  /** Indicates if you want to delete all email addresses on the spam report list. */
  delete_all?: boolean;
  /** A list of specific email addresses that you want to remove from the spam report list. */
  emails?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/spam_reports` · `DELETE_suppression-spam_reports`</sub>

## `sendgrid.getSuppressionSpamReports`

Retrieve all spam reports — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionSpamReports(input: {
  /** The start of the time range when a spam report was created (inclusive). This is a unix timestamp. */
  start_time?: number;
  /** The end of the time range when a spam report was created (inclusive). This is a unix timestamp. */
  end_time?: number;
  /** Limit the number of results to be displayed per page. */
  limit?: number;
  /** Paging offset. The point in the list to begin displaying results. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SpamReportsResponse>
```

<sub>`GET /suppression/spam_reports` · `GET_suppression-spam_reports`</sub>

## `sendgrid.deleteSuppressionSpamReportsEmail`

Delete a specific spam report — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionSpamReportsEmail(input: {
  /** The email address of a specific spam report that you want to retrieve. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/spam_reports/{email}` · `DELETE_suppression-spam_reports-email`</sub>

## `sendgrid.getSuppressionSpamReportsEmail`

Retrieve a specific spam report — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionSpamReportsEmail(input: {
  /** The email address of a specific spam report that you want to retrieve. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SpamReportsResponse>
```

<sub>`GET /suppression/spam_reports/{email}` · `GET_suppression-spam_reports-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

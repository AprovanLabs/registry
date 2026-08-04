# Invalid Emails API

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteSuppressionInvalidEmails`

Delete invalid emails — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionInvalidEmails(input: {
  /** Indicates if you want to remove all email address from the invalid emails list. */
  delete_all?: boolean;
  /** The list of specific email addresses that you want to remove. */
  emails?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/invalid_emails` · `DELETE_suppression-invalid_emails`</sub>

## `sendgrid.getSuppressionInvalidEmails`

Retrieve all invalid emails — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionInvalidEmails(input: {
  /** Refers start of the time range in unix timestamp when an invalid email was created (inclusive). */
  start_time?: number;
  /** Refers end of the time range in unix timestamp when an invalid email was created (inclusive). */
  end_time?: number;
  /** Limit the number of results to be displayed per page. */
  limit?: number;
  /** Paging offset. The point in the list to begin displaying results. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(InvalidEmail)[]>
```

<sub>`GET /suppression/invalid_emails` · `GET_suppression-invalid_emails`</sub>

## `sendgrid.deleteSuppressionInvalidEmailsEmail`

Delete a specific invalid email — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionInvalidEmailsEmail(input: {
  /** The specific email address of the invalid email entry that you want to retrieve. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/invalid_emails/{email}` · `DELETE_suppression-invalid_emails-email`</sub>

## `sendgrid.getSuppressionInvalidEmailsEmail`

Retrieve a specific invalid email — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionInvalidEmailsEmail(input: {
  /** The specific email address of the invalid email entry that you want to retrieve. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(InvalidEmail)[]>
```

<sub>`GET /suppression/invalid_emails/{email}` · `GET_suppression-invalid_emails-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

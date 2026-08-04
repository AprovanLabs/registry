# Suppressions   Global Suppressions

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postAsmSuppressionsGlobal`

Add recipient addresses to the global suppression group. — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postAsmSuppressionsGlobal(input: {
  /** The array of email addresses to add or find. */
  recipient_emails: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipient_emails: (string)[] }>
```

<sub>`POST /asm/suppressions/global` · `POST_asm-suppressions-global`</sub>

## `sendgrid.deleteAsmSuppressionsGlobalEmail`

Delete a Global Suppression — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteAsmSuppressionsGlobalEmail(input: {
  /** The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /asm/suppressions/global/{email}` · `DELETE_asm-suppressions-global-email`</sub>

## `sendgrid.getAsmSuppressionsGlobalEmail`

Retrieve a Global Suppression — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getAsmSuppressionsGlobalEmail(input: {
  /** The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ recipient_email: string }>
```

<sub>`GET /asm/suppressions/global/{email}` · `GET_asm-suppressions-global-email`</sub>

## `sendgrid.getSuppressionUnsubscribes`

Retrieve all global suppressions — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionUnsubscribes(input: {
  /** Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive). */
  start_time?: number;
  /** Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive). */
  end_time?: number;
  /** The number of results to display on each page. */
  limit?: number;
  /** The point in the list of results to begin displaying global suppressions. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<({ created: number; email: string })[]>
```

<sub>`GET /suppression/unsubscribes` · `GET_suppression-unsubscribes`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

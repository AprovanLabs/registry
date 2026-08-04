# Bounces API

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteSuppressionBounces`

Delete bounces — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionBounces(input: {
  /** This parameter allows you to delete **every** email in your bounce list. This should not be used with the emails parameter. */
  delete_all?: boolean;
  /** Delete multiple emails from your bounce list at the same time. This should not be used with the delete_all parameter. */
  emails?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<unknown>
```

<sub>`DELETE /suppression/bounces` · `DELETE_suppression-bounces`</sub>

## `sendgrid.getSuppressionBounces`

Retrieve all bounces — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionBounces(input: {
  /** Refers start of the time range in unix timestamp when a bounce was created (inclusive). */
  start_time?: number;
  /** Refers end of the time range in unix timestamp when a bounce was created (inclusive). */
  end_time?: number;
}, options: { headers: { Accept: string; "on-behalf-of"?: string } }): Promise<(BounceResponse)[]>
```

<sub>`GET /suppression/bounces` · `GET_suppression-bounces`</sub>

## `sendgrid.deleteSuppressionBouncesEmail`

Delete a bounce — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionBouncesEmail(input: {
  body?: unknown;
  email: string;
  /** The email address you would like to remove from the bounce list. */
  email_address: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/bounces/{email}` · `DELETE_suppression-bounces-email`</sub>

## `sendgrid.getSuppressionBouncesEmail`

Retrieve a Bounce — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionBouncesEmail(input: {
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<(BounceResponse)[]>
```

<sub>`GET /suppression/bounces/{email}` · `GET_suppression-bounces-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

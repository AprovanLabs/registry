# Blocks API

4 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.deleteSuppressionBlocks`

Delete blocks — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionBlocks(input: {
  /** Indicates if you want to delete all blocked email addresses. */
  delete_all?: boolean;
  /** The specific blocked email addresses that you want to delete. */
  emails?: (string)[];
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/blocks` · `DELETE_suppression-blocks`</sub>

## `sendgrid.getSuppressionBlocks`

Retrieve all blocks — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionBlocks(input: {
  /** The start of the time range when a blocked email was created (inclusive). This is a unix timestamp. */
  start_time?: number;
  /** The end of the time range when a blocked email was created (inclusive). This is a unix timestamp. */
  end_time?: number;
  /** Limit the number of results to be displayed per page. */
  limit?: number;
  /** The point in the list to begin displaying results. */
  offset?: number;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<BlocksResponse>
```

<sub>`GET /suppression/blocks` · `GET_suppression-blocks`</sub>

## `sendgrid.deleteSuppressionBlocksEmail`

Delete a specific block — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.deleteSuppressionBlocksEmail(input: {
  /** The email address of the specific block. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<{ [key: string]: unknown }>
```

<sub>`DELETE /suppression/blocks/{email}` · `DELETE_suppression-blocks-email`</sub>

## `sendgrid.getSuppressionBlocksEmail`

Retrieve a specific block — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getSuppressionBlocksEmail(input: {
  /** The email address of the specific block. */
  email: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<BlocksResponse>
```

<sub>`GET /suppression/blocks/{email}` · `GET_suppression-blocks-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

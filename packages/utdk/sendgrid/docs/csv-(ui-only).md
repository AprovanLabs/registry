# CSV (UI Only)

2 operations · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postV3MessagesDownload`

Request CSV — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postV3MessagesDownload(input: {
  /** Uses a SQL like syntax to indicate which messages to include in the CSV */
  query?: string;
}, options: { headers: { Authorization: string } }): Promise<{ message?: string; status?: "pending" }>
```

<sub>`POST /messages/download` · `POST_v3-messages-download`</sub>

## `sendgrid.getV3MessagesDownloadDownloadUuid`

Download CSV — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.getV3MessagesDownloadDownloadUuid(input: {
  /** UUID used to locate the download csv request entry in the DB.  This is the UUID provided in the email sent to the user when their csv file is ready to download */
  download_uuid: string;
}, options: { headers: { Authorization: string } }): Promise<{ csv: string; presigned_url?: string }>
```

<sub>`GET /messages/download/{download_uuid}` · `GET_v3-messages-download-download_uuid`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

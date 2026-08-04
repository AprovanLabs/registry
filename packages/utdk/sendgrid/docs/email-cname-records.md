# Email CNAME Records

1 operation · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postWhitelabelDnsEmail`

Email DNS records to a co-worker — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postWhitelabelDnsEmail(input: {
  /** The ID of your SendGrid domain record. */
  domain_id: number;
  /** The email address to send the DNS information to. */
  email: string;
  link_id: number;
  /** A custom text block to include in the email body sent with the records. */
  message?: string;
}): Promise<undefined>
```

<sub>`POST /whitelabel/dns/email` · `POST_whitelabel-dns-email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Senders

1 operation · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postMarketingSenders`

Create a Sender Identity — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingSenders(input: {
  /** The physical address of the sender identity. */
  address: string;
  /** Additional sender identity address information. */
  address_2?: string;
  /** The city of the sender identity. */
  city: string;
  /** The country of the sender identity. */
  country: string;
  from: { email: string; name: string };
  /** A nickname for the sender identity. Not used for sending. */
  nickname: string;
  reply_to?: { email: string; name?: string };
  /** The state of the sender identity. */
  state?: string;
  /** The zipcode of the sender identity. */
  zip?: string;
}, options?: { headers?: { "on-behalf-of"?: string } }): Promise<SenderId>
```

<sub>`POST /marketing/senders` · `POST_marketing-senders`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

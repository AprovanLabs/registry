# Send Test Email

1 operation · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postMarketingTestSendEmail`

Send a Test Marketing Email — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMarketingTestSendEmail(input: {
  /** A custom unsubscribe URL. */
  custom_unsubscribe_url?: string;
  /** An array of email addresses you want to send the test message to. */
  emails: (string)[];
  /** You can either specify this address or specify a verified sender ID. */
  from_address?: string;
  /** This ID must belong to a verified sender. Alternatively, you may supply a `from_address` email. */
  sender_id?: number;
  suppression_group_id?: number;
  /** The ID of the template that you would like to use. If you use a template that contains a subject and content (either text or HTML), then those values specified at the personalizations or message level will not be used. */
  template_id: string;
  /**  You can override the active template with an alternative template version by passing the version ID in this field. If this field is blank, the active template version will be used. */
  version_id_override?: string;
}): Promise<{ [key: string]: unknown }>
```

<sub>`POST /marketing/test/send_email` · `POST_marketing-test-send_email`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

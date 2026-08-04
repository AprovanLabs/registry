# Mail Send

1 operation · `@utdk/sendgrid`

```ts
import sendgrid from "@utdk/sendgrid";
```

## `sendgrid.postMailSend`

v3 Mail Send — [Provider docs](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html)

```ts
sendgrid.postMailSend(input: {
  /** An object allowing you to specify how to handle unsubscribes. */
  asm?: { group_id: number; groups_to_display?: (number)[] };
  /** An array of objects where you can specify any attachments you want to include. */
  attachments?: ({ content: string; content_id?: string; disposition?: "inline" | "attachment"; filename: string; type?: string })[];
  /** An ID representing a batch of emails to be sent at the same time. Including a `batch_id` in your request allows you include this email in that batch. It also enables you to cancel or pause the delivery of that batch. For more information, see the [Cancel Scheduled Sends API](https://sendgrid.com/docs/api-reference/). */
  batch_id?: string;
  /** An array of category names for this message. Each category name may not exceed 255 characters.  */
  categories?: (string)[];
  /** An array where you can specify the content of your email. You can include multiple [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of content, but you must specify at least one MIME type. To include more than one MIME type, add another object to the array containing the `type` and `value` parameters. */
  content: ({ type: string; value: string })[];
  /** Values that are specific to the entire send that will be carried along with the email and its activity data.  Key/value pairs must be strings. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. This parameter is overridden by `custom_args` set at the personalizations level. Total `custom_args` size may not exceed 10,000 bytes. */
  custom_args?: string;
  from: FromEmailObject;
  /** An object containing key/value pairs of header names and the value to substitute for them. The key/value pairs must be strings. You must ensure these are properly encoded if they contain unicode characters. These headers cannot be one of the reserved headers. */
  headers?: { [key: string]: unknown };
  /** The IP Pool that you would like to send this email from. */
  ip_pool_name?: string;
  /** A collection of different mail settings that you can use to specify how you would like this email to be handled. */
  mail_settings?: { bypass_bounce_management?: { enable?: boolean }; bypass_list_management?: { enable?: boolean }; bypass_spam_management?: { enable?: boolean }; bypass_unsubscribe_management?: { enable?: boolean }; footer?: { enable?: boolean; html?: string; text?: string }; sandbox_mode?: { enable?: boolean } };
  /** An array of messages and their metadata. Each object within personalizations can be thought of as an envelope - it defines who should receive an individual message and how that message should be handled. See our [Personalizations documentation](https://sendgrid.com/docs/for-developers/sending-email/personalizations/) for examples. */
  personalizations: ({ bcc?: (CcBccEmailObject)[]; cc?: (CcBccEmailObject)[]; custom_args?: { [key: string]: unknown }; dynamic_template_data?: { [key: string]: unknown }; from?: FromEmailObject; headers?: { [key: string]: unknown }; send_at?: number; subject?: string; substitutions?: { [key: string]: unknown }; to: ToEmailArray })[];
  reply_to?: ReplyToEmailObject;
  /** An array of recipients who will receive replies and/or bounces. Each object in this array must contain the recipient's email address. Each object in the array may optionally contain the recipient's name. You can either choose to use “reply_to” field or “reply_to_list” but not both. */
  reply_to_list?: ({ email: string; name?: string })[];
  /** A unix timestamp allowing you to specify when you want your email to be delivered. This may be overridden by the `send_at` parameter set at the personalizations level. Delivery cannot be scheduled more than 72 hours in advance. If you have the flexibility, it's better to schedule mail for off-peak times. Most emails are scheduled and sent at the top of the hour or half hour. Scheduling email to avoid peak times — for example, scheduling at 10:53 — can result in lower deferral rates due to the reduced traffic during off-peak times. */
  send_at?: number;
  /** The global or 'message level' subject of your email. This may be overridden by subject lines set in personalizations. */
  subject: string;
  /** An email template ID. A template that contains a subject and content — either text or html — will override any subject and content values specified at the personalizations or message level. */
  template_id?: string;
  /** Settings to determine how you would like to track the metrics of how your recipients interact with your email. */
  tracking_settings?: { click_tracking?: { enable?: boolean; enable_text?: boolean }; ganalytics?: { enable?: boolean; utm_campaign?: string; utm_content?: string; utm_medium?: string; utm_source?: string; utm_term?: string }; open_tracking?: { enable?: boolean; substitution_tag?: string }; subscription_tracking?: { enable?: boolean; html?: string; substitution_tag?: string; text?: string } };
}): Promise<undefined>
```

<sub>`POST /mail/send` · `POST_mail-send`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

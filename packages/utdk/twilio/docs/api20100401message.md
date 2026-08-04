# Api20100401Message

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listMessage`

Retrieve a list of Message resources associated with a Twilio Account — [Provider docs](https://support.twilio.com)

```ts
twilio.listMessage(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resources. */
  AccountSid: string;
  /** Filter by recipient. For example: Set this parameter to `+15558881111` to retrieve a list of Message resources sent to `+15558881111`. */
  To?: string;
  /** Filter by sender. For example: Set this parameter to `+15552229999` to retrieve a list of Message resources sent by `+15552229999`. */
  From?: string;
  /** Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with `sent_dates` on and after a specific date). */
  DateSent?: string;
  /** Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with `sent_dates` on and after a specific date). */
  "DateSent<"?: string;
  /** Filter by Message `sent_date`. Accepts GMT dates in the following formats: `YYYY-MM-DD` (to find Messages with a specific `sent_date`), `<=YYYY-MM-DD` (to find Messages with `sent_date`s on and before a specific date), and `>=YYYY-MM-DD` (to find Messages with `sent_dates` on and after a specific date). */
  "DateSent>"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; messages?: (ApiV2010AccountMessage)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Messages.json` · `ListMessage`</sub>

## `twilio.createMessage`

Send a message — [Provider docs](https://support.twilio.com)

```ts
twilio.createMessage(input: {
  /** The recipient's phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (for SMS/MMS) or [channel address](https://www.twilio.com/docs/messaging/channels), e.g. `whatsapp:+15552229999`. */
  To: string;
  /** The URL of the endpoint to which Twilio sends [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url). URL must contain a valid hostname and underscores are not allowed. If you include this parameter with the `messaging_service_sid`, Twilio uses this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource).  */
  StatusCallback?: string;
  /** The SID of the associated [TwiML Application](https://www.twilio.com/docs/usage/api/applications). [Message status callback requests](https://www.twilio.com/docs/sms/api/message-resource#twilios-request-to-the-statuscallback-url) are sent to the TwiML App's `message_status_callback` URL. Note that the `status_callback` parameter of a request takes priority over the `application_sid` parameter; if both are included `application_sid` is ignored. */
  ApplicationSid?: string;
  /** [OBSOLETE] This parameter will no longer have any effect as of 2024-06-03. */
  MaxPrice?: number;
  /** Boolean indicating whether or not you intend to provide delivery confirmation feedback to Twilio (used in conjunction with the [Message Feedback subresource](https://www.twilio.com/docs/sms/api/message-feedback-resource)). Default value is `false`. */
  ProvideFeedback?: boolean;
  /** Total number of attempts made (including this request) to send the message regardless of the provider used */
  Attempt?: number;
  /** The maximum length in seconds that the Message can remain in Twilio's outgoing message queue. If a queued Message exceeds the `validity_period`, the Message is not sent. Accepted values are integers from `1` to `36000`. Default value is `36000`. A `validity_period` greater than `5` is recommended. [Learn more about the validity period](https://www.twilio.com/blog/take-more-control-of-outbound-messages-using-validity-period-html) */
  ValidityPeriod?: number;
  /** Reserved */
  ForceDelivery?: boolean;
  ContentRetention?: MessageEnumContentRetention;
  AddressRetention?: MessageEnumAddressRetention;
  /** Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`. */
  SmartEncoded?: boolean;
  /** Rich actions for non-SMS/MMS channels. Used for [sending location in WhatsApp messages](https://www.twilio.com/docs/whatsapp/message-features#location-messages-with-whatsapp). */
  PersistentAction?: (string)[];
  TrafficType?: MessageEnumTrafficType;
  /** For Messaging Services with [Link Shortening configured](https://www.twilio.com/docs/messaging/features/link-shortening) only: A Boolean indicating whether or not Twilio should shorten links in the `body` of the Message. Default value is `false`. If `true`, the `messaging_service_sid` parameter must also be provided. */
  ShortenUrls?: boolean;
  ScheduleType?: MessageEnumScheduleType;
  /** The time that Twilio will send the message. Must be in ISO 8601 format. */
  SendAt?: string;
  /** If set to `true`, Twilio delivers the message as a single MMS message, regardless of the presence of media. */
  SendAsMms?: boolean;
  /** For [Content Editor/API](https://www.twilio.com/docs/content) only: Key-value pairs of [Template variables](https://www.twilio.com/docs/content/using-variables-with-content-api) and their substitution values. `content_sid` parameter must also be provided. If values are not defined in the `content_variables` parameter, the [Template's default placeholder values](https://www.twilio.com/docs/content/content-api-resources#create-templates) are used. */
  ContentVariables?: string;
  RiskCheck?: MessageEnumRiskCheck;
  /** The sender's Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), [Wireless SIM](https://www.twilio.com/docs/iot/wireless/programmable-wireless-send-machine-machine-sms-commands), [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), or [channel address](https://www.twilio.com/docs/messaging/channels) (e.g., `whatsapp:+15554449999`). The value of the `from` parameter must be a sender that is hosted within Twilio and belongs to the Account creating the Message. If you are using `messaging_service_sid`, this parameter can be empty (Twilio assigns a `from` value from the Messaging Service's Sender Pool) or you can provide a specific sender from your Sender Pool. */
  From?: string;
  /** A fallback SMS sender to use when the recipient cannot be reached over RCS. This parameter may only be used when also providing a [Messaging Service](https://twilio.com/docs/messaging/services) containing an RCS sender. The fallback SMS sender must be either a Twilio phone number (in [E.164](https://en.wikipedia.org/wiki/E.164) format), [alphanumeric sender ID](https://www.twilio.com/docs/sms/quickstart), or [short code](https://www.twilio.com/en-us/messaging/channels/sms/short-codes), hosted within Twilio and belong to the Account creating the Message. */
  FallbackFrom?: string;
  /** The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services) you want to associate with the Message. When this parameter is provided and the `from` parameter is omitted, Twilio selects the optimal sender from the Messaging Service's Sender Pool. You may also provide a `from` parameter if you want to use a specific Sender from the Sender Pool. */
  MessagingServiceSid?: string;
  /** The text content of the outgoing message. Can be up to 1,600 characters in length. SMS only: If the `body` contains more than 160 [GSM-7](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) characters (or 70 [UCS-2](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding) characters), the message is segmented and charged accordingly. For long `body` text, consider using the [send_as_mms parameter](https://www.twilio.com/blog/mms-for-long-text-messages). */
  Body?: string;
  /** The URL of media to include in the Message content. `jpeg`, `jpg`, `gif`, and `png` file types are fully supported by Twilio and content is formatted for delivery on destination devices. The media size limit is 5 MB for supported file types (`jpeg`, `jpg`, `png`, `gif`) and 500 KB for [other types](https://www.twilio.com/docs/messaging/guides/accepted-mime-types) of accepted media. To send more than one image in the message, provide multiple `media_url` parameters in the POST request. You can include up to ten `media_url` parameters per message. [International](https://support.twilio.com/hc/en-us/articles/223179808-Sending-and-receiving-MMS-messages) and [carrier](https://support.twilio.com/hc/en-us/articles/223133707-Is-MMS-supported-for-all-carriers-in-US-and-Canada-) limits apply. */
  MediaUrl?: (string)[];
  /** For [Content Editor/API](https://www.twilio.com/docs/content) only: The SID of the Content Template to be used with the Message, e.g., `HXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`. If this parameter is not provided, a Content Template is not used. Find the SID in the Console on the Content Editor page. For Content API users, the SID is found in Twilio's response when [creating the Template](https://www.twilio.com/docs/content/content-api-resources#create-templates) or by [fetching your Templates](https://www.twilio.com/docs/content/content-api-resources#fetch-all-content-resources). */
  ContentSid?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) creating the Message resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountMessage>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Messages.json` · `CreateMessage`</sub>

## `twilio.deleteMessage`

Deletes a Message resource from your account — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteMessage(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource */
  AccountSid: string;
  /** The SID of the Message resource you wish to delete */
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json` · `DeleteMessage`</sub>

## `twilio.fetchMessage`

Fetch a specific Message — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchMessage(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with the Message resource */
  AccountSid: string;
  /** The SID of the Message resource to be fetched */
  Sid: string;
}): Promise<ApiV2010AccountMessage>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json` · `FetchMessage`</sub>

## `twilio.updateMessage`

Update a Message resource (used to redact Message `body` text and to cancel not-yet-sent messages) — [Provider docs](https://support.twilio.com)

```ts
twilio.updateMessage(input: {
  /** The new `body` of the Message resource. To redact the text content of a Message, this parameter's value must be an empty string */
  Body?: string;
  Status?: MessageEnumUpdateStatus;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resources to update. */
  AccountSid: string;
  /** The SID of the Message resource to be updated */
  Sid: string;
}): Promise<ApiV2010AccountMessage>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json` · `UpdateMessage`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Api20100401ShortCode

3 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listShortCode`

Retrieve a list of short-codes belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listShortCode(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to read. */
  AccountSid: string;
  /** The string that identifies the ShortCode resources to read. */
  FriendlyName?: string;
  /** Only show the ShortCode resources that match this pattern. You can specify partial numbers and use '*' as a wildcard for any digit. */
  ShortCode?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; short_codes?: (ApiV2010AccountShortCode)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json` · `ListShortCode`</sub>

## `twilio.fetchShortCode`

Fetch an instance of a short code — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchShortCode(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to fetch. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the ShortCode resource to fetch */
  Sid: string;
}): Promise<ApiV2010AccountShortCode>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json` · `FetchShortCode`</sub>

## `twilio.updateShortCode`

Update a short code with the following parameters — [Provider docs](https://support.twilio.com)

```ts
twilio.updateShortCode(input: {
  /** A descriptive string that you created to describe this resource. It can be up to 64 characters long. By default, the `FriendlyName` is the short code. */
  FriendlyName?: string;
  /** The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. */
  ApiVersion?: string;
  /** The URL we should call when receiving an incoming SMS message to this short code. */
  SmsUrl?: string;
  /** The HTTP method we should use when calling the `sms_url`. Can be: `GET` or `POST`. */
  SmsMethod?: "GET" | "POST";
  /** The URL that we should call if an error occurs while retrieving or executing the TwiML from `sms_url`. */
  SmsFallbackUrl?: string;
  /** The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`. */
  SmsFallbackMethod?: "GET" | "POST";
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to update. */
  AccountSid: string;
  /** The Twilio-provided string that uniquely identifies the ShortCode resource to update */
  Sid: string;
}): Promise<ApiV2010AccountShortCode>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json` · `UpdateShortCode`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

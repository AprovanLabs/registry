# Api20100401AvailablePhoneNumberCountry

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listAvailablePhoneNumberCountry`

[Provider docs](https://support.twilio.com)

```ts
twilio.listAvailablePhoneNumberCountry(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the available phone number Country resources. */
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ countries?: (ApiV2010AccountAvailablePhoneNumberCountry)[]; uri?: string | null }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json` · `ListAvailablePhoneNumberCountry`</sub>

## `twilio.fetchAvailablePhoneNumberCountry`

[Provider docs](https://support.twilio.com)

```ts
twilio.fetchAvailablePhoneNumberCountry(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the available phone number Country resource. */
  AccountSid: string;
  /** The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to fetch available phone number information about. */
  CountryCode: string;
}): Promise<ApiV2010AccountAvailablePhoneNumberCountry>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json` · `FetchAvailablePhoneNumberCountry`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

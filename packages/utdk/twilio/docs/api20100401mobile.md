# Api20100401Mobile

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listAvailablePhoneNumberMobile`

[Provider docs](https://support.twilio.com)

```ts
twilio.listAvailablePhoneNumberMobile(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources. */
  AccountSid: string;
  /** The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers. */
  CountryCode: string;
  /** The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
  AreaCode?: number;
  /** Matching pattern to identify phone numbers. This pattern can be between 2 and 16 characters long and allows all digits (0-9) and all non-diacritic latin alphabet letters (a-z, A-Z). It accepts four meta-characters: `*`, `%`, `+`, `$`. The `*` and `%` meta-characters can appear multiple times in the pattern. To match wildcards at the beginning or end of the pattern, use `*` to match any single character or `%` to match a sequence of characters. If you use the wildcard patterns, it must include at least two non-meta-characters, and wildcards cannot be used between non-meta-characters. To match the beginning of a pattern, start the pattern with `+`. To match the end of the pattern, append the pattern with `$`. These meta-characters can't be adjacent to each other. */
  Contains?: string;
  /** Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
  SmsEnabled?: boolean;
  /** Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
  MmsEnabled?: boolean;
  /** Whether the phone numbers can receive calls. Can be: `true` or `false`. */
  VoiceEnabled?: boolean;
  /** Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  ExcludeAllAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  ExcludeLocalAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  ExcludeForeignAddressRequired?: boolean;
  /** Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
  Beta?: boolean;
  /** Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
  NearNumber?: string;
  /** Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
  NearLatLong?: string;
  /** The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
  Distance?: number;
  /** Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
  InPostalCode?: string;
  /** Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
  InRegion?: string;
  /** Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
  InRateCenter?: string;
  /** Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
  InLata?: string;
  /** Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
  InLocality?: string;
  /** Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
  FaxEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; available_phone_numbers?: (ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json` · `ListAvailablePhoneNumberMobile`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Api20100401SigningKey

4 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listSigningKey`

[Provider docs](https://support.twilio.com)

```ts
twilio.listSigningKey(input: {
  AccountSid: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; signing_keys?: (ApiV2010AccountSigningKey)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SigningKeys.json` · `ListSigningKey`</sub>

## `twilio.deleteSigningKey`

[Provider docs](https://support.twilio.com)

```ts
twilio.deleteSigningKey(input: {
  AccountSid: string;
  Sid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json` · `DeleteSigningKey`</sub>

## `twilio.fetchSigningKey`

[Provider docs](https://support.twilio.com)

```ts
twilio.fetchSigningKey(input: {
  AccountSid: string;
  Sid: string;
}): Promise<ApiV2010AccountSigningKey>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json` · `FetchSigningKey`</sub>

## `twilio.updateSigningKey`

[Provider docs](https://support.twilio.com)

```ts
twilio.updateSigningKey(input: {
  FriendlyName?: string;
  AccountSid: string;
  Sid: string;
}): Promise<ApiV2010AccountSigningKey>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json` · `UpdateSigningKey`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

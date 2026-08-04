# Api20100401NewKey

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createNewKey`

[Provider docs](https://support.twilio.com)

```ts
twilio.createNewKey(input: {
  /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
  FriendlyName?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be responsible for the new Key resource. */
  AccountSid: string;
}): Promise<ApiV2010AccountNewKey>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Keys.json` · `CreateNewKey`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

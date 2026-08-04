# Api20100401Balance

1 operation · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.fetchBalance`

Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchBalance(input: {
  /** The unique SID identifier of the Account. */
  AccountSid: string;
}): Promise<ApiV2010AccountBalance>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Balance.json` · `FetchBalance`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

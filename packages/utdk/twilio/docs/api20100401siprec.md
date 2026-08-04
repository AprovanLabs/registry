# Api20100401Siprec

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createSiprec`

Create a Siprec — [Provider docs](https://support.twilio.com)

```ts
twilio.createSiprec(input: {
  /** The user-specified name of this Siprec, if one was given when the Siprec was created. This may be used to stop the Siprec. */
  Name?: string;
  /** Unique name used when configuring the connector via Marketplace Add-on. */
  ConnectorName?: string;
  Track?: SiprecEnumTrack;
  /** Absolute URL of the status callback. */
  StatusCallback?: string;
  /** The http method for the status_callback (one of GET, POST). */
  StatusCallbackMethod?: "GET" | "POST";
  /** Parameter name */
  "Parameter1.Name"?: string;
  /** Parameter value */
  "Parameter1.Value"?: string;
  /** Parameter name */
  "Parameter2.Name"?: string;
  /** Parameter value */
  "Parameter2.Value"?: string;
  /** Parameter name */
  "Parameter3.Name"?: string;
  /** Parameter value */
  "Parameter3.Value"?: string;
  /** Parameter name */
  "Parameter4.Name"?: string;
  /** Parameter value */
  "Parameter4.Value"?: string;
  /** Parameter name */
  "Parameter5.Name"?: string;
  /** Parameter value */
  "Parameter5.Value"?: string;
  /** Parameter name */
  "Parameter6.Name"?: string;
  /** Parameter value */
  "Parameter6.Value"?: string;
  /** Parameter name */
  "Parameter7.Name"?: string;
  /** Parameter value */
  "Parameter7.Value"?: string;
  /** Parameter name */
  "Parameter8.Name"?: string;
  /** Parameter value */
  "Parameter8.Value"?: string;
  /** Parameter name */
  "Parameter9.Name"?: string;
  /** Parameter value */
  "Parameter9.Value"?: string;
  /** Parameter name */
  "Parameter10.Name"?: string;
  /** Parameter value */
  "Parameter10.Value"?: string;
  /** Parameter name */
  "Parameter11.Name"?: string;
  /** Parameter value */
  "Parameter11.Value"?: string;
  /** Parameter name */
  "Parameter12.Name"?: string;
  /** Parameter value */
  "Parameter12.Value"?: string;
  /** Parameter name */
  "Parameter13.Name"?: string;
  /** Parameter value */
  "Parameter13.Value"?: string;
  /** Parameter name */
  "Parameter14.Name"?: string;
  /** Parameter value */
  "Parameter14.Value"?: string;
  /** Parameter name */
  "Parameter15.Name"?: string;
  /** Parameter value */
  "Parameter15.Value"?: string;
  /** Parameter name */
  "Parameter16.Name"?: string;
  /** Parameter value */
  "Parameter16.Value"?: string;
  /** Parameter name */
  "Parameter17.Name"?: string;
  /** Parameter value */
  "Parameter17.Value"?: string;
  /** Parameter name */
  "Parameter18.Name"?: string;
  /** Parameter value */
  "Parameter18.Value"?: string;
  /** Parameter name */
  "Parameter19.Name"?: string;
  /** Parameter value */
  "Parameter19.Value"?: string;
  /** Parameter name */
  "Parameter20.Name"?: string;
  /** Parameter value */
  "Parameter20.Value"?: string;
  /** Parameter name */
  "Parameter21.Name"?: string;
  /** Parameter value */
  "Parameter21.Value"?: string;
  /** Parameter name */
  "Parameter22.Name"?: string;
  /** Parameter value */
  "Parameter22.Value"?: string;
  /** Parameter name */
  "Parameter23.Name"?: string;
  /** Parameter value */
  "Parameter23.Value"?: string;
  /** Parameter name */
  "Parameter24.Name"?: string;
  /** Parameter value */
  "Parameter24.Value"?: string;
  /** Parameter name */
  "Parameter25.Name"?: string;
  /** Parameter value */
  "Parameter25.Value"?: string;
  /** Parameter name */
  "Parameter26.Name"?: string;
  /** Parameter value */
  "Parameter26.Value"?: string;
  /** Parameter name */
  "Parameter27.Name"?: string;
  /** Parameter value */
  "Parameter27.Value"?: string;
  /** Parameter name */
  "Parameter28.Name"?: string;
  /** Parameter value */
  "Parameter28.Value"?: string;
  /** Parameter name */
  "Parameter29.Name"?: string;
  /** Parameter value */
  "Parameter29.Value"?: string;
  /** Parameter name */
  "Parameter30.Name"?: string;
  /** Parameter value */
  "Parameter30.Value"?: string;
  /** Parameter name */
  "Parameter31.Name"?: string;
  /** Parameter value */
  "Parameter31.Value"?: string;
  /** Parameter name */
  "Parameter32.Name"?: string;
  /** Parameter value */
  "Parameter32.Value"?: string;
  /** Parameter name */
  "Parameter33.Name"?: string;
  /** Parameter value */
  "Parameter33.Value"?: string;
  /** Parameter name */
  "Parameter34.Name"?: string;
  /** Parameter value */
  "Parameter34.Value"?: string;
  /** Parameter name */
  "Parameter35.Name"?: string;
  /** Parameter value */
  "Parameter35.Value"?: string;
  /** Parameter name */
  "Parameter36.Name"?: string;
  /** Parameter value */
  "Parameter36.Value"?: string;
  /** Parameter name */
  "Parameter37.Name"?: string;
  /** Parameter value */
  "Parameter37.Value"?: string;
  /** Parameter name */
  "Parameter38.Name"?: string;
  /** Parameter value */
  "Parameter38.Value"?: string;
  /** Parameter name */
  "Parameter39.Name"?: string;
  /** Parameter value */
  "Parameter39.Value"?: string;
  /** Parameter name */
  "Parameter40.Name"?: string;
  /** Parameter value */
  "Parameter40.Value"?: string;
  /** Parameter name */
  "Parameter41.Name"?: string;
  /** Parameter value */
  "Parameter41.Value"?: string;
  /** Parameter name */
  "Parameter42.Name"?: string;
  /** Parameter value */
  "Parameter42.Value"?: string;
  /** Parameter name */
  "Parameter43.Name"?: string;
  /** Parameter value */
  "Parameter43.Value"?: string;
  /** Parameter name */
  "Parameter44.Name"?: string;
  /** Parameter value */
  "Parameter44.Value"?: string;
  /** Parameter name */
  "Parameter45.Name"?: string;
  /** Parameter value */
  "Parameter45.Value"?: string;
  /** Parameter name */
  "Parameter46.Name"?: string;
  /** Parameter value */
  "Parameter46.Value"?: string;
  /** Parameter name */
  "Parameter47.Name"?: string;
  /** Parameter value */
  "Parameter47.Value"?: string;
  /** Parameter name */
  "Parameter48.Name"?: string;
  /** Parameter value */
  "Parameter48.Value"?: string;
  /** Parameter name */
  "Parameter49.Name"?: string;
  /** Parameter value */
  "Parameter49.Value"?: string;
  /** Parameter name */
  "Parameter50.Name"?: string;
  /** Parameter value */
  "Parameter50.Value"?: string;
  /** Parameter name */
  "Parameter51.Name"?: string;
  /** Parameter value */
  "Parameter51.Value"?: string;
  /** Parameter name */
  "Parameter52.Name"?: string;
  /** Parameter value */
  "Parameter52.Value"?: string;
  /** Parameter name */
  "Parameter53.Name"?: string;
  /** Parameter value */
  "Parameter53.Value"?: string;
  /** Parameter name */
  "Parameter54.Name"?: string;
  /** Parameter value */
  "Parameter54.Value"?: string;
  /** Parameter name */
  "Parameter55.Name"?: string;
  /** Parameter value */
  "Parameter55.Value"?: string;
  /** Parameter name */
  "Parameter56.Name"?: string;
  /** Parameter value */
  "Parameter56.Value"?: string;
  /** Parameter name */
  "Parameter57.Name"?: string;
  /** Parameter value */
  "Parameter57.Value"?: string;
  /** Parameter name */
  "Parameter58.Name"?: string;
  /** Parameter value */
  "Parameter58.Value"?: string;
  /** Parameter name */
  "Parameter59.Name"?: string;
  /** Parameter value */
  "Parameter59.Value"?: string;
  /** Parameter name */
  "Parameter60.Name"?: string;
  /** Parameter value */
  "Parameter60.Value"?: string;
  /** Parameter name */
  "Parameter61.Name"?: string;
  /** Parameter value */
  "Parameter61.Value"?: string;
  /** Parameter name */
  "Parameter62.Name"?: string;
  /** Parameter value */
  "Parameter62.Value"?: string;
  /** Parameter name */
  "Parameter63.Name"?: string;
  /** Parameter value */
  "Parameter63.Value"?: string;
  /** Parameter name */
  "Parameter64.Name"?: string;
  /** Parameter value */
  "Parameter64.Value"?: string;
  /** Parameter name */
  "Parameter65.Name"?: string;
  /** Parameter value */
  "Parameter65.Value"?: string;
  /** Parameter name */
  "Parameter66.Name"?: string;
  /** Parameter value */
  "Parameter66.Value"?: string;
  /** Parameter name */
  "Parameter67.Name"?: string;
  /** Parameter value */
  "Parameter67.Value"?: string;
  /** Parameter name */
  "Parameter68.Name"?: string;
  /** Parameter value */
  "Parameter68.Value"?: string;
  /** Parameter name */
  "Parameter69.Name"?: string;
  /** Parameter value */
  "Parameter69.Value"?: string;
  /** Parameter name */
  "Parameter70.Name"?: string;
  /** Parameter value */
  "Parameter70.Value"?: string;
  /** Parameter name */
  "Parameter71.Name"?: string;
  /** Parameter value */
  "Parameter71.Value"?: string;
  /** Parameter name */
  "Parameter72.Name"?: string;
  /** Parameter value */
  "Parameter72.Value"?: string;
  /** Parameter name */
  "Parameter73.Name"?: string;
  /** Parameter value */
  "Parameter73.Value"?: string;
  /** Parameter name */
  "Parameter74.Name"?: string;
  /** Parameter value */
  "Parameter74.Value"?: string;
  /** Parameter name */
  "Parameter75.Name"?: string;
  /** Parameter value */
  "Parameter75.Value"?: string;
  /** Parameter name */
  "Parameter76.Name"?: string;
  /** Parameter value */
  "Parameter76.Value"?: string;
  /** Parameter name */
  "Parameter77.Name"?: string;
  /** Parameter value */
  "Parameter77.Value"?: string;
  /** Parameter name */
  "Parameter78.Name"?: string;
  /** Parameter value */
  "Parameter78.Value"?: string;
  /** Parameter name */
  "Parameter79.Name"?: string;
  /** Parameter value */
  "Parameter79.Value"?: string;
  /** Parameter name */
  "Parameter80.Name"?: string;
  /** Parameter value */
  "Parameter80.Value"?: string;
  /** Parameter name */
  "Parameter81.Name"?: string;
  /** Parameter value */
  "Parameter81.Value"?: string;
  /** Parameter name */
  "Parameter82.Name"?: string;
  /** Parameter value */
  "Parameter82.Value"?: string;
  /** Parameter name */
  "Parameter83.Name"?: string;
  /** Parameter value */
  "Parameter83.Value"?: string;
  /** Parameter name */
  "Parameter84.Name"?: string;
  /** Parameter value */
  "Parameter84.Value"?: string;
  /** Parameter name */
  "Parameter85.Name"?: string;
  /** Parameter value */
  "Parameter85.Value"?: string;
  /** Parameter name */
  "Parameter86.Name"?: string;
  /** Parameter value */
  "Parameter86.Value"?: string;
  /** Parameter name */
  "Parameter87.Name"?: string;
  /** Parameter value */
  "Parameter87.Value"?: string;
  /** Parameter name */
  "Parameter88.Name"?: string;
  /** Parameter value */
  "Parameter88.Value"?: string;
  /** Parameter name */
  "Parameter89.Name"?: string;
  /** Parameter value */
  "Parameter89.Value"?: string;
  /** Parameter name */
  "Parameter90.Name"?: string;
  /** Parameter value */
  "Parameter90.Value"?: string;
  /** Parameter name */
  "Parameter91.Name"?: string;
  /** Parameter value */
  "Parameter91.Value"?: string;
  /** Parameter name */
  "Parameter92.Name"?: string;
  /** Parameter value */
  "Parameter92.Value"?: string;
  /** Parameter name */
  "Parameter93.Name"?: string;
  /** Parameter value */
  "Parameter93.Value"?: string;
  /** Parameter name */
  "Parameter94.Name"?: string;
  /** Parameter value */
  "Parameter94.Value"?: string;
  /** Parameter name */
  "Parameter95.Name"?: string;
  /** Parameter value */
  "Parameter95.Value"?: string;
  /** Parameter name */
  "Parameter96.Name"?: string;
  /** Parameter value */
  "Parameter96.Value"?: string;
  /** Parameter name */
  "Parameter97.Name"?: string;
  /** Parameter value */
  "Parameter97.Value"?: string;
  /** Parameter name */
  "Parameter98.Name"?: string;
  /** Parameter value */
  "Parameter98.Value"?: string;
  /** Parameter name */
  "Parameter99.Name"?: string;
  /** Parameter value */
  "Parameter99.Value"?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with. */
  CallSid: string;
}): Promise<ApiV2010AccountCallSiprec>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json` · `CreateSiprec`</sub>

## `twilio.updateSiprec`

Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource — [Provider docs](https://support.twilio.com)

```ts
twilio.updateSiprec(input: {
  Status: SiprecEnumUpdateStatus;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with. */
  CallSid: string;
  /** The SID of the Siprec resource, or the `name` used when creating the resource */
  Sid: string;
}): Promise<ApiV2010AccountCallSiprec>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json` · `UpdateSiprec`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

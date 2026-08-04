# Calls

10 operations · `@utdk/intercom`

```ts
import intercom from "@utdk/intercom";
```

## `intercom.listCalls`

List all calls — [Provider docs](https://developers.intercom.com)

```ts
intercom.listCalls(input: {
  /** The page of results to fetch. Defaults to first page */
  page?: number;
  /** How many results to display per page. Defaults to 25. Max 25. */
  per_page?: number;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<CallList>
```

<sub>`GET /calls` · `listCalls`</sub>

## `intercom.showCall`

Get a call — [Provider docs](https://developers.intercom.com)

```ts
intercom.showCall(input: {
  /** The id of the call to retrieve */
  call_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<Call>
```

<sub>`GET /calls/{call_id}` · `showCall`</sub>

## `intercom.showCallRecording`

Get call recording by call id — [Provider docs](https://developers.intercom.com)

```ts
intercom.showCallRecording(input: {
  /** The id of the call */
  call_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<unknown>
```

<sub>`GET /calls/{call_id}/recording` · `showCallRecording`</sub>

## `intercom.showCallTranscript`

Get call transcript by call id — [Provider docs](https://developers.intercom.com)

```ts
intercom.showCallTranscript(input: {
  /** The id of the call */
  call_id: string;
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<string>
```

<sub>`GET /calls/{call_id}/transcript` · `showCallTranscript`</sub>

## `intercom.listCallsWithTranscripts`

List calls with transcripts — [Provider docs](https://developers.intercom.com)

```ts
intercom.listCallsWithTranscripts(input: {
  /** A list of conversation ids to fetch calls for. Maximum 20. */
  conversation_ids: (string)[];
}, options?: { headers?: { "Intercom-Version"?: "1.0" | "1.1" | "1.2" | "1.3" | "1.4" | "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "2.10" | "2.11" | "2.12" | "2.13" | "2.14" | "2.15" } }): Promise<{ type?: string; data?: (Call & { transcript?: ({ [key: string]: unknown })[]; transcript_status?: string | null })[] }>
```

<sub>`POST /calls/search` · `listCallsWithTranscripts`</sub>

## `intercom.collectFinVoiceCallById`

Collect Fin Voice call by ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.collectFinVoiceCallById(input: {
  /** The external reference ID */
  id: number;
}): Promise<AiCallResponse>
```

<sub>`GET /fin_voice/collect/{id}` · `collectFinVoiceCallById`</sub>

## `intercom.collectFinVoiceCallsByConversationId`

Collect Fin Voice calls by conversation ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.collectFinVoiceCallsByConversationId(input: {
  /** The Intercom conversation identifier */
  conversation_id: string;
}): Promise<(AiCallResponse)[]>
```

<sub>`GET /fin_voice/conversation/{conversation_id}` · `collectFinVoiceCallsByConversationId`</sub>

## `intercom.collectFinVoiceCallByExternalId`

Collect Fin Voice call by external ID — [Provider docs](https://developers.intercom.com)

```ts
intercom.collectFinVoiceCallByExternalId(input: {
  /** The external call identifier from the call provider */
  external_id: string;
}): Promise<AiCallResponse>
```

<sub>`GET /fin_voice/external_id/{external_id}` · `collectFinVoiceCallByExternalId`</sub>

## `intercom.collectFinVoiceCallByPhoneNumber`

Collect Fin Voice call by phone number — [Provider docs](https://developers.intercom.com)

```ts
intercom.collectFinVoiceCallByPhoneNumber(input: {
  /** Phone number in E.164 format */
  phone_number: string;
}): Promise<{ type: string; request_id?: string | null; errors: ({ code: string; message?: string | null; field?: string | null })[] }>
```

<sub>`GET /fin_voice/phone_number/{phone_number}` · `collectFinVoiceCallByPhoneNumber`</sub>

## `intercom.registerFinVoiceCall`

Register a Fin Voice call — [Provider docs](https://developers.intercom.com)

```ts
intercom.registerFinVoiceCall(input: {
  /** Phone number in E.164 format for the call */
  phone_number: string;
  /** External call identifier from the call provider */
  call_id: string;
  /** Source of the call. Can be "five9", "zoom_phone", or defaults to "aws_connect" */
  source?: "five9" | "zoom_phone" | "aws_connect";
  /** Additional metadata about the call */
  data?: { [key: string]: unknown } | null;
}): Promise<AiCallResponse>
```

<sub>`POST /fin_voice/register` · `registerFinVoiceCall`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Api20100401CallTranscription

2 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.createRealtimeTranscription`

Create a Transcription — [Provider docs](https://support.twilio.com)

```ts
twilio.createRealtimeTranscription(input: {
  /** The user-specified name of this Transcription, if one was given when the Transcription was created. This may be used to stop the Transcription. */
  Name?: string;
  Track?: RealtimeTranscriptionEnumTrack;
  /** Absolute URL of the status callback. */
  StatusCallbackUrl?: string;
  /** The http method for the status_callback (one of GET, POST). */
  StatusCallbackMethod?: "GET" | "POST";
  /** Friendly name given to the Inbound Track */
  InboundTrackLabel?: string;
  /** Friendly name given to the Outbound Track */
  OutboundTrackLabel?: string;
  /** Indicates if partial results are going to be sent to the customer */
  PartialResults?: boolean;
  /** Language code used by the transcription engine, specified in [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) format */
  LanguageCode?: string;
  /** Definition of the transcription engine to be used, among those supported by Twilio */
  TranscriptionEngine?: string;
  /** indicates if the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks */
  ProfanityFilter?: boolean;
  /** Recognition model used by the transcription engine, among those supported by the provider */
  SpeechModel?: string;
  /** A Phrase contains words and phrase "hints" so that the speech recognition engine is more likely to recognize them. */
  Hints?: string;
  /** The provider will add punctuation to recognition result */
  EnableAutomaticPunctuation?: boolean;
  /** The SID or unique name of the [Intelligence Service](https://www.twilio.com/docs/conversational-intelligence/api/service-resource) for persisting transcripts and running post-call Language Operators */
  IntelligenceService?: string;
  /** The ID of the Conversations Configuration for customizing conversation behavior in Intelligence Service */
  ConversationConfiguration?: string;
  /** The ID of the Conversation for associating this Transcription with an existing Conversation in Intelligence Service */
  ConversationId?: string;
  /** The ID of the RealTimeTranscription Configuration for configuring all the non-default behaviors in one go. */
  TranscriptionConfigurationId?: string;
  /** Whether the callback includes raw provider data. */
  EnableProviderData?: boolean;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Transcription resource. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription resource is associated with. */
  CallSid: string;
}): Promise<ApiV2010AccountCallRealtimeTranscription>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json` · `CreateRealtimeTranscription`</sub>

## `twilio.updateRealtimeTranscription`

Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource — [Provider docs](https://support.twilio.com)

```ts
twilio.updateRealtimeTranscription(input: {
  Status: RealtimeTranscriptionEnumUpdateStatus;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Transcription resource. */
  AccountSid: string;
  /** The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription resource is associated with. */
  CallSid: string;
  /** The SID of the Transcription resource, or the `name` used when creating the resource */
  Sid: string;
}): Promise<ApiV2010AccountCallRealtimeTranscription>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json` · `UpdateRealtimeTranscription`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

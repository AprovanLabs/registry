# Api20100401Participant

5 operations · `@utdk/twilio`

```ts
import twilio from "@utdk/twilio";
```

## `twilio.listParticipant`

Retrieve a list of participants belonging to the account used to make the request — [Provider docs](https://support.twilio.com)

```ts
twilio.listParticipant(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to read. */
  AccountSid: string;
  /** The SID of the conference with the participants to read. */
  ConferenceSid: string;
  /** Whether to return only participants that are muted. Can be: `true` or `false`. */
  Muted?: boolean;
  /** Whether to return only participants that are on hold. Can be: `true` or `false`. */
  Hold?: boolean;
  /** Whether to return only participants who are coaching another call. Can be: `true` or `false`. */
  Coaching?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  PageSize?: number;
  /** The page index. This value is simply for client state. */
  Page?: number;
  /** The page token. This is provided by the API. */
  PageToken?: string;
}): Promise<{ end?: number; first_page_uri?: string; next_page_uri?: string | null; page?: number; page_size?: number; previous_page_uri?: string | null; start?: number; uri?: string; participants?: (ApiV2010AccountConferenceParticipant)[] }>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json` · `ListParticipant`</sub>

## `twilio.createParticipant`

[Provider docs](https://support.twilio.com)

```ts
twilio.createParticipant(input: {
  /** The phone number, Client identifier, or username portion of SIP address that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `from` must also be a phone number. If `to` is sip address, this value of `from` should be a username portion to be used to populate the P-Asserted-Identity header that is passed to the SIP endpoint. */
  From: string;
  /** The phone number, SIP address, Client, TwiML App identifier that received this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP addresses are formatted as `sip:name@company.com`. Client identifiers are formatted `client:name`. TwiML App identifiers are formatted `app:<APP_SID>`. [Custom parameters](https://www.twilio.com/docs/voice/api/conference-participant-resource#custom-parameters) may also be specified. */
  To: string;
  /** The URL we should call using the `status_callback_method` to send status information to your application. */
  StatusCallback?: string;
  /** The HTTP method we should use to call `status_callback`. Can be: `GET` and `POST` and defaults to `POST`. */
  StatusCallbackMethod?: "GET" | "POST";
  /** The conference state changes that should generate a call to `status_callback`. Can be: `initiated`, `ringing`, `answered`, and `completed`. Separate multiple values with a space. The default value is `completed`. */
  StatusCallbackEvent?: (string)[];
  /** A label for this participant. If one is supplied, it may subsequently be used to fetch, update or delete the participant. */
  Label?: string;
  /** The number of seconds that we should allow the phone to ring before assuming there is no answer. Can be an integer between `5` and `600`, inclusive. The default value is `60`. We always add a 5-second timeout buffer to outgoing calls, so  value of 10 would result in an actual timeout that was closer to 15 seconds. */
  Timeout?: number;
  /** Whether to record the participant and their conferences, including the time between conferences. Can be `true` or `false` and the default is `false`. */
  Record?: boolean;
  /** Whether the agent is muted in the conference. Can be `true` or `false` and the default is `false`. */
  Muted?: boolean;
  /** Whether to play a notification beep to the conference when the participant joins. Can be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`. */
  Beep?: string;
  /** Whether to start the conference when the participant joins, if it has not already started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference. */
  StartConferenceOnEnter?: boolean;
  /** Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`. */
  EndConferenceOnExit?: boolean;
  /** The URL that Twilio calls using the `wait_method` before the conference has started. The URL may return an MP3 file, a WAV file, or a TwiML document. The default value is the URL of our standard hold music. If you do not want anything to play while waiting for the conference to start, specify an empty string by setting `wait_url` to `''`. For more details on the allowable verbs within the `waitUrl`, see the `waitUrl` attribute in the [<Conference> TwiML instruction](https://www.twilio.com/docs/voice/twiml/conference#attributes-waiturl). */
  WaitUrl?: string;
  /** The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file. */
  WaitMethod?: "GET" | "POST";
  /** Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. Can be: `true` or `false` and defaults to `true`. */
  EarlyMedia?: boolean;
  /** The maximum number of participants in the conference. Can be a positive integer from `2` to `250`. The default value is `250`. */
  MaxParticipants?: number;
  /** Whether to record the conference the participant is joining. Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is `false`. */
  ConferenceRecord?: string;
  /** Whether to trim leading and trailing silence from the conference recording. Can be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`. */
  ConferenceTrim?: string;
  /** The URL we should call using the `conference_status_callback_method` when the conference events in `conference_status_callback_event` occur. Only the value set by the first participant to join the conference is used. Subsequent `conference_status_callback` values are ignored. */
  ConferenceStatusCallback?: string;
  /** The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  ConferenceStatusCallbackMethod?: "GET" | "POST";
  /** The conference state changes that should generate a call to `conference_status_callback`. Can be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `modify`, `speaker`, and `announcement`. Separate multiple values with a space. Defaults to `start end`. */
  ConferenceStatusCallbackEvent?: (string)[];
  /** The recording channels for the final recording. Can be: `mono` or `dual` and the default is `mono`. */
  RecordingChannels?: string;
  /** The URL that we should call using the `recording_status_callback_method` when the recording status changes. */
  RecordingStatusCallback?: string;
  /** The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  RecordingStatusCallbackMethod?: "GET" | "POST";
  /** The SIP username used for authentication. */
  SipAuthUsername?: string;
  /** The SIP password for authentication. */
  SipAuthPassword?: string;
  /** The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:`us1`, `us2`, `ie1`, `de1`, `sg1`, `br1`, `au1`, or `jp1`. */
  Region?: string;
  /** The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available. */
  ConferenceRecordingStatusCallback?: string;
  /** The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`. */
  ConferenceRecordingStatusCallbackMethod?: "GET" | "POST";
  /** The recording state changes that should generate a call to `recording_status_callback`. Can be: `started`, `in-progress`, `paused`, `resumed`, `stopped`, `completed`, `failed`, and `absent`. Separate multiple values with a space, ex: `'in-progress completed failed'`. */
  RecordingStatusCallbackEvent?: (string)[];
  /** The conference recording state changes that generate a call to `conference_recording_status_callback`. Can be: `in-progress`, `completed`, `failed`, and `absent`. Separate multiple values with a space, ex: `'in-progress completed failed'` */
  ConferenceRecordingStatusCallbackEvent?: (string)[];
  /** Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined. */
  Coaching?: boolean;
  /** The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`. */
  CallSidToCoach?: string;
  /** Jitter buffer size for the connecting participant. Twilio will use this setting to apply Jitter Buffer before participant's audio is mixed into the conference. Can be: `off`, `small`, `medium`, and `large`. Default to `large`. */
  JitterBufferSize?: string;
  /** The SID of a BYOC (Bring Your Own Carrier) trunk to route this call with. Note that `byoc` is only meaningful when `to` is a phone number; it will otherwise be ignored. (Beta) */
  Byoc?: string;
  /** The phone number, Client identifier, or username portion of SIP address that made this call. Phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). Client identifiers are formatted `client:name`. If using a phone number, it must be a Twilio number or a Verified [outgoing caller id](https://www.twilio.com/docs/voice/api/outgoing-caller-ids) for your account. If the `to` parameter is a phone number, `callerId` must also be a phone number. If `to` is sip address, this value of `callerId` should be a username portion to be used to populate the From header that is passed to the SIP endpoint. */
  CallerId?: string;
  /** The Reason for the outgoing call. Use it to specify the purpose of the call that is presented on the called party's phone. (Branded Calls Beta) */
  CallReason?: string;
  /** The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is sent from Twilio. `both` records the audio that is received and sent by Twilio. */
  RecordingTrack?: string;
  /** The identifier of the configuration to be used when creating and processing the recording */
  RecordingConfigurationId?: string;
  /** The maximum duration of the call in seconds. Constraints depend on account and configuration. */
  TimeLimit?: number;
  /** Whether to detect if a human, answering machine, or fax has picked up the call. Can be: `Enable` or `DetectMessageEnd`. Use `Enable` if you would like us to return `AnsweredBy` as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine. For more information, see [Answering Machine Detection](https://www.twilio.com/docs/voice/answering-machine-detection). */
  MachineDetection?: string;
  /** The number of seconds that we should attempt to detect an answering machine before timing out and sending a voice request with `AnsweredBy` of `unknown`. The default timeout is 30 seconds. */
  MachineDetectionTimeout?: number;
  /** The number of milliseconds that is used as the measuring stick for the length of the speech activity, where durations lower than this value will be interpreted as a human and longer than this value as a machine. Possible Values: 1000-6000. Default: 2400. */
  MachineDetectionSpeechThreshold?: number;
  /** The number of milliseconds of silence after speech activity at which point the speech activity is considered complete. Possible Values: 500-5000. Default: 1200. */
  MachineDetectionSpeechEndThreshold?: number;
  /** The number of milliseconds of initial silence after which an `unknown` AnsweredBy result will be returned. Possible Values: 2000-10000. Default: 5000. */
  MachineDetectionSilenceTimeout?: number;
  /** The URL that we should call using the `amd_status_callback_method` to notify customer application whether the call was answered by human, machine or fax. */
  AmdStatusCallback?: string;
  /** The HTTP method we should use when calling the `amd_status_callback` URL. Can be: `GET` or `POST` and the default is `POST`. */
  AmdStatusCallbackMethod?: "GET" | "POST";
  /** Whether to trim any leading and trailing silence from the participant recording. Can be: `trim-silence` or `do-not-trim` and the default is `trim-silence`. */
  Trim?: string;
  /** A token string needed to invoke a forwarded call. A call_token is generated when an incoming call is received on a Twilio number. Pass an incoming call's call_token value to a forwarded call via the call_token parameter when creating a new call. A forwarded call should bear the same CallerID of the original incoming call. */
  CallToken?: string;
  /** The URL that we should use to deliver `push call notification`. */
  ClientNotificationUrl?: string;
  /** The name that populates the display name in the From header. Must be between 2 and 255 characters. Only applicable for calls to sip address. */
  CallerDisplayName?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource. */
  AccountSid: string;
  /** The SID of the participant's conference. */
  ConferenceSid: string;
}): Promise<ApiV2010AccountConferenceParticipant>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json` · `CreateParticipant`</sub>

## `twilio.deleteParticipant`

Kick a participant from a given conference — [Provider docs](https://support.twilio.com)

```ts
twilio.deleteParticipant(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to delete. */
  AccountSid: string;
  /** The SID of the conference with the participants to delete. */
  ConferenceSid: string;
  /** The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to delete. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20. */
  CallSid: string;
}): Promise<undefined>
```

<sub>`DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json` · `DeleteParticipant`</sub>

## `twilio.fetchParticipant`

Fetch an instance of a participant — [Provider docs](https://support.twilio.com)

```ts
twilio.fetchParticipant(input: {
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource to fetch. */
  AccountSid: string;
  /** The SID of the conference with the participant to fetch. */
  ConferenceSid: string;
  /** The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to fetch. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20. */
  CallSid: string;
}): Promise<ApiV2010AccountConferenceParticipant>
```

<sub>`GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json` · `FetchParticipant`</sub>

## `twilio.updateParticipant`

Update the properties of the participant — [Provider docs](https://support.twilio.com)

```ts
twilio.updateParticipant(input: {
  /** Whether the participant should be muted. Can be `true` or `false`. `true` will mute the participant, and `false` will un-mute them. Anything value other than `true` or `false` is interpreted as `false`. */
  Muted?: boolean;
  /** Whether the participant should be on hold. Can be: `true` or `false`. `true` puts the participant on hold, and `false` lets them rejoin the conference. */
  Hold?: boolean;
  /** The URL we call using the `hold_method` for music that plays when the participant is on hold. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs. */
  HoldUrl?: string;
  /** The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is `GET`. */
  HoldMethod?: "GET" | "POST";
  /** The URL we call using the `announce_method` for an announcement to the participant. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs. */
  AnnounceUrl?: string;
  /** The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to `POST`. */
  AnnounceMethod?: "GET" | "POST";
  /** The URL that Twilio calls using the `wait_method` before the conference has started. The URL may return an MP3 file, a WAV file, or a TwiML document. The default value is the URL of our standard hold music. If you do not want anything to play while waiting for the conference to start, specify an empty string by setting `wait_url` to `''`. For more details on the allowable verbs within the `waitUrl`, see the `waitUrl` attribute in the [<Conference> TwiML instruction](https://www.twilio.com/docs/voice/twiml/conference#attributes-waiturl). */
  WaitUrl?: string;
  /** The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file. */
  WaitMethod?: "GET" | "POST";
  /** Whether to play a notification beep to the conference when the participant exits. Can be: `true` or `false`. */
  BeepOnExit?: boolean;
  /** Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`. */
  EndConferenceOnExit?: boolean;
  /** Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined. */
  Coaching?: boolean;
  /** The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`. */
  CallSidToCoach?: string;
  /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to update. */
  AccountSid: string;
  /** The SID of the conference with the participant to update. */
  ConferenceSid: string;
  /** The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to update. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20. */
  CallSid: string;
}): Promise<ApiV2010AccountConferenceParticipant>
```

<sub>`POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json` · `UpdateParticipant`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

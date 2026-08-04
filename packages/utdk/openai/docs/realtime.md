# Realtime

2 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.createRealtimeSession`

Create an ephemeral API token for use in client-side applications with the Realtime API. Can be configured with the same session parameters as the `session.update` client event. It responds with a session object, plus a `client_secret` key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API. — [Provider docs](https://help.openai.com/)

```ts
openai.createRealtimeSession(input: {
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The Realtime model used for this session.  */
  model?: "gpt-4o-realtime-preview" | "gpt-4o-realtime-preview-2024-10-01" | "gpt-4o-realtime-preview-2024-12-17" | "gpt-4o-mini-realtime-preview" | "gpt-4o-mini-realtime-preview-2024-12-17";
  /** The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.  Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.  */
  instructions?: string;
  /** The voice the model uses to respond. Voice cannot be changed during the  session once the model has responded with audio at least once. Current  voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`.  */
  voice?: VoiceIdsShared;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,  single channel (mono), and little-endian byte order.  */
  input_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, output audio is sampled at a rate of 24kHz.  */
  output_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.  */
  input_audio_transcription?: { model?: string; language?: string; prompt?: string };
  /** Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech. Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.  */
  turn_detection?: { type?: "server_vad" | "semantic_vad"; eagerness?: "low" | "medium" | "high" | "auto"; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number; create_response?: boolean; interrupt_response?: boolean };
  /** Configuration for input audio noise reduction. This can be set to `null` to turn off. Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model. Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.  */
  input_audio_noise_reduction?: { type?: "near_field" | "far_field" };
  /** Tools (functions) available to the model. */
  tools?: ({ type?: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[];
  /** How the model chooses tools. Options are `auto`, `none`, `required`, or  specify a function.  */
  tool_choice?: string;
  /** Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.  */
  temperature?: number;
  /** Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or `inf` for the maximum available tokens for a given model. Defaults to `inf`.  */
  max_response_output_tokens?: number | "inf";
}): Promise<RealtimeSessionCreateResponse>
```

<sub>`POST /realtime/sessions` · `create-realtime-session`</sub>

## `openai.createRealtimeTranscriptionSession`

Create an ephemeral API token for use in client-side applications with the Realtime API specifically for realtime transcriptions. Can be configured with the same session parameters as the `transcription_session.update` client event. It responds with a session object, plus a `client_secret` key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API. — [Provider docs](https://help.openai.com/)

```ts
openai.createRealtimeTranscriptionSession(input: {
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,  single channel (mono), and little-endian byte order.  */
  input_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Configuration for input audio transcription. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.  */
  input_audio_transcription?: { model?: "gpt-4o-transcribe" | "gpt-4o-mini-transcribe" | "whisper-1"; language?: string; prompt?: string };
  /** Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech. Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.  */
  turn_detection?: { type?: "server_vad" | "semantic_vad"; eagerness?: "low" | "medium" | "high" | "auto"; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number; create_response?: boolean; interrupt_response?: boolean };
  /** Configuration for input audio noise reduction. This can be set to `null` to turn off. Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model. Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.  */
  input_audio_noise_reduction?: { type?: "near_field" | "far_field" };
  /** The set of items to include in the transcription. Current available items are: - `item.input_audio_transcription.logprobs`  */
  include?: (string)[];
}): Promise<RealtimeTranscriptionSessionCreateResponse>
```

<sub>`POST /realtime/transcription_sessions` · `create-realtime-transcription-session`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

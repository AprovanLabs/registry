# Audio

3 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.createSpeech`

Generates audio from the input text. — [Provider docs](https://help.openai.com/)

```ts
openai.createSpeech(input: {
  /** One of the available [TTS models](/docs/models#tts): `tts-1`, `tts-1-hd` or `gpt-4o-mini-tts`.  */
  model: string | "tts-1" | "tts-1-hd" | "gpt-4o-mini-tts";
  /** The text to generate audio for. The maximum length is 4096 characters. */
  input: string;
  /** Control the voice of your generated audio with additional instructions. Does not work with `tts-1` or `tts-1-hd`. */
  instructions?: string;
  /** The voice to use when generating the audio. Supported voices are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options). */
  voice: VoiceIdsShared;
  /** The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. */
  response_format?: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
  /** The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default. */
  speed?: number;
}): Promise<string>
```

<sub>`POST /audio/speech` · `createSpeech`</sub>

## `openai.createTranscription`

Transcribes audio into the input language. — [Provider docs](https://help.openai.com/)

```ts
openai.createTranscription(input: {
  /** The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.  */
  file: string;
  /** ID of the model to use. The options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1` (which is powered by our open source Whisper V2 model).  */
  model: string | "whisper-1" | "gpt-4o-transcribe" | "gpt-4o-mini-transcribe";
  /** The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency.  */
  language?: string;
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should match the audio language.  */
  prompt?: string;
  response_format?: AudioResponseFormat;
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.  */
  temperature?: number;
  /** Additional information to include in the transcription response.  `logprobs` will return the log probabilities of the tokens in the  response to understand the model's confidence in the transcription.  `logprobs` only works with response_format set to `json` and only with  the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`.  */
  "include[]"?: (TranscriptionInclude)[];
  /** The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.  */
  "timestamp_granularities[]"?: ("word" | "segment")[];
  /** If set to true, the model response data will be streamed to the client as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).  See the [Streaming section of the Speech-to-Text guide](/docs/guides/speech-to-text?lang=curl#streaming-transcriptions) for more information.  Note: Streaming is not supported for the `whisper-1` model and will be ignored.  */
  stream?: boolean | null;
}): Promise<ReadableStream<Uint8Array>>
```

<sub>`POST /audio/transcriptions` · `createTranscription`</sub>

## `openai.createTranslation`

Translates audio into English. — [Provider docs](https://help.openai.com/)

```ts
openai.createTranslation(input: {
  /** The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.  */
  file: string;
  /** ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.  */
  model: string | "whisper-1";
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should be in English.  */
  prompt?: string;
  /** The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.  */
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.  */
  temperature?: number;
}): Promise<CreateTranslationResponseJson | CreateTranslationResponseVerboseJson>
```

<sub>`POST /audio/translations` · `createTranslation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

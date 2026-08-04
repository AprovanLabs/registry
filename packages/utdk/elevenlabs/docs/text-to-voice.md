# Text To Voice

5 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.createVoice`

Create A New Voice From Voice Preview

```ts
elevenlabs.createVoice(input: {
  /** Name to use for the created voice. */
  voice_name: string;
  /** Description to use for the created voice. */
  voice_description: string;
  /** The generated_voice_id to create; obtain it from POST /v1/text-to-voice/design, POST /v1/text-to-voice/:voice_id/remix, or the response headers when generating previews. */
  generated_voice_id: string;
  /** Optional, metadata to add to the created voice. Defaults to None. */
  labels?: { [key: string]: string | undefined } | null;
  /** List of voice ids that the user has played but not selected. Used for RLHF. */
  played_not_selected_voice_ids?: (string)[] | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoiceResponseModel>
```

<sub>`POST /v1/text-to-voice` · `create_voice`</sub>

## `elevenlabs.textToVoicePreviewStream`

Text To Voice Preview Streaming

```ts
elevenlabs.textToVoicePreviewStream(input: {
  /** The generated_voice_id to stream. */
  generated_voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`GET /v1/text-to-voice/{generated_voice_id}/stream` · `text_to_voice_preview_stream`</sub>

## `elevenlabs.textToVoiceRemix`

Remix A Voice.

```ts
elevenlabs.textToVoiceRemix(input: {
  /** Description of the changes to make to the voice. */
  voice_description: string;
  /** Text to generate, text length has to be between 100 and 1000. */
  text?: string | null;
  /** Whether to automatically generate a text suitable for the voice description. */
  auto_generate_text?: boolean;
  /** Controls the volume level of the generated voice. -1 is quietest, 1 is loudest, 0 corresponds to roughly -24 LUFS. */
  loudness?: number;
  /** Random number that controls the voice generation. Same seed with same inputs produces same voice. */
  seed?: number | null;
  /** Controls how closely the AI follows the prompt. Lower numbers give the AI more freedom to be creative, while higher numbers force it to stick more to the prompt. High numbers can cause voice to sound artificial or robotic. We recommend to use longer, more detailed prompts at lower Guidance Scale. */
  guidance_scale?: number;
  /** Determines whether the Text to Voice previews should be included in the response. If true, only the generated IDs will be returned which can then be streamed via the /v1/text-to-voice/:generated_voice_id/stream endpoint. */
  stream_previews?: boolean;
  /** The remixing session id. */
  remixing_session_id?: string | null;
  /** The id of the remixing session iteration where these generations should be attached to. If not provided, a new iteration will be created. */
  remixing_session_iteration_id?: string | null;
  /** Controls the balance of prompt versus reference audio when generating voice samples. 0 means almost no prompt influence, 1 means almost no reference audio influence. Only supported when using the eleven_ttv_v3 model. */
  prompt_strength?: number | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoicePreviewsResponseModel>
```

<sub>`POST /v1/text-to-voice/{voice_id}/remix` · `text_to_voice_remix`</sub>

## `elevenlabs.textToVoice`

[Deprecated] Generate A Voice Preview From Description

```ts
elevenlabs.textToVoice(input: {
  /** Description to use for the created voice. */
  voice_description: string;
  /** Text to generate, text length has to be between 100 and 1000. */
  text?: string | null;
  /** Whether to automatically generate a text suitable for the voice description. */
  auto_generate_text?: boolean;
  /** Controls the volume level of the generated voice. -1 is quietest, 1 is loudest, 0 corresponds to roughly -24 LUFS. */
  loudness?: number;
  /** Higher quality results in better voice output but less variety. */
  quality?: number;
  /** Random number that controls the voice generation. Same seed with same inputs produces same voice. */
  seed?: number | null;
  /** Controls how closely the AI follows the prompt. Lower numbers give the AI more freedom to be creative, while higher numbers force it to stick more to the prompt. High numbers can cause voice to sound artificial or robotic. We recommend to use longer, more detailed prompts at lower Guidance Scale. */
  guidance_scale?: number;
  /** Whether to enhance the voice description using AI to add more detail and improve voice generation quality. When enabled, the system will automatically expand simple prompts into more detailed voice descriptions. Defaults to False */
  should_enhance?: boolean;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoicePreviewsResponseModel>
```

<sub>`POST /v1/text-to-voice/create-previews` · `text_to_voice`</sub>

## `elevenlabs.textToVoiceDesign`

Design A Voice.

```ts
elevenlabs.textToVoiceDesign(input: {
  /** Description to use for the created voice. */
  voice_description: string;
  /** Model to use for the voice generation. Possible values: eleven_multilingual_ttv_v2, eleven_ttv_v3. */
  model_id?: "eleven_multilingual_ttv_v2" | "eleven_ttv_v3";
  /** Text to generate, text length has to be between 100 and 1000. */
  text?: string | null;
  /** Whether to automatically generate a text suitable for the voice description. */
  auto_generate_text?: boolean;
  /** Controls the volume level of the generated voice. -1 is quietest, 1 is loudest, 0 corresponds to roughly -24 LUFS. */
  loudness?: number;
  /** Random number that controls the voice generation. Same seed with same inputs produces same voice. */
  seed?: number | null;
  /** Controls how closely the AI follows the prompt. Lower numbers give the AI more freedom to be creative, while higher numbers force it to stick more to the prompt. High numbers can cause voice to sound artificial or robotic. We recommend to use longer, more detailed prompts at lower Guidance Scale. */
  guidance_scale?: number;
  /** Determines whether the Text to Voice previews should be included in the response. If true, only the generated IDs will be returned which can then be streamed via the /v1/text-to-voice/:generated_voice_id/stream endpoint. */
  stream_previews?: boolean;
  /** Whether to enhance the voice description using AI to add more detail and improve voice generation quality. When enabled, the system will automatically expand simple prompts into more detailed voice descriptions. Defaults to False */
  should_enhance?: boolean;
  /** The remixing session id. */
  remixing_session_id?: string | null;
  /** The id of the remixing session iteration where these generations should be attached to. If not provided, a new iteration will be created. */
  remixing_session_iteration_id?: string | null;
  /** Higher quality results in better voice output but less variety. */
  quality?: number | null;
  /** Reference audio to use for the voice generation. The audio should be base64 encoded. Only supported when using the  eleven_ttv_v3 model. */
  reference_audio_base64?: string | null;
  /** Controls the balance of prompt versus reference audio when generating voice samples. 0 means almost no prompt influence, 1 means almost no reference audio influence. Only supported when using the eleven_ttv_v3 model. */
  prompt_strength?: number | null;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoicePreviewsResponseModel>
```

<sub>`POST /v1/text-to-voice/design` · `text_to_voice_design`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

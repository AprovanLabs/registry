# Text To Dialogue

4 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.textToDialogue`

Text To Dialogue (Multi-Voice)

```ts
elevenlabs.textToDialogue(input: {
  /** A list of dialogue inputs, each containing text and a voice ID which will be converted into speech. The maximum number of unique voice IDs is 10. For reliable generation, keep the total character count across all `inputs[].text` values at or below 2,000 characters per request. Longer requests can terminate early in streaming responses or return a validation error. */
  inputs: (DialogueInput)[];
  /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property. */
  model_id?: string;
  /** Language code (ISO 639-1) used to enforce a language for the model and text normalization. If the model does not support the provided language code, it will be ignored. This parameter is not supported for multilingual_v2 models. */
  language_code?: string | null;
  /** Settings controlling the dialogue generation. */
  settings?: ModelSettingsResponseModel | null;
  /** A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request */
  pronunciation_dictionary_locators?: (PronunciationDictionaryVersionLocatorRequestModel)[] | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
  seed?: number | null;
  /** This parameter controls text normalization with three modes: 'auto', 'on', and 'off'. When set to 'auto', the system will automatically decide whether to apply text normalization (e.g., spelling out numbers). With 'on', text normalization will always be applied, while with 'off', it will be skipped. */
  apply_text_normalization?: "auto" | "on" | "off";
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM and WAV formats with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
  /** When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers. */
  enable_logging?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/text-to-dialogue` · `text_to_dialogue`</sub>

## `elevenlabs.textToDialogueStream`

Text To Dialogue (Multi-Voice) Streaming

```ts
elevenlabs.textToDialogueStream(input: {
  /** A list of dialogue inputs, each containing text and a voice ID which will be converted into speech. The maximum number of unique voice IDs is 10. For reliable generation, keep the total character count across all `inputs[].text` values at or below 2,000 characters per request. Longer requests can terminate early in streaming responses or return a validation error. */
  inputs: (DialogueInput)[];
  /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property. */
  model_id?: string;
  /** Language code (ISO 639-1) used to enforce a language for the model and text normalization. If the model does not support the provided language code, it will be ignored. This parameter is not supported for multilingual_v2 models. */
  language_code?: string | null;
  /** Settings controlling the dialogue generation. */
  settings?: ModelSettingsResponseModel | null;
  /** A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request */
  pronunciation_dictionary_locators?: (PronunciationDictionaryVersionLocatorRequestModel)[] | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
  seed?: number | null;
  /** This parameter controls text normalization with three modes: 'auto', 'on', and 'off'. When set to 'auto', the system will automatically decide whether to apply text normalization (e.g., spelling out numbers). With 'on', text normalization will always be applied, while with 'off', it will be skipped. */
  apply_text_normalization?: "auto" | "on" | "off";
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
  /** When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers. */
  enable_logging?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/text-to-dialogue/stream` · `text_to_dialogue_stream`</sub>

## `elevenlabs.textToDialogueStreamWithTimestamps`

Text To Dialogue Streaming With Timestamps

```ts
elevenlabs.textToDialogueStreamWithTimestamps(input: {
  /** A list of dialogue inputs, each containing text and a voice ID which will be converted into speech. The maximum number of unique voice IDs is 10. For reliable generation, keep the total character count across all `inputs[].text` values at or below 2,000 characters per request. Longer requests can terminate early in streaming responses or return a validation error. */
  inputs: (DialogueInput)[];
  /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property. */
  model_id?: string;
  /** Language code (ISO 639-1) used to enforce a language for the model and text normalization. If the model does not support the provided language code, it will be ignored. This parameter is not supported for multilingual_v2 models. */
  language_code?: string | null;
  /** Settings controlling the dialogue generation. */
  settings?: ModelSettingsResponseModel | null;
  /** A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request */
  pronunciation_dictionary_locators?: (PronunciationDictionaryVersionLocatorRequestModel)[] | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
  seed?: number | null;
  /** This parameter controls text normalization with three modes: 'auto', 'on', and 'off'. When set to 'auto', the system will automatically decide whether to apply text normalization (e.g., spelling out numbers). With 'on', text normalization will always be applied, while with 'off', it will be skipped. */
  apply_text_normalization?: "auto" | "on" | "off";
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
  /** When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers. */
  enable_logging?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<StreamingAudioChunkWithTimestampsAndVoiceSegmentsResponseModel>
```

<sub>`POST /v1/text-to-dialogue/stream/with-timestamps` · `text_to_dialogue_stream_with_timestamps`</sub>

## `elevenlabs.textToDialogueFullWithTimestamps`

Text To Dialogue With Timestamps

```ts
elevenlabs.textToDialogueFullWithTimestamps(input: {
  /** A list of dialogue inputs, each containing text and a voice ID which will be converted into speech. The maximum number of unique voice IDs is 10. For reliable generation, keep the total character count across all `inputs[].text` values at or below 2,000 characters per request. Longer requests can terminate early in streaming responses or return a validation error. */
  inputs: (DialogueInput)[];
  /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property. */
  model_id?: string;
  /** Language code (ISO 639-1) used to enforce a language for the model and text normalization. If the model does not support the provided language code, it will be ignored. This parameter is not supported for multilingual_v2 models. */
  language_code?: string | null;
  /** Settings controlling the dialogue generation. */
  settings?: ModelSettingsResponseModel | null;
  /** A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request */
  pronunciation_dictionary_locators?: (PronunciationDictionaryVersionLocatorRequestModel)[] | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
  seed?: number | null;
  /** This parameter controls text normalization with three modes: 'auto', 'on', and 'off'. When set to 'auto', the system will automatically decide whether to apply text normalization (e.g., spelling out numbers). With 'on', text normalization will always be applied, while with 'off', it will be skipped. */
  apply_text_normalization?: "auto" | "on" | "off";
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM and WAV formats with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
  /** When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers. */
  enable_logging?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AudioWithTimestampsAndVoiceSegmentsResponseModel>
```

<sub>`POST /v1/text-to-dialogue/with-timestamps` · `text_to_dialogue_full_with_timestamps`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

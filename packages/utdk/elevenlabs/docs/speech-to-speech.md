# Speech To Speech

2 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.speechToSpeechFull`

Speech To Speech

```ts
elevenlabs.speechToSpeechFull(input: {
  /** The audio file which holds the content and emotion that will control the generated speech. */
  audio: string;
  /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for speech to speech, you can check this using the can_do_voice_conversion property. */
  model_id?: string;
  /** Voice settings overriding stored settings for the given voice. They are applied only on the given request. Needs to be send as a JSON encoded string. */
  voice_settings?: string | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
  seed?: number | null;
  /** If set, will remove the background noise from your audio input using our audio isolation model. Only applies to Voice Changer. */
  remove_background_noise?: boolean;
  /** The format of input audio. Options are 'pcm_s16le_16' or 'other' For `pcm_s16le_16`, the input audio must be 16-bit PCM at a 16kHz sample rate, single channel (mono), and little-endian byte order. Latency will be lower than with passing an encoded waveform. */
  file_format?: "pcm_s16le_16" | "other" | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers. */
  enable_logging?: boolean;
  /** You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).  Defaults to None.  */
  optimize_streaming_latency?: number | null;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM and WAV formats with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/speech-to-speech/{voice_id}` · `speech_to_speech_full`</sub>

## `elevenlabs.speechToSpeechStream`

Speech To Speech Streaming

```ts
elevenlabs.speechToSpeechStream(input: {
  /** The audio file which holds the content and emotion that will control the generated speech. */
  audio: string;
  /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for speech to speech, you can check this using the can_do_voice_conversion property. */
  model_id?: string;
  /** Voice settings overriding stored settings for the given voice. They are applied only on the given request. Needs to be send as a JSON encoded string. */
  voice_settings?: string | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed. Must be integer between 0 and 4294967295. */
  seed?: number | null;
  /** If set, will remove the background noise from your audio input using our audio isolation model. Only applies to Voice Changer. */
  remove_background_noise?: boolean;
  /** The format of input audio. Options are 'pcm_s16le_16' or 'other' For `pcm_s16le_16`, the input audio must be 16-bit PCM at a 16kHz sample rate, single channel (mono), and little-endian byte order. Latency will be lower than with passing an encoded waveform. */
  file_format?: "pcm_s16le_16" | "other" | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** When enable_logging is set to false zero retention mode will be used for the request. This will mean history features are unavailable for this request, including request stitching. Zero retention mode may only be used by enterprise customers. */
  enable_logging?: boolean;
  /** You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).  Defaults to None.  */
  optimize_streaming_latency?: number | null;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/speech-to-speech/{voice_id}/stream` · `speech_to_speech_stream`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

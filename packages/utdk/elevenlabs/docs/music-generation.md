# Music Generation

7 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.generate`

Compose Music

```ts
elevenlabs.generate(input: {
  /** A simple text prompt to generate a song from. Cannot be used in conjunction with `composition_plan`. */
  prompt?: string | null;
  /** Optional generation mode hint for prompt-based music generation. Can only be used with `prompt`. */
  generation_mode?: MusicGenerationMode | null;
  /** A music prompt. Deprecated. Use `composition_plan` instead. */
  music_prompt?: MusicPrompt | null;
  /** The lyrics text to use for the generation. */
  lyrics_text?: string | null;
  /** A detailed composition plan to guide music generation. Cannot be used in conjunction with `prompt`. */
  composition_plan?: MusicPrompt | CompositionPlan | null;
  /** The length of the song to generate in milliseconds. Used only in conjunction with `prompt`. Must be between 3000ms and 600000ms. Optional - if not provided, the model will choose a length based on the prompt. */
  music_length_ms?: number | null;
  /** The model to use for the generation. */
  model_id?: "music_v1" | "music_v2";
  /** Random seed to initialize the music generation process. Providing the same seed with the same parameters can help achieve more consistent results, but exact reproducibility is not guaranteed and outputs may change across system updates. Cannot be used in conjunction with prompt. */
  seed?: number | null;
  /** If true, guarantees that the generated song will be instrumental. If false, the song may or may not be instrumental depending on the `prompt`. Can only be used with `prompt`. */
  force_instrumental?: boolean;
  /** The ID of the finetune to use for the generation */
  finetune_id?: string | null;
  /** How strongly the finetune influences the generation. Defaults to 1.0 (full strength). Lower values soften the influence of the finetune, leaving more room for prompt-level steering. Only meaningful when `finetune_id` is also provided. */
  finetune_strength?: number;
  /** If true, proper names in the prompt will be phonetically spelled in the lyrics for better pronunciation by the music model. The original names will be restored in word timestamps. */
  use_phonetic_names?: boolean;
  /** Controls how strictly section durations in the `composition_plan` are enforced. Only used with `composition_plan` and only applies to `music_v1`; for `music_v2` section durations are always enforced and this is ignored. When false for `music_v1`, the model may adjust individual section durations for better quality and latency, while preserving the total song duration from the plan. */
  respect_sections_durations?: boolean;
  /** Whether to store the generated song for inpainting. */
  store_for_inpainting?: boolean;
  /** Whether to sign the generated song with C2PA. Applicable only for mp3 files. */
  sign_with_c2pa?: boolean;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. Use "auto" (the default) to let the API pick the best format for the selected model: mp3_44100_128 for v1 models and mp3_48000_192 for v2 models.  */
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/music` · `generate`</sub>

## `elevenlabs.composeDetailed`

Compose Music With A Detailed Response

```ts
elevenlabs.composeDetailed(input: {
  /** A simple text prompt to generate a song from. Cannot be used in conjunction with `composition_plan`. */
  prompt?: string | null;
  /** Optional generation mode hint for prompt-based music generation. Can only be used with `prompt`. */
  generation_mode?: MusicGenerationMode | null;
  /** A music prompt. Deprecated. Use `composition_plan` instead. */
  music_prompt?: MusicPrompt | null;
  /** The lyrics text to use for the generation. */
  lyrics_text?: string | null;
  /** A detailed composition plan to guide music generation. Cannot be used in conjunction with `prompt`. */
  composition_plan?: MusicPrompt | CompositionPlan | null;
  /** The length of the song to generate in milliseconds. Used only in conjunction with `prompt`. Must be between 3000ms and 600000ms. Optional - if not provided, the model will choose a length based on the prompt. */
  music_length_ms?: number | null;
  /** The model to use for the generation. */
  model_id?: "music_v1" | "music_v2";
  /** Random seed to initialize the music generation process. Providing the same seed with the same parameters can help achieve more consistent results, but exact reproducibility is not guaranteed and outputs may change across system updates. Cannot be used in conjunction with prompt. */
  seed?: number | null;
  /** If true, guarantees that the generated song will be instrumental. If false, the song may or may not be instrumental depending on the `prompt`. Can only be used with `prompt`. */
  force_instrumental?: boolean;
  /** The ID of the finetune to use for the generation */
  finetune_id?: string | null;
  /** How strongly the finetune influences the generation. Defaults to 1.0 (full strength). Lower values soften the influence of the finetune, leaving more room for prompt-level steering. Only meaningful when `finetune_id` is also provided. */
  finetune_strength?: number;
  /** If true, proper names in the prompt will be phonetically spelled in the lyrics for better pronunciation by the music model. The original names will be restored in word timestamps. */
  use_phonetic_names?: boolean;
  /** Controls how strictly section durations in the `composition_plan` are enforced. Only used with `composition_plan` and only applies to `music_v1`; for `music_v2` section durations are always enforced and this is ignored. When false for `music_v1`, the model may adjust individual section durations for better quality and latency, while preserving the total song duration from the plan. */
  respect_sections_durations?: boolean;
  /** Whether to store the generated song for inpainting. */
  store_for_inpainting?: boolean;
  /** Whether to return the timestamps of the words in the generated song. */
  with_timestamps?: boolean;
  /** Whether to sign the generated song with C2PA. Applicable only for mp3 files. */
  sign_with_c2pa?: boolean;
  model_style_prefix?: "music" | "sfx";
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. Use "auto" (the default) to let the API pick the best format for the selected model: mp3_44100_128 for v1 models and mp3_48000_192 for v2 models.  */
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/music/detailed` · `compose_detailed`</sub>

## `elevenlabs.composeDetailedStream`

Stream Composed Music With A Detailed Response

```ts
elevenlabs.composeDetailedStream(input: {
  /** A simple text prompt to generate a song from. Cannot be used in conjunction with `composition_plan`. */
  prompt?: string | null;
  /** Optional generation mode hint for prompt-based music generation. Can only be used with `prompt`. */
  generation_mode?: MusicGenerationMode | null;
  /** A music prompt. Deprecated. Use `composition_plan` instead. */
  music_prompt?: MusicPrompt | null;
  /** The lyrics text to use for the generation. */
  lyrics_text?: string | null;
  /** A detailed composition plan to guide music generation. Cannot be used in conjunction with `prompt`. */
  composition_plan?: MusicPrompt | CompositionPlan | null;
  /** The length of the song to generate in milliseconds. Used only in conjunction with `prompt`. Must be between 3000ms and 600000ms. Optional - if not provided, the model will choose a length based on the prompt. */
  music_length_ms?: number | null;
  /** The model to use for the generation. */
  model_id?: "music_v1" | "music_v2";
  /** Random seed to initialize the music generation process. Providing the same seed with the same parameters can help achieve more consistent results, but exact reproducibility is not guaranteed and outputs may change across system updates. Cannot be used in conjunction with prompt. */
  seed?: number | null;
  /** If true, guarantees that the generated song will be instrumental. If false, the song may or may not be instrumental depending on the `prompt`. Can only be used with `prompt`. */
  force_instrumental?: boolean;
  /** The ID of the finetune to use for the generation */
  finetune_id?: string | null;
  /** How strongly the finetune influences the generation. Defaults to 1.0 (full strength). Lower values soften the influence of the finetune, leaving more room for prompt-level steering. Only meaningful when `finetune_id` is also provided. */
  finetune_strength?: number;
  /** If true, proper names in the prompt will be phonetically spelled in the lyrics for better pronunciation by the music model. The original names will be restored in word timestamps. */
  use_phonetic_names?: boolean;
  /** Whether to store the generated song for inpainting. */
  store_for_inpainting?: boolean;
  /** Whether to return the timestamps of the words in the generated song. */
  with_timestamps?: boolean;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. Use "auto" (the default) to let the API pick the best format for the selected model: mp3_44100_128 for v1 models and mp3_48000_192 for v2 models.  */
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ReadableStream<Uint8Array>>
```

<sub>`POST /v1/music/detailed/stream` · `compose_detailed_stream`</sub>

## `elevenlabs.composePlan`

Generate Composition Plan

```ts
elevenlabs.composePlan(input: {
  /** A simple text prompt to compose a plan from. */
  prompt: string;
  /** The length of the composition plan to generate in milliseconds. Must be between 3000ms and 600000ms. Optional - if not provided, the model will choose a length based on the prompt. */
  music_length_ms?: number | null;
  /** An optional composition plan to use as a source for the new composition plan. */
  source_composition_plan?: MusicPrompt | CompositionPlan | null;
  /** The model to use for the generation. */
  model_id?: "music_v1" | "music_v2";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicPrompt | CompositionPlan>
```

<sub>`POST /v1/music/plan` · `compose_plan`</sub>

## `elevenlabs.separateSongStems`

Stem Separation

```ts
elevenlabs.separateSongStems(input: {
  /** The audio file to separate into stems. */
  file: string;
  /** The id of the stem variation to use. */
  stem_variation_id?: "two_stems_v1" | "six_stems_v1";
  /** Whether to sign the generated song with C2PA. Applicable only for mp3 files. */
  sign_with_c2pa?: boolean;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/music/stem-separation` · `separate_song_stems`</sub>

## `elevenlabs.streamCompose`

Stream Composed Music

```ts
elevenlabs.streamCompose(input: {
  /** A simple text prompt to generate a song from. Cannot be used in conjunction with `composition_plan`. */
  prompt?: string | null;
  /** Optional generation mode hint for prompt-based music generation. Can only be used with `prompt`. */
  generation_mode?: MusicGenerationMode | null;
  /** A music prompt. Deprecated. Use `composition_plan` instead. */
  music_prompt?: MusicPrompt | null;
  /** The lyrics text to use for the generation. */
  lyrics_text?: string | null;
  /** A detailed composition plan to guide music generation. Cannot be used in conjunction with `prompt`. */
  composition_plan?: MusicPrompt | CompositionPlan | null;
  /** The length of the song to generate in milliseconds. Used only in conjunction with `prompt`. Must be between 3000ms and 600000ms. Optional - if not provided, the model will choose a length based on the prompt. */
  music_length_ms?: number | null;
  /** The model to use for the generation. */
  model_id?: "music_v1" | "music_v2";
  /** Random seed to initialize the music generation process. Providing the same seed with the same parameters can help achieve more consistent results, but exact reproducibility is not guaranteed and outputs may change across system updates. Cannot be used in conjunction with prompt. */
  seed?: number | null;
  /** If true, guarantees that the generated song will be instrumental. If false, the song may or may not be instrumental depending on the `prompt`. Can only be used with `prompt`. */
  force_instrumental?: boolean;
  /** The ID of the finetune to use for the generation */
  finetune_id?: string | null;
  /** How strongly the finetune influences the generation. Defaults to 1.0 (full strength). Lower values soften the influence of the finetune, leaving more room for prompt-level steering. Only meaningful when `finetune_id` is also provided. */
  finetune_strength?: number;
  /** If true, proper names in the prompt will be phonetically spelled in the lyrics for better pronunciation by the music model. The original names will be restored in word timestamps. */
  use_phonetic_names?: boolean;
  /** Whether to store the generated song for inpainting. */
  store_for_inpainting?: boolean;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. Use "auto" (the default) to let the API pick the best format for the selected model: mp3_44100_128 for v1 models and mp3_48000_192 for v2 models.  */
  output_format?: "auto" | "mp3_48000_128" | "mp3_48000_192" | "mp3_48000_240" | "mp3_48000_320" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/music/stream` · `stream_compose`</sub>

## `elevenlabs.uploadSong`

Upload Music

```ts
elevenlabs.uploadSong(input: {
  /** The audio file to upload. */
  file: string;
  /** Whether to generate and return the composition plan for the uploaded song. Pass a model id (`music_v1` or `music_v2`) to control which composition plan format is returned. Passing `true`/`false` is deprecated; `true` defaults to the `music_v1` plan format. Enabling this will increase the latency. */
  extract_composition_plan?: true | false | "music_v1" | "music_v2";
  /** Whether to transcribe the uploaded song and return word-level timestamps. If True, the response will include words_timestamps but will increase the latency. */
  with_timestamps?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<MusicUploadResponse>
```

<sub>`POST /v1/music/upload` · `upload_song`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

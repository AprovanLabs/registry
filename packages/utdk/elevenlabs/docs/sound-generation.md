# Sound Generation

1 operation · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.soundGeneration`

Sound Generation

```ts
elevenlabs.soundGeneration(input: {
  /** The text that will get converted into a sound effect. */
  text: string;
  /** Whether to create a sound effect that loops smoothly. Only available for the 'eleven_text_to_sound_v2 model'. */
  loop?: boolean;
  /** The duration of the sound which will be generated in seconds. Must be at least 0.5 and at most 30. If set to None we will guess the optimal duration using the prompt. Defaults to None. */
  duration_seconds?: number | null;
  /** A higher prompt influence makes your generation follow the prompt more closely while also making generations less variable. Must be a value between 0 and 1. Defaults to 0.3. */
  prompt_influence?: number | null;
  /** The model ID to use for the sound generation. */
  model_id?: string;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/sound-generation` · `sound_generation`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

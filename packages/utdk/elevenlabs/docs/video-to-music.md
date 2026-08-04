# Video To Music

1 operation · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.videoToMusic`

Video To Music

```ts
elevenlabs.videoToMusic(input: {
  /**              One or more video files sent via FormData array (multipart/form-data). They will be combined into one codec in order.             A maximum of 10 videos is allowed, where the total size of the combined video is limited to 200MB.             In total, the video can be up to 600 seconds long. Note that combining multiple videos may increase the request duration significantly. If possible, combine the videos beforehand.              */
  videos: (string)[];
  /** Optional text description of the music you want. A maximum of 1000 characters is allowed. */
  description?: string | null;
  /** Optional list of style tags (e.g. ['upbeat', 'cinematic']). A maximum of 10 tags is allowed. */
  tags?: (string)[];
  /** The model to use for the generation. */
  model_id?: "music_v1" | "music_v2";
  /** Whether to sign the generated song with C2PA. Applicable only for mp3 files. */
  sign_with_c2pa?: boolean;
  /** Output format of the generated audio. Formatted as codec_sample_rate_bitrate. So an mp3 with 22.05kHz sample rate at 32kbs is represented as mp3_22050_32. MP3 with 192kbps bitrate requires you to be subscribed to Creator tier or above. PCM with 44.1kHz sample rate requires you to be subscribed to Pro tier or above. Note that the μ-law format (sometimes written mu-law, often approximated as u-law) is commonly used for Twilio audio inputs. */
  output_format?: AllowedOutputFormats;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/music/video-to-music` · `video_to_music`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

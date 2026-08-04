# Audio Isolation

4 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.audioIsolation`

Audio Isolation

```ts
elevenlabs.audioIsolation(input: {
  /** The audio file from which vocals/speech will be isolated from. */
  audio: string;
  /** The format of input audio. Options are 'pcm_s16le_16' or 'other' For `pcm_s16le_16`, the input audio must be 16-bit PCM at a 16kHz sample rate, single channel (mono), and little-endian byte order. Latency will be lower than with passing an encoded waveform. */
  file_format?: "pcm_s16le_16" | "other" | null;
  /** Optional preview image base64 for tracking this generation. */
  preview_b64?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/audio-isolation` · `audio_isolation`</sub>

## `elevenlabs.getAudioIsolationHistory`

Get Audio Isolation History

```ts
elevenlabs.getAudioIsolationHistory(input: {
  /** How many history items to return at maximum. Defaults to 100. */
  page_size?: number;
  /** Page number for search pagination (1-based). Only used when search is provided. */
  page?: number;
  /** Optional search term used for filtering audio isolation history (title/text). */
  search?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetAudioIsolationHistoryResponseModel>
```

<sub>`GET /v1/audio-isolation/history` · `get_audio_isolation_history`</sub>

## `elevenlabs.deleteAudioIsolationHistoryItem`

Delete Audio Isolation History Item

```ts
elevenlabs.deleteAudioIsolationHistoryItem(input: {
  /** Identifier of the audio isolation history item. */
  history_item_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/audio-isolation/history/{history_item_id}` · `delete_audio_isolation_history_item`</sub>

## `elevenlabs.audioIsolationStream`

Audio Isolation Stream

```ts
elevenlabs.audioIsolationStream(input: {
  /** The audio file from which vocals/speech will be isolated from. */
  audio: string;
  /** The format of input audio. Options are 'pcm_s16le_16' or 'other' For `pcm_s16le_16`, the input audio must be 16-bit PCM at a 16kHz sample rate, single channel (mono), and little-endian byte order. Latency will be lower than with passing an encoded waveform. */
  file_format?: "pcm_s16le_16" | "other" | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/audio-isolation/stream` · `audio_isolation_stream`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Samples

2 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.deleteSample`

Delete Sample

```ts
elevenlabs.deleteSample(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice. */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteSampleResponseModel>
```

<sub>`DELETE /v1/voices/{voice_id}/samples/{sample_id}` · `delete_sample`</sub>

## `elevenlabs.getAudioFromSample`

Get Audio From Sample

```ts
elevenlabs.getAudioFromSample(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice. */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`GET /v1/voices/{voice_id}/samples/{sample_id}/audio` · `get_audio_from_sample`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Forced Alignment

1 operation · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.forcedAlignment`

Create Forced Alignment

```ts
elevenlabs.forcedAlignment(input: {
  /** The file to align. All major audio formats are supported. The file size must be less than 1GB. */
  file: string;
  /** The text to align with the audio. The input text can be in any format, however diarization is not supported at this time. */
  text: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ForcedAlignmentResponseModel>
```

<sub>`POST /v1/forced-alignment` · `forced_alignment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

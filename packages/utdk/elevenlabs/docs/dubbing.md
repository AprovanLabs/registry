# Dubbing

35 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.listDubs`

List Dubs

```ts
elevenlabs.listDubs(input: {
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
  /** How many dubs to return at maximum. Can not exceed 200, defaults to 100. */
  page_size?: number;
  /** What state the dub is currently in. */
  dubbing_status?: "dubbing" | "dubbed" | "failed";
  /** Filter by dubbing status. */
  dubbing_statuses?: ("queued" | "preparing" | "dubbing" | "dubbed" | "failed")[] | null;
  /** Filter by dubbing model generation. */
  dubbing_models?: ("dubbing_v1" | "dubbing_v2")[] | null;
  /** Filter by target language code. */
  target_language_codes?: (string)[] | null;
  /** Filter by dubbing creation source. */
  creation_sources?: ("flow_node" | "dubbing_ui" | "dubbing_api")[] | null;
  /** Filters who created the resources being listed, whether it was the user running the request or someone else that shared the resource with them. */
  filter_by_creator?: "personal" | "others" | "all";
  /** The field to use for ordering results from this query. */
  order_by?: "created_at" | "name";
  /** The order direction to use for results from this query. */
  order_direction?: "DESCENDING" | "ASCENDING";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingMetadataPageResponseModel>
```

<sub>`GET /v1/dubbing` · `list_dubs`</sub>

## `elevenlabs.createDubbing`

Dub A Video Or An Audio File

```ts
elevenlabs.createDubbing(input: {
  /** A list of file paths to audio recordings intended for voice cloning */
  file?: string | null;
  /** CSV file containing transcription/translation metadata */
  csv_file?: string | null;
  /** For use only with csv input */
  foreground_audio_file?: string | null;
  /** For use only with csv input */
  background_audio_file?: string | null;
  /** Name of the dubbing project. */
  name?: string | null;
  /** URL of the source video/audio file. */
  source_url?: string | null;
  /** Source language. Expects a valid iso639-1 or iso639-3 language code. */
  source_lang?: string;
  /** The Target language to dub the content into. Expects a valid iso639-1 or iso639-3 language code. */
  target_lang?: string | null;
  /** [Experimental] An accent to apply when selecting voices from the library and to use to inform translation of the dialect to prefer. */
  target_accent?: string | null;
  /** Number of speakers to use for the dubbing. Set to 0 to automatically detect the number of speakers */
  num_speakers?: number;
  /** Whether to apply watermark to the output video. */
  watermark?: boolean;
  /** Start time of the source video/audio file. */
  start_time?: number | null;
  /** End time of the source video/audio file. */
  end_time?: number | null;
  /** Whether to use the highest resolution available. */
  highest_resolution?: boolean;
  /** An advanced setting. Whether to drop background audio from the final dub. This can improve dub quality where it's known that audio shouldn't have a background track such as for speeches or monologues. */
  drop_background_audio?: boolean;
  /** [BETA] Whether transcripts should have profanities censored with the words '[censored]' */
  use_profanity_filter?: boolean | null;
  /** Whether to prepare dub for edits in dubbing studio or edits as a dubbing resource. */
  dubbing_studio?: boolean;
  /** Instead of using a voice clone in dubbing, use a similar voice from the ElevenLabs Voice Library. Voices used from the library will contribute towards a workspace's custom voices limit, and if there aren't enough available slots the dub will fail. Using this feature requires the caller to have the 'add_voice_from_voice_library' permission on their workspace to access new voices. */
  disable_voice_cloning?: boolean;
  /** The mode in which to run this Dubbing job. Defaults to automatic, use manual if specifically providing a CSV transcript to use. Note that manual mode is experimental and production use is strongly discouraged. */
  mode?: "automatic" | "manual";
  /** Frames per second to use when parsing a CSV file for dubbing. If not provided, FPS will be inferred from timecodes. */
  csv_fps?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DoDubbingResponseModel>
```

<sub>`POST /v1/dubbing` · `create_dubbing`</sub>

## `elevenlabs.deleteDubbing`

Delete Dubbing

```ts
elevenlabs.deleteDubbing(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteDubbingResponseModel>
```

<sub>`DELETE /v1/dubbing/{dubbing_id}` · `delete_dubbing`</sub>

## `elevenlabs.getDubbedMetadata`

Get Dubbing

```ts
elevenlabs.getDubbedMetadata(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingMetadataResponse>
```

<sub>`GET /v1/dubbing/{dubbing_id}` · `get_dubbed_metadata`</sub>

## `elevenlabs.getDubbedFile`

Get Dubbed File

```ts
elevenlabs.getDubbedFile(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ID of the language. */
  language_code: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`GET /v1/dubbing/{dubbing_id}/audio/{language_code}` · `get_dubbed_file`</sub>

## `elevenlabs.getDubbedTranscriptFile`

Get Dubbed Transcript

```ts
elevenlabs.getDubbedTranscriptFile(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ISO-693 language code to retrieve the transcript for. Use 'source' to fetch the transcript of the original media. */
  language_code: string;
  /** Format to return transcript in. For subtitles use either 'srt' or 'webvtt', and for a full transcript use 'json'. The 'json' format is not yet supported for Dubbing Studio. */
  format_type?: "srt" | "webvtt" | "json";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingTranscriptResponseModel | string>
```

<sub>`GET /v1/dubbing/{dubbing_id}/transcript/{language_code}` · `get_dubbed_transcript_file`</sub>

## `elevenlabs.getDubbingTranscripts`

Retrieve A Transcript

```ts
elevenlabs.getDubbingTranscripts(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ISO-693 language code to retrieve the transcript for. Use 'source' to fetch the transcript of the original media. */
  language_code: string;
  /** Format to return transcript in. For subtitles use either 'srt' or 'webvtt', and for a full transcript use 'json'. The 'json' format is not yet supported for Dubbing Studio. */
  format_type: "srt" | "webvtt" | "json";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingTranscriptsResponseModel>
```

<sub>`GET /v1/dubbing/{dubbing_id}/transcripts/{language_code}/format/{format_type}` · `get_dubbing_transcripts`</sub>

## `elevenlabs.dubbingProjectList`

List Dubbing Projects

```ts
elevenlabs.dubbingProjectList(input: {
  /** Pagination cursor from a previous response's next_cursor. */
  cursor?: string | null;
  /** Number of projects per page (max 100). */
  page_size?: number;
  /** Filter to projects in this status (preparing, ready, failed). */
  status?: string | null;
  /** Sort by creation time (default 'DESCENDING'). */
  sort_direction?: "ASCENDING" | "DESCENDING";
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingProjectListResponse>
```

<sub>`GET /v1/dubbing/project` · `dubbing_project_list`</sub>

## `elevenlabs.dubbingProjectCreate`

Create Dubbing Project

```ts
elevenlabs.dubbingProjectCreate(input: {
  /** The source media file to dub. Provide this or source_url. */
  file?: string | null;
  /** Public URL to fetch the source media from. Provide this or file. */
  source_url?: string | null;
  /** Optional free-form string (max 500 characters) to identify the project on your end. */
  reference?: string | null;
  /** BCP-47 language tag of the source media. Omit to auto-detect. */
  source_language?: string | null;
  /** Default dubbing model id for the project's language targets; a target may override it. Omit to use the system default. */
  model_id?: string | null;
  /** Key terms to bias transcription/translation toward (e.g. product or brand names). At most 1000 terms; each term at most 50 characters and 5 words; the characters `<>{}[]\` are not allowed. */
  keyterms?: (string)[];
  /** Optional shortcut: also create a language target in this BCP-47 language, queued to start once the project is ready. */
  target_language?: string | null;
  /** Optional JSON transcript to use instead of automatic transcription. When provided, source_language is required. Segments may include an optional external_id and an optional translation; if any segment includes a translation, target_language is required and every segment must include one (used to seed the target created via target_language). */
  transcript?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingProjectResponse>
```

<sub>`POST /v1/dubbing/project` · `dubbing_project_create`</sub>

## `elevenlabs.dubbingProjectDelete`

Delete Dubbing Project

```ts
elevenlabs.dubbingProjectDelete(input: {
  /** Identifier of the dubbing project to delete. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/dubbing/project/{project_id}` · `dubbing_project_delete`</sub>

## `elevenlabs.dubbingProjectGet`

Get Dubbing Project

```ts
elevenlabs.dubbingProjectGet(input: {
  /** Identifier of the dubbing project to fetch. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingProjectResponse>
```

<sub>`GET /v1/dubbing/project/{project_id}` · `dubbing_project_get`</sub>

## `elevenlabs.dubbingLanguageList`

List Dubbing Language Targets

```ts
elevenlabs.dubbingLanguageList(input: {
  /** Identifier of the parent dubbing project. */
  project_id: string;
  /** Pagination cursor from a previous response's next_cursor. */
  cursor?: string | null;
  /** Number of language targets per page (max 100). */
  page_size?: number;
  /** Filter to targets in this status (queued, processing, completed, stale, failed). */
  status?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingLanguageListResponse>
```

<sub>`GET /v1/dubbing/project/{project_id}/language` · `dubbing_language_list`</sub>

## `elevenlabs.dubbingLanguageCreate`

Create Dubbing Language Target

```ts
elevenlabs.dubbingLanguageCreate(input: {
  /** BCP-47 language tag to dub the project into (e.g. 'fr', 'es-419'). */
  target_language: string;
  /** Dubbing model id for this target; omit to use the project default. */
  model_id?: string | null;
  /** Voice settings applied to the whole language (e.g. cloning strength). */
  voice_settings?: VoiceSettings | null;
  /** Optional translations to use instead of machine translation. A map from each source segment's external_id (or its id, if you supplied none) to the translated text; every source segment must be covered exactly once. At most 20000 entries, totalling at most 4 MiB of text. */
  translations?: { [key: string]: string | undefined } | null;
  /** Identifier of the parent dubbing project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingLanguageResponse>
```

<sub>`POST /v1/dubbing/project/{project_id}/language` · `dubbing_language_create`</sub>

## `elevenlabs.dubbingLanguageDelete`

Delete Dubbing Language Target

```ts
elevenlabs.dubbingLanguageDelete(input: {
  /** Identifier of the parent dubbing project. */
  project_id: string;
  /** Identifier of the language target to delete. */
  language_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/dubbing/project/{project_id}/language/{language_id}` · `dubbing_language_delete`</sub>

## `elevenlabs.dubbingLanguageGet`

Get Dubbing Language Target

```ts
elevenlabs.dubbingLanguageGet(input: {
  /** Identifier of the parent dubbing project. */
  project_id: string;
  /** Identifier of the language target to fetch. */
  language_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingLanguageResponse>
```

<sub>`GET /v1/dubbing/project/{project_id}/language/{language_id}` · `dubbing_language_get`</sub>

## `elevenlabs.dubbingTargetTranscriptGet`

Get Dubbing Target Transcript

```ts
elevenlabs.dubbingTargetTranscriptGet(input: {
  /** Identifier of the dubbing project. */
  project_id: string;
  /** Identifier of the language target. */
  language_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingTargetTranscriptResponse>
```

<sub>`GET /v1/dubbing/project/{project_id}/language/{language_id}/transcript` · `dubbing_target_transcript_get`</sub>

## `elevenlabs.dubbingTargetTranscriptRegenerate`

Regenerate Dubbing Target

```ts
elevenlabs.dubbingTargetTranscriptRegenerate(input: {
  /** Identifier of the dubbing project. */
  project_id: string;
  /** Identifier of the language target. */
  language_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingLanguageResponse>
```

<sub>`POST /v1/dubbing/project/{project_id}/language/{language_id}/transcript/regenerate` · `dubbing_target_transcript_regenerate`</sub>

## `elevenlabs.dubbingTargetTranscriptSegmentUpdate`

Update Dubbing Target Transcript Segment

```ts
elevenlabs.dubbingTargetTranscriptSegmentUpdate(input: {
  /** New translated text, or null to mark the segment for re-translation. */
  translation?: string | null;
  /** Identifier of the dubbing project. */
  project_id: string;
  /** Identifier of the language target. */
  language_id: string;
  /** Identifier of the segment to edit. */
  segment_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingTargetSegmentUpdateResponse>
```

<sub>`PATCH /v1/dubbing/project/{project_id}/language/{language_id}/transcript/segment/{segment_id}` · `dubbing_target_transcript_segment_update`</sub>

## `elevenlabs.dubbingTranscriptGet`

Get Dubbing Transcript

```ts
elevenlabs.dubbingTranscriptGet(input: {
  /** Identifier of the dubbing project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingSourceTranscriptResponse>
```

<sub>`GET /v1/dubbing/project/{project_id}/transcript` · `dubbing_transcript_get`</sub>

## `elevenlabs.dubbingTranscriptSegmentAdd`

Add Dubbing Transcript Segment

```ts
elevenlabs.dubbingTranscriptSegmentAdd(input: {
  /** The text of the new segment. */
  text: string;
  /** Identifier of the segment's speaker. */
  speaker_id: string;
  /** Start time of the segment, in seconds. */
  start_s: number;
  /** End time of the segment, in seconds. */
  end_s: number;
  /** Identifier of the dubbing project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingSourceSegmentUpdateResponse>
```

<sub>`POST /v1/dubbing/project/{project_id}/transcript/segment` · `dubbing_transcript_segment_add`</sub>

## `elevenlabs.dubbingTranscriptSegmentDelete`

Delete Dubbing Transcript Segment

```ts
elevenlabs.dubbingTranscriptSegmentDelete(input: {
  /** Identifier of the dubbing project. */
  project_id: string;
  /** Identifier of the segment to remove. */
  segment_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingTranscriptRevisionResponse>
```

<sub>`DELETE /v1/dubbing/project/{project_id}/transcript/segment/{segment_id}` · `dubbing_transcript_segment_delete`</sub>

## `elevenlabs.dubbingTranscriptSegmentUpdate`

Update Dubbing Transcript Segment

```ts
elevenlabs.dubbingTranscriptSegmentUpdate(input: {
  /** New text for the segment. */
  text?: string | null;
  /** New speaker id for the segment. */
  speaker_id?: string | null;
  /** New start time, in seconds. */
  start_s?: number | null;
  /** New end time, in seconds. */
  end_s?: number | null;
  /** Identifier of the dubbing project. */
  project_id: string;
  /** Identifier of the segment to edit. */
  segment_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingSourceSegmentUpdateResponse>
```

<sub>`PATCH /v1/dubbing/project/{project_id}/transcript/segment/{segment_id}` · `dubbing_transcript_segment_update`</sub>

## `elevenlabs.getDubbingResource`

Get The Dubbing Resource For An Id.

```ts
elevenlabs.getDubbingResource(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingResource>
```

<sub>`GET /v1/dubbing/resource/{dubbing_id}` · `get_dubbing_resource`</sub>

## `elevenlabs.dub`

Dubs All Or Some Segments And Languages

```ts
elevenlabs.dub(input: {
  /** Dub only this list of segments. */
  segments: (string)[];
  /** Dub only these languages for each segment. */
  languages: (string)[] | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentDubResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/dub` · `dub`</sub>

## `elevenlabs.addLanguage`

Add A Language To The Resource

```ts
elevenlabs.addLanguage(input: {
  /** The Target language. */
  language: string | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<LanguageAddedResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/language` · `add_language`</sub>

## `elevenlabs.migrateSegments`

Move Segments Between Speakers

```ts
elevenlabs.migrateSegments(input: {
  segment_ids: (string)[];
  speaker_id: string;
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentMigrationResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/migrate-segments` · `migrate_segments`</sub>

## `elevenlabs.render`

Render Audio Or Video For The Given Language

```ts
elevenlabs.render(input: {
  /** The type of the render. One of ['mp4', 'aac', 'mp3', 'wav', 'aaf', 'tracks_zip', 'clips_zip'] */
  render_type: RenderType;
  /** Whether to normalize the volume of the rendered audio. */
  normalize_volume?: boolean | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** The target language code to render, eg. 'es'. To render the source track use 'original'. */
  language: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DubbingRenderResponseModel>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/render/{language}` · `render`</sub>

## `elevenlabs.deleteSegment`

Deletes A Single Segment

```ts
elevenlabs.deleteSegment(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ID of the segment */
  segment_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentDeleteResponse>
```

<sub>`DELETE /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}` · `delete_segment`</sub>

## `elevenlabs.updateSegmentLanguage`

Modify A Single Segment

```ts
elevenlabs.updateSegmentLanguage(input: {
  start_time?: number | null;
  end_time?: number | null;
  text?: string | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ID of the segment */
  segment_id: string;
  /** ID of the language. */
  language: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentUpdateResponse>
```

<sub>`PATCH /v1/dubbing/resource/{dubbing_id}/segment/{segment_id}/{language}` · `update_segment_language`</sub>

## `elevenlabs.createSpeaker`

Create A New Speaker

```ts
elevenlabs.createSpeaker(input: {
  /** Name to attribute to this speaker. */
  speaker_name?: string | null;
  /** Either the identifier of a voice from the ElevenLabs voice library, or one of ['track-clone', 'clip-clone']. */
  voice_id?: string | null;
  /** For models that support it, the voice similarity value to use. This will default to 0.65, with a valid range of [0.0, 1.0]. */
  voice_stability?: number | null;
  /** For models that support it, the voice similarity value to use. This will default to 1.0, with a valid range of [0.0, 1.0]. */
  voice_similarity?: number | null;
  /** For models that support it, the voice style value to use. This will default to 1.0, with a valid range of [0.0, 1.0]. */
  voice_style?: number | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeakerCreatedResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/speaker` · `create_speaker`</sub>

## `elevenlabs.updateSpeaker`

Update Metadata For A Speaker

```ts
elevenlabs.updateSpeaker(input: {
  /** Name to attribute to this speaker. */
  speaker_name?: string | null;
  /** Either the identifier of a voice from the ElevenLabs voice library, or one of ['track-clone', 'clip-clone']. */
  voice_id?: string | null;
  /** For models that support it, the voice similarity value to use. This will default to 0.65, with a valid range of [0.0, 1.0]. */
  voice_stability?: number | null;
  /** For models that support it, the voice similarity value to use. This will default to 1.0, with a valid range of [0.0, 1.0]. */
  voice_similarity?: number | null;
  /** For models that support it, the voice style value to use. This will default to 1.0, with a valid range of [0.0, 1.0]. */
  voice_style?: number | null;
  /** Languages to apply these changes to. If empty, will apply to all languages. */
  languages?: (string)[] | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ID of the speaker. */
  speaker_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeakerUpdatedResponse>
```

<sub>`PATCH /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}` · `update_speaker`</sub>

## `elevenlabs.createClip`

Create A Segment For The Speaker

```ts
elevenlabs.createClip(input: {
  start_time: number;
  end_time: number;
  text?: string | null;
  translations?: { [key: string]: string | undefined } | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ID of the speaker. */
  speaker_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentCreateResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/segment` · `create_clip`</sub>

## `elevenlabs.getSimilarVoicesForSpeaker`

Search The Elevenlabs Library For Voices Similar To A Speaker.

```ts
elevenlabs.getSimilarVoicesForSpeaker(input: {
  /** ID of the dubbing project. */
  dubbing_id: string;
  /** ID of the speaker. */
  speaker_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SimilarVoicesForSpeakerResponse>
```

<sub>`GET /v1/dubbing/resource/{dubbing_id}/speaker/{speaker_id}/similar-voices` · `get_similar_voices_for_speaker`</sub>

## `elevenlabs.transcribe`

Transcribes Segments

```ts
elevenlabs.transcribe(input: {
  /** Transcribe this specific list of segments. */
  segments: (string)[];
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentTranscriptionResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/transcribe` · `transcribe`</sub>

## `elevenlabs.translate`

Translates All Or Some Segments And Languages

```ts
elevenlabs.translate(input: {
  /** Translate only this list of segments. */
  segments: (string)[];
  /** Translate only these languages for each segment. */
  languages: (string)[] | null;
  /** ID of the dubbing project. */
  dubbing_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SegmentTranslationResponse>
```

<sub>`POST /v1/dubbing/resource/{dubbing_id}/translate` · `translate`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Studio

23 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.createPodcast`

Create Podcast

```ts
elevenlabs.createPodcast(input: {
  /** The ID of the model to be used for this Studio project, you can query GET /v1/models to list all available models. */
  model_id: string;
  /** The type of podcast to generate. Can be 'conversation', an interaction between two voices, or 'bulletin', a monologue. */
  mode: PodcastConversationMode | PodcastBulletinMode;
  /** The source content for the Podcast. */
  source: PodcastTextSource | PodcastUrlSource | (PodcastTextSource | PodcastUrlSource)[];
  /** Output quality of the generated audio. Must be one of: 'standard' - standard output format, 128kbps with 44.1kHz sample rate. 'high' - high quality output format, 192kbps with 44.1kHz sample rate and major improvements on our side. 'ultra' - ultra quality output format, 192kbps with 44.1kHz sample rate and highest improvements on our side. 'ultra_lossless' - ultra quality output format, 705.6kbps with 44.1kHz sample rate and highest improvements on our side in a fully lossless format.  */
  quality_preset?: QualityPresetType;
  /** Duration of the generated podcast. Must be one of: short - produces podcasts shorter than 3 minutes. default - produces podcasts roughly between 3-7 minutes. long - produces podcasts longer than 7 minutes.  */
  duration_scale?: "short" | "default" | "long";
  /** An optional language of the Studio project. Two-letter language code (ISO 639-1). */
  language?: string | null;
  /** The intro text that will always be added to the beginning of the podcast. */
  intro?: string | null;
  /** The outro text that will always be added to the end of the podcast. */
  outro?: string | null;
  /** Additional instructions prompt for the podcast generation used to adjust the podcast's style and tone. */
  instructions_prompt?: string | null;
  /** A brief summary or highlights of the Studio project's content, providing key points or themes. This should be between 10 and 70 characters. */
  highlights?: (string)[] | null;
  /**      A url that will be called by our service when the Studio project is converted. Request will contain a json blob containing the status of the conversion     Messages:     1. When project was converted successfully:     {       type: "project_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         conversion_status: "success",         project_snapshot_id: "22m00Tcm4TlvDq8ikMAT",         error_details: None,       }     }     2. When project conversion failed:     {       type: "project_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         conversion_status: "error",         project_snapshot_id: None,         error_details: "Error details if conversion failed"       }     }      3. When chapter was converted successfully:     {       type: "chapter_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         chapter_id: "22m00Tcm4TlvDq8ikMAT",         conversion_status: "success",         chapter_snapshot_id: "23m00Tcm4TlvDq8ikMAV",         error_details: None,       }     }     4. When chapter conversion failed:     {       type: "chapter_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         chapter_id: "22m00Tcm4TlvDq8ikMAT",         conversion_status: "error",         chapter_snapshot_id: None,         error_details: "Error details if conversion failed"       }     }      */
  callback_url?: string | null;
  /**      This parameter controls text normalization with four modes: 'auto', 'on', 'apply_english' and 'off'.     When set to 'auto', the system will automatically decide whether to apply text normalization     (e.g., spelling out numbers). With 'on', text normalization will always be applied, while     with 'off', it will be skipped. 'apply_english' is the same as 'on' but will assume that text is in English.      */
  apply_text_normalization?: "auto" | "on" | "off" | "apply_english" | null;
}, options?: { headers?: { "safety-identifier"?: string | null; "xi-api-key"?: string | null } }): Promise<PodcastProjectResponseModel>
```

<sub>`POST /v1/studio/podcasts` · `create_podcast`</sub>

## `elevenlabs.getProjects`

List Studio Projects

```ts
elevenlabs.getProjects(options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetProjectsResponseModel>
```

<sub>`GET /v1/studio/projects` · `get_projects`</sub>

## `elevenlabs.addProject`

Create Studio Project

```ts
elevenlabs.addProject(input: {
  /** The name of the Studio project, used for identification only. */
  name: string;
  /** The voice_id that corresponds to the default voice used for new titles. */
  default_title_voice_id?: string | null;
  /** The voice_id that corresponds to the default voice used for new paragraphs. */
  default_paragraph_voice_id?: string | null;
  /** The ID of the model to be used for this Studio project, you can query GET /v1/models to list all available models. */
  default_model_id?: string | null;
  /** An optional URL from which we will extract content to initialize the Studio project. If this is set, 'from_url' and 'from_content' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank. */
  from_url?: string | null;
  /** An optional .epub, .pdf, .txt or similar file can be provided. If provided, we will initialize the Studio project with its content. If this is set, 'from_url' and 'from_content' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank. */
  from_document?: string | null;
  /**      An optional content to initialize the Studio project with. If this is set, 'from_url' and 'from_document' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank.      Example:     [{"name": "Chapter A", "blocks": [{"sub_type": "p", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "A", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "B", "type": "tts_node"}]}, {"sub_type": "h1", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "C", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "D", "type": "tts_node"}]}]}, {"name": "Chapter B", "blocks": [{"sub_type": "p", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "E", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "F", "type": "tts_node"}]}, {"sub_type": "h2", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "G", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "H", "type": "tts_node"}]}]}]      */
  from_content_json?: string;
  /** Output quality of the generated audio. Must be one of: 'standard' - standard output format, 128kbps with 44.1kHz sample rate. 'high' - high quality output format, 192kbps with 44.1kHz sample rate and major improvements on our side. 'ultra' - ultra quality output format, 192kbps with 44.1kHz sample rate and highest improvements on our side. 'ultra_lossless' - ultra quality output format, 705.6kbps with 44.1kHz sample rate and highest improvements on our side in a fully lossless format.  */
  quality_preset?: QualityPresetType;
  /** An optional name of the author of the Studio project, this will be added as metadata to the mp3 file on Studio project or chapter download. */
  title?: string | null;
  /** An optional name of the author of the Studio project, this will be added as metadata to the mp3 file on Studio project or chapter download. */
  author?: string | null;
  /** An optional description of the Studio project. */
  description?: string | null;
  /** An optional list of genres associated with the Studio project. */
  genres?: (string)[];
  /** An optional target audience of the Studio project. */
  target_audience?: "children" | "young adult" | "adult" | "all ages" | null;
  /** An optional language of the Studio project. Two-letter language code (ISO 639-1). */
  language?: string | null;
  /** An optional content type of the Studio project. */
  content_type?: string | null;
  /** An optional original publication date of the Studio project, in the format YYYY-MM-DD or YYYY. */
  original_publication_date?: string | null;
  /** An optional specification of whether this Studio project contains mature content. */
  mature_content?: boolean | null;
  /** An optional ISBN number of the Studio project you want to create, this will be added as metadata to the mp3 file on Studio project or chapter download. */
  isbn_number?: string | null;
  /** [Deprecated] When the Studio project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements */
  acx_volume_normalization?: boolean;
  /** When the Studio project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements */
  volume_normalization?: boolean;
  /** A list of pronunciation dictionary locators (pronunciation_dictionary_id, version_id) encoded as a list of JSON strings for pronunciation dictionaries to be applied to the text. A list of json encoded strings is required as adding projects may occur through formData as opposed to jsonBody. To specify multiple dictionaries use multiple --form lines in your curl, such as --form 'pronunciation_dictionary_locators="{\"pronunciation_dictionary_id\":\"Vmd4Zor6fplcA7WrINey\",\"version_id\":\"hRPaxjlTdR7wFMhV4w0b\"}"' --form 'pronunciation_dictionary_locators="{\"pronunciation_dictionary_id\":\"JzWtcGQMJ6bnlWwyMo7e\",\"version_id\":\"lbmwxiLu4q6txYxgdZqn\"}"'. */
  pronunciation_dictionary_locators?: (string)[];
  /**      A url that will be called by our service when the Studio project is converted. Request will contain a json blob containing the status of the conversion     Messages:     1. When project was converted successfully:     {       type: "project_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         conversion_status: "success",         project_snapshot_id: "22m00Tcm4TlvDq8ikMAT",         error_details: None,       }     }     2. When project conversion failed:     {       type: "project_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         conversion_status: "error",         project_snapshot_id: None,         error_details: "Error details if conversion failed"       }     }      3. When chapter was converted successfully:     {       type: "chapter_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         chapter_id: "22m00Tcm4TlvDq8ikMAT",         conversion_status: "success",         chapter_snapshot_id: "23m00Tcm4TlvDq8ikMAV",         error_details: None,       }     }     4. When chapter conversion failed:     {       type: "chapter_conversion_status",       event_timestamp: 1234567890,       data: {         request_id: "1234567890",         project_id: "21m00Tcm4TlvDq8ikWAM",         chapter_id: "22m00Tcm4TlvDq8ikMAT",         conversion_status: "error",         chapter_snapshot_id: None,         error_details: "Error details if conversion failed"       }     }      */
  callback_url?: string | null;
  /** An optional specification of whether the content of this Studio project is fiction. */
  fiction?: "fiction" | "non-fiction" | null;
  /**      This parameter controls text normalization with four modes: 'auto', 'on', 'apply_english' and 'off'.     When set to 'auto', the system will automatically decide whether to apply text normalization     (e.g., spelling out numbers). With 'on', text normalization will always be applied, while     with 'off', it will be skipped. 'apply_english' is the same as 'on' but will assume that text is in English.      */
  apply_text_normalization?: "auto" | "on" | "off" | "apply_english" | null;
  /** Whether to auto convert the Studio project to audio or not. */
  auto_convert?: boolean;
  /** [Alpha Feature] Whether automatically assign voices to phrases in the create Project. */
  auto_assign_voices?: boolean | null;
  /** The type of Studio project to create. */
  source_type?: "blank" | "book" | "article" | "genfm" | "video" | "screenplay" | null;
  /**     Optional voice settings overrides for the project, encoded as a list of JSON strings.      Example:     ["{\"voice_id\": \"21m00Tcm4TlvDq8ikWAM\", \"stability\": 0.7, \"similarity_boost\": 0.8, \"style\": 0.5, \"speed\": 1.0, \"use_speaker_boost\": true}"]      */
  voice_settings?: (string)[];
  /** If true, creates a corresponding read for direct publishing in draft state */
  create_publishing_read?: boolean | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddProjectResponseModel>
```

<sub>`POST /v1/studio/projects` · `add_project`</sub>

## `elevenlabs.deleteProject`

Delete Studio Project

```ts
elevenlabs.deleteProject(input: {
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteProjectResponseModel>
```

<sub>`DELETE /v1/studio/projects/{project_id}` · `delete_project`</sub>

## `elevenlabs.getProjectById`

Get Studio Project

```ts
elevenlabs.getProjectById(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The share ID of the project */
  share_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProjectExtendedResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}` · `get_project_by_id`</sub>

## `elevenlabs.editProject`

Update Studio Project

```ts
elevenlabs.editProject(input: {
  /** The name of the Studio project, used for identification only. */
  name: string;
  /** The voice_id that corresponds to the default voice used for new titles. */
  default_title_voice_id: string;
  /** The voice_id that corresponds to the default voice used for new paragraphs. */
  default_paragraph_voice_id: string;
  /** An optional name of the author of the Studio project, this will be added as metadata to the mp3 file on Studio project or chapter download. */
  title?: string | null;
  /** An optional name of the author of the Studio project, this will be added as metadata to the mp3 file on Studio project or chapter download. */
  author?: string | null;
  /** An optional ISBN number of the Studio project you want to create, this will be added as metadata to the mp3 file on Studio project or chapter download. */
  isbn_number?: string | null;
  /** When the Studio project is downloaded, should the returned audio have postprocessing in order to make it compliant with audiobook normalized volume requirements */
  volume_normalization?: boolean;
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EditProjectResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}` · `edit_project`</sub>

## `elevenlabs.getChapters`

List Chapters

```ts
elevenlabs.getChapters(input: {
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetChaptersResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/chapters` · `get_chapters`</sub>

## `elevenlabs.addChapter`

Create Chapter

```ts
elevenlabs.addChapter(input: {
  /** The name of the chapter, used for identification only. */
  name: string;
  /** An optional URL from which we will extract content to initialize the Studio project. If this is set, 'from_url' and 'from_content' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank. */
  from_url?: string | null;
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddChapterResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}/chapters` · `add_chapter`</sub>

## `elevenlabs.deleteChapterEndpoint`

Delete Chapter

```ts
elevenlabs.deleteChapterEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteChapterResponseModel>
```

<sub>`DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}` · `delete_chapter_endpoint`</sub>

## `elevenlabs.getChapterByIdEndpoint`

Get Chapter

```ts
elevenlabs.getChapterByIdEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ChapterWithContentResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/chapters/{chapter_id}` · `get_chapter_by_id_endpoint`</sub>

## `elevenlabs.editChapter`

Update Chapter

```ts
elevenlabs.editChapter(input: {
  /** The name of the chapter, used for identification only. */
  name?: string | null;
  /** The chapter content to use. */
  content?: ChapterContentInputModel | null;
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EditChapterResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}/chapters/{chapter_id}` · `edit_chapter`</sub>

## `elevenlabs.convertChapterEndpoint`

Convert Chapter

```ts
elevenlabs.convertChapterEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConvertChapterResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert` · `convert_chapter_endpoint`</sub>

## `elevenlabs.getChapterSnapshots`

List Chapter Snapshots

```ts
elevenlabs.getChapterSnapshots(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ChapterSnapshotsResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots` · `get_chapter_snapshots`</sub>

## `elevenlabs.getChapterSnapshotEndpoint`

Get Chapter Snapshot

```ts
elevenlabs.getChapterSnapshotEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
  /** The ID of the chapter snapshot. */
  chapter_snapshot_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ChapterSnapshotExtendedResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}` · `get_chapter_snapshot_endpoint`</sub>

## `elevenlabs.streamChapterSnapshotAudio`

Stream Chapter Audio

```ts
elevenlabs.streamChapterSnapshotAudio(input: {
  /** Whether to convert the audio to mpeg format. */
  convert_to_mpeg?: boolean;
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the chapter. */
  chapter_id: string;
  /** The ID of the chapter snapshot. */
  chapter_snapshot_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream` · `stream_chapter_snapshot_audio`</sub>

## `elevenlabs.editProjectContent`

Update Studio Project Content

```ts
elevenlabs.editProjectContent(input: {
  /** An optional URL from which we will extract content to initialize the Studio project. If this is set, 'from_url' and 'from_content' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank. */
  from_url?: string | null;
  /** An optional .epub, .pdf, .txt or similar file can be provided. If provided, we will initialize the Studio project with its content. If this is set, 'from_url' and 'from_content' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank. */
  from_document?: string | null;
  /**      An optional content to initialize the Studio project with. If this is set, 'from_url' and 'from_document' must be null. If neither 'from_url', 'from_document', 'from_content' are provided we will initialize the Studio project as blank.      Example:     [{"name": "Chapter A", "blocks": [{"sub_type": "p", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "A", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "B", "type": "tts_node"}]}, {"sub_type": "h1", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "C", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "D", "type": "tts_node"}]}]}, {"name": "Chapter B", "blocks": [{"sub_type": "p", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "E", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "F", "type": "tts_node"}]}, {"sub_type": "h2", "nodes": [{"voice_id": "6lCwbsX1yVjD49QmpkT0", "text": "G", "type": "tts_node"}, {"voice_id": "6lCwbsX1yVjD49QmpkT1", "text": "H", "type": "tts_node"}]}]}]      */
  from_content_json?: string;
  /** Whether to auto convert the Studio project to audio or not. */
  auto_convert?: boolean;
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EditProjectResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}/content` · `edit_project_content`</sub>

## `elevenlabs.convertProjectEndpoint`

Convert Studio Project

```ts
elevenlabs.convertProjectEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ConvertProjectResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}/convert` · `convert_project_endpoint`</sub>

## `elevenlabs.getProjectMutedTracksEndpoint`

Get Project Muted Tracks

```ts
elevenlabs.getProjectMutedTracksEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProjectMutedTracksResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/muted-tracks` · `get_project_muted_tracks_endpoint`</sub>

## `elevenlabs.updatePronunciationDictionaries`

Create Pronunciation Dictionaries

```ts
elevenlabs.updatePronunciationDictionaries(input: {
  /** A list of pronunciation dictionary locators (pronunciation_dictionary_id, version_id) encoded as a list of JSON strings for pronunciation dictionaries to be applied to the text. A list of json encoded strings is required as adding projects may occur through formData as opposed to jsonBody. To specify multiple dictionaries use multiple --form lines in your curl, such as --form 'pronunciation_dictionary_locators="{\"pronunciation_dictionary_id\":\"Vmd4Zor6fplcA7WrINey\",\"version_id\":\"hRPaxjlTdR7wFMhV4w0b\"}"' --form 'pronunciation_dictionary_locators="{\"pronunciation_dictionary_id\":\"JzWtcGQMJ6bnlWwyMo7e\",\"version_id\":\"lbmwxiLu4q6txYxgdZqn\"}"'. */
  pronunciation_dictionary_locators: (PronunciationDictionaryVersionLocatorDbModel)[];
  /** This will automatically mark text in this project for reconversion when the new dictionary applies or the old one no longer does. */
  invalidate_affected_text?: boolean;
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<CreatePronunciationDictionaryResponseModel>
```

<sub>`POST /v1/studio/projects/{project_id}/pronunciation-dictionaries` · `update_pronunciation_dictionaries`</sub>

## `elevenlabs.getProjectSnapshots`

List Studio Project Snapshots

```ts
elevenlabs.getProjectSnapshots(input: {
  /** The ID of the Studio project. */
  project_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProjectSnapshotsResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/snapshots` · `get_project_snapshots`</sub>

## `elevenlabs.getProjectSnapshotEndpoint`

Get Project Snapshot

```ts
elevenlabs.getProjectSnapshotEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the Studio project snapshot. */
  project_snapshot_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ProjectSnapshotExtendedResponseModel>
```

<sub>`GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}` · `get_project_snapshot_endpoint`</sub>

## `elevenlabs.streamProjectSnapshotArchiveEndpoint`

Stream Archive With Studio Project Audio

```ts
elevenlabs.streamProjectSnapshotArchiveEndpoint(input: {
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the Studio project snapshot. */
  project_snapshot_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive` · `stream_project_snapshot_archive_endpoint`</sub>

## `elevenlabs.streamProjectSnapshotAudioEndpoint`

Stream Studio Project Audio

```ts
elevenlabs.streamProjectSnapshotAudioEndpoint(input: {
  /** Whether to convert the audio to mpeg format. */
  convert_to_mpeg?: boolean;
  /** The ID of the Studio project. */
  project_id: string;
  /** The ID of the Studio project snapshot. */
  project_snapshot_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream` · `stream_project_snapshot_audio_endpoint`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

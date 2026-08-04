# Voices

14 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getLibraryVoices`

Get Voices

```ts
elevenlabs.getLibraryVoices(input: {
  /** How many shared voices to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Voice category used for filtering */
  category?: "professional" | "famous" | "high_quality";
  /** Gender used for filtering */
  gender?: string | null;
  /** Age used for filtering */
  age?: string | null;
  /** Accent used for filtering */
  accent?: string | null;
  /** Language used for filtering */
  language?: string | null;
  /** Locale used for filtering */
  locale?: string | null;
  /** Search term used for filtering */
  search?: string | null;
  /** Use-case used for filtering */
  use_cases?: (string)[] | null;
  /** Search term used for filtering */
  descriptives?: (string)[] | null;
  /** Filter featured voices */
  featured?: boolean;
  /** Filter voices with a minimum notice period of the given number of days. */
  min_notice_period_days?: number | null;
  /** Include/exclude voices with custom rates */
  include_custom_rates?: boolean | null;
  /** Include/exclude voices that are live moderated */
  include_live_moderated?: boolean | null;
  /** Filter voices that are enabled for the reader app */
  reader_app_enabled?: boolean;
  /** Filter voices by public owner ID */
  owner_id?: string | null;
  /** Sort criteria. Must be one of: created_date, usage_character_count_1y, trending, cloned_by_count. */
  sort?: "created_date" | "usage_character_count_1y" | "trending" | "cloned_by_count";
  page?: number;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetLibraryVoicesResponseModel>
```

<sub>`GET /v1/shared-voices` · `get_library_voices`</sub>

## `elevenlabs.getSimilarLibraryVoices`

Get Similar Library Voices

```ts
elevenlabs.getSimilarLibraryVoices(input: {
  audio_file?: string;
  /** Threshold for voice similarity between provided sample and library voices. Values range from 0 to 2. The smaller the value the more similar voices will be returned. */
  similarity_threshold?: number | null;
  /** Number of most similar voices to return. If similarity_threshold is provided, less than this number of voices may be returned. Values range from 1 to 100. */
  top_k?: number | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetLibraryVoicesResponseModel>
```

<sub>`POST /v1/similar-voices` · `get_similar_library_voices`</sub>

## `elevenlabs.getVoices`

List Voices

```ts
elevenlabs.getVoices(input: {
  /** If set to true, legacy premade voices will be included in responses from /v1/voices */
  show_legacy?: boolean | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetVoicesResponseModel>
```

<sub>`GET /v1/voices` · `get_voices`</sub>

## `elevenlabs.deleteVoice`

Delete Voice

```ts
elevenlabs.deleteVoice(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteVoiceResponseModel>
```

<sub>`DELETE /v1/voices/{voice_id}` · `delete_voice`</sub>

## `elevenlabs.getVoiceById`

Get Voice

```ts
elevenlabs.getVoiceById(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** This parameter is now deprecated. It is ignored and will be removed in a future version. */
  with_settings?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoiceResponseModel>
```

<sub>`GET /v1/voices/{voice_id}` · `get_voice_by_id`</sub>

## `elevenlabs.editVoice`

Edit Voice

```ts
elevenlabs.editVoice(input: {
  /** The name that identifies this voice. This will be displayed in the dropdown of the website. */
  name: string;
  /** Audio files to add to the voice */
  files?: (string)[];
  /** If set will remove background noise for voice samples using our audio isolation model. If the samples do not include background noise, it can make the quality worse. */
  remove_background_noise?: boolean;
  /** A description of the voice. */
  description?: string | null;
  /** Labels for the voice. Keys can be language, accent, gender, or age. */
  labels?: { [key: string]: string | undefined } | string | null;
  /** Run synchronous LLM moderation over the voice name and description when they change. Has no effect unless the voice_library_metadata_moderation feature flag is enabled for the user. */
  moderate_metadata?: boolean;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EditVoiceResponseModel>
```

<sub>`POST /v1/voices/{voice_id}/edit` · `edit_voice`</sub>

## `elevenlabs.replicateVoiceToIsolatedEnvironment`

Replicate Voice To Isolated Environment

```ts
elevenlabs.replicateVoiceToIsolatedEnvironment(input: {
  /** ID of the workspace to replicate the voice into. It must belong to the same consolidated billing group as the calling workspace; the target's data residency is derived from that link. */
  target_workspace_id: string;
  /** When true (default) the replicated voice keeps the same voice ID in the target residency; set to false to assign a new voice ID. */
  preserve_voice_id?: boolean;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ReplicateVoiceToIsolatedEnvironmentResponseModel>
```

<sub>`POST /v1/voices/{voice_id}/replicate-to-isolated-environment` · `replicate_voice_to_isolated_environment`</sub>

## `elevenlabs.getVoiceSettings`

Get Voice Settings

```ts
elevenlabs.getVoiceSettings(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoiceSettingsResponseModel>
```

<sub>`GET /v1/voices/{voice_id}/settings` · `get_voice_settings`</sub>

## `elevenlabs.editVoiceSettings`

Edit Voice Settings

```ts
elevenlabs.editVoiceSettings(input: {
  /** Determines how stable the voice is and the randomness between each generation. Lower values introduce broader emotional range for the voice. Higher values can result in a monotonous voice with limited emotion. */
  stability?: number | null;
  /** This setting boosts the similarity to the original speaker. Using this setting requires a slightly higher computational load, which in turn increases latency. */
  use_speaker_boost?: boolean | null;
  /** Determines how closely the AI should adhere to the original voice when attempting to replicate it. */
  similarity_boost?: number | null;
  /** Determines the style exaggeration of the voice. This setting attempts to amplify the style of the original speaker. It does consume additional computational resources and might increase latency if set to anything other than 0. */
  style?: number | null;
  /** Adjusts the speed of the voice. A value of 1.0 is the default speed, while values less than 1.0 slow down the speech, and values greater than 1.0 speed it up. */
  speed?: number | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<EditVoiceSettingsResponseModel>
```

<sub>`POST /v1/voices/{voice_id}/settings/edit` · `edit_voice_settings`</sub>

## `elevenlabs.getVoiceAccents`

Get Voice Accents

```ts
elevenlabs.getVoiceAccents(input: {
  /** If provided, only accents for this language code are returned. */
  language?: string | null;
  /** If provided, returns the accents available for this model. Defaults to the most complete accent list when omitted. */
  model_id?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetVoiceAccentsResponseModel>
```

<sub>`GET /v1/voices/accents` · `get_voice_accents`</sub>

## `elevenlabs.addVoice`

Add Voice

```ts
elevenlabs.addVoice(input: {
  /** The name that identifies this voice. This will be displayed in the dropdown of the website. */
  name: string;
  /** A list of file paths to audio recordings intended for voice cloning. */
  files: (string)[];
  /** If set will remove background noise for voice samples using our audio isolation model. If the samples do not include background noise, it can make the quality worse. */
  remove_background_noise?: boolean;
  /** A description of the voice. */
  description?: string | null;
  /** Labels for the voice. Keys can be language, accent, gender, or age. */
  labels?: { [key: string]: string | undefined } | string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddVoiceIvcResponseModel>
```

<sub>`POST /v1/voices/add` · `add_voice`</sub>

## `elevenlabs.addSharingVoice`

Add Shared Voice

```ts
elevenlabs.addSharingVoice(input: {
  /** The name that identifies this voice. This will be displayed in the dropdown of the website. */
  new_name: string;
  bookmarked?: boolean;
  /** Public user ID used to publicly identify ElevenLabs users. */
  public_user_id: string;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddVoiceResponseModel>
```

<sub>`POST /v1/voices/add/{public_user_id}/{voice_id}` · `add_sharing_voice`</sub>

## `elevenlabs.getVoiceSettingsDefault`

Get Default Voice Settings.

```ts
elevenlabs.getVoiceSettingsDefault(): Promise<VoiceSettingsResponseModel>
```

<sub>`GET /v1/voices/settings/default` · `get_voice_settings_default`</sub>

## `elevenlabs.getUserVoicesV2`

Get Voices V2

```ts
elevenlabs.getUserVoicesV2(input: {
  /** The next page token to use for pagination. Returned from the previous request. Use this in combination with the has_more flag for reliable pagination. */
  next_page_token?: string | null;
  /** How many voices to return at maximum. Can not exceed 100, defaults to 10. Page 0 may include more voices due to default voices being included. */
  page_size?: number;
  /** Search term to filter voices by. Searches in name, description, labels, category. */
  search?: string | null;
  /** Which field to sort by, one of 'created_at_unix' or 'name'. 'created_at_unix' may not be available for older voices. */
  sort?: string | null;
  /** Which direction to sort the voices in. 'asc' or 'desc'. */
  sort_direction?: string | null;
  /** Type of the voice to filter by. One of 'personal', 'community', 'default', 'workspace', 'non-default', 'non-community', 'saved'. 'non-default' is equal to all but 'default'. 'non-community' is equal to 'personal' and 'workspace' combined (excludes library copies). 'saved' is equal to non-default, but includes default voices if they have been added to a collection. */
  voice_type?: string | null;
  /** Category of the voice to filter by. One of 'premade', 'cloned', 'generated', 'professional' */
  category?: string | null;
  /** State of the voice's fine tuning to filter by. Applicable only to professional voices clones. One of 'draft', 'not_verified', 'not_started', 'queued', 'fine_tuning', 'fine_tuned', 'failed', 'delayed' */
  fine_tuning_state?: string | null;
  /** Collection ID to filter voices by. */
  collection_id?: string | null;
  /** Whether to include the total count of voices found in the response. NOTE: The total_count value is a live snapshot and may change between requests as users create, modify, or delete voices. For pagination, rely on the has_more flag instead. Only enable this when you actually need the total count (e.g., for display purposes), as it incurs a performance cost. */
  include_total_count?: boolean;
  /** Voice IDs to lookup by. Maximum 100 voice IDs. */
  voice_ids?: (string)[] | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetVoicesV2ResponseModel>
```

<sub>`GET /v2/voices` · `get_user_voices_v2`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

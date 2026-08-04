# Speech History

5 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.getSpeechHistory`

List Generated Items

```ts
elevenlabs.getSpeechHistory(input: {
  /** How many history items to return at maximum. Can not exceed 1000, defaults to 100. */
  page_size?: number;
  /** After which ID to start fetching, use this parameter to paginate across a large collection of history items. In case this parameter is not provided history items will be fetched starting from the most recently created one ordered descending by their creation date. */
  start_after_history_item_id?: string | null;
  /** Voice ID to be filtered for, you can use GET https://api.elevenlabs.io/v1/voices to receive a list of voices and their IDs. */
  voice_id?: string | null;
  /** Model ID to filter history items by. */
  model_id?: string | null;
  /** Unix timestamp to filter history items before this date (exclusive). */
  date_before_unix?: number | null;
  /** Unix timestamp to filter history items after this date (inclusive). */
  date_after_unix?: number | null;
  /** Sort direction for the results. */
  sort_direction?: "asc" | "desc" | null;
  /** search term used for filtering */
  search?: string | null;
  /** Source of the generated history item */
  source?: "TTS" | "STS" | "Flows" | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<GetSpeechHistoryResponseModel>
```

<sub>`GET /v1/history` · `get_speech_history`</sub>

## `elevenlabs.deleteSpeechHistoryItem`

Delete History Item

```ts
elevenlabs.deleteSpeechHistoryItem(input: {
  /** History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs. */
  history_item_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteHistoryItemResponse>
```

<sub>`DELETE /v1/history/{history_item_id}` · `delete_speech_history_item`</sub>

## `elevenlabs.getSpeechHistoryItemById`

Get History Item

```ts
elevenlabs.getSpeechHistoryItemById(input: {
  /** History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs. */
  history_item_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeechHistoryItemResponseModel>
```

<sub>`GET /v1/history/{history_item_id}` · `get_speech_history_item_by_id`</sub>

## `elevenlabs.getAudioFullFromSpeechHistoryItem`

Get Audio From History Item

```ts
elevenlabs.getAudioFullFromSpeechHistoryItem(input: {
  /** History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs. */
  history_item_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`GET /v1/history/{history_item_id}/audio` · `get_audio_full_from_speech_history_item`</sub>

## `elevenlabs.downloadSpeechHistoryItems`

Download History Items

```ts
elevenlabs.downloadSpeechHistoryItems(input: {
  /** A list of history items to download, you can get IDs of history items and other metadata using the GET https://api.elevenlabs.io/v1/history endpoint. */
  history_item_ids: (string)[];
  /** Output format to transcode the audio file, can be wav or default. */
  output_format?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<string>
```

<sub>`POST /v1/history/download` · `download_speech_history_items`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

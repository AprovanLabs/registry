# Speech Engine

5 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.listSpeechEngines`

List Speech Engines

```ts
elevenlabs.listSpeechEngines(input: {
  /** How many Speech Engines to return at maximum. Can not exceed 100, defaults to 30. */
  page_size?: number;
  /** Search term to filter Speech Engines by name */
  search?: string | null;
  /** The direction to sort the results */
  sort_direction?: SortDirection;
  /** The field to sort the results by */
  sort_by?: AgentSortBy | null;
  /** Used for fetching next page. Cursor is returned in the response. */
  cursor?: string | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<ListSpeechEnginesResponse>
```

<sub>`GET /v1/speech-engine` · `list_speech_engines`</sub>

## `elevenlabs.createSpeechEngine`

Create Speech Engine

```ts
elevenlabs.createSpeechEngine(input: {
  /** Name of the speech engine */
  name?: string;
  /** Speech engine WebSocket configuration */
  speech_engine: SpeechEngineConfig;
  /** ASR configuration */
  asr?: AsrConversationalConfig;
  /** TTS configuration */
  tts?: TtsConversationalConfigInput;
  /** Turn detection configuration */
  turn?: BaseTurnConfig;
  /** Configuration for voice activity detection */
  vad?: VadConfig;
  /** Conversation configuration (client events, etc.) */
  conversation?: ConversationConfigInput;
  /** Privacy settings (recording, retention, zero retention mode) */
  privacy?: PrivacyConfigInput;
  /** Concurrency and daily conversation limits for this speech engine */
  call_limits?: AgentCallLimits;
  /** Language for the speech engine */
  language?: string;
  /** Tags for categorization */
  tags?: (string)[];
  /** Override settings the client may set during conversation initiation */
  overrides?: SpeechEngineConversationInitiationClientDataConfig;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeechEngineResponse>
```

<sub>`POST /v1/speech-engine` · `create_speech_engine`</sub>

## `elevenlabs.deleteSpeechEngine`

Delete Speech Engine

```ts
elevenlabs.deleteSpeechEngine(input: {
  /** The speech engine ID (accepts seng_ or agent_ prefix) */
  speech_engine_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`DELETE /v1/speech-engine/{speech_engine_id}` · `delete_speech_engine`</sub>

## `elevenlabs.getSpeechEngine`

Get Speech Engine

```ts
elevenlabs.getSpeechEngine(input: {
  /** The speech engine ID (accepts seng_ or agent_ prefix) */
  speech_engine_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeechEngineResponse>
```

<sub>`GET /v1/speech-engine/{speech_engine_id}` · `get_speech_engine`</sub>

## `elevenlabs.updateSpeechEngine`

Update Speech Engine

```ts
elevenlabs.updateSpeechEngine(input: {
  name?: string | null;
  speech_engine?: SpeechEngineConfig | null;
  asr?: AsrConversationalConfig | null;
  tts?: TtsConversationalConfigInput | null;
  turn?: BaseTurnConfig | null;
  vad?: VadConfig | null;
  conversation?: ConversationConfigInput | null;
  privacy?: PrivacyConfigInput | null;
  call_limits?: AgentCallLimits | null;
  language?: string | null;
  tags?: (string)[] | null;
  overrides?: SpeechEngineConversationInitiationClientDataConfig | null;
  /** The speech engine ID (accepts seng_ or agent_ prefix) */
  speech_engine_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeechEngineResponse>
```

<sub>`PATCH /v1/speech-engine/{speech_engine_id}` · `update_speech_engine`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

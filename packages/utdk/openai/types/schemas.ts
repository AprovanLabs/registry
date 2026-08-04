export type AddUploadPartRequest = {
  /** The chunk of bytes for this Part.  */
  data: string;
};

/** Represents an individual Admin API key in an org. */
export type AdminApiKey = {
  /** The object type, which is always `organization.admin_api_key` */
  object: string;
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the API key */
  name: string;
  /** The redacted value of the API key */
  redacted_value: string;
  /** The value of the API key. Only shown on create. */
  value?: string;
  /** The Unix timestamp (in seconds) of when the API key was created */
  created_at: number;
  /** The Unix timestamp (in seconds) of when the API key was last used */
  last_used_at: number | null;
  owner: { type?: string; object?: string; id?: string; name?: string; created_at?: number; role?: string };
};

export type ApiKeyList = {
  object?: string;
  data?: (AdminApiKey)[];
  has_more?: boolean;
  first_id?: string;
  last_id?: string;
};

/** Represents an `assistant` that can call the model and use tools. */
export type AssistantObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `assistant`. */
  object: "assistant";
  /** The Unix timestamp (in seconds) for when the assistant was created. */
  created_at: number;
  /** The name of the assistant. The maximum length is 256 characters.  */
  name: string | null;
  /** The description of the assistant. The maximum length is 512 characters.  */
  description: string | null;
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.  */
  model: string;
  /** The system instructions that the assistant uses. The maximum length is 256,000 characters.  */
  instructions: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.  */
  tools: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[];
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
  metadata: Metadata;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or temperature but not both.  */
  top_p?: number | null;
  response_format?: AssistantsApiResponseFormatOption;
};

/** Represents an event emitted when streaming a Run.  Each event in a server-sent events stream has an `event` and `data` property:  ``` event: thread.created data: {"id": "thread_123", "object": "thread", ...} ```  We emit events whenever a new object is created, transitions to a new state, or is being streamed in parts (deltas). For example, we emit `thread.run.created` when a new run is created, `thread.run.completed` when a run completes, and so on. When an Assistant chooses to create a message during a run, we emit a `thread.message.created event`, a `thread.message.in_progress` event, many `thread.message.delta` events, and finally a `thread.message.completed` event.  We may add additional events over time, so we recommend handling unknown events gracefully in your code. See the [Assistants API quickstart](/docs/assistants/overview) to learn how to integrate the Assistants API with streaming. */
export type AssistantStreamEvent = ThreadStreamEvent | RunStreamEvent | RunStepStreamEvent | MessageStreamEvent | ErrorEvent | DoneEvent;

export type AssistantSupportedModels = "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "o3-mini" | "o3-mini-2025-01-31" | "o1" | "o1-2024-12-17" | "gpt-4o" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4.5-preview" | "gpt-4.5-preview-2025-02-27" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613";

export type AssistantToolsCode = {
  /** The type of tool being defined: `code_interpreter` */
  type: "code_interpreter";
};

export type AssistantToolsFileSearch = {
  /** The type of tool being defined: `file_search` */
  type: "file_search";
  /** Overrides for the file search tool. */
  file_search?: { max_num_results?: number; ranking_options?: FileSearchRankingOptions };
};

export type AssistantToolsFileSearchTypeOnly = {
  /** The type of tool being defined: `file_search` */
  type: "file_search";
};

export type AssistantToolsFunction = {
  /** The type of tool being defined: `function` */
  type: "function";
  function: FunctionObject;
};

/** Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models#gpt-4o), [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.  Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).  Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the message the model generates is valid JSON.  **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length. */
export type AssistantsApiResponseFormatOption = "auto" | ResponseFormatText | ResponseFormatJsonObject | ResponseFormatJsonSchema;

/** Controls which (if any) tool is called by the model. `none` means the model will not call any tools and instead generates a message. `auto` is the default value and means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools before responding to the user. Specifying a particular tool like `{"type": "file_search"}` or `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool. */
export type AssistantsApiToolChoiceOption = "none" | "auto" | "required" | AssistantsNamedToolChoice;

/** Specifies a tool the model should use. Use to force the model to call a specific tool. */
export type AssistantsNamedToolChoice = {
  /** The type of the tool. If type is `function`, the function name must be set */
  type: "function" | "code_interpreter" | "file_search";
  function?: { name: string };
};

/** The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`. For `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`, the only supported format is `json`. */
export type AudioResponseFormat = "json" | "text" | "srt" | "verbose_json" | "vtt";

/** A log of a user action or configuration change within this organization. */
export type AuditLog = {
  /** The ID of this log. */
  id: string;
  type: AuditLogEventType;
  /** The Unix timestamp (in seconds) of the event. */
  effective_at: number;
  /** The project that the action was scoped to. Absent for actions not scoped to projects. */
  project?: { id?: string; name?: string };
  actor: AuditLogActor;
  /** The details for events with this `type`. */
  "api_key.created"?: { id?: string; data?: { scopes?: (string)[] } };
  /** The details for events with this `type`. */
  "api_key.updated"?: { id?: string; changes_requested?: { scopes?: (string)[] } };
  /** The details for events with this `type`. */
  "api_key.deleted"?: { id?: string };
  /** The project and fine-tuned model checkpoint that the checkpoint permission was created for. */
  "checkpoint_permission.created"?: { id?: string; data?: { project_id?: string; fine_tuned_model_checkpoint?: string } };
  /** The details for events with this `type`. */
  "checkpoint_permission.deleted"?: { id?: string };
  /** The details for events with this `type`. */
  "invite.sent"?: { id?: string; data?: { email?: string; role?: string } };
  /** The details for events with this `type`. */
  "invite.accepted"?: { id?: string };
  /** The details for events with this `type`. */
  "invite.deleted"?: { id?: string };
  /** The details for events with this `type`. */
  "login.failed"?: { error_code?: string; error_message?: string };
  /** The details for events with this `type`. */
  "logout.failed"?: { error_code?: string; error_message?: string };
  /** The details for events with this `type`. */
  "organization.updated"?: { id?: string; changes_requested?: { title?: string; description?: string; name?: string; settings?: { threads_ui_visibility?: string; usage_dashboard_visibility?: string } } };
  /** The details for events with this `type`. */
  "project.created"?: { id?: string; data?: { name?: string; title?: string } };
  /** The details for events with this `type`. */
  "project.updated"?: { id?: string; changes_requested?: { title?: string } };
  /** The details for events with this `type`. */
  "project.archived"?: { id?: string };
  /** The details for events with this `type`. */
  "rate_limit.updated"?: { id?: string; changes_requested?: { max_requests_per_1_minute?: number; max_tokens_per_1_minute?: number; max_images_per_1_minute?: number; max_audio_megabytes_per_1_minute?: number; max_requests_per_1_day?: number; batch_1_day_max_input_tokens?: number } };
  /** The details for events with this `type`. */
  "rate_limit.deleted"?: { id?: string };
  /** The details for events with this `type`. */
  "service_account.created"?: { id?: string; data?: { role?: string } };
  /** The details for events with this `type`. */
  "service_account.updated"?: { id?: string; changes_requested?: { role?: string } };
  /** The details for events with this `type`. */
  "service_account.deleted"?: { id?: string };
  /** The details for events with this `type`. */
  "user.added"?: { id?: string; data?: { role?: string } };
  /** The details for events with this `type`. */
  "user.updated"?: { id?: string; changes_requested?: { role?: string } };
  /** The details for events with this `type`. */
  "user.deleted"?: { id?: string };
  /** The details for events with this `type`. */
  "certificate.created"?: { id?: string; name?: string };
  /** The details for events with this `type`. */
  "certificate.updated"?: { id?: string; name?: string };
  /** The details for events with this `type`. */
  "certificate.deleted"?: { id?: string; name?: string; certificate?: string };
  /** The details for events with this `type`. */
  "certificates.activated"?: { certificates?: ({ id?: string; name?: string })[] };
  /** The details for events with this `type`. */
  "certificates.deactivated"?: { certificates?: ({ id?: string; name?: string })[] };
};

/** The actor who performed the audit logged action. */
export type AuditLogActor = {
  /** The type of actor. Is either `session` or `api_key`. */
  type?: "session" | "api_key";
  session?: AuditLogActorSession;
  api_key?: AuditLogActorApiKey;
};

/** The API Key used to perform the audit logged action. */
export type AuditLogActorApiKey = {
  /** The tracking id of the API key. */
  id?: string;
  /** The type of API key. Can be either `user` or `service_account`. */
  type?: "user" | "service_account";
  user?: AuditLogActorUser;
  service_account?: AuditLogActorServiceAccount;
};

/** The service account that performed the audit logged action. */
export type AuditLogActorServiceAccount = {
  /** The service account id. */
  id?: string;
};

/** The session in which the audit logged action was performed. */
export type AuditLogActorSession = {
  user?: AuditLogActorUser;
  /** The IP address from which the action was performed. */
  ip_address?: string;
};

/** The user who performed the audit logged action. */
export type AuditLogActorUser = {
  /** The user id. */
  id?: string;
  /** The user email. */
  email?: string;
};

/** The event type. */
export type AuditLogEventType = "api_key.created" | "api_key.updated" | "api_key.deleted" | "checkpoint_permission.created" | "checkpoint_permission.deleted" | "invite.sent" | "invite.accepted" | "invite.deleted" | "login.succeeded" | "login.failed" | "logout.succeeded" | "logout.failed" | "organization.updated" | "project.created" | "project.updated" | "project.archived" | "service_account.created" | "service_account.updated" | "service_account.deleted" | "rate_limit.updated" | "rate_limit.deleted" | "user.added" | "user.updated" | "user.deleted";

/** The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`. */
export type AutoChunkingStrategyRequestParam = {
  /** Always `auto`. */
  type: "auto";
};

export type Batch = {
  id: string;
  /** The object type, which is always `batch`. */
  object: "batch";
  /** The OpenAI API endpoint used by the batch. */
  endpoint: string;
  errors?: { object?: string; data?: ({ code?: string; message?: string; param?: string | null; line?: number | null })[] };
  /** The ID of the input file for the batch. */
  input_file_id: string;
  /** The time frame within which the batch should be processed. */
  completion_window: string;
  /** The current status of the batch. */
  status: "validating" | "failed" | "in_progress" | "finalizing" | "completed" | "expired" | "cancelling" | "cancelled";
  /** The ID of the file containing the outputs of successfully executed requests. */
  output_file_id?: string;
  /** The ID of the file containing the outputs of requests with errors. */
  error_file_id?: string;
  /** The Unix timestamp (in seconds) for when the batch was created. */
  created_at: number;
  /** The Unix timestamp (in seconds) for when the batch started processing. */
  in_progress_at?: number;
  /** The Unix timestamp (in seconds) for when the batch will expire. */
  expires_at?: number;
  /** The Unix timestamp (in seconds) for when the batch started finalizing. */
  finalizing_at?: number;
  /** The Unix timestamp (in seconds) for when the batch was completed. */
  completed_at?: number;
  /** The Unix timestamp (in seconds) for when the batch failed. */
  failed_at?: number;
  /** The Unix timestamp (in seconds) for when the batch expired. */
  expired_at?: number;
  /** The Unix timestamp (in seconds) for when the batch started cancelling. */
  cancelling_at?: number;
  /** The Unix timestamp (in seconds) for when the batch was cancelled. */
  cancelled_at?: number;
  /** The request counts for different statuses within the batch. */
  request_counts?: { total: number; completed: number; failed: number };
  metadata?: Metadata;
};

/** The per-line object of the batch input file */
export type BatchRequestInput = {
  /** A developer-provided per-request id that will be used to match outputs to inputs. Must be unique for each request in a batch. */
  custom_id?: string;
  /** The HTTP method to be used for the request. Currently only `POST` is supported. */
  method?: "POST";
  /** The OpenAI API relative URL to be used for the request. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. */
  url?: string;
};

/** The per-line object of the batch output and error files */
export type BatchRequestOutput = {
  id?: string;
  /** A developer-provided per-request id that will be used to match outputs to inputs. */
  custom_id?: string;
  response?: { status_code?: number; request_id?: string; body?: { [key: string]: unknown } } | null;
  /** For requests that failed with a non-HTTP error, this will contain more information on the cause of the failure. */
  error?: { code?: string; message?: string } | null;
};

/** Represents an individual `certificate` uploaded to the organization. */
export type Certificate = {
  /** The object type.  - If creating, updating, or getting a specific certificate, the object type is `certificate`. - If listing, activating, or deactivating certificates for the organization, the object type is `organization.certificate`. - If listing, activating, or deactivating certificates for a project, the object type is `organization.project.certificate`.  */
  object: "certificate" | "organization.certificate" | "organization.project.certificate";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the certificate. */
  name: string;
  /** The Unix timestamp (in seconds) of when the certificate was uploaded. */
  created_at: number;
  certificate_details: { valid_at?: number; expires_at?: number; content?: string };
  /** Whether the certificate is currently active at the specified scope. Not returned when getting details for a specific certificate. */
  active?: boolean;
};

export type ChatCompletionDeleted = {
  /** The type of object being deleted. */
  object: "chat.completion.deleted";
  /** The ID of the chat completion that was deleted. */
  id: string;
  /** Whether the chat completion was deleted. */
  deleted: boolean;
};

/** Specifying a particular function via `{"name": "my_function"}` forces the model to call that function. */
export type ChatCompletionFunctionCallOption = {
  /** The name of the function to call. */
  name: string;
};

export type ChatCompletionFunctions = {
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  parameters?: FunctionParameters;
};

/** An object representing a list of Chat Completions. */
export type ChatCompletionList = {
  /** The type of this object. It is always set to "list".  */
  object: "list";
  /** An array of chat completion objects.  */
  data: (CreateChatCompletionResponse)[];
  /** The identifier of the first chat completion in the data array. */
  first_id: string;
  /** The identifier of the last chat completion in the data array. */
  last_id: string;
  /** Indicates whether there are more Chat Completions available. */
  has_more: boolean;
};

/** An object representing a list of chat completion messages. */
export type ChatCompletionMessageList = {
  /** The type of this object. It is always set to "list".  */
  object: "list";
  /** An array of chat completion message objects.  */
  data: (ChatCompletionResponseMessage & { id: string })[];
  /** The identifier of the first chat message in the data array. */
  first_id: string;
  /** The identifier of the last chat message in the data array. */
  last_id: string;
  /** Indicates whether there are more chat messages available. */
  has_more: boolean;
};

export type ChatCompletionMessageToolCall = {
  /** The ID of the tool call. */
  id: string;
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  /** The function that the model called. */
  function: { name: string; arguments: string };
};

export type ChatCompletionMessageToolCallChunk = {
  index: number;
  /** The ID of the tool call. */
  id?: string;
  /** The type of the tool. Currently, only `function` is supported. */
  type?: "function";
  function?: { name?: string; arguments?: string };
};

/** The tool calls generated by the model, such as function calls. */
export type ChatCompletionMessageToolCalls = (ChatCompletionMessageToolCall)[];

/** Output types that you would like the model to generate for this request. Most models are capable of generating text, which is the default:  `["text"]`  The `gpt-4o-audio-preview` model can also be used to [generate audio](/docs/guides/audio). To request that this model generate both text and audio responses, you can use:  `["text", "audio"]` */
export type ChatCompletionModalities = ("text" | "audio")[] | null;

/** Specifies a tool the model should use. Use to force the model to call a specific function. */
export type ChatCompletionNamedToolChoice = {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  function: { name: string };
};

/** Messages sent by the model in response to user messages. */
export type ChatCompletionRequestAssistantMessage = {
  /** The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.  */
  content?: string | (ChatCompletionRequestAssistantMessageContentPart)[] | null;
  /** The refusal message by the assistant. */
  refusal?: string | null;
  /** The role of the messages author, in this case `assistant`. */
  role: "assistant";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
  /** Data about a previous audio response from the model.  [Learn more](/docs/guides/audio).  */
  audio?: { id: string } | null;
  tool_calls?: ChatCompletionMessageToolCalls;
  /** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
  function_call?: { arguments: string; name: string } | null;
};

export type ChatCompletionRequestAssistantMessageContentPart = ChatCompletionRequestMessageContentPartText | ChatCompletionRequestMessageContentPartRefusal;

/** Developer-provided instructions that the model should follow, regardless of messages sent by the user. With o1 models and newer, `developer` messages replace the previous `system` messages. */
export type ChatCompletionRequestDeveloperMessage = {
  /** The contents of the developer message. */
  content: string | (ChatCompletionRequestMessageContentPartText)[];
  /** The role of the messages author, in this case `developer`. */
  role: "developer";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};

export type ChatCompletionRequestFunctionMessage = {
  /** The role of the messages author, in this case `function`. */
  role: "function";
  /** The contents of the function message. */
  content: string | null;
  /** The name of the function to call. */
  name: string;
};

export type ChatCompletionRequestMessage = ChatCompletionRequestDeveloperMessage | ChatCompletionRequestSystemMessage | ChatCompletionRequestUserMessage | ChatCompletionRequestAssistantMessage | ChatCompletionRequestToolMessage | ChatCompletionRequestFunctionMessage;

/** Learn about [audio inputs](/docs/guides/audio). */
export type ChatCompletionRequestMessageContentPartAudio = {
  /** The type of the content part. Always `input_audio`. */
  type: "input_audio";
  input_audio: { data: string; format: "wav" | "mp3" };
};

/** Learn about [file inputs](/docs/guides/text) for text generation. */
export type ChatCompletionRequestMessageContentPartFile = {
  /** The type of the content part. Always `file`. */
  type: "file";
  file: { filename?: string; file_data?: string; file_id?: string };
};

/** Learn about [image inputs](/docs/guides/vision). */
export type ChatCompletionRequestMessageContentPartImage = {
  /** The type of the content part. */
  type: "image_url";
  image_url: { url: string; detail?: "auto" | "low" | "high" };
};

export type ChatCompletionRequestMessageContentPartRefusal = {
  /** The type of the content part. */
  type: "refusal";
  /** The refusal message generated by the model. */
  refusal: string;
};

/** Learn about [text inputs](/docs/guides/text-generation). */
export type ChatCompletionRequestMessageContentPartText = {
  /** The type of the content part. */
  type: "text";
  /** The text content. */
  text: string;
};

/** Developer-provided instructions that the model should follow, regardless of messages sent by the user. With o1 models and newer, use `developer` messages for this purpose instead. */
export type ChatCompletionRequestSystemMessage = {
  /** The contents of the system message. */
  content: string | (ChatCompletionRequestSystemMessageContentPart)[];
  /** The role of the messages author, in this case `system`. */
  role: "system";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};

export type ChatCompletionRequestSystemMessageContentPart = ChatCompletionRequestMessageContentPartText;

export type ChatCompletionRequestToolMessage = {
  /** The role of the messages author, in this case `tool`. */
  role: "tool";
  /** The contents of the tool message. */
  content: string | (ChatCompletionRequestToolMessageContentPart)[];
  /** Tool call that this message is responding to. */
  tool_call_id: string;
};

export type ChatCompletionRequestToolMessageContentPart = ChatCompletionRequestMessageContentPartText;

/** Messages sent by an end user, containing prompts or additional context information. */
export type ChatCompletionRequestUserMessage = {
  /** The contents of the user message.  */
  content: string | (ChatCompletionRequestUserMessageContentPart)[];
  /** The role of the messages author, in this case `user`. */
  role: "user";
  /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
  name?: string;
};

export type ChatCompletionRequestUserMessageContentPart = ChatCompletionRequestMessageContentPartText | ChatCompletionRequestMessageContentPartImage | ChatCompletionRequestMessageContentPartAudio | ChatCompletionRequestMessageContentPartFile;

/** A chat completion message generated by the model. */
export type ChatCompletionResponseMessage = {
  /** The contents of the message. */
  content: string | null;
  /** The refusal message generated by the model. */
  refusal: string | null;
  tool_calls?: ChatCompletionMessageToolCalls;
  /** Annotations for the message, when applicable, as when using the [web search tool](/docs/guides/tools-web-search?api-mode=chat).  */
  annotations?: ({ type: "url_citation"; url_citation: { end_index: number; start_index: number; url: string; title: string } })[];
  /** The role of the author of this message. */
  role: "assistant";
  /** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
  function_call?: { arguments: string; name: string };
  /** If the audio output modality is requested, this object contains data about the audio response from the model. [Learn more](/docs/guides/audio).  */
  audio?: { id: string; expires_at: number; data: string; transcript: string } | null;
};

/** The role of the author of a message */
export type ChatCompletionRole = "developer" | "system" | "user" | "assistant" | "tool" | "function";

/** Options for streaming response. Only set this when you set `stream: true`. */
export type ChatCompletionStreamOptions = {
  /** If set, an additional chunk will be streamed before the `data: [DONE]` message. The `usage` field on this chunk shows the token usage statistics for the entire request, and the `choices` field will always be an empty array.   All other chunks will also include a `usage` field, but with a null value. **NOTE:** If the stream is interrupted, you may not receive the final usage chunk which contains the total token usage for the request.  */
  include_usage?: boolean;
};

/** A chat completion delta generated by streamed model responses. */
export type ChatCompletionStreamResponseDelta = {
  /** The contents of the chunk message. */
  content?: string | null;
  /** Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model. */
  function_call?: { arguments?: string; name?: string };
  tool_calls?: (ChatCompletionMessageToolCallChunk)[];
  /** The role of the author of this message. */
  role?: "developer" | "system" | "user" | "assistant" | "tool";
  /** The refusal message generated by the model. */
  refusal?: string | null;
};

export type ChatCompletionTokenLogprob = {
  /** The token. */
  token: string;
  /** The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
  bytes: (number)[] | null;
  /** List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. */
  top_logprobs: ({ token: string; logprob: number; bytes: (number)[] | null })[];
};

export type ChatCompletionTool = {
  /** The type of the tool. Currently, only `function` is supported. */
  type: "function";
  function: FunctionObject;
};

/** Controls which (if any) tool is called by the model. `none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools. Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.  `none` is the default when no tools are present. `auto` is the default if tools are present. */
export type ChatCompletionToolChoiceOption = "none" | "auto" | "required" | ChatCompletionNamedToolChoice;

/** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
export type ChunkingStrategyRequestParam = AutoChunkingStrategyRequestParam | StaticChunkingStrategyRequestParam;

/** A click action. */
export type Click = {
  /** Specifies the event type. For a click action, this property is  always set to `click`.  */
  type: "click";
  /** Indicates which mouse button was pressed during the click. One of `left`, `right`, `wheel`, `back`, or `forward`.  */
  button: "left" | "right" | "wheel" | "back" | "forward";
  /** The x-coordinate where the click occurred.  */
  x: number;
  /** The y-coordinate where the click occurred.  */
  y: number;
};

/** The output of a code interpreter tool call that is a file. */
export type CodeInterpreterFileOutput = {
  /** The type of the code interpreter file output. Always `files`.  */
  type: "files";
  files: ({ mime_type: string; file_id: string })[];
};

/** The output of a code interpreter tool call that is text. */
export type CodeInterpreterTextOutput = {
  /** The type of the code interpreter text output. Always `logs`.  */
  type: "logs";
  /** The logs of the code interpreter tool call.  */
  logs: string;
};

/** A tool call to run code. */
export type CodeInterpreterToolCall = {
  /** The unique ID of the code interpreter tool call.  */
  id: string;
  /** The type of the code interpreter tool call. Always `code_interpreter_call`.  */
  type: "code_interpreter_call";
  /** The code to run.  */
  code: string;
  /** The status of the code interpreter tool call.  */
  status: "in_progress" | "interpreting" | "completed";
  /** The results of the code interpreter tool call.  */
  results: (CodeInterpreterToolOutput)[];
};

export type CodeInterpreterToolOutput = CodeInterpreterTextOutput | CodeInterpreterFileOutput;

/** A filter used to compare a specified attribute key to a given value using a defined comparison operation. */
export type ComparisonFilter = {
  /** Specifies the comparison operator: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`. - `eq`: equals - `ne`: not equal - `gt`: greater than - `gte`: greater than or equal - `lt`: less than - `lte`: less than or equal  */
  type: "eq" | "ne" | "gt" | "gte" | "lt" | "lte";
  /** The key to compare against the value. */
  key: string;
  /** The value to compare against the attribute key; supports string, number, or boolean types. */
  value: string | number | boolean;
};

export type CompleteUploadRequest = {
  /** The ordered list of Part IDs.  */
  part_ids: (string)[];
  /** The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.  */
  md5?: string;
};

/** Usage statistics for the completion request. */
export type CompletionUsage = {
  /** Number of tokens in the generated completion. */
  completion_tokens: number;
  /** Number of tokens in the prompt. */
  prompt_tokens: number;
  /** Total number of tokens used in the request (prompt + completion). */
  total_tokens: number;
  /** Breakdown of tokens used in a completion. */
  completion_tokens_details?: { accepted_prediction_tokens?: number; audio_tokens?: number; reasoning_tokens?: number; rejected_prediction_tokens?: number };
  /** Breakdown of tokens used in the prompt. */
  prompt_tokens_details?: { audio_tokens?: number; cached_tokens?: number };
};

/** Combine multiple filters using `and` or `or`. */
export type CompoundFilter = {
  /** Type of operation: `and` or `or`. */
  type: "and" | "or";
  /** Array of filters to combine. Items can be `ComparisonFilter` or `CompoundFilter`. */
  filters: (ComparisonFilter | unknown)[];
};

export type ComputerAction = Click | DoubleClick | Drag | KeyPress | Move | Screenshot | Scroll | Type | Wait;

/** A computer screenshot image used with the computer use tool. */
export type ComputerScreenshotImage = {
  /** Specifies the event type. For a computer screenshot, this property is  always set to `computer_screenshot`.  */
  type: "computer_screenshot";
  /** The URL of the screenshot image. */
  image_url?: string;
  /** The identifier of an uploaded file that contains the screenshot. */
  file_id?: string;
};

/** A tool call to a computer use tool. See the  [computer use guide](/docs/guides/tools-computer-use) for more information. */
export type ComputerToolCall = {
  /** The type of the computer call. Always `computer_call`. */
  type: "computer_call";
  /** The unique ID of the computer call. */
  id: string;
  /** An identifier used when responding to the tool call with output.  */
  call_id: string;
  action: ComputerAction;
  /** The pending safety checks for the computer call.  */
  pending_safety_checks: (ComputerToolCallSafetyCheck)[];
  /** The status of the item. One of `in_progress`, `completed`, or `incomplete`. Populated when items are returned via API.  */
  status: "in_progress" | "completed" | "incomplete";
};

/** The output of a computer tool call. */
export type ComputerToolCallOutput = {
  /** The type of the computer tool call output. Always `computer_call_output`.  */
  type: "computer_call_output";
  /** The ID of the computer tool call output.  */
  id?: string;
  /** The ID of the computer tool call that produced the output.  */
  call_id: string;
  /** The safety checks reported by the API that have been acknowledged by the  developer.  */
  acknowledged_safety_checks?: (ComputerToolCallSafetyCheck)[];
  output: ComputerScreenshotImage;
  /** The status of the message input. One of `in_progress`, `completed`, or `incomplete`. Populated when input items are returned via API.  */
  status?: "in_progress" | "completed" | "incomplete";
};

export type ComputerToolCallOutputResource = ComputerToolCallOutput & { id: string };

/** A pending safety check for the computer call. */
export type ComputerToolCallSafetyCheck = {
  /** The ID of the pending safety check. */
  id: string;
  /** The type of the pending safety check. */
  code: string;
  /** Details about the pending safety check. */
  message: string;
};

/** Multi-modal input and output contents. */
export type Content = InputContent | OutputContent;

/** An x/y coordinate pair, e.g. `{ x: 100, y: 200 }`. */
export type Coordinate = {
  /** The x-coordinate.  */
  x: number;
  /** The y-coordinate.  */
  y: number;
};

/** The aggregated costs details of the specific time bucket. */
export type CostsResult = {
  object: "organization.costs.result";
  /** The monetary value in its associated currency. */
  amount?: { value?: number; currency?: string };
  /** When `group_by=line_item`, this field provides the line item of the grouped costs result. */
  line_item?: string | null;
  /** When `group_by=project_id`, this field provides the project ID of the grouped costs result. */
  project_id?: string | null;
};

export type CreateAssistantRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.  */
  model: string | AssistantSupportedModels;
  /** The name of the assistant. The maximum length is 256 characters.  */
  name?: string | null;
  /** The description of the assistant. The maximum length is 512 characters.  */
  description?: string | null;
  /** The system instructions that the assistant uses. The maximum length is 256,000 characters.  */
  instructions?: string | null;
  reasoning_effort?: ReasoningEffort;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.  */
  tools?: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[];
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: unknown | unknown } | null;
  metadata?: Metadata;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or temperature but not both.  */
  top_p?: number | null;
  response_format?: AssistantsApiResponseFormatOption;
};

export type CreateChatCompletionRequest = CreateModelResponseProperties & { messages: (ChatCompletionRequestMessage)[]; model: ModelIdsShared; modalities?: ResponseModalities; reasoning_effort?: ReasoningEffort; max_completion_tokens?: number | null; frequency_penalty?: number | null; presence_penalty?: number | null; web_search_options?: { user_location?: { type: "approximate"; approximate: WebSearchLocation } | null; search_context_size?: WebSearchContextSize }; top_logprobs?: number | null; response_format?: ResponseFormatText | ResponseFormatJsonSchema | ResponseFormatJsonObject; audio?: { voice: VoiceIdsShared; format: "wav" | "aac" | "mp3" | "flac" | "opus" | "pcm16" } | null; store?: boolean | null; stream?: boolean | null; stop?: StopConfiguration; logit_bias?: { [key: string]: number | undefined } | null; logprobs?: boolean | null; max_tokens?: number | null; n?: number | null; prediction?: PredictionContent | null; seed?: number | null; stream_options?: ChatCompletionStreamOptions; tools?: (ChatCompletionTool)[]; tool_choice?: ChatCompletionToolChoiceOption; parallel_tool_calls?: ParallelToolCalls; function_call?: "none" | "auto" | ChatCompletionFunctionCallOption; functions?: (ChatCompletionFunctions)[] };

/** Represents a chat completion response returned by model, based on the provided input. */
export type CreateChatCompletionResponse = {
  /** A unique identifier for the chat completion. */
  id: string;
  /** A list of chat completion choices. Can be more than one if `n` is greater than 1. */
  choices: ({ finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call"; index: number; message: ChatCompletionResponseMessage; logprobs: { content: (ChatCompletionTokenLogprob)[] | null; refusal: (ChatCompletionTokenLogprob)[] | null } | null })[];
  /** The Unix timestamp (in seconds) of when the chat completion was created. */
  created: number;
  /** The model used for the chat completion. */
  model: string;
  service_tier?: ServiceTier;
  /** This fingerprint represents the backend configuration that the model runs with.  Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.  */
  system_fingerprint?: string;
  /** The object type, which is always `chat.completion`. */
  object: "chat.completion";
  usage?: CompletionUsage;
};

/** Represents a streamed chunk of a chat completion response returned by the model, based on the provided input.  [Learn more](/docs/guides/streaming-responses). */
export type CreateChatCompletionStreamResponse = {
  /** A unique identifier for the chat completion. Each chunk has the same ID. */
  id: string;
  /** A list of chat completion choices. Can contain more than one elements if `n` is greater than 1. Can also be empty for the last chunk if you set `stream_options: {"include_usage": true}`.  */
  choices: ({ delta: ChatCompletionStreamResponseDelta; logprobs?: { content: (ChatCompletionTokenLogprob)[] | null; refusal: (ChatCompletionTokenLogprob)[] | null } | null; finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call" | null; index: number })[];
  /** The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp. */
  created: number;
  /** The model to generate the completion. */
  model: string;
  service_tier?: ServiceTier;
  /** This fingerprint represents the backend configuration that the model runs with. Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.  */
  system_fingerprint?: string;
  /** The object type, which is always `chat.completion.chunk`. */
  object: "chat.completion.chunk";
  /** An optional field that will only be present when you set `stream_options: {"include_usage": true}` in your request. When present, it contains a null value **except for the last chunk** which contains the token usage statistics for the entire request.  **NOTE:** If the stream is interrupted or cancelled, you may not receive the final usage chunk which contains the total token usage for the request.  */
  usage?: CompletionUsage;
};

export type CreateCompletionRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.  */
  model: string | "gpt-3.5-turbo-instruct" | "davinci-002" | "babbage-002";
  /** The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.  Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.  */
  prompt: string | (string)[] | (number)[] | ((number)[])[] | null;
  /** Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.  When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.  */
  best_of?: number | null;
  /** Echo back the prompt in addition to the completion  */
  echo?: boolean | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/guides/text-generation)  */
  frequency_penalty?: number | null;
  /** Modify the likelihood of specified tokens appearing in the completion.  Accepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.  */
  logit_bias?: { [key: string]: number | undefined } | null;
  /** Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5.  */
  logprobs?: number | null;
  /** The maximum number of [tokens](/tokenizer) that can be generated in the completion.  The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.  */
  max_tokens?: number | null;
  /** How many completions to generate for each prompt.  **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.  */
  n?: number | null;
  /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/guides/text-generation)  */
  presence_penalty?: number | null;
  /** If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.  Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.  */
  seed?: number | null;
  stop?: StopConfiguration;
  /** Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).  */
  stream?: boolean | null;
  stream_options?: ChatCompletionStreamOptions;
  /** The suffix that comes after a completion of inserted text.  This parameter is only supported for `gpt-3.5-turbo-instruct`.  */
  suffix?: string | null;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.  */
  top_p?: number | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
};

/** Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint). */
export type CreateCompletionResponse = {
  /** A unique identifier for the completion. */
  id: string;
  /** The list of completion choices the model generated for the input prompt. */
  choices: ({ finish_reason: "stop" | "length" | "content_filter"; index: number; logprobs: { text_offset?: (number)[]; token_logprobs?: (number)[]; tokens?: (string)[]; top_logprobs?: ({ [key: string]: number | undefined })[] } | null; text: string })[];
  /** The Unix timestamp (in seconds) of when the completion was created. */
  created: number;
  /** The model used for completion. */
  model: string;
  /** This fingerprint represents the backend configuration that the model runs with.  Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.  */
  system_fingerprint?: string;
  /** The object type, which is always "text_completion" */
  object: "text_completion";
  usage?: CompletionUsage;
};

export type CreateEmbeddingRequest = {
  /** Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.  */
  input: string | (string)[] | (number)[] | ((number)[])[];
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.  */
  model: string | "text-embedding-ada-002" | "text-embedding-3-small" | "text-embedding-3-large";
  /** The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/). */
  encoding_format?: "float" | "base64";
  /** The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.  */
  dimensions?: number;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
};

export type CreateEmbeddingResponse = {
  /** The list of embeddings generated by the model. */
  data: (Embedding)[];
  /** The name of the model used to generate the embedding. */
  model: string;
  /** The object type, which is always "list". */
  object: "list";
  /** The usage information for the request. */
  usage: { prompt_tokens: number; total_tokens: number };
};

/** A CompletionsRunDataSource object describing a model sampling configuration. */
export type CreateEvalCompletionsRunDataSource = {
  /** The type of run data source. Always `completions`. */
  type: "completions";
  input_messages?: { type: "template"; template: (EasyInputMessage | EvalItem)[] } | { type: "item_reference"; item_reference: string };
  sampling_params?: { temperature?: number; max_completion_tokens?: number; top_p?: number; seed?: number };
  /** The name of the model to use for generating completions (e.g. "o3-mini"). */
  model?: string;
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource | EvalStoredCompletionsSource;
};

/** A CustomDataSourceConfig object that defines the schema for the data source used for the evaluation runs. This schema is used to define the shape of the data that will be: - Used to define your testing criteria and - What data is required when creating a run */
export type CreateEvalCustomDataSourceConfig = {
  /** The type of data source. Always `custom`. */
  type: "custom";
  /** The json schema for each row in the data source. */
  item_schema: { [key: string]: unknown };
  /** Whether the eval should expect you to populate the sample namespace (ie, by generating responses off of your data source) */
  include_sample_schema?: boolean;
};

/** A chat message that makes up the prompt or context. May include variable references to the "item" namespace, ie {{item.name}}. */
export type CreateEvalItem = { role: string; content: string } | EvalItem;

/** A JsonlRunDataSource object with that specifies a JSONL file that matches the eval */
export type CreateEvalJsonlRunDataSource = {
  /** The type of data source. Always `jsonl`. */
  type: "jsonl";
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource;
};

/** A LabelModelGrader object which uses a model to assign labels to each item in the evaluation. */
export type CreateEvalLabelModelGrader = {
  /** The object type, which is always `label_model`. */
  type: "label_model";
  /** The name of the grader. */
  name: string;
  /** The model to use for the evaluation. Must support structured outputs. */
  model: string;
  /** A list of chat messages forming the prompt or context. May include variable references to the "item" namespace, ie {{item.name}}. */
  input: (CreateEvalItem)[];
  /** The labels to classify to each item in the evaluation. */
  labels: (string)[];
  /** The labels that indicate a passing result. Must be a subset of labels. */
  passing_labels: (string)[];
};

/** A data source config which specifies the metadata property of your stored completions query. This is usually metadata like `usecase=chatbot` or `prompt-version=v2`, etc. */
export type CreateEvalLogsDataSourceConfig = {
  /** The type of data source. Always `logs`. */
  type: "logs";
  /** Metadata filters for the logs data source. */
  metadata?: { [key: string]: unknown };
};

export type CreateEvalRequest = {
  /** The name of the evaluation. */
  name?: string;
  metadata?: Metadata;
  /** The configuration for the data source used for the evaluation runs. */
  data_source_config: CreateEvalCustomDataSourceConfig | CreateEvalLogsDataSourceConfig;
  /** A list of graders for all eval runs in this group. */
  testing_criteria: (CreateEvalLabelModelGrader | EvalStringCheckGrader | EvalTextSimilarityGrader | EvalPythonGrader | EvalScoreModelGrader)[];
};

/** A ResponsesRunDataSource object describing a model sampling configuration. */
export type CreateEvalResponsesRunDataSource = {
  /** The type of run data source. Always `completions`. */
  type: "completions";
  input_messages?: { type: "template"; template: ({ role: string; content: string } | EvalItem)[] } | { type: "item_reference"; item_reference: string };
  sampling_params?: { temperature?: number; max_completion_tokens?: number; top_p?: number; seed?: number };
  /** The name of the model to use for generating completions (e.g. "o3-mini"). */
  model?: string;
  source: EvalJsonlFileContentSource | EvalJsonlFileIdSource | EvalResponsesSource;
};

export type CreateEvalRunRequest = {
  /** The name of the run. */
  name?: string;
  metadata?: Metadata;
  /** Details about the run's data source. */
  data_source: CreateEvalJsonlRunDataSource | CreateEvalCompletionsRunDataSource | CreateEvalResponsesRunDataSource;
};

export type CreateFileRequest = {
  /** The File object (not file name) to be uploaded.  */
  file: string;
  /** The intended purpose of the uploaded file. One of: - `assistants`: Used in the Assistants API - `batch`: Used in the Batch API - `fine-tune`: Used for fine-tuning - `vision`: Images used for vision fine-tuning - `user_data`: Flexible file type for any purpose - `evals`: Used for eval data sets  */
  purpose: "assistants" | "batch" | "fine-tune" | "vision" | "user_data" | "evals";
};

export type CreateFineTuningCheckpointPermissionRequest = {
  /** The project identifiers to grant access to. */
  project_ids: (string)[];
};

export type CreateFineTuningJobRequest = {
  /** The name of the model to fine-tune. You can select one of the [supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).  */
  model: string | "babbage-002" | "davinci-002" | "gpt-3.5-turbo" | "gpt-4o-mini";
  /** The ID of an uploaded file that contains training data.  See [upload file](/docs/api-reference/files/create) for how to upload a file.  Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.  The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.  See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.  */
  training_file: string;
  /** The hyperparameters used for the fine-tuning job. This value is now deprecated in favor of `method`, and should be passed in under the `method` parameter.  */
  hyperparameters?: { batch_size?: "auto" | number; learning_rate_multiplier?: "auto" | number; n_epochs?: "auto" | number };
  /** A string of up to 64 characters that will be added to your fine-tuned model name.  For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.  */
  suffix?: string | null;
  /** The ID of an uploaded file that contains validation data.  If you provide this file, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in the fine-tuning results file. The same data should not be present in both train and validation files.  Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.  See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.  */
  validation_file?: string | null;
  /** A list of integrations to enable for your fine-tuning job. */
  integrations?: ({ type: "wandb"; wandb: { project: string; name?: string | null; entity?: string | null; tags?: (string)[] } })[] | null;
  /** The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases. If a seed is not specified, one will be generated for you.  */
  seed?: number | null;
  method?: FineTuneMethod;
  metadata?: Metadata;
};

export type CreateImageEditRequest = {
  /** The image(s) to edit. Must be a supported image file or an array of images.  For `gpt-image-1`, each image should be a `png`, `webp`, or `jpg` file less  than 25MB. You can provide up to 16 images.  For `dall-e-2`, you can only provide one image, and it should be a square  `png` file less than 4MB.  */
  image: string | (string)[];
  /** A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2`, and 32000 characters for `gpt-image-1`. */
  prompt: string;
  /** An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. If there are multiple images provided, the mask will be applied on the first image. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`. */
  mask?: string;
  /** The model to use for image generation. Only `dall-e-2` and `gpt-image-1` are supported. Defaults to `dall-e-2` unless a parameter specific to `gpt-image-1` is used. */
  model?: string | "dall-e-2" | "gpt-image-1" | null;
  /** The number of images to generate. Must be between 1 and 10. */
  n?: number | null;
  /** The size of the generated images. Must be one of `1024x1024`, `1536x1024` (landscape), `1024x1536` (portrait), or `auto` (default value) for `gpt-image-1`, and one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. */
  size?: "256x256" | "512x512" | "1024x1024" | "1536x1024" | "1024x1536" | "auto" | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. This parameter is only supported for `dall-e-2`, as `gpt-image-1` will always return base64-encoded images. */
  response_format?: "url" | "b64_json" | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
  /** The quality of the image that will be generated. `high`, `medium` and `low` are only supported for `gpt-image-1`. `dall-e-2` only supports `standard` quality. Defaults to `auto`.  */
  quality?: "standard" | "low" | "medium" | "high" | "auto" | null;
};

export type CreateImageRequest = {
  /** A text description of the desired image(s). The maximum length is 32000 characters for `gpt-image-1`, 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`. */
  prompt: string;
  /** The model to use for image generation. One of `dall-e-2`, `dall-e-3`, or `gpt-image-1`. Defaults to `dall-e-2` unless a parameter specific to `gpt-image-1` is used. */
  model?: string | "dall-e-2" | "dall-e-3" | "gpt-image-1" | null;
  /** The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported. */
  n?: number | null;
  /** The quality of the image that will be generated.   - `auto` (default value) will automatically select the best quality for the given model. - `high`, `medium` and `low` are supported for `gpt-image-1`. - `hd` and `standard` are supported for `dall-e-3`. - `standard` is the only option for `dall-e-2`.  */
  quality?: "standard" | "hd" | "low" | "medium" | "high" | "auto" | null;
  /** The format in which generated images with `dall-e-2` and `dall-e-3` are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. This parameter isn't supported for `gpt-image-1` which will always return base64-encoded images. */
  response_format?: "url" | "b64_json" | null;
  /** The format in which the generated images are returned. This parameter is only supported for `gpt-image-1`. Must be one of `png`, `jpeg`, or `webp`. */
  output_format?: "png" | "jpeg" | "webp" | null;
  /** The compression level (0-100%) for the generated images. This parameter is only supported for `gpt-image-1` with the `webp` or `jpeg` output formats, and defaults to 100. */
  output_compression?: number | null;
  /** The size of the generated images. Must be one of `1024x1024`, `1536x1024` (landscape), `1024x1536` (portrait), or `auto` (default value) for `gpt-image-1`, one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`, and one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3`. */
  size?: "auto" | "1024x1024" | "1536x1024" | "1024x1536" | "256x256" | "512x512" | "1792x1024" | "1024x1792" | null;
  /** Control the content-moderation level for images generated by `gpt-image-1`. Must be either `low` for less restrictive filtering or `auto` (default value). */
  moderation?: "low" | "auto" | null;
  /** Allows to set transparency for the background of the generated image(s).  This parameter is only supported for `gpt-image-1`. Must be one of  `transparent`, `opaque` or `auto` (default value). When `auto` is used, the  model will automatically determine the best background for the image.  If `transparent`, the output format needs to support transparency, so it  should be set to either `png` (default value) or `webp`.  */
  background?: "transparent" | "opaque" | "auto" | null;
  /** The style of the generated images. This parameter is only supported for `dall-e-3`. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. */
  style?: "vivid" | "natural" | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
};

export type CreateImageVariationRequest = {
  /** The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square. */
  image: string;
  /** The model to use for image generation. Only `dall-e-2` is supported at this time. */
  model?: string | "dall-e-2" | null;
  /** The number of images to generate. Must be between 1 and 10. */
  n?: number | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. */
  response_format?: "url" | "b64_json" | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: "256x256" | "512x512" | "1024x1024" | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
};

export type CreateMessageRequest = {
  /** The role of the entity that is creating the message. Allowed values include: - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages. - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.  */
  role: "user" | "assistant";
  content: string | (MessageContentImageFileObject | MessageContentImageUrlObject | MessageRequestContentTextObject)[];
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?: ({ file_id?: string; tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] })[] | null;
  metadata?: Metadata;
};

export type CreateModelResponseProperties = ModelResponseProperties;

export type CreateModerationRequest = {
  /** Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models.  */
  input: string | (string)[] | ({ type: "image_url"; image_url: { url: string } } | { type: "text"; text: string })[];
  /** The content moderation model you would like to use. Learn more in [the moderation guide](/docs/guides/moderation), and learn about available models [here](/docs/models#moderation).  */
  model?: string | "omni-moderation-latest" | "omni-moderation-2024-09-26" | "text-moderation-latest" | "text-moderation-stable";
};

/** Represents if a given text input is potentially harmful. */
export type CreateModerationResponse = {
  /** The unique identifier for the moderation request. */
  id: string;
  /** The model used to generate the moderation results. */
  model: string;
  /** A list of moderation objects. */
  results: ({ flagged: boolean; categories: { hate: boolean; "hate/threatening": boolean; harassment: boolean; "harassment/threatening": boolean; illicit: boolean | null; "illicit/violent": boolean | null; "self-harm": boolean; "self-harm/intent": boolean; "self-harm/instructions": boolean; sexual: boolean; "sexual/minors": boolean; violence: boolean; "violence/graphic": boolean }; category_scores: { hate: number; "hate/threatening": number; harassment: number; "harassment/threatening": number; illicit: number; "illicit/violent": number; "self-harm": number; "self-harm/intent": number; "self-harm/instructions": number; sexual: number; "sexual/minors": number; violence: number; "violence/graphic": number }; category_applied_input_types: { hate: ("text")[]; "hate/threatening": ("text")[]; harassment: ("text")[]; "harassment/threatening": ("text")[]; illicit: ("text")[]; "illicit/violent": ("text")[]; "self-harm": ("text" | "image")[]; "self-harm/intent": ("text" | "image")[]; "self-harm/instructions": ("text" | "image")[]; sexual: ("text" | "image")[]; "sexual/minors": ("text")[]; violence: ("text" | "image")[]; "violence/graphic": ("text" | "image")[] } })[];
};

export type CreateResponse = CreateModelResponseProperties & ResponseProperties & { input: string | (InputItem)[]; include?: (Includable)[] | null; parallel_tool_calls?: boolean | null; store?: boolean | null; stream?: boolean | null };

export type CreateRunRequest = {
  /** The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
  assistant_id: string;
  /** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
  model?: string | AssistantSupportedModels | null;
  reasoning_effort?: ReasoningEffort;
  /** Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis. */
  instructions?: string | null;
  /** Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions. */
  additional_instructions?: string | null;
  /** Adds additional messages to the thread before creating the run. */
  additional_messages?: (CreateMessageRequest)[] | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  tools?: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[] | null;
  metadata?: Metadata;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or temperature but not both.  */
  top_p?: number | null;
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.  */
  stream?: boolean | null;
  /** The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.  */
  max_prompt_tokens?: number | null;
  /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.  */
  max_completion_tokens?: number | null;
  truncation_strategy?: TruncationObject & unknown;
  tool_choice?: AssistantsApiToolChoiceOption & unknown;
  parallel_tool_calls?: ParallelToolCalls;
  response_format?: AssistantsApiResponseFormatOption;
};

export type CreateSpeechRequest = {
  /** One of the available [TTS models](/docs/models#tts): `tts-1`, `tts-1-hd` or `gpt-4o-mini-tts`.  */
  model: string | "tts-1" | "tts-1-hd" | "gpt-4o-mini-tts";
  /** The text to generate audio for. The maximum length is 4096 characters. */
  input: string;
  /** Control the voice of your generated audio with additional instructions. Does not work with `tts-1` or `tts-1-hd`. */
  instructions?: string;
  /** The voice to use when generating the audio. Supported voices are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options). */
  voice: VoiceIdsShared;
  /** The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. */
  response_format?: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
  /** The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default. */
  speed?: number;
};

export type CreateThreadAndRunRequest = {
  /** The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
  assistant_id: string;
  thread?: CreateThreadRequest;
  /** The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used. */
  model?: string | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "gpt-4o" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4.5-preview" | "gpt-4.5-preview-2025-02-27" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613" | null;
  /** Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis. */
  instructions?: string | null;
  /** Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
  tools?: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[] | null;
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
  metadata?: Metadata;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or temperature but not both.  */
  top_p?: number | null;
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.  */
  stream?: boolean | null;
  /** The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.  */
  max_prompt_tokens?: number | null;
  /** The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.  */
  max_completion_tokens?: number | null;
  truncation_strategy?: TruncationObject & unknown;
  tool_choice?: AssistantsApiToolChoiceOption & unknown;
  parallel_tool_calls?: ParallelToolCalls;
  response_format?: AssistantsApiResponseFormatOption;
};

/** Options to create a new thread. If no thread is provided when running a  request, an empty thread will be created. */
export type CreateThreadRequest = {
  /** A list of [messages](/docs/api-reference/messages) to start the thread with. */
  messages?: (CreateMessageRequest)[];
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: unknown | unknown } | null;
  metadata?: Metadata;
};

export type CreateTranscriptionRequest = {
  /** The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.  */
  file: string;
  /** ID of the model to use. The options are `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, and `whisper-1` (which is powered by our open source Whisper V2 model).  */
  model: string | "whisper-1" | "gpt-4o-transcribe" | "gpt-4o-mini-transcribe";
  /** The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will improve accuracy and latency.  */
  language?: string;
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should match the audio language.  */
  prompt?: string;
  response_format?: AudioResponseFormat;
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.  */
  temperature?: number;
  /** Additional information to include in the transcription response.  `logprobs` will return the log probabilities of the tokens in the  response to understand the model's confidence in the transcription.  `logprobs` only works with response_format set to `json` and only with  the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe`.  */
  "include[]"?: (TranscriptionInclude)[];
  /** The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.  */
  "timestamp_granularities[]"?: ("word" | "segment")[];
  /** If set to true, the model response data will be streamed to the client as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).  See the [Streaming section of the Speech-to-Text guide](/docs/guides/speech-to-text?lang=curl#streaming-transcriptions) for more information.  Note: Streaming is not supported for the `whisper-1` model and will be ignored.  */
  stream?: boolean | null;
};

/** Represents a transcription response returned by model, based on the provided input. */
export type CreateTranscriptionResponseJson = {
  /** The transcribed text. */
  text: string;
  /** The log probabilities of the tokens in the transcription. Only returned with the models `gpt-4o-transcribe` and `gpt-4o-mini-transcribe` if `logprobs` is added to the `include` array.  */
  logprobs?: ({ token?: string; logprob?: number; bytes?: (number)[] })[];
};

export type CreateTranscriptionResponseStreamEvent = TranscriptTextDeltaEvent | TranscriptTextDoneEvent;

/** Represents a verbose json transcription response returned by model, based on the provided input. */
export type CreateTranscriptionResponseVerboseJson = {
  /** The language of the input audio. */
  language: string;
  /** The duration of the input audio. */
  duration: number;
  /** The transcribed text. */
  text: string;
  /** Extracted words and their corresponding timestamps. */
  words?: (TranscriptionWord)[];
  /** Segments of the transcribed text and their corresponding details. */
  segments?: (TranscriptionSegment)[];
};

export type CreateTranslationRequest = {
  /** The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.  */
  file: string;
  /** ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.  */
  model: string | "whisper-1";
  /** An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text#prompting) should be in English.  */
  prompt?: string;
  /** The format of the output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.  */
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  /** The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.  */
  temperature?: number;
};

export type CreateTranslationResponseJson = {
  text: string;
};

export type CreateTranslationResponseVerboseJson = {
  /** The language of the output translation (always `english`). */
  language: string;
  /** The duration of the input audio. */
  duration: number;
  /** The translated text. */
  text: string;
  /** Segments of the translated text and their corresponding details. */
  segments?: (TranscriptionSegment)[];
};

export type CreateUploadRequest = {
  /** The name of the file to upload.  */
  filename: string;
  /** The intended purpose of the uploaded file.  See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).  */
  purpose: "assistants" | "batch" | "fine-tune" | "vision";
  /** The number of bytes in the file you are uploading.  */
  bytes: number;
  /** The MIME type of the file.  This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.  */
  mime_type: string;
};

export type CreateVectorStoreFileBatchRequest = {
  /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids: (string)[];
  chunking_strategy?: ChunkingStrategyRequestParam;
  attributes?: VectorStoreFileAttributes;
};

export type CreateVectorStoreFileRequest = {
  /** A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_id: string;
  chunking_strategy?: ChunkingStrategyRequestParam;
  attributes?: VectorStoreFileAttributes;
};

export type CreateVectorStoreRequest = {
  /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
  file_ids?: (string)[];
  /** The name of the vector store. */
  name?: string;
  expires_after?: VectorStoreExpirationAfter;
  /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
  chunking_strategy?: AutoChunkingStrategyRequestParam | StaticChunkingStrategyRequestParam;
  metadata?: Metadata;
};

export type DeleteAssistantResponse = {
  id: string;
  deleted: boolean;
  object: "assistant.deleted";
};

export type DeleteCertificateResponse = {
  /** The object type, must be `certificate.deleted`. */
  object: "certificate.deleted";
  /** The ID of the certificate that was deleted. */
  id: string;
};

export type DeleteFileResponse = {
  id: string;
  object: "file";
  deleted: boolean;
};

export type DeleteFineTuningCheckpointPermissionResponse = {
  /** The ID of the fine-tuned model checkpoint permission that was deleted. */
  id: string;
  /** The object type, which is always "checkpoint.permission". */
  object: "checkpoint.permission";
  /** Whether the fine-tuned model checkpoint permission was successfully deleted. */
  deleted: boolean;
};

export type DeleteMessageResponse = {
  id: string;
  deleted: boolean;
  object: "thread.message.deleted";
};

export type DeleteModelResponse = {
  id: string;
  deleted: boolean;
  object: string;
};

export type DeleteThreadResponse = {
  id: string;
  deleted: boolean;
  object: "thread.deleted";
};

export type DeleteVectorStoreFileResponse = {
  id: string;
  deleted: boolean;
  object: "vector_store.file.deleted";
};

export type DeleteVectorStoreResponse = {
  id: string;
  deleted: boolean;
  object: "vector_store.deleted";
};

/** Occurs when a stream ends. */
export type DoneEvent = {
  event: "done";
  data: "[DONE]";
};

/** A double click action. */
export type DoubleClick = {
  /** Specifies the event type. For a double click action, this property is  always set to `double_click`.  */
  type: "double_click";
  /** The x-coordinate where the double click occurred.  */
  x: number;
  /** The y-coordinate where the double click occurred.  */
  y: number;
};

/** A drag action. */
export type Drag = {
  /** Specifies the event type. For a drag action, this property is  always set to `drag`.  */
  type: "drag";
  /** An array of coordinates representing the path of the drag action. Coordinates will appear as an array of objects, eg ``` [   { x: 100, y: 200 },   { x: 200, y: 300 } ] ```  */
  path: (Coordinate)[];
};

/** A message input to the model with a role indicating instruction following hierarchy. Instructions given with the `developer` or `system` role take precedence over instructions given with the `user` role. Messages with the `assistant` role are presumed to have been generated by the model in previous interactions. */
export type EasyInputMessage = {
  /** The role of the message input. One of `user`, `assistant`, `system`, or `developer`.  */
  role: "user" | "assistant" | "system" | "developer";
  /** Text, image, or audio input to the model, used to generate a response. Can also contain previous assistant responses.  */
  content: string | InputMessageContentList;
  /** The type of the message input. Always `message`.  */
  type?: "message";
};

/** Represents an embedding vector returned by embedding endpoint. */
export type Embedding = {
  /** The index of the embedding in the list of embeddings. */
  index: number;
  /** The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).  */
  embedding: (number)[];
  /** The object type, which is always "embedding". */
  object: "embedding";
};

export type Error = {
  code: string | null;
  message: string;
  param: string | null;
  type: string;
};

/** Occurs when an [error](/docs/guides/error-codes#api-errors) occurs. This can happen due to an internal server error or a timeout. */
export type ErrorEvent = {
  event: "error";
  data: Error;
};

export type ErrorResponse = {
  error: Error;
};

/** An Eval object with a data source config and testing criteria. An Eval represents a task to be done for your LLM integration. Like:  - Improve the quality of my chatbot  - See how well my chatbot handles customer support  - Check if o3-mini is better at my usecase than gpt-4o */
export type Eval = {
  /** The object type. */
  object: "eval";
  /** Unique identifier for the evaluation. */
  id: string;
  /** The name of the evaluation. */
  name: string;
  /** Configuration of data sources used in runs of the evaluation. */
  data_source_config: EvalCustomDataSourceConfig | EvalStoredCompletionsDataSourceConfig;
  /** A list of testing criteria. */
  testing_criteria: (EvalLabelModelGrader | EvalStringCheckGrader | EvalTextSimilarityGrader | EvalPythonGrader | EvalScoreModelGrader)[];
  /** The Unix timestamp (in seconds) for when the eval was created. */
  created_at: number;
  metadata: Metadata;
};

/** An object representing an error response from the Eval API. */
export type EvalApiError = {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
};

/** A CustomDataSourceConfig which specifies the schema of your `item` and optionally `sample` namespaces. The response schema defines the shape of the data that will be: - Used to define your testing criteria and - What data is required when creating a run */
export type EvalCustomDataSourceConfig = {
  /** The type of data source. Always `custom`. */
  type: "custom";
  /** The json schema for the run data source items. Learn how to build JSON schemas [here](https://json-schema.org/).  */
  schema: { [key: string]: unknown };
};

/** A message input to the model with a role indicating instruction following hierarchy. Instructions given with the `developer` or `system` role take precedence over instructions given with the `user` role. Messages with the `assistant` role are presumed to have been generated by the model in previous interactions. */
export type EvalItem = {
  /** The role of the message input. One of `user`, `assistant`, `system`, or `developer`.  */
  role: "user" | "assistant" | "system" | "developer";
  /** Text inputs to the model - can contain template strings.  */
  content: string | InputTextContent | { type: "output_text"; text: string };
  /** The type of the message input. Always `message`.  */
  type?: "message";
};

export type EvalJsonlFileContentSource = {
  /** The type of jsonl source. Always `file_content`. */
  type: "file_content";
  /** The content of the jsonl file. */
  content: ({ item: { [key: string]: unknown }; sample?: { [key: string]: unknown } })[];
};

export type EvalJsonlFileIdSource = {
  /** The type of jsonl source. Always `file_id`. */
  type: "file_id";
  /** The identifier of the file. */
  id: string;
};

/** A LabelModelGrader object which uses a model to assign labels to each item in the evaluation. */
export type EvalLabelModelGrader = {
  /** The object type, which is always `label_model`. */
  type: "label_model";
  /** The name of the grader. */
  name: string;
  /** The model to use for the evaluation. Must support structured outputs. */
  model: string;
  input: (EvalItem)[];
  /** The labels to assign to each item in the evaluation. */
  labels: (string)[];
  /** The labels that indicate a passing result. Must be a subset of labels. */
  passing_labels: (string)[];
};

/** An object representing a list of evals. */
export type EvalList = {
  /** The type of this object. It is always set to "list".  */
  object: "list";
  /** An array of eval objects.  */
  data: (Eval)[];
  /** The identifier of the first eval in the data array. */
  first_id: string;
  /** The identifier of the last eval in the data array. */
  last_id: string;
  /** Indicates whether there are more evals available. */
  has_more: boolean;
};

/** A PythonGrader object that runs a python script on the input. */
export type EvalPythonGrader = {
  /** The object type, which is always `python`. */
  type: "python";
  /** The name of the grader. */
  name: string;
  /** The source code of the python script. */
  source: string;
  /** The threshold for the score. */
  pass_threshold?: number;
  /** The image tag to use for the python script. */
  image_tag?: string;
};

/** A EvalResponsesSource object describing a run data source configuration. */
export type EvalResponsesSource = {
  /** The type of run data source. Always `responses`. */
  type: "responses";
  /** Metadata filter for the responses. This is a query parameter used to select responses. */
  metadata?: { [key: string]: unknown } | null;
  /** The name of the model to find responses for. This is a query parameter used to select responses. */
  model?: string | null;
  /** Optional search string for instructions. This is a query parameter used to select responses. */
  instructions_search?: string | null;
  /** Only include items created after this timestamp (inclusive). This is a query parameter used to select responses. */
  created_after?: number | null;
  /** Only include items created before this timestamp (inclusive). This is a query parameter used to select responses. */
  created_before?: number | null;
  /** Whether the response has tool calls. This is a query parameter used to select responses. */
  has_tool_calls?: boolean | null;
  /** Optional reasoning effort parameter. This is a query parameter used to select responses. */
  reasoning_effort?: ReasoningEffort;
  /** Sampling temperature. This is a query parameter used to select responses. */
  temperature?: number | null;
  /** Nucleus sampling parameter. This is a query parameter used to select responses. */
  top_p?: number | null;
  /** List of user identifiers. This is a query parameter used to select responses. */
  users?: (string)[] | null;
  /** Whether to allow parallel tool calls. This is a query parameter used to select responses. */
  allow_parallel_tool_calls?: boolean | null;
};

/** A schema representing an evaluation run. */
export type EvalRun = {
  /** The type of the object. Always "eval.run". */
  object: "eval.run";
  /** Unique identifier for the evaluation run. */
  id: string;
  /** The identifier of the associated evaluation. */
  eval_id: string;
  /** The status of the evaluation run. */
  status: string;
  /** The model that is evaluated, if applicable. */
  model: string;
  /** The name of the evaluation run. */
  name: string;
  /** Unix timestamp (in seconds) when the evaluation run was created. */
  created_at: number;
  /** The URL to the rendered evaluation run report on the UI dashboard. */
  report_url: string;
  /** Counters summarizing the outcomes of the evaluation run. */
  result_counts: { total: number; errored: number; failed: number; passed: number };
  /** Usage statistics for each model during the evaluation run. */
  per_model_usage: ({ model_name: string; invocation_count: number; prompt_tokens: number; completion_tokens: number; total_tokens: number; cached_tokens: number })[];
  /** Results per testing criteria applied during the evaluation run. */
  per_testing_criteria_results: ({ testing_criteria: string; passed: number; failed: number })[];
  /** Information about the run's data source. */
  data_source: CreateEvalJsonlRunDataSource | CreateEvalCompletionsRunDataSource | CreateEvalResponsesRunDataSource;
  metadata: Metadata;
  error: EvalApiError;
};

/** An object representing a list of runs for an evaluation. */
export type EvalRunList = {
  /** The type of this object. It is always set to "list".  */
  object: "list";
  /** An array of eval run objects.  */
  data: (EvalRun)[];
  /** The identifier of the first eval run in the data array. */
  first_id: string;
  /** The identifier of the last eval run in the data array. */
  last_id: string;
  /** Indicates whether there are more evals available. */
  has_more: boolean;
};

/** A schema representing an evaluation run output item. */
export type EvalRunOutputItem = {
  /** The type of the object. Always "eval.run.output_item". */
  object: "eval.run.output_item";
  /** Unique identifier for the evaluation run output item. */
  id: string;
  /** The identifier of the evaluation run associated with this output item. */
  run_id: string;
  /** The identifier of the evaluation group. */
  eval_id: string;
  /** Unix timestamp (in seconds) when the evaluation run was created. */
  created_at: number;
  /** The status of the evaluation run. */
  status: string;
  /** The identifier for the data source item. */
  datasource_item_id: number;
  /** Details of the input data source item. */
  datasource_item: { [key: string]: unknown };
  /** A list of results from the evaluation run. */
  results: ({ [key: string]: unknown })[];
  /** A sample containing the input and output of the evaluation run. */
  sample: { input: ({ role: string; content: string })[]; output: ({ role?: string; content?: string })[]; finish_reason: string; model: string; usage: { total_tokens: number; completion_tokens: number; prompt_tokens: number; cached_tokens: number }; error: EvalApiError; temperature: number; max_completion_tokens: number; top_p: number; seed: number };
};

/** An object representing a list of output items for an evaluation run. */
export type EvalRunOutputItemList = {
  /** The type of this object. It is always set to "list".  */
  object: "list";
  /** An array of eval run output item objects.  */
  data: (EvalRunOutputItem)[];
  /** The identifier of the first eval run output item in the data array. */
  first_id: string;
  /** The identifier of the last eval run output item in the data array. */
  last_id: string;
  /** Indicates whether there are more eval run output items available. */
  has_more: boolean;
};

/** A ScoreModelGrader object that uses a model to assign a score to the input. */
export type EvalScoreModelGrader = {
  /** The object type, which is always `score_model`. */
  type: "score_model";
  /** The name of the grader. */
  name: string;
  /** The model to use for the evaluation. */
  model: string;
  /** The sampling parameters for the model. */
  sampling_params?: { [key: string]: unknown };
  /** The input text. This may include template strings. */
  input: (EvalItem)[];
  /** The threshold for the score. */
  pass_threshold?: number;
  /** The range of the score. Defaults to `[0, 1]`. */
  range?: (number)[];
};

/** A StoredCompletionsDataSourceConfig which specifies the metadata property of your stored completions query. This is usually metadata like `usecase=chatbot` or `prompt-version=v2`, etc. The schema returned by this data source config is used to defined what variables are available in your evals. `item` and `sample` are both defined when using this data source config. */
export type EvalStoredCompletionsDataSourceConfig = {
  /** The type of data source. Always `stored_completions`. */
  type: "stored_completions";
  metadata?: Metadata;
  /** The json schema for the run data source items. Learn how to build JSON schemas [here](https://json-schema.org/).  */
  schema: { [key: string]: unknown };
};

/** A StoredCompletionsRunDataSource configuration describing a set of filters */
export type EvalStoredCompletionsSource = {
  /** The type of source. Always `stored_completions`. */
  type: "stored_completions";
  metadata?: Metadata;
  /** An optional model to filter by (e.g., 'gpt-4o'). */
  model?: string | null;
  /** An optional Unix timestamp to filter items created after this time. */
  created_after?: number | null;
  /** An optional Unix timestamp to filter items created before this time. */
  created_before?: number | null;
  /** An optional maximum number of items to return. */
  limit?: number | null;
};

/** A StringCheckGrader object that performs a string comparison between input and reference using a specified operation. */
export type EvalStringCheckGrader = {
  /** The object type, which is always `string_check`. */
  type: "string_check";
  /** The name of the grader. */
  name: string;
  /** The input text. This may include template strings. */
  input: string;
  /** The reference text. This may include template strings. */
  reference: string;
  /** The string check operation to perform. One of `eq`, `ne`, `like`, or `ilike`. */
  operation: "eq" | "ne" | "like" | "ilike";
};

/** A TextSimilarityGrader object which grades text based on similarity metrics. */
export type EvalTextSimilarityGrader = {
  /** The type of grader. */
  type: "text_similarity";
  /** The name of the grader. */
  name?: string;
  /** The text being graded. */
  input: string;
  /** The text being graded against. */
  reference: string;
  /** A float score where a value greater than or equal indicates a passing grade. */
  pass_threshold: number;
  /** The evaluation metric to use. One of `fuzzy_match`, `bleu`, `gleu`, `meteor`, `rouge_1`, `rouge_2`, `rouge_3`, `rouge_4`, `rouge_5`, or `rouge_l`. */
  evaluation_metric: "fuzzy_match" | "bleu" | "gleu" | "meteor" | "rouge_1" | "rouge_2" | "rouge_3" | "rouge_4" | "rouge_5" | "rouge_l";
};

/** A path to a file. */
export type FilePath = {
  /** The type of the file path. Always `file_path`.  */
  type: "file_path";
  /** The ID of the file.  */
  file_id: string;
  /** The index of the file in the list of files.  */
  index: number;
};

/** The ranker to use for the file search. If not specified will use the `auto` ranker. */
export type FileSearchRanker = "auto" | "default_2024_08_21";

/** The ranking options for the file search. If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.  See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information. */
export type FileSearchRankingOptions = {
  ranker?: FileSearchRanker;
  /** The score threshold for the file search. All values must be a floating point number between 0 and 1. */
  score_threshold: number;
};

/** The results of a file search tool call. See the  [file search guide](/docs/guides/tools-file-search) for more information. */
export type FileSearchToolCall = {
  /** The unique ID of the file search tool call.  */
  id: string;
  /** The type of the file search tool call. Always `file_search_call`.  */
  type: "file_search_call";
  /** The status of the file search tool call. One of `in_progress`,  `searching`, `incomplete` or `failed`,  */
  status: "in_progress" | "searching" | "completed" | "incomplete" | "failed";
  /** The queries used to search for files.  */
  queries: (string)[];
  /** The results of the file search tool call.  */
  results?: ({ file_id?: string; text?: string; filename?: string; attributes?: VectorStoreFileAttributes; score?: number })[] | null;
};

export type FineTuneChatCompletionRequestAssistantMessage = { weight?: 0 | 1 } & ChatCompletionRequestAssistantMessage;

/** The per-line training example of a fine-tuning input file for chat models using the supervised method. */
export type FineTuneChatRequestInput = {
  messages?: (ChatCompletionRequestSystemMessage | ChatCompletionRequestUserMessage | FineTuneChatCompletionRequestAssistantMessage | ChatCompletionRequestToolMessage | ChatCompletionRequestFunctionMessage)[];
  /** A list of tools the model may generate JSON inputs for. */
  tools?: (ChatCompletionTool)[];
  parallel_tool_calls?: ParallelToolCalls;
  /** A list of functions the model may generate JSON inputs for. */
  functions?: (ChatCompletionFunctions)[];
};

/** The per-line training example of a fine-tuning input file for completions models */
export type FineTuneCompletionRequestInput = {
  /** The input prompt for this training example. */
  prompt?: string;
  /** The desired completion for this training example. */
  completion?: string;
};

/** Configuration for the DPO fine-tuning method. */
export type FineTuneDpoMethod = {
  /** The hyperparameters used for the fine-tuning job. */
  hyperparameters?: { beta?: "auto" | number; batch_size?: "auto" | number; learning_rate_multiplier?: "auto" | number; n_epochs?: "auto" | number };
};

/** The method used for fine-tuning. */
export type FineTuneMethod = {
  /** The type of method. Is either `supervised` or `dpo`. */
  type?: "supervised" | "dpo";
  supervised?: FineTuneSupervisedMethod;
  dpo?: FineTuneDpoMethod;
};

/** The per-line training example of a fine-tuning input file for chat models using the dpo method. */
export type FineTunePreferenceRequestInput = {
  input?: { messages?: (ChatCompletionRequestSystemMessage | ChatCompletionRequestUserMessage | FineTuneChatCompletionRequestAssistantMessage | ChatCompletionRequestToolMessage | ChatCompletionRequestFunctionMessage)[]; tools?: (ChatCompletionTool)[]; parallel_tool_calls?: ParallelToolCalls };
  /** The preferred completion message for the output. */
  preferred_completion?: (ChatCompletionRequestAssistantMessage)[];
  /** The non-preferred completion message for the output. */
  non_preferred_completion?: (ChatCompletionRequestAssistantMessage)[];
};

/** Configuration for the supervised fine-tuning method. */
export type FineTuneSupervisedMethod = {
  /** The hyperparameters used for the fine-tuning job. */
  hyperparameters?: { batch_size?: "auto" | number; learning_rate_multiplier?: "auto" | number; n_epochs?: "auto" | number };
};

/** The `checkpoint.permission` object represents a permission for a fine-tuned model checkpoint. */
export type FineTuningCheckpointPermission = {
  /** The permission identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the permission was created. */
  created_at: number;
  /** The project identifier that the permission is for. */
  project_id: string;
  /** The object type, which is always "checkpoint.permission". */
  object: "checkpoint.permission";
};

export type FineTuningIntegration = {
  /** The type of the integration being enabled for the fine-tuning job */
  type: "wandb";
  /** The settings for your integration with Weights and Biases. This payload specifies the project that metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags to your run, and set a default entity (team, username, etc) to be associated with your run.  */
  wandb: { project: string; name?: string | null; entity?: string | null; tags?: (string)[] };
};

/** The `fine_tuning.job` object represents a fine-tuning job that has been created through the API. */
export type FineTuningJob = {
  /** The object identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: number;
  /** For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure. */
  error: { code: string; message: string; param: string | null } | null;
  /** The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running. */
  fine_tuned_model: string | null;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running. */
  finished_at: number | null;
  /** The hyperparameters used for the fine-tuning job. This value will only be returned when running `supervised` jobs. */
  hyperparameters: { batch_size?: "auto" | number; learning_rate_multiplier?: "auto" | number; n_epochs?: "auto" | number };
  /** The base model that is being fine-tuned. */
  model: string;
  /** The object type, which is always "fine_tuning.job". */
  object: "fine_tuning.job";
  /** The organization that owns the fine-tuning job. */
  organization_id: string;
  /** The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents). */
  result_files: (string)[];
  /** The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`. */
  status: "validating_files" | "queued" | "running" | "succeeded" | "failed" | "cancelled";
  /** The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running. */
  trained_tokens: number | null;
  /** The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents). */
  training_file: string;
  /** The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents). */
  validation_file: string | null;
  /** A list of integrations to enable for this fine-tuning job. */
  integrations?: (FineTuningIntegration)[] | null;
  /** The seed used for the fine-tuning job. */
  seed: number;
  /** The Unix timestamp (in seconds) for when the fine-tuning job is estimated to finish. The value will be null if the fine-tuning job is not running. */
  estimated_finish?: number | null;
  method?: FineTuneMethod;
  metadata?: Metadata;
};

/** The `fine_tuning.job.checkpoint` object represents a model checkpoint for a fine-tuning job that is ready to use. */
export type FineTuningJobCheckpoint = {
  /** The checkpoint identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the checkpoint was created. */
  created_at: number;
  /** The name of the fine-tuned checkpoint model that is created. */
  fine_tuned_model_checkpoint: string;
  /** The step number that the checkpoint was created at. */
  step_number: number;
  /** Metrics at the step number during the fine-tuning job. */
  metrics: { step?: number; train_loss?: number; train_mean_token_accuracy?: number; valid_loss?: number; valid_mean_token_accuracy?: number; full_valid_loss?: number; full_valid_mean_token_accuracy?: number };
  /** The name of the fine-tuning job that this checkpoint was created from. */
  fine_tuning_job_id: string;
  /** The object type, which is always "fine_tuning.job.checkpoint". */
  object: "fine_tuning.job.checkpoint";
};

/** Fine-tuning job event object */
export type FineTuningJobEvent = {
  /** The object type, which is always "fine_tuning.job.event". */
  object: "fine_tuning.job.event";
  /** The object identifier. */
  id: string;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: number;
  /** The log level of the event. */
  level: "info" | "warn" | "error";
  /** The message of the event. */
  message: string;
  /** The type of event. */
  type?: "message" | "metrics";
  /** The data associated with the event. */
  data?: { [key: string]: unknown };
};

export type FunctionObject = {
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description?: string;
  /** The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
  name: string;
  parameters?: FunctionParameters;
  /** Whether to enable strict schema adherence when generating the function call. If set to true, the model will follow the exact schema defined in the `parameters` field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn more about Structured Outputs in the [function calling guide](docs/guides/function-calling). */
  strict?: boolean | null;
};

/** The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.   Omitting `parameters` defines a function with an empty parameter list. */
export type FunctionParameters = { [key: string]: unknown };

/** A tool call to run a function. See the  [function calling guide](/docs/guides/function-calling) for more information. */
export type FunctionToolCall = {
  /** The unique ID of the function tool call.  */
  id?: string;
  /** The type of the function tool call. Always `function_call`.  */
  type: "function_call";
  /** The unique ID of the function tool call generated by the model.  */
  call_id: string;
  /** The name of the function to run.  */
  name: string;
  /** A JSON string of the arguments to pass to the function.  */
  arguments: string;
  /** The status of the item. One of `in_progress`, `completed`, or `incomplete`. Populated when items are returned via API.  */
  status?: "in_progress" | "completed" | "incomplete";
};

/** The output of a function tool call. */
export type FunctionToolCallOutput = {
  /** The unique ID of the function tool call output. Populated when this item is returned via API.  */
  id?: string;
  /** The type of the function tool call output. Always `function_call_output`.  */
  type: "function_call_output";
  /** The unique ID of the function tool call generated by the model.  */
  call_id: string;
  /** A JSON string of the output of the function tool call.  */
  output: string;
  /** The status of the item. One of `in_progress`, `completed`, or `incomplete`. Populated when items are returned via API.  */
  status?: "in_progress" | "completed" | "incomplete";
};

export type FunctionToolCallOutputResource = FunctionToolCallOutput & { id: string };

export type FunctionToolCallResource = FunctionToolCall & { id: string };

/** Represents the content or the URL of an image generated by the OpenAI API. */
export type Image = {
  /** The base64-encoded JSON of the generated image. Default value for `gpt-image-1`, and only present if `response_format` is set to `b64_json` for `dall-e-2` and `dall-e-3`. */
  b64_json?: string;
  /** When using `dall-e-2` or `dall-e-3`, the URL of the generated image if `response_format` is set to `url` (default value). Unsupported for `gpt-image-1`. */
  url?: string;
  /** For `dall-e-3` only, the revised prompt that was used to generate the image. */
  revised_prompt?: string;
};

/** The response from the image generation endpoint. */
export type ImagesResponse = {
  /** The Unix timestamp (in seconds) of when the image was created. */
  created: number;
  /** The list of generated images. */
  data?: (Image)[];
  /** For `gpt-image-1` only, the token usage information for the image generation.  */
  usage?: { total_tokens: number; input_tokens: number; output_tokens: number; input_tokens_details: { text_tokens: number; image_tokens: number } };
};

/** Specify additional output data to include in the model response. Currently supported values are: - `file_search_call.results`: Include the search results of   the file search tool call. - `message.input_image.image_url`: Include image urls from the input message. - `computer_call_output.output.image_url`: Include image urls from the computer call output. */
export type Includable = "file_search_call.results" | "message.input_image.image_url" | "computer_call_output.output.image_url";

/** An audio input to the model. */
export type InputAudio = {
  /** The type of the input item. Always `input_audio`.  */
  type: "input_audio";
  /** Base64-encoded audio data.  */
  data: string;
  /** The format of the audio data. Currently supported formats are `mp3` and `wav`.  */
  format: "mp3" | "wav";
};

export type InputContent = InputTextContent | InputImageContent | InputFileContent;

export type InputItem = EasyInputMessage | Item | ItemReferenceParam;

/** A message input to the model with a role indicating instruction following hierarchy. Instructions given with the `developer` or `system` role take precedence over instructions given with the `user` role. */
export type InputMessage = {
  /** The type of the message input. Always set to `message`.  */
  type?: "message";
  /** The role of the message input. One of `user`, `system`, or `developer`.  */
  role: "user" | "system" | "developer";
  /** The status of item. One of `in_progress`, `completed`, or `incomplete`. Populated when items are returned via API.  */
  status?: "in_progress" | "completed" | "incomplete";
  content: InputMessageContentList;
};

/** A list of one or many input items to the model, containing different content  types. */
export type InputMessageContentList = (InputContent)[];

export type InputMessageResource = InputMessage & { id: string };

/** Represents an individual `invite` to the organization. */
export type Invite = {
  /** The object type, which is always `organization.invite` */
  object: "organization.invite";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The email address of the individual to whom the invite was sent */
  email: string;
  /** `owner` or `reader` */
  role: "owner" | "reader";
  /** `accepted`,`expired`, or `pending` */
  status: "accepted" | "expired" | "pending";
  /** The Unix timestamp (in seconds) of when the invite was sent. */
  invited_at: number;
  /** The Unix timestamp (in seconds) of when the invite expires. */
  expires_at: number;
  /** The Unix timestamp (in seconds) of when the invite was accepted. */
  accepted_at?: number;
  /** The projects that were granted membership upon acceptance of the invite. */
  projects?: ({ id?: string; role?: "member" | "owner" })[];
};

export type InviteDeleteResponse = {
  /** The object type, which is always `organization.invite.deleted` */
  object: "organization.invite.deleted";
  id: string;
  deleted: boolean;
};

export type InviteListResponse = {
  /** The object type, which is always `list` */
  object: "list";
  data: (Invite)[];
  /** The first `invite_id` in the retrieved `list` */
  first_id?: string;
  /** The last `invite_id` in the retrieved `list` */
  last_id?: string;
  /** The `has_more` property is used for pagination to indicate there are additional results. */
  has_more?: boolean;
};

export type InviteRequest = {
  /** Send an email to this address */
  email: string;
  /** `owner` or `reader` */
  role: "reader" | "owner";
  /** An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior. */
  projects?: ({ id: string; role: "member" | "owner" })[];
};

/** Content item used to generate a response. */
export type Item = InputMessage | OutputMessage | FileSearchToolCall | ComputerToolCall | ComputerCallOutputItemParam | WebSearchToolCall | FunctionToolCall | FunctionCallOutputItemParam | ReasoningItem;

/** Content item used to generate a response. */
export type ItemResource = InputMessageResource | OutputMessage | FileSearchToolCall | ComputerToolCall | ComputerToolCallOutputResource | WebSearchToolCall | FunctionToolCallResource | FunctionToolCallOutputResource;

/** A collection of keypresses the model would like to perform. */
export type KeyPress = {
  /** Specifies the event type. For a keypress action, this property is  always set to `keypress`.  */
  type: "keypress";
  /** The combination of keys the model is requesting to be pressed. This is an array of strings, each representing a key.  */
  keys: (string)[];
};

export type ListAssistantsResponse = {
  object: string;
  data: (AssistantObject)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListAuditLogsResponse = {
  object: "list";
  data: (AuditLog)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListBatchesResponse = {
  data: (Batch)[];
  first_id?: string;
  last_id?: string;
  has_more: boolean;
  object: "list";
};

export type ListCertificatesResponse = {
  data: (Certificate)[];
  first_id?: string;
  last_id?: string;
  has_more: boolean;
  object: "list";
};

export type ListFilesResponse = {
  object: string;
  data: (OpenAiFile)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListFineTuningCheckpointPermissionResponse = {
  data: (FineTuningCheckpointPermission)[];
  object: "list";
  first_id?: string | null;
  last_id?: string | null;
  has_more: boolean;
};

export type ListFineTuningJobCheckpointsResponse = {
  data: (FineTuningJobCheckpoint)[];
  object: "list";
  first_id?: string | null;
  last_id?: string | null;
  has_more: boolean;
};

export type ListFineTuningJobEventsResponse = {
  data: (FineTuningJobEvent)[];
  object: "list";
  has_more: boolean;
};

export type ListMessagesResponse = {
  object: string;
  data: (MessageObject)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListModelsResponse = {
  object: "list";
  data: (Model)[];
};

export type ListPaginatedFineTuningJobsResponse = {
  data: (FineTuningJob)[];
  has_more: boolean;
  object: "list";
};

export type ListRunStepsResponse = {
  object: string;
  data: (RunStepObject)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListRunsResponse = {
  object: string;
  data: (RunObject)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListVectorStoreFilesResponse = {
  object: string;
  data: (VectorStoreFileObject)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ListVectorStoresResponse = {
  object: string;
  data: (VectorStoreObject)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** A log probability object. */
export type LogProbProperties = {
  /** The token that was used to generate the log probability.  */
  token: string;
  /** The log probability of the token.  */
  logprob: number;
  /** The bytes that were used to generate the log probability.  */
  bytes: (number)[];
};

/** References an image [File](/docs/api-reference/files) in the content of a message. */
export type MessageContentImageFileObject = {
  /** Always `image_file`. */
  type: "image_file";
  image_file: { file_id: string; detail?: "auto" | "low" | "high" };
};

/** References an image URL in the content of a message. */
export type MessageContentImageUrlObject = {
  /** The type of the content part. */
  type: "image_url";
  image_url: { url: string; detail?: "auto" | "low" | "high" };
};

/** The refusal content generated by the assistant. */
export type MessageContentRefusalObject = {
  /** Always `refusal`. */
  type: "refusal";
  refusal: string;
};

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files. */
export type MessageContentTextAnnotationsFileCitationObject = {
  /** Always `file_citation`. */
  type: "file_citation";
  /** The text in the message content that needs to be replaced. */
  text: string;
  file_citation: { file_id: string };
  start_index: number;
  end_index: number;
};

/** A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file. */
export type MessageContentTextAnnotationsFilePathObject = {
  /** Always `file_path`. */
  type: "file_path";
  /** The text in the message content that needs to be replaced. */
  text: string;
  file_path: { file_id: string };
  start_index: number;
  end_index: number;
};

/** The text content that is part of a message. */
export type MessageContentTextObject = {
  /** Always `text`. */
  type: "text";
  text: { value: string; annotations: (MessageContentTextAnnotationsFileCitationObject | MessageContentTextAnnotationsFilePathObject)[] };
};

/** References an image [File](/docs/api-reference/files) in the content of a message. */
export type MessageDeltaContentImageFileObject = {
  /** The index of the content part in the message. */
  index: number;
  /** Always `image_file`. */
  type: "image_file";
  image_file?: { file_id?: string; detail?: "auto" | "low" | "high" };
};

/** References an image URL in the content of a message. */
export type MessageDeltaContentImageUrlObject = {
  /** The index of the content part in the message. */
  index: number;
  /** Always `image_url`. */
  type: "image_url";
  image_url?: { url?: string; detail?: "auto" | "low" | "high" };
};

/** The refusal content that is part of a message. */
export type MessageDeltaContentRefusalObject = {
  /** The index of the refusal part in the message. */
  index: number;
  /** Always `refusal`. */
  type: "refusal";
  refusal?: string;
};

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files. */
export type MessageDeltaContentTextAnnotationsFileCitationObject = {
  /** The index of the annotation in the text content part. */
  index: number;
  /** Always `file_citation`. */
  type: "file_citation";
  /** The text in the message content that needs to be replaced. */
  text?: string;
  file_citation?: { file_id?: string; quote?: string };
  start_index?: number;
  end_index?: number;
};

/** A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file. */
export type MessageDeltaContentTextAnnotationsFilePathObject = {
  /** The index of the annotation in the text content part. */
  index: number;
  /** Always `file_path`. */
  type: "file_path";
  /** The text in the message content that needs to be replaced. */
  text?: string;
  file_path?: { file_id?: string };
  start_index?: number;
  end_index?: number;
};

/** The text content that is part of a message. */
export type MessageDeltaContentTextObject = {
  /** The index of the content part in the message. */
  index: number;
  /** Always `text`. */
  type: "text";
  text?: { value?: string; annotations?: (MessageDeltaContentTextAnnotationsFileCitationObject | MessageDeltaContentTextAnnotationsFilePathObject)[] };
};

/** Represents a message delta i.e. any changed fields on a message during streaming. */
export type MessageDeltaObject = {
  /** The identifier of the message, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message.delta`. */
  object: "thread.message.delta";
  /** The delta containing the fields that have changed on the Message. */
  delta: { role?: "user" | "assistant"; content?: (MessageDeltaContentImageFileObject | MessageDeltaContentTextObject | MessageDeltaContentRefusalObject | MessageDeltaContentImageUrlObject)[] };
};

/** Represents a message within a [thread](/docs/api-reference/threads). */
export type MessageObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.message`. */
  object: "thread.message";
  /** The Unix timestamp (in seconds) for when the message was created. */
  created_at: number;
  /** The [thread](/docs/api-reference/threads) ID that this message belongs to. */
  thread_id: string;
  /** The status of the message, which can be either `in_progress`, `incomplete`, or `completed`. */
  status: "in_progress" | "incomplete" | "completed";
  /** On an incomplete message, details about why the message is incomplete. */
  incomplete_details: { reason: "content_filter" | "max_tokens" | "run_cancelled" | "run_expired" | "run_failed" } | null;
  /** The Unix timestamp (in seconds) for when the message was completed. */
  completed_at: number | null;
  /** The Unix timestamp (in seconds) for when the message was marked as incomplete. */
  incomplete_at: number | null;
  /** The entity that produced the message. One of `user` or `assistant`. */
  role: "user" | "assistant";
  /** The content of the message in array of text and/or images. */
  content: (MessageContentImageFileObject | MessageContentImageUrlObject | MessageContentTextObject | MessageContentRefusalObject)[];
  /** If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message. */
  assistant_id: string | null;
  /** The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints. */
  run_id: string | null;
  /** A list of files attached to the message, and the tools they were added to. */
  attachments: ({ file_id?: string; tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] })[] | null;
  metadata: Metadata;
};

/** The text content that is part of a message. */
export type MessageRequestContentTextObject = {
  /** Always `text`. */
  type: "text";
  /** Text content to be sent to the model */
  text: string;
};

export type MessageStreamEvent = { event: "thread.message.created"; data: MessageObject } | { event: "thread.message.in_progress"; data: MessageObject } | { event: "thread.message.delta"; data: MessageDeltaObject } | { event: "thread.message.completed"; data: MessageObject } | { event: "thread.message.incomplete"; data: MessageObject };

/** Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.   Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters. */
export type Metadata = { [key: string]: string | undefined } | null;

/** Describes an OpenAI model offering that can be used with the API. */
export type Model = {
  /** The model identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) when the model was created. */
  created: number;
  /** The object type, which is always "model". */
  object: "model";
  /** The organization that owns the model. */
  owned_by: string;
};

export type ModelIds = ModelIdsShared | ModelIdsResponses;

export type ModelIdsResponses = ModelIdsShared | "o1-pro" | "o1-pro-2025-03-19" | "computer-use-preview" | "computer-use-preview-2025-03-11";

export type ModelIdsShared = string | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "o4-mini" | "o4-mini-2025-04-16" | "o3" | "o3-2025-04-16" | "o3-mini" | "o3-mini-2025-01-31" | "o1" | "o1-2024-12-17" | "o1-preview" | "o1-preview-2024-09-12" | "o1-mini" | "o1-mini-2024-09-12" | "gpt-4o" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4o-audio-preview" | "gpt-4o-audio-preview-2024-10-01" | "gpt-4o-audio-preview-2024-12-17" | "gpt-4o-mini-audio-preview" | "gpt-4o-mini-audio-preview-2024-12-17" | "gpt-4o-search-preview" | "gpt-4o-mini-search-preview" | "gpt-4o-search-preview-2025-03-11" | "gpt-4o-mini-search-preview-2025-03-11" | "chatgpt-4o-latest" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613";

export type ModelResponseProperties = {
  metadata?: Metadata;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.  */
  top_p?: number | null;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
  user?: string;
  service_tier?: ServiceTier;
};

export type ModifyAssistantRequest = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.  */
  model?: string | AssistantSupportedModels;
  reasoning_effort?: ReasoningEffort;
  /** The name of the assistant. The maximum length is 256 characters.  */
  name?: string | null;
  /** The description of the assistant. The maximum length is 512 characters.  */
  description?: string | null;
  /** The system instructions that the assistant uses. The maximum length is 256,000 characters.  */
  instructions?: string | null;
  /** A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.  */
  tools?: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[];
  /** A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
  metadata?: Metadata;
  /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  */
  temperature?: number | null;
  /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or temperature but not both.  */
  top_p?: number | null;
  response_format?: AssistantsApiResponseFormatOption;
};

export type ModifyCertificateRequest = {
  /** The updated name for the certificate */
  name: string;
};

export type ModifyMessageRequest = {
  metadata?: Metadata;
};

export type ModifyRunRequest = {
  metadata?: Metadata;
};

export type ModifyThreadRequest = {
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
  metadata?: Metadata;
};

/** A mouse move action. */
export type Move = {
  /** Specifies the event type. For a move action, this property is  always set to `move`.  */
  type: "move";
  /** The x-coordinate to move to.  */
  x: number;
  /** The y-coordinate to move to.  */
  y: number;
};

/** The `File` object represents a document that has been uploaded to OpenAI. */
export type OpenAiFile = {
  /** The file identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The Unix timestamp (in seconds) for when the file was created. */
  created_at: number;
  /** The Unix timestamp (in seconds) for when the file will expire. */
  expires_at?: number;
  /** The name of the file. */
  filename: string;
  /** The object type, which is always `file`. */
  object: "file";
  /** The intended purpose of the file. Supported values are `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results` and `vision`. */
  purpose: "assistants" | "assistants_output" | "batch" | "batch_output" | "fine-tune" | "fine-tune-results" | "vision";
  /** Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`. */
  status: "uploaded" | "processed" | "error";
  /** Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`. */
  status_details?: string;
};

/** This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the `chunking_strategy` concept was introduced in the API. */
export type OtherChunkingStrategyResponseParam = {
  /** Always `other`. */
  type: "other";
};

/** An audio output from the model. */
export type OutputAudio = {
  /** The type of the output audio. Always `output_audio`.  */
  type: "output_audio";
  /** Base64-encoded audio data from the model.  */
  data: string;
  /** The transcript of the audio data from the model.  */
  transcript: string;
};

export type OutputContent = OutputTextContent | RefusalContent;

export type OutputItem = OutputMessage | FileSearchToolCall | FunctionToolCall | WebSearchToolCall | ComputerToolCall | ReasoningItem;

/** An output message from the model. */
export type OutputMessage = {
  /** The unique ID of the output message.  */
  id: string;
  /** The type of the output message. Always `message`.  */
  type: "message";
  /** The role of the output message. Always `assistant`.  */
  role: "assistant";
  /** The content of the output message.  */
  content: (OutputContent)[];
  /** The status of the message input. One of `in_progress`, `completed`, or `incomplete`. Populated when input items are returned via API.  */
  status: "in_progress" | "completed" | "incomplete";
};

/** Whether to enable [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling) during tool use. */
export type ParallelToolCalls = boolean;

/** Static predicted output content, such as the content of a text file that is being regenerated. */
export type PredictionContent = {
  /** The type of the predicted content you want to provide. This type is currently always `content`.  */
  type: "content";
  /** The content that should be matched when generating a model response. If generated tokens would match this content, the entire model response can be returned much more quickly.  */
  content: string | (ChatCompletionRequestMessageContentPartText)[];
};

/** Represents an individual project. */
export type Project = {
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The object type, which is always `organization.project` */
  object: "organization.project";
  /** The name of the project. This appears in reporting. */
  name: string;
  /** The Unix timestamp (in seconds) of when the project was created. */
  created_at: number;
  /** The Unix timestamp (in seconds) of when the project was archived or `null`. */
  archived_at?: number | null;
  /** `active` or `archived` */
  status: "active" | "archived";
};

/** Represents an individual API key in a project. */
export type ProjectApiKey = {
  /** The object type, which is always `organization.project.api_key` */
  object: "organization.project.api_key";
  /** The redacted value of the API key */
  redacted_value: string;
  /** The name of the API key */
  name: string;
  /** The Unix timestamp (in seconds) of when the API key was created */
  created_at: number;
  /** The Unix timestamp (in seconds) of when the API key was last used. */
  last_used_at: number;
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  owner: { type?: "user" | "service_account"; user?: ProjectUser; service_account?: ProjectServiceAccount };
};

export type ProjectApiKeyDeleteResponse = {
  object: "organization.project.api_key.deleted";
  id: string;
  deleted: boolean;
};

export type ProjectApiKeyListResponse = {
  object: "list";
  data: (ProjectApiKey)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ProjectCreateRequest = {
  /** The friendly name of the project, this name appears in reports. */
  name: string;
};

export type ProjectListResponse = {
  object: "list";
  data: (Project)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

/** Represents a project rate limit config. */
export type ProjectRateLimit = {
  /** The object type, which is always `project.rate_limit` */
  object: "project.rate_limit";
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The model this rate limit applies to. */
  model: string;
  /** The maximum requests per minute. */
  max_requests_per_1_minute: number;
  /** The maximum tokens per minute. */
  max_tokens_per_1_minute: number;
  /** The maximum images per minute. Only present for relevant models. */
  max_images_per_1_minute?: number;
  /** The maximum audio megabytes per minute. Only present for relevant models. */
  max_audio_megabytes_per_1_minute?: number;
  /** The maximum requests per day. Only present for relevant models. */
  max_requests_per_1_day?: number;
  /** The maximum batch input tokens per day. Only present for relevant models. */
  batch_1_day_max_input_tokens?: number;
};

export type ProjectRateLimitListResponse = {
  object: "list";
  data: (ProjectRateLimit)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ProjectRateLimitUpdateRequest = {
  /** The maximum requests per minute. */
  max_requests_per_1_minute?: number;
  /** The maximum tokens per minute. */
  max_tokens_per_1_minute?: number;
  /** The maximum images per minute. Only relevant for certain models. */
  max_images_per_1_minute?: number;
  /** The maximum audio megabytes per minute. Only relevant for certain models. */
  max_audio_megabytes_per_1_minute?: number;
  /** The maximum requests per day. Only relevant for certain models. */
  max_requests_per_1_day?: number;
  /** The maximum batch input tokens per day. Only relevant for certain models. */
  batch_1_day_max_input_tokens?: number;
};

/** Represents an individual service account in a project. */
export type ProjectServiceAccount = {
  /** The object type, which is always `organization.project.service_account` */
  object: "organization.project.service_account";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the service account */
  name: string;
  /** `owner` or `member` */
  role: "owner" | "member";
  /** The Unix timestamp (in seconds) of when the service account was created */
  created_at: number;
};

export type ProjectServiceAccountApiKey = {
  /** The object type, which is always `organization.project.service_account.api_key` */
  object: "organization.project.service_account.api_key";
  value: string;
  name: string;
  created_at: number;
  id: string;
};

export type ProjectServiceAccountCreateRequest = {
  /** The name of the service account being created. */
  name: string;
};

export type ProjectServiceAccountCreateResponse = {
  object: "organization.project.service_account";
  id: string;
  name: string;
  /** Service accounts can only have one role of type `member` */
  role: "member";
  created_at: number;
  api_key: ProjectServiceAccountApiKey;
};

export type ProjectServiceAccountDeleteResponse = {
  object: "organization.project.service_account.deleted";
  id: string;
  deleted: boolean;
};

export type ProjectServiceAccountListResponse = {
  object: "list";
  data: (ProjectServiceAccount)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ProjectUpdateRequest = {
  /** The updated name of the project, this name appears in reports. */
  name: string;
};

/** Represents an individual user in a project. */
export type ProjectUser = {
  /** The object type, which is always `organization.project.user` */
  object: "organization.project.user";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the user */
  name: string;
  /** The email address of the user */
  email: string;
  /** `owner` or `member` */
  role: "owner" | "member";
  /** The Unix timestamp (in seconds) of when the project was added. */
  added_at: number;
};

export type ProjectUserCreateRequest = {
  /** The ID of the user. */
  user_id: string;
  /** `owner` or `member` */
  role: "owner" | "member";
};

export type ProjectUserDeleteResponse = {
  object: "organization.project.user.deleted";
  id: string;
  deleted: boolean;
};

export type ProjectUserListResponse = {
  object: string;
  data: (ProjectUser)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type ProjectUserUpdateRequest = {
  /** `owner` or `member` */
  role: "owner" | "member";
};

/** A realtime client event. */
export type RealtimeClientEvent = RealtimeClientEventConversationItemCreate | RealtimeClientEventConversationItemDelete | RealtimeClientEventConversationItemRetrieve | RealtimeClientEventConversationItemTruncate | RealtimeClientEventInputAudioBufferAppend | RealtimeClientEventInputAudioBufferClear | RealtimeClientEventOutputAudioBufferClear | RealtimeClientEventInputAudioBufferCommit | RealtimeClientEventResponseCancel | RealtimeClientEventResponseCreate | RealtimeClientEventSessionUpdate | RealtimeClientEventTranscriptionSessionUpdate;

/** Add a new Item to the Conversation's context, including messages, function  calls, and function call responses. This event can be used both to populate a  "history" of the conversation and to add new items mid-stream, but has the  current limitation that it cannot populate assistant audio messages.  If successful, the server will respond with a `conversation.item.created`  event, otherwise an `error` event will be sent. */
export type RealtimeClientEventConversationItemCreate = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `conversation.item.create`. */
  type: "conversation.item.create";
  /** The ID of the preceding item after which the new item will be inserted.  If not set, the new item will be appended to the end of the conversation. If set to `root`, the new item will be added to the beginning of the conversation. If set to an existing ID, it allows an item to be inserted mid-conversation. If the ID cannot be found, an error will be returned and the item will not be added.  */
  previous_item_id?: string;
  item: RealtimeConversationItem;
};

/** Send this event when you want to remove any item from the conversation  history. The server will respond with a `conversation.item.deleted` event,  unless the item does not exist in the conversation history, in which case the  server will respond with an error. */
export type RealtimeClientEventConversationItemDelete = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `conversation.item.delete`. */
  type: "conversation.item.delete";
  /** The ID of the item to delete. */
  item_id: string;
};

/** Send this event when you want to retrieve the server's representation of a specific item in the conversation history. This is useful, for example, to inspect user audio after noise cancellation and VAD. The server will respond with a `conversation.item.retrieved` event,  unless the item does not exist in the conversation history, in which case the  server will respond with an error. */
export type RealtimeClientEventConversationItemRetrieve = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `conversation.item.retrieve`. */
  type: "conversation.item.retrieve";
  /** The ID of the item to retrieve. */
  item_id: string;
};

/** Send this event to truncate a previous assistant message’s audio. The server  will produce audio faster than realtime, so this event is useful when the user  interrupts to truncate audio that has already been sent to the client but not  yet played. This will synchronize the server's understanding of the audio with  the client's playback.  Truncating audio will delete the server-side text transcript to ensure there  is not text in the context that hasn't been heard by the user.  If successful, the server will respond with a `conversation.item.truncated`  event. */
export type RealtimeClientEventConversationItemTruncate = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `conversation.item.truncate`. */
  type: "conversation.item.truncate";
  /** The ID of the assistant message item to truncate. Only assistant message  items can be truncated.  */
  item_id: string;
  /** The index of the content part to truncate. Set this to 0. */
  content_index: number;
  /** Inclusive duration up to which audio is truncated, in milliseconds. If  the audio_end_ms is greater than the actual audio duration, the server  will respond with an error.  */
  audio_end_ms: number;
};

/** Send this event to append audio bytes to the input audio buffer. The audio  buffer is temporary storage you can write to and later commit. In Server VAD  mode, the audio buffer is used to detect speech and the server will decide  when to commit. When Server VAD is disabled, you must commit the audio buffer manually.  The client may choose how much audio to place in each event up to a maximum  of 15 MiB, for example streaming smaller chunks from the client may allow the  VAD to be more responsive. Unlike made other client events, the server will  not send a confirmation response to this event. */
export type RealtimeClientEventInputAudioBufferAppend = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `input_audio_buffer.append`. */
  type: "input_audio_buffer.append";
  /** Base64-encoded audio bytes. This must be in the format specified by the  `input_audio_format` field in the session configuration.  */
  audio: string;
};

/** Send this event to clear the audio bytes in the buffer. The server will  respond with an `input_audio_buffer.cleared` event. */
export type RealtimeClientEventInputAudioBufferClear = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `input_audio_buffer.clear`. */
  type: "input_audio_buffer.clear";
};

/** Send this event to commit the user input audio buffer, which will create a  new user message item in the conversation. This event will produce an error  if the input audio buffer is empty. When in Server VAD mode, the client does  not need to send this event, the server will commit the audio buffer  automatically.  Committing the input audio buffer will trigger input audio transcription  (if enabled in session configuration), but it will not create a response  from the model. The server will respond with an `input_audio_buffer.committed`  event. */
export type RealtimeClientEventInputAudioBufferCommit = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `input_audio_buffer.commit`. */
  type: "input_audio_buffer.commit";
};

/** **WebRTC Only:** Emit to cut off the current audio response. This will trigger the server to stop generating audio and emit a `output_audio_buffer.cleared` event. This  event should be preceded by a `response.cancel` client event to stop the  generation of the current response. [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc). */
export type RealtimeClientEventOutputAudioBufferClear = {
  /** The unique ID of the client event used for error handling. */
  event_id?: string;
  /** The event type, must be `output_audio_buffer.clear`. */
  type: "output_audio_buffer.clear";
};

/** Send this event to cancel an in-progress response. The server will respond  with a `response.cancelled` event or an error if there is no response to  cancel. */
export type RealtimeClientEventResponseCancel = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `response.cancel`. */
  type: "response.cancel";
  /** A specific response ID to cancel - if not provided, will cancel an  in-progress response in the default conversation.  */
  response_id?: string;
};

/** This event instructs the server to create a Response, which means triggering  model inference. When in Server VAD mode, the server will create Responses  automatically.  A Response will include at least one Item, and may have two, in which case  the second will be a function call. These Items will be appended to the  conversation history.  The server will respond with a `response.created` event, events for Items  and content created, and finally a `response.done` event to indicate the  Response is complete.  The `response.create` event includes inference configuration like  `instructions`, and `temperature`. These fields will override the Session's  configuration for this Response only. */
export type RealtimeClientEventResponseCreate = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `response.create`. */
  type: "response.create";
  response?: RealtimeResponseCreateParams;
};

/** Send this event to update the session’s default configuration. The client may send this event at any time to update any field, except for `voice`. However, note that once a session has been initialized with a particular `model`, it can’t be changed to another model using `session.update`.  When the server receives a `session.update`, it will respond with a `session.updated` event showing the full, effective configuration. Only the fields that are present are updated. To clear a field like `instructions`, pass an empty string. */
export type RealtimeClientEventSessionUpdate = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `session.update`. */
  type: "session.update";
  session: RealtimeSessionCreateRequest;
};

/** Send this event to update a transcription session. */
export type RealtimeClientEventTranscriptionSessionUpdate = {
  /** Optional client-generated ID used to identify this event. */
  event_id?: string;
  /** The event type, must be `transcription_session.update`. */
  type: "transcription_session.update";
  session: RealtimeTranscriptionSessionCreateRequest;
};

/** The item to add to the conversation. */
export type RealtimeConversationItem = {
  /** The unique ID of the item, this can be generated by the client to help  manage server-side context, but is not required because the server will  generate one if not provided.  */
  id?: string;
  /** The type of the item (`message`, `function_call`, `function_call_output`).  */
  type?: "message" | "function_call" | "function_call_output";
  /** Identifier for the API object being returned - always `realtime.item`.  */
  object?: "realtime.item";
  /** The status of the item (`completed`, `incomplete`). These have no effect  on the conversation, but are accepted for consistency with the  `conversation.item.created` event.  */
  status?: "completed" | "incomplete";
  /** The role of the message sender (`user`, `assistant`, `system`), only  applicable for `message` items.  */
  role?: "user" | "assistant" | "system";
  /** The content of the message, applicable for `message` items.  - Message items of role `system` support only `input_text` content - Message items of role `user` support `input_text` and `input_audio`    content - Message items of role `assistant` support `text` content.  */
  content?: ({ type?: "input_audio" | "input_text" | "item_reference" | "text"; text?: string; id?: string; audio?: string; transcript?: string })[];
  /** The ID of the function call (for `function_call` and  `function_call_output` items). If passed on a `function_call_output`  item, the server will check that a `function_call` item with the same  ID exists in the conversation history.  */
  call_id?: string;
  /** The name of the function being called (for `function_call` items).  */
  name?: string;
  /** The arguments of the function call (for `function_call` items).  */
  arguments?: string;
  /** The output of the function call (for `function_call_output` items).  */
  output?: string;
};

/** The item to add to the conversation. */
export type RealtimeConversationItemWithReference = {
  /** For an item of type (`message` | `function_call` | `function_call_output`) this field allows the client to assign the unique ID of the item. It is not required because the server will generate one if not provided.  For an item of type `item_reference`, this field is required and is a reference to any item that has previously existed in the conversation.  */
  id?: string;
  /** The type of the item (`message`, `function_call`, `function_call_output`, `item_reference`).  */
  type?: "message" | "function_call" | "function_call_output";
  /** Identifier for the API object being returned - always `realtime.item`.  */
  object?: "realtime.item";
  /** The status of the item (`completed`, `incomplete`). These have no effect  on the conversation, but are accepted for consistency with the  `conversation.item.created` event.  */
  status?: "completed" | "incomplete";
  /** The role of the message sender (`user`, `assistant`, `system`), only  applicable for `message` items.  */
  role?: "user" | "assistant" | "system";
  /** The content of the message, applicable for `message` items.  - Message items of role `system` support only `input_text` content - Message items of role `user` support `input_text` and `input_audio`    content - Message items of role `assistant` support `text` content.  */
  content?: ({ type?: "input_audio" | "input_text" | "item_reference" | "text"; text?: string; id?: string; audio?: string; transcript?: string })[];
  /** The ID of the function call (for `function_call` and  `function_call_output` items). If passed on a `function_call_output`  item, the server will check that a `function_call` item with the same  ID exists in the conversation history.  */
  call_id?: string;
  /** The name of the function being called (for `function_call` items).  */
  name?: string;
  /** The arguments of the function call (for `function_call` items).  */
  arguments?: string;
  /** The output of the function call (for `function_call_output` items).  */
  output?: string;
};

/** The response resource. */
export type RealtimeResponse = {
  /** The unique ID of the response. */
  id?: string;
  /** The object type, must be `realtime.response`. */
  object?: "realtime.response";
  /** The final status of the response (`completed`, `cancelled`, `failed`, or  `incomplete`).  */
  status?: "completed" | "cancelled" | "failed" | "incomplete";
  /** Additional details about the status. */
  status_details?: { type?: "completed" | "cancelled" | "failed" | "incomplete"; reason?: "turn_detected" | "client_cancelled" | "max_output_tokens" | "content_filter"; error?: { type?: string; code?: string } };
  /** The list of output items generated by the response. */
  output?: (RealtimeConversationItem)[];
  metadata?: Metadata;
  /** Usage statistics for the Response, this will correspond to billing. A  Realtime API session will maintain a conversation context and append new  Items to the Conversation, thus output from previous turns (text and  audio tokens) will become the input for later turns.  */
  usage?: { total_tokens?: number; input_tokens?: number; output_tokens?: number; input_token_details?: { cached_tokens?: number; text_tokens?: number; audio_tokens?: number }; output_token_details?: { text_tokens?: number; audio_tokens?: number } };
  /** Which conversation the response is added to, determined by the `conversation` field in the `response.create` event. If `auto`, the response will be added to the default conversation and the value of `conversation_id` will be an id like `conv_1234`. If `none`, the response will not be added to any conversation and the value of `conversation_id` will be `null`. If responses are being triggered by server VAD, the response will be added to the default conversation, thus the `conversation_id` will be an id like `conv_1234`.  */
  conversation_id?: string;
  /** The voice the model used to respond. Current voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`.  */
  voice?: VoiceIdsShared;
  /** The set of modalities the model used to respond. If there are multiple modalities, the model will pick one, for example if `modalities` is `["text", "audio"]`, the model could be responding in either text or audio.  */
  modalities?: ("text" | "audio")[];
  /** The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.  */
  output_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.  */
  temperature?: number;
  /** Maximum number of output tokens for a single assistant response, inclusive of tool calls, that was used in this response.  */
  max_output_tokens?: number | "inf";
};

/** Create a new Realtime response with these parameters */
export type RealtimeResponseCreateParams = {
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: ("text" | "audio")[];
  /** The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the  desired behavior.  Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.  */
  instructions?: string;
  /** The voice the model uses to respond. Voice cannot be changed during the  session once the model has responded with audio at least once. Current  voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`.  */
  voice?: VoiceIdsShared;
  /** The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.  */
  output_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Tools (functions) available to the model. */
  tools?: ({ type?: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[];
  /** How the model chooses tools. Options are `auto`, `none`, `required`, or  specify a function, like `{"type": "function", "function": {"name": "my_function"}}`.  */
  tool_choice?: string;
  /** Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.  */
  temperature?: number;
  /** Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or `inf` for the maximum available tokens for a given model. Defaults to `inf`.  */
  max_response_output_tokens?: number | "inf";
  /** Controls which conversation the response is added to. Currently supports `auto` and `none`, with `auto` as the default value. The `auto` value means that the contents of the response will be added to the default conversation. Set this to `none` to create an out-of-band response which  will not add items to default conversation.  */
  conversation?: string | "auto" | "none";
  metadata?: Metadata;
  /** Input items to include in the prompt for the model. Using this field creates a new context for this Response instead of using the default conversation. An empty array `[]` will clear the context for this Response. Note that this can include references to items from the default conversation.  */
  input?: (RealtimeConversationItemWithReference)[];
};

/** A realtime server event. */
export type RealtimeServerEvent = RealtimeServerEventConversationCreated | RealtimeServerEventConversationItemCreated | RealtimeServerEventConversationItemDeleted | RealtimeServerEventConversationItemInputAudioTranscriptionCompleted | RealtimeServerEventConversationItemInputAudioTranscriptionDelta | RealtimeServerEventConversationItemInputAudioTranscriptionFailed | RealtimeServerEventConversationItemRetrieved | RealtimeServerEventConversationItemTruncated | RealtimeServerEventError | RealtimeServerEventInputAudioBufferCleared | RealtimeServerEventInputAudioBufferCommitted | RealtimeServerEventInputAudioBufferSpeechStarted | RealtimeServerEventInputAudioBufferSpeechStopped | RealtimeServerEventRateLimitsUpdated | RealtimeServerEventResponseAudioDelta | RealtimeServerEventResponseAudioDone | RealtimeServerEventResponseAudioTranscriptDelta | RealtimeServerEventResponseAudioTranscriptDone | RealtimeServerEventResponseContentPartAdded | RealtimeServerEventResponseContentPartDone | RealtimeServerEventResponseCreated | RealtimeServerEventResponseDone | RealtimeServerEventResponseFunctionCallArgumentsDelta | RealtimeServerEventResponseFunctionCallArgumentsDone | RealtimeServerEventResponseOutputItemAdded | RealtimeServerEventResponseOutputItemDone | RealtimeServerEventResponseTextDelta | RealtimeServerEventResponseTextDone | RealtimeServerEventSessionCreated | RealtimeServerEventSessionUpdated | RealtimeServerEventTranscriptionSessionUpdated | RealtimeServerEventOutputAudioBufferStarted | RealtimeServerEventOutputAudioBufferStopped | RealtimeServerEventOutputAudioBufferCleared;

/** Returned when a conversation is created. Emitted right after session creation. */
export type RealtimeServerEventConversationCreated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.created`. */
  type: "conversation.created";
  /** The conversation resource. */
  conversation: { id?: string; object?: string };
};

/** Returned when a conversation item is created. There are several scenarios that produce this event:   - The server is generating a Response, which if successful will produce      either one or two Items, which will be of type `message`      (role `assistant`) or type `function_call`.   - The input audio buffer has been committed, either by the client or the      server (in `server_vad` mode). The server will take the content of the      input audio buffer and add it to a new user message Item.   - The client has sent a `conversation.item.create` event to add a new Item      to the Conversation. */
export type RealtimeServerEventConversationItemCreated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.created`. */
  type: "conversation.item.created";
  /** The ID of the preceding item in the Conversation context, allows the  client to understand the order of the conversation.  */
  previous_item_id: string;
  item: RealtimeConversationItem;
};

/** Returned when an item in the conversation is deleted by the client with a  `conversation.item.delete` event. This event is used to synchronize the  server's understanding of the conversation history with the client's view. */
export type RealtimeServerEventConversationItemDeleted = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.deleted`. */
  type: "conversation.item.deleted";
  /** The ID of the item that was deleted. */
  item_id: string;
};

/** This event is the output of audio transcription for user audio written to the  user audio buffer. Transcription begins when the input audio buffer is  committed by the client or server (in `server_vad` mode). Transcription runs  asynchronously with Response creation, so this event may come before or after  the Response events.  Realtime API models accept audio natively, and thus input transcription is a  separate process run on a separate ASR (Automatic Speech Recognition) model,  currently always `whisper-1`. Thus the transcript may diverge somewhat from  the model's interpretation, and should be treated as a rough guide. */
export type RealtimeServerEventConversationItemInputAudioTranscriptionCompleted = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.input_audio_transcription.completed`.  */
  type: "conversation.item.input_audio_transcription.completed";
  /** The ID of the user message item containing the audio. */
  item_id: string;
  /** The index of the content part containing the audio. */
  content_index: number;
  /** The transcribed text. */
  transcript: string;
  /** The log probabilities of the transcription. */
  logprobs?: (LogProbProperties)[] | null;
};

/** Returned when the text value of an input audio transcription content part is updated. */
export type RealtimeServerEventConversationItemInputAudioTranscriptionDelta = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.input_audio_transcription.delta`. */
  type: "conversation.item.input_audio_transcription.delta";
  /** The ID of the item. */
  item_id: string;
  /** The index of the content part in the item's content array. */
  content_index?: number;
  /** The text delta. */
  delta?: string;
  /** The log probabilities of the transcription. */
  logprobs?: (LogProbProperties)[] | null;
};

/** Returned when input audio transcription is configured, and a transcription  request for a user message failed. These events are separate from other  `error` events so that the client can identify the related Item. */
export type RealtimeServerEventConversationItemInputAudioTranscriptionFailed = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.input_audio_transcription.failed`.  */
  type: "conversation.item.input_audio_transcription.failed";
  /** The ID of the user message item. */
  item_id: string;
  /** The index of the content part containing the audio. */
  content_index: number;
  /** Details of the transcription error. */
  error: { type?: string; code?: string; message?: string; param?: string };
};

/** Returned when a conversation item is retrieved with `conversation.item.retrieve`. */
export type RealtimeServerEventConversationItemRetrieved = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.retrieved`. */
  type: "conversation.item.retrieved";
  item: RealtimeConversationItem;
};

/** Returned when an earlier assistant audio message item is truncated by the  client with a `conversation.item.truncate` event. This event is used to  synchronize the server's understanding of the audio with the client's playback.  This action will truncate the audio and remove the server-side text transcript  to ensure there is no text in the context that hasn't been heard by the user. */
export type RealtimeServerEventConversationItemTruncated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `conversation.item.truncated`. */
  type: "conversation.item.truncated";
  /** The ID of the assistant message item that was truncated. */
  item_id: string;
  /** The index of the content part that was truncated. */
  content_index: number;
  /** The duration up to which the audio was truncated, in milliseconds.  */
  audio_end_ms: number;
};

/** Returned when an error occurs, which could be a client problem or a server  problem. Most errors are recoverable and the session will stay open, we  recommend to implementors to monitor and log error messages by default. */
export type RealtimeServerEventError = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `error`. */
  type: "error";
  /** Details of the error. */
  error: { type: string; code?: string | null; message: string; param?: string | null; event_id?: string | null };
};

/** Returned when the input audio buffer is cleared by the client with a  `input_audio_buffer.clear` event. */
export type RealtimeServerEventInputAudioBufferCleared = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `input_audio_buffer.cleared`. */
  type: "input_audio_buffer.cleared";
};

/** Returned when an input audio buffer is committed, either by the client or  automatically in server VAD mode. The `item_id` property is the ID of the user message item that will be created, thus a `conversation.item.created` event  will also be sent to the client. */
export type RealtimeServerEventInputAudioBufferCommitted = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `input_audio_buffer.committed`. */
  type: "input_audio_buffer.committed";
  /** The ID of the preceding item after which the new item will be inserted.  */
  previous_item_id: string;
  /** The ID of the user message item that will be created. */
  item_id: string;
};

/** Sent by the server when in `server_vad` mode to indicate that speech has been  detected in the audio buffer. This can happen any time audio is added to the  buffer (unless speech is already detected). The client may want to use this  event to interrupt audio playback or provide visual feedback to the user.   The client should expect to receive a `input_audio_buffer.speech_stopped` event  when speech stops. The `item_id` property is the ID of the user message item  that will be created when speech stops and will also be included in the  `input_audio_buffer.speech_stopped` event (unless the client manually commits  the audio buffer during VAD activation). */
export type RealtimeServerEventInputAudioBufferSpeechStarted = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `input_audio_buffer.speech_started`. */
  type: "input_audio_buffer.speech_started";
  /** Milliseconds from the start of all audio written to the buffer during the  session when speech was first detected. This will correspond to the  beginning of audio sent to the model, and thus includes the  `prefix_padding_ms` configured in the Session.  */
  audio_start_ms: number;
  /** The ID of the user message item that will be created when speech stops.  */
  item_id: string;
};

/** Returned in `server_vad` mode when the server detects the end of speech in  the audio buffer. The server will also send an `conversation.item.created`  event with the user message item that is created from the audio buffer. */
export type RealtimeServerEventInputAudioBufferSpeechStopped = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `input_audio_buffer.speech_stopped`. */
  type: "input_audio_buffer.speech_stopped";
  /** Milliseconds since the session started when speech stopped. This will  correspond to the end of audio sent to the model, and thus includes the  `min_silence_duration_ms` configured in the Session.  */
  audio_end_ms: number;
  /** The ID of the user message item that will be created. */
  item_id: string;
};

/** **WebRTC Only:** Emitted when the output audio buffer is cleared. This happens either in VAD mode when the user has interrupted (`input_audio_buffer.speech_started`), or when the client has emitted the `output_audio_buffer.clear` event to manually cut off the current audio response. [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc). */
export type RealtimeServerEventOutputAudioBufferCleared = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `output_audio_buffer.cleared`. */
  type: "output_audio_buffer.cleared";
  /** The unique ID of the response that produced the audio. */
  response_id: string;
};

/** **WebRTC Only:** Emitted when the server begins streaming audio to the client. This event is emitted after an audio content part has been added (`response.content_part.added`) to the response. [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc). */
export type RealtimeServerEventOutputAudioBufferStarted = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `output_audio_buffer.started`. */
  type: "output_audio_buffer.started";
  /** The unique ID of the response that produced the audio. */
  response_id: string;
};

/** **WebRTC Only:** Emitted when the output audio buffer has been completely drained on the server, and no more audio is forthcoming. This event is emitted after the full response data has been sent to the client (`response.done`). [Learn more](/docs/guides/realtime-model-capabilities#client-and-server-events-for-audio-in-webrtc). */
export type RealtimeServerEventOutputAudioBufferStopped = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `output_audio_buffer.stopped`. */
  type: "output_audio_buffer.stopped";
  /** The unique ID of the response that produced the audio. */
  response_id: string;
};

/** Emitted at the beginning of a Response to indicate the updated rate limits.  When a Response is created some tokens will be "reserved" for the output  tokens, the rate limits shown here reflect that reservation, which is then  adjusted accordingly once the Response is completed. */
export type RealtimeServerEventRateLimitsUpdated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `rate_limits.updated`. */
  type: "rate_limits.updated";
  /** List of rate limit information. */
  rate_limits: ({ name?: "requests" | "tokens"; limit?: number; remaining?: number; reset_seconds?: number })[];
};

/** Returned when the model-generated audio is updated. */
export type RealtimeServerEventResponseAudioDelta = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.audio.delta`. */
  type: "response.audio.delta";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** Base64-encoded audio data delta. */
  delta: string;
};

/** Returned when the model-generated audio is done. Also emitted when a Response is interrupted, incomplete, or cancelled. */
export type RealtimeServerEventResponseAudioDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.audio.done`. */
  type: "response.audio.done";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
};

/** Returned when the model-generated transcription of audio output is updated. */
export type RealtimeServerEventResponseAudioTranscriptDelta = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.audio_transcript.delta`. */
  type: "response.audio_transcript.delta";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** The transcript delta. */
  delta: string;
};

/** Returned when the model-generated transcription of audio output is done streaming. Also emitted when a Response is interrupted, incomplete, or cancelled. */
export type RealtimeServerEventResponseAudioTranscriptDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.audio_transcript.done`. */
  type: "response.audio_transcript.done";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** The final transcript of the audio. */
  transcript: string;
};

/** Returned when a new content part is added to an assistant message item during response generation. */
export type RealtimeServerEventResponseContentPartAdded = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.content_part.added`. */
  type: "response.content_part.added";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item to which the content part was added. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** The content part that was added. */
  part: { type?: "audio" | "text"; text?: string; audio?: string; transcript?: string };
};

/** Returned when a content part is done streaming in an assistant message item. Also emitted when a Response is interrupted, incomplete, or cancelled. */
export type RealtimeServerEventResponseContentPartDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.content_part.done`. */
  type: "response.content_part.done";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** The content part that is done. */
  part: { type?: "audio" | "text"; text?: string; audio?: string; transcript?: string };
};

/** Returned when a new Response is created. The first event of response creation, where the response is in an initial state of `in_progress`. */
export type RealtimeServerEventResponseCreated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.created`. */
  type: "response.created";
  response: RealtimeResponse;
};

/** Returned when a Response is done streaming. Always emitted, no matter the  final state. The Response object included in the `response.done` event will  include all output Items in the Response but will omit the raw audio data. */
export type RealtimeServerEventResponseDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.done`. */
  type: "response.done";
  response: RealtimeResponse;
};

/** Returned when the model-generated function call arguments are updated. */
export type RealtimeServerEventResponseFunctionCallArgumentsDelta = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.function_call_arguments.delta`.  */
  type: "response.function_call_arguments.delta";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the function call item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The ID of the function call. */
  call_id: string;
  /** The arguments delta as a JSON string. */
  delta: string;
};

/** Returned when the model-generated function call arguments are done streaming. Also emitted when a Response is interrupted, incomplete, or cancelled. */
export type RealtimeServerEventResponseFunctionCallArgumentsDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.function_call_arguments.done`.  */
  type: "response.function_call_arguments.done";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the function call item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The ID of the function call. */
  call_id: string;
  /** The final arguments as a JSON string. */
  arguments: string;
};

/** Returned when a new Item is created during Response generation. */
export type RealtimeServerEventResponseOutputItemAdded = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.output_item.added`. */
  type: "response.output_item.added";
  /** The ID of the Response to which the item belongs. */
  response_id: string;
  /** The index of the output item in the Response. */
  output_index: number;
  item: RealtimeConversationItem;
};

/** Returned when an Item is done streaming. Also emitted when a Response is  interrupted, incomplete, or cancelled. */
export type RealtimeServerEventResponseOutputItemDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.output_item.done`. */
  type: "response.output_item.done";
  /** The ID of the Response to which the item belongs. */
  response_id: string;
  /** The index of the output item in the Response. */
  output_index: number;
  item: RealtimeConversationItem;
};

/** Returned when the text value of a "text" content part is updated. */
export type RealtimeServerEventResponseTextDelta = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.text.delta`. */
  type: "response.text.delta";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** The text delta. */
  delta: string;
};

/** Returned when the text value of a "text" content part is done streaming. Also emitted when a Response is interrupted, incomplete, or cancelled. */
export type RealtimeServerEventResponseTextDone = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `response.text.done`. */
  type: "response.text.done";
  /** The ID of the response. */
  response_id: string;
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item in the response. */
  output_index: number;
  /** The index of the content part in the item's content array. */
  content_index: number;
  /** The final text content. */
  text: string;
};

/** Returned when a Session is created. Emitted automatically when a new  connection is established as the first server event. This event will contain  the default Session configuration. */
export type RealtimeServerEventSessionCreated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `session.created`. */
  type: "session.created";
  session: RealtimeSession;
};

/** Returned when a session is updated with a `session.update` event, unless  there is an error. */
export type RealtimeServerEventSessionUpdated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `session.updated`. */
  type: "session.updated";
  session: RealtimeSession;
};

/** Returned when a transcription session is updated with a `transcription_session.update` event, unless  there is an error. */
export type RealtimeServerEventTranscriptionSessionUpdated = {
  /** The unique ID of the server event. */
  event_id: string;
  /** The event type, must be `transcription_session.updated`. */
  type: "transcription_session.updated";
  session: RealtimeTranscriptionSessionCreateResponse;
};

/** Realtime session object configuration. */
export type RealtimeSession = {
  /** Unique identifier for the session that looks like `sess_1234567890abcdef`.  */
  id?: string;
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The Realtime model used for this session.  */
  model?: "gpt-4o-realtime-preview" | "gpt-4o-realtime-preview-2024-10-01" | "gpt-4o-realtime-preview-2024-12-17" | "gpt-4o-mini-realtime-preview" | "gpt-4o-mini-realtime-preview-2024-12-17";
  /** The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.  Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.  */
  instructions?: string;
  /** The voice the model uses to respond. Voice cannot be changed during the  session once the model has responded with audio at least once. Current  voice options are `alloy`, `ash`, `ballad`, `coral`, `echo` `sage`,  `shimmer` and `verse`.  */
  voice?: VoiceIdsShared;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,  single channel (mono), and little-endian byte order.  */
  input_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, output audio is sampled at a rate of 24kHz.  */
  output_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.  */
  input_audio_transcription?: { model?: string; language?: string; prompt?: string };
  /** Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech. Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.  */
  turn_detection?: { type?: "server_vad" | "semantic_vad"; eagerness?: "low" | "medium" | "high" | "auto"; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number; create_response?: boolean; interrupt_response?: boolean };
  /** Configuration for input audio noise reduction. This can be set to `null` to turn off. Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model. Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.  */
  input_audio_noise_reduction?: { type?: "near_field" | "far_field" };
  /** Tools (functions) available to the model. */
  tools?: ({ type?: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[];
  /** How the model chooses tools. Options are `auto`, `none`, `required`, or  specify a function.  */
  tool_choice?: string;
  /** Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.  */
  temperature?: number;
  /** Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or `inf` for the maximum available tokens for a given model. Defaults to `inf`.  */
  max_response_output_tokens?: number | "inf";
};

/** Realtime session object configuration. */
export type RealtimeSessionCreateRequest = {
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The Realtime model used for this session.  */
  model?: "gpt-4o-realtime-preview" | "gpt-4o-realtime-preview-2024-10-01" | "gpt-4o-realtime-preview-2024-12-17" | "gpt-4o-mini-realtime-preview" | "gpt-4o-mini-realtime-preview-2024-12-17";
  /** The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the desired behavior.  Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.  */
  instructions?: string;
  /** The voice the model uses to respond. Voice cannot be changed during the  session once the model has responded with audio at least once. Current  voice options are `alloy`, `ash`, `ballad`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, `shimmer`, and `verse`.  */
  voice?: VoiceIdsShared;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,  single channel (mono), and little-endian byte order.  */
  input_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, output audio is sampled at a rate of 24kHz.  */
  output_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs  asynchronously through [the /audio/transcriptions endpoint](https://platform.openai.com/docs/api-reference/audio/createTranscription) and should be treated as guidance of input audio content rather than precisely what the model heard. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.  */
  input_audio_transcription?: { model?: string; language?: string; prompt?: string };
  /** Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech. Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.  */
  turn_detection?: { type?: "server_vad" | "semantic_vad"; eagerness?: "low" | "medium" | "high" | "auto"; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number; create_response?: boolean; interrupt_response?: boolean };
  /** Configuration for input audio noise reduction. This can be set to `null` to turn off. Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model. Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.  */
  input_audio_noise_reduction?: { type?: "near_field" | "far_field" };
  /** Tools (functions) available to the model. */
  tools?: ({ type?: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[];
  /** How the model chooses tools. Options are `auto`, `none`, `required`, or  specify a function.  */
  tool_choice?: string;
  /** Sampling temperature for the model, limited to [0.6, 1.2]. For audio models a temperature of 0.8 is highly recommended for best performance.  */
  temperature?: number;
  /** Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or `inf` for the maximum available tokens for a given model. Defaults to `inf`.  */
  max_response_output_tokens?: number | "inf";
};

/** A new Realtime session configuration, with an ephermeral key. Default TTL for keys is one minute. */
export type RealtimeSessionCreateResponse = {
  /** Ephemeral key returned by the API. */
  client_secret: { value: string; expires_at: number };
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The default system instructions (i.e. system message) prepended to model  calls. This field allows the client to guide the model on desired  responses. The model can be instructed on response content and format,  (e.g. "be extremely succinct", "act friendly", "here are examples of good  responses") and on audio behavior (e.g. "talk quickly", "inject emotion  into your voice", "laugh frequently"). The instructions are not guaranteed  to be followed by the model, but they provide guidance to the model on the  desired behavior.  Note that the server sets default instructions which will be used if this  field is not set and are visible in the `session.created` event at the  start of the session.  */
  instructions?: string;
  /** The voice the model uses to respond. Voice cannot be changed during the  session once the model has responded with audio at least once. Current  voice options are `alloy`, `ash`, `ballad`, `coral`, `echo` `sage`,  `shimmer` and `verse`.  */
  voice?: VoiceIdsShared;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.  */
  input_audio_format?: string;
  /** The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.  */
  output_audio_format?: string;
  /** Configuration for input audio transcription, defaults to off and can be  set to `null` to turn off once on. Input audio transcription is not native  to the model, since the model consumes audio directly. Transcription runs  asynchronously through Whisper and should be treated as rough guidance  rather than the representation understood by the model.  */
  input_audio_transcription?: { model?: string };
  /** Configuration for turn detection. Can be set to `null` to turn off. Server  VAD means that the model will detect the start and end of speech based on  audio volume and respond at the end of user speech.  */
  turn_detection?: { type?: string; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number };
  /** Tools (functions) available to the model. */
  tools?: ({ type?: "function"; name?: string; description?: string; parameters?: { [key: string]: unknown } })[];
  /** How the model chooses tools. Options are `auto`, `none`, `required`, or  specify a function.  */
  tool_choice?: string;
  /** Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.  */
  temperature?: number;
  /** Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or `inf` for the maximum available tokens for a given model. Defaults to `inf`.  */
  max_response_output_tokens?: number | "inf";
};

/** Realtime transcription session object configuration. */
export type RealtimeTranscriptionSessionCreateRequest = {
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,  single channel (mono), and little-endian byte order.  */
  input_audio_format?: "pcm16" | "g711_ulaw" | "g711_alaw";
  /** Configuration for input audio transcription. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.  */
  input_audio_transcription?: { model?: "gpt-4o-transcribe" | "gpt-4o-mini-transcribe" | "whisper-1"; language?: string; prompt?: string };
  /** Configuration for turn detection, ether Server VAD or Semantic VAD. This can be set to `null` to turn off, in which case the client must manually trigger model response. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech. Semantic VAD is more advanced and uses a turn detection model (in conjuction with VAD) to semantically estimate whether the user has finished speaking, then dynamically sets a timeout based on this probability. For example, if user audio trails off with "uhhm", the model will score a low probability of turn end and wait longer for the user to continue speaking. This can be useful for more natural conversations, but may have a higher latency.  */
  turn_detection?: { type?: "server_vad" | "semantic_vad"; eagerness?: "low" | "medium" | "high" | "auto"; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number; create_response?: boolean; interrupt_response?: boolean };
  /** Configuration for input audio noise reduction. This can be set to `null` to turn off. Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model. Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.  */
  input_audio_noise_reduction?: { type?: "near_field" | "far_field" };
  /** The set of items to include in the transcription. Current available items are: - `item.input_audio_transcription.logprobs`  */
  include?: (string)[];
};

/** A new Realtime transcription session configuration.  When a session is created on the server via REST API, the session object also contains an ephemeral key. Default TTL for keys is one minute. This  property is not present when a session is updated via the WebSocket API. */
export type RealtimeTranscriptionSessionCreateResponse = {
  /** Ephemeral key returned by the API. Only present when the session is created on the server via REST API.  */
  client_secret: { value: string; expires_at: number };
  /** The set of modalities the model can respond with. To disable audio, set this to ["text"].  */
  modalities?: unknown;
  /** The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.  */
  input_audio_format?: string;
  /** Configuration of the transcription model.  */
  input_audio_transcription?: { model?: "gpt-4o-transcribe" | "gpt-4o-mini-transcribe" | "whisper-1"; language?: string; prompt?: string };
  /** Configuration for turn detection. Can be set to `null` to turn off. Server  VAD means that the model will detect the start and end of speech based on  audio volume and respond at the end of user speech.  */
  turn_detection?: { type?: string; threshold?: number; prefix_padding_ms?: number; silence_duration_ms?: number };
};

/** **o-series models only**  Configuration options for  [reasoning models](https://platform.openai.com/docs/guides/reasoning). */
export type Reasoning = {
  effort?: ReasoningEffort;
  /** A summary of the reasoning performed by the model. This can be useful for debugging and understanding the model's reasoning process. One of `auto`, `concise`, or `detailed`.  */
  summary?: "auto" | "concise" | "detailed" | null;
  /** **Deprecated:** use `summary` instead.  A summary of the reasoning performed by the model. This can be useful for debugging and understanding the model's reasoning process. One of `auto`, `concise`, or `detailed`.  */
  generate_summary?: "auto" | "concise" | "detailed" | null;
};

/** **o-series models only**   Constrains effort on reasoning for  [reasoning models](https://platform.openai.com/docs/guides/reasoning). Currently supported values are `low`, `medium`, and `high`. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response. */
export type ReasoningEffort = "low" | "medium" | "high" | null;

/** A description of the chain of thought used by a reasoning model while generating a response. */
export type ReasoningItem = {
  /** The type of the object. Always `reasoning`.  */
  type: "reasoning";
  /** The unique identifier of the reasoning content.  */
  id: string;
  /** Reasoning text contents.  */
  summary: ({ type: "summary_text"; text: string })[];
  /** The status of the item. One of `in_progress`, `completed`, or `incomplete`. Populated when items are returned via API.  */
  status?: "in_progress" | "completed" | "incomplete";
};

export type Response = ModelResponseProperties & ResponseProperties & { id: string; object: "response"; status?: "completed" | "failed" | "in_progress" | "incomplete"; created_at: number; error: ResponseError; incomplete_details: { reason?: "max_output_tokens" | "content_filter" } | null; output: (OutputItem)[]; output_text?: string | null; usage?: ResponseUsage; parallel_tool_calls: boolean };

/** Emitted when there is a partial audio response. */
export type ResponseAudioDeltaEvent = {
  /** The type of the event. Always `response.audio.delta`.  */
  type: "response.audio.delta";
  /** A chunk of Base64 encoded response audio bytes.  */
  delta: string;
};

/** Emitted when the audio response is complete. */
export type ResponseAudioDoneEvent = {
  /** The type of the event. Always `response.audio.done`.  */
  type: "response.audio.done";
};

/** Emitted when there is a partial transcript of audio. */
export type ResponseAudioTranscriptDeltaEvent = {
  /** The type of the event. Always `response.audio.transcript.delta`.  */
  type: "response.audio.transcript.delta";
  /** The partial transcript of the audio response.  */
  delta: string;
};

/** Emitted when the full audio transcript is completed. */
export type ResponseAudioTranscriptDoneEvent = {
  /** The type of the event. Always `response.audio.transcript.done`.  */
  type: "response.audio.transcript.done";
};

/** Emitted when a partial code snippet is added by the code interpreter. */
export type ResponseCodeInterpreterCallCodeDeltaEvent = {
  /** The type of the event. Always `response.code_interpreter_call.code.delta`.  */
  type: "response.code_interpreter_call.code.delta";
  /** The index of the output item that the code interpreter call is in progress.  */
  output_index: number;
  /** The partial code snippet added by the code interpreter.  */
  delta: string;
};

/** Emitted when code snippet output is finalized by the code interpreter. */
export type ResponseCodeInterpreterCallCodeDoneEvent = {
  /** The type of the event. Always `response.code_interpreter_call.code.done`.  */
  type: "response.code_interpreter_call.code.done";
  /** The index of the output item that the code interpreter call is in progress.  */
  output_index: number;
  /** The final code snippet output by the code interpreter.  */
  code: string;
};

/** Emitted when the code interpreter call is completed. */
export type ResponseCodeInterpreterCallCompletedEvent = {
  /** The type of the event. Always `response.code_interpreter_call.completed`.  */
  type: "response.code_interpreter_call.completed";
  /** The index of the output item that the code interpreter call is in progress.  */
  output_index: number;
  code_interpreter_call: CodeInterpreterToolCall;
};

/** Emitted when a code interpreter call is in progress. */
export type ResponseCodeInterpreterCallInProgressEvent = {
  /** The type of the event. Always `response.code_interpreter_call.in_progress`.  */
  type: "response.code_interpreter_call.in_progress";
  /** The index of the output item that the code interpreter call is in progress.  */
  output_index: number;
  code_interpreter_call: CodeInterpreterToolCall;
};

/** Emitted when the code interpreter is actively interpreting the code snippet. */
export type ResponseCodeInterpreterCallInterpretingEvent = {
  /** The type of the event. Always `response.code_interpreter_call.interpreting`.  */
  type: "response.code_interpreter_call.interpreting";
  /** The index of the output item that the code interpreter call is in progress.  */
  output_index: number;
  code_interpreter_call: CodeInterpreterToolCall;
};

/** Emitted when the model response is complete. */
export type ResponseCompletedEvent = {
  /** The type of the event. Always `response.completed`.  */
  type: "response.completed";
  /** Properties of the completed response.  */
  response: Response;
};

/** Emitted when a new content part is added. */
export type ResponseContentPartAddedEvent = {
  /** The type of the event. Always `response.content_part.added`.  */
  type: "response.content_part.added";
  /** The ID of the output item that the content part was added to.  */
  item_id: string;
  /** The index of the output item that the content part was added to.  */
  output_index: number;
  /** The index of the content part that was added.  */
  content_index: number;
  /** The content part that was added.  */
  part: OutputContent;
};

/** Emitted when a content part is done. */
export type ResponseContentPartDoneEvent = {
  /** The type of the event. Always `response.content_part.done`.  */
  type: "response.content_part.done";
  /** The ID of the output item that the content part was added to.  */
  item_id: string;
  /** The index of the output item that the content part was added to.  */
  output_index: number;
  /** The index of the content part that is done.  */
  content_index: number;
  /** The content part that is done.  */
  part: OutputContent;
};

/** An event that is emitted when a response is created. */
export type ResponseCreatedEvent = {
  /** The type of the event. Always `response.created`.  */
  type: "response.created";
  /** The response that was created.  */
  response: Response;
};

/** An error object returned when the model fails to generate a Response. */
export type ResponseError = {
  code: ResponseErrorCode;
  /** A human-readable description of the error.  */
  message: string;
};

/** The error code for the response. */
export type ResponseErrorCode = "server_error" | "rate_limit_exceeded" | "invalid_prompt" | "vector_store_timeout" | "invalid_image" | "invalid_image_format" | "invalid_base64_image" | "invalid_image_url" | "image_too_large" | "image_too_small" | "image_parse_error" | "image_content_policy_violation" | "invalid_image_mode" | "image_file_too_large" | "unsupported_image_media_type" | "empty_image_file" | "failed_to_download_image" | "image_file_not_found";

/** Emitted when an error occurs. */
export type ResponseErrorEvent = {
  /** The type of the event. Always `error`.  */
  type: "error";
  /** The error code.  */
  code: string | null;
  /** The error message.  */
  message: string;
  /** The error parameter.  */
  param: string | null;
};

/** An event that is emitted when a response fails. */
export type ResponseFailedEvent = {
  /** The type of the event. Always `response.failed`.  */
  type: "response.failed";
  /** The response that failed.  */
  response: Response;
};

/** Emitted when a file search call is completed (results found). */
export type ResponseFileSearchCallCompletedEvent = {
  /** The type of the event. Always `response.file_search_call.completed`.  */
  type: "response.file_search_call.completed";
  /** The index of the output item that the file search call is initiated.  */
  output_index: number;
  /** The ID of the output item that the file search call is initiated.  */
  item_id: string;
};

/** Emitted when a file search call is initiated. */
export type ResponseFileSearchCallInProgressEvent = {
  /** The type of the event. Always `response.file_search_call.in_progress`.  */
  type: "response.file_search_call.in_progress";
  /** The index of the output item that the file search call is initiated.  */
  output_index: number;
  /** The ID of the output item that the file search call is initiated.  */
  item_id: string;
};

/** Emitted when a file search is currently searching. */
export type ResponseFileSearchCallSearchingEvent = {
  /** The type of the event. Always `response.file_search_call.searching`.  */
  type: "response.file_search_call.searching";
  /** The index of the output item that the file search call is searching.  */
  output_index: number;
  /** The ID of the output item that the file search call is initiated.  */
  item_id: string;
};

/** JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so. */
export type ResponseFormatJsonObject = {
  /** The type of response format being defined. Always `json_object`. */
  type: "json_object";
};

/** JSON Schema response format. Used to generate structured JSON responses. Learn more about [Structured Outputs](/docs/guides/structured-outputs). */
export type ResponseFormatJsonSchema = {
  /** The type of response format being defined. Always `json_schema`. */
  type: "json_schema";
  /** Structured Outputs configuration options, including a JSON Schema.  */
  json_schema: { description?: string; name: string; schema?: ResponseFormatJsonSchemaSchema; strict?: boolean | null };
};

/** The schema for the response format, described as a JSON Schema object. Learn how to build JSON schemas [here](https://json-schema.org/). */
export type ResponseFormatJsonSchemaSchema = { [key: string]: unknown };

/** Default response format. Used to generate text responses. */
export type ResponseFormatText = {
  /** The type of response format being defined. Always `text`. */
  type: "text";
};

/** Emitted when there is a partial function-call arguments delta. */
export type ResponseFunctionCallArgumentsDeltaEvent = {
  /** The type of the event. Always `response.function_call_arguments.delta`.  */
  type: "response.function_call_arguments.delta";
  /** The ID of the output item that the function-call arguments delta is added to.  */
  item_id: string;
  /** The index of the output item that the function-call arguments delta is added to.  */
  output_index: number;
  /** The function-call arguments delta that is added.  */
  delta: string;
};

/** Emitted when function-call arguments are finalized. */
export type ResponseFunctionCallArgumentsDoneEvent = {
  type: "response.function_call_arguments.done";
  /** The ID of the item. */
  item_id: string;
  /** The index of the output item. */
  output_index: number;
  /** The function-call arguments. */
  arguments: string;
};

/** Emitted when the response is in progress. */
export type ResponseInProgressEvent = {
  /** The type of the event. Always `response.in_progress`.  */
  type: "response.in_progress";
  /** The response that is in progress.  */
  response: Response;
};

/** An event that is emitted when a response finishes as incomplete. */
export type ResponseIncompleteEvent = {
  /** The type of the event. Always `response.incomplete`.  */
  type: "response.incomplete";
  /** The response that was incomplete.  */
  response: Response;
};

/** A list of Response items. */
export type ResponseItemList = {
  /** The type of object returned, must be `list`. */
  object: "list";
  /** A list of items used to generate this response. */
  data: (ItemResource)[];
  /** Whether there are more items available. */
  has_more: boolean;
  /** The ID of the first item in the list. */
  first_id: string;
  /** The ID of the last item in the list. */
  last_id: string;
};

/** Output types that you would like the model to generate. Most models are capable of generating text, which is the default:  `["text"]`  The `gpt-4o-audio-preview` model can also be used to  [generate audio](/docs/guides/audio). To request that this model generate  both text and audio responses, you can use:  `["text", "audio"]` */
export type ResponseModalities = ("text" | "audio")[] | null;

/** Emitted when a new output item is added. */
export type ResponseOutputItemAddedEvent = {
  /** The type of the event. Always `response.output_item.added`.  */
  type: "response.output_item.added";
  /** The index of the output item that was added.  */
  output_index: number;
  /** The output item that was added.  */
  item: OutputItem;
};

/** Emitted when an output item is marked done. */
export type ResponseOutputItemDoneEvent = {
  /** The type of the event. Always `response.output_item.done`.  */
  type: "response.output_item.done";
  /** The index of the output item that was marked done.  */
  output_index: number;
  /** The output item that was marked done.  */
  item: OutputItem;
};

export type ResponseProperties = {
  /** The unique ID of the previous response to the model. Use this to create multi-turn conversations. Learn more about  [conversation state](/docs/guides/conversation-state).  */
  previous_response_id?: string | null;
  /** Model ID used to generate the response, like `gpt-4o` or `o3`. OpenAI offers a wide range of models with different capabilities, performance characteristics, and price points. Refer to the [model guide](/docs/models) to browse and compare available models.  */
  model?: ModelIdsResponses;
  reasoning?: Reasoning;
  /** An upper bound for the number of tokens that can be generated for a response, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).  */
  max_output_tokens?: number | null;
  /** Inserts a system (or developer) message as the first item in the model's context.  When using along with `previous_response_id`, the instructions from a previous response will not be carried over to the next response. This makes it simple to swap out system (or developer) messages in new responses.  */
  instructions?: string | null;
  /** Configuration options for a text response from the model. Can be plain text or structured JSON data. Learn more: - [Text inputs and outputs](/docs/guides/text) - [Structured Outputs](/docs/guides/structured-outputs)  */
  text?: { format?: TextResponseFormatConfiguration };
  /** An array of tools the model may call while generating a response. You  can specify which tool to use by setting the `tool_choice` parameter.  The two categories of tools you can provide the model are:  - **Built-in tools**: Tools that are provided by OpenAI that extend the   model's capabilities, like [web search](/docs/guides/tools-web-search)   or [file search](/docs/guides/tools-file-search). Learn more about   [built-in tools](/docs/guides/tools). - **Function calls (custom tools)**: Functions that are defined by you,   enabling the model to call your own code. Learn more about   [function calling](/docs/guides/function-calling).  */
  tools?: (Tool)[];
  /** How the model should select which tool (or tools) to use when generating a response. See the `tools` parameter to see how to specify which tools the model can call.  */
  tool_choice?: ToolChoiceOptions | ToolChoiceTypes | ToolChoiceFunction;
  /** The truncation strategy to use for the model response. - `auto`: If the context of this response and previous ones exceeds   the model's context window size, the model will truncate the    response to fit the context window by dropping input items in the   middle of the conversation.  - `disabled` (default): If a model response will exceed the context window    size for a model, the request will fail with a 400 error.  */
  truncation?: "auto" | "disabled" | null;
};

/** Emitted when a new reasoning summary part is added. */
export type ResponseReasoningSummaryPartAddedEvent = {
  /** The type of the event. Always `response.reasoning_summary_part.added`.  */
  type: "response.reasoning_summary_part.added";
  /** The ID of the item this summary part is associated with.  */
  item_id: string;
  /** The index of the output item this summary part is associated with.  */
  output_index: number;
  /** The index of the summary part within the reasoning summary.  */
  summary_index: number;
  /** The summary part that was added.  */
  part: { type: "summary_text"; text: string };
};

/** Emitted when a reasoning summary part is completed. */
export type ResponseReasoningSummaryPartDoneEvent = {
  /** The type of the event. Always `response.reasoning_summary_part.done`.  */
  type: "response.reasoning_summary_part.done";
  /** The ID of the item this summary part is associated with.  */
  item_id: string;
  /** The index of the output item this summary part is associated with.  */
  output_index: number;
  /** The index of the summary part within the reasoning summary.  */
  summary_index: number;
  /** The completed summary part.  */
  part: { type: "summary_text"; text: string };
};

/** Emitted when a delta is added to a reasoning summary text. */
export type ResponseReasoningSummaryTextDeltaEvent = {
  /** The type of the event. Always `response.reasoning_summary_text.delta`.  */
  type: "response.reasoning_summary_text.delta";
  /** The ID of the item this summary text delta is associated with.  */
  item_id: string;
  /** The index of the output item this summary text delta is associated with.  */
  output_index: number;
  /** The index of the summary part within the reasoning summary.  */
  summary_index: number;
  /** The text delta that was added to the summary.  */
  delta: string;
};

/** Emitted when a reasoning summary text is completed. */
export type ResponseReasoningSummaryTextDoneEvent = {
  /** The type of the event. Always `response.reasoning_summary_text.done`.  */
  type: "response.reasoning_summary_text.done";
  /** The ID of the item this summary text is associated with.  */
  item_id: string;
  /** The index of the output item this summary text is associated with.  */
  output_index: number;
  /** The index of the summary part within the reasoning summary.  */
  summary_index: number;
  /** The full text of the completed reasoning summary.  */
  text: string;
};

/** Emitted when there is a partial refusal text. */
export type ResponseRefusalDeltaEvent = {
  /** The type of the event. Always `response.refusal.delta`.  */
  type: "response.refusal.delta";
  /** The ID of the output item that the refusal text is added to.  */
  item_id: string;
  /** The index of the output item that the refusal text is added to.  */
  output_index: number;
  /** The index of the content part that the refusal text is added to.  */
  content_index: number;
  /** The refusal text that is added.  */
  delta: string;
};

/** Emitted when refusal text is finalized. */
export type ResponseRefusalDoneEvent = {
  /** The type of the event. Always `response.refusal.done`.  */
  type: "response.refusal.done";
  /** The ID of the output item that the refusal text is finalized.  */
  item_id: string;
  /** The index of the output item that the refusal text is finalized.  */
  output_index: number;
  /** The index of the content part that the refusal text is finalized.  */
  content_index: number;
  /** The refusal text that is finalized.  */
  refusal: string;
};

export type ResponseStreamEvent = ResponseAudioDeltaEvent | ResponseAudioDoneEvent | ResponseAudioTranscriptDeltaEvent | ResponseAudioTranscriptDoneEvent | ResponseCodeInterpreterCallCodeDeltaEvent | ResponseCodeInterpreterCallCodeDoneEvent | ResponseCodeInterpreterCallCompletedEvent | ResponseCodeInterpreterCallInProgressEvent | ResponseCodeInterpreterCallInterpretingEvent | ResponseCompletedEvent | ResponseContentPartAddedEvent | ResponseContentPartDoneEvent | ResponseCreatedEvent | ResponseErrorEvent | ResponseFileSearchCallCompletedEvent | ResponseFileSearchCallInProgressEvent | ResponseFileSearchCallSearchingEvent | ResponseFunctionCallArgumentsDeltaEvent | ResponseFunctionCallArgumentsDoneEvent | ResponseInProgressEvent | ResponseFailedEvent | ResponseIncompleteEvent | ResponseOutputItemAddedEvent | ResponseOutputItemDoneEvent | ResponseReasoningSummaryPartAddedEvent | ResponseReasoningSummaryPartDoneEvent | ResponseReasoningSummaryTextDeltaEvent | ResponseReasoningSummaryTextDoneEvent | ResponseRefusalDeltaEvent | ResponseRefusalDoneEvent | ResponseTextAnnotationDeltaEvent | ResponseTextDeltaEvent | ResponseTextDoneEvent | ResponseWebSearchCallCompletedEvent | ResponseWebSearchCallInProgressEvent | ResponseWebSearchCallSearchingEvent;

/** Emitted when a text annotation is added. */
export type ResponseTextAnnotationDeltaEvent = {
  /** The type of the event. Always `response.output_text.annotation.added`.  */
  type: "response.output_text.annotation.added";
  /** The ID of the output item that the text annotation was added to.  */
  item_id: string;
  /** The index of the output item that the text annotation was added to.  */
  output_index: number;
  /** The index of the content part that the text annotation was added to.  */
  content_index: number;
  /** The index of the annotation that was added.  */
  annotation_index: number;
  annotation: Annotation;
};

/** Emitted when there is an additional text delta. */
export type ResponseTextDeltaEvent = {
  /** The type of the event. Always `response.output_text.delta`.  */
  type: "response.output_text.delta";
  /** The ID of the output item that the text delta was added to.  */
  item_id: string;
  /** The index of the output item that the text delta was added to.  */
  output_index: number;
  /** The index of the content part that the text delta was added to.  */
  content_index: number;
  /** The text delta that was added.  */
  delta: string;
};

/** Emitted when text content is finalized. */
export type ResponseTextDoneEvent = {
  /** The type of the event. Always `response.output_text.done`.  */
  type: "response.output_text.done";
  /** The ID of the output item that the text content is finalized.  */
  item_id: string;
  /** The index of the output item that the text content is finalized.  */
  output_index: number;
  /** The index of the content part that the text content is finalized.  */
  content_index: number;
  /** The text content that is finalized.  */
  text: string;
};

/** Represents token usage details including input tokens, output tokens, a breakdown of output tokens, and the total tokens used. */
export type ResponseUsage = {
  /** The number of input tokens. */
  input_tokens: number;
  /** A detailed breakdown of the input tokens. */
  input_tokens_details: { cached_tokens: number };
  /** The number of output tokens. */
  output_tokens: number;
  /** A detailed breakdown of the output tokens. */
  output_tokens_details: { reasoning_tokens: number };
  /** The total number of tokens used. */
  total_tokens: number;
};

/** Emitted when a web search call is completed. */
export type ResponseWebSearchCallCompletedEvent = {
  /** The type of the event. Always `response.web_search_call.completed`.  */
  type: "response.web_search_call.completed";
  /** The index of the output item that the web search call is associated with.  */
  output_index: number;
  /** Unique ID for the output item associated with the web search call.  */
  item_id: string;
};

/** Emitted when a web search call is initiated. */
export type ResponseWebSearchCallInProgressEvent = {
  /** The type of the event. Always `response.web_search_call.in_progress`.  */
  type: "response.web_search_call.in_progress";
  /** The index of the output item that the web search call is associated with.  */
  output_index: number;
  /** Unique ID for the output item associated with the web search call.  */
  item_id: string;
};

/** Emitted when a web search call is executing. */
export type ResponseWebSearchCallSearchingEvent = {
  /** The type of the event. Always `response.web_search_call.searching`.  */
  type: "response.web_search_call.searching";
  /** The index of the output item that the web search call is associated with.  */
  output_index: number;
  /** Unique ID for the output item associated with the web search call.  */
  item_id: string;
};

/** Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
export type RunCompletionUsage = {
  /** Number of completion tokens used over the course of the run. */
  completion_tokens: number;
  /** Number of prompt tokens used over the course of the run. */
  prompt_tokens: number;
  /** Total number of tokens used (prompt + completion). */
  total_tokens: number;
};

/** Represents an execution run on a [thread](/docs/api-reference/threads). */
export type RunObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run`. */
  object: "thread.run";
  /** The Unix timestamp (in seconds) for when the run was created. */
  created_at: number;
  /** The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. */
  thread_id: string;
  /** The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. */
  assistant_id: string;
  /** The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`. */
  status: "queued" | "in_progress" | "requires_action" | "cancelling" | "cancelled" | "failed" | "completed" | "incomplete" | "expired";
  /** Details on the action required to continue the run. Will be `null` if no action is required. */
  required_action: { type: "submit_tool_outputs"; submit_tool_outputs: { tool_calls: (RunToolCallObject)[] } } | null;
  /** The last error associated with this run. Will be `null` if there are no errors. */
  last_error: { code: "server_error" | "rate_limit_exceeded" | "invalid_prompt"; message: string } | null;
  /** The Unix timestamp (in seconds) for when the run will expire. */
  expires_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was started. */
  started_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp (in seconds) for when the run failed. */
  failed_at: number | null;
  /** The Unix timestamp (in seconds) for when the run was completed. */
  completed_at: number | null;
  /** Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
  incomplete_details: { reason?: "max_completion_tokens" | "max_prompt_tokens" } | null;
  /** The model that the [assistant](/docs/api-reference/assistants) used for this run. */
  model: string;
  /** The instructions that the [assistant](/docs/api-reference/assistants) used for this run. */
  instructions: string;
  /** The list of tools that the [assistant](/docs/api-reference/assistants) used for this run. */
  tools: (AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction)[];
  metadata: Metadata;
  usage: RunCompletionUsage;
  /** The sampling temperature used for this run. If not set, defaults to 1. */
  temperature?: number | null;
  /** The nucleus sampling value used for this run. If not set, defaults to 1. */
  top_p?: number | null;
  /** The maximum number of prompt tokens specified to have been used over the course of the run.  */
  max_prompt_tokens: number | null;
  /** The maximum number of completion tokens specified to have been used over the course of the run.  */
  max_completion_tokens: number | null;
  truncation_strategy: TruncationObject & unknown;
  tool_choice: AssistantsApiToolChoiceOption & unknown;
  parallel_tool_calls: ParallelToolCalls;
  response_format: AssistantsApiResponseFormatOption;
};

/** Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
export type RunStepCompletionUsage = {
  /** Number of completion tokens used over the course of the run step. */
  completion_tokens: number;
  /** Number of prompt tokens used over the course of the run step. */
  prompt_tokens: number;
  /** Total number of tokens used (prompt + completion). */
  total_tokens: number;
};

/** Represents a run step delta i.e. any changed fields on a run step during streaming. */
export type RunStepDeltaObject = {
  /** The identifier of the run step, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run.step.delta`. */
  object: "thread.run.step.delta";
  /** The delta containing the fields that have changed on the run step. */
  delta: { step_details?: RunStepDeltaStepDetailsMessageCreationObject | RunStepDeltaStepDetailsToolCallsObject };
};

/** Details of the message creation by the run step. */
export type RunStepDeltaStepDetailsMessageCreationObject = {
  /** Always `message_creation`. */
  type: "message_creation";
  message_creation?: { message_id?: string };
};

/** Details of the Code Interpreter tool call the run step was involved in. */
export type RunStepDeltaStepDetailsToolCallsCodeObject = {
  /** The index of the tool call in the tool calls array. */
  index: number;
  /** The ID of the tool call. */
  id?: string;
  /** The type of tool call. This is always going to be `code_interpreter` for this type of tool call. */
  type: "code_interpreter";
  /** The Code Interpreter tool call definition. */
  code_interpreter?: { input?: string; outputs?: (RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject | RunStepDeltaStepDetailsToolCallsCodeOutputImageObject)[] };
};

export type RunStepDeltaStepDetailsToolCallsCodeOutputImageObject = {
  /** The index of the output in the outputs array. */
  index: number;
  /** Always `image`. */
  type: "image";
  image?: { file_id?: string };
};

/** Text output from the Code Interpreter tool call as part of a run step. */
export type RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject = {
  /** The index of the output in the outputs array. */
  index: number;
  /** Always `logs`. */
  type: "logs";
  /** The text output from the Code Interpreter tool call. */
  logs?: string;
};

export type RunStepDeltaStepDetailsToolCallsFileSearchObject = {
  /** The index of the tool call in the tool calls array. */
  index: number;
  /** The ID of the tool call object. */
  id?: string;
  /** The type of tool call. This is always going to be `file_search` for this type of tool call. */
  type: "file_search";
  /** For now, this is always going to be an empty object. */
  file_search: { [key: string]: unknown };
};

export type RunStepDeltaStepDetailsToolCallsFunctionObject = {
  /** The index of the tool call in the tool calls array. */
  index: number;
  /** The ID of the tool call object. */
  id?: string;
  /** The type of tool call. This is always going to be `function` for this type of tool call. */
  type: "function";
  /** The definition of the function that was called. */
  function?: { name?: string; arguments?: string; output?: string | null };
};

/** Details of the tool call. */
export type RunStepDeltaStepDetailsToolCallsObject = {
  /** Always `tool_calls`. */
  type: "tool_calls";
  /** An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.  */
  tool_calls?: (RunStepDeltaStepDetailsToolCallsCodeObject | RunStepDeltaStepDetailsToolCallsFileSearchObject | RunStepDeltaStepDetailsToolCallsFunctionObject)[];
};

/** Details of the message creation by the run step. */
export type RunStepDetailsMessageCreationObject = {
  /** Always `message_creation`. */
  type: "message_creation";
  message_creation: { message_id: string };
};

/** Details of the Code Interpreter tool call the run step was involved in. */
export type RunStepDetailsToolCallsCodeObject = {
  /** The ID of the tool call. */
  id: string;
  /** The type of tool call. This is always going to be `code_interpreter` for this type of tool call. */
  type: "code_interpreter";
  /** The Code Interpreter tool call definition. */
  code_interpreter: { input: string; outputs: (RunStepDetailsToolCallsCodeOutputLogsObject | RunStepDetailsToolCallsCodeOutputImageObject)[] };
};

export type RunStepDetailsToolCallsCodeOutputImageObject = {
  /** Always `image`. */
  type: "image";
  image: { file_id: string };
};

/** Text output from the Code Interpreter tool call as part of a run step. */
export type RunStepDetailsToolCallsCodeOutputLogsObject = {
  /** Always `logs`. */
  type: "logs";
  /** The text output from the Code Interpreter tool call. */
  logs: string;
};

export type RunStepDetailsToolCallsFileSearchObject = {
  /** The ID of the tool call object. */
  id: string;
  /** The type of tool call. This is always going to be `file_search` for this type of tool call. */
  type: "file_search";
  /** For now, this is always going to be an empty object. */
  file_search: { ranking_options?: RunStepDetailsToolCallsFileSearchRankingOptionsObject; results?: (RunStepDetailsToolCallsFileSearchResultObject)[] };
};

/** The ranking options for the file search. */
export type RunStepDetailsToolCallsFileSearchRankingOptionsObject = {
  ranker: FileSearchRanker;
  /** The score threshold for the file search. All values must be a floating point number between 0 and 1. */
  score_threshold: number;
};

/** A result instance of the file search. */
export type RunStepDetailsToolCallsFileSearchResultObject = {
  /** The ID of the file that result was found in. */
  file_id: string;
  /** The name of the file that result was found in. */
  file_name: string;
  /** The score of the result. All values must be a floating point number between 0 and 1. */
  score: number;
  /** The content of the result that was found. The content is only included if requested via the include query parameter. */
  content?: ({ type?: "text"; text?: string })[];
};

export type RunStepDetailsToolCallsFunctionObject = {
  /** The ID of the tool call object. */
  id: string;
  /** The type of tool call. This is always going to be `function` for this type of tool call. */
  type: "function";
  /** The definition of the function that was called. */
  function: { name: string; arguments: string; output: string | null };
};

/** Details of the tool call. */
export type RunStepDetailsToolCallsObject = {
  /** Always `tool_calls`. */
  type: "tool_calls";
  /** An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.  */
  tool_calls: (RunStepDetailsToolCallsCodeObject | RunStepDetailsToolCallsFileSearchObject | RunStepDetailsToolCallsFunctionObject)[];
};

/** Represents a step in execution of a run. */
export type RunStepObject = {
  /** The identifier of the run step, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread.run.step`. */
  object: "thread.run.step";
  /** The Unix timestamp (in seconds) for when the run step was created. */
  created_at: number;
  /** The ID of the [assistant](/docs/api-reference/assistants) associated with the run step. */
  assistant_id: string;
  /** The ID of the [thread](/docs/api-reference/threads) that was run. */
  thread_id: string;
  /** The ID of the [run](/docs/api-reference/runs) that this run step is a part of. */
  run_id: string;
  /** The type of run step, which can be either `message_creation` or `tool_calls`. */
  type: "message_creation" | "tool_calls";
  /** The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`. */
  status: "in_progress" | "cancelled" | "failed" | "completed" | "expired";
  /** The details of the run step. */
  step_details: RunStepDetailsMessageCreationObject | RunStepDetailsToolCallsObject;
  /** The last error associated with this run step. Will be `null` if there are no errors. */
  last_error: { code: "server_error" | "rate_limit_exceeded"; message: string } | null;
  /** The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired. */
  expired_at: number | null;
  /** The Unix timestamp (in seconds) for when the run step was cancelled. */
  cancelled_at: number | null;
  /** The Unix timestamp (in seconds) for when the run step failed. */
  failed_at: number | null;
  /** The Unix timestamp (in seconds) for when the run step completed. */
  completed_at: number | null;
  metadata: Metadata;
  usage: RunStepCompletionUsage;
};

export type RunStepStreamEvent = { event: "thread.run.step.created"; data: RunStepObject } | { event: "thread.run.step.in_progress"; data: RunStepObject } | { event: "thread.run.step.delta"; data: RunStepDeltaObject } | { event: "thread.run.step.completed"; data: RunStepObject } | { event: "thread.run.step.failed"; data: RunStepObject } | { event: "thread.run.step.cancelled"; data: RunStepObject } | { event: "thread.run.step.expired"; data: RunStepObject };

export type RunStreamEvent = { event: "thread.run.created"; data: RunObject } | { event: "thread.run.queued"; data: RunObject } | { event: "thread.run.in_progress"; data: RunObject } | { event: "thread.run.requires_action"; data: RunObject } | { event: "thread.run.completed"; data: RunObject } | { event: "thread.run.incomplete"; data: RunObject } | { event: "thread.run.failed"; data: RunObject } | { event: "thread.run.cancelling"; data: RunObject } | { event: "thread.run.cancelled"; data: RunObject } | { event: "thread.run.expired"; data: RunObject };

/** Tool call objects */
export type RunToolCallObject = {
  /** The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint. */
  id: string;
  /** The type of tool call the output is required for. For now, this is always `function`. */
  type: "function";
  /** The function definition. */
  function: { name: string; arguments: string };
};

/** A screenshot action. */
export type Screenshot = {
  /** Specifies the event type. For a screenshot action, this property is  always set to `screenshot`.  */
  type: "screenshot";
};

/** A scroll action. */
export type Scroll = {
  /** Specifies the event type. For a scroll action, this property is  always set to `scroll`.  */
  type: "scroll";
  /** The x-coordinate where the scroll occurred.  */
  x: number;
  /** The y-coordinate where the scroll occurred.  */
  y: number;
  /** The horizontal scroll distance.  */
  scroll_x: number;
  /** The vertical scroll distance.  */
  scroll_y: number;
};

/** Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:   - If set to 'auto', and the Project is Scale tier enabled, the system     will utilize scale tier credits until they are exhausted.   - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.   - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.   - If set to 'flex', the request will be processed with the Flex Processing service tier. [Learn more](/docs/guides/flex-processing).   - When not set, the default behavior is 'auto'.    When this parameter is set, the response body will include the `service_tier` utilized. */
export type ServiceTier = "auto" | "default" | "flex" | null;

export type StaticChunkingStrategy = {
  /** The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
  max_chunk_size_tokens: number;
  /** The number of tokens that overlap between chunks. The default value is `400`.  Note that the overlap must not exceed half of `max_chunk_size_tokens`.  */
  chunk_overlap_tokens: number;
};

/** Customize your own chunking strategy by setting chunk size and chunk overlap. */
export type StaticChunkingStrategyRequestParam = {
  /** Always `static`. */
  type: "static";
  static: StaticChunkingStrategy;
};

export type StaticChunkingStrategyResponseParam = {
  /** Always `static`. */
  type: "static";
  static: StaticChunkingStrategy;
};

/** Not supported with latest reasoning models `o3` and `o4-mini`.  Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence. */
export type StopConfiguration = string | null | (string)[] | null;

export type SubmitToolOutputsRunRequest = {
  /** A list of tools for which the outputs are being submitted. */
  tool_outputs: ({ tool_call_id?: string; output?: string })[];
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.  */
  stream?: boolean | null;
};

/** An object specifying the format that the model must output.  Configuring `{ "type": "json_schema" }` enables Structured Outputs,  which ensures the model will match your supplied JSON schema. Learn more in the  [Structured Outputs guide](/docs/guides/structured-outputs).  The default format is `{ "type": "text" }` with no additional options.  **Not recommended for gpt-4o and newer models:**  Setting to `{ "type": "json_object" }` enables the older JSON mode, which ensures the message the model generates is valid JSON. Using `json_schema` is preferred for models that support it. */
export type TextResponseFormatConfiguration = ResponseFormatText | TextResponseFormatJsonSchema | ResponseFormatJsonObject;

/** JSON Schema response format. Used to generate structured JSON responses. Learn more about [Structured Outputs](/docs/guides/structured-outputs). */
export type TextResponseFormatJsonSchema = {
  /** The type of response format being defined. Always `json_schema`. */
  type: "json_schema";
  /** A description of what the response format is for, used by the model to determine how to respond in the format.  */
  description?: string;
  /** The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.  */
  name: string;
  schema: ResponseFormatJsonSchemaSchema;
  /** Whether to enable strict schema adherence when generating the output. If set to true, the model will always follow the exact schema defined in the `schema` field. Only a subset of JSON Schema is supported when `strict` is `true`. To learn more, read the [Structured Outputs guide](/docs/guides/structured-outputs).  */
  strict?: boolean | null;
};

/** Represents a thread that contains [messages](/docs/api-reference/messages). */
export type ThreadObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `thread`. */
  object: "thread";
  /** The Unix timestamp (in seconds) for when the thread was created. */
  created_at: number;
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
  metadata: Metadata;
};

export type ThreadStreamEvent = { enabled?: boolean; event: "thread.created"; data: ThreadObject };

export type ToggleCertificatesRequest = {
  certificate_ids: (string)[];
};

/** Use this option to force the model to call a specific function. */
export type ToolChoiceFunction = {
  /** For function calling, the type is always `function`. */
  type: "function";
  /** The name of the function to call. */
  name: string;
};

/** Controls which (if any) tool is called by the model.  `none` means the model will not call any tool and instead generates a message.  `auto` means the model can pick between generating a message or calling one or more tools.  `required` means the model must call one or more tools. */
export type ToolChoiceOptions = "none" | "auto" | "required";

/** Indicates that the model should use a built-in tool to generate a response. [Learn more about built-in tools](/docs/guides/tools). */
export type ToolChoiceTypes = {
  /** The type of hosted tool the model should to use. Learn more about [built-in tools](/docs/guides/tools).  Allowed values are: - `file_search` - `web_search_preview` - `computer_use_preview`  */
  type: "file_search" | "web_search_preview" | "computer_use_preview" | "web_search_preview_2025_03_11";
};

/** Emitted when there is an additional text delta. This is also the first event emitted when the transcription starts. Only emitted when you [create a transcription](/docs/api-reference/audio/create-transcription) with the `Stream` parameter set to `true`. */
export type TranscriptTextDeltaEvent = {
  /** The type of the event. Always `transcript.text.delta`.  */
  type: "transcript.text.delta";
  /** The text delta that was additionally transcribed.  */
  delta: string;
  /** The log probabilities of the delta. Only included if you [create a transcription](/docs/api-reference/audio/create-transcription) with the `include[]` parameter set to `logprobs`.  */
  logprobs?: ({ token?: string; logprob?: number; bytes?: unknown[] })[];
};

/** Emitted when the transcription is complete. Contains the complete transcription text. Only emitted when you [create a transcription](/docs/api-reference/audio/create-transcription) with the `Stream` parameter set to `true`. */
export type TranscriptTextDoneEvent = {
  /** The type of the event. Always `transcript.text.done`.  */
  type: "transcript.text.done";
  /** The text that was transcribed.  */
  text: string;
  /** The log probabilities of the individual tokens in the transcription. Only included if you [create a transcription](/docs/api-reference/audio/create-transcription) with the `include[]` parameter set to `logprobs`.  */
  logprobs?: ({ token?: string; logprob?: number; bytes?: unknown[] })[];
};

export type TranscriptionInclude = "logprobs";

export type TranscriptionSegment = {
  /** Unique identifier of the segment. */
  id: number;
  /** Seek offset of the segment. */
  seek: number;
  /** Start time of the segment in seconds. */
  start: number;
  /** End time of the segment in seconds. */
  end: number;
  /** Text content of the segment. */
  text: string;
  /** Array of token IDs for the text content. */
  tokens: (number)[];
  /** Temperature parameter used for generating the segment. */
  temperature: number;
  /** Average logprob of the segment. If the value is lower than -1, consider the logprobs failed. */
  avg_logprob: number;
  /** Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed. */
  compression_ratio: number;
  /** Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent. */
  no_speech_prob: number;
};

export type TranscriptionWord = {
  /** The text content of the word. */
  word: string;
  /** Start time of the word in seconds. */
  start: number;
  /** End time of the word in seconds. */
  end: number;
};

/** Controls for how a thread will be truncated prior to the run. Use this to control the intial context window of the run. */
export type TruncationObject = {
  /** The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`. */
  type: "auto" | "last_messages";
  /** The number of most recent messages from the thread when constructing the context for the run. */
  last_messages?: number | null;
};

/** An action to type in text. */
export type Type = {
  /** Specifies the event type. For a type action, this property is  always set to `type`.  */
  type: "type";
  /** The text to type.  */
  text: string;
};

export type UpdateVectorStoreFileAttributesRequest = {
  attributes: VectorStoreFileAttributes;
};

export type UpdateVectorStoreRequest = {
  /** The name of the vector store. */
  name?: string | null;
  expires_after?: VectorStoreExpirationAfter & unknown;
  metadata?: Metadata;
};

/** The Upload object can accept byte chunks in the form of Parts. */
export type Upload = {
  /** The Upload unique identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the Upload was created. */
  created_at: number;
  /** The name of the file to be uploaded. */
  filename: string;
  /** The intended number of bytes to be uploaded. */
  bytes: number;
  /** The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values. */
  purpose: string;
  /** The status of the Upload. */
  status: "pending" | "completed" | "cancelled" | "expired";
  /** The Unix timestamp (in seconds) for when the Upload will expire. */
  expires_at: number;
  /** The object type, which is always "upload". */
  object?: "upload";
  file?: OpenAiFile & unknown;
};

export type UploadCertificateRequest = {
  /** An optional name for the certificate */
  name?: string;
  /** The certificate content in PEM format */
  content: string;
};

/** The upload Part represents a chunk of bytes we can add to an Upload object. */
export type UploadPart = {
  /** The upload Part unique identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp (in seconds) for when the Part was created. */
  created_at: number;
  /** The ID of the Upload object that this Part was added to. */
  upload_id: string;
  /** The object type, which is always `upload.part`. */
  object: "upload.part";
};

/** The aggregated audio speeches usage details of the specific time bucket. */
export type UsageAudioSpeechesResult = {
  object: "organization.usage.audio_speeches.result";
  /** The number of characters processed. */
  characters: number;
  /** The count of requests made to the model. */
  num_model_requests: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  user_id?: string | null;
  /** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
  api_key_id?: string | null;
  /** When `group_by=model`, this field provides the model name of the grouped usage result. */
  model?: string | null;
};

/** The aggregated audio transcriptions usage details of the specific time bucket. */
export type UsageAudioTranscriptionsResult = {
  object: "organization.usage.audio_transcriptions.result";
  /** The number of seconds processed. */
  seconds: number;
  /** The count of requests made to the model. */
  num_model_requests: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  user_id?: string | null;
  /** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
  api_key_id?: string | null;
  /** When `group_by=model`, this field provides the model name of the grouped usage result. */
  model?: string | null;
};

/** The aggregated code interpreter sessions usage details of the specific time bucket. */
export type UsageCodeInterpreterSessionsResult = {
  object: "organization.usage.code_interpreter_sessions.result";
  /** The number of code interpreter sessions. */
  num_sessions?: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
};

/** The aggregated completions usage details of the specific time bucket. */
export type UsageCompletionsResult = {
  object: "organization.usage.completions.result";
  /** The aggregated number of text input tokens used, including cached tokens. For customers subscribe to scale tier, this includes scale tier tokens. */
  input_tokens: number;
  /** The aggregated number of text input tokens that has been cached from previous requests. For customers subscribe to scale tier, this includes scale tier tokens. */
  input_cached_tokens?: number;
  /** The aggregated number of text output tokens used. For customers subscribe to scale tier, this includes scale tier tokens. */
  output_tokens: number;
  /** The aggregated number of audio input tokens used, including cached tokens. */
  input_audio_tokens?: number;
  /** The aggregated number of audio output tokens used. */
  output_audio_tokens?: number;
  /** The count of requests made to the model. */
  num_model_requests: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  user_id?: string | null;
  /** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
  api_key_id?: string | null;
  /** When `group_by=model`, this field provides the model name of the grouped usage result. */
  model?: string | null;
  /** When `group_by=batch`, this field tells whether the grouped usage result is batch or not. */
  batch?: boolean | null;
};

/** The aggregated embeddings usage details of the specific time bucket. */
export type UsageEmbeddingsResult = {
  object: "organization.usage.embeddings.result";
  /** The aggregated number of input tokens used. */
  input_tokens: number;
  /** The count of requests made to the model. */
  num_model_requests: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  user_id?: string | null;
  /** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
  api_key_id?: string | null;
  /** When `group_by=model`, this field provides the model name of the grouped usage result. */
  model?: string | null;
};

/** The aggregated images usage details of the specific time bucket. */
export type UsageImagesResult = {
  object: "organization.usage.images.result";
  /** The number of images processed. */
  images: number;
  /** The count of requests made to the model. */
  num_model_requests: number;
  /** When `group_by=source`, this field provides the source of the grouped usage result, possible values are `image.generation`, `image.edit`, `image.variation`. */
  source?: string | null;
  /** When `group_by=size`, this field provides the image size of the grouped usage result. */
  size?: string | null;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  user_id?: string | null;
  /** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
  api_key_id?: string | null;
  /** When `group_by=model`, this field provides the model name of the grouped usage result. */
  model?: string | null;
};

/** The aggregated moderations usage details of the specific time bucket. */
export type UsageModerationsResult = {
  object: "organization.usage.moderations.result";
  /** The aggregated number of input tokens used. */
  input_tokens: number;
  /** The count of requests made to the model. */
  num_model_requests: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
  /** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
  user_id?: string | null;
  /** When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result. */
  api_key_id?: string | null;
  /** When `group_by=model`, this field provides the model name of the grouped usage result. */
  model?: string | null;
};

export type UsageResponse = {
  object: "page";
  data: (UsageTimeBucket)[];
  has_more: boolean;
  next_page: string;
};

export type UsageTimeBucket = {
  object: "bucket";
  start_time: number;
  end_time: number;
  result: (UsageCompletionsResult | UsageEmbeddingsResult | UsageModerationsResult | UsageImagesResult | UsageAudioSpeechesResult | UsageAudioTranscriptionsResult | UsageVectorStoresResult | UsageCodeInterpreterSessionsResult | CostsResult)[];
};

/** The aggregated vector stores usage details of the specific time bucket. */
export type UsageVectorStoresResult = {
  object: "organization.usage.vector_stores.result";
  /** The vector stores usage in bytes. */
  usage_bytes: number;
  /** When `group_by=project_id`, this field provides the project ID of the grouped usage result. */
  project_id?: string | null;
};

/** Represents an individual `user` within an organization. */
export type User = {
  /** The object type, which is always `organization.user` */
  object: "organization.user";
  /** The identifier, which can be referenced in API endpoints */
  id: string;
  /** The name of the user */
  name: string;
  /** The email address of the user */
  email: string;
  /** `owner` or `reader` */
  role: "owner" | "reader";
  /** The Unix timestamp (in seconds) of when the user was added. */
  added_at: number;
};

export type UserDeleteResponse = {
  object: "organization.user.deleted";
  id: string;
  deleted: boolean;
};

export type UserListResponse = {
  object: "list";
  data: (User)[];
  first_id: string;
  last_id: string;
  has_more: boolean;
};

export type UserRoleUpdateRequest = {
  /** `owner` or `reader` */
  role: "owner" | "reader";
};

/** The expiration policy for a vector store. */
export type VectorStoreExpirationAfter = {
  /** Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`. */
  anchor: "last_active_at";
  /** The number of days after the anchor time that the vector store will expire. */
  days: number;
};

/** Set of 16 key-value pairs that can be attached to an object. This can be  useful for storing additional information about the object in a structured  format, and querying for objects via API or the dashboard. Keys are strings  with a maximum length of 64 characters. Values are strings with a maximum  length of 512 characters, booleans, or numbers. */
export type VectorStoreFileAttributes = { [key: string]: string | number | boolean | undefined } | null;

/** A batch of files attached to a vector store. */
export type VectorStoreFileBatchObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file_batch`. */
  object: "vector_store.files_batch";
  /** The Unix timestamp (in seconds) for when the vector store files batch was created. */
  created_at: number;
  /** The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
  vector_store_id: string;
  /** The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. */
  status: "in_progress" | "completed" | "cancelled" | "failed";
  file_counts: { in_progress: number; completed: number; failed: number; cancelled: number; total: number };
};

/** Represents the parsed content of a vector store file. */
export type VectorStoreFileContentResponse = {
  /** The object type, which is always `vector_store.file_content.page` */
  object: "vector_store.file_content.page";
  /** Parsed content of the file. */
  data: ({ type?: string; text?: string })[];
  /** Indicates if there are more content pages to fetch. */
  has_more: boolean;
  /** The token for the next page, if any. */
  next_page: string | null;
};

/** A list of files attached to a vector store. */
export type VectorStoreFileObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store.file`. */
  object: "vector_store.file";
  /** The total vector store usage in bytes. Note that this may be different from the original file size. */
  usage_bytes: number;
  /** The Unix timestamp (in seconds) for when the vector store file was created. */
  created_at: number;
  /** The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
  vector_store_id: string;
  /** The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use. */
  status: "in_progress" | "completed" | "cancelled" | "failed";
  /** The last error associated with this vector store file. Will be `null` if there are no errors. */
  last_error: { code: "server_error" | "unsupported_file" | "invalid_file"; message: string } | null;
  /** The strategy used to chunk the file. */
  chunking_strategy?: StaticChunkingStrategyResponseParam | OtherChunkingStrategyResponseParam;
  attributes?: VectorStoreFileAttributes;
};

/** A vector store is a collection of processed files can be used by the `file_search` tool. */
export type VectorStoreObject = {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The object type, which is always `vector_store`. */
  object: "vector_store";
  /** The Unix timestamp (in seconds) for when the vector store was created. */
  created_at: number;
  /** The name of the vector store. */
  name: string;
  /** The total number of bytes used by the files in the vector store. */
  usage_bytes: number;
  file_counts: { in_progress: number; completed: number; failed: number; cancelled: number; total: number };
  /** The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use. */
  status: "expired" | "in_progress" | "completed";
  expires_after?: VectorStoreExpirationAfter;
  /** The Unix timestamp (in seconds) for when the vector store will expire. */
  expires_at?: number | null;
  /** The Unix timestamp (in seconds) for when the vector store was last active. */
  last_active_at: number | null;
  metadata: Metadata;
};

export type VectorStoreSearchRequest = {
  /** A query string for a search */
  query: string | (string)[];
  /** Whether to rewrite the natural language query for vector search. */
  rewrite_query?: boolean;
  /** The maximum number of results to return. This number should be between 1 and 50 inclusive. */
  max_num_results?: number;
  /** A filter to apply based on file attributes. */
  filters?: ComparisonFilter | CompoundFilter;
  /** Ranking options for search. */
  ranking_options?: { ranker?: "auto" | "default-2024-11-15"; score_threshold?: number };
};

export type VectorStoreSearchResultContentObject = {
  /** The type of content. */
  type: "text";
  /** The text content returned from search. */
  text: string;
};

export type VectorStoreSearchResultItem = {
  /** The ID of the vector store file. */
  file_id: string;
  /** The name of the vector store file. */
  filename: string;
  /** The similarity score for the result. */
  score: number;
  attributes: VectorStoreFileAttributes;
  /** Content chunks from the file. */
  content: (VectorStoreSearchResultContentObject)[];
};

export type VectorStoreSearchResultsPage = {
  /** The object type, which is always `vector_store.search_results.page` */
  object: "vector_store.search_results.page";
  search_query: (string)[];
  /** The list of search result items. */
  data: (VectorStoreSearchResultItem)[];
  /** Indicates if there are more results to fetch. */
  has_more: boolean;
  /** The token for the next page, if any. */
  next_page: string | null;
};

export type VoiceIdsShared = string | "alloy" | "ash" | "ballad" | "coral" | "echo" | "fable" | "onyx" | "nova" | "sage" | "shimmer" | "verse";

/** A wait action. */
export type Wait = {
  /** Specifies the event type. For a wait action, this property is  always set to `wait`.  */
  type: "wait";
};

/** High level guidance for the amount of context window space to use for the  search. One of `low`, `medium`, or `high`. `medium` is the default. */
export type WebSearchContextSize = "low" | "medium" | "high";

/** Approximate location parameters for the search. */
export type WebSearchLocation = {
  /** The two-letter  [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the user, e.g. `US`.  */
  country?: string;
  /** Free text input for the region of the user, e.g. `California`.  */
  region?: string;
  /** Free text input for the city of the user, e.g. `San Francisco`.  */
  city?: string;
  /** The [IANA timezone](https://timeapi.io/documentation/iana-timezones)  of the user, e.g. `America/Los_Angeles`.  */
  timezone?: string;
};

/** The results of a web search tool call. See the  [web search guide](/docs/guides/tools-web-search) for more information. */
export type WebSearchToolCall = {
  /** The unique ID of the web search tool call.  */
  id: string;
  /** The type of the web search tool call. Always `web_search_call`.  */
  type: "web_search_call";
  /** The status of the web search tool call.  */
  status: "in_progress" | "searching" | "completed" | "failed";
};

/** A text input to the model. */
export type InputTextContent = {
  /** The type of the input item. Always `input_text`. */
  type: "input_text";
  /** The text input to the model. */
  text: string;
};

/** An image input to the model. Learn about [image inputs](/docs/guides/vision). */
export type InputImageContent = {
  /** The type of the input item. Always `input_image`. */
  type: "input_image";
  image_url?: string | null;
  file_id?: string | null;
  /** The detail level of the image to be sent to the model. One of `high`, `low`, or `auto`. Defaults to `auto`. */
  detail: "low" | "high" | "auto";
};

/** A file input to the model. */
export type InputFileContent = {
  /** The type of the input item. Always `input_file`. */
  type: "input_file";
  file_id?: string | null;
  /** The name of the file to be sent to the model. */
  filename?: string;
  /** The content of the file to be sent to the model.  */
  file_data?: string;
};

export type RankingOptions = {
  /** The ranker to use for the file search. */
  ranker?: "auto" | "default-2024-11-15";
  /** The score threshold for the file search, a number between 0 and 1. Numbers closer to 1 will attempt to return only the most relevant results, but may return fewer results. */
  score_threshold?: number;
};

export type Filters = ComparisonFilter | CompoundFilter;

/** A tool that searches for relevant content from uploaded files. Learn more about the [file search tool](https://platform.openai.com/docs/guides/tools-file-search). */
export type FileSearchTool = {
  /** The type of the file search tool. Always `file_search`. */
  type: "file_search";
  /** The IDs of the vector stores to search. */
  vector_store_ids: (string)[];
  /** The maximum number of results to return. This number should be between 1 and 50 inclusive. */
  max_num_results?: number;
  /** Ranking options for search. */
  ranking_options?: RankingOptions;
  filters?: Filters | null;
};

/** Defines a function in your own code the model can choose to call. Learn more about [function calling](https://platform.openai.com/docs/guides/function-calling). */
export type FunctionTool = {
  /** The type of the function tool. Always `function`. */
  type: "function";
  /** The name of the function to call. */
  name: string;
  description?: string | null;
  parameters: { [key: string]: unknown | undefined } | null;
  strict: boolean | null;
};

export type ApproximateLocation = {
  /** The type of location approximation. Always `approximate`. */
  type: "approximate";
  country?: string | null;
  region?: string | null;
  city?: string | null;
  timezone?: string | null;
};

/** This tool searches the web for relevant results to use in a response. Learn more about the [web search tool](https://platform.openai.com/docs/guides/tools-web-search). */
export type WebSearchPreviewTool = {
  /** The type of the web search tool. One of `web_search_preview` or `web_search_preview_2025_03_11`. */
  type: "web_search_preview" | "web_search_preview_2025_03_11";
  user_location?: ApproximateLocation | null;
  /** High level guidance for the amount of context window space to use for the search. One of `low`, `medium`, or `high`. `medium` is the default. */
  search_context_size?: "low" | "medium" | "high";
};

/** A tool that controls a virtual computer. Learn more about the [computer tool](https://platform.openai.com/docs/guides/tools-computer-use). */
export type ComputerUsePreviewTool = {
  /** The type of the computer use tool. Always `computer_use_preview`. */
  type: "computer_use_preview";
  /** The type of computer environment to control. */
  environment: "windows" | "mac" | "linux" | "ubuntu" | "browser";
  /** The width of the computer display. */
  display_width: number;
  /** The height of the computer display. */
  display_height: number;
};

export type Tool = FileSearchTool | FunctionTool | WebSearchPreviewTool | ComputerUsePreviewTool;

/** A citation to a file. */
export type FileCitationBody = {
  /** The type of the file citation. Always `file_citation`. */
  type: "file_citation";
  /** The ID of the file. */
  file_id: string;
  /** The index of the file in the list of files. */
  index: number;
};

/** A citation for a web resource used to generate a model response. */
export type UrlCitationBody = {
  /** The type of the URL citation. Always `url_citation`. */
  type: "url_citation";
  /** The URL of the web resource. */
  url: string;
  /** The index of the first character of the URL citation in the message. */
  start_index: number;
  /** The index of the last character of the URL citation in the message. */
  end_index: number;
  /** The title of the web resource. */
  title: string;
};

export type Annotation = FileCitationBody | UrlCitationBody | FilePath;

/** A text output from the model. */
export type OutputTextContent = {
  /** The type of the output text. Always `output_text`. */
  type: "output_text";
  /** The text output from the model. */
  text: string;
  /** The annotations of the text output. */
  annotations: (Annotation)[];
};

/** A refusal from the model. */
export type RefusalContent = {
  /** The type of the refusal. Always `refusal`. */
  type: "refusal";
  /** The refusal explanationfrom the model. */
  refusal: string;
};

/** A pending safety check for the computer call. */
export type ComputerCallSafetyCheckParam = {
  /** The ID of the pending safety check. */
  id: string;
  code?: string | null;
  message?: string | null;
};

/** The output of a computer tool call. */
export type ComputerCallOutputItemParam = {
  id?: string | null;
  /** The ID of the computer tool call that produced the output. */
  call_id: string;
  /** The type of the computer tool call output. Always `computer_call_output`. */
  type: "computer_call_output";
  output: ComputerScreenshotImage;
  acknowledged_safety_checks?: (ComputerCallSafetyCheckParam)[] | null;
  status?: "in_progress" | "completed" | "incomplete" | null;
};

/** The output of a function tool call. */
export type FunctionCallOutputItemParam = {
  id?: string | null;
  /** The unique ID of the function tool call generated by the model. */
  call_id: string;
  /** The type of the function tool call output. Always `function_call_output`. */
  type: "function_call_output";
  /** A JSON string of the output of the function tool call. */
  output: string;
  status?: "in_progress" | "completed" | "incomplete" | null;
};

/** An internal identifier for an item to reference. */
export type ItemReferenceParam = {
  type?: "item_reference" | null;
  /** The ID of the item to reference. */
  id: string;
};

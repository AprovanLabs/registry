import type { AdminApiKey, ApiKeyList, AssistantObject, AssistantSupportedModels, AssistantToolsCode, AssistantToolsFileSearch, AssistantToolsFileSearchTypeOnly, AssistantToolsFunction, AssistantsApiResponseFormatOption, AssistantsApiToolChoiceOption, AudioResponseFormat, AuditLogEventType, AutoChunkingStrategyRequestParam, Batch, Certificate, ChatCompletionDeleted, ChatCompletionFunctionCallOption, ChatCompletionFunctions, ChatCompletionList, ChatCompletionMessageList, ChatCompletionRequestMessage, ChatCompletionStreamOptions, ChatCompletionTool, ChatCompletionToolChoiceOption, ChunkingStrategyRequestParam, ComparisonFilter, CompoundFilter, CreateChatCompletionResponse, CreateCompletionResponse, CreateEmbeddingResponse, CreateEvalCompletionsRunDataSource, CreateEvalCustomDataSourceConfig, CreateEvalJsonlRunDataSource, CreateEvalLabelModelGrader, CreateEvalLogsDataSourceConfig, CreateEvalResponsesRunDataSource, CreateMessageRequest, CreateModerationResponse, CreateThreadRequest, CreateTranslationResponseJson, CreateTranslationResponseVerboseJson, DeleteAssistantResponse, DeleteCertificateResponse, DeleteFileResponse, DeleteFineTuningCheckpointPermissionResponse, DeleteMessageResponse, DeleteModelResponse, DeleteThreadResponse, DeleteVectorStoreFileResponse, DeleteVectorStoreResponse, Eval, EvalList, EvalPythonGrader, EvalRun, EvalRunList, EvalRunOutputItem, EvalRunOutputItemList, EvalScoreModelGrader, EvalStringCheckGrader, EvalTextSimilarityGrader, FineTuneMethod, FineTuningJob, ImagesResponse, Includable, InputItem, Invite, InviteDeleteResponse, InviteListResponse, ListAssistantsResponse, ListAuditLogsResponse, ListBatchesResponse, ListCertificatesResponse, ListFilesResponse, ListFineTuningCheckpointPermissionResponse, ListFineTuningJobCheckpointsResponse, ListFineTuningJobEventsResponse, ListMessagesResponse, ListModelsResponse, ListPaginatedFineTuningJobsResponse, ListRunStepsResponse, ListRunsResponse, ListVectorStoreFilesResponse, ListVectorStoresResponse, MessageContentImageFileObject, MessageContentImageUrlObject, MessageObject, MessageRequestContentTextObject, Metadata, Model, ModelIdsResponses, ModelIdsShared, OpenAiFile, ParallelToolCalls, PredictionContent, Project, ProjectApiKey, ProjectApiKeyDeleteResponse, ProjectApiKeyListResponse, ProjectListResponse, ProjectRateLimit, ProjectRateLimitListResponse, ProjectServiceAccount, ProjectServiceAccountCreateResponse, ProjectServiceAccountDeleteResponse, ProjectServiceAccountListResponse, ProjectUser, ProjectUserDeleteResponse, ProjectUserListResponse, RealtimeSessionCreateResponse, RealtimeTranscriptionSessionCreateResponse, Reasoning, ReasoningEffort, Response, ResponseFormatJsonObject, ResponseFormatJsonSchema, ResponseFormatText, ResponseItemList, ResponseModalities, RunObject, RunStepObject, ServiceTier, StaticChunkingStrategyRequestParam, StopConfiguration, TextResponseFormatConfiguration, ThreadObject, Tool, ToolChoiceFunction, ToolChoiceOptions, ToolChoiceTypes, TranscriptionInclude, TruncationObject, Upload, UploadPart, UsageResponse, User, UserDeleteResponse, UserListResponse, VectorStoreExpirationAfter, VectorStoreFileAttributes, VectorStoreFileBatchObject, VectorStoreFileContentResponse, VectorStoreFileObject, VectorStoreObject, VectorStoreSearchResultsPage, VoiceIdsShared, WebSearchContextSize, WebSearchLocation } from "./schemas.js";

export type OpenaiClient = {
  /**
   * Returns a list of assistants.
   */
  listAssistants: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
  }) => Promise<ListAssistantsResponse>;

  /**
   * Create an assistant with a model and instructions.
   */
  createAssistant: (input: {
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
  }) => Promise<AssistantObject>;

  /**
   * Retrieves an assistant.
   */
  getAssistant: (input: {
    /** The ID of the assistant to retrieve. */
    assistant_id: string;
  }) => Promise<AssistantObject>;

  /**
   * Modifies an assistant.
   */
  modifyAssistant: (input: {
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
    /** The ID of the assistant to modify. */
    assistant_id: string;
  }) => Promise<AssistantObject>;

  /**
   * Delete an assistant.
   */
  deleteAssistant: (input: {
    /** The ID of the assistant to delete. */
    assistant_id: string;
  }) => Promise<DeleteAssistantResponse>;

  /**
   * Generates audio from the input text.
   */
  createSpeech: (input: {
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
  }) => Promise<string>;

  /**
   * Transcribes audio into the input language.
   */
  createTranscription: (input: {
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
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Translates audio into English.
   */
  createTranslation: (input: {
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
  }) => Promise<CreateTranslationResponseJson | CreateTranslationResponseVerboseJson>;

  /**
   * Creates and executes a batch from an uploaded file of requests
   */
  createBatch: (input: {
    /** The ID of an uploaded file that contains requests for the new batch.  See [upload file](/docs/api-reference/files/create) for how to upload a file.  Your input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.  */
    input_file_id: string;
    /** The endpoint to be used for all requests in the batch. Currently `/v1/responses`, `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch. */
    endpoint: "/v1/responses" | "/v1/chat/completions" | "/v1/embeddings" | "/v1/completions";
    /** The time frame within which the batch should be processed. Currently only `24h` is supported. */
    completion_window: "24h";
    metadata?: Metadata;
  }) => Promise<Batch>;

  /**
   * List your organization's batches.
   */
  listBatches: (input: {
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
  }) => Promise<ListBatchesResponse>;

  /**
   * Retrieves a batch.
   */
  retrieveBatch: (input: {
    /** The ID of the batch to retrieve. */
    batch_id: string;
  }) => Promise<Batch>;

  /**
   * Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.
   */
  cancelBatch: (input: {
    /** The ID of the batch to cancel. */
    batch_id: string;
  }) => Promise<Batch>;

  /**
   * List stored Chat Completions. Only Chat Completions that have been stored with the `store` parameter set to `true` will be returned. 
   */
  listChatCompletions: (input: {
    /** The model used to generate the Chat Completions. */
    model?: string;
    metadata?: Metadata;
    /** Identifier for the last chat completion from the previous pagination request. */
    after?: string;
    /** Number of Chat Completions to retrieve. */
    limit?: number;
    /** Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
    order?: "asc" | "desc";
  }) => Promise<ChatCompletionList>;

  /**
   * **Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses)  to take advantage of the latest OpenAI platform features. Compare [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses).  ---  Creates a model response for the given chat conversation. Learn more in the [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision), and [audio](/docs/guides/audio) guides.  Parameter support can differ depending on the model used to generate the response, particularly for newer reasoning models. Parameters that are only supported for reasoning models are noted below. For the current state of  unsupported parameters in reasoning models,  [refer to the reasoning guide](/docs/guides/reasoning). 
   */
  createChatCompletion: (input: {
    metadata?: Metadata;
    /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.  */
    temperature?: number | null;
    /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.  */
    top_p?: number | null;
    /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
    user?: string;
    service_tier?: ServiceTier;
    /** A list of messages comprising the conversation so far. Depending on the [model](/docs/models) you use, different message types (modalities) are supported, like [text](/docs/guides/text-generation), [images](/docs/guides/vision), and [audio](/docs/guides/audio).  */
    messages: (ChatCompletionRequestMessage)[];
    /** Model ID used to generate the response, like `gpt-4o` or `o3`. OpenAI offers a wide range of models with different capabilities, performance characteristics, and price points. Refer to the [model guide](/docs/models) to browse and compare available models.  */
    model: ModelIdsShared;
    modalities?: ResponseModalities;
    reasoning_effort?: ReasoningEffort;
    /** An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).  */
    max_completion_tokens?: number | null;
    /** Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.  */
    frequency_penalty?: number | null;
    /** Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.  */
    presence_penalty?: number | null;
    /** This tool searches the web for relevant results to use in a response. Learn more about the [web search tool](/docs/guides/tools-web-search?api-mode=chat).  */
    web_search_options?: { user_location?: { type: "approximate"; approximate: WebSearchLocation } | null; search_context_size?: WebSearchContextSize };
    /** An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used.  */
    top_logprobs?: number | null;
    /** An object specifying the format that the model must output.  Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured Outputs which ensures the model will match your supplied JSON schema. Learn more in the [Structured Outputs guide](/docs/guides/structured-outputs).  Setting to `{ "type": "json_object" }` enables the older JSON mode, which ensures the message the model generates is valid JSON. Using `json_schema` is preferred for models that support it.  */
    response_format?: ResponseFormatText | ResponseFormatJsonSchema | ResponseFormatJsonObject;
    /** Parameters for audio output. Required when audio output is requested with `modalities: ["audio"]`. [Learn more](/docs/guides/audio).  */
    audio?: { voice: VoiceIdsShared; format: "wav" | "aac" | "mp3" | "flac" | "opus" | "pcm16" } | null;
    /** Whether or not to store the output of this chat completion request for  use in our [model distillation](/docs/guides/distillation) or [evals](/docs/guides/evals) products.  */
    store?: boolean | null;
    /** If set to true, the model response data will be streamed to the client as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format). See the [Streaming section below](/docs/api-reference/chat/streaming) for more information, along with the [streaming responses](/docs/guides/streaming-responses) guide for more information on how to handle the streaming events.  */
    stream?: boolean | null;
    stop?: StopConfiguration;
    /** Modify the likelihood of specified tokens appearing in the completion.  Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  */
    logit_bias?: { [key: string]: number | undefined } | null;
    /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`.  */
    logprobs?: boolean | null;
    /** The maximum number of [tokens](/tokenizer) that can be generated in the chat completion. This value can be used to control [costs](https://openai.com/api/pricing/) for text generated via API.  This value is now deprecated in favor of `max_completion_tokens`, and is not compatible with [o-series models](/docs/guides/reasoning).  */
    max_tokens?: number | null;
    /** How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs. */
    n?: number | null;
    /** Configuration for a [Predicted Output](/docs/guides/predicted-outputs), which can greatly improve response times when large parts of the model response are known ahead of time. This is most common when you are regenerating a file with only minor changes to most of the content.  */
    prediction?: PredictionContent | null;
    /** This feature is in Beta. If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result. Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.  */
    seed?: number | null;
    stream_options?: ChatCompletionStreamOptions;
    /** A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.  */
    tools?: (ChatCompletionTool)[];
    tool_choice?: ChatCompletionToolChoiceOption;
    parallel_tool_calls?: ParallelToolCalls;
    /** Deprecated in favor of `tool_choice`.  Controls which (if any) function is called by the model.  `none` means the model will not call a function and instead generates a message.  `auto` means the model can pick between generating a message or calling a function.  Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.  `none` is the default when no functions are present. `auto` is the default if functions are present.  */
    function_call?: "none" | "auto" | ChatCompletionFunctionCallOption;
    /** Deprecated in favor of `tools`.  A list of functions the model may generate JSON inputs for.  */
    functions?: (ChatCompletionFunctions)[];
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Get a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` will be returned. 
   */
  getChatCompletion: (input: {
    /** The ID of the chat completion to retrieve. */
    completion_id: string;
  }) => Promise<CreateChatCompletionResponse>;

  /**
   * Modify a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` can be modified. Currently, the only supported modification is to update the `metadata` field. 
   */
  updateChatCompletion: (input: {
    metadata: Metadata;
    /** The ID of the chat completion to update. */
    completion_id: string;
  }) => Promise<CreateChatCompletionResponse>;

  /**
   * Delete a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` can be deleted. 
   */
  deleteChatCompletion: (input: {
    /** The ID of the chat completion to delete. */
    completion_id: string;
  }) => Promise<ChatCompletionDeleted>;

  /**
   * Get the messages in a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` will be returned. 
   */
  getChatCompletionMessages: (input: {
    /** The ID of the chat completion to retrieve messages from. */
    completion_id: string;
    /** Identifier for the last message from the previous pagination request. */
    after?: string;
    /** Number of messages to retrieve. */
    limit?: number;
    /** Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
    order?: "asc" | "desc";
  }) => Promise<ChatCompletionMessageList>;

  /**
   * Creates a completion for the provided prompt and parameters.
   */
  createCompletion: (input: {
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
  }) => Promise<CreateCompletionResponse>;

  /**
   * Creates an embedding vector representing the input text.
   */
  createEmbedding: (input: {
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
  }) => Promise<CreateEmbeddingResponse>;

  /**
   * List evaluations for a project. 
   */
  listEvals: (input: {
    /** Identifier for the last eval from the previous pagination request. */
    after?: string;
    /** Number of evals to retrieve. */
    limit?: number;
    /** Sort order for evals by timestamp. Use `asc` for ascending order or `desc` for descending order. */
    order?: "asc" | "desc";
    /** Evals can be ordered by creation time or last updated time. Use `created_at` for creation time or `updated_at` for last updated time.  */
    order_by?: "created_at" | "updated_at";
  }) => Promise<EvalList>;

  /**
   * Create the structure of an evaluation that can be used to test a model's performance. An evaluation is a set of testing criteria and a datasource. After creating an evaluation, you can run it on different models and model parameters. We support several types of graders and datasources. For more information, see the [Evals guide](/docs/guides/evals). 
   */
  createEval: (input: {
    /** The name of the evaluation. */
    name?: string;
    metadata?: Metadata;
    /** The configuration for the data source used for the evaluation runs. */
    data_source_config: CreateEvalCustomDataSourceConfig | CreateEvalLogsDataSourceConfig;
    /** A list of graders for all eval runs in this group. */
    testing_criteria: (CreateEvalLabelModelGrader | EvalStringCheckGrader | EvalTextSimilarityGrader | EvalPythonGrader | EvalScoreModelGrader)[];
  }) => Promise<Eval>;

  /**
   * Get an evaluation by ID. 
   */
  getEval: (input: {
    /** The ID of the evaluation to retrieve. */
    eval_id: string;
  }) => Promise<Eval>;

  /**
   * Update certain properties of an evaluation. 
   */
  updateEval: (input: {
    /** Rename the evaluation. */
    name?: string;
    metadata?: Metadata;
    /** The ID of the evaluation to update. */
    eval_id: string;
  }) => Promise<Eval>;

  /**
   * Delete an evaluation. 
   */
  deleteEval: (input: {
    /** The ID of the evaluation to delete. */
    eval_id: string;
  }) => Promise<{ object: string; deleted: boolean; eval_id: string }>;

  /**
   * Get a list of runs for an evaluation. 
   */
  getEvalRuns: (input: {
    /** The ID of the evaluation to retrieve runs for. */
    eval_id: string;
    /** Identifier for the last run from the previous pagination request. */
    after?: string;
    /** Number of runs to retrieve. */
    limit?: number;
    /** Sort order for runs by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
    order?: "asc" | "desc";
    /** Filter runs by status. One of `queued` | `in_progress` | `failed` | `completed` | `canceled`. */
    status?: "queued" | "in_progress" | "completed" | "canceled" | "failed";
  }) => Promise<EvalRunList>;

  /**
   * Create a new evaluation run. This is the endpoint that will kick off grading. 
   */
  createEvalRun: (input: {
    /** The name of the run. */
    name?: string;
    metadata?: Metadata;
    /** Details about the run's data source. */
    data_source: CreateEvalJsonlRunDataSource | CreateEvalCompletionsRunDataSource | CreateEvalResponsesRunDataSource;
    /** The ID of the evaluation to create a run for. */
    eval_id: string;
  }) => Promise<EvalRun>;

  /**
   * Get an evaluation run by ID. 
   */
  getEvalRun: (input: {
    /** The ID of the evaluation to retrieve runs for. */
    eval_id: string;
    /** The ID of the run to retrieve. */
    run_id: string;
  }) => Promise<EvalRun>;

  /**
   * Cancel an ongoing evaluation run. 
   */
  cancelEvalRun: (input: {
    /** The ID of the evaluation whose run you want to cancel. */
    eval_id: string;
    /** The ID of the run to cancel. */
    run_id: string;
  }) => Promise<EvalRun>;

  /**
   * Delete an eval run. 
   */
  deleteEvalRun: (input: {
    /** The ID of the evaluation to delete the run from. */
    eval_id: string;
    /** The ID of the run to delete. */
    run_id: string;
  }) => Promise<{ object?: string; deleted?: boolean; run_id?: string }>;

  /**
   * Get a list of output items for an evaluation run. 
   */
  getEvalRunOutputItems: (input: {
    /** The ID of the evaluation to retrieve runs for. */
    eval_id: string;
    /** The ID of the run to retrieve output items for. */
    run_id: string;
    /** Identifier for the last output item from the previous pagination request. */
    after?: string;
    /** Number of output items to retrieve. */
    limit?: number;
    /** Filter output items by status. Use `failed` to filter by failed output items or `pass` to filter by passed output items.  */
    status?: "fail" | "pass";
    /** Sort order for output items by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
    order?: "asc" | "desc";
  }) => Promise<EvalRunOutputItemList>;

  /**
   * Get an evaluation run output item by ID. 
   */
  getEvalRunOutputItem: (input: {
    /** The ID of the evaluation to retrieve runs for. */
    eval_id: string;
    /** The ID of the run to retrieve. */
    run_id: string;
    /** The ID of the output item to retrieve. */
    output_item_id: string;
  }) => Promise<EvalRunOutputItem>;

  /**
   * Returns a list of files.
   */
  listFiles: (input: {
    /** Only return files with the given purpose. */
    purpose?: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
  }) => Promise<ListFilesResponse>;

  /**
   * Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB.  The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details.  The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models.  The Batch API only supports `.jsonl` files up to 200 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input).  Please [contact us](https://help.openai.com/) if you need to increase these storage limits. 
   */
  createFile: (input: {
    /** The File object (not file name) to be uploaded.  */
    file: string;
    /** The intended purpose of the uploaded file. One of: - `assistants`: Used in the Assistants API - `batch`: Used in the Batch API - `fine-tune`: Used for fine-tuning - `vision`: Images used for vision fine-tuning - `user_data`: Flexible file type for any purpose - `evals`: Used for eval data sets  */
    purpose: "assistants" | "batch" | "fine-tune" | "vision" | "user_data" | "evals";
  }) => Promise<OpenAiFile>;

  /**
   * Delete a file.
   */
  deleteFile: (input: {
    /** The ID of the file to use for this request. */
    file_id: string;
  }) => Promise<DeleteFileResponse>;

  /**
   * Returns information about a specific file.
   */
  retrieveFile: (input: {
    /** The ID of the file to use for this request. */
    file_id: string;
  }) => Promise<OpenAiFile>;

  /**
   * Returns the contents of the specified file.
   */
  downloadFile: (input: {
    /** The ID of the file to use for this request. */
    file_id: string;
  }) => Promise<string>;

  /**
   * **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).  Organization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint. 
   */
  listFineTuningCheckpointPermissions: (input: {
    /** The ID of the fine-tuned model checkpoint to get permissions for.  */
    fine_tuned_model_checkpoint: string;
    /** The ID of the project to get permissions for. */
    project_id?: string;
    /** Identifier for the last permission ID from the previous pagination request. */
    after?: string;
    /** Number of permissions to retrieve. */
    limit?: number;
    /** The order in which to retrieve permissions. */
    order?: "ascending" | "descending";
  }) => Promise<ListFineTuningCheckpointPermissionResponse>;

  /**
   * **NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).  This enables organization owners to share fine-tuned models with other projects in their organization. 
   */
  createFineTuningCheckpointPermission: (input: {
    /** The project identifiers to grant access to. */
    project_ids: (string)[];
    /** The ID of the fine-tuned model checkpoint to create a permission for.  */
    fine_tuned_model_checkpoint: string;
  }) => Promise<ListFineTuningCheckpointPermissionResponse>;

  /**
   * **NOTE:** This endpoint requires an [admin API key](../admin-api-keys).  Organization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint. 
   */
  deleteFineTuningCheckpointPermission: (input: {
    /** The ID of the fine-tuned model checkpoint to delete a permission for.  */
    fine_tuned_model_checkpoint: string;
    /** The ID of the fine-tuned model checkpoint permission to delete.  */
    permission_id: string;
  }) => Promise<DeleteFineTuningCheckpointPermissionResponse>;

  /**
   * Creates a fine-tuning job which begins the process of creating a new model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 
   */
  createFineTuningJob: (input: {
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
  }) => Promise<FineTuningJob>;

  /**
   * List your organization's fine-tuning jobs 
   */
  listPaginatedFineTuningJobs: (input: {
    /** Identifier for the last job from the previous pagination request. */
    after?: string;
    /** Number of fine-tuning jobs to retrieve. */
    limit?: number;
    /** Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.  */
    metadata?: { [key: string]: string | undefined } | null;
  }) => Promise<ListPaginatedFineTuningJobsResponse>;

  /**
   * Get info about a fine-tuning job.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 
   */
  retrieveFineTuningJob: (input: {
    /** The ID of the fine-tuning job.  */
    fine_tuning_job_id: string;
  }) => Promise<FineTuningJob>;

  /**
   * Immediately cancel a fine-tune job. 
   */
  cancelFineTuningJob: (input: {
    /** The ID of the fine-tuning job to cancel.  */
    fine_tuning_job_id: string;
  }) => Promise<FineTuningJob>;

  /**
   * List checkpoints for a fine-tuning job. 
   */
  listFineTuningJobCheckpoints: (input: {
    /** The ID of the fine-tuning job to get checkpoints for.  */
    fine_tuning_job_id: string;
    /** Identifier for the last checkpoint ID from the previous pagination request. */
    after?: string;
    /** Number of checkpoints to retrieve. */
    limit?: number;
  }) => Promise<ListFineTuningJobCheckpointsResponse>;

  /**
   * Get status updates for a fine-tuning job. 
   */
  listFineTuningEvents: (input: {
    /** The ID of the fine-tuning job to get events for.  */
    fine_tuning_job_id: string;
    /** Identifier for the last event from the previous pagination request. */
    after?: string;
    /** Number of events to retrieve. */
    limit?: number;
  }) => Promise<ListFineTuningJobEventsResponse>;

  /**
   * Creates an edited or extended image given one or more source images and a prompt. This endpoint only supports `gpt-image-1` and `dall-e-2`.
   */
  createImageEdit: (input: {
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
  }) => Promise<ImagesResponse>;

  /**
   * Creates an image given a prompt. [Learn more](/docs/guides/images). 
   */
  createImage: (input: {
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
  }) => Promise<ImagesResponse>;

  /**
   * Creates a variation of a given image. This endpoint only supports `dall-e-2`.
   */
  createImageVariation: (input: {
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
  }) => Promise<ImagesResponse>;

  /**
   * Lists the currently available models, and provides basic information about each one such as the owner and availability.
   */
  listModels: () => Promise<ListModelsResponse>;

  /**
   * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
   */
  retrieveModel: (input: {
    /** The ID of the model to use for this request */
    model: string;
  }) => Promise<Model>;

  /**
   * Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
   */
  deleteModel: (input: {
    /** The model to delete */
    model: string;
  }) => Promise<DeleteModelResponse>;

  /**
   * Classifies if text and/or image inputs are potentially harmful. Learn more in the [moderation guide](/docs/guides/moderation). 
   */
  createModeration: (input: {
    /** Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models.  */
    input: string | (string)[] | ({ type: "image_url"; image_url: { url: string } } | { type: "text"; text: string })[];
    /** The content moderation model you would like to use. Learn more in [the moderation guide](/docs/guides/moderation), and learn about available models [here](/docs/models#moderation).  */
    model?: string | "omni-moderation-latest" | "omni-moderation-2024-09-26" | "text-moderation-latest" | "text-moderation-stable";
  }) => Promise<CreateModerationResponse>;

  /**
   * List organization API keys
   */
  adminApiKeysList: (input: {
    /** Return keys with IDs that come after this ID in the pagination order. */
    after?: string | null;
    /** Order results by creation time, ascending or descending. */
    order?: "asc" | "desc";
    /** Maximum number of keys to return. */
    limit?: number;
  }) => Promise<ApiKeyList>;

  /**
   * Create an organization admin API key
   */
  adminApiKeysCreate: (input: {
    name: string;
  }) => Promise<AdminApiKey>;

  /**
   * Retrieve a single organization API key
   */
  adminApiKeysGet: (input: {
    /** The ID of the API key. */
    key_id: string;
  }) => Promise<AdminApiKey>;

  /**
   * Delete an organization admin API key
   */
  adminApiKeysDelete: (input: {
    /** The ID of the API key to be deleted. */
    key_id: string;
  }) => Promise<{ id?: string; object?: string; deleted?: boolean }>;

  /**
   * List user actions and configuration changes within this organization.
   */
  listAuditLogs: (input: {
    /** Return only events whose `effective_at` (Unix seconds) is in this range. */
    effective_at?: { gt?: number; gte?: number; lt?: number; lte?: number };
    /** Return only events for these projects. */
    "project_ids[]"?: (string)[];
    /** Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object). */
    "event_types[]"?: (AuditLogEventType)[];
    /** Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID. */
    "actor_ids[]"?: (string)[];
    /** Return only events performed by users with these emails. */
    "actor_emails[]"?: (string)[];
    /** Return only events performed on these targets. For example, a project ID updated. */
    "resource_ids[]"?: (string)[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
  }) => Promise<ListAuditLogsResponse>;

  /**
   * List uploaded certificates for this organization.
   */
  listOrganizationCertificates: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
  }) => Promise<ListCertificatesResponse>;

  /**
   * Upload a certificate to the organization. This does **not** automatically activate the certificate.  Organizations can upload up to 50 certificates. 
   */
  uploadCertificate: (input: {
    /** An optional name for the certificate */
    name?: string;
    /** The certificate content in PEM format */
    content: string;
  }) => Promise<Certificate>;

  /**
   * Activate certificates at the organization level.  You can atomically and idempotently activate up to 10 certificates at a time. 
   */
  activateOrganizationCertificates: (input: {
    certificate_ids: (string)[];
  }) => Promise<ListCertificatesResponse>;

  /**
   * Deactivate certificates at the organization level.  You can atomically and idempotently deactivate up to 10 certificates at a time. 
   */
  deactivateOrganizationCertificates: (input: {
    certificate_ids: (string)[];
  }) => Promise<ListCertificatesResponse>;

  /**
   * Get a certificate that has been uploaded to the organization.  You can get a certificate regardless of whether it is active or not. 
   */
  getCertificate: (input: {
    /** Unique ID of the certificate to retrieve. */
    cert_id: string;
    /** A list of additional fields to include in the response. Currently the only supported value is `content` to fetch the PEM content of the certificate. */
    include?: ("content")[];
  }) => Promise<Certificate>;

  /**
   * Modify a certificate. Note that only the name can be modified. 
   */
  modifyCertificate: (input: {
    /** The updated name for the certificate */
    name: string;
  }) => Promise<Certificate>;

  /**
   * Delete a certificate from the organization.  The certificate must be inactive for the organization and all projects. 
   */
  deleteCertificate: () => Promise<DeleteCertificateResponse>;

  /**
   * Get costs details for the organization.
   */
  usageCosts: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently only `1d` is supported, default to `1d`. */
    bucket_width?: "1d";
    /** Return only costs for these projects. */
    project_ids?: (string)[];
    /** Group the costs by the specified fields. Support fields include `project_id`, `line_item` and any combination of them. */
    group_by?: ("project_id" | "line_item")[];
    /** A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Returns a list of invites in the organization.
   */
  listInvites: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
  }) => Promise<InviteListResponse>;

  /**
   * Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.
   */
  inviteUser: (input: {
    /** Send an email to this address */
    email: string;
    /** `owner` or `reader` */
    role: "reader" | "owner";
    /** An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior. */
    projects?: ({ id: string; role: "member" | "owner" })[];
  }) => Promise<Invite>;

  /**
   * Retrieves an invite.
   */
  retrieveInvite: (input: {
    /** The ID of the invite to retrieve. */
    invite_id: string;
  }) => Promise<Invite>;

  /**
   * Delete an invite. If the invite has already been accepted, it cannot be deleted.
   */
  deleteInvite: (input: {
    /** The ID of the invite to delete. */
    invite_id: string;
  }) => Promise<InviteDeleteResponse>;

  /**
   * Returns a list of projects.
   */
  listProjects: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** If `true` returns all projects including those that have been `archived`. Archived projects are not included by default. */
    include_archived?: boolean;
  }) => Promise<ProjectListResponse>;

  /**
   * Create a new project in the organization. Projects can be created and archived, but cannot be deleted.
   */
  createProject: (input: {
    /** The friendly name of the project, this name appears in reports. */
    name: string;
  }) => Promise<Project>;

  /**
   * Retrieves a project.
   */
  retrieveProject: (input: {
    /** The ID of the project. */
    project_id: string;
  }) => Promise<Project>;

  /**
   * Modifies a project in the organization.
   */
  modifyProject: (input: {
    /** The updated name of the project, this name appears in reports. */
    name: string;
    /** The ID of the project. */
    project_id: string;
  }) => Promise<Project>;

  /**
   * Returns a list of API keys in the project.
   */
  listProjectApiKeys: (input: {
    /** The ID of the project. */
    project_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
  }) => Promise<ProjectApiKeyListResponse>;

  /**
   * Retrieves an API key in the project.
   */
  retrieveProjectApiKey: (input: {
    /** The ID of the project. */
    project_id: string;
    /** The ID of the API key. */
    key_id: string;
  }) => Promise<ProjectApiKey>;

  /**
   * Deletes an API key from the project.
   */
  deleteProjectApiKey: (input: {
    /** The ID of the project. */
    project_id: string;
    /** The ID of the API key. */
    key_id: string;
  }) => Promise<ProjectApiKeyDeleteResponse>;

  /**
   * Archives a project in the organization. Archived projects cannot be used or updated.
   */
  archiveProject: (input: {
    /** The ID of the project. */
    project_id: string;
  }) => Promise<Project>;

  /**
   * List certificates for this project.
   */
  listProjectCertificates: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
  }) => Promise<ListCertificatesResponse>;

  /**
   * Activate certificates at the project level.  You can atomically and idempotently activate up to 10 certificates at a time. 
   */
  activateProjectCertificates: (input: {
    certificate_ids: (string)[];
  }) => Promise<ListCertificatesResponse>;

  /**
   * Deactivate certificates at the project level.  You can atomically and idempotently deactivate up to 10 certificates at a time. 
   */
  deactivateProjectCertificates: (input: {
    certificate_ids: (string)[];
  }) => Promise<ListCertificatesResponse>;

  /**
   * Returns the rate limits per model for a project.
   */
  listProjectRateLimits: (input: {
    /** The ID of the project. */
    project_id: string;
    /** A limit on the number of objects to be returned. The default is 100.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
  }) => Promise<ProjectRateLimitListResponse>;

  /**
   * Updates a project rate limit.
   */
  updateProjectRateLimits: (input: {
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
    /** The ID of the project. */
    project_id: string;
    /** The ID of the rate limit. */
    rate_limit_id: string;
  }) => Promise<ProjectRateLimit>;

  /**
   * Returns a list of service accounts in the project.
   */
  listProjectServiceAccounts: (input: {
    /** The ID of the project. */
    project_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
  }) => Promise<ProjectServiceAccountListResponse>;

  /**
   * Creates a new service account in the project. This also returns an unredacted API key for the service account.
   */
  createProjectServiceAccount: (input: {
    /** The name of the service account being created. */
    name: string;
    /** The ID of the project. */
    project_id: string;
  }) => Promise<ProjectServiceAccountCreateResponse>;

  /**
   * Retrieves a service account in the project.
   */
  retrieveProjectServiceAccount: (input: {
    /** The ID of the project. */
    project_id: string;
    /** The ID of the service account. */
    service_account_id: string;
  }) => Promise<ProjectServiceAccount>;

  /**
   * Deletes a service account from the project.
   */
  deleteProjectServiceAccount: (input: {
    /** The ID of the project. */
    project_id: string;
    /** The ID of the service account. */
    service_account_id: string;
  }) => Promise<ProjectServiceAccountDeleteResponse>;

  /**
   * Returns a list of users in the project.
   */
  listProjectUsers: (input: {
    /** The ID of the project. */
    project_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
  }) => Promise<ProjectUserListResponse>;

  /**
   * Adds a user to the project. Users must already be members of the organization to be added to a project.
   */
  createProjectUser: (input: {
    /** The ID of the user. */
    user_id: string;
    /** `owner` or `member` */
    role: "owner" | "member";
    /** The ID of the project. */
    project_id: string;
  }) => Promise<ProjectUser>;

  /**
   * Retrieves a user in the project.
   */
  retrieveProjectUser: (input: {
    /** The ID of the project. */
    project_id: string;
    /** The ID of the user. */
    user_id: string;
  }) => Promise<ProjectUser>;

  /**
   * Modifies a user's role in the project.
   */
  modifyProjectUser: (input: {
    /** `owner` or `member` */
    role: "owner" | "member";
    /** The ID of the project. */
    project_id: string;
    /** The ID of the user. */
    user_id: string;
  }) => Promise<ProjectUser>;

  /**
   * Deletes a user from the project.
   */
  deleteProjectUser: (input: {
    /** The ID of the project. */
    project_id: string;
    /** The ID of the user. */
    user_id: string;
  }) => Promise<ProjectUserDeleteResponse>;

  /**
   * Get audio speeches usage details for the organization.
   */
  usageAudioSpeeches: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Return only usage for these users. */
    user_ids?: (string)[];
    /** Return only usage for these API keys. */
    api_key_ids?: (string)[];
    /** Return only usage for these models. */
    models?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
    group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get audio transcriptions usage details for the organization.
   */
  usageAudioTranscriptions: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Return only usage for these users. */
    user_ids?: (string)[];
    /** Return only usage for these API keys. */
    api_key_ids?: (string)[];
    /** Return only usage for these models. */
    models?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
    group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get code interpreter sessions usage details for the organization.
   */
  usageCodeInterpreterSessions: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`. */
    group_by?: ("project_id")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get completions usage details for the organization.
   */
  usageCompletions: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Return only usage for these users. */
    user_ids?: (string)[];
    /** Return only usage for these API keys. */
    api_key_ids?: (string)[];
    /** Return only usage for these models. */
    models?: (string)[];
    /** If `true`, return batch jobs only. If `false`, return non-batch jobs only. By default, return both.  */
    batch?: boolean;
    /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `batch` or any combination of them. */
    group_by?: ("project_id" | "user_id" | "api_key_id" | "model" | "batch")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get embeddings usage details for the organization.
   */
  usageEmbeddings: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Return only usage for these users. */
    user_ids?: (string)[];
    /** Return only usage for these API keys. */
    api_key_ids?: (string)[];
    /** Return only usage for these models. */
    models?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
    group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get images usage details for the organization.
   */
  usageImages: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usages for these sources. Possible values are `image.generation`, `image.edit`, `image.variation` or any combination of them. */
    sources?: ("image.generation" | "image.edit" | "image.variation")[];
    /** Return only usages for these image sizes. Possible values are `256x256`, `512x512`, `1024x1024`, `1792x1792`, `1024x1792` or any combination of them. */
    sizes?: ("256x256" | "512x512" | "1024x1024" | "1792x1792" | "1024x1792")[];
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Return only usage for these users. */
    user_ids?: (string)[];
    /** Return only usage for these API keys. */
    api_key_ids?: (string)[];
    /** Return only usage for these models. */
    models?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `size`, `source` or any combination of them. */
    group_by?: ("project_id" | "user_id" | "api_key_id" | "model" | "size" | "source")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get moderations usage details for the organization.
   */
  usageModerations: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Return only usage for these users. */
    user_ids?: (string)[];
    /** Return only usage for these API keys. */
    api_key_ids?: (string)[];
    /** Return only usage for these models. */
    models?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them. */
    group_by?: ("project_id" | "user_id" | "api_key_id" | "model")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Get vector stores usage details for the organization.
   */
  usageVectorStores: (input: {
    /** Start time (Unix seconds) of the query time range, inclusive. */
    start_time: number;
    /** End time (Unix seconds) of the query time range, exclusive. */
    end_time?: number;
    /** Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`. */
    bucket_width?: "1m" | "1h" | "1d";
    /** Return only usage for these projects. */
    project_ids?: (string)[];
    /** Group the usage data by the specified fields. Support fields include `project_id`. */
    group_by?: ("project_id")[];
    /** Specifies the number of buckets to return. - `bucket_width=1d`: default: 7, max: 31 - `bucket_width=1h`: default: 24, max: 168 - `bucket_width=1m`: default: 60, max: 1440  */
    limit?: number;
    /** A cursor for use in pagination. Corresponding to the `next_page` field from the previous response. */
    page?: string;
  }) => Promise<UsageResponse>;

  /**
   * Lists all of the users in the organization.
   */
  listUsers: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** Filter by the email address of users. */
    emails?: (string)[];
  }) => Promise<UserListResponse>;

  /**
   * Retrieves a user by their identifier.
   */
  retrieveUser: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<User>;

  /**
   * Modifies a user's role in the organization.
   */
  modifyUser: (input: {
    /** `owner` or `reader` */
    role: "owner" | "reader";
    /** The ID of the user. */
    user_id: string;
  }) => Promise<User>;

  /**
   * Deletes a user from the organization.
   */
  deleteUser: (input: {
    /** The ID of the user. */
    user_id: string;
  }) => Promise<UserDeleteResponse>;

  /**
   * Create an ephemeral API token for use in client-side applications with the Realtime API. Can be configured with the same session parameters as the `session.update` client event.  It responds with a session object, plus a `client_secret` key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API. 
   */
  createRealtimeSession: (input: {
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
  }) => Promise<RealtimeSessionCreateResponse>;

  /**
   * Create an ephemeral API token for use in client-side applications with the Realtime API specifically for realtime transcriptions.  Can be configured with the same session parameters as the `transcription_session.update` client event.  It responds with a session object, plus a `client_secret` key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API. 
   */
  createRealtimeTranscriptionSession: (input: {
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
  }) => Promise<RealtimeTranscriptionSessionCreateResponse>;

  /**
   * Creates a model response. Provide [text](/docs/guides/text) or [image](/docs/guides/images) inputs to generate [text](/docs/guides/text) or [JSON](/docs/guides/structured-outputs) outputs. Have the model call your own [custom code](/docs/guides/function-calling) or use built-in [tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search) or [file search](/docs/guides/tools-file-search) to use your own data as input for the model's response. 
   */
  createResponse: (input: {
    metadata?: Metadata;
    /** What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.  */
    temperature?: number | null;
    /** An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both.  */
    top_p?: number | null;
    /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).  */
    user?: string;
    service_tier?: ServiceTier;
    /** The unique ID of the previous response to the model. Use this to create multi-turn conversations. Learn more about  [conversation state](/docs/guides/conversation-state).  */
    previous_response_id?: string | null;
    /** Model ID used to generate the response, like `gpt-4o` or `o3`. OpenAI offers a wide range of models with different capabilities, performance characteristics, and price points. Refer to the [model guide](/docs/models) to browse and compare available models.  */
    model: ModelIdsResponses;
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
    /** Text, image, or file inputs to the model, used to generate a response.  Learn more: - [Text inputs and outputs](/docs/guides/text) - [Image inputs](/docs/guides/images) - [File inputs](/docs/guides/pdf-files) - [Conversation state](/docs/guides/conversation-state) - [Function calling](/docs/guides/function-calling)  */
    input: string | (InputItem)[];
    /** Specify additional output data to include in the model response. Currently supported values are: - `file_search_call.results`: Include the search results of   the file search tool call. - `message.input_image.image_url`: Include image urls from the input message. - `computer_call_output.output.image_url`: Include image urls from the computer call output.  */
    include?: (Includable)[] | null;
    /** Whether to allow the model to run tool calls in parallel.  */
    parallel_tool_calls?: boolean | null;
    /** Whether to store the generated model response for later retrieval via API.  */
    store?: boolean | null;
    /** If set to true, the model response data will be streamed to the client as it is generated using [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format). See the [Streaming section below](/docs/api-reference/responses-streaming) for more information.  */
    stream?: boolean | null;
  }) => Promise<ReadableStream<Uint8Array>>;

  /**
   * Retrieves a model response with the given ID. 
   */
  getResponse: (input: {
    /** The ID of the response to retrieve. */
    response_id: string;
    /** Additional fields to include in the response. See the `include` parameter for Response creation above for more information.  */
    include?: (Includable)[];
  }) => Promise<Response>;

  /**
   * Deletes a model response with the given ID. 
   */
  deleteResponse: (input: {
    /** The ID of the response to delete. */
    response_id: string;
  }) => Promise<undefined>;

  /**
   * Returns a list of input items for a given response.
   */
  listInputItems: (input: {
    /** The ID of the response to retrieve input items for. */
    response_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** The order to return the input items in. Default is `asc`. - `asc`: Return the input items in ascending order. - `desc`: Return the input items in descending order.  */
    order?: "asc" | "desc";
    /** An item ID to list items after, used in pagination.  */
    after?: string;
    /** An item ID to list items before, used in pagination.  */
    before?: string;
    /** Additional fields to include in the response. See the `include` parameter for Response creation above for more information.  */
    include?: (Includable)[];
  }) => Promise<ResponseItemList>;

  /**
   * Create a thread.
   */
  createThread: (input: {
    /** A list of [messages](/docs/api-reference/messages) to start the thread with. */
    messages?: (CreateMessageRequest)[];
    /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
    tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: unknown | unknown } | null;
    metadata?: Metadata;
  }) => Promise<ThreadObject>;

  /**
   * Create a thread and run it in one request.
   */
  createThreadAndRun: (input: {
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
  }) => Promise<RunObject>;

  /**
   * Retrieves a thread.
   */
  getThread: (input: {
    /** The ID of the thread to retrieve. */
    thread_id: string;
  }) => Promise<ThreadObject>;

  /**
   * Modifies a thread.
   */
  modifyThread: (input: {
    /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
    tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
    metadata?: Metadata;
    /** The ID of the thread to modify. Only the `metadata` can be modified. */
    thread_id: string;
  }) => Promise<ThreadObject>;

  /**
   * Delete a thread.
   */
  deleteThread: (input: {
    /** The ID of the thread to delete. */
    thread_id: string;
  }) => Promise<DeleteThreadResponse>;

  /**
   * Returns a list of messages for a given thread.
   */
  listMessages: (input: {
    /** The ID of the [thread](/docs/api-reference/threads) the messages belong to. */
    thread_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
    /** Filter messages by the run ID that generated them.  */
    run_id?: string;
  }) => Promise<ListMessagesResponse>;

  /**
   * Create a message.
   */
  createMessage: (input: {
    /** The role of the entity that is creating the message. Allowed values include: - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages. - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.  */
    role: "user" | "assistant";
    content: string | (MessageContentImageFileObject | MessageContentImageUrlObject | MessageRequestContentTextObject)[];
    /** A list of files attached to the message, and the tools they should be added to. */
    attachments?: ({ file_id?: string; tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] })[] | null;
    metadata?: Metadata;
    /** The ID of the [thread](/docs/api-reference/threads) to create a message for. */
    thread_id: string;
  }) => Promise<MessageObject>;

  /**
   * Retrieve a message.
   */
  getMessage: (input: {
    /** The ID of the [thread](/docs/api-reference/threads) to which this message belongs. */
    thread_id: string;
    /** The ID of the message to retrieve. */
    message_id: string;
  }) => Promise<MessageObject>;

  /**
   * Modifies a message.
   */
  modifyMessage: (input: {
    metadata?: Metadata;
    /** The ID of the thread to which this message belongs. */
    thread_id: string;
    /** The ID of the message to modify. */
    message_id: string;
  }) => Promise<MessageObject>;

  /**
   * Deletes a message.
   */
  deleteMessage: (input: {
    /** The ID of the thread to which this message belongs. */
    thread_id: string;
    /** The ID of the message to delete. */
    message_id: string;
  }) => Promise<DeleteMessageResponse>;

  /**
   * Returns a list of runs belonging to a thread.
   */
  listRuns: (input: {
    /** The ID of the thread the run belongs to. */
    thread_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
  }) => Promise<ListRunsResponse>;

  /**
   * Create a run.
   */
  createRun: (input: {
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
    /** The ID of the thread to run. */
    thread_id: string;
    /** A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.  See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.  */
    "include[]"?: ("step_details.tool_calls[*].file_search.results[*].content")[];
  }) => Promise<RunObject>;

  /**
   * Retrieves a run.
   */
  getRun: (input: {
    /** The ID of the [thread](/docs/api-reference/threads) that was run. */
    thread_id: string;
    /** The ID of the run to retrieve. */
    run_id: string;
  }) => Promise<RunObject>;

  /**
   * Modifies a run.
   */
  modifyRun: (input: {
    metadata?: Metadata;
    /** The ID of the [thread](/docs/api-reference/threads) that was run. */
    thread_id: string;
    /** The ID of the run to modify. */
    run_id: string;
  }) => Promise<RunObject>;

  /**
   * Cancels a run that is `in_progress`.
   */
  cancelRun: (input: {
    /** The ID of the thread to which this run belongs. */
    thread_id: string;
    /** The ID of the run to cancel. */
    run_id: string;
  }) => Promise<RunObject>;

  /**
   * Returns a list of run steps belonging to a run.
   */
  listRunSteps: (input: {
    /** The ID of the thread the run and run steps belong to. */
    thread_id: string;
    /** The ID of the run the run steps belong to. */
    run_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
    /** A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.  See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.  */
    "include[]"?: ("step_details.tool_calls[*].file_search.results[*].content")[];
  }) => Promise<ListRunStepsResponse>;

  /**
   * Retrieves a run step.
   */
  getRunStep: (input: {
    /** The ID of the thread to which the run and run step belongs. */
    thread_id: string;
    /** The ID of the run to which the run step belongs. */
    run_id: string;
    /** The ID of the run step to retrieve. */
    step_id: string;
    /** A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.  See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.  */
    "include[]"?: ("step_details.tool_calls[*].file_search.results[*].content")[];
  }) => Promise<RunStepObject>;

  /**
   * When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request. 
   */
  submitToolOuputsToRun: (input: {
    /** A list of tools for which the outputs are being submitted. */
    tool_outputs: ({ tool_call_id?: string; output?: string })[];
    /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.  */
    stream?: boolean | null;
    /** The ID of the [thread](/docs/api-reference/threads) to which this run belongs. */
    thread_id: string;
    /** The ID of the run that requires the tool output submission. */
    run_id: string;
  }) => Promise<RunObject>;

  /**
   * Creates an intermediate [Upload](/docs/api-reference/uploads/object) object that you can add [Parts](/docs/api-reference/uploads/part-object) to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it.  Once you complete the Upload, we will create a [File](/docs/api-reference/files/object) object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object.  For certain `purpose` values, the correct `mime_type` must be specified.  Please refer to documentation for the  [supported MIME types for your use case](/docs/assistants/tools/file-search#supported-files).  For guidance on the proper filename extensions for each purpose, please follow the documentation on [creating a File](/docs/api-reference/files/create). 
   */
  createUpload: (input: {
    /** The name of the file to upload.  */
    filename: string;
    /** The intended purpose of the uploaded file.  See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).  */
    purpose: "assistants" | "batch" | "fine-tune" | "vision";
    /** The number of bytes in the file you are uploading.  */
    bytes: number;
    /** The MIME type of the file.  This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.  */
    mime_type: string;
  }) => Promise<Upload>;

  /**
   * Cancels the Upload. No Parts may be added after an Upload is cancelled. 
   */
  cancelUpload: (input: {
    /** The ID of the Upload.  */
    upload_id: string;
  }) => Promise<Upload>;

  /**
   * Completes the [Upload](/docs/api-reference/uploads/object).   Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.  You can specify the order of the Parts by passing in an ordered list of the Part IDs.  The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed. 
   */
  completeUpload: (input: {
    /** The ordered list of Part IDs.  */
    part_ids: (string)[];
    /** The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.  */
    md5?: string;
    /** The ID of the Upload.  */
    upload_id: string;
  }) => Promise<Upload>;

  /**
   * Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload.   Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.  It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete). 
   */
  addUploadPart: (input: {
    /** The chunk of bytes for this Part.  */
    data: string;
    /** The ID of the Upload.  */
    upload_id: string;
  }) => Promise<UploadPart>;

  /**
   * Returns a list of vector stores.
   */
  listVectorStores: (input: {
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
  }) => Promise<ListVectorStoresResponse>;

  /**
   * Create a vector store.
   */
  createVectorStore: (input: {
    /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
    file_ids?: (string)[];
    /** The name of the vector store. */
    name?: string;
    expires_after?: VectorStoreExpirationAfter;
    /** The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
    chunking_strategy?: AutoChunkingStrategyRequestParam | StaticChunkingStrategyRequestParam;
    metadata?: Metadata;
  }) => Promise<VectorStoreObject>;

  /**
   * Retrieves a vector store.
   */
  getVectorStore: (input: {
    /** The ID of the vector store to retrieve. */
    vector_store_id: string;
  }) => Promise<VectorStoreObject>;

  /**
   * Modifies a vector store.
   */
  modifyVectorStore: (input: {
    /** The name of the vector store. */
    name?: string | null;
    expires_after?: VectorStoreExpirationAfter & unknown;
    metadata?: Metadata;
    /** The ID of the vector store to modify. */
    vector_store_id: string;
  }) => Promise<VectorStoreObject>;

  /**
   * Delete a vector store.
   */
  deleteVectorStore: (input: {
    /** The ID of the vector store to delete. */
    vector_store_id: string;
  }) => Promise<DeleteVectorStoreResponse>;

  /**
   * Create a vector store file batch.
   */
  createVectorStoreFileBatch: (input: {
    /** A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
    file_ids: (string)[];
    chunking_strategy?: ChunkingStrategyRequestParam;
    attributes?: VectorStoreFileAttributes;
    /** The ID of the vector store for which to create a File Batch.  */
    vector_store_id: string;
  }) => Promise<VectorStoreFileBatchObject>;

  /**
   * Retrieves a vector store file batch.
   */
  getVectorStoreFileBatch: (input: {
    /** The ID of the vector store that the file batch belongs to. */
    vector_store_id: string;
    /** The ID of the file batch being retrieved. */
    batch_id: string;
  }) => Promise<VectorStoreFileBatchObject>;

  /**
   * Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
   */
  cancelVectorStoreFileBatch: (input: {
    /** The ID of the vector store that the file batch belongs to. */
    vector_store_id: string;
    /** The ID of the file batch to cancel. */
    batch_id: string;
  }) => Promise<VectorStoreFileBatchObject>;

  /**
   * Returns a list of vector store files in a batch.
   */
  listFilesInVectorStoreBatch: (input: {
    /** The ID of the vector store that the files belong to. */
    vector_store_id: string;
    /** The ID of the file batch that the files belong to. */
    batch_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
    /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
    filter?: "in_progress" | "completed" | "failed" | "cancelled";
  }) => Promise<ListVectorStoreFilesResponse>;

  /**
   * Returns a list of vector store files.
   */
  listVectorStoreFiles: (input: {
    /** The ID of the vector store that the files belong to. */
    vector_store_id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
    limit?: number;
    /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
    order?: "asc" | "desc";
    /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
    after?: string;
    /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
    before?: string;
    /** Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
    filter?: "in_progress" | "completed" | "failed" | "cancelled";
  }) => Promise<ListVectorStoreFilesResponse>;

  /**
   * Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).
   */
  createVectorStoreFile: (input: {
    /** A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. */
    file_id: string;
    chunking_strategy?: ChunkingStrategyRequestParam;
    attributes?: VectorStoreFileAttributes;
    /** The ID of the vector store for which to create a File.  */
    vector_store_id: string;
  }) => Promise<VectorStoreFileObject>;

  /**
   * Retrieves a vector store file.
   */
  getVectorStoreFile: (input: {
    /** The ID of the vector store that the file belongs to. */
    vector_store_id: string;
    /** The ID of the file being retrieved. */
    file_id: string;
  }) => Promise<VectorStoreFileObject>;

  /**
   * Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.
   */
  deleteVectorStoreFile: (input: {
    /** The ID of the vector store that the file belongs to. */
    vector_store_id: string;
    /** The ID of the file to delete. */
    file_id: string;
  }) => Promise<DeleteVectorStoreFileResponse>;

  /**
   * Update attributes on a vector store file.
   */
  updateVectorStoreFileAttributes: (input: {
    attributes: VectorStoreFileAttributes;
    /** The ID of the vector store the file belongs to. */
    vector_store_id: string;
    /** The ID of the file to update attributes. */
    file_id: string;
  }) => Promise<VectorStoreFileObject>;

  /**
   * Retrieve the parsed contents of a vector store file.
   */
  retrieveVectorStoreFileContent: (input: {
    /** The ID of the vector store. */
    vector_store_id: string;
    /** The ID of the file within the vector store. */
    file_id: string;
  }) => Promise<VectorStoreFileContentResponse>;

  /**
   * Search a vector store for relevant chunks based on a query and file attributes filter.
   */
  searchVectorStore: (input: {
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
    /** The ID of the vector store to search. */
    vector_store_id: string;
  }) => Promise<VectorStoreSearchResultsPage>;
};

export * from "./schemas.js";

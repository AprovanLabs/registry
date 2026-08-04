# Chat

6 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listChatCompletions`

List stored Chat Completions. Only Chat Completions that have been stored with the `store` parameter set to `true` will be returned. — [Provider docs](https://help.openai.com/)

```ts
openai.listChatCompletions(input: {
  /** The model used to generate the Chat Completions. */
  model?: string;
  metadata?: Metadata;
  /** Identifier for the last chat completion from the previous pagination request. */
  after?: string;
  /** Number of Chat Completions to retrieve. */
  limit?: number;
  /** Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
  order?: "asc" | "desc";
}): Promise<ChatCompletionList>
```

<sub>`GET /chat/completions` · `listChatCompletions`</sub>

## `openai.createChatCompletion`

**Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses) to take advantage of the latest OpenAI platform features. Compare [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses). --- Creates a model response for the given chat conversation. Learn more in the [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision), and [audio](/docs/guides/audio) guides. Parameter support can differ depending on the model used to generate the response, particularly for newer reasoning models. Parameters that are only supported for reasoning models are noted below. For the current state of unsupported parameters in reasoning models, [refer to the reasoning guide](/docs/guides/reasoning). — [Provider docs](https://help.openai.com/)

```ts
openai.createChatCompletion(input: {
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
}): Promise<ReadableStream<Uint8Array>>
```

<sub>`POST /chat/completions` · `createChatCompletion`</sub>

## `openai.deleteChatCompletion`

Delete a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` can be deleted. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteChatCompletion(input: {
  /** The ID of the chat completion to delete. */
  completion_id: string;
}): Promise<ChatCompletionDeleted>
```

<sub>`DELETE /chat/completions/{completion_id}` · `deleteChatCompletion`</sub>

## `openai.getChatCompletion`

Get a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` will be returned. — [Provider docs](https://help.openai.com/)

```ts
openai.getChatCompletion(input: {
  /** The ID of the chat completion to retrieve. */
  completion_id: string;
}): Promise<CreateChatCompletionResponse>
```

<sub>`GET /chat/completions/{completion_id}` · `getChatCompletion`</sub>

## `openai.updateChatCompletion`

Modify a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` can be modified. Currently, the only supported modification is to update the `metadata` field. — [Provider docs](https://help.openai.com/)

```ts
openai.updateChatCompletion(input: {
  metadata: Metadata;
  /** The ID of the chat completion to update. */
  completion_id: string;
}): Promise<CreateChatCompletionResponse>
```

<sub>`POST /chat/completions/{completion_id}` · `updateChatCompletion`</sub>

## `openai.getChatCompletionMessages`

Get the messages in a stored chat completion. Only Chat Completions that have been created with the `store` parameter set to `true` will be returned. — [Provider docs](https://help.openai.com/)

```ts
openai.getChatCompletionMessages(input: {
  /** The ID of the chat completion to retrieve messages from. */
  completion_id: string;
  /** Identifier for the last message from the previous pagination request. */
  after?: string;
  /** Number of messages to retrieve. */
  limit?: number;
  /** Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. */
  order?: "asc" | "desc";
}): Promise<ChatCompletionMessageList>
```

<sub>`GET /chat/completions/{completion_id}/messages` · `getChatCompletionMessages`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

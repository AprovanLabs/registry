# Responses

4 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.createResponse`

Creates a model response. Provide [text](/docs/guides/text) or [image](/docs/guides/images) inputs to generate [text](/docs/guides/text) or [JSON](/docs/guides/structured-outputs) outputs. Have the model call your own [custom code](/docs/guides/function-calling) or use built-in [tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search) or [file search](/docs/guides/tools-file-search) to use your own data as input for the model's response. — [Provider docs](https://help.openai.com/)

```ts
openai.createResponse(input: {
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
}): Promise<ReadableStream<Uint8Array>>
```

<sub>`POST /responses` · `createResponse`</sub>

## `openai.deleteResponse`

Deletes a model response with the given ID. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteResponse(input: {
  /** The ID of the response to delete. */
  response_id: string;
}): Promise<undefined>
```

<sub>`DELETE /responses/{response_id}` · `deleteResponse`</sub>

## `openai.getResponse`

Retrieves a model response with the given ID. — [Provider docs](https://help.openai.com/)

```ts
openai.getResponse(input: {
  /** The ID of the response to retrieve. */
  response_id: string;
  /** Additional fields to include in the response. See the `include` parameter for Response creation above for more information.  */
  include?: (Includable)[];
}): Promise<Response>
```

<sub>`GET /responses/{response_id}` · `getResponse`</sub>

## `openai.listInputItems`

Returns a list of input items for a given response. — [Provider docs](https://help.openai.com/)

```ts
openai.listInputItems(input: {
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
}): Promise<ResponseItemList>
```

<sub>`GET /responses/{response_id}/input_items` · `listInputItems`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

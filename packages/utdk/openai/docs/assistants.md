# Assistants

23 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listAssistants`

Returns a list of assistants. — [Provider docs](https://help.openai.com/)

```ts
openai.listAssistants(input: {
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  */
  limit?: number;
  /** Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  */
  order?: "asc" | "desc";
  /** A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  */
  after?: string;
  /** A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  */
  before?: string;
}): Promise<ListAssistantsResponse>
```

<sub>`GET /assistants` · `listAssistants`</sub>

## `openai.createAssistant`

Create an assistant with a model and instructions. — [Provider docs](https://help.openai.com/)

```ts
openai.createAssistant(input: {
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
}): Promise<AssistantObject>
```

<sub>`POST /assistants` · `createAssistant`</sub>

## `openai.deleteAssistant`

Delete an assistant. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteAssistant(input: {
  /** The ID of the assistant to delete. */
  assistant_id: string;
}): Promise<DeleteAssistantResponse>
```

<sub>`DELETE /assistants/{assistant_id}` · `deleteAssistant`</sub>

## `openai.getAssistant`

Retrieves an assistant. — [Provider docs](https://help.openai.com/)

```ts
openai.getAssistant(input: {
  /** The ID of the assistant to retrieve. */
  assistant_id: string;
}): Promise<AssistantObject>
```

<sub>`GET /assistants/{assistant_id}` · `getAssistant`</sub>

## `openai.modifyAssistant`

Modifies an assistant. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyAssistant(input: {
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
}): Promise<AssistantObject>
```

<sub>`POST /assistants/{assistant_id}` · `modifyAssistant`</sub>

## `openai.createThread`

Create a thread. — [Provider docs](https://help.openai.com/)

```ts
openai.createThread(input: {
  /** A list of [messages](/docs/api-reference/messages) to start the thread with. */
  messages?: (CreateMessageRequest)[];
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: unknown | unknown } | null;
  metadata?: Metadata;
}): Promise<ThreadObject>
```

<sub>`POST /threads` · `createThread`</sub>

## `openai.deleteThread`

Delete a thread. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteThread(input: {
  /** The ID of the thread to delete. */
  thread_id: string;
}): Promise<DeleteThreadResponse>
```

<sub>`DELETE /threads/{thread_id}` · `deleteThread`</sub>

## `openai.getThread`

Retrieves a thread. — [Provider docs](https://help.openai.com/)

```ts
openai.getThread(input: {
  /** The ID of the thread to retrieve. */
  thread_id: string;
}): Promise<ThreadObject>
```

<sub>`GET /threads/{thread_id}` · `getThread`</sub>

## `openai.modifyThread`

Modifies a thread. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyThread(input: {
  /** A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.  */
  tool_resources?: { code_interpreter?: { file_ids?: (string)[] }; file_search?: { vector_store_ids?: (string)[] } } | null;
  metadata?: Metadata;
  /** The ID of the thread to modify. Only the `metadata` can be modified. */
  thread_id: string;
}): Promise<ThreadObject>
```

<sub>`POST /threads/{thread_id}` · `modifyThread`</sub>

## `openai.listMessages`

Returns a list of messages for a given thread. — [Provider docs](https://help.openai.com/)

```ts
openai.listMessages(input: {
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
}): Promise<ListMessagesResponse>
```

<sub>`GET /threads/{thread_id}/messages` · `listMessages`</sub>

## `openai.createMessage`

Create a message. — [Provider docs](https://help.openai.com/)

```ts
openai.createMessage(input: {
  /** The role of the entity that is creating the message. Allowed values include: - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages. - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.  */
  role: "user" | "assistant";
  content: string | (MessageContentImageFileObject | MessageContentImageUrlObject | MessageRequestContentTextObject)[];
  /** A list of files attached to the message, and the tools they should be added to. */
  attachments?: ({ file_id?: string; tools?: (AssistantToolsCode | AssistantToolsFileSearchTypeOnly)[] })[] | null;
  metadata?: Metadata;
  /** The ID of the [thread](/docs/api-reference/threads) to create a message for. */
  thread_id: string;
}): Promise<MessageObject>
```

<sub>`POST /threads/{thread_id}/messages` · `createMessage`</sub>

## `openai.deleteMessage`

Deletes a message. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteMessage(input: {
  /** The ID of the thread to which this message belongs. */
  thread_id: string;
  /** The ID of the message to delete. */
  message_id: string;
}): Promise<DeleteMessageResponse>
```

<sub>`DELETE /threads/{thread_id}/messages/{message_id}` · `deleteMessage`</sub>

## `openai.getMessage`

Retrieve a message. — [Provider docs](https://help.openai.com/)

```ts
openai.getMessage(input: {
  /** The ID of the [thread](/docs/api-reference/threads) to which this message belongs. */
  thread_id: string;
  /** The ID of the message to retrieve. */
  message_id: string;
}): Promise<MessageObject>
```

<sub>`GET /threads/{thread_id}/messages/{message_id}` · `getMessage`</sub>

## `openai.modifyMessage`

Modifies a message. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyMessage(input: {
  metadata?: Metadata;
  /** The ID of the thread to which this message belongs. */
  thread_id: string;
  /** The ID of the message to modify. */
  message_id: string;
}): Promise<MessageObject>
```

<sub>`POST /threads/{thread_id}/messages/{message_id}` · `modifyMessage`</sub>

## `openai.listRuns`

Returns a list of runs belonging to a thread. — [Provider docs](https://help.openai.com/)

```ts
openai.listRuns(input: {
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
}): Promise<ListRunsResponse>
```

<sub>`GET /threads/{thread_id}/runs` · `listRuns`</sub>

## `openai.createRun`

Create a run. — [Provider docs](https://help.openai.com/)

```ts
openai.createRun(input: {
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
}): Promise<RunObject>
```

<sub>`POST /threads/{thread_id}/runs` · `createRun`</sub>

## `openai.getRun`

Retrieves a run. — [Provider docs](https://help.openai.com/)

```ts
openai.getRun(input: {
  /** The ID of the [thread](/docs/api-reference/threads) that was run. */
  thread_id: string;
  /** The ID of the run to retrieve. */
  run_id: string;
}): Promise<RunObject>
```

<sub>`GET /threads/{thread_id}/runs/{run_id}` · `getRun`</sub>

## `openai.modifyRun`

Modifies a run. — [Provider docs](https://help.openai.com/)

```ts
openai.modifyRun(input: {
  metadata?: Metadata;
  /** The ID of the [thread](/docs/api-reference/threads) that was run. */
  thread_id: string;
  /** The ID of the run to modify. */
  run_id: string;
}): Promise<RunObject>
```

<sub>`POST /threads/{thread_id}/runs/{run_id}` · `modifyRun`</sub>

## `openai.cancelRun`

Cancels a run that is `in_progress`. — [Provider docs](https://help.openai.com/)

```ts
openai.cancelRun(input: {
  /** The ID of the thread to which this run belongs. */
  thread_id: string;
  /** The ID of the run to cancel. */
  run_id: string;
}): Promise<RunObject>
```

<sub>`POST /threads/{thread_id}/runs/{run_id}/cancel` · `cancelRun`</sub>

## `openai.listRunSteps`

Returns a list of run steps belonging to a run. — [Provider docs](https://help.openai.com/)

```ts
openai.listRunSteps(input: {
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
}): Promise<ListRunStepsResponse>
```

<sub>`GET /threads/{thread_id}/runs/{run_id}/steps` · `listRunSteps`</sub>

## `openai.getRunStep`

Retrieves a run step. — [Provider docs](https://help.openai.com/)

```ts
openai.getRunStep(input: {
  /** The ID of the thread to which the run and run step belongs. */
  thread_id: string;
  /** The ID of the run to which the run step belongs. */
  run_id: string;
  /** The ID of the run step to retrieve. */
  step_id: string;
  /** A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.  See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.  */
  "include[]"?: ("step_details.tool_calls[*].file_search.results[*].content")[];
}): Promise<RunStepObject>
```

<sub>`GET /threads/{thread_id}/runs/{run_id}/steps/{step_id}` · `getRunStep`</sub>

## `openai.submitToolOuputsToRun`

When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request. — [Provider docs](https://help.openai.com/)

```ts
openai.submitToolOuputsToRun(input: {
  /** A list of tools for which the outputs are being submitted. */
  tool_outputs: ({ tool_call_id?: string; output?: string })[];
  /** If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.  */
  stream?: boolean | null;
  /** The ID of the [thread](/docs/api-reference/threads) to which this run belongs. */
  thread_id: string;
  /** The ID of the run that requires the tool output submission. */
  run_id: string;
}): Promise<RunObject>
```

<sub>`POST /threads/{thread_id}/runs/{run_id}/submit_tool_outputs` · `submitToolOuputsToRun`</sub>

## `openai.createThreadAndRun`

Create a thread and run it in one request. — [Provider docs](https://help.openai.com/)

```ts
openai.createThreadAndRun(input: {
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
}): Promise<RunObject>
```

<sub>`POST /threads/runs` · `createThreadAndRun`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

import type { ToolRuntimeMetadataMap } from "../client.js";

export const toolMetadata = {
  "listAssistants": {
    "accessPath": [
      "listAssistants"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/assistants",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before"
    ],
    "description": "Returns a list of assistants.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n"
    }
  },
  "createAssistant": {
    "accessPath": [
      "createAssistant"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "name",
      "description",
      "instructions",
      "reasoning_effort",
      "tools",
      "tool_resources",
      "metadata",
      "temperature",
      "top_p",
      "response_format"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/assistants",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an assistant with a model and instructions."
  },
  "getAssistant": {
    "accessPath": [
      "getAssistant"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/assistants/{assistant_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "assistant_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves an assistant.",
    "parameterDescriptions": {
      "assistant_id": "The ID of the assistant to retrieve."
    }
  },
  "modifyAssistant": {
    "accessPath": [
      "modifyAssistant"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "reasoning_effort",
      "name",
      "description",
      "instructions",
      "tools",
      "tool_resources",
      "metadata",
      "temperature",
      "top_p",
      "response_format"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/assistants/{assistant_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "assistant_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies an assistant.",
    "parameterDescriptions": {
      "assistant_id": "The ID of the assistant to modify."
    }
  },
  "deleteAssistant": {
    "accessPath": [
      "deleteAssistant"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/assistants/{assistant_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "assistant_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an assistant.",
    "parameterDescriptions": {
      "assistant_id": "The ID of the assistant to delete."
    }
  },
  "createSpeech": {
    "accessPath": [
      "createSpeech"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "input",
      "instructions",
      "voice",
      "response_format",
      "speed"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/audio/speech",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Generates audio from the input text."
  },
  "createTranscription": {
    "accessPath": [
      "createTranscription"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file",
      "model",
      "language",
      "prompt",
      "response_format",
      "temperature",
      "include[]",
      "timestamp_granularities[]",
      "stream"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/audio/transcriptions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Transcribes audio into the input language."
  },
  "createTranslation": {
    "accessPath": [
      "createTranslation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file",
      "model",
      "prompt",
      "response_format",
      "temperature"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/audio/translations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Translates audio into English."
  },
  "createBatch": {
    "accessPath": [
      "createBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "input_file_id",
      "endpoint",
      "completion_window",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/batches",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates and executes a batch from an uploaded file of requests"
  },
  "listBatches": {
    "accessPath": [
      "listBatches"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/batches",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit"
    ],
    "description": "List your organization's batches.",
    "parameterDescriptions": {
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n"
    }
  },
  "retrieveBatch": {
    "accessPath": [
      "retrieveBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/batches/{batch_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a batch.",
    "parameterDescriptions": {
      "batch_id": "The ID of the batch to retrieve."
    }
  },
  "cancelBatch": {
    "accessPath": [
      "cancelBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/batches/{batch_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.",
    "parameterDescriptions": {
      "batch_id": "The ID of the batch to cancel."
    }
  },
  "listChatCompletions": {
    "accessPath": [
      "listChatCompletions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/chat/completions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "model",
      "metadata",
      "after",
      "limit",
      "order"
    ],
    "description": "List stored Chat Completions. Only Chat Completions that have been stored\nwith the `store` parameter set to `true` will be returned.\n",
    "parameterDescriptions": {
      "model": "The model used to generate the Chat Completions.",
      "metadata": "A list of metadata keys to filter the Chat Completions by. Example:\n\n`metadata[key1]=value1&metadata[key2]=value2`\n",
      "after": "Identifier for the last chat completion from the previous pagination request.",
      "limit": "Number of Chat Completions to retrieve.",
      "order": "Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`."
    }
  },
  "createChatCompletion": {
    "accessPath": [
      "createChatCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "metadata",
      "temperature",
      "top_p",
      "user",
      "service_tier",
      "messages",
      "model",
      "modalities",
      "reasoning_effort",
      "max_completion_tokens",
      "frequency_penalty",
      "presence_penalty",
      "web_search_options",
      "top_logprobs",
      "response_format",
      "audio",
      "store",
      "stream",
      "stop",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "n",
      "prediction",
      "seed",
      "stream_options",
      "tools",
      "tool_choice",
      "parallel_tool_calls",
      "function_call",
      "functions"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/chat/completions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "**Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses) \nto take advantage of the latest OpenAI platform features. Compare\n[Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses).\n\n---\n\nCreates a model response for the given chat conversation. Learn more in the\n[text generation](/docs/guides/text-generation), [vision](/docs/guides/vision),\nand [audio](/docs/guides/audio) guides.\n\nParameter support can differ depending on the model used to generate the\nresponse, particularly for newer reasoning models. Parameters that are only\nsupported for reasoning models are noted below. For the current state of \nunsupported parameters in reasoning models, \n[refer to the reasoning guide](/docs/guides/reasoning).\n"
  },
  "getChatCompletion": {
    "accessPath": [
      "getChatCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/chat/completions/{completion_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "completion_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get a stored chat completion. Only Chat Completions that have been created\nwith the `store` parameter set to `true` will be returned.\n",
    "parameterDescriptions": {
      "completion_id": "The ID of the chat completion to retrieve."
    }
  },
  "updateChatCompletion": {
    "accessPath": [
      "updateChatCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/chat/completions/{completion_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "completion_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modify a stored chat completion. Only Chat Completions that have been\ncreated with the `store` parameter set to `true` can be modified. Currently,\nthe only supported modification is to update the `metadata` field.\n",
    "parameterDescriptions": {
      "completion_id": "The ID of the chat completion to update."
    }
  },
  "deleteChatCompletion": {
    "accessPath": [
      "deleteChatCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/chat/completions/{completion_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "completion_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a stored chat completion. Only Chat Completions that have been\ncreated with the `store` parameter set to `true` can be deleted.\n",
    "parameterDescriptions": {
      "completion_id": "The ID of the chat completion to delete."
    }
  },
  "getChatCompletionMessages": {
    "accessPath": [
      "getChatCompletionMessages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/chat/completions/{completion_id}/messages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "completion_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit",
      "order"
    ],
    "description": "Get the messages in a stored chat completion. Only Chat Completions that\nhave been created with the `store` parameter set to `true` will be\nreturned.\n",
    "parameterDescriptions": {
      "completion_id": "The ID of the chat completion to retrieve messages from.",
      "after": "Identifier for the last message from the previous pagination request.",
      "limit": "Number of messages to retrieve.",
      "order": "Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`."
    }
  },
  "createCompletion": {
    "accessPath": [
      "createCompletion"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "prompt",
      "best_of",
      "echo",
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "n",
      "presence_penalty",
      "seed",
      "stop",
      "stream",
      "stream_options",
      "suffix",
      "temperature",
      "top_p",
      "user"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/completions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates a completion for the provided prompt and parameters."
  },
  "createEmbedding": {
    "accessPath": [
      "createEmbedding"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "input",
      "model",
      "encoding_format",
      "dimensions",
      "user"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/embeddings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates an embedding vector representing the input text."
  },
  "listEvals": {
    "accessPath": [
      "listEvals"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/evals",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit",
      "order",
      "order_by"
    ],
    "description": "List evaluations for a project.\n",
    "parameterDescriptions": {
      "after": "Identifier for the last eval from the previous pagination request.",
      "limit": "Number of evals to retrieve.",
      "order": "Sort order for evals by timestamp. Use `asc` for ascending order or `desc` for descending order.",
      "order_by": "Evals can be ordered by creation time or last updated time. Use\n`created_at` for creation time or `updated_at` for last updated time.\n"
    }
  },
  "createEval": {
    "accessPath": [
      "createEval"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "metadata",
      "data_source_config",
      "testing_criteria"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/evals",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create the structure of an evaluation that can be used to test a model's performance.\nAn evaluation is a set of testing criteria and a datasource. After creating an evaluation, you can run it on different models and model parameters. We support several types of graders and datasources.\nFor more information, see the [Evals guide](/docs/guides/evals).\n"
  },
  "getEval": {
    "accessPath": [
      "getEval"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/evals/{eval_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an evaluation by ID.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to retrieve."
    }
  },
  "updateEval": {
    "accessPath": [
      "updateEval"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/evals/{eval_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update certain properties of an evaluation.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to update."
    }
  },
  "deleteEval": {
    "accessPath": [
      "deleteEval"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/evals/{eval_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an evaluation.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to delete."
    }
  },
  "getEvalRuns": {
    "accessPath": [
      "getEvalRuns"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/evals/{eval_id}/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit",
      "order",
      "status"
    ],
    "description": "Get a list of runs for an evaluation.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to retrieve runs for.",
      "after": "Identifier for the last run from the previous pagination request.",
      "limit": "Number of runs to retrieve.",
      "order": "Sort order for runs by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.",
      "status": "Filter runs by status. One of `queued` | `in_progress` | `failed` | `completed` | `canceled`."
    }
  },
  "createEvalRun": {
    "accessPath": [
      "createEvalRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "metadata",
      "data_source"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/evals/{eval_id}/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new evaluation run. This is the endpoint that will kick off grading.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to create a run for."
    }
  },
  "getEvalRun": {
    "accessPath": [
      "getEvalRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/evals/{eval_id}/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an evaluation run by ID.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to retrieve runs for.",
      "run_id": "The ID of the run to retrieve."
    }
  },
  "cancelEvalRun": {
    "accessPath": [
      "cancelEvalRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/evals/{eval_id}/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel an ongoing evaluation run.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation whose run you want to cancel.",
      "run_id": "The ID of the run to cancel."
    }
  },
  "deleteEvalRun": {
    "accessPath": [
      "deleteEvalRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/evals/{eval_id}/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an eval run.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to delete the run from.",
      "run_id": "The ID of the run to delete."
    }
  },
  "getEvalRunOutputItems": {
    "accessPath": [
      "getEvalRunOutputItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/evals/{eval_id}/runs/{run_id}/output_items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit",
      "status",
      "order"
    ],
    "description": "Get a list of output items for an evaluation run.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to retrieve runs for.",
      "run_id": "The ID of the run to retrieve output items for.",
      "after": "Identifier for the last output item from the previous pagination request.",
      "limit": "Number of output items to retrieve.",
      "status": "Filter output items by status. Use `failed` to filter by failed output\nitems or `pass` to filter by passed output items.\n",
      "order": "Sort order for output items by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`."
    }
  },
  "getEvalRunOutputItem": {
    "accessPath": [
      "getEvalRunOutputItem"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "eval_id",
      "run_id",
      "output_item_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get an evaluation run output item by ID.\n",
    "parameterDescriptions": {
      "eval_id": "The ID of the evaluation to retrieve runs for.",
      "run_id": "The ID of the run to retrieve.",
      "output_item_id": "The ID of the output item to retrieve."
    }
  },
  "listFiles": {
    "accessPath": [
      "listFiles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "purpose",
      "limit",
      "order",
      "after"
    ],
    "description": "Returns a list of files.",
    "parameterDescriptions": {
      "purpose": "Only return files with the given purpose.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n"
    }
  },
  "createFile": {
    "accessPath": [
      "createFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file",
      "purpose"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB.\n\nThe Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details.\n\nThe Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models.\n\nThe Batch API only supports `.jsonl` files up to 200 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input).\n\nPlease [contact us](https://help.openai.com/) if you need to increase these storage limits.\n"
  },
  "deleteFile": {
    "accessPath": [
      "deleteFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/files/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a file.",
    "parameterDescriptions": {
      "file_id": "The ID of the file to use for this request."
    }
  },
  "retrieveFile": {
    "accessPath": [
      "retrieveFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Returns information about a specific file.",
    "parameterDescriptions": {
      "file_id": "The ID of the file to use for this request."
    }
  },
  "downloadFile": {
    "accessPath": [
      "downloadFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/files/{file_id}/content",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Returns the contents of the specified file.",
    "parameterDescriptions": {
      "file_id": "The ID of the file to use for this request."
    }
  },
  "listFineTuningCheckpointPermissions": {
    "accessPath": [
      "listFineTuningCheckpointPermissions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuned_model_checkpoint"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "project_id",
      "after",
      "limit",
      "order"
    ],
    "description": "**NOTE:** This endpoint requires an [admin API key](../admin-api-keys).\n\nOrganization owners can use this endpoint to view all permissions for a fine-tuned model checkpoint.\n",
    "parameterDescriptions": {
      "fine_tuned_model_checkpoint": "The ID of the fine-tuned model checkpoint to get permissions for.\n",
      "project_id": "The ID of the project to get permissions for.",
      "after": "Identifier for the last permission ID from the previous pagination request.",
      "limit": "Number of permissions to retrieve.",
      "order": "The order in which to retrieve permissions."
    }
  },
  "createFineTuningCheckpointPermission": {
    "accessPath": [
      "createFineTuningCheckpointPermission"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "project_ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuned_model_checkpoint"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "**NOTE:** Calling this endpoint requires an [admin API key](../admin-api-keys).\n\nThis enables organization owners to share fine-tuned models with other projects in their organization.\n",
    "parameterDescriptions": {
      "fine_tuned_model_checkpoint": "The ID of the fine-tuned model checkpoint to create a permission for.\n"
    }
  },
  "deleteFineTuningCheckpointPermission": {
    "accessPath": [
      "deleteFineTuningCheckpointPermission"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuned_model_checkpoint",
      "permission_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "**NOTE:** This endpoint requires an [admin API key](../admin-api-keys).\n\nOrganization owners can use this endpoint to delete a permission for a fine-tuned model checkpoint.\n",
    "parameterDescriptions": {
      "fine_tuned_model_checkpoint": "The ID of the fine-tuned model checkpoint to delete a permission for.\n",
      "permission_id": "The ID of the fine-tuned model checkpoint permission to delete.\n"
    }
  },
  "createFineTuningJob": {
    "accessPath": [
      "createFineTuningJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "model",
      "training_file",
      "hyperparameters",
      "suffix",
      "validation_file",
      "integrations",
      "seed",
      "method",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/fine_tuning/jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates a fine-tuning job which begins the process of creating a new model from a given dataset.\n\nResponse includes details of the enqueued job including job status and the name of the fine-tuned models once complete.\n\n[Learn more about fine-tuning](/docs/guides/fine-tuning)\n"
  },
  "listPaginatedFineTuningJobs": {
    "accessPath": [
      "listPaginatedFineTuningJobs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/fine_tuning/jobs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit",
      "metadata"
    ],
    "description": "List your organization's fine-tuning jobs\n",
    "parameterDescriptions": {
      "after": "Identifier for the last job from the previous pagination request.",
      "limit": "Number of fine-tuning jobs to retrieve.",
      "metadata": "Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.\n"
    }
  },
  "retrieveFineTuningJob": {
    "accessPath": [
      "retrieveFineTuningJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/fine_tuning/jobs/{fine_tuning_job_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuning_job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Get info about a fine-tuning job.\n\n[Learn more about fine-tuning](/docs/guides/fine-tuning)\n",
    "parameterDescriptions": {
      "fine_tuning_job_id": "The ID of the fine-tuning job.\n"
    }
  },
  "cancelFineTuningJob": {
    "accessPath": [
      "cancelFineTuningJob"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/fine_tuning/jobs/{fine_tuning_job_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuning_job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Immediately cancel a fine-tune job.\n",
    "parameterDescriptions": {
      "fine_tuning_job_id": "The ID of the fine-tuning job to cancel.\n"
    }
  },
  "listFineTuningJobCheckpoints": {
    "accessPath": [
      "listFineTuningJobCheckpoints"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuning_job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit"
    ],
    "description": "List checkpoints for a fine-tuning job.\n",
    "parameterDescriptions": {
      "fine_tuning_job_id": "The ID of the fine-tuning job to get checkpoints for.\n",
      "after": "Identifier for the last checkpoint ID from the previous pagination request.",
      "limit": "Number of checkpoints to retrieve."
    }
  },
  "listFineTuningEvents": {
    "accessPath": [
      "listFineTuningEvents"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/fine_tuning/jobs/{fine_tuning_job_id}/events",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "fine_tuning_job_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "limit"
    ],
    "description": "Get status updates for a fine-tuning job.\n",
    "parameterDescriptions": {
      "fine_tuning_job_id": "The ID of the fine-tuning job to get events for.\n",
      "after": "Identifier for the last event from the previous pagination request.",
      "limit": "Number of events to retrieve."
    }
  },
  "createImageEdit": {
    "accessPath": [
      "createImageEdit"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "image",
      "prompt",
      "mask",
      "model",
      "n",
      "size",
      "response_format",
      "user",
      "quality"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/images/edits",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates an edited or extended image given one or more source images and a prompt. This endpoint only supports `gpt-image-1` and `dall-e-2`."
  },
  "createImage": {
    "accessPath": [
      "createImage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "prompt",
      "model",
      "n",
      "quality",
      "response_format",
      "output_format",
      "output_compression",
      "size",
      "moderation",
      "background",
      "style",
      "user"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/images/generations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates an image given a prompt. [Learn more](/docs/guides/images).\n"
  },
  "createImageVariation": {
    "accessPath": [
      "createImageVariation"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "image",
      "model",
      "n",
      "response_format",
      "size",
      "user"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/images/variations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates a variation of a given image. This endpoint only supports `dall-e-2`."
  },
  "listModels": {
    "accessPath": [
      "listModels"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/models",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Lists the currently available models, and provides basic information about each one such as the owner and availability."
  },
  "retrieveModel": {
    "accessPath": [
      "retrieveModel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/models/{model}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "model"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a model instance, providing basic information about the model such as the owner and permissioning.",
    "parameterDescriptions": {
      "model": "The ID of the model to use for this request"
    }
  },
  "deleteModel": {
    "accessPath": [
      "deleteModel"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/models/{model}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "model"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.",
    "parameterDescriptions": {
      "model": "The model to delete"
    }
  },
  "createModeration": {
    "accessPath": [
      "createModeration"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "input",
      "model"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/moderations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Classifies if text and/or image inputs are potentially harmful. Learn\nmore in the [moderation guide](/docs/guides/moderation).\n"
  },
  "admin-api-keys-list": {
    "accessPath": [
      "adminApiKeysList"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/admin_api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "after",
      "order",
      "limit"
    ],
    "description": "List organization API keys"
  },
  "admin-api-keys-create": {
    "accessPath": [
      "adminApiKeysCreate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/admin_api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an organization admin API key"
  },
  "admin-api-keys-get": {
    "accessPath": [
      "adminApiKeysGet"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/admin_api_keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve a single organization API key"
  },
  "admin-api-keys-delete": {
    "accessPath": [
      "adminApiKeysDelete"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/admin_api_keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an organization admin API key"
  },
  "list-audit-logs": {
    "accessPath": [
      "listAuditLogs"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/audit_logs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "effective_at",
      "project_ids[]",
      "event_types[]",
      "actor_ids[]",
      "actor_emails[]",
      "resource_ids[]",
      "limit",
      "after",
      "before"
    ],
    "description": "List user actions and configuration changes within this organization.",
    "parameterDescriptions": {
      "effective_at": "Return only events whose `effective_at` (Unix seconds) is in this range.",
      "project_ids[]": "Return only events for these projects.",
      "event_types[]": "Return only events with a `type` in one of these values. For example, `project.created`. For all options, see the documentation for the [audit log object](/docs/api-reference/audit-logs/object).",
      "actor_ids[]": "Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID.",
      "actor_emails[]": "Return only events performed by users with these emails.",
      "resource_ids[]": "Return only events performed on these targets. For example, a project ID updated.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n"
    }
  },
  "listOrganizationCertificates": {
    "accessPath": [
      "listOrganizationCertificates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/certificates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after",
      "order"
    ],
    "description": "List uploaded certificates for this organization.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n"
    }
  },
  "uploadCertificate": {
    "accessPath": [
      "uploadCertificate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "content"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/certificates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Upload a certificate to the organization. This does **not** automatically activate the certificate.\n\nOrganizations can upload up to 50 certificates.\n"
  },
  "activateOrganizationCertificates": {
    "accessPath": [
      "activateOrganizationCertificates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "certificate_ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/certificates/activate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Activate certificates at the organization level.\n\nYou can atomically and idempotently activate up to 10 certificates at a time.\n"
  },
  "deactivateOrganizationCertificates": {
    "accessPath": [
      "deactivateOrganizationCertificates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "certificate_ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/certificates/deactivate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deactivate certificates at the organization level.\n\nYou can atomically and idempotently deactivate up to 10 certificates at a time.\n"
  },
  "getCertificate": {
    "accessPath": [
      "getCertificate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/certificates/{certificate_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "cert_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Get a certificate that has been uploaded to the organization.\n\nYou can get a certificate regardless of whether it is active or not.\n",
    "parameterDescriptions": {
      "cert_id": "Unique ID of the certificate to retrieve.",
      "include": "A list of additional fields to include in the response. Currently the only supported value is `content` to fetch the PEM content of the certificate."
    }
  },
  "modifyCertificate": {
    "accessPath": [
      "modifyCertificate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/certificates/{certificate_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modify a certificate. Note that only the name can be modified.\n"
  },
  "deleteCertificate": {
    "accessPath": [
      "deleteCertificate"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/certificates/{certificate_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a certificate from the organization.\n\nThe certificate must be inactive for the organization and all projects.\n"
  },
  "usage-costs": {
    "accessPath": [
      "usageCosts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/costs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get costs details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently only `1d` is supported, default to `1d`.",
      "project_ids": "Return only costs for these projects.",
      "group_by": "Group the costs by the specified fields. Support fields include `project_id`, `line_item` and any combination of them.",
      "limit": "A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "list-invites": {
    "accessPath": [
      "listInvites"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/invites",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after"
    ],
    "description": "Returns a list of invites in the organization.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n"
    }
  },
  "inviteUser": {
    "accessPath": [
      "inviteUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "email",
      "role",
      "projects"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/invites",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization."
  },
  "retrieve-invite": {
    "accessPath": [
      "retrieveInvite"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/invites/{invite_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves an invite.",
    "parameterDescriptions": {
      "invite_id": "The ID of the invite to retrieve."
    }
  },
  "delete-invite": {
    "accessPath": [
      "deleteInvite"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/invites/{invite_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "invite_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete an invite. If the invite has already been accepted, it cannot be deleted.",
    "parameterDescriptions": {
      "invite_id": "The ID of the invite to delete."
    }
  },
  "list-projects": {
    "accessPath": [
      "listProjects"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after",
      "include_archived"
    ],
    "description": "Returns a list of projects.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "include_archived": "If `true` returns all projects including those that have been `archived`. Archived projects are not included by default."
    }
  },
  "create-project": {
    "accessPath": [
      "createProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a new project in the organization. Projects can be created and archived, but cannot be deleted."
  },
  "retrieve-project": {
    "accessPath": [
      "retrieveProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project."
    }
  },
  "modify-project": {
    "accessPath": [
      "modifyProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a project in the organization.",
    "parameterDescriptions": {
      "project_id": "The ID of the project."
    }
  },
  "list-project-api-keys": {
    "accessPath": [
      "listProjectApiKeys"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/api_keys",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after"
    ],
    "description": "Returns a list of API keys in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n"
    }
  },
  "retrieve-project-api-key": {
    "accessPath": [
      "retrieveProjectApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/api_keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves an API key in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "key_id": "The ID of the API key."
    }
  },
  "delete-project-api-key": {
    "accessPath": [
      "deleteProjectApiKey"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/projects/{project_id}/api_keys/{key_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "key_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deletes an API key from the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "key_id": "The ID of the API key."
    }
  },
  "archive-project": {
    "accessPath": [
      "archiveProject"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/archive",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Archives a project in the organization. Archived projects cannot be used or updated.",
    "parameterDescriptions": {
      "project_id": "The ID of the project."
    }
  },
  "listProjectCertificates": {
    "accessPath": [
      "listProjectCertificates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/certificates",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after",
      "order"
    ],
    "description": "List certificates for this project.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n"
    }
  },
  "activateProjectCertificates": {
    "accessPath": [
      "activateProjectCertificates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "certificate_ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/certificates/activate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Activate certificates at the project level.\n\nYou can atomically and idempotently activate up to 10 certificates at a time.\n"
  },
  "deactivateProjectCertificates": {
    "accessPath": [
      "deactivateProjectCertificates"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "certificate_ids"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/certificates/deactivate",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deactivate certificates at the project level.\n\nYou can atomically and idempotently deactivate up to 10 certificates at a time.\n"
  },
  "list-project-rate-limits": {
    "accessPath": [
      "listProjectRateLimits"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/rate_limits",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after",
      "before"
    ],
    "description": "Returns the rate limits per model for a project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "limit": "A limit on the number of objects to be returned. The default is 100.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, beginning with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n"
    }
  },
  "update-project-rate-limits": {
    "accessPath": [
      "updateProjectRateLimits"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "max_requests_per_1_minute",
      "max_tokens_per_1_minute",
      "max_images_per_1_minute",
      "max_audio_megabytes_per_1_minute",
      "max_requests_per_1_day",
      "batch_1_day_max_input_tokens"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/rate_limits/{rate_limit_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "rate_limit_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Updates a project rate limit.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "rate_limit_id": "The ID of the rate limit."
    }
  },
  "list-project-service-accounts": {
    "accessPath": [
      "listProjectServiceAccounts"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/service_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after"
    ],
    "description": "Returns a list of service accounts in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n"
    }
  },
  "create-project-service-account": {
    "accessPath": [
      "createProjectServiceAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/service_accounts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates a new service account in the project. This also returns an unredacted API key for the service account.",
    "parameterDescriptions": {
      "project_id": "The ID of the project."
    }
  },
  "retrieve-project-service-account": {
    "accessPath": [
      "retrieveProjectServiceAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/service_accounts/{service_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "service_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a service account in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "service_account_id": "The ID of the service account."
    }
  },
  "delete-project-service-account": {
    "accessPath": [
      "deleteProjectServiceAccount"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/projects/{project_id}/service_accounts/{service_account_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "service_account_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deletes a service account from the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "service_account_id": "The ID of the service account."
    }
  },
  "list-project-users": {
    "accessPath": [
      "listProjectUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after"
    ],
    "description": "Returns a list of users in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n"
    }
  },
  "create-project-user": {
    "accessPath": [
      "createProjectUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "user_id",
      "role"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Adds a user to the project. Users must already be members of the organization to be added to a project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project."
    }
  },
  "retrieve-project-user": {
    "accessPath": [
      "retrieveProjectUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/projects/{project_id}/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a user in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "user_id": "The ID of the user."
    }
  },
  "modify-project-user": {
    "accessPath": [
      "modifyProjectUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "role"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/projects/{project_id}/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a user's role in the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "user_id": "The ID of the user."
    }
  },
  "delete-project-user": {
    "accessPath": [
      "deleteProjectUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/projects/{project_id}/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "project_id",
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deletes a user from the project.",
    "parameterDescriptions": {
      "project_id": "The ID of the project.",
      "user_id": "The ID of the user."
    }
  },
  "usage-audio-speeches": {
    "accessPath": [
      "usageAudioSpeeches"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/audio_speeches",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "user_ids",
      "api_key_ids",
      "models",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get audio speeches usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "user_ids": "Return only usage for these users.",
      "api_key_ids": "Return only usage for these API keys.",
      "models": "Return only usage for these models.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-audio-transcriptions": {
    "accessPath": [
      "usageAudioTranscriptions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/audio_transcriptions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "user_ids",
      "api_key_ids",
      "models",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get audio transcriptions usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "user_ids": "Return only usage for these users.",
      "api_key_ids": "Return only usage for these API keys.",
      "models": "Return only usage for these models.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-code-interpreter-sessions": {
    "accessPath": [
      "usageCodeInterpreterSessions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/code_interpreter_sessions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get code interpreter sessions usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-completions": {
    "accessPath": [
      "usageCompletions"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/completions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "user_ids",
      "api_key_ids",
      "models",
      "batch",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get completions usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "user_ids": "Return only usage for these users.",
      "api_key_ids": "Return only usage for these API keys.",
      "models": "Return only usage for these models.",
      "batch": "If `true`, return batch jobs only. If `false`, return non-batch jobs only. By default, return both.\n",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `batch` or any combination of them.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-embeddings": {
    "accessPath": [
      "usageEmbeddings"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/embeddings",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "user_ids",
      "api_key_ids",
      "models",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get embeddings usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "user_ids": "Return only usage for these users.",
      "api_key_ids": "Return only usage for these API keys.",
      "models": "Return only usage for these models.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-images": {
    "accessPath": [
      "usageImages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/images",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "sources",
      "sizes",
      "project_ids",
      "user_ids",
      "api_key_ids",
      "models",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get images usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "sources": "Return only usages for these sources. Possible values are `image.generation`, `image.edit`, `image.variation` or any combination of them.",
      "sizes": "Return only usages for these image sizes. Possible values are `256x256`, `512x512`, `1024x1024`, `1792x1792`, `1024x1792` or any combination of them.",
      "project_ids": "Return only usage for these projects.",
      "user_ids": "Return only usage for these users.",
      "api_key_ids": "Return only usage for these API keys.",
      "models": "Return only usage for these models.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model`, `size`, `source` or any combination of them.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-moderations": {
    "accessPath": [
      "usageModerations"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/moderations",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "user_ids",
      "api_key_ids",
      "models",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get moderations usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "user_ids": "Return only usage for these users.",
      "api_key_ids": "Return only usage for these API keys.",
      "models": "Return only usage for these models.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "usage-vector-stores": {
    "accessPath": [
      "usageVectorStores"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/usage/vector_stores",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "start_time",
      "end_time",
      "bucket_width",
      "project_ids",
      "group_by",
      "limit",
      "page"
    ],
    "description": "Get vector stores usage details for the organization.",
    "parameterDescriptions": {
      "start_time": "Start time (Unix seconds) of the query time range, inclusive.",
      "end_time": "End time (Unix seconds) of the query time range, exclusive.",
      "bucket_width": "Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.",
      "project_ids": "Return only usage for these projects.",
      "group_by": "Group the usage data by the specified fields. Support fields include `project_id`.",
      "limit": "Specifies the number of buckets to return.\n- `bucket_width=1d`: default: 7, max: 31\n- `bucket_width=1h`: default: 24, max: 168\n- `bucket_width=1m`: default: 60, max: 1440\n",
      "page": "A cursor for use in pagination. Corresponding to the `next_page` field from the previous response."
    }
  },
  "list-users": {
    "accessPath": [
      "listUsers"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/users",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "after",
      "emails"
    ],
    "description": "Lists all of the users in the organization.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "emails": "Filter by the email address of users."
    }
  },
  "retrieve-user": {
    "accessPath": [
      "retrieveUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/organization/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a user by their identifier.",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "modify-user": {
    "accessPath": [
      "modifyUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "role"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/organization/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a user's role in the organization.",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "delete-user": {
    "accessPath": [
      "deleteUser"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/organization/users/{user_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "user_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deletes a user from the organization.",
    "parameterDescriptions": {
      "user_id": "The ID of the user."
    }
  },
  "create-realtime-session": {
    "accessPath": [
      "createRealtimeSession"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "modalities",
      "model",
      "instructions",
      "voice",
      "input_audio_format",
      "output_audio_format",
      "input_audio_transcription",
      "turn_detection",
      "input_audio_noise_reduction",
      "tools",
      "tool_choice",
      "temperature",
      "max_response_output_tokens"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/realtime/sessions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an ephemeral API token for use in client-side applications with the\nRealtime API. Can be configured with the same session parameters as the\n`session.update` client event.\n\nIt responds with a session object, plus a `client_secret` key which contains\na usable ephemeral API token that can be used to authenticate browser clients\nfor the Realtime API.\n"
  },
  "create-realtime-transcription-session": {
    "accessPath": [
      "createRealtimeTranscriptionSession"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "modalities",
      "input_audio_format",
      "input_audio_transcription",
      "turn_detection",
      "input_audio_noise_reduction",
      "include"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/realtime/transcription_sessions",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create an ephemeral API token for use in client-side applications with the\nRealtime API specifically for realtime transcriptions. \nCan be configured with the same session parameters as the `transcription_session.update` client event.\n\nIt responds with a session object, plus a `client_secret` key which contains\na usable ephemeral API token that can be used to authenticate browser clients\nfor the Realtime API.\n"
  },
  "createResponse": {
    "accessPath": [
      "createResponse"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "metadata",
      "temperature",
      "top_p",
      "user",
      "service_tier",
      "previous_response_id",
      "model",
      "reasoning",
      "max_output_tokens",
      "instructions",
      "text",
      "tools",
      "tool_choice",
      "truncation",
      "input",
      "include",
      "parallel_tool_calls",
      "store",
      "stream"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/responses",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates a model response. Provide [text](/docs/guides/text) or\n[image](/docs/guides/images) inputs to generate [text](/docs/guides/text)\nor [JSON](/docs/guides/structured-outputs) outputs. Have the model call\nyour own [custom code](/docs/guides/function-calling) or use built-in\n[tools](/docs/guides/tools) like [web search](/docs/guides/tools-web-search)\nor [file search](/docs/guides/tools-file-search) to use your own data\nas input for the model's response.\n"
  },
  "getResponse": {
    "accessPath": [
      "getResponse"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/responses/{response_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "response_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include"
    ],
    "description": "Retrieves a model response with the given ID.\n",
    "parameterDescriptions": {
      "response_id": "The ID of the response to retrieve.",
      "include": "Additional fields to include in the response. See the `include`\nparameter for Response creation above for more information.\n"
    }
  },
  "deleteResponse": {
    "accessPath": [
      "deleteResponse"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/responses/{response_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "response_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deletes a model response with the given ID.\n",
    "parameterDescriptions": {
      "response_id": "The ID of the response to delete."
    }
  },
  "listInputItems": {
    "accessPath": [
      "listInputItems"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/responses/{response_id}/input_items",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "response_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before",
      "include"
    ],
    "description": "Returns a list of input items for a given response.",
    "parameterDescriptions": {
      "response_id": "The ID of the response to retrieve input items for.",
      "limit": "A limit on the number of objects to be returned. Limit can range between\n1 and 100, and the default is 20.\n",
      "order": "The order to return the input items in. Default is `asc`.\n- `asc`: Return the input items in ascending order.\n- `desc`: Return the input items in descending order.\n",
      "after": "An item ID to list items after, used in pagination.\n",
      "before": "An item ID to list items before, used in pagination.\n",
      "include": "Additional fields to include in the response. See the `include`\nparameter for Response creation above for more information.\n"
    }
  },
  "createThread": {
    "accessPath": [
      "createThread"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "messages",
      "tool_resources",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a thread."
  },
  "createThreadAndRun": {
    "accessPath": [
      "createThreadAndRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "assistant_id",
      "thread",
      "model",
      "instructions",
      "tools",
      "tool_resources",
      "metadata",
      "temperature",
      "top_p",
      "stream",
      "max_prompt_tokens",
      "max_completion_tokens",
      "truncation_strategy",
      "tool_choice",
      "parallel_tool_calls",
      "response_format"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a thread and run it in one request."
  },
  "getThread": {
    "accessPath": [
      "getThread"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a thread.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to retrieve."
    }
  },
  "modifyThread": {
    "accessPath": [
      "modifyThread"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tool_resources",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a thread.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to modify. Only the `metadata` can be modified."
    }
  },
  "deleteThread": {
    "accessPath": [
      "deleteThread"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/threads/{thread_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a thread.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to delete."
    }
  },
  "listMessages": {
    "accessPath": [
      "listMessages"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}/messages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before",
      "run_id"
    ],
    "description": "Returns a list of messages for a given thread.",
    "parameterDescriptions": {
      "thread_id": "The ID of the [thread](/docs/api-reference/threads) the messages belong to.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n",
      "run_id": "Filter messages by the run ID that generated them.\n"
    }
  },
  "createMessage": {
    "accessPath": [
      "createMessage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "role",
      "content",
      "attachments",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}/messages",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a message.",
    "parameterDescriptions": {
      "thread_id": "The ID of the [thread](/docs/api-reference/threads) to create a message for."
    }
  },
  "getMessage": {
    "accessPath": [
      "getMessage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}/messages/{message_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "message_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve a message.",
    "parameterDescriptions": {
      "thread_id": "The ID of the [thread](/docs/api-reference/threads) to which this message belongs.",
      "message_id": "The ID of the message to retrieve."
    }
  },
  "modifyMessage": {
    "accessPath": [
      "modifyMessage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}/messages/{message_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "message_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a message.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to which this message belongs.",
      "message_id": "The ID of the message to modify."
    }
  },
  "deleteMessage": {
    "accessPath": [
      "deleteMessage"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/threads/{thread_id}/messages/{message_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "message_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Deletes a message.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to which this message belongs.",
      "message_id": "The ID of the message to delete."
    }
  },
  "listRuns": {
    "accessPath": [
      "listRuns"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before"
    ],
    "description": "Returns a list of runs belonging to a thread.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread the run belongs to.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n"
    }
  },
  "createRun": {
    "accessPath": [
      "createRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "assistant_id",
      "model",
      "reasoning_effort",
      "instructions",
      "additional_instructions",
      "additional_messages",
      "tools",
      "metadata",
      "temperature",
      "top_p",
      "stream",
      "max_prompt_tokens",
      "max_completion_tokens",
      "truncation_strategy",
      "tool_choice",
      "parallel_tool_calls",
      "response_format"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}/runs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include[]"
    ],
    "description": "Create a run.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to run.",
      "include[]": "A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n"
    }
  },
  "getRun": {
    "accessPath": [
      "getRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a run.",
    "parameterDescriptions": {
      "thread_id": "The ID of the [thread](/docs/api-reference/threads) that was run.",
      "run_id": "The ID of the run to retrieve."
    }
  },
  "modifyRun": {
    "accessPath": [
      "modifyRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}/runs/{run_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a run.",
    "parameterDescriptions": {
      "thread_id": "The ID of the [thread](/docs/api-reference/threads) that was run.",
      "run_id": "The ID of the run to modify."
    }
  },
  "cancelRun": {
    "accessPath": [
      "cancelRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}/runs/{run_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancels a run that is `in_progress`.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to which this run belongs.",
      "run_id": "The ID of the run to cancel."
    }
  },
  "listRunSteps": {
    "accessPath": [
      "listRunSteps"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}/runs/{run_id}/steps",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before",
      "include[]"
    ],
    "description": "Returns a list of run steps belonging to a run.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread the run and run steps belong to.",
      "run_id": "The ID of the run the run steps belong to.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n",
      "include[]": "A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n"
    }
  },
  "getRunStep": {
    "accessPath": [
      "getRunStep"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/threads/{thread_id}/runs/{run_id}/steps/{step_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "run_id",
      "step_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "include[]"
    ],
    "description": "Retrieves a run step.",
    "parameterDescriptions": {
      "thread_id": "The ID of the thread to which the run and run step belongs.",
      "run_id": "The ID of the run to which the run step belongs.",
      "step_id": "The ID of the run step to retrieve.",
      "include[]": "A list of additional fields to include in the response. Currently the only supported value is `step_details.tool_calls[*].file_search.results[*].content` to fetch the file search result content.\n\nSee the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.\n"
    }
  },
  "submitToolOuputsToRun": {
    "accessPath": [
      "submitToolOuputsToRun"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "tool_outputs",
      "stream"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/threads/{thread_id}/runs/{run_id}/submit_tool_outputs",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "thread_id",
      "run_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "When a run has the `status: \"requires_action\"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.\n",
    "parameterDescriptions": {
      "thread_id": "The ID of the [thread](/docs/api-reference/threads) to which this run belongs.",
      "run_id": "The ID of the run that requires the tool output submission."
    }
  },
  "createUpload": {
    "accessPath": [
      "createUpload"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "filename",
      "purpose",
      "bytes",
      "mime_type"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/uploads",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Creates an intermediate [Upload](/docs/api-reference/uploads/object) object\nthat you can add [Parts](/docs/api-reference/uploads/part-object) to.\nCurrently, an Upload can accept at most 8 GB in total and expires after an\nhour after you create it.\n\nOnce you complete the Upload, we will create a\n[File](/docs/api-reference/files/object) object that contains all the parts\nyou uploaded. This File is usable in the rest of our platform as a regular\nFile object.\n\nFor certain `purpose` values, the correct `mime_type` must be specified. \nPlease refer to documentation for the \n[supported MIME types for your use case](/docs/assistants/tools/file-search#supported-files).\n\nFor guidance on the proper filename extensions for each purpose, please\nfollow the documentation on [creating a\nFile](/docs/api-reference/files/create).\n"
  },
  "cancelUpload": {
    "accessPath": [
      "cancelUpload"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/uploads/{upload_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "upload_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancels the Upload. No Parts may be added after an Upload is cancelled.\n",
    "parameterDescriptions": {
      "upload_id": "The ID of the Upload.\n"
    }
  },
  "completeUpload": {
    "accessPath": [
      "completeUpload"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "part_ids",
      "md5"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/uploads/{upload_id}/complete",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "upload_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Completes the [Upload](/docs/api-reference/uploads/object). \n\nWithin the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.\n\nYou can specify the order of the Parts by passing in an ordered list of the Part IDs.\n\nThe number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.\n",
    "parameterDescriptions": {
      "upload_id": "The ID of the Upload.\n"
    }
  },
  "addUploadPart": {
    "accessPath": [
      "addUploadPart"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "data"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/uploads/{upload_id}/parts",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "upload_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload. \n\nEach Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.\n\nIt is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete).\n",
    "parameterDescriptions": {
      "upload_id": "The ID of the Upload.\n"
    }
  },
  "listVectorStores": {
    "accessPath": [
      "listVectorStores"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before"
    ],
    "description": "Returns a list of vector stores.",
    "parameterDescriptions": {
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n"
    }
  },
  "createVectorStore": {
    "accessPath": [
      "createVectorStore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file_ids",
      "name",
      "expires_after",
      "chunking_strategy",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a vector store."
  },
  "getVectorStore": {
    "accessPath": [
      "getVectorStore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a vector store.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store to retrieve."
    }
  },
  "modifyVectorStore": {
    "accessPath": [
      "modifyVectorStore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "expires_after",
      "metadata"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Modifies a vector store.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store to modify."
    }
  },
  "deleteVectorStore": {
    "accessPath": [
      "deleteVectorStore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a vector store.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store to delete."
    }
  },
  "createVectorStoreFileBatch": {
    "accessPath": [
      "createVectorStoreFileBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file_ids",
      "chunking_strategy",
      "attributes"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/file_batches",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a vector store file batch.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store for which to create a File Batch.\n"
    }
  },
  "getVectorStoreFileBatch": {
    "accessPath": [
      "getVectorStoreFileBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/file_batches/{batch_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a vector store file batch.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store that the file batch belongs to.",
      "batch_id": "The ID of the file batch being retrieved."
    }
  },
  "cancelVectorStoreFileBatch": {
    "accessPath": [
      "cancelVectorStoreFileBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store that the file batch belongs to.",
      "batch_id": "The ID of the file batch to cancel."
    }
  },
  "listFilesInVectorStoreBatch": {
    "accessPath": [
      "listFilesInVectorStoreBatch"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/file_batches/{batch_id}/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "batch_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before",
      "filter"
    ],
    "description": "Returns a list of vector store files in a batch.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store that the files belong to.",
      "batch_id": "The ID of the file batch that the files belong to.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n",
      "filter": "Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`."
    }
  },
  "listVectorStoreFiles": {
    "accessPath": [
      "listVectorStoreFiles"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "limit",
      "order",
      "after",
      "before",
      "filter"
    ],
    "description": "Returns a list of vector store files.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store that the files belong to.",
      "limit": "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n",
      "order": "Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n",
      "after": "A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n",
      "before": "A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n",
      "filter": "Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`."
    }
  },
  "createVectorStoreFile": {
    "accessPath": [
      "createVectorStoreFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "file_id",
      "chunking_strategy",
      "attributes"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/files",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object).",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store for which to create a File.\n"
    }
  },
  "getVectorStoreFile": {
    "accessPath": [
      "getVectorStoreFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/files/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieves a vector store file.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store that the file belongs to.",
      "file_id": "The ID of the file being retrieved."
    }
  },
  "deleteVectorStoreFile": {
    "accessPath": [
      "deleteVectorStoreFile"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "DELETE",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/files/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store that the file belongs to.",
      "file_id": "The ID of the file to delete."
    }
  },
  "updateVectorStoreFileAttributes": {
    "accessPath": [
      "updateVectorStoreFileAttributes"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "attributes"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/files/{file_id}",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Update attributes on a vector store file.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store the file belongs to.",
      "file_id": "The ID of the file to update attributes."
    }
  },
  "retrieveVectorStoreFileContent": {
    "accessPath": [
      "retrieveVectorStoreFileContent"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "effect": "observation",
    "headerParameterKeys": [],
    "method": "GET",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/files/{file_id}/content",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id",
      "file_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Retrieve the parsed contents of a vector store file.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store.",
      "file_id": "The ID of the file within the vector store."
    }
  },
  "searchVectorStore": {
    "accessPath": [
      "searchVectorStore"
    ],
    "bodyAllowsAdditionalProperties": false,
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "query",
      "rewrite_query",
      "max_num_results",
      "filters",
      "ranking_options"
    ],
    "contentType": "application/json",
    "effect": "action",
    "headerParameterKeys": [],
    "method": "POST",
    "routeTemplate": "/v1/vector_stores/{vector_store_id}/search",
    "pathConflictKeys": [],
    "pathParameterKeys": [
      "vector_store_id"
    ],
    "queryConflictKeys": [],
    "queryParameterKeys": [],
    "description": "Search a vector store for relevant chunks based on a query and file attributes filter.",
    "parameterDescriptions": {
      "vector_store_id": "The ID of the vector store to search."
    }
  }
} satisfies ToolRuntimeMetadataMap;

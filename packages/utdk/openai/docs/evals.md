# Evals

12 operations · `@utdk/openai`

```ts
import openai from "@utdk/openai";
```

## `openai.listEvals`

List evaluations for a project. — [Provider docs](https://help.openai.com/)

```ts
openai.listEvals(input: {
  /** Identifier for the last eval from the previous pagination request. */
  after?: string;
  /** Number of evals to retrieve. */
  limit?: number;
  /** Sort order for evals by timestamp. Use `asc` for ascending order or `desc` for descending order. */
  order?: "asc" | "desc";
  /** Evals can be ordered by creation time or last updated time. Use `created_at` for creation time or `updated_at` for last updated time.  */
  order_by?: "created_at" | "updated_at";
}): Promise<EvalList>
```

<sub>`GET /evals` · `listEvals`</sub>

## `openai.createEval`

Create the structure of an evaluation that can be used to test a model's performance. An evaluation is a set of testing criteria and a datasource. After creating an evaluation, you can run it on different models and model parameters. We support several types of graders and datasources. For more information, see the [Evals guide](/docs/guides/evals). — [Provider docs](https://help.openai.com/)

```ts
openai.createEval(input: {
  /** The name of the evaluation. */
  name?: string;
  metadata?: Metadata;
  /** The configuration for the data source used for the evaluation runs. */
  data_source_config: CreateEvalCustomDataSourceConfig | CreateEvalLogsDataSourceConfig;
  /** A list of graders for all eval runs in this group. */
  testing_criteria: (CreateEvalLabelModelGrader | EvalStringCheckGrader | EvalTextSimilarityGrader | EvalPythonGrader | EvalScoreModelGrader)[];
}): Promise<Eval>
```

<sub>`POST /evals` · `createEval`</sub>

## `openai.deleteEval`

Delete an evaluation. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteEval(input: {
  /** The ID of the evaluation to delete. */
  eval_id: string;
}): Promise<{ object: string; deleted: boolean; eval_id: string }>
```

<sub>`DELETE /evals/{eval_id}` · `deleteEval`</sub>

## `openai.getEval`

Get an evaluation by ID. — [Provider docs](https://help.openai.com/)

```ts
openai.getEval(input: {
  /** The ID of the evaluation to retrieve. */
  eval_id: string;
}): Promise<Eval>
```

<sub>`GET /evals/{eval_id}` · `getEval`</sub>

## `openai.updateEval`

Update certain properties of an evaluation. — [Provider docs](https://help.openai.com/)

```ts
openai.updateEval(input: {
  /** Rename the evaluation. */
  name?: string;
  metadata?: Metadata;
  /** The ID of the evaluation to update. */
  eval_id: string;
}): Promise<Eval>
```

<sub>`POST /evals/{eval_id}` · `updateEval`</sub>

## `openai.getEvalRuns`

Get a list of runs for an evaluation. — [Provider docs](https://help.openai.com/)

```ts
openai.getEvalRuns(input: {
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
}): Promise<EvalRunList>
```

<sub>`GET /evals/{eval_id}/runs` · `getEvalRuns`</sub>

## `openai.createEvalRun`

Create a new evaluation run. This is the endpoint that will kick off grading. — [Provider docs](https://help.openai.com/)

```ts
openai.createEvalRun(input: {
  /** The name of the run. */
  name?: string;
  metadata?: Metadata;
  /** Details about the run's data source. */
  data_source: CreateEvalJsonlRunDataSource | CreateEvalCompletionsRunDataSource | CreateEvalResponsesRunDataSource;
  /** The ID of the evaluation to create a run for. */
  eval_id: string;
}): Promise<EvalRun>
```

<sub>`POST /evals/{eval_id}/runs` · `createEvalRun`</sub>

## `openai.deleteEvalRun`

Delete an eval run. — [Provider docs](https://help.openai.com/)

```ts
openai.deleteEvalRun(input: {
  /** The ID of the evaluation to delete the run from. */
  eval_id: string;
  /** The ID of the run to delete. */
  run_id: string;
}): Promise<{ object?: string; deleted?: boolean; run_id?: string }>
```

<sub>`DELETE /evals/{eval_id}/runs/{run_id}` · `deleteEvalRun`</sub>

## `openai.getEvalRun`

Get an evaluation run by ID. — [Provider docs](https://help.openai.com/)

```ts
openai.getEvalRun(input: {
  /** The ID of the evaluation to retrieve runs for. */
  eval_id: string;
  /** The ID of the run to retrieve. */
  run_id: string;
}): Promise<EvalRun>
```

<sub>`GET /evals/{eval_id}/runs/{run_id}` · `getEvalRun`</sub>

## `openai.cancelEvalRun`

Cancel an ongoing evaluation run. — [Provider docs](https://help.openai.com/)

```ts
openai.cancelEvalRun(input: {
  /** The ID of the evaluation whose run you want to cancel. */
  eval_id: string;
  /** The ID of the run to cancel. */
  run_id: string;
}): Promise<EvalRun>
```

<sub>`POST /evals/{eval_id}/runs/{run_id}` · `cancelEvalRun`</sub>

## `openai.getEvalRunOutputItems`

Get a list of output items for an evaluation run. — [Provider docs](https://help.openai.com/)

```ts
openai.getEvalRunOutputItems(input: {
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
}): Promise<EvalRunOutputItemList>
```

<sub>`GET /evals/{eval_id}/runs/{run_id}/output_items` · `getEvalRunOutputItems`</sub>

## `openai.getEvalRunOutputItem`

Get an evaluation run output item by ID. — [Provider docs](https://help.openai.com/)

```ts
openai.getEvalRunOutputItem(input: {
  /** The ID of the evaluation to retrieve runs for. */
  eval_id: string;
  /** The ID of the run to retrieve. */
  run_id: string;
  /** The ID of the output item to retrieve. */
  output_item_id: string;
}): Promise<EvalRunOutputItem>
```

<sub>`GET /evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}` · `getEvalRunOutputItem`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Experiments

8 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getExperiments`

Get experiments — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExperiments(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The maximum number of experiments to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above. */
  filter?: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. */
  expand?: string;
  /** A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments. */
  lifecycleState?: string;
}): Promise<ExperimentCollectionRep>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments` · `getExperiments`</sub>

## `launchdarkly.createExperiment`

Create experiment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createExperiment(input: {
  /** The experiment name */
  name: string;
  /** The experiment description */
  description?: string;
  /** The ID of the member who maintains this experiment */
  maintainerId?: string;
  /** The experiment key */
  key: string;
  /** Details on the construction of the initial iteration */
  iteration: IterationInput;
  /** The ID of the holdout */
  holdoutId?: string;
  /** Tags for the experiment */
  tags?: (string)[];
  /** The results analysis approach. */
  methodology?: "bayesian" | "frequentist" | "export_only";
  /** Details of the Analysis Configuration for this experiment */
  analysisConfig?: AnalysisConfigInput;
  /** The source of metric data in order to analyze results. Defaults to "launchdarkly" when not provided. */
  dataSource?: "launchdarkly" | "snowflake";
  /** The type of experiment. */
  type?: "experiment" | "mab" | "holdout";
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<Experiment>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments` · `createExperiment`</sub>

## `launchdarkly.getExperiment`

Get experiment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExperiment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The experiment key */
  experimentKey: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. */
  expand?: string;
}): Promise<Experiment>
```

<sub>`GET /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}` · `getExperiment`</sub>

## `launchdarkly.patchExperiment`

Patch experiment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchExperiment(input: {
  /** Optional comment describing the update */
  comment?: string;
  /** The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require a <code>value</code> field in the array element. */
  instructions: Instructions;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The experiment key */
  experimentKey: string;
}): Promise<Experiment>
```

<sub>`PATCH /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}` · `patchExperiment`</sub>

## `launchdarkly.createIteration`

Create iteration — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createIteration(input: {
  /** The expected outcome of this experiment */
  hypothesis: string;
  /** Whether to allow the experiment to reassign traffic to different variations when you increase or decrease the traffic in your experiment audience (true) or keep all traffic assigned to its initial variation (false). Defaults to true. */
  canReshuffleTraffic?: boolean;
  /** Details on the metrics for this experiment */
  metrics: MetricsInput;
  /** The key of the primary metric for this experiment. Either <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be present. */
  primarySingleMetricKey?: string;
  /** The key of the primary funnel group for this experiment. Either <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be present. */
  primaryFunnelKey?: string;
  /** Details on the variations you are testing in the experiment. You establish these variations in feature flags, and then reuse them in experiments. */
  treatments: TreatmentsInput;
  /** Details on the feature flag and targeting rules for this iteration */
  flags: FlagsInput;
  /** The unit of randomization for this iteration. Defaults to user. */
  randomizationUnit?: string;
  /** The cadence (in milliseconds) to update the allocation. */
  reallocationFrequencyMillis?: number;
  /** The ID of the covariate CSV */
  covariateId?: string;
  /** The attributes that this iteration's results can be sliced by */
  attributes?: (string)[];
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The experiment key */
  experimentKey: string;
}): Promise<IterationRep>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations` · `createIteration`</sub>

## `launchdarkly.getExperimentationSettings`

Get experimentation settings — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExperimentationSettings(input: {
  /** The project key */
  projectKey: string;
}): Promise<RandomizationSettingsRep>
```

<sub>`GET /api/v2/projects/{projectKey}/experimentation-settings` · `getExperimentationSettings`</sub>

## `launchdarkly.putExperimentationSettings`

Update experimentation settings — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putExperimentationSettings(input: {
  /** An array of randomization units allowed for this project. */
  randomizationUnits: (RandomizationUnitInput)[];
  /** The project key */
  projectKey: string;
}): Promise<RandomizationSettingsRep>
```

<sub>`PUT /api/v2/projects/{projectKey}/experimentation-settings` · `putExperimentationSettings`</sub>

## `launchdarkly.getExperimentsAnyEnv`

Get experiments any environment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExperimentsAnyEnv(input: {
  /** The project key */
  projectKey: string;
  /** The maximum number of experiments to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above. */
  filter?: string;
  /** A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. */
  expand?: string;
  /** A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments. */
  lifecycleState?: string;
}): Promise<ExperimentCollectionRep>
```

<sub>`GET /api/v2/projects/{projectKey}/experiments` · `getExperimentsAnyEnv`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

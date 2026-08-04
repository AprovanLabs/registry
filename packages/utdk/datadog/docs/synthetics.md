# Synthetics

35 operations · `@utdk/datadog`

```ts
import datadog from "@utdk/datadog";
```

## `datadog.getApiMultistepSubtests`

Get available subtests for a multistep test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApiMultistepSubtests(input: {
  /** The public ID of the API multistep test. */
  public_id: string;
}): Promise<SyntheticsApiMultistepSubtestsResponse>
```

<sub>`GET /api/v2/synthetics/api-multistep/subtests/{public_id}` · `GetApiMultistepSubtests`</sub>

## `datadog.getApiMultistepSubtestParents`

Get parent tests for a subtest — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getApiMultistepSubtestParents(input: {
  /** The public ID of the subtest. */
  public_id: string;
}): Promise<SyntheticsApiMultistepParentTestsResponse>
```

<sub>`GET /api/v2/synthetics/api-multistep/subtests/{public_id}/parents` · `GetApiMultistepSubtestParents`</sub>

## `datadog.listSyntheticsDowntimes`

List Synthetics downtimes — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSyntheticsDowntimes(input: {
  /** Comma-separated list of Synthetics test public IDs to filter downtimes by. */
  "filter[test_ids]"?: string;
  /** If set to `true`, return only downtimes that are currently active. */
  "filter[active]"?: string;
}): Promise<SyntheticsDowntimesResponse>
```

<sub>`GET /api/v2/synthetics/downtimes` · `ListSyntheticsDowntimes`</sub>

## `datadog.createSyntheticsDowntime`

Create a Synthetics downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSyntheticsDowntime(input: {
  data: SyntheticsDowntimeDataRequest;
}): Promise<SyntheticsDowntimeResponse>
```

<sub>`POST /api/v2/synthetics/downtimes` · `CreateSyntheticsDowntime`</sub>

## `datadog.deleteSyntheticsDowntime`

Delete a Synthetics downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSyntheticsDowntime(input: {
  /** The ID of the downtime to delete. */
  downtime_id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/synthetics/downtimes/{downtime_id}` · `DeleteSyntheticsDowntime`</sub>

## `datadog.getSyntheticsDowntime`

Get a Synthetics downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsDowntime(input: {
  /** The ID of the downtime to retrieve. */
  downtime_id: string;
}): Promise<SyntheticsDowntimeResponse>
```

<sub>`GET /api/v2/synthetics/downtimes/{downtime_id}` · `GetSyntheticsDowntime`</sub>

## `datadog.updateSyntheticsDowntime`

Update a Synthetics downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSyntheticsDowntime(input: {
  data: SyntheticsDowntimeDataRequest;
  /** The ID of the downtime to update. */
  downtime_id: string;
}): Promise<SyntheticsDowntimeResponse>
```

<sub>`PUT /api/v2/synthetics/downtimes/{downtime_id}` · `UpdateSyntheticsDowntime`</sub>

## `datadog.removeTestFromSyntheticsDowntime`

Remove a test from a Synthetics downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.removeTestFromSyntheticsDowntime(input: {
  /** The ID of the downtime. */
  downtime_id: string;
  /** The public ID of the Synthetics test to disassociate from the downtime. */
  test_id: string;
}): Promise<SyntheticsDowntimeResponse>
```

<sub>`DELETE /api/v2/synthetics/downtimes/{downtime_id}/tests/{test_id}` · `RemoveTestFromSyntheticsDowntime`</sub>

## `datadog.addTestToSyntheticsDowntime`

Add a test to a Synthetics downtime — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.addTestToSyntheticsDowntime(input: {
  /** The ID of the downtime. */
  downtime_id: string;
  /** The public ID of the Synthetics test to associate with the downtime. */
  test_id: string;
}): Promise<SyntheticsDowntimeResponse>
```

<sub>`PUT /api/v2/synthetics/downtimes/{downtime_id}/tests/{test_id}` · `AddTestToSyntheticsDowntime`</sub>

## `datadog.getOnDemandConcurrencyCap`

Get the on-demand concurrency cap — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getOnDemandConcurrencyCap(): Promise<OnDemandConcurrencyCapResponse>
```

<sub>`GET /api/v2/synthetics/settings/on_demand_concurrency_cap` · `GetOnDemandConcurrencyCap`</sub>

## `datadog.setOnDemandConcurrencyCap`

Save new value for on-demand concurrency cap — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.setOnDemandConcurrencyCap(input: {
  /** Value of the on-demand concurrency cap. */
  on_demand_concurrency_cap?: number;
}): Promise<OnDemandConcurrencyCapResponse>
```

<sub>`POST /api/v2/synthetics/settings/on_demand_concurrency_cap` · `SetOnDemandConcurrencyCap`</sub>

## `datadog.createSyntheticsSuite`

Create a test suite — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSyntheticsSuite(input: {
  data: SuiteCreateEdit;
}): Promise<SyntheticsSuiteResponse>
```

<sub>`POST /api/v2/synthetics/suites` · `CreateSyntheticsSuite`</sub>

## `datadog.getSyntheticsSuite`

Get a suite — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsSuite(input: {
  /** The public ID of the suite to get details from. */
  public_id: string;
}): Promise<SyntheticsSuiteResponse>
```

<sub>`GET /api/v2/synthetics/suites/{public_id}` · `GetSyntheticsSuite`</sub>

## `datadog.editSyntheticsSuite`

Edit a test suite — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.editSyntheticsSuite(input: {
  data: SuiteCreateEdit;
  /** The public ID of the suite to edit. */
  public_id: string;
}): Promise<SyntheticsSuiteResponse>
```

<sub>`PUT /api/v2/synthetics/suites/{public_id}` · `EditSyntheticsSuite`</sub>

## `datadog.patchTestSuite`

Patch a test suite — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchTestSuite(input: {
  data: SuiteJsonPatchRequestData;
  /** The public ID of the Synthetic test suite to patch. */
  public_id: string;
}): Promise<SyntheticsSuiteResponse>
```

<sub>`PATCH /api/v2/synthetics/suites/{public_id}/jsonpatch` · `PatchTestSuite`</sub>

## `datadog.deleteSyntheticsSuites`

Bulk delete suites — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSyntheticsSuites(input: {
  data: DeletedSuitesRequestDelete;
}): Promise<DeletedSuitesResponse>
```

<sub>`POST /api/v2/synthetics/suites/bulk-delete` · `DeleteSyntheticsSuites`</sub>

## `datadog.searchSuites`

Search test suites — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.searchSuites(input: {
  /** The search query. */
  query?: string;
  /** The sort order for the results (e.g., `name,asc` or `name,desc`). */
  sort?: string;
  /** If true, return only facets instead of full test details. */
  facets_only?: boolean;
  /** The offset from which to start returning results. */
  start?: number;
  /** The maximum number of results to return. */
  count?: number;
}): Promise<SyntheticsSuiteSearchResponse>
```

<sub>`GET /api/v2/synthetics/suites/search` · `SearchSuites`</sub>

## `datadog.getTestFileDownloadUrl`

Get a presigned URL for downloading a test file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTestFileDownloadUrl(input: {
  /** The bucket key referencing the file to download. */
  bucketKey: string;
  /** The public ID of the Synthetic test. */
  public_id: string;
}): Promise<SyntheticsTestFileDownloadResponse>
```

<sub>`POST /api/v2/synthetics/tests/{public_id}/files/download` · `GetTestFileDownloadUrl`</sub>

## `datadog.getTestFileMultipartPresignedUrls`

Get presigned URLs for uploading a test file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTestFileMultipartPresignedUrls(input: {
  bucketKeyPrefix: SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix;
  /** Array of part descriptors for the multipart upload. */
  parts: (SyntheticsTestFileMultipartPresignedUrlsPart)[];
  /** The public ID of the Synthetic test. */
  public_id: string;
}): Promise<SyntheticsTestFileMultipartPresignedUrlsResponse>
```

<sub>`POST /api/v2/synthetics/tests/{public_id}/files/multipart-presigned-urls` · `GetTestFileMultipartPresignedUrls`</sub>

## `datadog.abortTestFileMultipartUpload`

Abort a multipart upload of a test file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.abortTestFileMultipartUpload(input: {
  /** The full storage path of the file whose upload should be aborted. */
  key: string;
  /** The upload ID of the multipart upload to abort. */
  uploadId: string;
  /** The public ID of the Synthetic test. */
  public_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/synthetics/tests/{public_id}/files/multipart-upload-abort` · `AbortTestFileMultipartUpload`</sub>

## `datadog.completeTestFileMultipartUpload`

Complete a multipart upload of a test file — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.completeTestFileMultipartUpload(input: {
  /** The full storage path for the uploaded file. */
  key: string;
  /** Array of completed parts with their ETags. */
  parts: (SyntheticsTestFileCompleteMultipartUploadPart)[];
  /** The upload ID returned when the multipart upload was initiated. */
  uploadId: string;
  /** The public ID of the Synthetic test. */
  public_id: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/synthetics/tests/{public_id}/files/multipart-upload-complete` · `CompleteTestFileMultipartUpload`</sub>

## `datadog.getTestParentSuites`

Get parent suites for a test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getTestParentSuites(input: {
  /** The public ID of the Synthetic test. */
  public_id: string;
}): Promise<SyntheticsTestParentSuitesResponse>
```

<sub>`GET /api/v2/synthetics/tests/{public_id}/parent-suites` · `GetTestParentSuites`</sub>

## `datadog.listSyntheticsTestLatestResults`

Get a test's latest results — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSyntheticsTestLatestResults(input: {
  /** The public ID of the Synthetic test for which to search results. */
  public_id: string;
  /** Timestamp in milliseconds from which to start querying results. */
  from_ts?: number;
  /** Timestamp in milliseconds up to which to query results. */
  to_ts?: number;
  status?: SyntheticsTestResultStatus;
  runType?: SyntheticsTestResultRunType;
  /** Locations for which to query results. */
  probe_dc?: (string)[];
  /** Device IDs for which to query results. */
  device_id?: (string)[];
}): Promise<SyntheticsTestLatestResultsResponse>
```

<sub>`GET /api/v2/synthetics/tests/{public_id}/results` · `ListSyntheticsTestLatestResults`</sub>

## `datadog.getSyntheticsTestResult`

Get a test result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsTestResult(input: {
  /** The public ID of the Synthetic test to which the target result belongs. */
  public_id: string;
  /** The ID of the result to get. */
  result_id: string;
  /** The event ID used to look up the result in the event store. */
  event_id?: string;
  /** Timestamp in seconds to look up the result. */
  timestamp?: number;
}): Promise<SyntheticsTestResultResponse>
```

<sub>`GET /api/v2/synthetics/tests/{public_id}/results/{result_id}` · `GetSyntheticsTestResult`</sub>

## `datadog.listSyntheticsTestVersions`

Get version history of a test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSyntheticsTestVersions(input: {
  /** The public ID of the Synthetic test. */
  public_id: string;
  /** The version number of the last item from the previous page. Omit to get the first page. */
  last_version_number?: number;
  /** Maximum number of version records to return per page. */
  limit?: number;
}): Promise<SyntheticsTestVersionHistoryResponse>
```

<sub>`GET /api/v2/synthetics/tests/{public_id}/version_history` · `ListSyntheticsTestVersions`</sub>

## `datadog.getSyntheticsTestVersion`

Get a specific version of a test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsTestVersion(input: {
  /** The public ID of the Synthetic test. */
  public_id: string;
  /** The version number to retrieve. */
  version_number: number;
  /** If `true`, include change metadata in the response. */
  include_change_metadata?: boolean;
  /** If `true`, only check whether the version exists without returning its full payload. Returns an empty object if the version exists, or 404 if not. */
  only_check_existence?: boolean;
}): Promise<SyntheticsTestVersionResponse>
```

<sub>`GET /api/v2/synthetics/tests/{public_id}/version_history/{version_number}` · `GetSyntheticsTestVersion`</sub>

## `datadog.listSyntheticsBrowserTestLatestResults`

Get a browser test's latest results — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.listSyntheticsBrowserTestLatestResults(input: {
  /** The public ID of the Synthetic browser test for which to search results. */
  public_id: string;
  /** Timestamp in milliseconds from which to start querying results. */
  from_ts?: number;
  /** Timestamp in milliseconds up to which to query results. */
  to_ts?: number;
  status?: SyntheticsTestResultStatus;
  runType?: SyntheticsTestResultRunType;
  /** Locations for which to query results. */
  probe_dc?: (string)[];
  /** Device IDs for which to query results. */
  device_id?: (string)[];
}): Promise<SyntheticsTestLatestResultsResponse>
```

<sub>`GET /api/v2/synthetics/tests/browser/{public_id}/results` · `ListSyntheticsBrowserTestLatestResults`</sub>

## `datadog.getSyntheticsBrowserTestResult`

Get a browser test result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsBrowserTestResult(input: {
  /** The public ID of the Synthetic browser test to which the target result belongs. */
  public_id: string;
  /** The ID of the result to get. */
  result_id: string;
  /** The event ID used to look up the result in the event store. */
  event_id?: string;
  /** Timestamp in seconds to look up the result. */
  timestamp?: number;
}): Promise<SyntheticsTestResultResponse>
```

<sub>`GET /api/v2/synthetics/tests/browser/{public_id}/results/{result_id}` · `GetSyntheticsBrowserTestResult`</sub>

## `datadog.deleteSyntheticsTests`

Bulk delete tests — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.deleteSyntheticsTests(input: {
  data: DeletedTestsRequestDelete;
}): Promise<DeletedTestsResponse>
```

<sub>`POST /api/v2/synthetics/tests/bulk-delete` · `DeleteSyntheticsTests`</sub>

## `datadog.getSyntheticsFastTestResult`

Get a fast test result — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsFastTestResult(input: {
  /** The UUID of the fast test to retrieve the result for. */
  id: string;
}): Promise<SyntheticsFastTestResult>
```

<sub>`GET /api/v2/synthetics/tests/fast/{id}` · `GetSyntheticsFastTestResult`</sub>

## `datadog.createSyntheticsNetworkTest`

Create a Network Path test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.createSyntheticsNetworkTest(input: {
  data: SyntheticsNetworkTestEdit;
}): Promise<SyntheticsNetworkTestResponse>
```

<sub>`POST /api/v2/synthetics/tests/network` · `CreateSyntheticsNetworkTest`</sub>

## `datadog.getSyntheticsNetworkTest`

Get a Network Path test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.getSyntheticsNetworkTest(input: {
  /** The public ID of the Network Path test to get details from. */
  public_id: string;
}): Promise<SyntheticsNetworkTestResponse>
```

<sub>`GET /api/v2/synthetics/tests/network/{public_id}` · `GetSyntheticsNetworkTest`</sub>

## `datadog.updateSyntheticsNetworkTest`

Edit a Network Path test — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.updateSyntheticsNetworkTest(input: {
  data: SyntheticsNetworkTestEdit;
  /** The public ID of the Network Path test to edit. */
  public_id: string;
}): Promise<SyntheticsNetworkTestResponse>
```

<sub>`PUT /api/v2/synthetics/tests/network/{public_id}` · `UpdateSyntheticsNetworkTest`</sub>

## `datadog.pollSyntheticsTestResults`

Poll for test results — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.pollSyntheticsTestResults(input: {
  /** A JSON-encoded array of result IDs to poll for. */
  result_ids: string;
}): Promise<SyntheticsPollTestResultsResponse>
```

<sub>`GET /api/v2/synthetics/tests/poll_results` · `PollSyntheticsTestResults`</sub>

## `datadog.patchGlobalVariable`

Patch a global variable — [Provider docs](https://www.datadoghq.com/support/)

```ts
datadog.patchGlobalVariable(input: {
  data: GlobalVariableJsonPatchRequestData;
  /** The ID of the global variable. */
  variable_id: string;
}): Promise<GlobalVariableResponse>
```

<sub>`PATCH /api/v2/synthetics/variables/{variable_id}/jsonpatch` · `PatchGlobalVariable`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

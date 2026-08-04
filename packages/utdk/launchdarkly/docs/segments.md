# Segments

18 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getContextInstanceSegmentsMembershipByEnv`

List segment memberships for context instance — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getContextInstanceSegmentsMembershipByEnv(input: {
  body: ContextInstance;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<ContextInstanceSegmentMemberships>
```

<sub>`POST /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate` · `getContextInstanceSegmentsMembershipByEnv`</sub>

## `launchdarkly.getSegments`

List segments — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSegments(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The number of segments to return. Defaults to 20. */
  limit?: number;
  /** Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. */
  offset?: number;
  /** Accepts sorting order and fields. Fields can be comma separated. Possible fields are 'creationDate', 'name', 'lastModified'. Example: `sort=name` sort by names ascending or `sort=-name,creationDate` sort by names descending and creationDate ascending. */
  sort?: string;
  /** Accepts filter by `excludedKeys`, `external`, `includedKeys`, `query`, `tags`, `unbounded`, `view`. To learn more about the filter syntax, read the  'Filtering segments' section above. */
  filter?: string;
}): Promise<UserSegments>
```

<sub>`GET /api/v2/segments/{projectKey}/{environmentKey}` · `getSegments`</sub>

## `launchdarkly.postSegment`

Create segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.postSegment(input: {
  /** A human-friendly name for the segment */
  name: string;
  /** A unique key used to reference the segment */
  key: string;
  /** A description of the segment's purpose */
  description?: string;
  /** Tags for the segment */
  tags?: (string)[];
  /** Whether to create a standard segment (<code>false</code>) or a big segment (<code>true</code>). Standard segments include rule-based and smaller list-based segments. Big segments include larger list-based segments and synced segments. Only use a big segment if you need to add more than 15,000 individual targets. */
  unbounded?: boolean;
  /** For big segments, the targeted context kind. */
  unboundedContextKind?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<UserSegment>
```

<sub>`POST /api/v2/segments/{projectKey}/{environmentKey}` · `postSegment`</sub>

## `launchdarkly.deleteSegment`

Delete segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteSegment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}` · `deleteSegment`</sub>

## `launchdarkly.getSegment`

Get segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSegment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<UserSegment>
```

<sub>`GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}` · `getSegment`</sub>

## `launchdarkly.patchSegment`

Patch segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchSegment(input: {
  /** A JSON patch representation of the change to make */
  patch: JsonPatch;
  /** Optional comment */
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
  /** If true, the patch will be validated but not persisted. Returns a preview of the segment after the patch is applied. */
  dryRun?: boolean;
}): Promise<UserSegment>
```

<sub>`PATCH /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}` · `patchSegment`</sub>

## `launchdarkly.updateBigSegmentContextTargets`

Update context targets on a big segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateBigSegmentContextTargets(input: {
  included?: SegmentUserList;
  excluded?: SegmentUserList;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts` · `updateBigSegmentContextTargets`</sub>

## `launchdarkly.getSegmentMembershipForContext`

Get big segment membership for context — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSegmentMembershipForContext(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
  /** The context key */
  contextKey: string;
}): Promise<BigSegmentTarget>
```

<sub>`GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}` · `getSegmentMembershipForContext`</sub>

## `launchdarkly.createBigSegmentExport`

Create big segment export — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createBigSegmentExport(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports` · `createBigSegmentExport`</sub>

## `launchdarkly.getBigSegmentExport`

Get big segment export — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getBigSegmentExport(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
  /** The export ID */
  exportID: string;
}): Promise<Export>
```

<sub>`GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}` · `getBigSegmentExport`</sub>

## `launchdarkly.createBigSegmentImport`

Create big segment import — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createBigSegmentImport(input: {
  /** CSV file containing keys */
  file?: string;
  /** Import mode. Use either `merge` or `replace` */
  mode?: string;
  /** Whether to wait for approvals before processing the import */
  waitOnApprovals?: boolean;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports` · `createBigSegmentImport`</sub>

## `launchdarkly.getBigSegmentImport`

Get big segment import — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getBigSegmentImport(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
  /** The import ID */
  importID: string;
}): Promise<Import>
```

<sub>`GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}` · `getBigSegmentImport`</sub>

## `launchdarkly.updateBigSegmentTargets`

Update user context targets on a big segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateBigSegmentTargets(input: {
  included?: SegmentUserList;
  excluded?: SegmentUserList;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<undefined>
```

<sub>`POST /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users` · `updateBigSegmentTargets`</sub>

## `launchdarkly.getSegmentMembershipForUser`

Get big segment membership for user — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getSegmentMembershipForUser(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
  /** The user key */
  userKey: string;
}): Promise<BigSegmentTarget>
```

<sub>`GET /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}` · `getSegmentMembershipForUser`</sub>

## `launchdarkly.getExpiringTargetsForSegment`

Get expiring targets for segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExpiringTargetsForSegment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<ExpiringTargetGetResponse>
```

<sub>`GET /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}` · `getExpiringTargetsForSegment`</sub>

## `launchdarkly.patchExpiringTargetsForSegment`

Update expiring targets for segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchExpiringTargetsForSegment(input: {
  /** Optional description of changes */
  comment?: string;
  /** Semantic patch instructions for the desired changes to the resource */
  instructions: (PatchSegmentExpiringTargetInstruction)[];
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<ExpiringTargetPatchResponse>
```

<sub>`PATCH /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}` · `patchExpiringTargetsForSegment`</sub>

## `launchdarkly.getExpiringUserTargetsForSegment`

Get expiring user targets for segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExpiringUserTargetsForSegment(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<ExpiringUserTargetGetResponse>
```

<sub>`GET /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}` · `getExpiringUserTargetsForSegment`</sub>

## `launchdarkly.patchExpiringUserTargetsForSegment`

Update expiring user targets for segment — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchExpiringUserTargetsForSegment(input: {
  /** Optional description of changes */
  comment?: string;
  /** Semantic patch instructions for the desired changes to the resource */
  instructions: (PatchSegmentInstruction)[];
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The segment key */
  segmentKey: string;
}): Promise<ExpiringUserTargetPatchResponse>
```

<sub>`PATCH /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}` · `patchExpiringUserTargetsForSegment`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

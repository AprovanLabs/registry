# Issue Bulk Operations

9 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.submitBulkDelete`

Bulk delete issues — [Provider docs](http://www.atlassian.com)

```ts
jira.submitBulkDelete(input: {
  /** List of issue IDs or keys which are to be bulk deleted. These IDs or keys can be from different projects and issue types. */
  selectedIssueIdsOrKeys: (string)[];
  /** A boolean value that indicates whether to send a bulk change notification when the issues are being deleted.  If `true`, dispatches a bulk notification email to users about the updates. */
  sendBulkNotification?: boolean | null;
}): Promise<SubmittedBulkOperation>
```

<sub>`POST /rest/api/3/bulk/issues/delete` · `submitBulkDelete`</sub>

## `jira.getBulkEditableFields`

Get bulk editable fields — [Provider docs](http://www.atlassian.com)

```ts
jira.getBulkEditableFields(input: {
  /** The IDs or keys of the issues to get editable fields from. */
  issueIdsOrKeys: string;
  /** (Optional)The text to search for in the editable fields. */
  searchText?: string;
  /** (Optional)The end cursor for use in pagination. */
  endingBefore?: string;
  /** (Optional)The start cursor for use in pagination. */
  startingAfter?: string;
}): Promise<BulkEditGetFields>
```

<sub>`GET /rest/api/3/bulk/issues/fields` · `getBulkEditableFields`</sub>

## `jira.submitBulkEdit`

Bulk edit issues — [Provider docs](http://www.atlassian.com)

```ts
jira.submitBulkEdit(input: {
  /** An object that defines the values to be updated in specified fields of an issue. The structure and content of this parameter vary depending on the type of field being edited. Although the order is not significant, ensure that field IDs align with those in selectedActions. */
  editedFieldsInput: JiraIssueFields;
  /** List of all the field IDs that are to be bulk edited. Each field ID in this list corresponds to a specific attribute of an issue that is set to be modified in the bulk edit operation. The relevant field ID can be obtained by calling the Bulk Edit Get Fields REST API (documentation available on this page itself). */
  selectedActions: (string)[];
  /** List of issue IDs or keys which are to be bulk edited. These IDs or keys can be from different projects and issue types. */
  selectedIssueIdsOrKeys: (string)[];
  /** A boolean value that indicates whether to send a bulk change notification when the issues are being edited.  If `true`, dispatches a bulk notification email to users about the updates. */
  sendBulkNotification?: boolean | null;
}): Promise<SubmittedBulkOperation>
```

<sub>`POST /rest/api/3/bulk/issues/fields` · `submitBulkEdit`</sub>

## `jira.submitBulkMove`

Bulk move issues — [Provider docs](http://www.atlassian.com)

```ts
jira.submitBulkMove(input: {
  /** A boolean value that indicates whether to send a bulk change notification when the issues are being moved.  If `true`, dispatches a bulk notification email to users about the updates. */
  sendBulkNotification?: boolean | null;
  /** An object representing the mapping of issues and data related to destination entities, like fields and statuses, that are required during a bulk move.  The key is a string that is created by concatenating the following three entities in order, separated by commas. The format is `<project ID or key>,<issueType ID>,<parent ID or key>`. It should be unique across mappings provided in the payload. If you provide multiple mappings for the same key, only one will be processed. However, the operation won't fail, so the error may be hard to track down.   *  ***Destination project*** (Required): ID or key of the project to which the issues are being moved.  *  ***Destination issueType*** (Required): ID of the issueType to which the issues are being moved.  *  ***Destination parent ID or key*** (Optional): ID or key of the issue which will become the parent of the issues being moved. Only required when the destination issueType is a subtask. */
  targetToSourcesMapping?: { [key: string]: TargetToSourcesMapping | undefined };
}): Promise<SubmittedBulkOperation>
```

<sub>`POST /rest/api/3/bulk/issues/move` · `submitBulkMove`</sub>

## `jira.getAvailableTransitions`

Get available transitions — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvailableTransitions(input: {
  /** Comma (,) separated Ids or keys of the issues to get transitions available for them. */
  issueIdsOrKeys: string;
  /** (Optional)The end cursor for use in pagination. */
  endingBefore?: string;
  /** (Optional)The start cursor for use in pagination. */
  startingAfter?: string;
}): Promise<BulkTransitionGetAvailableTransitions>
```

<sub>`GET /rest/api/3/bulk/issues/transition` · `getAvailableTransitions`</sub>

## `jira.submitBulkTransition`

Bulk transition issue statuses — [Provider docs](http://www.atlassian.com)

```ts
jira.submitBulkTransition(input: {
  /** List of objects and each object has two properties:   *  Issues that will be bulk transitioned.  *  TransitionId that corresponds to a specific transition of issues that share the same workflow. */
  bulkTransitionInputs: (BulkTransitionSubmitInput)[];
  /** A boolean value that indicates whether to send a bulk change notification when the issues are being transitioned.  If `true`, dispatches a bulk notification email to users about the updates. */
  sendBulkNotification?: boolean | null;
}): Promise<SubmittedBulkOperation>
```

<sub>`POST /rest/api/3/bulk/issues/transition` · `submitBulkTransition`</sub>

## `jira.submitBulkUnwatch`

Bulk unwatch issues — [Provider docs](http://www.atlassian.com)

```ts
jira.submitBulkUnwatch(input: {
  /** List of issue IDs or keys which are to be bulk watched or unwatched. These IDs or keys can be from different projects and issue types. */
  selectedIssueIdsOrKeys: (string)[];
}): Promise<SubmittedBulkOperation>
```

<sub>`POST /rest/api/3/bulk/issues/unwatch` · `submitBulkUnwatch`</sub>

## `jira.submitBulkWatch`

Bulk watch issues — [Provider docs](http://www.atlassian.com)

```ts
jira.submitBulkWatch(input: {
  /** List of issue IDs or keys which are to be bulk watched or unwatched. These IDs or keys can be from different projects and issue types. */
  selectedIssueIdsOrKeys: (string)[];
}): Promise<SubmittedBulkOperation>
```

<sub>`POST /rest/api/3/bulk/issues/watch` · `submitBulkWatch`</sub>

## `jira.getBulkOperationProgress`

Get bulk issue operation progress — [Provider docs](http://www.atlassian.com)

```ts
jira.getBulkOperationProgress(input: {
  /** The ID of the task. */
  taskId: string;
}): Promise<BulkOperationProgress>
```

<sub>`GET /rest/api/3/bulk/queue/{taskId}` · `getBulkOperationProgress`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

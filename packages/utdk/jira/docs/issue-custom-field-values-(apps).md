# Issue Custom Field Values (Apps)

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.updateCustomFieldValue`

Update custom field value — [Provider docs](http://www.atlassian.com)

```ts
jira.updateCustomFieldValue(input: {
  /** The list of custom field update details. */
  updates?: (CustomFieldValueUpdate)[];
  /** The ID or key of the custom field. For example, `customfield_10010`. */
  fieldIdOrKey: string;
  /** Whether to generate a changelog for this update. */
  generateChangelog?: boolean;
  /** Whether to generate app events for this update. Suppresses Forge, Connect, OAuth 2.0, and admin-configured webhooks (registered via the Jira admin UI). Note: Suppressing events means that "issue updated" events will not be emitted for your app or any other apps installed in Jira. This may cause other apps to retain stale data for the updated field, resulting in potentially confusing behaviour. We do not recommend using this flag in a Marketplace app as it may result in incompatibilities with other apps that depend on up-to-date issue data. */
  generateAppEvents?: boolean;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/app/field/{fieldIdOrKey}/value` · `updateCustomFieldValue`</sub>

## `jira.updateMultipleCustomFieldValues`

Update custom fields — [Provider docs](http://www.atlassian.com)

```ts
jira.updateMultipleCustomFieldValues(input: {
  updates?: (MultipleCustomFieldValuesUpdate)[];
  /** Whether to generate a changelog for this update. */
  generateChangelog?: boolean;
  /** Whether to generate app events for this update. Suppresses Forge, Connect, OAuth 2.0, and admin-configured webhooks (registered via the Jira admin UI). Note: Suppressing events means that "issue updated" events will not be emitted for your app or any other apps installed in Jira. This may cause other apps to retain stale data for the updated field, resulting in potentially confusing behaviour. We do not recommend using this flag in a Marketplace app as it may result in incompatibilities with other apps that depend on up-to-date issue data. */
  generateAppEvents?: boolean;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/app/field/value` · `updateMultipleCustomFieldValues`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Screen Tab Fields

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getAllScreenTabFields`

Get all screen tab fields — [Provider docs](http://www.atlassian.com)

```ts
jira.getAllScreenTabFields(input: {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The key of the project. */
  projectKey?: string;
}): Promise<(ScreenableField)[]>
```

<sub>`GET /rest/api/3/screens/{screenId}/tabs/{tabId}/fields` · `getAllScreenTabFields`</sub>

## `jira.addScreenTabField`

Add screen tab field — [Provider docs](http://www.atlassian.com)

```ts
jira.addScreenTabField(input: {
  /** The ID of the field to add. */
  fieldId: string;
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** Whether to skip associating the added field with projects linked to this screen. By default, adding a field to a screen tab also updates the field configuration of associated projects, making the field visible in issue experiences. When set to true, the field is added to the screen tab only and will not be visible in experiences such as issue view for associated projects unless the field association is updated separately. */
  skipFieldAssociation?: boolean;
}): Promise<ScreenableField>
```

<sub>`POST /rest/api/3/screens/{screenId}/tabs/{tabId}/fields` · `addScreenTabField`</sub>

## `jira.removeScreenTabField`

Remove screen tab field — [Provider docs](http://www.atlassian.com)

```ts
jira.removeScreenTabField(input: {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The ID of the field. */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}` · `removeScreenTabField`</sub>

## `jira.moveScreenTabField`

Move screen tab field — [Provider docs](http://www.atlassian.com)

```ts
jira.moveScreenTabField(input: {
  /** The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided. */
  after?: string;
  /** The named position to which the screen tab field should be moved. Required if `after` isn't provided. */
  position?: "Earlier" | "Later" | "First" | "Last";
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The ID of the field. */
  id: string;
}): Promise<unknown>
```

<sub>`POST /rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}/move` · `moveScreenTabField`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

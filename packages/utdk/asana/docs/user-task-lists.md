# User Task Lists

2 operations · `@utdk/asana`

```ts
import asana from "@utdk/asana";
```

## `asana.getUserTaskList`

Get a user task list — [Provider docs](https://asana.com/support)

```ts
asana.getUserTaskList(input: {
  /** Globally unique identifier for the user task list. */
  user_task_list_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("name" | "owner" | "workspace")[];
}): Promise<{ data?: UserTaskListResponse }>
```

<sub>`GET /user_task_lists/{user_task_list_gid}` · `getUserTaskList`</sub>

## `asana.getUserTaskListForUser`

Get a user's task list — [Provider docs](https://asana.com/support)

```ts
asana.getUserTaskListForUser(input: {
  /** A string identifying a user. This can either be the string "me", an email, or the gid of a user. */
  user_gid: string;
  /** Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging. */
  opt_pretty?: boolean;
  /** The workspace in which to get the user task list. */
  workspace: string;
  /** This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. */
  opt_fields?: ("name" | "owner" | "workspace")[];
}): Promise<{ data?: UserTaskListResponse }>
```

<sub>`GET /users/{user_gid}/user_task_list` · `getUserTaskListForUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

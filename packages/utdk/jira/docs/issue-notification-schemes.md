# Issue Notification Schemes

8 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getNotificationSchemes`

Get notification schemes paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getNotificationSchemes(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of notification schemes IDs to be filtered by */
  id?: (string)[];
  /** The list of projects IDs to be filtered by */
  projectId?: (string)[];
  /** When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false. */
  onlyDefault?: boolean;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about any custom fields assigned to receive an event  *  `group` Returns information about any groups assigned to receive an event  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information  *  `projectRole` Returns information about any project roles assigned to receive an event  *  `user` Returns information about any users assigned to receive an event */
  expand?: string;
}): Promise<PageBeanNotificationScheme>
```

<sub>`GET /rest/api/3/notificationscheme` · `getNotificationSchemes`</sub>

## `jira.createNotificationScheme`

Create notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.createNotificationScheme(input: {
  /** The description of the notification scheme. */
  description?: string;
  /** The name of the notification scheme. Must be unique (case-insensitive). */
  name: string;
  /** The list of notifications which should be added to the notification scheme. */
  notificationSchemeEvents?: (NotificationSchemeEventDetails)[];
  [key: string]: unknown;
}): Promise<NotificationSchemeId>
```

<sub>`POST /rest/api/3/notificationscheme` · `createNotificationScheme`</sub>

## `jira.getNotificationScheme`

Get notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.getNotificationScheme(input: {
  /** The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs. */
  id: number;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about any custom fields assigned to receive an event  *  `group` Returns information about any groups assigned to receive an event  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information  *  `projectRole` Returns information about any project roles assigned to receive an event  *  `user` Returns information about any users assigned to receive an event */
  expand?: string;
}): Promise<NotificationScheme>
```

<sub>`GET /rest/api/3/notificationscheme/{id}` · `getNotificationScheme`</sub>

## `jira.updateNotificationScheme`

Update notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.updateNotificationScheme(input: {
  /** The description of the notification scheme. */
  description?: string;
  /** The name of the notification scheme. Must be unique. */
  name?: string;
  /** The ID of the notification scheme. */
  id: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/notificationscheme/{id}` · `updateNotificationScheme`</sub>

## `jira.addNotifications`

Add notifications to notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.addNotifications(input: {
  /** The list of notifications which should be added to the notification scheme. */
  notificationSchemeEvents: (NotificationSchemeEventDetails)[];
  /** The ID of the notification scheme. */
  id: string;
  [key: string]: unknown;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/notificationscheme/{id}/notification` · `addNotifications`</sub>

## `jira.deleteNotificationScheme`

Delete notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteNotificationScheme(input: {
  /** The ID of the notification scheme. */
  notificationSchemeId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/notificationscheme/{notificationSchemeId}` · `deleteNotificationScheme`</sub>

## `jira.removeNotificationFromNotificationScheme`

Remove notification from notification scheme — [Provider docs](http://www.atlassian.com)

```ts
jira.removeNotificationFromNotificationScheme(input: {
  /** The ID of the notification scheme. */
  notificationSchemeId: string;
  /** The ID of the notification. */
  notificationId: string;
}): Promise<unknown>
```

<sub>`DELETE /rest/api/3/notificationscheme/{notificationSchemeId}/notification/{notificationId}` · `removeNotificationFromNotificationScheme`</sub>

## `jira.getNotificationSchemeToProjectMappings`

Get projects using notification schemes paginated — [Provider docs](http://www.atlassian.com)

```ts
jira.getNotificationSchemeToProjectMappings(input: {
  /** The index of the first item to return in a page of results (page offset). */
  startAt?: string;
  /** The maximum number of items to return per page. */
  maxResults?: string;
  /** The list of notifications scheme IDs to be filtered out */
  notificationSchemeId?: (string)[];
  /** The list of project IDs to be filtered out */
  projectId?: (string)[];
}): Promise<PageBeanNotificationSchemeAndProjectMappingJsonBean>
```

<sub>`GET /rest/api/3/notificationscheme/project` · `getNotificationSchemeToProjectMappings`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

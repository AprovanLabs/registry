# Time Tracking

5 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getSelectedTimeTrackingImplementation`

Get selected time tracking provider — [Provider docs](http://www.atlassian.com)

```ts
jira.getSelectedTimeTrackingImplementation(): Promise<TimeTrackingProvider>
```

<sub>`GET /rest/api/3/configuration/timetracking` · `getSelectedTimeTrackingImplementation`</sub>

## `jira.selectTimeTrackingImplementation`

Select time tracking provider — [Provider docs](http://www.atlassian.com)

```ts
jira.selectTimeTrackingImplementation(input: {
  /** The key for the time tracking provider. For example, *JIRA*. */
  key: string;
  /** The name of the time tracking provider. For example, *JIRA provided time tracking*. */
  name?: string;
  /** The URL of the configuration page for the time tracking provider app. For example, *\/example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app. */
  url?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/configuration/timetracking` · `selectTimeTrackingImplementation`</sub>

## `jira.getAvailableTimeTrackingImplementations`

Get all time tracking providers — [Provider docs](http://www.atlassian.com)

```ts
jira.getAvailableTimeTrackingImplementations(): Promise<(TimeTrackingProvider)[]>
```

<sub>`GET /rest/api/3/configuration/timetracking/list` · `getAvailableTimeTrackingImplementations`</sub>

## `jira.getSharedTimeTrackingConfiguration`

Get time tracking settings — [Provider docs](http://www.atlassian.com)

```ts
jira.getSharedTimeTrackingConfiguration(): Promise<TimeTrackingConfiguration>
```

<sub>`GET /rest/api/3/configuration/timetracking/options` · `getSharedTimeTrackingConfiguration`</sub>

## `jira.setSharedTimeTrackingConfiguration`

Set time tracking settings — [Provider docs](http://www.atlassian.com)

```ts
jira.setSharedTimeTrackingConfiguration(input: {
  /** The default unit of time applied to logged time. */
  defaultUnit: "minute" | "hour" | "day" | "week";
  /** The format that will appear on an issue's *Time Spent* field. */
  timeFormat: "pretty" | "days" | "hours";
  /** The number of days in a working week. */
  workingDaysPerWeek: number;
  /** The number of hours in a working day. */
  workingHoursPerDay: number;
}): Promise<TimeTrackingConfiguration>
```

<sub>`PUT /rest/api/3/configuration/timetracking/options` · `setSharedTimeTrackingConfiguration`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

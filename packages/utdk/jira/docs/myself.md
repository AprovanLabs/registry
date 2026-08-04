# Myself

6 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.removePreference`

Delete preference — [Provider docs](http://www.atlassian.com)

```ts
jira.removePreference(input: {
  /** The key of the preference. */
  key: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/mypreferences` · `removePreference`</sub>

## `jira.getPreference`

Get preference — [Provider docs](http://www.atlassian.com)

```ts
jira.getPreference(input: {
  /** The key of the preference. */
  key: string;
}): Promise<string>
```

<sub>`GET /rest/api/3/mypreferences` · `getPreference`</sub>

## `jira.setPreference`

Set preference — [Provider docs](http://www.atlassian.com)

```ts
jira.setPreference(input: {
  body: string;
  /** The key of the preference. The maximum length is 255 characters. */
  key: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/mypreferences` · `setPreference`</sub>

## `jira.getLocale`

Get locale — [Provider docs](http://www.atlassian.com)

```ts
jira.getLocale(): Promise<Locale>
```

<sub>`GET /rest/api/3/mypreferences/locale` · `getLocale`</sub>

## `jira.setLocale`

Set locale — [Provider docs](http://www.atlassian.com)

```ts
jira.setLocale(input: {
  /** The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en\_US represents a locale of English (United States). Required on create. */
  locale?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/mypreferences/locale` · `setLocale`</sub>

## `jira.getCurrentUser`

Get current user — [Provider docs](http://www.atlassian.com)

```ts
jira.getCurrentUser(input: {
  /** Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` Returns all groups, including nested groups, the user belongs to.  *  `applicationRoles` Returns the application roles the user is assigned to. */
  expand?: string;
}): Promise<User>
```

<sub>`GET /rest/api/3/myself` · `getCurrentUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

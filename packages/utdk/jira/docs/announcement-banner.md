# Announcement Banner

2 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getBanner`

Get announcement banner configuration — [Provider docs](http://www.atlassian.com)

```ts
jira.getBanner(): Promise<AnnouncementBannerConfiguration>
```

<sub>`GET /rest/api/3/announcementBanner` · `getBanner`</sub>

## `jira.setBanner`

Update announcement banner configuration — [Provider docs](http://www.atlassian.com)

```ts
jira.setBanner(input: {
  /** Flag indicating if the announcement banner can be dismissed by the user. */
  isDismissible?: boolean;
  /** Flag indicating if the announcement banner is enabled or not. */
  isEnabled?: boolean;
  /** The text on the announcement banner. */
  message?: string;
  /** Visibility of the announcement banner. Can be public or private. */
  visibility?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/announcementBanner` · `setBanner`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

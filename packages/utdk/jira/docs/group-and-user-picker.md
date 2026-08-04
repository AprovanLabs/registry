# Group And User Picker

1 operation · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.findUsersAndGroups`

Find users and groups — [Provider docs](http://www.atlassian.com)

```ts
jira.findUsersAndGroups(input: {
  /** The search string. */
  query: string;
  /** The maximum number of items to return in each list. */
  maxResults?: number;
  /** Whether the user avatar should be returned. If an invalid value is provided, the default value is used. */
  showAvatar?: boolean;
  /** The custom field ID of the field this request is for. */
  fieldId?: string;
  /** The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present. */
  projectId?: (string)[];
  /** The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present. */
  issueTypeId?: (string)[];
  /** The size of the avatar to return. If an invalid value is provided, the default value is used. */
  avatarSize?: "xsmall" | "xsmall@2x" | "xsmall@3x" | "small" | "small@2x" | "small@3x" | "medium" | "medium@2x" | "medium@3x" | "large" | "large@2x" | "large@3x" | "xlarge" | "xlarge@2x" | "xlarge@3x" | "xxlarge" | "xxlarge@2x" | "xxlarge@3x" | "xxxlarge" | "xxxlarge@2x" | "xxxlarge@3x";
  /** Whether the search for groups should be case insensitive. */
  caseInsensitive?: boolean;
  /** Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used. */
  excludeConnectAddons?: boolean;
  /** Whether AI Agents should be included in the search results. If an invalid value is provided, the default value is used. */
  includeAiAgents?: boolean;
}): Promise<FoundUsersAndGroups>
```

<sub>`GET /rest/api/3/groupuserpicker` · `findUsersAndGroups`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

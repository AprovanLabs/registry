# User Properties

4 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.getUserPropertyKeys`

Get user property keys — [Provider docs](http://www.atlassian.com)

```ts
jira.getUserPropertyKeys(input: {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
}): Promise<PropertyKeys>
```

<sub>`GET /rest/api/3/user/properties` · `getUserPropertyKeys`</sub>

## `jira.deleteUserProperty`

Delete user property — [Provider docs](http://www.atlassian.com)

```ts
jira.deleteUserProperty(input: {
  /** The key of the user's property. */
  propertyKey: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
}): Promise<undefined>
```

<sub>`DELETE /rest/api/3/user/properties/{propertyKey}` · `deleteUserProperty`</sub>

## `jira.getUserProperty`

Get user property — [Provider docs](http://www.atlassian.com)

```ts
jira.getUserProperty(input: {
  /** The key of the user's property. */
  propertyKey: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
}): Promise<EntityProperty>
```

<sub>`GET /rest/api/3/user/properties/{propertyKey}` · `getUserProperty`</sub>

## `jira.setUserProperty`

Set user property — [Provider docs](http://www.atlassian.com)

```ts
jira.setUserProperty(input: {
  body: unknown;
  /** The key of the user's property. The maximum length is 255 characters. */
  propertyKey: string;
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  userKey?: string;
  /** This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  username?: string;
}): Promise<unknown>
```

<sub>`PUT /rest/api/3/user/properties/{propertyKey}` · `setUserProperty`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# User Settings

5 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getUserFlagSettings`

List flag settings for user — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getUserFlagSettings(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The user key */
  userKey: string;
}): Promise<UserFlagSettings>
```

<sub>`GET /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags` · `getUserFlagSettings`</sub>

## `launchdarkly.getUserFlagSetting`

Get flag setting for user — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getUserFlagSetting(input: {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The user key */
  userKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<UserFlagSetting>
```

<sub>`GET /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}` · `getUserFlagSetting`</sub>

## `launchdarkly.putFlagSetting`

Update flag settings for user — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.putFlagSetting(input: {
  /** The variation value to set for the context. Must match the flag's variation type. */
  setting?: unknown;
  /** Optional comment describing the change */
  comment?: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The user key */
  userKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<undefined>
```

<sub>`PUT /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}` · `putFlagSetting`</sub>

## `launchdarkly.getExpiringFlagsForUser`

Get expiring dates on flags for user — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getExpiringFlagsForUser(input: {
  /** The project key */
  projectKey: string;
  /** The user key */
  userKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<ExpiringUserTargetGetResponse>
```

<sub>`GET /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}` · `getExpiringFlagsForUser`</sub>

## `launchdarkly.patchExpiringFlagsForUser`

Update expiring user target for flags — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.patchExpiringFlagsForUser(input: {
  /** Optional comment describing the change */
  comment?: string;
  /** The instructions to perform when updating */
  instructions: (InstructionUserRequest)[];
  /** The project key */
  projectKey: string;
  /** The user key */
  userKey: string;
  /** The environment key */
  environmentKey: string;
}): Promise<ExpiringUserTargetPatchResponse>
```

<sub>`PATCH /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}` · `patchExpiringFlagsForUser`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

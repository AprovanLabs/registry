# Flag Links (Beta)

4 operations · `@utdk/launchdarkly`

```ts
import launchdarkly from "@utdk/launchdarkly";
```

## `launchdarkly.getFlagLinks`

List flag links — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.getFlagLinks(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<FlagLinkCollectionRep>
```

<sub>`GET /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}` · `getFlagLinks`</sub>

## `launchdarkly.createFlagLink`

Create flag link — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.createFlagLink(input: {
  /** The flag link key */
  key?: string;
  /** The integration key for an integration whose <code>manifest.json</code> includes the <code>flagLink</code> capability, if this is a flag link for an existing integration. Do not include for URL flag links. */
  integrationKey?: string;
  /** The time, in Unix milliseconds, to mark this flag link as associated with the external URL. If omitted, defaults to the creation time of this flag link. */
  timestamp?: UnixMillis;
  /** The URL for the external resource you are linking the flag to */
  deepLink?: string;
  /** The title of the flag link */
  title?: string;
  /** The description of the flag link */
  description?: string;
  /** The metadata required by this integration in order to create a flag link, if this is a flag link for an existing integration. Defined in the integration's <code>manifest.json</code> file under <code>flagLink</code>. */
  metadata?: { [key: string]: string | undefined };
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
}): Promise<FlagLinkRep>
```

<sub>`POST /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}` · `createFlagLink`</sub>

## `launchdarkly.deleteFlagLink`

Delete flag link — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.deleteFlagLink(input: {
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The flag link ID or Key */
  id: string;
}): Promise<undefined>
```

<sub>`DELETE /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}` · `deleteFlagLink`</sub>

## `launchdarkly.updateFlagLink`

Update flag link — [Provider docs](https://support.launchdarkly.com)

```ts
launchdarkly.updateFlagLink(input: {
  body: JsonPatch;
  /** The project key */
  projectKey: string;
  /** The feature flag key */
  featureFlagKey: string;
  /** The flag link ID */
  id: string;
}): Promise<FlagLinkRep>
```

<sub>`PATCH /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}` · `updateFlagLink`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Integration

12 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationIssueExternalIssues`

Retrieve custom integration issue links for the given Sentry issue

```ts
sentry.listOrganizationIssueExternalIssues(): Promise<({ id: string; issueId: string; serviceType: string; displayName: string; webUrl: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/external-issues/` · `listOrganizationIssueExternalIssues`</sub>

## `sentry.unlinkAnExternalIssueFromAnIssue`

Remove the link between a Sentry issue and an external issue. If no other Sentry issues reference the external issue, the link record is deleted entirely. This does not delete the issue in the external provider.

```ts
sentry.unlinkAnExternalIssueFromAnIssue(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/integrations/{integration_id}/` · `Unlink an External Issue from an Issue`</sub>

## `sentry.retrieveAnIntegrationSIssueConfigForAnIssue`

Retrieve the form fields needed to either link an existing external issue (such as a Jira ticket or GitHub issue) to a Sentry issue, or create a new one. The returned `linkIssueConfig`/`createIssueConfig` describes the fields to submit back to this endpoint via `PUT`/`POST` respectively.

```ts
sentry.retrieveAnIntegrationSIssueConfigForAnIssue(): Promise<{ id: string; name: string; icon: string | null; domainName: string | null; accountType: string | null; scopes: (string)[] | null; outOfDate: boolean | null; status: string; provider: { key: string; slug: string; name: string; canAdd: boolean; canDisable: boolean; features: (string)[]; aspects: { [key: string]: unknown | undefined } }; linkIssueConfig?: ({ [key: string]: unknown | undefined })[];...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/integrations/{integration_id}/` · `Retrieve an Integration's Issue Config for an Issue`</sub>

## `sentry.createAnExternalIssueAndLinkItToAnIssue`

Create a new issue in the external provider (such as a Jira ticket or GitHub issue) and link it to the given Sentry issue. The accepted fields are integration-specific; fetch them from the `createIssueConfig` returned by the `GET` endpoint with `?action=create`.

```ts
sentry.createAnExternalIssueAndLinkItToAnIssue(): Promise<{ id: number; key: string; url: string; integrationId: number; displayName: string }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/integrations/{integration_id}/` · `Create an External Issue and Link It to an Issue`</sub>

## `sentry.linkAnExistingExternalIssueToAnIssue`

Link an issue that already exists in the external provider (such as a Jira ticket or GitHub issue) to the given Sentry issue. Additional accepted fields are integration-specific; fetch them from the `linkIssueConfig` returned by the `GET` endpoint with `?action=link`.

```ts
sentry.linkAnExistingExternalIssueToAnIssue(): Promise<{ id: number; key: string; url: string; integrationId: number; displayName: string }>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/issues/{issue_id}/integrations/{integration_id}/` · `Link an Existing External Issue to an Issue`</sub>

## `sentry.listAnOrganizationSIntegrationPlatformInstallations`

Return a list of integration platform installations for a given organization.

```ts
sentry.listAnOrganizationSIntegrationPlatformInstallations(): Promise<({ app: { uuid: string; slug: string; sentryAppId: number }; organization: { slug: string }; uuid: string; status: string })[]>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/sentry-app-installations/` · `List an Organization's Integration Platform Installations`</sub>

## `sentry.listOrganizationSentryApps`

Retrieve the custom integrations created by an organization

```ts
sentry.listOrganizationSentryApps(): Promise<({ allowedOrigins: (string)[]; avatars: ({ avatarType: string; avatarUuid: string; avatarUrl: string; color: boolean; photoType: string })[]; events: (string)[]; webhookEvents: (string)[]; featureData: (string)[]; isAlertable: boolean; metadata: string; name: string; schema: string; scopes: (string)[]; slug: string; status: string; uuid: string; verifyInstall: boolean; webhookHeaders: (string)[];...>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/sentry-apps/` · `listOrganizationSentryApps`</sub>

## `sentry.createOrUpdateAnExternalIssue`

Create or update an external issue from an integration platform integration.

```ts
sentry.createOrUpdateAnExternalIssue(): Promise<{ id: string; issueId: string; serviceType: string; displayName: string; webUrl: string }>
```

<sub>`POST /api/0/sentry-app-installations/{uuid}/external-issues/` · `Create or update an External Issue`</sub>

## `sentry.deleteAnExternalIssue`

Delete an external issue.

```ts
sentry.deleteAnExternalIssue(): Promise<unknown>
```

<sub>`DELETE /api/0/sentry-app-installations/{uuid}/external-issues/{external_issue_id}/` · `Delete an External Issue`</sub>

## `sentry.deleteSentryApp`

Delete a custom integration.

```ts
sentry.deleteSentryApp(): Promise<unknown>
```

<sub>`DELETE /api/0/sentry-apps/{sentry_app_id_or_slug}/` · `deleteSentryApp`</sub>

## `sentry.getSentryApp`

Retrieve a custom integration by ID or slug.

```ts
sentry.getSentryApp(): Promise<{ allowedOrigins: (string)[]; avatars: ({ avatarType: string; avatarUuid: string; avatarUrl: string; color: boolean; photoType: string })[]; events: (string)[]; webhookEvents: (string)[]; featureData: (string)[]; isAlertable: boolean; metadata: string; name: string; schema: string; scopes: (string)[]; slug: string; status: string; uuid: string; verifyInstall: boolean; webhookHeaders: (string)[]; ...>
```

<sub>`GET /api/0/sentry-apps/{sentry_app_id_or_slug}/` · `getSentryApp`</sub>

## `sentry.updateSentryApp`

Update an existing custom integration.

```ts
sentry.updateSentryApp(): Promise<{ allowedOrigins: (string)[]; avatars: ({ avatarType: string; avatarUuid: string; avatarUrl: string; color: boolean; photoType: string })[]; events: (string)[]; webhookEvents: (string)[]; featureData: (string)[]; isAlertable: boolean; metadata: string; name: string; schema: string; scopes: (string)[]; slug: string; status: string; uuid: string; verifyInstall: boolean; webhookHeaders: (string)[]; ...>
```

<sub>`PUT /api/0/sentry-apps/{sentry_app_id_or_slug}/` · `updateSentryApp`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Spike Protection

5 operations · `@utdk/sentry`

```ts
import sentry from "@utdk/sentry";
```

## `sentry.listOrganizationNotificationsActions`

List Spike Protection Notifications

```ts
sentry.listOrganizationNotificationsActions(): Promise<{ id: number; organizationId: number; integrationId: number | null; sentryAppId: number | null; projects: (number)[]; serviceType: string | null; triggerType: string; targetType: string | null; targetIdentifier: string | null; targetDisplay: string | null }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/notifications/actions/` · `listOrganizationNotificationsActions`</sub>

## `sentry.createOrganizationNotificationsAction`

Create a Spike Protection Notification Action

```ts
sentry.createOrganizationNotificationsAction(): Promise<{ id: number; organizationId: number; integrationId: number | null; sentryAppId: number | null; projects: (number)[]; serviceType: string | null; triggerType: string; targetType: string | null; targetIdentifier: string | null; targetDisplay: string | null }>
```

<sub>`POST /api/0/organizations/{organization_id_or_slug}/notifications/actions/` · `createOrganizationNotificationsAction`</sub>

## `sentry.deleteOrganizationNotificationsAction`

Delete a Spike Protection Notification Action

```ts
sentry.deleteOrganizationNotificationsAction(): Promise<unknown>
```

<sub>`DELETE /api/0/organizations/{organization_id_or_slug}/notifications/actions/{action_id}/` · `deleteOrganizationNotificationsAction`</sub>

## `sentry.getOrganizationNotificationsAction`

Retrieve a Spike Protection Notification Action

```ts
sentry.getOrganizationNotificationsAction(): Promise<{ id: number; organizationId: number; integrationId: number | null; sentryAppId: number | null; projects: (number)[]; serviceType: string | null; triggerType: string; targetType: string | null; targetIdentifier: string | null; targetDisplay: string | null }>
```

<sub>`GET /api/0/organizations/{organization_id_or_slug}/notifications/actions/{action_id}/` · `getOrganizationNotificationsAction`</sub>

## `sentry.updateOrganizationNotificationsAction`

Update a Spike Protection Notification Action

```ts
sentry.updateOrganizationNotificationsAction(): Promise<unknown>
```

<sub>`PUT /api/0/organizations/{organization_id_or_slug}/notifications/actions/{action_id}/` · `updateOrganizationNotificationsAction`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

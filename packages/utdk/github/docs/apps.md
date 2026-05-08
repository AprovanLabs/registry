# Apps

Generated from OpenAPI operation grouping.

- `GET /app`: Get the authenticated app
- `POST /app-manifests/{code}/conversions`: Create a GitHub App from a manifest
- `GET /app/hook/config`: Get a webhook configuration for an app
- `PATCH /app/hook/config`: Update a webhook configuration for an app
- `GET /app/hook/deliveries`: List deliveries for an app webhook
- `GET /app/hook/deliveries/{delivery_id}`: Get a delivery for an app webhook
- `POST /app/hook/deliveries/{delivery_id}/attempts`: Redeliver a delivery for an app webhook
- `GET /app/installation-requests`: List installation requests for the authenticated app
- `GET /app/installations`: List installations for the authenticated app
- `DELETE /app/installations/{installation_id}`: Delete an installation for the authenticated app
- `GET /app/installations/{installation_id}`: Get an installation for the authenticated app
- `POST /app/installations/{installation_id}/access_tokens`: Create an installation access token for an app
- `DELETE /app/installations/{installation_id}/suspended`: Unsuspend an app installation
- `PUT /app/installations/{installation_id}/suspended`: Suspend an app installation
- `DELETE /applications/{client_id}/grant`: Delete an app authorization
- `DELETE /applications/{client_id}/token`: Delete an app token
- `PATCH /applications/{client_id}/token`: Reset a token
- `POST /applications/{client_id}/token`: Check a token
- `POST /applications/{client_id}/token/scoped`: Create a scoped access token
- `GET /apps/{app_slug}`: Get an app
- `GET /installation/repositories`: List repositories accessible to the app installation
- `DELETE /installation/token`: Revoke an installation access token
- `GET /marketplace_listing/accounts/{account_id}`: Get a subscription plan for an account
- `GET /marketplace_listing/plans`: List plans
- `GET /marketplace_listing/plans/{plan_id}/accounts`: List accounts for a plan
- `GET /marketplace_listing/stubbed/accounts/{account_id}`: Get a subscription plan for an account (stubbed)
- `GET /marketplace_listing/stubbed/plans`: List plans (stubbed)
- `GET /marketplace_listing/stubbed/plans/{plan_id}/accounts`: List accounts for a plan (stubbed)
- `GET /orgs/{org}/installation`: Get an organization installation for the authenticated app
- `GET /repos/{owner}/{repo}/installation`: Get a repository installation for the authenticated app
- `GET /user/installations`: List app installations accessible to the user access token
- `GET /user/installations/{installation_id}/repositories`: List repositories accessible to the user access token
- `DELETE /user/installations/{installation_id}/repositories/{repository_id}`: Remove a repository from an app installation
- `PUT /user/installations/{installation_id}/repositories/{repository_id}`: Add a repository to an app installation
- `GET /user/marketplace_purchases`: List subscriptions for the authenticated user
- `GET /user/marketplace_purchases/stubbed`: List subscriptions for the authenticated user (stubbed)
- `GET /users/{username}/installation`: Get a user installation for the authenticated app

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

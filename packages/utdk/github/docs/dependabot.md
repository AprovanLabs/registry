# Dependabot

Generated from OpenAPI operation grouping.

- `GET /enterprises/{enterprise}/dependabot/alerts`: List Dependabot alerts for an enterprise
- `GET /organizations/{org}/dependabot/repository-access`: Lists the repositories Dependabot can access in an organization
- `PATCH /organizations/{org}/dependabot/repository-access`: Updates Dependabot's repository access list for an organization
- `PUT /organizations/{org}/dependabot/repository-access/default-level`: Set the default repository access level for Dependabot
- `GET /orgs/{org}/dependabot/alerts`: List Dependabot alerts for an organization
- `GET /orgs/{org}/dependabot/secrets`: List organization secrets
- `DELETE /orgs/{org}/dependabot/secrets/{secret_name}`: Delete an organization secret
- `GET /orgs/{org}/dependabot/secrets/{secret_name}`: Get an organization secret
- `PUT /orgs/{org}/dependabot/secrets/{secret_name}`: Create or update an organization secret
- `GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`: List selected repositories for an organization secret
- `PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`: Set selected repositories for an organization secret
- `DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`: Remove selected repository from an organization secret
- `PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`: Add selected repository to an organization secret
- `GET /orgs/{org}/dependabot/secrets/public-key`: Get an organization public key
- `GET /repos/{owner}/{repo}/dependabot/alerts`: List Dependabot alerts for a repository
- `GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`: Get a Dependabot alert
- `PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`: Update a Dependabot alert
- `GET /repos/{owner}/{repo}/dependabot/secrets`: List repository secrets
- `DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`: Delete a repository secret
- `GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`: Get a repository secret
- `PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`: Create or update a repository secret
- `GET /repos/{owner}/{repo}/dependabot/secrets/public-key`: Get a repository public key

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Codespaces

Generated from OpenAPI operation grouping.

- `GET /orgs/{org}/codespaces`: List codespaces for the organization
- `PUT /orgs/{org}/codespaces/access`: Manage access control for organization codespaces
- `DELETE /orgs/{org}/codespaces/access/selected_users`: Remove users from Codespaces access for an organization
- `POST /orgs/{org}/codespaces/access/selected_users`: Add users to Codespaces access for an organization
- `GET /orgs/{org}/codespaces/secrets`: List organization secrets
- `DELETE /orgs/{org}/codespaces/secrets/{secret_name}`: Delete an organization secret
- `GET /orgs/{org}/codespaces/secrets/{secret_name}`: Get an organization secret
- `PUT /orgs/{org}/codespaces/secrets/{secret_name}`: Create or update an organization secret
- `GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`: List selected repositories for an organization secret
- `PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`: Set selected repositories for an organization secret
- `DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`: Remove selected repository from an organization secret
- `PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`: Add selected repository to an organization secret
- `GET /orgs/{org}/codespaces/secrets/public-key`: Get an organization public key
- `GET /orgs/{org}/members/{username}/codespaces`: List codespaces for a user in organization
- `DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}`: Delete a codespace from the organization
- `POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`: Stop a codespace for an organization user
- `GET /repos/{owner}/{repo}/codespaces`: List codespaces in a repository for the authenticated user
- `POST /repos/{owner}/{repo}/codespaces`: Create a codespace in a repository
- `GET /repos/{owner}/{repo}/codespaces/devcontainers`: List devcontainer configurations in a repository for the authenticated user
- `GET /repos/{owner}/{repo}/codespaces/machines`: List available machine types for a repository
- `GET /repos/{owner}/{repo}/codespaces/new`: Get default attributes for a codespace
- `GET /repos/{owner}/{repo}/codespaces/permissions_check`: Check if permissions defined by a devcontainer have been accepted by the authenticated user
- `GET /repos/{owner}/{repo}/codespaces/secrets`: List repository secrets
- `DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`: Delete a repository secret
- `GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`: Get a repository secret
- `PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`: Create or update a repository secret
- `GET /repos/{owner}/{repo}/codespaces/secrets/public-key`: Get a repository public key
- `POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`: Create a codespace from a pull request
- `GET /user/codespaces`: List codespaces for the authenticated user
- `POST /user/codespaces`: Create a codespace for the authenticated user
- `DELETE /user/codespaces/{codespace_name}`: Delete a codespace for the authenticated user
- `GET /user/codespaces/{codespace_name}`: Get a codespace for the authenticated user
- `PATCH /user/codespaces/{codespace_name}`: Update a codespace for the authenticated user
- `POST /user/codespaces/{codespace_name}/exports`: Export a codespace for the authenticated user
- `GET /user/codespaces/{codespace_name}/exports/{export_id}`: Get details about a codespace export
- `GET /user/codespaces/{codespace_name}/machines`: List machine types for a codespace
- `POST /user/codespaces/{codespace_name}/publish`: Create a repository from an unpublished codespace
- `POST /user/codespaces/{codespace_name}/start`: Start a codespace for the authenticated user
- `POST /user/codespaces/{codespace_name}/stop`: Stop a codespace for the authenticated user
- `GET /user/codespaces/secrets`: List secrets for the authenticated user
- `DELETE /user/codespaces/secrets/{secret_name}`: Delete a secret for the authenticated user
- `GET /user/codespaces/secrets/{secret_name}`: Get a secret for the authenticated user
- `PUT /user/codespaces/secrets/{secret_name}`: Create or update a secret for the authenticated user
- `GET /user/codespaces/secrets/{secret_name}/repositories`: List selected repositories for a user secret
- `PUT /user/codespaces/secrets/{secret_name}/repositories`: Set selected repositories for a user secret
- `DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`: Remove a selected repository from a user secret
- `PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`: Add a selected repository to a user secret
- `GET /user/codespaces/secrets/public-key`: Get public key for the authenticated user

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

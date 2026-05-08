# Migrations

Generated from OpenAPI operation grouping.

- `GET /orgs/{org}/migrations`: List organization migrations
- `POST /orgs/{org}/migrations`: Start an organization migration
- `GET /orgs/{org}/migrations/{migration_id}`: Get an organization migration status
- `DELETE /orgs/{org}/migrations/{migration_id}/archive`: Delete an organization migration archive
- `GET /orgs/{org}/migrations/{migration_id}/archive`: Download an organization migration archive
- `DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock`: Unlock an organization repository
- `GET /orgs/{org}/migrations/{migration_id}/repositories`: List repositories in an organization migration
- `DELETE /repos/{owner}/{repo}/import`: Cancel an import
- `GET /repos/{owner}/{repo}/import`: Get an import status
- `PATCH /repos/{owner}/{repo}/import`: Update an import
- `PUT /repos/{owner}/{repo}/import`: Start an import
- `GET /repos/{owner}/{repo}/import/authors`: Get commit authors
- `PATCH /repos/{owner}/{repo}/import/authors/{author_id}`: Map a commit author
- `GET /repos/{owner}/{repo}/import/large_files`: Get large files
- `PATCH /repos/{owner}/{repo}/import/lfs`: Update Git LFS preference
- `GET /user/migrations`: List user migrations
- `POST /user/migrations`: Start a user migration
- `GET /user/migrations/{migration_id}`: Get a user migration status
- `DELETE /user/migrations/{migration_id}/archive`: Delete a user migration archive
- `GET /user/migrations/{migration_id}/archive`: Download a user migration archive
- `DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock`: Unlock a user repository
- `GET /user/migrations/{migration_id}/repositories`: List repositories for a user migration

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

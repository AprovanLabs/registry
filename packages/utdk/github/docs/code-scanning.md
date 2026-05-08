# Code Scanning

Generated from OpenAPI operation grouping.

- `GET /orgs/{org}/code-scanning/alerts`: List code scanning alerts for an organization
- `GET /repos/{owner}/{repo}/code-scanning/alerts`: List code scanning alerts for a repository
- `GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`: Get a code scanning alert
- `PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`: Update a code scanning alert
- `GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`: Get the status of an autofix for a code scanning alert
- `POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`: Create an autofix for a code scanning alert
- `POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits`: Commit an autofix for a code scanning alert
- `GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`: List instances of a code scanning alert
- `GET /repos/{owner}/{repo}/code-scanning/analyses`: List code scanning analyses for a repository
- `DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`: Delete a code scanning analysis from a repository
- `GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`: Get a code scanning analysis for a repository
- `GET /repos/{owner}/{repo}/code-scanning/codeql/databases`: List CodeQL databases for a repository
- `DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`: Delete a CodeQL database
- `GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`: Get a CodeQL database for a repository
- `POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses`: Create a CodeQL variant analysis
- `GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}`: Get the summary of a CodeQL variant analysis
- `GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}`: Get the analysis status of a repository in a CodeQL variant analysis
- `GET /repos/{owner}/{repo}/code-scanning/default-setup`: Get a code scanning default setup configuration
- `PATCH /repos/{owner}/{repo}/code-scanning/default-setup`: Update a code scanning default setup configuration
- `POST /repos/{owner}/{repo}/code-scanning/sarifs`: Upload an analysis as SARIF data
- `GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`: Get information about a SARIF upload

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

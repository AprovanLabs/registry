# Repos

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.repos.listForOrg`

- **HTTP**: `GET /orgs/{org}/repos`
- **What it does**: List organization repositories
- **OpenAPI operationId**: `repos/list-for-org`
- **Path params**: None
- **Query params**: `type`, `sort`, `direction`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; type?: "all" | "public" | "private" | "forks" | "sources" | "member"; sort?: "created" | "updated" | "pushed" | "full_name"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListForOrgInput = Parameters<typeof github.repos.listForOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListForOrgOutput = Awaited<ReturnType<typeof github.repos.listForOrg>>;

const input: ReposListForOrgInput = {} as { org: string; type?: "all" | "public" | "private" | "forks" | "sources" | "member"; sort?: "created" | "updated" | "pushed" | "full_name"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: ReposListForOrgOutput = await github.repos.listForOrg(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.repos.createInOrg`

- **HTTP**: `POST /orgs/{org}/repos`
- **What it does**: Create an organization repository
- **OpenAPI operationId**: `repos/create-in-org`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string; homepage?: string; private?: boolean; visibility?: "public" | "private"; has_issues?: boolean; has_projects?: boolean; has_wiki?: boolean; has_downloads?: boolean; is_template?: boolean; team_id?: number; auto_init?: boolean; gitignore_template?: string; license_template?: string; allow_squash_merge?: boolean; allow_merge_commit?: boolean; allow_rebase_merge?: boolean; allow_auto_merge?: boolean; delete_branch_on_merge?: boolean; use_squash_pr_title_as_default?: boolean; squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE"; squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK"; merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE"; merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK"; custom_properties?: { [key: string]: unknown }; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type ReposCreateInOrgInput = Parameters<typeof github.repos.createInOrg> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateInOrgOutput = Awaited<ReturnType<typeof github.repos.createInOrg>>;

const input: ReposCreateInOrgInput = {} as { name: string; description?: string; homepage?: string; private?: boolean; visibility?: "public" | "private"; has_issues?: boolean; has_projects?: boolean; has_wiki?: boolean; has_downloads?: boolean; is_template?: boolean; team_id?: number; auto_init?: boolean; gitignore_template?: string; license_template?: string; allow_squash_merge?: boolean; allow_merge_commit?: boolean; allow_rebase_merge?: boolean; allow_auto_merge?: boolean; delete_branch_on_merge?: boolean; use_squash_pr_title_as_default?: boolean; squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE"; squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK"; merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE"; merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK"; custom_properties?: { [key: string]: unknown }; org: string };
const result: ReposCreateInOrgOutput = await github.repos.createInOrg(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...
```

### `github.repos.getOrgRulesets`

- **HTTP**: `GET /orgs/{org}/rulesets`
- **What it does**: Get all organization repository rulesets
- **OpenAPI operationId**: `repos/get-org-rulesets`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number; targets?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetOrgRulesetsInput = Parameters<typeof github.repos.getOrgRulesets> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetOrgRulesetsOutput = Awaited<ReturnType<typeof github.repos.getOrgRulesets>>;

const input: ReposGetOrgRulesetsInput = {} as { org: string; per_page?: number; page?: number; targets?: string };
const result: ReposGetOrgRulesetsOutput = await github.repos.getOrgRulesets(input);

// Result shape (from schema): ({ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?...
```

### `github.repos.createOrgRuleset`

- **HTTP**: `POST /orgs/{org}/rulesets`
- **What it does**: Create an organization repository ruleset
- **OpenAPI operationId**: `repos/create-org-ruleset`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; target?: "branch" | "tag" | "push" | "repository"; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_name: { include?: (string)[]; exclude?: (string)[]; protected?: boolean } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_id: { repository_ids?: (number)[] } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_property: { include?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[]; exclude?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } })[]; org: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...`
- OpenAPI response codes: `201`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type ReposCreateOrgRulesetInput = Parameters<typeof github.repos.createOrgRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateOrgRulesetOutput = Awaited<ReturnType<typeof github.repos.createOrgRuleset>>;

const input: ReposCreateOrgRulesetInput = {} as { name: string; target?: "branch" | "tag" | "push" | "repository"; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_name: { include?: (string)[]; exclude?: (string)[]; protected?: boolean } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_id: { repository_ids?: (number)[] } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_property: { include?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[]; exclude?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } })[]; org: string };
const result: ReposCreateOrgRulesetOutput = await github.repos.createOrgRuleset(input);

// Result shape (from schema): { id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...
```

### `github.repos.deleteOrgRuleset`

- **HTTP**: `DELETE /orgs/{org}/rulesets/{ruleset_id}`
- **What it does**: Delete an organization repository ruleset
- **OpenAPI operationId**: `repos/delete-org-ruleset`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `204`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; ruleset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposDeleteOrgRulesetInput = Parameters<typeof github.repos.deleteOrgRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteOrgRulesetOutput = Awaited<ReturnType<typeof github.repos.deleteOrgRuleset>>;

const input: ReposDeleteOrgRulesetInput = {} as { org: string; ruleset_id: number };
const result: ReposDeleteOrgRulesetOutput = await github.repos.deleteOrgRuleset(input);

// Result shape (from schema): unknown
```

### `github.repos.getOrgRuleset`

- **HTTP**: `GET /orgs/{org}/rulesets/{ruleset_id}`
- **What it does**: Get an organization repository ruleset
- **OpenAPI operationId**: `repos/get-org-ruleset`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; ruleset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetOrgRulesetInput = Parameters<typeof github.repos.getOrgRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetOrgRulesetOutput = Awaited<ReturnType<typeof github.repos.getOrgRuleset>>;

const input: ReposGetOrgRulesetInput = {} as { org: string; ruleset_id: number };
const result: ReposGetOrgRulesetOutput = await github.repos.getOrgRuleset(input);

// Result shape (from schema): { id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...
```

### `github.repos.updateOrgRuleset`

- **HTTP**: `PUT /orgs/{org}/rulesets/{ruleset_id}`
- **What it does**: Update an organization repository ruleset
- **OpenAPI operationId**: `repos/update-org-ruleset`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; target?: "branch" | "tag" | "push" | "repository"; enforcement?: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_name: { include?: (string)[]; exclude?: (string)[]; protected?: boolean } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_id: { repository_ids?: (number)[] } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_property: { include?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[]; exclude?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } })[]; org: string; ruleset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...`
- OpenAPI response codes: `200`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type ReposUpdateOrgRulesetInput = Parameters<typeof github.repos.updateOrgRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateOrgRulesetOutput = Awaited<ReturnType<typeof github.repos.updateOrgRuleset>>;

const input: ReposUpdateOrgRulesetInput = {} as { name?: string; target?: "branch" | "tag" | "push" | "repository"; enforcement?: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_name: { include?: (string)[]; exclude?: (string)[]; protected?: boolean } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_id: { repository_ids?: (number)[] } } | { ref_name?: { include?: (string)[]; exclude?: (string)[] } } & { repository_property: { include?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[]; exclude?: ({ name: string; property_values: (string)[]; source?: "custom" | "system" })[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } })[]; org: string; ruleset_id: number };
const result: ReposUpdateOrgRulesetOutput = await github.repos.updateOrgRuleset(input);

// Result shape (from schema): { id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...
```

### `github.repos.getOrgRuleSuites`

- **HTTP**: `GET /orgs/{org}/rulesets/rule-suites`
- **What it does**: List organization rule suites
- **OpenAPI operationId**: `repos/get-org-rule-suites`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; ref?: string; repository_name?: string; time_period?: "hour" | "day" | "week" | "month"; actor_name?: string; rule_suite_result?: "pass" | "fail" | "bypass" | "all"; evaluate_status?: "all" | "active" | "evaluate"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id?: number; actor_id?: number; actor_name?: string; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" | "bypass"; e...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetOrgRuleSuitesInput = Parameters<typeof github.repos.getOrgRuleSuites> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetOrgRuleSuitesOutput = Awaited<ReturnType<typeof github.repos.getOrgRuleSuites>>;

const input: ReposGetOrgRuleSuitesInput = {} as { org: string; ref?: string; repository_name?: string; time_period?: "hour" | "day" | "week" | "month"; actor_name?: string; rule_suite_result?: "pass" | "fail" | "bypass" | "all"; evaluate_status?: "all" | "active" | "evaluate"; per_page?: number; page?: number };
const result: ReposGetOrgRuleSuitesOutput = await github.repos.getOrgRuleSuites(input);

// Result shape (from schema): ({ id?: number; actor_id?: number; actor_name?: string; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" | "bypass"; e...
```

### `github.repos.getOrgRuleSuite`

- **HTTP**: `GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}`
- **What it does**: Get an organization rule suite
- **OpenAPI operationId**: `repos/get-org-rule-suite`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; rule_suite_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; actor_id?: number | null; actor_name?: string | null; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" ...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetOrgRuleSuiteInput = Parameters<typeof github.repos.getOrgRuleSuite> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetOrgRuleSuiteOutput = Awaited<ReturnType<typeof github.repos.getOrgRuleSuite>>;

const input: ReposGetOrgRuleSuiteInput = {} as { org: string; rule_suite_id: number };
const result: ReposGetOrgRuleSuiteOutput = await github.repos.getOrgRuleSuite(input);

// Result shape (from schema): { id?: number; actor_id?: number | null; actor_name?: string | null; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" ...
```

### `github.repos.delete`

- **HTTP**: `DELETE /repos/{owner}/{repo}`
- **What it does**: Delete a repository
- **OpenAPI operationId**: `repos/delete`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `307`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `307`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type ReposDeleteInput = Parameters<typeof github.repos.delete> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteOutput = Awaited<ReturnType<typeof github.repos.delete>>;

const input: ReposDeleteInput = {} as { owner: string; repo: string };
const result: ReposDeleteOutput = await github.repos.delete(input);

// Result shape (from schema): unknown
```

### `github.repos.get`

- **HTTP**: `GET /repos/{owner}/{repo}`
- **What it does**: Get a repository
- **OpenAPI operationId**: `repos/get`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...`
- OpenAPI response codes: `200`, `301`, `403`, `404`

```ts
import github from "@utdk/github";

type ReposGetInput = Parameters<typeof github.repos.get> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetOutput = Awaited<ReturnType<typeof github.repos.get>>;

const input: ReposGetInput = {} as { owner: string; repo: string };
const result: ReposGetOutput = await github.repos.get(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...
```

### `github.repos.update`

- **HTTP**: `PATCH /repos/{owner}/{repo}`
- **What it does**: Update a repository
- **OpenAPI operationId**: `repos/update`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `307`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; description?: string; homepage?: string; private?: boolean; visibility?: "public" | "private"; security_and_analysis?: { advanced_security?: { status?: string }; code_security?: { status?: string }; secret_scanning?: { status?: string }; secret_scanning_push_protection?: { status?: string }; secret_scanning_ai_detection?: { status?: string }; secret_scanning_non_provider_patterns?: { status?: string }; secret_scanning_delegated_alert_dismissal?: { status?: string }; secret_scanning_delegated_bypass?: { status?: string }; secret_scanning_delegated_bypass_options?: { reviewers?: ({ reviewer_id: number; reviewer_type: "TEAM" | "ROLE"; mode?: "ALWAYS" | "EXEMPT" })[] } } | null; has_issues?: boolean; has_projects?: boolean; has_wiki?: boolean; is_template?: boolean; default_branch?: string; allow_squash_merge?: boolean; allow_merge_commit?: boolean; allow_rebase_merge?: boolean; allow_auto_merge?: boolean; delete_branch_on_merge?: boolean; allow_update_branch?: boolean; use_squash_pr_title_as_default?: boolean; squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE"; squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK"; merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE"; merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK"; archived?: boolean; allow_forking?: boolean; web_commit_signoff_required?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...`
- OpenAPI response codes: `200`, `307`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposUpdateInput = Parameters<typeof github.repos.update> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateOutput = Awaited<ReturnType<typeof github.repos.update>>;

const input: ReposUpdateInput = {} as { name?: string; description?: string; homepage?: string; private?: boolean; visibility?: "public" | "private"; security_and_analysis?: { advanced_security?: { status?: string }; code_security?: { status?: string }; secret_scanning?: { status?: string }; secret_scanning_push_protection?: { status?: string }; secret_scanning_ai_detection?: { status?: string }; secret_scanning_non_provider_patterns?: { status?: string }; secret_scanning_delegated_alert_dismissal?: { status?: string }; secret_scanning_delegated_bypass?: { status?: string }; secret_scanning_delegated_bypass_options?: { reviewers?: ({ reviewer_id: number; reviewer_type: "TEAM" | "ROLE"; mode?: "ALWAYS" | "EXEMPT" })[] } } | null; has_issues?: boolean; has_projects?: boolean; has_wiki?: boolean; is_template?: boolean; default_branch?: string; allow_squash_merge?: boolean; allow_merge_commit?: boolean; allow_rebase_merge?: boolean; allow_auto_merge?: boolean; delete_branch_on_merge?: boolean; allow_update_branch?: boolean; use_squash_pr_title_as_default?: boolean; squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE"; squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK"; merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE"; merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK"; archived?: boolean; allow_forking?: boolean; web_commit_signoff_required?: boolean; owner: string; repo: string };
const result: ReposUpdateOutput = await github.repos.update(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...
```

### `github.repos.listActivities`

- **HTTP**: `GET /repos/{owner}/{repo}/activity`
- **What it does**: List repository activities
- **OpenAPI operationId**: `repos/list-activities`
- **Path params**: None
- **Query params**: `ref`, `actor`, `time_period`, `activity_type`
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; direction?: "asc" | "desc"; per_page?: number; before?: string; after?: string; ref?: string; actor?: string; time_period?: "day" | "week" | "month" | "quarter" | "year"; activity_type?: "push" | "force_push" | "branch_creation" | "branch_deletion" | "pr_merge" | "merge_queue_merge" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; before: string; after: string; ref: string; timestamp: string; activity_type: "push" | "force_push" | "branch_deletion" | "branch_creation" | "pr_merge" | "merge_queue_merge"; actor: { na...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposListActivitiesInput = Parameters<typeof github.repos.listActivities> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListActivitiesOutput = Awaited<ReturnType<typeof github.repos.listActivities>>;

const input: ReposListActivitiesInput = {} as { owner: string; repo: string; direction?: "asc" | "desc"; per_page?: number; before?: string; after?: string; ref?: string; actor?: string; time_period?: "day" | "week" | "month" | "quarter" | "year"; activity_type?: "push" | "force_push" | "branch_creation" | "branch_deletion" | "pr_merge" | "merge_queue_merge" };
const result: ReposListActivitiesOutput = await github.repos.listActivities(input);

// Result shape (from schema): ({ id: number; node_id: string; before: string; after: string; ref: string; timestamp: string; activity_type: "push" | "force_push" | "branch_deletion" | "branch_creation" | "pr_merge" | "merge_queue_merge"; actor: { na...
```

### `github.repos.createAttestation`

- **HTTP**: `POST /repos/{owner}/{repo}/attestations`
- **What it does**: Create an attestation
- **OpenAPI operationId**: `repos/create-attestation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ bundle: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number }`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type ReposCreateAttestationInput = Parameters<typeof github.repos.createAttestation> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateAttestationOutput = Awaited<ReturnType<typeof github.repos.createAttestation>>;

const input: ReposCreateAttestationInput = {} as { bundle: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; owner: string; repo: string };
const result: ReposCreateAttestationOutput = await github.repos.createAttestation(input);

// Result shape (from schema): { id?: number }
```

### `github.repos.listAttestations`

- **HTTP**: `GET /repos/{owner}/{repo}/attestations/{subject_digest}`
- **What it does**: List attestations
- **OpenAPI operationId**: `repos/list-attestations`
- **Path params**: `subject_digest`
- **Query params**: `predicate_type`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; subject_digest: string; per_page?: number; before?: string; after?: string; predicate_type?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ attestations?: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: string; initiator?: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListAttestationsInput = Parameters<typeof github.repos.listAttestations> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListAttestationsOutput = Awaited<ReturnType<typeof github.repos.listAttestations>>;

const input: ReposListAttestationsInput = {} as { owner: string; repo: string; subject_digest: string; per_page?: number; before?: string; after?: string; predicate_type?: string };
const result: ReposListAttestationsOutput = await github.repos.listAttestations(input);

// Result shape (from schema): { attestations?: ({ bundle?: { mediaType?: string; verificationMaterial?: { [key: string]: unknown }; dsseEnvelope?: { [key: string]: unknown } }; repository_id?: number; bundle_url?: string; initiator?: string })[] }
```

### `github.repos.listAutolinks`

- **HTTP**: `GET /repos/{owner}/{repo}/autolinks`
- **What it does**: Get all autolinks of a repository
- **OpenAPI operationId**: `repos/list-autolinks`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; key_prefix: string; url_template: string; is_alphanumeric: boolean; updated_at?: string | null })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListAutolinksInput = Parameters<typeof github.repos.listAutolinks> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListAutolinksOutput = Awaited<ReturnType<typeof github.repos.listAutolinks>>;

const input: ReposListAutolinksInput = {} as { owner: string; repo: string };
const result: ReposListAutolinksOutput = await github.repos.listAutolinks(input);

// Result shape (from schema): ({ id: number; key_prefix: string; url_template: string; is_alphanumeric: boolean; updated_at?: string | null })[]
```

### `github.repos.createAutolink`

- **HTTP**: `POST /repos/{owner}/{repo}/autolinks`
- **What it does**: Create an autolink reference for a repository
- **OpenAPI operationId**: `repos/create-autolink`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ key_prefix: string; url_template: string; is_alphanumeric?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; key_prefix: string; url_template: string; is_alphanumeric: boolean; updated_at?: string | null }`
- OpenAPI response codes: `201`, `422`

```ts
import github from "@utdk/github";

type ReposCreateAutolinkInput = Parameters<typeof github.repos.createAutolink> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateAutolinkOutput = Awaited<ReturnType<typeof github.repos.createAutolink>>;

const input: ReposCreateAutolinkInput = {} as { key_prefix: string; url_template: string; is_alphanumeric?: boolean; owner: string; repo: string };
const result: ReposCreateAutolinkOutput = await github.repos.createAutolink(input);

// Result shape (from schema): { id: number; key_prefix: string; url_template: string; is_alphanumeric: boolean; updated_at?: string | null }
```

### `github.repos.deleteAutolink`

- **HTTP**: `DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`
- **What it does**: Delete an autolink reference from a repository
- **OpenAPI operationId**: `repos/delete-autolink`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; autolink_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteAutolinkInput = Parameters<typeof github.repos.deleteAutolink> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteAutolinkOutput = Awaited<ReturnType<typeof github.repos.deleteAutolink>>;

const input: ReposDeleteAutolinkInput = {} as { owner: string; repo: string; autolink_id: number };
const result: ReposDeleteAutolinkOutput = await github.repos.deleteAutolink(input);

// Result shape (from schema): unknown
```

### `github.repos.getAutolink`

- **HTTP**: `GET /repos/{owner}/{repo}/autolinks/{autolink_id}`
- **What it does**: Get an autolink reference of a repository
- **OpenAPI operationId**: `repos/get-autolink`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; autolink_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; key_prefix: string; url_template: string; is_alphanumeric: boolean; updated_at?: string | null }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetAutolinkInput = Parameters<typeof github.repos.getAutolink> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAutolinkOutput = Awaited<ReturnType<typeof github.repos.getAutolink>>;

const input: ReposGetAutolinkInput = {} as { owner: string; repo: string; autolink_id: number };
const result: ReposGetAutolinkOutput = await github.repos.getAutolink(input);

// Result shape (from schema): { id: number; key_prefix: string; url_template: string; is_alphanumeric: boolean; updated_at?: string | null }
```

### `github.repos.disableAutomatedSecurityFixes`

- **HTTP**: `DELETE /repos/{owner}/{repo}/automated-security-fixes`
- **What it does**: Disable Dependabot security updates
- **OpenAPI operationId**: `repos/disable-automated-security-fixes`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDisableAutomatedSecurityFixesInput = Parameters<typeof github.repos.disableAutomatedSecurityFixes> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDisableAutomatedSecurityFixesOutput = Awaited<ReturnType<typeof github.repos.disableAutomatedSecurityFixes>>;

const input: ReposDisableAutomatedSecurityFixesInput = {} as { owner: string; repo: string };
const result: ReposDisableAutomatedSecurityFixesOutput = await github.repos.disableAutomatedSecurityFixes(input);

// Result shape (from schema): unknown
```

### `github.repos.checkAutomatedSecurityFixes`

- **HTTP**: `GET /repos/{owner}/{repo}/automated-security-fixes`
- **What it does**: Check if Dependabot security updates are enabled for a repository
- **OpenAPI operationId**: `repos/check-automated-security-fixes`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enabled: boolean; paused: boolean }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposCheckAutomatedSecurityFixesInput = Parameters<typeof github.repos.checkAutomatedSecurityFixes> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCheckAutomatedSecurityFixesOutput = Awaited<ReturnType<typeof github.repos.checkAutomatedSecurityFixes>>;

const input: ReposCheckAutomatedSecurityFixesInput = {} as { owner: string; repo: string };
const result: ReposCheckAutomatedSecurityFixesOutput = await github.repos.checkAutomatedSecurityFixes(input);

// Result shape (from schema): { enabled: boolean; paused: boolean }
```

### `github.repos.enableAutomatedSecurityFixes`

- **HTTP**: `PUT /repos/{owner}/{repo}/automated-security-fixes`
- **What it does**: Enable Dependabot security updates
- **OpenAPI operationId**: `repos/enable-automated-security-fixes`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposEnableAutomatedSecurityFixesInput = Parameters<typeof github.repos.enableAutomatedSecurityFixes> extends [infer T, ...unknown[]] ? T : undefined;
type ReposEnableAutomatedSecurityFixesOutput = Awaited<ReturnType<typeof github.repos.enableAutomatedSecurityFixes>>;

const input: ReposEnableAutomatedSecurityFixesInput = {} as { owner: string; repo: string };
const result: ReposEnableAutomatedSecurityFixesOutput = await github.repos.enableAutomatedSecurityFixes(input);

// Result shape (from schema): unknown
```

### `github.repos.listBranches`

- **HTTP**: `GET /repos/{owner}/{repo}/branches`
- **What it does**: List branches
- **OpenAPI operationId**: `repos/list-branches`
- **Path params**: None
- **Query params**: `protected`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; protected?: boolean; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name: string; commit: { sha: string; url: string }; protected: boolean; protection?: { url?: string; enabled?: boolean; required_status_checks?: { url?: string; enforcement_level?: string; contexts: (string)[]; check...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposListBranchesInput = Parameters<typeof github.repos.listBranches> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListBranchesOutput = Awaited<ReturnType<typeof github.repos.listBranches>>;

const input: ReposListBranchesInput = {} as { owner: string; repo: string; protected?: boolean; per_page?: number; page?: number };
const result: ReposListBranchesOutput = await github.repos.listBranches(input);

// Result shape (from schema): ({ name: string; commit: { sha: string; url: string }; protected: boolean; protection?: { url?: string; enabled?: boolean; required_status_checks?: { url?: string; enforcement_level?: string; contexts: (string)[]; check...
```

### `github.repos.getBranch`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}`
- **What it does**: Get a branch
- **OpenAPI operationId**: `repos/get-branch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; commit: { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: st...`
- OpenAPI response codes: `200`, `301`, `404`

```ts
import github from "@utdk/github";

type ReposGetBranchInput = Parameters<typeof github.repos.getBranch> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetBranchOutput = Awaited<ReturnType<typeof github.repos.getBranch>>;

const input: ReposGetBranchInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetBranchOutput = await github.repos.getBranch(input);

// Result shape (from schema): { name: string; commit: { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: st...
```

### `github.repos.deleteBranchProtection`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection`
- **What it does**: Delete branch protection
- **OpenAPI operationId**: `repos/delete-branch-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`

```ts
import github from "@utdk/github";

type ReposDeleteBranchProtectionInput = Parameters<typeof github.repos.deleteBranchProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteBranchProtectionOutput = Awaited<ReturnType<typeof github.repos.deleteBranchProtection>>;

const input: ReposDeleteBranchProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposDeleteBranchProtectionOutput = await github.repos.deleteBranchProtection(input);

// Result shape (from schema): unknown
```

### `github.repos.getBranchProtection`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection`
- **What it does**: Get branch protection
- **OpenAPI operationId**: `repos/get-branch-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; enabled?: boolean; required_status_checks?: { url?: string; enforcement_level?: string; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url?: string; strict?: boole...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetBranchProtectionInput = Parameters<typeof github.repos.getBranchProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetBranchProtectionOutput = Awaited<ReturnType<typeof github.repos.getBranchProtection>>;

const input: ReposGetBranchProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetBranchProtectionOutput = await github.repos.getBranchProtection(input);

// Result shape (from schema): { url?: string; enabled?: boolean; required_status_checks?: { url?: string; enforcement_level?: string; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url?: string; strict?: boole...
```

### `github.repos.updateBranchProtection`

- **HTTP**: `PUT /repos/{owner}/{repo}/branches/{branch}/protection`
- **What it does**: Update branch protection
- **OpenAPI operationId**: `repos/update-branch-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ required_status_checks: { strict: boolean; contexts: (string)[]; checks?: ({ context: string; app_id?: number })[] } | null; enforce_admins: boolean | null; required_pull_request_reviews: { dismissal_restrictions?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] }; dismiss_stale_reviews?: boolean; require_code_owner_reviews?: boolean; required_approving_review_count?: number; require_last_push_approval?: boolean; bypass_pull_request_allowances?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] } } | null; restrictions: { users: (string)[]; teams: (string)[]; apps?: (string)[] } | null; required_linear_history?: boolean; allow_force_pushes?: boolean | null; allow_deletions?: boolean; block_creations?: boolean; required_conversation_resolution?: boolean; lock_branch?: boolean; allow_fork_syncing?: boolean; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; required_status_checks?: { url: string; strict: boolean; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url: string }; required_pull_request_reviews?: { url: string...`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposUpdateBranchProtectionInput = Parameters<typeof github.repos.updateBranchProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateBranchProtectionOutput = Awaited<ReturnType<typeof github.repos.updateBranchProtection>>;

const input: ReposUpdateBranchProtectionInput = {} as { required_status_checks: { strict: boolean; contexts: (string)[]; checks?: ({ context: string; app_id?: number })[] } | null; enforce_admins: boolean | null; required_pull_request_reviews: { dismissal_restrictions?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] }; dismiss_stale_reviews?: boolean; require_code_owner_reviews?: boolean; required_approving_review_count?: number; require_last_push_approval?: boolean; bypass_pull_request_allowances?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] } } | null; restrictions: { users: (string)[]; teams: (string)[]; apps?: (string)[] } | null; required_linear_history?: boolean; allow_force_pushes?: boolean | null; allow_deletions?: boolean; block_creations?: boolean; required_conversation_resolution?: boolean; lock_branch?: boolean; allow_fork_syncing?: boolean; owner: string; repo: string; branch: string };
const result: ReposUpdateBranchProtectionOutput = await github.repos.updateBranchProtection(input);

// Result shape (from schema): { url: string; required_status_checks?: { url: string; strict: boolean; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url: string }; required_pull_request_reviews?: { url: string...
```

### `github.repos.deleteAdminBranchProtection`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`
- **What it does**: Delete admin branch protection
- **OpenAPI operationId**: `repos/delete-admin-branch-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteAdminBranchProtectionInput = Parameters<typeof github.repos.deleteAdminBranchProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteAdminBranchProtectionOutput = Awaited<ReturnType<typeof github.repos.deleteAdminBranchProtection>>;

const input: ReposDeleteAdminBranchProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposDeleteAdminBranchProtectionOutput = await github.repos.deleteAdminBranchProtection(input);

// Result shape (from schema): unknown
```

### `github.repos.getAdminBranchProtection`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`
- **What it does**: Get admin branch protection
- **OpenAPI operationId**: `repos/get-admin-branch-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; enabled: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetAdminBranchProtectionInput = Parameters<typeof github.repos.getAdminBranchProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAdminBranchProtectionOutput = Awaited<ReturnType<typeof github.repos.getAdminBranchProtection>>;

const input: ReposGetAdminBranchProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetAdminBranchProtectionOutput = await github.repos.getAdminBranchProtection(input);

// Result shape (from schema): { url: string; enabled: boolean }
```

### `github.repos.setAdminBranchProtection`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`
- **What it does**: Set admin branch protection
- **OpenAPI operationId**: `repos/set-admin-branch-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; enabled: boolean }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposSetAdminBranchProtectionInput = Parameters<typeof github.repos.setAdminBranchProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposSetAdminBranchProtectionOutput = Awaited<ReturnType<typeof github.repos.setAdminBranchProtection>>;

const input: ReposSetAdminBranchProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposSetAdminBranchProtectionOutput = await github.repos.setAdminBranchProtection(input);

// Result shape (from schema): { url: string; enabled: boolean }
```

### `github.repos.deletePullRequestReviewProtection`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`
- **What it does**: Delete pull request review protection
- **OpenAPI operationId**: `repos/delete-pull-request-review-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeletePullRequestReviewProtectionInput = Parameters<typeof github.repos.deletePullRequestReviewProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeletePullRequestReviewProtectionOutput = Awaited<ReturnType<typeof github.repos.deletePullRequestReviewProtection>>;

const input: ReposDeletePullRequestReviewProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposDeletePullRequestReviewProtectionOutput = await github.repos.deletePullRequestReviewProtection(input);

// Result shape (from schema): unknown
```

### `github.repos.getPullRequestReviewProtection`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`
- **What it does**: Get pull request review protection
- **OpenAPI operationId**: `repos/get-pull-request-review-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; dismissal_restrictions?: { users?: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetPullRequestReviewProtectionInput = Parameters<typeof github.repos.getPullRequestReviewProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetPullRequestReviewProtectionOutput = Awaited<ReturnType<typeof github.repos.getPullRequestReviewProtection>>;

const input: ReposGetPullRequestReviewProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetPullRequestReviewProtectionOutput = await github.repos.getPullRequestReviewProtection(input);

// Result shape (from schema): { url?: string; dismissal_restrictions?: { users?: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...
```

### `github.repos.updatePullRequestReviewProtection`

- **HTTP**: `PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`
- **What it does**: Update pull request review protection
- **OpenAPI operationId**: `repos/update-pull-request-review-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ dismissal_restrictions?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] }; dismiss_stale_reviews?: boolean; require_code_owner_reviews?: boolean; required_approving_review_count?: number; require_last_push_approval?: boolean; bypass_pull_request_allowances?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] }; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; dismissal_restrictions?: { users?: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposUpdatePullRequestReviewProtectionInput = Parameters<typeof github.repos.updatePullRequestReviewProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdatePullRequestReviewProtectionOutput = Awaited<ReturnType<typeof github.repos.updatePullRequestReviewProtection>>;

const input: ReposUpdatePullRequestReviewProtectionInput = {} as { dismissal_restrictions?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] }; dismiss_stale_reviews?: boolean; require_code_owner_reviews?: boolean; required_approving_review_count?: number; require_last_push_approval?: boolean; bypass_pull_request_allowances?: { users?: (string)[]; teams?: (string)[]; apps?: (string)[] }; owner: string; repo: string; branch: string };
const result: ReposUpdatePullRequestReviewProtectionOutput = await github.repos.updatePullRequestReviewProtection(input);

// Result shape (from schema): { url?: string; dismissal_restrictions?: { users?: ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: strin...
```

### `github.repos.deleteCommitSignatureProtection`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`
- **What it does**: Delete commit signature protection
- **OpenAPI operationId**: `repos/delete-commit-signature-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteCommitSignatureProtectionInput = Parameters<typeof github.repos.deleteCommitSignatureProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteCommitSignatureProtectionOutput = Awaited<ReturnType<typeof github.repos.deleteCommitSignatureProtection>>;

const input: ReposDeleteCommitSignatureProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposDeleteCommitSignatureProtectionOutput = await github.repos.deleteCommitSignatureProtection(input);

// Result shape (from schema): unknown
```

### `github.repos.getCommitSignatureProtection`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`
- **What it does**: Get commit signature protection
- **OpenAPI operationId**: `repos/get-commit-signature-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; enabled: boolean }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetCommitSignatureProtectionInput = Parameters<typeof github.repos.getCommitSignatureProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCommitSignatureProtectionOutput = Awaited<ReturnType<typeof github.repos.getCommitSignatureProtection>>;

const input: ReposGetCommitSignatureProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetCommitSignatureProtectionOutput = await github.repos.getCommitSignatureProtection(input);

// Result shape (from schema): { url: string; enabled: boolean }
```

### `github.repos.createCommitSignatureProtection`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`
- **What it does**: Create commit signature protection
- **OpenAPI operationId**: `repos/create-commit-signature-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; enabled: boolean }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposCreateCommitSignatureProtectionInput = Parameters<typeof github.repos.createCommitSignatureProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateCommitSignatureProtectionOutput = Awaited<ReturnType<typeof github.repos.createCommitSignatureProtection>>;

const input: ReposCreateCommitSignatureProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposCreateCommitSignatureProtectionOutput = await github.repos.createCommitSignatureProtection(input);

// Result shape (from schema): { url: string; enabled: boolean }
```

### `github.repos.removeStatusCheckProtection`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`
- **What it does**: Remove status check protection
- **OpenAPI operationId**: `repos/remove-status-check-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposRemoveStatusCheckProtectionInput = Parameters<typeof github.repos.removeStatusCheckProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRemoveStatusCheckProtectionOutput = Awaited<ReturnType<typeof github.repos.removeStatusCheckProtection>>;

const input: ReposRemoveStatusCheckProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposRemoveStatusCheckProtectionOutput = await github.repos.removeStatusCheckProtection(input);

// Result shape (from schema): unknown
```

### `github.repos.getStatusChecksProtection`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`
- **What it does**: Get status checks protection
- **OpenAPI operationId**: `repos/get-status-checks-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; strict: boolean; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url: string }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetStatusChecksProtectionInput = Parameters<typeof github.repos.getStatusChecksProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetStatusChecksProtectionOutput = Awaited<ReturnType<typeof github.repos.getStatusChecksProtection>>;

const input: ReposGetStatusChecksProtectionInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetStatusChecksProtectionOutput = await github.repos.getStatusChecksProtection(input);

// Result shape (from schema): { url: string; strict: boolean; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url: string }
```

### `github.repos.updateStatusCheckProtection`

- **HTTP**: `PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`
- **What it does**: Update status check protection
- **OpenAPI operationId**: `repos/update-status-check-protection`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ strict?: boolean; contexts?: (string)[]; checks?: ({ context: string; app_id?: number })[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; strict: boolean; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url: string }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposUpdateStatusCheckProtectionInput = Parameters<typeof github.repos.updateStatusCheckProtection> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateStatusCheckProtectionOutput = Awaited<ReturnType<typeof github.repos.updateStatusCheckProtection>>;

const input: ReposUpdateStatusCheckProtectionInput = {} as { strict?: boolean; contexts?: (string)[]; checks?: ({ context: string; app_id?: number })[]; owner: string; repo: string; branch: string };
const result: ReposUpdateStatusCheckProtectionOutput = await github.repos.updateStatusCheckProtection(input);

// Result shape (from schema): { url: string; strict: boolean; contexts: (string)[]; checks: ({ context: string; app_id: number | null })[]; contexts_url: string }
```

### `github.repos.removeStatusCheckContexts`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
- **What it does**: Remove status check contexts
- **OpenAPI operationId**: `repos/remove-status-check-contexts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { contexts: (string)[] } | (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `(string)[]`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposRemoveStatusCheckContextsInput = Parameters<typeof github.repos.removeStatusCheckContexts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRemoveStatusCheckContextsOutput = Awaited<ReturnType<typeof github.repos.removeStatusCheckContexts>>;

const input: ReposRemoveStatusCheckContextsInput = {} as { body?: { contexts: (string)[] } | (string)[]; owner: string; repo: string; branch: string };
const result: ReposRemoveStatusCheckContextsOutput = await github.repos.removeStatusCheckContexts(input);

// Result shape (from schema): (string)[]
```

### `github.repos.getAllStatusCheckContexts`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
- **What it does**: Get all status check contexts
- **OpenAPI operationId**: `repos/get-all-status-check-contexts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `(string)[]`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetAllStatusCheckContextsInput = Parameters<typeof github.repos.getAllStatusCheckContexts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAllStatusCheckContextsOutput = Awaited<ReturnType<typeof github.repos.getAllStatusCheckContexts>>;

const input: ReposGetAllStatusCheckContextsInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetAllStatusCheckContextsOutput = await github.repos.getAllStatusCheckContexts(input);

// Result shape (from schema): (string)[]
```

### `github.repos.addStatusCheckContexts`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
- **What it does**: Add status check contexts
- **OpenAPI operationId**: `repos/add-status-check-contexts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { contexts: (string)[] } | (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `(string)[]`
- OpenAPI response codes: `200`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposAddStatusCheckContextsInput = Parameters<typeof github.repos.addStatusCheckContexts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposAddStatusCheckContextsOutput = Awaited<ReturnType<typeof github.repos.addStatusCheckContexts>>;

const input: ReposAddStatusCheckContextsInput = {} as { body?: { contexts: (string)[] } | (string)[]; owner: string; repo: string; branch: string };
const result: ReposAddStatusCheckContextsOutput = await github.repos.addStatusCheckContexts(input);

// Result shape (from schema): (string)[]
```

### `github.repos.setStatusCheckContexts`

- **HTTP**: `PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
- **What it does**: Set status check contexts
- **OpenAPI operationId**: `repos/set-status-check-contexts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { contexts: (string)[] } | (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `(string)[]`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposSetStatusCheckContextsInput = Parameters<typeof github.repos.setStatusCheckContexts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposSetStatusCheckContextsOutput = Awaited<ReturnType<typeof github.repos.setStatusCheckContexts>>;

const input: ReposSetStatusCheckContextsInput = {} as { body?: { contexts: (string)[] } | (string)[]; owner: string; repo: string; branch: string };
const result: ReposSetStatusCheckContextsOutput = await github.repos.setStatusCheckContexts(input);

// Result shape (from schema): (string)[]
```

### `github.repos.deleteAccessRestrictions`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions`
- **What it does**: Delete access restrictions
- **OpenAPI operationId**: `repos/delete-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDeleteAccessRestrictionsInput = Parameters<typeof github.repos.deleteAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.deleteAccessRestrictions>>;

const input: ReposDeleteAccessRestrictionsInput = {} as { owner: string; repo: string; branch: string };
const result: ReposDeleteAccessRestrictionsOutput = await github.repos.deleteAccessRestrictions(input);

// Result shape (from schema): unknown
```

### `github.repos.getAccessRestrictions`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions`
- **What it does**: Get access restrictions
- **OpenAPI operationId**: `repos/get-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; users_url: string; teams_url: string; apps_url: string; users: ({ login?: string; id?: number; node_id?: string; avatar_url?: string; gravatar_id?: string; url?: string; html_url?: string; followers_url?:...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetAccessRestrictionsInput = Parameters<typeof github.repos.getAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.getAccessRestrictions>>;

const input: ReposGetAccessRestrictionsInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetAccessRestrictionsOutput = await github.repos.getAccessRestrictions(input);

// Result shape (from schema): { url: string; users_url: string; teams_url: string; apps_url: string; users: ({ login?: string; id?: number; node_id?: string; avatar_url?: string; gravatar_id?: string; url?: string; html_url?: string; followers_url?:...
```

### `github.repos.removeAppAccessRestrictions`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
- **What it does**: Remove app access restrictions
- **OpenAPI operationId**: `repos/remove-app-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ apps: (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposRemoveAppAccessRestrictionsInput = Parameters<typeof github.repos.removeAppAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRemoveAppAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.removeAppAccessRestrictions>>;

const input: ReposRemoveAppAccessRestrictionsInput = {} as { apps: (string)[]; owner: string; repo: string; branch: string };
const result: ReposRemoveAppAccessRestrictionsOutput = await github.repos.removeAppAccessRestrictions(input);

// Result shape (from schema): ({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...
```

### `github.repos.getAppsWithAccessToProtectedBranch`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
- **What it does**: Get apps with access to the protected branch
- **OpenAPI operationId**: `repos/get-apps-with-access-to-protected-branch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetAppsWithAccessToProtectedBranchInput = Parameters<typeof github.repos.getAppsWithAccessToProtectedBranch> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAppsWithAccessToProtectedBranchOutput = Awaited<ReturnType<typeof github.repos.getAppsWithAccessToProtectedBranch>>;

const input: ReposGetAppsWithAccessToProtectedBranchInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetAppsWithAccessToProtectedBranchOutput = await github.repos.getAppsWithAccessToProtectedBranch(input);

// Result shape (from schema): ({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...
```

### `github.repos.addAppAccessRestrictions`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
- **What it does**: Add app access restrictions
- **OpenAPI operationId**: `repos/add-app-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ apps: (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposAddAppAccessRestrictionsInput = Parameters<typeof github.repos.addAppAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposAddAppAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.addAppAccessRestrictions>>;

const input: ReposAddAppAccessRestrictionsInput = {} as { apps: (string)[]; owner: string; repo: string; branch: string };
const result: ReposAddAppAccessRestrictionsOutput = await github.repos.addAppAccessRestrictions(input);

// Result shape (from schema): ({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...
```

### `github.repos.setAppAccessRestrictions`

- **HTTP**: `PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
- **What it does**: Set app access restrictions
- **OpenAPI operationId**: `repos/set-app-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ apps: (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposSetAppAccessRestrictionsInput = Parameters<typeof github.repos.setAppAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposSetAppAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.setAppAccessRestrictions>>;

const input: ReposSetAppAccessRestrictionsInput = {} as { apps: (string)[]; owner: string; repo: string; branch: string };
const result: ReposSetAppAccessRestrictionsOutput = await github.repos.setAppAccessRestrictions(input);

// Result shape (from schema): ({ id: number; slug?: string; node_id: string; client_id?: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...
```

### `github.repos.removeTeamAccessRestrictions`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
- **What it does**: Remove team access restrictions
- **OpenAPI operationId**: `repos/remove-team-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { teams: (string)[] } | (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposRemoveTeamAccessRestrictionsInput = Parameters<typeof github.repos.removeTeamAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRemoveTeamAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.removeTeamAccessRestrictions>>;

const input: ReposRemoveTeamAccessRestrictionsInput = {} as { body?: { teams: (string)[] } | (string)[]; owner: string; repo: string; branch: string };
const result: ReposRemoveTeamAccessRestrictionsOutput = await github.repos.removeTeamAccessRestrictions(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.repos.getTeamsWithAccessToProtectedBranch`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
- **What it does**: Get teams with access to the protected branch
- **OpenAPI operationId**: `repos/get-teams-with-access-to-protected-branch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetTeamsWithAccessToProtectedBranchInput = Parameters<typeof github.repos.getTeamsWithAccessToProtectedBranch> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetTeamsWithAccessToProtectedBranchOutput = Awaited<ReturnType<typeof github.repos.getTeamsWithAccessToProtectedBranch>>;

const input: ReposGetTeamsWithAccessToProtectedBranchInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetTeamsWithAccessToProtectedBranchOutput = await github.repos.getTeamsWithAccessToProtectedBranch(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.repos.addTeamAccessRestrictions`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
- **What it does**: Add team access restrictions
- **OpenAPI operationId**: `repos/add-team-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { teams: (string)[] } | (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposAddTeamAccessRestrictionsInput = Parameters<typeof github.repos.addTeamAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposAddTeamAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.addTeamAccessRestrictions>>;

const input: ReposAddTeamAccessRestrictionsInput = {} as { body?: { teams: (string)[] } | (string)[]; owner: string; repo: string; branch: string };
const result: ReposAddTeamAccessRestrictionsOutput = await github.repos.addTeamAccessRestrictions(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.repos.setTeamAccessRestrictions`

- **HTTP**: `PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
- **What it does**: Set team access restrictions
- **OpenAPI operationId**: `repos/set-team-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: { teams: (string)[] } | (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposSetTeamAccessRestrictionsInput = Parameters<typeof github.repos.setTeamAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposSetTeamAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.setTeamAccessRestrictions>>;

const input: ReposSetTeamAccessRestrictionsInput = {} as { body?: { teams: (string)[] } | (string)[]; owner: string; repo: string; branch: string };
const result: ReposSetTeamAccessRestrictionsOutput = await github.repos.setTeamAccessRestrictions(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.repos.removeUserAccessRestrictions`

- **HTTP**: `DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
- **What it does**: Remove user access restrictions
- **OpenAPI operationId**: `repos/remove-user-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ users: (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposRemoveUserAccessRestrictionsInput = Parameters<typeof github.repos.removeUserAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRemoveUserAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.removeUserAccessRestrictions>>;

const input: ReposRemoveUserAccessRestrictionsInput = {} as { users: (string)[]; owner: string; repo: string; branch: string };
const result: ReposRemoveUserAccessRestrictionsOutput = await github.repos.removeUserAccessRestrictions(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.repos.getUsersWithAccessToProtectedBranch`

- **HTTP**: `GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
- **What it does**: Get users with access to the protected branch
- **OpenAPI operationId**: `repos/get-users-with-access-to-protected-branch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetUsersWithAccessToProtectedBranchInput = Parameters<typeof github.repos.getUsersWithAccessToProtectedBranch> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetUsersWithAccessToProtectedBranchOutput = Awaited<ReturnType<typeof github.repos.getUsersWithAccessToProtectedBranch>>;

const input: ReposGetUsersWithAccessToProtectedBranchInput = {} as { owner: string; repo: string; branch: string };
const result: ReposGetUsersWithAccessToProtectedBranchOutput = await github.repos.getUsersWithAccessToProtectedBranch(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.repos.addUserAccessRestrictions`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
- **What it does**: Add user access restrictions
- **OpenAPI operationId**: `repos/add-user-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ users: (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposAddUserAccessRestrictionsInput = Parameters<typeof github.repos.addUserAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposAddUserAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.addUserAccessRestrictions>>;

const input: ReposAddUserAccessRestrictionsInput = {} as { users: (string)[]; owner: string; repo: string; branch: string };
const result: ReposAddUserAccessRestrictionsOutput = await github.repos.addUserAccessRestrictions(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.repos.setUserAccessRestrictions`

- **HTTP**: `PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
- **What it does**: Set user access restrictions
- **OpenAPI operationId**: `repos/set-user-access-restrictions`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ users: (string)[]; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposSetUserAccessRestrictionsInput = Parameters<typeof github.repos.setUserAccessRestrictions> extends [infer T, ...unknown[]] ? T : undefined;
type ReposSetUserAccessRestrictionsOutput = Awaited<ReturnType<typeof github.repos.setUserAccessRestrictions>>;

const input: ReposSetUserAccessRestrictionsInput = {} as { users: (string)[]; owner: string; repo: string; branch: string };
const result: ReposSetUserAccessRestrictionsOutput = await github.repos.setUserAccessRestrictions(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.repos.renameBranch`

- **HTTP**: `POST /repos/{owner}/{repo}/branches/{branch}/rename`
- **What it does**: Rename a branch
- **OpenAPI operationId**: `repos/rename-branch`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ new_name: string; owner: string; repo: string; branch: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; commit: { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: st...`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposRenameBranchInput = Parameters<typeof github.repos.renameBranch> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRenameBranchOutput = Awaited<ReturnType<typeof github.repos.renameBranch>>;

const input: ReposRenameBranchInput = {} as { new_name: string; owner: string; repo: string; branch: string };
const result: ReposRenameBranchOutput = await github.repos.renameBranch(input);

// Result shape (from schema): { name: string; commit: { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: st...
```

### `github.repos.codeownersErrors`

- **HTTP**: `GET /repos/{owner}/{repo}/codeowners/errors`
- **What it does**: List CODEOWNERS errors
- **OpenAPI operationId**: `repos/codeowners-errors`
- **Path params**: None
- **Query params**: `ref`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ errors: ({ line: number; column: number; source?: string; kind: string; suggestion?: string | null; message: string; path: string })[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposCodeownersErrorsInput = Parameters<typeof github.repos.codeownersErrors> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCodeownersErrorsOutput = Awaited<ReturnType<typeof github.repos.codeownersErrors>>;

const input: ReposCodeownersErrorsInput = {} as { owner: string; repo: string; ref?: string };
const result: ReposCodeownersErrorsOutput = await github.repos.codeownersErrors(input);

// Result shape (from schema): { errors: ({ line: number; column: number; source?: string; kind: string; suggestion?: string | null; message: string; path: string })[] }
```

### `github.repos.listCollaborators`

- **HTTP**: `GET /repos/{owner}/{repo}/collaborators`
- **What it does**: List repository collaborators
- **OpenAPI operationId**: `repos/list-collaborators`
- **Path params**: None
- **Query params**: `affiliation`, `permission`
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; affiliation?: "outside" | "direct" | "all"; permission?: "pull" | "triage" | "push" | "maintain" | "admin"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ login: string; id: number; email?: string | null; name?: string | null; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposListCollaboratorsInput = Parameters<typeof github.repos.listCollaborators> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListCollaboratorsOutput = Awaited<ReturnType<typeof github.repos.listCollaborators>>;

const input: ReposListCollaboratorsInput = {} as { owner: string; repo: string; affiliation?: "outside" | "direct" | "all"; permission?: "pull" | "triage" | "push" | "maintain" | "admin"; per_page?: number; page?: number };
const result: ReposListCollaboratorsOutput = await github.repos.listCollaborators(input);

// Result shape (from schema): ({ login: string; id: number; email?: string | null; name?: string | null; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.repos.removeCollaborator`

- **HTTP**: `DELETE /repos/{owner}/{repo}/collaborators/{username}`
- **What it does**: Remove a repository collaborator
- **OpenAPI operationId**: `repos/remove-collaborator`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `422`

```ts
import github from "@utdk/github";

type ReposRemoveCollaboratorInput = Parameters<typeof github.repos.removeCollaborator> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRemoveCollaboratorOutput = Awaited<ReturnType<typeof github.repos.removeCollaborator>>;

const input: ReposRemoveCollaboratorInput = {} as { owner: string; repo: string; username: string };
const result: ReposRemoveCollaboratorOutput = await github.repos.removeCollaborator(input);

// Result shape (from schema): unknown
```

### `github.repos.checkCollaborator`

- **HTTP**: `GET /repos/{owner}/{repo}/collaborators/{username}`
- **What it does**: Check if a user is a repository collaborator
- **OpenAPI operationId**: `repos/check-collaborator`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposCheckCollaboratorInput = Parameters<typeof github.repos.checkCollaborator> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCheckCollaboratorOutput = Awaited<ReturnType<typeof github.repos.checkCollaborator>>;

const input: ReposCheckCollaboratorInput = {} as { owner: string; repo: string; username: string };
const result: ReposCheckCollaboratorOutput = await github.repos.checkCollaborator(input);

// Result shape (from schema): unknown
```

### `github.repos.addCollaborator`

- **HTTP**: `PUT /repos/{owner}/{repo}/collaborators/{username}`
- **What it does**: Add a repository collaborator
- **OpenAPI operationId**: `repos/add-collaborator`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ permission?: string; owner: string; repo: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id...`
- OpenAPI response codes: `201`, `204`, `403`, `422`

```ts
import github from "@utdk/github";

type ReposAddCollaboratorInput = Parameters<typeof github.repos.addCollaborator> extends [infer T, ...unknown[]] ? T : undefined;
type ReposAddCollaboratorOutput = Awaited<ReturnType<typeof github.repos.addCollaborator>>;

const input: ReposAddCollaboratorInput = {} as { permission?: string; owner: string; repo: string; username: string };
const result: ReposAddCollaboratorOutput = await github.repos.addCollaborator(input);

// Result shape (from schema): { id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id...
```

### `github.repos.getCollaboratorPermissionLevel`

- **HTTP**: `GET /repos/{owner}/{repo}/collaborators/{username}/permission`
- **What it does**: Get repository permissions for a user
- **OpenAPI operationId**: `repos/get-collaborator-permission-level`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; username: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ permission: string; role_name: string; user: { login: string; id: number; email?: string | null; name?: string | null; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; fo...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetCollaboratorPermissionLevelInput = Parameters<typeof github.repos.getCollaboratorPermissionLevel> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCollaboratorPermissionLevelOutput = Awaited<ReturnType<typeof github.repos.getCollaboratorPermissionLevel>>;

const input: ReposGetCollaboratorPermissionLevelInput = {} as { owner: string; repo: string; username: string };
const result: ReposGetCollaboratorPermissionLevelOutput = await github.repos.getCollaboratorPermissionLevel(input);

// Result shape (from schema): { permission: string; role_name: string; user: { login: string; id: number; email?: string | null; name?: string | null; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; fo...
```

### `github.repos.listCommitCommentsForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/comments`
- **What it does**: List commit comments for a repository
- **OpenAPI operationId**: `repos/list-commit-comments-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; log...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListCommitCommentsForRepoInput = Parameters<typeof github.repos.listCommitCommentsForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListCommitCommentsForRepoOutput = Awaited<ReturnType<typeof github.repos.listCommitCommentsForRepo>>;

const input: ReposListCommitCommentsForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListCommitCommentsForRepoOutput = await github.repos.listCommitCommentsForRepo(input);

// Result shape (from schema): ({ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; log...
```

### `github.repos.deleteCommitComment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/comments/{comment_id}`
- **What it does**: Delete a commit comment
- **OpenAPI operationId**: `repos/delete-commit-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteCommitCommentInput = Parameters<typeof github.repos.deleteCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteCommitCommentOutput = Awaited<ReturnType<typeof github.repos.deleteCommitComment>>;

const input: ReposDeleteCommitCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: ReposDeleteCommitCommentOutput = await github.repos.deleteCommitComment(input);

// Result shape (from schema): unknown
```

### `github.repos.getCommitComment`

- **HTTP**: `GET /repos/{owner}/{repo}/comments/{comment_id}`
- **What it does**: Get a commit comment
- **OpenAPI operationId**: `repos/get-commit-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; logi...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetCommitCommentInput = Parameters<typeof github.repos.getCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCommitCommentOutput = Awaited<ReturnType<typeof github.repos.getCommitComment>>;

const input: ReposGetCommitCommentInput = {} as { owner: string; repo: string; comment_id: number };
const result: ReposGetCommitCommentOutput = await github.repos.getCommitComment(input);

// Result shape (from schema): { html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; logi...
```

### `github.repos.updateCommitComment`

- **HTTP**: `PATCH /repos/{owner}/{repo}/comments/{comment_id}`
- **What it does**: Update a commit comment
- **OpenAPI operationId**: `repos/update-commit-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; owner: string; repo: string; comment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; logi...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposUpdateCommitCommentInput = Parameters<typeof github.repos.updateCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateCommitCommentOutput = Awaited<ReturnType<typeof github.repos.updateCommitComment>>;

const input: ReposUpdateCommitCommentInput = {} as { body: string; owner: string; repo: string; comment_id: number };
const result: ReposUpdateCommitCommentOutput = await github.repos.updateCommitComment(input);

// Result shape (from schema): { html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; logi...
```

### `github.repos.listCommits`

- **HTTP**: `GET /repos/{owner}/{repo}/commits`
- **What it does**: List commits
- **OpenAPI operationId**: `repos/list-commits`
- **Path params**: None
- **Query params**: `sha`, `path`, `author`, `committer`, `since`, `until`
- **Response codes**: `200`, `400`, `404`, `409`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sha?: string; path?: string; author?: string; committer?: string; since?: string; until?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; d...`
- OpenAPI response codes: `200`, `400`, `404`, `409`, `500`

```ts
import github from "@utdk/github";

type ReposListCommitsInput = Parameters<typeof github.repos.listCommits> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListCommitsOutput = Awaited<ReturnType<typeof github.repos.listCommits>>;

const input: ReposListCommitsInput = {} as { owner: string; repo: string; sha?: string; path?: string; author?: string; committer?: string; since?: string; until?: string; per_page?: number; page?: number };
const result: ReposListCommitsOutput = await github.repos.listCommits(input);

// Result shape (from schema): ({ url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; d...
```

### `github.repos.listBranchesForHeadCommit`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`
- **What it does**: List branches for HEAD commit
- **OpenAPI operationId**: `repos/list-branches-for-head-commit`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; commit_sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ name: string; commit: { sha: string; url: string }; protected: boolean })[]`
- OpenAPI response codes: `200`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposListBranchesForHeadCommitInput = Parameters<typeof github.repos.listBranchesForHeadCommit> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListBranchesForHeadCommitOutput = Awaited<ReturnType<typeof github.repos.listBranchesForHeadCommit>>;

const input: ReposListBranchesForHeadCommitInput = {} as { owner: string; repo: string; commit_sha: string };
const result: ReposListBranchesForHeadCommitOutput = await github.repos.listBranchesForHeadCommit(input);

// Result shape (from schema): ({ name: string; commit: { sha: string; url: string }; protected: boolean })[]
```

### `github.repos.listCommentsForCommit`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{commit_sha}/comments`
- **What it does**: List commit comments
- **OpenAPI operationId**: `repos/list-comments-for-commit`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; commit_sha: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; log...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListCommentsForCommitInput = Parameters<typeof github.repos.listCommentsForCommit> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListCommentsForCommitOutput = Awaited<ReturnType<typeof github.repos.listCommentsForCommit>>;

const input: ReposListCommentsForCommitInput = {} as { owner: string; repo: string; commit_sha: string; per_page?: number; page?: number };
const result: ReposListCommentsForCommitOutput = await github.repos.listCommentsForCommit(input);

// Result shape (from schema): ({ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; log...
```

### `github.repos.createCommitComment`

- **HTTP**: `POST /repos/{owner}/{repo}/commits/{commit_sha}/comments`
- **What it does**: Create a commit comment
- **OpenAPI operationId**: `repos/create-commit-comment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: string; path?: string; position?: number; line?: number; owner: string; repo: string; commit_sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; logi...`
- OpenAPI response codes: `201`, `403`, `422`

```ts
import github from "@utdk/github";

type ReposCreateCommitCommentInput = Parameters<typeof github.repos.createCommitComment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateCommitCommentOutput = Awaited<ReturnType<typeof github.repos.createCommitComment>>;

const input: ReposCreateCommitCommentInput = {} as { body: string; path?: string; position?: number; line?: number; owner: string; repo: string; commit_sha: string };
const result: ReposCreateCommitCommentOutput = await github.repos.createCommitComment(input);

// Result shape (from schema): { html_url: string; url: string; id: number; node_id: string; body: string; path: string | null; position: number | null; line: number | null; commit_id: string; user: { name?: string | null; email?: string | null; logi...
```

### `github.repos.listPullRequestsAssociatedWithCommit`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
- **What it does**: List pull requests associated with a commit
- **OpenAPI operationId**: `repos/list-pull-requests-associated-with-commit`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; commit_sha: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; ...`
- OpenAPI response codes: `200`, `409`

```ts
import github from "@utdk/github";

type ReposListPullRequestsAssociatedWithCommitInput = Parameters<typeof github.repos.listPullRequestsAssociatedWithCommit> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListPullRequestsAssociatedWithCommitOutput = Awaited<ReturnType<typeof github.repos.listPullRequestsAssociatedWithCommit>>;

const input: ReposListPullRequestsAssociatedWithCommitInput = {} as { owner: string; repo: string; commit_sha: string; per_page?: number; page?: number };
const result: ReposListPullRequestsAssociatedWithCommitOutput = await github.repos.listPullRequestsAssociatedWithCommit(input);

// Result shape (from schema): ({ url: string; id: number; node_id: string; html_url: string; diff_url: string; patch_url: string; issue_url: string; commits_url: string; review_comments_url: string; review_comment_url: string; comments_url: string; ...
```

### `github.repos.getCommit`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}`
- **What it does**: Get a commit
- **OpenAPI operationId**: `repos/get-commit`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `409`, `422`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; da...`
- OpenAPI response codes: `200`, `404`, `409`, `422`, `500`, `503`

```ts
import github from "@utdk/github";

type ReposGetCommitInput = Parameters<typeof github.repos.getCommit> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCommitOutput = Awaited<ReturnType<typeof github.repos.getCommit>>;

const input: ReposGetCommitInput = {} as { owner: string; repo: string; ref: string; page?: number; per_page?: number };
const result: ReposGetCommitOutput = await github.repos.getCommit(input);

// Result shape (from schema): { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; da...
```

### `github.repos.getCombinedStatusForRef`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}/status`
- **What it does**: Get the combined status for a specific reference
- **OpenAPI operationId**: `repos/get-combined-status-for-ref`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ state: string; statuses: ({ description: string | null; id: number; node_id: string; state: string; context: string; target_url: string | null; required?: boolean | null; avatar_url: string | null; url: string; create...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetCombinedStatusForRefInput = Parameters<typeof github.repos.getCombinedStatusForRef> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCombinedStatusForRefOutput = Awaited<ReturnType<typeof github.repos.getCombinedStatusForRef>>;

const input: ReposGetCombinedStatusForRefInput = {} as { owner: string; repo: string; ref: string; per_page?: number; page?: number };
const result: ReposGetCombinedStatusForRefOutput = await github.repos.getCombinedStatusForRef(input);

// Result shape (from schema): { state: string; statuses: ({ description: string | null; id: number; node_id: string; state: string; context: string; target_url: string | null; required?: boolean | null; avatar_url: string | null; url: string; create...
```

### `github.repos.listCommitStatusesForRef`

- **HTTP**: `GET /repos/{owner}/{repo}/commits/{ref}/statuses`
- **What it does**: List commit statuses for a reference
- **OpenAPI operationId**: `repos/list-commit-statuses-for-ref`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; avatar_url: string | null; id: number; node_id: string; state: string; description: string | null; target_url: string | null; context: string; created_at: string; updated_at: string; creator: { name?: st...`
- OpenAPI response codes: `200`, `301`

```ts
import github from "@utdk/github";

type ReposListCommitStatusesForRefInput = Parameters<typeof github.repos.listCommitStatusesForRef> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListCommitStatusesForRefOutput = Awaited<ReturnType<typeof github.repos.listCommitStatusesForRef>>;

const input: ReposListCommitStatusesForRefInput = {} as { owner: string; repo: string; ref: string; per_page?: number; page?: number };
const result: ReposListCommitStatusesForRefOutput = await github.repos.listCommitStatusesForRef(input);

// Result shape (from schema): ({ url: string; avatar_url: string | null; id: number; node_id: string; state: string; description: string | null; target_url: string | null; context: string; created_at: string; updated_at: string; creator: { name?: st...
```

### `github.repos.getCommunityProfileMetrics`

- **HTTP**: `GET /repos/{owner}/{repo}/community/profile`
- **What it does**: Get community profile metrics
- **OpenAPI operationId**: `repos/get-community-profile-metrics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ health_percentage: number; description: string | null; documentation: string | null; files: { code_of_conduct: { url: string; key: string; name: string; html_url: string | null } | null; code_of_conduct_file: { url: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetCommunityProfileMetricsInput = Parameters<typeof github.repos.getCommunityProfileMetrics> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCommunityProfileMetricsOutput = Awaited<ReturnType<typeof github.repos.getCommunityProfileMetrics>>;

const input: ReposGetCommunityProfileMetricsInput = {} as { owner: string; repo: string };
const result: ReposGetCommunityProfileMetricsOutput = await github.repos.getCommunityProfileMetrics(input);

// Result shape (from schema): { health_percentage: number; description: string | null; documentation: string | null; files: { code_of_conduct: { url: string; key: string; name: string; html_url: string | null } | null; code_of_conduct_file: { url: s...
```

### `github.repos.compareCommits`

- **HTTP**: `GET /repos/{owner}/{repo}/compare/{basehead}`
- **What it does**: Compare two commits
- **OpenAPI operationId**: `repos/compare-commits`
- **Path params**: `basehead`
- **Query params**: None
- **Response codes**: `200`, `404`, `500`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; basehead: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; permalink_url: string; diff_url: string; patch_url: string; base_commit: { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; autho...`
- OpenAPI response codes: `200`, `404`, `500`, `503`

```ts
import github from "@utdk/github";

type ReposCompareCommitsInput = Parameters<typeof github.repos.compareCommits> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCompareCommitsOutput = Awaited<ReturnType<typeof github.repos.compareCommits>>;

const input: ReposCompareCommitsInput = {} as { owner: string; repo: string; basehead: string; page?: number; per_page?: number };
const result: ReposCompareCommitsOutput = await github.repos.compareCommits(input);

// Result shape (from schema): { url: string; html_url: string; permalink_url: string; diff_url: string; patch_url: string; base_commit: { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; autho...
```

### `github.repos.deleteFile`

- **HTTP**: `DELETE /repos/{owner}/{repo}/contents/{path}`
- **What it does**: Delete a file
- **OpenAPI operationId**: `repos/delete-file`
- **Path params**: `path`
- **Query params**: None
- **Response codes**: `200`, `404`, `409`, `422`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ message: string; sha: string; branch?: string; committer?: { name?: string; email?: string }; author?: { name?: string; email?: string }; owner: string; repo: string; path: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ content: { name?: string; path?: string; sha?: string; size?: number; url?: string; html_url?: string; git_url?: string; download_url?: string; type?: string; _links?: { self?: string; git?: string; html?: string } } ...`
- OpenAPI response codes: `200`, `404`, `409`, `422`, `503`

```ts
import github from "@utdk/github";

type ReposDeleteFileInput = Parameters<typeof github.repos.deleteFile> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteFileOutput = Awaited<ReturnType<typeof github.repos.deleteFile>>;

const input: ReposDeleteFileInput = {} as { message: string; sha: string; branch?: string; committer?: { name?: string; email?: string }; author?: { name?: string; email?: string }; owner: string; repo: string; path: string };
const result: ReposDeleteFileOutput = await github.repos.deleteFile(input);

// Result shape (from schema): { content: { name?: string; path?: string; sha?: string; size?: number; url?: string; html_url?: string; git_url?: string; download_url?: string; type?: string; _links?: { self?: string; git?: string; html?: string } } ...
```

### `github.repos.getContent`

- **HTTP**: `GET /repos/{owner}/{repo}/contents/{path}`
- **What it does**: Get repository content
- **OpenAPI operationId**: `repos/get-content`
- **Path params**: `path`
- **Query params**: `ref`
- **Response codes**: `200`, `302`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; path: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `302`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type ReposGetContentInput = Parameters<typeof github.repos.getContent> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetContentOutput = Awaited<ReturnType<typeof github.repos.getContent>>;

const input: ReposGetContentInput = {} as { owner: string; repo: string; path: string; ref?: string };
const result: ReposGetContentOutput = await github.repos.getContent(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.repos.createOrUpdateFileContents`

- **HTTP**: `PUT /repos/{owner}/{repo}/contents/{path}`
- **What it does**: Create or update file contents
- **OpenAPI operationId**: `repos/create-or-update-file-contents`
- **Path params**: `path`
- **Query params**: None
- **Response codes**: `200`, `201`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ message: string; content: string; sha?: string; branch?: string; committer?: { name: string; email: string; date?: string }; author?: { name: string; email: string; date?: string }; owner: string; repo: string; path: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ content: { name?: string; path?: string; sha?: string; size?: number; url?: string; html_url?: string; git_url?: string; download_url?: string; type?: string; _links?: { self?: string; git?: string; html?: string } } ...`
- OpenAPI response codes: `200`, `201`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposCreateOrUpdateFileContentsInput = Parameters<typeof github.repos.createOrUpdateFileContents> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateOrUpdateFileContentsOutput = Awaited<ReturnType<typeof github.repos.createOrUpdateFileContents>>;

const input: ReposCreateOrUpdateFileContentsInput = {} as { message: string; content: string; sha?: string; branch?: string; committer?: { name: string; email: string; date?: string }; author?: { name: string; email: string; date?: string }; owner: string; repo: string; path: string };
const result: ReposCreateOrUpdateFileContentsOutput = await github.repos.createOrUpdateFileContents(input);

// Result shape (from schema): { content: { name?: string; path?: string; sha?: string; size?: number; url?: string; html_url?: string; git_url?: string; download_url?: string; type?: string; _links?: { self?: string; git?: string; html?: string } } ...
```

### `github.repos.listContributors`

- **HTTP**: `GET /repos/{owner}/{repo}/contributors`
- **What it does**: List repository contributors
- **OpenAPI operationId**: `repos/list-contributors`
- **Path params**: None
- **Query params**: `anon`
- **Response codes**: `200`, `204`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; anon?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ login?: string; id?: number; node_id?: string; avatar_url?: string; gravatar_id?: string | null; url?: string; html_url?: string; followers_url?: string; following_url?: string; gists_url?: string; starred_url?: stri...`
- OpenAPI response codes: `200`, `204`, `403`, `404`

```ts
import github from "@utdk/github";

type ReposListContributorsInput = Parameters<typeof github.repos.listContributors> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListContributorsOutput = Awaited<ReturnType<typeof github.repos.listContributors>>;

const input: ReposListContributorsInput = {} as { owner: string; repo: string; anon?: string; per_page?: number; page?: number };
const result: ReposListContributorsOutput = await github.repos.listContributors(input);

// Result shape (from schema): ({ login?: string; id?: number; node_id?: string; avatar_url?: string; gravatar_id?: string | null; url?: string; html_url?: string; followers_url?: string; following_url?: string; gists_url?: string; starred_url?: stri...
```

### `github.repos.listDeployments`

- **HTTP**: `GET /repos/{owner}/{repo}/deployments`
- **What it does**: List deployments
- **OpenAPI operationId**: `repos/list-deployments`
- **Path params**: None
- **Query params**: `sha`, `ref`, `task`, `environment`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sha?: string; ref?: string; task?: string; environment?: string | null; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListDeploymentsInput = Parameters<typeof github.repos.listDeployments> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListDeploymentsOutput = Awaited<ReturnType<typeof github.repos.listDeployments>>;

const input: ReposListDeploymentsInput = {} as { owner: string; repo: string; sha?: string; ref?: string; task?: string; environment?: string | null; per_page?: number; page?: number };
const result: ReposListDeploymentsOutput = await github.repos.listDeployments(input);

// Result shape (from schema): ({ url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator:...
```

### `github.repos.createDeployment`

- **HTTP**: `POST /repos/{owner}/{repo}/deployments`
- **What it does**: Create a deployment
- **OpenAPI operationId**: `repos/create-deployment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `202`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ref: string; task?: string; auto_merge?: boolean; required_contexts?: (string)[]; payload?: { [key: string]: unknown } | string; environment?: string; description?: string | null; transient_environment?: boolean; production_environment?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator: ...`
- OpenAPI response codes: `201`, `202`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposCreateDeploymentInput = Parameters<typeof github.repos.createDeployment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateDeploymentOutput = Awaited<ReturnType<typeof github.repos.createDeployment>>;

const input: ReposCreateDeploymentInput = {} as { ref: string; task?: string; auto_merge?: boolean; required_contexts?: (string)[]; payload?: { [key: string]: unknown } | string; environment?: string; description?: string | null; transient_environment?: boolean; production_environment?: boolean; owner: string; repo: string };
const result: ReposCreateDeploymentOutput = await github.repos.createDeployment(input);

// Result shape (from schema): { url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator: ...
```

### `github.repos.deleteDeployment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`
- **What it does**: Delete a deployment
- **OpenAPI operationId**: `repos/delete-deployment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; deployment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposDeleteDeploymentInput = Parameters<typeof github.repos.deleteDeployment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteDeploymentOutput = Awaited<ReturnType<typeof github.repos.deleteDeployment>>;

const input: ReposDeleteDeploymentInput = {} as { owner: string; repo: string; deployment_id: number };
const result: ReposDeleteDeploymentOutput = await github.repos.deleteDeployment(input);

// Result shape (from schema): unknown
```

### `github.repos.getDeployment`

- **HTTP**: `GET /repos/{owner}/{repo}/deployments/{deployment_id}`
- **What it does**: Get a deployment
- **OpenAPI operationId**: `repos/get-deployment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; deployment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator: ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetDeploymentInput = Parameters<typeof github.repos.getDeployment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetDeploymentOutput = Awaited<ReturnType<typeof github.repos.getDeployment>>;

const input: ReposGetDeploymentInput = {} as { owner: string; repo: string; deployment_id: number };
const result: ReposGetDeploymentOutput = await github.repos.getDeployment(input);

// Result shape (from schema): { url: string; id: number; node_id: string; sha: string; ref: string; task: string; payload: { [key: string]: unknown } | string; original_environment?: string; environment: string; description: string | null; creator: ...
```

### `github.repos.listDeploymentStatuses`

- **HTTP**: `GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`
- **What it does**: List deployment statuses
- **OpenAPI operationId**: `repos/list-deployment-statuses`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; deployment_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; id: number; node_id: string; state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress"; creator: { name?: string | null; email?: string | null; login: string; id: number;...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposListDeploymentStatusesInput = Parameters<typeof github.repos.listDeploymentStatuses> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListDeploymentStatusesOutput = Awaited<ReturnType<typeof github.repos.listDeploymentStatuses>>;

const input: ReposListDeploymentStatusesInput = {} as { owner: string; repo: string; deployment_id: number; per_page?: number; page?: number };
const result: ReposListDeploymentStatusesOutput = await github.repos.listDeploymentStatuses(input);

// Result shape (from schema): ({ url: string; id: number; node_id: string; state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress"; creator: { name?: string | null; email?: string | null; login: string; id: number;...
```

### `github.repos.createDeploymentStatus`

- **HTTP**: `POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`
- **What it does**: Create a deployment status
- **OpenAPI operationId**: `repos/create-deployment-status`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ state: "error" | "failure" | "inactive" | "in_progress" | "queued" | "pending" | "success"; target_url?: string; log_url?: string; description?: string; environment?: string; environment_url?: string; auto_inactive?: boolean; owner: string; repo: string; deployment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress"; creator: { name?: string | null; email?: string | null; login: string; id: number; ...`
- OpenAPI response codes: `201`, `422`

```ts
import github from "@utdk/github";

type ReposCreateDeploymentStatusInput = Parameters<typeof github.repos.createDeploymentStatus> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateDeploymentStatusOutput = Awaited<ReturnType<typeof github.repos.createDeploymentStatus>>;

const input: ReposCreateDeploymentStatusInput = {} as { state: "error" | "failure" | "inactive" | "in_progress" | "queued" | "pending" | "success"; target_url?: string; log_url?: string; description?: string; environment?: string; environment_url?: string; auto_inactive?: boolean; owner: string; repo: string; deployment_id: number };
const result: ReposCreateDeploymentStatusOutput = await github.repos.createDeploymentStatus(input);

// Result shape (from schema): { url: string; id: number; node_id: string; state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress"; creator: { name?: string | null; email?: string | null; login: string; id: number; ...
```

### `github.repos.getDeploymentStatus`

- **HTTP**: `GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`
- **What it does**: Get a deployment status
- **OpenAPI operationId**: `repos/get-deployment-status`
- **Path params**: `status_id`
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; deployment_id: number; status_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; id: number; node_id: string; state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress"; creator: { name?: string | null; email?: string | null; login: string; id: number; ...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetDeploymentStatusInput = Parameters<typeof github.repos.getDeploymentStatus> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetDeploymentStatusOutput = Awaited<ReturnType<typeof github.repos.getDeploymentStatus>>;

const input: ReposGetDeploymentStatusInput = {} as { owner: string; repo: string; deployment_id: number; status_id: number };
const result: ReposGetDeploymentStatusOutput = await github.repos.getDeploymentStatus(input);

// Result shape (from schema): { url: string; id: number; node_id: string; state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress"; creator: { name?: string | null; email?: string | null; login: string; id: number; ...
```

### `github.repos.createDispatchEvent`

- **HTTP**: `POST /repos/{owner}/{repo}/dispatches`
- **What it does**: Create a repository dispatch event
- **OpenAPI operationId**: `repos/create-dispatch-event`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ event_type: string; client_payload?: { [key: string]: unknown }; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCreateDispatchEventInput = Parameters<typeof github.repos.createDispatchEvent> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateDispatchEventOutput = Awaited<ReturnType<typeof github.repos.createDispatchEvent>>;

const input: ReposCreateDispatchEventInput = {} as { event_type: string; client_payload?: { [key: string]: unknown }; owner: string; repo: string };
const result: ReposCreateDispatchEventOutput = await github.repos.createDispatchEvent(input);

// Result shape (from schema): unknown
```

### `github.repos.getAllEnvironments`

- **HTTP**: `GET /repos/{owner}/{repo}/environments`
- **What it does**: List environments
- **OpenAPI operationId**: `repos/get-all-environments`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; environments?: ({ id: number; node_id: string; name: string; url: string; html_url: string; created_at: string; updated_at: string; protection_rules?: ({ id: number; node_id: string; type: string...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetAllEnvironmentsInput = Parameters<typeof github.repos.getAllEnvironments> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAllEnvironmentsOutput = Awaited<ReturnType<typeof github.repos.getAllEnvironments>>;

const input: ReposGetAllEnvironmentsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposGetAllEnvironmentsOutput = await github.repos.getAllEnvironments(input);

// Result shape (from schema): { total_count?: number; environments?: ({ id: number; node_id: string; name: string; url: string; html_url: string; created_at: string; updated_at: string; protection_rules?: ({ id: number; node_id: string; type: string...
```

### `github.repos.deleteAnEnvironment`

- **HTTP**: `DELETE /repos/{owner}/{repo}/environments/{environment_name}`
- **What it does**: Delete an environment
- **OpenAPI operationId**: `repos/delete-an-environment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDeleteAnEnvironmentInput = Parameters<typeof github.repos.deleteAnEnvironment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteAnEnvironmentOutput = Awaited<ReturnType<typeof github.repos.deleteAnEnvironment>>;

const input: ReposDeleteAnEnvironmentInput = {} as { owner: string; repo: string; environment_name: string };
const result: ReposDeleteAnEnvironmentOutput = await github.repos.deleteAnEnvironment(input);

// Result shape (from schema): unknown
```

### `github.repos.getEnvironment`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}`
- **What it does**: Get an environment
- **OpenAPI operationId**: `repos/get-environment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; url: string; html_url: string; created_at: string; updated_at: string; protection_rules?: ({ id: number; node_id: string; type: string; wait_timer?: number } | { id: number; ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetEnvironmentInput = Parameters<typeof github.repos.getEnvironment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetEnvironmentOutput = Awaited<ReturnType<typeof github.repos.getEnvironment>>;

const input: ReposGetEnvironmentInput = {} as { owner: string; repo: string; environment_name: string };
const result: ReposGetEnvironmentOutput = await github.repos.getEnvironment(input);

// Result shape (from schema): { id: number; node_id: string; name: string; url: string; html_url: string; created_at: string; updated_at: string; protection_rules?: ({ id: number; node_id: string; type: string; wait_timer?: number } | { id: number; ...
```

### `github.repos.createOrUpdateEnvironment`

- **HTTP**: `PUT /repos/{owner}/{repo}/environments/{environment_name}`
- **What it does**: Create or update an environment
- **OpenAPI operationId**: `repos/create-or-update-environment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ wait_timer?: number; prevent_self_review?: boolean; reviewers?: ({ type?: "User" | "Team"; id?: number })[] | null; deployment_branch_policy?: { protected_branches: boolean; custom_branch_policies: boolean } | null; owner: string; repo: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; url: string; html_url: string; created_at: string; updated_at: string; protection_rules?: ({ id: number; node_id: string; type: string; wait_timer?: number } | { id: number; ...`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposCreateOrUpdateEnvironmentInput = Parameters<typeof github.repos.createOrUpdateEnvironment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateOrUpdateEnvironmentOutput = Awaited<ReturnType<typeof github.repos.createOrUpdateEnvironment>>;

const input: ReposCreateOrUpdateEnvironmentInput = {} as { wait_timer?: number; prevent_self_review?: boolean; reviewers?: ({ type?: "User" | "Team"; id?: number })[] | null; deployment_branch_policy?: { protected_branches: boolean; custom_branch_policies: boolean } | null; owner: string; repo: string; environment_name: string };
const result: ReposCreateOrUpdateEnvironmentOutput = await github.repos.createOrUpdateEnvironment(input);

// Result shape (from schema): { id: number; node_id: string; name: string; url: string; html_url: string; created_at: string; updated_at: string; protection_rules?: ({ id: number; node_id: string; type: string; wait_timer?: number } | { id: number; ...
```

### `github.repos.getAllDeploymentProtectionRules`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules`
- **What it does**: Get all deployment protection rules for an environment
- **OpenAPI operationId**: `repos/get-all-deployment-protection-rules`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ environment_name: string; repo: string; owner: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; custom_deployment_protection_rules?: ({ id: number; node_id: string; enabled: boolean; app: { id: number; slug: string; integration_url: string; node_id: string } })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetAllDeploymentProtectionRulesInput = Parameters<typeof github.repos.getAllDeploymentProtectionRules> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAllDeploymentProtectionRulesOutput = Awaited<ReturnType<typeof github.repos.getAllDeploymentProtectionRules>>;

const input: ReposGetAllDeploymentProtectionRulesInput = {} as { environment_name: string; repo: string; owner: string };
const result: ReposGetAllDeploymentProtectionRulesOutput = await github.repos.getAllDeploymentProtectionRules(input);

// Result shape (from schema): { total_count?: number; custom_deployment_protection_rules?: ({ id: number; node_id: string; enabled: boolean; app: { id: number; slug: string; integration_url: string; node_id: string } })[] }
```

### `github.repos.createDeploymentProtectionRule`

- **HTTP**: `POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules`
- **What it does**: Create a custom deployment protection rule on an environment
- **OpenAPI operationId**: `repos/create-deployment-protection-rule`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ integration_id?: number; environment_name: string; repo: string; owner: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; enabled: boolean; app: { id: number; slug: string; integration_url: string; node_id: string } }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ReposCreateDeploymentProtectionRuleInput = Parameters<typeof github.repos.createDeploymentProtectionRule> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateDeploymentProtectionRuleOutput = Awaited<ReturnType<typeof github.repos.createDeploymentProtectionRule>>;

const input: ReposCreateDeploymentProtectionRuleInput = {} as { integration_id?: number; environment_name: string; repo: string; owner: string };
const result: ReposCreateDeploymentProtectionRuleOutput = await github.repos.createDeploymentProtectionRule(input);

// Result shape (from schema): { id: number; node_id: string; enabled: boolean; app: { id: number; slug: string; integration_url: string; node_id: string } }
```

### `github.repos.disableDeploymentProtectionRule`

- **HTTP**: `DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}`
- **What it does**: Disable a custom protection rule for an environment
- **OpenAPI operationId**: `repos/disable-deployment-protection-rule`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ environment_name: string; repo: string; owner: string; protection_rule_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDisableDeploymentProtectionRuleInput = Parameters<typeof github.repos.disableDeploymentProtectionRule> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDisableDeploymentProtectionRuleOutput = Awaited<ReturnType<typeof github.repos.disableDeploymentProtectionRule>>;

const input: ReposDisableDeploymentProtectionRuleInput = {} as { environment_name: string; repo: string; owner: string; protection_rule_id: number };
const result: ReposDisableDeploymentProtectionRuleOutput = await github.repos.disableDeploymentProtectionRule(input);

// Result shape (from schema): unknown
```

### `github.repos.getCustomDeploymentProtectionRule`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}`
- **What it does**: Get a custom deployment protection rule
- **OpenAPI operationId**: `repos/get-custom-deployment-protection-rule`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; protection_rule_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; enabled: boolean; app: { id: number; slug: string; integration_url: string; node_id: string } }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetCustomDeploymentProtectionRuleInput = Parameters<typeof github.repos.getCustomDeploymentProtectionRule> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCustomDeploymentProtectionRuleOutput = Awaited<ReturnType<typeof github.repos.getCustomDeploymentProtectionRule>>;

const input: ReposGetCustomDeploymentProtectionRuleInput = {} as { owner: string; repo: string; environment_name: string; protection_rule_id: number };
const result: ReposGetCustomDeploymentProtectionRuleOutput = await github.repos.getCustomDeploymentProtectionRule(input);

// Result shape (from schema): { id: number; node_id: string; enabled: boolean; app: { id: number; slug: string; integration_url: string; node_id: string } }
```

### `github.repos.listCustomDeploymentRuleIntegrations`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps`
- **What it does**: List custom deployment rule integrations available for an environment
- **OpenAPI operationId**: `repos/list-custom-deployment-rule-integrations`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ environment_name: string; repo: string; owner: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count?: number; available_custom_deployment_protection_rule_integrations?: ({ id: number; slug: string; integration_url: string; node_id: string })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListCustomDeploymentRuleIntegrationsInput = Parameters<typeof github.repos.listCustomDeploymentRuleIntegrations> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListCustomDeploymentRuleIntegrationsOutput = Awaited<ReturnType<typeof github.repos.listCustomDeploymentRuleIntegrations>>;

const input: ReposListCustomDeploymentRuleIntegrationsInput = {} as { environment_name: string; repo: string; owner: string; page?: number; per_page?: number };
const result: ReposListCustomDeploymentRuleIntegrationsOutput = await github.repos.listCustomDeploymentRuleIntegrations(input);

// Result shape (from schema): { total_count?: number; available_custom_deployment_protection_rule_integrations?: ({ id: number; slug: string; integration_url: string; node_id: string })[] }
```

### `github.repos.listDeploymentBranchPolicies`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`
- **What it does**: List deployment branch policies
- **OpenAPI operationId**: `repos/list-deployment-branch-policies`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ total_count: number; branch_policies: ({ id?: number; node_id?: string; name?: string; type?: "branch" | "tag" })[] }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListDeploymentBranchPoliciesInput = Parameters<typeof github.repos.listDeploymentBranchPolicies> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListDeploymentBranchPoliciesOutput = Awaited<ReturnType<typeof github.repos.listDeploymentBranchPolicies>>;

const input: ReposListDeploymentBranchPoliciesInput = {} as { owner: string; repo: string; environment_name: string; per_page?: number; page?: number };
const result: ReposListDeploymentBranchPoliciesOutput = await github.repos.listDeploymentBranchPolicies(input);

// Result shape (from schema): { total_count: number; branch_policies: ({ id?: number; node_id?: string; name?: string; type?: "branch" | "tag" })[] }
```

### `github.repos.createDeploymentBranchPolicy`

- **HTTP**: `POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`
- **What it does**: Create a deployment branch policy
- **OpenAPI operationId**: `repos/create-deployment-branch-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `303`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; type?: "branch" | "tag"; owner: string; repo: string; environment_name: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; node_id?: string; name?: string; type?: "branch" | "tag" }`
- OpenAPI response codes: `200`, `303`, `404`

```ts
import github from "@utdk/github";

type ReposCreateDeploymentBranchPolicyInput = Parameters<typeof github.repos.createDeploymentBranchPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateDeploymentBranchPolicyOutput = Awaited<ReturnType<typeof github.repos.createDeploymentBranchPolicy>>;

const input: ReposCreateDeploymentBranchPolicyInput = {} as { name: string; type?: "branch" | "tag"; owner: string; repo: string; environment_name: string };
const result: ReposCreateDeploymentBranchPolicyOutput = await github.repos.createDeploymentBranchPolicy(input);

// Result shape (from schema): { id?: number; node_id?: string; name?: string; type?: "branch" | "tag" }
```

### `github.repos.deleteDeploymentBranchPolicy`

- **HTTP**: `DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`
- **What it does**: Delete a deployment branch policy
- **OpenAPI operationId**: `repos/delete-deployment-branch-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; branch_policy_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDeleteDeploymentBranchPolicyInput = Parameters<typeof github.repos.deleteDeploymentBranchPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteDeploymentBranchPolicyOutput = Awaited<ReturnType<typeof github.repos.deleteDeploymentBranchPolicy>>;

const input: ReposDeleteDeploymentBranchPolicyInput = {} as { owner: string; repo: string; environment_name: string; branch_policy_id: number };
const result: ReposDeleteDeploymentBranchPolicyOutput = await github.repos.deleteDeploymentBranchPolicy(input);

// Result shape (from schema): unknown
```

### `github.repos.getDeploymentBranchPolicy`

- **HTTP**: `GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`
- **What it does**: Get a deployment branch policy
- **OpenAPI operationId**: `repos/get-deployment-branch-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; environment_name: string; branch_policy_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; node_id?: string; name?: string; type?: "branch" | "tag" }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetDeploymentBranchPolicyInput = Parameters<typeof github.repos.getDeploymentBranchPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetDeploymentBranchPolicyOutput = Awaited<ReturnType<typeof github.repos.getDeploymentBranchPolicy>>;

const input: ReposGetDeploymentBranchPolicyInput = {} as { owner: string; repo: string; environment_name: string; branch_policy_id: number };
const result: ReposGetDeploymentBranchPolicyOutput = await github.repos.getDeploymentBranchPolicy(input);

// Result shape (from schema): { id?: number; node_id?: string; name?: string; type?: "branch" | "tag" }
```

### `github.repos.updateDeploymentBranchPolicy`

- **HTTP**: `PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`
- **What it does**: Update a deployment branch policy
- **OpenAPI operationId**: `repos/update-deployment-branch-policy`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; owner: string; repo: string; environment_name: string; branch_policy_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; node_id?: string; name?: string; type?: "branch" | "tag" }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposUpdateDeploymentBranchPolicyInput = Parameters<typeof github.repos.updateDeploymentBranchPolicy> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateDeploymentBranchPolicyOutput = Awaited<ReturnType<typeof github.repos.updateDeploymentBranchPolicy>>;

const input: ReposUpdateDeploymentBranchPolicyInput = {} as { name: string; owner: string; repo: string; environment_name: string; branch_policy_id: number };
const result: ReposUpdateDeploymentBranchPolicyOutput = await github.repos.updateDeploymentBranchPolicy(input);

// Result shape (from schema): { id?: number; node_id?: string; name?: string; type?: "branch" | "tag" }
```

### `github.repos.listForks`

- **HTTP**: `GET /repos/{owner}/{repo}/forks`
- **What it does**: List forks
- **OpenAPI operationId**: `repos/list-forks`
- **Path params**: None
- **Query params**: `sort`
- **Response codes**: `200`, `400`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; sort?: "newest" | "oldest" | "stargazers" | "watchers"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `400`

```ts
import github from "@utdk/github";

type ReposListForksInput = Parameters<typeof github.repos.listForks> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListForksOutput = Awaited<ReturnType<typeof github.repos.listForks>>;

const input: ReposListForksInput = {} as { owner: string; repo: string; sort?: "newest" | "oldest" | "stargazers" | "watchers"; per_page?: number; page?: number };
const result: ReposListForksOutput = await github.repos.listForks(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.repos.createFork`

- **HTTP**: `POST /repos/{owner}/{repo}/forks`
- **What it does**: Create a fork
- **OpenAPI operationId**: `repos/create-fork`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ organization?: string; name?: string; default_branch_only?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCreateForkInput = Parameters<typeof github.repos.createFork> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateForkOutput = Awaited<ReturnType<typeof github.repos.createFork>>;

const input: ReposCreateForkInput = {} as { organization?: string; name?: string; default_branch_only?: boolean; owner: string; repo: string };
const result: ReposCreateForkOutput = await github.repos.createFork(input);

// Result shape (from schema): unknown
```

### `github.repos.getHashAlgorithm`

- **HTTP**: `GET /repos/{owner}/{repo}/hash-algorithm`
- **What it does**: Get the hash algorithm for a repository
- **OpenAPI operationId**: `repos/get-hash-algorithm`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ hash_algorithm: "sha1" | "sha256" }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ReposGetHashAlgorithmInput = Parameters<typeof github.repos.getHashAlgorithm> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetHashAlgorithmOutput = Awaited<ReturnType<typeof github.repos.getHashAlgorithm>>;

const input: ReposGetHashAlgorithmInput = {} as { owner: string; repo: string };
const result: ReposGetHashAlgorithmOutput = await github.repos.getHashAlgorithm(input);

// Result shape (from schema): { hash_algorithm: "sha1" | "sha256" }
```

### `github.repos.listWebhooks`

- **HTTP**: `GET /repos/{owner}/{repo}/hooks`
- **What it does**: List repository webhooks
- **OpenAPI operationId**: `repos/list-webhooks`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; u...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposListWebhooksInput = Parameters<typeof github.repos.listWebhooks> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListWebhooksOutput = Awaited<ReturnType<typeof github.repos.listWebhooks>>;

const input: ReposListWebhooksInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListWebhooksOutput = await github.repos.listWebhooks(input);

// Result shape (from schema): ({ type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; u...
```

### `github.repos.createWebhook`

- **HTTP**: `POST /repos/{owner}/{repo}/hooks`
- **What it does**: Create a repository webhook
- **OpenAPI operationId**: `repos/create-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; config?: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; events?: (string)[]; active?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; ur...`
- OpenAPI response codes: `201`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCreateWebhookInput = Parameters<typeof github.repos.createWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateWebhookOutput = Awaited<ReturnType<typeof github.repos.createWebhook>>;

const input: ReposCreateWebhookInput = {} as { name?: string; config?: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; events?: (string)[]; active?: boolean; owner: string; repo: string };
const result: ReposCreateWebhookOutput = await github.repos.createWebhook(input);

// Result shape (from schema): { type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; ur...
```

### `github.repos.deleteWebhook`

- **HTTP**: `DELETE /repos/{owner}/{repo}/hooks/{hook_id}`
- **What it does**: Delete a repository webhook
- **OpenAPI operationId**: `repos/delete-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteWebhookInput = Parameters<typeof github.repos.deleteWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteWebhookOutput = Awaited<ReturnType<typeof github.repos.deleteWebhook>>;

const input: ReposDeleteWebhookInput = {} as { owner: string; repo: string; hook_id: number };
const result: ReposDeleteWebhookOutput = await github.repos.deleteWebhook(input);

// Result shape (from schema): unknown
```

### `github.repos.getWebhook`

- **HTTP**: `GET /repos/{owner}/{repo}/hooks/{hook_id}`
- **What it does**: Get a repository webhook
- **OpenAPI operationId**: `repos/get-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; ur...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetWebhookInput = Parameters<typeof github.repos.getWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetWebhookOutput = Awaited<ReturnType<typeof github.repos.getWebhook>>;

const input: ReposGetWebhookInput = {} as { owner: string; repo: string; hook_id: number };
const result: ReposGetWebhookOutput = await github.repos.getWebhook(input);

// Result shape (from schema): { type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; ur...
```

### `github.repos.updateWebhook`

- **HTTP**: `PATCH /repos/{owner}/{repo}/hooks/{hook_id}`
- **What it does**: Update a repository webhook
- **OpenAPI operationId**: `repos/update-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ config?: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; events?: (string)[]; add_events?: (string)[]; remove_events?: (string)[]; active?: boolean; owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; ur...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposUpdateWebhookInput = Parameters<typeof github.repos.updateWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateWebhookOutput = Awaited<ReturnType<typeof github.repos.updateWebhook>>;

const input: ReposUpdateWebhookInput = {} as { config?: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; events?: (string)[]; add_events?: (string)[]; remove_events?: (string)[]; active?: boolean; owner: string; repo: string; hook_id: number };
const result: ReposUpdateWebhookOutput = await github.repos.updateWebhook(input);

// Result shape (from schema): { type: string; id: number; name: string; active: boolean; events: (string)[]; config: { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }; updated_at: string; created_at: string; ur...
```

### `github.repos.getWebhookConfigForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/hooks/{hook_id}/config`
- **What it does**: Get a webhook configuration for a repository
- **OpenAPI operationId**: `repos/get-webhook-config-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetWebhookConfigForRepoInput = Parameters<typeof github.repos.getWebhookConfigForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetWebhookConfigForRepoOutput = Awaited<ReturnType<typeof github.repos.getWebhookConfigForRepo>>;

const input: ReposGetWebhookConfigForRepoInput = {} as { owner: string; repo: string; hook_id: number };
const result: ReposGetWebhookConfigForRepoOutput = await github.repos.getWebhookConfigForRepo(input);

// Result shape (from schema): { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }
```

### `github.repos.updateWebhookConfigForRepo`

- **HTTP**: `PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`
- **What it does**: Update a webhook configuration for a repository
- **OpenAPI operationId**: `repos/update-webhook-config-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number; owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposUpdateWebhookConfigForRepoInput = Parameters<typeof github.repos.updateWebhookConfigForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateWebhookConfigForRepoOutput = Awaited<ReturnType<typeof github.repos.updateWebhookConfigForRepo>>;

const input: ReposUpdateWebhookConfigForRepoInput = {} as { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number; owner: string; repo: string; hook_id: number };
const result: ReposUpdateWebhookConfigForRepoOutput = await github.repos.updateWebhookConfigForRepo(input);

// Result shape (from schema): { url?: string; content_type?: string; secret?: string; insecure_ssl?: string | number }
```

### `github.repos.listWebhookDeliveries`

- **HTTP**: `GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`
- **What it does**: List deliveries for a repository webhook
- **OpenAPI operationId**: `repos/list-webhook-deliveries`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number; per_page?: number; cursor?: string; status?: "success" | "failure" }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number ...`
- OpenAPI response codes: `200`, `400`, `422`

```ts
import github from "@utdk/github";

type ReposListWebhookDeliveriesInput = Parameters<typeof github.repos.listWebhookDeliveries> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListWebhookDeliveriesOutput = Awaited<ReturnType<typeof github.repos.listWebhookDeliveries>>;

const input: ReposListWebhookDeliveriesInput = {} as { owner: string; repo: string; hook_id: number; per_page?: number; cursor?: string; status?: "success" | "failure" };
const result: ReposListWebhookDeliveriesOutput = await github.repos.listWebhookDeliveries(input);

// Result shape (from schema): ({ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number ...
```

### `github.repos.getWebhookDelivery`

- **HTTP**: `GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`
- **What it does**: Get a delivery for a repository webhook
- **OpenAPI operationId**: `repos/get-webhook-delivery`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number; delivery_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number |...`
- OpenAPI response codes: `200`, `400`, `422`

```ts
import github from "@utdk/github";

type ReposGetWebhookDeliveryInput = Parameters<typeof github.repos.getWebhookDelivery> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetWebhookDeliveryOutput = Awaited<ReturnType<typeof github.repos.getWebhookDelivery>>;

const input: ReposGetWebhookDeliveryInput = {} as { owner: string; repo: string; hook_id: number; delivery_id: number };
const result: ReposGetWebhookDeliveryOutput = await github.repos.getWebhookDelivery(input);

// Result shape (from schema): { id: number; guid: string; delivered_at: string; redelivery: boolean; duration: number; status: string; status_code: number; event: string; action: string | null; installation_id: number | null; repository_id: number |...
```

### `github.repos.redeliverWebhookDelivery`

- **HTTP**: `POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`
- **What it does**: Redeliver a delivery for a repository webhook
- **OpenAPI operationId**: `repos/redeliver-webhook-delivery`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `400`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number; delivery_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `400`, `422`

```ts
import github from "@utdk/github";

type ReposRedeliverWebhookDeliveryInput = Parameters<typeof github.repos.redeliverWebhookDelivery> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRedeliverWebhookDeliveryOutput = Awaited<ReturnType<typeof github.repos.redeliverWebhookDelivery>>;

const input: ReposRedeliverWebhookDeliveryInput = {} as { owner: string; repo: string; hook_id: number; delivery_id: number };
const result: ReposRedeliverWebhookDeliveryOutput = await github.repos.redeliverWebhookDelivery(input);

// Result shape (from schema): unknown
```

### `github.repos.pingWebhook`

- **HTTP**: `POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`
- **What it does**: Ping a repository webhook
- **OpenAPI operationId**: `repos/ping-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposPingWebhookInput = Parameters<typeof github.repos.pingWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type ReposPingWebhookOutput = Awaited<ReturnType<typeof github.repos.pingWebhook>>;

const input: ReposPingWebhookInput = {} as { owner: string; repo: string; hook_id: number };
const result: ReposPingWebhookOutput = await github.repos.pingWebhook(input);

// Result shape (from schema): unknown
```

### `github.repos.testPushWebhook`

- **HTTP**: `POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`
- **What it does**: Test the push repository webhook
- **OpenAPI operationId**: `repos/test-push-webhook`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; hook_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposTestPushWebhookInput = Parameters<typeof github.repos.testPushWebhook> extends [infer T, ...unknown[]] ? T : undefined;
type ReposTestPushWebhookOutput = Awaited<ReturnType<typeof github.repos.testPushWebhook>>;

const input: ReposTestPushWebhookInput = {} as { owner: string; repo: string; hook_id: number };
const result: ReposTestPushWebhookOutput = await github.repos.testPushWebhook(input);

// Result shape (from schema): unknown
```

### `github.repos.disableImmutableReleases`

- **HTTP**: `DELETE /repos/{owner}/{repo}/immutable-releases`
- **What it does**: Disable immutable releases
- **OpenAPI operationId**: `repos/disable-immutable-releases`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ReposDisableImmutableReleasesInput = Parameters<typeof github.repos.disableImmutableReleases> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDisableImmutableReleasesOutput = Awaited<ReturnType<typeof github.repos.disableImmutableReleases>>;

const input: ReposDisableImmutableReleasesInput = {} as { owner: string; repo: string };
const result: ReposDisableImmutableReleasesOutput = await github.repos.disableImmutableReleases(input);

// Result shape (from schema): unknown
```

### `github.repos.checkImmutableReleases`

- **HTTP**: `GET /repos/{owner}/{repo}/immutable-releases`
- **What it does**: Check if immutable releases are enabled for a repository
- **OpenAPI operationId**: `repos/check-immutable-releases`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enabled: boolean; enforced_by_owner: boolean }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposCheckImmutableReleasesInput = Parameters<typeof github.repos.checkImmutableReleases> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCheckImmutableReleasesOutput = Awaited<ReturnType<typeof github.repos.checkImmutableReleases>>;

const input: ReposCheckImmutableReleasesInput = {} as { owner: string; repo: string };
const result: ReposCheckImmutableReleasesOutput = await github.repos.checkImmutableReleases(input);

// Result shape (from schema): { enabled: boolean; enforced_by_owner: boolean }
```

### `github.repos.enableImmutableReleases`

- **HTTP**: `PUT /repos/{owner}/{repo}/immutable-releases`
- **What it does**: Enable immutable releases
- **OpenAPI operationId**: `repos/enable-immutable-releases`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `409`

```ts
import github from "@utdk/github";

type ReposEnableImmutableReleasesInput = Parameters<typeof github.repos.enableImmutableReleases> extends [infer T, ...unknown[]] ? T : undefined;
type ReposEnableImmutableReleasesOutput = Awaited<ReturnType<typeof github.repos.enableImmutableReleases>>;

const input: ReposEnableImmutableReleasesInput = {} as { owner: string; repo: string };
const result: ReposEnableImmutableReleasesOutput = await github.repos.enableImmutableReleases(input);

// Result shape (from schema): unknown
```

### `github.repos.listInvitations`

- **HTTP**: `GET /repos/{owner}/{repo}/invitations`
- **What it does**: List repository invitations
- **OpenAPI operationId**: `repos/list-invitations`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListInvitationsInput = Parameters<typeof github.repos.listInvitations> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListInvitationsOutput = Awaited<ReturnType<typeof github.repos.listInvitations>>;

const input: ReposListInvitationsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListInvitationsOutput = await github.repos.listInvitations(input);

// Result shape (from schema): ({ id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...
```

### `github.repos.deleteInvitation`

- **HTTP**: `DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`
- **What it does**: Delete a repository invitation
- **OpenAPI operationId**: `repos/delete-invitation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; invitation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDeleteInvitationInput = Parameters<typeof github.repos.deleteInvitation> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteInvitationOutput = Awaited<ReturnType<typeof github.repos.deleteInvitation>>;

const input: ReposDeleteInvitationInput = {} as { owner: string; repo: string; invitation_id: number };
const result: ReposDeleteInvitationOutput = await github.repos.deleteInvitation(input);

// Result shape (from schema): unknown
```

### `github.repos.updateInvitation`

- **HTTP**: `PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`
- **What it does**: Update a repository invitation
- **OpenAPI operationId**: `repos/update-invitation`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ permissions?: "read" | "write" | "maintain" | "triage" | "admin"; owner: string; repo: string; invitation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposUpdateInvitationInput = Parameters<typeof github.repos.updateInvitation> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateInvitationOutput = Awaited<ReturnType<typeof github.repos.updateInvitation>>;

const input: ReposUpdateInvitationInput = {} as { permissions?: "read" | "write" | "maintain" | "triage" | "admin"; owner: string; repo: string; invitation_id: number };
const result: ReposUpdateInvitationOutput = await github.repos.updateInvitation(input);

// Result shape (from schema): { id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id...
```

### `github.repos.listDeployKeys`

- **HTTP**: `GET /repos/{owner}/{repo}/keys`
- **What it does**: List deploy keys
- **OpenAPI operationId**: `repos/list-deploy-keys`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; key: string; url: string; title: string; verified: boolean; created_at: string; read_only: boolean; added_by?: string | null; last_used?: string | null; enabled?: boolean })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListDeployKeysInput = Parameters<typeof github.repos.listDeployKeys> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListDeployKeysOutput = Awaited<ReturnType<typeof github.repos.listDeployKeys>>;

const input: ReposListDeployKeysInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListDeployKeysOutput = await github.repos.listDeployKeys(input);

// Result shape (from schema): ({ id: number; key: string; url: string; title: string; verified: boolean; created_at: string; read_only: boolean; added_by?: string | null; last_used?: string | null; enabled?: boolean })[]
```

### `github.repos.createDeployKey`

- **HTTP**: `POST /repos/{owner}/{repo}/keys`
- **What it does**: Create a deploy key
- **OpenAPI operationId**: `repos/create-deploy-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ title?: string; key: string; read_only?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; key: string; url: string; title: string; verified: boolean; created_at: string; read_only: boolean; added_by?: string | null; last_used?: string | null; enabled?: boolean }`
- OpenAPI response codes: `201`, `422`

```ts
import github from "@utdk/github";

type ReposCreateDeployKeyInput = Parameters<typeof github.repos.createDeployKey> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateDeployKeyOutput = Awaited<ReturnType<typeof github.repos.createDeployKey>>;

const input: ReposCreateDeployKeyInput = {} as { title?: string; key: string; read_only?: boolean; owner: string; repo: string };
const result: ReposCreateDeployKeyOutput = await github.repos.createDeployKey(input);

// Result shape (from schema): { id: number; key: string; url: string; title: string; verified: boolean; created_at: string; read_only: boolean; added_by?: string | null; last_used?: string | null; enabled?: boolean }
```

### `github.repos.deleteDeployKey`

- **HTTP**: `DELETE /repos/{owner}/{repo}/keys/{key_id}`
- **What it does**: Delete a deploy key
- **OpenAPI operationId**: `repos/delete-deploy-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDeleteDeployKeyInput = Parameters<typeof github.repos.deleteDeployKey> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteDeployKeyOutput = Awaited<ReturnType<typeof github.repos.deleteDeployKey>>;

const input: ReposDeleteDeployKeyInput = {} as { owner: string; repo: string; key_id: number };
const result: ReposDeleteDeployKeyOutput = await github.repos.deleteDeployKey(input);

// Result shape (from schema): unknown
```

### `github.repos.getDeployKey`

- **HTTP**: `GET /repos/{owner}/{repo}/keys/{key_id}`
- **What it does**: Get a deploy key
- **OpenAPI operationId**: `repos/get-deploy-key`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; key_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; key: string; url: string; title: string; verified: boolean; created_at: string; read_only: boolean; added_by?: string | null; last_used?: string | null; enabled?: boolean }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetDeployKeyInput = Parameters<typeof github.repos.getDeployKey> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetDeployKeyOutput = Awaited<ReturnType<typeof github.repos.getDeployKey>>;

const input: ReposGetDeployKeyInput = {} as { owner: string; repo: string; key_id: number };
const result: ReposGetDeployKeyOutput = await github.repos.getDeployKey(input);

// Result shape (from schema): { id: number; key: string; url: string; title: string; verified: boolean; created_at: string; read_only: boolean; added_by?: string | null; last_used?: string | null; enabled?: boolean }
```

### `github.repos.listLanguages`

- **HTTP**: `GET /repos/{owner}/{repo}/languages`
- **What it does**: List repository languages
- **OpenAPI operationId**: `repos/list-languages`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListLanguagesInput = Parameters<typeof github.repos.listLanguages> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListLanguagesOutput = Awaited<ReturnType<typeof github.repos.listLanguages>>;

const input: ReposListLanguagesInput = {} as { owner: string; repo: string };
const result: ReposListLanguagesOutput = await github.repos.listLanguages(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.repos.mergeUpstream`

- **HTTP**: `POST /repos/{owner}/{repo}/merge-upstream`
- **What it does**: Sync a fork branch with the upstream repository
- **OpenAPI operationId**: `repos/merge-upstream`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ branch: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ message?: string; merge_type?: "merge" | "fast-forward" | "none"; base_branch?: string }`
- OpenAPI response codes: `200`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposMergeUpstreamInput = Parameters<typeof github.repos.mergeUpstream> extends [infer T, ...unknown[]] ? T : undefined;
type ReposMergeUpstreamOutput = Awaited<ReturnType<typeof github.repos.mergeUpstream>>;

const input: ReposMergeUpstreamInput = {} as { branch: string; owner: string; repo: string };
const result: ReposMergeUpstreamOutput = await github.repos.mergeUpstream(input);

// Result shape (from schema): { message?: string; merge_type?: "merge" | "fast-forward" | "none"; base_branch?: string }
```

### `github.repos.merge`

- **HTTP**: `POST /repos/{owner}/{repo}/merges`
- **What it does**: Merge a branch
- **OpenAPI operationId**: `repos/merge`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `204`, `403`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ base: string; head: string; commit_message?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; da...`
- OpenAPI response codes: `201`, `204`, `403`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposMergeInput = Parameters<typeof github.repos.merge> extends [infer T, ...unknown[]] ? T : undefined;
type ReposMergeOutput = Awaited<ReturnType<typeof github.repos.merge>>;

const input: ReposMergeInput = {} as { base: string; head: string; commit_message?: string; owner: string; repo: string };
const result: ReposMergeOutput = await github.repos.merge(input);

// Result shape (from schema): { url: string; sha: string; node_id: string; html_url: string; comments_url: string; commit: { url: string; author: { name?: string; email?: string; date?: string } | null; committer: { name?: string; email?: string; da...
```

### `github.repos.deletePagesSite`

- **HTTP**: `DELETE /repos/{owner}/{repo}/pages`
- **What it does**: Delete a GitHub Pages site
- **OpenAPI operationId**: `repos/delete-pages-site`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposDeletePagesSiteInput = Parameters<typeof github.repos.deletePagesSite> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeletePagesSiteOutput = Awaited<ReturnType<typeof github.repos.deletePagesSite>>;

const input: ReposDeletePagesSiteInput = {} as { owner: string; repo: string };
const result: ReposDeletePagesSiteOutput = await github.repos.deletePagesSite(input);

// Result shape (from schema): unknown
```

### `github.repos.getPages`

- **HTTP**: `GET /repos/{owner}/{repo}/pages`
- **What it does**: Get a GitHub Pages site
- **OpenAPI operationId**: `repos/get-pages`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; status: "built" | "building" | "errored" | null; cname: string | null; protected_domain_state?: "pending" | "verified" | "unverified" | null; pending_domain_unverified_at?: string | null; custom_404: bool...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetPagesInput = Parameters<typeof github.repos.getPages> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetPagesOutput = Awaited<ReturnType<typeof github.repos.getPages>>;

const input: ReposGetPagesInput = {} as { owner: string; repo: string };
const result: ReposGetPagesOutput = await github.repos.getPages(input);

// Result shape (from schema): { url: string; status: "built" | "building" | "errored" | null; cname: string | null; protected_domain_state?: "pending" | "verified" | "unverified" | null; pending_domain_unverified_at?: string | null; custom_404: bool...
```

### `github.repos.createPagesSite`

- **HTTP**: `POST /repos/{owner}/{repo}/pages`
- **What it does**: Create a GitHub Pages site
- **OpenAPI operationId**: `repos/create-pages-site`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown | null; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; status: "built" | "building" | "errored" | null; cname: string | null; protected_domain_state?: "pending" | "verified" | "unverified" | null; pending_domain_unverified_at?: string | null; custom_404: bool...`
- OpenAPI response codes: `201`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposCreatePagesSiteInput = Parameters<typeof github.repos.createPagesSite> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreatePagesSiteOutput = Awaited<ReturnType<typeof github.repos.createPagesSite>>;

const input: ReposCreatePagesSiteInput = {} as { body: unknown | unknown | null; owner: string; repo: string };
const result: ReposCreatePagesSiteOutput = await github.repos.createPagesSite(input);

// Result shape (from schema): { url: string; status: "built" | "building" | "errored" | null; cname: string | null; protected_domain_state?: "pending" | "verified" | "unverified" | null; pending_domain_unverified_at?: string | null; custom_404: bool...
```

### `github.repos.updateInformationAboutPagesSite`

- **HTTP**: `PUT /repos/{owner}/{repo}/pages`
- **What it does**: Update information about a GitHub Pages site
- **OpenAPI operationId**: `repos/update-information-about-pages-site`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `400`, `409`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body: unknown | unknown | unknown | unknown | unknown; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `400`, `409`, `422`

```ts
import github from "@utdk/github";

type ReposUpdateInformationAboutPagesSiteInput = Parameters<typeof github.repos.updateInformationAboutPagesSite> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateInformationAboutPagesSiteOutput = Awaited<ReturnType<typeof github.repos.updateInformationAboutPagesSite>>;

const input: ReposUpdateInformationAboutPagesSiteInput = {} as { body: unknown | unknown | unknown | unknown | unknown; owner: string; repo: string };
const result: ReposUpdateInformationAboutPagesSiteOutput = await github.repos.updateInformationAboutPagesSite(input);

// Result shape (from schema): unknown
```

### `github.repos.listPagesBuilds`

- **HTTP**: `GET /repos/{owner}/{repo}/pages/builds`
- **What it does**: List GitHub Pages builds
- **OpenAPI operationId**: `repos/list-pages-builds`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; status: string; error: { message: string | null }; pusher: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: ...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListPagesBuildsInput = Parameters<typeof github.repos.listPagesBuilds> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListPagesBuildsOutput = Awaited<ReturnType<typeof github.repos.listPagesBuilds>>;

const input: ReposListPagesBuildsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListPagesBuildsOutput = await github.repos.listPagesBuilds(input);

// Result shape (from schema): ({ url: string; status: string; error: { message: string | null }; pusher: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: ...
```

### `github.repos.requestPagesBuild`

- **HTTP**: `POST /repos/{owner}/{repo}/pages/builds`
- **What it does**: Request a GitHub Pages build
- **OpenAPI operationId**: `repos/request-pages-build`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; status: string }`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ReposRequestPagesBuildInput = Parameters<typeof github.repos.requestPagesBuild> extends [infer T, ...unknown[]] ? T : undefined;
type ReposRequestPagesBuildOutput = Awaited<ReturnType<typeof github.repos.requestPagesBuild>>;

const input: ReposRequestPagesBuildInput = {} as { owner: string; repo: string };
const result: ReposRequestPagesBuildOutput = await github.repos.requestPagesBuild(input);

// Result shape (from schema): { url: string; status: string }
```

### `github.repos.getPagesBuild`

- **HTTP**: `GET /repos/{owner}/{repo}/pages/builds/{build_id}`
- **What it does**: Get GitHub Pages build
- **OpenAPI operationId**: `repos/get-pages-build`
- **Path params**: `build_id`
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; build_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; status: string; error: { message: string | null }; pusher: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetPagesBuildInput = Parameters<typeof github.repos.getPagesBuild> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetPagesBuildOutput = Awaited<ReturnType<typeof github.repos.getPagesBuild>>;

const input: ReposGetPagesBuildInput = {} as { owner: string; repo: string; build_id: number };
const result: ReposGetPagesBuildOutput = await github.repos.getPagesBuild(input);

// Result shape (from schema): { url: string; status: string; error: { message: string | null }; pusher: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...
```

### `github.repos.getLatestPagesBuild`

- **HTTP**: `GET /repos/{owner}/{repo}/pages/builds/latest`
- **What it does**: Get latest Pages build
- **OpenAPI operationId**: `repos/get-latest-pages-build`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; status: string; error: { message: string | null }; pusher: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetLatestPagesBuildInput = Parameters<typeof github.repos.getLatestPagesBuild> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetLatestPagesBuildOutput = Awaited<ReturnType<typeof github.repos.getLatestPagesBuild>>;

const input: ReposGetLatestPagesBuildInput = {} as { owner: string; repo: string };
const result: ReposGetLatestPagesBuildOutput = await github.repos.getLatestPagesBuild(input);

// Result shape (from schema): { url: string; status: string; error: { message: string | null }; pusher: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: s...
```

### `github.repos.createPagesDeployment`

- **HTTP**: `POST /repos/{owner}/{repo}/pages/deployments`
- **What it does**: Create a GitHub Pages deployment
- **OpenAPI operationId**: `repos/create-pages-deployment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `400`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ artifact_id?: number; artifact_url?: string; environment?: string; pages_build_version: string; oidc_token: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number | string; status_url: string; page_url: string; preview_url?: string }`
- OpenAPI response codes: `200`, `400`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCreatePagesDeploymentInput = Parameters<typeof github.repos.createPagesDeployment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreatePagesDeploymentOutput = Awaited<ReturnType<typeof github.repos.createPagesDeployment>>;

const input: ReposCreatePagesDeploymentInput = {} as { artifact_id?: number; artifact_url?: string; environment?: string; pages_build_version: string; oidc_token: string; owner: string; repo: string };
const result: ReposCreatePagesDeploymentOutput = await github.repos.createPagesDeployment(input);

// Result shape (from schema): { id: number | string; status_url: string; page_url: string; preview_url?: string }
```

### `github.repos.getPagesDeployment`

- **HTTP**: `GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}`
- **What it does**: Get the status of a GitHub Pages deployment
- **OpenAPI operationId**: `repos/get-pages-deployment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pages_deployment_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `{ status?: "deployment_in_progress" | "syncing_files" | "finished_file_sync" | "updating_pages" | "purging_cdn" | "deployment_cancelled" | "deployment_failed" | "deployment_content_failed" | "deployment_attempt_error" |...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetPagesDeploymentInput = Parameters<typeof github.repos.getPagesDeployment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetPagesDeploymentOutput = Awaited<ReturnType<typeof github.repos.getPagesDeployment>>;

const input: ReposGetPagesDeploymentInput = {} as { owner: string; repo: string; pages_deployment_id: number | string };
const result: ReposGetPagesDeploymentOutput = await github.repos.getPagesDeployment(input);

// Result shape (from schema): { status?: "deployment_in_progress" | "syncing_files" | "finished_file_sync" | "updating_pages" | "purging_cdn" | "deployment_cancelled" | "deployment_failed" | "deployment_content_failed" | "deployment_attempt_error" |...
```

### `github.repos.cancelPagesDeployment`

- **HTTP**: `POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel`
- **What it does**: Cancel a GitHub Pages deployment
- **OpenAPI operationId**: `repos/cancel-pages-deployment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; pages_deployment_id: number | string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposCancelPagesDeploymentInput = Parameters<typeof github.repos.cancelPagesDeployment> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCancelPagesDeploymentOutput = Awaited<ReturnType<typeof github.repos.cancelPagesDeployment>>;

const input: ReposCancelPagesDeploymentInput = {} as { owner: string; repo: string; pages_deployment_id: number | string };
const result: ReposCancelPagesDeploymentOutput = await github.repos.cancelPagesDeployment(input);

// Result shape (from schema): unknown
```

### `github.repos.getPagesHealthCheck`

- **HTTP**: `GET /repos/{owner}/{repo}/pages/health`
- **What it does**: Get a DNS health check for GitHub Pages
- **OpenAPI operationId**: `repos/get-pages-health-check`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `400`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ domain?: { host?: string; uri?: string; nameservers?: string; dns_resolves?: boolean; is_proxied?: boolean | null; is_cloudflare_ip?: boolean | null; is_fastly_ip?: boolean | null; is_old_ip_address?: boolean | null; ...`
- OpenAPI response codes: `200`, `202`, `400`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposGetPagesHealthCheckInput = Parameters<typeof github.repos.getPagesHealthCheck> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetPagesHealthCheckOutput = Awaited<ReturnType<typeof github.repos.getPagesHealthCheck>>;

const input: ReposGetPagesHealthCheckInput = {} as { owner: string; repo: string };
const result: ReposGetPagesHealthCheckOutput = await github.repos.getPagesHealthCheck(input);

// Result shape (from schema): { domain?: { host?: string; uri?: string; nameservers?: string; dns_resolves?: boolean; is_proxied?: boolean | null; is_cloudflare_ip?: boolean | null; is_fastly_ip?: boolean | null; is_old_ip_address?: boolean | null; ...
```

### `github.repos.disablePrivateVulnerabilityReporting`

- **HTTP**: `DELETE /repos/{owner}/{repo}/private-vulnerability-reporting`
- **What it does**: Disable private vulnerability reporting for a repository
- **OpenAPI operationId**: `repos/disable-private-vulnerability-reporting`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type ReposDisablePrivateVulnerabilityReportingInput = Parameters<typeof github.repos.disablePrivateVulnerabilityReporting> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDisablePrivateVulnerabilityReportingOutput = Awaited<ReturnType<typeof github.repos.disablePrivateVulnerabilityReporting>>;

const input: ReposDisablePrivateVulnerabilityReportingInput = {} as { owner: string; repo: string };
const result: ReposDisablePrivateVulnerabilityReportingOutput = await github.repos.disablePrivateVulnerabilityReporting(input);

// Result shape (from schema): unknown
```

### `github.repos.checkPrivateVulnerabilityReporting`

- **HTTP**: `GET /repos/{owner}/{repo}/private-vulnerability-reporting`
- **What it does**: Check if private vulnerability reporting is enabled for a repository
- **OpenAPI operationId**: `repos/check-private-vulnerability-reporting`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ enabled: boolean }`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ReposCheckPrivateVulnerabilityReportingInput = Parameters<typeof github.repos.checkPrivateVulnerabilityReporting> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCheckPrivateVulnerabilityReportingOutput = Awaited<ReturnType<typeof github.repos.checkPrivateVulnerabilityReporting>>;

const input: ReposCheckPrivateVulnerabilityReportingInput = {} as { owner: string; repo: string };
const result: ReposCheckPrivateVulnerabilityReportingOutput = await github.repos.checkPrivateVulnerabilityReporting(input);

// Result shape (from schema): { enabled: boolean }
```

### `github.repos.enablePrivateVulnerabilityReporting`

- **HTTP**: `PUT /repos/{owner}/{repo}/private-vulnerability-reporting`
- **What it does**: Enable private vulnerability reporting for a repository
- **OpenAPI operationId**: `repos/enable-private-vulnerability-reporting`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `422`

```ts
import github from "@utdk/github";

type ReposEnablePrivateVulnerabilityReportingInput = Parameters<typeof github.repos.enablePrivateVulnerabilityReporting> extends [infer T, ...unknown[]] ? T : undefined;
type ReposEnablePrivateVulnerabilityReportingOutput = Awaited<ReturnType<typeof github.repos.enablePrivateVulnerabilityReporting>>;

const input: ReposEnablePrivateVulnerabilityReportingInput = {} as { owner: string; repo: string };
const result: ReposEnablePrivateVulnerabilityReportingOutput = await github.repos.enablePrivateVulnerabilityReporting(input);

// Result shape (from schema): unknown
```

### `github.repos.customPropertiesForReposGetRepositoryValues`

- **HTTP**: `GET /repos/{owner}/{repo}/properties/values`
- **What it does**: Get all custom property values for a repository
- **OpenAPI operationId**: `repos/custom-properties-for-repos-get-repository-values`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ property_name: string; value: string | (string)[] | null })[]`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ReposCustomPropertiesForReposGetRepositoryValuesInput = Parameters<typeof github.repos.customPropertiesForReposGetRepositoryValues> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCustomPropertiesForReposGetRepositoryValuesOutput = Awaited<ReturnType<typeof github.repos.customPropertiesForReposGetRepositoryValues>>;

const input: ReposCustomPropertiesForReposGetRepositoryValuesInput = {} as { owner: string; repo: string };
const result: ReposCustomPropertiesForReposGetRepositoryValuesOutput = await github.repos.customPropertiesForReposGetRepositoryValues(input);

// Result shape (from schema): ({ property_name: string; value: string | (string)[] | null })[]
```

### `github.repos.customPropertiesForReposCreateOrUpdateRepositoryValues`

- **HTTP**: `PATCH /repos/{owner}/{repo}/properties/values`
- **What it does**: Create or update custom property values for a repository
- **OpenAPI operationId**: `repos/custom-properties-for-repos-create-or-update-repository-values`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ properties: ({ property_name: string; value: string | (string)[] | null })[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCustomPropertiesForReposCreateOrUpdateRepositoryValuesInput = Parameters<typeof github.repos.customPropertiesForReposCreateOrUpdateRepositoryValues> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCustomPropertiesForReposCreateOrUpdateRepositoryValuesOutput = Awaited<ReturnType<typeof github.repos.customPropertiesForReposCreateOrUpdateRepositoryValues>>;

const input: ReposCustomPropertiesForReposCreateOrUpdateRepositoryValuesInput = {} as { properties: ({ property_name: string; value: string | (string)[] | null })[]; owner: string; repo: string };
const result: ReposCustomPropertiesForReposCreateOrUpdateRepositoryValuesOutput = await github.repos.customPropertiesForReposCreateOrUpdateRepositoryValues(input);

// Result shape (from schema): unknown
```

### `github.repos.getReadme`

- **HTTP**: `GET /repos/{owner}/{repo}/readme`
- **What it does**: Get a repository README
- **OpenAPI operationId**: `repos/get-readme`
- **Path params**: None
- **Query params**: `ref`
- **Response codes**: `200`, `304`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ type: "file"; encoding: string; size: number; name: string; path: string; content: string; sha: string; url: string; git_url: string | null; html_url: string | null; download_url: string | null; _links: { git: string ...`
- OpenAPI response codes: `200`, `304`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposGetReadmeInput = Parameters<typeof github.repos.getReadme> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetReadmeOutput = Awaited<ReturnType<typeof github.repos.getReadme>>;

const input: ReposGetReadmeInput = {} as { owner: string; repo: string; ref?: string };
const result: ReposGetReadmeOutput = await github.repos.getReadme(input);

// Result shape (from schema): { type: "file"; encoding: string; size: number; name: string; path: string; content: string; sha: string; url: string; git_url: string | null; html_url: string | null; download_url: string | null; _links: { git: string ...
```

### `github.repos.getReadmeInDirectory`

- **HTTP**: `GET /repos/{owner}/{repo}/readme/{dir}`
- **What it does**: Get a repository README for a directory
- **OpenAPI operationId**: `repos/get-readme-in-directory`
- **Path params**: `dir`
- **Query params**: `ref`
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; dir: string; ref?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ type: "file"; encoding: string; size: number; name: string; path: string; content: string; sha: string; url: string; git_url: string | null; html_url: string | null; download_url: string | null; _links: { git: string ...`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposGetReadmeInDirectoryInput = Parameters<typeof github.repos.getReadmeInDirectory> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetReadmeInDirectoryOutput = Awaited<ReturnType<typeof github.repos.getReadmeInDirectory>>;

const input: ReposGetReadmeInDirectoryInput = {} as { owner: string; repo: string; dir: string; ref?: string };
const result: ReposGetReadmeInDirectoryOutput = await github.repos.getReadmeInDirectory(input);

// Result shape (from schema): { type: "file"; encoding: string; size: number; name: string; path: string; content: string; sha: string; url: string; git_url: string | null; html_url: string | null; download_url: string | null; _links: { git: string ...
```

### `github.repos.listReleases`

- **HTTP**: `GET /repos/{owner}/{repo}/releases`
- **What it does**: List releases
- **OpenAPI operationId**: `repos/list-releases`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | n...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposListReleasesInput = Parameters<typeof github.repos.listReleases> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListReleasesOutput = Awaited<ReturnType<typeof github.repos.listReleases>>;

const input: ReposListReleasesInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListReleasesOutput = await github.repos.listReleases(input);

// Result shape (from schema): ({ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | n...
```

### `github.repos.createRelease`

- **HTTP**: `POST /repos/{owner}/{repo}/releases`
- **What it does**: Create a release
- **OpenAPI operationId**: `repos/create-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ tag_name: string; target_commitish?: string; name?: string; body?: string; draft?: boolean; prerelease?: boolean; discussion_category_name?: string; generate_release_notes?: boolean; make_latest?: "true" | "false" | "legacy"; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...`
- OpenAPI response codes: `201`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCreateReleaseInput = Parameters<typeof github.repos.createRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateReleaseOutput = Awaited<ReturnType<typeof github.repos.createRelease>>;

const input: ReposCreateReleaseInput = {} as { tag_name: string; target_commitish?: string; name?: string; body?: string; draft?: boolean; prerelease?: boolean; discussion_category_name?: string; generate_release_notes?: boolean; make_latest?: "true" | "false" | "legacy"; owner: string; repo: string };
const result: ReposCreateReleaseOutput = await github.repos.createRelease(input);

// Result shape (from schema): { url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...
```

### `github.repos.deleteRelease`

- **HTTP**: `DELETE /repos/{owner}/{repo}/releases/{release_id}`
- **What it does**: Delete a release
- **OpenAPI operationId**: `repos/delete-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; release_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteReleaseInput = Parameters<typeof github.repos.deleteRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteReleaseOutput = Awaited<ReturnType<typeof github.repos.deleteRelease>>;

const input: ReposDeleteReleaseInput = {} as { owner: string; repo: string; release_id: number };
const result: ReposDeleteReleaseOutput = await github.repos.deleteRelease(input);

// Result shape (from schema): unknown
```

### `github.repos.getRelease`

- **HTTP**: `GET /repos/{owner}/{repo}/releases/{release_id}`
- **What it does**: Get a release
- **OpenAPI operationId**: `repos/get-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `401`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; release_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...`
- OpenAPI response codes: `200`, `401`

```ts
import github from "@utdk/github";

type ReposGetReleaseInput = Parameters<typeof github.repos.getRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetReleaseOutput = Awaited<ReturnType<typeof github.repos.getRelease>>;

const input: ReposGetReleaseInput = {} as { owner: string; repo: string; release_id: number };
const result: ReposGetReleaseOutput = await github.repos.getRelease(input);

// Result shape (from schema): { url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...
```

### `github.repos.updateRelease`

- **HTTP**: `PATCH /repos/{owner}/{repo}/releases/{release_id}`
- **What it does**: Update a release
- **OpenAPI operationId**: `repos/update-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ tag_name?: string; target_commitish?: string; name?: string; body?: string; draft?: boolean; prerelease?: boolean; make_latest?: "true" | "false" | "legacy"; discussion_category_name?: string; owner: string; repo: string; release_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposUpdateReleaseInput = Parameters<typeof github.repos.updateRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateReleaseOutput = Awaited<ReturnType<typeof github.repos.updateRelease>>;

const input: ReposUpdateReleaseInput = {} as { tag_name?: string; target_commitish?: string; name?: string; body?: string; draft?: boolean; prerelease?: boolean; make_latest?: "true" | "false" | "legacy"; discussion_category_name?: string; owner: string; repo: string; release_id: number };
const result: ReposUpdateReleaseOutput = await github.repos.updateRelease(input);

// Result shape (from schema): { url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...
```

### `github.repos.listReleaseAssets`

- **HTTP**: `GET /repos/{owner}/{repo}/releases/{release_id}/assets`
- **What it does**: List release assets
- **OpenAPI operationId**: `repos/list-release-assets`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; release_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: numbe...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListReleaseAssetsInput = Parameters<typeof github.repos.listReleaseAssets> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListReleaseAssetsOutput = Awaited<ReturnType<typeof github.repos.listReleaseAssets>>;

const input: ReposListReleaseAssetsInput = {} as { owner: string; repo: string; release_id: number; per_page?: number; page?: number };
const result: ReposListReleaseAssetsOutput = await github.repos.listReleaseAssets(input);

// Result shape (from schema): ({ url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: numbe...
```

### `github.repos.uploadReleaseAsset`

- **HTTP**: `POST /repos/{owner}/{repo}/releases/{release_id}/assets`
- **What it does**: Upload a release asset
- **OpenAPI operationId**: `repos/upload-release-asset`
- **Path params**: None
- **Query params**: `name`, `label`
- **Response codes**: `201`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ body?: string; owner: string; repo: string; release_id: number; name: string; label?: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: number...`
- OpenAPI response codes: `201`, `422`

```ts
import github from "@utdk/github";

type ReposUploadReleaseAssetInput = Parameters<typeof github.repos.uploadReleaseAsset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUploadReleaseAssetOutput = Awaited<ReturnType<typeof github.repos.uploadReleaseAsset>>;

const input: ReposUploadReleaseAssetInput = {} as { body?: string; owner: string; repo: string; release_id: number; name: string; label?: string };
const result: ReposUploadReleaseAssetOutput = await github.repos.uploadReleaseAsset(input);

// Result shape (from schema): { url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: number...
```

### `github.repos.deleteReleaseAsset`

- **HTTP**: `DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`
- **What it does**: Delete a release asset
- **OpenAPI operationId**: `repos/delete-release-asset`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; asset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposDeleteReleaseAssetInput = Parameters<typeof github.repos.deleteReleaseAsset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteReleaseAssetOutput = Awaited<ReturnType<typeof github.repos.deleteReleaseAsset>>;

const input: ReposDeleteReleaseAssetInput = {} as { owner: string; repo: string; asset_id: number };
const result: ReposDeleteReleaseAssetOutput = await github.repos.deleteReleaseAsset(input);

// Result shape (from schema): unknown
```

### `github.repos.getReleaseAsset`

- **HTTP**: `GET /repos/{owner}/{repo}/releases/assets/{asset_id}`
- **What it does**: Get a release asset
- **OpenAPI operationId**: `repos/get-release-asset`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `302`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; asset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: number...`
- OpenAPI response codes: `200`, `302`, `404`

```ts
import github from "@utdk/github";

type ReposGetReleaseAssetInput = Parameters<typeof github.repos.getReleaseAsset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetReleaseAssetOutput = Awaited<ReturnType<typeof github.repos.getReleaseAsset>>;

const input: ReposGetReleaseAssetInput = {} as { owner: string; repo: string; asset_id: number };
const result: ReposGetReleaseAssetOutput = await github.repos.getReleaseAsset(input);

// Result shape (from schema): { url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: number...
```

### `github.repos.updateReleaseAsset`

- **HTTP**: `PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`
- **What it does**: Update a release asset
- **OpenAPI operationId**: `repos/update-release-asset`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; label?: string; state?: string; owner: string; repo: string; asset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: number...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposUpdateReleaseAssetInput = Parameters<typeof github.repos.updateReleaseAsset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateReleaseAssetOutput = Awaited<ReturnType<typeof github.repos.updateReleaseAsset>>;

const input: ReposUpdateReleaseAssetInput = {} as { name?: string; label?: string; state?: string; owner: string; repo: string; asset_id: number };
const result: ReposUpdateReleaseAssetOutput = await github.repos.updateReleaseAsset(input);

// Result shape (from schema): { url: string; browser_download_url: string; id: number; node_id: string; name: string; label: string | null; state: "uploaded" | "open"; content_type: string; size: number; digest: string | null; download_count: number...
```

### `github.repos.generateReleaseNotes`

- **HTTP**: `POST /repos/{owner}/{repo}/releases/generate-notes`
- **What it does**: Generate release notes content for a release
- **OpenAPI operationId**: `repos/generate-release-notes`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ tag_name: string; target_commitish?: string; previous_tag_name?: string; configuration_file_path?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ name: string; body: string }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGenerateReleaseNotesInput = Parameters<typeof github.repos.generateReleaseNotes> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGenerateReleaseNotesOutput = Awaited<ReturnType<typeof github.repos.generateReleaseNotes>>;

const input: ReposGenerateReleaseNotesInput = {} as { tag_name: string; target_commitish?: string; previous_tag_name?: string; configuration_file_path?: string; owner: string; repo: string };
const result: ReposGenerateReleaseNotesOutput = await github.repos.generateReleaseNotes(input);

// Result shape (from schema): { name: string; body: string }
```

### `github.repos.getLatestRelease`

- **HTTP**: `GET /repos/{owner}/{repo}/releases/latest`
- **What it does**: Get the latest release
- **OpenAPI operationId**: `repos/get-latest-release`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetLatestReleaseInput = Parameters<typeof github.repos.getLatestRelease> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetLatestReleaseOutput = Awaited<ReturnType<typeof github.repos.getLatestRelease>>;

const input: ReposGetLatestReleaseInput = {} as { owner: string; repo: string };
const result: ReposGetLatestReleaseOutput = await github.repos.getLatestRelease(input);

// Result shape (from schema): { url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...
```

### `github.repos.getReleaseByTag`

- **HTTP**: `GET /repos/{owner}/{repo}/releases/tags/{tag}`
- **What it does**: Get a release by tag name
- **OpenAPI operationId**: `repos/get-release-by-tag`
- **Path params**: `tag`
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; tag: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetReleaseByTagInput = Parameters<typeof github.repos.getReleaseByTag> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetReleaseByTagOutput = Awaited<ReturnType<typeof github.repos.getReleaseByTag>>;

const input: ReposGetReleaseByTagInput = {} as { owner: string; repo: string; tag: string };
const result: ReposGetReleaseByTagOutput = await github.repos.getReleaseByTag(input);

// Result shape (from schema): { url: string; html_url: string; assets_url: string; upload_url: string; tarball_url: string | null; zipball_url: string | null; id: number; node_id: string; tag_name: string; target_commitish: string; name: string | nu...
```

### `github.repos.getBranchRules`

- **HTTP**: `GET /repos/{owner}/{repo}/rules/branches/{branch}`
- **What it does**: Get rules for a branch
- **OpenAPI operationId**: `repos/get-branch-rules`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; branch: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ type: "creation" } & { ruleset_source_type?: "Repository" | "Organization"; ruleset_source?: string; ruleset_id?: number } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } & { ruleset_sou...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposGetBranchRulesInput = Parameters<typeof github.repos.getBranchRules> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetBranchRulesOutput = Awaited<ReturnType<typeof github.repos.getBranchRules>>;

const input: ReposGetBranchRulesInput = {} as { owner: string; repo: string; branch: string; per_page?: number; page?: number };
const result: ReposGetBranchRulesOutput = await github.repos.getBranchRules(input);

// Result shape (from schema): ({ type: "creation" } & { ruleset_source_type?: "Repository" | "Organization"; ruleset_source?: string; ruleset_id?: number } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } & { ruleset_sou...
```

### `github.repos.getRepoRulesets`

- **HTTP**: `GET /repos/{owner}/{repo}/rulesets`
- **What it does**: Get all repository rulesets
- **OpenAPI operationId**: `repos/get-repo-rulesets`
- **Path params**: None
- **Query params**: `includes_parents`
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number; includes_parents?: boolean; targets?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetRepoRulesetsInput = Parameters<typeof github.repos.getRepoRulesets> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetRepoRulesetsOutput = Awaited<ReturnType<typeof github.repos.getRepoRulesets>>;

const input: ReposGetRepoRulesetsInput = {} as { owner: string; repo: string; per_page?: number; page?: number; includes_parents?: boolean; targets?: string };
const result: ReposGetRepoRulesetsOutput = await github.repos.getRepoRulesets(input);

// Result shape (from schema): ({ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?...
```

### `github.repos.createRepoRuleset`

- **HTTP**: `POST /repos/{owner}/{repo}/rulesets`
- **What it does**: Create a repository ruleset
- **OpenAPI operationId**: `repos/create-repo-ruleset`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; target?: "branch" | "tag" | "push"; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "merge_queue"; parameters?: { check_response_timeout_minutes: number; grouping_strategy: "ALLGREEN" | "HEADGREEN"; max_entries_to_build: number; max_entries_to_merge: number; merge_method: "MERGE" | "SQUASH" | "REBASE"; min_entries_to_merge: number; min_entries_to_merge_wait_minutes: number } } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } })[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...`
- OpenAPI response codes: `201`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type ReposCreateRepoRulesetInput = Parameters<typeof github.repos.createRepoRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateRepoRulesetOutput = Awaited<ReturnType<typeof github.repos.createRepoRuleset>>;

const input: ReposCreateRepoRulesetInput = {} as { name: string; target?: "branch" | "tag" | "push"; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "merge_queue"; parameters?: { check_response_timeout_minutes: number; grouping_strategy: "ALLGREEN" | "HEADGREEN"; max_entries_to_build: number; max_entries_to_merge: number; merge_method: "MERGE" | "SQUASH" | "REBASE"; min_entries_to_merge: number; min_entries_to_merge_wait_minutes: number } } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } })[]; owner: string; repo: string };
const result: ReposCreateRepoRulesetOutput = await github.repos.createRepoRuleset(input);

// Result shape (from schema): { id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...
```

### `github.repos.deleteRepoRuleset`

- **HTTP**: `DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}`
- **What it does**: Delete a repository ruleset
- **OpenAPI operationId**: `repos/delete-repo-ruleset`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `204`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ruleset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposDeleteRepoRulesetInput = Parameters<typeof github.repos.deleteRepoRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeleteRepoRulesetOutput = Awaited<ReturnType<typeof github.repos.deleteRepoRuleset>>;

const input: ReposDeleteRepoRulesetInput = {} as { owner: string; repo: string; ruleset_id: number };
const result: ReposDeleteRepoRulesetOutput = await github.repos.deleteRepoRuleset(input);

// Result shape (from schema): unknown
```

### `github.repos.getRepoRuleset`

- **HTTP**: `GET /repos/{owner}/{repo}/rulesets/{ruleset_id}`
- **What it does**: Get a repository ruleset
- **OpenAPI operationId**: `repos/get-repo-ruleset`
- **Path params**: `ruleset_id`
- **Query params**: `includes_parents`
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ruleset_id: number; includes_parents?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetRepoRulesetInput = Parameters<typeof github.repos.getRepoRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetRepoRulesetOutput = Awaited<ReturnType<typeof github.repos.getRepoRuleset>>;

const input: ReposGetRepoRulesetInput = {} as { owner: string; repo: string; ruleset_id: number; includes_parents?: boolean };
const result: ReposGetRepoRulesetOutput = await github.repos.getRepoRuleset(input);

// Result shape (from schema): { id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...
```

### `github.repos.updateRepoRuleset`

- **HTTP**: `PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}`
- **What it does**: Update a repository ruleset
- **OpenAPI operationId**: `repos/update-repo-ruleset`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `422`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name?: string; target?: "branch" | "tag" | "push"; enforcement?: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "merge_queue"; parameters?: { check_response_timeout_minutes: number; grouping_strategy: "ALLGREEN" | "HEADGREEN"; max_entries_to_build: number; max_entries_to_merge: number; merge_method: "MERGE" | "SQUASH" | "REBASE"; min_entries_to_merge: number; min_entries_to_merge_wait_minutes: number } } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } })[]; owner: string; repo: string; ruleset_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...`
- OpenAPI response codes: `200`, `404`, `422`, `500`

```ts
import github from "@utdk/github";

type ReposUpdateRepoRulesetInput = Parameters<typeof github.repos.updateRepoRuleset> extends [infer T, ...unknown[]] ? T : undefined;
type ReposUpdateRepoRulesetOutput = Awaited<ReturnType<typeof github.repos.updateRepoRuleset>>;

const input: ReposUpdateRepoRulesetInput = {} as { name?: string; target?: "branch" | "tag" | "push"; enforcement?: "disabled" | "active" | "evaluate"; bypass_actors?: ({ actor_id?: number | null; actor_type: "Integration" | "OrganizationAdmin" | "RepositoryRole" | "Team" | "DeployKey" | "User"; bypass_mode?: "always" | "pull_request" | "exempt" })[]; conditions?: { ref_name?: { include?: (string)[]; exclude?: (string)[] } }; rules?: ({ type: "creation" } | { type: "update"; parameters?: { update_allows_fetch_and_merge: boolean } } | { type: "deletion" } | { type: "required_linear_history" } | { type: "merge_queue"; parameters?: { check_response_timeout_minutes: number; grouping_strategy: "ALLGREEN" | "HEADGREEN"; max_entries_to_build: number; max_entries_to_merge: number; merge_method: "MERGE" | "SQUASH" | "REBASE"; min_entries_to_merge: number; min_entries_to_merge_wait_minutes: number } } | { type: "required_deployments"; parameters?: { required_deployment_environments: (string)[] } } | { type: "required_signatures" } | { type: "pull_request"; parameters?: { allowed_merge_methods?: ("merge" | "squash" | "rebase")[]; dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; required_reviewers?: ({ file_patterns: (string)[]; minimum_approvals: number; reviewer: { id: number; type: "Team" } })[] } } | { type: "required_status_checks"; parameters?: { do_not_enforce_on_create?: boolean; required_status_checks: ({ context: string; integration_id?: number })[]; strict_required_status_checks_policy: boolean } } | { type: "non_fast_forward" } | { type: "commit_message_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "commit_author_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "committer_email_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "branch_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "tag_name_pattern"; parameters?: { name?: string; negate?: boolean; operator: "starts_with" | "ends_with" | "contains" | "regex"; pattern: string } } | { type: "workflows"; parameters?: { do_not_enforce_on_create?: boolean; workflows: ({ path: string; ref?: string; repository_id: number; sha?: string })[] } } | { type: "code_scanning"; parameters?: { code_scanning_tools: ({ alerts_threshold: "none" | "errors" | "errors_and_warnings" | "all"; security_alerts_threshold: "none" | "critical" | "high_or_higher" | "medium_or_higher" | "all"; tool: string })[] } } | { type: "copilot_code_review"; parameters?: { review_draft_pull_requests?: boolean; review_on_push?: boolean } } | { type: "file_path_restriction"; parameters?: { restricted_file_paths: (string)[] } } | { type: "max_file_path_length"; parameters?: { max_file_path_length: number } } | { type: "file_extension_restriction"; parameters?: { restricted_file_extensions: (string)[] } } | { type: "max_file_size"; parameters?: { max_file_size: number } })[]; owner: string; repo: string; ruleset_id: number };
const result: ReposUpdateRepoRulesetOutput = await github.repos.updateRepoRuleset(input);

// Result shape (from schema): { id: number; name: string; target?: "branch" | "tag" | "push" | "repository"; source_type?: "Repository" | "Organization" | "Enterprise"; source: string; enforcement: "disabled" | "active" | "evaluate"; bypass_actors?:...
```

### `github.repos.getRepoRulesetHistory`

- **HTTP**: `GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history`
- **What it does**: Get repository ruleset history
- **OpenAPI operationId**: `repos/get-repo-ruleset-history`
- **Path params**: `ruleset_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ruleset_id: number; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ version_id: number; actor: { id?: number; type?: string }; updated_at: string })[]`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetRepoRulesetHistoryInput = Parameters<typeof github.repos.getRepoRulesetHistory> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetRepoRulesetHistoryOutput = Awaited<ReturnType<typeof github.repos.getRepoRulesetHistory>>;

const input: ReposGetRepoRulesetHistoryInput = {} as { owner: string; repo: string; ruleset_id: number; per_page?: number; page?: number };
const result: ReposGetRepoRulesetHistoryOutput = await github.repos.getRepoRulesetHistory(input);

// Result shape (from schema): ({ version_id: number; actor: { id?: number; type?: string }; updated_at: string })[]
```

### `github.repos.getRepoRulesetVersion`

- **HTTP**: `GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}`
- **What it does**: Get repository ruleset version
- **OpenAPI operationId**: `repos/get-repo-ruleset-version`
- **Path params**: `ruleset_id`, `version_id`
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ruleset_id: number; version_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetRepoRulesetVersionInput = Parameters<typeof github.repos.getRepoRulesetVersion> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetRepoRulesetVersionOutput = Awaited<ReturnType<typeof github.repos.getRepoRulesetVersion>>;

const input: ReposGetRepoRulesetVersionInput = {} as { owner: string; repo: string; ruleset_id: number; version_id: number };
const result: ReposGetRepoRulesetVersionOutput = await github.repos.getRepoRulesetVersion(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.repos.getRepoRuleSuites`

- **HTTP**: `GET /repos/{owner}/{repo}/rulesets/rule-suites`
- **What it does**: List repository rule suites
- **OpenAPI operationId**: `repos/get-repo-rule-suites`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref?: string; time_period?: "hour" | "day" | "week" | "month"; actor_name?: string; rule_suite_result?: "pass" | "fail" | "bypass" | "all"; evaluate_status?: "all" | "active" | "evaluate"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id?: number; actor_id?: number; actor_name?: string; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" | "bypass"; e...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetRepoRuleSuitesInput = Parameters<typeof github.repos.getRepoRuleSuites> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetRepoRuleSuitesOutput = Awaited<ReturnType<typeof github.repos.getRepoRuleSuites>>;

const input: ReposGetRepoRuleSuitesInput = {} as { owner: string; repo: string; ref?: string; time_period?: "hour" | "day" | "week" | "month"; actor_name?: string; rule_suite_result?: "pass" | "fail" | "bypass" | "all"; evaluate_status?: "all" | "active" | "evaluate"; per_page?: number; page?: number };
const result: ReposGetRepoRuleSuitesOutput = await github.repos.getRepoRuleSuites(input);

// Result shape (from schema): ({ id?: number; actor_id?: number; actor_name?: string; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" | "bypass"; e...
```

### `github.repos.getRepoRuleSuite`

- **HTTP**: `GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}`
- **What it does**: Get a repository rule suite
- **OpenAPI operationId**: `repos/get-repo-rule-suite`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `500`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; rule_suite_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id?: number; actor_id?: number | null; actor_name?: string | null; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" ...`
- OpenAPI response codes: `200`, `404`, `500`

```ts
import github from "@utdk/github";

type ReposGetRepoRuleSuiteInput = Parameters<typeof github.repos.getRepoRuleSuite> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetRepoRuleSuiteOutput = Awaited<ReturnType<typeof github.repos.getRepoRuleSuite>>;

const input: ReposGetRepoRuleSuiteInput = {} as { owner: string; repo: string; rule_suite_id: number };
const result: ReposGetRepoRuleSuiteOutput = await github.repos.getRepoRuleSuite(input);

// Result shape (from schema): { id?: number; actor_id?: number | null; actor_name?: string | null; before_sha?: string; after_sha?: string; ref?: string; repository_id?: number; repository_name?: string; pushed_at?: string; result?: "pass" | "fail" ...
```

### `github.repos.getCodeFrequencyStats`

- **HTTP**: `GET /repos/{owner}/{repo}/stats/code_frequency`
- **What it does**: Get the weekly commit activity
- **OpenAPI operationId**: `repos/get-code-frequency-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `204`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `((number)[])[]`
- OpenAPI response codes: `200`, `202`, `204`, `422`

```ts
import github from "@utdk/github";

type ReposGetCodeFrequencyStatsInput = Parameters<typeof github.repos.getCodeFrequencyStats> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCodeFrequencyStatsOutput = Awaited<ReturnType<typeof github.repos.getCodeFrequencyStats>>;

const input: ReposGetCodeFrequencyStatsInput = {} as { owner: string; repo: string };
const result: ReposGetCodeFrequencyStatsOutput = await github.repos.getCodeFrequencyStats(input);

// Result shape (from schema): ((number)[])[]
```

### `github.repos.getCommitActivityStats`

- **HTTP**: `GET /repos/{owner}/{repo}/stats/commit_activity`
- **What it does**: Get the last year of commit activity
- **OpenAPI operationId**: `repos/get-commit-activity-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ days: (number)[]; total: number; week: number })[]`
- OpenAPI response codes: `200`, `202`, `204`

```ts
import github from "@utdk/github";

type ReposGetCommitActivityStatsInput = Parameters<typeof github.repos.getCommitActivityStats> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetCommitActivityStatsOutput = Awaited<ReturnType<typeof github.repos.getCommitActivityStats>>;

const input: ReposGetCommitActivityStatsInput = {} as { owner: string; repo: string };
const result: ReposGetCommitActivityStatsOutput = await github.repos.getCommitActivityStats(input);

// Result shape (from schema): ({ days: (number)[]; total: number; week: number })[]
```

### `github.repos.getContributorsStats`

- **HTTP**: `GET /repos/{owner}/{repo}/stats/contributors`
- **What it does**: Get all contributor commit activity
- **OpenAPI operationId**: `repos/get-contributors-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `202`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ author: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: ...`
- OpenAPI response codes: `200`, `202`, `204`

```ts
import github from "@utdk/github";

type ReposGetContributorsStatsInput = Parameters<typeof github.repos.getContributorsStats> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetContributorsStatsOutput = Awaited<ReturnType<typeof github.repos.getContributorsStats>>;

const input: ReposGetContributorsStatsInput = {} as { owner: string; repo: string };
const result: ReposGetContributorsStatsOutput = await github.repos.getContributorsStats(input);

// Result shape (from schema): ({ author: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: ...
```

### `github.repos.getParticipationStats`

- **HTTP**: `GET /repos/{owner}/{repo}/stats/participation`
- **What it does**: Get the weekly commit count
- **OpenAPI operationId**: `repos/get-participation-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ all: (number)[]; owner: (number)[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetParticipationStatsInput = Parameters<typeof github.repos.getParticipationStats> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetParticipationStatsOutput = Awaited<ReturnType<typeof github.repos.getParticipationStats>>;

const input: ReposGetParticipationStatsInput = {} as { owner: string; repo: string };
const result: ReposGetParticipationStatsOutput = await github.repos.getParticipationStats(input);

// Result shape (from schema): { all: (number)[]; owner: (number)[] }
```

### `github.repos.getPunchCardStats`

- **HTTP**: `GET /repos/{owner}/{repo}/stats/punch_card`
- **What it does**: Get the hourly commit count for each day
- **OpenAPI operationId**: `repos/get-punch-card-stats`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `((number)[])[]`
- OpenAPI response codes: `200`, `204`

```ts
import github from "@utdk/github";

type ReposGetPunchCardStatsInput = Parameters<typeof github.repos.getPunchCardStats> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetPunchCardStatsOutput = Awaited<ReturnType<typeof github.repos.getPunchCardStats>>;

const input: ReposGetPunchCardStatsInput = {} as { owner: string; repo: string };
const result: ReposGetPunchCardStatsOutput = await github.repos.getPunchCardStats(input);

// Result shape (from schema): ((number)[])[]
```

### `github.repos.createCommitStatus`

- **HTTP**: `POST /repos/{owner}/{repo}/statuses/{sha}`
- **What it does**: Create a commit status
- **OpenAPI operationId**: `repos/create-commit-status`
- **Path params**: `sha`
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ state: "error" | "failure" | "pending" | "success"; target_url?: string | null; description?: string | null; context?: string; owner: string; repo: string; sha: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ url: string; avatar_url: string | null; id: number; node_id: string; state: string; description: string | null; target_url: string | null; context: string; created_at: string; updated_at: string; creator: { name?: str...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ReposCreateCommitStatusInput = Parameters<typeof github.repos.createCommitStatus> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateCommitStatusOutput = Awaited<ReturnType<typeof github.repos.createCommitStatus>>;

const input: ReposCreateCommitStatusInput = {} as { state: "error" | "failure" | "pending" | "success"; target_url?: string | null; description?: string | null; context?: string; owner: string; repo: string; sha: string };
const result: ReposCreateCommitStatusOutput = await github.repos.createCommitStatus(input);

// Result shape (from schema): { url: string; avatar_url: string | null; id: number; node_id: string; state: string; description: string | null; target_url: string | null; context: string; created_at: string; updated_at: string; creator: { name?: str...
```

### `github.repos.listTags`

- **HTTP**: `GET /repos/{owner}/{repo}/tags`
- **What it does**: List repository tags
- **OpenAPI operationId**: `repos/list-tags`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ name: string; commit: { sha: string; url: string }; zipball_url: string; tarball_url: string; node_id: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListTagsInput = Parameters<typeof github.repos.listTags> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListTagsOutput = Awaited<ReturnType<typeof github.repos.listTags>>;

const input: ReposListTagsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListTagsOutput = await github.repos.listTags(input);

// Result shape (from schema): ({ name: string; commit: { sha: string; url: string }; zipball_url: string; tarball_url: string; node_id: string })[]
```

### `github.repos.downloadTarballArchive`

- **HTTP**: `GET /repos/{owner}/{repo}/tarball/{ref}`
- **What it does**: Download a repository archive (tar)
- **OpenAPI operationId**: `repos/download-tarball-archive`
- **Path params**: `ref`
- **Query params**: None
- **Response codes**: `302`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`

```ts
import github from "@utdk/github";

type ReposDownloadTarballArchiveInput = Parameters<typeof github.repos.downloadTarballArchive> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDownloadTarballArchiveOutput = Awaited<ReturnType<typeof github.repos.downloadTarballArchive>>;

const input: ReposDownloadTarballArchiveInput = {} as { owner: string; repo: string; ref: string };
const result: ReposDownloadTarballArchiveOutput = await github.repos.downloadTarballArchive(input);

// Result shape (from schema): unknown
```

### `github.repos.listTeams`

- **HTTP**: `GET /repos/{owner}/{repo}/teams`
- **What it does**: List repository teams
- **OpenAPI operationId**: `repos/list-teams`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposListTeamsInput = Parameters<typeof github.repos.listTeams> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListTeamsOutput = Awaited<ReturnType<typeof github.repos.listTeams>>;

const input: ReposListTeamsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ReposListTeamsOutput = await github.repos.listTeams(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; slug: string; description: string | null; privacy?: string; notification_setting?: string; permission: string; permissions?: { pull: boolean; triage: boolean; push: boolean;...
```

### `github.repos.getAllTopics`

- **HTTP**: `GET /repos/{owner}/{repo}/topics`
- **What it does**: Get all repository topics
- **OpenAPI operationId**: `repos/get-all-topics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ names: (string)[] }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ReposGetAllTopicsInput = Parameters<typeof github.repos.getAllTopics> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetAllTopicsOutput = Awaited<ReturnType<typeof github.repos.getAllTopics>>;

const input: ReposGetAllTopicsInput = {} as { owner: string; repo: string; page?: number; per_page?: number };
const result: ReposGetAllTopicsOutput = await github.repos.getAllTopics(input);

// Result shape (from schema): { names: (string)[] }
```

### `github.repos.replaceAllTopics`

- **HTTP**: `PUT /repos/{owner}/{repo}/topics`
- **What it does**: Replace all repository topics
- **OpenAPI operationId**: `repos/replace-all-topics`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ names: (string)[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ names: (string)[] }`
- OpenAPI response codes: `200`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposReplaceAllTopicsInput = Parameters<typeof github.repos.replaceAllTopics> extends [infer T, ...unknown[]] ? T : undefined;
type ReposReplaceAllTopicsOutput = Awaited<ReturnType<typeof github.repos.replaceAllTopics>>;

const input: ReposReplaceAllTopicsInput = {} as { names: (string)[]; owner: string; repo: string };
const result: ReposReplaceAllTopicsOutput = await github.repos.replaceAllTopics(input);

// Result shape (from schema): { names: (string)[] }
```

### `github.repos.getClones`

- **HTTP**: `GET /repos/{owner}/{repo}/traffic/clones`
- **What it does**: Get repository clones
- **OpenAPI operationId**: `repos/get-clones`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per?: "day" | "week" }`
- Client transport options: None

**Outputs**

- Client return type: `{ count: number; uniques: number; clones: ({ timestamp: string; uniques: number; count: number })[] }`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type ReposGetClonesInput = Parameters<typeof github.repos.getClones> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetClonesOutput = Awaited<ReturnType<typeof github.repos.getClones>>;

const input: ReposGetClonesInput = {} as { owner: string; repo: string; per?: "day" | "week" };
const result: ReposGetClonesOutput = await github.repos.getClones(input);

// Result shape (from schema): { count: number; uniques: number; clones: ({ timestamp: string; uniques: number; count: number })[] }
```

### `github.repos.getTopPaths`

- **HTTP**: `GET /repos/{owner}/{repo}/traffic/popular/paths`
- **What it does**: Get top referral paths
- **OpenAPI operationId**: `repos/get-top-paths`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ path: string; title: string; count: number; uniques: number })[]`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type ReposGetTopPathsInput = Parameters<typeof github.repos.getTopPaths> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetTopPathsOutput = Awaited<ReturnType<typeof github.repos.getTopPaths>>;

const input: ReposGetTopPathsInput = {} as { owner: string; repo: string };
const result: ReposGetTopPathsOutput = await github.repos.getTopPaths(input);

// Result shape (from schema): ({ path: string; title: string; count: number; uniques: number })[]
```

### `github.repos.getTopReferrers`

- **HTTP**: `GET /repos/{owner}/{repo}/traffic/popular/referrers`
- **What it does**: Get top referral sources
- **OpenAPI operationId**: `repos/get-top-referrers`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ referrer: string; count: number; uniques: number })[]`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type ReposGetTopReferrersInput = Parameters<typeof github.repos.getTopReferrers> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetTopReferrersOutput = Awaited<ReturnType<typeof github.repos.getTopReferrers>>;

const input: ReposGetTopReferrersInput = {} as { owner: string; repo: string };
const result: ReposGetTopReferrersOutput = await github.repos.getTopReferrers(input);

// Result shape (from schema): ({ referrer: string; count: number; uniques: number })[]
```

### `github.repos.getViews`

- **HTTP**: `GET /repos/{owner}/{repo}/traffic/views`
- **What it does**: Get page views
- **OpenAPI operationId**: `repos/get-views`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per?: "day" | "week" }`
- Client transport options: None

**Outputs**

- Client return type: `{ count: number; uniques: number; views: ({ timestamp: string; uniques: number; count: number })[] }`
- OpenAPI response codes: `200`, `403`

```ts
import github from "@utdk/github";

type ReposGetViewsInput = Parameters<typeof github.repos.getViews> extends [infer T, ...unknown[]] ? T : undefined;
type ReposGetViewsOutput = Awaited<ReturnType<typeof github.repos.getViews>>;

const input: ReposGetViewsInput = {} as { owner: string; repo: string; per?: "day" | "week" };
const result: ReposGetViewsOutput = await github.repos.getViews(input);

// Result shape (from schema): { count: number; uniques: number; views: ({ timestamp: string; uniques: number; count: number })[] }
```

### `github.repos.transfer`

- **HTTP**: `POST /repos/{owner}/{repo}/transfer`
- **What it does**: Transfer a repository
- **OpenAPI operationId**: `repos/transfer`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ new_owner: string; new_name?: string; team_ids?: (number)[]; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`

```ts
import github from "@utdk/github";

type ReposTransferInput = Parameters<typeof github.repos.transfer> extends [infer T, ...unknown[]] ? T : undefined;
type ReposTransferOutput = Awaited<ReturnType<typeof github.repos.transfer>>;

const input: ReposTransferInput = {} as { new_owner: string; new_name?: string; team_ids?: (number)[]; owner: string; repo: string };
const result: ReposTransferOutput = await github.repos.transfer(input);

// Result shape (from schema): unknown
```

### `github.repos.disableVulnerabilityAlerts`

- **HTTP**: `DELETE /repos/{owner}/{repo}/vulnerability-alerts`
- **What it does**: Disable vulnerability alerts
- **OpenAPI operationId**: `repos/disable-vulnerability-alerts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposDisableVulnerabilityAlertsInput = Parameters<typeof github.repos.disableVulnerabilityAlerts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDisableVulnerabilityAlertsOutput = Awaited<ReturnType<typeof github.repos.disableVulnerabilityAlerts>>;

const input: ReposDisableVulnerabilityAlertsInput = {} as { owner: string; repo: string };
const result: ReposDisableVulnerabilityAlertsOutput = await github.repos.disableVulnerabilityAlerts(input);

// Result shape (from schema): unknown
```

### `github.repos.checkVulnerabilityAlerts`

- **HTTP**: `GET /repos/{owner}/{repo}/vulnerability-alerts`
- **What it does**: Check if vulnerability alerts are enabled for a repository
- **OpenAPI operationId**: `repos/check-vulnerability-alerts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `404`

```ts
import github from "@utdk/github";

type ReposCheckVulnerabilityAlertsInput = Parameters<typeof github.repos.checkVulnerabilityAlerts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCheckVulnerabilityAlertsOutput = Awaited<ReturnType<typeof github.repos.checkVulnerabilityAlerts>>;

const input: ReposCheckVulnerabilityAlertsInput = {} as { owner: string; repo: string };
const result: ReposCheckVulnerabilityAlertsOutput = await github.repos.checkVulnerabilityAlerts(input);

// Result shape (from schema): unknown
```

### `github.repos.enableVulnerabilityAlerts`

- **HTTP**: `PUT /repos/{owner}/{repo}/vulnerability-alerts`
- **What it does**: Enable vulnerability alerts
- **OpenAPI operationId**: `repos/enable-vulnerability-alerts`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ReposEnableVulnerabilityAlertsInput = Parameters<typeof github.repos.enableVulnerabilityAlerts> extends [infer T, ...unknown[]] ? T : undefined;
type ReposEnableVulnerabilityAlertsOutput = Awaited<ReturnType<typeof github.repos.enableVulnerabilityAlerts>>;

const input: ReposEnableVulnerabilityAlertsInput = {} as { owner: string; repo: string };
const result: ReposEnableVulnerabilityAlertsOutput = await github.repos.enableVulnerabilityAlerts(input);

// Result shape (from schema): unknown
```

### `github.repos.downloadZipballArchive`

- **HTTP**: `GET /repos/{owner}/{repo}/zipball/{ref}`
- **What it does**: Download a repository archive (zip)
- **OpenAPI operationId**: `repos/download-zipball-archive`
- **Path params**: `ref`
- **Query params**: None
- **Response codes**: `302`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; ref: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `302`

```ts
import github from "@utdk/github";

type ReposDownloadZipballArchiveInput = Parameters<typeof github.repos.downloadZipballArchive> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDownloadZipballArchiveOutput = Awaited<ReturnType<typeof github.repos.downloadZipballArchive>>;

const input: ReposDownloadZipballArchiveInput = {} as { owner: string; repo: string; ref: string };
const result: ReposDownloadZipballArchiveOutput = await github.repos.downloadZipballArchive(input);

// Result shape (from schema): unknown
```

### `github.repos.createUsingTemplate`

- **HTTP**: `POST /repos/{template_owner}/{template_repo}/generate`
- **What it does**: Create a repository using a template
- **OpenAPI operationId**: `repos/create-using-template`
- **Path params**: `template_owner`, `template_repo`
- **Query params**: None
- **Response codes**: `201`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner?: string; name: string; description?: string; include_all_branches?: boolean; private?: boolean; template_owner: string; template_repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...`
- OpenAPI response codes: `201`

```ts
import github from "@utdk/github";

type ReposCreateUsingTemplateInput = Parameters<typeof github.repos.createUsingTemplate> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateUsingTemplateOutput = Awaited<ReturnType<typeof github.repos.createUsingTemplate>>;

const input: ReposCreateUsingTemplateInput = {} as { owner?: string; name: string; description?: string; include_all_branches?: boolean; private?: boolean; template_owner: string; template_repo: string };
const result: ReposCreateUsingTemplateOutput = await github.repos.createUsingTemplate(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...
```

### `github.repos.listPublic`

- **HTTP**: `GET /repositories`
- **What it does**: List public repositories
- **OpenAPI operationId**: `repos/list-public`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ since?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `304`, `422`

```ts
import github from "@utdk/github";

type ReposListPublicInput = Parameters<typeof github.repos.listPublic> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListPublicOutput = Awaited<ReturnType<typeof github.repos.listPublic>>;

const input: ReposListPublicInput = {} as { since?: number };
const result: ReposListPublicOutput = await github.repos.listPublic(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.repos.listForAuthenticatedUser`

- **HTTP**: `GET /user/repos`
- **What it does**: List repositories for the authenticated user
- **OpenAPI operationId**: `repos/list-for-authenticated-user`
- **Path params**: None
- **Query params**: `visibility`, `affiliation`, `type`, `sort`, `direction`
- **Response codes**: `200`, `304`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ visibility?: "all" | "public" | "private"; affiliation?: string; type?: "all" | "owner" | "public" | "private" | "member"; sort?: "created" | "updated" | "pushed" | "full_name"; direction?: "asc" | "desc"; per_page?: number; page?: number; since?: string; before?: string }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type ReposListForAuthenticatedUserInput = Parameters<typeof github.repos.listForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.repos.listForAuthenticatedUser>>;

const input: ReposListForAuthenticatedUserInput = {} as { visibility?: "all" | "public" | "private"; affiliation?: string; type?: "all" | "owner" | "public" | "private" | "member"; sort?: "created" | "updated" | "pushed" | "full_name"; direction?: "asc" | "desc"; per_page?: number; page?: number; since?: string; before?: string };
const result: ReposListForAuthenticatedUserOutput = await github.repos.listForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?...
```

### `github.repos.createForAuthenticatedUser`

- **HTTP**: `POST /user/repos`
- **What it does**: Create a repository for the authenticated user
- **OpenAPI operationId**: `repos/create-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `201`, `304`, `400`, `401`, `403`, `404`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ name: string; description?: string; homepage?: string; private?: boolean; has_issues?: boolean; has_projects?: boolean; has_wiki?: boolean; has_discussions?: boolean; team_id?: number; auto_init?: boolean; gitignore_template?: string; license_template?: string; allow_squash_merge?: boolean; allow_merge_commit?: boolean; allow_rebase_merge?: boolean; allow_auto_merge?: boolean; delete_branch_on_merge?: boolean; squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE"; squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK"; merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE"; merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK"; has_downloads?: boolean; is_template?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...`
- OpenAPI response codes: `201`, `304`, `400`, `401`, `403`, `404`, `422`

```ts
import github from "@utdk/github";

type ReposCreateForAuthenticatedUserInput = Parameters<typeof github.repos.createForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ReposCreateForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.repos.createForAuthenticatedUser>>;

const input: ReposCreateForAuthenticatedUserInput = {} as { name: string; description?: string; homepage?: string; private?: boolean; has_issues?: boolean; has_projects?: boolean; has_wiki?: boolean; has_discussions?: boolean; team_id?: number; auto_init?: boolean; gitignore_template?: string; license_template?: string; allow_squash_merge?: boolean; allow_merge_commit?: boolean; allow_rebase_merge?: boolean; allow_auto_merge?: boolean; delete_branch_on_merge?: boolean; squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE"; squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK"; merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE"; merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK"; has_downloads?: boolean; is_template?: boolean };
const result: ReposCreateForAuthenticatedUserOutput = await github.repos.createForAuthenticatedUser(input);

// Result shape (from schema): { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: stri...
```

### `github.repos.listInvitationsForAuthenticatedUser`

- **HTTP**: `GET /user/repository_invitations`
- **What it does**: List repository invitations for the authenticated user
- **OpenAPI operationId**: `repos/list-invitations-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type ReposListInvitationsForAuthenticatedUserInput = Parameters<typeof github.repos.listInvitationsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListInvitationsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.repos.listInvitationsForAuthenticatedUser>>;

const input: ReposListInvitationsForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: ReposListInvitationsForAuthenticatedUserOutput = await github.repos.listInvitationsForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...
```

### `github.repos.declineInvitationForAuthenticatedUser`

- **HTTP**: `DELETE /user/repository_invitations/{invitation_id}`
- **What it does**: Decline a repository invitation
- **OpenAPI operationId**: `repos/decline-invitation-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ invitation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type ReposDeclineInvitationForAuthenticatedUserInput = Parameters<typeof github.repos.declineInvitationForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ReposDeclineInvitationForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.repos.declineInvitationForAuthenticatedUser>>;

const input: ReposDeclineInvitationForAuthenticatedUserInput = {} as { invitation_id: number };
const result: ReposDeclineInvitationForAuthenticatedUserOutput = await github.repos.declineInvitationForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.repos.acceptInvitationForAuthenticatedUser`

- **HTTP**: `PATCH /user/repository_invitations/{invitation_id}`
- **What it does**: Accept a repository invitation
- **OpenAPI operationId**: `repos/accept-invitation-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `403`, `404`, `409`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ invitation_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `403`, `404`, `409`

```ts
import github from "@utdk/github";

type ReposAcceptInvitationForAuthenticatedUserInput = Parameters<typeof github.repos.acceptInvitationForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ReposAcceptInvitationForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.repos.acceptInvitationForAuthenticatedUser>>;

const input: ReposAcceptInvitationForAuthenticatedUserInput = {} as { invitation_id: number };
const result: ReposAcceptInvitationForAuthenticatedUserOutput = await github.repos.acceptInvitationForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.repos.listForUser`

- **HTTP**: `GET /users/{username}/repos`
- **What it does**: List repositories for a user
- **OpenAPI operationId**: `repos/list-for-user`
- **Path params**: None
- **Query params**: `type`, `sort`, `direction`
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; type?: "all" | "owner" | "member"; sort?: "created" | "updated" | "pushed" | "full_name"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ReposListForUserInput = Parameters<typeof github.repos.listForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ReposListForUserOutput = Awaited<ReturnType<typeof github.repos.listForUser>>;

const input: ReposListForUserInput = {} as { username: string; type?: "all" | "owner" | "member"; sort?: "created" | "updated" | "pushed" | "full_name"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: ReposListForUserOutput = await github.repos.listForUser(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

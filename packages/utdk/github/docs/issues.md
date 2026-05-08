# Issues

Generated from OpenAPI operation grouping.

- `GET /issues`: List issues assigned to the authenticated user
- `GET /orgs/{org}/issues`: List organization issues assigned to the authenticated user
- `GET /repos/{owner}/{repo}/assignees`: List assignees
- `GET /repos/{owner}/{repo}/assignees/{assignee}`: Check if a user can be assigned
- `GET /repos/{owner}/{repo}/issues`: List repository issues
- `POST /repos/{owner}/{repo}/issues`: Create an issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}`: Get an issue
- `PATCH /repos/{owner}/{repo}/issues/{issue_number}`: Update an issue
- `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`: Remove assignees from an issue
- `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`: Add assignees to an issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}`: Check if a user can be assigned to a issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}/comments`: List issue comments
- `POST /repos/{owner}/{repo}/issues/{issue_number}/comments`: Create an issue comment
- `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`: List dependencies an issue is blocked by
- `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`: Add a dependency an issue is blocked by
- `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`: Remove dependency an issue is blocked by
- `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`: List dependencies an issue is blocking
- `GET /repos/{owner}/{repo}/issues/{issue_number}/events`: List issue events
- `GET /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values`: List issue field values for an issue
- `DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`: Remove all labels from an issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}/labels`: List labels for an issue
- `POST /repos/{owner}/{repo}/issues/{issue_number}/labels`: Add labels to an issue
- `PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`: Set labels for an issue
- `DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`: Remove a label from an issue
- `DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`: Unlock an issue
- `PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`: Lock an issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`: Get parent issue
- `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`: Remove sub-issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`: List sub-issues
- `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`: Add sub-issue
- `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`: Reprioritize sub-issue
- `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`: List timeline events for an issue
- `GET /repos/{owner}/{repo}/issues/comments`: List issue comments for a repository
- `DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`: Delete an issue comment
- `GET /repos/{owner}/{repo}/issues/comments/{comment_id}`: Get an issue comment
- `PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`: Update an issue comment
- `DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/pin`: Unpin an issue comment
- `PUT /repos/{owner}/{repo}/issues/comments/{comment_id}/pin`: Pin an issue comment
- `GET /repos/{owner}/{repo}/issues/events`: List issue events for a repository
- `GET /repos/{owner}/{repo}/issues/events/{event_id}`: Get an issue event
- `GET /repos/{owner}/{repo}/labels`: List labels for a repository
- `POST /repos/{owner}/{repo}/labels`: Create a label
- `DELETE /repos/{owner}/{repo}/labels/{name}`: Delete a label
- `GET /repos/{owner}/{repo}/labels/{name}`: Get a label
- `PATCH /repos/{owner}/{repo}/labels/{name}`: Update a label
- `GET /repos/{owner}/{repo}/milestones`: List milestones
- `POST /repos/{owner}/{repo}/milestones`: Create a milestone
- `DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`: Delete a milestone
- `GET /repos/{owner}/{repo}/milestones/{milestone_number}`: Get a milestone
- `PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`: Update a milestone
- `GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`: List labels for issues in a milestone
- `POST /repositories/{repository_id}/issues/{issue_number}/issue-field-values`: Add issue field values to an issue
- `PUT /repositories/{repository_id}/issues/{issue_number}/issue-field-values`: Set issue field values for an issue
- `DELETE /repositories/{repository_id}/issues/{issue_number}/issue-field-values/{issue_field_id}`: Delete an issue field value from an issue
- `GET /user/issues`: List user account issues assigned to the authenticated user

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

# Activity

Generated from OpenAPI operation grouping.

- `GET /events`: List public events
- `GET /feeds`: Get feeds
- `GET /networks/{owner}/{repo}/events`: List public events for a network of repositories
- `GET /notifications`: List notifications for the authenticated user
- `PUT /notifications`: Mark notifications as read
- `DELETE /notifications/threads/{thread_id}`: Mark a thread as done
- `GET /notifications/threads/{thread_id}`: Get a thread
- `PATCH /notifications/threads/{thread_id}`: Mark a thread as read
- `DELETE /notifications/threads/{thread_id}/subscription`: Delete a thread subscription
- `GET /notifications/threads/{thread_id}/subscription`: Get a thread subscription for the authenticated user
- `PUT /notifications/threads/{thread_id}/subscription`: Set a thread subscription
- `GET /orgs/{org}/events`: List public organization events
- `GET /repos/{owner}/{repo}/events`: List repository events
- `GET /repos/{owner}/{repo}/notifications`: List repository notifications for the authenticated user
- `PUT /repos/{owner}/{repo}/notifications`: Mark repository notifications as read
- `GET /repos/{owner}/{repo}/stargazers`: List stargazers
- `GET /repos/{owner}/{repo}/subscribers`: List watchers
- `DELETE /repos/{owner}/{repo}/subscription`: Delete a repository subscription
- `GET /repos/{owner}/{repo}/subscription`: Get a repository subscription
- `PUT /repos/{owner}/{repo}/subscription`: Set a repository subscription
- `GET /user/starred`: List repositories starred by the authenticated user
- `DELETE /user/starred/{owner}/{repo}`: Unstar a repository for the authenticated user
- `GET /user/starred/{owner}/{repo}`: Check if a repository is starred by the authenticated user
- `PUT /user/starred/{owner}/{repo}`: Star a repository for the authenticated user
- `GET /user/subscriptions`: List repositories watched by the authenticated user
- `GET /users/{username}/events`: List events for the authenticated user
- `GET /users/{username}/events/orgs/{org}`: List organization events for the authenticated user
- `GET /users/{username}/events/public`: List public events for a user
- `GET /users/{username}/received_events`: List events received by the authenticated user
- `GET /users/{username}/received_events/public`: List public events received by a user
- `GET /users/{username}/starred`: List repositories starred by a user
- `GET /users/{username}/subscriptions`: List repositories watched by a user

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

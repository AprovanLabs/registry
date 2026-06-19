# Activity

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.activity.listPublicEvents`

- **HTTP**: `GET /events`
- **What it does**: List public events
- **OpenAPI operationId**: `activity/list-public-events`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `403`, `503`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`, `304`, `403`, `503`

```ts
import github from "@utdk/github";

type ActivityListPublicEventsInput = Parameters<typeof github.activity.listPublicEvents> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListPublicEventsOutput = Awaited<ReturnType<typeof github.activity.listPublicEvents>>;

const input: ActivityListPublicEventsInput = {} as { per_page?: number; page?: number };
const result: ActivityListPublicEventsOutput = await github.activity.listPublicEvents(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.getFeeds`

- **HTTP**: `GET /feeds`
- **What it does**: Get feeds
- **OpenAPI operationId**: `activity/get-feeds`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ [key: string]: unknown }`
- Client transport options: None

**Outputs**

- Client return type: `{ timeline_url: string; user_url: string; current_user_public_url?: string; current_user_url?: string; current_user_actor_url?: string; current_user_organization_url?: string; current_user_organization_urls?: (string)[]...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityGetFeedsInput = Parameters<typeof github.activity.getFeeds> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityGetFeedsOutput = Awaited<ReturnType<typeof github.activity.getFeeds>>;

const result: ActivityGetFeedsOutput = await github.activity.getFeeds();

// Result shape (from schema): { timeline_url: string; user_url: string; current_user_public_url?: string; current_user_url?: string; current_user_actor_url?: string; current_user_organization_url?: string; current_user_organization_urls?: (string)[]...
```

### `github.activity.listPublicEventsForRepoNetwork`

- **HTTP**: `GET /networks/{owner}/{repo}/events`
- **What it does**: List public events for a network of repositories
- **OpenAPI operationId**: `activity/list-public-events-for-repo-network`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `301`, `304`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`, `301`, `304`, `403`, `404`

```ts
import github from "@utdk/github";

type ActivityListPublicEventsForRepoNetworkInput = Parameters<typeof github.activity.listPublicEventsForRepoNetwork> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListPublicEventsForRepoNetworkOutput = Awaited<ReturnType<typeof github.activity.listPublicEventsForRepoNetwork>>;

const input: ActivityListPublicEventsForRepoNetworkInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActivityListPublicEventsForRepoNetworkOutput = await github.activity.listPublicEventsForRepoNetwork(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listNotificationsForAuthenticatedUser`

- **HTTP**: `GET /notifications`
- **What it does**: List notifications for the authenticated user
- **OpenAPI operationId**: `activity/list-notifications-for-authenticated-user`
- **Path params**: None
- **Query params**: `per_page`
- **Response codes**: `200`, `304`, `401`, `403`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ all?: boolean; participating?: boolean; since?: string; before?: string; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...`
- OpenAPI response codes: `200`, `304`, `401`, `403`, `422`

```ts
import github from "@utdk/github";

type ActivityListNotificationsForAuthenticatedUserInput = Parameters<typeof github.activity.listNotificationsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListNotificationsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.listNotificationsForAuthenticatedUser>>;

const input: ActivityListNotificationsForAuthenticatedUserInput = {} as { all?: boolean; participating?: boolean; since?: string; before?: string; page?: number; per_page?: number };
const result: ActivityListNotificationsForAuthenticatedUserOutput = await github.activity.listNotificationsForAuthenticatedUser(input);

// Result shape (from schema): ({ id: string; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...
```

### `github.activity.markNotificationsAsRead`

- **HTTP**: `PUT /notifications`
- **What it does**: Mark notifications as read
- **OpenAPI operationId**: `activity/mark-notifications-as-read`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `205`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ last_read_at?: string; read?: boolean }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `205`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivityMarkNotificationsAsReadInput = Parameters<typeof github.activity.markNotificationsAsRead> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityMarkNotificationsAsReadOutput = Awaited<ReturnType<typeof github.activity.markNotificationsAsRead>>;

const input: ActivityMarkNotificationsAsReadInput = {} as { last_read_at?: string; read?: boolean };
const result: ActivityMarkNotificationsAsReadOutput = await github.activity.markNotificationsAsRead(input);

// Result shape (from schema): unknown
```

### `github.activity.markThreadAsDone`

- **HTTP**: `DELETE /notifications/threads/{thread_id}`
- **What it does**: Mark a thread as done
- **OpenAPI operationId**: `activity/mark-thread-as-done`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ thread_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`

```ts
import github from "@utdk/github";

type ActivityMarkThreadAsDoneInput = Parameters<typeof github.activity.markThreadAsDone> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityMarkThreadAsDoneOutput = Awaited<ReturnType<typeof github.activity.markThreadAsDone>>;

const input: ActivityMarkThreadAsDoneInput = {} as { thread_id: number };
const result: ActivityMarkThreadAsDoneOutput = await github.activity.markThreadAsDone(input);

// Result shape (from schema): unknown
```

### `github.activity.getThread`

- **HTTP**: `GET /notifications/threads/{thread_id}`
- **What it does**: Get a thread
- **OpenAPI operationId**: `activity/get-thread`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ thread_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: string; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivityGetThreadInput = Parameters<typeof github.activity.getThread> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityGetThreadOutput = Awaited<ReturnType<typeof github.activity.getThread>>;

const input: ActivityGetThreadInput = {} as { thread_id: number };
const result: ActivityGetThreadOutput = await github.activity.getThread(input);

// Result shape (from schema): { id: string; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id...
```

### `github.activity.markThreadAsRead`

- **HTTP**: `PATCH /notifications/threads/{thread_id}`
- **What it does**: Mark a thread as read
- **OpenAPI operationId**: `activity/mark-thread-as-read`
- **Path params**: None
- **Query params**: None
- **Response codes**: `205`, `304`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ thread_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `205`, `304`, `403`

```ts
import github from "@utdk/github";

type ActivityMarkThreadAsReadInput = Parameters<typeof github.activity.markThreadAsRead> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityMarkThreadAsReadOutput = Awaited<ReturnType<typeof github.activity.markThreadAsRead>>;

const input: ActivityMarkThreadAsReadInput = {} as { thread_id: number };
const result: ActivityMarkThreadAsReadOutput = await github.activity.markThreadAsRead(input);

// Result shape (from schema): unknown
```

### `github.activity.deleteThreadSubscription`

- **HTTP**: `DELETE /notifications/threads/{thread_id}/subscription`
- **What it does**: Delete a thread subscription
- **OpenAPI operationId**: `activity/delete-thread-subscription`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ thread_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivityDeleteThreadSubscriptionInput = Parameters<typeof github.activity.deleteThreadSubscription> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityDeleteThreadSubscriptionOutput = Awaited<ReturnType<typeof github.activity.deleteThreadSubscription>>;

const input: ActivityDeleteThreadSubscriptionInput = {} as { thread_id: number };
const result: ActivityDeleteThreadSubscriptionOutput = await github.activity.deleteThreadSubscription(input);

// Result shape (from schema): unknown
```

### `github.activity.getThreadSubscriptionForAuthenticatedUser`

- **HTTP**: `GET /notifications/threads/{thread_id}/subscription`
- **What it does**: Get a thread subscription for the authenticated user
- **OpenAPI operationId**: `activity/get-thread-subscription-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ thread_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ subscribed: boolean; ignored: boolean; reason: string | null; created_at: string | null; url: string; thread_url?: string; repository_url?: string }`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivityGetThreadSubscriptionForAuthenticatedUserInput = Parameters<typeof github.activity.getThreadSubscriptionForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityGetThreadSubscriptionForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.getThreadSubscriptionForAuthenticatedUser>>;

const input: ActivityGetThreadSubscriptionForAuthenticatedUserInput = {} as { thread_id: number };
const result: ActivityGetThreadSubscriptionForAuthenticatedUserOutput = await github.activity.getThreadSubscriptionForAuthenticatedUser(input);

// Result shape (from schema): { subscribed: boolean; ignored: boolean; reason: string | null; created_at: string | null; url: string; thread_url?: string; repository_url?: string }
```

### `github.activity.setThreadSubscription`

- **HTTP**: `PUT /notifications/threads/{thread_id}/subscription`
- **What it does**: Set a thread subscription
- **OpenAPI operationId**: `activity/set-thread-subscription`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ ignored?: boolean; thread_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ subscribed: boolean; ignored: boolean; reason: string | null; created_at: string | null; url: string; thread_url?: string; repository_url?: string }`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivitySetThreadSubscriptionInput = Parameters<typeof github.activity.setThreadSubscription> extends [infer T, ...unknown[]] ? T : undefined;
type ActivitySetThreadSubscriptionOutput = Awaited<ReturnType<typeof github.activity.setThreadSubscription>>;

const input: ActivitySetThreadSubscriptionInput = {} as { ignored?: boolean; thread_id: number };
const result: ActivitySetThreadSubscriptionOutput = await github.activity.setThreadSubscription(input);

// Result shape (from schema): { subscribed: boolean; ignored: boolean; reason: string | null; created_at: string | null; url: string; thread_url?: string; repository_url?: string }
```

### `github.activity.listPublicOrgEvents`

- **HTTP**: `GET /orgs/{org}/events`
- **What it does**: List public organization events
- **OpenAPI operationId**: `activity/list-public-org-events`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListPublicOrgEventsInput = Parameters<typeof github.activity.listPublicOrgEvents> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListPublicOrgEventsOutput = Awaited<ReturnType<typeof github.activity.listPublicOrgEvents>>;

const input: ActivityListPublicOrgEventsInput = {} as { org: string; per_page?: number; page?: number };
const result: ActivityListPublicOrgEventsOutput = await github.activity.listPublicOrgEvents(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listRepoEvents`

- **HTTP**: `GET /repos/{owner}/{repo}/events`
- **What it does**: List repository events
- **OpenAPI operationId**: `activity/list-repo-events`
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

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListRepoEventsInput = Parameters<typeof github.activity.listRepoEvents> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListRepoEventsOutput = Awaited<ReturnType<typeof github.activity.listRepoEvents>>;

const input: ActivityListRepoEventsInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActivityListRepoEventsOutput = await github.activity.listRepoEvents(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listRepoNotificationsForAuthenticatedUser`

- **HTTP**: `GET /repos/{owner}/{repo}/notifications`
- **What it does**: List repository notifications for the authenticated user
- **OpenAPI operationId**: `activity/list-repo-notifications-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; all?: boolean; participating?: boolean; since?: string; before?: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListRepoNotificationsForAuthenticatedUserInput = Parameters<typeof github.activity.listRepoNotificationsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListRepoNotificationsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.listRepoNotificationsForAuthenticatedUser>>;

const input: ActivityListRepoNotificationsForAuthenticatedUserInput = {} as { owner: string; repo: string; all?: boolean; participating?: boolean; since?: string; before?: string; per_page?: number; page?: number };
const result: ActivityListRepoNotificationsForAuthenticatedUserOutput = await github.activity.listRepoNotificationsForAuthenticatedUser(input);

// Result shape (from schema): ({ id: string; repository: { id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_i...
```

### `github.activity.markRepoNotificationsAsRead`

- **HTTP**: `PUT /repos/{owner}/{repo}/notifications`
- **What it does**: Mark repository notifications as read
- **OpenAPI operationId**: `activity/mark-repo-notifications-as-read`
- **Path params**: None
- **Query params**: None
- **Response codes**: `202`, `205`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ last_read_at?: string; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `202`, `205`

```ts
import github from "@utdk/github";

type ActivityMarkRepoNotificationsAsReadInput = Parameters<typeof github.activity.markRepoNotificationsAsRead> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityMarkRepoNotificationsAsReadOutput = Awaited<ReturnType<typeof github.activity.markRepoNotificationsAsRead>>;

const input: ActivityMarkRepoNotificationsAsReadInput = {} as { last_read_at?: string; owner: string; repo: string };
const result: ActivityMarkRepoNotificationsAsReadOutput = await github.activity.markRepoNotificationsAsRead(input);

// Result shape (from schema): unknown
```

### `github.activity.listStargazersForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/stargazers`
- **What it does**: List stargazers
- **OpenAPI operationId**: `activity/list-stargazers-for-repo`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `422`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`, `422`

```ts
import github from "@utdk/github";

type ActivityListStargazersForRepoInput = Parameters<typeof github.activity.listStargazersForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListStargazersForRepoOutput = Awaited<ReturnType<typeof github.activity.listStargazersForRepo>>;

const input: ActivityListStargazersForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActivityListStargazersForRepoOutput = await github.activity.listStargazersForRepo(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.activity.listWatchersForRepo`

- **HTTP**: `GET /repos/{owner}/{repo}/subscribers`
- **What it does**: List watchers
- **OpenAPI operationId**: `activity/list-watchers-for-repo`
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

- Client return type: `({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListWatchersForRepoInput = Parameters<typeof github.activity.listWatchersForRepo> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListWatchersForRepoOutput = Awaited<ReturnType<typeof github.activity.listWatchersForRepo>>;

const input: ActivityListWatchersForRepoInput = {} as { owner: string; repo: string; per_page?: number; page?: number };
const result: ActivityListWatchersForRepoOutput = await github.activity.listWatchersForRepo(input);

// Result shape (from schema): ({ name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: string; html_url: string; followers_url: string; following_url: string; gi...
```

### `github.activity.deleteRepoSubscription`

- **HTTP**: `DELETE /repos/{owner}/{repo}/subscription`
- **What it does**: Delete a repository subscription
- **OpenAPI operationId**: `activity/delete-repo-subscription`
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

type ActivityDeleteRepoSubscriptionInput = Parameters<typeof github.activity.deleteRepoSubscription> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityDeleteRepoSubscriptionOutput = Awaited<ReturnType<typeof github.activity.deleteRepoSubscription>>;

const input: ActivityDeleteRepoSubscriptionInput = {} as { owner: string; repo: string };
const result: ActivityDeleteRepoSubscriptionOutput = await github.activity.deleteRepoSubscription(input);

// Result shape (from schema): unknown
```

### `github.activity.getRepoSubscription`

- **HTTP**: `GET /repos/{owner}/{repo}/subscription`
- **What it does**: Get a repository subscription
- **OpenAPI operationId**: `activity/get-repo-subscription`
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

- Client return type: `{ subscribed: boolean; ignored: boolean; reason: string | null; created_at: string; url: string; repository_url: string }`
- OpenAPI response codes: `200`, `403`, `404`

```ts
import github from "@utdk/github";

type ActivityGetRepoSubscriptionInput = Parameters<typeof github.activity.getRepoSubscription> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityGetRepoSubscriptionOutput = Awaited<ReturnType<typeof github.activity.getRepoSubscription>>;

const input: ActivityGetRepoSubscriptionInput = {} as { owner: string; repo: string };
const result: ActivityGetRepoSubscriptionOutput = await github.activity.getRepoSubscription(input);

// Result shape (from schema): { subscribed: boolean; ignored: boolean; reason: string | null; created_at: string; url: string; repository_url: string }
```

### `github.activity.setRepoSubscription`

- **HTTP**: `PUT /repos/{owner}/{repo}/subscription`
- **What it does**: Set a repository subscription
- **OpenAPI operationId**: `activity/set-repo-subscription`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ subscribed?: boolean; ignored?: boolean; owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `{ subscribed: boolean; ignored: boolean; reason: string | null; created_at: string; url: string; repository_url: string }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivitySetRepoSubscriptionInput = Parameters<typeof github.activity.setRepoSubscription> extends [infer T, ...unknown[]] ? T : undefined;
type ActivitySetRepoSubscriptionOutput = Awaited<ReturnType<typeof github.activity.setRepoSubscription>>;

const input: ActivitySetRepoSubscriptionInput = {} as { subscribed?: boolean; ignored?: boolean; owner: string; repo: string };
const result: ActivitySetRepoSubscriptionOutput = await github.activity.setRepoSubscription(input);

// Result shape (from schema): { subscribed: boolean; ignored: boolean; reason: string | null; created_at: string; url: string; repository_url: string }
```

### `github.activity.listReposStarredByAuthenticatedUser`

- **HTTP**: `GET /user/starred`
- **What it does**: List repositories starred by the authenticated user
- **OpenAPI operationId**: `activity/list-repos-starred-by-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivityListReposStarredByAuthenticatedUserInput = Parameters<typeof github.activity.listReposStarredByAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListReposStarredByAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.listReposStarredByAuthenticatedUser>>;

const input: ActivityListReposStarredByAuthenticatedUserInput = {} as { sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: ActivityListReposStarredByAuthenticatedUserOutput = await github.activity.listReposStarredByAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; license: { key: string; name: string; url: string | null; spdx_id: string | null; node_id: string; html_url?: string } | null; forks: number; permissions?...
```

### `github.activity.unstarRepoForAuthenticatedUser`

- **HTTP**: `DELETE /user/starred/{owner}/{repo}`
- **What it does**: Unstar a repository for the authenticated user
- **OpenAPI operationId**: `activity/unstar-repo-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type ActivityUnstarRepoForAuthenticatedUserInput = Parameters<typeof github.activity.unstarRepoForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityUnstarRepoForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.unstarRepoForAuthenticatedUser>>;

const input: ActivityUnstarRepoForAuthenticatedUserInput = {} as { owner: string; repo: string };
const result: ActivityUnstarRepoForAuthenticatedUserOutput = await github.activity.unstarRepoForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.activity.checkRepoIsStarredByAuthenticatedUser`

- **HTTP**: `GET /user/starred/{owner}/{repo}`
- **What it does**: Check if a repository is starred by the authenticated user
- **OpenAPI operationId**: `activity/check-repo-is-starred-by-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type ActivityCheckRepoIsStarredByAuthenticatedUserInput = Parameters<typeof github.activity.checkRepoIsStarredByAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityCheckRepoIsStarredByAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.checkRepoIsStarredByAuthenticatedUser>>;

const input: ActivityCheckRepoIsStarredByAuthenticatedUserInput = {} as { owner: string; repo: string };
const result: ActivityCheckRepoIsStarredByAuthenticatedUserOutput = await github.activity.checkRepoIsStarredByAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.activity.starRepoForAuthenticatedUser`

- **HTTP**: `PUT /user/starred/{owner}/{repo}`
- **What it does**: Star a repository for the authenticated user
- **OpenAPI operationId**: `activity/star-repo-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `204`, `304`, `401`, `403`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ owner: string; repo: string }`
- Client transport options: None

**Outputs**

- Client return type: `unknown`
- OpenAPI response codes: `204`, `304`, `401`, `403`, `404`

```ts
import github from "@utdk/github";

type ActivityStarRepoForAuthenticatedUserInput = Parameters<typeof github.activity.starRepoForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityStarRepoForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.starRepoForAuthenticatedUser>>;

const input: ActivityStarRepoForAuthenticatedUserInput = {} as { owner: string; repo: string };
const result: ActivityStarRepoForAuthenticatedUserOutput = await github.activity.starRepoForAuthenticatedUser(input);

// Result shape (from schema): unknown
```

### `github.activity.listWatchedReposForAuthenticatedUser`

- **HTTP**: `GET /user/subscriptions`
- **What it does**: List repositories watched by the authenticated user
- **OpenAPI operationId**: `activity/list-watched-repos-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `304`, `401`, `403`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`, `304`, `401`, `403`

```ts
import github from "@utdk/github";

type ActivityListWatchedReposForAuthenticatedUserInput = Parameters<typeof github.activity.listWatchedReposForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListWatchedReposForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.listWatchedReposForAuthenticatedUser>>;

const input: ActivityListWatchedReposForAuthenticatedUserInput = {} as { per_page?: number; page?: number };
const result: ActivityListWatchedReposForAuthenticatedUserOutput = await github.activity.listWatchedReposForAuthenticatedUser(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```

### `github.activity.listEventsForAuthenticatedUser`

- **HTTP**: `GET /users/{username}/events`
- **What it does**: List events for the authenticated user
- **OpenAPI operationId**: `activity/list-events-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListEventsForAuthenticatedUserInput = Parameters<typeof github.activity.listEventsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListEventsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.listEventsForAuthenticatedUser>>;

const input: ActivityListEventsForAuthenticatedUserInput = {} as { username: string; per_page?: number; page?: number };
const result: ActivityListEventsForAuthenticatedUserOutput = await github.activity.listEventsForAuthenticatedUser(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listOrgEventsForAuthenticatedUser`

- **HTTP**: `GET /users/{username}/events/orgs/{org}`
- **What it does**: List organization events for the authenticated user
- **OpenAPI operationId**: `activity/list-org-events-for-authenticated-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; org: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListOrgEventsForAuthenticatedUserInput = Parameters<typeof github.activity.listOrgEventsForAuthenticatedUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListOrgEventsForAuthenticatedUserOutput = Awaited<ReturnType<typeof github.activity.listOrgEventsForAuthenticatedUser>>;

const input: ActivityListOrgEventsForAuthenticatedUserInput = {} as { username: string; org: string; per_page?: number; page?: number };
const result: ActivityListOrgEventsForAuthenticatedUserOutput = await github.activity.listOrgEventsForAuthenticatedUser(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listPublicEventsForUser`

- **HTTP**: `GET /users/{username}/events/public`
- **What it does**: List public events for a user
- **OpenAPI operationId**: `activity/list-public-events-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListPublicEventsForUserInput = Parameters<typeof github.activity.listPublicEventsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListPublicEventsForUserOutput = Awaited<ReturnType<typeof github.activity.listPublicEventsForUser>>;

const input: ActivityListPublicEventsForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: ActivityListPublicEventsForUserOutput = await github.activity.listPublicEventsForUser(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listReceivedEventsForUser`

- **HTTP**: `GET /users/{username}/received_events`
- **What it does**: List events received by the authenticated user
- **OpenAPI operationId**: `activity/list-received-events-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListReceivedEventsForUserInput = Parameters<typeof github.activity.listReceivedEventsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListReceivedEventsForUserOutput = Awaited<ReturnType<typeof github.activity.listReceivedEventsForUser>>;

const input: ActivityListReceivedEventsForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: ActivityListReceivedEventsForUserOutput = await github.activity.listReceivedEventsForUser(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listReceivedPublicEventsForUser`

- **HTTP**: `GET /users/{username}/received_events/public`
- **What it does**: List public events received by a user
- **OpenAPI operationId**: `activity/list-received-public-events-for-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListReceivedPublicEventsForUserInput = Parameters<typeof github.activity.listReceivedPublicEventsForUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListReceivedPublicEventsForUserOutput = Awaited<ReturnType<typeof github.activity.listReceivedPublicEventsForUser>>;

const input: ActivityListReceivedPublicEventsForUserInput = {} as { username: string; per_page?: number; page?: number };
const result: ActivityListReceivedPublicEventsForUserOutput = await github.activity.listReceivedPublicEventsForUser(input);

// Result shape (from schema): ({ id: string; type: string | null; actor: { id: number; login: string; display_login?: string; gravatar_id: string | null; url: string; avatar_url: string }; repo: { id: number; name: string; url: string }; org?: { id:...
```

### `github.activity.listReposStarredByUser`

- **HTTP**: `GET /users/{username}/starred`
- **What it does**: List repositories starred by a user
- **OpenAPI operationId**: `activity/list-repos-starred-by-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ [key: string]: unknown }`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListReposStarredByUserInput = Parameters<typeof github.activity.listReposStarredByUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListReposStarredByUserOutput = Awaited<ReturnType<typeof github.activity.listReposStarredByUser>>;

const input: ActivityListReposStarredByUserInput = {} as { username: string; sort?: "created" | "updated"; direction?: "asc" | "desc"; per_page?: number; page?: number };
const result: ActivityListReposStarredByUserOutput = await github.activity.listReposStarredByUser(input);

// Result shape (from schema): { [key: string]: unknown }
```

### `github.activity.listReposWatchedByUser`

- **HTTP**: `GET /users/{username}/subscriptions`
- **What it does**: List repositories watched by a user
- **OpenAPI operationId**: `activity/list-repos-watched-by-user`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ username: string; per_page?: number; page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ActivityListReposWatchedByUserInput = Parameters<typeof github.activity.listReposWatchedByUser> extends [infer T, ...unknown[]] ? T : undefined;
type ActivityListReposWatchedByUserOutput = Awaited<ReturnType<typeof github.activity.listReposWatchedByUser>>;

const input: ActivityListReposWatchedByUserInput = {} as { username: string; per_page?: number; page?: number };
const result: ActivityListReposWatchedByUserOutput = await github.activity.listReposWatchedByUser(input);

// Result shape (from schema): ({ id: number; node_id: string; name: string; full_name: string; owner: { name?: string | null; email?: string | null; login: string; id: number; node_id: string; avatar_url: string; gravatar_id: string | null; url: str...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

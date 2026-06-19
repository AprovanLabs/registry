# Classroom

Use these operations through the generated client (not direct HTTP calls).

Import path: `@utdk/github`

## Operations

### `github.classroom.getAnAssignment`

- **HTTP**: `GET /assignments/{assignment_id}`
- **What it does**: Get an assignment
- **OpenAPI operationId**: `classroom/get-an-assignment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ assignment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; public_repo: boolean; title: string; type: "individual" | "group"; invite_link: string; invitations_enabled: boolean; slug: string; students_are_repo_admins: boolean; feedback_pull_requests_enabled: boolea...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ClassroomGetAnAssignmentInput = Parameters<typeof github.classroom.getAnAssignment> extends [infer T, ...unknown[]] ? T : undefined;
type ClassroomGetAnAssignmentOutput = Awaited<ReturnType<typeof github.classroom.getAnAssignment>>;

const input: ClassroomGetAnAssignmentInput = {} as { assignment_id: number };
const result: ClassroomGetAnAssignmentOutput = await github.classroom.getAnAssignment(input);

// Result shape (from schema): { id: number; public_repo: boolean; title: string; type: "individual" | "group"; invite_link: string; invitations_enabled: boolean; slug: string; students_are_repo_admins: boolean; feedback_pull_requests_enabled: boolea...
```

### `github.classroom.listAcceptedAssignmentsForAnAssignment`

- **HTTP**: `GET /assignments/{assignment_id}/accepted_assignments`
- **What it does**: List accepted assignments for an assignment
- **OpenAPI operationId**: `classroom/list-accepted-assignments-for-an-assignment`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ assignment_id: number; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; submitted: boolean; passing: boolean; commit_count: number; grade: string; students: ({ id: number; login: string; avatar_url: string; html_url: string })[]; repository: { id: number; full_name: string; h...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ClassroomListAcceptedAssignmentsForAnAssignmentInput = Parameters<typeof github.classroom.listAcceptedAssignmentsForAnAssignment> extends [infer T, ...unknown[]] ? T : undefined;
type ClassroomListAcceptedAssignmentsForAnAssignmentOutput = Awaited<ReturnType<typeof github.classroom.listAcceptedAssignmentsForAnAssignment>>;

const input: ClassroomListAcceptedAssignmentsForAnAssignmentInput = {} as { assignment_id: number; page?: number; per_page?: number };
const result: ClassroomListAcceptedAssignmentsForAnAssignmentOutput = await github.classroom.listAcceptedAssignmentsForAnAssignment(input);

// Result shape (from schema): ({ id: number; submitted: boolean; passing: boolean; commit_count: number; grade: string; students: ({ id: number; login: string; avatar_url: string; html_url: string })[]; repository: { id: number; full_name: string; h...
```

### `github.classroom.getAssignmentGrades`

- **HTTP**: `GET /assignments/{assignment_id}/grades`
- **What it does**: Get assignment grades
- **OpenAPI operationId**: `classroom/get-assignment-grades`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ assignment_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ assignment_name: string; assignment_url: string; starter_code_url: string; github_username: string; roster_identifier: string; student_repository_name: string; student_repository_url: string; submission_timestamp: st...`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ClassroomGetAssignmentGradesInput = Parameters<typeof github.classroom.getAssignmentGrades> extends [infer T, ...unknown[]] ? T : undefined;
type ClassroomGetAssignmentGradesOutput = Awaited<ReturnType<typeof github.classroom.getAssignmentGrades>>;

const input: ClassroomGetAssignmentGradesInput = {} as { assignment_id: number };
const result: ClassroomGetAssignmentGradesOutput = await github.classroom.getAssignmentGrades(input);

// Result shape (from schema): ({ assignment_name: string; assignment_url: string; starter_code_url: string; github_username: string; roster_identifier: string; student_repository_name: string; student_repository_url: string; submission_timestamp: st...
```

### `github.classroom.listClassrooms`

- **HTTP**: `GET /classrooms`
- **What it does**: List classrooms
- **OpenAPI operationId**: `classroom/list-classrooms`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; name: string; archived: boolean; url: string })[]`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ClassroomListClassroomsInput = Parameters<typeof github.classroom.listClassrooms> extends [infer T, ...unknown[]] ? T : undefined;
type ClassroomListClassroomsOutput = Awaited<ReturnType<typeof github.classroom.listClassrooms>>;

const input: ClassroomListClassroomsInput = {} as { page?: number; per_page?: number };
const result: ClassroomListClassroomsOutput = await github.classroom.listClassrooms(input);

// Result shape (from schema): ({ id: number; name: string; archived: boolean; url: string })[]
```

### `github.classroom.getAClassroom`

- **HTTP**: `GET /classrooms/{classroom_id}`
- **What it does**: Get a classroom
- **OpenAPI operationId**: `classroom/get-a-classroom`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`, `404`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ classroom_id: number }`
- Client transport options: None

**Outputs**

- Client return type: `{ id: number; name: string; archived: boolean; organization: { id: number; login: string; node_id: string; html_url: string; name: string | null; avatar_url: string }; url: string }`
- OpenAPI response codes: `200`, `404`

```ts
import github from "@utdk/github";

type ClassroomGetAClassroomInput = Parameters<typeof github.classroom.getAClassroom> extends [infer T, ...unknown[]] ? T : undefined;
type ClassroomGetAClassroomOutput = Awaited<ReturnType<typeof github.classroom.getAClassroom>>;

const input: ClassroomGetAClassroomInput = {} as { classroom_id: number };
const result: ClassroomGetAClassroomOutput = await github.classroom.getAClassroom(input);

// Result shape (from schema): { id: number; name: string; archived: boolean; organization: { id: number; login: string; node_id: string; html_url: string; name: string | null; avatar_url: string }; url: string }
```

### `github.classroom.listAssignmentsForAClassroom`

- **HTTP**: `GET /classrooms/{classroom_id}/assignments`
- **What it does**: List assignments for a classroom
- **OpenAPI operationId**: `classroom/list-assignments-for-a-classroom`
- **Path params**: None
- **Query params**: None
- **Response codes**: `200`
- **Transport options**: None
- **Source**: [OpenAPI reference](https://docs.github.com/rest/)
- **TypeScript**: [Client interface](../types.ts)

**Inputs**

- Client input type: `{ classroom_id: number; page?: number; per_page?: number }`
- Client transport options: None

**Outputs**

- Client return type: `({ id: number; public_repo: boolean; title: string; type: "individual" | "group"; invite_link: string; invitations_enabled: boolean; slug: string; students_are_repo_admins: boolean; feedback_pull_requests_enabled: boole...`
- OpenAPI response codes: `200`

```ts
import github from "@utdk/github";

type ClassroomListAssignmentsForAClassroomInput = Parameters<typeof github.classroom.listAssignmentsForAClassroom> extends [infer T, ...unknown[]] ? T : undefined;
type ClassroomListAssignmentsForAClassroomOutput = Awaited<ReturnType<typeof github.classroom.listAssignmentsForAClassroom>>;

const input: ClassroomListAssignmentsForAClassroomInput = {} as { classroom_id: number; page?: number; per_page?: number };
const result: ClassroomListAssignmentsForAClassroomOutput = await github.classroom.listAssignmentsForAClassroom(input);

// Result shape (from schema): ({ id: number; public_repo: boolean; title: string; type: "individual" | "group"; invite_link: string; invitations_enabled: boolean; slug: string; students_are_repo_admins: boolean; feedback_pull_requests_enabled: boole...
```


<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->

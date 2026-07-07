/**
 * Shared test fixtures for the Cognito access-token auth model.
 *
 * The auth middleware verifies a Cognito access token (mocked via
 * `setCognitoVerifier`) and reads the active workspace + membership + groups
 * from DynamoDB (mocked via the per-file `mockDdbSend`). `setupAuth` wires
 * both for a set of test users so routes can be exercised end-to-end.
 */

import { vi } from "vitest";
import { setCognitoVerifier } from "../src/middleware/auth.js";

export interface TestUser {
  /** Cognito sub. */
  sub: string;
  /** Bearer token the client sends; the verifier maps token → sub. */
  token: string;
  /** Workspace role, default "admin". */
  role?: string;
  /** Active workspace, default `defaultWorkspaceId`. */
  workspaceId?: string;
  /** Group ids in the active workspace, default []. */
  groupIds?: string[];
}

export interface SetupAuthOptions {
  /** The per-file `vi.fn()` backing the DDB document client mock. */
  mockDdbSend: ReturnType<typeof vi.fn>;
  users: TestUser[];
  /** Default workspace id, default "ws-test". */
  defaultWorkspaceId?: string;
}

interface ResolvedUser {
  sub: string;
  token: string;
  role: string;
  workspaceId: string;
  groupIds: string[];
}

/**
 * Configure the Cognito verifier mock and the DDB mock for the given users.
 * Each user maps token → sub (verifier) and (workspaceId, sub) → role (Memberships),
 * with `Sessions[sub].currentWorkspaceId` returning the user's workspace.
 */
export function setupAuth(opts: SetupAuthOptions): void {
  const defaultWorkspaceId = opts.defaultWorkspaceId ?? "ws-test";
  const users: ResolvedUser[] = opts.users.map((u) => ({
    sub: u.sub,
    token: u.token,
    role: u.role ?? "admin",
    workspaceId: u.workspaceId ?? defaultWorkspaceId,
    groupIds: u.groupIds ?? [],
  }));

  const tokenToUser = new Map(users.map((u) => [u.token, u]));

  setCognitoVerifier({
    verify: vi.fn().mockImplementation((token: string) => {
      const user = tokenToUser.get(token);
      if (!user) throw new Error("invalid token");
      return Promise.resolve({ sub: user.sub });
    }),
    hydrate: vi.fn().mockResolvedValue(undefined),
  });

  opts.mockDdbSend.mockReset();
  opts.mockDdbSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
    const input = cmd.input ?? {};
    const table = input["TableName"] as string | undefined;
    const key = input["Key"] as Record<string, string> | undefined;

    if (table === "Sessions") {
      if (key && typeof key["userSub"] === "string") {
        const user = users.find((u) => u.sub === key["userSub"]);
        if (user) {
          return Promise.resolve({
            Item: {
              userSub: user.sub,
              currentWorkspaceId: user.workspaceId,
              expiresAt: Math.floor(Date.now() / 1000) + 3600,
            },
          });
        }
      }
      return Promise.resolve({});
    }

    if (table === "Memberships") {
      if (key) {
        const user = users.find(
          (u) => u.workspaceId === key["workspaceId"] && u.sub === key["userSub"],
        );
        if (user) {
          return Promise.resolve({
            Item: { workspaceId: user.workspaceId, userSub: user.sub, role: user.role },
          });
        }
      }
      return Promise.resolve({});
    }

    if (table === "UserGroups") {
      const values = input["ExpressionAttributeValues"] as Record<string, string> | undefined;
      const pk = values?.[":pk"];
      if (pk) {
        const user = users.find((u) => `${u.workspaceId}#${u.sub}` === pk);
        if (user) {
          return Promise.resolve({
            Items: user.groupIds.map((g) => ({
              "workspaceId#userSub": pk,
              groupId: g,
            })),
          });
        }
      }
      return Promise.resolve({ Items: [] });
    }

    return Promise.resolve({});
  });
}

/** Build a Bearer header value. */
export function bearer(token: string): string {
  return `Bearer ${token}`;
}

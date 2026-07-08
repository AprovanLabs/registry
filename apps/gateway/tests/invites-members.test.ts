/**
 * Integration tests for invites and members routes.
 *
 * DynamoDB is mocked at the module level (vi.mock) so these tests run without
 * a real DynamoDB instance.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createApp } from "../src/app.js";
import { resetCognitoVerifier } from "../src/middleware/auth.js";
import { bearer, setupAuth } from "./helpers.js";

// ---------------------------------------------------------------------------
// Mock DynamoDB client
// ---------------------------------------------------------------------------

const mockSend = vi.fn();

vi.mock("../src/db/client.js", () => ({
  getDynamoDocClient: () => ({ send: mockSend }),
  resetDynamoDocClient: vi.fn(),
}));

// Mock SES email so tests don't hit real SES
vi.mock("../src/email.js", () => ({
  sendInviteEmail: vi.fn().mockResolvedValue(undefined),
  setSesClient: vi.fn(),
  resetSesClient: vi.fn(),
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const app = createApp();

const WS = "ws-test";
const ADMIN_SUB = "admin-sub";
const ADMIN_TOKEN = "admin-tok";
const MEMBER_SUB = "member-sub";
const MEMBER_TOKEN = "member-tok";
const INVITE_TOKEN = "abc123deadbeef";

function req(method: string, path: string, token: string, body?: unknown): Request {
  return new Request(`http://localhost${path}`, {
    method,
    headers: {
      Authorization: bearer(token),
      "Content-Type": "application/json",
    },
    body: body != null ? JSON.stringify(body) : undefined,
  });
}

beforeEach(() => {
  setupAuth({
    mockDdbSend: mockSend,
    users: [
      { sub: ADMIN_SUB, token: ADMIN_TOKEN, role: "admin" },
      { sub: MEMBER_SUB, token: MEMBER_TOKEN, role: "member" },
    ],
  });
});

afterEach(() => {
  vi.clearAllMocks();
  resetCognitoVerifier();
});

// ---------------------------------------------------------------------------
// GET /members
// ---------------------------------------------------------------------------

describe("GET /members", () => {
  it("returns member list for admin", async () => {
    mockSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const input = cmd.input ?? {};
      const table = input["TableName"] as string | undefined;

      if (table === "Sessions") {
        return Promise.resolve({
          Item: { userSub: ADMIN_SUB, currentWorkspaceId: WS, expiresAt: Math.floor(Date.now() / 1000) + 3600 },
        });
      }
      if (table === "Memberships") {
        const key = input["Key"] as Record<string, string> | undefined;
        if (key?.["userSub"] === ADMIN_SUB) {
          return Promise.resolve({ Item: { workspaceId: WS, userSub: ADMIN_SUB, role: "admin" } });
        }
        // listMembers query
        if (input["KeyConditionExpression"]) {
          return Promise.resolve({
            Items: [
              { workspaceId: WS, userSub: ADMIN_SUB, role: "admin", createdAt: "2026-01-01T00:00:00Z" },
              { workspaceId: WS, userSub: MEMBER_SUB, role: "member", createdAt: "2026-01-02T00:00:00Z" },
            ],
          });
        }
        return Promise.resolve({});
      }
      if (table === "UserGroups") {
        return Promise.resolve({ Items: [] });
      }
      return Promise.resolve({});
    });

    const res = await app.fetch(req("GET", "/members", ADMIN_TOKEN));
    expect(res.status).toBe(200);
    const body = await res.json() as { members: Array<{ userSub: string; role: string }> };
    expect(body.members).toHaveLength(2);
    expect(body.members[0].userSub).toBe(ADMIN_SUB);
    expect(body.members[1].userSub).toBe(MEMBER_SUB);
  });

  it("rejects non-admin", async () => {
    const res = await app.fetch(req("GET", "/members", MEMBER_TOKEN));
    expect(res.status).toBe(403);
  });
});

// ---------------------------------------------------------------------------
// DELETE /members/:userSub
// ---------------------------------------------------------------------------

describe("DELETE /members/:userSub", () => {
  it("removes a member", async () => {
    mockSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const input = cmd.input ?? {};
      const table = input["TableName"] as string | undefined;
      const key = input["Key"] as Record<string, string> | undefined;
      if (table === "Sessions") {
        return Promise.resolve({
          Item: { userSub: ADMIN_SUB, currentWorkspaceId: WS, expiresAt: Math.floor(Date.now() / 1000) + 3600 },
        });
      }
      if (table === "Memberships") {
        // requireAuth looks up the admin; removeMember looks up the target
        if (key?.["userSub"] === ADMIN_SUB) {
          return Promise.resolve({ Item: { workspaceId: WS, userSub: ADMIN_SUB, role: "admin" } });
        }
        if (key?.["userSub"] === MEMBER_SUB) {
          return Promise.resolve({ Item: { workspaceId: WS, userSub: MEMBER_SUB, role: "member" } });
        }
        return Promise.resolve({});
      }
      if (table === "UserGroups") return Promise.resolve({ Items: [] });
      return Promise.resolve({});
    });

    const res = await app.fetch(req("DELETE", `/members/${MEMBER_SUB}`, ADMIN_TOKEN));
    expect(res.status).toBe(200);
    const body = await res.json() as { removed: boolean };
    expect(body.removed).toBe(true);
  });

  it("rejects self-removal", async () => {
    const res = await app.fetch(req("DELETE", `/members/${ADMIN_SUB}`, ADMIN_TOKEN));
    expect(res.status).toBe(400);
  });

  it("returns 404 when member not found", async () => {
    mockSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const input = cmd.input ?? {};
      const table = input["TableName"] as string | undefined;
      if (table === "Sessions") {
        return Promise.resolve({
          Item: { userSub: ADMIN_SUB, currentWorkspaceId: WS, expiresAt: Math.floor(Date.now() / 1000) + 3600 },
        });
      }
      if (table === "Memberships") {
        const key = input["Key"] as Record<string, string> | undefined;
        if (key?.["userSub"] === ADMIN_SUB) {
          return Promise.resolve({ Item: { workspaceId: WS, userSub: ADMIN_SUB, role: "admin" } });
        }
        return Promise.resolve({});
      }
      if (table === "UserGroups") return Promise.resolve({ Items: [] });
      return Promise.resolve({});
    });

    const res = await app.fetch(req("DELETE", `/members/nonexistent`, ADMIN_TOKEN));
    expect(res.status).toBe(404);
  });
});

// ---------------------------------------------------------------------------
// POST /invites
// ---------------------------------------------------------------------------

describe("POST /invites", () => {
  it("creates an invite and returns 201", async () => {
    const res = await app.fetch(
      req("POST", "/invites", ADMIN_TOKEN, {
        email: "alice@example.com",
        role: "member",
        groupIds: [],
      }),
    );
    expect(res.status).toBe(201);
    const body = await res.json() as { email: string; role: string; inviteToken: string };
    expect(body.email).toBe("alice@example.com");
    expect(body.role).toBe("member");
    expect(typeof body.inviteToken).toBe("string");
  });

  it("rejects missing email", async () => {
    const res = await app.fetch(
      req("POST", "/invites", ADMIN_TOKEN, { role: "member" }),
    );
    expect(res.status).toBe(400);
  });

  it("rejects non-admin", async () => {
    const res = await app.fetch(
      req("POST", "/invites", MEMBER_TOKEN, { email: "bob@example.com" }),
    );
    expect(res.status).toBe(403);
  });
});

// ---------------------------------------------------------------------------
// GET /invites
// ---------------------------------------------------------------------------

describe("GET /invites", () => {
  it("returns pending invites for admin", async () => {
    mockSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const input = cmd.input ?? {};
      const table = input["TableName"] as string | undefined;
      if (table === "Sessions") {
        return Promise.resolve({
          Item: { userSub: ADMIN_SUB, currentWorkspaceId: WS, expiresAt: Math.floor(Date.now() / 1000) + 3600 },
        });
      }
      if (table === "Memberships") {
        return Promise.resolve({ Item: { workspaceId: WS, userSub: ADMIN_SUB, role: "admin" } });
      }
      if (table === "UserGroups") return Promise.resolve({ Items: [] });
      if (table === "Invites") {
        return Promise.resolve({
          Items: [
            {
              inviteToken: INVITE_TOKEN,
              workspaceId: WS,
              email: "alice@example.com",
              role: "member",
              groupIds: [],
              invitedBy: ADMIN_SUB,
              createdAt: "2026-07-08T00:00:00Z",
              expiresAt: Math.floor(Date.now() / 1000) + 86400,
            },
          ],
        });
      }
      return Promise.resolve({});
    });

    const res = await app.fetch(req("GET", "/invites", ADMIN_TOKEN));
    expect(res.status).toBe(200);
    const body = await res.json() as { invites: Array<{ email: string }> };
    expect(body.invites).toHaveLength(1);
    expect(body.invites[0].email).toBe("alice@example.com");
  });
});

// ---------------------------------------------------------------------------
// POST /invites/:token/accept
// ---------------------------------------------------------------------------

describe("POST /invites/:token/accept", () => {
  it("accepts a valid invite and creates a membership", async () => {
    mockSend.mockImplementation((cmd: { input?: Record<string, unknown> }) => {
      const input = cmd.input ?? {};
      const table = input["TableName"] as string | undefined;
      const key = input["Key"] as Record<string, string> | undefined;

      if (table === "Invites" && key?.["inviteToken"] === INVITE_TOKEN) {
        return Promise.resolve({
          Item: {
            inviteToken: INVITE_TOKEN,
            workspaceId: WS,
            email: "alice@example.com",
            role: "member",
            groupIds: ["g1"],
            invitedBy: ADMIN_SUB,
            createdAt: "2026-07-08T00:00:00Z",
            expiresAt: Math.floor(Date.now() / 1000) + 86400,
          },
        });
      }
      if (table === "Memberships" && input["Item"]) return Promise.resolve({});
      if (table === "UserGroups" && input["Item"]) return Promise.resolve({});
      return Promise.resolve({});
    });

    const res = await app.fetch(
      req("POST", `/invites/${INVITE_TOKEN}/accept`, ADMIN_TOKEN),
    );
    expect(res.status).toBe(200);
    const body = await res.json() as { workspaceId: string; role: string };
    expect(body.workspaceId).toBe(WS);
    expect(body.role).toBe("member");
  });

  it("returns 401 when no auth header", async () => {
    const res = await app.fetch(
      new Request(`http://localhost/invites/${INVITE_TOKEN}/accept`, { method: "POST" }),
    );
    expect(res.status).toBe(401);
  });

  it("returns 404 for expired/missing invite", async () => {
    mockSend.mockResolvedValue({});

    const res = await app.fetch(
      req("POST", "/invites/nonexistent/accept", ADMIN_TOKEN),
    );
    expect(res.status).toBe(404);
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import type { PostConfirmationTriggerEvent } from "aws-lambda";

const sendMock = vi.fn();

vi.mock("@aws-sdk/client-dynamodb", () => ({
  DynamoDBClient: vi.fn().mockImplementation(() => ({})),
  ConditionalCheckFailedException: class ConditionalCheckFailedException extends Error {
    name = "ConditionalCheckFailedException";
  },
}));

vi.mock("@aws-sdk/lib-dynamodb", () => ({
  DynamoDBDocumentClient: {
    from: vi.fn().mockReturnValue({ send: sendMock }),
  },
  PutCommand: vi.fn().mockImplementation((input) => ({ input })),
  QueryCommand: vi.fn().mockImplementation((input) => ({ input })),
  DeleteCommand: vi.fn().mockImplementation((input) => ({ input })),
}));

vi.stubGlobal("crypto", {
  randomUUID: vi.fn().mockReturnValue("test-workspace-uuid"),
});

function makeEvent(email: string): PostConfirmationTriggerEvent {
  return {
    version: "1",
    triggerSource: "PostConfirmation_ConfirmSignUp",
    region: "us-east-1",
    userPoolId: "us-east-1_test",
    userName: "test-sub",
    callerContext: { awsSdkVersion: "1", clientId: "client" },
    request: { userAttributes: { email, sub: "test-sub" } },
    response: {},
  } as unknown as PostConfirmationTriggerEvent;
}

describe("post-confirmation handler", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.USERS_TABLE_NAME = "users-table";
    process.env.WORKSPACES_TABLE_NAME = "workspaces-table";
    process.env.MEMBERSHIPS_TABLE_NAME = "memberships-table";
    process.env.INVITES_TABLE_NAME = "invites-table";
  });

  it("writes new workspace with free-tier plan attributes when no invite exists", async () => {
    // user created OK, no invite found
    sendMock
      .mockResolvedValueOnce({}) // PutCommand — users table
      .mockResolvedValueOnce({ Items: [] }) // QueryCommand — invites table
      .mockResolvedValueOnce({}) // PutCommand — workspaces table
      .mockResolvedValueOnce({}); // PutCommand — memberships table

    const { handler } = await import("./post-confirmation.js");
    const event = makeEvent("alice@example.com");
    await handler(event);

    const { PutCommand } = await import("@aws-sdk/lib-dynamodb");
    const calls = vi.mocked(PutCommand).mock.calls;

    // Second PutCommand is the workspace write (first is users table)
    const workspaceCall = calls[1][0] as {
      TableName: string;
      Item: Record<string, unknown>;
    };

    expect(workspaceCall.TableName).toBe("workspaces-table");
    expect(workspaceCall.Item).toMatchObject({
      workspaceId: "test-workspace-uuid",
      name: "alice@example.com's workspace",
      plan: "free",
      limits: {
        dailyChatCap: 50,
        maxModels: ["openrouter/auto"],
        maxToolSteps: 5,
        maxTokensPerRequest: 4096,
      },
      features: {
        advancedTools: false,
        customPrompts: false,
      },
    });
    expect(typeof workspaceCall.Item.createdAt).toBe("string");
    expect(typeof workspaceCall.Item.updatedAt).toBe("string");
    expect(workspaceCall.Item.createdAt).toBe(workspaceCall.Item.updatedAt);
  });

  it("does not create a workspace when user joins via invite", async () => {
    sendMock
      .mockResolvedValueOnce({}) // PutCommand — users table
      .mockResolvedValueOnce({
        Items: [
          {
            workspaceId: "existing-workspace",
            role: "member",
            inviteToken: "tok",
          },
        ],
      }) // QueryCommand — invites
      .mockResolvedValueOnce({}) // PutCommand — memberships table
      .mockResolvedValueOnce({}); // DeleteCommand — invites table

    const { handler } = await import("./post-confirmation.js");
    const event = makeEvent("bob@example.com");
    await handler(event);

    const { PutCommand } = await import("@aws-sdk/lib-dynamodb");
    const putCalls = vi.mocked(PutCommand).mock.calls as Array<
      [{ TableName: string }]
    >;

    const workspacePuts = putCalls.filter(
      ([args]) => args.TableName === "workspaces-table",
    );
    expect(workspacePuts).toHaveLength(0);
  });

  it("skips non-signup trigger sources", async () => {
    const { handler } = await import("./post-confirmation.js");
    const event = makeEvent("charlie@example.com");
    (event as unknown as Record<string, unknown>).triggerSource =
      "PostConfirmation_ConfirmForgotPassword";
    await handler(event);
    expect(sendMock).not.toHaveBeenCalled();
  });
});

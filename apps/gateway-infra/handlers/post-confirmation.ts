import {
  DynamoDBClient,
  ConditionalCheckFailedException,
} from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  QueryCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import type { PostConfirmationTriggerEvent } from "aws-lambda";

const baseClient = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(baseClient);

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var ${name}`);
  return value;
}

const USERS_TABLE = () => requireEnv("USERS_TABLE_NAME");
const WORKSPACES_TABLE = () => requireEnv("WORKSPACES_TABLE_NAME");
const MEMBERSHIPS_TABLE = () => requireEnv("MEMBERSHIPS_TABLE_NAME");
const INVITES_TABLE = () => requireEnv("INVITES_TABLE_NAME");

export const handler = async (
  event: PostConfirmationTriggerEvent,
): Promise<PostConfirmationTriggerEvent> => {
  if (event.triggerSource !== "PostConfirmation_ConfirmSignUp") {
    return event;
  }

  const sub = event.userName;
  const email = event.request.userAttributes.email;
  if (!email) return event;

  const now = new Date().toISOString();

  try {
    await ddb.send(
      new PutCommand({
        TableName: USERS_TABLE(),
        Item: { sub, email, createdAt: now },
        ConditionExpression: "attribute_not_exists(sub)",
      }),
    );
  } catch (err) {
    if (err instanceof ConditionalCheckFailedException) {
      return event;
    }
    throw err;
  }

  const inviteResult = await ddb.send(
    new QueryCommand({
      TableName: INVITES_TABLE(),
      IndexName: "ByEmailWorkspace",
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: { ":email": email },
      Limit: 1,
    }),
  );

  if (inviteResult.Items && inviteResult.Items.length > 0) {
    const invite = inviteResult.Items[0] as Record<string, unknown>;

    await ddb.send(
      new PutCommand({
        TableName: MEMBERSHIPS_TABLE(),
        Item: {
          workspaceId: invite.workspaceId as string,
          userSub: sub,
          role: (invite.role as string) ?? "member",
          createdAt: now,
        },
      }),
    );

    await ddb.send(
      new DeleteCommand({
        TableName: INVITES_TABLE(),
        Key: { inviteToken: invite.inviteToken as string },
      }),
    );
  } else {
    const workspaceId = crypto.randomUUID();
    const workspaceName = `${email}'s workspace`;

    await ddb.send(
      new PutCommand({
        TableName: WORKSPACES_TABLE(),
        Item: {
          workspaceId,
          name: workspaceName,
          createdAt: now,
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
          updatedAt: now,
        },
      }),
    );

    await ddb.send(
      new PutCommand({
        TableName: MEMBERSHIPS_TABLE(),
        Item: {
          workspaceId,
          userSub: sub,
          role: "admin",
          createdAt: now,
        },
      }),
    );
  }

  return event;
};

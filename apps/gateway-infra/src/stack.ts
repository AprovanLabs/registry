import { RemovalPolicy, Stack, type StackProps, CfnOutput } from "aws-cdk-lib";
import { AttributeType, BillingMode, ProjectionType, Table } from "aws-cdk-lib/aws-dynamodb";
import { type Construct } from "constructs";
import { Auth } from "./constructs";
import { namer } from "./core/utils";

export class GatewayStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const usersTable = new Table(this, "UsersTable", {
      tableName: namer().regional("users"),
      partitionKey: { name: "sub", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    usersTable.addGlobalSecondaryIndex({
      indexName: "ByEmail",
      partitionKey: { name: "email", type: AttributeType.STRING },
      projectionType: ProjectionType.ALL,
    });

    const workspacesTable = new Table(this, "WorkspacesTable", {
      tableName: namer().regional("workspaces"),
      partitionKey: { name: "workspaceId", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const membershipsTable = new Table(this, "MembershipsTable", {
      tableName: namer().regional("memberships"),
      partitionKey: { name: "workspaceId", type: AttributeType.STRING },
      sortKey: { name: "userSub", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    membershipsTable.addGlobalSecondaryIndex({
      indexName: "ByUserSub",
      partitionKey: { name: "userSub", type: AttributeType.STRING },
      projectionType: ProjectionType.ALL,
    });

    const invitesTable = new Table(this, "InvitesTable", {
      tableName: namer().regional("invites"),
      partitionKey: { name: "inviteToken", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    invitesTable.addGlobalSecondaryIndex({
      indexName: "ByEmailWorkspace",
      partitionKey: { name: "email", type: AttributeType.STRING },
      sortKey: { name: "workspaceId", type: AttributeType.STRING },
      projectionType: ProjectionType.ALL,
    });

    const auth = new Auth(this, "Auth", {
      usersTable: usersTable,
      workspacesTable: workspacesTable,
      membershipsTable: membershipsTable,
      invitesTable: invitesTable,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    });

    new CfnOutput(this, "GATEWAY_COGNITO_USER_POOL_ID", {
      value: auth.userPool.userPoolId,
      exportName: namer().regional("cognito-user-pool-id"),
    });

    new CfnOutput(this, "GATEWAY_COGNITO_CLIENT_ID", {
      value: auth.userPoolClient.userPoolClientId,
      exportName: namer().regional("cognito-client-id"),
    });

    new CfnOutput(this, "GATEWAY_AWS_REGION", {
      value: Stack.of(this).region,
      exportName: namer().regional("aws-region"),
    });
  }
}

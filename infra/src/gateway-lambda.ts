import path from "node:path";
import { fileURLToPath } from "node:url";
import { type Namer } from "@aprovan/cdk";
import { Duration, Fn, Stack } from "aws-cdk-lib";
import { type ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

const infraDir = path.dirname(fileURLToPath(import.meta.url));

const RESERVED_LAMBDA_ENV_VARS = new Set([
  "_HANDLER",
  "_X_AMZN_TRACE_ID",
  "AWS_REGION",
  "AWS_DEFAULT_REGION",
  "AWS_EXECUTION_ENV",
  "AWS_LAMBDA_FUNCTION_NAME",
  "AWS_LAMBDA_FUNCTION_MEMORY_SIZE",
  "AWS_LAMBDA_FUNCTION_VERSION",
  "AWS_LAMBDA_INITIALIZATION_TYPE",
  "AWS_LAMBDA_LOG_GROUP_NAME",
  "AWS_LAMBDA_LOG_STREAM_NAME",
  "AWS_ACCESS_KEY",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_SESSION_TOKEN",
  "TZ",
]);

function lambdaEnv(sharedEnv: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(sharedEnv).filter(([key]) => !RESERVED_LAMBDA_ENV_VARS.has(key)),
  );
}

export interface GatewayLambdaProps {
  environmentName: string;
  names: Namer;
  credentialsTable: ITable;
  permissionsTable: ITable;
  auditTable: ITable;
  sessionsTable: ITable;
  groupsTable: ITable;
  groupPrefixGrantsTable: ITable;
  groupToolGrantsTable: ITable;
  userGroupsTable: ITable;
  sharedEnv: Record<string, string>;
}

export class GatewayLambda extends Construct {
  readonly function: NodejsFunction;
  readonly functionUrl: lambda.FunctionUrl;
  readonly functionUrlDomain: string;

  constructor(scope: Construct, id: string, props: GatewayLambdaProps) {
    super(scope, id);

    const {
      environmentName,
      names,
      sharedEnv,
      credentialsTable,
      permissionsTable,
      auditTable,
      sessionsTable,
      groupsTable,
      groupPrefixGrantsTable,
      groupToolGrantsTable,
      userGroupsTable,
    } = props;

    const environment: Record<string, string> = {
      NODE_ENV: "production",
      APROVAN_ENV: environmentName,
      STORE_BACKEND: "dynamodb",
      CREDENTIALS_TABLE: credentialsTable.tableName,
      PERMISSIONS_TABLE: permissionsTable.tableName,
      AUDIT_TABLE: auditTable.tableName,
      SESSIONS_TABLE: sessionsTable.tableName,
      GROUPS_TABLE: groupsTable.tableName,
      GROUP_PREFIX_GRANTS_TABLE: groupPrefixGrantsTable.tableName,
      GROUP_TOOL_GRANTS_TABLE: groupToolGrantsTable.tableName,
      USER_GROUPS_TABLE: userGroupsTable.tableName,
      USERGROUPS_TABLE: userGroupsTable.tableName,
      GATEWAY_REGISTRY_BASE_URL: "https://aprovan.com/registry",
      ...lambdaEnv(sharedEnv),
    };

    this.function = new NodejsFunction(this, "Function", {
      functionName: names.regional("gateway"),
      entry: path.join(infraDir, "../../apps/gateway/src/lambda.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_22_X,
      architecture: lambda.Architecture.ARM_64,
      timeout: Duration.seconds(60),
      memorySize: 1024,
      environment,
      bundling: {
        externalModules: ["better-sqlite3"],
        minify: true,
        sourceMap: true,
      },
    });

    const registryTables = [
      credentialsTable,
      permissionsTable,
      auditTable,
      sessionsTable,
      groupsTable,
      groupPrefixGrantsTable,
      groupToolGrantsTable,
      userGroupsTable,
    ];
    for (const table of registryTables) {
      table.grantReadWriteData(this.function);
    }

    for (const tableName of [
      sharedEnv["DYNAMODB_USERS_TABLE"],
      sharedEnv["DYNAMODB_WORKSPACES_TABLE"],
      sharedEnv["DYNAMODB_MEMBERSHIPS_TABLE"],
      sharedEnv["DYNAMODB_INVITES_TABLE"],
    ]) {
      if (!tableName) continue;
      Table.fromTableName(this, `Core-${tableName}`, tableName).grantReadWriteData(
        this.function,
      );
    }

    const userPoolId = sharedEnv["COGNITO_USER_POOL_ID"];
    if (userPoolId) {
      const region = Stack.of(this).region;
      this.function.addToRolePolicy(
        new iam.PolicyStatement({
          actions: [
            "cognito-idp:CreateUserPoolClient",
            "cognito-idp:DescribeUserPoolClient",
            "cognito-idp:UpdateUserPoolClient",
            "cognito-idp:DeleteUserPoolClient",
          ],
          resources: [
            `arn:aws:cognito-idp:${region}:${Stack.of(this).account}:userpool/${userPoolId}`,
          ],
        }),
      );
    }

    this.function.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["ses:SendEmail", "ses:SendRawEmail"],
        resources: ["*"],
      }),
    );

    // The Function URL is IAM-protected: an AWS Organizations policy blocks
    // public (unsigned) Function URL invocation account-wide, so unsigned
    // requests return AccessDeniedException regardless of the resource policy.
    // Access flows exclusively through CloudFront (aprovan.com/api/gateway/*),
    // which SigV4-signs each request via an Origin Access Control (OAC). The
    // matching OAC lives in the core WebStack (us-east-1); the invoke grant for
    // that signed request must live here, on the function's own account/region.
    this.functionUrl = this.function.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    });

    const stack = Stack.of(this);
    this.function.addPermission("CloudFrontOacInvoke", {
      principal: new iam.ServicePrincipal("cloudfront.amazonaws.com"),
      action: "lambda:InvokeFunctionUrl",
      functionUrlAuthType: lambda.FunctionUrlAuthType.AWS_IAM,
      // Scoped to this account's CloudFront distributions. The specific
      // distribution id lives in the core WebStack (created after this stack),
      // so a wildcard avoids a cross-repo deploy-ordering cycle.
      sourceArn: `arn:${stack.partition}:cloudfront::${stack.account}:distribution/*`,
    });

    this.functionUrlDomain = Fn.select(
      0,
      Fn.split("/", Fn.select(1, Fn.split("//", this.functionUrl.url))),
    );
  }
}

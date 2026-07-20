import { type Namer } from "@aprovan/cdk";
import { CfnOutput, RemovalPolicy, Stack, type StackProps } from "aws-cdk-lib";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Key } from "aws-cdk-lib/aws-kms";
import { BlockPublicAccess, Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { type Construct } from "constructs";
import { GatewayLambda } from "./gateway-lambda.js";

export interface RegistryAppProps extends StackProps {
  environmentName: string;
  names: Namer;
  sharedEnv: Record<string, string>;
}

export class RegistryApp extends Stack {
  constructor(scope: Construct, id: string, props: RegistryAppProps) {
    super(scope, id, props);
    const { environmentName, names, sharedEnv } = props;
    const isProd = environmentName === "prd";

    const storeTableProps = {
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true },
      deletionProtection: isProd,
      removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
    };

    // Customer-managed key for credential-payload envelope encryption
    // (gateway credentialCipher.ts). Rotation on; retained in prod so
    // encrypted payloads stay decryptable even if the stack is torn down.
    const credentialsKey = new Key(this, "CredentialsKey", {
      alias: names.regional("credentials"),
      description: "Envelope encryption for gateway credential payloads",
      enableKeyRotation: true,
      removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
    });

    const credentialsTable = new Table(this, "CredentialsTable", {
      ...storeTableProps,
      tableName: names.regional("credentials"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
    });

    new CfnOutput(this, "CREDENTIALS_TABLE_NAME", {
      value: credentialsTable.tableName,
      exportName: names.regional("credentials-table-name"),
    });
    new CfnOutput(this, "CREDENTIALS_TABLE_ARN", {
      value: credentialsTable.tableArn,
      exportName: names.regional("credentials-table-arn"),
    });

    const apiKeysTable = new Table(this, "ApiKeysTable", {
      ...storeTableProps,
      tableName: names.regional("api-keys"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
      timeToLiveAttribute: "ttl",
    });

    new CfnOutput(this, "APIKEYS_TABLE_NAME", {
      value: apiKeysTable.tableName,
      exportName: names.regional("api-keys-table-name"),
    });
    new CfnOutput(this, "APIKEYS_TABLE_ARN", {
      value: apiKeysTable.tableArn,
      exportName: names.regional("api-keys-table-arn"),
    });

    const permissionsTable = new Table(this, "PermissionsTable", {
      ...storeTableProps,
      tableName: names.regional("permissions"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
    });

    new CfnOutput(this, "PERMISSIONS_TABLE_NAME", {
      value: permissionsTable.tableName,
      exportName: names.regional("permissions-table-name"),
    });
    new CfnOutput(this, "PERMISSIONS_TABLE_ARN", {
      value: permissionsTable.tableArn,
      exportName: names.regional("permissions-table-arn"),
    });

    const auditTable = new Table(this, "AuditStoreTable", {
      ...storeTableProps,
      tableName: names.regional("audit-store"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
      timeToLiveAttribute: "ttl",
    });

    new CfnOutput(this, "AUDIT_TABLE_NAME", {
      value: auditTable.tableName,
      exportName: names.regional("audit-table-name"),
    });
    new CfnOutput(this, "AUDIT_TABLE_ARN", {
      value: auditTable.tableArn,
      exportName: names.regional("audit-table-arn"),
    });

    const sessionsTable = new Table(this, "SessionsTable", {
      ...storeTableProps,
      tableName: names.regional("sessions"),
      partitionKey: { name: "userId", type: AttributeType.STRING },
      timeToLiveAttribute: "expiresAt",
    });

    const groupsTable = new Table(this, "GroupsTable", {
      ...storeTableProps,
      tableName: names.regional("groups"),
      partitionKey: { name: "workspaceId", type: AttributeType.STRING },
      sortKey: { name: "groupId", type: AttributeType.STRING },
    });

    const groupPrefixGrantsTable = new Table(this, "GroupPrefixGrantsTable", {
      ...storeTableProps,
      tableName: names.regional("group-prefix-grants"),
      partitionKey: { name: "workspaceId#groupId", type: AttributeType.STRING },
      sortKey: { name: "pathPrefix", type: AttributeType.STRING },
    });

    const groupToolGrantsTable = new Table(this, "GroupToolGrantsTable", {
      ...storeTableProps,
      tableName: names.regional("group-tool-grants"),
      partitionKey: { name: "workspaceId#groupId", type: AttributeType.STRING },
      sortKey: { name: "provider#operation", type: AttributeType.STRING },
    });

    const userGroupsTable = new Table(this, "UserGroupsTable", {
      ...storeTableProps,
      tableName: names.regional("user-groups"),
      partitionKey: { name: "workspaceId#userId", type: AttributeType.STRING },
      sortKey: { name: "groupId", type: AttributeType.STRING },
    });

    // Workspace filesystem (WFS): version/pointer index rows in Dynamo,
    // content-addressed blobs in S3 (see apps/gateway/src/fs-store.ts).
    const fsTable = new Table(this, "FsFilesTable", {
      ...storeTableProps,
      tableName: names.regional("fs-files"),
      partitionKey: { name: "workspaceId", type: AttributeType.STRING },
      sortKey: { name: "sk", type: AttributeType.STRING },
    });

    const fsBucket = new Bucket(this, "FsBucket", {
      bucketName: names.regional("workspace-fs"),
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      autoDeleteObjects: !isProd,
    });

    new CfnOutput(this, "FS_TABLE_NAME", {
      value: fsTable.tableName,
      exportName: names.regional("fs-table-name"),
    });
    new CfnOutput(this, "FS_BUCKET_NAME", {
      value: fsBucket.bucketName,
      exportName: names.regional("fs-bucket-name"),
    });

    const gateway = new GatewayLambda(this, "Gateway", {
      environmentName,
      names,
      sharedEnv,
      credentialsKey,
      credentialsTable,
      permissionsTable,
      auditTable,
      sessionsTable,
      groupsTable,
      groupPrefixGrantsTable,
      groupToolGrantsTable,
      userGroupsTable,
      fsTable,
      fsBucket,
    });

    new CfnOutput(this, "GatewayFunctionUrl", {
      value: gateway.functionUrl.url,
      exportName: names.regional("gateway-function-url"),
    });
    new CfnOutput(this, "GatewayFunctionUrlDomain", {
      value: gateway.functionUrlDomain,
      exportName: names.regional("gateway-function-url-domain"),
    });
    new CfnOutput(this, "GatewayFunctionName", {
      value: gateway.function.functionName,
    });
  }
}

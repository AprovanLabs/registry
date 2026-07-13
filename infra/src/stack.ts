import { RemovalPolicy, Stack, type StackProps, CfnOutput } from "aws-cdk-lib";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { type Construct } from "constructs";
import { ENVIRONMENT } from "./core/constants.js";
import { namer } from "./core/utils.js";

const isProd = ENVIRONMENT === "prd";

export class RegistryApp extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // ---------------------------------------------------------------------------
    // Gateway store tables (APR-317)
    //
    // All four tables share a PK (S) + SK (S) single-table key scheme so that
    // each workspace's items live under a single partition key `WS#<workspaceId>`
    // and are distinguished by SK prefix (CRED#, APIKEY#, PERM#, AUDIT#).
    //
    // PITR is always enabled. Deletion protection and RETAIN removal policy are
    // only active in prod — dev environments can be torn down freely.
    // ---------------------------------------------------------------------------

    const storeTableProps = {
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
      deletionProtection: isProd,
      removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
    };

    const credentialsTable = new Table(this, "CredentialsTable", {
      ...storeTableProps,
      tableName: namer().regional("credentials"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
    });

    new CfnOutput(this, "CREDENTIALS_TABLE_NAME", {
      value: credentialsTable.tableName,
      exportName: namer().regional("credentials-table-name"),
    });
    new CfnOutput(this, "CREDENTIALS_TABLE_ARN", {
      value: credentialsTable.tableArn,
      exportName: namer().regional("credentials-table-arn"),
    });

    const apiKeysTable = new Table(this, "ApiKeysTable", {
      ...storeTableProps,
      tableName: namer().regional("api-keys"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
      timeToLiveAttribute: "ttl",
    });

    new CfnOutput(this, "APIKEYS_TABLE_NAME", {
      value: apiKeysTable.tableName,
      exportName: namer().regional("api-keys-table-name"),
    });
    new CfnOutput(this, "APIKEYS_TABLE_ARN", {
      value: apiKeysTable.tableArn,
      exportName: namer().regional("api-keys-table-arn"),
    });

    const permissionsTable = new Table(this, "PermissionsTable", {
      ...storeTableProps,
      tableName: namer().regional("permissions"),
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
    });

    new CfnOutput(this, "PERMISSIONS_TABLE_NAME", {
      value: permissionsTable.tableName,
      exportName: namer().regional("permissions-table-name"),
    });
    new CfnOutput(this, "PERMISSIONS_TABLE_ARN", {
      value: permissionsTable.tableArn,
      exportName: namer().regional("permissions-table-arn"),
    });

    const auditTable = new Table(this, "AuditTable", {
      ...storeTableProps,
      tableName: namer().regional("audit"),
      partitionKey: { name: "workspaceId", type: AttributeType.STRING },
      sortKey: { name: "timestamp#requestId", type: AttributeType.STRING },
      timeToLiveAttribute: "expiresAt",
    });

    new CfnOutput(this, "AUDIT_TABLE_NAME", {
      value: auditTable.tableName,
      exportName: namer().regional("audit-table-name"),
    });
    new CfnOutput(this, "AUDIT_TABLE_ARN", {
      value: auditTable.tableArn,
      exportName: namer().regional("audit-table-arn"),
    });
  }
}

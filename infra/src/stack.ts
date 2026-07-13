import { type Namer } from "@aprovan/cdk";
import { RemovalPolicy, Stack, type StackProps, CfnOutput } from "aws-cdk-lib";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { type Construct } from "constructs";

export interface RegistryAppProps extends StackProps {
  environmentName: string;
  names: Namer;
}

export class RegistryApp extends Stack {
  constructor(scope: Construct, id: string, props: RegistryAppProps) {
    super(scope, id, props);
    const { environmentName, names } = props;
    const isProd = environmentName === "prd";

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

    const auditTable = new Table(this, "AuditTable", {
      ...storeTableProps,
      tableName: names.regional("audit"),
      partitionKey: { name: "workspaceId", type: AttributeType.STRING },
      sortKey: { name: "timestamp#requestId", type: AttributeType.STRING },
      timeToLiveAttribute: "expiresAt",
    });

    new CfnOutput(this, "AUDIT_TABLE_NAME", {
      value: auditTable.tableName,
      exportName: names.regional("audit-table-name"),
    });
    new CfnOutput(this, "AUDIT_TABLE_ARN", {
      value: auditTable.tableArn,
      exportName: names.regional("audit-table-arn"),
    });
  }
}

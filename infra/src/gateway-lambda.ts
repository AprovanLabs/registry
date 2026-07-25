import path from "node:path";
import { fileURLToPath } from "node:url";
import { type Namer } from "@aprovan/cdk";
import { Duration, Fn, Names, Stack } from "aws-cdk-lib";
import { type ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { type IKey } from "aws-cdk-lib/aws-kms";
import * as events from "aws-cdk-lib/aws-events";
import * as targets from "aws-cdk-lib/aws-events-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import { type IBucket } from "aws-cdk-lib/aws-s3";
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
  /** Envelope-encryption key for credential payloads (credentialCipher.ts). */
  credentialsKey: IKey;
  credentialsTable: ITable;
  permissionsTable: ITable;
  auditTable: ITable;
  sessionsTable: ITable;
  groupsTable: ITable;
  groupPrefixGrantsTable: ITable;
  groupToolGrantsTable: ITable;
  userGroupsTable: ITable;
  /** Workspace filesystem index table (fs-store.ts `FsStoreS3`). */
  fsTable: ITable;
  /** Workspace filesystem content-blob bucket. */
  fsBucket: IBucket;
  /** Record store — accumulated state (records.ts `RecordStoreDynamodb`). */
  recordsTable: ITable;
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
      recordsTable,
    } = props;

    const environment: Record<string, string> = {
      NODE_ENV: "production",
      APROVAN_ENV: environmentName,
      STORE_BACKEND: "dynamodb",
      CREDENTIALS_TABLE: credentialsTable.tableName,
      CREDENTIALS_KMS_KEY_ID: credentialsKey.keyId,
      PERMISSIONS_TABLE: permissionsTable.tableName,
      AUDIT_TABLE: auditTable.tableName,
      SESSIONS_TABLE: sessionsTable.tableName,
      GROUPS_TABLE: groupsTable.tableName,
      GROUP_PREFIX_GRANTS_TABLE: groupPrefixGrantsTable.tableName,
      GROUP_TOOL_GRANTS_TABLE: groupToolGrantsTable.tableName,
      USER_GROUPS_TABLE: userGroupsTable.tableName,
      USERGROUPS_TABLE: userGroupsTable.tableName,
      FS_TABLE: fsTable.tableName,
      FS_BUCKET: fsBucket.bucketName,
      RECORDS_TABLE: recordsTable.tableName,
      GATEWAY_REGISTRY_BASE_URL: "https://aprovan.com/registry",
      ...lambdaEnv(sharedEnv),
    };

    this.function = new NodejsFunction(this, "Function", {
      functionName: names.regional("gateway"),
      entry: path.join(infraDir, "../../apps/gateway/src/lambda.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_22_X,
      architecture: lambda.Architecture.ARM_64,
      // Streamed chat completions run for as long as the model takes, and the
      // function timeout is a hard cap on that: at 60s a long widget edit was
      // killed mid-stream. CloudFront's 60s origin timeout is per-read, so a
      // stream that keeps emitting tokens stays under it either way.
      timeout: Duration.seconds(300),
      memorySize: 1024,
      environment,
      bundling: {
        // `utdk` is external because the gateway resolves providers with a
        // template-literal dynamic import (`import(\`utdk/${provider}\`)`),
        // which esbuild cannot bundle. The package (dist + prod deps) is
        // staged into the asset's node_modules by the afterBundling hook via
        // `pnpm deploy`, so the runtime resolves it from /var/task.
        // The QuickJS sandbox variant is external because it reads its .wasm
        // file from disk relative to its own module directory at runtime;
        // the afterBundling hook copies the package (and its ffi-types dep)
        // into the asset's node_modules.
        externalModules: [
          "better-sqlite3",
          "utdk",
          "@jitl/quickjs-wasmfile-debug-asyncify",
        ],
        minify: true,
        sourceMap: true,
        commandHooks: {
          beforeBundling: () => [],
          beforeInstall: () => [],
          afterBundling: (inputDir: string, outputDir: string) => [
            // hoisted linker: a flat node_modules without the .pnpm virtual
            // store — symlinks get duplicated into real files when the asset
            // is zipped, which blew past Lambda's 250MB unzipped limit.
            `pnpm --dir "${inputDir}" --filter utdk --prod --config.node-linker=hoisted deploy "${outputDir}/node_modules/utdk"`,
            // Type declarations, source maps, and bin shims are dead weight.
            `find "${outputDir}/node_modules/utdk/dist" -type f \\( -name "*.d.ts" -o -name "*.js.map" \\) -delete`,
            `rm -rf "${outputDir}/node_modules/utdk/node_modules/.bin"`,
            // Stage the QuickJS wasm variant + its dep, dereferencing pnpm
            // symlinks. Resolved from the gateway package so the copied
            // version always matches the one the gateway was built against.
            `node -e '${[
              `const fs=require("fs"),p=require("path");`,
              `for(const m of["@jitl/quickjs-wasmfile-debug-asyncify","@jitl/quickjs-ffi-types"]){`,
              `const s=p.dirname(require.resolve(m+"/package.json",{paths:["${inputDir}/apps/gateway"]}));`,
              `fs.cpSync(s,p.join("${outputDir}","node_modules",m),{recursive:true,dereference:true});`,
              `}`,
            ].join("")}'`,
          ],
        },
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
      fsTable,
      recordsTable,
    ];
    for (const table of registryTables) {
      table.grantReadWriteData(this.function);
    }

    // WFS content blobs — includes presigned PUT/GET, which sign with the
    // function's own credentials and therefore need object-level grants.
    fsBucket.grantReadWrite(this.function);

    // Credential envelope encryption: generate data keys + unwrap them.
    credentialsKey.grantEncryptDecrypt(this.function);

    // Core identity tables live in the aprovan stack and are imported by name.
    // `fromTableName` does not know about GSIs, so `grantReadWriteData` would
    // omit `/index/*` ARNs and deny Query on ByUserId / ByEmail / etc.
    // Declare each index explicitly via `fromTableAttributes`.
    const coreTables: Array<{ envKey: string; globalIndexes?: string[] }> = [
      { envKey: "DYNAMODB_USERS_TABLE", globalIndexes: ["ByEmail"] },
      { envKey: "DYNAMODB_WORKSPACES_TABLE" },
      { envKey: "DYNAMODB_MEMBERSHIPS_TABLE", globalIndexes: ["ByUserId"] },
      {
        envKey: "DYNAMODB_INVITES_TABLE",
        globalIndexes: ["ByEmailWorkspace", "ByWorkspace"],
      },
    ];
    for (const { envKey, globalIndexes } of coreTables) {
      const tableName = sharedEnv[envKey];
      if (!tableName) continue;
      Table.fromTableAttributes(this, `Core-${tableName}`, {
        tableName,
        globalIndexes,
      }).grantReadWriteData(this.function);
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
      // Response streaming: the handler uses hono `streamHandle`
      // (awslambda.streamifyResponse), which requires RESPONSE_STREAM. Lets
      // SSE from provider chat-completion operations reach clients
      // incrementally instead of buffering the whole payload.
      invokeMode: lambda.InvokeMode.RESPONSE_STREAM,
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
    // Since October 2025, CloudFront OAC additionally requires
    // lambda:InvokeFunction on the resource policy — with only
    // InvokeFunctionUrl, OAC-signed requests pass signature validation but are
    // rejected 403 "Forbidden" at the policy check.
    this.function.addPermission("CloudFrontOacInvokeFunction", {
      principal: new iam.ServicePrincipal("cloudfront.amazonaws.com"),
      action: "lambda:InvokeFunction",
      sourceArn: `arn:${stack.partition}:cloudfront::${stack.account}:distribution/*`,
    });

    this.functionUrlDomain = Fn.select(
      0,
      Fn.split("/", Fn.select(1, Fn.split("//", this.functionUrl.url))),
    );

    // -----------------------------------------------------------------------
    // Workflow cron tick — EventBridge invokes the gateway once a minute with
    // a Function-URL-shaped event for POST /hooks/cron/tick, which runs every
    // cron-triggered workflow whose expression matches the current UTC
    // minute. The shared secret keeps the CloudFront-reachable route from
    // being triggerable by outsiders; both sides live here so no manual
    // secret management is needed.
    // -----------------------------------------------------------------------
    const cronTickSecret = Names.uniqueId(this.function);
    this.function.addEnvironment("CRON_TICK_SECRET", cronTickSecret);

    new events.Rule(this, "WorkflowCronTick", {
      ruleName: names.regional("gateway-cron-tick"),
      description: "Minute tick for gateway workflow cron triggers",
      schedule: events.Schedule.rate(Duration.minutes(1)),
      targets: [
        new targets.LambdaFunction(this.function, {
          event: events.RuleTargetInput.fromObject({
            version: "2.0",
            routeKey: "$default",
            rawPath: "/api/gateway/hooks/cron/tick",
            rawQueryString: "",
            headers: {
              "content-type": "application/json",
              "x-cron-secret": cronTickSecret,
            },
            requestContext: {
              http: {
                method: "POST",
                path: "/api/gateway/hooks/cron/tick",
                protocol: "HTTP/1.1",
                sourceIp: "127.0.0.1",
                userAgent: "eventbridge-cron",
              },
              requestId: "cron-tick",
              stage: "$default",
            },
            body: "{}",
            isBase64Encoded: false,
          }),
        }),
      ],
    });
  }
}

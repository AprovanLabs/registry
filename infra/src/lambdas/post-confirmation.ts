import * as path from "path";
import { Duration } from "aws-cdk-lib";
import { type ITable } from "aws-cdk-lib/aws-dynamodb";
import { Runtime, Architecture } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { namer } from "../core/utils";

export interface PostConfirmationLambdaProps {
  usersTable: ITable;
  workspacesTable: ITable;
  membershipsTable: ITable;
  invitesTable: ITable;
}

export class PostConfirmationLambda extends Construct {
  public readonly function: NodejsFunction;

  constructor(scope: Construct, id: string, props: PostConfirmationLambdaProps) {
    super(scope, id);

    this.function = new NodejsFunction(this, "Function", {
      functionName: namer().regional("post-confirmation"),
      runtime: Runtime.NODEJS_22_X,
      architecture: Architecture.ARM_64,
      entry: path.join(__dirname, "../../handlers/post-confirmation.ts"),
      handler: "handler",
      timeout: Duration.seconds(10),
      memorySize: 256,
      environment: {
        USERS_TABLE_NAME: props.usersTable.tableName,
        WORKSPACES_TABLE_NAME: props.workspacesTable.tableName,
        MEMBERSHIPS_TABLE_NAME: props.membershipsTable.tableName,
        INVITES_TABLE_NAME: props.invitesTable.tableName,
      },
      bundling: {
        minify: true,
        sourceMap: true,
      },
    });

    props.usersTable.grantReadWriteData(this.function);
    props.workspacesTable.grantReadWriteData(this.function);
    props.membershipsTable.grantReadWriteData(this.function);
    props.invitesTable.grantReadWriteData(this.function);
  }
}

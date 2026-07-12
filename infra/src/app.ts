#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ENVIRONMENT, PROJECT_ID } from "./core/constants";
import { namer } from "./core/utils";
import { RegistryApp } from "./stack";

const app = new cdk.App();

const stack = new RegistryApp(app, namer().regional(), {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

cdk.Tags.of(stack).add("project", PROJECT_ID);
cdk.Tags.of(stack).add("environment", ENVIRONMENT);

app.synth();

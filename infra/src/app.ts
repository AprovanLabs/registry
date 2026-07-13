#!/usr/bin/env node
import { loadAprovanEnv } from "@aprovan/main";
import * as cdk from "aws-cdk-lib";
import { ENVIRONMENT, PROJECT_ID } from "./core/constants.js";
import { namer } from "./core/utils.js";
import { RegistryApp } from "./stack.js";

await loadAprovanEnv(process.env["ENVIRONMENT"] ?? "prd");
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

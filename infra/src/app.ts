#!/usr/bin/env node
import { namer, resolveEnv } from "@aprovan/cdk";
import { loadAprovanEnv } from "@aprovan/node";
import * as cdk from "aws-cdk-lib";
import { RegistryApp } from "./stack.js";

await loadAprovanEnv(process.env["ENVIRONMENT"] ?? "prd");
const app = new cdk.App();
const { environmentName, env } = resolveEnv();
const names = namer({
  environment: environmentName,
  region: env.region,
  projectId: "registry",
});

const stack = new RegistryApp(app, names.regional(), {
  env,
  environmentName,
  names,
});

cdk.Tags.of(stack).add("project", "registry");
cdk.Tags.of(stack).add("environment", environmentName);

app.synth();

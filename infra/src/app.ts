#!/usr/bin/env node
import "source-map-support/register.js";
import { SSMClient } from "@aws-sdk/client-ssm";
import { loadAprovanEnv } from "@aprovan/node";
import { namer, resolveEnv } from "@aprovan/cdk";
import * as cdk from "aws-cdk-lib";
import { RegistryApp } from "./stack.js";

const app = new cdk.App();
const { environmentName, env } = resolveEnv();
const names = namer({
  environment: environmentName,
  region: env.region,
  projectId: "registry",
});

let sharedEnv: Record<string, string> = {};
try {
  sharedEnv = await loadAprovanEnv(environmentName, {
    client: new SSMClient({ region: env.region }),
  });
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.warn(
    `[registry-infra] Could not load /aprovan/${environmentName}/env from SSM: ${message}`,
  );
}

const stack = new RegistryApp(app, names.regional(), {
  env,
  environmentName,
  names,
  sharedEnv,
});

cdk.Tags.of(stack).add("project", "registry");
cdk.Tags.of(stack).add("environment", environmentName);

app.synth();

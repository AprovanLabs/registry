#!/usr/bin/env node
import "source-map-support/register.js";
import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";
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

const ssm = new SSMClient({ region: env.region });

let sharedEnv: Record<string, string> = {};
try {
  sharedEnv = await loadAprovanEnv(environmentName, { client: ssm });
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.warn(
    `[registry-infra] Could not load /aprovan/${environmentName}/env from SSM: ${message}`,
  );
}

// Registry-owned env overlay. The shared parameter above is rewritten by the
// core stack's AprovanEnvironmentWriter on every core deploy, so anything the
// registry needs that core does not manage (e.g. POSTHOG_* for prompt
// management) lives in its own SecureString parameter and is merged on top.
try {
  const overlay = await ssm.send(
    new GetParameterCommand({
      Name: `/aprovan/${environmentName}/registry/env`,
      WithDecryption: true,
    }),
  );
  if (overlay.Parameter?.Value) {
    for (const line of overlay.Parameter.Value.split("\n")) {
      const eq = line.indexOf("=");
      if (eq > 0 && !line.startsWith("#")) {
        sharedEnv[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
      }
    }
  }
} catch {
  // Optional parameter — absent until first configured.
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

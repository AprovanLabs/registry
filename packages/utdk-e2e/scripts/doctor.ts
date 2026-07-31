/**
 * Report which providers are ready to run live, and why the rest are not.
 *
 * Run this before `test:live` — it answers "what will actually be tested?"
 * without spending a single API call.
 *
 *   pnpm --filter @utdk/e2e doctor
 */

import { credentialEnvKeys, envFileInUse, loadEnv, resolveProbeInputs } from "../src/env.js";
import { gatewayConfig, inspectGeneration } from "../src/flows.js";
import { PROVIDERS } from "../src/matrix.js";

const env = loadEnv();
const gateway = gatewayConfig(env);

const has = (key: string): boolean => {
  const value = env[key];
  return Boolean(value) && !/^(<.*>|changeme|todo|placeholder|xxx+)$/i.test(value!.trim());
};

type Row = { id: string; state: string; note: string };
const rows: Row[] = [];
let ready = 0;

for (const entry of [...PROVIDERS].sort((a, b) => a.id.localeCompare(b.id))) {
  const generation = inspectGeneration(entry);
  const structural: string[] = [];
  if (!generation.hasDirectory) structural.push("no directory");
  if (!generation.exportsFactory) structural.push("no client factory");
  if (generation.operationCount === 0) structural.push("EMPTY surface");
  if (entry.probe && generation.probeOperationExists === false) structural.push("probe op missing");
  if (!generation.inRegistry) structural.push("not in registry.json");

  if (!entry.probe) {
    rows.push({ id: entry.id, state: "no-probe", note: entry.unprobed ?? "" });
    continue;
  }

  const missingCredentials = credentialEnvKeys(entry.auth).filter((key) => !has(key));
  const inputs = resolveProbeInputs(entry.probe, env);
  const missingFixtures = inputs.status === "missing" ? inputs.missing : [];
  // A var can be both credential and fixture (Twilio's account SID is the
  // Basic username *and* a path param) — report it once.
  const missing = [...new Set([...missingCredentials, ...missingFixtures])];

  if (structural.length > 0) {
    rows.push({ id: entry.id, state: "BROKEN", note: structural.join(", ") });
    continue;
  }

  if (missing.length > 0) {
    rows.push({ id: entry.id, state: "missing", note: missing.join(", ") });
    continue;
  }

  ready += 1;
  rows.push({ id: entry.id, state: "READY", note: entry.probe.op });
}

const width = Math.max(...rows.map((row) => row.id.length));
const order = { BROKEN: 0, READY: 1, missing: 2, "no-probe": 3 } as Record<string, number>;

console.log(`env file: ${envFileInUse() ?? "(none — using process env only)"}`);
console.log(`gateway:  ${gateway ? gateway.baseUrl : "(unset — flows 3 and 4 will skip)"}`);
console.log("");

for (const row of rows.sort((a, b) => (order[a.state]! - order[b.state]!) || a.id.localeCompare(b.id))) {
  console.log(`${row.id.padEnd(width)}  ${row.state.padEnd(9)}  ${row.note}`);
}

console.log("");
console.log(
  `${ready}/${PROVIDERS.filter((entry) => entry.probe).length} probed providers ready; ` +
    `${rows.filter((row) => row.state === "BROKEN").length} broken; ` +
    `${rows.filter((row) => row.state === "no-probe").length} unprobed.`,
);

#!/usr/bin/env node
/**
 * Standalone e2e smoke (task 5.7):
 * 1. Boot @aprovan/registry-server (auth none) on an ephemeral port
 * 2. Credential add / list / revoke round-trip against the server
 * 3. Build the catalog with PUBLIC_SESSION_MODE=standalone
 * 4. Assert /account/credentials HTML hosts the live CredentialsHost island
 *    (no MovedNotice / "moved to the Aprovan product app")
 *
 * Usage:
 *   pnpm --filter @aprovan/registry-web smoke:standalone
 */

import { createServer } from "node:http";
import { spawn, execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRegistryServer } from "@aprovan/registry-server";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = join(__dirname, "..");

async function listen(fetchHandler) {
  const server = createServer((req, res) => {
    void (async () => {
      try {
        const host = req.headers.host ?? "127.0.0.1";
        const url = `http://${host}${req.url ?? "/"}`;
        const headers = new Headers();
        for (const [k, v] of Object.entries(req.headers)) {
          if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(", ") : v);
        }
        let body;
        if (req.method !== "GET" && req.method !== "HEAD") {
          body = await new Promise((resolve, reject) => {
            const chunks = [];
            req.on("data", (c) => chunks.push(c));
            req.on("end", () => resolve(Buffer.concat(chunks)));
            req.on("error", reject);
          });
        }
        const request =
          body && body.length > 0
            ? new Request(url, { method: req.method, headers, body, duplex: "half" })
            : new Request(url, { method: req.method, headers });
        const response = await fetchHandler(request);
        res.writeHead(response.status, Object.fromEntries(response.headers));
        res.end(Buffer.from(await response.arrayBuffer()));
      } catch (err) {
        res.writeHead(500);
        res.end(err instanceof Error ? err.message : String(err));
      }
    })();
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const addr = server.address();
  if (!addr || typeof addr === "string") throw new Error("failed to bind");
  return { server, port: addr.port };
}

function run(cmd, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd: appRoot,
      env: { ...process.env, ...env },
      stdio: "inherit",
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited ${code}`));
    });
  });
}

async function main() {
  const registry = await createRegistryServer({
    storage: { driver: "sqlite", url: "file::memory:" },
    auth: { mode: "none" },
    tenancy: { mode: "single" },
  });

  const { server, port } = await listen((req) => registry.router.fetch(req));
  const gatewayUrl = `http://127.0.0.1:${port}`;
  console.log(`[smoke] registry-server on ${gatewayUrl} (auth=none)`);

  try {
    const configRes = await fetch(`${gatewayUrl}/auth/config`);
    if (!configRes.ok) throw new Error(`auth/config ${configRes.status}`);
    const config = await configRes.json();
    if (config.mode !== "none") throw new Error(`expected auth none, got ${config.mode}`);

    const createRes = await fetch(`${gatewayUrl}/credentials`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "smoke-provider",
        label: "smoke",
        payload: { type: "bearer_token", token: "smoke-secret" },
      }),
    });
    if (!createRes.ok) {
      throw new Error(`create credential failed: ${createRes.status} ${await createRes.text()}`);
    }
    const created = await createRes.json();
    const id = created.credential?.id;
    if (!id) throw new Error("create response missing credential.id");

    const listRes = await fetch(`${gatewayUrl}/credentials`);
    const listed = await listRes.json();
    if (!listed.credentials?.some((c) => c.id === id)) {
      throw new Error("list did not include created credential");
    }

    const delRes = await fetch(`${gatewayUrl}/credentials/${id}`, { method: "DELETE" });
    if (!delRes.ok) throw new Error(`revoke failed: ${delRes.status}`);
    console.log("[smoke] credential add/list/revoke OK");

    await run(
      "pnpm",
      ["exec", "astro", "build"],
      {
        PUBLIC_SESSION_MODE: "standalone",
        PUBLIC_GATEWAY_URL: gatewayUrl,
        PUBLIC_SITE_URL: "http://127.0.0.1",
        PUBLIC_BASE_PATH: "/",
      },
    );

    const credentialsHtml = join(appRoot, "dist/account/credentials/index.html");
    if (!existsSync(credentialsHtml)) {
      throw new Error(`missing build output: ${credentialsHtml}`);
    }
    const html = readFileSync(credentialsHtml, "utf8");
    if (/moved to the Aprovan product app/i.test(html)) {
      throw new Error("credentials page still contains moved-notice copy");
    }
    if (!/CredentialsHost|account\/CredentialsHost/i.test(html)) {
      if (!/astro-island|component-url/i.test(html)) {
        throw new Error("credentials page has no client island for CredentialsHost");
      }
      console.warn(
        "[smoke] CredentialsHost name not found in HTML (may be hashed); island present OK",
      );
    } else {
      console.log("[smoke] credentials page hosts CredentialsHost island");
    }

    const srcRoot = join(appRoot, "src");
    try {
      execSync(
        `grep -rn "PUBLIC_ACCOUNT_HOST\\|MovedNotice\\|moved to the Aprovan product app" "${srcRoot}"`,
        { stdio: "pipe" },
      );
      throw new Error("forbidden strings still present under apps/registry/src");
    } catch (err) {
      if (
        err &&
        typeof err === "object" &&
        "status" in err &&
        err.status === 1
      ) {
        console.log("[smoke] source eradication check OK");
      } else {
        throw err;
      }
    }

    console.log("[smoke] PASS");
  } finally {
    server.close();
    await registry.close();
  }
}

main().catch((err) => {
  console.error("[smoke] FAIL", err);
  process.exit(1);
});

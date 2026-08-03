/**
 * Core CLI logic for @utdk/cli.
 *
 * Usage:
 *   utdk [--output json|table] [--agent] <provider> <operation> [--flag value…]
 *   utdk login [--no-browser]
 *   utdk logout
 *   utdk --help
 *   utdk --version
 *   utdk <provider> --help
 *
 * Exit codes (matching cli-printing-press):
 *   0  success
 *   2  usage error  (unknown provider / operation, bad args)
 *   3  not found    (HTTP 404)
 *   4  auth failure (HTTP 401/403)
 *   5  API error    (HTTP 5xx)
 *   7  rate limited (HTTP 429)
 */

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";
import { createClient } from "@utdk/clients/client";
import { resolveAuth, authEnvVars } from "./auth.js";
import { getCognitoConfig, runAuthCodeFlow } from "./cognito.js";
import {
  defaultOutputMode,
  renderHelpList,
  writeOutput,
  type OutputMode,
} from "./format.js";
import {
  buildToolMetadata,
  findOperation,
  getProviderInfo,
  listOperations,
  listProviders,
  UTDK_ROOT,
  type OperationInfo,
} from "./providers.js";
import { clearTokens, readTokens } from "./token-cache.js";

// ---------------------------------------------------------------------------
// CLI version
// ---------------------------------------------------------------------------

const VERSION = "0.1.0";

// ---------------------------------------------------------------------------
// Arg parsing
// ---------------------------------------------------------------------------

type ParsedArgs = {
  output: OutputMode | undefined;
  agent: boolean;
  help: boolean;
  version: boolean;
  provider: string | undefined;
  operation: string | undefined;
  params: Record<string, unknown>;
};

function coerceValue(raw: string): unknown {
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(raw)) return Number(raw);
  return raw;
}

export function parseArgs(argv: string[]): ParsedArgs {
  const result: ParsedArgs = {
    output: undefined,
    agent: false,
    help: false,
    version: false,
    provider: undefined,
    operation: undefined,
    params: {},
  };

  const positionals: string[] = [];

  let i = 0;
  while (i < argv.length) {
    const arg = argv[i] as string;

    if (arg === "--help" || arg === "-h") {
      result.help = true;
      i++;
      continue;
    }

    if (arg === "--version" || arg === "-v") {
      result.version = true;
      i++;
      continue;
    }

    if (arg === "--agent") {
      result.agent = true;
      i++;
      continue;
    }

    if (arg === "--output" || arg === "-o") {
      const val = argv[i + 1];
      if (val === "json" || val === "table" || val === "agent") {
        result.output = val;
        i += 2;
      } else {
        i++;
      }
      continue;
    }

    if (arg.startsWith("--output=")) {
      const val = arg.slice(9);
      if (val === "json" || val === "table" || val === "agent") result.output = val;
      i++;
      continue;
    }

    if (arg.startsWith("--") && arg.length > 2) {
      const key = arg.slice(2);
      const nextArg = argv[i + 1];
      if (nextArg !== undefined && !nextArg.startsWith("--")) {
        const existing = result.params[key];
        const coerced = coerceValue(nextArg);
        if (existing !== undefined) {
          result.params[key] = Array.isArray(existing)
            ? [...existing, coerced]
            : [existing, coerced];
        } else {
          result.params[key] = coerced;
        }
        i += 2;
      } else {
        result.params[key] = true;
        i++;
      }
      continue;
    }

    positionals.push(arg);
    i++;
  }

  result.provider = positionals[0];
  result.operation = positionals[1];

  return result;
}

// ---------------------------------------------------------------------------
// Error → exit code mapping
// ---------------------------------------------------------------------------

function exitCodeForError(error: unknown): number {
  const msg = error instanceof Error ? error.message : String(error);
  const m = /Request failed: (\d+)/.exec(msg);
  if (!m) return 1;
  const status = parseInt(m[1] ?? "0", 10);
  if (status === 404) return 3;
  if (status === 401 || status === 403) return 4;
  if (status === 429) return 7;
  if (status >= 500) return 5;
  return 2;
}

// ---------------------------------------------------------------------------
// Help text builders
// ---------------------------------------------------------------------------

function printGlobalHelp(): void {
  const providers = listProviders();
  process.stdout.write(
    [
      `utdk v${VERSION} — agent-native CLI for @utdk providers`,
      "",
      "Usage:",
      "  utdk [--output json|table] [--agent] <provider> <operation> [--flag value…]",
      "  utdk login [--no-browser]",
      "  utdk logout",
      "  utdk <provider> --help",
      "  utdk --help",
      "",
      "Global flags:",
      "  --output json|table  Output format (default: table in TTY, json when piped)",
      "  --agent              Compact JSON output optimised for agent parsing",
      "  --help, -h           Show this help or provider/operation help",
      "  --version, -v        Print version",
      "",
      "Auth commands:",
      "  login                Authenticate via Cognito PKCE (caches refresh token)",
      "  logout               Clear the cached session",
      "",
      "Auth env vars (gateway proxy mode):",
      "  UTDK_GATEWAY_URL     Route all calls through this gateway",
      "  UTDK_GATEWAY_TOKEN   Bearer token override (CI/scripting; skips login)",
      "  UTDK_COGNITO_DOMAIN  Cognito hosted-UI domain for login/refresh",
      "  UTDK_COGNITO_CLIENT_ID  Cognito app client id",
      "",
      "Providers:",
    ].join("\n"),
  );
  process.stdout.write("\n");
  if (providers.length === 0) {
    process.stdout.write("  (none found — is the utdk package built?)\n");
  } else {
    const items = providers.map((name): [string, string] => {
      const info = getProviderInfo(name);
      return [name, info?.description?.slice(0, 70) ?? ""];
    });
    process.stdout.write(renderHelpList(items, 20));
    process.stdout.write("\n");
  }
  process.stdout.write("\n");
}

function printProviderHelp(providerName: string): void {
  const info = getProviderInfo(providerName);
  if (!info) {
    process.stderr.write(`Provider "${providerName}" not found.\n`);
    process.exitCode = 2;
    return;
  }

  const ops = listOperations(providerName);
  const envVars = authEnvVars(providerName, info.auth);

  process.stdout.write(
    [
      `utdk ${providerName} — ${info.description ?? ""}`,
      "",
      "Usage:",
      `  utdk ${providerName} <operation> [--flag value…]`,
      "",
      "Auth environment variables:",
      envVars.map((v) => `  ${v}`).join("\n"),
      "",
      `Operations (${ops.length} total):`,
    ].join("\n"),
  );
  process.stdout.write("\n");

  const items: Array<[string, string]> = ops.slice(0, 100).map((op) => [
    op.accessPath.join("."),
    op.summary?.slice(0, 60) ?? `${op.method} ${op.path}`,
  ]);
  process.stdout.write(renderHelpList(items, 40));
  process.stdout.write("\n");

  if (ops.length > 100) {
    process.stdout.write(
      `\n  … and ${ops.length - 100} more. Filter with: utdk ${providerName} --help | grep <term>\n`,
    );
  }
  process.stdout.write("\n");
}

function printOperationHelp(providerName: string, op: OperationInfo): void {
  const info = getProviderInfo(providerName);
  const envVars = authEnvVars(providerName, info?.auth ?? []);

  process.stdout.write(
    [
      `utdk ${providerName} ${op.accessPath.join(".")}`,
      "",
      `${op.method} ${op.path}`,
      op.summary ? `Summary: ${op.summary}` : "",
      op.description ? `\n${op.description.slice(0, 300)}` : "",
      "",
      "Parameters:",
    ]
      .filter((l) => l !== "")
      .join("\n"),
  );
  process.stdout.write("\n");

  if (op.parameters.length === 0) {
    process.stdout.write("  (none)\n");
  } else {
    const items: Array<[string, string]> = op.parameters.map((p) => [
      `--${p.name}${p.required ? " *" : ""}`,
      [p.in, p.type, p.description?.slice(0, 50)].filter(Boolean).join(" · "),
    ]);
    process.stdout.write(renderHelpList(items, 30));
    process.stdout.write("\n");
    process.stdout.write("\n  * = required\n");
  }

  process.stdout.write("\nAuth:\n");
  process.stdout.write(envVars.map((v) => `  ${v}`).join("\n"));
  process.stdout.write("\n\n");
}

// ---------------------------------------------------------------------------
// Operation executor
// ---------------------------------------------------------------------------

/** Navigate a nested object using a dot-path. */
function getNestedValue(obj: unknown, path: string[]): unknown {
  return path.reduce<unknown>((current, key) => {
    if (current !== null && typeof current === "object") {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

async function executeOperation(
  providerName: string,
  op: OperationInfo,
  params: Record<string, unknown>,
  outputMode: OutputMode,
): Promise<number> {
  // Load the OpenAPI document for this provider
  const openApiPath = join(UTDK_ROOT, providerName, "openapi.json");
  let openApiDocument: object;
  try {
    openApiDocument = JSON.parse(readFileSync(openApiPath, "utf-8")) as object;
  } catch {
    process.stderr.write(`Failed to load OpenAPI spec for "${providerName}".\n`);
    return 2;
  }

  // Resolve auth
  const info = getProviderInfo(providerName);
  const auth = resolveAuth(providerName, info?.auth ?? []);

  // Build tool metadata from the OpenAPI spec so path/query/header/body
  // params are routed correctly (provider metadata.ts files are often empty).
  const allOps = listOperations(providerName);
  const toolMetadata = buildToolMetadata(allOps);

  // Create the client
  let client: unknown;
  try {
    client = await createClient({
      name: providerName,
      openApiDocument,
      toolMetadata,
      ...(auth ? { auth } : {}),
    });
  } catch (err) {
    process.stderr.write(
      `Failed to create client for "${providerName}": ${err instanceof Error ? err.message : String(err)}\n`,
    );
    return 2;
  }

  // Navigate to the operation function
  const fn = getNestedValue(client, op.accessPath);
  if (typeof fn !== "function") {
    process.stderr.write(
      `Operation "${op.accessPath.join(".")}" not found on the ${providerName} client.\n`,
    );
    return 2;
  }

  // Call it
  let result: unknown;
  try {
    result = await (fn as (params: Record<string, unknown>) => Promise<unknown>)(params);
  } catch (err) {
    const code = exitCodeForError(err);
    const msg = err instanceof Error ? err.message : String(err);
    if (outputMode === "json" || outputMode === "agent") {
      writeOutput({ ok: false, error: msg, exitCode: code }, outputMode);
    } else {
      process.stderr.write(`Error: ${msg}\n`);
    }
    return code;
  }

  writeOutput(result, outputMode);
  return 0;
}

// ---------------------------------------------------------------------------
// Login / logout commands
// ---------------------------------------------------------------------------

/** Open a URL in the default system browser (best-effort). */
function openBrowser(url: string): void {
  try {
    const platform = process.platform;
    if (platform === "darwin") {
      execSync(`open "${url}"`, { stdio: "ignore" });
    } else if (platform === "win32") {
      execSync(`cmd /c start "" "${url}"`, { stdio: "ignore" });
    } else {
      execSync(`xdg-open "${url}"`, { stdio: "ignore" });
    }
  } catch {
    // Browser open failed; the URL was already printed to stderr
  }
}

async function runLogin(
  params: Record<string, unknown>,
  outputMode: OutputMode,
): Promise<number> {
  const config = getCognitoConfig();
  if (!config) {
    const msg =
      "UTDK_COGNITO_DOMAIN and UTDK_COGNITO_CLIENT_ID must be set to use `utdk login`.\n" +
      "Or set UTDK_GATEWAY_TOKEN to skip interactive login.";
    if (outputMode === "json" || outputMode === "agent") {
      writeOutput({ ok: false, error: msg }, outputMode);
    } else {
      process.stderr.write(`Error: ${msg}\n`);
    }
    return 2;
  }

  const noBrowser = Boolean(params["no-browser"]);

  process.stderr.write(
    `Authenticating via Cognito PKCE (port ${config.redirectPort})…\n`,
  );

  try {
    const openUrl = noBrowser
      ? (url: string) => {
          process.stdout.write(`\nOpen this URL in your browser:\n\n  ${url}\n\n`);
        }
      : (url: string) => {
          process.stderr.write(`\nOpening browser…\n`);
          openBrowser(url);
          process.stderr.write(
            `If the browser did not open, visit:\n\n  ${url}\n\n`,
          );
        };

    const tokens = await runAuthCodeFlow(config, openUrl);

    if (outputMode === "json" || outputMode === "agent") {
      writeOutput(
        {
          ok: true,
          expiresAt: tokens.expiresAt,
          message: "Logged in successfully.",
        },
        outputMode,
      );
    } else {
      process.stdout.write(
        `Logged in successfully. Session cached at ~/.local/state/utdk/tokens.json\n`,
      );
    }
    return 0;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (outputMode === "json" || outputMode === "agent") {
      writeOutput({ ok: false, error: msg }, outputMode);
    } else {
      process.stderr.write(`Login failed: ${msg}\n`);
    }
    return 4;
  }
}

async function runLogout(outputMode: OutputMode): Promise<number> {
  const had = readTokens() !== undefined;
  clearTokens();
  if (outputMode === "json" || outputMode === "agent") {
    writeOutput(
      { ok: true, message: had ? "Logged out." : "No active session." },
      outputMode,
    );
  } else {
    process.stdout.write(had ? "Logged out.\n" : "No active session.\n");
  }
  return 0;
}

// ---------------------------------------------------------------------------
// Main entry
// ---------------------------------------------------------------------------

export async function runCli(argv: string[]): Promise<number> {
  const args = parseArgs(argv);

  // Determine output mode: --agent overrides --output
  const outputMode: OutputMode = args.agent
    ? "agent"
    : (args.output ?? defaultOutputMode());

  // --version
  if (args.version) {
    process.stdout.write(`@utdk/cli v${VERSION}\n`);
    return 0;
  }

  // utdk --help
  if (args.help && !args.provider) {
    printGlobalHelp();
    return 0;
  }

  // No provider — show global help
  if (!args.provider) {
    printGlobalHelp();
    return 0;
  }

  // Built-in auth commands
  if (args.provider === "login") {
    return runLogin(args.params, outputMode);
  }
  if (args.provider === "logout") {
    return runLogout(outputMode);
  }

  // Validate provider
  const providers = listProviders();
  if (!providers.includes(args.provider)) {
    if (outputMode === "json" || outputMode === "agent") {
      writeOutput(
        {
          ok: false,
          error: `Unknown provider: ${args.provider}`,
          available: providers,
        },
        outputMode,
      );
    } else {
      process.stderr.write(
        `Unknown provider: "${args.provider}"\nAvailable: ${providers.join(", ")}\n`,
      );
    }
    return 2;
  }

  // utdk <provider> --help or utdk <provider> (no operation)
  if (args.help || !args.operation) {
    printProviderHelp(args.provider);
    return 0;
  }

  // Find the operation
  const op = findOperation(args.provider, args.operation);
  if (!op) {
    // Maybe the user wants help on what they typed
    if (outputMode === "json" || outputMode === "agent") {
      writeOutput(
        {
          ok: false,
          error: `Unknown operation: ${args.operation}`,
          provider: args.provider,
        },
        outputMode,
      );
    } else {
      process.stderr.write(
        `Unknown operation "${args.operation}" for provider "${args.provider}".\n` +
          `Run "utdk ${args.provider} --help" to list available operations.\n`,
      );
    }
    return 2;
  }

  // utdk <provider> <operation> --help
  if (args.help) {
    printOperationHelp(args.provider, op);
    return 0;
  }

  // Execute
  return executeOperation(args.provider, op, args.params, outputMode);
}

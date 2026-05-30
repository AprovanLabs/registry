/**
 * Dynamic provider loader for @utdk/mcp-server.
 *
 * Loads OpenAPI documents and auth configuration from @utdk/* provider packages.
 * Converts each OpenAPI spec to MCP-compatible tool definitions using OpenApiConverter.
 */

import { OpenApiConverter } from "@utcp/http";
import type { Tool } from "@utcp/sdk";
import type { AuthProvider } from "@utdk/common";
import { withSpan, configureTelemetry } from "@utdk/common";

import { buildAuthProvider } from "./auth.js";
import type { UtdkAuthConfig } from "./auth.js";

export interface ProviderTool {
  /** MCP tool name (e.g. "github__repos_list") */
  mcpName: string;
  /** Original UTCP tool name (e.g. "github.repos/list") */
  utcpName: string;
  description: string;
  /** JSON Schema for the tool's inputs */
  inputSchema: Record<string, unknown>;
  /** Provider name (e.g. "github") */
  providerName: string;
  /** HTTP method */
  httpMethod: string;
  /** URL template with {param} placeholders */
  urlTemplate: string;
  /** Content-Type for requests */
  contentType: string;
  /** Parameter keys that appear in the URL path */
  pathParamKeys: string[];
  /** Parameter keys that should go in query string for GET/DELETE */
  queryParamKeys: string[];
  /** Auth provider for this provider */
  auth: AuthProvider | undefined;
}

interface UtdkPackageJson {
  name: string;
  utdk?: {
    provider: string;
    auth?: UtdkAuthConfig[];
    openapi?: {
      title?: string;
    };
  };
}

interface HttpCallTemplate {
  call_template_type: string;
  http_method?: string;
  url?: string;
  content_type?: string;
}

/**
 * Extract path parameter keys from a URL template like "/repos/{owner}/{repo}".
 */
function extractPathParams(urlTemplate: string): string[] {
  const matches = urlTemplate.match(/\{([^}]+)\}/g) ?? [];
  return matches.map((m) => m.slice(1, -1));
}

/**
 * Convert a UTCP tool name to a safe MCP tool name.
 * MCP tool names must match [a-zA-Z0-9_-]+ .
 * e.g. "github.repos/list" → "github__repos_list"
 */
function toMcpToolName(utcpName: string): string {
  return utcpName.replace(/\./g, "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}

/**
 * Load a provider package's OpenAPI document and package metadata.
 * Returns null if the package cannot be found or loaded.
 */
async function loadProviderPackage(providerName: string): Promise<{
  openApiDoc: Record<string, unknown>;
  packageJson: UtdkPackageJson;
} | null> {
  const packageName = `@utdk/${providerName}`;

  try {
    // Dynamically import the provider's openapi.json via the package path
    // Provider packages expose their openapi.json as a JSON import
    const [openApiMod, pkgMod] = await Promise.all([
      import(`${packageName}/openapi.json`, { with: { type: "json" } }).catch(() => null),
      import(`${packageName}/package.json`, { with: { type: "json" } }).catch(() => null),
    ]);

    if (!openApiMod || !pkgMod) {
      // Try loading the whole package and see if it exposes the doc
      process.stderr.write(
        `[mcp-server] Warning: could not import openapi.json or package.json for ${packageName}\n`,
      );
      return null;
    }

    return {
      openApiDoc: (openApiMod as { default: Record<string, unknown> }).default as Record<string, unknown>,
      packageJson: (pkgMod as { default: UtdkPackageJson }).default as UtdkPackageJson,
    };
  } catch (err) {
    process.stderr.write(
      `[mcp-server] Warning: failed to load provider ${providerName}: ${err}\n`,
    );
    return null;
  }
}

/**
 * Convert a loaded provider's OpenAPI doc into MCP-ready tool definitions.
 */
function buildProviderTools(
  providerName: string,
  openApiDoc: Record<string, unknown>,
  auth: AuthProvider | undefined,
): ProviderTool[] {
  const converter = new OpenApiConverter(openApiDoc, {
    callTemplateName: providerName,
  });

  const manual = converter.convert();
  const tools: ProviderTool[] = [];

  for (const tool of manual.tools) {
    const template = tool.tool_call_template as HttpCallTemplate | undefined;
    if (!template) continue;

    const urlTemplate = template.url ?? "/";
    const httpMethod = (template.http_method ?? "GET").toUpperCase();
    const contentType = template.content_type ?? "application/json";
    const pathParamKeys = extractPathParams(urlTemplate);

    // Determine which input properties go in query params vs body
    // For GET/HEAD/DELETE, non-path params → query string
    // For POST/PUT/PATCH, non-path params → body
    const inputProperties = (tool.inputs?.properties ?? {}) as Record<string, unknown>;
    const allInputKeys = Object.keys(inputProperties);
    const isBodyMethod = ["POST", "PUT", "PATCH"].includes(httpMethod);
    const queryParamKeys = isBodyMethod ? [] : allInputKeys.filter((k) => !pathParamKeys.includes(k));

    tools.push({
      mcpName: toMcpToolName(tool.name),
      utcpName: tool.name,
      description: tool.description ?? `${httpMethod} ${urlTemplate}`,
      inputSchema: tool.inputs as Record<string, unknown>,
      providerName,
      httpMethod,
      urlTemplate,
      contentType,
      pathParamKeys,
      queryParamKeys,
      auth,
    });
  }

  return tools;
}

/**
 * Load all tools for a list of provider names.
 * Providers that fail to load are skipped with a warning.
 */
export async function loadProviders(providerNames: string[]): Promise<ProviderTool[]> {
  const allTools: ProviderTool[] = [];

  await Promise.all(
    providerNames.map(async (providerName) => {
      const pkg = await loadProviderPackage(providerName);
      if (!pkg) return;

      const authConfigs = pkg.packageJson.utdk?.auth ?? [];
      const auth = buildAuthProvider(providerName, authConfigs);

      const tools = buildProviderTools(providerName, pkg.openApiDoc, auth);
      process.stderr.write(
        `[mcp-server] Loaded ${tools.length} tools from @utdk/${providerName}\n`,
      );
      allTools.push(...tools);
    }),
  );

  return allTools;
}

/**
 * Parse the UTDK_PROVIDERS environment variable.
 * Returns an array of provider names (e.g. ["github", "slack", "stripe"]).
 */
export function parseProviderNames(envValue: string | undefined): string[] {
  if (!envValue?.trim()) return [];
  return envValue
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Initialize telemetry if UTDK_OTEL_EXPORTER is set.
 */
export async function initTelemetry(): Promise<void> {
  const exporter = process.env["UTDK_OTEL_EXPORTER"];
  if (exporter === "otlp" || exporter === "console") {
    await configureTelemetry({ enabled: true, exporter });
  }
}

/**
 * Execute a tool call with telemetry and auth.
 */
export async function executeTool(
  tool: ProviderTool,
  args: Record<string, unknown>,
): Promise<unknown> {
  return withSpan(
    {
      provider: tool.providerName,
      operation: tool.utcpName,
      spanName: `utdk.mcp.tool_call`,
    },
    async (span) => {
      span.setAttribute("utdk.provider", tool.providerName);
      span.setAttribute("utdk.tool", tool.utcpName);
      span.setAttribute("mcp.tool_name", tool.mcpName);

      // Build URL by substituting path parameters
      let url = tool.urlTemplate;
      const remainingArgs: Record<string, unknown> = { ...args };

      for (const pathKey of tool.pathParamKeys) {
        const value = remainingArgs[pathKey];
        if (value !== undefined) {
          url = url.replace(`{${pathKey}}`, encodeURIComponent(String(value)));
          delete remainingArgs[pathKey];
        } else {
          url = url.replace(`{${pathKey}}`, "");
        }
      }

      // Build query string for GET-style methods
      const isBodyMethod = ["POST", "PUT", "PATCH"].includes(tool.httpMethod);
      let body: string | undefined;
      const requestHeaders: Record<string, string> = {
        "Content-Type": tool.contentType,
        "User-Agent": "@utdk/mcp-server/0.1.0",
      };

      if (isBodyMethod) {
        const bodyObj: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(remainingArgs)) {
          bodyObj[k] = v;
        }
        if (Object.keys(bodyObj).length > 0) {
          body = JSON.stringify(bodyObj);
        }
      } else {
        // Query params
        const urlObj = new URL(url);
        for (const [k, v] of Object.entries(remainingArgs)) {
          if (v !== undefined && v !== null) {
            urlObj.searchParams.append(k, String(v));
          }
        }
        url = urlObj.toString();
      }

      // Apply auth
      if (tool.auth) {
        await tool.auth.applyToRequest(requestHeaders);
      }

      span.setAttribute("http.method", tool.httpMethod);
      span.setAttribute("http.url", url);

      const response = await fetch(url, {
        method: tool.httpMethod,
        headers: requestHeaders,
        body,
      });

      span.setAttribute("http.status_code", response.status);

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `Tool call failed: ${response.status} ${response.statusText}${errorBody ? `\n${errorBody}` : ""}`,
        );
      }

      // Parse response
      if (response.status === 204 || response.status === 205) {
        return null;
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("json")) {
        return response.json();
      }

      return response.text();
    },
  );
}

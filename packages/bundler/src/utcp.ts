import { createServer, type Server } from "node:http";
import { HttpCallTemplateSerializer } from "@utcp/http";
import { UtcpClient, UtcpClientConfigSerializer, type Tool } from "@utcp/sdk";
import { loadOpenApiDocument } from "./openapi.js";
import type { RegistryProvider } from "./provider.js";

export type LoadedProviderTools = {
  tools: Tool[];
};

async function serveOpenApiSpec(spec: unknown): Promise<{ url: string; server: Server }> {
  const specJson = JSON.stringify(spec);
  const server = createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(specJson);
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const addr = server.address();
  if (!addr || typeof addr === "string") {
    throw new Error("Failed to bind local spec server");
  }
  return { url: `http://127.0.0.1:${addr.port}/openapi.json`, server };
}

function closeServer(server: Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close((err) => (err ? reject(err) : resolve()));
  });
}

export async function loadProviderTools(provider: RegistryProvider): Promise<LoadedProviderTools> {
  const serializer = new HttpCallTemplateSerializer();
  let discoveryUrl = provider.url;
  let localServer: Server | undefined;

  if (provider.url.startsWith("repo://") || provider.url.startsWith("file://")) {
    const spec = await loadOpenApiDocument(provider);
    const served = await serveOpenApiSpec(spec);
    discoveryUrl = served.url;
    localServer = served.server;
  }

  const config = new UtcpClientConfigSerializer().validateDict({
    manual_call_templates: [
      serializer.validateDict({
        name: provider.name,
        call_template_type: "http",
        http_method: provider.fetch_method ?? "GET",
        url: discoveryUrl,
        content_type: provider.content_type ?? "application/json",
      }),
    ],
  });
  const client = await UtcpClient.create(process.cwd(), config);

  try {
    return {
      tools: await client.getTools(),
    };
  } finally {
    await client.close();
    if (localServer) {
      await closeServer(localServer);
    }
  }
}

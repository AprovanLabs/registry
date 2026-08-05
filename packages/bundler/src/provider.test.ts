import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getPrimaryProviderAuthOption,
  getProviderClientImportPath,
  getProviderPackageName,
  normalizeProviderName,
  resolveProvider,
  resolveProviderDocsCacheDir,
  resolveProviderDocsIndexPath,
  resolveProviderDocsManifestPath,
  resolveProviderDocsOutputDir,
  resolveProviderDocsSourcesDir,
  resolveProviderOutputDir,
  splitProviderName,
  stripProviderToolName,
} from "./provider.js";

describe("provider naming helpers", () => {
  it("splits provider names on slashes only, never dots", () => {
    expect(splitProviderName("google/drive")).toEqual(["google", "drive"]);
    expect(splitProviderName("synthetic-new")).toEqual(["synthetic-new"]);
    // A hypothetical dotted name is NOT split at the dot — dots are not a
    // provider-identity separator (the naming authority forbids them).
    expect(splitProviderName("synthetic.new")).toEqual(["synthetic.new"]);
    expect(normalizeProviderName("google/books")).toBe("google/books");
    expect(resolveProviderOutputDir("google/books", "/tmp/out")).toBe("/tmp/out/google/books");
    expect(getProviderPackageName("google/books")).toBe("@utdk/google");
    expect(getProviderClientImportPath("google/books")).toBe("../../client.js");
  });

  it("resolves providers by slash-separated name", () => {
    const providers = [{ name: "google/books", url: "https://example.com/google-books.json" }];

    expect(resolveProvider(providers, "google/books")).toEqual(providers[0]);
  });

  it("supports stripping an additional operation prefix", () => {
    expect(
      stripProviderToolName("google.books.books.volumes.list", {
        name: "google/books",
        options: {
          operations: {
            stripPrefix: "books.",
          },
        },
      }),
    ).toBe("volumes.list");
  });

  it("preserves the first configured auth method for UTCP discovery", () => {
    const apiKeyAuth = {
      auth_type: "api_key",
      api_key: "${OPENAI_API_KEY}",
      var_name: "Authorization",
      location: "header",
    };
    const oauthAuth = {
      auth_type: "oauth2",
      client_id: "${CLIENT_ID}",
      client_secret: "${CLIENT_SECRET}",
      token_url: "https://accounts.example.com/token",
    };

    expect(getPrimaryProviderAuthOption({ auth: apiKeyAuth })).toEqual(apiKeyAuth);
    expect(getPrimaryProviderAuthOption({ auth: [apiKeyAuth, oauthAuth] })).toEqual(apiKeyAuth);
  });

  it("resolves provider docs cache and output paths", () => {
    expect(resolveProviderDocsCacheDir("google/books", "/tmp/cache")).toBe("/tmp/cache/google/books");
    expect(resolveProviderDocsManifestPath("google/books", "/tmp/cache")).toBe("/tmp/cache/google/books/manifest.json");
    expect(resolveProviderDocsSourcesDir("google/books", "/tmp/cache")).toBe("/tmp/cache/google/books/sources");
    expect(resolveProviderDocsIndexPath("google/books", "/tmp/cache")).toBe("/tmp/cache/google/books/index.md");
    expect(resolveProviderDocsOutputDir("google/books", "/tmp/out")).toBe("/tmp/out/google/books/docs");
  });

  it("accepts optional platformApp boolean on provider entries", () => {
    const providers = [
      { name: "github", url: "https://example.com/github.json", platformApp: true },
      { name: "slack", url: "https://example.com/slack.json" },
    ];
    expect(resolveProvider(providers, "github").platformApp).toBe(true);
    expect(resolveProvider(providers, "slack").platformApp).toBeUndefined();
  });

  it("resolves optional apiVersions/defaultVersion/versionedBaseUrl on provider entries", () => {
    const providers = [
      {
        name: "shopify",
        url: "https://example.com/shopify.json",
        apiVersions: ["2024-10", "2025-01"],
        defaultVersion: "2025-01",
        versionedBaseUrl: "https://{shop}.myshopify.com/admin/api/{version}/graphql.json",
      },
      { name: "slack", url: "https://example.com/slack.json" },
    ];
    expect(resolveProvider(providers, "shopify").apiVersions).toEqual(["2024-10", "2025-01"]);
    expect(resolveProvider(providers, "shopify").defaultVersion).toBe("2025-01");
    expect(resolveProvider(providers, "slack").apiVersions).toBeUndefined();
  });
});

describe("registry.json apiVersions consistency (loadRegistryProviders lint)", () => {
  async function loadWith(providers: unknown[]): Promise<unknown> {
    vi.resetModules();
    vi.doMock("node:fs/promises", async () => {
      const actual = await vi.importActual<typeof import("node:fs/promises")>("node:fs/promises");
      return { ...actual, readFile: vi.fn().mockResolvedValue(JSON.stringify(providers)) };
    });
    const mod = await import("./provider.js");
    return mod.loadRegistryProviders();
  }

  afterEach(() => {
    vi.doUnmock("node:fs/promises");
    vi.resetModules();
  });

  it("accepts a provider declaring a consistent apiVersions/defaultVersion pair", async () => {
    await expect(
      loadWith([
        {
          name: "shopify",
          url: "https://example.com/shopify.json",
          apiVersions: ["2024-10", "2025-01"],
          defaultVersion: "2025-01",
        },
      ]),
    ).resolves.toBeDefined();
  });

  it("rejects apiVersions with no defaultVersion", async () => {
    await expect(
      loadWith([
        { name: "shopify", url: "https://example.com/shopify.json", apiVersions: ["2024-10"] },
      ]),
    ).rejects.toThrow(/shopify.*no defaultVersion/su);
  });

  it("rejects a defaultVersion absent from apiVersions", async () => {
    await expect(
      loadWith([
        {
          name: "shopify",
          url: "https://example.com/shopify.json",
          apiVersions: ["2024-10"],
          defaultVersion: "2025-01",
        },
      ]),
    ).rejects.toThrow(/shopify.*not one of its own apiVersions/su);
  });

  it("rejects defaultVersion or versionedBaseUrl declared without apiVersions", async () => {
    await expect(
      loadWith([
        { name: "shopify", url: "https://example.com/shopify.json", defaultVersion: "2025-01" },
      ]),
    ).rejects.toThrow(/shopify.*without apiVersions/su);
    await expect(
      loadWith([
        {
          name: "shopify",
          url: "https://example.com/shopify.json",
          versionedBaseUrl: "https://example.com/{version}",
        },
      ]),
    ).rejects.toThrow(/shopify.*without apiVersions/su);
  });
});

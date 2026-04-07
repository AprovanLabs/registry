import { describe, expect, it } from "vitest";

import {
  getProviderClientImportPath,
  getProviderPackageName,
  normalizeProviderName,
  resolveProvider,
  resolveProviderOutputDir,
  stripProviderToolName,
} from "./provider.js";

describe("provider naming helpers", () => {
  it("normalizes dotted provider names to nested paths", () => {
    expect(normalizeProviderName("google.books")).toBe("google/books");
    expect(resolveProviderOutputDir("google.books", "/tmp/out")).toBe("/tmp/out/google/books");
    expect(getProviderPackageName("google.books")).toBe("@utdk/google");
    expect(getProviderClientImportPath("google.books")).toBe("../../client.js");
  });

  it("resolves providers by dotted or slash-separated name", () => {
    const providers = [{ name: "google/books", url: "https://example.com/google-books.json" }];

    expect(resolveProvider(providers, "google.books")).toEqual(providers[0]);
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
});

import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  HOSTNAME_PACKAGE_MAP,
  assertUniqueGlobalAliases,
  assertValidProviderName,
  deriveGlobalAlias,
  resolveProviderNameFromHostname,
  sanitizeNameSegment,
} from "./naming.js";
import { REGISTRY_PATH, loadRegistryProviders } from "./provider.js";

describe("resolveProviderNameFromHostname", () => {
  it("resolves github.com to github", () => {
    expect(resolveProviderNameFromHostname("github.com")).toEqual({
      name: "github",
      packageName: "@utdk/github",
      importSpecifier: "@utdk/github",
      globalAlias: "github",
    });
  });

  it("lets an explicit entry win over the .com default: drive.google.com", () => {
    expect(resolveProviderNameFromHostname("drive.google.com")).toEqual({
      name: "google/drive",
      packageName: "@utdk/google",
      importSpecifier: "@utdk/clients/google/drive",
      globalAlias: "googleDrive",
    });
  });

  it("collapses a non-.com TLD to one segment: synthetic.new", () => {
    // Deliberately NOT in the explicit map — the full-domain-slug default
    // must produce a single segment with no boundary at the domain dot.
    expect(HOSTNAME_PACKAGE_MAP["synthetic.new"]).toBeUndefined();
    expect(resolveProviderNameFromHostname("synthetic.new")).toEqual({
      name: "synthetic-new",
      packageName: "@utdk/synthetic-new",
      importSpecifier: "@utdk/synthetic-new",
      globalAlias: "syntheticNew",
    });
  });

  it("applies the .com default to unmapped vendors: linear.com", () => {
    expect(HOSTNAME_PACKAGE_MAP["linear.com"]).toBeUndefined();
    expect(resolveProviderNameFromHostname("linear.com")).toEqual({
      name: "linear",
      packageName: "@utdk/linear",
      importSpecifier: "@utdk/linear",
      globalAlias: "linear",
    });
  });

  it("resolves api.github.com through the explicit map, not the service rule", () => {
    // Without the map entry the <service>.<vendor>.com rule would say
    // "github/api"; the reviewed entry pins the canonical name.
    expect(HOSTNAME_PACKAGE_MAP["api.github.com"]).toBe("github");
    expect(resolveProviderNameFromHostname("api.github.com").name).toBe("github");
  });

  it("resolves github.io to the single-segment full-domain slug", () => {
    expect(resolveProviderNameFromHostname("github.io")).toEqual({
      name: "github-io",
      packageName: "@utdk/github-io",
      importSpecifier: "@utdk/github-io",
      globalAlias: "githubIo",
    });
  });

  it("applies the <service>.<vendor>.com rule to unmapped subdomains", () => {
    expect(resolveProviderNameFromHostname("apiz.ebay.com").name).toBe("ebay/apiz");
  });

  it("normalizes case and trailing dots before resolving", () => {
    expect(resolveProviderNameFromHostname("GitHub.com.").name).toBe("github");
  });

  it("never produces a name containing a dot", () => {
    const hostnames = [
      ...Object.keys(HOSTNAME_PACKAGE_MAP),
      "github.com",
      "drive.google.com",
      "synthetic.new",
      "linear.com",
      "api.github.com",
      "github.io",
      "bbci.co.uk",
      "6-dot-authentiqio.appspot.com",
      "walletobjects.googleapis.com",
      "cnab-online.herokuapp.com",
    ];
    for (const hostname of hostnames) {
      const resolved = resolveProviderNameFromHostname(hostname);
      expect(resolved.name).not.toContain(".");
      expect(resolved.packageName).not.toContain(".");
      expect(resolved.importSpecifier.replace(/^@?utdk\//u, "")).not.toContain(".");
    }
  });

  it("returns names that always pass assertValidProviderName", () => {
    for (const name of Object.values(HOSTNAME_PACKAGE_MAP)) {
      expect(() => assertValidProviderName(name)).not.toThrow();
    }
  });
});

describe("assertValidProviderName", () => {
  it("accepts slash-separated dash names", () => {
    expect(() => assertValidProviderName("github")).not.toThrow();
    expect(() => assertValidProviderName("google/drive")).not.toThrow();
    expect(() => assertValidProviderName("synthetic-new")).not.toThrow();
  });

  it("rejects dotted, uppercase, and empty names", () => {
    expect(() => assertValidProviderName("synthetic.new")).toThrow(/Invalid provider name/u);
    expect(() => assertValidProviderName("google.books")).toThrow(/Invalid provider name/u);
    expect(() => assertValidProviderName("GitHub")).toThrow(/Invalid provider name/u);
    expect(() => assertValidProviderName("")).toThrow(/Invalid provider name/u);
    expect(() => assertValidProviderName("a//b")).toThrow(/Invalid provider name/u);
  });
});

describe("deriveGlobalAlias", () => {
  it("leaves single-segment names without dashes unchanged", () => {
    expect(deriveGlobalAlias("github")).toBe("github");
    expect(deriveGlobalAlias("adyen")).toBe("adyen");
  });

  it("joins three segments in camelCase", () => {
    expect(deriveGlobalAlias("google/cloud/storage")).toBe("googleCloudStorage");
  });

  it("removes internal dashes within segments", () => {
    expect(deriveGlobalAlias("google/drive")).toBe("googleDrive");
    expect(deriveGlobalAlias("adyen/checkoutservice")).toBe("adyenCheckoutservice");
    expect(deriveGlobalAlias("ably-io/platform")).toBe("ablyIoPlatform");
  });

  it("handles api- prefixed segments from leading-digit sanitization", () => {
    expect(deriveGlobalAlias("api-1forge")).toBe("api1forge");
    expect(deriveGlobalAlias("vendor/api-1forge")).toBe("vendorApi1forge");
  });
});

describe("assertUniqueGlobalAliases", () => {
  it("accepts a registry with unique aliases", () => {
    expect(() => assertUniqueGlobalAliases(["github", "google/drive", "slack"])).not.toThrow();
  });

  it("rejects case-insensitive alias collisions and names both providers", () => {
    expect(() => assertUniqueGlobalAliases(["google/drive", "googledrive"])).toThrow(
      /Duplicate global alias derived from provider names: "google\/drive" and "googledrive"/u,
    );
  });

  it("rejects aliases that are not valid JavaScript identifiers", () => {
    expect(() => assertUniqueGlobalAliases(["123bad"])).toThrow(
      /Provider "123bad" derives global alias "123bad" which is not a valid JavaScript identifier/u,
    );
  });
});

describe("data/registry.json global aliases", () => {
  it("derives a valid JS identifier for every provider name", async () => {
    const raw = await readFile(REGISTRY_PATH, "utf8");
    const providers = JSON.parse(raw) as { name: string }[];

    for (const provider of providers) {
      expect(deriveGlobalAlias(provider.name)).toMatch(/^[A-Za-z_$][\w$]*$/u);
    }
  });

  it("loads data/registry.json with unique, valid global aliases", async () => {
    const providers = await loadRegistryProviders();
    const aliases = providers.map((provider) => deriveGlobalAlias(provider.name));
    expect(new Set(aliases.map((alias) => alias.toLowerCase())).size).toBe(aliases.length);
    for (const alias of aliases) {
      expect(alias).toMatch(/^[A-Za-z_$][\w$]*$/u);
    }
  });

  it("loads data/registry.json with boolean platformApp when present", async () => {
    const providers = await loadRegistryProviders();
    for (const provider of providers) {
      if (provider.platformApp !== undefined) {
        expect(typeof provider.platformApp).toBe("boolean");
      }
    }
  });
});

describe("sanitizeNameSegment", () => {
  it("collapses non-alphanumerics and prefixes leading digits", () => {
    expect(sanitizeNameSegment("Synthetic.New")).toBe("synthetic-new");
    expect(sanitizeNameSegment("1forge")).toBe("api-1forge");
    expect(sanitizeNameSegment("--weird__value--")).toBe("weird-value");
  });
});

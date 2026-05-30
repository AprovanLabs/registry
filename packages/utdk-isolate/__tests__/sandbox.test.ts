import vm from "node:vm";
import { describe, it, expect } from "vitest";
import { createSandboxContext } from "../src/sandbox.js";

describe("createSandboxContext", () => {
  it("creates a valid vm context", () => {
    const ctx = createSandboxContext();
    expect(vm.isContext(ctx)).toBe(true);
  });

  describe("isolation — blocked host APIs", () => {
    it("does not expose process", () => {
      const ctx = createSandboxContext();
      const result = vm.runInContext("typeof process", ctx);
      expect(result).toBe("undefined");
    });

    it("does not expose process.env (guard against prototype chain leakage)", () => {
      const ctx = createSandboxContext();
      // If `process` is undefined, accessing .env should throw or be undefined
      const result = vm.runInContext(
        "try { typeof process.env } catch (e) { 'threw' }",
        ctx,
      );
      // Either 'threw' (TypeError: Cannot read properties of undefined) or 'undefined'
      expect(["threw", "undefined"]).toContain(result);
    });

    it("does not expose require", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof require", ctx)).toBe("undefined");
    });

    it("does not expose global", () => {
      const ctx = createSandboxContext();
      // `global` is Node.js-specific; not in context
      expect(vm.runInContext("typeof global", ctx)).toBe("undefined");
    });

    it("does not expose Buffer", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof Buffer", ctx)).toBe("undefined");
    });

    it("does not expose __dirname", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof __dirname", ctx)).toBe("undefined");
    });

    it("does not expose __filename", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof __filename", ctx)).toBe("undefined");
    });
  });

  describe("safe globals — accessible inside sandbox", () => {
    it("exposes JSON", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("JSON.stringify({ a: 1 })", ctx)).toBe('{"a":1}');
    });

    it("exposes Math", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("Math.max(2, 3)", ctx)).toBe(3);
    });

    it("exposes Date", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof new Date()", ctx)).toBe("object");
    });

    it("exposes URL", () => {
      const ctx = createSandboxContext();
      const href = vm.runInContext('new URL("https://example.com").href', ctx);
      expect(href).toBe("https://example.com/");
    });

    it("exposes Promise", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof Promise.resolve", ctx)).toBe("function");
    });

    it("exposes setTimeout", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof setTimeout", ctx)).toBe("function");
    });

    it("exposes TextEncoder / TextDecoder", () => {
      const ctx = createSandboxContext();
      expect(vm.runInContext("typeof TextEncoder", ctx)).toBe("function");
      expect(vm.runInContext("typeof TextDecoder", ctx)).toBe("function");
    });
  });

  describe("extraGlobals", () => {
    it("injects arbitrary globals into the context", () => {
      const ctx = createSandboxContext({
        extraGlobals: { __answer__: 42 },
      });
      expect(vm.runInContext("__answer__", ctx)).toBe(42);
    });

    it("injected bridge object is callable from the sandbox", () => {
      const bridge = { call: (args: unknown) => ({ echo: args }) };
      const ctx = createSandboxContext({
        extraGlobals: {
          __bridge__: bridge,
          __args__: { x: 1 },
        },
      });
      const result = vm.runInContext("__bridge__.call(__args__)", ctx) as { echo: unknown };
      expect(result.echo).toEqual({ x: 1 });
    });
  });

  describe("context isolation between calls", () => {
    it("state written in one context does not leak to another", () => {
      const ctx1 = createSandboxContext();
      const ctx2 = createSandboxContext();

      vm.runInContext("var secret = 'ctx1-secret'", ctx1);

      expect(vm.runInContext("typeof secret", ctx2)).toBe("undefined");
    });
  });
});

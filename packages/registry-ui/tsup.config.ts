import { defineConfig } from "tsup";

export default defineConfig({
  // `editor` is a separate entry so consumers that never render the TS editor
  // don't pull `typescript` + CodeMirror into their module graph.
  entry: ["src/index.tsx", "src/editor.tsx", "src/dependency-panel.tsx", "src/workflows-panel.tsx", "src/tailor.tsx"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["react"],
  onSuccess: "cp src/tailor.css dist/tailor.css",
});

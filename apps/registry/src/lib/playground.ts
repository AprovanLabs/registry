/**
 * Playground compilation glue: TypeScript source → sandbox-ready body +
 * runtime dependencies.
 *
 * The runtime package is compiler-agnostic; the app strips TS types with
 * sucrase (imports preserved), then hands the source to
 * `parseScriptDependencies` / `rewriteDefaultExport` from `@aprovan/runtime`.
 */

import {
  parseScriptDependencies,
  rewriteDefaultExport,
  type RuntimeDependency,
} from "@aprovan/runtime";
import { transform } from "sucrase";

export interface CompiledScript {
  /** Executable JS body: types stripped, imports removed, default export bound. */
  body: string;
  dependencies: RuntimeDependency[];
}

/** Dependencies only — cheap enough to run on every keystroke. */
export function detectDependencies(source: string): RuntimeDependency[] {
  return parseScriptDependencies(source).dependencies;
}

export function compileScript(source: string): CompiledScript {
  const javascript = transform(source, {
    transforms: ["typescript"],
    disableESTransforms: true,
  }).code;

  const { dependencies, body } = parseScriptDependencies(javascript);
  return { dependencies, body: rewriteDefaultExport(body) };
}

/** Default editor contents — the north-star script, runnable as-is. */
export const SAMPLE_SCRIPT = `import github from 'github';
import slack from 'slack';

export default async function report({ username, channel }) {
  // Look up the user and their most recent repos
  const user = await github.users.getByUsername({ username });
  const repos = await github.repos.listForUser({ username, per_page: 3 });

  console.log(\`\${user.login} has \${user.public_repos} public repos\`);

  // Post a summary to Slack
  await slack.chat.postMessage({
    channel,
    text: \`\${user.login}: \${repos.map((r) => r.name).join(', ')}\`,
  });

  return { user: user.login, repos: repos.length };
}
`;

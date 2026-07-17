/**
 * Lightweight TypeScript syntax highlighting for code the site renders —
 * snippets, import samples, and the playground editor.
 *
 * A tiny tokenizer (no grammar dependency) that emits spans styled with the
 * site's `text-syntax-*` theme tokens, so highlighted code matches the accent
 * system used everywhere else. Not a full parser — tuned for the SDK-script
 * shape of our snippets.
 */

import * as React from "react";

type TokenKind =
  | "keyword"
  | "string"
  | "comment"
  | "fn"
  | "type"
  | "number"
  | "plain";

interface Token {
  kind: TokenKind;
  text: string;
}

const KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "default",
  "async",
  "await",
  "function",
  "return",
  "const",
  "let",
  "var",
  "if",
  "else",
  "for",
  "of",
  "in",
  "while",
  "try",
  "catch",
  "finally",
  "throw",
  "new",
  "typeof",
  "class",
  "extends",
  "true",
  "false",
  "null",
  "undefined",
  "interface",
  "type",
]);

const TOKEN_PATTERN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)|(\s+|[^\sA-Za-z_$\d]+)/g;

export function tokenizeTs(code: string): Token[] {
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;
  TOKEN_PATTERN.lastIndex = 0;

  while ((match = TOKEN_PATTERN.exec(code)) !== null) {
    const [, comment, string, number, identifier, rest] = match;

    if (comment !== undefined) {
      tokens.push({ kind: "comment", text: comment });
    } else if (string !== undefined) {
      tokens.push({ kind: "string", text: string });
    } else if (number !== undefined) {
      tokens.push({ kind: "number", text: number });
    } else if (identifier !== undefined) {
      const nextChar = code.slice(TOKEN_PATTERN.lastIndex).match(/^\s*(.)/)?.[1];
      if (KEYWORDS.has(identifier)) {
        tokens.push({ kind: "keyword", text: identifier });
      } else if (nextChar === "(") {
        tokens.push({ kind: "fn", text: identifier });
      } else if (/^[A-Z]/.test(identifier)) {
        tokens.push({ kind: "type", text: identifier });
      } else {
        tokens.push({ kind: "plain", text: identifier });
      }
    } else if (rest !== undefined) {
      tokens.push({ kind: "plain", text: rest });
    }
  }

  return tokens;
}

const KIND_CLASS: Record<TokenKind, string | null> = {
  keyword: "text-syntax-keyword",
  string: "text-syntax-string",
  comment: "text-syntax-comment",
  fn: "text-syntax-fn",
  type: "text-syntax-type",
  number: "text-syntax-string",
  plain: null,
};

/** Render highlighted code spans (for use inside a <pre><code>). */
export function HighlightedCode({ code }: { code: string }): React.ReactElement {
  const tokens = React.useMemo(() => tokenizeTs(code), [code]);
  return (
    <>
      {tokens.map((token, index) =>
        KIND_CLASS[token.kind] ? (
          <span className={KIND_CLASS[token.kind]!} key={index}>
            {token.text}
          </span>
        ) : (
          <React.Fragment key={index}>{token.text}</React.Fragment>
        ),
      )}
    </>
  );
}

/**
 * CodeEditor — a syntax-highlighted textarea.
 *
 * A transparent textarea captures input on top of a highlighted <pre> that
 * renders the same text; scroll positions are synced. Zero dependencies, and
 * the highlight colors come from the site's syntax theme.
 */

import * as React from "react";
import { HighlightedCode } from "@/lib/highlight";
import { cn } from "@/lib/utils";

export interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  minHeightClass?: string;
  ariaLabel?: string;
}

const SHARED_TEXT_CLASSES =
  "px-3 py-2 font-mono text-sm leading-6 whitespace-pre-wrap break-words";

export function CodeEditor({
  value,
  onChange,
  className,
  minHeightClass = "min-h-[22rem]",
  ariaLabel = "Code editor",
}: CodeEditorProps) {
  const highlightRef = React.useRef<HTMLPreElement>(null);

  const syncScroll = (target: HTMLTextAreaElement) => {
    const highlight = highlightRef.current;
    if (!highlight) return;
    highlight.scrollTop = target.scrollTop;
    highlight.scrollLeft = target.scrollLeft;
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-input bg-transparent focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
        minHeightClass,
        className,
      )}
    >
      <pre
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 overflow-auto",
          SHARED_TEXT_CLASSES,
        )}
        ref={highlightRef}
      >
        <code>
          <HighlightedCode code={value} />
          {/* Trailing newline keeps the overlay height in sync while typing. */}
          {"\n"}
        </code>
      </pre>
      <textarea
        aria-label={ariaLabel}
        className={cn(
          "relative size-full resize-none bg-transparent text-transparent caret-foreground outline-none selection:bg-primary/20",
          SHARED_TEXT_CLASSES,
          minHeightClass,
        )}
        onChange={(event) => {
          onChange(event.target.value);
          syncScroll(event.target);
        }}
        onScroll={(event) => syncScroll(event.currentTarget)}
        spellCheck={false}
        value={value}
      />
    </div>
  );
}

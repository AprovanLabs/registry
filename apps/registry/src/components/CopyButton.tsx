import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  text: string;
  idleLabel: string;
  copiedLabel?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "xs" | "sm" | "default";
  className?: string;
};

export function CopyButton({
  text,
  idleLabel,
  copiedLabel = "Copied",
  variant = "outline",
  size = "sm",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 1600);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  async function handleCopy(): Promise<void> {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <Button
      className={className}
      onClick={() => {
        void handleCopy();
      }}
      size={size}
      type="button"
      variant={variant}
    >
      {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
      {copied ? copiedLabel : idleLabel}
    </Button>
  );
}

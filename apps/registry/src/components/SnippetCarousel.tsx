import { useEffect, useMemo, useState } from "react";

import { withBasePath } from "@/lib/site";
import { cn } from "@/lib/utils";

type SnippetItem = {
  providerPath: string;
  providerTitle: string;
  iconUrl: string | null;
  code: string;
};

type SnippetCarouselProps = {
  items: SnippetItem[];
};

export function SnippetCarousel({ items }: SnippetCarouselProps) {
  const [index, setIndex] = useState(0);
  const safeItems = useMemo(() => items.filter((item) => item.code.trim().length > 0), [items]);

  useEffect(() => {
    if (safeItems.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeItems.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [safeItems.length]);

  if (!safeItems.length) {
    return null;
  }

  const activeItem = safeItems[index]!;

  return (
    <section className="rounded-xl border bg-card p-4 ring-1 ring-foreground/5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {activeItem.iconUrl ? (
            <img
              alt={`${activeItem.providerTitle} logo`}
              className="h-5 w-5 rounded object-contain"
              loading="lazy"
              src={activeItem.iconUrl}
            />
          ) : null}
          <p className="text-sm font-medium">{activeItem.providerTitle}</p>
        </div>
        <a
          className="text-xs font-medium text-primary underline-offset-4 hover:underline"
          href={withBasePath(`/packages/${activeItem.providerPath}`)}
        >
          View provider
        </a>
      </div>
      <pre className="overflow-x-auto rounded-lg border bg-muted/60 p-3 text-xs leading-5 sm:text-sm">
        <code>{activeItem.code}</code>
      </pre>
      {safeItems.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {safeItems.map((item, itemIndex) => (
            <button
              key={item.providerPath}
              aria-label={`Show ${item.providerTitle} example`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                itemIndex === index ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60",
              )}
              onClick={() => setIndex(itemIndex)}
              type="button"
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

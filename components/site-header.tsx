"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { VisitorCount } from "@/components/visitor-count";
import { GitHubIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [affix, setAffix] = useState(false);

  useEffect(() => {
    const onScroll = () => setAffix(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background px-2 pt-2 transition-shadow duration-300",
        affix && "shadow-[0_10px_28px_-24px_rgb(0_0_0/0.6)]",
      )}
    >
      <div className="screen-line-before screen-line-after border-edge isolate mx-auto flex h-12 items-center justify-between gap-2 border-x bg-background px-2 sm:gap-4 md:max-w-3xl">
        <a
          href="#top"
          className="rounded-md px-2 font-mono text-sm font-medium transition-colors hover:text-muted-foreground"
        >
          Portfolio
        </a>

        <div className="flex items-center">
          <VisitorCount />

          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <GitHubIcon className="size-4" />
            <span className="max-sm:sr-only">GitHub</span>
          </a>

          <span className="bg-border mx-2 flex h-4 w-px" aria-hidden="true" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

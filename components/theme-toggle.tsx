"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage blocked; the choice just does not persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={ready ? dark : undefined}
      className="border-edge grid size-8 place-items-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {/* Both glyphs render; visibility follows the class on <html> so the
          control is correct on first paint, before React hydrates. */}
      <Sun className="size-4 dark:hidden" strokeWidth={1.5} aria-hidden="true" />
      <Moon
        className="hidden size-4 dark:block"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </button>
  );
}

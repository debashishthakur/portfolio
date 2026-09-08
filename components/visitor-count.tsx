"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

/* Renders nothing until the count actually arrives — no skeleton, no "0",
   and nothing at all if the store is not configured yet. */
export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/pulse")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (alive && data && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  if (count === null) return null;

  return (
    <span
      className="tnum flex h-8 items-center gap-1.5 px-2 font-mono text-xs text-muted-foreground"
      title="Unique visitors"
    >
      <Eye className="size-4" strokeWidth={1.5} aria-hidden="true" />
      {count.toLocaleString("en-US")}
      <span className="sr-only">unique visitors</span>
    </span>
  );
}

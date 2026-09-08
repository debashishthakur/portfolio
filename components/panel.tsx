import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Every block is a panel: vertical rules holding the column, hairlines top and
   bottom that run off both screen edges. */

export function Panel({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "screen-line-before screen-line-after border-edge border-x",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PanelHeader({
  title,
  count,
}: {
  title: string;
  count?: string | number;
}) {
  return (
    <header className="screen-line-after px-4 py-2">
      <h2 className="text-3xl font-semibold tracking-tight">
        {title}
        {count !== undefined ? (
          <sup className="ml-1 font-mono text-xs font-normal text-muted-foreground">
            ({count})
          </sup>
        ) : null}
      </h2>
    </header>
  );
}

export function PanelBody({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("p-4", className)}>{children}</div>;
}

/* The striped band between panels. Carries the column rules straight through
   so the vertical lines never break. */
export function HatchBand() {
  return <div className="hatch-band border-edge border-x" aria-hidden="true" />;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="border-edge flex rounded-md border bg-muted/40 px-1.5 py-0.5 font-mono text-[0.6875rem] leading-5 text-muted-foreground">
      {children}
    </li>
  );
}

/* The small square plate that fronts a metadata row or a role. */
export function Plate({ children }: { children: ReactNode }) {
  return (
    <div
      className="border-edge ring-edge grid size-6 shrink-0 place-items-center rounded-lg border bg-muted text-muted-foreground ring-1 ring-offset-1 ring-offset-background [&_svg]:size-3.5"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

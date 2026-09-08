import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Panel } from "@/components/panel";
import { links } from "@/data/profile";

/* GitHub and LinkedIn use their real tile artwork (local webp); the other two
   are drawn glyphs on a brand-appropriate ground. The inset ring keeps dark
   tiles legible on the dark page. */
const tiles: Record<
  string,
  { img: string } | { chrome: string; node: React.ReactNode }
> = {
  github: { img: "/links/github.webp" },
  linkedin: { img: "/links/linkedin.webp" },
  mail: {
    chrome: "bg-[#EA4335] text-white",
    node: <Mail className="size-6" strokeWidth={1.75} />,
  },
  file: {
    chrome: "bg-foreground text-background",
    node: <FileText className="size-6" strokeWidth={1.75} />,
  },
};

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social links</h2>
      <div className="grid sm:grid-cols-2">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          const tile = tiles[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className="group/link border-edge flex items-center gap-4 border-b p-4 pr-2 transition-colors ease-out last:border-b-0 hover:bg-muted/60 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {"img" in tile ? (
                <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tile.img}
                    alt=""
                    aria-hidden="true"
                    width={48}
                    height={48}
                    className="size-full object-cover"
                  />
                  <span
                    className="absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <div
                  className={`grid size-12 shrink-0 place-items-center rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15 ${tile.chrome}`}
                >
                  {tile.node}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="font-medium underline-offset-4 group-hover/link:underline">
                  {link.label}
                </h3>
                <p className="truncate font-mono text-sm text-muted-foreground">
                  {link.handle}
                </p>
              </div>
              <ArrowUpRight
                className="mr-2 size-4 shrink-0 text-muted-foreground transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </Panel>
  );
}

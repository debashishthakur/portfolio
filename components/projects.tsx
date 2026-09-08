import { ChevronsDownUp, FileText, Globe, Link2, Lock, Terminal } from "lucide-react";
import { Panel, PanelHeader, Tag } from "@/components/panel";
import { projects, type Project } from "@/data/profile";

/* LekhakAI's mark is the Devanagari "ले" in glow-blue on near-black violet —
   the site renders it as styled text, so this recreates it the same way
   rather than rasterizing it. The other two wear drawn glyphs on their own
   product color so the column reads as a set. */
function ProjectMark({ icon }: { icon: Project["icon"] }) {
  const chrome =
    "grid size-10 shrink-0 place-items-center rounded-xl ring-1 ring-black/10 ring-inset select-none dark:ring-white/15";

  if (icon === "lekhak") {
    return (
      <span className={`${chrome} bg-[#161022]`} aria-hidden="true">
        <span className="pb-0.5 text-lg leading-none font-bold text-[#7cc0f5] [text-shadow:0_0_8px_rgba(167,139,250,0.9)]">
          ले
        </span>
      </span>
    );
  }
  if (icon === "promptcraft") {
    return (
      <span className={`${chrome} bg-[#7C3AED] text-white`} aria-hidden="true">
        <Terminal className="size-5" strokeWidth={1.75} />
      </span>
    );
  }
  return (
    <span className={`${chrome} bg-[#DC2626] text-white`} aria-hidden="true">
      <FileText className="size-5" strokeWidth={1.75} />
    </span>
  );
}

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader title="Projects" count={projects.length} />
      <div>
        {projects.map((project) => (
          <details
            key={project.name}
            open
            className="group/project screen-line-after last:after:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50 [&::-webkit-details-marker]:hidden">
              <ProjectMark icon={project.icon} />
              <div className="min-w-0 flex-1">
                <h3 className="leading-snug font-medium">{project.name}</h3>
                <p className="tnum mt-0.5 font-mono text-xs text-muted-foreground">
                  {project.start} —{" "}
                  {project.end ?? (
                    <>
                      <span aria-hidden="true">∞</span>
                      <span className="sr-only">Present</span>
                    </>
                  )}
                </p>
              </div>
              {project.href || project.site ? (
                <Link2
                  className="size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              ) : (
                <Lock
                  className="size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
              <ChevronsDownUp
                className="size-4 shrink-0 text-muted-foreground transition-transform group-open/project:rotate-180"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </summary>

            <div className="screen-line-before px-4 py-4 sm:pl-[4.25rem]">
              <ul className="space-y-2 font-mono text-sm">
                {project.bullets.map((point) => (
                  <li
                    key={point.slice(0, 24)}
                    className="relative pl-4 leading-6 text-muted-foreground before:absolute before:top-[0.6875rem] before:left-0 before:h-px before:w-2 before:bg-muted-foreground/60"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-1.5 pt-3">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-3">
                {project.site ? (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    <Globe className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                    {project.site.replace("https://", "")}
                  </a>
                ) : null}
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    <Link2 className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                    {project.href.replace("https://", "")}
                  </a>
                ) : null}
                {!project.href && !project.site ? (
                  <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    <Lock className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                    Private repository
                  </p>
                ) : null}
              </div>
            </div>
          </details>
        ))}
      </div>
    </Panel>
  );
}

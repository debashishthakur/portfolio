import { ChevronsDownUp, Code2 } from "lucide-react";
import { Panel, PanelHeader, Plate, Tag } from "@/components/panel";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <Panel id="experience">
      <PanelHeader title="Experience" count={experience.length} />
      <div className="px-4">
        {experience.map((company) => (
          <div
            key={company.company}
            className="screen-line-after space-y-4 py-4 last:after:hidden"
          >
            <div className="flex items-center gap-3">
              {/* Company mark on a constant white plate so each logo sits on
                  the ground it was drawn for, in both themes. Wide wordmark
                  assets overflow to the right and the plate crops them down
                  to the square mark at their left edge. */}
              <span className="ring-edge flex size-6 shrink-0 items-center overflow-hidden rounded-md bg-white ring-1 select-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.logo}
                  alt=""
                  aria-hidden="true"
                  className={
                    company.logoWide
                      ? "h-full w-auto max-w-none"
                      : "size-full object-cover"
                  }
                />
              </span>
              <h3 className="text-lg leading-snug font-medium">
                {company.href ? (
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline-offset-4 hover:underline"
                  >
                    {company.company}
                  </a>
                ) : (
                  company.company
                )}
              </h3>
              {company.current ? (
                <span className="relative flex items-center justify-center">
                  <span className="ping-soft absolute inline-flex size-3 rounded-full bg-info opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-info" />
                  <span className="sr-only">Current employer</span>
                </span>
              ) : null}
            </div>

            {/* One rule threads the roles under the company mark. */}
            <div className="before:bg-border relative space-y-4 before:absolute before:left-3 before:h-full before:w-px">
              {company.roles.map((role) => (
                <details key={role.title} open className="group/role">
                  <summary className="relative z-1 mb-1 flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
                    <Plate>
                      <Code2 strokeWidth={1.5} />
                    </Plate>
                    <h4 className="flex-1 font-medium text-balance">
                      {role.title}
                    </h4>
                    <ChevronsDownUp
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-open/role:rotate-180"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="flex items-center gap-2 pl-9 font-mono text-sm text-muted-foreground">
                    <span>{role.type}</span>
                    <span className="bg-border h-4 w-px" aria-hidden="true" />
                    <span className="tnum">{role.start}</span>
                    <span>—</span>
                    <span className="tnum">
                      {role.end ?? (
                        <>
                          <span aria-hidden="true">∞</span>
                          <span className="sr-only">Present</span>
                        </>
                      )}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-2 pl-9 font-mono text-sm">
                    {role.bullets.map((point) => (
                      <li
                        key={point.slice(0, 24)}
                        className="relative pl-4 leading-6 text-muted-foreground before:absolute before:top-[0.6875rem] before:left-0 before:h-px before:w-2 before:bg-muted-foreground/60"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                    {role.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

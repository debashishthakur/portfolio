import { GraduationCap, Trophy } from "lucide-react";
import { Panel, PanelHeader, Plate } from "@/components/panel";
import { awards, education } from "@/data/profile";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader title="Education" />
      <div className="px-4 py-4">
        <div className="mb-1 flex items-center gap-3">
          <Plate>
            <GraduationCap strokeWidth={1.5} />
          </Plate>
          <h3 className="flex-1 leading-snug font-medium text-balance">
            {education.school}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2 pl-9 font-mono text-sm text-muted-foreground">
          <span className="tnum">{education.start}</span>
          <span>—</span>
          <span className="tnum">{education.end}</span>
          <span className="bg-border h-4 w-px" aria-hidden="true" />
          <span className="tnum">{education.grade}</span>
        </div>
        <p className="mt-2 pl-9 font-mono text-sm text-muted-foreground">
          {education.degree} · {education.location}
        </p>
      </div>
    </Panel>
  );
}

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader title="Awards" count={awards.length} />
      <div className="px-4">
        {awards.map((award) => (
          <div
            key={award.title}
            className="screen-line-after py-4 last:after:hidden"
          >
            <div className="mb-1 flex items-center gap-3">
              <Plate>
                <Trophy strokeWidth={1.5} />
              </Plate>
              <h3 className="flex-1 leading-snug font-medium text-balance">
                {award.title}
              </h3>
              <span className="tnum font-mono text-sm text-muted-foreground">
                {award.year}
              </span>
            </div>
            <p className="pl-9 font-mono text-sm leading-6 text-muted-foreground">
              {award.detail}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
